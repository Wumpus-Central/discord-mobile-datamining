// === Module 18464: ConjureYouBarButton ===

// Module 18464 (ConjureYouBarButton)
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1498 */;
import MagicWandIcon from "MagicWandIcon" /* 12123 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 13005 */;
import confirmConjureYouBarPinDefault from "confirmConjureYouBarPin" /* 13009 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 14711 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 14716 */;
import YouBarButtonDefault from "YouBarButton" /* 18465 */;
import noop from "module_19" /* 19 */;

require = fn;
function confirmUnpin() {
  confirmConjureYouBarPinDefault(false);
}
const YOU_BAR_BUTTON_ICON_SIZE = fn(17075).YOU_BAR_BUTTON_ICON_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, badge: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND } };
let closure_5 = createStyles.createStyles(obj);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouBarButton.tsx");

export default noop.memo(function ConjureYouBarButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  const tmp = closure_5();
  ({ working, hasBadge, accessibilityLabel } = useConjureWandStatusDefault());
  const tmp4 = useConjureWandStatusDefault();
  const isFocused = Link.useIsFocused();
  const obj2 = { hasNameplate, icon: null, hasBadge: null, badgeStyle: null, onPress: null, onLongPress: null, accessibilityLabel: null };
  if (working) {
    const obj3 = { size: YOU_BAR_BUTTON_ICON_SIZE, paused: !isFocused };
    let tmp7Result = jsx(ConjureWorkingWandDefault, { size: YOU_BAR_BUTTON_ICON_SIZE, paused: !isFocused });
  } else {
    const obj4 = { size: "custom", style: tmp.icon, color: null };
    let str;
    if (hasNameplate) {
      str = "white";
    }
    obj4.color = str;
    tmp7Result = jsx(MagicWandIcon.MagicWandIcon, { size: "custom", style: tmp.icon, color: null });
  }
  obj2.icon = tmp7Result;
  obj2.hasBadge = hasBadge;
  obj2.badgeStyle = tmp.badge;
  obj2.onPress = openConjureProjectsSheetDefault;
  let tmp11;
  if (hasNameplate.canUnpin) {
    tmp11 = confirmUnpin;
  }
  obj2.onLongPress = tmp11;
  obj2.accessibilityLabel = accessibilityLabel;
  return jsx(YouBarButtonDefault, { hasNameplate, icon: null, hasBadge: null, badgeStyle: null, onPress: null, onLongPress: null, accessibilityLabel: null });
});