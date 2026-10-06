// _runtime/06151_handlerIDToTag.js
import tagMessage from "06152_tagMessage.js";

const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();

export const handlerIDToTag = {};
export const registerGesture = function registerGesture(handlerTag, config) {
  const obj = tagMessage;
  const tmp = obj.isTestEnv() && config.config.testID;
  if (tmp) {
    const result = map.set(handlerTag, config);
    const result1 = map3.set(config.config.testID, handlerTag);
  }
};
export const unregisterGesture = function unregisterGesture(handlerTag) {
  const value = map.get(handlerTag);
  let testID = value;
  if (testID) {
    const obj2 = tagMessage;
    testID = obj2.isTestEnv();
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
  const obj = tagMessage;
  const tmp2 = obj.isTestEnv() && testId;
  if (tmp2) {
    const result1 = map3.set(testId, handlerTag);
  }
};
export const registerOldGestureHandler = function registerOldGestureHandler(handlerTag, arg1) {
  const result = map2.set(handlerTag, arg1);
};
export const unregisterOldGestureHandler = function unregisterOldGestureHandler(handlerTag) {
  map2.delete(handlerTag);
};
export const unregisterHandler = function unregisterHandler(handlerTag, testId) {
  map1.delete(handlerTag);
  const obj = tagMessage;
  const tmp2 = obj.isTestEnv() && testId;
  if (tmp2) {
    map3.delete(testId);
  }
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
  const value = map3.get(arg0);
  let tmp2 = null;
  if (undefined !== value) {
    let value2 = map1.get(value);
    if (value2 == null) {
      value2 = map.get(value);
    }
    if (value2 == null) {
      value2 = null;
    }
    tmp2 = value2;
  }
  return tmp2;
};
