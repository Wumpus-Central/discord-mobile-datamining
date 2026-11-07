// === Module 5512: useReanimatedEventHandler ===

// Module 5512 (useReanimatedEventHandler)
import reanimatedWrapper from "reanimatedWrapper" /* 5464 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = noop);
let closure_6 = ["onGestureHandlerReanimatedEvent", "onGestureHandlerReanimatedStateChange", "onGestureHandlerReanimatedTouchEvent"];
let items = [{ code: "(function pnpm_useReanimatedEventHandlerTs1(){})" }];
[tmp3] = items;
function pnpm_useReanimatedEventHandlerTs1() {

}
pnpm_useReanimatedEventHandlerTs1.__workletHash = 2246818651254;
pnpm_useReanimatedEventHandlerTs1.__initData = tmp3;
let items1 = [{ code: "(function deleteHandlerEventEntry_Pnpm_useReanimatedEventHandlerTs2(map,handlerTag){if(map===undefined){return;}map.value.delete(handlerTag);})" }];
[tmp4] = items1;
function deleteHandlerEventEntry(value, arg1) {
  if (undefined !== value) {
    value = value.value;
    value.delete(arg1);
  }
}
deleteHandlerEventEntry.__workletHash = 2290858033333;
deleteHandlerEventEntry.__initData = tmp4;
let closure_9 = { code: "(function pnpm_useReanimatedEventHandlerTs3(event){let[updateEventMap,eventHandler,handlerTag,workletizedHandlers,changeEventCalculator,fillInDefaultValues]=this.__closure;if(updateEventMap===undefined){return;}let context=updateEventMap.value.get(event.handlerTag);if(context===undefined){context={lastUpdateEvent:undefined};updateEventMap.value.set(event.handlerTag,context);}eventHandler(handlerTag,event,workletizedHandlers,changeEventCalculator,context,false,fillInDefaultValues);})" };

export function useReanimatedEventHandler(arg0, arg1, handler, changeEventCalculator, fillInDefaultValues) {
  _require = arg0;
  dependencyMap = arg1;
  items = [arg1];
  if (c2 == null) {
    c2 = require("module_5513").createLastUpdateEventMap();
    let obj = require("module_5513");
  }
  const items1 = [
    closure_9,
    c2,
    require("eventHandler").eventHandler,
    arg0,
    c4(() => {
      const Worklets = reanimatedWrapper.Worklets;
      let isWorkletFunctionResult;
      if (Worklets != null) {
        isWorkletFunctionResult = Worklets.isWorkletFunction(_undefined.onUpdate);
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
  c2 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items1;
  function pnpm_useReanimatedEventHandlerTs3(handlerTag) {
    if (undefined !== current) {
      value = current.value;
      value2 = value.get(handlerTag.handlerTag);
      if (undefined === value2) {
        const obj = { lastUpdateEvent: "uri" };
        const value4 = current.value;
        const result = value4.set(handlerTag.handlerTag, obj);
        value2 = obj;
      }
      _undefined(c2, handlerTag, closure_3, c4, value2, false, c5);
    }
  }
  const items2 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
  pnpm_useReanimatedEventHandlerTs3.__closure = items2;
  pnpm_useReanimatedEventHandlerTs3.__workletHash = 15949479082842;
  pnpm_useReanimatedEventHandlerTs3.__initData = tmp7;
  const tmp14 = c5(arg0);
  closure_3 = tmp14;
  const items3 = [arg0, c2];
  closure_3(() => {
    closure_3.current = current;
    return () => {
      const Worklets = c0(c1[2]).Worklets;
      if (Worklets != null) {
        Worklets.scheduleOnUI(deleteHandlerEventEntry, closure_1_2, current);
      }
    };
  }, items3);
  const Reanimated = require("reanimatedWrapper").Reanimated;
  let event;
  if (Reanimated != null) {
    let tmp17 = tmp14.current !== arg0;
    if (!tmp17) {
      let doDependenciesDiffer;
      if (handler != null) {
        doDependenciesDiffer = handler.doDependenciesDiffer;
      }
      tmp17 = doDependenciesDiffer;
    }
    event = Reanimated.useEvent(pnpm_useReanimatedEventHandlerTs3, closure_6, tmp17);
  }
  return event;
}