import React, { useState, useEffect } from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
import { useTranslation } from "react-i18next";
import { SelectWrapper } from "../../../assets/style/content/local.styled";
import { get } from "../../../services/api.services";
import { useDispatch } from "react-redux";
import { SWITCH_PLACE } from "../../../services/store/constant";

const LocalSelect = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [select, setSelect] = useState([]);
  const { Option } = Select;
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  /**
   * 請求戶數、人口數按戶別及性別
   */
  function getData() {
    get(
      "https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/110?COUNTY=%E8%87%BA%E5%8C%97%E5%B8%82"
    ).then((res) => {
      let selectArr = [];
      res.data.responseData.forEach((data) => {
        selectArr.push(data.site_id);
      });
      let noRepeatSelectArr = [...new Set(selectArr)];
      const data = mapData(noRepeatSelectArr, res.data.responseData);
      setSelect(noRepeatSelectArr);
      setData(data);
    });
  }

  /**
   * mapping 表
   * @param {selectArr: Array, allData: Array}
   * @returns {Array}
   */
  function mapData(selectArr, allData) {
    const mapData = new Map();

    let household_ordinary_m_total = 0;
    let household_ordinary_f_total = 0;
    let household_single_m_total = 0;
    let household_single_f_total = 0;

    selectArr.forEach((place) => {
      allData.forEach((data) => {
        if (place === data.site_id) {
          household_ordinary_m_total += parseInt(data.household_ordinary_m);
          household_ordinary_f_total += parseInt(data.household_ordinary_f);
          household_single_m_total += parseInt(data.household_single_m);
          household_single_f_total += parseInt(data.household_single_f);
          mapData.set(place, {
            household_ordinary_m: household_ordinary_m_total,
            household_ordinary_f: household_ordinary_f_total,
            household_single_m: household_single_m_total,
            household_single_f: household_single_f_total
          });
        }
      });
    });
    return mapData;
  }

  /**
   * 當點擊地區時
   */
  function clickPlace(place) {
    const placeData = data.get(place);

    dispatch({
      type: SWITCH_PLACE,
      data: { place, data: placeData }
    });
  }

  return (
    <SelectWrapper>
      <h3>{t("local")}</h3>
      <Select
        defaultValue="請選擇"
        style={{ width: 200, marginLeft: 10 }}
        onChange={clickPlace}
      >
        {select.map((item) => {
          return (
            <Option value={item} key={item}>
              {item}
            </Option>
          );
        })}
      </Select>
    </SelectWrapper>
  );
};

export default LocalSelect;
