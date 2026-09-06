// discord_app/modules/user_settings/defs/native/ContrastModeSetting.tsx
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
    return intl.string(util.t["TYyfO/"]);
  },
  parent: fn(7975).MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(native.BetaTag, { size: native.BetaSizes.SMALL });
  },
  useProps: function useContrastSettingProps() {
    return noop.useMemo(
      () => ({
        value: contrast.contrast,
        onSlidingComplete: AccessibilityActionCreators.setContrast,
        minimumValue: 0,
        maximumValue: 2,
        step: 0.1,
        startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}),
        endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}),
      }),
      [],
    );
  },
};
SettingBuilders = SettingBuilders.createSlider(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ContrastModeSetting.tsx");

export default SettingBuilders;
