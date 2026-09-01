// _runtime/00491_useAnimatedValue.js
import noop from "00019_noop.js";
import get_FlatListDefault from "00397_get_FlatList.js";

const useRef = noop.useRef;

export default function useAnimatedValue(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const value = new get_FlatListDefault.Value(arg0, arg1);
    tmp.current = value;
  }
  return tmp.current;
}
