// === Module 1569: react ===

// Module 1569 (react)
import react2 from "react" /* 1534 */;
import react from "react" /* 19 */;


export const useFocusEvents = function useFocusEvents(arg0) {
  let emitter;
  let state;
  ({ state, emitter } = arg0);
  const context = react.useContext(react2.NavigationContext);
  let closure_2 = react.useRef(undefined);
  const key = state.routes[state.index].key;
  const items = [key, emitter, context];
  const effect = react.useEffect(() => {
    let addListenerResult;
    if (context != null) {
      addListenerResult = context.addListener("focus", () => {
        ref.current = target;
        const obj = { type: "focus", target };
        emitter.emit(obj);
      });
    }
    return addListenerResult;
  }, items);
  const items1 = [key, emitter, context];
  const effect1 = react.useEffect(() => {
    let target;
    let addListenerResult;
    if (context != null) {
      addListenerResult = context.addListener("blur", () => {
        ref.current = undefined;
        const obj = { type: "blur", target };
        emitter.emit(obj);
      });
    }
    return addListenerResult;
  }, items1);
  const items2 = [key, emitter, context];
  const effect2 = react.useEffect(() => {
    const current = ref.current;
    let isFocusedResult = !context;
    if (context) {
      isFocusedResult = context.isFocused();
    }
    if (isFocusedResult) {
      ref.current = key;
    }
    const tmp5 = undefined !== current || context;
    if (!tmp5) {
      const obj2 = { type: "focus", target: key };
      emitter.emit(obj2);
    }
    const tmp10 = current !== key && isFocusedResult && tmp4;
    if (tmp10) {
      const obj3 = { type: "blur", target: current };
      emitter.emit(obj3);
      const obj4 = { type: "focus", target: key };
      emitter.emit(obj4);
    }
  }, items2);
};