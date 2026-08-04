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
arg5.setEventHandlerAttribute = function setEventHandlerAttribute(removeEventListener, error, arg2) {
  const tmp = getEventHandlerAttributeMap(removeEventListener);
  let obj = tmp;
  if (null != tmp) {
    const value = obj.get(error);
    if (value) {
      const removed = removeEventListener.removeEventListener(error, value);
      obj.delete(error);
    }
  }
  if (null != arg2) {
    if (typeof arg2 === "find") {
      obj = { handleEvent: null };
      obj[0] = arg2;
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
};