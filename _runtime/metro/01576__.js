// _runtime/metro/01576__.js
import NOT_INITIALIZED_ERROR from "../01509_NOT_INITIALIZED_ERROR.js";
import noop from "00019__.js";

require = arg1;

export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = noop.useRef(null);
  if (null == ref.current) {
    ref.current = NOT_INITIALIZED_ERROR.createNavigationContainerRef();
  }
  return ref.current;
};
