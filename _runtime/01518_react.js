// === Module 1518: react ===

// Module 1518 (react)
import react from "react" /* 19 */;

let canPreventDefault, current, current2;


export const useEventEmitter = function useEventEmitter(arg0, onEmitEvent) {
  let closure_0 = arg0;
  let closure_1 = onEmitEvent;
  let closure_2 = react.useRef(arg0);
  let closure_3 = react.useRef(onEmitEvent);
  const insertionEffect = react.useInsertionEffect(() => {
    ref.current = current;
    ref2.current = current2;
  });
  let closure_4 = react.useRef(Object.create(null));
  const callback = react.useCallback((arg0) => {
    let closure_0 = arg0;
    let obj = {
      addListener(arg0, arg1) {
        closure_0 = arg0;
        let closure_1 = arg1;
        let obj = ref3.current[arg0];
        current = ref3.current;
        if (!obj) {
          obj = {};
        }
        current[arg0] = obj;
        let items = ref3.current[arg0][closure_0];
        const tmp2 = ref3.current[arg0];
        if (!items) {
          items = [];
        }
        tmp2[closure_0] = items;
        const arr2 = ref3.current[arg0][closure_0];
        arr2.push(arg1);
        let c2 = false;
        return () => {
          const tmp = c2;
          if (!tmp) {
            c2 = true;
            let tmp4;
            if (ref.current[closure_0]) {
              tmp4 = ref.current[tmp2][closure_0];
            }
            if (tmp4) {
              const index = tmp4.indexOf(closure_1);
              if (index > -1) {
                tmp4.splice(index, 1);
              }
            }
          }
        };
      },
      removeListener(arg0, arg1) {
        let tmp;
        if (ref3.current[arg0]) {
          tmp = ref3.current[arg0][closure_0];
        }
        if (tmp) {
          const index = tmp.indexOf(arg1);
          if (index > -1) {
            tmp.splice(index, 1);
          }
        }
      }
    };
    return obj;
  }, []);
  const callback1 = react.useCallback((canPreventDefault) => {
    let data;
    let target;
    let type;
    ({ type, data, target } = canPreventDefault);
    let c1;
    let c2;
    let closure_0 = tmp2;
    let tmp3;
    canPreventDefault = canPreventDefault.canPreventDefault;
    if (undefined !== ref3.current[type]) {
      let found;
      if (undefined !== target) {
        let substr;
        if (ref3.current[type][target] != null) {
          substr = arr5.slice();
        }
        found = substr;
      } else {
        const items = [];
        const concat = items.concat;
        const _Object = Object;
        const keys = Object.keys(tmp2);
        const items1 = [];
        HermesBuiltin.arraySpread(items1, keys.map((item) => closure_0[item]), 0);
        const applyResult = HermesBuiltin.apply(concat, items1, items);
        found = applyResult.filter((item, index, arr) => arr.lastIndexOf(item) === index);
      }
      tmp3 = found;
    }
    const obj = { type: { enumerable: true, value: type } };
    if (undefined !== target) {
      const obj2 = { enumerable: true, value: target };
      obj.target = obj2;
    }
    if (undefined !== data) {
      const obj3 = { enumerable: true, value: data };
      obj.data = obj3;
    }
    c1 = false;
    if (canPreventDefault) {
      const obj4 = {
        enumerable: true,
        get() {
            return c1;
          }
      };
      obj.defaultPrevented = obj4;
      const obj5 = {
        enumerable: true,
        value() {
            c1 = true;
          }
      };
      obj.preventDefault = obj5;
    }
    const definePropertiesResult = Object.defineProperties({}, obj);
    c2 = definePropertiesResult;
    current = ref.current;
    if (current != null) {
      current(definePropertiesResult);
    }
    if (tmp3 != null) {
      const item = tmp3.forEach((fn) => fn(c2));
    }
    current2 = ref2.current;
    if (current2 != null) {
      current2(definePropertiesResult);
    }
    return definePropertiesResult;
  }, []);
  let items = [callback, callback1];
  return react.useMemo(() => ({ create, emit: callback1 }), items);
};