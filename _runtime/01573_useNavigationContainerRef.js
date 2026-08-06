// _runtime/01573_useNavigationContainerRef.js
import noop from "noop";
import { createNavigationContainerRef } from "01506_createNavigationContainerRef.js";

const require = arg1;

export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = React.useRef(null);
  if (null == ref.current) {
    ref.current = createNavigationContainerRef.createNavigationContainerRef();
    const obj = createNavigationContainerRef;
  }
  return ref.current;
};