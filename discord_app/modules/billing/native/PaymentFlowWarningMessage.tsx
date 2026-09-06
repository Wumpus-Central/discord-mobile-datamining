// discord_app/modules/billing/native/PaymentFlowWarningMessage.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, icon: null, text: null };
createStyles = {
  padding: 10,
  marginVertical: 5,
  borderRadius: nativeDefault.radii.xs,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: fn(5441).DARK_PRIMARY_630_LIGHT_PRIMARY_230,
};
createStyles.container = createStyles;
createStyles.icon = { marginRight: 10 };
createStyles.text = { flexShrink: 1 };
let closure_6 = createStyles.createStyles(createStyles);
let size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/PaymentFlowWarningMessage.tsx");

export default function PaymentFlowWarningMessage(children) {
  const tmp = closure_6();
  let obj = { style: tmp.container, children: null };
  const size = { style: tmp.icon, color: nativeDefault.unsafe_rawColors.YELLOW_300, width: 16, height: 16 };
  const items = [React4(native.WarningCircle, size)];
  obj = { variant: "text-sm/medium", style: tmp.text, children: children.message };
  items[1] = React4(Text_Text.Text, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
}
