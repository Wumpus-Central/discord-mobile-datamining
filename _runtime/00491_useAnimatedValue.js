// === Module 491: useAnimatedValue ===

// Module 491 (useAnimatedValue)
import { useRef } from "noop";


export default function useAnimatedValue(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const value = new importDefault(397).Value(arg0, arg1);
    tmp.current = value;
  }
  return tmp.current;
};