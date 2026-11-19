// _runtime/01702_NativeReanimatedModule.js
import _classPrivateFieldKeyDefault from "00091__classPrivateFieldKey.js";
import _mod1706 from "metro/01706__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _classPrivateFieldBase from "00090__classPrivateFieldBase.js";

const NativeReanimatedModule = global;
require = arg1;
let closure_5 = _classPrivateFieldKeyDefault("reanimatedModuleProxy");
class NativeReanimatedModule {
  constructor() {
    tmp3 = closure_3(this, NativeReanimatedModule);
    tmp4 = hasOwnProperty;
    definePropertyResult = Object.defineProperty(this, hasOwnProperty, { writable: true, value: "Array" });
    tmp6 = closure_0;
    tmp7 = closure_1;
    tmp8 = c2;
    closure_0._REANIMATED_VERSION_JS = closure_1(c2[4]).jsVersion;
    if (closure_1(c2[5]).ReanimatedTurboModule) {
      _globalThis = globalThis;
      flag = true;
      if (!globalThis.__reanimatedModuleProxy) {
        _globalThis2 = globalThis;
        tmp7Result = tmp7(tmp8[7]);
        globalThis.__UI_WORKLET_RUNTIME_HOLDER = tmp7Result.getUIRuntimeHolder();
        _globalThis3 = globalThis;
        tmp7Result1 = tmp7(tmp8[7]);
        globalThis.__UI_SCHEDULER_HOLDER = tmp7Result1.getUISchedulerHolder();
        ReanimatedTurboModule = tmp7(tmp8[5]).ReanimatedTurboModule;
        flag = ReanimatedTurboModule.installTurboModule();
        _globalThis4 = globalThis;
        str = "__UI_WORKLET_RUNTIME_HOLDER";
        delete tmp2[tmp];
        _globalThis5 = globalThis;
        str2 = "__UI_SCHEDULER_HOLDER";
        delete tmp2[tmp];
      }
      if (!flag) {
        _Error = Error;
        tmp9 = new.target;
        str3 =
          "[Reanimated] Failed to install the native module because React Native has no active surface on its discarded instance. This happens when the app is reloaded while a previous reload is still in progress, for example during an OTA update immediately upon launch. No action is required; the app will continue to function as usual.";
        tmp10 = new.target;
        error = new Error(
          "[Reanimated] Failed to install the native module because React Native has no active surface on its discarded instance. This happens when the app is reloaded while a previous reload is still in progress, for example during an OTA update immediately upon launch. No action is required; the app will continue to function as usual.",
        );
        tmp12 = error;
        throw error;
      }
    }
    if (undefined === tmp6.__reanimatedModuleProxy) {
      _Error2 = Error;
      tmp14 = new.target;
      str4 =
        "[Reanimated] Native part of Reanimated doesn't seem to be initialized.\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.";
      tmp15 = new.target;
      error1 = new Error(
        "[Reanimated] Native part of Reanimated doesn't seem to be initialized.\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.",
      );
      tmp17 = error1;
      throw error1;
    } else {
      tmp13 = closure_4;
      closure_4(this, tmp4)[tmp4] = tmp6.__reanimatedModuleProxy;
      return;
    }
  }
}
const entry = {
  key: "isSensorAvailable",
  value: function isSensorAvailable(arg0) {
    return _classPrivateFieldBase(this, closure_5)[closure_5].isSensorAvailable(arg0);
  },
};
const items = [
  entry,
  {
    key: "registerSensor",
    value: function registerSensor(arg0, arg1, arg2, arg3) {
      return _classPrivateFieldBase(this, closure_5)[closure_5].registerSensor(arg0, arg1, arg2, arg3);
    },
  },
  {
    key: "unregisterSensor",
    value: function unregisterSensor(arg0) {
      return _classPrivateFieldBase(this, closure_5)[closure_5].unregisterSensor(arg0);
    },
  },
  {
    key: "registerEventHandler",
    value: function registerEventHandler(arg0, arg1, arg2) {
      return _classPrivateFieldBase(this, closure_5)[closure_5].registerEventHandler(arg0, arg1, arg2);
    },
  },
  {
    key: "unregisterEventHandler",
    value: function unregisterEventHandler(arg0) {
      return _classPrivateFieldBase(this, closure_5)[closure_5].unregisterEventHandler(arg0);
    },
  },
  {
    key: "getViewProp",
    value: function getViewProp(arg0, arg1, __internalInstanceHandle, arg3) {
      const shadowNodeWrapperFromRef = _mod1706.getShadowNodeWrapperFromRef(__internalInstanceHandle);
      return _classPrivateFieldBase(this, closure_5)[closure_5].getViewProp(shadowNodeWrapperFromRef, arg1, arg3);
    },
  },
  {
    key: "configureLayoutAnimationBatch",
    value: function configureLayoutAnimationBatch(arg0) {
      const result = _classPrivateFieldBase(this, closure_5)[closure_5].configureLayoutAnimationBatch(arg0);
    },
  },
  {
    key: "setShouldAnimateExitingForTag",
    value: function setShouldAnimateExitingForTag(arg0, arg1) {
      const result = _classPrivateFieldBase(this, closure_5)[closure_5].setShouldAnimateExitingForTag(arg0, arg1);
    },
  },
  {
    key: "getStaticFeatureFlag",
    value: function getStaticFeatureFlag(arg0) {
      return _classPrivateFieldBase(this, closure_5)[closure_5].getStaticFeatureFlag(arg0);
    },
  },
  {
    key: "setDynamicFeatureFlag",
    value: function setDynamicFeatureFlag(arg0, arg1) {
      const result = _classPrivateFieldBase(this, closure_5)[closure_5].setDynamicFeatureFlag(arg0, arg1);
    },
  },
  {
    key: "subscribeForKeyboardEvents",
    value: function subscribeForKeyboardEvents(arg0, arg1, arg2) {
      return _classPrivateFieldBase(this, closure_5)[closure_5].subscribeForKeyboardEvents(arg0, arg1, arg2);
    },
  },
  {
    key: "unsubscribeFromKeyboardEvents",
    value: function unsubscribeFromKeyboardEvents(arg0) {
      const result = _classPrivateFieldBase(this, closure_5)[closure_5].unsubscribeFromKeyboardEvents(arg0);
    },
  },
  {
    key: "setViewStyle",
    value: function setViewStyle(arg0, arg1) {
      _classPrivateFieldBase(this, closure_5)[closure_5].setViewStyle(arg0, arg1);
    },
  },
  {
    key: "setCSSEventHandler",
    value: function setCSSEventHandler(arg0) {
      _classPrivateFieldBase(this, closure_5)[closure_5].setCSSEventHandler(arg0);
    },
  },
  {
    key: "markNodeAsRemovable",
    value: function markNodeAsRemovable(arg0) {
      _classPrivateFieldBase(this, closure_5)[closure_5].markNodeAsRemovable(arg0);
    },
  },
  {
    key: "unmarkNodeAsRemovable",
    value: function unmarkNodeAsRemovable(arg0) {
      const result = _classPrivateFieldBase(this, closure_5)[closure_5].unmarkNodeAsRemovable(arg0);
    },
  },
  {
    key: "registerCSSKeyframes",
    value: function registerCSSKeyframes(arg0, arg1, arg2) {
      _classPrivateFieldBase(this, closure_5)[closure_5].registerCSSKeyframes(arg0, arg1, arg2);
    },
  },
  {
    key: "unregisterCSSKeyframes",
    value: function unregisterCSSKeyframes(arg0, arg1) {
      const result = _classPrivateFieldBase(this, closure_5)[closure_5].unregisterCSSKeyframes(arg0, arg1);
    },
  },
  {
    key: "applyCSSAnimations",
    value: function applyCSSAnimations(arg0, arg1, arg2) {
      _classPrivateFieldBase(this, closure_5)[closure_5].applyCSSAnimations(arg0, arg1, arg2);
    },
  },
  {
    key: "unregisterCSSAnimations",
    value: function unregisterCSSAnimations(arg0) {
      const result = _classPrivateFieldBase(this, closure_5)[closure_5].unregisterCSSAnimations(arg0);
    },
  },
  {
    key: "runCSSTransition",
    value: function runCSSTransition(arg0, arg1, arg2) {
      _classPrivateFieldBase(this, closure_5)[closure_5].runCSSTransition(arg0, arg1, arg2);
    },
  },
  {
    key: "unregisterCSSTransition",
    value: function unregisterCSSTransition(arg0) {
      const result = _classPrivateFieldBase(this, closure_5)[closure_5].unregisterCSSTransition(arg0);
    },
  },
  {
    key: "getSettledUpdates",
    value: function getSettledUpdates(arg0) {
      return _classPrivateFieldBase(this, closure_5)[closure_5].getSettledUpdates(arg0);
    },
  },
  {
    key: "registerPseudoStyles",
    value: function registerPseudoStyles(arg0, arg1) {
      _classPrivateFieldBase(this, closure_5)[closure_5].registerPseudoStyles(arg0, arg1);
    },
  },
  {
    key: "unregisterPseudoStyles",
    value: function unregisterPseudoStyles(arg0) {
      const result = _classPrivateFieldBase(this, closure_5)[closure_5].unregisterPseudoStyles(arg0);
    },
  },
];
let closure_6 = _createClass(NativeReanimatedModule, items);

export function createNativeReanimatedModule() {
  return new closure_6();
}
