// === Module 11117: computeInitialClearAfter ===

// Module 11117 (computeInitialClearAfter)
import UserSettings from "UserSettings" /* 1935 */;
import Constants from "Constants" /* 11115 */;
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
          closure_0 = Number(NumberResult) - Date.now();
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