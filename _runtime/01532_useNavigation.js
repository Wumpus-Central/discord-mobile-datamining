// _runtime/01532_useNavigation.js
import noop from "noop";


export default function useNavigation() {
  const context = React.useContext(importDefault(1503));
  let context1 = React.useContext(importDefault(1508));
  if (undefined === context1) {
    if (undefined === context) {
      const _Error = Error;
      const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    }
  }
  if (context1 == null) {
    context1 = context;
  }
  return context1;
};