// discord_app/modules/tti_analytics/native/navigation/debug/NavigationTTIRegionHierarchy.tsx
import LoggerDefault from "../../../../debug/Logger.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let map, name;

function getNavigationTTIRegionHierarchyViolation(arg0, arg1, arg2, arg3, arg4) {
  let combined;
  if ("include" === arg0) {
    if (arg3 > 0) {
      let str12 = "s";
      if (1 === arg3) {
        str12 = "";
      }
      const _HermesInternal3 = HermesInternal;
      combined = "overlaps " + arg3 + " tracked descendant" + str12;
    }
    return combined;
  }
  combined = null;
  if ("exclude" === arg0) {
    combined = null;
    if (arg2) {
      let str3;
      if ("excluded" === arg1) {
        let combined1 = null;
        if (arg3 > 0) {
          let str9 = "s";
          if (1 === arg3) {
            str9 = "";
          }
          const _HermesInternal2 = HermesInternal;
          combined1 = "declares ignored descendants but contains " + arg3 + " tracked region" + str9;
        }
        str3 = combined1;
      } else if ("included" === arg1) {
        let str5 = "declares tracked descendants but no tracked region mounted";
        if (0 !== arg3) {
          let combined2 = null;
          if (arg4 > 0) {
            let str6 = "s";
            if (1 === arg4) {
              str6 = "";
            }
            const _HermesInternal = HermesInternal;
            combined2 = "declares tracked descendants but contains " + arg4 + " ignored region" + str6;
          }
          str5 = combined2;
        }
        str3 = str5;
      } else {
        str3 = "declares mixed descendants but no tracked region mounted";
        if (0 !== arg3) {
          let str4 = null;
          if (0 === arg4) {
            str4 = "declares mixed descendants but no ignored region mounted";
          }
          str3 = str4;
        }
      }
      combined = str3;
    }
  }
}
let react = react_mod;
let obj2 = new LoggerDefault("NavTTIVisualizer");
obj2.enableNativeLogger(true);
let context = react.createContext(null);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (name) => {
      let descendantTracking;
      let first;
      let fn2;
      let hasChildren;
      let id;
      let items2;
      let obj3;
      let sum1;
      let tmp18;
      let tracking;
      const obj = name(id[4]);
      const cResult = obj.c(17);
      name = name.name;
      ({ tracking, descendantTracking, hasChildren } = name);
      id = react.useId();
      context = react.useContext(sum1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          map = new Map();
          return map;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      const tmp5 = context(react.useState(first), 2);
      [obj3, react] = tmp5;
      const tmp6 = context(react.useState(false), 2);
      let closure_4 = tmp6[1];
      let num2;
      const first1 = tmp6[0];
      if (context != null) {
        num2 = context.depth;
      }
      if (num2 == null) {
        num2 = -1;
      }
      const sum = num2 + 1;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            react((get) => {
              const value = get.get(closure_0);
              if (null == closure_1) {
                if (null == value) {
                  return get;
                }
              }
              if (null != closure_1) {
                let included;
                if (value != null) {
                  included = value.included;
                }
                if (included === closure_1.included) {
                  if (value.excluded === closure_1.excluded) {
                    return get;
                  }
                }
              }
              map = new Map(get);
              if (null == closure_1) {
                map.delete(closure_0);
              } else {
                const result = map.set(closure_0, closure_1);
              }
              return map;
            });
          }
        }
        cResult[1] = C;
      } else {
        class C {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            react((get) => {
              const value = get.get(closure_0);
              if (null == closure_1) {
                if (null == value) {
                  return get;
                }
              }
              if (null != closure_1) {
                let included;
                if (value != null) {
                  included = value.included;
                }
                if (included === closure_1.included) {
                  if (value.excluded === closure_1.excluded) {
                    return get;
                  }
                }
              }
              map = new Map(get);
              if (null == closure_1) {
                map.delete(closure_0);
              } else {
                const result = map.set(closure_0, closure_1);
              }
              return map;
            });
          }
        }
      }
      if (cResult[2] !== sum) {
        class C {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            react((get) => {
              const value = get.get(closure_0);
              if (null == closure_1) {
                if (null == value) {
                  return get;
                }
              }
              if (null != closure_1) {
                let included;
                if (value != null) {
                  included = value.included;
                }
                if (included === closure_1.included) {
                  if (value.excluded === closure_1.excluded) {
                    return get;
                  }
                }
              }
              map = new Map(get);
              if (null == closure_1) {
                map.delete(closure_0);
              } else {
                const result = map.set(closure_0, closure_1);
              }
              return map;
            });
          }
        }
        tmp11[0] = C;
        tmp11[1] = sum;
        cResult[2] = sum;
        cResult[3] = tmp11;
      } else {
        class C {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            react((get) => {
              const value = get.get(closure_0);
              if (null == closure_1) {
                if (null == value) {
                  return get;
                }
              }
              if (null != closure_1) {
                let included;
                if (value != null) {
                  included = value.included;
                }
                if (included === closure_1.included) {
                  if (value.excluded === closure_1.excluded) {
                    return get;
                  }
                }
              }
              map = new Map(get);
              if (null == closure_1) {
                map.delete(closure_0);
              } else {
                const result = map.set(closure_0, closure_1);
              }
              return map;
            });
          }
        }
      }
      let num4 = 0;
      sum1 = 0;
      let num5 = 0;
      let sum2 = 0;
      const values = obj3.values();
      for (const item10066 of values) {
        class C {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            react((get) => {
              const value = get.get(closure_0);
              if (null == closure_1) {
                if (null == value) {
                  return get;
                }
              }
              if (null != closure_1) {
                let included;
                if (value != null) {
                  included = value.included;
                }
                if (included === closure_1.included) {
                  if (value.excluded === closure_1.excluded) {
                    return get;
                  }
                }
              }
              map = new Map(get);
              if (null == closure_1) {
                map.delete(closure_0);
              } else {
                const result = map.set(closure_0, closure_1);
              }
              return map;
            });
          }
        }
        sum1 = num4 + item10066.included;
        num4 = sum1;
        sum2 = num5 + item10066.excluded;
        num5 = sum2;
        continue;
      }
      const num6 = 0;
      if ("include" === tracking) {
        class C {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            react((get) => {
              const value = get.get(closure_0);
              if (null == closure_1) {
                if (null == value) {
                  return get;
                }
              }
              if (null != closure_1) {
                let included;
                if (value != null) {
                  included = value.included;
                }
                if (included === closure_1.included) {
                  if (value.excluded === closure_1.excluded) {
                    return get;
                  }
                }
              }
              map = new Map(get);
              if (null == closure_1) {
                map.delete(closure_0);
              } else {
                const result = map.set(closure_0, closure_1);
              }
              return map;
            });
          }
        }
      }
      const num7 = 0;
      if ("exclude" === tracking) {
        class C {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            react((get) => {
              const value = get.get(closure_0);
              if (null == closure_1) {
                if (null == value) {
                  return get;
                }
              }
              if (null != closure_1) {
                let included;
                if (value != null) {
                  included = value.included;
                }
                if (included === closure_1.included) {
                  if (value.excluded === closure_1.excluded) {
                    return get;
                  }
                }
              }
              map = new Map(get);
              if (null == closure_1) {
                map.delete(closure_0);
              } else {
                const result = map.set(closure_0, closure_1);
              }
              return map;
            });
          }
        }
      }
      const items = [num5, num4, num7, num6, context, id];
      const effect = react.useEffect(() => {
        if (context != null) {
          obj2 = { included: num6 + sum1, excluded: num7 + sum2 };
          let updateChildResult = context.updateChild(id, obj2);
        }
        return () => {
          let updateChildResult;
          if (context != null) {
            updateChildResult = context.updateChild(id, null);
          }
          return updateChildResult;
        };
      }, items);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            let closure_0 = requestAnimationFrame(() => closure_1_4(true));
            return () => cancelAnimationFrame(closure_0);
          }
        }
        const items1 = [];
        cResult[4] = A;
        cResult[5] = items1;
        tmp18 = items1;
      } else {
        class A {
          constructor() {
            let closure_0 = requestAnimationFrame(() => closure_1_4(true));
            return () => cancelAnimationFrame(closure_0);
          }
        }
        tmp18 = cResult[5];
      }
      const effect1 = react.useEffect(A, tmp18);
      let tmp20 = null;
      if (first1) {
        class A {
          constructor() {
            let closure_0 = requestAnimationFrame(() => closure_1_4(true));
            return () => cancelAnimationFrame(closure_0);
          }
        }
        tmp20 = sum2(tracking, descendantTracking, hasChildren, num4, num5);
      }
      const current = tmp20;
      const ref = react.useRef(null);
      if (cResult[6] === name) {
        class A {
          constructor() {
            let closure_0 = requestAnimationFrame(() => closure_1_4(true));
            return () => cancelAnimationFrame(closure_0);
          }
        }
        const effect2 = react.useEffect(fn2, items2);
        if (cResult[10] === tmp11) {
          class A {
            constructor() {
              let closure_0 = requestAnimationFrame(() => closure_1_4(true));
              return () => cancelAnimationFrame(closure_0);
            }
          }
        }
        const obj5 = {
          regionId: id,
          contextValue: tmp11,
          includedDescendants: num4,
          excludedDescendants: num5,
          depth: sum,
          violation: tmp20,
        };
        cResult[10] = tmp11;
        cResult[11] = sum;
        cResult[12] = num5;
        cResult[13] = num4;
        cResult[14] = id;
        cResult[15] = tmp20;
        cResult[16] = obj5;
      }
      fn2 = function z() {
        const tmp2 = null != current && current !== ref.current;
        if (tmp2) {
          ref.current = current;
          const _HermesInternal = HermesInternal;
          obj2.warn("" + name + ": " + current);
        }
      };
      items2 = [name, tmp20];
      cResult[6] = name;
      cResult[7] = tmp20;
      cResult[8] = fn2;
      cResult[9] = items2;
    }
  : (name) => {
      let _undefined;
      let c3;
      let descendantTracking;
      let hasChildren;
      let tracking;
      const f125073 = () => {
        map = new Map();
        return map;
      };
      name = name.name;
      ({ tracking, descendantTracking, hasChildren } = name);
      react = undefined;
      let depth;
      let updateChild;
      let sum1;
      let sum2;
      let num4;
      let num5;
      let violation;
      let ref;
      const regionId = react.useId();
      context = react.useContext(depth);
      [obj2, c3] = context(react.useState(f125073), 2);
      context(react.useState(f125073), 2);
      const tmp4 = context(react.useState(false), 2);
      let closure_4 = tmp4[1];
      let num;
      const first = tmp4[0];
      if (context != null) {
        num = context.depth;
      }
      if (num == null) {
        num = -1;
      }
      depth = num + 1;
      updateChild = obj.useCallback((arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        _undefined((get) => {
          const value = get.get(closure_0);
          if (null == closure_1) {
            if (null == value) {
              return get;
            }
          }
          if (null != closure_1) {
            let included;
            if (value != null) {
              included = value.included;
            }
            if (included === closure_1.included) {
              if (value.excluded === closure_1.excluded) {
                return get;
              }
            }
          }
          map = new Map(get);
          if (null == closure_1) {
            map.delete(closure_0);
          } else {
            const result = map.set(closure_0, closure_1);
          }
          return map;
        });
      }, []);
      const items = [depth, updateChild];
      let includedDescendants = 0;
      sum1 = 0;
      let excludedDescendants = 0;
      sum2 = 0;
      const contextValue = obj.useMemo(() => ({ updateChild, depth }), items);
      const values = obj2.values();
      for (const item10049 of values) {
        sum1 = includedDescendants + item10049.included;
        includedDescendants = sum1;
        sum2 = excludedDescendants + item10049.excluded;
        excludedDescendants = sum2;
        continue;
      }
      num4 = 0;
      if ("include" === tracking) {
        num4 = 1;
      }
      num5 = 0;
      if ("exclude" === tracking) {
        num5 = 1;
      }
      const items1 = [excludedDescendants, includedDescendants, num5, num4, context, regionId];
      const effect = react.useEffect(() => {
        if (context != null) {
          obj2 = { included: num4 + sum1, excluded: num5 + sum2 };
          let updateChildResult = context.updateChild(regionId, obj2);
        }
        return () => {
          let updateChildResult;
          if (context != null) {
            updateChildResult = context.updateChild(regionId, null);
          }
          return updateChildResult;
        };
      }, items1);
      const effect1 = react.useEffect(() => {
        let closure_0 = requestAnimationFrame(() => closure_1_4(true));
        return () => cancelAnimationFrame(closure_0);
      }, []);
      violation = null;
      if (first) {
        violation = updateChild(tracking, descendantTracking, hasChildren, includedDescendants, excludedDescendants);
      }
      ref = obj3.useRef(null);
      const items2 = [name, violation];
      const effect2 = obj3.useEffect(() => {
        const tmp2 = null != violation && violation !== ref.current;
        if (tmp2) {
          ref.current = violation;
          const _HermesInternal = HermesInternal;
          obj2.warn("" + name + ": " + violation);
        }
      }, items2);
      return { regionId, contextValue, includedDescendants, excludedDescendants, depth, violation };
    };
let result = size.fileFinishedImporting(
  "modules/tti_analytics/native/navigation/debug/NavigationTTIRegionHierarchy.tsx",
);

export const NavigationTTIRegionHierarchyContext = context;
export { getNavigationTTIRegionHierarchyViolation };
export const useNavigationTTIRegionHierarchy = tmp4;
