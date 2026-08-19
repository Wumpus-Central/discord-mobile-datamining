// _runtime/01606_useBackButton.js
import noop from "00019_noop.js";

require("get ActivityIndicator").BackHandler;

export const useBackButton = function useBackButton(ref) {
  const React = ref;
  const items = [ref];
  const effect = React.useEffect(() => {
    closure_0 = BackHandler.addEventListener("hardwareBackPress", (event) => {
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