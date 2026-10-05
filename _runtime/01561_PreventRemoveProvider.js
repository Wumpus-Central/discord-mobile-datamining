// === Module 1561: PreventRemoveProvider ===

// Module 1561 (PreventRemoveProvider)
import Fragment from "Fragment" /* 21 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;

let dependencyMap, map;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const jsx = Fragment.jsx;
function transformPreventedRoutes(first1) {
  const obj = {};
  const values = first1.values();
  for (const item10008 of values) {
    obj[item10008] = { preventRemove: true };
    continue;
  }
  return obj;
}

export const PreventRemoveProvider = function PreventRemoveProvider(children) {
  let closure_2;
  let first1;
  let ref;
  let state;
  first1 = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let notifyPreventRemove;
  let closure_10;
  let obj = react;
  children = children.children;
  const first = _slicedToArray(react.useState(() => {
    const obj = first(closure_2[3]);
    return obj.nanoid();
  }), 1)[0];
  [first1, dependencyMap] = react.useState(() => {
    map = new Map();
    return map;
  });
  const useRef = react.useRef;
  map = new Map();
  _slicedToArray = useRef(map);
  react = react.useContext(first(1556).NavigationHelpersContext);
  const context = react.useContext(first(1531).NavigationRouteContext);
  const context1 = react.useContext(first(1560).PreventRemoveContext);
  let setPreventRemove;
  const tmp5 = first;
  if (context1 != null) {
    setPreventRemove = context1.setPreventRemove;
  }
  notifyPreventRemove = undefined;
  if (context1 != null) {
    notifyPreventRemove = context1.notifyPreventRemove;
  }
  const tmp11 = first1(1512)(function(arg0, arg1, arg2) {
    let closure_0 = arg1;
    const tmp = arg2;
    if (tmp) {
      if (null != state) {
        if (state != null) {
          const routes = state.getState().routes;
          routes.every((key) => key.key !== closure_0);
        }
      }
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Couldn't find a route with the key " + arg1 + ". Is your component inside NavigationContent?");
      throw error;
    }
    const current = ref.current;
    if (arg2) {
      const result = current.set(arg0, arg1);
    } else {
      current.delete(arg0);
    }
  });
  setPreventRemove = tmp11;
  const tmp12 = first1(1512)(() => {
    const tmp = closure_2(function(size) {
      map = size;
      let closure_0 = size;
      const current = ref.current;
      if (size.size !== current.size) {
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map(current);
      } else {
        const items = [];
        HermesBuiltin.arraySpread(items, current, 0);
      }
      return map;
    });
  });
  notifyPreventRemove = tmp12;
  const effect = obj.useEffect(() => {
    const tmp = notifyPreventRemove();
    if (notifyPreventRemove != null) {
      notifyPreventRemove();
    }
    return () => {
      if (notifyPreventRemove != null) {
        tmp();
      }
    };
  });
  closure_10 = tmp14;
  let items = [first, first1.size > 0, , ];
  let key;
  const useInsertionEffect = obj.useInsertionEffect;
  if (context != null) {
    key = context.key;
  }
  items[2] = key;
  items[3] = setPreventRemove;
  const insertionEffect = useInsertionEffect(() => {
    let key;
    if (context != null) {
      key = context.key;
    }
    if (undefined !== key) {
      if (undefined !== setPreventRemove) {
        tmp3(first, context.key, closure_10);
        return () => {
          setPreventRemove(first, key.key, false);
        };
      }
    }
  }, items);
  const items1 = [tmp11, tmp12, first1];
  const value = obj.useMemo(() => {
    const obj = { setPreventRemove, notifyPreventRemove, preventedRoutes: transformPreventedRoutes(first1) };
    return obj;
  }, items1);
  return context(tmp5(1560).PreventRemoveContext.Provider, { value, children });
};