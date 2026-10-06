// === Module 6145: ? ===

// Module 6145
import _mod1643 from "module_1643" /* 1643 */;

const require = globalThis.__r;
let _require, dependencyMap;

let __initData = { code: "function pnpm_useScrollHandlerTs1(event,context){const{handleOnScroll,onScroll,runOnJS}=this.__closure;handleOnScroll(event,context);if(onScroll){runOnJS(onScroll)({nativeEvent:event});}}" };
let closure_3 = { code: "function pnpm_useScrollHandlerTs2(event,context){const{handleOnBeginDrag,onScrollBeginDrag,runOnJS}=this.__closure;handleOnBeginDrag(event,context);if(onScrollBeginDrag){runOnJS(onScrollBeginDrag)({nativeEvent:event});}}" };
let closure_4 = { code: "function pnpm_useScrollHandlerTs3(event,context){const{handleOnEndDrag,onScrollEndDrag,runOnJS}=this.__closure;handleOnEndDrag(event,context);if(onScrollEndDrag){runOnJS(onScrollEndDrag)({nativeEvent:event});}}" };

export const useScrollHandler = () => {
  let fn;
  let fn2;
  let items;
  let obj4;
  let useAnimatedScrollHandler;
  let useScrollEventsHandlersDefault = scrollEventsHandlersHook;
  if (scrollEventsHandlersHook === undefined) {
    const tmp2 = dependencyMap;
    useScrollEventsHandlersDefault = require("module_6146").useScrollEventsHandlersDefault;
  }
  _require = onScroll;
  dependencyMap = onScrollBeginDrag;
  __initData = onScrollEndDrag;
  let workletNoop2;
  let workletNoop3;
  let obj = require("module_1643");
  const animatedRef = obj.useAnimatedRef();
  let obj2 = require("module_1643");
  const sharedValue = obj2.useSharedValue(0);
  const scrollEventsHandlersDefault = useScrollEventsHandlersDefault(animatedRef, sharedValue, lockableScrollableContentOffsetY);
  let workletNoop = scrollEventsHandlersDefault.handleOnScroll;
  if (undefined === workletNoop) {
    workletNoop = tmp3(6136).workletNoop;
  }
  workletNoop2 = scrollEventsHandlersDefault.handleOnBeginDrag;
  if (undefined === workletNoop2) {
    workletNoop2 = tmp3(6136).workletNoop;
  }
  workletNoop3 = scrollEventsHandlersDefault.handleOnEndDrag;
  if (undefined === workletNoop3) {
    workletNoop3 = tmp3(6136).workletNoop;
  }
  let workletNoop4 = scrollEventsHandlersDefault.handleOnMomentumEnd;
  if (undefined === workletNoop4) {
    workletNoop4 = tmp3(6136).workletNoop;
  }
  let workletNoop5 = scrollEventsHandlersDefault.handleOnMomentumBegin;
  if (undefined === workletNoop5) {
    workletNoop5 = tmp3(6136).workletNoop;
  }
  const obj3 = { scrollHandler: useAnimatedScrollHandler(obj4, items), scrollableRef: animatedRef, scrollableContentOffsetY: sharedValue };
  obj4 = { onScroll: fn, onBeginDrag: fn2, onEndDrag: O, onMomentumBegin: workletNoop5, onMomentumEnd: workletNoop4 };
  fn = function v(nativeEvent, arg1) {
    workletNoop(nativeEvent, arg1);
    if (onScroll) {
      const obj2 = { nativeEvent };
      const obj = _mod1643;
      obj.runOnJS(tmp2)(obj2);
    }
  };
  useAnimatedScrollHandler = require("module_1643").useAnimatedScrollHandler;
  fn.__closure = { handleOnScroll: workletNoop, onScroll, runOnJS: require("module_1643").runOnJS };
  fn.__workletHash = 13105350120634;
  fn.__initData = __initData;
  fn2 = function _(nativeEvent, arg1) {
    workletNoop2(nativeEvent, arg1);
    if (onScrollBeginDrag) {
      const obj2 = { nativeEvent };
      const obj = _mod1643;
      obj.runOnJS(tmp2)(obj2);
    }
  };
  ({ handleOnScroll: workletNoop, onScroll, runOnJS: require("module_1643").runOnJS });
  fn2.__closure = { handleOnBeginDrag: workletNoop2, onScrollBeginDrag, runOnJS: require("module_1643").runOnJS };
  fn2.__workletHash = 803385440782;
  fn2.__initData = workletNoop;
  ({ handleOnBeginDrag: workletNoop2, onScrollBeginDrag, runOnJS: require("module_1643").runOnJS });
  class O {
    constructor(nativeEvent, arg1) {
      workletNoop3(nativeEvent, arg1);
      if (onScrollEndDrag) {
        const obj2 = { nativeEvent };
        const obj = _mod1643;
        obj.runOnJS(tmp2)(obj2);
      }
    }
  }
  O.__closure = { handleOnEndDrag: workletNoop3, onScrollEndDrag, runOnJS: require("module_1643").runOnJS };
  O.__workletHash = 3274737678599;
  O.__initData = workletNoop2;
  items = [workletNoop, workletNoop2, workletNoop3, workletNoop5, workletNoop4, onScroll, onScrollBeginDrag, onScrollEndDrag];
  ({ handleOnEndDrag: workletNoop3, onScrollEndDrag, runOnJS: require("module_1643").runOnJS });
  return obj3;
};