// discord_app/modules/custom_status/utils/computeInitialClearAfter.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import StatusTypes from "../Constants.tsx";

const ClearAfterValues = StatusTypes.ClearAfterValues;
const items = [, , ];
({ MINUTES_30: arr[0], HOURS_1: arr[1], HOURS_4: arr[2] } = ClearAfterValues);
const result = obj132.fileFinishedImporting("modules/custom_status/utils/computeInitialClearAfter.tsx");

export default function computeInitialClearAfter() {
  const CustomStatusSetting = require("../../user_settings/UserSettings.tsx").CustomStatusSetting;
  const setting = CustomStatusSetting.getSetting();
  if (null != setting) {
    if ("" !== setting.expiresAtMs) {
      const _Number2 = Number;
      const NumberResult = Number(setting.expiresAtMs);
      const _isNaN = isNaN;
      if (isNaN(NumberResult)) {
        return ClearAfterValues.TODAY;
      } else if (0 === NumberResult) {
        return ClearAfterValues.DONT_CLEAR;
      } else {
        const _Date2 = Date;
        const date = new Date();
        const _Date3 = Date;
        const date1 = new Date(NumberResult);
        const fullYear = date.getFullYear();
        let tmp3 = fullYear === date1.getFullYear();
        if (tmp3) {
          const month = date.getMonth();
          tmp3 = month === date1.getMonth();
        }
        if (tmp3) {
          tmp3 = date.getDate() === date1.getDate();
          const date2 = date.getDate();
        }
        if (tmp3) {
          const _Number = Number;
          const _Date = Date;
          _require = Number(NumberResult) - Date.now();
          let TODAY = items.find((item, index) => closure_0 <= item);
          if (TODAY == null) {
            TODAY = ClearAfterValues.TODAY;
          }
          return TODAY;
        } else {
          return ClearAfterValues.TODAY;
        }
      }
    }
  }
  return ClearAfterValues.TODAY;
};