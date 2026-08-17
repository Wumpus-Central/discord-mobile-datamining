// _runtime/00491_useAnimatedValue.js
import noop from "noop" /* 19 */;
import get_FlatListDefault from "get FlatList" /* 397 */;

const useRef = noop.useRef;

export default function useAnimatedValue(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const value = new get_FlatListDefault.Value(arg0, arg1);
    tmp.current = value;
  }
  return tmp.current;
};