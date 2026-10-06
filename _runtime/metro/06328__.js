// === Module 6328: ? ===

// Module 6328
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6120 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let react = react_mod;
({ useCallback: c2, useMemo: c3, useRef: closure_4 } = react);
react = react_mod;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);

export default function _default(children) {
  let BottomSheetModalInternalProvider;
  let items2;
  let obj4;
  let sharedValue;
  let sharedValue1;
  let closure_3;
  let mountSheet;
  children = children.children;
  let obj = sharedValue(sharedValue1[2]);
  sharedValue = obj.useSharedValue(sharedValue(sharedValue1[3]).INITIAL_CONTAINER_HEIGHT);
  const obj2 = sharedValue(sharedValue1[2]);
  sharedValue1 = obj2.useSharedValue(sharedValue(sharedValue1[3]).INITIAL_CONTAINER_OFFSET);
  let tmp3 = closure_3(() => {
    const obj = sharedValue(sharedValue1[4]);
    return "bottom-sheet-portal-" + obj.id();
  }, []);
  const hostName = tmp3;
  closure_3 = mountSheet([]);
  let tmp4 = hostName((key, current, arg2) => {
    let closure_0 = key;
    const current1 = closure_3.current;
    const substr = current1.slice();
    const findIndexResult = substr.findIndex((key) => key.key === closure_0);
    if (-1 === findIndexResult) {
      const tmp5 = substr[substr.length - 1] && !substr[substr.length - 1].willUnmount;
      if (tmp5) {
        if (arg2 === GESTURE_SOURCE.MODAL_STACK_BEHAVIOR.replace) {
          if (substr[substr.length - 1].ref != null) {
            const current2 = ref2.current;
            if (current2 != null) {
              current2.dismiss();
            }
          }
        } else if (arg2 === GESTURE_SOURCE.MODAL_STACK_BEHAVIOR.switch) {
          if (substr[substr.length - 1].ref != null) {
            current = ref.current;
            if (current != null) {
              current.minimize();
            }
          }
        }
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
      const obj = { key, ref: current, willUnmount: false };
      substr.push(obj);
      closure_3.current = substr;
    }
  }, []);
  mountSheet = tmp4;
  let tmp5 = hostName((arg0) => {
    let closure_0 = arg0;
    const current1 = closure_3.current;
    const substr = current1.slice();
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
      const ref = closure_3.current[closure_3.current.length - 1].ref;
      if (ref != null) {
        const current = ref.current;
        if (current != null) {
          current.restore();
        }
      }
    }
  }, []);
  const unmountSheet = tmp5;
  const tmp6 = hostName((arg0) => {
    let closure_0 = arg0;
    const current1 = closure_3.current;
    const substr = current1.slice();
    const findIndexResult = substr.findIndex((key) => key.key === closure_0);
    const diff = substr.length - 1;
    if (-1 !== findIndexResult) {
      substr[findIndexResult].willUnmount = true;
    }
    const tmp4 = findIndexResult === diff && substr.length > 1;
    if (tmp4) {
      if (substr[substr.length - 2].ref != null) {
        const current = ref.current;
        if (current != null) {
          current.restore();
        }
      }
    }
    closure_3.current = substr;
  }, []);
  const willUnmountSheet = tmp6;
  const tmp7 = hostName((arg0) => {
    let found;
    let closure_0 = arg0;
    const current1 = closure_3.current;
    if (arg0) {
      found = current1.find((key) => key.key === closure_0);
    } else {
      found = current1[tmp.current.length - 1];
    }
    let flag = found;
    if (flag) {
      flag = true;
      if (found.ref != null) {
        const current = ref.current;
        flag = true;
        if (current != null) {
          current.dismiss();
          flag = true;
        }
      }
    }
    return flag;
  }, []);
  const dismiss = tmp7;
  const tmp8 = hostName(() => {
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
  const dismissAll = tmp8;
  const items = [tmp7, tmp8];
  const items1 = [tmp3, sharedValue, sharedValue1, tmp4, tmp5, tmp6];
  const tmp9 = closure_3(() => ({ dismiss, dismissAll }), items);
  const obj3 = { value: tmp9, children: willUnmountSheet(BottomSheetModalInternalProvider, obj4) };
  const tmp10 = closure_3(() => ({ hostName, containerHeight: sharedValue, containerOffset: sharedValue1, mountSheet, unmountSheet, willUnmountSheet }), items1);
  const BottomSheetModalProvider = sharedValue(sharedValue1[6]).BottomSheetModalProvider;
  obj4 = { value: tmp10, children: items2 };
  BottomSheetModalInternalProvider = sharedValue(sharedValue1[6]).BottomSheetModalInternalProvider;
  items2 = [unmountSheet(sharedValue(sharedValue1[7]).BottomSheetHostingContainer, { containerOffset: sharedValue1, containerHeight: sharedValue }), unmountSheet(sharedValue(sharedValue1[8]).PortalProvider, { rootHostName: tmp3, children })];
  return unmountSheet(BottomSheetModalProvider, obj3);
};