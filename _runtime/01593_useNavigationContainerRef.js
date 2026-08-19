// === Module 1593: useNavigationContainerRef ===

// Module 1593 (useNavigationContainerRef)
import createNavigationContainerRef from "createNavigationContainerRef" /* 1526 */;
import noop from "noop" /* 19 */;

require = arg1;

export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = React.useRef(null);
  if (null == ref.current) {
    ref.current = createNavigationContainerRef.createNavigationContainerRef();
  }
  return ref.current;
};