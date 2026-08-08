// _runtime/04174_Portal.js
import noop from "noop";

let c3;
let c4;
let c5;
let obj1;
({ useCallback: obj1, useEffect: c3, useMemo: c4, useRef: c5 } = noop);
const memoResult = noop.memo((name) => {
  name = name.name;
  const handleOnMount = name.handleOnMount;
  const handleOnUnmount = name.handleOnUnmount;
  const handleOnUpdate = name.handleOnUpdate;
  const children = name.children;
  let addPortal;
  let removePortal;
  let closure_7;
  let c8;
  let c9;
  let c10;
  const portal = name(handleOnMount[1]).usePortal(name.hostName);
  addPortal = portal.addPortal;
  removePortal = portal.removePortal;
  const items = [name];
  closure_7 = children(() => {
    let nanoidResult = name;
    if (!name) {
      nanoidResult = name(handleOnMount[2]).nanoid();
      const obj = name(handleOnMount[2]);
    }
    return nanoidResult;
  }, items);
  const tmp2 = addPortal();
  c8 = tmp2;
  const tmp3 = addPortal();
  c9 = tmp3;
  const tmp4 = addPortal();
  c10 = tmp4;
  const items1 = [handleOnMount, addPortal];
  tmp2.current = handleOnUnmount(() => {
    if (handleOnMount) {
      tmp(() => callback(closure_7, closure_4));
    } else {
      addPortal(closure_7, children);
    }
  }, items1);
  const items2 = [handleOnUnmount, removePortal];
  tmp3.current = handleOnUnmount(() => {
    if (handleOnUnmount) {
      tmp(() => callback(closure_7));
    } else {
      removePortal(closure_7);
    }
  }, items2);
  const items3 = [handleOnUpdate, addPortal, children];
  tmp4.current = handleOnUnmount(() => {
    if (handleOnUpdate) {
      tmp(() => callback(closure_7, closure_4));
    } else {
      addPortal(closure_7, children);
    }
  }, items3);
  handleOnUpdate(() => {
    let current = _undefined.current;
    if (current != null) {
      current();
    }
    return () => {
      const current = ref.current;
      if (current != null) {
        current();
      }
      closure_8.current = undefined;
      ref.current = undefined;
      closure_10.current = undefined;
    };
  }, []);
  const items4 = [children];
  handleOnUpdate(() => {
    const current = _undefined2.current;
    if (current != null) {
      current();
    }
  }, items4);
  return null;
});
memoResult.displayName = "Portal";

export const Portal = memoResult;