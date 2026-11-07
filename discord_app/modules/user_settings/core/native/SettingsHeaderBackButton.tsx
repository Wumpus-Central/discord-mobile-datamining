// === Module 16879: SettingsHeaderBackButton ===

// Module 16879 (SettingsHeaderBackButton)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Pressables from "Pressables" /* 7043 */;
import BackIconWithBadge from "BackIconWithBadge" /* 16880 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5140);
let obj2 = { backIcon: { borderRadius: nativeDefault.radii.round, marginTop: nativeDefault.space.PX_8 } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/core/native/SettingsHeaderBackButton.tsx");

export default function SettingsHeaderBackButton(navigation) {
  navigation = navigation.navigation;
  let flag = navigation.hideBadge;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { collapsable: false, children: null };
  const obj2 = {
    onPress() {
      return navigation.goBack();
    },
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel: null,
    hitSlop: null,
    children: null
  };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t["13/7kX"]);
  obj2.hitSlop = BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP;
  const tmp = closure_4();
  obj2.children = <View style={closure_4().backIcon} importantForAccessibility="no-hide-descendants" accessibilityElementsHidden>{jsx(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation, hideBadge: flag })}</View>;
  obj.children = jsx(Pressables.PressableOpacity, {
    onPress() {
      return navigation.goBack();
    },
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel: null,
    hitSlop: null,
    children: null
  });
  return <View collapsable={false}>{null}</View>;
};