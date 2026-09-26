// === Module 1737: configureProps ===

// Module 1737 (configureProps)
import _mod1642 from "module_1642" /* 1642 */;
import _mod1649 from "module_1649" /* 1649 */;
import _mod1651 from "module_1651" /* 1651 */;
import runOnRuntime from "runOnRuntime" /* 1682 */;
import module_1641 from "module_1641" /* 1641 */;

function configureProps() {
  for (const key10008 in _mod1651.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST) {
    if (!(key10008 in _mod1651.PropsAllowlists.UI_THREAD_PROPS_WHITELIST)) {
      continue;
    } else {
      let tmp = globalThis;
      let _HermesInternal = HermesInternal;
      let str = "` was whitelisted both as UI and native prop. Please remove it from one of the lists.";
      let str2 = "Property `";
      let tmp2 = new.target;
      let tmp3 = new.target;
      let reanimatedError = new _mod1649.ReanimatedError("Property `" + key10008 + "` was whitelisted both as UI and native prop. Please remove it from one of the lists.");
      throw reanimatedError;
    }
  }
  const keys = Object.keys(_mod1651.PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
  runOnRuntime.jsiConfigureProps(keys, Object.keys(_mod1651.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST));
}
let closure_2 = module_1641.shouldBeUseWeb();
const set = new Set();
configureProps();

export { configureProps };
export const addWhitelistedNativeProps = function addWhitelistedNativeProps(arg0) {
  const merged = Object.assign(_mod1651.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST);
  const merged1 = Object.assign(arg0);
  _mod1651.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST = {};
  if (Object.keys(_mod1651.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST).length !== Object.keys(_mod1651.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST).length) {
    configureProps();
  }
  const obj = {};
};
export const addWhitelistedUIProps = function addWhitelistedUIProps(arg0) {
  const merged = Object.assign(_mod1651.PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
  const merged1 = Object.assign(arg0);
  _mod1651.PropsAllowlists.UI_THREAD_PROPS_WHITELIST = {};
  if (Object.keys(_mod1651.PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length !== Object.keys(_mod1651.PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length) {
    configureProps();
  }
  const obj = {};
};
export const configureReanimatedLogger = function configureReanimatedLogger(level) {
  _mod1642.updateLoggerConfig(level);
  if (!closure_2) {
    runOnRuntime.executeOnUIRuntimeSync(_mod1642.updateLoggerConfig)(level);
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
      tmp3 = item in _mod1651.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST || item in _mod1651.PropsAllowlists.UI_THREAD_PROPS_WHITELIST;
    });
    const _Object2 = Object;
    const obj3 = {};
    const merged = Object.assign(obj2(1651).PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
    const merged1 = Object.assign(obj2);
    obj2(1651).PropsAllowlists.UI_THREAD_PROPS_WHITELIST = obj3;
    const _Object3 = Object;
    if (Object.keys(obj2(1651).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length !== Object.keys(obj2(1651).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length) {
      configureProps();
    }
    set.add(uiViewClassName);
  }
};