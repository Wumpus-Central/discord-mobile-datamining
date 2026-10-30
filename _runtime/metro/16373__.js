// === Module 16373: ? ===

// Module 16373
import _modDef16369 from "module_16369" /* 16369 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedHeaderHeight() {
  const context = noop.useContext(_modDef16369);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height using Reanimated. Are you inside a screen in a navigator with a header and your NavigationContainer is wrapped in ReanimatedScreenProvider?");
    throw error;
  } else {
    return context;
  }
};