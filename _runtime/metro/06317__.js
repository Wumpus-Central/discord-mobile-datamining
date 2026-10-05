// _runtime/metro/06317__.js
import Fragment2 from "../react/00021_Fragment.js";
import normalizeSnapPoint from "../06129_normalizeSnapPoint.js";
import id from "../06319_id.js";
import _slicedToArray from "00032__slicedToArray.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import react_mod from "../00019_react.js";

const require = globalThis.__r;
let _require;

let c10;
let c9;
let forwardRef;
let memo;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let closure_3 = [
  "name",
  "stackBehavior",
  "enableDismissOnClose",
  "onDismiss",
  "onAnimate",
  "index",
  "snapPoints",
  "enablePanDownToClose",
  "animateOnMount",
  "containerComponent",
  "onChange",
  "children",
];
let react = react_mod;
({
  useCallback: metroRequire,
  useImperativeHandle: metroImportDefault,
  useMemo: metroImportAll,
  useRef: c9,
  useState: c10,
  createElement: unpackModuleId,
  forwardRef,
  memo,
} = react);
react = react_mod;
const jsx = Fragment2.jsx;
let closure_14 = { mount: false, data: "a" };
const memoResult = memo(
  forwardRef(function BottomSheetModalComponent(name, arg1) {
    let closure_0;
    let containerHeight;
    let containerOffset;
    let hostName;
    let mountSheet;
    let obj6;
    let willUnmountSheet;
    _require = arg1;
    name = name.name;
    let DEFAULT_STACK_BEHAVIOR = name.stackBehavior;
    if (undefined === DEFAULT_STACK_BEHAVIOR) {
      let tmp = _require;
      const tmp2 = DEFAULT_STACK_BEHAVIOR;
      DEFAULT_STACK_BEHAVIOR = require("DEFAULT_STACK_BEHAVIOR").DEFAULT_STACK_BEHAVIOR;
    }
    let DEFAULT_ENABLE_DISMISS_ON_CLOSE = name.enableDismissOnClose;
    if (undefined === DEFAULT_ENABLE_DISMISS_ON_CLOSE) {
      let tmp3 = _require;
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
    const snapPoints = name.snapPoints;
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
    let closure_9 = tmp9[1];
    let data = first.data;
    let obj = require("06117__.js");
    const bottomSheetModalInternal = obj.useBottomSheetModalInternal();
    ({ hostName, mountSheet } = bottomSheetModalInternal);
    const unmountSheet = bottomSheetModalInternal.unmountSheet;
    willUnmountSheet = bottomSheetModalInternal.willUnmountSheet;
    ({ containerHeight, containerOffset } = bottomSheetModalInternal);
    let obj2 = require("Portal");
    const removePortal = obj2.usePortal(hostName).removePortal;
    const tmp15 = closure_9(null);
    closure_14 = tmp15;
    let num2 = -1;
    const tmp11 = _require;
    if (!(undefined === animateOnMount || animateOnMount)) {
      num2 = num;
    }
    const ref = tmp14(num2);
    const ref2 = tmp14(null);
    const ref3 = tmp14(-1);
    let closure_18 = tmp14(false);
    const ref4 = tmp14(false);
    const tmp14Result = closure_9(false);
    const ref5 = tmp14Result;
    tmp14Result.current = mount;
    let items = [name];
    const tmp17 = onChange(() => {
      let combined = name;
      if (!combined) {
        const _HermesInternal = HermesInternal;
        const obj = id;
        combined = "bottom-sheet-modal-" + obj.id();
      }
      return combined;
    }, items);
    let closure_21 = tmp17;
    function resetVariables() {
      const obj = normalizeSnapPoint;
      const obj2 = { component: memoResult.name, method: resetVariables.name };
      obj.print(obj2);
      ref.current = -1;
      ref3.current = -1;
      closure_18.current = false;
      ref5.current = false;
      ref4.current = false;
    }
    const tmp18 = num(resetVariables, []);
    let closure_22 = tmp18;
    let items1 = [tmp17, tmp18, unmountSheet, removePortal, onDismiss];
    const tmp19 = num(function unmount() {
      const current = ref5.current;
      closure_22();
      unmountSheet(closure_21);
      removePortal(closure_21);
      if (current) {
        closure_9(closure_14);
      }
      if (onDismiss) {
        onDismiss();
      }
    }, items1);
    let closure_23 = tmp19;
    let snapToIndex = num(() => {
      const items = [...arguments];
      if (!closure_18.current) {
        const current = closure_14.current;
        if (current != null) {
          snapToIndex = current.snapToIndex;
          const items1 = [];
          HermesBuiltin.arraySpread(items1, items, 0);
          HermesBuiltin.apply(snapToIndex, items1, current);
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
          HermesBuiltin.arraySpread(items1, items, 0);
          HermesBuiltin.apply(snapToPosition, items1, current);
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
          HermesBuiltin.arraySpread(items1, items, 0);
          HermesBuiltin.apply(setToIndex, items1, current);
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
          HermesBuiltin.arraySpread(items1, items, 0);
          HermesBuiltin.apply(setToPosition, items1, current);
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
          HermesBuiltin.arraySpread(items1, items, 0);
          HermesBuiltin.apply(expand, items1, current);
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
          HermesBuiltin.arraySpread(items1, items, 0);
          HermesBuiltin.apply(collapse, items1, current);
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
          HermesBuiltin.arraySpread(items1, items, 0);
          HermesBuiltin.apply(close, items1, current);
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
          HermesBuiltin.arraySpread(items1, items, 0);
          HermesBuiltin.apply(forceClose, items1, current);
        }
      }
    }, []);
    const items2 = [tmp17, DEFAULT_STACK_BEHAVIOR, mountSheet];
    const present = num(function handlePresent(data) {
      const animationFrame = requestAnimationFrame(() => {
        const obj = { mount: true, data };
        closure_9(obj);
        mountSheet(closure_21, data, DEFAULT_STACK_BEHAVIOR);
      });
    }, items2);
    const items3 = [willUnmountSheet, tmp19, tmp17, tmp5];
    const dismiss = num(function handleDismiss(arg0) {
      const tmp3 = -1 !== ref.current || false !== closure_18.current || tmp;
      if (tmp3) {
        if (null != ref2.current) {
          willUnmountSheet(closure_21);
          ref4.current = true;
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
          ref3.current = -1;
        } else {
          ref3.current = tmp2.current;
        }
        const current = closure_14.current;
        if (current != null) {
          current.close();
        }
      }
    }, items4);
    const restore = num(function handleRestore() {
      const current = closure_18.current && !ref4.current;
      if (current) {
        closure_18.current = false;
        const current2 = closure_14.current;
        if (current2 != null) {
          current2.snapToIndex(ref3.current);
        }
      }
    }, []);
    const items5 = [tmp17, tmp19, willUnmountSheet];
    const tmp20 = num(function handlePortalOnUnmount() {
      const tmp = -1 === ref.current && false === closure_18.current;
      if (!tmp) {
        ref5.current = false;
        ref4.current = true;
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
    const tmp21 = num(function handlePortalRender(fn) {
      if (ref5.current) {
        fn();
      }
    }, []);
    const items6 = [onChange];
    const items7 = [onAnimate];
    const items8 = [DEFAULT_ENABLE_DISMISS_ON_CLOSE, tmp19];
    const tmp22 = num(function handleBottomSheetOnChange(current, arg1, arg2) {
      ref.current = current;
      ref2.current = null;
      if (onChange) {
        tmp(current, arg1, arg2);
      }
    }, items6);
    const tmp23 = num((arg0, current, arg2, arg3, arg4) => {
      ref2.current = current;
      if (onAnimate) {
        tmp(arg0, current, arg2, arg3, arg4);
      }
    }, items7);
    const tmp24 = num(function handleBottomSheetOnClose() {
      if (!closure_18.current) {
        if (DEFAULT_ENABLE_DISMISS_ON_CLOSE) {
          closure_23();
        }
      }
    }, items8);
    enablePanDownToClose(arg1, () => ({
      snapToIndex,
      snapToPosition,
      setToIndex,
      setToPosition,
      expand,
      collapse,
      close,
      forceClose,
      dismiss,
      present,
      minimize,
      restore,
    }));
    let tmp27Result2 = null;
    if (mount) {
      const obj3 = {
        name: tmp17,
        hostName,
        handleOnMount: tmp21,
        handleOnUpdate: tmp21,
        handleOnUnmount: tmp20,
        children: removePortal(Fragment, obj6, tmp17),
      };
      const Portal = tmp11(tmp12[6]).Portal;
      const obj4 = {
        ref: tmp15,
        key: tmp17,
        index: num,
        snapPoints,
        enablePanDownToClose: tmp5,
        animateOnMount: undefined === animateOnMount || animateOnMount,
        containerHeight,
        containerOffset,
        onChange: tmp22,
        onClose: tmp24,
        onAnimate: tmp23,
        $modal: true,
      };
      const tmp30 = name(DEFAULT_STACK_BEHAVIOR[9]);
      const merged = Object.assign(tmp8);
      let tmp27Result = children;
      const tmp28 = unmountSheet;
      if (typeof children === "function") {
        const obj5 = { data };
        tmp27Result = tmp27(children, obj5);
      }
      obj6 = { children: tmp28(tmp30, obj4, tmp27Result) };
      tmp27Result2 = tmp27(Portal, obj3, tmp17);
    }
    return tmp27Result2;
  }),
);
memoResult.displayName = "BottomSheetModal";

export default memoResult;
