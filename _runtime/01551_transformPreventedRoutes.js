// _runtime/01551_transformPreventedRoutes.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";

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
  let dependencyMap;
  let callback;
  let React;
  let context;
  let setPreventRemove;
  let notifyPreventRemove;
  let c8;
  let c9;
  let c10;
  first = callback(React.useState(() => first(1489).nanoid()), 1)[0];
  const tmp2 = callback(React.useState(() => new Map()), 2);
  first1 = tmp2[0];
  dependencyMap = tmp2[1];
  callback = React.useRef(new Map());
  React = React.useContext(first(1546).NavigationHelpersContext);
  context = React.useContext(first(1521).NavigationRouteContext);
  const context1 = React.useContext(first(1550).PreventRemoveContext);
  setPreventRemove = undefined;
  if (context1 != null) {
    setPreventRemove = context1.setPreventRemove;
  }
  notifyPreventRemove = undefined;
  if (context1 != null) {
    notifyPreventRemove = context1.notifyPreventRemove;
  }
  const tmp11 = first1(1502)((arg0, arg1, arg2) => {
    let closure_0 = arg1;
    if (arg2) {
      if (null != noop) {
        let everyResult;
        if (obj != null) {
          const routes = obj.getState().routes;
          everyResult = routes.every((key) => key.key !== closure_0);
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
  c8 = tmp11;
  const tmp12 = first1(1502)(() => {
    dependencyMap((size) => {
      let map = size;
      let closure_0 = size;
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
  c9 = tmp12;
  const effect = obj.useEffect(() => {
    _undefined();
    if (notifyPreventRemove != null) {
      notifyPreventRemove();
    }
    return () => {
      if (closure_7 != null) {
        tmp();
      }
    };
  });
  c10 = tmp14;
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
        tmp3(first, tmp.key, c10);
        return () => {
          callback(closure_0, key.key, false);
        };
      }
    }
  }, items);
  const items1 = [tmp11, tmp12, first1];
  const value = obj.useMemo(() => ({ setPreventRemove: c8, notifyPreventRemove: c9, preventedRoutes: setPreventRemove(first1) }), items1);
  return context(first(1550).PreventRemoveContext.Provider, { value, children: children.children });
};