// _runtime/00493_useAnimatedColor.js
import { useRef } from "noop";


export default function useAnimatedColor(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const color = new importDefault(397).Color(arg0, arg1);
    tmp.current = color;
  }
  return tmp.current;
};