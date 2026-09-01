// _runtime/01592_useNavigationContainerRef.js
import createNavigationContainerRef from "01525_createNavigationContainerRef.js";
import closure_2 from "00019_noop.js";

require = arg1;

export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = React.useRef(null);
  if (null == ref.current) {
    ref.current = createNavigationContainerRef.createNavigationContainerRef();
    const obj = createNavigationContainerRef;
  }
  return ref.current;
};
