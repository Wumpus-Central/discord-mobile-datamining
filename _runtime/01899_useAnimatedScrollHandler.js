// === Module 1899: useAnimatedScrollHandler ===

// Module 1899 (useAnimatedScrollHandler)
import _mod1900 from "module_1900" /* 1900 */;
import _mod1902 from "module_1902" /* 1902 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "(function pnpm_useAnimatedScrollHandlerTs1(event){let[scrollHandlers,context]=this.__closure;const{onScroll:onScroll,onBeginDrag:onBeginDrag,onEndDrag:onEndDrag,onMomentumBegin:onMomentumBegin,onMomentumEnd:onMomentumEnd}=scrollHandlers;if(onScroll&&event.eventName.endsWith('onScroll')){onScroll(event,context);}else if(onBeginDrag&&event.eventName.endsWith('onScrollBeginDrag')){onBeginDrag(event,context);}else if(onEndDrag&&event.eventName.endsWith('onScrollEndDrag')){onEndDrag(event,context);}else if(onMomentumBegin&&event.eventName.endsWith('onMomentumScrollBegin')){onMomentumBegin(event,context);}else if(onMomentumEnd&&event.eventName.endsWith('onMomentumScrollEnd')){onMomentumEnd(event,context);}})" };

export function useAnimatedScrollHandler(ChannelListLegendListTsx1, items6) {
  let tmp = ChannelListLegendListTsx1;
  if (typeof ChannelListLegendListTsx1 === "function") {
    const obj2 = { onScroll: ChannelListLegendListTsx1 };
    tmp = obj2;
  }
  const handler = _mod1900.useHandler(tmp, items6);
  items = ["onScroll"];
  ({ context, doDependenciesDiffer } = handler);
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
  const items1 = [closure_2, tmp, context];
  c0 = undefined;
  c1 = undefined;
  [tmp9, tmp10, tmp11] = items1;
  function pnpm_useAnimatedScrollHandlerTs1(eventName) {
    ({ onScroll, onBeginDrag, onEndDrag, onMomentumBegin, onMomentumEnd } = c0);
    if (onScroll) {
      eventName = eventName.eventName;
      if (eventName.endsWith("onScroll")) {
        onScroll(eventName, c1);
      }
    }
    if (onBeginDrag) {
      const eventName2 = eventName.eventName;
      if (eventName2.endsWith("onScrollBeginDrag")) {
        onBeginDrag(eventName, c1);
      }
    }
    if (onEndDrag) {
      const eventName3 = eventName.eventName;
      if (eventName3.endsWith("onScrollEndDrag")) {
        onEndDrag(eventName, c1);
      }
    }
    if (onMomentumBegin) {
      const eventName4 = eventName.eventName;
      if (eventName4.endsWith("onMomentumScrollBegin")) {
        onMomentumBegin(eventName, c1);
      }
    }
    let endsWithResult = onMomentumEnd;
    if (onMomentumEnd) {
      const eventName5 = eventName.eventName;
      endsWithResult = eventName5.endsWith("onMomentumScrollEnd");
    }
    if (endsWithResult) {
      onMomentumEnd(eventName, c1);
    }
  }
  const items2 = [tmp10, tmp11];
  pnpm_useAnimatedScrollHandlerTs1.__closure = items2;
  pnpm_useAnimatedScrollHandlerTs1.__workletHash = 9800335867869;
  pnpm_useAnimatedScrollHandlerTs1.__initData = tmp9;
  return _mod1902.useEvent(pnpm_useAnimatedScrollHandlerTs1, items, doDependenciesDiffer);
}