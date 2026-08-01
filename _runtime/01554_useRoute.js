// === Module 1554: useRoute ===

// Module 1554 (useRoute)
import noop from "noop";


export default function useRoute() {
  const context = React.useContext(importDefault(1507));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
};