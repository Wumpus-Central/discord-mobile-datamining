// _runtime/01694_runOnRuntime.js
import runWorkletOnJS from "01657_runWorkletOnJS.js";
import ReanimatedModule3 from "01658_ReanimatedModule.js";
import freezeObjectInDev from "01680_freezeObjectInDev.js";
import _mod1687 from "metro/01687__.js";
import SensorContainer from "01696_SensorContainer.js";
import _mod1698 from "metro/01698__.js";
import _mod1700 from "metro/01700__.js";
import controlEdgeToEdgeValues from "metro/01695__.js";
import 01653__ from "metro/01653__.js";

const require = globalThis.__r;

let closure_3 = controlEdgeToEdgeValues.isEdgeToEdge();
let closure_4 = module_1653.shouldBeUseWeb();
function isReanimated3() {
  return true;
}
const __initData = { code: "function handleAndFlushAnimationFrame_Pnpm_coreTs1(eventTimestamp,event){const{eventHandler}=this.__closure;global.__frameTimestamp=eventTimestamp;eventHandler(event);global.__flushAnimationFrame(eventTimestamp);global.__frameTimestamp=undefined;}" };
const __initData2 = { code: "function handleAndFlushAnimationFrame_Pnpm_coreTs2(state,height){const{eventHandler}=this.__closure;const now=global._getAnimationTimestamp();global.__frameTimestamp=now;eventHandler(state,height);global.__flushAnimationFrame(now);global.__frameTimestamp=undefined;}" };

export const startMapper = _mod1698.startMapper;
export const stopMapper = _mod1698.stopMapper;
export const makeMutable = _mod1687.makeMutable;
export const createWorkletRuntime = _mod1700.createWorkletRuntime;
export const runOnRuntime = _mod1700.runOnRuntime;
export const makeShareable = freezeObjectInDev.makeShareable;
export const makeShareableCloneRecursive = freezeObjectInDev.makeShareableCloneRecursive;
export const executeOnUIRuntimeSync = runWorkletOnJS.executeOnUIRuntimeSync;
export const runOnJS = runWorkletOnJS.runOnJS;
export const runOnUI = runWorkletOnJS.runOnUI;
export { isReanimated3 };
export const isConfigured = isReanimated3;
export function getViewProp(arg0, arg1, arg2) {
  closure_0 = arg0;
  _require = arg1;
  dependencyMap = arg2;
  if (obj.isFabric()) {
    if (!arg2) {
      const reanimatedError = new tmp(1661).ReanimatedError("Function `getViewProp` requires a component to be passed as an argument on Fabric.");
      throw reanimatedError;
    }
  }
  obj = require("metro/01653__.js");
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
}
export function registerEventHandler(eventHandler, onAppear) {
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
}
export function unregisterEventHandler(onAppear) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  return ReanimatedModule.unregisterEventHandler(onAppear);
}
export function subscribeForKeyboardEvents(eventHandler, isStatusBarTranslucentAndroid) {
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
}
export function unsubscribeFromKeyboardEvents(arg0) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  return ReanimatedModule.unsubscribeFromKeyboardEvents(arg0);
}
export function registerSensor(arg0, arg1, arg2) {
  if (!global.__sensorContainer) {
    const sensorContainer = new SensorContainer.SensorContainer();
    global.__sensorContainer = sensorContainer;
  }
  const __sensorContainer = global.__sensorContainer;
  return __sensorContainer.registerSensor(arg0, arg1, freezeObjectInDev.makeShareableCloneRecursive(arg2));
}
export function initializeSensor(arg0, arg1) {
  if (!global.__sensorContainer) {
    const sensorContainer = new SensorContainer.SensorContainer();
    global.__sensorContainer = sensorContainer;
  }
  const __sensorContainer = global.__sensorContainer;
  return __sensorContainer.initializeSensor(arg0, arg1);
}
export function unregisterSensor(registerSensorResult) {
  if (!global.__sensorContainer) {
    const sensorContainer = new SensorContainer.SensorContainer();
    global.__sensorContainer = sensorContainer;
  }
  const __sensorContainer = global.__sensorContainer;
  return __sensorContainer.unregisterSensor(registerSensorResult);
}
export function enableLayoutAnimations(enableLayoutAnimations) {
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
}
export function configureLayoutAnimationBatch(arg0) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  const result = ReanimatedModule.configureLayoutAnimationBatch(arg0);
}
export function setShouldAnimateExitingForTag(arg0, arg1) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  const result = ReanimatedModule.setShouldAnimateExitingForTag(arg0, arg1);
}
export function jsiConfigureProps(keys, arg1) {
  if (!closure_4) {
    const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
    ReanimatedModule.configureProps(keys, arg1);
  }
}
export function markNodeAsRemovable(arg0) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  ReanimatedModule.markNodeAsRemovable(arg0);
}
export function unmarkNodeAsRemovable(componentViewTag) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  const result = ReanimatedModule.unmarkNodeAsRemovable(componentViewTag);
}