// === Module 245: map ===

// Module 245 (map)
import frozen from "frozen" /* 257 */;

require = arg1;
const module = arg2;
const dependencyMap = arg6;
let closure_5 = {};
let closure_6 = {};
const map = new Map();
const map1 = new Map();
function componentProviderInstrumentationHook(arg0) {
  return arg0();
}
arg5.setWrapperComponentProvider = function setWrapperComponentProvider(arg0) {
  closure_3 = arg0;
};
arg5.setRootViewStyleProvider = function setRootViewStyleProvider(arg0) {
  closure_4 = arg0;
};
arg5.registerConfig = function registerConfig(arr) {
  const item = arr.forEach((run) => {
    if (run.run) {
      closure_5[run.appKey] = run.run;
    } else {
      component(table[0])(null != run.component, "AppRegistry.registerConfig(...): Every config is expected to set either `run` or `component`, but `%s` has neither.", run.appKey);
      const appKey = run.appKey;
      component = run.component;
      closure_5[appKey] = (arg0, arg1) => {
        const obj = { RootComponent: closure_1_9(component, component(closure_1_2[2])), initialProps: null, rootTag: null, WrapperComponent: null, rootViewStyle: null, isLogBox: null, debugName: null, displayMode: null };
        ({ initialProps: obj[1], rootTag: obj[2] } = arg0);
        let tmp = closure_1_3;
        if (closure_1_3) {
          tmp = closure_1_3(arg0);
        }
        obj[3] = tmp;
        let tmp2 = closure_1_4;
        if (closure_1_4) {
          tmp2 = closure_1_4(arg0);
        }
        obj[4] = tmp2;
        obj[5] = "LogBox" === appKey;
        obj[6] = appKey;
        obj[7] = arg1;
        appKey(closure_1_2[1]).default(obj);
      };
      if (run.section) {
        closure_6[appKey] = tmp5[appKey];
      }
    }
  });
};
arg5.registerComponent = function registerComponent(Discord, arg1) {
  closure_0 = Discord;
  closure_1 = arg1;
  closure_5[Discord] = (arg0, arg1) => {
    const obj = { RootComponent: closure_1_9(component, component(closure_1_2[2])), initialProps: null, rootTag: null, WrapperComponent: null, rootViewStyle: null, isLogBox: null, debugName: null, displayMode: null };
    ({ initialProps: obj[1], rootTag: obj[2] } = arg0);
    let tmp = closure_1_3;
    if (closure_1_3) {
      tmp = closure_1_3(arg0);
    }
    obj[3] = tmp;
    let tmp2 = closure_1_4;
    if (closure_1_4) {
      tmp2 = closure_1_4(arg0);
    }
    obj[4] = tmp2;
    obj[5] = "LogBox" === appKey;
    obj[6] = appKey;
    obj[7] = arg1;
    appKey(closure_1_2[1]).default(obj);
  };
  if (arg2) {
    closure_6[Discord] = tmp[Discord];
  }
  return Discord;
};
arg5.registerRunnable = function registerRunnable(Discord, arg1) {
  closure_5[Discord] = arg1;
  return Discord;
};
arg5.registerSection = function registerSection(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  dependencyMap[arg0] = (arg0, arg1) => {
    const obj = { RootComponent: closure_1_9(component, component(closure_1_2[2])), initialProps: null, rootTag: null, WrapperComponent: null, rootViewStyle: null, isLogBox: null, debugName: null, displayMode: null };
    ({ initialProps: obj[1], rootTag: obj[2] } = arg0);
    let tmp = closure_1_3;
    if (closure_1_3) {
      tmp = closure_1_3(arg0);
    }
    obj[3] = tmp;
    let tmp2 = closure_1_4;
    if (closure_1_4) {
      tmp2 = closure_1_4(arg0);
    }
    obj[4] = tmp2;
    obj[5] = "LogBox" === appKey;
    obj[6] = appKey;
    obj[7] = arg1;
    appKey(closure_1_2[1]).default(obj);
  };
  closure_6[arg0] = dependencyMap[arg0];
};
arg5.getAppKeys = function getAppKeys() {
  return Object.keys(closure_5);
};
arg5.getSectionKeys = function getSectionKeys() {
  return Object.keys(closure_6);
};
arg5.getSections = function getSections() {
  const merged = Object.assign(closure_6);
  return {};
};
arg5.getRunnable = function getRunnable(Discord) {
  return dependencyMap[Discord];
};
arg5.getRegistry = function getRegistry() {
  let obj = { sections: Object.keys(closure_6), runnables: null };
  obj = {};
  const merged = Object.assign(closure_5);
  obj[1] = obj;
  return obj;
};
arg5.setComponentProviderInstrumentationHook = function setComponentProviderInstrumentationHook(arg0) {
  closure_9 = arg0;
};
arg5.runApplication = function runApplication(name) {
  if ("LogBox" !== name) {
    const _HermesInternal = HermesInternal;
    const _console = console;
    console.log("Running \"" + name + "\"");
  }
  module(38)(dependencyMap[name], "\"" + name + "\" has not been registered. This can happen if:\n* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.\n* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.");
  let obj = module(258);
  obj = { name };
  obj.setActiveScene(obj);
  const tmp3 = module(38);
  dependencyMap[name](arg1, frozen.coerceDisplayMode(arg2));
};
arg5.setSurfaceProps = function setSurfaceProps(arg0, arg1, arg2) {
  if ("LogBox" !== arg0) {
    const _JSON = JSON;
    const text = `Updating props for Surface "${arg0}`;
    const _console = console;
    console.log(`${`Updating props for Surface "${arg0}`}" with ${JSON.stringify(arg1)}`);
  }
  module(38)(dependencyMap[arg0], "\"" + arg0 + "\" has not been registered. This can happen if:\n* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.\n* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.");
  const tmp4 = module(38);
  dependencyMap[arg0](arg1, frozen.coerceDisplayMode(arg2));
};
arg5.unmountApplicationComponentAtRootTag = function unmountApplicationComponentAtRootTag(arg0) {
  console.error("Unexpected call to unmountApplicationComponentAtRootTag in Fabric.");
};
arg5.registerHeadlessTask = function registerHeadlessTask(BackgroundSync, arg1) {
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
arg5.registerCancellableHeadlessTask = function registerCancellableHeadlessTask(arg0, arg1, arg2) {
  if (map.has(arg0)) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("registerHeadlessTask or registerCancellableHeadlessTask called multiple times for same key '" + arg0 + "'");
  }
  const result = map.set(arg0, arg1);
  const result1 = map1.set(arg0, arg2);
};
arg5.startHeadlessTask = function startHeadlessTask(arg0, arg1, arg2) {
  const _require = arg0;
  const _default = _require(259).default;
  const value = map.get(arg1);
  if (value) {
    const promise = value()(arg2);
    value()(arg2).then(() => {
      if (_default) {
        _default.notifyTaskFinished(closure_0);
      }
    }).catch((arg0) => {
      console.error(arg0);
      let tmp2 = _default;
      if (_default) {
        tmp2 = arg0 instanceof _default(closure_1_2[6]);
      }
      if (tmp2) {
        _default.notifyTaskRetry(closure_0).then((arg0) => {
          if (!arg0) {
            closure_1.notifyTaskFinished(closure_0);
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
arg5.cancelHeadlessTask = function cancelHeadlessTask(arg0, arg1) {
  const value = map1.get(arg1);
  if (value) {
    value()();
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("No task canceller registered for key '" + arg1 + "'");
    throw error;
  }
};