// === Module 301: usePressability ===

// Module 301 (usePressability)
import noop from "noop";

let c3;
let obj1;
({ useInsertionEffect: obj1, useRef: c3 } = noop);

export default function usePressability(arg0) {
  const importDefault = arg0;
  const tmp = callback2(null);
  if (tmp2) {
    const tmp8 = new importDefault(current[1])(arg0);
    tmp.current = tmp8;
  }
  current = tmp.current;
  const items = [arg0, current];
  callback(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null != current;
    }
    if (tmp2) {
      current.configure(closure_0);
    }
  }, items);
  const items1 = [current];
  callback(() => null != current ? (() => {
    navigation.reset();
  }) : undefined, items1);
  let eventHandlers = null;
  if (null != current) {
    eventHandlers = current.getEventHandlers();
  }
  return eventHandlers;
};