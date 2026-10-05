// _runtime/01572_react.js
import react2 from "01520_react.js";
import react from "00019_react.js";

export const useOnRouteFocus = function useOnRouteFocus(router) {
  router = router.router;
  const getState = router.getState;
  const key = router.key;
  const setState = router.setState;
  const onRouteFocus = react.useContext(react2.NavigationBuilderContext).onRouteFocus;
  const items = [getState, onRouteFocus, router, setState, key];
  return react.useCallback((arg0) => {
    const tmp = getState();
    const stateForRouteFocus = router.getStateForRouteFocus(tmp, arg0);
    if (stateForRouteFocus !== tmp) {
      setState(stateForRouteFocus);
    }
    const tmp6 = undefined !== onRouteFocus && undefined !== key;
    if (tmp6) {
      onRouteFocus(key);
    }
  }, items);
};
