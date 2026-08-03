const require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.topLevelTypeToEventType = function topLevelTypeToEventType(str) {
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
arg5.getEventTypePropName = function getEventTypePropName(arg0, arg1) {
  if (undefined !== table[arg0]) {
    return arg1 ? tmp3.captured : tmp3.bubbled;
  } else {
    for (const key10005 in require(66) /* map */.customBubblingEventTypes) {
      let tmp22 = key10005;
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
        let tmp5 = require;
        let tmp6 = dependencyMap;
        let phasedRegistrationNames = require(66) /* map */.customBubblingEventTypes[key10005].phasedRegistrationNames;
        if (null == phasedRegistrationNames) {
          continue;
        } else {
          let bubbled = phasedRegistrationNames.bubbled;
          if (bubbled == null) {
            bubbled = null;
          }
          let obj = { bubbled: null, captured: null };
          obj[0] = bubbled;
          let captured = phasedRegistrationNames.captured;
          if (captured == null) {
            captured = null;
          }
          obj[1] = captured;
        }
        let tmp17 = null;
        if (null == obj) {
          return null;
        } else {
          tmp2[arg0] = obj;
          if (arg1) {
            bubbled = obj.captured;
          } else {
            bubbled = obj.bubbled;
          }
          let tmp18 = bubbled;
        }
      }
      continue;
    }
    obj = null;
    const keys = Object.keys();
    if (keys !== undefined) {
      obj = null;
      while (keys[tmp] !== undefined) {
        let tmp24 = arr;
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
          let tmp14 = require;
          let tmp15 = dependencyMap;
          let tmp16 = require(66) /* map */.customDirectEventTypes[arr];
          if (null == tmp16.registrationName) {
            continue;
          } else {
            obj = { bubbled: null, captured: null };
            obj[0] = tmp16.registrationName;
            break;
          }
          break;
        }
        continue;
      }
    }
  }
};