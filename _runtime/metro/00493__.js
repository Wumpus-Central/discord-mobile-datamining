// === Module 493: ? ===

// Module 493
import _mod19 from "module_19" /* 19 */;
import get_FlatListDefault from "get FlatList" /* 397 */;

const useRef = _mod19.useRef;

export default function useAnimatedColor(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const color = new get_FlatListDefault.Color(arg0, arg1);
    tmp.current = color;
  }
  return tmp.current;
};