// === Module 1556: ? ===

// Module 1556
import _mod1526 from "module_1526" /* 1526 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useFocusEffect = function useFocusEffect(noop) {
  let navigation = _mod1526.useNavigation();
  if (undefined !== arguments[1]) {
    const _console = console;
    console.error("You passed a second argument to 'useFocusEffect', but it only accepts one argument. If you want to pass a dependency array, you can use 'React.useCallback':\n\nuseFocusEffect(\n  React.useCallback(() => {\n    // Your code here\n  }, [depA, depB])\n);\n\nSee usage guide: https://reactnavigation.org/docs/use-focus-effect");
  }
  const items = [noop, navigation];
  const effect = noop.useEffect(() => {
    navigation = false;
    if (navigation.isFocused()) {
      const tmp2 = noop();
      if (undefined === tmp2) {
        let tmp3 = tmp2;
      }
      noop = tmp3;
      navigation = true;
    }
    closure_2 = obj.addListener("focus", () => {
      if (!c1) {
        if (undefined !== _undefined) {
          _undefined();
        }
        const tmp3 = _undefined();
        if (undefined === tmp3) {
          const tmp4 = tmp3;
        }
        _undefined = tmp4;
        c1 = true;
      }
    });
    closure_3 = obj.addListener("blur", () => {
      if (undefined !== _undefined) {
        _undefined();
      }
      _undefined = undefined;
      c1 = false;
    });
    return () => {
      if (undefined !== _undefined) {
        _undefined();
      }
      closure_2();
      closure_3();
    };
  }, items);
};