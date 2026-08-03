import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { flex: 0, alignSelf: "stretch", paddingBottom: 12 }, paddingHorizontal: { paddingHorizontal: 16 }, divider: null, descriptionText: null, errorText: null };
createCacheKey = { height: 1, alignSelf: "stretch", backgroundColor: require("Themes").colors.BORDER_SUBTLE, marginBottom: 16 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { lineHeight: 16, textAlign: "center", marginBottom: 12 };
createCacheKey[4] = { color: require("Themes").unsafe_rawColors.RED_400, fontSize: 12, lineHeight: 16, fontFamily: require("sum").Fonts.PRIMARY_SEMIBOLD, textAlign: "center", marginTop: 12 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: require("Themes").unsafe_rawColors.RED_400, fontSize: 12, lineHeight: 16, fontFamily: require("sum").Fonts.PRIMARY_SEMIBOLD, textAlign: "center", marginTop: 12 };
const result = require("sum").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBottomButton.tsx");

export default function InAppReportsBottomButton(button) {
  let disabled;
  let hasError;
  let importDefault;
  let isModeratorReport;
  button = button.button;
  ({ onPress: importDefault, isModeratorReport } = button);
  ({ disabled, hasError } = button);
  const tmp = createCacheKey();
  if (null == button) {
    return null;
  } else {
    const string3 = button(1236).intl.string;
    if ("submit" === button.type) {
      const intl2 = tmp17(1236).intl;
      const string = intl2.string;
      if (isModeratorReport) {
        let stringResult = string(importDefault(2355).ZUyreS);
      } else {
        const intl3 = tmp17(1236).intl;
        const stringResult1 = string(tmp17(1236).t["G+vU89"]);
        stringResult = stringResult1;
        const formatResult = intl3.format(tmp17(1236).t.Q0tSKT, {});
      }
    } else {
      if ("next" === button.type) {
        const intl = tmp17(1236).intl;
        let stringResult2 = intl.string(tmp17(1236).t.PDTjLN);
      } else {
        stringResult2 = tmp19;
        if ("cancel" === button.type) {
          const intl5 = tmp17(1236).intl;
          stringResult2 = intl5.string(tmp17(1236).t["ETE/oC"]);
        }
      }
      const intl4 = tmp17(1236).intl;
      const string2 = intl4.string;
      if (isModeratorReport) {
        let string2Result = string2(importDefault(2355).psKFdJ);
      } else {
        string2Result = string2(tmp17(1236).t.h6D8Vy);
      }
      let obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj = { style: null };
      obj[0] = tmp.divider;
      const items = [callback(View, obj), ];
      obj = { style: null, children: null };
      obj[0] = tmp.paddingHorizontal;
      let tmp14Result = null;
      if (null != tmp3) {
        const obj1 = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
        obj1[0] = tmp.descriptionText;
        obj1[3] = tmp3;
        tmp14Result = tmp14(tmp17(4251).Text, obj1);
      }
      const items1 = [tmp14Result, , ];
      const obj2 = { disabled: null, onPress: null, text: null, variant: null };
      obj2[0] = disabled;
      obj2[1] = function onPress() {
        return callback(button);
      };
      obj2[2] = stringResult2;
      obj2[3] = str2;
      items1[1] = callback(tmp17(4666).Button, obj2);
      tmp14Result = null;
      if (hasError) {
        const obj3 = { style: null, children: null };
        obj3[0] = tmp.errorText;
        obj3[1] = string2Result;
        tmp14Result = tmp14(tmp17(1297).LegacyText, obj3);
      }
      items1[2] = tmp14Result;
      obj[1] = items1;
      items[1] = closure_5(View, obj);
      obj[1] = items;
      return closure_5(View, obj);
    }
  }
};