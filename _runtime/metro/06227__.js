// _runtime/metro/06227__.js
import Reanimated2 from "../06183_Reanimated.js";
import eventHandler from "../06226_eventHandler.js";
import react from "../00019_react.js";

const require = globalThis.__r;
let _require, dependencyMap;

let c2;
let c3;
let closure_4;
({ useEffect: c2, useMemo: c3, useRef: closure_4 } = react);
let closure_5 = [
  "onGestureHandlerReanimatedEvent",
  "onGestureHandlerReanimatedStateChange",
  "onGestureHandlerReanimatedTouchEvent",
];
const onUpdate = function n() {};
onUpdate.__closure = {};
onUpdate.__workletHash = 763644533783;
onUpdate.__initData = { code: "function pnpm_useReanimatedEventHandlerTs1(){}" };
let Reanimated = Reanimated2.Reanimated;
let mutable;
if (Reanimated != null) {
  mutable = Reanimated.makeMutable({});
}
function deleteHandlerEventEntry(arg0) {
  delete mutable.value[arg0];
}
deleteHandlerEventEntry.__closure = { lastUpdateEventMap: mutable };
deleteHandlerEventEntry.__workletHash = 8348834805583;
deleteHandlerEventEntry.__initData = {
  code: "function deleteHandlerEventEntry_Pnpm_useReanimatedEventHandlerTs2(handlerTag){const{lastUpdateEventMap}=this.__closure;delete lastUpdateEventMap.value[handlerTag];}",
};
const __initData = {
  code: "function pnpm_useReanimatedEventHandlerTs3(event){const{lastUpdateEventMap,eventHandler,handlerTag,workletizedHandlers,changeEventCalculator,fillInDefaultValues}=this.__closure;let context=lastUpdateEventMap.value[event.handlerTag];if(context===undefined){context={lastUpdateEvent:undefined};lastUpdateEventMap.value[event.handlerTag]=context;}eventHandler(handlerTag,event,workletizedHandlers,changeEventCalculator,context,false,fillInDefaultValues);}",
};

export const useReanimatedEventHandler = function useReanimatedEventHandler(
  handlerTag,
  memoizedGestureCallbacks,
  handler,
  changeEventCalculator,
  fillInDefaultValues,
) {
  _require = handlerTag;
  dependencyMap = memoizedGestureCallbacks;
  let closure_2 = changeEventCalculator;
  let closure_3 = fillInDefaultValues;
  const items = [memoizedGestureCallbacks];
  let tmp = closure_3(() => {
    let obj;
    const Reanimated = Reanimated2.Reanimated;
    let isWorkletFunctionResult;
    if (Reanimated != null) {
      isWorkletFunctionResult = Reanimated.isWorkletFunction(memoizedGestureCallbacks.onUpdate);
    }
    if (isWorkletFunctionResult) {
      obj = memoizedGestureCallbacks;
    } else {
      obj = { onUpdate };
      const merged = Object.assign(memoizedGestureCallbacks);
    }
    return obj;
  }, items);
  let closure_4 = tmp;
  const fn = function h(handlerTag) {
    let tmp = mutable.value[handlerTag.handlerTag];
    if (undefined === tmp) {
      const obj = { lastUpdateEvent: "r" };
      iter.value[handlerTag.handlerTag] = obj;
      tmp = obj;
    }
    const obj2 = eventHandler;
    obj2.eventHandler(current, handlerTag, closure_4, changeEventCalculator, tmp, false, fillInDefaultValues);
  };
  let obj = {
    lastUpdateEventMap: mutable,
    eventHandler: require("eventHandler").eventHandler,
    handlerTag,
    workletizedHandlers: tmp,
    changeEventCalculator,
    fillInDefaultValues,
  };
  fn.__closure = obj;
  fn.__workletHash = 3272953373395;
  fn.__initData = __initData;
  const tmp2 = closure_4(handlerTag);
  closure_5 = tmp2;
  const items1 = [handlerTag];
  const current = tmp2.current;
  closure_2(() => {
    closure_5.current = current;
    return () => {
      const Reanimated = closure_0(memoizedGestureCallbacks[1]).Reanimated;
      if (Reanimated != null) {
        const runOnUI = Reanimated.runOnUI;
        if (runOnUI != null) {
          runOnUI(deleteHandlerEventEntry)(closure_1_0);
        }
      }
    };
  }, items1);
  let Reanimated = require("Reanimated").Reanimated;
  let event;
  if (Reanimated != null) {
    let tmp5 = current !== handlerTag;
    const useEvent = Reanimated.useEvent;
    const tmp6 = closure_5;
    if (!tmp5) {
      let doDependenciesDiffer;
      if (handler != null) {
        doDependenciesDiffer = handler.doDependenciesDiffer;
      }
      tmp5 = doDependenciesDiffer;
    }
    event = useEvent(fn, tmp6, tmp5);
  }
  return event;
};
