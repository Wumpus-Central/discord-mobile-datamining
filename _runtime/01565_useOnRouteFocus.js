// === Module 1565: useOnRouteFocus ===

// Module 1565 (useOnRouteFocus)
import closure_2 from "noop" /* 19 */;

const require = arg1;

export const useOnRouteFocus = function useOnRouteFocus(router) {
  router = router.router;
  const getState = router.getState;
  const key = router.key;
  const setState = router.setState;
  let onRouteFocus;
  onRouteFocus = key.useContext(router(getState[1]).NavigationBuilderContext).onRouteFocus;
  const items = [getState, onRouteFocus, router, setState, key];
  return key.useCallback((arg0) => {
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