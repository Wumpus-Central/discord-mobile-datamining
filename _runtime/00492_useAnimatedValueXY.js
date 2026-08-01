// === Module 492: useAnimatedValueXY ===

// Module 492 (useAnimatedValueXY)
import { useRef } from "noop";


export default function useAnimatedValueXY(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const valueXY = new importDefault(397).ValueXY(arg0, arg1);
    tmp.current = valueXY;
  }
  return tmp.current;
};