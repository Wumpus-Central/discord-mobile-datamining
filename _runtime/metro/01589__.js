// _runtime/metro/01589__.js
import noop from "00019__.js";

fn(17).BackHandler;

export const useBackButton = function useBackButton(ref) {
  noop = ref;
  const items = [ref];
  const effect = noop.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
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
