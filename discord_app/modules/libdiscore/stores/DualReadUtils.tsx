// === Module 1911: deepEqualImpl ===

// Module 1911 (deepEqualImpl)
import set3 from "set" /* 2 */;
import addAll from "add" /* 594 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import areSetsEqual from "areSetsEqual" /* 1429 */;

function deepEqualImpl(set, set1, map, arg3) {
  if (set === set1) {
    return true;
  } else {
    if (arg3) {
      if (undefined === set) {
        if (null === set1) {
          return true;
        }
      }
    }
    if (typeof set === "object") {
      if (typeof set1 === "object") {
        if (null !== set) {
          if (null !== set1) {
            if (map.has(set)) {
              return map.get(set) === set1;
            } else {
              const result = map.set(set, set1);
              const _Date = Date;
              if (set instanceof Date) {
                const _Date2 = Date;
                if (set1 instanceof Date) {
                  const time = set.getTime();
                  return time === set1.getTime();
                }
              }
              const _Set = Set;
              if (set instanceof Set) {
                const _Set2 = Set;
                if (set1 instanceof Set) {
                  return areSetsEqual.areSetsEqual(set, set1);
                }
              }
              const _Array = Array;
              if (Array.isArray(set)) {
                const _Array2 = Array;
                if (Array.isArray(set1)) {
                  if (set.length !== set1.length) {
                    return false;
                  } else {
                    let num4 = 0;
                    if (0 < set.length) {
                      while (deepEqualImpl(set[num4], set1[num4], map, false)) {
                        num4 = num4 + 1;
                      }
                      return false;
                    }
                    return true;
                  }
                }
              }
              const _Array3 = Array;
              if (!Array.isArray(set)) {
                const _Array4 = Array;
                if (!Array.isArray(set1)) {
                  const _Object = Object;
                  const keys = Object.keys(set);
                  const _Object2 = Object;
                  if (keys.length !== Object.keys(set1).length) {
                    return false;
                  } else {
                    const iter = keys[Symbol.iterator]();
                    const nextResult = iter.next();
                    while (iter !== undefined) {
                      let tmp7 = nextResult;
                      let _Object3 = Object;
                      let call = hasOwnProperty.call;
                      if (typeof call === "unknown" ? hasOwnProperty(nextResult) : call(set1, nextResult)) {
                        let tmp9 = deepEqualImpl;
                        let tmp10 = nextResult;
                        let num = 0;
                        let tmp11 = map;
                        let flag = false;
                        if (deepEqualImpl(set[tmp7], set1[tmp7], map, false)) {
                          continue;
                        } else {
                          let tmp12 = iter;
                          iter.return();
                          return false;
                        }
                      } else {
                        let tmp8 = iter;
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
function deepEqual(set, set1) {
  return deepEqualImpl(set, set1, new Map(), true);
}
function doDualReadValidation(arr, derived, derived2) {
  if (derived.derived.length !== derived2.derived.length) {
    let obj = { type: "length-mismatch", primaryLength: null, shadowLength: null };
    obj[1] = derived.derived.length;
    obj[2] = derived2.derived.length;
    arr.push(obj);
  }
  const keys = Object.keys(derived.root);
  const keys1 = Object.keys(derived2.root);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    let _Object = Object;
    let call = hasOwnProperty.call;
    let root = derived2.root;
    if (typeof call === "unknown" ? hasOwnProperty(nextResult) : call(root, nextResult)) {
      let tmp8 = validateRecord;
      let tmp9 = nextResult;
      let tmp10 = validateRecord(tmp5, derived.root[tmp5], derived2.root[tmp5]);
      if (null != tmp10) {
        let tmp12 = tmp10;
        arr = arr.push(tmp11);
      }
    } else {
      obj = { type: "missing-record", key: null };
      let tmp6 = nextResult;
      obj[1] = tmp5;
      let arr1 = arr.push(obj);
    }
    continue;
  }
  for (const item10060 of keys1) {
    let _Object2 = Object;
    let call2 = hasOwnProperty2.call;
    let root2 = arg1.root;
    let tmp14 = item10060;
    if (typeof call2 === "unknown") {
      let hasOwnProperty2Result = hasOwnProperty2(item10060);
    } else {
      hasOwnProperty2Result = call2(root2, item10060);
    }
    if (!hasOwnProperty2Result) {
      obj = { type: "extra-record", key: null };
      let tmp16 = item10060;
      obj[1] = tmp14;
      let arr2 = arg0.push(obj);
    }
    continue;
  }
}
function validateRecord(arg0, obj, arg2) {
  const items = [];
  for (const key10007 in arg1) {
    let tmp15 = key10007;
    let _Object2 = Object;
    let call2 = hasOwnProperty2.call;
    if (typeof call2 === "unknown") {
      let hasOwnProperty2Result = hasOwnProperty2(key10007);
    } else {
      hasOwnProperty2Result = call2(arg1, key10007);
    }
    if (!hasOwnProperty2Result) {
      continue;
    } else {
      let tmp2 = arg1[key10007];
      let _Object = Object;
      let call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty(key10007);
      } else {
        hasOwnPropertyResult = call(arg2, key10007);
      }
      if (hasOwnPropertyResult) {
        let tmp5 = arg2[key10007];
        let tmp6 = deepEqualImpl;
        let _Map = Map;
        let tmp7 = new.target;
        let tmp8 = new.target;
        map = new Map();
        let tmp10 = map;
        let num = 0;
        let tmp11 = tmp2;
        let tmp12 = tmp5;
        let flag = true;
        if (deepEqualImpl(tmp2, tmp5, map, true)) {
          continue;
        } else {
          obj = { type: "value-mismatch", field: null, primaryValue: null, shadowValue: null };
          obj[1] = key10007;
          obj[2] = tmp2;
          obj[3] = tmp5;
          let arr = items.push(obj);
          continue;
        }
        continue;
      } else {
        obj = { type: "field-missing", field: null };
        obj[1] = key10007;
        arr = items.push(obj);
        continue;
      }
      continue;
    }
    continue;
  }
  if (items.length > 0) {
    obj = { type: "record-mismatch", key: null, primaryRecord: null, shadowRecord: null, mismatches: null };
    obj[1] = arg0;
    obj[2] = obj;
    obj[3] = arg2;
    obj[4] = items;
    return obj;
  }
}
function isPlainObject(obj) {
  let isArray = typeof obj !== "object";
  if (typeof obj === "object") {
    isArray = null === obj;
  }
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
function logErrorsToAnalytics(arg0, items) {
  if (0 !== items.length) {
    const lastResult = addAll.last();
    if (null != lastResult) {
      let value = map.get(arg0);
      if (value == null) {
        let obj = { mismatchesReported: 0, mismatchesByLastAction: null, visitedEntries: null, seenMismatches: null };
        const _Map = Map;
        map = new Map();
        obj[1] = map;
        const _WeakSet = WeakSet;
        const weakSet = new WeakSet();
        obj[2] = weakSet;
        let _Set = Set;
        let set = new Set();
        obj[3] = set;
        value = obj;
      }
      let result = map.set(arg0, value);
      if (value.mismatchesReported < 15) {
        const mismatchesByLastAction = value.mismatchesByLastAction;
        let num2 = mismatchesByLastAction.get(lastResult);
        if (num2 == null) {
          num2 = 0;
        }
        if (num2 < 3) {
          let tmp21 = (function generateErrorReport(value, items) {
            closure_0 = value;
            function appendMismatch(arg0) {
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
                let tmp5 = value;
                if (!seenMismatches.has(combined)) {
                  let seenMismatches2 = tmp5.seenMismatches;
                  let tmp6 = combined;
                  let addResult = seenMismatches2.add(tmp4);
                  let tmp8 = obj;
                  let mismatchedFields = obj.mismatchedFields;
                  let tmp9 = nextResult;
                  let arr = mismatchedFields.push(tmp2);
                }
                continue;
              }
            }
            function appendDeepMismatches(combined, primaryValue, shadowValue, set) {
              if (set === undefined) {
                const _Set = Set;
                set = new Set();
              }
              const keys = Object.keys(primaryValue);
              const iter = keys[Symbol.iterator]();
              const nextResult = iter.next();
              while (iter !== undefined) {
                let _HermesInternal = HermesInternal;
                let tmp6 = nextResult;
                combined = "" + combined + "." + nextResult;
                let tmp8 = primaryValue[nextResult];
                let _Object = Object;
                let call = hasOwnProperty.call;
                if (typeof call === "unknown" ? hasOwnProperty(nextResult) : call(shadowValue, nextResult)) {
                  let tmp14 = nextResult;
                  let tmp15 = shadowValue[tmp6];
                  let tmp16 = tmp15;
                  let tmp17 = tmp8;
                  if (tmp8 !== tmp15) {
                    let tmp44 = tmp8;
                    if (typeof tmp8 === "object") {
                      let tmp45 = tmp15;
                      if (typeof tmp16 === "object") {
                        let _Array = Array;
                        let tmp25 = tmp8;
                        if (Array.isArray(tmp8)) {
                          let _Array2 = Array;
                          let tmp26 = tmp15;
                          if (Array.isArray(tmp16)) {
                            let tmp39 = appendArrayMismatches;
                            let tmp40 = combined;
                            let tmp41 = tmp8;
                            let tmp42 = tmp15;
                            let tmp43 = appendArrayMismatches(combined, tmp8, tmp16);
                          }
                        }
                        let tmp27 = tmp8;
                        let tmp28 = null != tmp8;
                        if (tmp28) {
                          let tmp29 = tmp15;
                          tmp28 = null != tmp16;
                        }
                        if (tmp28) {
                          let tmp30 = tmp8;
                          if (!set.has(tmp8)) {
                            let tmp31 = tmp8;
                            let addResult = set.add(tmp8);
                            let tmp33 = appendDeepMismatches;
                            let tmp34 = combined;
                            let tmp35 = tmp15;
                            let num = 0;
                            let tmp36 = tmp8;
                            let tmp37 = set;
                            let tmp38 = appendDeepMismatches(combined, tmp8, tmp16, set);
                          }
                        }
                      }
                    }
                    let tmp18 = appendMismatch;
                    obj = { fieldName: null, primaryType: null, shadowType: null };
                    let tmp19 = combined;
                    obj[0] = combined;
                    let tmp20 = closure_1_12;
                    let tmp21 = tmp8;
                    obj[1] = closure_1_12(tmp8);
                    let tmp22 = closure_1_12;
                    let tmp23 = tmp15;
                    obj[2] = closure_1_12(tmp16);
                    let tmp24 = appendMismatch(obj);
                  }
                } else {
                  let tmp9 = appendMismatch;
                  obj = { fieldName: null, primaryType: null, shadowType: "missing" };
                  let tmp10 = combined;
                  obj[0] = combined;
                  let tmp11 = closure_1_12;
                  let tmp12 = tmp8;
                  obj[1] = closure_1_12(tmp8);
                  let tmp13 = appendMismatch(obj);
                }
                continue;
              }
            }
            function appendArrayMismatches(combined, primaryValue, shadowValue) {
              obj = value(appendDeepMismatches[4]);
              if (!obj.areArraysShallowEqual(primaryValue, shadowValue)) {
                obj = { fieldName: null, primaryType: "array", shadowType: "array", primaryArrayLength: null, secondaryArrayLength: null };
                obj[0] = combined;
                obj[3] = primaryValue.length;
                obj[4] = shadowValue.length;
                appendMismatch(obj);
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
                    let tmp3 = nextResult;
                    let addResult = visitedEntries.add(tmp2.primaryRecord);
                    let mismatches = tmp2.mismatches;
                    let tmp5 = mismatches;
                    let tmp6 = mismatches;
                    for (const item10034 of mismatches) {
                      let tmp7 = item10034;
                      let str = item10034.field;
                      str = str.toString();
                      let type2 = item10034.type;
                      if ("field-missing" === type2) {
                        let mismatchedFields = obj.mismatchedFields;
                        obj = { fieldName: null, primaryType: null, shadowType: "missing" };
                        let tmp23 = str;
                        obj[0] = str;
                        let tmp24 = callback;
                        let tmp25 = nextResult;
                        let tmp26 = item10034;
                        obj[1] = callback(tmp2.primaryRecord[tmp7.field]);
                        let arr = mismatchedFields.push(obj);
                      } else if ("value-mismatch" === type2) {
                        let tmp29 = item10034;
                        if (null !== tmp7.primaryValue) {
                          let tmp9 = item10034;
                          if (null !== tmp7.shadowValue) {
                            let tmp10 = item10034;
                            if (typeof tmp7.primaryValue === "object") {
                              let tmp30 = item10034;
                              if (typeof tmp7.shadowValue === "object") {
                                let _Array = Array;
                                let tmp15 = item10034;
                                if (Array.isArray(tmp7.primaryValue)) {
                                  let _Array2 = Array;
                                  let tmp16 = item10034;
                                  if (Array.isArray(tmp7.shadowValue)) {
                                    let tmp20 = str;
                                    let tmp21 = item10034;
                                    let result = appendArrayMismatches(str, tmp7.primaryValue, tmp7.shadowValue);
                                  }
                                }
                                let tmp17 = str;
                                let tmp18 = item10034;
                                let appendDeepMismatchesResult = appendDeepMismatches(str, tmp7.primaryValue, tmp7.shadowValue);
                              }
                            }
                          }
                        }
                        obj = { fieldName: null, primaryType: null, shadowType: null };
                        let tmp11 = str;
                        obj[0] = str;
                        let tmp12 = callback;
                        let tmp13 = item10034;
                        obj[1] = callback(tmp7.primaryValue);
                        obj[2] = callback(tmp7.shadowValue);
                        let appendMismatchResult = appendMismatch(obj);
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
          })(value, items);
          if (null != tmp21) {
            const mismatchesByLastAction2 = value.mismatchesByLastAction;
            const result1 = mismatchesByLastAction2.set(lastResult, num2 + 1);
            value.mismatchesReported = value.mismatchesReported + 1;
            obj = { store_name: null, action_type: null, num_missing_keys: null, num_extra_keys: null, mismatched_fields: null };
            obj[0] = arg0;
            obj[1] = lastResult;
            ({ numMissingKeys: obj5[2], numExtraKeys: obj5[3] } = tmp21);
            const _JSON = JSON;
            obj[4] = JSON.stringify(tmp21.mismatchedFields);
            expandEventPropertiesDefault.track(AnalyticEvents.LIBDISCORE_KV_DUAL_READ_ERROR, obj);
            const obj4 = expandEventPropertiesDefault;
          }
        }
      }
      const obj3 = map;
    }
    const obj2 = addAll;
  }
}
function getType(obj) {
  if (null === obj) {
    return "null";
  } else if (typeof obj === "object") {
    const _Array = Array;
    let str = "object";
    if (Array.isArray(obj)) {
      str = "array";
    }
    let tmp2 = str;
  } else {
    tmp2 = typeof obj;
  }
}
const AnalyticEvents = ME.AnalyticEvents;
let map = new Map();
let result = set3.fileFinishedImporting("modules/libdiscore/stores/DualReadUtils.tsx");

export const runDualReadValidation = function runDualReadValidation(arg0, Kkv, arg2) {
  let items = [];
  let items1 = items;
  arg2((arg0, arg1) => {
    closure_1_7(items1, arg0, arg1);
  });
  items1 = undefined;
  let items2;
  c2 = undefined;
  if (0 !== items.length) {
    items1 = [];
    items2 = [];
    c2 = 0;
    let item = items.forEach((type) => {
      if (closure_2 < 5) {
        closure_2 = tmp + 1;
        type = type.type;
        if ("length-mismatch" !== type) {
          if ("missing-record" === type) {
            items1.push(type.key);
          } else if ("extra-record" === type) {
            items2.push(type.key);
          } else if ("record-mismatch" === type) {
            const mismatches = type.mismatches;
            const item = mismatches.forEach((type) => {
              if ("field-missing" !== type.type) {
                map = undefined;
                function impl(primaryValue, shadowValue) {
                  impl = shadowValue;
                  if (!closure_1_6(primaryValue, shadowValue)) {
                    if (typeof primaryValue === "object") {
                      if (null !== primaryValue) {
                        if (typeof shadowValue === "object") {
                          if (null !== shadowValue) {
                            if (map.has(primaryValue)) {
                              const value = obj.get(primaryValue);
                            } else {
                              const result = obj.set(primaryValue, shadowValue);
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
                          const items = [];
                          HermesBuiltin.arraySpread(primaryValue, 0);
                          items1 = [];
                          const found = items.filter((arg0) => !shadowValue.has(arg0));
                          HermesBuiltin.arraySpread(shadowValue, 0);
                          items1.filter((arg0) => !primaryValue.has(arg0)).length;
                        }
                      }
                      const _Array = Array;
                      if (Array.isArray(primaryValue)) {
                        const _Array2 = Array;
                        if (Array.isArray(shadowValue)) {
                          const _Math = Math;
                          const bound = Math.min(primaryValue.length, shadowValue.length);
                          for (let num3 = 0; num3 < bound; num3 = num3 + 1) {
                            let tmp32 = closure_1_6;
                            let tmp33 = num3;
                            if (!closure_1_6(primaryValue[num3], shadowValue[num3])) {
                              let tmp34 = impl;
                              let tmp35 = impl(primaryValue[num3], shadowValue[num3]);
                            }
                          }
                        }
                      }
                      if (closure_1_9(primaryValue)) {
                        if (tmp3(shadowValue)) {
                          const _Set3 = Set;
                          const _Object = Object;
                          const set = new Set(Object.keys(primaryValue));
                          const _Set4 = Set;
                          const _Object2 = Object;
                          const set1 = new Set(Object.keys(shadowValue));
                          const _Set5 = Set;
                          items2 = [];
                          HermesBuiltin.arraySpread(set1, HermesBuiltin.arraySpread(set, 0));
                          const set2 = new Set(items2);
                          const _Array3 = Array;
                          const sorted = Array.from(set2).sort();
                          for (const item10068 of sorted) {
                            let tmp23 = item10068;
                            let hasItem = set.has(item10068);
                            if (hasItem) {
                              let tmp25 = item10068;
                              hasItem = set1.has(tmp23);
                            }
                            if (hasItem) {
                              let tmp26 = closure_1_6;
                              let tmp27 = item10068;
                              if (!closure_1_6(arg0[tmp23], arg1[tmp23])) {
                                let tmp28 = impl;
                                let tmp29 = item10068;
                                let tmp30 = impl(arg0[tmp23], arg1[tmp23]);
                              }
                            }
                            continue;
                          }
                          const arr = Array.from(set2);
                        }
                      }
                      tmp3 = closure_1_9;
                    } else {
                      const _Date2 = Date;
                    }
                  }
                }
                const _Map = Map;
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
  logErrorsToAnalytics(arg0, items);
};
export { doDualReadValidation };
export { logErrorsToAnalytics };