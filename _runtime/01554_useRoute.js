import { noop } from "01507_noop.js";
// _runtime/01554_useRoute.js
import noop from "noop";


export default function useRoute() {
  const context = React.useContext(noop);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
};