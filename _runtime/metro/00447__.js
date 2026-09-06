// === Module 447: ? ===

// Module 447
import _modDef92 from "module_92" /* 92 */;
import renderElement from "renderElement" /* 114 */;
import legacySendAccessibilityEventDefault from "legacySendAccessibilityEvent" /* 279 */;
import AccessibilityInfoDefault from "AccessibilityInfo" /* 448 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
const items = [["change", "touchExplorationDidChange"], ["reduceMotionChanged", "reduceMotionDidChange"], ["highTextContrastChanged", "highTextContrastDidChange"], ["screenReaderChanged", "touchExplorationDidChange"], ["accessibilityServiceChanged", "accessibilityServiceDidChange"], ["invertColorsChanged", "invertColorDidChange"], ["grayscaleChanged", "grayscaleModeDidChange"]];
const map = new Map(items);

export default {
  isBoldTextEnabled() {
    return Promise.resolve(false);
  },
  isGrayscaleEnabled() {
    return new Promise((arg0, fn) => {
      const tmp3 = AccessibilityInfoDefault;
      let isGrayscaleEnabled;
      if (tmp3 != null) {
        isGrayscaleEnabled = tmp3.isGrayscaleEnabled;
      }
      if (null != isGrayscaleEnabled) {
        AccessibilityInfoDefault.isGrayscaleEnabled(arg0);
        const tmpResult = AccessibilityInfoDefault;
      } else {
        const _Error = Error;
        const error = new Error("NativeAccessibilityInfoAndroid.isGrayscaleEnabled is not available");
        fn(error);
      }
    });
  },
  isInvertColorsEnabled() {
    return new Promise((arg0, fn) => {
      const tmp3 = AccessibilityInfoDefault;
      let prop;
      if (tmp3 != null) {
        prop = tmp3.isInvertColorsEnabled;
      }
      if (null != prop) {
        const result = AccessibilityInfoDefault.isInvertColorsEnabled(arg0);
        const tmpResult = AccessibilityInfoDefault;
      } else {
        const _Error = Error;
        const error = new Error("NativeAccessibilityInfoAndroid.isInvertColorsEnabled is not available");
        fn(error);
      }
    });
  },
  isReduceMotionEnabled() {
    return new Promise((arg0, fn) => {
      if (null != AccessibilityInfoDefault) {
        const result = AccessibilityInfoDefault.isReduceMotionEnabled(arg0);
        const tmpResult = AccessibilityInfoDefault;
      } else {
        const _Error = Error;
        const error = new Error("NativeAccessibilityInfoAndroid is not available");
        fn(error);
      }
    });
  },
  isHighTextContrastEnabled() {
    return new Promise((arg0, fn) => {
      const tmp3 = AccessibilityInfoDefault;
      let prop;
      if (tmp3 != null) {
        prop = tmp3.isHighTextContrastEnabled;
      }
      if (null != prop) {
        const result = AccessibilityInfoDefault.isHighTextContrastEnabled(arg0);
        const tmpResult = AccessibilityInfoDefault;
      } else {
        const _Error = Error;
        const error = new Error("NativeAccessibilityInfoAndroid.isHighTextContrastEnabled is not available");
        fn(error);
      }
    });
  },
  isDarkerSystemColorsEnabled() {
    return Promise.resolve(false);
  },
  prefersCrossFadeTransitions() {
    return Promise.resolve(false);
  },
  isReduceTransparencyEnabled() {
    return Promise.resolve(false);
  },
  isScreenReaderEnabled() {
    return new Promise((arg0, fn) => {
      if (null != AccessibilityInfoDefault) {
        const result = AccessibilityInfoDefault.isTouchExplorationEnabled(arg0);
        const tmpResult = AccessibilityInfoDefault;
      } else {
        const _Error = Error;
        const error = new Error("NativeAccessibilityInfoAndroid is not available");
        fn(error);
      }
    });
  },
  isAccessibilityServiceEnabled() {
    return new Promise((arg0, fn) => {
      if (null != AccessibilityInfoDefault) {
        if (null != tmp(tmp2[0]).isAccessibilityServiceEnabled) {
          const result = tmp(tmp2[0]).isAccessibilityServiceEnabled(arg0);
          const tmpResult = tmp(tmp2[0]);
        }
      }
      const error = new Error("NativeAccessibilityInfoAndroid.isAccessibilityServiceEnabled is not available");
      fn(error);
    });
  },
  addEventListener(arg0, arg1) {
    value = map.get(arg0);
    if (null == value) {
      let obj = {
        remove() {

          }
      };
      let addListenerResult = obj;
    } else {
      obj = _modDef92;
      addListenerResult = obj.addListener(value, arg1);
    }
    return addListenerResult;
  },
  setAccessibilityFocus(arg0) {
    legacySendAccessibilityEventDefault(arg0, "focus");
  },
  sendAccessibilityEvent(arg0, arg1) {
    const result = renderElement.sendAccessibilityEvent(arg0, arg1);
  },
  announceForAccessibility(intl) {
    const obj = AccessibilityInfoDefault;
    if (obj != null) {
      const result = obj.announceForAccessibility(intl);
    }
  },
  announceForAccessibilityWithOptions(intl, arg1) {
    const obj = AccessibilityInfoDefault;
    if (obj != null) {
      const result = obj.announceForAccessibility(intl);
    }
  },
  getRecommendedTimeoutMillis(arg0) {
    closure_0 = arg0;
    return new Promise((fn, arg1) => {
      const tmp3 = AccessibilityInfoDefault;
      let prop;
      if (tmp3 != null) {
        prop = tmp3.getRecommendedTimeoutMillis;
      }
      if (null != prop) {
        const recommendedTimeoutMillis = AccessibilityInfoDefault.getRecommendedTimeoutMillis(closure_0, fn);
        const tmpResult = AccessibilityInfoDefault;
      } else {
        fn(closure_0);
      }
    });
  }
};