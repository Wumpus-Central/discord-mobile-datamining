// _runtime/01680_runOnRuntime.js
import runWorkletOnJS from "01643_runWorkletOnJS.js";
import ReanimatedModule3 from "01644_ReanimatedModule.js";
import freezeObjectInDev from "01666_freezeObjectInDev.js";
import _mod1673 from "metro/01673__.js";
import SensorContainer from "01682_SensorContainer.js";
import _mod1684 from "metro/01684__.js";
import _mod1686 from "metro/01686__.js";
import controlEdgeToEdgeValues from "metro/01681__.js";
import 01639__ from "metro/01639__.js";

let closure_3 = controlEdgeToEdgeValues.isEdgeToEdge();
let closure_4 = module_1639.shouldBeUseWeb();
function isReanimated3() {
  return true;
}
const __initData = { code: "function handleAndFlushAnimationFrame_Pnpm_coreTs1(eventTimestamp,event){const{eventHandler}=this.__closure;global.__frameTimestamp=eventTimestamp;eventHandler(event);global.__flushAnimationFrame(eventTimestamp);global.__frameTimestamp=undefined;}" };
const __initData2 = { code: "function handleAndFlushAnimationFrame_Pnpm_coreTs2(state,height){const{eventHandler}=this.__closure;const now=global._getAnimationTimestamp();global.__frameTimestamp=now;eventHandler(state,height);global.__flushAnimationFrame(now);global.__frameTimestamp=undefined;}" };

export const startMapper = _mod1684.startMapper;
export const stopMapper = _mod1684.stopMapper;
export const makeMutable = _mod1673.makeMutable;
export const createWorkletRuntime = _mod1686.createWorkletRuntime;
export const runOnRuntime = _mod1686.runOnRuntime;
export const makeShareable = freezeObjectInDev.makeShareable;
export const makeShareableCloneRecursive = freezeObjectInDev.makeShareableCloneRecursive;
export const executeOnUIRuntimeSync = runWorkletOnJS.executeOnUIRuntimeSync;
export const runOnJS = runWorkletOnJS.runOnJS;
export const runOnUI = runWorkletOnJS.runOnUI;
export { isReanimated3 };
export const isConfigured = isReanimated3;
export const getViewProp = function getViewProp(arg0, arg1, arg2) {
  closure_0 = arg0;
  _require = arg1;
  dependencyMap = arg2;
  if (obj.isFabric()) {
    if (!arg2) {
      const reanimatedError = new tmp(1647).ReanimatedError("Function `getViewProp` requires a component to be passed as an argument on Fabric.");
      throw reanimatedError;
    }
  }
  obj = require("metro/01639__.js");
  tmp = _require;
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
    return ReanimatedModule.getViewProp(closure_0, closure_1, closure_2, (str) => {
      if (typeof str === "string") {
        if ("error:" === "error:".substr(0, 6)) {
          closure_1(str);
        }
      }
      closure_0(str);
    });
  });
};
export const registerEventHandler = function registerEventHandler(eventHandler, onAppear) {
  let num = arg2;
  if (arg2 === undefined) {
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
  return ReanimatedModule.registerEventHandler(freezeObjectInDev.makeShareableCloneRecursive(handleAndFlushAnimationFrame), onAppear, num);
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
  let tmp2 = closure_3;
  let tmp3 = closure_3;
  const shareableCloneRecursive = freezeObjectInDev.makeShareableCloneRecursive(handleAndFlushAnimationFrame);
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
  return ReanimatedModule.subscribeForKeyboardEvents(shareableCloneRecursive, tmp3, tmp2);
};
export const unsubscribeFromKeyboardEvents = function unsubscribeFromKeyboardEvents(arg0) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  return ReanimatedModule.unsubscribeFromKeyboardEvents(arg0);
};
export const registerSensor = function registerSensor(arg0, arg1, arg2) {
  if (!global.__sensorContainer) {
    const sensorContainer = new SensorContainer.SensorContainer();
    global.__sensorContainer = sensorContainer;
  }
  const __sensorContainer = global.__sensorContainer;
  return __sensorContainer.registerSensor(arg0, arg1, freezeObjectInDev.makeShareableCloneRecursive(arg2));
};
export const initializeSensor = function initializeSensor(arg0, arg1) {
  if (!global.__sensorContainer) {
    const sensorContainer = new SensorContainer.SensorContainer();
    global.__sensorContainer = sensorContainer;
  }
  const __sensorContainer = global.__sensorContainer;
  return __sensorContainer.initializeSensor(arg0, arg1);
};
export const unregisterSensor = function unregisterSensor(registerSensorResult) {
  if (!global.__sensorContainer) {
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
    let setByUser = obj.setByUser;
    if (!setByUser) {
      setByUser = obj.enableLayoutAnimations === enableLayoutAnimations;
    }
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
export const setShouldAnimateExitingForTag = function setShouldAnimateExitingForTag(arg0, arg1) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  const result = ReanimatedModule.setShouldAnimateExitingForTag(arg0, arg1);
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