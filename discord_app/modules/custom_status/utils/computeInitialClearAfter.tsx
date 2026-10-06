// === Module 10845: computeInitialClearAfter ===

// Module 10845 (computeInitialClearAfter)
import UserSettings from "UserSettings" /* 2028 */;
import Constants from "Constants" /* 10843 */;
import size from "module_2" /* 2 */;

const ClearAfterValues = Constants.ClearAfterValues;
const items = [, , ];
({ MINUTES_30: arr[0], HOURS_1: arr[1], HOURS_4: arr[2] } = ClearAfterValues);
const result = size.fileFinishedImporting("modules/custom_status/utils/computeInitialClearAfter.tsx");

export default function computeInitialClearAfter() {
  const CustomStatusSetting = UserSettings.CustomStatusSetting;
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
        const self = this;
        const self2 = this;
        const date = new Date();
        const _Date3 = Date;
        const self3 = this;
        const self4 = this;
        const date1 = new Date(NumberResult);
        const fullYear = date.getFullYear();
        let tmp3 = fullYear === date1.getFullYear();
        if (tmp3) {
          const month = date.getMonth();
          tmp3 = month === date1.getMonth();
        }
        if (tmp3) {
          const date2 = date.getDate();
          tmp3 = date2 === date1.getDate();
        }
        if (tmp3) {
          const _Number = Number;
          const _Date = Date;
          const NumberResult1 = Number(NumberResult);
          let closure_0 = NumberResult1 - Date.now();
          let TODAY = items.find((item) => closure_0 <= item);
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