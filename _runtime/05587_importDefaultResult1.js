// _runtime/05587_importDefaultResult1.js
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";
import { useState } from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importDefaultResult from "createNativeWrapper";
import importDefaultResult1 from "createNativeWrapper";
import { isGestureEnabled } from "05556_isGestureEnabled.js";

let RefreshControl;
let ScrollView2;
let Switch;
let TextInput;
let c9;
const require = arg1;
let closure_3 = ["children", "refreshControl", "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER", "keyboardShouldPersistTaps"];
let closure_4 = ["refreshControl", "ref", "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER"];
({ FlatList: c9, RefreshControl, ScrollView: ScrollView2, Switch, TextInput } = get_ActivityIndicator);
const importDefaultResultResult = require("createNativeWrapper")(RefreshControl, { disallowInterruption: true, shouldCancelWhenOutside: false }, require("GestureDetectorType").GestureDetectorType.Virtual);
let closure_11 = require("createNativeWrapper")(ScrollView2, { disallowInterruption: true, shouldCancelWhenOutside: false }, require("GestureDetectorType").GestureDetectorType.Intercepting);
class ScrollView {
  constructor(arg0) {
    ({ refreshControl, onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER: closure_0, keyboardShouldPersistTaps } = global);
    tmp = _objectWithoutProperties(global, closure_3);
    tmp2 = _slicedToArray(useState(null), 2);
    first = tmp2[0];
    closure_1 = first;
    closure_2 = tmp2[1];
    tmp4 = jsx;
    obj = {};
    tmp5 = GestureDetectorType;
    merged = Object.assign(tmp);
    obj.ref = global.ref;
    obj.keyboardShouldPersistTaps = keyboardShouldPersistTaps;
    obj.onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER = function onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER(arg0) {
      let closure_0 = arg0;
      outer1_0(table[7]).ghQueueMicrotask(() => {
        let tmp = outer1_1;
        if (outer1_1) {
          tmp = outer1_1.handlerTag === lib.handlerTag;
        }
        if (!tmp) {
          outer1_2(lib);
          if (lib != null) {
            lib(tmp4);
          }
          tmp4 = lib;
        }
      });
    };
    if (!refreshControl) {
      obj.refreshControl = undefined;
      tmp9 = closure_1;
      tmp10 = closure_2;
      obj = { keyboardShouldPersistTaps: null, children: null };
      obj[0] = keyboardShouldPersistTaps;
      obj[1] = global.children;
      obj.children = tmp4(require("context"), obj);
      return tmp4(tmp5, obj);
    } else {
      tmp7 = noop;
      if (first) {
        obj1 = { block: null };
        obj1[0] = first;
        obj2 = obj1;
      } else {
        obj2 = {};
      }
      cloneElementResult = noop.cloneElement(refreshControl, obj2);
    }
    return;
  }
}

export const RefreshControl = importDefaultResultResult;
export { ScrollView };
export const Switch = require("createNativeWrapper")(Switch, { shouldCancelWhenOutside: false, shouldActivateOnStart: true, disallowInterruption: true });
export const TextInput = require("createNativeWrapper")(TextInput);
export const FlatList = (ref) => {
  let refreshControl;
  let require;
  ({ refreshControl, onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER: require } = ref);
  const tmp2 = callback(useState(null), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  function updateGesture(arg0) {
    let closure_0 = arg0;
    outer1_0(table[7]).ghQueueMicrotask(() => {
      let tmp = outer1_1;
      if (outer1_1) {
        tmp = outer1_1.handlerTag === lib.handlerTag;
      }
      if (!tmp) {
        outer1_2(lib);
        if (lib != null) {
          lib(tmp4);
        }
        tmp4 = lib;
      }
    });
  }
  let obj = {};
  obj = {};
  const entries = Object.entries(callback2(ref, obj));
  for (const item10028 of entries) {
    let tmp5 = callback;
    let tmp6 = callback(item10028, 2);
    let first1 = tmp6[0];
    let tmp8 = first1;
    let tmp9 = tmp6[1];
    let tmp10 = require;
    let tmp11 = dependencyMap;
    let NativeWrapperProps = isGestureEnabled.NativeWrapperProps;
    let tmp12 = first1;
    let tmp13 = tmp9;
    if (NativeWrapperProps.has(first1)) {
      obj[tmp8] = tmp9;
    } else {
      obj[tmp8] = tmp9;
    }
    continue;
  }
  obj = { ref: ref.ref };
  let merged = Object.assign(obj);
  obj.renderScrollComponent = function renderScrollComponent(arg0) {
    const obj = { onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER: updateGesture };
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    return outer1_10(outer1_12, obj);
  };
  if (!refreshControl) {
    obj.refreshControl = undefined;
    return <closure_9 {...obj} />;
  } else {
    if (first) {
      const obj1 = { block: null };
      obj1[0] = first;
      let obj2 = obj1;
    } else {
      obj2 = {};
    }
    noop.cloneElement(refreshControl, obj2);
  }
};