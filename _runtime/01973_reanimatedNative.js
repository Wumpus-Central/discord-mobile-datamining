// _runtime/01973_reanimatedNative.js
import _mod1655 from "metro/01655__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "(function pnpm_reanimatedNativeTs1(event){let[handlers,context]=this.__closure;const{onKeyboardMoveStart:onKeyboardMoveStart,onKeyboardMove:onKeyboardMove,onKeyboardMoveEnd:onKeyboardMoveEnd,onKeyboardMoveInteractive:onKeyboardMoveInteractive}=handlers;if(onKeyboardMoveStart&&event.eventName.endsWith(\"onKeyboardMoveStart\")){onKeyboardMoveStart(event,context);}if(onKeyboardMove&&event.eventName.endsWith(\"onKeyboardMove\")){onKeyboardMove(event,context);}if(onKeyboardMoveEnd&&event.eventName.endsWith(\"onKeyboardMoveEnd\")){onKeyboardMoveEnd(event,context);}if(onKeyboardMoveInteractive&&event.eventName.endsWith(\"onKeyboardMoveInteractive\")){onKeyboardMoveInteractive(event,context);}})" };
let closure_3 = { code: "(function pnpm_reanimatedNativeTs2(event){let[handlers,context]=this.__closure;const{onFocusedInputLayoutChanged:onFocusedInputLayoutChanged}=handlers;if(onFocusedInputLayoutChanged&&event.eventName.endsWith(\"onFocusedInputLayoutChanged\")){onFocusedInputLayoutChanged(event,context);}})" };

export (ChannelListLegendListTsx1, items26) => {
  const handler = _mod1655.useHandler(ChannelListLegendListTsx1, items26);
  ({ context, doDependenciesDiffer } = handler);
  items = [closure_2, ChannelListLegendListTsx1, context];
  c0 = undefined;
  c1 = undefined;
  [tmp2, tmp3, tmp4] = items;
  function pnpm_reanimatedNativeTs1(eventName) {
    ({ onKeyboardMoveStart, onKeyboardMove, onKeyboardMoveEnd, onKeyboardMoveInteractive } = c0);
    let endsWithResult = onKeyboardMoveStart;
    if (onKeyboardMoveStart) {
      eventName = eventName.eventName;
      endsWithResult = eventName.endsWith("onKeyboardMoveStart");
    }
    if (endsWithResult) {
      onKeyboardMoveStart(eventName, c1);
    }
    let endsWithResult1 = onKeyboardMove;
    if (onKeyboardMove) {
      const eventName2 = eventName.eventName;
      endsWithResult1 = eventName2.endsWith("onKeyboardMove");
    }
    if (endsWithResult1) {
      onKeyboardMove(eventName, c1);
    }
    let endsWithResult2 = onKeyboardMoveEnd;
    if (onKeyboardMoveEnd) {
      const eventName3 = eventName.eventName;
      endsWithResult2 = eventName3.endsWith("onKeyboardMoveEnd");
    }
    if (endsWithResult2) {
      onKeyboardMoveEnd(eventName, c1);
    }
    let endsWithResult3 = onKeyboardMoveInteractive;
    if (onKeyboardMoveInteractive) {
      const eventName4 = eventName.eventName;
      endsWithResult3 = eventName4.endsWith("onKeyboardMoveInteractive");
    }
    if (endsWithResult3) {
      const result = onKeyboardMoveInteractive(eventName, c1);
    }
  }
  const items1 = [tmp3, tmp4];
  pnpm_reanimatedNativeTs1.__closure = items1;
  pnpm_reanimatedNativeTs1.__workletHash = 16708076715733;
  pnpm_reanimatedNativeTs1.__initData = tmp2;
  return _mod1655.useEvent(pnpm_reanimatedNativeTs1, ["onKeyboardMoveStart", "onKeyboardMove", "onKeyboardMoveEnd", "onKeyboardMoveInteractive"], doDependenciesDiffer);
}
export (ChannelListLegendListTsx1, items26) => {
  const handler = _mod1655.useHandler(ChannelListLegendListTsx1, items26);
  ({ context, doDependenciesDiffer } = handler);
  items = [closure_3, ChannelListLegendListTsx1, context];
  c0 = undefined;
  c1 = undefined;
  [tmp2, tmp3, tmp4] = items;
  function pnpm_reanimatedNativeTs2(eventName) {
    const onFocusedInputLayoutChanged = _undefined.onFocusedInputLayoutChanged;
    let endsWithResult = onFocusedInputLayoutChanged;
    if (onFocusedInputLayoutChanged) {
      eventName = eventName.eventName;
      endsWithResult = eventName.endsWith("onFocusedInputLayoutChanged");
    }
    if (endsWithResult) {
      const result = onFocusedInputLayoutChanged(eventName, c1);
    }
  }
  const items1 = [tmp3, tmp4];
  pnpm_reanimatedNativeTs2.__closure = items1;
  pnpm_reanimatedNativeTs2.__workletHash = 12445966948048;
  pnpm_reanimatedNativeTs2.__initData = tmp2;
  return _mod1655.useEvent(pnpm_reanimatedNativeTs2, ["onFocusedInputLayoutChanged"], doDependenciesDiffer);
}