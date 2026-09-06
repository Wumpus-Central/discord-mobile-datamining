// _runtime/metro/01565__.js
import NavigationBuilderContext from "../01513_NavigationBuilderContext.js";
import noop from "00019__.js";

require = arg1;

export const useOnRouteFocus = function useOnRouteFocus(router) {
  router = router.router;
  const getState = router.getState;
  const key = router.key;
  const setState = router.setState;
  const onRouteFocus = noop.useContext(NavigationBuilderContext.NavigationBuilderContext).onRouteFocus;
  const items = [getState, onRouteFocus, router, setState, key];
  return noop.useCallback((arg0) => {
    const tmp = getState();
    const stateForRouteFocus = router.getStateForRouteFocus(tmp, arg0);
    if (stateForRouteFocus !== tmp) {
      setState(stateForRouteFocus);
    }
    let tmp6 = undefined !== onRouteFocus;
    if (tmp6) {
      tmp6 = undefined !== key;
    }
    if (tmp6) {
      onRouteFocus(key);
    }
  }, items);
};
