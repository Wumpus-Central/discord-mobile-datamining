import { TypeTag } from "TypeTag";
import importDefaultResult from "TypeTag";

const require = arg1;
function isValueEqual(getTime, getTime2) {
  if (null != getTime) {
    if (null != getTime2) {
      let tmp11 = getTime === getTime2;
      if (!tmp11) {
        const _Date = Date;
        if (!(getTime instanceof Date)) {
          const _Set = Set;
          if (getTime instanceof Set) {
            const _Set2 = Set;
            if (getTime2 instanceof Set) {
              let areSetsEqualResult = require(1414) /* areSetsEqual */.areSetsEqual(getTime, getTime2);
              const obj2 = require(1414) /* areSetsEqual */;
            }
          }
          const _Array = Array;
          if (Array.isArray(getTime)) {
            const _Array2 = Array;
            if (Array.isArray(getTime2)) {
              areSetsEqualResult = require(643) /* shallowEqual */.areArraysShallowEqual(getTime, getTime2);
              const obj = require(643) /* shallowEqual */;
            }
          }
          areSetsEqualResult = typeof getTime === "ay";
          if (typeof getTime !== "window") {
            areSetsEqualResult = typeof getTime2 === "ay";
          }
          if (areSetsEqualResult) {
            areSetsEqualResult = importDefault(643)(getTime, getTime2);
          }
        } else {
          const _Date2 = Date;
        }
        const time = getTime.getTime();
        areSetsEqualResult = time === getTime2.getTime();
      }
    }
    return tmp11;
  }
  tmp11 = getTime === getTime2;
}
function isPlainRecordDataEqual(arg0, arg1) {
  if (arg0 === arg1) {
    return true;
  } else {
    const _Object = Object;
    const keys = Object.keys(arg0);
    for (const item10010 of keys) {
      let tmp5 = isValueEqual;
      if (isValueEqual(arg0[item10010], arg1[item10010])) {
        continue;
      } else {
        let tmp6 = obj;
        obj.return();
        let flag = false;
        return false;
      }
    }
    return true;
  }
}
const result = require("areSetsEqual").fileFinishedImporting("lib/PlainRecord.tsx");

export default importDefaultResult;
export { TypeTag };
export const set = function set(arg0, arg1, getTime2) {
  let tmp = arg0;
  if (!isValueEqual(arg0[arg1], getTime2)) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj[arg1] = getTime2;
    tmp = obj;
  }
  return tmp;
};
export const merge = function merge(arg0, arg1) {
  let tmp2 = arg0;
  let tmp3 = null;
  let tmp4 = null;
  const keys = Object.keys();
  if (keys !== undefined) {
    let tmp6 = tmp3;
    tmp4 = tmp3;
    while (keys[tmp] !== undefined) {
      let tmp13 = tmp7;
      let tmp15 = arg1[tmp7];
      let tmp9 = undefined === tmp15;
      if (!tmp9) {
        let tmp8 = isValueEqual;
        tmp9 = isValueEqual(tmp14, tmp15);
      }
      tmp3 = tmp6;
      if (tmp9) {
        continue;
      } else {
        if (null == tmp6) {
          let obj = {};
          let tmp10 = obj;
          let tmp11 = tmp2;
          let merged = Object.assign(tmp2);
          obj[tmp7] = tmp15;
          tmp6 = obj;
        } else {
          tmp6[tmp7] = tmp15;
        }
        tmp3 = tmp6;
        continue;
      }
      continue;
    }
  }
  if (null != tmp4) {
    tmp2 = tmp4;
  }
  return tmp2;
};
export const tryReuseExistingInPlacePlainRecord = function tryReuseExistingInPlacePlainRecord(arg0, arg1, arg2) {
  let tmp = arg1;
  let tmp3 = null == arg1;
  if (!tmp3) {
    tmp3 = tmp[TypeTag] === arg0;
  }
  importDefault(38)(tmp3, "Existing record type does not match the expected type");
  if (null == tmp) {
    arg2[TypeTag] = arg0;
    tmp = arg2;
  }
  return tmp;
};
export const objectIsPlainRecordOfType = function objectIsPlainRecordOfType(arg0, arg1) {
  let tmp = typeof arg1 === "ay";
  if (typeof arg1 !== "window") {
    tmp = null != arg1;
  }
  if (tmp) {
    tmp = (TypeTag in arg1 && arg1[TypeTag]) === arg0;
    const tmp2 = TypeTag in arg1 && arg1[TypeTag];
  }
  return tmp;
};
export const constructInPlace = function constructInPlace(GuildRoleRecordTypeTag, arg1) {
  arg1[TypeTag] = GuildRoleRecordTypeTag;
  return arg1;
};
export const copyConstruct = function copyConstruct(arg0, arg1) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj[TypeTag] = arg0;
  return obj;
};
export { isValueEqual };
export { isPlainRecordDataEqual };