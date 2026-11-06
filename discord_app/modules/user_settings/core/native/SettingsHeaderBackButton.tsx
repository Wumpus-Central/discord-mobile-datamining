// discord_app/modules/user_settings/core/native/SettingsHeaderBackButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import BackIconWithBadge from "../../../main_tabs_v2/native/shared_components/BackIconWithBadge.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5170);
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
    children: null,
  };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t["13/7kX"]);
  obj2.hitSlop = BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP;
  const tmp = closure_4();
  obj2.children = (
    <View style={closure_4().backIcon} importantForAccessibility="no-hide-descendants" accessibilityElementsHidden>
      {jsx(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation, hideBadge: flag })}
    </View>
  );
  obj.children = jsx(Pressables.PressableOpacity, {
    onPress() {
      return navigation.goBack();
    },
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel: null,
    hitSlop: null,
    children: null,
  });
  return <View collapsable={false}>{null}</View>;
}
