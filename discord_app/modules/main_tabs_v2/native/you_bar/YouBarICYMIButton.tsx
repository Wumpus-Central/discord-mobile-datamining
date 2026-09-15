// discord_app/modules/main_tabs_v2/native/you_bar/YouBarICYMIButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import RootNavigationRef from "../../RootNavigationRef.native.tsx";
import FlashIcon from "../../../../design/components/Icon/native/redesign/generated/FlashIcon.tsx";
import useICYMITabBadgeDefault from "../../../icymi/useICYMITabBadge.tsx";
import YouBarButtonDefault from "YouBarButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const YOU_BAR_BUTTON_ICON_SIZE = fn(15189).YOU_BAR_BUTTON_ICON_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let obj = {
  icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE },
  badge: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND },
};
let closure_4 = createStyles.createStyles(obj);
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarICYMIButton.tsx");

export default noop.memo(function YouBarICYMIButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  const tmp = closure_4();
  const obj = { hasNameplate, icon: null, hasBadge: null, badgeStyle: null, onPress: null, accessibilityLabel: null };
  let obj2 = { size: "custom", style: tmp.icon, color: null };
  let str;
  if (hasNameplate) {
    str = "white";
  }
  obj2.color = str;
  obj.icon = jsx(FlashIcon.FlashIcon, { size: "custom", style: tmp.icon, color: null });
  obj.hasBadge = useICYMITabBadgeDefault().showDot;
  obj.badgeStyle = tmp.badge;
  obj.onPress = function onPress() {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (null != rootNavigationRef) {
      const obj2 = { screen: "icymi-screen", params: { inNestedNavigator: true } };
      rootNavigationRef.navigate("icymi", obj2);
    }
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["jnXV/V"]);
  return jsx(YouBarButtonDefault, {
    hasNameplate,
    icon: null,
    hasBadge: null,
    badgeStyle: null,
    onPress: null,
    accessibilityLabel: null,
  });
});
