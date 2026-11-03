// === Module 5513: useReanimatedEventHandler ===

// Module 5513 (useReanimatedEventHandler)
import reanimatedWrapper from "reanimatedWrapper" /* 5469 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

({ useEffect: c2, useMemo: c3, useRef: closure_4 } = noop);
let closure_5 = ["onGestureHandlerReanimatedEvent", "onGestureHandlerReanimatedStateChange", "onGestureHandlerReanimatedTouchEvent"];
let items = [{ code: "(function pnpm_useReanimatedEventHandlerTs1(){})" }];
[tmp3] = items;
function pnpm_useReanimatedEventHandlerTs1() {

}
pnpm_useReanimatedEventHandlerTs1.__workletHash = 2246818651254;
pnpm_useReanimatedEventHandlerTs1.__initData = tmp3;
let Reanimated = reanimatedWrapper.Reanimated;
let mutable;
if (Reanimated != null) {
  mutable = Reanimated.makeMutable({});
}
let items1 = [{ code: "(function deleteHandlerEventEntry_Pnpm_useReanimatedEventHandlerTs2(handlerTag){let[lastUpdateEventMap]=this.__closure;delete lastUpdateEventMap.value[handlerTag];})" }, mutable];
let closure_129_0;
[tmp5, tmp6] = items1;
function deleteHandlerEventEntry(arg0) {
  delete tmp2[tmp];
}
let items2 = [tmp6];
deleteHandlerEventEntry.__closure = items2;
deleteHandlerEventEntry.__workletHash = 3213459313334;
deleteHandlerEventEntry.__initData = tmp5;
let closure_9 = { code: "(function pnpm_useReanimatedEventHandlerTs3(event){let[lastUpdateEventMap,eventHandler,handlerTag,workletizedHandlers,changeEventCalculator,fillInDefaultValues]=this.__closure;let context=lastUpdateEventMap.value[event.handlerTag];if(context===undefined){context={lastUpdateEvent:undefined};lastUpdateEventMap.value[event.handlerTag]=context;}eventHandler(handlerTag,event,workletizedHandlers,changeEventCalculator,context,false,fillInDefaultValues);})" };

export function useReanimatedEventHandler(arg0, memoizedGestureCallbacks, handler, changeEventCalculator, fillInDefaultValues) {
  _require = arg0;
  items = [memoizedGestureCallbacks];
  const items1 = [
    closure_9,
    mutable,
    require("eventHandler").eventHandler,
    arg0,
    c3(() => {
      const Reanimated = reanimatedWrapper.Reanimated;
      let isWorkletFunctionResult;
      if (Reanimated != null) {
        isWorkletFunctionResult = Reanimated.isWorkletFunction(_undefined.onUpdate);
      }
      if (isWorkletFunctionResult) {
        let obj = _undefined;
      } else {
        obj = {};
        const merged = Object.assign(_undefined);
        obj.onUpdate = pnpm_useReanimatedEventHandlerTs1;
      }
      return obj;
    }, items),
    changeEventCalculator,
    fillInDefaultValues
  ];
  _require = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items1;
  function pnpm_useReanimatedEventHandlerTs3(handlerTag) {
    let tmp = current.value[handlerTag.handlerTag];
    if (undefined === tmp) {
      const obj = { lastUpdateEvent: "Array" };
      iter.value[handlerTag.handlerTag] = obj;
      tmp = obj;
    }
    _undefined(closure_2, handlerTag, c3, c4, tmp, false, c5);
  }
  const items2 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
  pnpm_useReanimatedEventHandlerTs3.__closure = items2;
  pnpm_useReanimatedEventHandlerTs3.__workletHash = 16261276333898;
  pnpm_useReanimatedEventHandlerTs3.__initData = tmp4;
  const tmp11 = c4(arg0);
  closure_2 = tmp11;
  const items3 = [arg0];
  closure_2(() => {
    closure_2.current = current;
    return () => {
      const Reanimated = c0(c1[1]).Reanimated;
      if (Reanimated != null) {
        const runOnUI = Reanimated.runOnUI;
        if (runOnUI != null) {
          runOnUI(deleteHandlerEventEntry)(current);
        }
      }
    };
  }, items3);
  let Reanimated = require("reanimatedWrapper").Reanimated;
  let event;
  if (Reanimated != null) {
    let tmp14 = tmp11.current !== arg0;
    if (!tmp14) {
      let doDependenciesDiffer;
      if (handler != null) {
        doDependenciesDiffer = handler.doDependenciesDiffer;
      }
      tmp14 = doDependenciesDiffer;
    }
    event = Reanimated.useEvent(pnpm_useReanimatedEventHandlerTs3, c5, tmp14);
  }
  return event;
}