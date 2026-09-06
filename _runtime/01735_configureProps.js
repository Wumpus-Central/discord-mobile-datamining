// === Module 1735: configureProps ===

// Module 1735 (configureProps)
import _mod1640 from "module_1640" /* 1640 */;
import _mod1647 from "module_1647" /* 1647 */;
import _mod1649 from "module_1649" /* 1649 */;
import runOnRuntime from "runOnRuntime" /* 1680 */;
import module_1639 from "module_1639" /* 1639 */;

function configureProps() {
  for (const key10008 in _mod1649.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST) {
    if (!(key10008 in _mod1649.PropsAllowlists.UI_THREAD_PROPS_WHITELIST)) {
      continue;
    } else {
      let tmp = globalThis;
      let _HermesInternal = HermesInternal;
      let str = "` was whitelisted both as UI and native prop. Please remove it from one of the lists.";
      let str2 = "Property `";
      let tmp2 = new.target;
      let tmp3 = new.target;
      let reanimatedError = new _mod1647.ReanimatedError("Property `" + key10008 + "` was whitelisted both as UI and native prop. Please remove it from one of the lists.");
      throw reanimatedError;
    }
  }
  const keys = Object.keys(_mod1649.PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
  runOnRuntime.jsiConfigureProps(keys, Object.keys(_mod1649.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST));
}
let closure_2 = module_1639.shouldBeUseWeb();
const set = new Set();
configureProps();

export { configureProps };
export const addWhitelistedNativeProps = function addWhitelistedNativeProps(arg0) {
  const merged = Object.assign(_mod1649.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST);
  const merged1 = Object.assign(arg0);
  _mod1649.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST = {};
  if (Object.keys(_mod1649.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST).length !== Object.keys(_mod1649.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST).length) {
    configureProps();
  }
  const obj = {};
};
export const addWhitelistedUIProps = function addWhitelistedUIProps(arg0) {
  const merged = Object.assign(_mod1649.PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
  const merged1 = Object.assign(arg0);
  _mod1649.PropsAllowlists.UI_THREAD_PROPS_WHITELIST = {};
  if (Object.keys(_mod1649.PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length !== Object.keys(_mod1649.PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length) {
    configureProps();
  }
  const obj = {};
};
export const configureReanimatedLogger = function configureReanimatedLogger(level) {
  _mod1640.updateLoggerConfig(level);
  if (!closure_2) {
    runOnRuntime.executeOnUIRuntimeSync(_mod1640.updateLoggerConfig)(level);
    const tmpResult = runOnRuntime;
  }
};
export const adaptViewConfig = function adaptViewConfig(viewConfig) {
  const uiViewClassName = viewConfig.uiViewClassName;
  let UI_THREAD_PROPS_WHITELIST = set;
  if (!set.has(uiViewClassName)) {
    UI_THREAD_PROPS_WHITELIST = {};
    const _Object = Object;
    const keys = Object.keys(viewConfig.validAttributes);
    const item = keys.forEach((item) => {
      if (!tmp3) {
        obj[item] = true;
      }
      tmp3 = item in _mod1649.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST || item in _mod1649.PropsAllowlists.UI_THREAD_PROPS_WHITELIST;
    });
    const _Object2 = Object;
    UI_THREAD_PROPS_WHITELIST = {};
    const merged = Object.assign(UI_THREAD_PROPS_WHITELIST(1649).PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
    const merged1 = Object.assign(UI_THREAD_PROPS_WHITELIST);
    UI_THREAD_PROPS_WHITELIST(1649).PropsAllowlists.UI_THREAD_PROPS_WHITELIST = UI_THREAD_PROPS_WHITELIST;
    const _Object3 = Object;
    if (Object.keys(UI_THREAD_PROPS_WHITELIST(1649).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length !== Object.keys(UI_THREAD_PROPS_WHITELIST(1649).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length) {
      configureProps();
    }
    UI_THREAD_PROPS_WHITELIST.add(uiViewClassName);
  }
};