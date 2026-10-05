// _runtime/metro/01834__.js
import _mod1643 from "01643__.js";

const __initData = {
  code: 'function pnpm_reanimatedNativeTs1(event){const{handlers,context}=this.__closure;const{onKeyboardMoveStart:onKeyboardMoveStart,onKeyboardMove:onKeyboardMove,onKeyboardMoveEnd:onKeyboardMoveEnd,onKeyboardMoveInteractive:onKeyboardMoveInteractive}=handlers;if(onKeyboardMoveStart&&event.eventName.endsWith("onKeyboardMoveStart")){onKeyboardMoveStart(event,context);}if(onKeyboardMove&&event.eventName.endsWith("onKeyboardMove")){onKeyboardMove(event,context);}if(onKeyboardMoveEnd&&event.eventName.endsWith("onKeyboardMoveEnd")){onKeyboardMoveEnd(event,context);}if(onKeyboardMoveInteractive&&event.eventName.endsWith("onKeyboardMoveInteractive")){onKeyboardMoveInteractive(event,context);}}',
};
const __initData2 = {
  code: 'function pnpm_reanimatedNativeTs2(event){const{handlers,context}=this.__closure;const{onFocusedInputLayoutChanged:onFocusedInputLayoutChanged}=handlers;if(onFocusedInputLayoutChanged&&event.eventName.endsWith("onFocusedInputLayoutChanged")){onFocusedInputLayoutChanged(event,context);}}',
};

export const useAnimatedKeyboardHandler = (handlers, items10) => {
  let closure_0 = handlers;
  const obj = _mod1643;
  const handler = obj.useHandler(handlers, items10);
  const context = handler.context;
  const doDependenciesDiffer = handler.doDependenciesDiffer;
  const fn = function v(eventName) {
    let onKeyboardMove;
    let onKeyboardMoveEnd;
    let onKeyboardMoveInteractive;
    let onKeyboardMoveStart;
    ({ onKeyboardMoveStart, onKeyboardMove, onKeyboardMoveEnd, onKeyboardMoveInteractive } = closure_0);
    let endsWithResult = onKeyboardMoveStart;
    if (endsWithResult) {
      eventName = eventName.eventName;
      endsWithResult = eventName.endsWith("onKeyboardMoveStart");
    }
    if (endsWithResult) {
      onKeyboardMoveStart(eventName, context);
    }
    let endsWithResult1 = onKeyboardMove;
    if (endsWithResult1) {
      const eventName2 = eventName.eventName;
      endsWithResult1 = eventName2.endsWith("onKeyboardMove");
    }
    if (endsWithResult1) {
      onKeyboardMove(eventName, context);
    }
    let endsWithResult2 = onKeyboardMoveEnd;
    if (endsWithResult2) {
      const eventName3 = eventName.eventName;
      endsWithResult2 = eventName3.endsWith("onKeyboardMoveEnd");
    }
    if (endsWithResult2) {
      onKeyboardMoveEnd(eventName, context);
    }
    let endsWithResult3 = onKeyboardMoveInteractive;
    if (endsWithResult3) {
      const eventName4 = eventName.eventName;
      endsWithResult3 = eventName4.endsWith("onKeyboardMoveInteractive");
    }
    if (endsWithResult3) {
      const result = onKeyboardMoveInteractive(eventName, context);
    }
  };
  fn.__closure = { handlers, context };
  fn.__workletHash = 6092807753388;
  fn.__initData = __initData;
  const obj2 = _mod1643;
  return obj2.useEvent(
    fn,
    ["onKeyboardMoveStart", "onKeyboardMove", "onKeyboardMoveEnd", "onKeyboardMoveInteractive"],
    doDependenciesDiffer,
  );
};
export const useFocusedInputLayoutHandler = (handlers, items10) => {
  let closure_0 = handlers;
  const obj = _mod1643;
  const handler = obj.useHandler(handlers, items10);
  const context = handler.context;
  const doDependenciesDiffer = handler.doDependenciesDiffer;
  const fn = function v(eventName) {
    const onFocusedInputLayoutChanged = closure_0.onFocusedInputLayoutChanged;
    let endsWithResult = onFocusedInputLayoutChanged;
    if (endsWithResult) {
      eventName = eventName.eventName;
      endsWithResult = eventName.endsWith("onFocusedInputLayoutChanged");
    }
    if (endsWithResult) {
      const result = onFocusedInputLayoutChanged(eventName, context);
    }
  };
  fn.__closure = { handlers, context };
  fn.__workletHash = 9976853307145;
  fn.__initData = __initData2;
  const obj2 = _mod1643;
  return obj2.useEvent(fn, ["onFocusedInputLayoutChanged"], doDependenciesDiffer);
};
