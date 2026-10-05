// _runtime/metro/01669__.js
import _mod1646 from "01646__.js";
import ReanimatedError from "../01654_ReanimatedError.js";
import WorkletsModule from "../01659_WorkletsModule.js";
import react_native from "../01665_react-native.js";
import jsVersion from "../01670_jsVersion.js";
import findHostInstance from "../01671_findHostInstance.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _classPrivateFieldBase from "../00090__classPrivateFieldBase.js";
import _classPrivateFieldKey from "../00091__classPrivateFieldKey.js";

let closure_5 = _classPrivateFieldKey("workletsModule");
let closure_6 = _classPrivateFieldKey("reanimatedModuleProxy");
class NativeReanimatedModule {
  constructor() {
    const self = this;
    _classCallCheck(this, NativeReanimatedModule);
    Object.defineProperty(this, closure_5, { writable: true, value: "a" });
    Object.defineProperty(this, closure_6, { writable: true, value: "a" });
    const tmp6 = _classPrivateFieldBase(this, closure_5);
    tmp6[closure_5] = WorkletsModule.WorkletsModule;
    global._REANIMATED_VERSION_JS = jsVersion.jsVersion;
    if (undefined === global.__reanimatedModuleProxy) {
      if (react_native.ReanimatedTurboModule) {
        const ReanimatedTurboModule = react_native.ReanimatedTurboModule;
        if (!ReanimatedTurboModule.installTurboModule()) {
          const self2 = this;
          const self3 = this;
          const tmp5Result = _classPrivateFieldBase(self, closure_6);
          tmp5Result[closure_6] = new closure_8();
          const tmp12 = new closure_8();
        }
      }
    }
    if (undefined === global.__reanimatedModuleProxy) {
      const self4 = this;
      const self5 = this;
      const reanimatedError = new ReanimatedError.ReanimatedError(
        "Native part of Reanimated doesn't seem to be initialized.\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.",
      );
      throw reanimatedError;
    } else {
      _classPrivateFieldBase(self, closure_6)[closure_6] = global.__reanimatedModuleProxy;
    }
  }
}
const entry = {
  key: "scheduleOnUI",
  value: function scheduleOnUI(arg0) {
    const obj = _classPrivateFieldBase(this, closure_6)[closure_6];
    return obj.scheduleOnUI(arg0);
  },
};
const items = [
  entry,
  {
    key: "executeOnUIRuntimeSync",
    value: function executeOnUIRuntimeSync(arg0) {
      const obj = _classPrivateFieldBase(this, closure_6)[closure_6];
      return obj.executeOnUIRuntimeSync(arg0);
    },
  },
  {
    key: "createWorkletRuntime",
    value: function createWorkletRuntime(arg0, arg1) {
      const obj = _classPrivateFieldBase(this, closure_6)[closure_6];
      return obj.createWorkletRuntime(arg0, arg1);
    },
  },
  {
    key: "scheduleOnRuntime",
    value: function scheduleOnRuntime(arg0, arg1) {
      const obj = _classPrivateFieldBase(this, closure_6)[closure_6];
      return obj.scheduleOnRuntime(arg0, arg1);
    },
  },
  {
    key: "registerSensor",
    value: function registerSensor(arg0, arg1, arg2, arg3) {
      const obj = _classPrivateFieldBase(this, closure_6)[closure_6];
      return obj.registerSensor(arg0, arg1, arg2, arg3);
    },
  },
  {
    key: "unregisterSensor",
    value: function unregisterSensor(arg0) {
      const obj = _classPrivateFieldBase(this, closure_6)[closure_6];
      return obj.unregisterSensor(arg0);
    },
  },
  {
    key: "registerEventHandler",
    value: function registerEventHandler(arg0, arg1, arg2) {
      const obj = _classPrivateFieldBase(this, closure_6)[closure_6];
      return obj.registerEventHandler(arg0, arg1, arg2);
    },
  },
  {
    key: "unregisterEventHandler",
    value: function unregisterEventHandler(arg0) {
      const obj = _classPrivateFieldBase(this, closure_6)[closure_6];
      return obj.unregisterEventHandler(arg0);
    },
  },
  {
    key: "getViewProp",
    value: function getViewProp(arg0, arg1, self, arg3) {
      let viewProp;
      self = this;
      const obj = _mod1646;
      if (obj.isFabric()) {
        const tmpResult = findHostInstance;
        const shadowNodeWrapperFromRef = tmpResult.getShadowNodeWrapperFromRef(self);
        const obj4 = _classPrivateFieldBase(self, closure_6)[closure_6];
        viewProp = obj4.getViewProp(shadowNodeWrapperFromRef, arg1, arg3);
      } else {
        const obj2 = _classPrivateFieldBase(self, closure_6)[closure_6];
        viewProp = obj2.getViewProp(arg0, arg1, arg3);
      }
      return viewProp;
    },
  },
  {
    key: "configureLayoutAnimationBatch",
    value: function configureLayoutAnimationBatch(arg0) {
      const obj = _classPrivateFieldBase(this, closure_6)[closure_6];
      const result = obj.configureLayoutAnimationBatch(arg0);
    },
  },
  {
    key: "setShouldAnimateExitingForTag",
    value: function setShouldAnimateExitingForTag(arg0, arg1) {
      const obj = _classPrivateFieldBase(this, closure_6)[closure_6];
      const result = obj.setShouldAnimateExitingForTag(arg0, arg1);
    },
  },
  {
    key: "enableLayoutAnimations",
    value: function enableLayoutAnimations(arg0) {
      const obj = _classPrivateFieldBase(this, closure_6)[closure_6];
      const result = obj.enableLayoutAnimations(arg0);
    },
  },
  {
    key: "configureProps",
    value: function configureProps(arg0, arg1) {
      const obj = _classPrivateFieldBase(this, closure_6)[closure_6];
      obj.configureProps(arg0, arg1);
    },
  },
  {
    key: "subscribeForKeyboardEvents",
    value: function subscribeForKeyboardEvents(arg0, arg1, arg2) {
      const obj = _classPrivateFieldBase(this, closure_6)[closure_6];
      return obj.subscribeForKeyboardEvents(arg0, arg1, arg2);
    },
  },
  {
    key: "unsubscribeFromKeyboardEvents",
    value: function unsubscribeFromKeyboardEvents(arg0) {
      const obj = _classPrivateFieldBase(this, closure_6)[closure_6];
      const result = obj.unsubscribeFromKeyboardEvents(arg0);
    },
  },
  {
    key: "markNodeAsRemovable",
    value: function markNodeAsRemovable(arg0) {
      const obj = _classPrivateFieldBase(this, closure_6)[closure_6];
      obj.markNodeAsRemovable(arg0);
    },
  },
  {
    key: "unmarkNodeAsRemovable",
    value: function unmarkNodeAsRemovable(arg0) {
      const obj = _classPrivateFieldBase(this, closure_6)[closure_6];
      const result = obj.unmarkNodeAsRemovable(arg0);
    },
  },
  {
    key: "getSettledUpdates",
    value: function getSettledUpdates() {
      const obj = _classPrivateFieldBase(this, closure_6)[closure_6];
      return obj.getSettledUpdates();
    },
  },
];
let closure_7 = _createClass(NativeReanimatedModule, items);
class DummyReanimatedModuleProxy {
  constructor() {
    _classCallCheck(this, DummyReanimatedModuleProxy);
  }
}
const entry1 = {
  key: "scheduleOnUI",
  value: function scheduleOnUI() {},
};
const items1 = [
  entry1,
  {
    key: "executeOnUIRuntimeSync",
    value: function executeOnUIRuntimeSync() {
      return null;
    },
  },
  {
    key: "createWorkletRuntime",
    value: function createWorkletRuntime() {
      return null;
    },
  },
  {
    key: "scheduleOnRuntime",
    value: function scheduleOnRuntime() {},
  },
  {
    key: "configureLayoutAnimationBatch",
    value: function configureLayoutAnimationBatch() {},
  },
  {
    key: "setShouldAnimateExitingForTag",
    value: function setShouldAnimateExitingForTag() {},
  },
  {
    key: "enableLayoutAnimations",
    value: function enableLayoutAnimations() {},
  },
  {
    key: "configureProps",
    value: function configureProps() {},
  },
  {
    key: "subscribeForKeyboardEvents",
    value: function subscribeForKeyboardEvents() {
      return -1;
    },
  },
  {
    key: "unsubscribeFromKeyboardEvents",
    value: function unsubscribeFromKeyboardEvents() {},
  },
  {
    key: "markNodeAsRemovable",
    value: function markNodeAsRemovable() {},
  },
  {
    key: "unmarkNodeAsRemovable",
    value: function unmarkNodeAsRemovable() {},
  },
  {
    key: "registerSensor",
    value: function registerSensor() {
      return -1;
    },
  },
  {
    key: "unregisterSensor",
    value: function unregisterSensor() {},
  },
  {
    key: "registerEventHandler",
    value: function registerEventHandler() {
      return -1;
    },
  },
  {
    key: "unregisterEventHandler",
    value: function unregisterEventHandler() {},
  },
  {
    key: "getViewProp",
    value: function getViewProp() {
      return null;
    },
  },
  {
    key: "getSettledUpdates",
    value: function getSettledUpdates() {
      return [];
    },
  },
];
let closure_8 = _createClass(DummyReanimatedModuleProxy, items1);

export const createNativeReanimatedModule = function createNativeReanimatedModule() {
  const tmp = new closure_7();
  return tmp;
};
