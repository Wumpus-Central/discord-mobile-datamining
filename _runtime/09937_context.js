// _runtime/09937_context.js
import importAllResult from "00019_noop.js";

let c0 = importAllResult;
let context = importAllResult.createContext(undefined);

export const AnimatedHeaderHeightContext = context;
export const useAnimatedHeaderHeight = function useAnimatedHeaderHeight() {
  context = importAllResult.useContext(context);
  if (undefined === context) {
    const _Error = Error;
    error = new Error("Couldn't find the header height. Are you inside a screen in a native stack navigator?");
    throw error;
  } else {
    return context;
  }
};