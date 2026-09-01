// _runtime/05739_n.js
import _mod5695 from "metro/05695__.js";
import noop from "00019_noop.js";

({ useEffect: obj1, useMemo: c3, useRef: c4 } = noop);
let closure_5 = [
  "onGestureHandlerReanimatedEvent",
  "onGestureHandlerReanimatedStateChange",
  "onGestureHandlerReanimatedTouchEvent",
];
let fn = function n() {};
fn.__closure = {};
fn.__workletHash = 763644533783;
fn.__initData = { code: "function pnpm_useReanimatedEventHandlerTs1(){}" };
let Reanimated = _mod5695.Reanimated;
let mutable;
if (Reanimated != null) {
  mutable = Reanimated.makeMutable({});
}
function deleteHandlerEventEntry(arg0) {
  delete tmp2[tmp];
}
deleteHandlerEventEntry.__closure = { lastUpdateEventMap: mutable };
deleteHandlerEventEntry.__workletHash = 8348834805583;
deleteHandlerEventEntry.__initData = {
  code: "function deleteHandlerEventEntry_Pnpm_useReanimatedEventHandlerTs2(handlerTag){const{lastUpdateEventMap}=this.__closure;delete lastUpdateEventMap.value[handlerTag];}",
};
let closure_9 = {
  code: "function pnpm_useReanimatedEventHandlerTs3(event){const{lastUpdateEventMap,eventHandler,handlerTag,workletizedHandlers,changeEventCalculator,fillInDefaultValues}=this.__closure;let context=lastUpdateEventMap.value[event.handlerTag];if(context===undefined){context={lastUpdateEvent:undefined};lastUpdateEventMap.value[event.handlerTag]=context;}eventHandler(handlerTag,event,workletizedHandlers,changeEventCalculator,context,false,fillInDefaultValues);}",
};

export const useReanimatedEventHandler = function useReanimatedEventHandler(
  handlerTag,
  memoizedGestureCallbacks,
  handler,
  changeEventCalculator,
  fillInDefaultValues,
) {
  const _require = handlerTag;
  dependencyMap = memoizedGestureCallbacks;
  const callback = changeEventCalculator;
  const callback2 = fillInDefaultValues;
  const items = [memoizedGestureCallbacks];
  let tmp = callback2(() => {
    const Reanimated = handlerTag(memoizedGestureCallbacks[1]).Reanimated;
    let isWorkletFunctionResult;
    if (Reanimated != null) {
      isWorkletFunctionResult = Reanimated.isWorkletFunction(memoizedGestureCallbacks.onUpdate);
    }
    if (isWorkletFunctionResult) {
      let obj = tmp3;
    } else {
      obj = {};
      const merged = Object.assign(tmp3);
      obj.onUpdate = closure_1_6;
    }
    return obj;
  }, items);
  const callback3 = tmp;
  fn = function h(handlerTag) {
    let tmp = closure_1_7.value[handlerTag.handlerTag];
    if (undefined === tmp) {
      const obj = { lastUpdateEvent: "r" };
      iter.value[handlerTag.handlerTag] = obj;
      tmp = obj;
    }
    handlerTag(memoizedGestureCallbacks[2]).eventHandler(
      handlerTag,
      handlerTag,
      closure_4,
      closure_2,
      tmp,
      false,
      closure_3,
    );
  };
  fn.__closure = {
    lastUpdateEventMap: mutable,
    eventHandler: require("05738_handleStateChangeEvent.js").eventHandler,
    handlerTag,
    workletizedHandlers: tmp,
    changeEventCalculator,
    fillInDefaultValues,
  };
  fn.__workletHash = 3272953373395;
  fn.__initData = closure_9;
  const tmp2 = callback3(handlerTag);
  closure_5 = tmp2;
  const items1 = [handlerTag];
  callback(() => {
    closure_5.current = closure_0;
    return () => {
      const Reanimated = closure_1_0(closure_1_1[1]).Reanimated;
      if (Reanimated != null) {
        const runOnUI = Reanimated.runOnUI;
        if (runOnUI != null) {
          runOnUI(closure_1_8)(closure_0);
        }
      }
    };
  }, items1);
  let Reanimated = require("metro/05695__.js").Reanimated;
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
    const tmp6 = closure_5;
  }
  return event;
};
