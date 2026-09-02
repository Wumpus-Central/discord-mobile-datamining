// _runtime/01577_useFocusEvents.js
import closure_2 from "00019_noop.js";

const require = arg1;

export const useFocusEvents = function useFocusEvents(arg0) {
  ({ state, emitter } = arg0);
  let context;
  let React;
  let key;
  context = React.useContext(emitter(context[1]).NavigationContext);
  React = React.useRef(undefined);
  key = state.routes[state.index].key;
  const items = [key, emitter, context];
  const effect = React.useEffect(() => {
    let addListenerResult;
    if (context != null) {
      addListenerResult = context.addListener("focus", () => {
        closure_2.current = closure_3;
        closure_0.emit({ type: "focus", target: closure_3 });
      });
    }
    return addListenerResult;
  }, items);
  const items1 = [key, emitter, context];
  const effect1 = React.useEffect(() => {
    let addListenerResult;
    if (context != null) {
      addListenerResult = context.addListener("blur", () => {
        closure_2.current = undefined;
        closure_0.emit({ type: "blur", target: closure_3 });
      });
    }
    return addListenerResult;
  }, items1);
  const items2 = [key, emitter, context];
  const effect2 = React.useEffect(() => {
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
      obj = { type: "focus", target: null };
      obj[1] = key;
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
      obj = { type: "blur", target: null };
      obj[1] = current;
      emitter.emit(obj);
      obj1 = { type: "focus", target: null };
      obj1[1] = key;
      emitter.emit(obj1);
    }
  }, items2);
};
