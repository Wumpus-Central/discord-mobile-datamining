import { renderElement } from "00114_renderElement.js";
// _runtime/00447_map.js
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
const items = [["change", "touchExplorationDidChange"], ["reduceMotionChanged", "reduceMotionDidChange"], ["highTextContrastChanged", "highTextContrastDidChange"], ["screenReaderChanged", "touchExplorationDidChange"], ["accessibilityServiceChanged", "accessibilityServiceDidChange"], ["invertColorsChanged", "invertColorDidChange"], ["grayscaleChanged", "grayscaleModeDidChange"]];
const map = new Map(items);
arg5.default = {
  isBoldTextEnabled() {
    return Promise.resolve(false);
  },
  isGrayscaleEnabled(arg0) {
    return new Promise((arg0, arg1) => {
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
        const error = new Error("NativeAccessibilityInfoAndroid.isGrayscaleEnabled is not available");
        arg1(error);
      }
    });
  },
  isInvertColorsEnabled(arg0) {
    return new Promise((arg0, arg1) => {
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
        const error = new Error("NativeAccessibilityInfoAndroid.isInvertColorsEnabled is not available");
        arg1(error);
      }
    });
  },
  isReduceMotionEnabled(arg0) {
    return new Promise((arg0, arg1) => {
      if (null != callback(table[0])) {
        const result = callback(table[0]).isReduceMotionEnabled(arg0);
        const tmpResult = callback(table[0]);
      } else {
        const _Error = Error;
        const error = new Error("NativeAccessibilityInfoAndroid is not available");
        arg1(error);
      }
    });
  },
  isHighTextContrastEnabled(arg0) {
    return new Promise((arg0, arg1) => {
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
        const error = new Error("NativeAccessibilityInfoAndroid.isHighTextContrastEnabled is not available");
        arg1(error);
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
  isScreenReaderEnabled(ref, arg1, id) {
    return new Promise((arg0, arg1) => {
      if (null != callback(table[0])) {
        const result = callback(table[0]).isTouchExplorationEnabled(arg0);
        const tmpResult = callback(table[0]);
      } else {
        const _Error = Error;
        const error = new Error("NativeAccessibilityInfoAndroid is not available");
        arg1(error);
      }
    });
  },
  isAccessibilityServiceEnabled(arg0) {
    return new Promise((arg0, arg1) => {
      if (null != callback(table[0])) {
        if (null != tmp(tmp2[0]).isAccessibilityServiceEnabled) {
          const result = tmp(tmp2[0]).isAccessibilityServiceEnabled(arg0);
          const tmpResult = tmp(tmp2[0]);
        }
      }
      const error = new Error("NativeAccessibilityInfoAndroid.isAccessibilityServiceEnabled is not available");
      arg1(error);
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
      obj = module(92);
      addListenerResult = obj.addListener(value, arg1);
    }
    return addListenerResult;
  },
  setAccessibilityFocus(arg0) {
    module(279)(arg0, "focus");
  },
  sendAccessibilityEvent(arg0, arg1) {
    const result = renderElement /* renderElement */.sendAccessibilityEvent(arg0, arg1);
  },
  announceForAccessibility(intl) {
    const obj = module(448);
    if (obj != null) {
      const result = obj.announceForAccessibility(intl);
    }
  },
  announceForAccessibilityWithOptions(intl) {
    const obj = module(448);
    if (obj != null) {
      const result = obj.announceForAccessibility(intl);
    }
  },
  getRecommendedTimeoutMillis(closure_0, arg1) {
    return new Promise((arg0, arg1) => {
      const tmp3 = outer1_1(outer1_2[0]);
      let prop;
      if (tmp3 != null) {
        prop = tmp3.getRecommendedTimeoutMillis;
      }
      if (null != prop) {
        const recommendedTimeoutMillis = outer1_1(outer1_2[0]).getRecommendedTimeoutMillis(closure_0, arg0);
        const tmpResult = outer1_1(outer1_2[0]);
      } else {
        arg0(closure_0);
      }
    });
  }
};