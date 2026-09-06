// _runtime/01780_useAnimatedGestureHandler.js
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { UNDETERMINED: 0, FAILED: 1, BEGAN: 2, CANCELLED: 3, ACTIVE: 4, END: 5 };
let closure_3 = {
  code: "function pnpm_useAnimatedGestureHandlerTs1(e){const{useWeb,EVENT_TYPE,handlers,context}=this.__closure;const event=useWeb?e.nativeEvent:e;if(event.state===EVENT_TYPE.BEGAN&&handlers.onStart){handlers.onStart(event,context);}if(event.state===EVENT_TYPE.ACTIVE&&handlers.onActive){handlers.onActive(event,context);}if(event.oldState===EVENT_TYPE.ACTIVE&&event.state===EVENT_TYPE.END&&handlers.onEnd){handlers.onEnd(event,context);}if(event.oldState===EVENT_TYPE.BEGAN&&event.state===EVENT_TYPE.FAILED&&handlers.onFail){handlers.onFail(event,context);}if(event.oldState===EVENT_TYPE.ACTIVE&&event.state===EVENT_TYPE.CANCELLED&&handlers.onCancel){handlers.onCancel(event,context);}if((event.oldState===EVENT_TYPE.BEGAN||event.oldState===EVENT_TYPE.ACTIVE)&&event.state!==EVENT_TYPE.BEGAN&&event.state!==EVENT_TYPE.ACTIVE&&handlers.onFinish){handlers.onFinish(event,context,event.state===EVENT_TYPE.CANCELLED||event.state===EVENT_TYPE.FAILED);}}",
};
arg5.useAnimatedGestureHandler = function useAnimatedGestureHandler(handlers, items10) {
  const _require = handlers;
  let obj = _require(context[0]);
  const handler = obj.useHandler(handlers, items10);
  context = handler.context;
  const useWeb = handler.useWeb;
  const fn = function s(nativeEvent) {
    if (useWeb) {
      nativeEvent = nativeEvent.nativeEvent;
    }
    let onStart = nativeEvent.state === useWeb.BEGAN;
    if (onStart) {
      onStart = handlers.onStart;
    }
    if (onStart) {
      handlers.onStart(nativeEvent, context);
    }
    let onActive = nativeEvent.state === tmp.ACTIVE;
    if (onActive) {
      onActive = handlers.onActive;
    }
    if (onActive) {
      handlers.onActive(nativeEvent, context);
    }
    let onEnd = nativeEvent.oldState === tmp.ACTIVE && nativeEvent.state === tmp.END;
    if (onEnd) {
      onEnd = handlers.onEnd;
    }
    if (onEnd) {
      handlers.onEnd(nativeEvent, context);
    }
    let onFail = nativeEvent.oldState === tmp.BEGAN && nativeEvent.state === tmp.FAILED;
    if (onFail) {
      onFail = handlers.onFail;
    }
    if (onFail) {
      handlers.onFail(nativeEvent, context);
    }
    let onCancel = nativeEvent.oldState === tmp.ACTIVE && nativeEvent.state === tmp.CANCELLED;
    if (onCancel) {
      onCancel = handlers.onCancel;
    }
    if (onCancel) {
      handlers.onCancel(nativeEvent, context);
    }
    let tmp22 =
      (nativeEvent.oldState !== tmp.BEGAN && nativeEvent.oldState !== tmp.ACTIVE) ||
      nativeEvent.state === tmp.BEGAN ||
      nativeEvent.state === tmp.ACTIVE;
    if (!tmp22) {
      tmp22 = !handlers.onFinish;
    }
    if (!tmp22) {
      let tmp26 = nativeEvent.state === tmp.CANCELLED;
      if (!tmp26) {
        tmp26 = nativeEvent.state === tmp.FAILED;
      }
      handlers.onFinish(nativeEvent, context, tmp26);
      const tmp25 = context;
    }
  };
  obj = { useWeb, EVENT_TYPE: useWeb, handlers, context };
  fn.__closure = obj;
  fn.__workletHash = 2401621621985;
  fn.__initData = closure_3;
  let event = fn;
  if (!useWeb) {
    event = _require(context[1]).useEvent(fn, ["onGestureHandlerStateChange", "onGestureHandlerEvent"], tmp4);
    const tmpResult = _require(context[1]);
  }
  return event;
};
