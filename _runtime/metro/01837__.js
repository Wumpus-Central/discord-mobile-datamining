// === Module 1837: ? ===

// Module 1837
import _mod1643 from "module_1643" /* 1643 */;
import KeyboardController2 from "KeyboardController" /* 1835 */;
import _mod1836 from "module_1836" /* 1836 */;
import AndroidSoftInputModes from "AndroidSoftInputModes" /* 1838 */;
import _mod1839 from "module_1839" /* 1839 */;
import _mod1840 from "module_1840" /* 1840 */;
import react from "react" /* 19 */;

let c2;
let c3;
const f85281 = () => {
  let KeyboardController = KeyboardController2.KeyboardController;
  KeyboardController.setInputMode(AndroidSoftInputModes.AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);
  return () => {
    const KeyboardController = closure_1_0(closure_1_1[1]).KeyboardController;
    return KeyboardController.setDefaultMode();
  };
};
({ useEffect: c2, useLayoutEffect: c3 } = react);
function useResizeMode() {
  React2(f85281, []);
}
const __initData = { code: "function pnpm_indexTs1(event){const{handler}=this.__closure;if(event.eventName.endsWith(\"onKeyboardMoveStart\")){var _handler$onStart,_handler;(_handler$onStart=(_handler=handler).onStart)===null||_handler$onStart===void 0||_handler$onStart.call(_handler,event);}if(event.eventName.endsWith(\"onKeyboardMove\")){var _handler$onMove,_handler2;(_handler$onMove=(_handler2=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler2,event);}if(event.eventName.endsWith(\"onKeyboardMoveEnd\")){var _handler$onEnd,_handler3;(_handler$onEnd=(_handler3=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler3,event);}if(event.eventName.endsWith(\"onKeyboardMoveInteractive\")){var _handler$onInteractiv,_handler4;(_handler$onInteractiv=(_handler4=handler).onInteractive)===null||_handler$onInteractiv===void 0||_handler$onInteractiv.call(_handler4,event);}}" };
const __initData2 = { code: "function pnpm_indexTs2(event){const{handler}=this.__closure;if(event.eventName.endsWith(\"onFocusedInputTextChanged\")){var _handler$onChangeText,_handler;(_handler$onChangeText=(_handler=handler).onChangeText)===null||_handler$onChangeText===void 0||_handler$onChangeText.call(_handler,event);}if(event.eventName.endsWith(\"onFocusedInputSelectionChanged\")){var _handler$onSelectionC,_handler2;(_handler$onSelectionC=(_handler2=handler).onSelectionChange)===null||_handler$onSelectionC===void 0||_handler$onSelectionC.call(_handler2,event);}}" };
for (const key10020 in _mod1839) {
  exports[key10020] = _mod1839[key10020];
  continue;
}
for (const key10024 in _mod1840) {
  exports[key10024] = _mod1840[key10024];
  continue;
}

export { useResizeMode };
export const useKeyboardAnimation = () => {
  if (typeof useResizeMode === "function") {
    React2(f85281, []);
    const obj = _mod1836;
    return obj.useKeyboardContext().animated;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const useReanimatedKeyboardAnimation = () => {
  if (typeof useResizeMode === "function") {
    React2(f85281, []);
    const obj = _mod1836;
    return obj.useKeyboardContext().reanimated;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const useGenericKeyboardHandler = function useGenericKeyboardHandler(handler, items10) {
  let closure_0 = handler;
  const obj = _mod1836;
  let closure_1 = obj.useKeyboardContext();
  const obj2 = _mod1643;
  const doDependenciesDiffer = obj2.useHandler(handler, items10).doDependenciesDiffer;
  const fn = function u(eventName) {
    eventName = eventName.eventName;
    if (eventName.endsWith("onKeyboardMoveStart")) {
      const onStart = closure_0.onStart;
      if (onStart != null) {
        onStart(eventName);
      }
    }
    const eventName2 = eventName.eventName;
    if (eventName2.endsWith("onKeyboardMove")) {
      const onMove = closure_0.onMove;
      if (onMove != null) {
        onMove(eventName);
      }
    }
    const eventName3 = eventName.eventName;
    if (eventName3.endsWith("onKeyboardMoveEnd")) {
      const onEnd = closure_0.onEnd;
      if (onEnd != null) {
        onEnd(eventName);
      }
    }
    const eventName4 = eventName.eventName;
    if (eventName4.endsWith("onKeyboardMoveInteractive")) {
      const onInteractive = closure_0.onInteractive;
      if (onInteractive != null) {
        onInteractive(eventName);
      }
    }
  };
  fn.__closure = { handler };
  fn.__workletHash = 7080794218426;
  fn.__initData = __initData;
  const obj3 = _mod1643;
  let closure_2 = obj3.useEvent(fn, ["onKeyboardMoveStart", "onKeyboardMove", "onKeyboardMoveEnd", "onKeyboardMoveInteractive"], doDependenciesDiffer);
  _false(() => {
    keyboardHandlers.setKeyboardHandlers(closure_2);
    return () => closure_0();
  }, items10);
};
export const useKeyboardHandler = function useKeyboardHandler(handler, items) {
  if (typeof useResizeMode === "function") {
    React2(f85281, []);
    let closure_0 = handler;
    const obj = _mod1836;
    let closure_1 = obj.useKeyboardContext();
    const obj2 = _mod1643;
    const doDependenciesDiffer = obj2.useHandler(handler, items).doDependenciesDiffer;
    const fn = function u(eventName) {
      eventName = eventName.eventName;
      if (eventName.endsWith("onKeyboardMoveStart")) {
        const onStart = closure_0.onStart;
        if (onStart != null) {
          onStart(eventName);
        }
      }
      const eventName2 = eventName.eventName;
      if (eventName2.endsWith("onKeyboardMove")) {
        const onMove = closure_0.onMove;
        if (onMove != null) {
          onMove(eventName);
        }
      }
      const eventName3 = eventName.eventName;
      if (eventName3.endsWith("onKeyboardMoveEnd")) {
        const onEnd = closure_0.onEnd;
        if (onEnd != null) {
          onEnd(eventName);
        }
      }
      const eventName4 = eventName.eventName;
      if (eventName4.endsWith("onKeyboardMoveInteractive")) {
        const onInteractive = closure_0.onInteractive;
        if (onInteractive != null) {
          onInteractive(eventName);
        }
      }
    };
    const obj4 = { handler };
    fn.__closure = obj4;
    fn.__workletHash = 7080794218426;
    fn.__initData = __initData;
    const obj3 = _mod1643;
    let c2 = obj3.useEvent(fn, ["onKeyboardMoveStart", "onKeyboardMove", "onKeyboardMoveEnd", "onKeyboardMoveInteractive"], doDependenciesDiffer);
    _false(() => {
      keyboardHandlers.setKeyboardHandlers(closure_2);
      return () => closure_0();
    }, items);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const useKeyboardController = function useKeyboardController() {
  const obj = _mod1836;
  const keyboardContext = obj.useKeyboardContext();
  return { setEnabled: keyboardContext.setEnabled, enabled: keyboardContext.enabled };
};
export const useReanimatedFocusedInput = function useReanimatedFocusedInput() {
  const obj = _mod1836;
  const keyboardContext = obj.useKeyboardContext();
  return { input: keyboardContext.layout, update: keyboardContext.update };
};
export const useFocusedInputHandler = function useFocusedInputHandler(handler, items10) {
  let closure_0 = handler;
  const obj = _mod1836;
  let closure_1 = obj.useKeyboardContext();
  const obj2 = _mod1643;
  const doDependenciesDiffer = obj2.useHandler(handler, items10).doDependenciesDiffer;
  const fn = function l(eventName) {
    eventName = eventName.eventName;
    if (eventName.endsWith("onFocusedInputTextChanged")) {
      const onChangeText = closure_0.onChangeText;
      if (onChangeText != null) {
        onChangeText(eventName);
      }
    }
    const eventName2 = eventName.eventName;
    if (eventName2.endsWith("onFocusedInputSelectionChanged")) {
      const onSelectionChange = closure_0.onSelectionChange;
      if (onSelectionChange != null) {
        onSelectionChange(eventName);
      }
    }
  };
  fn.__closure = { handler };
  fn.__workletHash = 16071593392303;
  fn.__initData = __initData2;
  const obj3 = _mod1643;
  let closure_2 = obj3.useEvent(fn, ["onFocusedInputTextChanged", "onFocusedInputSelectionChanged"], doDependenciesDiffer);
  _false(() => {
    inputHandlers.setInputHandlers(closure_2);
    return () => closure_0();
  }, items10);
};