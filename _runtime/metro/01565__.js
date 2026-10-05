// _runtime/metro/01565__.js
import _slicedToArray from "00032__slicedToArray.js";
import react from "../00019_react.js";

export const useRegisterNavigator = function useRegisterNavigator() {
  let context;
  const first = _slicedToArray(
    react.useState(() => {
      const obj = first(context[2]);
      return obj.nanoid();
    }),
    1,
  )[0];
  context = react.useContext(first(context[3]).SingleNavigatorContext);
  if (undefined === context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error(
      "Couldn't register the navigator. Have you wrapped your app with 'NavigationContainer'?\n\nThis can also happen if there are multiple copies of '@react-navigation' packages installed.",
    );
    throw error;
  } else {
    const items = [context, first];
    const effect = react.useEffect(() => {
      const unregister = context.unregister;
      context.register(unregister);
      return () => unregister(first);
    }, items);
    return first;
  }
};
