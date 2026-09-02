// === Module 1569: transformPreventedRoutes ===

// Module 1569 (transformPreventedRoutes)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
function transformPreventedRoutes(arr) {
  const obj = {};
  const values = arr.values();
  for (const item10008 of values) {
    obj[item10008] = { preventRemove: true };
    continue;
  }
  return obj;
}

export const PreventRemoveProvider = function PreventRemoveProvider(children) {
  let first;
  let first1;
  dependencyMap = undefined;
  let callback;
  let React;
  let context;
  let setPreventRemove;
  let notifyPreventRemove;
  closure_8 = undefined;
  closure_9 = undefined;
  closure_10 = undefined;
  first = callback(React.useState(() => first(1507).nanoid()), 1)[0];
  const tmp2 = callback(React.useState(() => new Map()), 2);
  first1 = tmp2[0];
  dependencyMap = tmp2[1];
  callback = React.useRef(new Map());
  React = React.useContext(first(1564).NavigationHelpersContext);
  context = React.useContext(first(1539).NavigationRouteContext);
  const context1 = React.useContext(first(1568).PreventRemoveContext);
  setPreventRemove = undefined;
  if (context1 != null) {
    setPreventRemove = context1.setPreventRemove;
  }
  notifyPreventRemove = undefined;
  if (context1 != null) {
    notifyPreventRemove = context1.notifyPreventRemove;
  }
  const tmp11 = first1(1520)((arg0, arg1, arg2) => {
    closure_0 = arg1;
    if (arg2) {
      if (null != closure_4) {
        let everyResult;
        if (obj != null) {
          const routes = obj.getState().routes;
          everyResult = routes.every((key) => key.key !== closure_0);
        }
      }
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      error = new Error("Couldn't find a route with the key " + arg1 + ". Is your component inside NavigationContent?");
      throw error;
    }
    const current = ref.current;
    if (arg2) {
      const result = current.set(arg0, arg1);
    } else {
      current.delete(arg0);
    }
  });
  closure_8 = tmp11;
  const tmp12 = first1(1520)(() => {
    dependencyMap((size) => {
      let map = size;
      closure_0 = size;
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
  closure_9 = tmp12;
  const effect = obj.useEffect(() => {
    callback();
    if (notifyPreventRemove != null) {
      notifyPreventRemove();
    }
    return () => {
      if (closure_7 != null) {
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
      key = tmp.key;
    }
    if (undefined !== key) {
      if (undefined !== setPreventRemove) {
        tmp3(first, tmp.key, closure_10);
        return () => {
          callback(closure_0, key.key, false);
        };
      }
    }
  }, items);
  const items1 = [tmp11, tmp12, first1];
  const value = obj.useMemo(() => ({ setPreventRemove: closure_8, notifyPreventRemove: closure_9, preventedRoutes: setPreventRemove(first1) }), items1);
  return context(first(1568).PreventRemoveContext.Provider, { value, children: children.children });
};