// _runtime/metro/00205__.js
function getEventHandlerAttributeMap(removeEventListener) {
  return removeEventListener[closure_0];
}
function setEventHandlerAttributeMap(removeEventListener, map) {
  removeEventListener[closure_0] = map;
}
let closure_0 = Symbol("eventHandlerAttributeMap");

export const getEventHandlerAttribute = function getEventHandlerAttribute(arg0, error) {
  value = undefined;
  if (arg0[closure_0] != null) {
    value = obj.get(error);
  }
  let handleEvent = null;
  if (null != value) {
    handleEvent = value.handleEvent;
  }
  return handleEvent;
};
export const setEventHandlerAttribute = function setEventHandlerAttribute(removeEventListener, error, handleEvent) {
  const tmp = getEventHandlerAttributeMap(removeEventListener);
  let obj = tmp;
  if (null != tmp) {
    value = obj.get(error);
    if (value) {
      const removed = removeEventListener.removeEventListener(error, value);
      obj.delete(error);
    }
  }
  if (null != handleEvent) {
    if (typeof handleEvent === "function") {
      obj = { handleEvent };
      try {
        const listener = removeEventListener.addEventListener(error, obj);
        if (null == obj) {
          const _Map = Map;
          const map = new Map();
          obj = map;
          setEventHandlerAttributeMap(removeEventListener, map);
        }
        const result = obj.set(error, obj);
      } catch (err) {}
    }
  }
  if (tmp18) {
    setEventHandlerAttributeMap(removeEventListener, null);
  }
};
