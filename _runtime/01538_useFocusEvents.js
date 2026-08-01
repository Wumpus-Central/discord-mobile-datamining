// === Module 1538: useFocusEvents ===

// Module 1538 (useFocusEvents)
import noop from "noop";


export default function useFocusEvents(arg0) {
  let emitter;
  let state;
  ({ state, emitter } = arg0);
  let context;
  let React;
  let key;
  context = React.useContext(emitter(context[1]));
  React = React.useRef();
  key = state.routes[state.index].key;
  const items = [key, emitter, context];
  const effect = React.useEffect(() => {
    let addListenerResult;
    if (context != null) {
      addListenerResult = context.addListener("focus", () => {
        noop.current = closure_3;
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
        noop.current = undefined;
        closure_0.emit({ type: "blur", target: closure_3 });
      });
    }
    return addListenerResult;
  }, items1);
  const items2 = [key, emitter, context];
  const effect2 = React.useEffect(() => {
    const current = ref.current;
    ref.current = key;
    let tmp3 = tmp2;
    if (undefined === current) {
      tmp3 = context;
    }
    if (!tmp3) {
      let obj = { type: "focus", target: null };
      obj[1] = tmp;
      emitter.emit(obj);
    }
    let tmp6 = current === tmp;
    if (!tmp6) {
      let tmp7 = context;
      if (context) {
        tmp7 = !obj2.isFocused();
      }
      tmp6 = tmp7;
      obj2 = context;
    }
    if (!tmp6) {
      if (tmp2) {
        obj = { type: "blur", target: null };
        obj[1] = current;
        emitter.emit(obj);
        obj = { type: "focus", target: null };
        obj[1] = tmp;
        emitter.emit(obj);
      }
    }
  }, items2);
};