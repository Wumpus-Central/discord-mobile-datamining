// === Module 1973: ? ===

// Module 1973
import _mod1652 from "module_1652" /* 1652 */;
import _mod1971 from "module_1971" /* 1971 */;
import NOOP from "NOOP" /* 1972 */;
import AndroidSoftInputModes from "AndroidSoftInputModes" /* 1974 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

function useGenericKeyboardHandler(ChannelListLegendListTsx1, items2) {
  NOOP.useKeyboardContext();
  const obj2 = _mod1652;
  items = [closure_5, ChannelListLegendListTsx1];
  c0 = undefined;
  [tmp, tmp2] = items;
  function pnpm_indexTs1(eventName) {
    eventName = eventName.eventName;
    if (eventName.endsWith("onKeyboardMoveStart")) {
      const onStart = _undefined.onStart;
      if (onStart != null) {
        onStart(eventName);
      }
    }
    const eventName2 = eventName.eventName;
    if (eventName2.endsWith("onKeyboardMove")) {
      const onMove = _undefined.onMove;
      if (onMove != null) {
        onMove(eventName);
      }
    }
    const eventName3 = eventName.eventName;
    if (eventName3.endsWith("onKeyboardMoveEnd")) {
      const onEnd = _undefined.onEnd;
      if (onEnd != null) {
        onEnd(eventName);
      }
    }
    const eventName4 = eventName.eventName;
    if (eventName4.endsWith("onKeyboardMoveInteractive")) {
      const onInteractive = _undefined.onInteractive;
      if (onInteractive != null) {
        onInteractive(eventName);
      }
    }
  }
  const items1 = [tmp2];
  pnpm_indexTs1.__closure = items1;
  pnpm_indexTs1.__workletHash = 82243721795;
  pnpm_indexTs1.__initData = tmp;
  closure_1 = _mod1652.useEvent(pnpm_indexTs1, ["onKeyboardMoveStart", "onKeyboardMove", "onKeyboardMoveEnd", "onKeyboardMoveInteractive"], obj2.useHandler(ChannelListLegendListTsx1, items2).doDependenciesDiffer);
  React3(() => {
    _undefined.setKeyboardHandlers(closure_1);
    return () => closure_0();
  }, items2);
}
({ useEffect: c2, useLayoutEffect: c3 } = noop);
function useResizeMode() {
  React2(() => {
    let KeyboardController = _mod1971.KeyboardController;
    KeyboardController.setInputMode(AndroidSoftInputModes.AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);
    return () => {
      const KeyboardController = closure_1_0(dependencyMap[1]).KeyboardController;
      return KeyboardController.setDefaultMode();
    };
  }, []);
}
let closure_5 = { code: "(function pnpm_indexTs1(event){let[handler]=this.__closure;if(event.eventName.endsWith(\"onKeyboardMoveStart\")){var _handler$onStart,_handler;(_handler$onStart=(_handler=handler).onStart)===null||_handler$onStart===void 0||_handler$onStart.call(_handler,event);}if(event.eventName.endsWith(\"onKeyboardMove\")){var _handler$onMove,_handler2;(_handler$onMove=(_handler2=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler2,event);}if(event.eventName.endsWith(\"onKeyboardMoveEnd\")){var _handler$onEnd,_handler3;(_handler$onEnd=(_handler3=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler3,event);}if(event.eventName.endsWith(\"onKeyboardMoveInteractive\")){var _handler$onInteractiv,_handler4;(_handler$onInteractiv=(_handler4=handler).onInteractive)===null||_handler$onInteractiv===void 0||_handler$onInteractiv.call(_handler4,event);}})" };
let closure_7 = { code: "(function pnpm_indexTs2(event){let[handler]=this.__closure;if(event.eventName.endsWith(\"onFocusedInputTextChanged\")){var _handler$onChangeText,_handler;(_handler$onChangeText=(_handler=handler).onChangeText)===null||_handler$onChangeText===void 0||_handler$onChangeText.call(_handler,event);}if(event.eventName.endsWith(\"onFocusedInputSelectionChanged\")){var _handler$onSelectionC,_handler2;(_handler$onSelectionC=(_handler2=handler).onSelectionChange)===null||_handler$onSelectionC===void 0||_handler$onSelectionC.call(_handler2,event);}})" };
for (const key10021 in require("module_1975")) {
  arg5[key10021] = require("module_1975")[key10021];
  continue;
}
for (const key10025 in require("module_1976")) {
  arg5[key10025] = require("module_1976")[key10025];
  continue;
}

export { useResizeMode };
export () => {
  if (typeof useResizeMode === "function") {
    React2(() => {
      let KeyboardController = _mod1971.KeyboardController;
      KeyboardController.setInputMode(AndroidSoftInputModes.AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);
      return () => {
        const KeyboardController = closure_1_0(dependencyMap[1]).KeyboardController;
        return KeyboardController.setDefaultMode();
      };
    }, []);
    return NOOP.useKeyboardContext().animated;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
export () => {
  if (typeof useResizeMode === "function") {
    React2(() => {
      let KeyboardController = _mod1971.KeyboardController;
      KeyboardController.setInputMode(AndroidSoftInputModes.AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);
      return () => {
        const KeyboardController = closure_1_0(dependencyMap[1]).KeyboardController;
        return KeyboardController.setDefaultMode();
      };
    }, []);
    return NOOP.useKeyboardContext().reanimated;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
export { useGenericKeyboardHandler };
export function useKeyboardHandler(ChannelListLegendListTsx1, items2) {
  if (typeof useResizeMode === "function") {
    React2(() => {
      let KeyboardController = _mod1971.KeyboardController;
      KeyboardController.setInputMode(AndroidSoftInputModes.AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);
      return () => {
        const KeyboardController = closure_1_0(dependencyMap[1]).KeyboardController;
        return KeyboardController.setDefaultMode();
      };
    }, []);
    useGenericKeyboardHandler(ChannelListLegendListTsx1, items2);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
export function useKeyboardController() {
  const keyboardContext = NOOP.useKeyboardContext();
  return { setEnabled: keyboardContext.setEnabled, enabled: keyboardContext.enabled };
}
export function useReanimatedFocusedInput() {
  const keyboardContext = NOOP.useKeyboardContext();
  return { input: keyboardContext.layout, update: keyboardContext.update };
}
export function useFocusedInputHandler(ChannelListLegendListTsx1, items26) {
  NOOP.useKeyboardContext();
  const obj2 = _mod1652;
  items = [closure_7, ChannelListLegendListTsx1];
  c0 = undefined;
  [tmp, tmp2] = items;
  function pnpm_indexTs2(eventName) {
    eventName = eventName.eventName;
    if (eventName.endsWith("onFocusedInputTextChanged")) {
      const onChangeText = _undefined.onChangeText;
      if (onChangeText != null) {
        onChangeText(eventName);
      }
    }
    const eventName2 = eventName.eventName;
    if (eventName2.endsWith("onFocusedInputSelectionChanged")) {
      const onSelectionChange = _undefined.onSelectionChange;
      if (onSelectionChange != null) {
        onSelectionChange(eventName);
      }
    }
  }
  const items1 = [tmp2];
  pnpm_indexTs2.__closure = items1;
  pnpm_indexTs2.__workletHash = 3141072070902;
  pnpm_indexTs2.__initData = tmp;
  closure_1 = _mod1652.useEvent(pnpm_indexTs2, ["onFocusedInputTextChanged", "onFocusedInputSelectionChanged"], obj2.useHandler(ChannelListLegendListTsx1, items26).doDependenciesDiffer);
  React3(() => {
    _undefined.setInputHandlers(closure_1);
    return () => closure_0();
  }, items26);
}