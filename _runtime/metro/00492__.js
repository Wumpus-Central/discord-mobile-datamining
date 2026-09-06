// _runtime/metro/00492__.js
import _mod19 from "00019__.js";
import get_FlatListDefault from "../00397_get_FlatList.js";

const useRef = _mod19.useRef;

export default function useAnimatedValueXY(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const valueXY = new get_FlatListDefault.ValueXY(arg0, arg1);
    tmp.current = valueXY;
  }
  return tmp.current;
}
