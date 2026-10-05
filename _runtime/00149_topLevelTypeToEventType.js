// _runtime/00149_topLevelTypeToEventType.js
import customBubblingEventTypes from "00066_customBubblingEventTypes.js";

let closure_2 = {};

export const topLevelTypeToEventType = function topLevelTypeToEventType(str) {
  const charCodeAtResult = str.charCodeAt(3);
  let formatted = str;
  if (str.startsWith("top")) {
    formatted = str;
    if (charCodeAtResult >= 65) {
      formatted = str;
      if (charCodeAtResult <= 90) {
        str = str.slice(3);
        formatted = str.toLowerCase();
      }
    }
  }
  return formatted;
};
export const getEventTypePropName = function getEventTypePropName(arg0, arg1) {
  if (undefined !== closure_2[arg0]) {
    return arg1 ? closure_2[arg0].captured : closure_2[arg0].bubbled;
  } else {
    let obj2;
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
          let bubbled1 = phasedRegistrationNames.bubbled ?? null;
          obj2 = { bubbled: bubbled1, captured };
          let captured = phasedRegistrationNames.captured ?? null;
        }
        let tmp17 = null;
        if (null != obj2) {
          let bubbled;
          tmp2[arg0] = obj2;
          if (arg1) {
            bubbled = obj2.captured;
          } else {
            bubbled = obj2.bubbled;
          }
          tmp17 = bubbled;
        }
        return tmp17;
      }
      continue;
    }
    obj2 = null;
    const keys = Object.keys();
    if (keys !== undefined) {
      obj2 = null;
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
            let obj = { bubbled: tmp16.registrationName, captured: null };
            obj2 = obj;
            break;
          }
          break;
        }
        continue;
      }
    }
  }
};
