// discord_app/modules/a11y/native/AccessibilitySystemFeatures.tsx
import get_ActivityIndicator from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { AccessibilityFeatureFlags } from "AccessibilityFeatureFlags";

let c3;
let c4;
let c5;
({ AccessibilityInfo: c3, Appearance: c4, AppState: c5 } = get_ActivityIndicator);
const NONE = AccessibilityFeatureFlags.NONE;
let result = require("AccessibilityFeatureFlags").fileFinishedImporting("modules/a11y/native/AccessibilitySystemFeatures.tsx");

export default {
  init() {
    maybeApplyNoTextColorForLightCustomTheme.addChangeListener(this.handleAccessibilityStoreChanged);
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
    const result4 = importDefault(698).setSystemAccessibilityFeatures(this.getActiveFeatures);
  },
  getActiveFeatures() {
    return NONE;
  },
  handleReduceMotionChanged(arg0) {
    let obj = require(13521) /* setFontSize */;
    let str = "no-preference";
    if (arg0) {
      str = "reduce";
    }
    const result = obj.systemPrefersReducedMotionChanged(str);
    const REDUCED_MOTION = AccessibilityFeatureFlags.REDUCED_MOTION;
    const useReducedMotion = maybeApplyNoTextColorForLightCustomTheme.useReducedMotion;
    if (useReducedMotion) {
      let closure_8 = tmp4 | REDUCED_MOTION;
    } else {
      closure_8 = tmp4 & ~REDUCED_MOTION;
    }
    const tmp5 = require(13520) /* A11Y_FEATURE_MAP */.A11Y_FEATURE_MAP[REDUCED_MOTION];
    if (null != tmp5) {
      obj = {};
      obj[tmp5] = useReducedMotion;
      importDefault(10055)(tmp(13520).accessibilityPreferencesSharedValue, obj);
      const tmp7 = importDefault(10055);
    }
  },
  handleReduceTransparencyChanged(arg0) {
    const REDUCED_TRANSPARENCY = AccessibilityFeatureFlags.REDUCED_TRANSPARENCY;
    if (arg0) {
      let closure_8 = tmp | REDUCED_TRANSPARENCY;
    } else {
      closure_8 = tmp & ~REDUCED_TRANSPARENCY;
    }
    const tmp4 = require(13520) /* A11Y_FEATURE_MAP */.A11Y_FEATURE_MAP[REDUCED_TRANSPARENCY];
    if (null != tmp4) {
      const obj = {};
      obj[tmp4] = arg0;
      importDefault(10055)(require(13520) /* A11Y_FEATURE_MAP */.accessibilityPreferencesSharedValue, obj);
      const tmp6 = importDefault(10055);
    }
  },
  handleBoldTextChanged(arg0) {
    const BOLD_TEXT = AccessibilityFeatureFlags.BOLD_TEXT;
    if (arg0) {
      let closure_8 = tmp | BOLD_TEXT;
    } else {
      closure_8 = tmp & ~BOLD_TEXT;
    }
    const tmp4 = require(13520) /* A11Y_FEATURE_MAP */.A11Y_FEATURE_MAP[BOLD_TEXT];
    if (null != tmp4) {
      const obj = {};
      obj[tmp4] = arg0;
      importDefault(10055)(require(13520) /* A11Y_FEATURE_MAP */.accessibilityPreferencesSharedValue, obj);
      const tmp6 = importDefault(10055);
    }
  },
  handleGrayscaleChanged(arg0) {
    const GRAYSCALE = AccessibilityFeatureFlags.GRAYSCALE;
    if (arg0) {
      let closure_8 = tmp | GRAYSCALE;
    } else {
      closure_8 = tmp & ~GRAYSCALE;
    }
    const tmp4 = require(13520) /* A11Y_FEATURE_MAP */.A11Y_FEATURE_MAP[GRAYSCALE];
    if (null != tmp4) {
      const obj = {};
      obj[tmp4] = arg0;
      importDefault(10055)(require(13520) /* A11Y_FEATURE_MAP */.accessibilityPreferencesSharedValue, obj);
      const tmp6 = importDefault(10055);
    }
  },
  handleInvertColorsChanged(arg0) {
    const INVERT_COLORS = AccessibilityFeatureFlags.INVERT_COLORS;
    if (arg0) {
      let closure_8 = tmp | INVERT_COLORS;
    } else {
      closure_8 = tmp & ~INVERT_COLORS;
    }
    const tmp4 = require(13520) /* A11Y_FEATURE_MAP */.A11Y_FEATURE_MAP[INVERT_COLORS];
    if (null != tmp4) {
      const obj = {};
      obj[tmp4] = arg0;
      importDefault(10055)(require(13520) /* A11Y_FEATURE_MAP */.accessibilityPreferencesSharedValue, obj);
      const tmp6 = importDefault(10055);
    }
  },
  handlePreferredColorSchemeChanged(colorScheme) {
    colorScheme = colorScheme.colorScheme;
    if ("dark" === colorScheme) {
      const PREFERS_COLOR_SCHEME_LIGHT3 = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT;
      closure_8 = closure_8 & ~PREFERS_COLOR_SCHEME_LIGHT3;
      const tmp21 = require(13520) /* A11Y_FEATURE_MAP */.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_LIGHT3];
      if (null != tmp21) {
        let obj = {};
        obj[tmp21] = false;
        importDefault(10055)(tmp19(13520).accessibilityPreferencesSharedValue, obj);
        const tmp24 = importDefault(10055);
      }
      const PREFERS_COLOR_SCHEME_DARK2 = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK;
      closure_8 = closure_8 | PREFERS_COLOR_SCHEME_DARK2;
      const tmp27 = require(13520) /* A11Y_FEATURE_MAP */.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_DARK2];
      if (null != tmp27) {
        obj = {};
        obj[tmp27] = true;
        importDefault(10055)(tmp19(13520).accessibilityPreferencesSharedValue, obj);
        const tmp29 = importDefault(10055);
      }
      const tmp17 = AccessibilityFeatureFlags;
    } else if ("light" === colorScheme) {
      const PREFERS_COLOR_SCHEME_DARK = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK;
      closure_8 = closure_8 & ~PREFERS_COLOR_SCHEME_DARK;
      const tmp10 = require(13520) /* A11Y_FEATURE_MAP */.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_DARK];
      if (null != tmp10) {
        const obj1 = {};
        obj1[tmp10] = false;
        importDefault(10055)(tmp8(13520).accessibilityPreferencesSharedValue, obj1);
        const tmp13 = importDefault(10055);
      }
      const PREFERS_COLOR_SCHEME_LIGHT2 = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT;
      closure_8 = closure_8 | PREFERS_COLOR_SCHEME_LIGHT2;
      const tmp16 = require(13520) /* A11Y_FEATURE_MAP */.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_LIGHT2];
      if (null != tmp16) {
        const obj2 = {};
        obj2[tmp16] = true;
        importDefault(10055)(tmp8(13520).accessibilityPreferencesSharedValue, obj2);
        const tmp41 = importDefault(10055);
      }
      const tmp6 = AccessibilityFeatureFlags;
    } else {
      const PREFERS_COLOR_SCHEME_DARK3 = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK;
      closure_8 = closure_8 & ~PREFERS_COLOR_SCHEME_DARK3;
      const tmp35 = require(13520) /* A11Y_FEATURE_MAP */.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_DARK3];
      if (null != tmp35) {
        obj = {};
        obj[tmp35] = false;
        importDefault(10055)(tmp33(13520).accessibilityPreferencesSharedValue, obj);
        const tmp2 = importDefault(10055);
      }
      const PREFERS_COLOR_SCHEME_LIGHT = AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT;
      closure_8 = closure_8 & ~PREFERS_COLOR_SCHEME_LIGHT;
      const tmp5 = require(13520) /* A11Y_FEATURE_MAP */.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_LIGHT];
      if (null != tmp5) {
        const obj3 = {};
        obj3[tmp5] = false;
        importDefault(10055)(tmp33(13520).accessibilityPreferencesSharedValue, obj3);
        const tmp38 = importDefault(10055);
      }
      const tmp31 = AccessibilityFeatureFlags;
    }
  },
  handleAccessibilityStoreChanged() {
    const REDUCED_MOTION = AccessibilityFeatureFlags.REDUCED_MOTION;
    const useReducedMotion = maybeApplyNoTextColorForLightCustomTheme.useReducedMotion;
    if (useReducedMotion) {
      let closure_8 = tmp3 | REDUCED_MOTION;
    } else {
      closure_8 = tmp3 & ~REDUCED_MOTION;
    }
    const tmp6 = require(13520) /* A11Y_FEATURE_MAP */.A11Y_FEATURE_MAP[REDUCED_MOTION];
    if (null != tmp6) {
      let obj = {};
      obj[tmp6] = useReducedMotion;
      importDefault(10055)(tmp4(13520).accessibilityPreferencesSharedValue, obj);
      const tmp8 = importDefault(10055);
    }
    const REDUCED_MOTION_FROM_USER_SETTINGS = tmp.REDUCED_MOTION_FROM_USER_SETTINGS;
    if ("auto" !== maybeApplyNoTextColorForLightCustomTheme.rawPrefersReducedMotion) {
      closure_8 = tmp11 | REDUCED_MOTION_FROM_USER_SETTINGS;
    } else {
      closure_8 = tmp11 & ~REDUCED_MOTION_FROM_USER_SETTINGS;
    }
    const tmp12 = require(13520) /* A11Y_FEATURE_MAP */.A11Y_FEATURE_MAP[REDUCED_MOTION_FROM_USER_SETTINGS];
    if (null != tmp12) {
      obj = {};
      obj[tmp12] = tmp10;
      importDefault(10055)(tmp4(13520).accessibilityPreferencesSharedValue, obj);
      const tmp14 = importDefault(10055);
    }
    const SATURATION_LEVEL_DECREASED = tmp.SATURATION_LEVEL_DECREASED;
    if (maybeApplyNoTextColorForLightCustomTheme.saturation < 1) {
      closure_8 = tmp17 | SATURATION_LEVEL_DECREASED;
    } else {
      closure_8 = tmp17 & ~SATURATION_LEVEL_DECREASED;
    }
    const tmp18 = require(13520) /* A11Y_FEATURE_MAP */.A11Y_FEATURE_MAP[SATURATION_LEVEL_DECREASED];
    if (null != tmp18) {
      obj = {};
      obj[tmp18] = tmp16;
      importDefault(10055)(tmp4(13520).accessibilityPreferencesSharedValue, obj);
      const tmp20 = importDefault(10055);
    }
    const CONTRAST_LEVEL_DECREASED = tmp.CONTRAST_LEVEL_DECREASED;
    if (maybeApplyNoTextColorForLightCustomTheme.contrast < 1) {
      closure_8 = tmp23 | CONTRAST_LEVEL_DECREASED;
    } else {
      closure_8 = tmp23 & ~CONTRAST_LEVEL_DECREASED;
    }
    const tmp24 = require(13520) /* A11Y_FEATURE_MAP */.A11Y_FEATURE_MAP[CONTRAST_LEVEL_DECREASED];
    if (null != tmp24) {
      const obj1 = {};
      obj1[tmp24] = tmp22;
      importDefault(10055)(tmp4(13520).accessibilityPreferencesSharedValue, obj1);
      const tmp26 = importDefault(10055);
    }
    const CONTRAST_LEVEL_INCREASED = tmp.CONTRAST_LEVEL_INCREASED;
    if (maybeApplyNoTextColorForLightCustomTheme.contrast > 1) {
      closure_8 = tmp29 | CONTRAST_LEVEL_INCREASED;
    } else {
      closure_8 = tmp29 & ~CONTRAST_LEVEL_INCREASED;
    }
    const tmp30 = require(13520) /* A11Y_FEATURE_MAP */.A11Y_FEATURE_MAP[CONTRAST_LEVEL_INCREASED];
    if (null != tmp30) {
      const obj2 = {};
      obj2[tmp30] = tmp28;
      importDefault(10055)(tmp4(13520).accessibilityPreferencesSharedValue, obj2);
      const tmp32 = importDefault(10055);
    }
  },
  handleAppStateChange(arg0) {
    if ("active" === arg0) {
      let result = closure_3.isReduceMotionEnabled();
      result.then((arg0) => {
        let obj = callback(13521);
        let str = "no-preference";
        if (arg0) {
          str = "reduce";
        }
        const result = obj.systemPrefersReducedMotionChanged(str);
        const REDUCED_MOTION = constants.REDUCED_MOTION;
        useReducedMotion = useReducedMotion.useReducedMotion;
        if (useReducedMotion) {
          let closure_8 = tmp4 | REDUCED_MOTION;
        } else {
          closure_8 = tmp4 & ~REDUCED_MOTION;
        }
        const tmp5 = callback(13520).A11Y_FEATURE_MAP[REDUCED_MOTION];
        if (null != tmp5) {
          obj = {};
          obj[tmp5] = useReducedMotion;
          callback2(10055)(tmp(13520).accessibilityPreferencesSharedValue, obj);
          const tmp7 = callback2(10055);
        }
      });
      const result1 = closure_3.prefersCrossFadeTransitions();
      result1.then((systemPrefersCrossfades) => {
        const REDUCED_MOTION_PREFERS_CROSSFADES = constants.REDUCED_MOTION_PREFERS_CROSSFADES;
        if (systemPrefersCrossfades) {
          let closure_8 = tmp | REDUCED_MOTION_PREFERS_CROSSFADES;
        } else {
          closure_8 = tmp & ~REDUCED_MOTION_PREFERS_CROSSFADES;
        }
        const tmp4 = callback(13520).A11Y_FEATURE_MAP[REDUCED_MOTION_PREFERS_CROSSFADES];
        if (null != tmp4) {
          const obj = {};
          obj[tmp4] = systemPrefersCrossfades;
          callback2(10055)(tmp2(13520).accessibilityPreferencesSharedValue, obj);
          const tmp6 = callback2(10055);
        }
        const result = callback(13521).systemPrefersCrossfadesChanged(systemPrefersCrossfades);
      });
    }
  }
};