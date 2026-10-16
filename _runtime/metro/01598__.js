// === Module 1598: ? ===

// Module 1598
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1531 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = noop.useRef(null);
  if (null == ref.current) {
    ref.current = NOT_INITIALIZED_ERROR.createNavigationContainerRef();
  }
  return ref.current;
};