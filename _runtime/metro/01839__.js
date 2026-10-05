// === Module 1839: ? ===

// Module 1839
import react_native from "react-native" /* 17 */;
import KeyboardControllerNative from "KeyboardControllerNative" /* 1633 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

let c3;
let closure_4;
({ useEffect: c3, useState: closure_4 } = react);
const Dimensions = react_native.Dimensions;
const size = Dimensions.get("window");
let closure_5 = { width: size.width, height: size.height };
let WindowDimensionsEvents = KeyboardControllerNative.WindowDimensionsEvents;
WindowDimensionsEvents.addListener("windowDidResize", (arg0) => {
  closure_5 = arg0;
});

export const useWindowDimensions = () => {
  let closure_0;
  let first;
  [first, closure_0] = closure_4(closure_5);
  closure_3(() => {
    const WindowDimensionsEvents = closure_0(dependencyMap[3]).WindowDimensionsEvents;
    closure_0 = WindowDimensionsEvents.addListener("windowDidResize", (arg0) => {
      closure_0(arg0);
    });
    closure_0(closure_1_5);
    return () => {
      closure_0.remove();
    };
  }, []);
  return first;
};