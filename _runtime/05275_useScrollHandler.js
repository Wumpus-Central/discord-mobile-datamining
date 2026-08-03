const require = arg1;
let dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useScrollHandlerTs1(event,context){const{handleOnScroll,onScroll,runOnJS}=this.__closure;handleOnScroll(event,context);if(onScroll){runOnJS(onScroll)({nativeEvent:event});}}" };
let closure_3 = { code: "function pnpm_useScrollHandlerTs2(event,context){const{handleOnBeginDrag,onScrollBeginDrag,runOnJS}=this.__closure;handleOnBeginDrag(event,context);if(onScrollBeginDrag){runOnJS(onScrollBeginDrag)({nativeEvent:event});}}" };
let closure_4 = { code: "function pnpm_useScrollHandlerTs3(event,context){const{handleOnEndDrag,onScrollEndDrag,runOnJS}=this.__closure;handleOnEndDrag(event,context);if(onScrollEndDrag){runOnJS(onScrollEndDrag)({nativeEvent:event});}}" };
arg5.useScrollHandler = (arg0, onScroll, onScrollBeginDrag, onScrollEndDrag) => {
  let useScrollEventsHandlersDefault = arg0;
  if (arg0 === undefined) {
    useScrollEventsHandlersDefault = _require(5276).useScrollEventsHandlersDefault;
  }
  _require = onScroll;
  const dependencyMap = onScrollBeginDrag;
  let closure_2 = onScrollEndDrag;
  let workletNoop;
  let workletNoop2;
  let workletNoop3;
  let obj = _require(1606);
  const animatedRef = obj.useAnimatedRef();
  let obj1 = _require(1606);
  const sharedValue = obj1.useSharedValue(0);
  const scrollEventsHandlersDefault = useScrollEventsHandlersDefault(animatedRef, sharedValue, arg4);
  workletNoop = scrollEventsHandlersDefault.handleOnScroll;
  if (undefined === workletNoop) {
    workletNoop = tmp3(5266).workletNoop;
  }
  workletNoop2 = scrollEventsHandlersDefault.handleOnBeginDrag;
  if (undefined === workletNoop2) {
    workletNoop2 = tmp3(5266).workletNoop;
  }
  workletNoop3 = scrollEventsHandlersDefault.handleOnEndDrag;
  if (undefined === workletNoop3) {
    workletNoop3 = tmp3(5266).workletNoop;
  }
  let workletNoop4 = scrollEventsHandlersDefault.handleOnMomentumEnd;
  if (undefined === workletNoop4) {
    workletNoop4 = tmp3(5266).workletNoop;
  }
  let workletNoop5 = scrollEventsHandlersDefault.handleOnMomentumBegin;
  if (undefined === workletNoop5) {
    workletNoop5 = tmp3(5266).workletNoop;
  }
  obj = { scrollHandler: null, scrollableRef: null, scrollableContentOffsetY: null };
  obj = { onScroll: null, onBeginDrag: null, onEndDrag: null, onMomentumBegin: null, onMomentumEnd: null };
  const fn = function v(arg0, arg1) {
    workletNoop(arg0, arg1);
    if (onScroll) {
      let obj = onScroll(onScrollBeginDrag[1]);
      obj = { nativeEvent: null };
      obj[0] = arg0;
      obj.runOnJS(tmp2)(obj);
    }
  };
  obj1 = { handleOnScroll: workletNoop, onScroll, runOnJS: tmp3(1606).runOnJS };
  fn.__closure = obj1;
  fn.__workletHash = 13105350120634;
  fn.__initData = closure_2;
  obj[0] = fn;
  const fn2 = function _(arg0, arg1) {
    workletNoop2(arg0, arg1);
    if (onScrollBeginDrag) {
      let obj = onScroll(onScrollBeginDrag[1]);
      obj = { nativeEvent: null };
      obj[0] = arg0;
      obj.runOnJS(tmp2)(obj);
    }
  };
  const tmp3Result = _require(1606);
  fn2.__closure = { handleOnBeginDrag: workletNoop2, onScrollBeginDrag, runOnJS: _require(1606).runOnJS };
  fn2.__workletHash = 803385440782;
  fn2.__initData = workletNoop;
  obj[1] = fn2;
  class O {
    constructor(arg0, arg1) {
      tmp = workletNoop(arg0, onScroll);
      if (closure_2) {
        tmp3 = closure_0;
        tmp4 = closure_1;
        obj = closure_0(closure_1[1]);
        obj = { nativeEvent: null };
        obj[0] = arg0;
        tmp5 = obj.runOnJS(tmp2)(obj);
      }
      return;
    }
  }
  const obj2 = { handleOnBeginDrag: workletNoop2, onScrollBeginDrag, runOnJS: _require(1606).runOnJS };
  O.__closure = { handleOnEndDrag: workletNoop3, onScrollEndDrag, runOnJS: _require(1606).runOnJS };
  O.__workletHash = 3274737678599;
  O.__initData = workletNoop2;
  obj[2] = O;
  obj[3] = workletNoop5;
  obj[4] = workletNoop4;
  const items = [workletNoop, workletNoop2, workletNoop3, workletNoop5, workletNoop4, onScroll, onScrollBeginDrag, onScrollEndDrag];
  obj[0] = tmp3Result.useAnimatedScrollHandler(obj, items);
  obj[1] = animatedRef;
  obj[2] = sharedValue;
  return obj;
};