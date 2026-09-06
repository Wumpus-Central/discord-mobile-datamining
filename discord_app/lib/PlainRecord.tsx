// === Module 1972: PlainRecord ===

// Module 1972 (PlainRecord)
import _modDef38 from "module_38" /* 38 */;
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 558 */;
import SetUtils from "SetUtils" /* 1974 */;
import PlainRecord from "js_shim/PlainRecord" /* 1973 */;

const discord_common_shallowEqualDefault = discord_common_shallowEqual;

require = fn;
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
              let areSetsEqualResult = SetUtils.areSetsEqual(getTime, getTime2);
            }
          }
          const _Array = Array;
          if (Array.isArray(getTime)) {
            const _Array2 = Array;
            if (Array.isArray(getTime2)) {
              areSetsEqualResult = discord_common_shallowEqual.areArraysShallowEqual(getTime, getTime2);
            }
          }
          areSetsEqualResult = typeof getTime === "object";
          if (typeof getTime === "object") {
            areSetsEqualResult = typeof getTime2 === "object";
          }
          if (areSetsEqualResult) {
            areSetsEqualResult = discord_common_shallowEqualDefault(getTime, getTime2);
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
      if (isValueEqual(arg0[item10010], arg1[item10010])) {
        continue;
      } else {
        obj.return();
        let flag = false;
        return false;
      }
    }
    return true;
  }
}
const TypeTag = fn(1973).TypeTag;
const size = fn(2);
const result = size.fileFinishedImporting("lib/PlainRecord.tsx");

export default PlainRecord;
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
      let tmp15 = arg1[tmp7];
      let tmp9 = undefined === tmp15;
      if (!tmp9) {
        tmp9 = isValueEqual(tmp14, tmp15);
      }
      tmp3 = tmp6;
      if (tmp9) {
        continue;
      } else {
        if (null == tmp6) {
          let obj = {};
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
  _modDef38(tmp3, "Existing record type does not match the expected type");
  if (null == tmp) {
    arg2[TypeTag] = arg0;
    tmp = arg2;
  }
  return tmp;
};
export const objectIsPlainRecordOfType = function objectIsPlainRecordOfType(arg0, obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null != obj;
  }
  if (tmp) {
    tmp = (TypeTag in obj && obj[TypeTag]) === arg0;
    const tmp2 = TypeTag in obj && obj[TypeTag];
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