// === Module 1603: ? ===

// Module 1603
import noop from "module_19" /* 19 */;

fn(17).BackHandler;

export function useBackButton(ref) {
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
}