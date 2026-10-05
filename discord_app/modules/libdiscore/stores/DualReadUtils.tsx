// === Module 2076: DualReadUtils ===

// Module 2076 (DualReadUtils)
import LastFewActionsAll from "LastFewActions" /* 509 */;
import shallowEqual from "shallowEqual" /* 568 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import SetUtils from "SetUtils" /* 2069 */;
import size from "module_2" /* 2 */;

let hasOwnProperty, set, set2;

function deepEqualImpl(getTime, getTime2, map, arg3) {
  if (getTime === getTime2) {
    return true;
  } else {
    const tmp19 = arg3;
    if (tmp19) {
      if (undefined === getTime) {
        if (null === getTime2) {
          return true;
        }
      }
    }
    if (typeof getTime === "object") {
      if (typeof getTime2 === "object") {
        if (null !== getTime) {
          if (null !== getTime2) {
            if (map.has(getTime)) {
              return map.get(getTime) === getTime2;
            } else {
              const result = map.set(getTime, getTime2);
              const _Date = Date;
              if (getTime instanceof Date) {
                const _Date2 = Date;
                if (getTime2 instanceof Date) {
                  const time = getTime.getTime();
                  return time === getTime2.getTime();
                }
              }
              const _Set = Set;
              if (getTime instanceof Set) {
                const _Set2 = Set;
                if (getTime2 instanceof Set) {
                  const obj = SetUtils;
                  return obj.areSetsEqual(getTime, getTime2);
                }
              }
              const _Array = Array;
              if (Array.isArray(getTime)) {
                const _Array2 = Array;
                if (Array.isArray(getTime2)) {
                  if (getTime.length !== getTime2.length) {
                    return false;
                  } else {
                    let num4 = 0;
                    if (0 < getTime.length) {
                      while (deepEqualImpl(getTime[num4], getTime2[num4], map, false)) {
                        num4 = num4 + 1;
                      }
                      return false;
                    }
                    return true;
                  }
                }
              }
              const _Array3 = Array;
              if (!Array.isArray(getTime)) {
                const _Array4 = Array;
                if (!Array.isArray(getTime2)) {
                  const _Object = Object;
                  const keys = Object.keys(getTime);
                  const _Object2 = Object;
                  if (keys.length !== Object.keys(getTime2).length) {
                    return false;
                  } else {
                    const iter = keys[Symbol.iterator]();
                    const nextResult = iter.next();
                    while (iter !== undefined) {
                      let tmp7 = nextResult;
                      let _Object3 = Object;
                      hasOwnProperty = Object.prototype.hasOwnProperty;
                      if (hasOwnProperty.call(getTime2, nextResult)) {
                        let flag = false;
                        if (deepEqualImpl(getTime[tmp7], getTime2[tmp7], map, false)) {
                          continue;
                        } else {
                          iter.return();
                          return false;
                        }
                      } else {
                        iter.return();
                        return false;
                      }
                    }
                    return true;
                  }
                }
              }
              return false;
            }
          }
        }
      }
    }
    return false;
  }
}
function deepEqual(getTime, getTime2) {
  map = new Map();
  return deepEqualImpl(getTime, getTime2, map, true);
}
function doDualReadValidation(items, derived, derived2) {
  if (derived.derived.length !== derived2.derived.length) {
    const obj = { type: "length-mismatch", primaryLength: derived.derived.length, shadowLength: derived2.derived.length };
    items.push(obj);
  }
  const keys = Object.keys(derived.root);
  const keys1 = Object.keys(derived2.root);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    let _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    if (hasOwnProperty.call(derived2.root, nextResult)) {
      let tmp10 = validateRecord(tmp5, derived.root[tmp5], derived2.root[tmp5]);
      if (null != tmp10) {
        let arr4 = items.push(tmp11);
      }
    } else {
      let obj2 = { type: "missing-record", key: tmp5 };
      let arr5 = items.push(obj2);
    }
    continue;
  }
  for (const item10060 of keys1) {
    let _Object2 = Object;
    let hasOwnProperty2 = Object.prototype.hasOwnProperty;
    if (!hasOwnProperty2.call(derived.root, item10060)) {
      let obj3 = { type: "extra-record", key: item10060 };
      let arr6 = items.push(obj3);
    }
    continue;
  }
}
function validateRecord(key, primaryRecord, shadowRecord) {
  const items = [];
  for (const key10007 in primaryRecord) {
    let _Object2 = Object;
    let hasOwnProperty2 = Object.prototype.hasOwnProperty;
    if (!hasOwnProperty2.call(primaryRecord, key10007)) {
      continue;
    } else {
      let tmp = primaryRecord[key10007];
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      if (hasOwnProperty.call(shadowRecord, key10007)) {
        let tmp3 = shadowRecord[key10007];
        let _Map = Map;
        let self = this;
        let self2 = this;
        map = new Map();
        let flag = true;
        if (deepEqualImpl(tmp, tmp3, map, true)) {
          continue;
        } else {
          let obj2 = { type: "value-mismatch", field: key10007, primaryValue: tmp, shadowValue: tmp3 };
          let arr = items.push(obj2);
          continue;
        }
        continue;
      } else {
        let obj = { type: "field-missing", field: key10007 };
        let arr3 = items.push(obj);
        continue;
      }
      continue;
    }
    continue;
  }
  if (items.length > 0) {
    return { type: "record-mismatch", key, primaryRecord, shadowRecord, mismatches: items };
  }
}
function isPlainObject(obj) {
  let isArray = typeof obj !== "object" || null === obj;
  if (!isArray) {
    const _Array = Array;
    isArray = Array.isArray(obj);
  }
  if (!isArray) {
    const _Date = Date;
    isArray = obj instanceof Date;
  }
  if (!isArray) {
    const _Set = Set;
    isArray = obj instanceof Set;
  }
  return !isArray;
}
function logErrorsToAnalytics(store_name, items) {
  let weakSet;
  function generateErrorReport(value, items) {
    function appendMismatch() {
      const items = [...arguments];
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let _HermesInternal = HermesInternal;
        let str = "";
        let str2 = ":";
        let str3 = ":";
        let tmp2 = nextResult;
        let combined = "" + nextResult.fieldName + ":" + nextResult.primaryType + ":" + nextResult.shadowType;
        let seenMismatches = value.seenMismatches;
        let tmp4 = combined;
        if (!seenMismatches.has(combined)) {
          let seenMismatches2 = value.seenMismatches;
          let addResult = seenMismatches2.add(tmp4);
          let mismatchedFields = obj.mismatchedFields;
          let arr = mismatchedFields.push(tmp2);
        }
        continue;
      }
    }
    function appendDeepMismatches(combined, primaryValue, shadowValue) {
      if (set === undefined) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
      }
      const keys = Object.keys(primaryValue);
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let _HermesInternal = HermesInternal;
        let tmp4 = nextResult;
        combined = "" + combined + "." + nextResult;
        let tmp6 = primaryValue[nextResult];
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        if (hasOwnProperty.call(shadowValue, nextResult)) {
          let tmp13 = shadowValue[tmp4];
          let tmp14 = tmp13;
          if (tmp6 !== tmp13) {
            if (typeof tmp6 === "object") {
              if (typeof tmp14 === "object") {
                let _Array = Array;
                if (Array.isArray(tmp6)) {
                  let _Array2 = Array;
                  if (Array.isArray(tmp14)) {
                    let tmp41 = appendArrayMismatches(combined, tmp6, tmp14);
                  }
                }
                let tmp26 = null != tmp6;
                if (tmp26) {
                  tmp26 = null != tmp14;
                }
                if (tmp26) {
                  if (!set.has(tmp6)) {
                    let addResult = set.add(tmp6);
                    let tmp36 = appendDeepMismatches(combined, tmp6, tmp14, set);
                  }
                }
              }
            }
            obj = { fieldName: combined, primaryType: getType(tmp6), shadowType: getType(tmp14) };
            let tmp22 = appendMismatch(obj);
          }
        } else {
          let obj2 = { fieldName: combined, primaryType: getType(tmp6), shadowType: "missing" };
          let tmp11 = appendMismatch(obj2);
        }
        continue;
      }
    }
    function appendArrayMismatches(combined, primaryValue, shadowValue) {
      obj = shallowEqual;
      if (!obj.areArraysShallowEqual(primaryValue, shadowValue)) {
        const obj2 = { fieldName: combined, primaryType: "array", shadowType: "array", primaryArrayLength: primaryValue.length, secondaryArrayLength: shadowValue.length };
        appendMismatch(obj2);
      }
    }
    let obj = { numExtraKeys: 0, numMissingKeys: 0, mismatchedFields: [] };
    let iter = items[Symbol.iterator]();
    let nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let type = nextResult.type;
      if ("extra-record" === type) {
        obj.numExtraKeys = obj.numExtraKeys + 1;
      } else if ("missing-record" === type) {
        obj.numMissingKeys = obj.numMissingKeys + 1;
      } else {
        if ("record-mismatch" === type) {
          let visitedEntries2 = value.visitedEntries;
          let tmp28 = nextResult;
          if (visitedEntries2.has(tmp2.primaryRecord)) {
            continue;
          } else {
            let visitedEntries = value.visitedEntries;
            let addResult = visitedEntries.add(tmp2.primaryRecord);
            let mismatches = tmp2.mismatches;
            let tmp6 = mismatches;
            for (const item10034 of mismatches) {
              let str = item10034.field;
              let str1 = str.toString();
              let type2 = item10034.type;
              if ("field-missing" === type2) {
                let mismatchedFields = obj.mismatchedFields;
                let obj2 = { fieldName: str1, primaryType: closure_12(tmp2.primaryRecord[item10034.field]), shadowType: "missing" };
                let tmp23 = str1;
                let tmp25 = nextResult;
                let push = mismatchedFields.push;
                let arr = push(obj2);
              } else if ("value-mismatch" === type2) {
                if (null !== item10034.primaryValue) {
                  if (null !== item10034.shadowValue) {
                    if (typeof item10034.primaryValue === "object") {
                      if (typeof item10034.shadowValue === "object") {
                        let _Array = Array;
                        if (Array.isArray(item10034.primaryValue)) {
                          let _Array2 = Array;
                          if (Array.isArray(item10034.shadowValue)) {
                            let result = appendArrayMismatches(str1, item10034.primaryValue, item10034.shadowValue);
                          }
                        }
                        let tmp17 = str1;
                        let appendDeepMismatchesResult = appendDeepMismatches(str1, item10034.primaryValue, item10034.shadowValue);
                      }
                    }
                  }
                }
                let obj3 = { fieldName: str1, primaryType: closure_12(item10034.primaryValue), shadowType: closure_12(item10034.shadowValue) };
                let tmp11 = str1;
                let appendMismatchResult = appendMismatch(obj3);
              }
              continue;
            }
          }
        }
        continue;
      }
      continue;
    }
    if (obj.mismatchedFields.length + obj.numExtraKeys + obj.numMissingKeys === 0) {
      return null;
    } else {
      return obj;
    }
  }
  if (0 !== items.length) {
    let obj2 = LastFewActionsAll;
    const lastResult = obj2.last();
    let tmp13 = null;
    if (null != lastResult) {
      let tmp14 = store_name;
      let obj3 = map;
      let value = map.get(store_name);
      if (value == null) {
        let obj = { mismatchesReported: 0, mismatchesByLastAction: map, visitedEntries: weakSet, seenMismatches: set };
        const _Map = Map;
        let self = this;
        let self2 = this;
        map = new Map();
        let tmp3 = map;
        const _WeakSet = WeakSet;
        const self3 = this;
        const self4 = this;
        weakSet = new WeakSet();
        let tmp5 = weakSet;
        let _Set = Set;
        const self5 = this;
        const self6 = this;
        set = new Set();
        value = obj;
      }
      let result = obj3.set(store_name, value);
      let num = 15;
      if (value.mismatchesReported < 15) {
        const mismatchesByLastAction = value.mismatchesByLastAction;
        let num2 = mismatchesByLastAction.get(lastResult);
        if (num2 == null) {
          num2 = 0;
        }
        if (num2 < 3) {
          let tmp15 = generateErrorReport(value, items);
          if (null != tmp15) {
            const mismatchesByLastAction2 = value.mismatchesByLastAction;
            const result1 = mismatchesByLastAction2.set(lastResult, num2 + 1);
            value.mismatchesReported = value.mismatchesReported + 1;
            ({ numMissingKeys: obj4.num_missing_keys, numExtraKeys: obj4.num_extra_keys } = tmp15);
            let tmp20 = globalThis;
            const _JSON = JSON;
            const obj5 = { store_name, action_type: lastResult, num_missing_keys: null, num_extra_keys: null, mismatched_fields: JSON.stringify(tmp15.mismatchedFields) };
            const track = AnalyticsUtilsDefault.track;
            const LIBDISCORE_KV_DUAL_READ_ERROR = AnalyticEvents.LIBDISCORE_KV_DUAL_READ_ERROR;
            AnalyticsUtilsDefault;
            track(LIBDISCORE_KV_DUAL_READ_ERROR, obj5);
          }
        }
      }
    }
  }
}
function getType(obj) {
  let str = "null";
  if (null !== obj) {
    let tmp2;
    if (typeof obj === "object") {
      const _Array = Array;
      let str2 = "object";
      if (Array.isArray(obj)) {
        str2 = "array";
      }
      tmp2 = str2;
    } else {
      tmp2 = typeof obj;
    }
    str = tmp2;
  }
  return str;
}
const AnalyticEvents = Constants.AnalyticEvents;
let map = new Map();
let result = size.fileFinishedImporting("modules/libdiscore/stores/DualReadUtils.tsx");

export const runDualReadValidation = function runDualReadValidation(store_name, Kkv, fn) {
  let items = [];
  const tmp = fn((derived, derived2) => {
    doDualReadValidation(items, derived, derived2);
  });
  let items1;
  let items2;
  let closure_2;
  if (0 !== items.length) {
    items1 = [];
    items2 = [];
    closure_2 = 0;
    let item = items.forEach((type) => {
      if (closure_2 < 5) {
        closure_2 = tmp + 1;
        type = type.type;
        if ("length-mismatch" !== type) {
          if ("missing-record" === type) {
            let arr = items1.push(type.key);
          } else if ("extra-record" === type) {
            items2.push(type.key);
          } else if ("record-mismatch" === type) {
            const mismatches = type.mismatches;
            const item = mismatches.forEach(function(type) {
              let primaryValue;
              let shadowValue;
              if ("field-missing" !== type.type) {
                function impl(primaryValue, shadowValue) {
                  let closure_0 = primaryValue;
                  let closure_1 = shadowValue;
                  if (!closure_2_6(primaryValue, shadowValue)) {
                    if (typeof primaryValue === "object") {
                      if (null !== primaryValue) {
                        if (typeof shadowValue === "object") {
                          if (null !== shadowValue) {
                            if (map.has(primaryValue)) {
                              const value = map.get(primaryValue);
                            } else {
                              const result = map.set(primaryValue, shadowValue);
                            }
                          }
                        }
                      }
                    }
                    const _Date = Date;
                    if (!(primaryValue instanceof Date)) {
                      const _Set = Set;
                      if (primaryValue instanceof Set) {
                        const _Set2 = Set;
                        if (shadowValue instanceof Set) {
                          items = [];
                          HermesBuiltin.arraySpread(items, primaryValue, 0);
                          items1 = [];
                          const found = items.filter((item) => !set2.has(item));
                          HermesBuiltin.arraySpread(items1, shadowValue, 0);
                          items1.filter((item) => !set.has(item)).length;
                        }
                      }
                      const _Array = Array;
                      if (Array.isArray(primaryValue)) {
                        const _Array2 = Array;
                        if (Array.isArray(shadowValue)) {
                          let num3;
                          const _Math = Math;
                          const bound = Math.min(primaryValue.length, shadowValue.length);
                          for (let num3 = 0; num3 < bound; num3 = num3 + 1) {
                            if (!closure_2_6(primaryValue[num3], shadowValue[num3])) {
                              let tmp30 = impl(primaryValue[num3], shadowValue[num3]);
                            }
                          }
                        }
                      }
                      if (closure_2_9(primaryValue)) {
                        if (closure_2_9(shadowValue)) {
                          const _Set3 = Set;
                          const _Object = Object;
                          const self = this;
                          const self2 = this;
                          set = new Set(Object.keys(primaryValue));
                          const _Set4 = Set;
                          const _Object2 = Object;
                          const self3 = this;
                          const self4 = this;
                          const set1 = new Set(Object.keys(shadowValue));
                          const _Set5 = Set;
                          items2 = [];
                          HermesBuiltin.arraySpread(items2, set1, HermesBuiltin.arraySpread(items2, set, 0));
                          const self5 = this;
                          const self6 = this;
                          set2 = new Set(items2);
                          const _Array3 = Array;
                          const arr = Array.from(set2);
                          const sorted = arr.sort();
                          for (const item10068 of sorted) {
                            let hasItem = set.has(item10068) && set1.has(item10068);
                            if (hasItem) {
                              if (!closure_2_6(primaryValue[item10068], shadowValue[item10068])) {
                                let tmp25 = impl(primaryValue[item10068], shadowValue[item10068]);
                              }
                            }
                            continue;
                          }
                        }
                      }
                    } else {
                      const _Date2 = Date;
                    }
                  }
                }
                const _Map = Map;
                let self = this;
                let self2 = this;
                ({ primaryValue, shadowValue } = type);
                map = new Map();
                impl(primaryValue, shadowValue);
              }
            });
          }
        }
      }
    });
  }
  const tmp3 = logErrorsToAnalytics(store_name, items);
};
export { doDualReadValidation };
export { logErrorsToAnalytics };