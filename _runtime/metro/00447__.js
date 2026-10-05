// _runtime/metro/00447__.js
import _modDef92 from "00092__.js";
import renderElement from "../00114_renderElement.js";
import legacySendAccessibilityEventDefault from "../00279_legacySendAccessibilityEvent.js";
import AccessibilityInfoDefault from "../00448_AccessibilityInfo.js";

const items = [
  ["change", "touchExplorationDidChange"],
  ["reduceMotionChanged", "reduceMotionDidChange"],
  ["highTextContrastChanged", "highTextContrastDidChange"],
  ["screenReaderChanged", "touchExplorationDidChange"],
  ["accessibilityServiceChanged", "accessibilityServiceDidChange"],
  ["invertColorsChanged", "invertColorDidChange"],
  ["grayscaleChanged", "grayscaleModeDidChange"],
];
const map = new Map(items);
let obj = {
  isBoldTextEnabled() {
    return Promise.resolve(false);
  },
  isGrayscaleEnabled() {
    const promise = new Promise(function (arg0, fn) {
      const tmp3 = AccessibilityInfoDefault;
      let isGrayscaleEnabled;
      if (tmp3 != null) {
        isGrayscaleEnabled = tmp3.isGrayscaleEnabled;
      }
      if (null != isGrayscaleEnabled) {
        const tmpResult = AccessibilityInfoDefault;
        tmpResult.isGrayscaleEnabled(arg0);
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("NativeAccessibilityInfoAndroid.isGrayscaleEnabled is not available");
        fn(error);
      }
    });
    return promise;
  },
  isInvertColorsEnabled() {
    const promise = new Promise(function (arg0, fn) {
      const tmp3 = AccessibilityInfoDefault;
      let prop;
      if (tmp3 != null) {
        prop = tmp3.isInvertColorsEnabled;
      }
      if (null != prop) {
        const tmpResult = AccessibilityInfoDefault;
        const result = tmpResult.isInvertColorsEnabled(arg0);
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("NativeAccessibilityInfoAndroid.isInvertColorsEnabled is not available");
        fn(error);
      }
    });
    return promise;
  },
  isReduceMotionEnabled() {
    const promise = new Promise(function (arg0, fn) {
      if (null != AccessibilityInfoDefault) {
        const tmpResult = AccessibilityInfoDefault;
        const result = tmpResult.isReduceMotionEnabled(arg0);
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("NativeAccessibilityInfoAndroid is not available");
        fn(error);
      }
    });
    return promise;
  },
  isHighTextContrastEnabled() {
    const promise = new Promise(function (arg0, fn) {
      const tmp3 = AccessibilityInfoDefault;
      let prop;
      if (tmp3 != null) {
        prop = tmp3.isHighTextContrastEnabled;
      }
      if (null != prop) {
        const tmpResult = AccessibilityInfoDefault;
        const result = tmpResult.isHighTextContrastEnabled(arg0);
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("NativeAccessibilityInfoAndroid.isHighTextContrastEnabled is not available");
        fn(error);
      }
    });
    return promise;
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
    const promise = new Promise(function (arg0, fn) {
      if (null != AccessibilityInfoDefault) {
        const tmpResult = AccessibilityInfoDefault;
        const result = tmpResult.isTouchExplorationEnabled(arg0);
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("NativeAccessibilityInfoAndroid is not available");
        fn(error);
      }
    });
    return promise;
  },
  isAccessibilityServiceEnabled() {
    const promise = new Promise((arg0, fn) => {
      if (null != AccessibilityInfoDefault) {
        if (null != AccessibilityInfoDefault.isAccessibilityServiceEnabled) {
          const tmpResult = AccessibilityInfoDefault;
          const result = tmpResult.isAccessibilityServiceEnabled(arg0);
        }
      }
      const error = new Error("NativeAccessibilityInfoAndroid.isAccessibilityServiceEnabled is not available");
      fn(error);
    });
    return promise;
  },
  addEventListener(arg0, arg1) {
    let addListenerResult;
    function remove() {}
    const value = map.get(arg0);
    if (null == value) {
      addListenerResult = { remove };
      const obj2 = { remove };
    } else {
      const obj = _modDef92;
      addListenerResult = obj.addListener(value, arg1);
    }
    return addListenerResult;
  },
  setAccessibilityFocus(arg0) {
    legacySendAccessibilityEventDefault(arg0, "focus");
  },
  sendAccessibilityEvent(arg0, arg1) {
    const obj = renderElement;
    const result = obj.sendAccessibilityEvent(arg0, arg1);
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
    let closure_0 = arg0;
    const promise = new Promise((fn, arg1) => {
      const tmp3 = AccessibilityInfoDefault;
      let prop;
      if (tmp3 != null) {
        prop = tmp3.getRecommendedTimeoutMillis;
      }
      if (null != prop) {
        const tmpResult = AccessibilityInfoDefault;
        const recommendedTimeoutMillis = tmpResult.getRecommendedTimeoutMillis(closure_0, fn);
      } else {
        fn(closure_0);
      }
    });
    return promise;
  },
};

export default obj;
