// discord_app/modules/user_settings/defs/native/ReduceSaturationSetting.tsx
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import CirclePlusIcon from "../../../../design/components/Icon/native/redesign/generated/CirclePlusIcon.tsx";
import AccessibilityActionCreators from "../../../a11y/AccessibilityActionCreators.tsx";
import CircleMinusIcon from "../../../../design/components/Icon/native/redesign/generated/CircleMinusIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const jsx = fn(21).jsx;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["5PWWCY"]);
  },
  parent: fn(7975).MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(native.BetaTag, { size: native.BetaSizes.SMALL });
  },
  useProps: function useSaturationSettingProps() {
    return noop.useMemo(
      () => ({
        value: saturation.saturation,
        onSlidingComplete: AccessibilityActionCreators.setSaturation,
        minimumValue: 0,
        maximumValue: 1,
        step: 0.05,
        startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}),
        endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}),
      }),
      [],
    );
  },
};
SettingBuilders = SettingBuilders.createSlider(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default SettingBuilders;
