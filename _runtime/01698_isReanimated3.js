// _runtime/01698_isReanimated3.js
import controlEdgeToEdgeValues from "controlEdgeToEdgeValues";
import isJest from "isJest";
import { isJest } from "01657_isJest.js";
import { ReanimatedModule } from "01662_ReanimatedModule.js";
import { freezeObjectInDev } from "01684_freezeObjectInDev.js";
import { SensorContainer } from "01700_SensorContainer.js";

controlEdgeToEdgeValues = controlEdgeToEdgeValues.isEdgeToEdge();
isJest = isJest.shouldBeUseWeb();
function isReanimated3() {
  return true;
}
let closure_5 = { code: "function handleAndFlushAnimationFrame_Pnpm_coreTs1(eventTimestamp,event){const{eventHandler}=this.__closure;global.__frameTimestamp=eventTimestamp;eventHandler(event);global.__flushAnimationFrame(eventTimestamp);global.__frameTimestamp=undefined;}" };
let closure_6 = { code: "function handleAndFlushAnimationFrame_Pnpm_coreTs2(state,height){const{eventHandler}=this.__closure;const now=global._getAnimationTimestamp();global.__frameTimestamp=now;eventHandler(state,height);global.__flushAnimationFrame(now);global.__frameTimestamp=undefined;}" };
let closure_7 = { enableLayoutAnimations: false, setByUser: false };

export const startMapper = require("createMapperRegistry").startMapper;
export const stopMapper = require("createMapperRegistry").stopMapper;
export const makeMutable = require("addCompilerSafeGetAndSet").makeMutable;
export const createWorkletRuntime = require("runOnRuntime").createWorkletRuntime;
export const runOnRuntime = require("runOnRuntime").runOnRuntime;
export const makeShareable = require("freezeObjectInDev").makeShareable;
export const makeShareableCloneRecursive = require("freezeObjectInDev").makeShareableCloneRecursive;
export const executeOnUIRuntimeSync = require("runWorkletOnJS").executeOnUIRuntimeSync;
export const runOnJS = require("runWorkletOnJS").runOnJS;
export const runOnUI = require("runWorkletOnJS").runOnUI;
export { isReanimated3 };
export const isConfigured = isReanimated3;
export const getViewProp = function getViewProp(arg0, arg1, arg2) {
  let closure_0 = arg0;
  const _require = arg1;
  const dependencyMap = arg2;
  if (obj.isFabric()) {
    if (!arg2) {
      const reanimatedError = new tmp(1665).ReanimatedError("Function `getViewProp` requires a component to be passed as an argument on Fabric.");
      throw reanimatedError;
    }
  }
  obj = _isJest;
  tmp = _require;
  return new Promise((arg0, arg1) => {
    let closure_0 = arg0;
    const callback = arg1;
    const ReanimatedModule = callback(table[3]).ReanimatedModule;
    return ReanimatedModule.getViewProp(closure_0, callback, table, (str) => {
      if (typeof str === "string") {
        if ("error:" === str.substr(0, 6)) {
          callback2(str);
        }
      }
      callback(str);
    });
  });
};
export const registerEventHandler = function registerEventHandler(eventHandler) {
  let closure_0 = eventHandler;
  let num = arg2;
  if (arg2 === undefined) {
    num = -1;
  }
  function handleAndFlushAnimationFrame(__frameTimestamp) {
    eventHandler.__frameTimestamp = __frameTimestamp;
    eventHandler(arg1);
    const result = eventHandler.__flushAnimationFrame(__frameTimestamp);
    eventHandler.__frameTimestamp = undefined;
  }
  handleAndFlushAnimationFrame.__closure = { eventHandler };
  handleAndFlushAnimationFrame.__workletHash = 6793284645440;
  handleAndFlushAnimationFrame.__initData = closure_5;
  const ReanimatedModule = ReanimatedModule.ReanimatedModule;
  return ReanimatedModule.registerEventHandler(freezeObjectInDev.makeShareableCloneRecursive(handleAndFlushAnimationFrame), arg1, num);
};
export const unregisterEventHandler = function unregisterEventHandler(arg0) {
  const ReanimatedModule = ReanimatedModule.ReanimatedModule;
  return ReanimatedModule.unregisterEventHandler(arg0);
};
export const subscribeForKeyboardEvents = function subscribeForKeyboardEvents(eventHandler, isStatusBarTranslucentAndroid) {
  let closure_0 = eventHandler;
  function handleAndFlushAnimationFrame(arg0, arg1) {
    const result = eventHandler._getAnimationTimestamp();
    eventHandler.__frameTimestamp = result;
    eventHandler(arg0, arg1);
    const result1 = eventHandler.__flushAnimationFrame(result);
    eventHandler.__frameTimestamp = undefined;
  }
  handleAndFlushAnimationFrame.__closure = { eventHandler };
  handleAndFlushAnimationFrame.__workletHash = 11642615284685;
  handleAndFlushAnimationFrame.__initData = closure_6;
  const ReanimatedModule = ReanimatedModule.ReanimatedModule;
  let tmp2 = controlEdgeToEdgeValues;
  let tmp3 = controlEdgeToEdgeValues;
  const shareableCloneRecursive = freezeObjectInDev.makeShareableCloneRecursive(handleAndFlushAnimationFrame);
  if (!controlEdgeToEdgeValues) {
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
  return ReanimatedModule.subscribeForKeyboardEvents(shareableCloneRecursive, tmp3, tmp2);
};
export const unsubscribeFromKeyboardEvents = function unsubscribeFromKeyboardEvents(arg0) {
  const ReanimatedModule = ReanimatedModule.ReanimatedModule;
  return ReanimatedModule.unsubscribeFromKeyboardEvents(arg0);
};
export const registerSensor = function registerSensor(arg0, arg1, arg2) {
  if (!global.__sensorContainer) {
    const sensorContainer = new SensorContainer.SensorContainer();
    tmp.__sensorContainer = sensorContainer;
  }
  const __sensorContainer = tmp.__sensorContainer;
  return __sensorContainer.registerSensor(arg0, arg1, freezeObjectInDev.makeShareableCloneRecursive(arg2));
};
export const initializeSensor = function initializeSensor(arg0, arg1) {
  if (!global.__sensorContainer) {
    const sensorContainer = new SensorContainer.SensorContainer();
    tmp.__sensorContainer = sensorContainer;
  }
  const __sensorContainer = tmp.__sensorContainer;
  return __sensorContainer.initializeSensor(arg0, arg1);
};
export const unregisterSensor = function unregisterSensor(arg0) {
  if (!global.__sensorContainer) {
    const sensorContainer = new SensorContainer.SensorContainer();
    tmp.__sensorContainer = sensorContainer;
  }
  const __sensorContainer = tmp.__sensorContainer;
  return __sensorContainer.unregisterSensor(arg0);
};
export const enableLayoutAnimations = function enableLayoutAnimations(enableLayoutAnimations) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  if (flag) {
    const obj = { enableLayoutAnimations: null, setByUser: true };
    obj[0] = enableLayoutAnimations;
    const ReanimatedModule2 = ReanimatedModule.ReanimatedModule;
    const result = ReanimatedModule2.enableLayoutAnimations(enableLayoutAnimations);
  } else {
    let setByUser = obj.setByUser;
    if (!setByUser) {
      setByUser = obj.enableLayoutAnimations === enableLayoutAnimations;
    }
    if (!setByUser) {
      obj.enableLayoutAnimations = enableLayoutAnimations;
      const ReanimatedModule = ReanimatedModule.ReanimatedModule;
      const result1 = ReanimatedModule.enableLayoutAnimations(enableLayoutAnimations);
    }
  }
};
export const configureLayoutAnimationBatch = function configureLayoutAnimationBatch(arg0) {
  const ReanimatedModule = ReanimatedModule.ReanimatedModule;
  const result = ReanimatedModule.configureLayoutAnimationBatch(arg0);
};
export const setShouldAnimateExitingForTag = function setShouldAnimateExitingForTag(arg0, arg1) {
  const ReanimatedModule = ReanimatedModule.ReanimatedModule;
  const result = ReanimatedModule.setShouldAnimateExitingForTag(arg0, arg1);
};
export const jsiConfigureProps = function jsiConfigureProps(keys, arg1) {
  if (!isJest) {
    const ReanimatedModule = ReanimatedModule.ReanimatedModule;
    ReanimatedModule.configureProps(keys, arg1);
  }
};
export const markNodeAsRemovable = function markNodeAsRemovable(arg0) {
  const ReanimatedModule = ReanimatedModule.ReanimatedModule;
  ReanimatedModule.markNodeAsRemovable(arg0);
};
export const unmarkNodeAsRemovable = function unmarkNodeAsRemovable(arg0) {
  const ReanimatedModule = ReanimatedModule.ReanimatedModule;
  const result = ReanimatedModule.unmarkNodeAsRemovable(arg0);
};