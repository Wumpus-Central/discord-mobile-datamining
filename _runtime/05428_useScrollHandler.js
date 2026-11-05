// === Module 5428: useScrollHandler ===

// Module 5428 (useScrollHandler)
import _mod1652 from "module_1652" /* 1652 */;
import _mod5419 from "module_5419" /* 5419 */;
import useScrollEventsHandlersDefault2 from "useScrollEventsHandlersDefault" /* 5429 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "(function pnpm_useScrollHandlerTs1(event,context){let[handleOnScroll,onScroll,runOnJS]=this.__closure;handleOnScroll(event,context);if(onScroll){runOnJS(onScroll)({nativeEvent:event});}})" };
let closure_3 = { code: "(function pnpm_useScrollHandlerTs2(event,context){let[handleOnBeginDrag,onScrollBeginDrag,runOnJS]=this.__closure;handleOnBeginDrag(event,context);if(onScrollBeginDrag){runOnJS(onScrollBeginDrag)({nativeEvent:event});}})" };
let closure_4 = { code: "(function pnpm_useScrollHandlerTs3(event,context){let[handleOnEndDrag,onScrollEndDrag,runOnJS]=this.__closure;handleOnEndDrag(event,context);if(onScrollEndDrag){runOnJS(onScrollEndDrag)({nativeEvent:event});}})" };

export () => {
  let useScrollEventsHandlersDefault = scrollEventsHandlersHook;
  if (scrollEventsHandlersHook === undefined) {
    useScrollEventsHandlersDefault = useScrollEventsHandlersDefault2.useScrollEventsHandlersDefault;
  }
  const animatedRef = _mod1652.useAnimatedRef();
  const sharedValue = _mod1652.useSharedValue(0);
  const scrollEventsHandlersDefault = useScrollEventsHandlersDefault(animatedRef, sharedValue, lockableScrollableContentOffsetY);
  let workletNoop = scrollEventsHandlersDefault.handleOnScroll;
  if (undefined === workletNoop) {
    workletNoop = _mod5419.workletNoop;
  }
  let workletNoop2 = scrollEventsHandlersDefault.handleOnBeginDrag;
  if (undefined === workletNoop2) {
    workletNoop2 = _mod5419.workletNoop;
  }
  let workletNoop3 = scrollEventsHandlersDefault.handleOnEndDrag;
  if (undefined === workletNoop3) {
    workletNoop3 = _mod5419.workletNoop;
  }
  let workletNoop4 = scrollEventsHandlersDefault.handleOnMomentumEnd;
  if (undefined === workletNoop4) {
    workletNoop4 = _mod5419.workletNoop;
  }
  let workletNoop5 = scrollEventsHandlersDefault.handleOnMomentumBegin;
  if (undefined === workletNoop5) {
    workletNoop5 = _mod5419.workletNoop;
  }
  items = [_undefined2, workletNoop, onScroll, _mod1652.runOnJS];
  [tmp8, tmp9, tmp10, tmp11] = items;
  const obj3 = { onScroll: null, onBeginDrag: null, onEndDrag: null, onMomentumBegin: null, onMomentumEnd: null };
  function pnpm_useScrollHandlerTs1(nativeEvent, arg1) {
    _undefined(nativeEvent, arg1);
    if (c1) {
      const obj = { nativeEvent };
      _undefined2(tmp2)(obj);
    }
  }
  const items1 = [tmp9, tmp10, tmp11];
  pnpm_useScrollHandlerTs1.__closure = items1;
  pnpm_useScrollHandlerTs1.__workletHash = 897671126627;
  pnpm_useScrollHandlerTs1.__initData = tmp8;
  obj3.onScroll = pnpm_useScrollHandlerTs1;
  const items2 = [closure_3, workletNoop2, onScrollBeginDrag, _mod1652.runOnJS];
  [tmp12, tmp13, tmp14, tmp15] = items2;
  function pnpm_useScrollHandlerTs2(nativeEvent, arg1) {
    _undefined(nativeEvent, arg1);
    if (c1) {
      const obj = { nativeEvent };
      _undefined2(tmp2)(obj);
    }
  }
  const items3 = [tmp13, tmp14, tmp15];
  pnpm_useScrollHandlerTs2.__closure = items3;
  pnpm_useScrollHandlerTs2.__workletHash = 15541770117111;
  pnpm_useScrollHandlerTs2.__initData = tmp12;
  obj3.onBeginDrag = pnpm_useScrollHandlerTs2;
  const items4 = [closure_4, workletNoop3, onScrollEndDrag, _mod1652.runOnJS];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp16, tmp17, tmp18, tmp19] = items4;
  function pnpm_useScrollHandlerTs3(nativeEvent, arg1) {
    _undefined(nativeEvent, arg1);
    if (c1) {
      const obj = { nativeEvent };
      _undefined2(tmp2)(obj);
    }
  }
  const items5 = [tmp17, tmp18, tmp19];
  pnpm_useScrollHandlerTs3.__closure = items5;
  pnpm_useScrollHandlerTs3.__workletHash = 317489655198;
  pnpm_useScrollHandlerTs3.__initData = tmp16;
  obj3.onEndDrag = pnpm_useScrollHandlerTs3;
  obj3.onMomentumBegin = workletNoop5;
  obj3.onMomentumEnd = workletNoop4;
  const items6 = [workletNoop, workletNoop2, workletNoop3, workletNoop5, workletNoop4, onScroll, onScrollBeginDrag, onScrollEndDrag];
  const tmp3Result = _mod1652;
  return { scrollHandler: _mod1652.useAnimatedScrollHandler(obj3, items6), scrollableRef: animatedRef, scrollableContentOffsetY: sharedValue };
}