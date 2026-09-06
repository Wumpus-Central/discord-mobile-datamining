// discord_app/modules/virtual_currency/native/OrbOnboardingPill.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import OrbsIcon from "../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
class OrbOnboardingPill {
  constructor(arg0) {
    flag = global.accessible;
    if (flag === undefined) {
      flag = true;
    }
    tmp3 = closure_0;
    tmp4 = closure_1;
    tmp = closure_4();
    tmp2 = jsxs;
    obj = {
      onPress: global.onPress,
      style: tmp.container,
      accessibilityRole: "button",
      activeOpacity: 0.8,
      accessible: flag,
      accessibilityElementsHidden: !flag,
      importantForAccessibility: null,
      children: null,
    };
    str = "no";
    if (flag) {
      str = "auto";
    }
    obj.importantForAccessibility = str;
    items = [,];
    items[0] = jsx(tmp3(tmp4[3]).OrbsIcon, { size: "sm" });
    obj = { variant: "text-sm/semibold", color: "redesign-button-tertiary-text", children: null };
    intl = tmp3(tmp4[5]).intl;
    obj.children = intl.string(tmp3(tmp4[5]).t["9JpRfC"]);
    items[1] = jsx(tmp3(tmp4[4]).Text, obj);
    obj.children = items;
    return tmp2(closure_0(closure_1[2]).PressableOpacity, obj);
  }
}
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
OrbOnboardingPill.displayName = "OrbOnboardingPill";
fn(4560);
let createStyles = { container: null };
createStyles = {
  height: 36,
  borderRadius: nativeDefault.radii.round,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_4,
  backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
  flexShrink: 0,
  gap: 4,
};
createStyles.container = createStyles;
const React4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbOnboardingPill.tsx");

export default OrbOnboardingPill;
export { OrbOnboardingPill };
