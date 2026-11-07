// === Module 1897: ? ===

// Module 1897
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

({ useEffect: c2, useRef: c3 } = noop);

export function useHandler(ChannelListLegendListTsx1, items26) {
  _require = ChannelListLegendListTsx1;
  const tmp = closure_3(null);
  if (null === tmp.current) {
    tmp.current = { context: "Array", prevHandlers: "flexDirection" };
  }
  const current = tmp.current;
  let obj = require("areDependenciesEqual");
  closure_2(() => {
    current.prevHandlers = prevHandlers;
  });
  const obj2 = {};
  Object.defineProperty(obj2, "context", {
    get: () => {
      if (undefined === current.context) {
        current.context = require("module_1705").makeShareable({});
        const obj = require("module_1705");
      }
      return current.context;
    },
    set: undefined
  });
  obj2.doDependenciesDiffer = !require("areDependenciesEqual").areWorkletHandlersEqual(ChannelListLegendListTsx1, current.prevHandlers);
  return obj2;
}