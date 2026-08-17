// _runtime/01593_useNavigationContainerRef.js
import createNavigationContainerRef from "01526_createNavigationContainerRef.js";
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