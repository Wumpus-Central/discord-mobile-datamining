// _runtime/metro/00245__.js
import _modDef38 from "00038__.js";
import _modDef239 from "00239__.js";
import frozen from "../00257_frozen.js";
import _modDef258 from "00258__.js";
import _modDef261 from "00261__.js";

const require = globalThis.__r;
let _require;

let closure_5 = {};
let closure_6 = {};
const map = new Map();
const map1 = new Map();
function componentProviderInstrumentationHook(fn) {
  return fn();
}

export function setWrapperComponentProvider(arg0) {
  let closure_1_3 = arg0;
}
export function setRootViewStyleProvider(arg0) {
  let closure_1_4 = arg0;
}
export const registerConfig = function registerConfig(arr) {
  const item = arr.forEach((run) => {
    let component;
    if (run.run) {
      closure_5[run.appKey] = run.run;
    } else {
      component(closure_2[0])(
        null != run.component,
        "AppRegistry.registerConfig(...): Every config is expected to set either `run` or `component`, but `%s` has neither.",
        run.appKey,
      );
      const appKey = run.appKey;
      component = run.component;
      closure_5[appKey] = (arg0, displayMode) => {
        const obj = {
          RootComponent: componentProviderInstrumentationHook(component, _modDef239),
          initialProps: null,
          rootTag: null,
          WrapperComponent: closure_2_3 && closure_2_3(arg0),
          rootViewStyle: closure_2_4 && closure_2_4(arg0),
          isLogBox: "LogBox" === appKey,
          debugName: appKey,
          displayMode,
        };
        ({ initialProps: obj.initialProps, rootTag: obj.rootTag } = arg0);
        const _default = require("renderApplication").default;
        closure_2_3 && closure_2_3(arg0);
        closure_2_4 && closure_2_4(arg0);
        _default(obj);
      };
      if (run.section) {
        closure_6[appKey] = tmp5[appKey];
      }
    }
  });
};
export const registerComponent = function registerComponent(Discord, arg1, arg2) {
  let closure_0 = Discord;
  let closure_1 = arg1;
  closure_5[Discord] = (arg0, displayMode) => {
    const obj = {
      RootComponent: componentProviderInstrumentationHook(component, _modDef239),
      initialProps: null,
      rootTag: null,
      WrapperComponent: closure_2_3 && closure_2_3(arg0),
      rootViewStyle: closure_2_4 && closure_2_4(arg0),
      isLogBox: "LogBox" === appKey,
      debugName: appKey,
      displayMode,
    };
    ({ initialProps: obj.initialProps, rootTag: obj.rootTag } = arg0);
    const _default = require("renderApplication").default;
    closure_2_3 && closure_2_3(arg0);
    closure_2_4 && closure_2_4(arg0);
    _default(obj);
  };
  const tmp2 = arg2;
  if (tmp2) {
    closure_6[Discord] = tmp[Discord];
  }
  return Discord;
};
export const registerRunnable = function registerRunnable(Discord, arg1) {
  closure_5[Discord] = arg1;
  return Discord;
};
export const registerSection = function registerSection(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  closure_5[arg0] = (arg0, displayMode) => {
    const obj = {
      RootComponent: componentProviderInstrumentationHook(component, _modDef239),
      initialProps: null,
      rootTag: null,
      WrapperComponent: closure_2_3 && closure_2_3(arg0),
      rootViewStyle: closure_2_4 && closure_2_4(arg0),
      isLogBox: "LogBox" === appKey,
      debugName: appKey,
      displayMode,
    };
    ({ initialProps: obj.initialProps, rootTag: obj.rootTag } = arg0);
    const _default = require("renderApplication").default;
    closure_2_3 && closure_2_3(arg0);
    closure_2_4 && closure_2_4(arg0);
    _default(obj);
  };
  closure_6[arg0] = closure_5[arg0];
};
export const getAppKeys = function getAppKeys() {
  return Object.keys(closure_5);
};
export const getSectionKeys = function getSectionKeys() {
  return Object.keys(closure_6);
};
export const getSections = function getSections() {
  const obj = {};
  const merged = Object.assign(closure_6);
  return obj;
};
export const getRunnable = function getRunnable(Discord) {
  return closure_5[Discord];
};
export const getRegistry = function getRegistry() {
  let obj2;
  const obj = { sections: Object.keys(closure_6), runnables: obj2 };
  obj2 = {};
  const merged = Object.assign(closure_5);
  return obj;
};
export function setComponentProviderInstrumentationHook(arg0) {
  componentProviderInstrumentationHook = arg0;
}
export const runApplication = function runApplication(name, arg1, arg2) {
  if ("LogBox" !== name) {
    const _HermesInternal = HermesInternal;
    const _console = console;
    console.log('Running "' + name + '"');
  }
  const tmp3 = _modDef38;
  tmp3(
    closure_5[name],
    '"' +
      name +
      "\" has not been registered. This can happen if:\n* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.\n* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.",
  );
  const obj = _modDef258;
  const obj2 = { name };
  obj.setActiveScene(obj2);
  const tmp6 = closure_5[name];
  const obj3 = frozen;
  tmp6(arg1, obj3.coerceDisplayMode(arg2));
};
export const setSurfaceProps = function setSurfaceProps(arg0, arg1, arg2) {
  if ("LogBox" !== arg0) {
    const _JSON = JSON;
    const text = `Updating props for Surface "${arg0}`;
    const _console = console;
    console.log(`${`Updating props for Surface "${arg0}`}" with ${JSON.stringify(arg1)}`);
  }
  const tmp4 = _modDef38;
  tmp4(
    closure_5[arg0],
    '"' +
      arg0 +
      "\" has not been registered. This can happen if:\n* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.\n* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.",
  );
  const tmp6 = closure_5[arg0];
  const obj = frozen;
  tmp6(arg1, obj.coerceDisplayMode(arg2));
};
export const unmountApplicationComponentAtRootTag = function unmountApplicationComponentAtRootTag(arg0) {
  console.error("Unexpected call to unmountApplicationComponentAtRootTag in Fabric.");
};
export const registerHeadlessTask = function registerHeadlessTask(BackgroundSync, arg1) {
  if (map.has(BackgroundSync)) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn(
      "registerHeadlessTask or registerCancellableHeadlessTask called multiple times for same key '" +
        BackgroundSync +
        "'",
    );
  }
  const fn = () => () => {};
  const result = map.set(BackgroundSync, arg1);
  const result1 = map1.set(BackgroundSync, fn);
};
export const registerCancellableHeadlessTask = function registerCancellableHeadlessTask(arg0, arg1, arg2) {
  if (map.has(arg0)) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn(
      "registerHeadlessTask or registerCancellableHeadlessTask called multiple times for same key '" + arg0 + "'",
    );
  }
  const result = map.set(arg0, arg1);
  const result1 = map1.set(arg0, arg2);
};
export const startHeadlessTask = function startHeadlessTask(arg0, arg1, arg2) {
  let closure_0;
  _require = arg0;
  const _default = require("HeadlessJsTaskSupport").default;
  const value = map.get(arg1);
  if (value) {
    const promise = value()(arg2);
    const nextPromise = promise.then(() => {
      if (_default) {
        _default.notifyTaskFinished(closure_0);
      }
    });
    nextPromise.catch((error) => {
      console.error(error);
      const tmp2 = _default && error instanceof _modDef261;
      if (tmp2) {
        const notifyTaskRetryResult = _default.notifyTaskRetry(closure_0);
        notifyTaskRetryResult.then((result) => {
          const tmp = result;
          if (!tmp) {
            _default.notifyTaskFinished(closure_1_0);
          }
        });
      }
    });
  } else {
    let tmp2 = globalThis;
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("No task registered for key " + arg1);
    const tmp4 = _default;
    if (tmp4) {
      _default.notifyTaskFinished(arg0);
    }
  }
};
export const cancelHeadlessTask = function cancelHeadlessTask(arg0, arg1) {
  const value = map1.get(arg1);
  if (value) {
    value()();
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("No task canceller registered for key '" + arg1 + "'");
    throw error;
  }
};
