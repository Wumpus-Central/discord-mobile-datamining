// _runtime/05840_getMatchRanking.js
import _extends from "_extends";

function getMatchRanking(arg0, arg1, keepDiacritics) {
  const text = `${arg0}`;
  let defaultResult = text;
  if (!keepDiacritics.keepDiacritics) {
    defaultResult = tmp4.default(`${arg0}`);
  }
  const text1 = `${arg1}`;
  let defaultResult1 = text1;
  if (!keepDiacritics.keepDiacritics) {
    defaultResult1 = tmp4.default(`${arg1}`);
  }
  if (defaultResult1.length > defaultResult.length) {
    let NO_MATCH = obj.NO_MATCH;
  } else if (defaultResult === defaultResult1) {
    NO_MATCH = obj.CASE_SENSITIVE_EQUAL;
  } else {
    const str2 = defaultResult.toLowerCase();
    const formatted = defaultResult1.toLowerCase();
    if (str2 === formatted) {
      NO_MATCH = obj.EQUAL;
    } else if (str2.startsWith(formatted)) {
      NO_MATCH = obj.STARTS_WITH;
    } else if (str2.includes(` ${arr3}`)) {
      NO_MATCH = obj.WORD_STARTS_WITH;
    } else if (str2.includes(formatted)) {
      NO_MATCH = obj.CONTAINS;
    } else if (1 === formatted.length) {
      NO_MATCH = obj.NO_MATCH;
    } else {
      let parts = str2.split(" ");
      let item = parts.forEach((str) => {
        const parts = str.split("-");
        const item = parts.forEach((str) => {
          closure_0 = closure_0 + str.substr(0, 1);
        });
      });
      if ("".includes(formatted)) {
        NO_MATCH = obj.ACRONYM;
      } else {
        let num4 = 0;
        let num5 = 0;
        let num6 = -1;
        if (0 < str2.length) {
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
          NO_MATCH = obj.NO_MATCH;
        } else {
          let tmp16 = num5;
          let num8 = 1;
          let tmp17 = num6;
          let tmp18 = num5;
          let tmp19 = num6;
          if (1 < formatted.length) {
            while (true) {
              let length2 = str2.length;
              let tmp9 = tmp16;
              let tmp10 = num8;
              let tmp11 = tmp17;
              let sum2 = tmp16;
              let num7 = -1;
              if (tmp17 < length2) {
                let tmp13 = tmp11;
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
            NO_MATCH = obj.NO_MATCH;
          }
          NO_MATCH = obj.MATCHES + tmp18 / formatted.length * (1 / (tmp19 - num6));
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
  const _module1 = require("regExp");
  if (_module1) {
    if (typeof _module1 === "object") {
      let tmp4 = _module1;
    }
    function matchSorter(valueResult, query, arg2) {
      let obj;
      let threshold;
      let closure_0 = query;
      let tmp = arg2;
      obj = arg2;
      if (undefined === arg2) {
        obj = {};
        tmp = obj;
      }
      ({ keys: obj, threshold } = tmp);
      if (undefined === threshold) {
        threshold = obj.MATCHES;
      }
      let baseSort = tmp.baseSort;
      if (undefined === baseSort) {
        baseSort = threshold;
      }
      let fn = tmp.sorter;
      if (undefined === fn) {
        fn = (arr) => arr.sort((arg0, arg1) => {
          let keyIndex;
          let keyIndex2;
          let rank;
          let rank2;
          ({ rank, keyIndex } = arg0);
          ({ rank: rank2, keyIndex: keyIndex2 } = arg1);
          if (rank === rank2) {
            if (keyIndex === keyIndex2) {
              let num2 = tmp(arg0, arg1);
            } else {
              num2 = 1;
              if (keyIndex < keyIndex2) {
                num2 = -1;
              }
            }
          } else {
            let num = 1;
            if (rank > rank2) {
              num = -1;
            }
            return num;
          }
        });
      }
      return fn(valueResult.reduce(function reduceItemsToRanked(arr) {
        let str3;
        arr = closure_2;
        if (closure_2) {
          const items = [];
          let num4 = 0;
          if (0 < arr.length) {
            while (true) {
              let tmp6 = arr[num4];
              let tmp7 = num4;
              if (typeof tmp6 === "string") {
                let defaultResult = outer1_5;
              } else {
                let tmp27 = query;
                let tmp28 = outer1_5;
                defaultResult = query.default({}, outer1_5, tmp6);
              }
              str3 = tmp6;
              if (typeof tmp6 === "object") {
                str3 = tmp6.key;
              }
              if (typeof str3 === "function") {
                break;
              } else {
                let str3Result = null;
                if (null != arg1) {
                  let _Object = Object;
                  let call = hasOwnProperty.call;
                  if (typeof call === "unknown" ? hasOwnProperty(str3) : call(arg1, str3)) {
                    str3Result = arg1[str3];
                  } else {
                    str3Result = null;
                    if (str3.includes(".")) {
                      let parts = str3.split(".");
                      let items1 = [arg1];
                      let length2 = parts.length;
                      let num5 = 0;
                      let arr5 = items1;
                      let tmp10 = items1;
                      if (0 < length2) {
                        do {
                          let tmp11 = parts[num5];
                          let items2 = [];
                          let length3 = arr5.length;
                          let tmp12 = num5;
                          let tmp13 = arr5;
                          let num6 = 0;
                          let tmp14 = items2;
                          if (0 < length3) {
                            do {
                              let tmp15 = arr5[num6];
                              let tmp16 = num6;
                              let tmp17 = items2;
                              let combined = items2;
                              if (null != tmp15) {
                                let _Object2 = Object;
                                let call2 = hasOwnProperty2.call;
                                if (typeof call2 === "unknown" ? hasOwnProperty2(tmp11) : call2(tmp15, tmp11)) {
                                  let tmp19 = tmp15[tmp11];
                                  combined = items2;
                                  if (null != tmp19) {
                                    arr = items2.push(tmp19);
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
                      let applyResult = tmp10;
                      if (Array.isArray(tmp10[0])) {
                        let items3 = [];
                        let concat = items3.concat;
                        applyResult = concat.apply(items3, tmp10);
                      }
                      let length4 = applyResult.length;
                      for (let num7 = 0; num7 < length4; num7 = num7 + 1) {
                        let obj = { itemValue: null, attributes: null };
                        obj[0] = applyResult[num7];
                        obj[1] = defaultResult;
                        arr = items.push(obj);
                      }
                      num4 = num4 + 1;
                    }
                  }
                }
                if (null == str3Result) {
                  let items4 = [];
                } else {
                  let _Array2 = Array;
                  items4 = str3Result;
                  if (!Array.isArray(str3Result)) {
                    let _String = String;
                    let items5 = [String(str3Result)];
                    items4 = items5;
                  }
                }
                let tmp21 = items4;
              }
            }
            str3Result = str3(arg1);
          }
          obj = { rankedValue: null, rank: null, keyIndex: -1, keyThreshold: null };
          obj[0] = arg1;
          obj[1] = outer1_2.NO_MATCH;
          obj[3] = tmp2.threshold;
          let reduced = items.reduce((arg0, arg1, arg2) => {
            let attributes;
            let itemValue;
            let keyIndex;
            let keyThreshold;
            let maxRanking;
            let minRanking;
            let rank;
            let rankedValue;
            let threshold;
            ({ rank, rankedValue, keyIndex, keyThreshold } = arg0);
            ({ itemValue, attributes } = arg1);
            const tmp = outer1_4(itemValue, closure_0, closure_1);
            ({ minRanking, maxRanking, threshold } = attributes);
            if (tmp >= minRanking) {
              minRanking = tmp;
              if (tmp > maxRanking) {
                minRanking = maxRanking;
              }
            }
            if (minRanking > rank) {
              keyIndex = arg2;
              rankedValue = itemValue;
              keyThreshold = threshold;
              rank = minRanking;
            }
            return { rankedValue, rank, keyIndex, keyThreshold };
          }, obj);
        } else {
          reduced = { rankedValue: null, rank: null, keyIndex: -1, keyThreshold: null };
          reduced[0] = arg1;
          reduced[1] = baseSort(arg1, tmp, tmp2);
          reduced[3] = tmp2.threshold;
        }
        let keyThreshold = reduced.keyThreshold;
        if (undefined === keyThreshold) {
          keyThreshold = threshold;
        }
        if (reduced.rank >= keyThreshold) {
          const obj1 = { item: null, index: null };
          obj1[0] = arg1;
          obj1[1] = arg2;
          arr.push(query.default({}, reduced, obj1));
        }
        return arr;
      }, [])).map((item) => item.item);
    }
    let closure_1 = tmp4;
    obj = { CASE_SENSITIVE_EQUAL: 7, EQUAL: 6, STARTS_WITH: 5, WORD_STARTS_WITH: 4, CONTAINS: 3, ACRONYM: 2, MATCHES: 1, NO_MATCH: 0 };
    matchSorter.rankings = obj;
    function defaultBaseSortFn(rankedValue, rankedValue2) {
      return String(rankedValue.rankedValue).localeCompare(String(rankedValue2.rankedValue));
    }
    let closure_5 = { maxRanking: Infinity, minRanking: -Infinity };
    exports.defaultBaseSortFn = defaultBaseSortFn;
    exports.matchSorter = matchSorter;
    exports.rankings = obj;
  }
  obj = { default: null };
  obj[0] = _module1;
  tmp4 = obj;
}
obj = { default: _extends };