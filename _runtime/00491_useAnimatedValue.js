// === Module 491: useAnimatedValue ===

// Module 491 (useAnimatedValue)
import react from "react" /* 19 */;
import get_FlatListDefault from "get FlatList" /* 397 */;

const useRef = react.useRef;

export default function useAnimatedValue(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const self = this;
    const self2 = this;
    const value = new get_FlatListDefault.Value(arg0, arg1);
    tmp.current = value;
  }
  return tmp.current;
};