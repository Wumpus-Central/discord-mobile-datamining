// === Module 1554: transformPreventedRoutes ===

// Module 1554 (transformPreventedRoutes)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
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
  _slicedToArray = undefined;
  noop = undefined;
  let notifyPreventRemove;
  closure_10 = undefined;
  const first = _slicedToArray(noop.useState(() => first(1492).nanoid()), 1)[0];
  const tmp2 = _slicedToArray(noop.useState(() => new Map()), 2);
  const first1 = tmp2[0];
  dependencyMap = tmp2[1];
  _slicedToArray = noop.useRef(new Map());
  noop = noop.useContext(first(1549).NavigationHelpersContext);
  const context = noop.useContext(first(1524).NavigationRouteContext);
  const context1 = noop.useContext(first(1553).PreventRemoveContext);
  let setPreventRemove;
  if (context1 != null) {
    setPreventRemove = context1.setPreventRemove;
  }
  notifyPreventRemove = undefined;
  if (context1 != null) {
    notifyPreventRemove = context1.notifyPreventRemove;
  }
  const tmp11 = first1(1505)((arg0, arg1, arg2) => {
    closure_0 = arg1;
    if (arg2) {
      if (null != state) {
        if (state != null) {
          const routes = state.getState().routes;
          routes.every((key) => key.key !== closure_0);
        }
      }
      const _Error = Error;
      const _HermesInternal = HermesInternal;
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
  const tmp12 = first1(1505)(() => {
    dependencyMap((size) => {
      let map = size;
      const current = ref.current;
      if (size.size !== current.size) {
        const _Map = Map;
        map = new Map(current);
      } else {
        const items = [];
        HermesBuiltin.arraySpread(current, 0);
      }
      return map;
    });
  });
  notifyPreventRemove = tmp12;
  const effect = obj.useEffect(() => {
    notifyPreventRemove();
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
  if (context != null) {
    key = context.key;
  }
  items[2] = key;
  items[3] = setPreventRemove;
  const insertionEffect = obj.useInsertionEffect(() => {
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
  value = obj.useMemo(() => ({ setPreventRemove, notifyPreventRemove, preventedRoutes: transformPreventedRoutes(first1) }), items1);
  return context(first(1553).PreventRemoveContext.Provider, { value, children: children.children });
};