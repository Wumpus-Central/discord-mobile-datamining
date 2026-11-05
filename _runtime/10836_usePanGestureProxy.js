// _runtime/10836_usePanGestureProxy.js
import _mod19 from "metro/00019__.js";
import LegacyBaseButton from "05430_LegacyBaseButton.js";

const useMemo = _mod19.useMemo;
let closure_3 = { code: "(function pnpm_usePanGestureProxyTs1(e){let[userDefinedConflictGestures]=this.__closure;if(userDefinedConflictGestures.onBegin)userDefinedConflictGestures.onBegin(e);})" };
let closure_4 = { code: "(function pnpm_usePanGestureProxyTs2(e){let[onGestureStart,userDefinedConflictGestures]=this.__closure;onGestureStart(e);if(userDefinedConflictGestures.onStart)userDefinedConflictGestures.onStart(e);})" };
let closure_5 = { code: "(function pnpm_usePanGestureProxyTs3(e){let[onGestureUpdate,userDefinedConflictGestures]=this.__closure;onGestureUpdate(e);if(userDefinedConflictGestures.onUpdate)userDefinedConflictGestures.onUpdate(e);})" };
let closure_6 = { code: "(function pnpm_usePanGestureProxyTs4(e,success){let[onGestureEnd,userDefinedConflictGestures]=this.__closure;onGestureEnd(e,success);if(userDefinedConflictGestures.onEnd)userDefinedConflictGestures.onEnd(e,success);})" };
let closure_7 = { code: "(function pnpm_usePanGestureProxyTs5(e,success){let[userDefinedConflictGestures]=this.__closure;if(userDefinedConflictGestures.onFinalize)userDefinedConflictGestures.onFinalize(e,success);})" };

export (onConfigurePanGesture) => {
  onConfigurePanGesture = onConfigurePanGesture.onConfigurePanGesture;
  const onGestureStart = onConfigurePanGesture.onGestureStart;
  const onGestureUpdate = onConfigurePanGesture.onGestureUpdate;
  const onGestureEnd = onConfigurePanGesture.onGestureEnd;
  let options = onConfigurePanGesture.options;
  if (undefined === options) {
    options = {};
  }
  items = [onGestureStart, onGestureUpdate, onGestureEnd, onConfigurePanGesture];
  const tmp = onGestureUpdate(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const withTestIdResult = Gesture.Pan().withTestId("rnrc-gesture-handler");
    c0 = withTestIdResult;
    const obj = { onBegin: "Array", onStart: "id", onUpdate: "useMemo", onEnd: "useCallback", onFinalize: "HermesInternal" };
    c1 = obj;
    withTestIdResult.onBegin = (onBegin) => {
      c1.onBegin = onBegin;
      return c0;
    };
    withTestIdResult.onStart = (onStart) => {
      c1.onStart = onStart;
      return c0;
    };
    withTestIdResult.onUpdate = (onUpdate) => {
      c1.onUpdate = onUpdate;
      return c0;
    };
    withTestIdResult.onEnd = (onEnd) => {
      c1.onEnd = onEnd;
      return c0;
    };
    withTestIdResult.onFinalize = (onFinalize) => {
      c1.onFinalize = onFinalize;
      return c0;
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
    items = [closure_3, obj];
    [tmp2, tmp3] = items;
    function pnpm_usePanGestureProxyTs1(arg0) {
      if (_undefined.onBegin) {
        _undefined.onBegin(arg0);
      }
    }
    const items1 = [tmp3];
    pnpm_usePanGestureProxyTs1.__closure = items1;
    pnpm_usePanGestureProxyTs1.__workletHash = 5525534194300;
    pnpm_usePanGestureProxyTs1.__initData = tmp2;
    const PanResult = Gesture.Pan();
    const items2 = [closure_4, onGestureStart, obj];
    [tmp4, tmp5, tmp6] = items2;
    function pnpm_usePanGestureProxyTs2(arg0) {
      _undefined(arg0);
      if (_undefined2.onStart) {
        _undefined2.onStart(arg0);
      }
    }
    const items3 = [tmp5, tmp6];
    pnpm_usePanGestureProxyTs2.__closure = items3;
    pnpm_usePanGestureProxyTs2.__workletHash = 7970688141516;
    pnpm_usePanGestureProxyTs2.__initData = tmp4;
    const onBeginResult = withTestIdResult.onBegin(pnpm_usePanGestureProxyTs1);
    const items4 = [closure_5, onGestureUpdate, obj];
    [tmp7, tmp8, tmp9] = items4;
    function pnpm_usePanGestureProxyTs3(arg0) {
      _undefined(arg0);
      if (_undefined2.onUpdate) {
        _undefined2.onUpdate(arg0);
      }
    }
    const items5 = [tmp8, tmp9];
    pnpm_usePanGestureProxyTs3.__closure = items5;
    pnpm_usePanGestureProxyTs3.__workletHash = 2256335785357;
    pnpm_usePanGestureProxyTs3.__initData = tmp7;
    const onStartResult = withTestIdResult.onBegin(pnpm_usePanGestureProxyTs1).onStart(pnpm_usePanGestureProxyTs2);
    const items6 = [closure_6, onGestureEnd, obj];
    c1 = undefined;
    [tmp10, tmp11, tmp12] = items6;
    function pnpm_usePanGestureProxyTs4(arg0, arg1) {
      _undefined(arg0, arg1);
      if (_undefined2.onEnd) {
        _undefined2.onEnd(arg0, arg1);
      }
    }
    const items7 = [tmp11, tmp12];
    pnpm_usePanGestureProxyTs4.__closure = items7;
    pnpm_usePanGestureProxyTs4.__workletHash = 14431046418597;
    pnpm_usePanGestureProxyTs4.__initData = tmp10;
    const onUpdateResult = withTestIdResult.onBegin(pnpm_usePanGestureProxyTs1).onStart(pnpm_usePanGestureProxyTs2).onUpdate(pnpm_usePanGestureProxyTs3);
    const items8 = [closure_7, obj];
    c0 = undefined;
    [tmp13, tmp14] = items8;
    function pnpm_usePanGestureProxyTs5(arg0, arg1) {
      if (_undefined.onFinalize) {
        _undefined.onFinalize(arg0, arg1);
      }
    }
    const items9 = [tmp14];
    pnpm_usePanGestureProxyTs5.__closure = items9;
    pnpm_usePanGestureProxyTs5.__workletHash = 8527927500216;
    pnpm_usePanGestureProxyTs5.__initData = tmp13;
    withTestIdResult.onBegin(pnpm_usePanGestureProxyTs1).onStart(pnpm_usePanGestureProxyTs2).onUpdate(pnpm_usePanGestureProxyTs3).onEnd(pnpm_usePanGestureProxyTs4).onFinalize(pnpm_usePanGestureProxyTs5);
    return withTestIdResult;
  }, items);
  const updateGestureConfig = onConfigurePanGesture(onGestureStart[2]).useUpdateGestureConfig(tmp, options);
  return tmp;
}