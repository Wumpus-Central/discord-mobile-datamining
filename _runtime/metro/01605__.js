// === Module 1605: ? ===

// Module 1605
import noop from "module_19" /* 19 */;

fn(17).BackHandler;

export function useBackButton(ref) {
  noop = ref;
  items = [ref];
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
}