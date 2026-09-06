// === Module 12217: ForLaterCardStatusHeader ===

// Module 12217 (ForLaterCardStatusHeader)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ThemesDefault from "Themes" /* 576 */;
import Text from "Text" /* 4556 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const View = get_ActivityIndicator.View;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { container: null, icon: null, label: null, actionsContainer: null };
obj = { flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, borderTopLeftRadius: ThemesDefault.radii.lg, borderTopRightRadius: ThemesDefault.radii.lg, overflow: "hidden", gap: 8, marginHorizontal: -16, marginTop: -16, paddingHorizontal: 16, paddingVertical: 12 };
obj[0] = obj;
obj[1] = { padding: 6, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT };
obj[2] = { flexShrink: 1 };
obj[3] = { marginVertical: -4, marginLeft: "auto" };
let closure_6 = createCacheKey.createStyles(obj);
const obj1 = { padding: 6, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT };
const result = set.fileFinishedImporting("modules/saved_messages/native/ForLaterCardStatusHeader.tsx");

export const ForLaterCardStatusHeader = function ForLaterCardStatusHeader(isCritical) {
  let flag = isCritical.isCritical;
  ({ IconComponent, label } = isCritical);
  if (flag === undefined) {
    flag = false;
  }
  ({ lineClamp, actions } = isCritical);
  const tmp = callback();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.icon, children: null };
  const colors = ThemesDefault.colors;
  if (flag) {
    let INTERACTIVE_TEXT_DEFAULT = colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
  }
  obj[1] = closure_4(IconComponent, { size: "xxs", color: INTERACTIVE_TEXT_DEFAULT });
  const items = [closure_4(View, obj), , ];
  let str = "mobile-text-heading-primary";
  if (flag) {
    str = "text-feedback-critical";
  }
  obj = { variant: "text-md/semibold", color: str, style: tmp.label, lineClamp, children: label };
  items[1] = closure_4(Text.Text, obj);
  items[2] = closure_4(View, { style: tmp.actionsContainer, children: actions });
  obj[1] = items;
  return closure_5(View, obj);
};