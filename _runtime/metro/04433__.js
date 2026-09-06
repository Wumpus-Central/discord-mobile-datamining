// === Module 4433: ? ===

// Module 4433
import nanoid from "nanoid" /* 1492 */;
import noop from "module_19" /* 19 */;

({ useCallback: c2, useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = noop);
const memoResult = noop.memo((name) => {
  name = name.name;
  const handleOnMount = name.handleOnMount;
  const handleOnUnmount = name.handleOnUnmount;
  const handleOnUpdate = name.handleOnUpdate;
  const children = name.children;
  const portal = name(handleOnMount[1]).usePortal(name.hostName);
  const addPortal = portal.addPortal;
  const removePortal = portal.removePortal;
  const items = [name];
  closure_7 = children(() => {
    let nanoidResult = name;
    if (!name) {
      nanoidResult = nanoid.nanoid();
    }
    return nanoidResult;
  }, items);
  const tmp2 = addPortal();
  const tmp3 = addPortal();
  closure_9 = tmp3;
  const tmp4 = addPortal();
  const items1 = [handleOnMount, addPortal];
  tmp2.current = handleOnUnmount(() => {
    if (handleOnMount) {
      tmp(() => addPortal(closure_1_7, children));
    } else {
      addPortal(closure_7, children);
    }
  }, items1);
  const items2 = [handleOnUnmount, removePortal];
  tmp3.current = handleOnUnmount(() => {
    if (handleOnUnmount) {
      tmp(() => removePortal(closure_1_7));
    } else {
      removePortal(closure_7);
    }
  }, items2);
  const items3 = [handleOnUpdate, addPortal, children];
  tmp4.current = handleOnUnmount(() => {
    if (handleOnUpdate) {
      tmp(() => addPortal(closure_1_7, children));
    } else {
      addPortal(closure_7, children);
    }
  }, items3);
  handleOnUpdate(() => {
    let current = ref.current;
    if (current != null) {
      current();
    }
    return () => {
      const current = ref.current;
      if (current != null) {
        current();
      }
      closure_1_8.current = undefined;
      ref.current = undefined;
      ref2.current = undefined;
    };
  }, []);
  const items4 = [children];
  handleOnUpdate(() => {
    const current = ref2.current;
    if (current != null) {
      current();
    }
  }, items4);
  return null;
});
memoResult.displayName = "Portal";

export const Portal = memoResult;