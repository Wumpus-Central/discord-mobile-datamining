// discord_app/modules/user_settings/defs/native/ReduceSaturationSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import CirclePlusIcon from "../../../../design/components/Icon/native/redesign/generated/CirclePlusIcon.tsx";
import AccessibilityActionCreators from "../../../a11y/AccessibilityActionCreators.tsx";
import CircleMinusIcon from "../../../../design/components/Icon/native/redesign/generated/CircleMinusIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10663);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSaturationSettingProps() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          value: AccessibilityStore.saturation,
          onSlidingComplete: AccessibilityActionCreators.setSaturation,
          minimumValue: 0,
          maximumValue: 1,
          step: 0.05,
          startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}),
          endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}),
        };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function useSaturationSettingProps() {
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
    };
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["5PWWCY"]);
  },
  parent: fn(7992).MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(native.BetaTag, { size: native.BetaSizes.SMALL });
  },
  useProps: ReactCompilerGating.isReactCompilerEnabled()
    ? function useSaturationSettingProps() {
        const cResult = c.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = {
            value: AccessibilityStore.saturation,
            onSlidingComplete: AccessibilityActionCreators.setSaturation,
            minimumValue: 0,
            maximumValue: 1,
            step: 0.05,
            startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}),
            endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}),
          };
          cResult[0] = obj2;
          let first = obj2;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : function useSaturationSettingProps() {
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default slider;
