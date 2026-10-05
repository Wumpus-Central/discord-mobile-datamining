// _runtime/00492_useAnimatedValueXY.js
import react from "00019_react.js";
import get_FlatListDefault from "00397_get_FlatList.js";

const useRef = react.useRef;

export default function useAnimatedValueXY(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const self = this;
    const self2 = this;
    const valueXY = new get_FlatListDefault.ValueXY(arg0, arg1);
    tmp.current = valueXY;
  }
  return tmp.current;
}
