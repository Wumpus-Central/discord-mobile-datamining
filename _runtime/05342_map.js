// === Module 5342: map ===

// Module 5342 (map)
const require = arg1;
const dependencyMap = arg6;
const map = new Map();
const map1 = new Map();
const map2 = new Map();
arg5.handlerIDToTag = {};
arg5.registerHandler = function registerHandler(handlerTag, item10022, testId) {
  const result = map.set(handlerTag, item10022);
  const obj = require(5343) /* toArray */;
  if (tmp2) {
    const result1 = map2.set(testId, handlerTag);
  }
};
arg5.registerOldGestureHandler = function registerOldGestureHandler(handlerTag, arg1) {
  const result = map1.set(handlerTag, arg1);
};
arg5.unregisterOldGestureHandler = function unregisterOldGestureHandler(handlerTag) {
  map1.delete(handlerTag);
};
arg5.unregisterHandler = function unregisterHandler(handlerTag, testId) {
  map.delete(handlerTag);
  const obj = require(5343) /* toArray */;
  if (tmp2) {
    map2.delete(testId);
  }
};
arg5.findHandler = function findHandler(handlerTag) {
  return map.get(handlerTag);
};
arg5.findOldGestureHandler = function findOldGestureHandler(handlerTag) {
  return map1.get(handlerTag);
};
arg5.findHandlerByTestID = function findHandlerByTestID(arg0) {
  let value = map2.get(arg0);
  let tmp2 = null;
  if (undefined !== value) {
    value = map.get(value);
    if (value == null) {
      value = null;
    }
    tmp2 = value;
  }
  return tmp2;
};