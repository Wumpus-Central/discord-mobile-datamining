// === Module 5468: ? ===

// Module 5468

export function assignRef(fn, current) {
  if (typeof fn === "function") {
    const tmp = fn(current);
    let tmp2;
    if (typeof tmp === "function") {
      tmp2 = tmp;
    }
    return tmp2;
  } else if (fn) {
    fn.current = current;
  }
}
export function isHostInstance(preferHostInstanceResult) {
  let prop;
  if (preferHostInstanceResult != null) {
    prop = preferHostInstanceResult.__internalInstanceHandle;
  }
  return undefined !== prop;
}
export function preferHostInstance(__internalInstanceHandle) {
  if (null != __internalInstanceHandle) {
    let prop;
    if (__internalInstanceHandle != null) {
      prop = __internalInstanceHandle.__internalInstanceHandle;
    }
    if (undefined === prop) {
      const getNativeScrollRef = __internalInstanceHandle.getNativeScrollRef;
      let nativeScrollRef;
      if (getNativeScrollRef != null) {
        nativeScrollRef = getNativeScrollRef();
      }
      let prop1;
      if (nativeScrollRef != null) {
        prop1 = nativeScrollRef.__internalInstanceHandle;
      }
      let tmp4 = __internalInstanceHandle;
      if (undefined !== prop1) {
        tmp4 = nativeScrollRef;
      }
      return tmp4;
    }
  }
  return __internalInstanceHandle;
}
export function resolveHostInstance(viewRef) {
  let getHostInstance;
  if (viewRef != null) {
    getHostInstance = viewRef.getHostInstance;
  }
  let tmp2 = viewRef;
  if (typeof getHostInstance === "function") {
    let hostInstance = viewRef.getHostInstance();
    if (hostInstance == null) {
      hostInstance = viewRef;
    }
    tmp2 = hostInstance;
  }
  return tmp2;
}