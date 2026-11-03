// _runtime/metro/01895__.js
import _mod19 from "00019__.js";
import findNodeHandle from "../01866_findNodeHandle.js";

let useRef = _mod19.useRef;

export function useAnimatedRefBase(arg0) {
  closure_0 = arg0;
  const current = useRef(new Map()).current;
  useRef = useRef(null);
  const tmp2 = useRef(null);
  if (!tmp2.current) {
    function fun(current) {
      let getScrollableNode = current;
      if (current) {
        ref.current = getScrollableNode(current);
        fun.getTag = () => {
          getScrollableNode = getScrollableNode.getScrollableNode;
          let scrollableNode;
          if (getScrollableNode != null) {
            scrollableNode = getScrollableNode();
          }
          if (!scrollableNode) {
            scrollableNode = findNodeHandle.findNodeHandle(getScrollableNode);
          }
          return scrollableNode;
        };
        fun.current = current;
        if (tag.size) {
          tag = undefined;
          if (fun != null) {
            const getTag = fun.getTag;
            if (getTag != null) {
              tag = getTag();
            }
          }
          if (tag == null) {
            tag = null;
          }
          const item = arr.forEach((fn, fn2) => {
            if (fn != null) {
              fn();
            }
            const result = current.set(fn2, fn2(tag));
          });
        }
        arr = tag;
      }
      return ref.current;
    }
    fun.observe = (fn) => {
      closure_0 = fn;
      let tag;
      if (fun != null) {
        const getTag = fun.getTag;
        if (getTag != null) {
          tag = getTag();
        }
      }
      if (tag == null) {
        tag = null;
      }
      const result = current.set(fn, fn(tag));
      return () => {
        value = current.get(closure_0);
        if (value != null) {
          value();
        }
        current.delete(closure_0);
      };
    };
    fun.current = null;
    tmp2.current = fun;
  }
  return tmp2.current;
}
