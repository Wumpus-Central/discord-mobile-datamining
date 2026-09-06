// _runtime/metro/01562__.js
import NavigationContext from "../01527_NavigationContext.js";
import noop from "00019__.js";

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
    let obj = context;
    let isFocusedResult = !context;
    if (context) {
      isFocusedResult = obj.isFocused();
    }
    if (isFocusedResult) {
      ref.current = key;
    }
    let tmp5 = tmp4;
    if (undefined === current) {
      tmp5 = obj;
    }
    if (!tmp5) {
      obj = { type: "focus", target: key };
      emitter.emit(obj);
    }
    let tmp10 = current !== key;
    if (tmp10) {
      tmp10 = isFocusedResult;
    }
    if (tmp10) {
      tmp10 = tmp4;
    }
    if (tmp10) {
      obj = { type: "blur", target: current };
      emitter.emit(obj);
      const obj1 = { type: "focus", target: key };
      emitter.emit(obj1);
    }
  }, items2);
};
