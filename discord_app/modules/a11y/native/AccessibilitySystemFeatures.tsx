// discord_app/modules/a11y/native/AccessibilitySystemFeatures.tsx
import set from "../../../../_runtime/00002_set.js";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import uDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import AccessibilityFeatureFlags2 from "../AccessibilityConstants.tsx";
import A11Y_FEATURE_MAP from "AccessibilityPreferencesSharedValue.tsx";
import setFontSize from "../AccessibilityActionCreators.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../AccessibilityStore.tsx";

({ AccessibilityInfo: c3, Appearance: c4, AppState: c5 } = get_ActivityIndicator);
const AccessibilityFeatureFlags = AccessibilityFeatureFlags2.AccessibilityFeatureFlags;
const NONE = AccessibilityFeatureFlags.NONE;
let result = set.fileFinishedImporting("modules/a11y/native/AccessibilitySystemFeatures.tsx");

export default {
  init() {
    closure_6.addChangeListener(this.handleAccessibilityStoreChanged);
    const listener = closure_3.addEventListener("reduceMotionChanged", this.handleReduceMotionChanged);
    const result = closure_3.isReduceMotionEnabled();
    result.then(this.handleReduceMotionChanged);
    const listener1 = closure_3.addEventListener("reduceTransparencyChanged", this.handleReduceTransparencyChanged);
    const result1 = closure_3.isReduceTransparencyEnabled();
    result1.then(this.handleReduceTransparencyChanged);
    const listener2 = closure_3.addEventListener("boldTextChanged", this.handleBoldTextChanged);
    closure_3.isBoldTextEnabled().then(this.handleBoldTextChanged);
    const listener3 = closure_3.addEventListener("grayscaleChanged", this.handleGrayscaleChanged);
    const isBoldTextEnabledResult = closure_3.isBoldTextEnabled();
    closure_3.isGrayscaleEnabled().then(this.handleGrayscaleChanged);
    const listener4 = closure_3.addEventListener("invertColorsChanged", this.handleInvertColorsChanged);
    const result2 = closure_3.isInvertColorsEnabled();
    result2.then(this.handleInvertColorsChanged);
    const isGrayscaleEnabledResult = closure_3.isGrayscaleEnabled();
    const result3 = this.handlePreferredColorSchemeChanged({ colorScheme: closure_4.getColorScheme() });
    closure_4.addChangeListener(this.handlePreferredColorSchemeChanged);
    const listener5 = closure_5.addEventListener("change", this.handleAppStateChange);
    const obj = { colorScheme: closure_4.getColorScheme() };
    const result4 = expandEventPropertiesDefault.setSystemAccessibilityFeatures(this.getActiveFeatures);
  },
  getActiveFeatures() {
    return NONE;
  },
  handleReduceMotionChanged(arg0) {
    let obj = setFontSize;
    let str = "no-preference";
    if (arg0) {
      str = "reduce";
    }
    const result = obj.systemPrefersReducedMotionChanged(str);
    const REDUCED_MOTION = AccessibilityFeatureFlags.REDUCED_MOTION;
    const useReducedMotion = closure_6.useReducedMotion;
    if (useReducedMotion) {
      closure_8 = tmp4 | REDUCED_MOTION;
    } else {
      closure_8 = tmp4 & ~REDUCED_MOTION;
    }
    const tmp5 = A11Y_FEATURE_MAP.A11Y_FEATURE_MAP[REDUCED_MOTION];
    if (null != tmp5) {
      obj = {};
      obj[tmp5] = useReducedMotion;
      uDefault(tmp(14005).accessibilityPreferencesSharedValue, obj);
      const tmp7 = uDefault;
    }
  },
  handleReduceTransparencyChanged(arg0) {
    const REDUCED_TRANSPARENCY = AccessibilityFeatureFlags.REDUCED_TRANSPARENCY;
    if (arg0) {
      closure_8 = tmp | REDUCED_TRANSPARENCY;
    } else {
      closure_8 = tmp & ~REDUCED_TRANSPARENCY;
    }
    const tmp4 = A11Y_FEATURE_MAP.A11Y_FEATURE_MAP[REDUCED_TRANSPARENCY];
    if (null != tmp4) {
      const obj = {};
      obj[tmp4] = arg0;
      uDefault(A11Y_FEATURE_MAP.accessibilityPreferencesSharedValue, obj);
      const tmp6 = uDefault;
    }
  },
  handleBoldTextChanged(arg0) {
    const BOLD_TEXT = AccessibilityFeatureFlags.BOLD_TEXT;
    if (arg0) {
      closure_8 = tmp | BOLD_TEXT;
    } else {
      closure_8 = tmp & ~BOLD_TEXT;
    }
    const tmp4 = A11Y_FEATURE_MAP.A11Y_FEATURE_MAP[BOLD_TEXT];
    if (null != tmp4) {
      const obj = {};
      obj[tmp4] = arg0;
      uDefault(A11Y_FEATURE_MAP.accessibilityPreferencesSharedValue, obj);
      const tmp6 = uDefault;
    }
  },
  handleGrayscaleChanged(arg0) {
    const GRAYSCALE = AccessibilityFeatureFlags.GRAYSCALE;
    if (arg0) {
      closure_8 = tmp | GRAYSCALE;
    } else {
      closure_8 = tmp & ~GRAYSCALE;
    }
    const tmp4 = A11Y_FEATURE_MAP.A11Y_FEATURE_MAP[GRAYSCALE];
    if (null != tmp4) {
      const obj = {};
      obj[tmp4] = arg0;
      uDefault(A11Y_FEATURE_MAP.accessibilityPreferencesSharedValue, obj);
      const tmp6 = uDefault;
    }
  },
  handleInvertColorsChanged(arg0) {
    const INVERT_COLORS = AccessibilityFeatureFlags.INVERT_COLORS;
    if (arg0) {
      closure_8 = tmp | INVERT_COLORS;
    } else {
      closure_8 = tmp & ~INVERT_COLORS;
    }
    const tmp4 = A11Y_FEATURE_MAP.A11Y_FEATURE_MAP[INVERT_COLORS];
    if (null != tmp4) {
      const obj = {};
      obj[tmp4] = arg0;
      uDefault(A11Y_FEATURE_MAP.accessibilityPreferencesSharedValue, obj);
      const tmp6 = uDefault;
    }
  },
  handlePreferredColorSchemeChanged(colorScheme) {
    colorScheme = colorScheme.colorScheme;
    if ("dark" === colorScheme) {
      const PREFERS_COLOR_SCHEME_LIGHT3 = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT;
      closure_8 = closure_8 & ~PREFERS_COLOR_SCHEME_LIGHT3;
      const tmp21 = A11Y_FEATURE_MAP.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_LIGHT3];
      if (null != tmp21) {
        let obj = {};
        obj[tmp21] = false;
        uDefault(tmp19(14005).accessibilityPreferencesSharedValue, obj);
        const tmp24 = uDefault;
      }
      const PREFERS_COLOR_SCHEME_DARK2 = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK;
      closure_8 = closure_8 | PREFERS_COLOR_SCHEME_DARK2;
      const tmp27 = A11Y_FEATURE_MAP.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_DARK2];
      if (null != tmp27) {
        obj = {};
        obj[tmp27] = true;
        uDefault(tmp19(14005).accessibilityPreferencesSharedValue, obj);
        const tmp29 = uDefault;
      }
      const tmp17 = AccessibilityFeatureFlags;
    } else if ("light" === colorScheme) {
      const PREFERS_COLOR_SCHEME_DARK = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK;
      closure_8 = closure_8 & ~PREFERS_COLOR_SCHEME_DARK;
      const tmp10 = A11Y_FEATURE_MAP.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_DARK];
      if (null != tmp10) {
        obj1 = {};
        obj1[tmp10] = false;
        uDefault(tmp8(14005).accessibilityPreferencesSharedValue, obj1);
        const tmp13 = uDefault;
      }
      const PREFERS_COLOR_SCHEME_LIGHT2 = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT;
      closure_8 = closure_8 | PREFERS_COLOR_SCHEME_LIGHT2;
      const tmp16 = A11Y_FEATURE_MAP.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_LIGHT2];
      if (null != tmp16) {
        const obj2 = {};
        obj2[tmp16] = true;
        uDefault(tmp8(14005).accessibilityPreferencesSharedValue, obj2);
        const tmp41 = uDefault;
      }
      const tmp6 = AccessibilityFeatureFlags;
    } else {
      const PREFERS_COLOR_SCHEME_DARK3 = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK;
      closure_8 = closure_8 & ~PREFERS_COLOR_SCHEME_DARK3;
      const tmp35 = A11Y_FEATURE_MAP.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_DARK3];
      if (null != tmp35) {
        obj = {};
        obj[tmp35] = false;
        uDefault(tmp33(14005).accessibilityPreferencesSharedValue, obj);
        const tmp2 = uDefault;
      }
      const PREFERS_COLOR_SCHEME_LIGHT = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT;
      closure_8 = closure_8 & ~PREFERS_COLOR_SCHEME_LIGHT;
      const tmp5 = A11Y_FEATURE_MAP.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_LIGHT];
      if (null != tmp5) {
        const obj3 = {};
        obj3[tmp5] = false;
        uDefault(tmp33(14005).accessibilityPreferencesSharedValue, obj3);
        const tmp38 = uDefault;
      }
      const tmp31 = AccessibilityFeatureFlags;
    }
  },
  handleAccessibilityStoreChanged() {
    const REDUCED_MOTION = AccessibilityFeatureFlags.REDUCED_MOTION;
    const useReducedMotion = closure_6.useReducedMotion;
    if (useReducedMotion) {
      closure_8 = tmp3 | REDUCED_MOTION;
    } else {
      closure_8 = tmp3 & ~REDUCED_MOTION;
    }
    const tmp6 = A11Y_FEATURE_MAP.A11Y_FEATURE_MAP[REDUCED_MOTION];
    if (null != tmp6) {
      let obj = {};
      obj[tmp6] = useReducedMotion;
      uDefault(tmp4(14005).accessibilityPreferencesSharedValue, obj);
      const tmp8 = uDefault;
    }
    const REDUCED_MOTION_FROM_USER_SETTINGS = tmp.REDUCED_MOTION_FROM_USER_SETTINGS;
    if ("auto" !== closure_6.rawPrefersReducedMotion) {
      closure_8 = tmp11 | REDUCED_MOTION_FROM_USER_SETTINGS;
    } else {
      closure_8 = tmp11 & ~REDUCED_MOTION_FROM_USER_SETTINGS;
    }
    const tmp12 = A11Y_FEATURE_MAP.A11Y_FEATURE_MAP[REDUCED_MOTION_FROM_USER_SETTINGS];
    if (null != tmp12) {
      obj = {};
      obj[tmp12] = tmp10;
      uDefault(tmp4(14005).accessibilityPreferencesSharedValue, obj);
      const tmp14 = uDefault;
    }
    const SATURATION_LEVEL_DECREASED = tmp.SATURATION_LEVEL_DECREASED;
    if (closure_6.saturation < 1) {
      closure_8 = tmp17 | SATURATION_LEVEL_DECREASED;
    } else {
      closure_8 = tmp17 & ~SATURATION_LEVEL_DECREASED;
    }
    const tmp18 = A11Y_FEATURE_MAP.A11Y_FEATURE_MAP[SATURATION_LEVEL_DECREASED];
    if (null != tmp18) {
      obj = {};
      obj[tmp18] = tmp16;
      uDefault(tmp4(14005).accessibilityPreferencesSharedValue, obj);
      const tmp20 = uDefault;
    }
    const CONTRAST_LEVEL_DECREASED = tmp.CONTRAST_LEVEL_DECREASED;
    if (closure_6.contrast < 1) {
      closure_8 = tmp23 | CONTRAST_LEVEL_DECREASED;
    } else {
      closure_8 = tmp23 & ~CONTRAST_LEVEL_DECREASED;
    }
    const tmp24 = A11Y_FEATURE_MAP.A11Y_FEATURE_MAP[CONTRAST_LEVEL_DECREASED];
    if (null != tmp24) {
      obj1 = {};
      obj1[tmp24] = tmp22;
      uDefault(tmp4(14005).accessibilityPreferencesSharedValue, obj1);
      const tmp26 = uDefault;
    }
    const CONTRAST_LEVEL_INCREASED = tmp.CONTRAST_LEVEL_INCREASED;
    if (closure_6.contrast > 1) {
      closure_8 = tmp29 | CONTRAST_LEVEL_INCREASED;
    } else {
      closure_8 = tmp29 & ~CONTRAST_LEVEL_INCREASED;
    }
    const tmp30 = A11Y_FEATURE_MAP.A11Y_FEATURE_MAP[CONTRAST_LEVEL_INCREASED];
    if (null != tmp30) {
      const obj2 = {};
      obj2[tmp30] = tmp28;
      uDefault(tmp4(14005).accessibilityPreferencesSharedValue, obj2);
      const tmp32 = uDefault;
    }
  },
  handleAppStateChange(arg0) {
    if ("active" === arg0) {
      let result = closure_3.isReduceMotionEnabled();
      result.then((arg0) => {
        let obj = callback(14006);
        let str = "no-preference";
        if (arg0) {
          str = "reduce";
        }
        const result = obj.systemPrefersReducedMotionChanged(str);
        const REDUCED_MOTION = constants.REDUCED_MOTION;
        useReducedMotion = useReducedMotion.useReducedMotion;
        if (useReducedMotion) {
          closure_8 = tmp4 | REDUCED_MOTION;
        } else {
          closure_8 = tmp4 & ~REDUCED_MOTION;
        }
        const tmp5 = callback(14005).A11Y_FEATURE_MAP[REDUCED_MOTION];
        if (null != tmp5) {
          obj = {};
          obj[tmp5] = useReducedMotion;
          callback2(10911)(tmp(14005).accessibilityPreferencesSharedValue, obj);
          const tmp7 = callback2(10911);
        }
      });
      const result1 = closure_3.prefersCrossFadeTransitions();
      result1.then((systemPrefersCrossfades) => {
        const REDUCED_MOTION_PREFERS_CROSSFADES = constants.REDUCED_MOTION_PREFERS_CROSSFADES;
        if (systemPrefersCrossfades) {
          closure_8 = tmp | REDUCED_MOTION_PREFERS_CROSSFADES;
        } else {
          closure_8 = tmp & ~REDUCED_MOTION_PREFERS_CROSSFADES;
        }
        const tmp4 = callback(14005).A11Y_FEATURE_MAP[REDUCED_MOTION_PREFERS_CROSSFADES];
        if (null != tmp4) {
          const obj = {};
          obj[tmp4] = systemPrefersCrossfades;
          callback2(10911)(tmp2(14005).accessibilityPreferencesSharedValue, obj);
          const tmp6 = callback2(10911);
        }
        const result = callback(14006).systemPrefersCrossfadesChanged(systemPrefersCrossfades);
      });
    }
  }
};