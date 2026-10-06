// _runtime/metro/10527__.js
import react from "../00019_react.js";

const useMemo = react.useMemo;
let closure_3 = {
  code: "function pnpm_usePanGestureProxyTs1(e){const{userDefinedConflictGestures}=this.__closure;if(userDefinedConflictGestures.onBegin)userDefinedConflictGestures.onBegin(e);}",
};
let closure_4 = {
  code: "function pnpm_usePanGestureProxyTs2(e){const{onGestureStart,userDefinedConflictGestures}=this.__closure;onGestureStart(e);if(userDefinedConflictGestures.onStart)userDefinedConflictGestures.onStart(e);}",
};
let closure_5 = {
  code: "function pnpm_usePanGestureProxyTs3(e){const{onGestureUpdate,userDefinedConflictGestures}=this.__closure;onGestureUpdate(e);if(userDefinedConflictGestures.onUpdate)userDefinedConflictGestures.onUpdate(e);}",
};
let closure_6 = {
  code: "function pnpm_usePanGestureProxyTs4(e,success){const{onGestureEnd,userDefinedConflictGestures}=this.__closure;onGestureEnd(e,success);if(userDefinedConflictGestures.onEnd)userDefinedConflictGestures.onEnd(e,success);}",
};
let closure_7 = {
  code: "function pnpm_usePanGestureProxyTs5(e,success){const{userDefinedConflictGestures}=this.__closure;if(userDefinedConflictGestures.onFinalize)userDefinedConflictGestures.onFinalize(e,success);}",
};

export const usePanGestureProxy = (onConfigurePanGesture) => {
  onConfigurePanGesture = onConfigurePanGesture.onConfigurePanGesture;
  const onGestureStart = onConfigurePanGesture.onGestureStart;
  const onGestureUpdate = onConfigurePanGesture.onGestureUpdate;
  const onGestureEnd = onConfigurePanGesture.onGestureEnd;
  let options = onConfigurePanGesture.options;
  if (undefined === options) {
    options = {};
  }
  const items = [onGestureStart, onGestureUpdate, onGestureEnd, onConfigurePanGesture];
  const tmp = onGestureUpdate(() => {
    let obj;
    let onBegin;
    let onEnd;
    let onFinalize;
    let onStart;
    let onUpdate;
    const Gesture = onConfigurePanGesture(onGestureStart[1]).Gesture;
    const PanResult = Gesture.Pan();
    const withTestIdResult = PanResult.withTestId("rnrc-gesture-handler");
    onConfigurePanGesture = withTestIdResult;
    const userDefinedConflictGestures = {
      onBegin: "Array",
      onStart: "unicodeVersion",
      onUpdate: "useEffect",
      onEnd: "value",
      onFinalize: "IconComponent",
    };
    withTestIdResult.onBegin = (onBegin) => {
      obj.onBegin = onBegin;
      return withTestIdResult;
    };
    withTestIdResult.onStart = (onStart) => {
      obj.onStart = onStart;
      return withTestIdResult;
    };
    withTestIdResult.onUpdate = (onUpdate) => {
      obj.onUpdate = onUpdate;
      return withTestIdResult;
    };
    withTestIdResult.onEnd = (onEnd) => {
      obj.onEnd = onEnd;
      return withTestIdResult;
    };
    withTestIdResult.onFinalize = (onFinalize) => {
      obj.onFinalize = onFinalize;
      return withTestIdResult;
    };
    ({ onBegin, onStart, onUpdate, onEnd, onFinalize } = withTestIdResult);
    if (onConfigurePanGesture) {
      onConfigurePanGesture(withTestIdResult);
    }
    withTestIdResult.onBegin = onBegin;
    withTestIdResult.onStart = onStart;
    withTestIdResult.onUpdate = onUpdate;
    withTestIdResult.onEnd = onEnd;
    withTestIdResult.onFinalize = onFinalize;
    class C {
      constructor(arg0) {
        if (obj.onBegin) {
          obj.onBegin(arg0);
        }
      }
    }
    C.__closure = { userDefinedConflictGestures };
    C.__workletHash = 7286111968229;
    C.__initData = onGestureEnd;
    const onBeginResult = withTestIdResult.onBegin(C);
    class D {
      constructor(arg0) {
        onGestureStart(arg0);
        if (obj.onStart) {
          obj.onStart(arg0);
        }
      }
    }
    const obj2 = { onGestureStart: userDefinedConflictGestures, userDefinedConflictGestures };
    D.__closure = obj2;
    D.__workletHash = 2969501037173;
    D.__initData = __initData;
    const fn = function p(arg0) {
      onGestureUpdate(arg0);
      if (obj.onUpdate) {
        obj.onUpdate(arg0);
      }
    };
    const obj3 = { onGestureUpdate, userDefinedConflictGestures };
    fn.__closure = obj3;
    fn.__workletHash = 14406733755860;
    fn.__initData = __initData2;
    const onStartResult = onBeginResult.onStart(D);
    const fn2 = function c(arg0, arg1) {
      onGestureEnd(arg0, arg1);
      if (obj.onEnd) {
        obj.onEnd(arg0, arg1);
      }
    };
    const obj4 = { onGestureEnd, userDefinedConflictGestures };
    fn2.__closure = obj4;
    fn2.__workletHash = 3800149117372;
    fn2.__initData = __initData3;
    const onUpdateResult = onStartResult.onUpdate(fn);
    const fn3 = function e(arg0, arg1) {
      if (obj.onFinalize) {
        obj.onFinalize(arg0, arg1);
      }
    };
    fn3.__closure = { userDefinedConflictGestures };
    fn3.__workletHash = 16525776198753;
    fn3.__initData = __initData4;
    const onEndResult = onUpdateResult.onEnd(fn2);
    onEndResult.onFinalize(fn3);
    return withTestIdResult;
  }, items);
  let obj2 = onConfigurePanGesture(onGestureStart[2]);
  const updateGestureConfig = obj2.useUpdateGestureConfig(tmp, options);
  return tmp;
};
