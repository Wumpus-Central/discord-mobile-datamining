// _runtime/01761_useAnimatedScrollHandler.js
let require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useAnimatedScrollHandlerTs1(event){const{scrollHandlers,context}=this.__closure;const{onScroll:onScroll,onBeginDrag:onBeginDrag,onEndDrag:onEndDrag,onMomentumBegin:onMomentumBegin,onMomentumEnd:onMomentumEnd}=scrollHandlers;if(onScroll&&event.eventName.endsWith('onScroll')){onScroll(event,context);}else if(onBeginDrag&&event.eventName.endsWith('onScrollBeginDrag')){onBeginDrag(event,context);}else if(onEndDrag&&event.eventName.endsWith('onScrollEndDrag')){onEndDrag(event,context);}else if(onMomentumBegin&&event.eventName.endsWith('onMomentumScrollBegin')){onMomentumBegin(event,context);}else if(onMomentumEnd&&event.eventName.endsWith('onMomentumScrollEnd')){onMomentumEnd(event,context);}}" };
arg5.useAnimatedScrollHandler = function useAnimatedScrollHandler(A, items) {
  let tmp = A;
  if (typeof A === "function") {
    let obj = { onScroll: null };
    obj[0] = A;
    tmp = obj;
  }
  const require = tmp;
  obj = require(context[0]);
  const handler = obj.useHandler(tmp, items);
  context = handler.context;
  items = ["onScroll"];
  if (undefined !== tmp.onBeginDrag) {
    items.push("onScrollBeginDrag");
  }
  if (undefined !== tmp.onEndDrag) {
    items.push("onScrollEndDrag");
  }
  if (undefined !== tmp.onMomentumBegin) {
    items.push("onMomentumScrollBegin");
  }
  if (undefined !== tmp.onMomentumEnd) {
    items.push("onMomentumScrollEnd");
  }
  const fn = function l(eventName) {
    let onBeginDrag;
    let onEndDrag;
    let onMomentumBegin;
    let onMomentumEnd;
    let onScroll;
    ({ onScroll, onBeginDrag, onEndDrag, onMomentumBegin, onMomentumEnd } = closure_0);
    if (onScroll) {
      eventName = eventName.eventName;
      if (eventName.endsWith("onScroll")) {
        onScroll(eventName, context);
      }
    }
    if (onBeginDrag) {
      const eventName2 = eventName.eventName;
      if (eventName2.endsWith("onScrollBeginDrag")) {
        onBeginDrag(eventName, context);
      }
    }
    if (onEndDrag) {
      const eventName3 = eventName.eventName;
      if (eventName3.endsWith("onScrollEndDrag")) {
        onEndDrag(eventName, context);
      }
    }
    if (onMomentumBegin) {
      const eventName4 = eventName.eventName;
      if (eventName4.endsWith("onMomentumScrollBegin")) {
        onMomentumBegin(eventName, context);
      }
    }
    let endsWithResult = onMomentumEnd;
    if (onMomentumEnd) {
      const eventName5 = eventName.eventName;
      endsWithResult = eventName5.endsWith("onMomentumScrollEnd");
    }
    if (endsWithResult) {
      onMomentumEnd(eventName, context);
    }
  };
  fn.__closure = { scrollHandlers: tmp, context };
  fn.__workletHash = 480432859268;
  fn.__initData = closure_2;
  return require(context[1]).useEvent(fn, items, handler.doDependenciesDiffer);
};