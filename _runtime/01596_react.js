// === Module 1596: react ===

// Module 1596 (react)
import react_native from "react-native" /* 17 */;
import react_mod from "react" /* 19 */;

let react = react_mod;
const BackHandler = react_native.BackHandler;

export const useBackButton = function useBackButton(ref) {
  react = ref;
  const items = [ref];
  const effect = react.useEffect(() => {
    ref = BackHandler.addEventListener("hardwareBackPress", () => {
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