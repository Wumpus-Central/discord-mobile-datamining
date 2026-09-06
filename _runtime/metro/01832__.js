// === Module 1832: ? ===

// Module 1832
import _slicedToArray from "module_32" /* 32 */;

const require = fn;
const noop = fn(19);
({ useEffect: c3, useState: closure_4 } = noop);
const Dimensions = fn(17).Dimensions;
const size = Dimensions.get("window");
let global = { width: size.width, height: size.height };
let WindowDimensionsEvents = fn(1626).WindowDimensionsEvents;
WindowDimensionsEvents.addListener("windowDidResize", (arg0) => {
  global = arg0;
});

export const useWindowDimensions = () => {
  const tmp = _slicedToArray(closure_4(global), 2);
  closure_0 = tmp[1];
  closure_3(() => {
    const WindowDimensionsEvents = closure_0(dependencyMap[3]).WindowDimensionsEvents;
    closure_0 = WindowDimensionsEvents.addListener("windowDidResize", (arg0) => {
      closure_0(arg0);
    });
    closure_0(global);
    return () => {
      closure_0.remove();
    };
  }, []);
  return tmp[0];
};