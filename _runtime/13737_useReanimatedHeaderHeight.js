// _runtime/13737_useReanimatedHeaderHeight.js
import noop from "noop";


export default function useReanimatedHeaderHeight() {
  const context = React.useContext(importDefault(13733));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height using Reanimated. Are you inside a screen in a navigator with a header and your NavigationContainer is wrapped in ReanimatedScreenProvider?");
    throw error;
  } else {
    return context;
  }
};