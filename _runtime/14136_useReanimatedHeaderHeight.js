// _runtime/14136_useReanimatedHeaderHeight.js
import noopDefault from "14132_noop.js";
import closure_2 from "00019_noop.js";


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