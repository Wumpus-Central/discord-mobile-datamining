// discord_app/modules/a11y/native/AccessibilitySystemFeatures.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AccessibilityConstants from "../AccessibilityConstants.tsx";
import updateSharedValueIfChangedDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import AccessibilityPreferencesSharedValue from "AccessibilityPreferencesSharedValue.tsx";
import AccessibilityActionCreators from "../AccessibilityActionCreators.tsx";
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import AccessibilityStore from "../AccessibilityStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ AccessibilityInfo: c3, Appearance: closure_4, AppState: hasOwnProperty } = get_ActivityIndicator);
const AccessibilityFeatureFlags = AccessibilityConstants.AccessibilityFeatureFlags;
const NONE = AccessibilityFeatureFlags.NONE;
let result = size.fileFinishedImporting("modules/a11y/native/AccessibilitySystemFeatures.tsx");

export default {
  init() {
    AccessibilityStore.addChangeListener(this.handleAccessibilityStoreChanged);
    const listener = React3.addEventListener("reduceMotionChanged", this.handleReduceMotionChanged);
    const result = React3.isReduceMotionEnabled();
    result.then(this.handleReduceMotionChanged);
    const listener1 = React3.addEventListener("reduceTransparencyChanged", this.handleReduceTransparencyChanged);
    const result1 = React3.isReduceTransparencyEnabled();
    result1.then(this.handleReduceTransparencyChanged);
    const listener2 = React3.addEventListener("boldTextChanged", this.handleBoldTextChanged);
    React3.isBoldTextEnabled().then(this.handleBoldTextChanged);
    const listener3 = React3.addEventListener("grayscaleChanged", this.handleGrayscaleChanged);
    const isBoldTextEnabledResult = React3.isBoldTextEnabled();
    React3.isGrayscaleEnabled().then(this.handleGrayscaleChanged);
    const listener4 = React3.addEventListener("invertColorsChanged", this.handleInvertColorsChanged);
    const result2 = React3.isInvertColorsEnabled();
    result2.then(this.handleInvertColorsChanged);
    const isGrayscaleEnabledResult = React3.isGrayscaleEnabled();
    const result3 = this.handlePreferredColorSchemeChanged({ colorScheme: React4.getColorScheme() });
    React4.addChangeListener(this.handlePreferredColorSchemeChanged);
    const listener5 = hasOwnProperty.addEventListener("change", this.handleAppStateChange);
    const obj = { colorScheme: React4.getColorScheme() };
    const result4 = AnalyticsUtilsDefault.setSystemAccessibilityFeatures(this.getActiveFeatures);
  },
  getActiveFeatures() {
    return closure_8;
  },
  handleReduceMotionChanged(arg0) {
    let obj = AccessibilityActionCreators;
    let str = "no-preference";
    if (arg0) {
      str = "reduce";
    }
    const result = obj.systemPrefersReducedMotionChanged(str);
    const REDUCED_MOTION = AccessibilityFeatureFlags.REDUCED_MOTION;
    const useReducedMotion = AccessibilityStore.useReducedMotion;
    if (useReducedMotion) {
      closure_8 = tmp4 | REDUCED_MOTION;
    } else {
      closure_8 = tmp4 & ~REDUCED_MOTION;
    }
    const tmp5 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[REDUCED_MOTION];
    if (null != tmp5) {
      obj = {};
      obj[tmp5] = useReducedMotion;
      updateSharedValueIfChangedDefault(tmp(14436).accessibilityPreferencesSharedValue, obj);
    }
  },
  handleReduceTransparencyChanged(arg0) {
    const REDUCED_TRANSPARENCY = AccessibilityFeatureFlags.REDUCED_TRANSPARENCY;
    if (arg0) {
      closure_8 = tmp | REDUCED_TRANSPARENCY;
    } else {
      closure_8 = tmp & ~REDUCED_TRANSPARENCY;
    }
    const tmp4 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[REDUCED_TRANSPARENCY];
    if (null != tmp4) {
      const obj = {};
      obj[tmp4] = arg0;
      updateSharedValueIfChangedDefault(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj);
    }
  },
  handleBoldTextChanged(arg0) {
    const BOLD_TEXT = AccessibilityFeatureFlags.BOLD_TEXT;
    if (arg0) {
      closure_8 = tmp | BOLD_TEXT;
    } else {
      closure_8 = tmp & ~BOLD_TEXT;
    }
    const tmp4 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[BOLD_TEXT];
    if (null != tmp4) {
      const obj = {};
      obj[tmp4] = arg0;
      updateSharedValueIfChangedDefault(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj);
    }
  },
  handleGrayscaleChanged(arg0) {
    const GRAYSCALE = AccessibilityFeatureFlags.GRAYSCALE;
    if (arg0) {
      closure_8 = tmp | GRAYSCALE;
    } else {
      closure_8 = tmp & ~GRAYSCALE;
    }
    const tmp4 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[GRAYSCALE];
    if (null != tmp4) {
      const obj = {};
      obj[tmp4] = arg0;
      updateSharedValueIfChangedDefault(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj);
    }
  },
  handleInvertColorsChanged(arg0) {
    const INVERT_COLORS = AccessibilityFeatureFlags.INVERT_COLORS;
    if (arg0) {
      closure_8 = tmp | INVERT_COLORS;
    } else {
      closure_8 = tmp & ~INVERT_COLORS;
    }
    const tmp4 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[INVERT_COLORS];
    if (null != tmp4) {
      const obj = {};
      obj[tmp4] = arg0;
      updateSharedValueIfChangedDefault(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj);
    }
  },
  handlePreferredColorSchemeChanged(colorScheme) {
    colorScheme = colorScheme.colorScheme;
    if ("dark" === colorScheme) {
      const PREFERS_COLOR_SCHEME_LIGHT3 = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT;
      closure_8 = closure_8 & ~PREFERS_COLOR_SCHEME_LIGHT3;
      const tmp21 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_LIGHT3];
      if (null != tmp21) {
        let obj = {};
        obj[tmp21] = false;
        updateSharedValueIfChangedDefault(tmp19(14436).accessibilityPreferencesSharedValue, obj);
      }
      const PREFERS_COLOR_SCHEME_DARK2 = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK;
      closure_8 = closure_8 | PREFERS_COLOR_SCHEME_DARK2;
      const tmp27 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_DARK2];
      if (null != tmp27) {
        obj = {};
        obj[tmp27] = true;
        updateSharedValueIfChangedDefault(tmp19(14436).accessibilityPreferencesSharedValue, obj);
      }
    } else if ("light" === colorScheme) {
      const PREFERS_COLOR_SCHEME_DARK = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK;
      closure_8 = closure_8 & ~PREFERS_COLOR_SCHEME_DARK;
      const tmp10 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_DARK];
      if (null != tmp10) {
        const obj1 = {};
        obj1[tmp10] = false;
        updateSharedValueIfChangedDefault(tmp8(14436).accessibilityPreferencesSharedValue, obj1);
      }
      const PREFERS_COLOR_SCHEME_LIGHT2 = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT;
      closure_8 = closure_8 | PREFERS_COLOR_SCHEME_LIGHT2;
      const tmp16 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_LIGHT2];
      if (null != tmp16) {
        const obj2 = {};
        obj2[tmp16] = true;
        updateSharedValueIfChangedDefault(tmp8(14436).accessibilityPreferencesSharedValue, obj2);
      }
    } else {
      const PREFERS_COLOR_SCHEME_DARK3 = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK;
      closure_8 = closure_8 & ~PREFERS_COLOR_SCHEME_DARK3;
      const tmp35 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_DARK3];
      if (null != tmp35) {
        obj = {};
        obj[tmp35] = false;
        updateSharedValueIfChangedDefault(tmp33(14436).accessibilityPreferencesSharedValue, obj);
      }
      const PREFERS_COLOR_SCHEME_LIGHT = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT;
      closure_8 = closure_8 & ~PREFERS_COLOR_SCHEME_LIGHT;
      const tmp5 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_LIGHT];
      if (null != tmp5) {
        const obj3 = {};
        obj3[tmp5] = false;
        updateSharedValueIfChangedDefault(tmp33(14436).accessibilityPreferencesSharedValue, obj3);
      }
    }
  },
  handleAccessibilityStoreChanged() {
    const REDUCED_MOTION = AccessibilityFeatureFlags.REDUCED_MOTION;
    const useReducedMotion = AccessibilityStore.useReducedMotion;
    if (useReducedMotion) {
      closure_8 = tmp3 | REDUCED_MOTION;
    } else {
      closure_8 = tmp3 & ~REDUCED_MOTION;
    }
    const tmp6 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[REDUCED_MOTION];
    if (null != tmp6) {
      let obj = {};
      obj[tmp6] = useReducedMotion;
      updateSharedValueIfChangedDefault(tmp4(14436).accessibilityPreferencesSharedValue, obj);
    }
    const REDUCED_MOTION_FROM_USER_SETTINGS = tmp.REDUCED_MOTION_FROM_USER_SETTINGS;
    if ("auto" !== AccessibilityStore.rawPrefersReducedMotion) {
      closure_8 = tmp11 | REDUCED_MOTION_FROM_USER_SETTINGS;
    } else {
      closure_8 = tmp11 & ~REDUCED_MOTION_FROM_USER_SETTINGS;
    }
    const tmp12 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[REDUCED_MOTION_FROM_USER_SETTINGS];
    if (null != tmp12) {
      obj = {};
      obj[tmp12] = tmp10;
      updateSharedValueIfChangedDefault(tmp4(14436).accessibilityPreferencesSharedValue, obj);
    }
    const SATURATION_LEVEL_DECREASED = tmp.SATURATION_LEVEL_DECREASED;
    if (AccessibilityStore.saturation < 1) {
      closure_8 = tmp17 | SATURATION_LEVEL_DECREASED;
    } else {
      closure_8 = tmp17 & ~SATURATION_LEVEL_DECREASED;
    }
    const tmp18 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[SATURATION_LEVEL_DECREASED];
    if (null != tmp18) {
      obj = {};
      obj[tmp18] = tmp16;
      updateSharedValueIfChangedDefault(tmp4(14436).accessibilityPreferencesSharedValue, obj);
    }
    const CONTRAST_LEVEL_DECREASED = tmp.CONTRAST_LEVEL_DECREASED;
    if (AccessibilityStore.contrast < 1) {
      closure_8 = tmp23 | CONTRAST_LEVEL_DECREASED;
    } else {
      closure_8 = tmp23 & ~CONTRAST_LEVEL_DECREASED;
    }
    const tmp24 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[CONTRAST_LEVEL_DECREASED];
    if (null != tmp24) {
      const obj1 = {};
      obj1[tmp24] = tmp22;
      updateSharedValueIfChangedDefault(tmp4(14436).accessibilityPreferencesSharedValue, obj1);
    }
    const CONTRAST_LEVEL_INCREASED = tmp.CONTRAST_LEVEL_INCREASED;
    if (AccessibilityStore.contrast > 1) {
      closure_8 = tmp29 | CONTRAST_LEVEL_INCREASED;
    } else {
      closure_8 = tmp29 & ~CONTRAST_LEVEL_INCREASED;
    }
    const tmp30 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[CONTRAST_LEVEL_INCREASED];
    if (null != tmp30) {
      const obj2 = {};
      obj2[tmp30] = tmp28;
      updateSharedValueIfChangedDefault(tmp4(14436).accessibilityPreferencesSharedValue, obj2);
    }
  },
  handleAppStateChange(arg0) {
    if ("active" === arg0) {
      let result = React3.isReduceMotionEnabled();
      result.then((result) => {
        let obj = AccessibilityActionCreators;
        let str = "no-preference";
        if (result) {
          str = "reduce";
        }
        result = obj.systemPrefersReducedMotionChanged(str);
        const REDUCED_MOTION = constants.REDUCED_MOTION;
        useReducedMotion = useReducedMotion.useReducedMotion;
        if (useReducedMotion) {
          closure_8 = tmp4 | REDUCED_MOTION;
        } else {
          closure_8 = tmp4 & ~REDUCED_MOTION;
        }
        const tmp5 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[REDUCED_MOTION];
        if (null != tmp5) {
          obj = {};
          obj[tmp5] = useReducedMotion;
          updateSharedValueIfChangedDefault(tmp(14436).accessibilityPreferencesSharedValue, obj);
        }
      });
      const result1 = React3.prefersCrossFadeTransitions();
      result1.then((result) => {
        const REDUCED_MOTION_PREFERS_CROSSFADES = constants.REDUCED_MOTION_PREFERS_CROSSFADES;
        if (result) {
          closure_8 = tmp | REDUCED_MOTION_PREFERS_CROSSFADES;
        } else {
          closure_8 = tmp & ~REDUCED_MOTION_PREFERS_CROSSFADES;
        }
        const tmp4 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[REDUCED_MOTION_PREFERS_CROSSFADES];
        if (null != tmp4) {
          const obj = {};
          obj[tmp4] = result;
          updateSharedValueIfChangedDefault(tmp2(14436).accessibilityPreferencesSharedValue, obj);
        }
        result = AccessibilityActionCreators.systemPrefersCrossfadesChanged(result);
      });
    }
  },
};
