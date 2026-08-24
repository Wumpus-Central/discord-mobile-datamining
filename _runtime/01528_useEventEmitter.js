// _runtime/01528_useEventEmitter.js
import closure_0 from "00019_noop.js";


export const useEventEmitter = function useEventEmitter(stateFromStores, onEmitEvent) {
  const React = stateFromStores;
  closure_1 = onEmitEvent;
  closure_2 = React.useRef(stateFromStores);
  closure_3 = React.useRef(onEmitEvent);
  const insertionEffect = React.useInsertionEffect(() => {
    closure_2.current = closure_0;
    closure_3.current = closure_1;
  });
  closure_4 = React.useRef(Object.create(null));
  const callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    return {
      addListener(arg0, arg1) {
        closure_0 = arg0;
        closure_1 = arg1;
        let obj = closure_1_4.current[arg0];
        if (!obj) {
          obj = {};
        }
        closure_1_4.current[arg0] = obj;
        let items = tmp.current[arg0][closure_0];
        if (!items) {
          items = [];
        }
        closure_1_4.current[arg0][closure_0] = items;
        closure_1_4.current[arg0][closure_0].push(arg1);
        c2 = false;
        return () => {
          if (!c2) {
            c2 = true;
            let tmp3;
            if (closure_1_4.current[closure_0]) {
              tmp3 = closure_1_4.current[tmp][closure_0];
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
        if (closure_1_4.current[arg0]) {
          tmp = closure_1_4.current[arg0][closure_0];
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
  const callback1 = React.useCallback((arg0) => {
    ({ type, data, target } = arg0);
    let substr;
    c1 = undefined;
    let ref;
    substr = ref3.current[type];
    if (undefined === substr) {
      let obj = { type: null };
      obj = { enumerable: true, value: null };
      obj[1] = type;
      obj[0] = obj;
      if (undefined !== target) {
        obj = { enumerable: true, value: null };
        obj[1] = target;
        obj.target = obj;
      }
      if (undefined !== data) {
        obj1 = { enumerable: true, value: null };
        obj1[1] = data;
        obj.data = obj1;
      }
      c1 = false;
      if (tmp) {
        const obj2 = { enumerable: true, get: null };
        obj2[1] = function get() {
          return c1;
        };
        obj.defaultPrevented = obj2;
        const obj3 = { enumerable: true, value: null };
        obj3[1] = function value() {
          c1 = true;
        };
        obj.preventDefault = obj3;
      }
      const _Object2 = Object;
      const definePropertiesResult = Object.defineProperties({}, obj);
      ref = definePropertiesResult;
      const current = ref.current;
      if (current != null) {
        current(definePropertiesResult);
      }
      if (undefined != null) {
        const item = undefined.forEach((arg0) => arg0(c2));
      }
      const current2 = ref2.current;
      if (current2 != null) {
        current2(definePropertiesResult);
      }
      return definePropertiesResult;
    } else if (undefined !== target) {
      substr = undefined;
      if (substr[target] != null) {
        substr = arr5.slice();
      }
      let found = substr;
    } else {
      const items = [];
      const concat = items.concat;
      const _Object = Object;
      const keys = Object.keys(substr);
      const items1 = [];
      HermesBuiltin.arraySpread(keys.map((arg0) => substr[arg0]), 0);
      found = HermesBuiltin.apply(items1, items).filter((arg0, arg1, arr) => arr.lastIndexOf(arg0) === arg1);
      const applyResult = HermesBuiltin.apply(items1, items);
    }
  }, []);
  let items = [callback, callback1];
  return React.useMemo(() => ({ create: callback, emit: callback1 }), items);
};