// _runtime/metro/06066__.js
import cancelAnimation from "../01637_cancelAnimation.js";

const require = globalThis.__r;

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
    useScrollEventsHandlersDefault = require("06067__.js").useScrollEventsHandlersDefault;
  }
  _require = onScroll;
  dependencyMap = onScrollBeginDrag;
  __initData = onScrollEndDrag;
  let workletNoop2;
  let workletNoop3;
  const animatedRef = require("cancelAnimation").useAnimatedRef();
  let obj = require("cancelAnimation");
  const sharedValue = require("cancelAnimation").useSharedValue(0);
  const scrollEventsHandlersDefault = useScrollEventsHandlersDefault(
    animatedRef,
    sharedValue,
    lockableScrollableContentOffsetY,
  );
  let workletNoop = scrollEventsHandlersDefault.handleOnScroll;
  if (undefined === workletNoop) {
    workletNoop = tmp3(6057).workletNoop;
  }
  workletNoop2 = scrollEventsHandlersDefault.handleOnBeginDrag;
  if (undefined === workletNoop2) {
    workletNoop2 = tmp3(6057).workletNoop;
  }
  workletNoop3 = scrollEventsHandlersDefault.handleOnEndDrag;
  if (undefined === workletNoop3) {
    workletNoop3 = tmp3(6057).workletNoop;
  }
  let workletNoop4 = scrollEventsHandlersDefault.handleOnMomentumEnd;
  if (undefined === workletNoop4) {
    workletNoop4 = tmp3(6057).workletNoop;
  }
  let workletNoop5 = scrollEventsHandlersDefault.handleOnMomentumBegin;
  if (undefined === workletNoop5) {
    workletNoop5 = tmp3(6057).workletNoop;
  }
  const obj3 = { scrollHandler: null, scrollableRef: null, scrollableContentOffsetY: null };
  let obj2 = require("cancelAnimation");
  const obj4 = { onScroll: null, onBeginDrag: null, onEndDrag: null, onMomentumBegin: null, onMomentumEnd: null };
  const fn = function v(nativeEvent, arg1) {
    workletNoop(nativeEvent, arg1);
    if (closure_0) {
      const obj2 = { nativeEvent };
      cancelAnimation.runOnJS(tmp2)(obj2);
    }
  };
  const tmp3Result = require("cancelAnimation");
  fn.__closure = { handleOnScroll: workletNoop, onScroll, runOnJS: require("cancelAnimation").runOnJS };
  fn.__workletHash = 13105350120634;
  fn.__initData = __initData;
  obj4.onScroll = fn;
  const fn2 = function _(nativeEvent, arg1) {
    workletNoop2(nativeEvent, arg1);
    if (closure_1) {
      const obj2 = { nativeEvent };
      cancelAnimation.runOnJS(tmp2)(obj2);
    }
  };
  const obj5 = { handleOnScroll: workletNoop, onScroll, runOnJS: require("cancelAnimation").runOnJS };
  fn2.__closure = { handleOnBeginDrag: workletNoop2, onScrollBeginDrag, runOnJS: require("cancelAnimation").runOnJS };
  fn2.__workletHash = 803385440782;
  fn2.__initData = workletNoop;
  obj4.onBeginDrag = fn2;
  class O {
    constructor(arg0, arg1) {
      tmp = workletNoop(scrollEventsHandlersHook, onScroll);
      if (closure_2) {
        tmp3 = closure_0;
        tmp4 = closure_1;
        obj = closure_0(closure_1[1]);
        obj1 = { nativeEvent: null };
        obj1.nativeEvent = scrollEventsHandlersHook;
        tmp5 = obj.runOnJS(tmp2)(obj1);
      }
      return;
    }
  }
  const obj6 = { handleOnBeginDrag: workletNoop2, onScrollBeginDrag, runOnJS: require("cancelAnimation").runOnJS };
  O.__closure = { handleOnEndDrag: workletNoop3, onScrollEndDrag, runOnJS: require("cancelAnimation").runOnJS };
  O.__workletHash = 3274737678599;
  O.__initData = workletNoop2;
  obj4.onEndDrag = O;
  obj4.onMomentumBegin = workletNoop5;
  obj4.onMomentumEnd = workletNoop4;
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
  obj3.scrollHandler = tmp3Result.useAnimatedScrollHandler(obj4, items);
  obj3.scrollableRef = animatedRef;
  obj3.scrollableContentOffsetY = sharedValue;
  return obj3;
};
