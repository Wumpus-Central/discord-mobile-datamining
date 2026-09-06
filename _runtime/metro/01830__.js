// _runtime/metro/01830__.js
import cancelAnimation from "../01636_cancelAnimation.js";
import NOOP from "../01829_NOOP.js";
import noop from "00019__.js";

({ useEffect: c2, useLayoutEffect: c3 } = noop);
function useResizeMode() {
  React2(() => {
    let KeyboardController = handler(keyboardHandlers[1]).KeyboardController;
    KeyboardController.setInputMode(handler(keyboardHandlers[2]).AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);
    return () => {
      const KeyboardController = handler(keyboardHandlers[1]).KeyboardController;
      return KeyboardController.setDefaultMode();
    };
  }, []);
}
const __initData = {
  code: 'function pnpm_indexTs1(event){const{handler}=this.__closure;if(event.eventName.endsWith("onKeyboardMoveStart")){var _handler$onStart,_handler;(_handler$onStart=(_handler=handler).onStart)===null||_handler$onStart===void 0||_handler$onStart.call(_handler,event);}if(event.eventName.endsWith("onKeyboardMove")){var _handler$onMove,_handler2;(_handler$onMove=(_handler2=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler2,event);}if(event.eventName.endsWith("onKeyboardMoveEnd")){var _handler$onEnd,_handler3;(_handler$onEnd=(_handler3=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler3,event);}if(event.eventName.endsWith("onKeyboardMoveInteractive")){var _handler$onInteractiv,_handler4;(_handler$onInteractiv=(_handler4=handler).onInteractive)===null||_handler$onInteractiv===void 0||_handler$onInteractiv.call(_handler4,event);}}',
};
const __initData2 = {
  code: 'function pnpm_indexTs2(event){const{handler}=this.__closure;if(event.eventName.endsWith("onFocusedInputTextChanged")){var _handler$onChangeText,_handler;(_handler$onChangeText=(_handler=handler).onChangeText)===null||_handler$onChangeText===void 0||_handler$onChangeText.call(_handler,event);}if(event.eventName.endsWith("onFocusedInputSelectionChanged")){var _handler$onSelectionC,_handler2;(_handler$onSelectionC=(_handler2=handler).onSelectionChange)===null||_handler$onSelectionC===void 0||_handler$onSelectionC.call(_handler2,event);}}',
};
for (const key10020 in require("01832__.js")) {
  arg5[key10020] = require("01832__.js")[key10020];
  continue;
}
for (const key10024 in require("01833__.js")) {
  arg5[key10024] = require("01833__.js")[key10024];
  continue;
}

export { useResizeMode };
export const useKeyboardAnimation = () => {
  if (typeof useResizeMode === "function") {
    React2(() => {
      let KeyboardController = handler(keyboardHandlers[1]).KeyboardController;
      KeyboardController.setInputMode(handler(keyboardHandlers[2]).AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);
      return () => {
        const KeyboardController = handler(keyboardHandlers[1]).KeyboardController;
        return KeyboardController.setDefaultMode();
      };
    }, []);
    return NOOP.useKeyboardContext().animated;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const useReanimatedKeyboardAnimation = () => {
  if (typeof useResizeMode === "function") {
    React2(() => {
      let KeyboardController = handler(keyboardHandlers[1]).KeyboardController;
      KeyboardController.setInputMode(handler(keyboardHandlers[2]).AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);
      return () => {
        const KeyboardController = handler(keyboardHandlers[1]).KeyboardController;
        return KeyboardController.setDefaultMode();
      };
    }, []);
    return NOOP.useKeyboardContext().reanimated;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const useGenericKeyboardHandler = function useGenericKeyboardHandler(handler, items10) {
  closure_0 = handler;
  closure_1 = NOOP.useKeyboardContext();
  const obj2 = cancelAnimation;
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
  fn.__initData = __initData;
  closure_2 = cancelAnimation.useEvent(
    fn,
    ["onKeyboardMoveStart", "onKeyboardMove", "onKeyboardMoveEnd", "onKeyboardMoveInteractive"],
    obj2.useHandler(handler, items10).doDependenciesDiffer,
  );
  React3(() => {
    keyboardHandlers.setKeyboardHandlers(closure_2);
    return () => closure_0();
  }, items10);
};
export const useKeyboardHandler = function useKeyboardHandler(handler, items) {
  if (typeof useResizeMode === "function") {
    React2(() => {
      let KeyboardController = handler(keyboardHandlers[1]).KeyboardController;
      KeyboardController.setInputMode(handler(keyboardHandlers[2]).AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);
      return () => {
        const KeyboardController = handler(keyboardHandlers[1]).KeyboardController;
        return KeyboardController.setDefaultMode();
      };
    }, []);
    let obj = NOOP;
    obj.useKeyboardContext();
    const obj2 = cancelAnimation;
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
    obj = { handler };
    fn.__closure = obj;
    fn.__workletHash = 7080794218426;
    fn.__initData = __initData;
    closure_2 = cancelAnimation.useEvent(
      fn,
      ["onKeyboardMoveStart", "onKeyboardMove", "onKeyboardMoveEnd", "onKeyboardMoveInteractive"],
      obj2.useHandler(handler, items).doDependenciesDiffer,
    );
    React3(() => {
      keyboardHandlers.setKeyboardHandlers(closure_2);
      return () => closure_0();
    }, items);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
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
  NOOP.useKeyboardContext();
  const obj2 = cancelAnimation;
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
  fn.__initData = __initData2;
  closure_2 = cancelAnimation.useEvent(
    fn,
    ["onFocusedInputTextChanged", "onFocusedInputSelectionChanged"],
    obj2.useHandler(handler, items10).doDependenciesDiffer,
  );
  React3(() => {
    inputHandlers.setInputHandlers(closure_2);
    return () => closure_0();
  }, items10);
};
