// _runtime/01848_useResizeMode.js
import NOOP from "NOOP" /* 1847 */;
import noop from "noop" /* 19 */;
import { cancelAnimation } from "01654_cancelAnimation.js";
import { NOOP } from "01847_NOOP.js";

({ useEffect: obj1, useLayoutEffect: c3 } = noop);
function useResizeMode() {
  callback(() => {
    let KeyboardController = handler(keyboardHandlers[1]).KeyboardController;
    KeyboardController.setInputMode(handler(keyboardHandlers[2]).AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);
    return () => {
      const KeyboardController = callback(table[1]).KeyboardController;
      return KeyboardController.setDefaultMode();
    };
  }, []);
}
let closure_5 = { code: "function pnpm_indexTs1(event){const{handler}=this.__closure;if(event.eventName.endsWith(\"onKeyboardMoveStart\")){var _handler$onStart,_handler;(_handler$onStart=(_handler=handler).onStart)===null||_handler$onStart===void 0||_handler$onStart.call(_handler,event);}if(event.eventName.endsWith(\"onKeyboardMove\")){var _handler$onMove,_handler2;(_handler$onMove=(_handler2=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler2,event);}if(event.eventName.endsWith(\"onKeyboardMoveEnd\")){var _handler$onEnd,_handler3;(_handler$onEnd=(_handler3=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler3,event);}if(event.eventName.endsWith(\"onKeyboardMoveInteractive\")){var _handler$onInteractiv,_handler4;(_handler$onInteractiv=(_handler4=handler).onInteractive)===null||_handler$onInteractiv===void 0||_handler$onInteractiv.call(_handler4,event);}}" };
let closure_6 = { code: "function pnpm_indexTs2(event){const{handler}=this.__closure;if(event.eventName.endsWith(\"onFocusedInputTextChanged\")){var _handler$onChangeText,_handler;(_handler$onChangeText=(_handler=handler).onChangeText)===null||_handler$onChangeText===void 0||_handler$onChangeText.call(_handler,event);}if(event.eventName.endsWith(\"onFocusedInputSelectionChanged\")){var _handler$onSelectionC,_handler2;(_handler$onSelectionC=(_handler2=handler).onSelectionChange)===null||_handler$onSelectionC===void 0||_handler$onSelectionC.call(_handler2,event);}}" };
for (const key10020 in require("useWindowDimensions")) {
  let tmp3 = key10020;
  arg5[key10020] = require("useWindowDimensions")[key10020];
  continue;
}
for (const key10024 in require("getLatestState")) {
  let tmp4 = key10024;
  arg5[key10024] = require("getLatestState")[key10024];
  continue;
}

export { useResizeMode };
export const useKeyboardAnimation = () => {
  if (typeof useResizeMode !== "function") {
    HermesBuiltin.throwTypeError();
  }
  callback(() => {
    let KeyboardController = handler(keyboardHandlers[1]).KeyboardController;
    KeyboardController.setInputMode(handler(keyboardHandlers[2]).AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);
    return () => {
      const KeyboardController = callback(table[1]).KeyboardController;
      return KeyboardController.setDefaultMode();
    };
  }, []);
  return NOOP.useKeyboardContext().animated;
};
export const useReanimatedKeyboardAnimation = () => {
  if (typeof useResizeMode !== "function") {
    HermesBuiltin.throwTypeError();
  }
  callback(() => {
    let KeyboardController = handler(keyboardHandlers[1]).KeyboardController;
    KeyboardController.setInputMode(handler(keyboardHandlers[2]).AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);
    return () => {
      const KeyboardController = callback(table[1]).KeyboardController;
      return KeyboardController.setDefaultMode();
    };
  }, []);
  return NOOP.useKeyboardContext().reanimated;
};
export const useGenericKeyboardHandler = function useGenericKeyboardHandler(handler, items10) {
  const _require = handler;
  dependencyMap = _NOOP.useKeyboardContext();
  const obj = _NOOP;
  const obj2 = _cancelAnimation;
  const fn = function u(eventName) {
    eventName = eventName.eventName;
    if (eventName.endsWith("onKeyboardMoveStart")) {
      const onStart = handler.onStart;
      if (onStart != null) {
        onStart(eventName);
      }
    }
    const eventName2 = eventName.eventName;
    if (eventName2.endsWith("onKeyboardMove")) {
      const onMove = handler.onMove;
      if (onMove != null) {
        onMove(eventName);
      }
    }
    const eventName3 = eventName.eventName;
    if (eventName3.endsWith("onKeyboardMoveEnd")) {
      const onEnd = handler.onEnd;
      if (onEnd != null) {
        onEnd(eventName);
      }
    }
    const eventName4 = eventName.eventName;
    if (eventName4.endsWith("onKeyboardMoveInteractive")) {
      const onInteractive = handler.onInteractive;
      if (onInteractive != null) {
        onInteractive(eventName);
      }
    }
  };
  fn.__closure = { handler };
  fn.__workletHash = 7080794218426;
  fn.__initData = closure_5;
  closure_2 = _cancelAnimation.useEvent(fn, ["onKeyboardMoveStart", "onKeyboardMove", "onKeyboardMoveEnd", "onKeyboardMoveInteractive"], obj2.useHandler(handler, items10).doDependenciesDiffer);
  callback2(() => {
    keyboardHandlers.setKeyboardHandlers(closure_2);
    return () => callback();
  }, items10);
};
export const useKeyboardHandler = function useKeyboardHandler(handler, items) {
  if (typeof useResizeMode !== "function") {
    HermesBuiltin.throwTypeError();
  }
  callback(() => {
    let KeyboardController = handler(keyboardHandlers[1]).KeyboardController;
    KeyboardController.setInputMode(handler(keyboardHandlers[2]).AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);
    return () => {
      const KeyboardController = callback(table[1]).KeyboardController;
      return KeyboardController.setDefaultMode();
    };
  }, []);
  const _require = handler;
  dependencyMap = undefined;
  callback = undefined;
  dependencyMap = _NOOP.useKeyboardContext();
  const obj = _NOOP;
  const obj2 = _cancelAnimation;
  const fn = function u(eventName) {
    eventName = eventName.eventName;
    if (eventName.endsWith("onKeyboardMoveStart")) {
      const onStart = handler.onStart;
      if (onStart != null) {
        onStart(eventName);
      }
    }
    const eventName2 = eventName.eventName;
    if (eventName2.endsWith("onKeyboardMove")) {
      const onMove = handler.onMove;
      if (onMove != null) {
        onMove(eventName);
      }
    }
    const eventName3 = eventName.eventName;
    if (eventName3.endsWith("onKeyboardMoveEnd")) {
      const onEnd = handler.onEnd;
      if (onEnd != null) {
        onEnd(eventName);
      }
    }
    const eventName4 = eventName.eventName;
    if (eventName4.endsWith("onKeyboardMoveInteractive")) {
      const onInteractive = handler.onInteractive;
      if (onInteractive != null) {
        onInteractive(eventName);
      }
    }
  };
  fn.__closure = { handler };
  fn.__workletHash = 7080794218426;
  fn.__initData = closure_5;
  callback = _cancelAnimation.useEvent(fn, ["onKeyboardMoveStart", "onKeyboardMove", "onKeyboardMoveEnd", "onKeyboardMoveInteractive"], obj2.useHandler(handler, items).doDependenciesDiffer);
  callback2(() => {
    keyboardHandlers.setKeyboardHandlers(closure_2);
    return () => callback();
  }, items);
};
export const useKeyboardController = function useKeyboardController() {
  let obj = NOOP;
  const keyboardContext = obj.useKeyboardContext();
  obj = { setEnabled: keyboardContext.setEnabled, enabled: keyboardContext.enabled };
  return obj;
};
export const useReanimatedFocusedInput = function useReanimatedFocusedInput() {
  let obj = NOOP;
  const keyboardContext = obj.useKeyboardContext();
  obj = { input: keyboardContext.layout, update: keyboardContext.update };
  return obj;
};
export const useFocusedInputHandler = function useFocusedInputHandler(handler, items10) {
  const _require = handler;
  dependencyMap = _NOOP.useKeyboardContext();
  const obj = _NOOP;
  const obj2 = _cancelAnimation;
  const fn = function l(eventName) {
    eventName = eventName.eventName;
    if (eventName.endsWith("onFocusedInputTextChanged")) {
      const onChangeText = handler.onChangeText;
      if (onChangeText != null) {
        onChangeText(eventName);
      }
    }
    const eventName2 = eventName.eventName;
    if (eventName2.endsWith("onFocusedInputSelectionChanged")) {
      const onSelectionChange = handler.onSelectionChange;
      if (onSelectionChange != null) {
        onSelectionChange(eventName);
      }
    }
  };
  fn.__closure = { handler };
  fn.__workletHash = 16071593392303;
  fn.__initData = closure_6;
  closure_2 = _cancelAnimation.useEvent(fn, ["onFocusedInputTextChanged", "onFocusedInputSelectionChanged"], obj2.useHandler(handler, items10).doDependenciesDiffer);
  callback2(() => {
    inputHandlers.setInputHandlers(closure_2);
    return () => callback();
  }, items10);
};