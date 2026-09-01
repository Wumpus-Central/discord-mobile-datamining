// _runtime/00493_useAnimatedColor.js
import noop from "00019_noop.js";
import get_FlatListDefault from "00397_get_FlatList.js";

const useRef = noop.useRef;

export default function useAnimatedColor(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const color = new get_FlatListDefault.Color(arg0, arg1);
    tmp.current = color;
  }
  return tmp.current;
}
