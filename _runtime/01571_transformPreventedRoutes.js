// _runtime/01571_transformPreventedRoutes.js
import _slicedToArray from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

const require = fn;
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
  let callback;
  let React;
  let notifyPreventRemove;
  closure_8 = undefined;
  closure_9 = undefined;
  closure_10 = undefined;
  const first = callback(React.useState(() => first(1509).nanoid()), 1)[0];
  const tmp2 = callback(React.useState(() => new Map()), 2);
  const first1 = tmp2[0];
  dependencyMap = tmp2[1];
  callback = React.useRef(new Map());
  React = React.useContext(first(1566).NavigationHelpersContext);
  const context = React.useContext(first(1541).NavigationRouteContext);
  const context1 = React.useContext(first(1570).PreventRemoveContext);
  let setPreventRemove;
  if (context1 != null) {
    setPreventRemove = context1.setPreventRemove;
  }
  notifyPreventRemove = undefined;
  if (context1 != null) {
    notifyPreventRemove = context1.notifyPreventRemove;
  }
  const tmp11 = first1(1522)((arg0, arg1, arg2) => {
    closure_0 = arg1;
    if (arg2) {
      if (null != state) {
        if (state != null) {
          const routes = state.getState().routes;
          routes.every((item, index) => item.key !== closure_0);
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
  const tmp12 = first1(1522)(() => {
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
      key = context.key;
    }
    if (undefined !== key) {
      if (undefined !== setPreventRemove) {
        tmp3(first, context.key, closure_10);
        return () => {
          callback(closure_0, key.key, false);
        };
      }
    }
  }, items);
  const items1 = [tmp11, tmp12, first1];
  const value = obj.useMemo(() => ({ setPreventRemove: closure_8, notifyPreventRemove: closure_9, preventedRoutes: setPreventRemove(first1) }), items1);
  return context(first(1570).PreventRemoveContext.Provider, { value, children: children.children });
};