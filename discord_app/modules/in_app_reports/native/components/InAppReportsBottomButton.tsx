// === Module 9080: InAppReportsBottomButton ===

// Module 9080 (InAppReportsBottomButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2528 from "module_2528" /* 2528 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: { flex: 0, alignSelf: "stretch", paddingBottom: 12 }, paddingHorizontal: { paddingHorizontal: 16 }, divider: null, descriptionText: null, errorText: null };
createStyles = { height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: 16 };
createStyles.divider = createStyles;
createStyles.descriptionText = { lineHeight: 16, textAlign: "center", marginBottom: 12 };
createStyles.errorText = { color: nativeDefault.unsafe_rawColors.RED_400, fontSize: 12, lineHeight: 16, fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, textAlign: "center", marginTop: 12 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBottomButton.tsx");

export default function InAppReportsBottomButton(button) {
  button = button.button;
  ({ onPress: importDefault, isModeratorReport } = button);
  ({ disabled, hasError } = button);
  const tmp = closure_6();
  if (null == button) {
    return null;
  } else {
    const string3 = util.intl.string;
    if ("submit" === button.type) {
      const intl2 = tmp17(1114).intl;
      const string = intl2.string;
      if (isModeratorReport) {
        let stringResult = string(_modDef2528.ZUyreS);
      } else {
        const intl3 = tmp17(1114).intl;
        const stringResult1 = string(tmp17(1114).t["G+vU89"]);
        stringResult = stringResult1;
        const formatResult = intl3.format(tmp17(1114).t.Q0tSKT, {});
      }
    } else {
      if ("next" === button.type) {
        const intl = tmp17(1114).intl;
        let stringResult2 = intl.string(tmp17(1114).t.PDTjLN);
      } else {
        stringResult2 = tmp19;
        if ("cancel" === button.type) {
          const intl5 = tmp17(1114).intl;
          stringResult2 = intl5.string(tmp17(1114).t["ETE/oC"]);
        }
      }
      const intl4 = tmp17(1114).intl;
      const string2 = intl4.string;
      if (isModeratorReport) {
        let string2Result = string2(_modDef2528.psKFdJ);
      } else {
        string2Result = string2(tmp17(1114).t.h6D8Vy);
      }
      let obj = { style: tmp.container, children: null };
      obj = { style: tmp.divider };
      const items = [React4(View, obj), ];
      obj = { style: tmp.paddingHorizontal, children: null };
      let tmp14Result = null;
      if (null != tmp3) {
        const obj1 = { style: tmp.descriptionText, variant: "text-xs/medium", color: "text-default", children: tmp3 };
        tmp14Result = tmp14(tmp17(4556).Text, obj1);
      }
      const items1 = [tmp14Result, , ];
      const obj2 = {
        disabled,
        onPress() {
              return importDefault(button);
            },
        text: stringResult2,
        variant: str2
      };
      items1[1] = React4(tmp17(4975).Button, obj2);
      tmp14Result = null;
      if (hasError) {
        const obj3 = { style: tmp.errorText, children: string2Result };
        tmp14Result = tmp14(tmp17(1178).LegacyText, obj3);
      }
      items1[2] = tmp14Result;
      obj.children = items1;
      items[1] = hasOwnProperty(View, obj);
      obj.children = items;
      return hasOwnProperty(View, obj);
    }
  }
};