// discord_app/modules/saved_messages/native/ForLaterCardStatusHeader.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { container: null, icon: null, label: null, actionsContainer: null };
obj = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  borderTopLeftRadius: nativeDefault.radii.lg,
  borderTopRightRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  gap: 8,
  marginHorizontal: -16,
  marginTop: -16,
  paddingHorizontal: 16,
  paddingVertical: 12,
};
obj.container = obj;
obj.icon = {
  padding: 6,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
};
obj.label = { flexShrink: 1 };
obj.actionsContainer = { marginVertical: -4, marginLeft: "auto" };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardStatusHeader.tsx");

export const ForLaterCardStatusHeader = function ForLaterCardStatusHeader(isCritical) {
  let flag = isCritical.isCritical;
  ({ IconComponent, label } = isCritical);
  if (flag === undefined) {
    flag = false;
  }
  ({ lineClamp, actions } = isCritical);
  const tmp = closure_6();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.icon, children: null };
  const colors = nativeDefault.colors;
  if (flag) {
    let INTERACTIVE_TEXT_DEFAULT = colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
  }
  obj.children = React4(IconComponent, { size: "xxs", color: INTERACTIVE_TEXT_DEFAULT });
  const items = [React4(View, obj), ,];
  let str = "mobile-text-heading-primary";
  if (flag) {
    str = "text-feedback-critical";
  }
  obj = { variant: "text-md/semibold", color: str, style: tmp.label, lineClamp, children: label };
  items[1] = React4(Text_Text.Text, obj);
  items[2] = React4(View, { style: tmp.actionsContainer, children: actions });
  obj.children = items;
  return hasOwnProperty(View, obj);
};
