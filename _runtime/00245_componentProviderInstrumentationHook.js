// === Module 245: componentProviderInstrumentationHook ===

// Module 245 (componentProviderInstrumentationHook)
import _modDef38 from "module_38" /* 38 */;
import _modDef239 from "module_239" /* 239 */;
import frozen from "frozen" /* 257 */;
import _modDef258 from "module_258" /* 258 */;
import _modDef261 from "module_261" /* 261 */;

require = arg1;
importDefault = arg2;
const dependencyMap = {};
let closure_6 = {};
const map = new Map();
const map1 = new Map();
let global = function componentProviderInstrumentationHook(fn) {
  return fn();
};

export function setWrapperComponentProvider(arg0) {
  global = arg0;
}
export function setRootViewStyleProvider(arg0) {
  global = arg0;
}
export const registerConfig = function registerConfig(arr) {
  const item = arr.forEach((run) => {
    if (run.run) {
      closure_5[run.appKey] = run.run;
    } else {
      component(38)(null != run.component, "AppRegistry.registerConfig(...): Every config is expected to set either `run` or `component`, but `%s` has neither.", run.appKey);
      const appKey = run.appKey;
      component = run.component;
      closure_5[appKey] = (arg0, displayMode) => {
        const obj = { RootComponent: closure_2_9(component, _modDef239), initialProps: null, rootTag: null, WrapperComponent: null, rootViewStyle: null, isLogBox: null, debugName: null, displayMode: null };
        ({ initialProps: obj.initialProps, rootTag: obj.rootTag } = arg0);
        let tmp = closure_2_3;
        if (closure_2_3) {
          tmp = closure_2_3(arg0);
        }
        obj.WrapperComponent = tmp;
        let tmp2 = closure_2_4;
        if (closure_2_4) {
          tmp2 = closure_2_4(arg0);
        }
        obj.rootViewStyle = tmp2;
        obj.isLogBox = "LogBox" === appKey;
        obj.debugName = appKey;
        obj.displayMode = displayMode;
        require("renderApplication").default(obj);
      };
      if (run.section) {
        closure_6[appKey] = tmp5[appKey];
      }
    }
  });
};
export const registerComponent = function registerComponent(Discord, arg1, arg2) {
  closure_0 = Discord;
  closure_1 = arg1;
  closure_5[Discord] = (arg0, displayMode) => {
    const obj = { RootComponent: closure_2_9(component, _modDef239), initialProps: null, rootTag: null, WrapperComponent: null, rootViewStyle: null, isLogBox: null, debugName: null, displayMode: null };
    ({ initialProps: obj.initialProps, rootTag: obj.rootTag } = arg0);
    let tmp = closure_2_3;
    if (closure_2_3) {
      tmp = closure_2_3(arg0);
    }
    obj.WrapperComponent = tmp;
    let tmp2 = closure_2_4;
    if (closure_2_4) {
      tmp2 = closure_2_4(arg0);
    }
    obj.rootViewStyle = tmp2;
    obj.isLogBox = "LogBox" === appKey;
    obj.debugName = appKey;
    obj.displayMode = displayMode;
    require("renderApplication").default(obj);
  };
  if (arg2) {
    closure_6[Discord] = tmp[Discord];
  }
  return Discord;
};
export const registerRunnable = function registerRunnable(Discord, arg1) {
  closure_5[Discord] = arg1;
  return Discord;
};
export const registerSection = function registerSection(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  dependencyMap[arg0] = (arg0, displayMode) => {
    const obj = { RootComponent: closure_2_9(component, _modDef239), initialProps: null, rootTag: null, WrapperComponent: null, rootViewStyle: null, isLogBox: null, debugName: null, displayMode: null };
    ({ initialProps: obj.initialProps, rootTag: obj.rootTag } = arg0);
    let tmp = closure_2_3;
    if (closure_2_3) {
      tmp = closure_2_3(arg0);
    }
    obj.WrapperComponent = tmp;
    let tmp2 = closure_2_4;
    if (closure_2_4) {
      tmp2 = closure_2_4(arg0);
    }
    obj.rootViewStyle = tmp2;
    obj.isLogBox = "LogBox" === appKey;
    obj.debugName = appKey;
    obj.displayMode = displayMode;
    require("renderApplication").default(obj);
  };
  closure_6[arg0] = dependencyMap[arg0];
};
export const getAppKeys = function getAppKeys() {
  return Object.keys(closure_5);
};
export const getSectionKeys = function getSectionKeys() {
  return Object.keys(closure_6);
};
export const getSections = function getSections() {
  const merged = Object.assign(closure_6);
  return {};
};
export const getRunnable = function getRunnable(Discord) {
  return dependencyMap[Discord];
};
export const getRegistry = function getRegistry() {
  let obj = { sections: Object.keys(closure_6), runnables: null };
  obj = {};
  const merged = Object.assign(closure_5);
  obj.runnables = obj;
  return obj;
};
export function setComponentProviderInstrumentationHook(arg0) {
  global = arg0;
}
export const runApplication = function runApplication(name, arg1, arg2) {
  if ("LogBox" !== name) {
    const _HermesInternal = HermesInternal;
    const _console = console;
    console.log("Running \"" + name + "\"");
  }
  _modDef38(dependencyMap[name], "\"" + name + "\" has not been registered. This can happen if:\n* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.\n* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.");
  const obj = { name };
  obj.setActiveScene(obj);
  dependencyMap[name](arg1, frozen.coerceDisplayMode(arg2));
};
export const setSurfaceProps = function setSurfaceProps(arg0, arg1, arg2) {
  if ("LogBox" !== arg0) {
    const _JSON = JSON;
    const text = `Updating props for Surface "${arg0}`;
    const _console = console;
    console.log(`${`Updating props for Surface "${arg0}`}" with ${JSON.stringify(arg1)}`);
  }
  _modDef38(dependencyMap[arg0], "\"" + arg0 + "\" has not been registered. This can happen if:\n* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.\n* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.");
  dependencyMap[arg0](arg1, frozen.coerceDisplayMode(arg2));
};
export const unmountApplicationComponentAtRootTag = function unmountApplicationComponentAtRootTag(arg0) {
  console.error("Unexpected call to unmountApplicationComponentAtRootTag in Fabric.");
};
export const registerHeadlessTask = function registerHeadlessTask(BackgroundSync, arg1) {
  if (map.has(BackgroundSync)) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("registerHeadlessTask or registerCancellableHeadlessTask called multiple times for same key '" + BackgroundSync + "'");
  }
  const fn = () => () => {

  };
  const result = map.set(BackgroundSync, arg1);
  const result1 = map1.set(BackgroundSync, fn);
};
export const registerCancellableHeadlessTask = function registerCancellableHeadlessTask(arg0, arg1, arg2) {
  if (map.has(arg0)) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("registerHeadlessTask or registerCancellableHeadlessTask called multiple times for same key '" + arg0 + "'");
  }
  const result = map.set(arg0, arg1);
  const result1 = map1.set(arg0, arg2);
};
export const startHeadlessTask = function startHeadlessTask(arg0, arg1, arg2) {
  _require = arg0;
  const _default = require("HeadlessJsTaskSupport").default;
  value = map.get(arg1);
  if (value) {
    const promise = value()(arg2);
    value()(arg2).then(() => {
      if (_default) {
        _default.notifyTaskFinished(closure_0);
      }
    }).catch((error) => {
      console.error(error);
      let tmp2 = _default;
      if (_default) {
        tmp2 = error instanceof _modDef261;
      }
      if (tmp2) {
        _default.notifyTaskRetry(closure_0).then((result) => {
          if (!result) {
            _default.notifyTaskFinished(closure_1_0);
          }
        });
        const notifyTaskRetryResult = _default.notifyTaskRetry(closure_0);
      }
    });
  } else {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("No task registered for key " + arg1);
    if (_default) {
      _default.notifyTaskFinished(arg0);
    }
  }
};
export const cancelHeadlessTask = function cancelHeadlessTask(arg0, arg1) {
  value = map1.get(arg1);
  if (value) {
    value()();
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("No task canceller registered for key '" + arg1 + "'");
    throw error;
  }
};