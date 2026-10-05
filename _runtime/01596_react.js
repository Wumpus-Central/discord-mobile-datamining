// _runtime/01596_react.js
import react_native from "00017_react-native.js";
import react_mod from "00019_react.js";

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
