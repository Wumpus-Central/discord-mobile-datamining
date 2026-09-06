// _runtime/metro/01827__.js
import cancelAnimation from "../01636_cancelAnimation.js";

require = arg1;
const dependencyMap = arg6;
const __initData = {
  code: 'function pnpm_reanimatedNativeTs1(event){const{handlers,context}=this.__closure;const{onKeyboardMoveStart:onKeyboardMoveStart,onKeyboardMove:onKeyboardMove,onKeyboardMoveEnd:onKeyboardMoveEnd,onKeyboardMoveInteractive:onKeyboardMoveInteractive}=handlers;if(onKeyboardMoveStart&&event.eventName.endsWith("onKeyboardMoveStart")){onKeyboardMoveStart(event,context);}if(onKeyboardMove&&event.eventName.endsWith("onKeyboardMove")){onKeyboardMove(event,context);}if(onKeyboardMoveEnd&&event.eventName.endsWith("onKeyboardMoveEnd")){onKeyboardMoveEnd(event,context);}if(onKeyboardMoveInteractive&&event.eventName.endsWith("onKeyboardMoveInteractive")){onKeyboardMoveInteractive(event,context);}}',
};
const __initData2 = {
  code: 'function pnpm_reanimatedNativeTs2(event){const{handlers,context}=this.__closure;const{onFocusedInputLayoutChanged:onFocusedInputLayoutChanged}=handlers;if(onFocusedInputLayoutChanged&&event.eventName.endsWith("onFocusedInputLayoutChanged")){onFocusedInputLayoutChanged(event,context);}}',
};

export const useAnimatedKeyboardHandler = (handlers, items10) => {
  closure_0 = handlers;
  const handler = cancelAnimation.useHandler(handlers, items10);
  const context = handler.context;
  const fn = function v(eventName) {
    ({ onKeyboardMoveStart, onKeyboardMove, onKeyboardMoveEnd, onKeyboardMoveInteractive } = closure_0);
    let endsWithResult = onKeyboardMoveStart;
    if (onKeyboardMoveStart) {
      eventName = eventName.eventName;
      endsWithResult = eventName.endsWith("onKeyboardMoveStart");
    }
    if (endsWithResult) {
      onKeyboardMoveStart(eventName, context);
    }
    let endsWithResult1 = onKeyboardMove;
    if (onKeyboardMove) {
      const eventName2 = eventName.eventName;
      endsWithResult1 = eventName2.endsWith("onKeyboardMove");
    }
    if (endsWithResult1) {
      onKeyboardMove(eventName, context);
    }
    let endsWithResult2 = onKeyboardMoveEnd;
    if (onKeyboardMoveEnd) {
      const eventName3 = eventName.eventName;
      endsWithResult2 = eventName3.endsWith("onKeyboardMoveEnd");
    }
    if (endsWithResult2) {
      onKeyboardMoveEnd(eventName, context);
    }
    let endsWithResult3 = onKeyboardMoveInteractive;
    if (onKeyboardMoveInteractive) {
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
  return cancelAnimation.useEvent(
    fn,
    ["onKeyboardMoveStart", "onKeyboardMove", "onKeyboardMoveEnd", "onKeyboardMoveInteractive"],
    handler.doDependenciesDiffer,
  );
};
export const useFocusedInputLayoutHandler = (handlers, items10) => {
  const handler = cancelAnimation.useHandler(handlers, items10);
  const context = handler.context;
  const fn = function v(eventName) {
    const onFocusedInputLayoutChanged = handlers.onFocusedInputLayoutChanged;
    let endsWithResult = onFocusedInputLayoutChanged;
    if (onFocusedInputLayoutChanged) {
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
  return cancelAnimation.useEvent(fn, ["onFocusedInputLayoutChanged"], handler.doDependenciesDiffer);
};
