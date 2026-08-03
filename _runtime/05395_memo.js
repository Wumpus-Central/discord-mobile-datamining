import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";
import closure_12 from "noop";
import { jsx } from "jsxProd";

let c10;
let c9;
let closure_6;
let error;
let forwardRef;
let memo;
let metroImportAll;
let unpackModuleId;
const require = arg1;
let closure_3 = ["name", "stackBehavior", "enableDismissOnClose", "onDismiss", "onAnimate", "index", "snapPoints", "enablePanDownToClose", "animateOnMount", "containerComponent", "onChange", "children"];
({ useCallback: closure_6, useImperativeHandle: error, useMemo: metroImportAll, useRef: c9, useState: c10, createElement: unpackModuleId, forwardRef, memo } = noop);
let closure_14 = { mount: false, data: "r" };
const memoResult = memo(forwardRef(function BottomSheetModalComponent(name) {
  let containerHeight;
  let containerOffset;
  let hostName;
  let mountSheet;
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
  const enablePanDownToClose = name.enablePanDownToClose;
  let tmp5 = undefined === enablePanDownToClose;
  if (!tmp5) {
    tmp5 = enablePanDownToClose;
  }
  const callback = tmp5;
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
  const callback2 = tmp9[1];
  let obj = _require(DEFAULT_STACK_BEHAVIOR[5]);
  const bottomSheetModalInternal = obj.useBottomSheetModalInternal();
  ({ hostName, mountSheet } = bottomSheetModalInternal);
  const unmountSheet = bottomSheetModalInternal.unmountSheet;
  willUnmountSheet = bottomSheetModalInternal.willUnmountSheet;
  ({ containerHeight, containerOffset } = bottomSheetModalInternal);
  let obj1 = _require(DEFAULT_STACK_BEHAVIOR[6]);
  const removePortal = obj1.usePortal(hostName).removePortal;
  const tmp15 = callback2(null);
  closure_14 = tmp15;
  let num2 = -1;
  if (!(undefined === animateOnMount || animateOnMount)) {
    num2 = num;
  }
  let closure_15 = tmp14(num2);
  let closure_16 = tmp14(null);
  let closure_17 = tmp14(-1);
  let closure_18 = tmp14(false);
  let closure_19 = tmp14(false);
  const tmp14Result = callback2(false);
  let closure_20 = tmp14Result;
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
  let closure_21 = tmp17;
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
  let closure_22 = tmp18;
  let items1 = [tmp17, tmp18, unmountSheet, removePortal, onDismiss];
  const tmp19 = num(function unmount(ref) {
    tmp18();
    unmountSheet(closure_21);
    removePortal(closure_21);
    if (tmp14Result.current) {
      callback2(closure_14);
    }
    if (onDismiss) {
      onDismiss();
    }
  }, items1);
  let closure_23 = tmp19;
  let closure_24 = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = tmp15.current;
      if (current != null) {
        const snapToIndex = current.snapToIndex;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  let closure_25 = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = tmp15.current;
      if (current != null) {
        const snapToPosition = current.snapToPosition;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  let closure_26 = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = tmp15.current;
      if (current != null) {
        const expand = current.expand;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  let closure_27 = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = tmp15.current;
      if (current != null) {
        const collapse = current.collapse;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  let closure_28 = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = tmp15.current;
      if (current != null) {
        const close = current.close;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  let closure_29 = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = tmp15.current;
      if (current != null) {
        const forceClose = current.forceClose;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  const items2 = [tmp17, DEFAULT_STACK_BEHAVIOR, mountSheet];
  let closure_30 = num(function handlePresent(arg0) {
    let closure_0 = arg0;
    const animationFrame = requestAnimationFrame(() => {
      outer1_9({ mount: true, data: closure_0 });
      outer1_10(outer1_21, closure_0, outer1_2);
    });
  }, items2);
  const items3 = [willUnmountSheet, tmp19, tmp17, tmp5];
  let closure_31 = num(function handleDismiss(arg0) {
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
        const current = tmp15.current;
        if (current != null) {
          current.forceClose(arg0);
        }
      } else if (closure_18.current) {
        tmp19();
      }
    }
  }, items3);
  const items4 = [num];
  let closure_32 = num(function handleMinimize() {
    if (!closure_18.current) {
      tmp.current = true;
      if (-1 === closure_15.current) {
        closure_17.current = num;
      } else {
        closure_17.current = tmp2.current;
      }
      const current = tmp15.current;
      if (current != null) {
        current.close();
      }
    }
  }, items4);
  let closure_33 = num(function handleRestore() {
    let current = closure_18.current;
    if (current) {
      current = !ref3.current;
    }
    if (current) {
      closure_18.current = false;
      const current2 = tmp15.current;
      if (current2 != null) {
        current2.snapToIndex(ref2.current);
      }
    }
  }, []);
  const items5 = [tmp17, tmp19, willUnmountSheet];
  const tmp21 = num(function handlePortalRender(arg0) {
    if (tmp14Result.current) {
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
        tmp19();
      } else {
        willUnmountSheet(closure_21);
        const current = tmp15.current;
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
  callback(arg1, () => ({ snapToIndex: closure_24, snapToPosition: closure_25, expand: closure_26, collapse: closure_27, close: closure_28, forceClose: closure_29, dismiss: closure_31, present: closure_30, minimize: closure_32, restore: closure_33 }));
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
    if (typeof children !== "disabledUntil") {
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