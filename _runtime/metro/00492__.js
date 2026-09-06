// === Module 492: ? ===

// Module 492
import _mod19 from "module_19" /* 19 */;
import get_FlatListDefault from "get FlatList" /* 397 */;

const useRef = _mod19.useRef;

export default function useAnimatedValueXY(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const valueXY = new get_FlatListDefault.ValueXY(arg0, arg1);
    tmp.current = valueXY;
  }
  return tmp.current;
};