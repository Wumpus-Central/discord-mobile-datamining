// _runtime/metro/00301__.js
import _modDef292 from "00292__.js";
import noop from "00019__.js";

({ useInsertionEffect: c2, useRef: c3 } = noop);

export default function usePressability(arg0) {
  closure_0 = arg0;
  const tmp = React3(null);
  if (tmp2) {
    const tmp8 = new _modDef292(arg0);
    tmp.current = tmp8;
  }
  const current = tmp.current;
  const items = [arg0, current];
  React2(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null != current;
    }
    if (tmp2) {
      current.configure(closure_0);
    }
  }, items);
  const items1 = [current];
  React2(
    () =>
      null != current
        ? () => {
            navigation.reset();
          }
        : undefined,
    items1,
  );
  let eventHandlers = null;
  if (null != current) {
    eventHandlers = current.getEventHandlers();
  }
  return eventHandlers;
}
