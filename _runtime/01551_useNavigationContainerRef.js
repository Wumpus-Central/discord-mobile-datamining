// === Module 1551: useNavigationContainerRef ===

// Module 1551 (useNavigationContainerRef)
import noop from "noop";


export default function useNavigationContainerRef() {
  const ref = React.useRef(null);
  if (null == ref.current) {
    ref.current = importDefault(1498)();
  }
  return ref.current;
};