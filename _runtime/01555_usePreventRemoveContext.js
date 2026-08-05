// _runtime/01555_usePreventRemoveContext.js
import noop from "noop";
import { noop } from "01527_noop.js";


export default function usePreventRemoveContext() {
  const context = React.useContext(noop);
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find the prevent remove context. Is your component inside NavigationContent?");
    throw error;
  } else {
    return context;
  }
};