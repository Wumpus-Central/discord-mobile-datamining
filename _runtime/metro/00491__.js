// === Module 491: ? ===

// Module 491
import _mod19 from "module_19" /* 19 */;
import get_FlatListDefault from "get FlatList" /* 397 */;

const useRef = _mod19.useRef;

export default function useAnimatedValue(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    value = new get_FlatListDefault.Value(arg0, arg1);
    tmp.current = value;
  }
  return tmp.current;
};