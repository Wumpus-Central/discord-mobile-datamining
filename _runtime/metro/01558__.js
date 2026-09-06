// === Module 1558: ? ===

// Module 1558
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = arg1;

export const useRegisterNavigator = function useRegisterNavigator() {
  const first = _slicedToArray(noop.useState(() => first(context[2]).nanoid()), 1)[0];
  context = noop.useContext(first(context[3]).SingleNavigatorContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't register the navigator. Have you wrapped your app with 'NavigationContainer'?\n\nThis can also happen if there are multiple copies of '@react-navigation' packages installed.");
    throw error;
  } else {
    const items = [context, first];
    const effect = obj.useEffect(() => {
      const unregister = context.unregister;
      context.register(unregister);
      return () => unregister(first);
    }, items);
    return first;
  }
  obj = noop;
};