// === Module 205: getEventHandlerAttributeMap ===

// Module 205 (getEventHandlerAttributeMap)
function getEventHandlerAttributeMap(removeEventListener) {
  return removeEventListener[closure_0];
}
function setEventHandlerAttributeMap(removeEventListener, map) {
  removeEventListener[closure_0] = map;
}
let closure_0 = Symbol("eventHandlerAttributeMap");
arg5.getEventHandlerAttribute = function getEventHandlerAttribute(arg0, error) {
  let value;
  if (arg0[closure_0] != null) {
    value = obj.get(error);
  }
  let handleEvent = null;
  if (null != value) {
    handleEvent = value.handleEvent;
  }
  return handleEvent;
};
arg5.setEventHandlerAttribute = function setEventHandlerAttribute(removeEventListener, error, fn) {
  const tmp = getEventHandlerAttributeMap(removeEventListener);
  let obj = tmp;
  if (null != tmp) {
    const value = obj.get(error);
    if (value) {
      const removed = removeEventListener.removeEventListener(error, value);
      obj.delete(error);
    }
  }
  if (null != fn) {
    if (typeof fn === "function") {
      obj = { handleEvent: null };
      obj[0] = fn;
      try {
        const listener = removeEventListener.addEventListener(error, obj);
        if (null == obj) {
          const _Map = Map;
          const map = new Map();
          obj = map;
          setEventHandlerAttributeMap(removeEventListener, map);
        }
        const result = obj.set(error, obj);
      } catch (err) {
      }
    }
  }
  if (tmp18) {
    setEventHandlerAttributeMap(removeEventListener, null);
  }
  tmp18 = null != obj && 0 === obj.size;
};