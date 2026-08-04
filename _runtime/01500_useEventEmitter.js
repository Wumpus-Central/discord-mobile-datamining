// _runtime/01500_useEventEmitter.js
import noop from "noop";


export default function useEventEmitter(stateFromStores) {
  const React = stateFromStores;
  let closure_1 = React.useRef(stateFromStores);
  const effect = React.useEffect(() => {
    closure_1.current = noop;
  });
  let closure_2 = React.useRef(Object.create(null));
  const callback = React.useCallback((arg0) => {
    let noop = arg0;
    return {
      addListener(arg0, arg1) {
        let noop = arg0;
        let closure_1 = arg1;
        let obj = outer1_2.current[arg0];
        if (!obj) {
          obj = {};
        }
        outer1_2.current[arg0] = obj;
        let items = tmp.current[arg0][noop];
        if (!items) {
          items = [];
        }
        outer1_2.current[arg0][noop] = items;
        outer1_2.current[arg0][noop].push(arg1);
        let c2 = false;
        return () => {
          if (!ref) {
            let tmp3;
            if (true.current[noop]) {
              tmp3 = ref.current[tmp][noop];
            }
            if (tmp3) {
              const index = tmp3.indexOf(tmp2);
              if (index > -1) {
                tmp3.splice(index, 1);
              }
            }
            tmp2 = closure_1;
          }
        };
      },
      removeListener(arg0, arg1) {
        let tmp;
        if (outer1_2.current[arg0]) {
          tmp = outer1_2.current[arg0][noop];
        }
        if (tmp) {
          const index = tmp.indexOf(arg1);
          if (index > -1) {
            tmp.splice(index, 1);
          }
        }
      }
    };
  }, []);
  const callback1 = React.useCallback((type) => {
    type = type.type;
    const data = type.data;
    const target = type.target;
    let obj;
    obj = undefined;
    let c5;
    obj = target.current[type];
    if (!obj) {
      obj = {};
    }
    if (undefined !== target) {
      let substr;
      if (obj[target] != null) {
        substr = arr6.slice();
      }
      let found = substr;
    } else {
      const items = [];
      const concat = items.concat;
      const _Object = Object;
      const keys = Object.keys(obj);
      const items1 = [];
      HermesBuiltin.arraySpread(keys.map((arg0) => obj[arg0]), 0);
      found = HermesBuiltin.apply(items1, items).filter((arg0, arg1, arr) => arr.lastIndexOf(arg0) === arg1);
      const applyResult = HermesBuiltin.apply(items1, items);
    }
    obj = {};
    Object.defineProperty(obj, "type", { get: () => type, set: undefined });
    if (undefined !== target) {
      const _Object2 = Object;
      obj = { enumerable: true, get: null };
      obj[1] = function get() {
        return target;
      };
      Object.defineProperty(obj, "target", obj);
    }
    if (undefined !== data) {
      const _Object3 = Object;
      const obj1 = { enumerable: true, get: null };
      obj1[1] = function get() {
        return data;
      };
      Object.defineProperty(obj, "data", obj1);
    }
    if (type.canPreventDefault) {
      c5 = false;
      const _Object4 = Object;
      const obj2 = { defaultPrevented: null, preventDefault: null };
      const obj3 = { enumerable: true, get: null };
      obj3[1] = function get() {
        return c5;
      };
      obj2[0] = obj3;
      const obj4 = { enumerable: true, value: null };
      obj4[1] = function value() {
        let c5 = true;
      };
      obj2[1] = obj4;
      Object.defineProperties(obj, obj2);
    }
    const current = data.current;
    if (current != null) {
      current(obj);
    }
    if (found != null) {
      const item = found.forEach((arg0) => arg0(obj));
    }
    return obj;
  }, []);
  let items = [callback, callback1];
  return React.useMemo(() => ({ create: callback, emit: callback1 }), items);
};