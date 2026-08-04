// _runtime/01705_configureProps.js
import isJest from "isJest";

function configureProps() {
  for (const key10008 in require(1619).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST) {
    let tmp8 = key10008;
    let tmp9 = require;
    let tmp10 = dependencyMap;
    if (!(key10008 in require(1619).PropsAllowlists.UI_THREAD_PROPS_WHITELIST)) {
      continue;
    } else {
      let tmp = globalThis;
      let _HermesInternal = HermesInternal;
      let str = "` was whitelisted both as UI and native prop. Please remove it from one of the lists.";
      let str2 = "Property `";
      let tmp2 = new.target;
      let tmp3 = new.target;
      let reanimatedError = new tmp9(1617).ReanimatedError("Property `" + key10008 + "` was whitelisted both as UI and native prop. Please remove it from one of the lists.");
      let tmp5 = reanimatedError;
      throw reanimatedError;
    }
  }
  const keys = Object.keys(require(1619).PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
  require(1650) /* isReanimated3 */.jsiConfigureProps(keys, Object.keys(require(1619).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST));
}
isJest = isJest.shouldBeUseWeb();
const set = new Set();
configureProps();

export { configureProps };
export const addWhitelistedNativeProps = function addWhitelistedNativeProps(arg0) {
  const merged = Object.assign(require(1619).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST);
  const merged1 = Object.assign(arg0);
  require(1619).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST = {};
  if (Object.keys(require(1619).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST).length !== Object.keys(require(1619).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST).length) {
    configureProps();
  }
};
export const addWhitelistedUIProps = function addWhitelistedUIProps(arg0) {
  const merged = Object.assign(require(1619).PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
  const merged1 = Object.assign(arg0);
  require(1619).PropsAllowlists.UI_THREAD_PROPS_WHITELIST = {};
  if (Object.keys(require(1619).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length !== Object.keys(require(1619).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length) {
    configureProps();
  }
};
export const configureReanimatedLogger = function configureReanimatedLogger(level) {
  require(1610) /* addLogBoxLog */.updateLoggerConfig(level);
  if (!isJest) {
    tmp(1650).executeOnUIRuntimeSync(tmp(1610).updateLoggerConfig)(level);
    const tmpResult = tmp(1650);
  }
};
export const adaptViewConfig = function adaptViewConfig(viewConfig) {
  const uiViewClassName = viewConfig.uiViewClassName;
  let obj = set;
  if (!set.has(uiViewClassName)) {
    obj = {};
    const _Object = Object;
    const keys = Object.keys(viewConfig.validAttributes);
    const item = keys.forEach((arg0) => {
      if (!tmp3) {
        obj[arg0] = true;
      }
    });
    const _Object2 = Object;
    obj = {};
    const merged = Object.assign(obj(1619).PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
    const merged1 = Object.assign(obj);
    obj(1619).PropsAllowlists.UI_THREAD_PROPS_WHITELIST = obj;
    const _Object3 = Object;
    if (Object.keys(obj(1619).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length !== Object.keys(obj(1619).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length) {
      configureProps();
    }
    obj.add(uiViewClassName);
  }
};