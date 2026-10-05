// _runtime/01583_react.js
import NOT_INITIALIZED_ERROR from "01516_NOT_INITIALIZED_ERROR.js";
import react from "00019_react.js";

export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = react.useRef(null);
  if (null == ref.current) {
    const obj = NOT_INITIALIZED_ERROR;
    ref.current = obj.createNavigationContainerRef();
  }
  return ref.current;
};
