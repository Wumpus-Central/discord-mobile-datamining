// === Module 1775: componentWithRef ===

// Module 1775 (componentWithRef)
import noop from "module_19" /* 19 */;

const forwardRef = fn(19).forwardRef;
const module_1639 = fn(1639);
let closure_2 = module_1639.isReact19();

export const isReactRendering = function isReactRendering() {
  const __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = noop.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  let owner;
  if (__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE != null) {
    const A = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A;
    if (A != null) {
      const getOwner = A.getOwner;
      if (getOwner != null) {
        owner = getOwner();
      }
    }
  }
  if (!owner) {
    const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tmp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let current;
    if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED != null) {
      const ReactCurrentOwner = __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      if (ReactCurrentOwner != null) {
        current = ReactCurrentOwner.current;
      }
    }
    owner = current;
  }
  if (!owner) {
    const __SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = tmp.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    let current1;
    if (__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE != null) {
      const ReactCurrentOwner2 = __SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.ReactCurrentOwner;
      if (ReactCurrentOwner2 != null) {
        current1 = ReactCurrentOwner2.current;
      }
    }
    owner = current1;
  }
  return owner;
};
export const isFirstReactRender = function isFirstReactRender() {
  const __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = noop.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  let owner;
  if (__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE != null) {
    const A = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A;
    if (A != null) {
      const getOwner = A.getOwner;
      if (getOwner != null) {
        owner = getOwner();
      }
    }
  }
  if (!owner) {
    const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tmp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let current;
    if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED != null) {
      const ReactCurrentOwner = __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      if (ReactCurrentOwner != null) {
        current = ReactCurrentOwner.current;
      }
    }
    owner = current;
  }
  if (!owner) {
    const __SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = tmp.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    let current1;
    if (__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE != null) {
      const ReactCurrentOwner2 = __SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.ReactCurrentOwner;
      if (ReactCurrentOwner2 != null) {
        current1 = ReactCurrentOwner2.current;
      }
    }
    owner = current1;
  }
  let tmp5 = owner;
  if (owner) {
    let alternate;
    if (owner != null) {
      alternate = owner.alternate;
    }
    tmp5 = !alternate;
  }
  return tmp5;
};
export const componentWithRef = function componentWithRef(BottomSheet) {
  if (closure_2) {
    let fn = (ref) => BottomSheet(Object.assign(ref, Object.assign({ ref: 0 })), ref.ref);
  } else {
    fn = forwardRef(BottomSheet);
  }
  return fn;
};