// _runtime/00447_map.js
import _isNativeReflectConstructDefault from "00092__isNativeReflectConstruct.js";
import renderElement from "00114_renderElement.js";
import legacySendAccessibilityEventDefault from "00279_legacySendAccessibilityEvent.js";
import AccessibilityInfoDefault from "00448_AccessibilityInfo.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
const items = [["change", "touchExplorationDidChange"], ["reduceMotionChanged", "reduceMotionDidChange"], ["highTextContrastChanged", "highTextContrastDidChange"], ["screenReaderChanged", "touchExplorationDidChange"], ["accessibilityServiceChanged", "accessibilityServiceDidChange"], ["invertColorsChanged", "invertColorDidChange"], ["grayscaleChanged", "grayscaleModeDidChange"]];
const map = new Map(items);
arg5.default = {
  isBoldTextEnabled() {
    return Promise.resolve(false);
  },
  isGrayscaleEnabled(arg0) {
    return new Promise((arg0, fn) => {
      const tmp3 = callback(table[0]);
      let isGrayscaleEnabled;
      if (tmp3 != null) {
        isGrayscaleEnabled = tmp3.isGrayscaleEnabled;
      }
      if (null != isGrayscaleEnabled) {
        callback(table[0]).isGrayscaleEnabled(arg0);
        const tmpResult = callback(table[0]);
      } else {
        const _Error = Error;
        error = new Error("NativeAccessibilityInfoAndroid.isGrayscaleEnabled is not available");
        fn(error);
      }
    });
  },
  isInvertColorsEnabled(arg0) {
    return new Promise((arg0, fn) => {
      const tmp3 = callback(table[0]);
      let prop;
      if (tmp3 != null) {
        prop = tmp3.isInvertColorsEnabled;
      }
      if (null != prop) {
        const result = callback(table[0]).isInvertColorsEnabled(arg0);
        const tmpResult = callback(table[0]);
      } else {
        const _Error = Error;
        error = new Error("NativeAccessibilityInfoAndroid.isInvertColorsEnabled is not available");
        fn(error);
      }
    });
  },
  isReduceMotionEnabled(arg0) {
    return new Promise((arg0, fn) => {
      if (null != callback(table[0])) {
        const result = callback(table[0]).isReduceMotionEnabled(arg0);
        const tmpResult = callback(table[0]);
      } else {
        const _Error = Error;
        error = new Error("NativeAccessibilityInfoAndroid is not available");
        fn(error);
      }
    });
  },
  isHighTextContrastEnabled(arg0) {
    return new Promise((arg0, fn) => {
      const tmp3 = callback(table[0]);
      let prop;
      if (tmp3 != null) {
        prop = tmp3.isHighTextContrastEnabled;
      }
      if (null != prop) {
        const result = callback(table[0]).isHighTextContrastEnabled(arg0);
        const tmpResult = callback(table[0]);
      } else {
        const _Error = Error;
        error = new Error("NativeAccessibilityInfoAndroid.isHighTextContrastEnabled is not available");
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
  isScreenReaderEnabled(closure_2, arg1, id) {
    return new Promise((arg0, fn) => {
      if (null != callback(table[0])) {
        const result = callback(table[0]).isTouchExplorationEnabled(arg0);
        const tmpResult = callback(table[0]);
      } else {
        const _Error = Error;
        error = new Error("NativeAccessibilityInfoAndroid is not available");
        fn(error);
      }
    });
  },
  isAccessibilityServiceEnabled(arg0) {
    return new Promise((arg0, fn) => {
      if (null != callback(table[0])) {
        if (null != callback(table[0]).isAccessibilityServiceEnabled) {
          const result = callback(table[0]).isAccessibilityServiceEnabled(arg0);
          const tmpResult = callback(table[0]);
        }
      }
      error = new Error("NativeAccessibilityInfoAndroid.isAccessibilityServiceEnabled is not available");
      fn(error);
    });
  },
  addEventListener(arg0, arg1) {
    const value = map.get(arg0);
    if (null == value) {
      let obj = { remove: null };
      obj[0] = function remove() {

      };
      let addListenerResult = obj;
    } else {
      obj = _isNativeReflectConstructDefault;
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
  announceForAccessibilityWithOptions(intl) {
    const obj = AccessibilityInfoDefault;
    if (obj != null) {
      const result = obj.announceForAccessibility(intl);
    }
  },
  getRecommendedTimeoutMillis(closure_0, fn) {
    return new Promise((fn) => {
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