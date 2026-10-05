// === Module 1798: ? ===

// Module 1798
import _mod1788 from "module_1788" /* 1788 */;
import react from "react" /* 1790 */;

const __initData = { code: "function pnpm_useAnimatedScrollHandlerTs1(event){const{scrollHandlers,context}=this.__closure;const{onScroll:onScroll,onBeginDrag:onBeginDrag,onEndDrag:onEndDrag,onMomentumBegin:onMomentumBegin,onMomentumEnd:onMomentumEnd}=scrollHandlers;if(onScroll&&event.eventName.endsWith('onScroll')){onScroll(event,context);}else if(onBeginDrag&&event.eventName.endsWith('onScrollBeginDrag')){onBeginDrag(event,context);}else if(onEndDrag&&event.eventName.endsWith('onScrollEndDrag')){onEndDrag(event,context);}else if(onMomentumBegin&&event.eventName.endsWith('onMomentumScrollBegin')){onMomentumBegin(event,context);}else if(onMomentumEnd&&event.eventName.endsWith('onMomentumScrollEnd')){onMomentumEnd(event,context);}}" };

export const useAnimatedScrollHandler = function useAnimatedScrollHandler(fn, items) {
  let tmp = fn;
  if (typeof fn === "function") {
    let obj2 = { onScroll: fn };
    tmp = obj2;
  }
  obj2 = tmp;
  const obj = _mod1788;
  const handler = obj.useHandler(tmp, items);
  const context = handler.context;
  items = ["onScroll"];
  const doDependenciesDiffer = handler.doDependenciesDiffer;
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
  fn = function l(eventName) {
    let onBeginDrag;
    let onEndDrag;
    let onMomentumBegin;
    let onMomentumEnd;
    let onScroll;
    ({ onScroll, onBeginDrag, onEndDrag, onMomentumBegin, onMomentumEnd } = obj2);
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
    if (endsWithResult) {
      const eventName5 = eventName.eventName;
      endsWithResult = eventName5.endsWith("onMomentumScrollEnd");
    }
    if (endsWithResult) {
      onMomentumEnd(eventName, context);
    }
  };
  fn.__closure = { scrollHandlers: tmp, context };
  fn.__workletHash = 480432859268;
  fn.__initData = __initData;
  const tmp2Result = react;
  return tmp2Result.useEvent(fn, items, doDependenciesDiffer);
};