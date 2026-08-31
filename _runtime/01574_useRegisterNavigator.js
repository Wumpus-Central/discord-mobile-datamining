// === Module 1574: useRegisterNavigator ===

// Module 1574 (useRegisterNavigator)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;

const require = arg1;

export const useRegisterNavigator = function useRegisterNavigator() {
  const first = callback(React.useState(() => first(context[2]).nanoid()), 1)[0];
  context = React.useContext(first(context[3]).SingleNavigatorContext);
  if (undefined === context) {
    const _Error = Error;
    error = new Error("Couldn't register the navigator. Have you wrapped your app with 'NavigationContainer'?\n\nThis can also happen if there are multiple copies of '@react-navigation' packages installed.");
    throw error;
  } else {
    const items = [context, first];
    const effect = obj.useEffect(() => {
      const unregister = context.unregister;
      context.register(unregister);
      return () => unregister(unregister);
    }, items);
    return first;
  }
  obj = React;
};