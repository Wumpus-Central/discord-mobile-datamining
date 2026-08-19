// _runtime/01753_configureProps.js
import addLogBoxLog from "01658_addLogBoxLog.js";
import t from "01665_t.js";
import _mod1667 from "metro/01667__.js";
import isReanimated3 from "01698_isReanimated3.js";
import isJest from "01657_isJest.js";

function configureProps() {
  for (const key10008 in _mod1667.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST) {
    if (!(key10008 in _mod1667.PropsAllowlists.UI_THREAD_PROPS_WHITELIST)) {
      continue;
    } else {
      let _HermesInternal = HermesInternal;
      let reanimatedError = new t.ReanimatedError("Property `" + key10008 + "` was whitelisted both as UI and native prop. Please remove it from one of the lists.");
      throw reanimatedError;
    }
  }
  const keys = Object.keys(_mod1667.PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
  isReanimated3.jsiConfigureProps(keys, Object.keys(_mod1667.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST));
}
let closure_2 = isJest.shouldBeUseWeb();
const set = new Set();
configureProps();

export { configureProps };
export const addWhitelistedNativeProps = function addWhitelistedNativeProps(arg0) {
  const merged = Object.assign(_mod1667.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST);
  const merged1 = Object.assign(arg0);
  _mod1667.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST = {};
  if (Object.keys(_mod1667.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST).length !== Object.keys(_mod1667.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST).length) {
    configureProps();
  }
};
export const addWhitelistedUIProps = function addWhitelistedUIProps(arg0) {
  const merged = Object.assign(_mod1667.PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
  const merged1 = Object.assign(arg0);
  _mod1667.PropsAllowlists.UI_THREAD_PROPS_WHITELIST = {};
  if (Object.keys(_mod1667.PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length !== Object.keys(_mod1667.PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length) {
    configureProps();
  }
};
export const configureReanimatedLogger = function configureReanimatedLogger(level) {
  addLogBoxLog.updateLoggerConfig(level);
  if (!closure_2) {
    isReanimated3.executeOnUIRuntimeSync(addLogBoxLog.updateLoggerConfig)(level);
    const tmpResult = isReanimated3;
  }
};
export const adaptViewConfig = function adaptViewConfig(viewConfig) {
  const uiViewClassName = viewConfig.uiViewClassName;
  let obj = set;
  if (!set.has(uiViewClassName)) {
    const _Object = Object;
    const keys = Object.keys(viewConfig.validAttributes);
    const item = keys.forEach((item, index) => {
      if (!tmp3) {
        obj[item] = true;
      }
      tmp3 = item in obj(dependencyMap[1]).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST || item in obj(dependencyMap[1]).PropsAllowlists.UI_THREAD_PROPS_WHITELIST;
    });
    const _Object2 = Object;
    obj = {};
    const merged = Object.assign(obj(1667).PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
    const merged1 = Object.assign(obj);
    obj(1667).PropsAllowlists.UI_THREAD_PROPS_WHITELIST = obj;
    const _Object3 = Object;
    if (Object.keys(obj(1667).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length !== Object.keys(obj(1667).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length) {
      configureProps();
    }
    obj.add(uiViewClassName);
  }
};