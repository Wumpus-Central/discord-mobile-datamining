// _runtime/05710_memo.js
import closure_4 from "metro/00032__slicedToArray.js";
import closure_5 from "metro/00109__objectWithoutProperties.js";
import noop from "00019_noop.js";
import closure_12 from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

const require = arg1;
let closure_3 = ["name", "stackBehavior", "enableDismissOnClose", "onDismiss", "onAnimate", "index", "snapPoints", "enablePanDownToClose", "animateOnMount", "containerComponent", "onChange", "children"];
({ useCallback: closure_6, useImperativeHandle: error, useMemo: closure_8, useRef: c9, useState: c10, createElement: unpackModuleId, forwardRef, memo } = noop);
let closure_14 = { mount: false, data: "a" };
const memoResult = memo(forwardRef(function BottomSheetModalComponent(name) {
  const _require = arg1;
  name = name.name;
  let DEFAULT_STACK_BEHAVIOR = name.stackBehavior;
  if (undefined === DEFAULT_STACK_BEHAVIOR) {
    DEFAULT_STACK_BEHAVIOR = _require(DEFAULT_STACK_BEHAVIOR[4]).DEFAULT_STACK_BEHAVIOR;
  }
  let DEFAULT_ENABLE_DISMISS_ON_CLOSE = name.enableDismissOnClose;
  if (undefined === DEFAULT_ENABLE_DISMISS_ON_CLOSE) {
    DEFAULT_ENABLE_DISMISS_ON_CLOSE = _require(DEFAULT_STACK_BEHAVIOR[4]).DEFAULT_ENABLE_DISMISS_ON_CLOSE;
  }
  const onDismiss = name.onDismiss;
  const onAnimate = name.onAnimate;
  const index = name.index;
  let num = 0;
  if (undefined !== index) {
    num = index;
  }
  let enablePanDownToClose = name.enablePanDownToClose;
  let tmp5 = undefined === enablePanDownToClose;
  if (!tmp5) {
    tmp5 = enablePanDownToClose;
  }
  enablePanDownToClose = tmp5;
  const animateOnMount = name.animateOnMount;
  let Fragment = name.containerComponent;
  if (undefined === Fragment) {
    Fragment = willUnmountSheet.Fragment;
  }
  const onChange = name.onChange;
  const children = name.children;
  const tmp8 = onAnimate(name, DEFAULT_ENABLE_DISMISS_ON_CLOSE);
  const tmp9 = onDismiss(mountSheet(closure_14), 2);
  const first = tmp9[0];
  const mount = first.mount;
  const callback = tmp9[1];
  let obj = _require(DEFAULT_STACK_BEHAVIOR[5]);
  const bottomSheetModalInternal = obj.useBottomSheetModalInternal();
  ({ hostName, mountSheet } = bottomSheetModalInternal);
  const unmountSheet = bottomSheetModalInternal.unmountSheet;
  willUnmountSheet = bottomSheetModalInternal.willUnmountSheet;
  ({ containerHeight, containerOffset } = bottomSheetModalInternal);
  obj1 = _require(DEFAULT_STACK_BEHAVIOR[6]);
  const removePortal = obj1.usePortal(hostName).removePortal;
  const tmp15 = callback(null);
  closure_14 = tmp15;
  let num2 = -1;
  if (!(undefined === animateOnMount || animateOnMount)) {
    num2 = num;
  }
  closure_15 = tmp14(num2);
  closure_16 = tmp14(null);
  closure_17 = tmp14(-1);
  closure_18 = tmp14(false);
  closure_19 = tmp14(false);
  const tmp14Result = callback(false);
  closure_20 = tmp14Result;
  tmp14Result.current = mount;
  let items = [name];
  const tmp17 = onChange(() => {
    let combined = name;
    if (!name) {
      const _HermesInternal = HermesInternal;
      combined = "bottom-sheet-modal-" + callback(DEFAULT_STACK_BEHAVIOR[7]).id();
      const obj = callback(DEFAULT_STACK_BEHAVIOR[7]);
    }
    return combined;
  }, items);
  closure_21 = tmp17;
  function resetVariables() {
    let obj = callback(DEFAULT_STACK_BEHAVIOR[8]);
    obj = { component: closure_15.name, method: resetVariables.name };
    obj.print(obj);
    closure_15.current = -1;
    closure_17.current = -1;
    closure_18.current = false;
    closure_20.current = false;
    closure_19.current = false;
  }
  const tmp18 = num(resetVariables, []);
  closure_22 = tmp18;
  let items1 = [tmp17, tmp18, unmountSheet, removePortal, onDismiss];
  const tmp19 = num(function unmount(ref) {
    callback3();
    unmountSheet(closure_21);
    removePortal(closure_21);
    if (ref4.current) {
      callback2(closure_14);
    }
    if (onDismiss) {
      onDismiss();
    }
  }, items1);
  closure_23 = tmp19;
  closure_24 = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = closure_14.current;
      if (current != null) {
        const snapToIndex = current.snapToIndex;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  closure_25 = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = closure_14.current;
      if (current != null) {
        const snapToPosition = current.snapToPosition;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  closure_26 = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = closure_14.current;
      if (current != null) {
        const setToIndex = current.setToIndex;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  closure_27 = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = closure_14.current;
      if (current != null) {
        const setToPosition = current.setToPosition;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  closure_28 = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = closure_14.current;
      if (current != null) {
        const expand = current.expand;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  closure_29 = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = closure_14.current;
      if (current != null) {
        const collapse = current.collapse;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  closure_30 = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = closure_14.current;
      if (current != null) {
        const close = current.close;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  closure_31 = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = closure_14.current;
      if (current != null) {
        const forceClose = current.forceClose;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  const items2 = [tmp17, DEFAULT_STACK_BEHAVIOR, mountSheet];
  closure_32 = num(function handlePresent(arg0) {
    closure_0 = arg0;
    const animationFrame = requestAnimationFrame(() => {
      closure_1_9({ mount: true, data: closure_0 });
      closure_1_10(closure_1_21, closure_0, closure_1_2);
    });
  }, items2);
  const items3 = [willUnmountSheet, tmp19, tmp17, tmp5];
  closure_33 = num(function handleDismiss(arg0) {
    let tmp3 = -1 !== closure_15.current;
    if (!tmp3) {
      tmp3 = false !== closure_18.current;
    }
    if (!tmp3) {
      tmp3 = tmp;
    }
    if (tmp3) {
      if (tmp) {
        willUnmountSheet(closure_21);
        closure_19.current = true;
        const current = closure_14.current;
        if (current != null) {
          current.forceClose(arg0);
        }
      } else if (closure_18.current) {
        callback4();
      }
    }
  }, items3);
  const items4 = [num];
  closure_34 = num(function handleMinimize() {
    if (!closure_18.current) {
      tmp.current = true;
      if (-1 === closure_15.current) {
        closure_17.current = num;
      } else {
        closure_17.current = tmp2.current;
      }
      const current = closure_14.current;
      if (current != null) {
        current.close();
      }
    }
  }, items4);
  closure_35 = num(function handleRestore() {
    let current = closure_18.current;
    if (current) {
      current = !ref3.current;
    }
    if (current) {
      closure_18.current = false;
      const current2 = closure_14.current;
      if (current2 != null) {
        current2.snapToIndex(ref2.current);
      }
    }
  }, []);
  const items5 = [tmp17, tmp19, willUnmountSheet];
  const tmp21 = num(function handlePortalRender(arg0) {
    if (ref4.current) {
      arg0();
    }
  }, []);
  const items6 = [onChange];
  const items7 = [onAnimate];
  const tmp11 = _require;
  const tmp20 = num(function handlePortalOnUnmount() {
    let tmp = -1 === closure_15.current;
    if (tmp) {
      tmp = false === closure_18.current;
    }
    if (!tmp) {
      closure_20.current = false;
      closure_19.current = true;
      if (closure_18.current) {
        callback4();
      } else {
        willUnmountSheet(closure_21);
        const current = closure_14.current;
        if (current != null) {
          current.close();
        }
      }
    }
  }, items5);
  const items8 = [DEFAULT_ENABLE_DISMISS_ON_CLOSE, tmp19];
  const tmp22 = num(function handleBottomSheetOnChange(current) {
    closure_15.current = current;
    closure_16.current = null;
    if (onChange) {
      tmp(current, arg1, arg2);
    }
  }, items6);
  const tmp23 = num((arg0, current) => {
    closure_16.current = current;
    if (onAnimate) {
      tmp(arg0, current, arg2, arg3, arg4);
    }
  }, items7);
  enablePanDownToClose(arg1, () => ({ snapToIndex: closure_24, snapToPosition: closure_25, setToIndex: closure_26, setToPosition: closure_27, expand: closure_28, collapse: closure_29, close: closure_30, forceClose: closure_31, dismiss: closure_33, present: closure_32, minimize: closure_34, restore: closure_35 }));
  let tmp27Result = null;
  if (mount) {
    obj = { name: null, hostName: null, handleOnMount: null, handleOnUpdate: null, handleOnUnmount: null, children: null };
    obj[0] = tmp17;
    obj[1] = hostName;
    obj[2] = tmp21;
    obj[3] = tmp21;
    obj[4] = tmp20;
    obj = {};
    const merged = Object.assign(tmp8);
    obj.ref = tmp15;
    obj.key = tmp17;
    obj.index = num;
    obj.snapPoints = name.snapPoints;
    obj.enablePanDownToClose = tmp5;
    obj.animateOnMount = tmp6;
    obj.containerHeight = containerHeight;
    obj.containerOffset = containerOffset;
    obj.onChange = tmp22;
    obj.onClose = tmp24;
    obj.onAnimate = tmp23;
    obj.$modal = true;
    tmp27Result = children;
    if (typeof children === "function") {
      obj1 = { data: null };
      obj1[0] = first.data;
      tmp27Result = tmp27(children, obj1);
    }
    const obj2 = { children: null };
    obj2[0] = unmountSheet(name(tmp12[9]), obj, tmp27Result);
    obj[5] = removePortal(Fragment, obj2, tmp17);
    tmp27Result = tmp27(tmp11(tmp12[6]).Portal, obj, tmp17);
    const tmp28 = unmountSheet;
    const tmp30 = name(tmp12[9]);
  }
  return tmp27Result;
}));
memoResult.displayName = "BottomSheetModal";

export default memoResult;