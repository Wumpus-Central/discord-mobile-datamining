// === Module 16732: ? ===

// Module 16732
import _modDef16728 from "module_16728" /* 16728 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedHeaderHeight() {
  const context = noop.useContext(_modDef16728);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height using Reanimated. Are you inside a screen in a navigator with a header and your NavigationContainer is wrapped in ReanimatedScreenProvider?");
    throw error;
  } else {
    return context;
  }
};