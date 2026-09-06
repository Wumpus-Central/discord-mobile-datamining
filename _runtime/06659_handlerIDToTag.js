// _runtime/06659_handlerIDToTag.js
import tagMessage from "06660_tagMessage.js";

require = arg1;
const dependencyMap = arg6;
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();

export const handlerIDToTag = {};
export const registerGesture = function registerGesture(arg0, config) {
  if (tmp) {
    const result = map.set(arg0, config);
    const result1 = map3.set(config.config.testID, arg0);
  }
  tmp = tagMessage.isTestEnv() && config.config.testID;
};
export const unregisterGesture = function unregisterGesture(handlerTag) {
  value = map.get(handlerTag);
  let testID = value;
  if (value) {
    testID = tagMessage.isTestEnv();
  }
  if (testID) {
    testID = value.config.testID;
  }
  if (testID) {
    map3.delete(value.config.testID);
    map.delete(handlerTag);
  }
};
export const registerHandler = function registerHandler(handlerTag, item10022, testId) {
  const result = map1.set(handlerTag, item10022);
  if (tmp2) {
    const result1 = map3.set(testId, handlerTag);
  }
  tmp2 = tagMessage.isTestEnv() && testId;
};
export const registerOldGestureHandler = function registerOldGestureHandler(handlerTag, arg1) {
  const result = map2.set(handlerTag, arg1);
};
export const unregisterOldGestureHandler = function unregisterOldGestureHandler(handlerTag) {
  map2.delete(handlerTag);
};
export const unregisterHandler = function unregisterHandler(handlerTag, testId) {
  map1.delete(handlerTag);
  if (tmp2) {
    map3.delete(testId);
  }
  tmp2 = tagMessage.isTestEnv() && testId;
};
export const findHandler = function findHandler(handlerTag) {
  return map1.get(handlerTag);
};
export const findGesture = function findGesture(arg0) {
  return map.get(arg0);
};
export const findOldGestureHandler = function findOldGestureHandler(handlerTag) {
  return map2.get(handlerTag);
};
export const findHandlerByTestID = function findHandlerByTestID(arg0) {
  value = map3.get(arg0);
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
