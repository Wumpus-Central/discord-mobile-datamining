// === Module 5608: map ===

// Module 5608 (map)
import tagMessage from "tagMessage" /* 5609 */;

require = arg1;
const dependencyMap = arg6;
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
arg5.handlerIDToTag = {};
arg5.registerGesture = function registerGesture(closure_2, closure_7) {
  const obj = tagMessage;
  if (tmp) {
    const result = map.set(closure_2, closure_7);
    const result1 = map3.set(closure_7.config.testID, closure_2);
  }
};
arg5.unregisterGesture = function unregisterGesture(closure_2) {
  const value = map.get(closure_2);
  let testID = value;
  if (value) {
    testID = tagMessage.isTestEnv();
    const obj2 = tagMessage;
  }
  if (testID) {
    testID = value.config.testID;
  }
  if (testID) {
    map3.delete(value.config.testID);
    map.delete(closure_2);
  }
};
arg5.registerHandler = function registerHandler(handlerTag, item10022, testId) {
  const result = map1.set(handlerTag, item10022);
  const obj = tagMessage;
  if (tmp2) {
    const result1 = map3.set(testId, handlerTag);
  }
};
arg5.registerOldGestureHandler = function registerOldGestureHandler(handlerTag, arg1) {
  const result = map2.set(handlerTag, arg1);
};
arg5.unregisterOldGestureHandler = function unregisterOldGestureHandler(handlerTag) {
  map2.delete(handlerTag);
};
arg5.unregisterHandler = function unregisterHandler(handlerTag, testId) {
  map1.delete(handlerTag);
  const obj = tagMessage;
  if (tmp2) {
    map3.delete(testId);
  }
};
arg5.findHandler = function findHandler(handlerTag) {
  return map1.get(handlerTag);
};
arg5.findGesture = function findGesture(arg0) {
  return map.get(arg0);
};
arg5.findOldGestureHandler = function findOldGestureHandler(handlerTag) {
  return map2.get(handlerTag);
};
arg5.findHandlerByTestID = function findHandlerByTestID(arg0) {
  let value = map3.get(arg0);
  let tmp2 = null;
  if (undefined !== value) {
    value = map1.get(value);
    if (value == null) {
      value = map.get(value);
    }
    if (value == null) {
      value = null;
    }
    tmp2 = value;
  }
  return tmp2;
};