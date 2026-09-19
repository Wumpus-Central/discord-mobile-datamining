// === Module 16874: NavigationTTIRegionHierarchy ===

// Module 16874 (NavigationTTIRegionHierarchy)
import LoggerDefault from "Logger" /* 3 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

function getNavigationTTIRegionHierarchyViolation(tracking, descendantTracking, hasChildren, includedDescendants, excludedDescendants) {
  if ("include" === tracking) {
    if (includedDescendants > 0) {
      let str12 = "s";
      if (1 === includedDescendants) {
        str12 = "";
      }
      const _HermesInternal3 = HermesInternal;
      let combined = "overlaps " + includedDescendants + " tracked descendant" + str12;
    }
    return combined;
  }
  combined = null;
  if ("exclude" === tracking) {
    combined = null;
    if (hasChildren) {
      if ("excluded" === descendantTracking) {
        let combined1 = null;
        if (includedDescendants > 0) {
          let str9 = "s";
          if (1 === includedDescendants) {
            str9 = "";
          }
          const _HermesInternal2 = HermesInternal;
          combined1 = "declares ignored descendants but contains " + includedDescendants + " tracked region" + str9;
        }
      } else if ("included" === descendantTracking) {
        const str5 = "declares tracked descendants but no tracked region mounted";
        if (0 !== includedDescendants) {
          let combined2 = null;
          if (excludedDescendants > 0) {
            let str6 = "s";
            if (1 === excludedDescendants) {
              str6 = "";
            }
            const _HermesInternal = HermesInternal;
            combined2 = "declares tracked descendants but contains " + excludedDescendants + " ignored region" + str6;
          }
        }
      } else {
        const str3 = "declares mixed descendants but no tracked region mounted";
        if (0 !== includedDescendants) {
          if (0 === excludedDescendants) {
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/debug/NavigationTTIRegionHierarchy.tsx");

export const NavigationTTIRegionHierarchyContext = context;
export { getNavigationTTIRegionHierarchyViolation };
export const useNavigationTTIRegionHierarchy = function useNavigationTTIRegionHierarchy(name) {
  name = name.name;
  ({ tracking, descendantTracking, hasChildren } = name);
  let regionId;
  c3 = undefined;
  let depth;
  let updateChild;
  let sum1;
  let sum2;
  let num4;
  let num5;
  let violation;
  regionId = regionId.useId();
  context = regionId.useContext(c3);
  [obj2, c3] = name(regionId.useState(() => new Map()), 2);
  const tmp4 = name(regionId.useState(false), 2);
  getNavigationTTIRegionHierarchyViolation = tmp4[1];
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
  const effect = regionId.useEffect(() => {
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
  const effect1 = regionId.useEffect(() => {
    closure_0 = requestAnimationFrame(() => closure_1_4(true));
    return () => cancelAnimationFrame(closure_0);
  }, []);
  violation = null;
  if (tmp4[0]) {
    violation = getNavigationTTIRegionHierarchyViolation(tracking, descendantTracking, hasChildren, includedDescendants, excludedDescendants);
  }
  regionId.useRef(null);
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
};