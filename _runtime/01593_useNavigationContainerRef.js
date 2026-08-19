// _runtime/01593_useNavigationContainerRef.js
import createNavigationContainerRef from "01526_createNavigationContainerRef.js";
import noop from "00019_noop.js";

require = arg1;

export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = React.useRef(null);
  if (null == ref.current) {
    ref.current = createNavigationContainerRef.createNavigationContainerRef();
  }
  return ref.current;
};