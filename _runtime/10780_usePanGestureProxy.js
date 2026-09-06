// === Module 10780: usePanGestureProxy ===

// Module 10780 (usePanGestureProxy)
import noop from "noop" /* 19 */;

const useMemo = noop.useMemo;
let closure_3 = { code: "function pnpm_usePanGestureProxyTs1(e){const{userDefinedConflictGestures}=this.__closure;if(userDefinedConflictGestures.onBegin)userDefinedConflictGestures.onBegin(e);}" };
let closure_4 = { code: "function pnpm_usePanGestureProxyTs2(e){const{onGestureStart,userDefinedConflictGestures}=this.__closure;onGestureStart(e);if(userDefinedConflictGestures.onStart)userDefinedConflictGestures.onStart(e);}" };
let closure_5 = { code: "function pnpm_usePanGestureProxyTs3(e){const{onGestureUpdate,userDefinedConflictGestures}=this.__closure;onGestureUpdate(e);if(userDefinedConflictGestures.onUpdate)userDefinedConflictGestures.onUpdate(e);}" };
let closure_6 = { code: "function pnpm_usePanGestureProxyTs4(e,success){const{onGestureEnd,userDefinedConflictGestures}=this.__closure;onGestureEnd(e,success);if(userDefinedConflictGestures.onEnd)userDefinedConflictGestures.onEnd(e,success);}" };
let closure_7 = { code: "function pnpm_usePanGestureProxyTs5(e,success){const{userDefinedConflictGestures}=this.__closure;if(userDefinedConflictGestures.onFinalize)userDefinedConflictGestures.onFinalize(e,success);}" };

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
    const Gesture = onConfigurePanGesture(onGestureStart[1]).Gesture;
    const withTestIdResult = Gesture.Pan().withTestId("rnrc-gesture-handler");
    onConfigurePanGesture = withTestIdResult;
    let obj = { onBegin: "call", onStart: "call", onUpdate: "withTiming", onEnd: "getChannel", onFinalize: "channelId" };
    withTestIdResult.onBegin = (onBegin) => {
      obj.onBegin = onBegin;
      return closure_0;
    };
    withTestIdResult.onStart = (onStart) => {
      obj.onStart = onStart;
      return closure_0;
    };
    withTestIdResult.onUpdate = (onUpdate) => {
      obj.onUpdate = onUpdate;
      return closure_0;
    };
    withTestIdResult.onEnd = (onEnd) => {
      obj.onEnd = onEnd;
      return closure_0;
    };
    withTestIdResult.onFinalize = (onFinalize) => {
      obj.onFinalize = onFinalize;
      return closure_0;
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
        obj = closure_1;
        if (closure_1.onBegin) {
          tmp = arg0;
          onBeginResult = obj.onBegin(arg0);
        }
        return;
      }
    }
    C.__closure = { userDefinedConflictGestures: obj };
    C.__workletHash = 7286111968229;
    C.__initData = onGestureEnd;
    const PanResult = Gesture.Pan();
    class D {
      constructor(arg0) {
        tmp = closure_1(arg0);
        obj = closure_1;
        if (closure_1.onStart) {
          onStartResult = obj.onStart(arg0);
        }
        return;
      }
    }
    obj = { onGestureStart: obj, userDefinedConflictGestures: obj };
    D.__closure = obj;
    D.__workletHash = 2969501037173;
    D.__initData = closure_1_4;
    const onBeginResult = withTestIdResult.onBegin(C);
    const fn = function p(arg0) {
      closure_1_2(arg0);
      if (obj.onUpdate) {
        obj.onUpdate(arg0);
      }
    };
    fn.__closure = { onGestureUpdate, userDefinedConflictGestures: obj };
    fn.__workletHash = 14406733755860;
    fn.__initData = closure_1_5;
    obj1 = { onGestureUpdate, userDefinedConflictGestures: obj };
    const onStartResult = withTestIdResult.onBegin(C).onStart(D);
    const fn2 = function c(arg0, arg1) {
      closure_1_3(arg0, arg1);
      if (obj.onEnd) {
        obj.onEnd(arg0, arg1);
      }
    };
    fn2.__closure = { onGestureEnd, userDefinedConflictGestures: obj };
    fn2.__workletHash = 3800149117372;
    fn2.__initData = closure_1_6;
    const obj2 = { onGestureEnd, userDefinedConflictGestures: obj };
    const onUpdateResult = withTestIdResult.onBegin(C).onStart(D).onUpdate(fn);
    const fn3 = function e(arg0, arg1) {
      if (obj.onFinalize) {
        obj.onFinalize(arg0, arg1);
      }
    };
    fn3.__closure = { userDefinedConflictGestures: obj };
    fn3.__workletHash = 16525776198753;
    fn3.__initData = closure_1_7;
    withTestIdResult.onBegin(C).onStart(D).onUpdate(fn).onEnd(fn2).onFinalize(fn3);
    return withTestIdResult;
  }, items);
  const updateGestureConfig = onConfigurePanGesture(onGestureStart[2]).useUpdateGestureConfig(tmp, options);
  return tmp;
};