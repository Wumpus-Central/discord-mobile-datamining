// === Module 16527: NavigationTTIRegionHierarchy ===

// Module 16527 (NavigationTTIRegionHierarchy)
import LoggerDefault from "Logger" /* 3 */;
import c from "c" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function getNavigationTTIRegionHierarchyViolation(arg0, arg1, arg2, arg3, arg4) {
  if ("include" === arg0) {
    if (arg3 > 0) {
      let str12 = "s";
      if (1 === arg3) {
        str12 = "";
      }
      const _HermesInternal3 = HermesInternal;
      let combined = "overlaps " + arg3 + " tracked descendant" + str12;
    }
    return combined;
  }
  combined = null;
  if ("exclude" === arg0) {
    combined = null;
    if (arg2) {
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
      } else if ("included" === arg1) {
        const str5 = "declares tracked descendants but no tracked region mounted";
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
        }
      } else {
        const str3 = "declares mixed descendants but no tracked region mounted";
        if (0 !== arg3) {
          if (0 === arg4) {
            const str4 = "declares mixed descendants but no ignored region mounted";
          }
        }
      }
    }
  }
}
let obj2 = new LoggerDefault("NavTTIVisualizer");
obj2.enableNativeLogger(true);
let context = noop.createContext(null);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/debug/NavigationTTIRegionHierarchy.tsx");

export const NavigationTTIRegionHierarchyContext = context;
export { getNavigationTTIRegionHierarchyViolation };
export const useNavigationTTIRegionHierarchy = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
  ({ name: require, tracking, descendantTracking, hasChildren } = arg0);
  dependencyMap = noop.useId();
  context = noop.useContext(c5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      return new Map();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  let num2 = 2;
  [obj3, noop] = context(noop.useState(first), 2);
  const tmp4 = context(noop.useState(first), 2);
  [r10041, obj2] = context(noop.useState(false), 2);
  let num3;
  if (context != null) {
    num3 = context.depth;
  }
  if (num3 == null) {
    num3 = -1;
  }
  const sum = num3 + 1;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0, arg1) {
        closure_0 = arg0;
        closure_1 = arg1;
        tmp = closure_3((get) => {
          value = get.get(closure_0);
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
          const map = new Map(get);
          if (null == closure_1) {
            map.delete(closure_0);
          } else {
            const result = map.set(closure_0, closure_1);
          }
          return map;
        });
        return;
      }
    }
    cResult[1] = C;
    let num4 = C;
  } else {
    class C {
      constructor(arg0, arg1) {
        closure_0 = arg0;
        closure_1 = arg1;
        tmp = closure_3((get) => {
          value = get.get(closure_0);
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
          const map = new Map(get);
          if (null == closure_1) {
            map.delete(closure_0);
          } else {
            const result = map.set(closure_0, closure_1);
          }
          return map;
        });
        return;
      }
    }
  }
  if (cResult[2] !== sum) {
    class C {
      constructor(arg0, arg1) {
        closure_0 = arg0;
        closure_1 = arg1;
        tmp = closure_3((get) => {
          value = get.get(closure_0);
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
          const map = new Map(get);
          if (null == closure_1) {
            map.delete(closure_0);
          } else {
            const result = map.set(closure_0, closure_1);
          }
          return map;
        });
        return;
      }
    }
    tmp7[0] = num4;
    tmp7[1] = sum;
    cResult[num2] = sum;
    cResult[3] = tmp7;
  } else {
    class C {
      constructor(arg0, arg1) {
        closure_0 = arg0;
        closure_1 = arg1;
        tmp = closure_3((get) => {
          value = get.get(closure_0);
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
          const map = new Map(get);
          if (null == closure_1) {
            map.delete(closure_0);
          } else {
            const result = map.set(closure_0, closure_1);
          }
          return map;
        });
        return;
      }
    }
  }
  num4 = 0;
  c5 = 0;
  c6 = 0;
  num2 = obj3.values();
  const tmp5 = context(noop.useState(false), 2);
  obj3 = num2[Symbol.iterator]();
}) : ((name) => {
  name = name.name;
  ({ tracking, descendantTracking, hasChildren } = name);
  noop = undefined;
  let depth;
  let updateChild;
  let sum1;
  let sum2;
  let num4;
  let num5;
  let violation;
  const regionId = noop.useId();
  context = noop.useContext(depth);
  [obj2, c3] = context(noop.useState(() => new Map()), 2);
  const tmp4 = context(noop.useState(false), 2);
  closure_4 = tmp4[1];
  let num;
  if (context != null) {
    num = context.depth;
  }
  if (num == null) {
    num = -1;
  }
  depth = num + 1;
  updateChild = obj.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined((get) => {
      value = get.get(closure_0);
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
      const map = new Map(get);
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
  const effect = noop.useEffect(() => {
    if (context != null) {
      obj2 = { included: num4 + sum1, excluded: num5 + sum2 };
      context.updateChild(regionId, obj2);
    }
    return () => {
      let updateChildResult;
      if (context != null) {
        updateChildResult = context.updateChild(regionId, null);
      }
      return updateChildResult;
    };
  }, items1);
  const effect1 = noop.useEffect(() => {
    closure_0 = requestAnimationFrame(() => closure_1_4(true));
    return () => cancelAnimationFrame(closure_0);
  }, []);
  violation = null;
  if (tmp4[0]) {
    violation = updateChild(tracking, descendantTracking, hasChildren, includedDescendants, excludedDescendants);
  }
  noop.useRef(null);
  const items2 = [name, violation];
  const effect2 = obj3.useEffect(() => {
    let tmp2 = null != violation;
    if (tmp2) {
      tmp2 = violation !== ref.current;
    }
    if (tmp2) {
      ref.current = violation;
      const _HermesInternal = HermesInternal;
      obj2.warn("" + name + ": " + violation);
    }
  }, items2);
  return { regionId, contextValue, includedDescendants, excludedDescendants, depth, violation };
});