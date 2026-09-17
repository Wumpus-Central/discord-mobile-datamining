// === Module 9234: InAppReportsBottomButton ===

// Module 9234 (InAppReportsBottomButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import _modDef2529 from "module_2529" /* 2529 */;
import Text_Text from "Text/Text" /* 4636 */;
import components_Button_Button from "components/Button/Button" /* 5062 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4640);
let obj2 = { container: { flex: 0, alignSelf: "stretch", paddingBottom: 12 }, paddingHorizontal: { paddingHorizontal: 16 }, divider: { height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: 16 }, descriptionText: { lineHeight: 16, textAlign: "center", marginBottom: 12 }, errorText: null };
let obj3 = { height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: 16 };
obj2.errorText = { color: nativeDefault.unsafe_rawColors.RED_400, fontSize: 12, lineHeight: 16, fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, textAlign: "center", marginTop: 12 };
let closure_6 = createStyles.createStyles(obj2);
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
      const intl2 = util.intl;
      const string = intl2.string;
      if (isModeratorReport) {
        let stringResult = string(_modDef2529.ZUyreS);
      } else {
        const intl3 = util.intl;
        const stringResult1 = string(util.t["G+vU89"]);
        stringResult = stringResult1;
        const formatResult = intl3.format(util.t.Q0tSKT, {});
      }
    } else {
      if ("next" === button.type) {
        const intl = util.intl;
        let stringResult2 = intl.string(util.t.PDTjLN);
      } else {
        stringResult2 = tmp19;
        if ("cancel" === button.type) {
          const intl5 = util.intl;
          stringResult2 = intl5.string(util.t["ETE/oC"]);
        }
      }
      const intl4 = util.intl;
      const string2 = intl4.string;
      if (isModeratorReport) {
        let string2Result = string2(_modDef2529.psKFdJ);
      } else {
        string2Result = string2(util.t.h6D8Vy);
      }
      const obj = { style: tmp.container, children: null };
      const obj2 = { style: tmp.divider };
      const items = [React4(View, obj2), ];
      const obj3 = { style: tmp.paddingHorizontal, children: null };
      let tmp14Result = null;
      if (null != tmp3) {
        const obj4 = { style: tmp.descriptionText, variant: "text-xs/medium", color: "text-default", children: tmp3 };
        tmp14Result = React4(Text_Text.Text, obj4);
      }
      const items1 = [tmp14Result, , ];
      const obj5 = {
        disabled,
        onPress() {
              return importDefault(button);
            },
        text: stringResult2,
        variant: str2
      };
      items1[1] = React4(components_Button_Button.Button, obj5);
      let tmp14Result2 = null;
      if (hasError) {
        const obj6 = { style: tmp.errorText, children: string2Result };
        tmp14Result2 = React4(native.LegacyText, obj6);
      }
      items1[2] = tmp14Result2;
      obj3.children = items1;
      items[1] = hasOwnProperty(View, obj3);
      obj.children = items;
      return hasOwnProperty(View, obj);
    }
  }
};