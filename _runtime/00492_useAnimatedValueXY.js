// _runtime/00492_useAnimatedValueXY.js
import { useRef } from "noop";


export default function useAnimatedValueXY(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const valueXY = new importDefault(397).ValueXY(arg0, arg1);
    tmp.current = valueXY;
  }
  return tmp.current;
};