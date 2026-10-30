// _runtime/metro/16373__.js
import _modDef16369 from "16369__.js";
import noop from "00019__.js";

export default function useReanimatedHeaderHeight() {
  const context = noop.useContext(_modDef16369);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error(
      "Couldn't find the header height using Reanimated. Are you inside a screen in a navigator with a header and your NavigationContainer is wrapped in ReanimatedScreenProvider?",
    );
    throw error;
  } else {
    return context;
  }
}
