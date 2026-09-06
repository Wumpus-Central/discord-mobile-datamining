// === Module 16390: YouBarICYMIButton ===

// Module 16390 (YouBarICYMIButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import FlashIcon from "FlashIcon" /* 13011 */;
import useICYMITabBadgeDefault from "useICYMITabBadge" /* 16391 */;
import YouBarButtonDefault from "YouBarButton" /* 16392 */;
import noop from "module_19" /* 19 */;

require = fn;
const YOU_BAR_BUTTON_ICON_SIZE = fn(15098).YOU_BAR_BUTTON_ICON_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, badge: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.badge = obj;
let closure_4 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarICYMIButton.tsx");

export default noop.memo(function YouBarICYMIButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  const tmp = closure_4();
  let obj = { hasNameplate, icon: null, hasBadge: null, badgeStyle: null, onPress: null, accessibilityLabel: null };
  obj = { size: "custom", style: tmp.icon, color: null };
  let str;
  if (hasNameplate) {
    str = "white";
  }
  obj.color = str;
  obj.icon = jsx(FlashIcon.FlashIcon, { size: "custom", style: tmp.icon, color: null });
  obj.hasBadge = useICYMITabBadgeDefault().showDot;
  obj.badgeStyle = tmp.badge;
  obj.onPress = function onPress() {
    let obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      obj = { screen: "icymi-screen", params: { inNestedNavigator: true } };
      rootNavigationRef.navigate("icymi", obj);
    }
  };
  const intl = tmp5(1114).intl;
  obj.accessibilityLabel = intl.string(util.t["jnXV/V"]);
  return jsx(YouBarButtonDefault, { size: "custom", style: tmp.icon, color: null });
});