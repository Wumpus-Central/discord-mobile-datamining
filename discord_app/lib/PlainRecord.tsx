// discord_app/lib/PlainRecord.tsx
import { TypeTag } from "TypeTag";
import importDefaultResult from "TypeTag";

const require = arg1;
function isValueEqual(items, current) {
  if (null != items) {
    if (null != current) {
      let tmp11 = items === current;
      if (!tmp11) {
        const _Date = Date;
        if (!(items instanceof Date)) {
          const _Set = Set;
          if (items instanceof Set) {
            const _Set2 = Set;
            if (current instanceof Set) {
              let areSetsEqualResult = require("../../discord_common/js/shared/utils/SetUtils.tsx") /* areSetsEqual */.areSetsEqual(items, current);
              const obj2 = require("../../discord_common/js/shared/utils/SetUtils.tsx") /* areSetsEqual */;
            }
          }
          const _Array = Array;
          if (Array.isArray(items)) {
            const _Array2 = Array;
            if (Array.isArray(current)) {
              areSetsEqualResult = require("../../discord_common/js/packages/shallow-equal/shallowEqual.tsx") /* shallowEqual */.areArraysShallowEqual(items, current);
              const obj = require("../../discord_common/js/packages/shallow-equal/shallowEqual.tsx") /* shallowEqual */;
            }
          }
          areSetsEqualResult = typeof items === "object";
          if (typeof items === "object") {
            areSetsEqualResult = typeof current === "object";
          }
          if (areSetsEqualResult) {
            areSetsEqualResult = require("../../discord_common/js/packages/shallow-equal/shallowEqual.tsx")(items, current);
          }
        } else {
          const _Date2 = Date;
        }
        const time = items.getTime();
        areSetsEqualResult = time === current.getTime();
      }
    }
    return tmp11;
  }
  tmp11 = items === current;
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
export const set = function set(arg0, arg1, current) {
  let tmp = arg0;
  if (!isValueEqual(arg0[arg1], current)) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj[arg1] = current;
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
  require("../../_runtime/metro/00038__.js")(tmp3, "Existing record type does not match the expected type");
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