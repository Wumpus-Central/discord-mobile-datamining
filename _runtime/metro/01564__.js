// === Module 1564: ? ===

// Module 1564
import NavigationContext from "NavigationContext" /* 1529 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useFocusEvents = function useFocusEvents(arg0) {
  ({ state, emitter } = arg0);
  const context = noop.useContext(NavigationContext.NavigationContext);
  noop.useRef(undefined);
  const key = state.routes[state.index].key;
  const items = [key, emitter, context];
  const effect = noop.useEffect(() => {
    let addListenerResult;
    if (context != null) {
      addListenerResult = context.addListener("focus", () => {
        ref.current = target;
        emitter.emit({ type: "focus", target });
      });
    }
    return addListenerResult;
  }, items);
  const items1 = [key, emitter, context];
  const effect1 = noop.useEffect(() => {
    let addListenerResult;
    if (context != null) {
      addListenerResult = context.addListener("blur", () => {
        ref.current = undefined;
        emitter.emit({ type: "blur", target });
      });
    }
    return addListenerResult;
  }, items1);
  const items2 = [key, emitter, context];
  const effect2 = noop.useEffect(() => {
    const current = ref.current;
    let isFocusedResult = !context;
    if (context) {
      isFocusedResult = context.isFocused();
    }
    if (isFocusedResult) {
      ref.current = key;
    }
    let tmp5 = tmp4;
    if (undefined === current) {
      tmp5 = context;
    }
    if (!tmp5) {
      const obj2 = { type: "focus", target: key };
      emitter.emit(obj2);
    }
    let tmp10 = current !== key;
    if (tmp10) {
      tmp10 = isFocusedResult;
    }
    if (tmp10) {
      tmp10 = tmp4;
    }
    if (tmp10) {
      const obj3 = { type: "blur", target: current };
      emitter.emit(obj3);
      const obj4 = { type: "focus", target: key };
      emitter.emit(obj4);
    }
  }, items2);
};