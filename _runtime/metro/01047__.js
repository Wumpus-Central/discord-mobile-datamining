// _runtime/metro/01047__.js
import NativeModules from "../00866_NativeModules.js";
import convertToNormalizedObject from "../00879_convertToNormalizedObject.js";
import DEFAULT_BREADCRUMB_LEVEL2 from "../00880_DEFAULT_BREADCRUMB_LEVEL.js";

require = arg1;
let dependencyMap = arg6;
const weakMap = new WeakMap();

export const enableSyncToNative = function enableSyncToNative(globalScope) {
  _require = globalScope;
  if (!weakMap.has(globalScope)) {
    let result = weakMap.set(globalScope, true);
    require("fillTyped").fillTyped(globalScope, "setUser", (arg0) => {
      closure_0 = arg0;
      return (arg0) => {
        const NATIVE = NativeModules.NATIVE;
        NATIVE.setUser(arg0);
        const call = closure_0.call;
        return typeof call === "unknown" ? closure_0(arg0) : call(closure_0, arg0);
      };
    });
    let obj2 = require("fillTyped");
    require("fillTyped").fillTyped(globalScope, "setTag", (arg0) => {
      closure_0 = arg0;
      return (arg0, arg1) => {
        const NATIVE = NativeModules.NATIVE;
        const NATIVE2 = NativeModules.NATIVE;
        NATIVE.setTag(arg0, NATIVE2.primitiveProcessor(arg1));
        const call = closure_0.call;
        return typeof call === "unknown" ? closure_0(arg0, arg1) : call(closure_0, arg0, arg1);
      };
    });
    const obj3 = require("fillTyped");
    require("fillTyped").fillTyped(globalScope, "setTags", (arg0) => {
      closure_0 = arg0;
      return (arg0) => {
        dependencyMap = arg0;
        const keys = Object.keys(arg0);
        const item = keys.forEach((item) => {
          const NATIVE = dependencyMap(866).NATIVE;
          const NATIVE2 = dependencyMap(866).NATIVE;
          NATIVE.setTag(item, NATIVE2.primitiveProcessor(dependencyMap[item]));
        });
        const call = dependencyMap.call;
        return typeof call === "unknown" ? dependencyMap(arg0) : call(dependencyMap, arg0);
      };
    });
    const obj4 = require("fillTyped");
    require("fillTyped").fillTyped(globalScope, "setExtras", (arg0) => {
      closure_0 = arg0;
      return (arg0) => {
        dependencyMap = arg0;
        const keys = Object.keys(arg0);
        const item = keys.forEach((item) => {
          const NATIVE = dependencyMap(closure_2_1[1]).NATIVE;
          NATIVE.setExtra(item, dependencyMap[item]);
        });
        const call = dependencyMap.call;
        return typeof call === "unknown" ? dependencyMap(arg0) : call(dependencyMap, arg0);
      };
    });
    const obj5 = require("fillTyped");
    require("fillTyped").fillTyped(globalScope, "setExtra", (arg0) => {
      closure_0 = arg0;
      return (arg0, arg1) => {
        const NATIVE = NativeModules.NATIVE;
        NATIVE.setExtra(arg0, arg1);
        const call = closure_0.call;
        return typeof call === "unknown" ? closure_0(arg0, arg1) : call(closure_0, arg0, arg1);
      };
    });
    const obj6 = require("fillTyped");
    require("fillTyped").fillTyped(globalScope, "addBreadcrumb", (arg0) => {
      closure_0 = arg0;
      return (level, arg1) => {
        let DEFAULT_BREADCRUMB_LEVEL = level.level;
        const merged = Object.assign({}, level);
        if (!DEFAULT_BREADCRUMB_LEVEL) {
          DEFAULT_BREADCRUMB_LEVEL = DEFAULT_BREADCRUMB_LEVEL2.DEFAULT_BREADCRUMB_LEVEL;
        }
        const obj = { level: DEFAULT_BREADCRUMB_LEVEL, data: null };
        let result;
        if (level.data) {
          result = convertToNormalizedObject.convertToNormalizedObject(level.data);
        }
        obj.data = result;
        const merged1 = Object.assign(merged, obj);
        const call = closure_0.call;
        if (typeof call === "unknown") {
          closure_0(merged1, arg1);
        } else {
          call(obj3, merged1, arg1);
        }
        const lastBreadcrumb = obj3.getLastBreadcrumb();
        if (lastBreadcrumb) {
          const NATIVE = tmp11(866).NATIVE;
          NATIVE.addBreadcrumb(lastBreadcrumb);
        } else {
          const logger = tmp11(1000).logger;
          logger.warn("[ScopeSync] Last created breadcrumb is undefined. Skipping sync to native.");
        }
        return closure_0;
      };
    });
    const obj7 = require("fillTyped");
    require("fillTyped").fillTyped(globalScope, "clearBreadcrumbs", (arg0) => {
      closure_0 = arg0;
      return () => {
        const NATIVE = NativeModules.NATIVE;
        NATIVE.clearBreadcrumbs();
        const call = closure_0.call;
        return typeof call === "unknown" ? closure_0() : call(closure_0);
      };
    });
    const obj8 = require("fillTyped");
    require("fillTyped").fillTyped(globalScope, "setContext", (arg0) => {
      closure_0 = arg0;
      return (arg0, arg1) => {
        const NATIVE = NativeModules.NATIVE;
        NATIVE.setContext(arg0, arg1);
        const call = closure_0.call;
        return typeof call === "unknown" ? closure_0(arg0, arg1) : call(closure_0, arg0, arg1);
      };
    });
    const obj9 = require("fillTyped");
  }
};
