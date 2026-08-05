import { createNavigationContainerRef } from "01498_createNavigationContainerRef.js";
// _runtime/01551_useNavigationContainerRef.js
import noop from "noop";


export default function useNavigationContainerRef() {
  const ref = React.useRef(null);
  if (null == ref.current) {
    ref.current = createNavigationContainerRef();
  }
  return ref.current;
};