// === Module 1058: enableSyncToNative ===

// Module 1058 (enableSyncToNative)
import _mod877 from "module_877" /* 877 */;
import convertToNormalizedObject from "convertToNormalizedObject" /* 890 */;
import DEFAULT_BREADCRUMB_LEVEL2 from "DEFAULT_BREADCRUMB_LEVEL" /* 891 */;
import init from "init" /* 1011 */;

const require = globalThis.__r;
let _require;

const weakMap = new WeakMap();

export const enableSyncToNative = function enableSyncToNative(globalScope) {
  _require = globalScope;
  if (!weakMap.has(globalScope)) {
    let result = weakMap.set(globalScope, true);
    let obj2 = require("fillTyped");
    obj2.fillTyped(globalScope, "setUser", (arg0) => {
      let closure_0 = arg0;
      return (arg0) => {
        const NATIVE = _mod877.NATIVE;
        NATIVE.setUser(arg0);
        return closure_0.call(closure_0, arg0);
      };
    });
    const obj3 = require("fillTyped");
    obj3.fillTyped(globalScope, "setTag", (arg0) => {
      let closure_0 = arg0;
      return (arg0, arg1) => {
        const NATIVE = _mod877.NATIVE;
        const setTag = NATIVE.setTag;
        const NATIVE2 = _mod877.NATIVE;
        setTag(arg0, NATIVE2.primitiveProcessor(arg1));
        return closure_0.call(closure_0, arg0, arg1);
      };
    });
    const obj4 = require("fillTyped");
    obj4.fillTyped(globalScope, "setTags", (arg0) => {
      let closure_0 = arg0;
      return (arg0) => {
        closure_0 = arg0;
        const keys = Object.keys(arg0);
        const item = keys.forEach((item) => {
          const NATIVE = closure_2_0(closure_2_1[1]).NATIVE;
          const setTag = NATIVE.setTag;
          const NATIVE2 = closure_2_0(closure_2_1[1]).NATIVE;
          setTag(item, NATIVE2.primitiveProcessor(closure_0[item]));
        });
        return closure_0.call(closure_0, arg0);
      };
    });
    const obj5 = require("fillTyped");
    obj5.fillTyped(globalScope, "setExtras", (arg0) => {
      let closure_0 = arg0;
      return (arg0) => {
        closure_0 = arg0;
        const keys = Object.keys(arg0);
        const item = keys.forEach((item) => {
          const NATIVE = closure_2_0(closure_2_1[1]).NATIVE;
          NATIVE.setExtra(item, closure_0[item]);
        });
        return closure_0.call(closure_0, arg0);
      };
    });
    const obj6 = require("fillTyped");
    obj6.fillTyped(globalScope, "setExtra", (arg0) => {
      let closure_0 = arg0;
      return (arg0, arg1) => {
        const NATIVE = _mod877.NATIVE;
        NATIVE.setExtra(arg0, arg1);
        return closure_0.call(closure_0, arg0, arg1);
      };
    });
    const obj7 = require("fillTyped");
    obj7.fillTyped(globalScope, "addBreadcrumb", (arg0) => {
      let closure_0 = arg0;
      return (level, arg1) => {
        let result;
        const _Object = Object;
        let DEFAULT_BREADCRUMB_LEVEL = level.level;
        const merged = Object.assign({}, level);
        if (!DEFAULT_BREADCRUMB_LEVEL) {
          DEFAULT_BREADCRUMB_LEVEL = DEFAULT_BREADCRUMB_LEVEL2.DEFAULT_BREADCRUMB_LEVEL;
        }
        const obj = { level: DEFAULT_BREADCRUMB_LEVEL, data: result };
        result = undefined;
        if (level.data) {
          const obj2 = convertToNormalizedObject;
          result = obj2.convertToNormalizedObject(level.data);
        }
        globalScope.call(globalScope, assign(merged, obj), arg1);
        const lastBreadcrumb = globalScope.getLastBreadcrumb();
        if (lastBreadcrumb) {
          const NATIVE = _mod877.NATIVE;
          NATIVE.addBreadcrumb(lastBreadcrumb);
        } else {
          const logger = init.logger;
          logger.warn("[ScopeSync] Last created breadcrumb is undefined. Skipping sync to native.");
        }
        return globalScope;
      };
    });
    const obj8 = require("fillTyped");
    obj8.fillTyped(globalScope, "clearBreadcrumbs", (arg0) => {
      let closure_0 = arg0;
      return () => {
        const NATIVE = _mod877.NATIVE;
        NATIVE.clearBreadcrumbs();
        return closure_0.call(closure_0);
      };
    });
    const obj9 = require("fillTyped");
    obj9.fillTyped(globalScope, "setContext", (arg0) => {
      let closure_0 = arg0;
      return (arg0, arg1) => {
        const NATIVE = _mod877.NATIVE;
        NATIVE.setContext(arg0, arg1);
        return closure_0.call(closure_0, arg0, arg1);
      };
    });
  }
};