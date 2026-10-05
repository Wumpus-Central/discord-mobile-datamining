// discord_app/modules/a11y/native/AccessibilitySystemFeatures.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AccessibilityConstants from "../AccessibilityConstants.tsx";
import updateSharedValueIfChangedDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import AccessibilityPreferencesSharedValue from "AccessibilityPreferencesSharedValue.tsx";
import AccessibilityActionCreators from "../AccessibilityActionCreators.tsx";
import react_native from "../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../AccessibilityStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_8;

let c3;
let closure_4;
let hasOwnProperty;
({ AccessibilityInfo: c3, Appearance: closure_4, AppState: hasOwnProperty } = react_native);
const AccessibilityFeatureFlags = AccessibilityConstants.AccessibilityFeatureFlags;
let NONE = AccessibilityFeatureFlags.NONE;
let obj = {
  init() {
    AccessibilityStore.addChangeListener(this.handleAccessibilityStoreChanged);
    const listener = _false.addEventListener("reduceMotionChanged", this.handleReduceMotionChanged);
    const result = _false.isReduceMotionEnabled();
    result.then(this.handleReduceMotionChanged);
    const listener1 = _false.addEventListener("reduceTransparencyChanged", this.handleReduceTransparencyChanged);
    const result1 = _false.isReduceTransparencyEnabled();
    result1.then(this.handleReduceTransparencyChanged);
    const listener2 = _false.addEventListener("boldTextChanged", this.handleBoldTextChanged);
    const isBoldTextEnabledResult = _false.isBoldTextEnabled();
    isBoldTextEnabledResult.then(this.handleBoldTextChanged);
    const listener3 = _false.addEventListener("grayscaleChanged", this.handleGrayscaleChanged);
    const isGrayscaleEnabledResult = _false.isGrayscaleEnabled();
    isGrayscaleEnabledResult.then(this.handleGrayscaleChanged);
    const listener4 = _false.addEventListener("invertColorsChanged", this.handleInvertColorsChanged);
    const result2 = _false.isInvertColorsEnabled();
    result2.then(this.handleInvertColorsChanged);
    const obj = { colorScheme: React3.getColorScheme() };
    const result3 = this.handlePreferredColorSchemeChanged(obj);
    React3.addChangeListener(this.handlePreferredColorSchemeChanged);
    const listener5 = hasOwnProperty.addEventListener("change", this.handleAppStateChange);
    const obj2 = AnalyticsUtilsDefault;
    const result4 = obj2.setSystemAccessibilityFeatures(this.getActiveFeatures);
  },
  getActiveFeatures() {
    return NONE;
  },
  handleReduceMotionChanged(arg0) {
    let str = "no-preference";
    const systemPrefersReducedMotionChanged = AccessibilityActionCreators.systemPrefersReducedMotionChanged;
    AccessibilityActionCreators;
    if (arg0) {
      str = "reduce";
    }
    const result = systemPrefersReducedMotionChanged(str);
    const REDUCED_MOTION = AccessibilityFeatureFlags.REDUCED_MOTION;
    const useReducedMotion = AccessibilityStore.useReducedMotion;
    if (useReducedMotion) {
      NONE = tmp5 | REDUCED_MOTION;
    } else {
      NONE = tmp5 & ~REDUCED_MOTION;
    }
    const tmp6 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[REDUCED_MOTION];
    if (null != tmp6) {
      const obj = {};
      obj[tmp6] = useReducedMotion;
      const tmp8 = updateSharedValueIfChangedDefault;
      tmp8(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj);
    }
  },
  handleReduceTransparencyChanged(arg0) {
    const REDUCED_TRANSPARENCY = AccessibilityFeatureFlags.REDUCED_TRANSPARENCY;
    if (arg0) {
      NONE = tmp | REDUCED_TRANSPARENCY;
    } else {
      NONE = tmp & ~REDUCED_TRANSPARENCY;
    }
    const tmp4 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[REDUCED_TRANSPARENCY];
    if (null != tmp4) {
      const obj = {};
      obj[tmp4] = arg0;
      const tmp6 = updateSharedValueIfChangedDefault;
      tmp6(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj);
    }
  },
  handleBoldTextChanged(arg0) {
    const BOLD_TEXT = AccessibilityFeatureFlags.BOLD_TEXT;
    if (arg0) {
      NONE = tmp | BOLD_TEXT;
    } else {
      NONE = tmp & ~BOLD_TEXT;
    }
    const tmp4 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[BOLD_TEXT];
    if (null != tmp4) {
      const obj = {};
      obj[tmp4] = arg0;
      const tmp6 = updateSharedValueIfChangedDefault;
      tmp6(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj);
    }
  },
  handleGrayscaleChanged(arg0) {
    const GRAYSCALE = AccessibilityFeatureFlags.GRAYSCALE;
    if (arg0) {
      NONE = tmp | GRAYSCALE;
    } else {
      NONE = tmp & ~GRAYSCALE;
    }
    const tmp4 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[GRAYSCALE];
    if (null != tmp4) {
      const obj = {};
      obj[tmp4] = arg0;
      const tmp6 = updateSharedValueIfChangedDefault;
      tmp6(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj);
    }
  },
  handleInvertColorsChanged(arg0) {
    const INVERT_COLORS = AccessibilityFeatureFlags.INVERT_COLORS;
    if (arg0) {
      NONE = tmp | INVERT_COLORS;
    } else {
      NONE = tmp & ~INVERT_COLORS;
    }
    const tmp4 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[INVERT_COLORS];
    if (null != tmp4) {
      const obj = {};
      obj[tmp4] = arg0;
      const tmp6 = updateSharedValueIfChangedDefault;
      tmp6(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj);
    }
  },
  handlePreferredColorSchemeChanged(colorScheme) {
    colorScheme = colorScheme.colorScheme;
    if ("dark" === colorScheme) {
      const PREFERS_COLOR_SCHEME_LIGHT3 = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT;
      NONE = NONE & ~PREFERS_COLOR_SCHEME_LIGHT3;
      const tmp21 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_LIGHT3];
      if (null != tmp21) {
        const obj2 = {};
        obj2[tmp21] = false;
        const tmp24 = updateSharedValueIfChangedDefault;
        tmp24(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj2);
      }
      const PREFERS_COLOR_SCHEME_DARK2 = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK;
      NONE = NONE | PREFERS_COLOR_SCHEME_DARK2;
      const tmp27 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_DARK2];
      if (null != tmp27) {
        const obj3 = {};
        obj3[tmp27] = true;
        const tmp29 = updateSharedValueIfChangedDefault;
        tmp29(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj3);
      }
    } else if ("light" === colorScheme) {
      const PREFERS_COLOR_SCHEME_DARK = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK;
      NONE = NONE & ~PREFERS_COLOR_SCHEME_DARK;
      const tmp10 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_DARK];
      if (null != tmp10) {
        const obj4 = {};
        obj4[tmp10] = false;
        const tmp13 = updateSharedValueIfChangedDefault;
        tmp13(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj4);
      }
      const PREFERS_COLOR_SCHEME_LIGHT2 = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT;
      NONE = NONE | PREFERS_COLOR_SCHEME_LIGHT2;
      const tmp16 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_LIGHT2];
      if (null != tmp16) {
        const obj5 = {};
        obj5[tmp16] = true;
        const tmp41 = updateSharedValueIfChangedDefault;
        tmp41(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj5);
      }
    } else {
      const PREFERS_COLOR_SCHEME_DARK3 = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK;
      NONE = NONE & ~PREFERS_COLOR_SCHEME_DARK3;
      const tmp35 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_DARK3];
      if (null != tmp35) {
        const obj = {};
        obj[tmp35] = false;
        const tmp2 = updateSharedValueIfChangedDefault;
        tmp2(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj);
      }
      const PREFERS_COLOR_SCHEME_LIGHT = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT;
      NONE = NONE & ~PREFERS_COLOR_SCHEME_LIGHT;
      const tmp5 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_LIGHT];
      if (null != tmp5) {
        const obj6 = {};
        obj6[tmp5] = false;
        const tmp38 = updateSharedValueIfChangedDefault;
        tmp38(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj6);
      }
    }
  },
  handleAccessibilityStoreChanged() {
    const REDUCED_MOTION = AccessibilityFeatureFlags.REDUCED_MOTION;
    const useReducedMotion = AccessibilityStore.useReducedMotion;
    if (useReducedMotion) {
      NONE = tmp3 | REDUCED_MOTION;
    } else {
      NONE = tmp3 & ~REDUCED_MOTION;
    }
    const tmp6 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[REDUCED_MOTION];
    if (null != tmp6) {
      const obj = {};
      obj[tmp6] = useReducedMotion;
      const tmp8 = updateSharedValueIfChangedDefault;
      tmp8(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj);
    }
    const REDUCED_MOTION_FROM_USER_SETTINGS = AccessibilityFeatureFlags.REDUCED_MOTION_FROM_USER_SETTINGS;
    if ("auto" !== AccessibilityStore.rawPrefersReducedMotion) {
      NONE = tmp11 | REDUCED_MOTION_FROM_USER_SETTINGS;
    } else {
      NONE = tmp11 & ~REDUCED_MOTION_FROM_USER_SETTINGS;
    }
    const tmp12 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[REDUCED_MOTION_FROM_USER_SETTINGS];
    if (null != tmp12) {
      const obj2 = {};
      obj2[tmp12] = "auto" !== AccessibilityStore.rawPrefersReducedMotion;
      const tmp14 = updateSharedValueIfChangedDefault;
      tmp14(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj2);
    }
    const SATURATION_LEVEL_DECREASED = AccessibilityFeatureFlags.SATURATION_LEVEL_DECREASED;
    if (AccessibilityStore.saturation < 1) {
      NONE = tmp17 | SATURATION_LEVEL_DECREASED;
    } else {
      NONE = tmp17 & ~SATURATION_LEVEL_DECREASED;
    }
    const tmp18 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[SATURATION_LEVEL_DECREASED];
    if (null != tmp18) {
      const obj3 = {};
      obj3[tmp18] = AccessibilityStore.saturation < 1;
      const tmp20 = updateSharedValueIfChangedDefault;
      tmp20(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj3);
    }
    const CONTRAST_LEVEL_DECREASED = AccessibilityFeatureFlags.CONTRAST_LEVEL_DECREASED;
    if (AccessibilityStore.contrast < 1) {
      NONE = tmp23 | CONTRAST_LEVEL_DECREASED;
    } else {
      NONE = tmp23 & ~CONTRAST_LEVEL_DECREASED;
    }
    const tmp24 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[CONTRAST_LEVEL_DECREASED];
    if (null != tmp24) {
      const obj4 = {};
      obj4[tmp24] = AccessibilityStore.contrast < 1;
      const tmp26 = updateSharedValueIfChangedDefault;
      tmp26(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj4);
    }
    const CONTRAST_LEVEL_INCREASED = AccessibilityFeatureFlags.CONTRAST_LEVEL_INCREASED;
    if (AccessibilityStore.contrast > 1) {
      NONE = tmp29 | CONTRAST_LEVEL_INCREASED;
    } else {
      NONE = tmp29 & ~CONTRAST_LEVEL_INCREASED;
    }
    const tmp30 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[CONTRAST_LEVEL_INCREASED];
    if (null != tmp30) {
      const obj5 = {};
      obj5[tmp30] = AccessibilityStore.contrast > 1;
      const tmp32 = updateSharedValueIfChangedDefault;
      tmp32(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj5);
    }
  },
  handleAppStateChange(arg0) {
    if ("active" === arg0) {
      let result = _false.isReduceMotionEnabled();
      result.then((result) => {
        let str = "no-preference";
        const systemPrefersReducedMotionChanged = AccessibilityActionCreators.systemPrefersReducedMotionChanged;
        AccessibilityActionCreators;
        if (result) {
          str = "reduce";
        }
        result = systemPrefersReducedMotionChanged(str);
        const REDUCED_MOTION = constants.REDUCED_MOTION;
        useReducedMotion = useReducedMotion.useReducedMotion;
        if (useReducedMotion) {
          closure_8 = tmp5 | REDUCED_MOTION;
        } else {
          closure_8 = tmp5 & ~REDUCED_MOTION;
        }
        const tmp6 = AccessibilityPreferencesSharedValue.A11Y_FEATURE_MAP[REDUCED_MOTION];
        if (null != tmp6) {
          const obj = {};
          obj[tmp6] = useReducedMotion;
          const tmp8 = updateSharedValueIfChangedDefault;
          tmp8(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj);
        }
      });
      const result1 = _false.prefersCrossFadeTransitions();
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
          const tmp6 = updateSharedValueIfChangedDefault;
          tmp6(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj);
        }
        const tmp2Result = AccessibilityActionCreators;
        result = tmp2Result.systemPrefersCrossfadesChanged(result);
      });
    }
  },
};
let result = size.fileFinishedImporting("modules/a11y/native/AccessibilitySystemFeatures.tsx");

export default obj;
