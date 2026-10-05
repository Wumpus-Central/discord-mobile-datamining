// === Module 493: useAnimatedColor ===

// Module 493 (useAnimatedColor)
import react from "react" /* 19 */;
import get_FlatListDefault from "get FlatList" /* 397 */;

const useRef = react.useRef;

export default function useAnimatedColor(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const self = this;
    const self2 = this;
    const color = new get_FlatListDefault.Color(arg0, arg1);
    tmp.current = color;
  }
  return tmp.current;
};