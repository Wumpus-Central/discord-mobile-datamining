// _runtime/01551_useNavigationContainerRef.js
import noop from "noop";


export default function useNavigationContainerRef() {
  const ref = React.useRef(null);
  if (null == ref.current) {
    ref.current = require("01498_createNavigationContainerRef.js")();
  }
  return ref.current;
};