// === Module 6836: ? ===

// Module 6836
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6628 */;
import noop from "module_19" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

({ useCallback: c2, useMemo: c3, useRef: closure_4 } = noop);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);

export default function _default(children) {
  let sharedValue;
  let sharedValue1;
  closure_3 = undefined;
  let mountSheet;
  let obj = sharedValue(sharedValue1[2]);
  sharedValue = obj.useSharedValue(sharedValue(sharedValue1[3]).INITIAL_CONTAINER_HEIGHT);
  sharedValue1 = sharedValue(sharedValue1[2]).useSharedValue(sharedValue(sharedValue1[3]).INITIAL_CONTAINER_OFFSET);
  let tmp3 = closure_3(() => "bottom-sheet-portal-" + sharedValue(sharedValue1[4]).id(), []);
  const hostName = tmp3;
  closure_3 = mountSheet([]);
  let tmp4 = hostName((key, current, arg2) => {
    closure_0 = key;
    current = closure_3.current;
    const substr = current.slice();
    const findIndexResult = substr.findIndex((key) => key.key === closure_0);
    if (-1 === findIndexResult) {
      let tmp5 = tmp4;
      if (substr[substr.length - 1]) {
        tmp5 = !tmp4.willUnmount;
      }
      if (tmp5) {
        if (arg2 === GESTURE_SOURCE.MODAL_STACK_BEHAVIOR.replace) {
          if (tmp4.ref != null) {
            const current2 = ref2.current;
            if (current2 != null) {
              current2.dismiss();
            }
          }
        } else if (arg2 === GESTURE_SOURCE.MODAL_STACK_BEHAVIOR.switch) {
          if (tmp4.ref != null) {
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
    closure_0 = arg0;
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
      const ref = closure_3.current[closure_3.current.length - 1].ref;
      if (ref != null) {
        current = ref.current;
        if (current != null) {
          current.restore();
        }
      }
    }
  }, []);
  const unmountSheet = tmp5;
  const tmp6 = hostName((arg0) => {
    closure_0 = arg0;
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
    tmp4 = findIndexResult === diff && substr.length > 1;
  }, []);
  const willUnmountSheet = tmp6;
  const tmp7 = hostName((arg0) => {
    closure_0 = arg0;
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
  const obj2 = sharedValue(sharedValue1[2]);
  const tmp9 = closure_3(() => ({ dismiss, dismissAll }), items);
  obj = { value: tmp9, children: null };
  obj = { value: closure_3(() => ({ hostName, containerHeight: sharedValue, containerOffset: sharedValue1, mountSheet, unmountSheet, willUnmountSheet }), items1), children: null };
  const items2 = [unmountSheet(sharedValue(sharedValue1[7]).BottomSheetHostingContainer, { containerOffset: sharedValue1, containerHeight: sharedValue }), unmountSheet(sharedValue(sharedValue1[8]).PortalProvider, { rootHostName: tmp3, children: children.children })];
  obj.children = items2;
  obj.children = willUnmountSheet(sharedValue(sharedValue1[6]).BottomSheetModalInternalProvider, obj);
  return unmountSheet(sharedValue(sharedValue1[6]).BottomSheetModalProvider, obj);
};