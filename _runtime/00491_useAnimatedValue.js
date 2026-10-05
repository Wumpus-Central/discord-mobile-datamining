// _runtime/00491_useAnimatedValue.js
import react from "00019_react.js";
import get_FlatListDefault from "00397_get_FlatList.js";

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
}
