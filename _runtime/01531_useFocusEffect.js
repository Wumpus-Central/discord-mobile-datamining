// _runtime/01531_useFocusEffect.js
import noop from "noop";
import { useNavigation } from "01532_useNavigation.js";


export default function useFocusEffect(c5) {
  const importDefault = c5;
  let tmp = useNavigation();
  const dependencyMap = tmp;
  if (undefined !== arguments[1]) {
    const _console = console;
    console.error("You passed a second argument to 'useFocusEffect', but it only accepts one argument. If you want to pass a dependency array, you can use 'React.useCallback':\n\nuseFocusEffect(\n  React.useCallback(() => {\n    // Your code here\n  }, [depA, depB])\n);\n\nSee usage guide: https://reactnavigation.org/docs/use-focus-effect");
  }
  const items = [c5, tmp];
  const effect = React.useEffect(() => {
    let tmp = false;
    if (tmp.isFocused()) {
      tmp = c5;
      const tmp2 = c5();
      if (undefined === tmp2) {
        let tmp3 = tmp2;
      }
      c5 = tmp3;
      tmp = true;
    }
    let noop = obj.addListener("focus", () => {
      if (!c1) {
        if (undefined !== tmp3) {
          tmp3();
        }
        tmp3 = tmp3();
        if (undefined === tmp3) {
          const tmp4 = tmp3;
        }
        tmp3 = tmp4;
        c1 = true;
      }
    });
    let closure_3 = obj.addListener("blur", () => {
      if (undefined !== tmp3) {
        tmp3();
      }
      let c1 = false;
    });
    return () => {
      if (undefined !== tmp3) {
        tmp3();
      }
      callback();
      tmp3 = callback2();
    };
  }, items);
};