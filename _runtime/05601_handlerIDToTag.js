// _runtime/05601_handlerIDToTag.js
import tagMessage from "05602_tagMessage.js";

require = arg1;
const dependencyMap = arg6;
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();

export const handlerIDToTag = {};
export function registerGesture(arg0, config) {
  if (obj.isTestEnv()) {
    const result = map.set(arg0, config);
    if (config.config.testID) {
      const result1 = map3.set(config.config.testID, arg0);
    }
  }
  obj = tagMessage;
}
export function unregisterGesture(arg0) {
  if (obj.isTestEnv()) {
    value = map.get(arg0);
    let testID;
    if (value != null) {
      const config = value.config;
      if (config != null) {
        testID = config.testID;
      }
    }
    if (testID) {
      map3.delete(value.config.testID);
    }
    map.delete(arg0);
  }
  obj = tagMessage;
}
export function registerHandler(handlerTag, item10022, testId) {
  const result = map1.set(handlerTag, item10022);
  if (tmp2) {
    const result1 = map3.set(testId, handlerTag);
  }
  tmp2 = tagMessage.isTestEnv() && testId;
}
export function registerOldGestureHandler(handlerTag, arg1) {
  const result = map2.set(handlerTag, arg1);
}
export function unregisterOldGestureHandler(handlerTag) {
  map2.delete(handlerTag);
}
export function unregisterHandler(handlerTag, testId) {
  map1.delete(handlerTag);
  if (tmp2) {
    map3.delete(testId);
  }
  tmp2 = tagMessage.isTestEnv() && testId;
}
export function findHandler(handlerTag) {
  return map1.get(handlerTag);
}
export function findGesture(arg0) {
  return map.get(arg0);
}
export function findOldGestureHandler(handlerTag) {
  return map2.get(handlerTag);
}
export function findHandlerByTestID(arg0) {
  value = map3.get(arg0);
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
}
