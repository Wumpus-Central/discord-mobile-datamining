// === Module 1827: ? ===

// Module 1827
import ReanimatedModule2 from "ReanimatedModule" /* 1663 */;
import _mod1665 from "module_1665" /* 1665 */;
import _mod1705 from "module_1705" /* 1705 */;
import SensorContainer from "SensorContainer" /* 1829 */;
import mutablesNative from "mutablesNative" /* 1831 */;
import mappersNative from "mappersNative" /* 1834 */;
import get_ActivityIndicator from "module_1828" /* 1828 */;

const require = globalThis.__r;

let closure_2 = get_ActivityIndicator.isEdgeToEdge();
function isReanimated3() {
  const logger = _mod1665.logger;
  logger.warn("The `isReanimated3` function is deprecated. Please use the exported variable `reanimatedVersion` instead.");
  return false;
}
let closure_3 = { code: "(function handleEvent_Pnpm_coreTs1(_eventTimestamp,event){let[eventHandler]=this.__closure;eventHandler(event);if(globalThis.__mapperRun){globalThis.__mapperRun();}else{function runMappers(){if(globalThis.__mapperRun){globalThis.__mapperRun();}else{requestAnimationFrame(runMappers);}}requestAnimationFrame(runMappers);}})" };
let closure_4 = { code: "(function handleEvent_Pnpm_coreTs2(state,height){let[eventHandler]=this.__closure;eventHandler(state,height);if(globalThis.__mapperRun){globalThis.__mapperRun();}else{function runMappers(){if(globalThis.__mapperRun){globalThis.__mapperRun();}else{requestAnimationFrame(runMappers);}}requestAnimationFrame(runMappers);}})" };

export const startMapper = mappersNative.startMapper;
export const stopMapper = mappersNative.stopMapper;
export const makeMutable = mutablesNative.makeMutable;
export { isReanimated3 };
export const isConfigured = isReanimated3;
export function getViewProp(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  if (arg2) {
    const promise = new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
      return ReanimatedModule.getViewProp(closure_0, closure_1, closure_2, (str) => {
        if (typeof str === "string") {
          if ("error:" === "error:".slice(0, 6)) {
            closure_1(str);
          }
        }
        closure_0(str);
      });
    });
    return promise;
  } else {
    const _Error = Error;
    const error = new Error("[Reanimated] Function `getViewProp` requires a component to be passed as an argument on Fabric.");
    throw error;
  }
}
export function registerEventHandler(arg0, arg1) {
  let num = arg2;
  if (arg2 === undefined) {
    num = -1;
  }
  items = [closure_3, arg0];
  [tmp, tmp2] = items;
  function handleEvent(arg0, arg1) {
    require(arg1);
    if (globalThis.__mapperRun) {
      let _globalThis = globalThis;
      globalThis.__mapperRun();
    } else {
      function runMappers() {
        if (globalThis.__mapperRun) {
          const _globalThis = globalThis;
          globalThis.__mapperRun();
        } else {
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(runMappers);
        }
      }
      let _requestAnimationFrame = requestAnimationFrame;
      let animationFrame = requestAnimationFrame(runMappers);
    }
  }
  const items1 = [tmp2];
  handleEvent.__closure = items1;
  handleEvent.__workletHash = 11253634377280;
  handleEvent.__initData = tmp;
  const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
  return ReanimatedModule.registerEventHandler(_mod1705.createSerializable(handleEvent), arg1, num);
}
export function unregisterEventHandler(arg0) {
  const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
  return ReanimatedModule.unregisterEventHandler(arg0);
}
export function subscribeForKeyboardEvents(pnpm_useAnimatedKeyboardTs1, isStatusBarTranslucentAndroid) {
  items = [closure_4, pnpm_useAnimatedKeyboardTs1];
  [tmp, tmp2] = items;
  function handleEvent(arg0, arg1) {
    require(arg0, arg1);
    if (globalThis.__mapperRun) {
      let _globalThis = globalThis;
      globalThis.__mapperRun();
    } else {
      function runMappers() {
        if (globalThis.__mapperRun) {
          const _globalThis = globalThis;
          globalThis.__mapperRun();
        } else {
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(runMappers);
        }
      }
      let _requestAnimationFrame = requestAnimationFrame;
      let animationFrame = requestAnimationFrame(runMappers);
    }
  }
  const items1 = [tmp2];
  handleEvent.__closure = items1;
  handleEvent.__workletHash = 4890967633970;
  handleEvent.__initData = tmp;
  const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
  let tmp4 = closure_2;
  let tmp5 = closure_2;
  const serializable = _mod1705.createSerializable(handleEvent);
  if (!closure_2) {
    let flag = isStatusBarTranslucentAndroid.isStatusBarTranslucentAndroid;
    if (flag == null) {
      flag = false;
    }
    tmp5 = flag;
  }
  if (!tmp4) {
    let flag2 = isStatusBarTranslucentAndroid.isNavigationBarTranslucentAndroid;
    if (flag2 == null) {
      flag2 = false;
    }
    tmp4 = flag2;
  }
  return ReanimatedModule.subscribeForKeyboardEvents(serializable, tmp5, tmp4);
}
export function unsubscribeFromKeyboardEvents(arg0) {
  const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
  return ReanimatedModule.unsubscribeFromKeyboardEvents(arg0);
}
export function isSensorAvailable(arg0) {
  if (!globalThis.__sensorContainer) {
    const _globalThis = globalThis;
    const sensorContainer = new SensorContainer.SensorContainer();
    globalThis.__sensorContainer = sensorContainer;
  }
  return __sensorContainer.isSensorAvailable(arg0);
}
export function registerSensor(_undefined, config, __initData) {
  if (!globalThis.__sensorContainer) {
    const _globalThis = globalThis;
    const sensorContainer = new SensorContainer.SensorContainer();
    globalThis.__sensorContainer = sensorContainer;
  }
  return __sensorContainer.registerSensor(_undefined, config, _mod1705.createSerializable(__initData));
}
export function initializeSensor(arg0, arg1) {
  if (!globalThis.__sensorContainer) {
    const _globalThis = globalThis;
    const sensorContainer = new SensorContainer.SensorContainer();
    globalThis.__sensorContainer = sensorContainer;
  }
  return __sensorContainer.initializeSensor(arg0, arg1);
}
export function unregisterSensor(arg0) {
  if (!globalThis.__sensorContainer) {
    const _globalThis = globalThis;
    const sensorContainer = new SensorContainer.SensorContainer();
    globalThis.__sensorContainer = sensorContainer;
  }
  return __sensorContainer.unregisterSensor(arg0);
}
export function enableLayoutAnimations(arg0) {
  const logger = _mod1665.logger;
  logger.warn("`enableLayoutAnimations` is deprecated and will be removed in the future.");
}
export function configureLayoutAnimationBatch(arg0) {
  const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
  const result = ReanimatedModule.configureLayoutAnimationBatch(arg0);
}
export function setShouldAnimateExitingForTag(arg0, arg1) {
  const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
  const result = ReanimatedModule.setShouldAnimateExitingForTag(arg0, arg1);
}