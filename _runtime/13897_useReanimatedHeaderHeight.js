// _runtime/13897_useReanimatedHeaderHeight.js
import noop from "noop";
import { noop } from "13893_noop.js";


export default function useReanimatedHeaderHeight() {
  const context = React.useContext(noop);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height using Reanimated. Are you inside a screen in a navigator with a header and your NavigationContainer is wrapped in ReanimatedScreenProvider?");
    throw error;
  } else {
    return context;
  }
};