// _runtime/01754_configureProps.js
import _mod1659 from "metro/01659__.js";
import _mod1666 from "metro/01666__.js";
import _mod1668 from "metro/01668__.js";
import runOnRuntime from "01699_runOnRuntime.js";
import 01658__ from "metro/01658__.js";

function configureProps() {
  for (const key10008 in _mod1668.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST) {
    if (!(key10008 in _mod1668.PropsAllowlists.UI_THREAD_PROPS_WHITELIST)) {
      continue;
    } else {
      let tmp = globalThis;
      let _HermesInternal = HermesInternal;
      let str = "` was whitelisted both as UI and native prop. Please remove it from one of the lists.";
      let str2 = "Property `";
      let tmp2 = new.target;
      let tmp3 = new.target;
      let reanimatedError = new _mod1666.ReanimatedError("Property `" + key10008 + "` was whitelisted both as UI and native prop. Please remove it from one of the lists.");
      throw reanimatedError;
    }
  }
  const keys = Object.keys(_mod1668.PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
  runOnRuntime.jsiConfigureProps(keys, Object.keys(_mod1668.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST));
}
let closure_2 = module_1658.shouldBeUseWeb();
const set = new Set();
configureProps();

export { configureProps };
export const addWhitelistedNativeProps = function addWhitelistedNativeProps(arg0) {
  const merged = Object.assign(_mod1668.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST);
  const merged1 = Object.assign(arg0);
  _mod1668.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST = {};
  if (Object.keys(_mod1668.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST).length !== Object.keys(_mod1668.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST).length) {
    configureProps();
  }
  const obj = {};
};
export const addWhitelistedUIProps = function addWhitelistedUIProps(arg0) {
  const merged = Object.assign(_mod1668.PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
  const merged1 = Object.assign(arg0);
  _mod1668.PropsAllowlists.UI_THREAD_PROPS_WHITELIST = {};
  if (Object.keys(_mod1668.PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length !== Object.keys(_mod1668.PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length) {
    configureProps();
  }
  const obj = {};
};
export const configureReanimatedLogger = function configureReanimatedLogger(level) {
  _mod1659.updateLoggerConfig(level);
  if (!closure_2) {
    runOnRuntime.executeOnUIRuntimeSync(_mod1659.updateLoggerConfig)(level);
    const tmpResult = runOnRuntime;
  }
};
export const adaptViewConfig = function adaptViewConfig(viewConfig) {
  const uiViewClassName = viewConfig.uiViewClassName;
  if (!set.has(uiViewClassName)) {
    const obj2 = {};
    const _Object = Object;
    const keys = Object.keys(viewConfig.validAttributes);
    const item = keys.forEach((item) => {
      if (!tmp3) {
        obj2[item] = true;
      }
      tmp3 = item in _mod1668.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST || item in _mod1668.PropsAllowlists.UI_THREAD_PROPS_WHITELIST;
    });
    const _Object2 = Object;
    const obj3 = {};
    const merged = Object.assign(obj2(1668).PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
    const merged1 = Object.assign(obj2);
    obj2(1668).PropsAllowlists.UI_THREAD_PROPS_WHITELIST = obj3;
    const _Object3 = Object;
    if (Object.keys(obj2(1668).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length !== Object.keys(obj2(1668).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length) {
      configureProps();
    }
    set.add(uiViewClassName);
  }
};