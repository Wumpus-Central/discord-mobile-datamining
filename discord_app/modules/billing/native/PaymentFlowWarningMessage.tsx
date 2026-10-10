// === Module 13606: PaymentFlowWarningMessage ===

// Module 13606 (PaymentFlowWarningMessage)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5088 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { padding: 10, marginVertical: 5, borderRadius: nativeDefault.radii.xs, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: fn(5969).DARK_PRIMARY_630_LIGHT_PRIMARY_230 }, icon: { marginRight: 10 }, text: { flexShrink: 1 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { padding: 10, marginVertical: 5, borderRadius: nativeDefault.radii.xs, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: fn(5969).DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/PaymentFlowWarningMessage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PaymentFlowWarningMessage(children) {
  const cResult = c.c(9);
  const tmp4 = closure_6();
  if (cResult[0] !== tmp4.icon) {
    const size = { style: tmp4.icon, color: nativeDefault.unsafe_rawColors.YELLOW_300, width: 16, height: 16 };
    const tmp8 = React4(native.WarningCircle, size);
    cResult[0] = tmp4.icon;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === children.message) {
    if (cResult[3] === tmp4.text) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.container) {
      if (cResult[6] === tmp5) {
        if (cResult[7] === tmp9) {
          let tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
    const obj2 = { style: tmp4.container, children: null };
    const items = [tmp5, tmp9];
    obj2.children = items;
    const tmp14 = hasOwnProperty(View, obj2);
    cResult[5] = tmp4.container;
    cResult[6] = tmp5;
    cResult[7] = tmp9;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const tmp10 = React4(Text_Text.Text, { variant: "text-sm/medium", style: tmp4.text, children: children.message });
  cResult[2] = children.message;
  cResult[3] = tmp4.text;
  cResult[4] = tmp10;
  tmp9 = tmp10;
  const obj3 = { variant: "text-sm/medium", style: tmp4.text, children: children.message };
}) : (function PaymentFlowWarningMessage(children) {
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const size = { style: tmp.icon, color: nativeDefault.unsafe_rawColors.YELLOW_300, width: 16, height: 16 };
  const items = [React4(native.WarningCircle, size), React4(Text_Text.Text, { variant: "text-sm/medium", style: tmp.text, children: children.message })];
  obj.children = items;
  return hasOwnProperty(View, obj);
});