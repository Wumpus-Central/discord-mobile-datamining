// === Module 6832: ? ===

// Module 6832
import normalizeSnapPoint from "normalizeSnapPoint" /* 6644 */;
import id from "id" /* 6834 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["name", "stackBehavior", "enableDismissOnClose", "onDismiss", "onAnimate", "index", "snapPoints", "enablePanDownToClose", "animateOnMount", "containerComponent", "onChange", "children"];
let noop = fn(19);
({ useCallback: metroRequire, useImperativeHandle: closure_7, useMemo: closure_8, useRef: closure_9, useState: c10, createElement: closure_11, forwardRef, memo } = noop);
const jsx = fn(21).jsx;
let closure_14 = { mount: false, data: "PX_16" };
const memoResult = memo(forwardRef(function BottomSheetModalComponent(name, arg1) {
  _require = arg1;
  name = name.name;
  let DEFAULT_STACK_BEHAVIOR = name.stackBehavior;
  if (undefined === DEFAULT_STACK_BEHAVIOR) {
    DEFAULT_STACK_BEHAVIOR = require("DEFAULT_STACK_BEHAVIOR").DEFAULT_STACK_BEHAVIOR;
  }
  let DEFAULT_ENABLE_DISMISS_ON_CLOSE = name.enableDismissOnClose;
  if (undefined === DEFAULT_ENABLE_DISMISS_ON_CLOSE) {
    DEFAULT_ENABLE_DISMISS_ON_CLOSE = require("DEFAULT_STACK_BEHAVIOR").DEFAULT_ENABLE_DISMISS_ON_CLOSE;
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
  closure_9 = tmp9[1];
  let obj = require("module_6632");
  const bottomSheetModalInternal = obj.useBottomSheetModalInternal();
  ({ hostName, mountSheet } = bottomSheetModalInternal);
  const unmountSheet = bottomSheetModalInternal.unmountSheet;
  willUnmountSheet = bottomSheetModalInternal.willUnmountSheet;
  ({ containerHeight, containerOffset } = bottomSheetModalInternal);
  let obj1 = require("Portal");
  const removePortal = obj1.usePortal(hostName).removePortal;
  const tmp15 = closure_9(null);
  closure_14 = tmp15;
  let num2 = -1;
  if (!(undefined === animateOnMount || animateOnMount)) {
    num2 = num;
  }
  closure_9(num2);
  closure_9(null);
  closure_9(-1);
  closure_18 = tmp14(false);
  closure_9(false);
  const tmp14Result = closure_9(false);
  tmp14Result.current = mount;
  let items = [name];
  const tmp17 = onChange(() => {
    let combined = name;
    if (!name) {
      const _HermesInternal = HermesInternal;
      combined = "bottom-sheet-modal-" + id.id();
    }
    return combined;
  }, items);
  closure_21 = tmp17;
  function resetVariables() {
    const obj = { component: memoResult.name, method: resetVariables.name };
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
  const tmp19 = num(function unmount() {
    closure_22();
    unmountSheet(closure_21);
    removePortal(closure_21);
    if (ref5.current) {
      closure_9(closure_14);
    }
    if (onDismiss) {
      onDismiss();
    }
  }, items1);
  closure_23 = tmp19;
  let snapToIndex = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = closure_14.current;
      if (current != null) {
        snapToIndex = current.snapToIndex;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  let snapToPosition = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = closure_14.current;
      if (current != null) {
        snapToPosition = current.snapToPosition;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  let setToIndex = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = closure_14.current;
      if (current != null) {
        setToIndex = current.setToIndex;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  let setToPosition = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = closure_14.current;
      if (current != null) {
        setToPosition = current.setToPosition;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  let expand = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = closure_14.current;
      if (current != null) {
        expand = current.expand;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  let collapse = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = closure_14.current;
      if (current != null) {
        collapse = current.collapse;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  let close = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = closure_14.current;
      if (current != null) {
        close = current.close;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  let forceClose = num(() => {
    const items = [...arguments];
    if (!closure_18.current) {
      const current = closure_14.current;
      if (current != null) {
        forceClose = current.forceClose;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, current);
      }
    }
  }, []);
  const items2 = [tmp17, DEFAULT_STACK_BEHAVIOR, mountSheet];
  const present = num(function handlePresent(data) {
    const animationFrame = requestAnimationFrame(() => {
      closure_9({ mount: true, data });
      mountSheet(closure_21, data, DEFAULT_STACK_BEHAVIOR);
    });
  }, items2);
  const items3 = [willUnmountSheet, tmp19, tmp17, tmp5];
  const dismiss = num(function handleDismiss(arg0) {
    let tmp3 = -1 !== ref.current;
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
        closure_23();
      }
    }
  }, items3);
  const items4 = [num];
  const minimize = num(function handleMinimize() {
    if (!closure_18.current) {
      tmp.current = true;
      if (-1 === ref.current) {
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
  const restore = num(function handleRestore() {
    let current = closure_18.current;
    if (current) {
      current = !ref4.current;
    }
    if (current) {
      closure_18.current = false;
      const current2 = closure_14.current;
      if (current2 != null) {
        current2.snapToIndex(ref3.current);
      }
    }
  }, []);
  const items5 = [tmp17, tmp19, willUnmountSheet];
  const tmp21 = num(function handlePortalRender(fn) {
    if (ref5.current) {
      fn();
    }
  }, []);
  const items6 = [onChange];
  const items7 = [onAnimate];
  const tmp11 = _require;
  const tmp20 = num(function handlePortalOnUnmount() {
    let tmp = -1 === ref.current;
    if (tmp) {
      tmp = false === closure_18.current;
    }
    if (!tmp) {
      closure_20.current = false;
      closure_19.current = true;
      if (closure_18.current) {
        closure_23();
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
  const tmp22 = num(function handleBottomSheetOnChange(current, arg1, arg2) {
    closure_15.current = current;
    closure_16.current = null;
    if (onChange) {
      tmp(current, arg1, arg2);
    }
  }, items6);
  const tmp23 = num((arg0, current, arg2, arg3, arg4) => {
    closure_16.current = current;
    if (onAnimate) {
      tmp(arg0, current, arg2, arg3, arg4);
    }
  }, items7);
  enablePanDownToClose(arg1, () => ({ snapToIndex, snapToPosition, setToIndex, setToPosition, expand, collapse, close, forceClose, dismiss, present, minimize, restore }));
  let tmp27Result = null;
  if (mount) {
    obj = { name: tmp17, hostName, handleOnMount: tmp21, handleOnUpdate: tmp21, handleOnUnmount: tmp20, children: null };
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
      obj1 = { data: first.data };
      tmp27Result = tmp27(children, obj1);
    }
    const obj2 = { children: unmountSheet(name(tmp12[9]), obj, tmp27Result) };
    obj.children = removePortal(Fragment, obj2, tmp17);
    tmp27Result = tmp27(tmp11(tmp12[6]).Portal, obj, tmp17);
    const tmp30 = name(tmp12[9]);
  }
  return tmp27Result;
}));
memoResult.displayName = "BottomSheetModal";

export default memoResult;