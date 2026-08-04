import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
function transformPreventedRoutes(arg0) {

}

export default function PreventRemoveProvider(children) {
  let first;
  let first1;
  let dependencyMap;
  let callback;
  let context;
  let setPreventRemove;
  let c6;
  let c7;
  first = callback(context.useState(() => first(1489).nanoid()), 1)[0];
  const tmp3 = callback(context.useState(new Map()), 2);
  first1 = tmp3[0];
  dependencyMap = tmp3[1];
  callback = context.useContext(first1(1526));
  context = context.useContext(first1(1507));
  const context1 = context.useContext(first1(1527));
  setPreventRemove = undefined;
  if (context1 != null) {
    setPreventRemove = context1.setPreventRemove;
  }
  const tmp9 = first1(1529)((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const dependencyMap = arg2;
    if (arg2) {
      if (null != _slicedToArray) {
        let everyResult;
        if (obj != null) {
          const routes = obj.getState().routes;
          everyResult = routes.every((key) => key.key !== closure_1);
        }
      }
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Couldn't find a route with the key " + arg1 + ". Is your component inside NavigationContent?");
      throw error;
    }
    dependencyMap((get) => {
      let value = get.get(closure_0);
      let routeKey;
      if (value != null) {
        routeKey = value.routeKey;
      }
      if (closure_1 === routeKey) {
        value = get.get(tmp2);
        let preventRemove;
        if (value != null) {
          preventRemove = value.preventRemove;
        }
        if (tmp5 === preventRemove) {
          return get;
        }
        tmp5 = closure_2;
      }
      const map = new Map(get);
      if (closure_2) {
        const obj = { routeKey: null, preventRemove: null };
        obj[0] = tmp;
        obj[1] = tmp8;
        const result = map.set(tmp2, obj);
      } else {
        map.delete(tmp2);
      }
      return map;
    });
  });
  c6 = tmp9;
  let items = [...first1.values()];
  const someResult = items.some((preventRemove) => preventRemove.preventRemove);
  c7 = someResult;
  const items1 = [first, someResult, , ];
  let key;
  if (context != null) {
    key = context.key;
  }
  items1[2] = key;
  items1[3] = setPreventRemove;
  const effect = obj.useEffect(() => {
    let key;
    if (context != null) {
      key = tmp.key;
    }
    if (undefined !== key) {
      if (undefined !== setPreventRemove) {
        tmp3(first, tmp.key, c7);
        return () => {
          callback(closure_0, key.key, false);
        };
      }
    }
  }, items1);
  const items2 = [tmp9, first1];
  let value = obj.useMemo(() => {
    const obj = { setPreventRemove: c6, preventedRoutes: null };
    if (typeof c6 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const items = [...first1.values()];
    obj[1] = items.reduce((arg0, routeKey) => {
      routeKey = routeKey.routeKey;
      let preventRemove;
      if (arg0[routeKey] != null) {
        preventRemove = tmp.preventRemove;
      }
      if (!preventRemove) {
        preventRemove = routeKey.preventRemove;
      }
      arg0[routeKey] = { preventRemove };
      return arg0;
    }, {});
    return obj;
  }, items2);
  return setPreventRemove(first1(1527).Provider, { value, children: children.children });
};