// _runtime/01687_startMapper.js
import setupMicrotasks from "01650_setupMicrotasks.js";
import ReanimatedModule3 from "01651_ReanimatedModule.js";
import _mod1673 from "metro/01673__.js";
import _mod1680 from "metro/01680__.js";
import SensorContainer from "01689_SensorContainer.js";
import _mod1691 from "metro/01691__.js";
import runOnRuntime from "01693_runOnRuntime.js";
import react_native from "01688_react-native.js";
import 01646__ from "metro/01646__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let closure_3 = react_native.isEdgeToEdge();
let closure_4 = module_1646.shouldBeUseWeb();
function isReanimated3() {
  return true;
}
const __initData = { code: "function handleAndFlushAnimationFrame_Pnpm_coreTs1(eventTimestamp,event){const{eventHandler}=this.__closure;global.__frameTimestamp=eventTimestamp;eventHandler(event);global.__flushAnimationFrame(eventTimestamp);global.__frameTimestamp=undefined;}" };
const __initData2 = { code: "function handleAndFlushAnimationFrame_Pnpm_coreTs2(state,height){const{eventHandler}=this.__closure;const now=global._getAnimationTimestamp();global.__frameTimestamp=now;eventHandler(state,height);global.__flushAnimationFrame(now);global.__frameTimestamp=undefined;}" };
let obj = { enableLayoutAnimations: false, setByUser: false };
const runOnRuntime_export = runOnRuntime.runOnRuntime;

export const startMapper = _mod1691.startMapper;
export const stopMapper = _mod1691.stopMapper;
export const makeMutable = _mod1680.makeMutable;
export const createWorkletRuntime = runOnRuntime.createWorkletRuntime;
export { runOnRuntime_export as runOnRuntime };
export const makeShareable = _mod1673.makeShareable;
export const makeShareableCloneRecursive = _mod1673.makeShareableCloneRecursive;
export const executeOnUIRuntimeSync = setupMicrotasks.executeOnUIRuntimeSync;
export const runOnJS = setupMicrotasks.runOnJS;
export const runOnUI = setupMicrotasks.runOnUI;
export { isReanimated3 };
export const isConfigured = isReanimated3;
export const getViewProp = function getViewProp(arg0, arg1, arg2) {
  let closure_2;
  let closure_0 = arg0;
  _require = arg1;
  dependencyMap = arg2;
  obj = require("metro/01646__.js");
  const tmp = _require;
  if (obj.isFabric()) {
    if (!arg2) {
      const self = this;
      const str = "Function `getViewProp` requires a component to be passed as an argument on Fabric.";
      const self2 = this;
      const reanimatedError = new tmp(1654).ReanimatedError("Function `getViewProp` requires a component to be passed as an argument on Fabric.");
      throw reanimatedError;
    }
  }
  const promise = new Promise((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
    return ReanimatedModule.getViewProp(closure_0, closure_1, closure_2, (str) => {
      if (typeof str === "string") {
        if ("error:" === "error:".substr(0, 6)) {
          closure_1("error:");
        }
      }
      closure_0(str);
    });
  });
  return promise;
};
export const registerEventHandler = function registerEventHandler(eventHandler, onAppear) {
  let num = item;
  if (item === undefined) {
    num = -1;
  }
  function handleAndFlushAnimationFrame(__frameTimestamp, arg1) {
    global.__frameTimestamp = __frameTimestamp;
    eventHandler(arg1);
    const result = global.__flushAnimationFrame(__frameTimestamp);
    global.__frameTimestamp = undefined;
  }
  handleAndFlushAnimationFrame.__closure = { eventHandler };
  handleAndFlushAnimationFrame.__workletHash = 6793284645440;
  handleAndFlushAnimationFrame.__initData = __initData;
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  const registerEventHandler = ReanimatedModule.registerEventHandler;
  obj = _mod1673;
  return registerEventHandler(obj.makeShareableCloneRecursive(handleAndFlushAnimationFrame), onAppear, num);
};
export const unregisterEventHandler = function unregisterEventHandler(onAppear) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  return ReanimatedModule.unregisterEventHandler(onAppear);
};
export const subscribeForKeyboardEvents = function subscribeForKeyboardEvents(eventHandler, isStatusBarTranslucentAndroid) {
  function handleAndFlushAnimationFrame(arg0, arg1) {
    const result = global._getAnimationTimestamp();
    global.__frameTimestamp = result;
    eventHandler(arg0, arg1);
    const result1 = global.__flushAnimationFrame(result);
    global.__frameTimestamp = undefined;
  }
  handleAndFlushAnimationFrame.__closure = { eventHandler };
  handleAndFlushAnimationFrame.__workletHash = 11642615284685;
  handleAndFlushAnimationFrame.__initData = __initData2;
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  const subscribeForKeyboardEvents = ReanimatedModule.subscribeForKeyboardEvents;
  let tmp2 = closure_3;
  let tmp3 = closure_3;
  obj = _mod1673;
  const shareableCloneRecursive = obj.makeShareableCloneRecursive(handleAndFlushAnimationFrame);
  if (!closure_3) {
    let flag = isStatusBarTranslucentAndroid.isStatusBarTranslucentAndroid;
    if (flag == null) {
      flag = false;
    }
    tmp3 = flag;
  }
  if (!tmp2) {
    let flag2 = isStatusBarTranslucentAndroid.isNavigationBarTranslucentAndroid;
    if (flag2 == null) {
      flag2 = false;
    }
    tmp2 = flag2;
  }
  return subscribeForKeyboardEvents(shareableCloneRecursive, tmp3, tmp2);
};
export const unsubscribeFromKeyboardEvents = function unsubscribeFromKeyboardEvents(arg0) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  return ReanimatedModule.unsubscribeFromKeyboardEvents(arg0);
};
export const registerSensor = function registerSensor(arg0, arg1, arg2) {
  if (!global.__sensorContainer) {
    const self = this;
    const self2 = this;
    const sensorContainer = new SensorContainer.SensorContainer();
    global.__sensorContainer = sensorContainer;
  }
  const __sensorContainer = global.__sensorContainer;
  const registerSensor = __sensorContainer.registerSensor;
  obj = _mod1673;
  return registerSensor(arg0, arg1, obj.makeShareableCloneRecursive(arg2));
};
export const initializeSensor = function initializeSensor(arg0, arg1) {
  if (!global.__sensorContainer) {
    const self = this;
    const self2 = this;
    const sensorContainer = new SensorContainer.SensorContainer();
    global.__sensorContainer = sensorContainer;
  }
  const __sensorContainer = global.__sensorContainer;
  return __sensorContainer.initializeSensor(arg0, arg1);
};
export const unregisterSensor = function unregisterSensor(registerSensorResult) {
  if (!global.__sensorContainer) {
    const self = this;
    const self2 = this;
    const sensorContainer = new SensorContainer.SensorContainer();
    global.__sensorContainer = sensorContainer;
  }
  const __sensorContainer = global.__sensorContainer;
  return __sensorContainer.unregisterSensor(registerSensorResult);
};
export const enableLayoutAnimations = function enableLayoutAnimations(enableLayoutAnimations) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  if (flag) {
    obj = { enableLayoutAnimations, setByUser: true };
    const ReanimatedModule2 = ReanimatedModule3.ReanimatedModule;
    const result = ReanimatedModule2.enableLayoutAnimations(enableLayoutAnimations);
  } else {
    const setByUser = obj.setByUser || obj.enableLayoutAnimations === enableLayoutAnimations;
    if (!setByUser) {
      obj.enableLayoutAnimations = enableLayoutAnimations;
      const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
      const result1 = ReanimatedModule.enableLayoutAnimations(enableLayoutAnimations);
    }
  }
};
export const configureLayoutAnimationBatch = function configureLayoutAnimationBatch(arg0) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  const result = ReanimatedModule.configureLayoutAnimationBatch(arg0);
};
export const setShouldAnimateExitingForTag = function setShouldAnimateExitingForTag(findNodeHandleResult, arg1) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  const result = ReanimatedModule.setShouldAnimateExitingForTag(findNodeHandleResult, arg1);
};
export const jsiConfigureProps = function jsiConfigureProps(keys, arg1) {
  if (!closure_4) {
    const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
    ReanimatedModule.configureProps(keys, arg1);
  }
};
export const markNodeAsRemovable = function markNodeAsRemovable(arg0) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  ReanimatedModule.markNodeAsRemovable(arg0);
};
export const unmarkNodeAsRemovable = function unmarkNodeAsRemovable(componentViewTag) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  const result = ReanimatedModule.unmarkNodeAsRemovable(componentViewTag);
};