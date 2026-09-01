// _runtime/01605_useBackButton.js
import closure_0 from "00019_noop.js";

require("get ActivityIndicator").BackHandler;

export const useBackButton = function useBackButton(ref) {
  const React = ref;
  const items = [ref];
  const effect = React.useEffect(() => {
    closure_0 = closure_1_1.addEventListener("hardwareBackPress", () => {
      const current = ref.current;
      let tmp = null != current;
      if (tmp) {
        let flag = current.canGoBack();
        if (flag) {
          current.goBack();
          flag = true;
        }
        tmp = flag;
      }
      return tmp;
    });
    return () => ref.remove();
  }, items);
};
