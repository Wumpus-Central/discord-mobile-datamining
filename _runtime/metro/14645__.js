// === Module 14645: ? ===

// Module 14645
import _modDef14641 from "module_14641" /* 14641 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedHeaderHeight() {
  const context = noop.useContext(_modDef14641);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height using Reanimated. Are you inside a screen in a navigator with a header and your NavigationContainer is wrapped in ReanimatedScreenProvider?");
    throw error;
  } else {
    return context;
  }
};