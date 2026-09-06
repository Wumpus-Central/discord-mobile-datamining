// === Module 6742: ? ===

// Module 6742
import _mod6698 from "module_6698" /* 6698 */;
import eventHandler from "eventHandler" /* 6741 */;
import noop from "module_19" /* 19 */;

({ useEffect: c2, useMemo: c3, useRef: closure_4 } = noop);
let closure_5 = ["onGestureHandlerReanimatedEvent", "onGestureHandlerReanimatedStateChange", "onGestureHandlerReanimatedTouchEvent"];
const onUpdate = function n() {

};
onUpdate.__closure = {};
onUpdate.__workletHash = 763644533783;
onUpdate.__initData = { code: "function pnpm_useReanimatedEventHandlerTs1(){}" };
let Reanimated = _mod6698.Reanimated;
let mutable;
if (Reanimated != null) {
  mutable = Reanimated.makeMutable({});
}
function deleteHandlerEventEntry(arg0) {
  delete tmp2[tmp];
}
deleteHandlerEventEntry.__closure = { lastUpdateEventMap: mutable };
deleteHandlerEventEntry.__workletHash = 8348834805583;
deleteHandlerEventEntry.__initData = { code: "function deleteHandlerEventEntry_Pnpm_useReanimatedEventHandlerTs2(handlerTag){const{lastUpdateEventMap}=this.__closure;delete lastUpdateEventMap.value[handlerTag];}" };
const __initData = { code: "function pnpm_useReanimatedEventHandlerTs3(event){const{lastUpdateEventMap,eventHandler,handlerTag,workletizedHandlers,changeEventCalculator,fillInDefaultValues}=this.__closure;let context=lastUpdateEventMap.value[event.handlerTag];if(context===undefined){context={lastUpdateEvent:undefined};lastUpdateEventMap.value[event.handlerTag]=context;}eventHandler(handlerTag,event,workletizedHandlers,changeEventCalculator,context,false,fillInDefaultValues);}" };

export const useReanimatedEventHandler = function useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, changeEventCalculator, fillInDefaultValues) {
  _require = handlerTag;
  dependencyMap = memoizedGestureCallbacks;
  closure_2 = changeEventCalculator;
  closure_3 = fillInDefaultValues;
  const items = [memoizedGestureCallbacks];
  let tmp = closure_3(() => {
    const Reanimated = _mod6698.Reanimated;
    let isWorkletFunctionResult;
    if (Reanimated != null) {
      isWorkletFunctionResult = Reanimated.isWorkletFunction(memoizedGestureCallbacks.onUpdate);
    }
    if (isWorkletFunctionResult) {
      let obj = tmp3;
    } else {
      obj = {};
      const merged = Object.assign(tmp3);
      obj.onUpdate = onUpdate;
    }
    return obj;
  }, items);
  closure_4 = tmp;
  const fn = function h(handlerTag) {
    let tmp = mutable.value[handlerTag.handlerTag];
    if (undefined === tmp) {
      const obj = { lastUpdateEvent: "Array" };
      iter.value[handlerTag.handlerTag] = obj;
      tmp = obj;
    }
    eventHandler.eventHandler(closure_0, handlerTag, closure_4, closure_2, tmp, false, closure_3);
  };
  fn.__closure = { lastUpdateEventMap: mutable, eventHandler: require("eventHandler").eventHandler, handlerTag, workletizedHandlers: tmp, changeEventCalculator, fillInDefaultValues };
  fn.__workletHash = 3272953373395;
  fn.__initData = __initData;
  const tmp2 = closure_4(handlerTag);
  closure_5 = tmp2;
  const items1 = [handlerTag];
  closure_2(() => {
    closure_5.current = current;
    return () => {
      const Reanimated = closure_0(closure_1[1]).Reanimated;
      if (Reanimated != null) {
        const runOnUI = Reanimated.runOnUI;
        if (runOnUI != null) {
          runOnUI(deleteHandlerEventEntry)(current);
        }
      }
    };
  }, items1);
  let Reanimated = require("module_6698").Reanimated;
  let event;
  if (Reanimated != null) {
    let tmp5 = tmp2.current !== handlerTag;
    if (!tmp5) {
      let doDependenciesDiffer;
      if (handler != null) {
        doDependenciesDiffer = handler.doDependenciesDiffer;
      }
      tmp5 = doDependenciesDiffer;
    }
    event = Reanimated.useEvent(fn, closure_5, tmp5);
  }
  return event;
};