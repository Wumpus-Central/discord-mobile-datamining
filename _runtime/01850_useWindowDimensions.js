// _runtime/01850_useWindowDimensions.js
import closure_2 from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";
import { Dimensions } from "00017_get_ActivityIndicator.js";
import { WindowDimensionsEvents } from "01644_nativeEventEmitter.js";

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