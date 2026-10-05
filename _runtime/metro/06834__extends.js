// _runtime/metro/06834__extends.js
import removeAccents from "../06836_removeAccents.js";
import _extends from "06835__extends.js";

let hasOwnProperty;

function getMatchRanking(rankedValue, arg1, keepDiacritics) {
  let NO_MATCH;
  const text = `${rankedValue}`;
  let defaultResult = text;
  if (!keepDiacritics.keepDiacritics) {
    defaultResult = _module1.default(`${rankedValue}`);
  }
  const text1 = `${arg1}`;
  let defaultResult1 = text1;
  if (!keepDiacritics.keepDiacritics) {
    defaultResult1 = _module1.default(`${arg1}`);
  }
  if (defaultResult1.length > defaultResult.length) {
    NO_MATCH = obj2.NO_MATCH;
  } else if (defaultResult === defaultResult1) {
    NO_MATCH = obj2.CASE_SENSITIVE_EQUAL;
  } else {
    const str2 = defaultResult.toLowerCase();
    const formatted = defaultResult1.toLowerCase();
    if (str2 === formatted) {
      NO_MATCH = obj2.EQUAL;
    } else if (str2.startsWith(formatted)) {
      NO_MATCH = obj2.STARTS_WITH;
    } else if (str2.includes(` ${arr3}`)) {
      NO_MATCH = obj2.WORD_STARTS_WITH;
    } else if (str2.includes(formatted)) {
      NO_MATCH = obj2.CONTAINS;
    } else if (1 === formatted.length) {
      NO_MATCH = obj2.NO_MATCH;
    } else {
      let c0 = "";
      let parts = str2.split(" ");
      let item = parts.forEach((item) => {
        const parts = item.split("-");
        item = parts.forEach((item) => {
          closure_0 = closure_0 + item.substr(0, 1);
        });
      });
      if (c0.includes(formatted)) {
        NO_MATCH = obj2.ACRONYM;
      } else {
        let num4 = 0;
        let num5 = 0;
        let num6 = -1;
        const length = str2.length;
        if (0 < length) {
          while (str2[num4] !== tmp5) {
            let sum = num4 + 1;
            num4 = sum;
            num5 = 0;
            num6 = -1;
          }
          num6 = num4 + 1;
          num5 = 1;
        }
        if (num6 < 0) {
          NO_MATCH = obj2.NO_MATCH;
        } else {
          let tmp16 = num5;
          let num8 = 1;
          let tmp17 = num6;
          let tmp18 = num5;
          let tmp19 = num6;
          const length3 = formatted.length;
          if (1 < length3) {
            while (true) {
              let length2 = str2.length;
              let tmp11 = tmp17;
              let sum2 = tmp16;
              let num7 = -1;
              if (tmp17 < length2) {
                while (str2[tmp11] !== tmp8) {
                  let sum1 = tmp11 + 1;
                  tmp11 = sum1;
                  sum2 = tmp16;
                  num7 = -1;
                }
                sum2 = tmp16 + 1;
                num7 = tmp11 + 1;
              }
              if (-1 >= num7) {
                break;
              } else {
                num8 = num8 + 1;
                tmp16 = sum2;
                tmp17 = num7;
                tmp18 = sum2;
                tmp19 = num7;
              }
            }
            NO_MATCH = obj2.NO_MATCH;
          }
          NO_MATCH = obj2.MATCHES + (tmp18 / formatted.length) * (1 / (tmp19 - num6));
        }
      }
    }
  }
  return NO_MATCH;
}
if (_extends) {
  if (typeof _extends === "object") {
    let obj = _extends;
  }
  let _module1 = removeAccents;
  if (_module1) {
    let tmp4;
    if (typeof _module1 === "object") {
      let str2 = "default";
      tmp4 = _module1;
    }
    function matchSorter(valueResult, query, arg2) {
      let length;
      let threshold;
      let closure_0 = query;
      let tmp = arg2;
      obj = arg2;
      if (undefined === arg2) {
        obj = {};
        tmp = obj;
      }
      ({ keys: obj2, threshold } = tmp);
      if (undefined === threshold) {
        threshold = obj2.MATCHES;
      }
      let baseSort = tmp.baseSort;
      if (undefined === baseSort) {
        baseSort = threshold;
      }
      let fn = tmp.sorter;
      if (undefined === fn) {
        fn = (arr) =>
          arr.sort((arg0, arg1) => {
            let keyIndex;
            let keyIndex2;
            let num;
            let rank;
            let rank2;
            ({ rank, keyIndex } = arg0);
            ({ rank: rank2, keyIndex: keyIndex2 } = arg1);
            if (rank === rank2) {
              let num2;
              if (keyIndex === keyIndex2) {
                num2 = tmp(arg0, arg1);
              } else {
                num2 = 1;
                if (keyIndex < keyIndex2) {
                  num2 = -1;
                }
              }
              num = num2;
            } else {
              num = 1;
              if (rank > rank2) {
                num = -1;
              }
            }
            return num;
          });
      }
      const fnResult = fn(
        valueResult.reduce(function reduceItemsToRanked(arr, rankedValue, index) {
          let reduced;
          let tmp;
          let closure_1 = obj;
          if (length) {
            const items = [];
            let num4 = 0;
            if (0 < length.length) {
              while (true) {
                let defaultResult;
                let str3Result;
                let items4;
                let tmp6 = length[num4];
                if (typeof tmp6 === "string") {
                  defaultResult = closure_5;
                } else {
                  defaultResult = obj.default({}, closure_5, tmp6);
                }
                let str3 = tmp6;
                if (typeof tmp6 === "object") {
                  str3 = tmp6.key;
                }
                if (typeof str3 === "function") {
                  str3Result = str3(rankedValue);
                } else {
                  str3Result = null;
                  if (null != rankedValue) {
                    let _Object = Object;
                    hasOwnProperty = Object.hasOwnProperty;
                    if (hasOwnProperty.call(rankedValue, str3)) {
                      str3Result = rankedValue[str3];
                    } else {
                      let applyResult;
                      let num7;
                      str3Result = null;
                      if (str3.includes(".")) {
                        let parts = str3.split(".");
                        let items1 = [rankedValue];
                        let length2 = parts.length;
                        let num5 = 0;
                        let arr5 = items1;
                        let tmp10 = items1;
                        if (0 < length2) {
                          do {
                            let tmp11 = parts[num5];
                            let items2 = [];
                            let length3 = arr5.length;
                            let num6 = 0;
                            let tmp14 = items2;
                            if (0 < length3) {
                              do {
                                let tmp15 = arr5[num6];
                                let combined = items2;
                                if (null != tmp15) {
                                  let _Object2 = Object;
                                  let hasOwnProperty2 = Object.hasOwnProperty;
                                  if (hasOwnProperty2.call(tmp15, tmp11)) {
                                    let tmp19 = tmp15[tmp11];
                                    combined = items2;
                                    if (null != tmp19) {
                                      let arr2 = items2.push(tmp19);
                                      combined = items2;
                                    }
                                  } else {
                                    combined = items2;
                                    if ("*" === tmp11) {
                                      combined = items2.concat(tmp15);
                                    }
                                  }
                                }
                                num6 = num6 + 1;
                                items2 = combined;
                                tmp14 = combined;
                              } while (num6 < length3);
                            }
                            num5 = num5 + 1;
                            arr5 = tmp14;
                            tmp10 = tmp14;
                          } while (num5 < length2);
                        }
                        let _Array = Array;
                        applyResult = tmp10;
                        if (Array.isArray(tmp10[0])) {
                          let items3 = [];
                          let concat = items3.concat;
                          applyResult = concat.apply(items3, tmp10);
                        }
                      }
                      let length4 = applyResult.length;
                      for (let num7 = 0; num7 < length4; num7 = num7 + 1) {
                        obj = { itemValue: applyResult[num7], attributes: defaultResult };
                        let arr3 = items.push(obj);
                      }
                      num4 = num4 + 1;
                      if (num4 >= length) {
                        break;
                      }
                    }
                  }
                }
                if (null == str3Result) {
                  items4 = [];
                } else {
                  let _Array2 = Array;
                  items4 = str3Result;
                  if (!Array.isArray(str3Result)) {
                    let _String = String;
                    let items5 = [String(str3Result)];
                    items4 = items5;
                  }
                }
                applyResult = items4;
              }
            }
            obj2 = { rankedValue, rank: obj2.NO_MATCH, keyIndex: -1, keyThreshold: obj.threshold };
            reduced = items.reduce((acc, item, index) => {
              let attributes;
              let itemValue;
              let keyIndex;
              let keyThreshold;
              let maxRanking;
              let minRanking;
              let rank;
              let rankedValue;
              ({ rank, rankedValue, keyIndex, keyThreshold } = acc);
              ({ itemValue, attributes } = item);
              const tmp = baseSort(itemValue, closure_0, closure_1);
              ({ minRanking, maxRanking, threshold } = attributes);
              if (tmp >= minRanking) {
                minRanking = tmp;
                if (tmp > maxRanking) {
                  minRanking = maxRanking;
                }
              }
              if (minRanking > rank) {
                keyIndex = index;
                rankedValue = itemValue;
                keyThreshold = threshold;
                rank = minRanking;
              }
              return { rankedValue, rank, keyIndex, keyThreshold };
            }, obj2);
          } else {
            reduced = {
              rankedValue,
              rank: getMatchRanking(rankedValue, tmp, obj),
              keyIndex: -1,
              keyThreshold: obj.threshold,
            };
          }
          let keyThreshold = reduced.keyThreshold;
          let rank = reduced.rank;
          if (undefined === keyThreshold) {
            keyThreshold = threshold;
          }
          if (rank >= keyThreshold) {
            const obj3 = { item: rankedValue, index };
            arr.push(obj.default({}, reduced, obj3));
          }
          return arr;
        }, []),
      );
      return fnResult.map((item) => item.item);
    }
    _module1 = tmp4;
    let obj2 = {
      CASE_SENSITIVE_EQUAL: 7,
      EQUAL: 6,
      STARTS_WITH: 5,
      WORD_STARTS_WITH: 4,
      CONTAINS: 3,
      ACRONYM: 2,
      MATCHES: 1,
      NO_MATCH: 0,
    };
    matchSorter.rankings = obj2;
    function defaultBaseSortFn(rankedValue, rankedValue2) {
      const StringResult = String(rankedValue.rankedValue);
      return StringResult.localeCompare(String(rankedValue2.rankedValue));
    }
    let closure_5 = { maxRanking: Infinity, minRanking: -Infinity };
    exports.defaultBaseSortFn = defaultBaseSortFn;
    exports.matchSorter = matchSorter;
    exports.rankings = obj2;
  }
  let obj3 = { default: _module1 };
  tmp4 = obj3;
}
obj = { default: _extends };
