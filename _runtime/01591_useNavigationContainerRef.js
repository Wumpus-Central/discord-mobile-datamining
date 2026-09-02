// === Module 1591: useNavigationContainerRef ===

// Module 1591 (useNavigationContainerRef)
import createNavigationContainerRef from "createNavigationContainerRef" /* 1524 */;
import closure_2 from "noop" /* 19 */;

require = arg1;

export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = React.useRef(null);
  if (null == ref.current) {
    ref.current = createNavigationContainerRef.createNavigationContainerRef();
    const obj = createNavigationContainerRef;
  }
  return ref.current;
};