// _runtime/01660_importDefaultResult1.js
import _classCallCheck from "_classCallCheck";
import importDefaultResult from "_createClass";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import importDefaultResult1 from "_classPrivateFieldKey";
import { getShadowNodeWrapperFromRef } from "01662_getShadowNodeWrapperFromRef.js";

let DummyReanimatedModuleProxy = global;
const require = arg1;
let closure_5 = importDefaultResult1("workletsModule");
let closure_6 = importDefaultResult1("reanimatedModuleProxy");
class NativeReanimatedModule {
  constructor() {
    self = this;
    tmp = outer1_3(this, DummyReanimatedModuleProxy);
    definePropertyResult = Object.defineProperty(this, workletsModule, { writable: true, value: "a" });
    tmp3 = reanimatedModuleProxy;
    definePropertyResult1 = Object.defineProperty(this, reanimatedModuleProxy, { writable: true, value: "a" });
    tmp5 = __esModule;
    tmp7 = closure_1;
    tmp8 = closure_2;
    tmp6 = __esModule(this, workletsModule);
    tmp6[workletsModule] = require("WorkletsModule").WorkletsModule;
    tmp9 = DummyReanimatedModuleProxy;
    DummyReanimatedModuleProxy._REANIMATED_VERSION_JS = require("module_1661").jsVersion;
    if (undefined === DummyReanimatedModuleProxy.__reanimatedModuleProxy) {
      if (require("ReanimatedTurboModule").ReanimatedTurboModule) {
        ReanimatedTurboModule = require("ReanimatedTurboModule").ReanimatedTurboModule;
        if (!ReanimatedTurboModule.installTurboModule()) {
          tmp11 = scheduleOnUI;
          tmp12 = new.target;
          tmp13 = new.target;
          tmp5Result = tmp5(self, tmp3);
          tmp14 = new scheduleOnUI();
          tmp15 = tmp14;
          tmp5Result[tmp3] = tmp14;
        }
        return;
      }
    }
    if (undefined === tmp9.__reanimatedModuleProxy) {
      tmp16 = new.target;
      str = "Native part of Reanimated doesn't seem to be initialized.\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.";
      tmp17 = new.target;
      reanimatedError = new require("t").ReanimatedError("Native part of Reanimated doesn't seem to be initialized.\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.");
      tmp19 = reanimatedError;
      throw reanimatedError;
    } else {
      tmp5(self, tmp3)[tmp3] = tmp9.__reanimatedModuleProxy;
    }
    return;
  }
}
DummyReanimatedModuleProxy = NativeReanimatedModule;
let obj = {
  key: "scheduleOnUI",
  value: function scheduleOnUI(arg0) {
    return callback2(this, closure_6)[closure_6].scheduleOnUI(arg0);
  }
};
const items = [
  obj,
  {
    key: "executeOnUIRuntimeSync",
    value: function executeOnUIRuntimeSync(arg0) {
      return callback2(this, closure_6)[closure_6].executeOnUIRuntimeSync(arg0);
    }
  },
  {
    key: "createWorkletRuntime",
    value: function createWorkletRuntime(arg0, arg1) {
      return callback2(this, closure_6)[closure_6].createWorkletRuntime(arg0, arg1);
    }
  },
  {
    key: "scheduleOnRuntime",
    value: function scheduleOnRuntime(arg0, arg1) {
      return callback2(this, closure_6)[closure_6].scheduleOnRuntime(arg0, arg1);
    }
  },
  {
    key: "registerSensor",
    value: function registerSensor(arg0, arg1, arg2, arg3) {
      return callback2(this, closure_6)[closure_6].registerSensor(arg0, arg1, arg2, arg3);
    }
  },
  {
    key: "unregisterSensor",
    value: function unregisterSensor(arg0) {
      return callback2(this, closure_6)[closure_6].unregisterSensor(arg0);
    }
  },
  {
    key: "registerEventHandler",
    value: function registerEventHandler(arg0, arg1, arg2) {
      return callback2(this, closure_6)[closure_6].registerEventHandler(arg0, arg1, arg2);
    }
  },
  {
    key: "unregisterEventHandler",
    value: function unregisterEventHandler(arg0) {
      return callback2(this, closure_6)[closure_6].unregisterEventHandler(arg0);
    }
  },
  {
    key: "getViewProp",
    value: function getViewProp(arg0, arg1, self) {
      self = this;
      if (obj.isFabric()) {
        const tmpResult = getShadowNodeWrapperFromRef;
        const shadowNodeWrapperFromRef = getShadowNodeWrapperFromRef.getShadowNodeWrapperFromRef(self);
        let viewProp = callback2(self, closure_6)[closure_6].getViewProp(shadowNodeWrapperFromRef, arg1, arg3);
        const obj4 = callback2(self, closure_6)[closure_6];
      } else {
        viewProp = callback2(self, closure_6)[closure_6].getViewProp(arg0, arg1, arg3);
        const obj2 = callback2(self, closure_6)[closure_6];
      }
      return viewProp;
    }
  },
  {
    key: "configureLayoutAnimationBatch",
    value: function configureLayoutAnimationBatch(arg0) {
      const result = callback2(this, closure_6)[closure_6].configureLayoutAnimationBatch(arg0);
    }
  },
  {
    key: "setShouldAnimateExitingForTag",
    value: function setShouldAnimateExitingForTag(arg0, arg1) {
      const result = callback2(this, closure_6)[closure_6].setShouldAnimateExitingForTag(arg0, arg1);
    }
  },
  {
    key: "enableLayoutAnimations",
    value: function enableLayoutAnimations(arg0) {
      const result = callback2(this, closure_6)[closure_6].enableLayoutAnimations(arg0);
    }
  },
  {
    key: "configureProps",
    value: function configureProps(arg0, arg1) {
      callback2(this, closure_6)[closure_6].configureProps(arg0, arg1);
    }
  },
  {
    key: "subscribeForKeyboardEvents",
    value: function subscribeForKeyboardEvents(arg0, arg1, arg2) {
      return callback2(this, closure_6)[closure_6].subscribeForKeyboardEvents(arg0, arg1, arg2);
    }
  },
  {
    key: "unsubscribeFromKeyboardEvents",
    value: function unsubscribeFromKeyboardEvents(arg0) {
      const result = callback2(this, closure_6)[closure_6].unsubscribeFromKeyboardEvents(arg0);
    }
  },
  {
    key: "markNodeAsRemovable",
    value: function markNodeAsRemovable(arg0) {
      callback2(this, closure_6)[closure_6].markNodeAsRemovable(arg0);
    }
  },
  {
    key: "unmarkNodeAsRemovable",
    value: function unmarkNodeAsRemovable(arg0) {
      const result = callback2(this, closure_6)[closure_6].unmarkNodeAsRemovable(arg0);
    }
  },
  {
    key: "getSettledUpdates",
    value: function getSettledUpdates() {
      return callback2(this, closure_6)[closure_6].getSettledUpdates();
    }
  }
];
let closure_7 = importDefaultResult(NativeReanimatedModule, items);
class DummyReanimatedModuleProxy {
  constructor() {
    tmp = outer1_3(this, DummyReanimatedModuleProxy);
    return;
  }
}
obj = {
  key: "scheduleOnUI",
  value: function scheduleOnUI() {

  }
};
const items1 = [
  obj,
  {
    key: "executeOnUIRuntimeSync",
    value: function executeOnUIRuntimeSync() {
      return null;
    }
  },
  {
    key: "createWorkletRuntime",
    value: function createWorkletRuntime() {
      return null;
    }
  },
  {
    key: "scheduleOnRuntime",
    value: function scheduleOnRuntime() {

    }
  },
  {
    key: "configureLayoutAnimationBatch",
    value: function configureLayoutAnimationBatch() {

    }
  },
  {
    key: "setShouldAnimateExitingForTag",
    value: function setShouldAnimateExitingForTag() {

    }
  },
  {
    key: "enableLayoutAnimations",
    value: function enableLayoutAnimations() {

    }
  },
  {
    key: "configureProps",
    value: function configureProps() {

    }
  },
  {
    key: "subscribeForKeyboardEvents",
    value: function subscribeForKeyboardEvents() {
      return -1;
    }
  },
  {
    key: "unsubscribeFromKeyboardEvents",
    value: function unsubscribeFromKeyboardEvents() {

    }
  },
  {
    key: "markNodeAsRemovable",
    value: function markNodeAsRemovable() {

    }
  },
  {
    key: "unmarkNodeAsRemovable",
    value: function unmarkNodeAsRemovable() {

    }
  },
  {
    key: "registerSensor",
    value: function registerSensor() {
      return -1;
    }
  },
  {
    key: "unregisterSensor",
    value: function unregisterSensor() {

    }
  },
  {
    key: "registerEventHandler",
    value: function registerEventHandler() {
      return -1;
    }
  },
  {
    key: "unregisterEventHandler",
    value: function unregisterEventHandler() {

    }
  },
  {
    key: "getViewProp",
    value: function getViewProp() {
      return null;
    }
  },
  {
    key: "getSettledUpdates",
    value: function getSettledUpdates() {
      return [];
    }
  }
];
let closure_8 = importDefaultResult(DummyReanimatedModuleProxy, items1);

export const createNativeReanimatedModule = function createNativeReanimatedModule() {
  return new closure_7();
};