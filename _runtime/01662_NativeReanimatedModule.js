// _runtime/01662_NativeReanimatedModule.js
import findHostInstance from "01664_findHostInstance.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _classPrivateFieldBase from "00090__classPrivateFieldBase.js";
import _classPrivateFieldKey from "00091__classPrivateFieldKey.js";

let DummyReanimatedModuleProxy = global;
require = arg1;
let closure_5 = _classPrivateFieldKey("workletsModule");
let closure_6 = _classPrivateFieldKey("reanimatedModuleProxy");
class NativeReanimatedModule {
  constructor() {
    self = this;
    tmp = closure_3(this, DummyReanimatedModuleProxy);
    definePropertyResult = Object.defineProperty(this, hasOwnProperty, { writable: true, value: "a" });
    tmp3 = metroRequire;
    definePropertyResult1 = Object.defineProperty(this, metroRequire, { writable: true, value: "a" });
    tmp5 = closure_4;
    tmp7 = closure_1;
    tmp8 = c2;
    tmp6 = closure_4(this, hasOwnProperty);
    tmp6[hasOwnProperty] = closure_1(c2[4]).WorkletsModule;
    tmp9 = closure_0;
    closure_0._REANIMATED_VERSION_JS = closure_1(c2[5]).jsVersion;
    if (undefined === closure_0.__reanimatedModuleProxy) {
      if (tmp7(tmp8[6]).ReanimatedTurboModule) {
        ReanimatedTurboModule = tmp7(tmp8[6]).ReanimatedTurboModule;
        if (!ReanimatedTurboModule.installTurboModule()) {
          tmp11 = closure_8;
          tmp12 = new.target;
          tmp13 = new.target;
          tmp5Result = tmp5(self, tmp3);
          tmp14 = new closure_8();
          tmp15 = tmp14;
          tmp5Result[tmp3] = tmp14;
        }
        return;
      }
    }
    if (undefined === tmp9.__reanimatedModuleProxy) {
      tmp16 = new.target;
      str =
        "Native part of Reanimated doesn't seem to be initialized.\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.";
      tmp17 = new.target;
      reanimatedError = new tmp7(tmp8[7]).ReanimatedError(
        "Native part of Reanimated doesn't seem to be initialized.\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.",
      );
      tmp19 = reanimatedError;
      throw reanimatedError;
    } else {
      tmp5(self, tmp3)[tmp3] = tmp9.__reanimatedModuleProxy;
    }
    return;
  }
}
DummyReanimatedModuleProxy = NativeReanimatedModule;
const entry = {
  key: "scheduleOnUI",
  value: function scheduleOnUI(arg0) {
    return _classPrivateFieldBase(this, closure_6)[closure_6].scheduleOnUI(arg0);
  },
};
const items = [
  entry,
  {
    key: "executeOnUIRuntimeSync",
    value: function executeOnUIRuntimeSync(arg0) {
      return _classPrivateFieldBase(this, closure_6)[closure_6].executeOnUIRuntimeSync(arg0);
    },
  },
  {
    key: "createWorkletRuntime",
    value: function createWorkletRuntime(arg0, arg1) {
      return _classPrivateFieldBase(this, closure_6)[closure_6].createWorkletRuntime(arg0, arg1);
    },
  },
  {
    key: "scheduleOnRuntime",
    value: function scheduleOnRuntime(arg0, arg1) {
      return _classPrivateFieldBase(this, closure_6)[closure_6].scheduleOnRuntime(arg0, arg1);
    },
  },
  {
    key: "registerSensor",
    value: function registerSensor(arg0, arg1, arg2, arg3) {
      return _classPrivateFieldBase(this, closure_6)[closure_6].registerSensor(arg0, arg1, arg2, arg3);
    },
  },
  {
    key: "unregisterSensor",
    value: function unregisterSensor(arg0) {
      return _classPrivateFieldBase(this, closure_6)[closure_6].unregisterSensor(arg0);
    },
  },
  {
    key: "registerEventHandler",
    value: function registerEventHandler(arg0, arg1, arg2) {
      return _classPrivateFieldBase(this, closure_6)[closure_6].registerEventHandler(arg0, arg1, arg2);
    },
  },
  {
    key: "unregisterEventHandler",
    value: function unregisterEventHandler(arg0) {
      return _classPrivateFieldBase(this, closure_6)[closure_6].unregisterEventHandler(arg0);
    },
  },
  {
    key: "getViewProp",
    value: function getViewProp(arg0, arg1, self, arg3) {
      self = this;
      if (obj.isFabric()) {
        const tmpResult = findHostInstance;
        const shadowNodeWrapperFromRef = findHostInstance.getShadowNodeWrapperFromRef(self);
        let viewProp = _classPrivateFieldBase(self, closure_6)[closure_6].getViewProp(
          shadowNodeWrapperFromRef,
          arg1,
          arg3,
        );
        const obj4 = _classPrivateFieldBase(self, closure_6)[closure_6];
      } else {
        viewProp = _classPrivateFieldBase(self, closure_6)[closure_6].getViewProp(arg0, arg1, arg3);
        const obj2 = _classPrivateFieldBase(self, closure_6)[closure_6];
      }
      return viewProp;
    },
  },
  {
    key: "configureLayoutAnimationBatch",
    value: function configureLayoutAnimationBatch(arg0) {
      const result = _classPrivateFieldBase(this, closure_6)[closure_6].configureLayoutAnimationBatch(arg0);
    },
  },
  {
    key: "setShouldAnimateExitingForTag",
    value: function setShouldAnimateExitingForTag(arg0, arg1) {
      const result = _classPrivateFieldBase(this, closure_6)[closure_6].setShouldAnimateExitingForTag(arg0, arg1);
    },
  },
  {
    key: "enableLayoutAnimations",
    value: function enableLayoutAnimations(arg0) {
      const result = _classPrivateFieldBase(this, closure_6)[closure_6].enableLayoutAnimations(arg0);
    },
  },
  {
    key: "configureProps",
    value: function configureProps(arg0, arg1) {
      _classPrivateFieldBase(this, closure_6)[closure_6].configureProps(arg0, arg1);
    },
  },
  {
    key: "subscribeForKeyboardEvents",
    value: function subscribeForKeyboardEvents(arg0, arg1, arg2) {
      return _classPrivateFieldBase(this, closure_6)[closure_6].subscribeForKeyboardEvents(arg0, arg1, arg2);
    },
  },
  {
    key: "unsubscribeFromKeyboardEvents",
    value: function unsubscribeFromKeyboardEvents(arg0) {
      const result = _classPrivateFieldBase(this, closure_6)[closure_6].unsubscribeFromKeyboardEvents(arg0);
    },
  },
  {
    key: "markNodeAsRemovable",
    value: function markNodeAsRemovable(arg0) {
      _classPrivateFieldBase(this, closure_6)[closure_6].markNodeAsRemovable(arg0);
    },
  },
  {
    key: "unmarkNodeAsRemovable",
    value: function unmarkNodeAsRemovable(arg0) {
      const result = _classPrivateFieldBase(this, closure_6)[closure_6].unmarkNodeAsRemovable(arg0);
    },
  },
  {
    key: "getSettledUpdates",
    value: function getSettledUpdates() {
      return _classPrivateFieldBase(this, closure_6)[closure_6].getSettledUpdates();
    },
  },
];
let closure_7 = _createClass(NativeReanimatedModule, items);
class DummyReanimatedModuleProxy {
  constructor() {
    tmp = closure_3(this, DummyReanimatedModuleProxy);
    return;
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
  return new closure_7();
};
