// discord_app/modules/user_settings/defs/native/ContrastModeSetting.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import CirclePlusIcon from "../../../../design/components/Icon/native/redesign/generated/CirclePlusIcon.tsx";
import AccessibilityActionCreators from "../../../a11y/AccessibilityActionCreators.tsx";
import CircleMinusIcon from "../../../../design/components/Icon/native/redesign/generated/CircleMinusIcon.tsx";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          value: AccessibilityStore.contrast,
          onSlidingComplete: AccessibilityActionCreators.setContrast,
          minimumValue: 0,
          maximumValue: 2,
          step: 0.1,
          startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}),
          endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}),
        };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      let contrast;
      return react.useMemo(() => {
        const obj = {
          value: contrast.contrast,
          onSlidingComplete: AccessibilityActionCreators.setContrast,
          minimumValue: 0,
          maximumValue: 2,
          step: 0.1,
          startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}),
          endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}),
        };
        return obj;
      }, []);
    };
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["TYyfO/"]);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    const BetaTag = native.BetaTag;
    return <BetaTag size={native.BetaSizes.SMALL} />;
  },
  useProps: tmp2,
};
const slider = SettingBuilders.createSlider(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ContrastModeSetting.tsx");

export default slider;
