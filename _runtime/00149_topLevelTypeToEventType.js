// _runtime/00149_topLevelTypeToEventType.js
import customBubblingEventTypes from "00066_customBubblingEventTypes.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const topLevelTypeToEventType = function topLevelTypeToEventType(str) {
  const charCodeAtResult = str.charCodeAt(3);
  let formatted = str;
  if (str.startsWith("top")) {
    formatted = str;
    if (charCodeAtResult >= 65) {
      formatted = str;
      if (charCodeAtResult <= 90) {
        formatted = str.slice(3).toLowerCase();
        str = str.slice(3);
      }
    }
  }
  return formatted;
};
export const getEventTypePropName = function getEventTypePropName(arg0, arg1) {
  if (undefined !== closure_2[arg0]) {
    return arg1 ? tmp3.captured : tmp3.bubbled;
  } else {
    for (const key10005 in customBubblingEventTypes.customBubblingEventTypes) {
      let charCodeAtResult = key10005.charCodeAt(3);
      let formatted = key10005;
      if (key10005.startsWith("top")) {
        formatted = key10005;
        if (charCodeAtResult >= 65) {
          formatted = key10005;
          if (charCodeAtResult <= 90) {
            let str = key10005.slice(3);
            formatted = str.toLowerCase();
          }
        }
      }
      if (formatted !== arg0) {
        continue;
      } else {
        let phasedRegistrationNames =
          customBubblingEventTypes.customBubblingEventTypes[key10005].phasedRegistrationNames;
        if (null == phasedRegistrationNames) {
          continue;
        } else {
          let bubbled = phasedRegistrationNames.bubbled;
          if (bubbled == null) {
            bubbled = null;
          }
          let obj = { bubbled, captured: null };
          let captured = phasedRegistrationNames.captured;
          if (captured == null) {
            captured = null;
          }
          obj.captured = captured;
        }
        if (null == obj) {
          return null;
        } else {
          tmp2[arg0] = obj;
          if (arg1) {
            bubbled = obj.captured;
          } else {
            bubbled = obj.bubbled;
          }
        }
      }
      continue;
    }
    obj = null;
    const keys = Object.keys();
    if (keys !== undefined) {
      obj = null;
      while (keys[tmp] !== undefined) {
        let charCodeAtResult1 = arr.charCodeAt(3);
        let formatted1 = arr;
        if (arr.startsWith("top")) {
          formatted1 = arr;
          if (charCodeAtResult1 >= 65) {
            formatted1 = arr;
            if (charCodeAtResult1 <= 90) {
              let str2 = arr.slice(3);
              formatted1 = str2.toLowerCase();
            }
          }
        }
        if (formatted1 !== arg0) {
          continue;
        } else {
          let tmp16 = customBubblingEventTypes.customDirectEventTypes[arr];
          if (null == tmp16.registrationName) {
            continue;
          } else {
            obj = { bubbled: tmp16.registrationName, captured: null };
            break;
          }
          break;
        }
        continue;
      }
    }
  }
};
