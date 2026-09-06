// _runtime/metro/07919__.js
import noop from "00019__.js";

let context = noop.createContext(undefined);

export const AnimatedHeaderHeightContext = context;
export const useAnimatedHeaderHeight = function useAnimatedHeaderHeight() {
  context = noop.useContext(context);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a native stack navigator?");
    throw error;
  } else {
    return context;
  }
};
