import noop from "noop";
import "noop";
import jsxProd from "jsxProd";

let c3;
let c4;
let c5;
let closure_6;
let obj1;
({ useCallback: obj1, useMemo: c3, useRef: c4 } = noop);
({ jsx: c5, jsxs: closure_6 } = jsxProd);

export default function _default(children) {
  let sharedValue;
  let sharedValue1;
  let callback;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let c7;
  let c8;
  let obj = sharedValue(sharedValue1[2]);
  sharedValue = obj.useSharedValue(sharedValue(sharedValue1[3]).INITIAL_CONTAINER_HEIGHT);
  sharedValue1 = sharedValue(sharedValue1[2]).useSharedValue(sharedValue(sharedValue1[3]).INITIAL_CONTAINER_OFFSET);
  let tmp3 = callback2(() => "bottom-sheet-portal-" + sharedValue(sharedValue1[4]).id(), []);
  callback = tmp3;
  callback2 = callback3([]);
  const tmp4 = callback((arg0, current) => {
    let closure_0 = arg0;
    current = closure_3.current;
    const substr = current.slice();
    const findIndexResult = substr.findIndex((key) => key.key === closure_0);
    if (-1 === findIndexResult) {
      let tmp5 = tmp4;
      if (substr[substr.length - 1]) {
        tmp5 = !tmp4.willUnmount;
      }
      if (tmp5) {
        if (arg2 === sharedValue(sharedValue1[5]).MODAL_STACK_BEHAVIOR.replace) {
          if (tmp4.ref != null) {
            const current2 = ref2.current;
            if (current2 != null) {
              current2.dismiss();
            }
          }
        } else if (arg2 === tmp7(tmp8[5]).MODAL_STACK_BEHAVIOR.switch) {
          if (tmp4.ref != null) {
            current = ref.current;
            if (current != null) {
              current.minimize();
            }
          }
        }
        tmp7 = sharedValue;
        tmp8 = sharedValue1;
      }
      if (-1 !== findIndexResult) {
        substr.splice(findIndexResult, 1);
        if (current != null) {
          const current3 = current.current;
          if (current3 != null) {
            current3.restore();
          }
        }
      }
      const obj = { key: null, ref: null, willUnmount: false };
      obj[0] = arg0;
      obj[1] = current;
      substr.push(obj);
      closure_3.current = substr;
    }
  }, []);
  callback3 = tmp4;
  let tmp5 = callback((arg0) => {
    let closure_0 = arg0;
    let current = closure_3.current;
    const substr = current.slice();
    const findIndexResult = substr.findIndex((key) => key.key === closure_0);
    let tmp3 = findIndexResult === substr.length - 1;
    substr.splice(findIndexResult, 1);
    closure_3.current = substr;
    if (tmp3) {
      tmp3 = closure_3.current.length > 0;
    }
    if (tmp3) {
      tmp3 = tmp5;
    }
    if (tmp3) {
      tmp3 = !tmp5.willUnmount;
    }
    if (tmp3) {
      const ref = tmp.current[tmp.current.length - 1].ref;
      if (ref != null) {
        current = ref.current;
        if (current != null) {
          current.restore();
        }
      }
    }
  }, []);
  callback4 = tmp5;
  const tmp6 = callback((arg0) => {
    let closure_0 = arg0;
    let current = closure_3.current;
    const substr = current.slice();
    const findIndexResult = substr.findIndex((key) => key.key === closure_0);
    const diff = substr.length - 1;
    if (-1 !== findIndexResult) {
      substr[findIndexResult].willUnmount = true;
    }
    if (tmp4) {
      if (substr[substr.length - 2].ref != null) {
        current = ref.current;
        if (current != null) {
          current.restore();
        }
      }
    }
    closure_3.current = substr;
  }, []);
  callback5 = tmp6;
  let tmp7 = callback((arg0) => {
    let closure_0 = arg0;
    let current = closure_3.current;
    if (arg0) {
      let found = current.find((key) => key.key === closure_0);
    } else {
      found = current[tmp.current.length - 1];
    }
    let flag = found;
    if (flag) {
      flag = true;
      if (found.ref != null) {
        current = ref.current;
        flag = true;
        if (current != null) {
          current.dismiss();
          flag = true;
        }
      }
    }
    return flag;
  }, []);
  c7 = tmp7;
  let tmp8 = callback(() => {
    let current = closure_3.current;
    const mapped = current.map((ref) => {
      if (ref.ref != null) {
        const current = ref.current;
        if (current != null) {
          current.dismiss();
        }
      }
    });
  }, []);
  c8 = tmp8;
  const items = [tmp7, tmp8];
  const items1 = [tmp3, sharedValue, sharedValue1, tmp4, tmp5, tmp6];
  const obj2 = sharedValue(sharedValue1[2]);
  const tmp9 = callback2(() => ({ dismiss: c7, dismissAll: c8 }), items);
  obj = { value: tmp9, children: null };
  obj = { value: callback2(() => ({ hostName: c2, containerHeight: sharedValue, containerOffset: sharedValue1, mountSheet: c4, unmountSheet: c5, willUnmountSheet: c6 }), items1), children: null };
  const items2 = [callback4(sharedValue(sharedValue1[7]).BottomSheetHostingContainer, { containerOffset: sharedValue1, containerHeight: sharedValue }), callback4(sharedValue(sharedValue1[8]).PortalProvider, { rootHostName: tmp3, children: children.children })];
  obj[1] = items2;
  obj[1] = callback5(sharedValue(sharedValue1[6]).BottomSheetModalInternalProvider, obj);
  return callback4(sharedValue(sharedValue1[6]).BottomSheetModalProvider, obj);
};