// _runtime/metro/01787__.js
const require = globalThis.__r;
let _require;

let closure_2 = { UNDETERMINED: 0, FAILED: 1, BEGAN: 2, CANCELLED: 3, ACTIVE: 4, END: 5 };
const __initData = {
  code: "function pnpm_useAnimatedGestureHandlerTs1(e){const{useWeb,EVENT_TYPE,handlers,context}=this.__closure;const event=useWeb?e.nativeEvent:e;if(event.state===EVENT_TYPE.BEGAN&&handlers.onStart){handlers.onStart(event,context);}if(event.state===EVENT_TYPE.ACTIVE&&handlers.onActive){handlers.onActive(event,context);}if(event.oldState===EVENT_TYPE.ACTIVE&&event.state===EVENT_TYPE.END&&handlers.onEnd){handlers.onEnd(event,context);}if(event.oldState===EVENT_TYPE.BEGAN&&event.state===EVENT_TYPE.FAILED&&handlers.onFail){handlers.onFail(event,context);}if(event.oldState===EVENT_TYPE.ACTIVE&&event.state===EVENT_TYPE.CANCELLED&&handlers.onCancel){handlers.onCancel(event,context);}if((event.oldState===EVENT_TYPE.BEGAN||event.oldState===EVENT_TYPE.ACTIVE)&&event.state!==EVENT_TYPE.BEGAN&&event.state!==EVENT_TYPE.ACTIVE&&handlers.onFinish){handlers.onFinish(event,context,event.state===EVENT_TYPE.CANCELLED||event.state===EVENT_TYPE.FAILED);}}",
};

export const useAnimatedGestureHandler = function useAnimatedGestureHandler(handlers, items10) {
  let context;
  _require = handlers;
  const obj = require("01788__.js");
  const handler = obj.useHandler(handlers, items10);
  const tmp2 = context;
  context = handler.context;
  const useWeb = handler.useWeb;
  const fn = function s(nativeEvent) {
    if (useWeb) {
      nativeEvent = nativeEvent.nativeEvent;
    }
    const onStart = nativeEvent.state === useWeb.BEGAN && handlers.onStart;
    if (onStart) {
      handlers.onStart(nativeEvent, context);
    }
    const onActive = nativeEvent.state === useWeb.ACTIVE && handlers.onActive;
    if (onActive) {
      handlers.onActive(nativeEvent, context);
    }
    const onEnd = nativeEvent.oldState === useWeb.ACTIVE && nativeEvent.state === useWeb.END && handlers.onEnd;
    if (onEnd) {
      handlers.onEnd(nativeEvent, context);
    }
    const onFail = nativeEvent.oldState === useWeb.BEGAN && nativeEvent.state === useWeb.FAILED && handlers.onFail;
    if (onFail) {
      handlers.onFail(nativeEvent, context);
    }
    const onCancel =
      nativeEvent.oldState === useWeb.ACTIVE && nativeEvent.state === useWeb.CANCELLED && handlers.onCancel;
    if (onCancel) {
      handlers.onCancel(nativeEvent, context);
    }
    const tmp22 =
      (nativeEvent.oldState !== useWeb.BEGAN && nativeEvent.oldState !== useWeb.ACTIVE) ||
      nativeEvent.state === useWeb.BEGAN ||
      nativeEvent.state === useWeb.ACTIVE ||
      !handlers.onFinish;
    if (!tmp22) {
      let tmp26 = nativeEvent.state === useWeb.CANCELLED;
      const onFinish = handlers.onFinish;
      if (!tmp26) {
        tmp26 = nativeEvent.state === useWeb.FAILED;
      }
      onFinish(nativeEvent, context, tmp26);
    }
  };
  const obj2 = { useWeb, EVENT_TYPE: useWeb, handlers, context };
  fn.__closure = obj2;
  fn.__workletHash = 2401621621985;
  fn.__initData = __initData;
  let event = fn;
  const tmp = _require;
  if (!useWeb) {
    const tmpResult = tmp(tmp2[1]);
    event = tmpResult.useEvent(fn, ["onGestureHandlerStateChange", "onGestureHandlerEvent"], tmp4);
  }
  return event;
};
