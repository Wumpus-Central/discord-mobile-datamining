// _runtime/01573_useFocusEffect.js
import noop from "00019_noop.js";

const require = arg1;

export const useFocusEffect = function useFocusEffect(closure_2) {
  const _require = closure_2;
  navigation = _require(navigation[1]).useNavigation();
  if (undefined !== arguments[1]) {
    const _console = console;
    console.error("You passed a second argument to 'useFocusEffect', but it only accepts one argument. If you want to pass a dependency array, you can use 'React.useCallback':\n\nuseFocusEffect(\n  React.useCallback(() => {\n    // Your code here\n  }, [depA, depB])\n);\n\nSee usage guide: https://reactnavigation.org/docs/use-focus-effect");
  }
  const items = [closure_2, navigation];
  const effect = React.useEffect(() => {
    navigation = false;
    if (navigation.isFocused()) {
      const tmp2 = callback();
      if (undefined === tmp2) {
        let tmp3 = tmp2;
      }
      callback = tmp3;
      navigation = true;
    }
    closure_2 = obj.addListener("focus", () => {
      if (!c1) {
        if (undefined !== callback) {
          callback();
        }
        const tmp3 = callback();
        if (undefined === tmp3) {
          const tmp4 = tmp3;
        }
        callback = tmp4;
        c1 = true;
      }
    });
    closure_3 = obj.addListener("blur", () => {
      if (undefined !== callback) {
        callback();
      }
      callback = undefined;
      c1 = false;
    });
    return () => {
      if (undefined !== callback) {
        callback();
      }
      callback2();
      callback3();
    };
  }, items);
};