// _runtime/metro/01558__.js
import _slicedToArray from "00032__.js";
import noop from "00019__.js";

const require = arg1;

export const useRegisterNavigator = function useRegisterNavigator() {
  const first = _slicedToArray(
    noop.useState(() => first(context[2]).nanoid()),
    1,
  )[0];
  context = noop.useContext(first(context[3]).SingleNavigatorContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error(
      "Couldn't register the navigator. Have you wrapped your app with 'NavigationContainer'?\n\nThis can also happen if there are multiple copies of '@react-navigation' packages installed.",
    );
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
