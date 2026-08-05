// _runtime/00491_useAnimatedValue.js
import { useRef } from "noop";


export default function useAnimatedValue(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const value = new require("00397_get_FlatList.js").Value(arg0, arg1);
    tmp.current = value;
  }
  return tmp.current;
};