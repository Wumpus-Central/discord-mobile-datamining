// === Module 1832: useWindowDimensions ===

// Module 1832 (useWindowDimensions)
import closure_2 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { Dimensions } from "get ActivityIndicator" /* 17 */;
import { WindowDimensionsEvents } from "nativeEventEmitter" /* 1626 */;

const require = arg1;
({ useEffect: c3, useState: c4 } = noop);
const size = Dimensions.get("window");
let closure_5 = { width: size.width, height: size.height };
WindowDimensionsEvents.addListener("windowDidResize", (arg0) => {
  closure_5 = arg0;
});

export const useWindowDimensions = () => {
  const tmp = callback(callback3(closure_5), 2);
  closure_0 = tmp[1];
  callback2(() => {
    const WindowDimensionsEvents = callback(closure_1_1[3]).WindowDimensionsEvents;
    callback = WindowDimensionsEvents.addListener("windowDidResize", (arg0) => {
      lib(arg0);
    });
    callback(closure_1_5);
    return () => {
      lib.remove();
    };
  }, []);
  return tmp[0];
};