// _runtime/metro/01511__.js
import noop from "00019__.js";

export const useEventEmitter = function useEventEmitter(current, onEmitEvent) {
  let current2 = onEmitEvent;
  noop.useRef(current);
  noop.useRef(onEmitEvent);
  const insertionEffect = noop.useInsertionEffect(() => {
    closure_2.current = current;
    closure_3.current = current2;
  });
  noop.useRef(Object.create(null));
  const create = noop.useCallback((arg0) => {
    closure_0 = arg0;
    return {
      addListener(arg0, arg1) {
        closure_0 = arg0;
        closure_1 = arg1;
        let obj = ref3.current[arg0];
        if (!obj) {
          obj = {};
        }
        ref3.current[arg0] = obj;
        let items = ref3.current[arg0][closure_0];
        if (!items) {
          items = [];
        }
        ref3.current[arg0][closure_0] = items;
        ref3.current[arg0][closure_0].push(arg1);
        c2 = false;
        return () => {
          if (!c2) {
            c2 = true;
            let tmp3;
            if (ref.current[closure_0]) {
              tmp3 = ref.current[tmp][closure_0];
            }
            if (tmp3) {
              const index = tmp3.indexOf(closure_1);
              if (index > -1) {
                tmp3.splice(index, 1);
              }
            }
          }
        };
      },
      removeListener(arg0, arg1) {
        let tmp;
        if (ref.current[arg0]) {
          tmp = ref.current[arg0][closure_0];
        }
        if (tmp) {
          const index = tmp.indexOf(arg1);
          if (index > -1) {
            tmp.splice(index, 1);
          }
        }
      },
    };
  }, []);
  const callback1 = noop.useCallback((arg0) => {
    ({ type, data, target } = arg0);
    c1 = undefined;
    c2 = undefined;
    let substr = ref3.current[type];
    if (undefined === substr) {
      let obj = { type: null };
      obj = { enumerable: true, value: type };
      obj.type = obj;
      if (undefined !== target) {
        obj = { enumerable: true, value: target };
        obj.target = obj;
      }
      if (undefined !== data) {
        const obj1 = { enumerable: true, value: data };
        obj.data = obj1;
      }
      c1 = false;
      if (tmp) {
        const obj2 = {
          enumerable: true,
          get() {
            return c1;
          },
        };
        obj.defaultPrevented = obj2;
        const obj3 = {
          enumerable: true,
          value() {
            c1 = true;
          },
        };
        obj.preventDefault = obj3;
      }
      const _Object2 = Object;
      const definePropertiesResult = Object.defineProperties({}, obj);
      c2 = definePropertiesResult;
      current = ref.current;
      if (current != null) {
        current(definePropertiesResult);
      }
      if (undefined != null) {
        const item = undefined.forEach((fn) => fn(c2));
      }
      current2 = ref2.current;
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
      HermesBuiltin.arraySpread(
        keys.map((item) => substr[item]),
        0,
      );
      found = HermesBuiltin.apply(items1, items).filter((item, index, arr) => arr.lastIndexOf(item) === index);
      const applyResult = HermesBuiltin.apply(items1, items);
    }
  }, []);
  let items = [create, callback1];
  return noop.useMemo(() => ({ create, emit: callback1 }), items);
};
