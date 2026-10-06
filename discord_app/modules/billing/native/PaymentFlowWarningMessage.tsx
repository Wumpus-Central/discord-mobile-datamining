// === Module 13163: PaymentFlowWarningMessage ===

// Module 13163 (PaymentFlowWarningMessage)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import LegacyTokens from "LegacyTokens" /* 5627 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, icon: { marginRight: 10 }, text: { flexShrink: 1 } };
obj2 = { padding: 10, marginVertical: 5, borderRadius: nativeDefault.radii.xs, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: LegacyTokens.DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let items;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(9);
  const tmp4 = closure_6();
  if (cResult[0] !== tmp4.icon) {
    size = { style: tmp4.icon, color: nativeDefault.unsafe_rawColors.YELLOW_300, width: 16, height: 16 };
    const WarningCircle = native.WarningCircle;
    const tmp8 = React3(WarningCircle, size);
    cResult[0] = tmp4.icon;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === children.message) {
    let tmp9;
    if (cResult[3] === tmp4.text) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.container) {
      if (cResult[6] === tmp5) {
        let tmp11;
        if (cResult[7] === tmp9) {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
    const obj2 = { style: tmp4.container, children: items };
    items = [tmp5, tmp9];
    const tmp14 = hasOwnProperty(View, obj2);
    cResult[5] = tmp4.container;
    cResult[6] = tmp5;
    cResult[7] = tmp9;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const obj3 = { variant: "text-sm/medium", style: tmp4.text, children: children.message };
  const tmp10 = React3(Text_Text.Text, obj3);
  cResult[2] = children.message;
  cResult[3] = tmp4.text;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((children) => {
  let items;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items };
  size = { style: tmp.icon, color: nativeDefault.unsafe_rawColors.YELLOW_300, width: 16, height: 16 };
  const WarningCircle = native.WarningCircle;
  items = [React3(WarningCircle, size), ];
  const obj2 = { variant: "text-sm/medium", style: tmp.text, children: children.message };
  items[1] = React3(Text_Text.Text, obj2);
  return hasOwnProperty(View, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/billing/native/PaymentFlowWarningMessage.tsx");

export default tmp4;