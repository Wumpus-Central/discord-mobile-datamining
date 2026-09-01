// _runtime/05751_importDefaultResult1.js
import isGestureEnabled from "05720_isGestureEnabled.js";
import closure_5 from "metro/00032__slicedToArray.js";
import closure_6 from "metro/00109__objectWithoutProperties.js";
import closure_7 from "00019_noop.js";
import { useState } from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";
import importDefaultResult from "05664_createNativeWrapper.js";

require = arg1;
let closure_3 = [
  "children",
  "refreshControl",
  "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER",
  "keyboardShouldPersistTaps",
];
let closure_4 = ["refreshControl", "ref", "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER"];
({ FlatList: c9, RefreshControl, ScrollView: ScrollView2, Switch, TextInput } = get_ActivityIndicator);
const importDefaultResultResult = importDefaultResult(
  RefreshControl,
  { disallowInterruption: true, shouldCancelWhenOutside: false },
  require("GestureDetectorType").GestureDetectorType.Virtual,
);
let closure_11 = importDefaultResult(
  ScrollView2,
  { disallowInterruption: true, shouldCancelWhenOutside: false },
  require("GestureDetectorType").GestureDetectorType.Intercepting,
);
class ScrollView {
  constructor(arg0) {
    ({ refreshControl, onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER: closure_0, keyboardShouldPersistTaps } = global);
    tmp = closure_6(global, closure_3);
    tmp2 = closure_5(useState(null), 2);
    first = tmp2[0];
    closure_1 = first;
    closure_2 = tmp2[1];
    tmp4 = jsx;
    obj = {};
    tmp5 = closure_11;
    merged = Object.assign(tmp);
    obj.ref = global.ref;
    obj.keyboardShouldPersistTaps = keyboardShouldPersistTaps;
    obj.onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER = function onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER(arg0) {
      closure_0 = arg0;
      closure_1_0(table[7]).ghQueueMicrotask(() => {
        let tmp = closure_1_1;
        if (closure_1_1) {
          tmp = closure_1_1.handlerTag === lib.handlerTag;
        }
        if (!tmp) {
          closure_1_2(lib);
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
      tmp7 = closure_7;
      if (first) {
        obj1 = { block: null };
        obj1[0] = first;
        obj2 = obj1;
      } else {
        obj2 = {};
      }
      cloneElementResult = closure_7.cloneElement(refreshControl, obj2);
    }
    return;
  }
}
const importDefaultResult1 = importDefaultResult;

export const RefreshControl = importDefaultResultResult;
export { ScrollView };
export const Switch = importDefaultResult(Switch, {
  shouldCancelWhenOutside: false,
  shouldActivateOnStart: true,
  disallowInterruption: true,
});
export const TextInput = importDefaultResult(TextInput);
export const FlatList = (ref) => {
  ({ refreshControl, onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER: require } = ref);
  const tmp2 = callback(useState(null), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  function updateGesture(arg0) {
    closure_0 = arg0;
    closure_1_0(table[7]).ghQueueMicrotask(() => {
      let tmp = closure_1_1;
      if (closure_1_1) {
        tmp = closure_1_1.handlerTag === lib.handlerTag;
      }
      if (!tmp) {
        closure_1_2(lib);
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
    obj = { onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER: updateGesture };
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(obj);
    return closure_1_10(closure_1_12, obj);
  };
  if (!refreshControl) {
    obj.refreshControl = undefined;
    return <closure_9 {...obj} />;
  } else {
    if (first) {
      obj1 = { block: null };
      obj1[0] = first;
      let obj2 = obj1;
    } else {
      obj2 = {};
    }
    closure_7.cloneElement(refreshControl, obj2);
  }
};
