// === Module 1182: weakMap ===

// Module 1182 (weakMap)
const require = arg1;
const dependencyMap = arg6;
const weakMap = new WeakMap();
arg5.enableSyncToNative = function enableSyncToNative(globalScope) {
  const _require = globalScope;
  if (!weakMap.has(globalScope)) {
    let result = weakMap.set(globalScope, true);
    _require(1154).fillTyped(globalScope, "setUser", (arg0) => {
      closure_0 = arg0;
      return (arg0) => {
        const NATIVE = callback(closure_2_1[1]).NATIVE;
        NATIVE.setUser(arg0);
        const call = callback.call;
        return typeof call === "unknown" ? callback(arg0) : call(callback, arg0);
      };
    });
    let obj2 = _require(1154);
    _require(1154).fillTyped(globalScope, "setTag", (arg0) => {
      closure_0 = arg0;
      return (arg0, arg1) => {
        const NATIVE = callback(closure_2_1[1]).NATIVE;
        const NATIVE2 = callback(closure_2_1[1]).NATIVE;
        NATIVE.setTag(arg0, NATIVE2.primitiveProcessor(arg1));
        const call = callback.call;
        return typeof call === "unknown" ? callback(arg0, arg1) : call(callback, arg0, arg1);
      };
    });
    const obj3 = _require(1154);
    _require(1154).fillTyped(globalScope, "setTags", (arg0) => {
      closure_0 = arg0;
      return (arg0) => {
        closure_0 = arg0;
        const keys = Object.keys(arg0);
        const item = keys.forEach((arg0) => {
          const NATIVE = dependencyMap(closure_1_1[1]).NATIVE;
          const NATIVE2 = dependencyMap(closure_1_1[1]).NATIVE;
          NATIVE.setTag(arg0, NATIVE2.primitiveProcessor(dependencyMap[arg0]));
        });
        const call = closure_0.call;
        return typeof call === "unknown" ? closure_0(arg0) : call(closure_0, arg0);
      };
    });
    const obj4 = _require(1154);
    _require(1154).fillTyped(globalScope, "setExtras", (arg0) => {
      closure_0 = arg0;
      return (arg0) => {
        closure_0 = arg0;
        const keys = Object.keys(arg0);
        const item = keys.forEach((arg0) => {
          const NATIVE = dependencyMap(closure_1_1[1]).NATIVE;
          NATIVE.setExtra(arg0, dependencyMap[arg0]);
        });
        const call = closure_0.call;
        return typeof call === "unknown" ? closure_0(arg0) : call(closure_0, arg0);
      };
    });
    const obj5 = _require(1154);
    _require(1154).fillTyped(globalScope, "setExtra", (arg0) => {
      closure_0 = arg0;
      return (arg0, arg1) => {
        const NATIVE = callback(closure_2_1[1]).NATIVE;
        NATIVE.setExtra(arg0, arg1);
        const call = callback.call;
        return typeof call === "unknown" ? callback(arg0, arg1) : call(callback, arg0, arg1);
      };
    });
    const obj6 = _require(1154);
    _require(1154).fillTyped(globalScope, "addBreadcrumb", (arg0) => {
      closure_0 = arg0;
      return (level) => {
        let DEFAULT_BREADCRUMB_LEVEL = level.level;
        const merged = Object.assign({}, level);
        if (!DEFAULT_BREADCRUMB_LEVEL) {
          DEFAULT_BREADCRUMB_LEVEL = callback(closure_2_1[2]).DEFAULT_BREADCRUMB_LEVEL;
        }
        const obj = { level: DEFAULT_BREADCRUMB_LEVEL, data: null };
        let result;
        if (level.data) {
          result = callback(closure_2_1[3]).convertToNormalizedObject(level.data);
          const obj2 = callback(closure_2_1[3]);
        }
        obj[1] = result;
        const merged1 = Object.assign(merged, obj);
        const call = callback.call;
        if (typeof call === "unknown") {
          callback(merged1, arg1);
        } else {
          call(obj3, merged1, arg1);
        }
        const lastBreadcrumb = obj3.getLastBreadcrumb();
        if (lastBreadcrumb) {
          const NATIVE = tmp11(tmp12[1]).NATIVE;
          NATIVE.addBreadcrumb(lastBreadcrumb);
        } else {
          const logger = tmp11(tmp12[4]).logger;
          logger.warn("[ScopeSync] Last created breadcrumb is undefined. Skipping sync to native.");
        }
        return callback;
      };
    });
    const obj7 = _require(1154);
    _require(1154).fillTyped(globalScope, "clearBreadcrumbs", (arg0) => {
      closure_0 = arg0;
      return () => {
        const NATIVE = callback(closure_2_1[1]).NATIVE;
        NATIVE.clearBreadcrumbs();
        const call = callback.call;
        return typeof call === "unknown" ? callback() : call(callback);
      };
    });
    const obj8 = _require(1154);
    _require(1154).fillTyped(globalScope, "setContext", (arg0) => {
      closure_0 = arg0;
      return (arg0, arg1) => {
        const NATIVE = callback(closure_2_1[1]).NATIVE;
        NATIVE.setContext(arg0, arg1);
        const call = callback.call;
        return typeof call === "unknown" ? callback(arg0, arg1) : call(callback, arg0, arg1);
      };
    });
    const obj9 = _require(1154);
  }
};