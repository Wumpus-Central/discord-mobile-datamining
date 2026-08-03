import noop from "noop";


export default function usePreventRemoveContext() {
  const context = React.useContext(importDefault(1527));
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find the prevent remove context. Is your component inside NavigationContent?");
    throw error;
  } else {
    return context;
  }
};