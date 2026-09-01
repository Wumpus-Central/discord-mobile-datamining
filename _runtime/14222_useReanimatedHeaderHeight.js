// === Module 14222: useReanimatedHeaderHeight ===

// Module 14222 (useReanimatedHeaderHeight)
import noopDefault from "noop" /* 14218 */;
import closure_2 from "noop" /* 19 */;


export default function useReanimatedHeaderHeight() {
  const context = React.useContext(noopDefault);
  if (undefined === context) {
    const _Error = Error;
    error = new Error("Couldn't find the header height using Reanimated. Are you inside a screen in a navigator with a header and your NavigationContainer is wrapped in ReanimatedScreenProvider?");
    throw error;
  } else {
    return context;
  }
};