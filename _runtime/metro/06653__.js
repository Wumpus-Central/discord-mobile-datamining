// _runtime/metro/06653__.js
import cancelAnimation from "../01636_cancelAnimation.js";

require = arg1;
let dependencyMap = arg6;
let __initData = {
  code: "function pnpm_useScrollHandlerTs1(event,context){const{handleOnScroll,onScroll,runOnJS}=this.__closure;handleOnScroll(event,context);if(onScroll){runOnJS(onScroll)({nativeEvent:event});}}",
};
let closure_3 = {
  code: "function pnpm_useScrollHandlerTs2(event,context){const{handleOnBeginDrag,onScrollBeginDrag,runOnJS}=this.__closure;handleOnBeginDrag(event,context);if(onScrollBeginDrag){runOnJS(onScrollBeginDrag)({nativeEvent:event});}}",
};
let closure_4 = {
  code: "function pnpm_useScrollHandlerTs3(event,context){const{handleOnEndDrag,onScrollEndDrag,runOnJS}=this.__closure;handleOnEndDrag(event,context);if(onScrollEndDrag){runOnJS(onScrollEndDrag)({nativeEvent:event});}}",
};

export const useScrollHandler = () => {
  let useScrollEventsHandlersDefault = scrollEventsHandlersHook;
  if (scrollEventsHandlersHook === undefined) {
    useScrollEventsHandlersDefault = require("06654__.js").useScrollEventsHandlersDefault;
  }
  _require = onScroll;
  dependencyMap = onScrollBeginDrag;
  __initData = onScrollEndDrag;
  let workletNoop2;
  let workletNoop3;
  let obj = require("cancelAnimation");
  const animatedRef = obj.useAnimatedRef();
  let obj1 = require("cancelAnimation");
  const sharedValue = obj1.useSharedValue(0);
  const scrollEventsHandlersDefault = useScrollEventsHandlersDefault(
    animatedRef,
    sharedValue,
    lockableScrollableContentOffsetY,
  );
  let workletNoop = scrollEventsHandlersDefault.handleOnScroll;
  if (undefined === workletNoop) {
    workletNoop = tmp3(6644).workletNoop;
  }
  workletNoop2 = scrollEventsHandlersDefault.handleOnBeginDrag;
  if (undefined === workletNoop2) {
    workletNoop2 = tmp3(6644).workletNoop;
  }
  workletNoop3 = scrollEventsHandlersDefault.handleOnEndDrag;
  if (undefined === workletNoop3) {
    workletNoop3 = tmp3(6644).workletNoop;
  }
  let workletNoop4 = scrollEventsHandlersDefault.handleOnMomentumEnd;
  if (undefined === workletNoop4) {
    workletNoop4 = tmp3(6644).workletNoop;
  }
  let workletNoop5 = scrollEventsHandlersDefault.handleOnMomentumBegin;
  if (undefined === workletNoop5) {
    workletNoop5 = tmp3(6644).workletNoop;
  }
  obj = { scrollHandler: null, scrollableRef: null, scrollableContentOffsetY: null };
  obj = { onScroll: null, onBeginDrag: null, onEndDrag: null, onMomentumBegin: null, onMomentumEnd: null };
  const fn = function v(nativeEvent, arg1) {
    workletNoop(nativeEvent, arg1);
    if (closure_0) {
      const obj = { nativeEvent };
      obj.runOnJS(tmp2)(obj);
    }
  };
  obj1 = { handleOnScroll: workletNoop, onScroll, runOnJS: tmp3(1636).runOnJS };
  fn.__closure = obj1;
  fn.__workletHash = 13105350120634;
  fn.__initData = __initData;
  obj.onScroll = fn;
  const fn2 = function _(nativeEvent, arg1) {
    workletNoop2(nativeEvent, arg1);
    if (closure_1) {
      const obj = { nativeEvent };
      obj.runOnJS(tmp2)(obj);
    }
  };
  const tmp3Result = require("cancelAnimation");
  fn2.__closure = { handleOnBeginDrag: workletNoop2, onScrollBeginDrag, runOnJS: require("cancelAnimation").runOnJS };
  fn2.__workletHash = 803385440782;
  fn2.__initData = workletNoop;
  obj.onBeginDrag = fn2;
  class O {
    constructor(arg0, arg1) {
      tmp = workletNoop(scrollEventsHandlersHook, onScroll);
      if (closure_2) {
        tmp3 = closure_0;
        tmp4 = closure_1;
        obj = closure_0(closure_1[1]);
        obj = { nativeEvent: null };
        obj.nativeEvent = scrollEventsHandlersHook;
        tmp5 = obj.runOnJS(tmp2)(obj);
      }
      return;
    }
  }
  const obj2 = { handleOnBeginDrag: workletNoop2, onScrollBeginDrag, runOnJS: require("cancelAnimation").runOnJS };
  O.__closure = { handleOnEndDrag: workletNoop3, onScrollEndDrag, runOnJS: require("cancelAnimation").runOnJS };
  O.__workletHash = 3274737678599;
  O.__initData = workletNoop2;
  obj.onEndDrag = O;
  obj.onMomentumBegin = workletNoop5;
  obj.onMomentumEnd = workletNoop4;
  const items = [
    workletNoop,
    workletNoop2,
    workletNoop3,
    workletNoop5,
    workletNoop4,
    onScroll,
    onScrollBeginDrag,
    onScrollEndDrag,
  ];
  obj.scrollHandler = tmp3Result.useAnimatedScrollHandler(obj, items);
  obj.scrollableRef = animatedRef;
  obj.scrollableContentOffsetY = sharedValue;
  return obj;
};
