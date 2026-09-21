// === Module 14848: ? ===

// Module 14848
import _modDef14844 from "module_14844" /* 14844 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedHeaderHeight() {
  const context = noop.useContext(_modDef14844);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height using Reanimated. Are you inside a screen in a navigator with a header and your NavigationContainer is wrapped in ReanimatedScreenProvider?");
    throw error;
  } else {
    return context;
  }
};