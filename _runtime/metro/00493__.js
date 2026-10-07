// _runtime/metro/00493__.js
import _mod19 from "00019__.js";
import get_FlatListDefault from "../00397_get_FlatList.js";

const useRef = _mod19.useRef;

export default function useAnimatedColor(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const color = new get_FlatListDefault.Color(arg0, arg1);
    tmp.current = color;
  }
  return tmp.current;
}
