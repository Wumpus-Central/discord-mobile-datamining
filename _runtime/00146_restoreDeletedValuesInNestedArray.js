// === Module 146: restoreDeletedValuesInNestedArray ===

// Module 146 (restoreDeletedValuesInNestedArray)
import deepDifferDefault from "deepDiffer" /* 147 */;
import flattenStyleDefault from "flattenStyle" /* 148 */;

importDefault = arg2;
const dependencyMap = arg6;
function restoreDeletedValuesInNestedArray(arg0, arg1, arg2) {
  if (Array.isArray(arg1)) {
    if (+arg1.length) {
      let diff = tmp6 - 1;
      if (closure_4 > 0) {
        restoreDeletedValuesInNestedArray(arg0, arg1[diff], arg2);
        while (+diff) {
          diff = tmp11 - 1;
          if (closure_4 <= 0) {
            break;
          }
        }
      }
    }
  } else if (arg1) {
    if (closure_4 > 0) {
      for (const key10009 in c3) {
        if (!_null[key10009]) {
          continue;
        } else {
          let tmp2 = arg1[key10009];
          if (undefined === tmp2) {
            continue;
          } else {
            let obj = arg2[key10009];
            if (!obj) {
              continue;
            } else {
              if (typeof tmp2 === "function") {
                tmp2 = true;
              }
              if (undefined === tmp2) {
                tmp2 = null;
              }
              if (typeof obj !== "object") {
                arg0[key10009] = tmp2;
              } else if (typeof obj.diff === "function") {
                let processResult = tmp2;
                if (typeof obj.process === "function") {
                  processResult = obj.process(tmp2);
                }
                arg0[key10009] = processResult;
              }
              _null[key10009] = false;
              closure_4 = closure_4 - 1;
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
    }
  }
}
function diffNestedProperty(arr, arr, closure_2, arg3) {
  let tmp = arr;
  if (!arr) {
    if (arr === closure_2) {
      return tmp;
    }
  }
  if (!arr) {
    if (closure_2) {
      const tmp3 = addNestedProperty(tmp, closure_2, arg3);
    } else if (arr) {
      if (arr) {
        const _Array = Array;
        if (!Array.isArray(arr)) {
          const tmp4 = diffProperties(tmp, arr, closure_2, arg3);
        }
      }
      let num4 = 0;
      let tmp11 = tmp;
      if (0 < arr.length) {
        do {
          let arr2 = arr[num4];
          let tmp15 = tmp11;
          if (arr2) {
            let _Array2 = Array;
            if (Array.isArray(arr2)) {
              let num6 = 0;
              let tmp21 = tmp11;
              let tmp22 = tmp11;
              if (0 < arr2.length) {
                do {
                  tmp21 = clearNestedProperty(tmp21, arr2[num6], arg3);
                  num6 = num6 + 1;
                  tmp22 = tmp21;
                  length = arr2.length;
                } while (num6 < length);
              }
              tmp15 = tmp22;
            } else {
              tmp15 = diffProperties(tmp14, arr2, closure_2, arg3);
            }
          }
          num4 = num4 + 1;
          tmp11 = tmp15;
        } while (num4 < arr.length);
      }
    }
  }
  let tmp26 = globalThis;
  if (!Array.isArray(arr)) {
    const _Array3 = Array;
    if (!Array.isArray(closure_2)) {
      diffProperties(tmp, arr, closure_2, arg3);
    }
  }
  if (!Array.isArray(arr)) {
    const _Array5 = Array;
    const isArray = Array.isArray(arr);
    const tmp36 = flattenStyleDefault;
    if (isArray) {
      let tmp33Result = diffProperties(tmp, tmp36(arr), closure_2, arg3);
    } else {
      tmp33Result = diffProperties(tmp, arr, tmp36(closure_2), arg3);
    }
  } else {
    const _Array4 = Array;
  }
  const tmp44 = arr.length < closure_2.length ? arr.length : closure_2.length;
  let num11 = 0;
  let tmp45 = tmp;
  let num12 = 0;
  let tmp46 = tmp;
  if (0 < tmp44) {
    do {
      tmp45 = diffNestedProperty(tmp45, arr[num11], closure_2[num11], arg3);
      num11 = num11 + 1;
      tmp46 = tmp45;
      num12 = num11;
    } while (num11 < tmp44);
  }
  let sum = num12;
  let tmp51 = tmp46;
  let tmp52 = tmp46;
  let sum1 = num12;
  if (num12 < arr.length) {
    do {
      let arr3 = arr[sum];
      let tmp56 = tmp51;
      if (arr3) {
        let _Array6 = tmp26.Array;
        if (_Array6.isArray(arr3)) {
          let num15 = 0;
          let tmp62 = tmp51;
          let tmp63 = tmp51;
          if (0 < arr3.length) {
            do {
              let arr4 = arr3[num15];
              let tmp66 = tmp62;
              if (arr4) {
                let _Array7 = tmp26.Array;
                if (_Array7.isArray(arr4)) {
                  let num17 = 0;
                  let tmp72 = tmp62;
                  let tmp73 = tmp62;
                  if (0 < arr4.length) {
                    do {
                      tmp72 = clearNestedProperty(tmp72, arr4[num17], arg3);
                      num17 = num17 + 1;
                      tmp73 = tmp72;
                      length2 = arr4.length;
                    } while (num17 < length2);
                  }
                  tmp66 = tmp73;
                } else {
                  tmp66 = diffProperties(tmp65, arr4, closure_2, arg3);
                }
              }
              num15 = num15 + 1;
              tmp62 = tmp66;
              tmp63 = tmp66;
            } while (num15 < arr3.length);
          }
          tmp56 = tmp63;
        } else {
          tmp56 = diffProperties(tmp55, arr3, closure_2, arg3);
        }
      }
      sum = sum + 1;
      tmp51 = tmp56;
      tmp52 = tmp56;
      sum1 = sum;
    } while (sum < arr.length);
  }
  let tmp75 = tmp52;
  tmp = tmp52;
  if (sum1 < closure_2.length) {
    do {
      let tmp76 = closure_2[sum1];
      arr = tmp75;
      tmp26 = tmp75;
      if (tmp76) {
        tmp26 = addNestedProperty(arr, tmp76, arg3);
      }
      sum1 = sum1 + 1;
      tmp75 = tmp26;
      tmp = tmp26;
    } while (sum1 < closure_2.length);
  }
  tmp33Result = tmp;
}
function clearNestedProperty(arr, arr2, arg2) {
  let length;
  if (arr2) {
    const _Array = Array;
    if (Array.isArray(arr2)) {
      let num4 = 0;
      let tmp8 = arr;
      let tmp9 = arr;
      if (0 < arr2.length) {
        do {
          tmp8 = clearNestedProperty(tmp8, arr2[num4], arg2);
          num4 = num4 + 1;
          tmp9 = tmp8;
          length = arr2.length;
        } while (num4 < length);
      }
      return tmp9;
    } else {
      return diffProperties(arr, arr2, closure_2, arg2);
    }
  } else {
    return arr;
  }
}
function diffProperties(arr, arr, closure_2, arg3) {
  let tmp4;
  let tmp3 = arr;
  let tmp6 = arr;
  const keys = Object.keys();
  if (keys !== undefined) {
    let tmp5 = tmp4;
    tmp6 = tmp3;
    while (keys[tmp] !== undefined) {
      let obj5 = arg3[tmp9];
      tmp4 = obj5;
      if (!obj5) {
        continue;
      } else {
        let tmp10 = arr[tmp9];
        let tmp11 = closure_2[tmp9];
        let tmp12 = tmp10;
        let tmp13 = tmp11;
        if (typeof tmp11 === "function") {
          let tmp65 = typeof obj5 === "object";
          if (typeof obj5 === "object") {
            tmp65 = typeof obj5.process === "function";
          }
          tmp12 = tmp10;
          tmp13 = tmp11;
          if (!tmp65) {
            let flag = tmp10;
            if (typeof tmp10 === "function") {
              flag = true;
            }
            tmp12 = flag;
            tmp13 = true;
          }
        }
        let tmp14 = tmp12;
        if (undefined === tmp13) {
          let tmp15 = tmp12;
          if (undefined === tmp12) {
            tmp15 = null;
          }
          tmp14 = tmp15;
          tmp13 = null;
        }
        if (obj1) {
          obj1[tmp9] = false;
        }
        if (tmp8) {
          if (undefined !== tmp8[tmp9]) {
            if (typeof obj5 !== "object") {
              tmp8[tmp9] = tmp13;
              tmp4 = obj5;
              tmp3 = tmp8;
              continue;
            } else {
              if (typeof obj5.diff === "function") {
                let processResult = tmp13;
                if (typeof obj5.process === "function") {
                  processResult = obj5.process(tmp13);
                }
                tmp8[tmp9] = processResult;
                tmp4 = obj5;
                tmp3 = tmp8;
                continue;
              } else {
                tmp4 = obj5;
                tmp3 = tmp8;
              }
              continue;
            }
            continue;
          }
        }
        tmp4 = obj5;
        tmp3 = tmp8;
        if (tmp14 === tmp13) {
          continue;
        } else {
          if (typeof obj5 !== "object") {
            let tmp25 = typeof tmp13 !== "object";
            if (typeof tmp13 === "object") {
              tmp25 = null === tmp13;
            }
            if (!tmp25) {
              tmp25 = deepDifferDefault(tmp14, tmp13, closure_5);
            }
            tmp4 = obj5;
            tmp3 = tmp8;
            if (!tmp25) {
              continue;
            } else {
              let obj = tmp8;
              let tmp29 = tmp8;
              if (!tmp8) {
                obj = {};
                tmp29 = obj;
              }
              obj[tmp9] = tmp13;
              tmp3 = tmp29;
              tmp4 = obj5;
              continue;
            }
            continue;
          } else {
            if (typeof obj5.diff !== "function") {
              if (typeof obj5.process !== "function") {
                obj1 = null;
                closure_4 = 0;
                let tmp71 = diffNestedProperty(tmp8, tmp14, tmp13, obj5);
                let tmp16 = closure_4 > 0 && tmp71;
                tmp4 = obj5;
                tmp3 = tmp71;
                if (!tmp16) {
                  continue;
                } else {
                  let tmp18 = restoreDeletedValuesInNestedArray(tmp71, tmp13, obj5);
                  obj1 = null;
                  tmp4 = obj5;
                  tmp3 = tmp71;
                  continue;
                }
                continue;
              }
              continue;
            }
            if (undefined === tmp14) {
              let processResult1 = tmp13;
              if (typeof obj5.process === "function") {
                processResult1 = obj5.process(tmp13);
              }
              obj = tmp8;
              let tmp24 = tmp8;
              if (!tmp8) {
                obj = {};
                tmp24 = obj;
              }
              obj[tmp9] = processResult1;
              tmp3 = tmp24;
              tmp4 = obj5;
              continue;
            } else {
              if (typeof obj5.diff === "function") {
                let diffResult = obj5.diff(tmp14, tmp13);
              } else {
                diffResult = typeof tmp13 !== "object";
                if (typeof tmp13 === "object") {
                  diffResult = null === tmp13;
                }
                if (!diffResult) {
                  diffResult = deepDifferDefault(tmp14, tmp13, closure_5);
                }
              }
              tmp4 = obj5;
              tmp3 = tmp8;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
  }
  let tmp31 = tmp6;
  let tmp32 = tmp6;
  const keys1 = Object.keys();
  if (keys1 !== undefined) {
    let tmp34 = tmp5;
    obj1 = tmp31;
    tmp32 = tmp31;
    while (keys1[tmp2] !== undefined) {
      let tmp36 = undefined === closure_2[tmp35];
      if (tmp36) {
        tmp34 = arg3[tmp35];
      }
      tmp5 = tmp34;
      tmp31 = obj1;
      if (!tmp36) {
        continue;
      } else {
        let tmp37 = obj1;
        if (obj1) {
          tmp37 = undefined !== obj1[tmp35];
        }
        let tmp38 = obj1;
        if (!tmp37) {
          arr = arr[tmp35];
          if (undefined === arr) {
            tmp38 = obj1;
          } else {
            if (typeof tmp34 === "object") {
              if (typeof tmp34.diff !== "function") {
                if (typeof tmp34.process !== "function") {
                  if (arr) {
                    let _Array = Array;
                    if (Array.isArray(arr)) {
                      let num2 = 0;
                      let tmp46 = obj1;
                      let tmp47 = obj1;
                      if (0 < arr.length) {
                        do {
                          let arr2 = arr[num2];
                          let tmp50 = tmp46;
                          if (arr2) {
                            let _Array2 = Array;
                            if (Array.isArray(arr2)) {
                              let num4 = 0;
                              let tmp56 = tmp46;
                              let tmp57 = tmp46;
                              if (0 < arr2.length) {
                                do {
                                  tmp56 = clearNestedProperty(tmp56, arr2[num4], tmp34);
                                  num4 = num4 + 1;
                                  tmp57 = tmp56;
                                  length = arr2.length;
                                } while (num4 < length);
                              }
                              tmp50 = tmp57;
                            } else {
                              tmp50 = diffProperties(tmp49, arr2, closure_2, tmp34);
                            }
                          }
                          num2 = num2 + 1;
                          tmp46 = tmp50;
                          tmp47 = tmp50;
                        } while (num2 < arr.length);
                      }
                    } else {
                      let tmp45 = diffProperties(obj1, arr, closure_2, tmp34);
                    }
                  }
                }
              }
            }
            obj = obj1;
            let tmp59 = obj1;
            if (!obj1) {
              obj = {};
              tmp59 = obj;
            }
            obj[tmp35] = null;
            let tmp60 = obj1;
            if (!obj1) {
              obj1 = {};
              tmp60 = obj1;
            }
            if (!tmp60[tmp35]) {
              obj1[tmp35] = true;
              closure_4 = closure_4 + 1;
            }
          }
        }
        tmp31 = tmp38;
        tmp5 = tmp34;
        continue;
      }
      continue;
    }
  }
  return tmp32;
}
function addNestedProperty(arr, closure_2, arg2) {
  let length;
  if (Array.isArray(closure_2)) {
    let num4 = 0;
    let tmp11 = arr;
    let tmp12 = arr;
    if (0 < closure_2.length) {
      do {
        tmp11 = addNestedProperty(tmp11, closure_2[num4], arg2);
        num4 = num4 + 1;
        tmp12 = tmp11;
        length = closure_2.length;
      } while (num4 < length);
    }
    return tmp12;
  } else {
    let tmp4 = arr;
    let tmp5 = arr;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp5 = tmp4;
      while (keys[tmp] !== undefined) {
        let tmp15 = closure_2[tmp8];
        let obj2 = arg2[tmp8];
        if (null == obj2) {
          continue;
        } else {
          if (undefined === tmp15) {
            tmp4 = tmp7;
            if (!tmp7) {
              continue;
            } else {
              tmp4 = tmp7;
              let processResult = null;
            }
            continue;
          } else if (typeof obj2 === "object") {
            if (typeof obj2.process === "function") {
              processResult = obj2.process(tmp15);
            } else if (typeof obj2.diff === "function") {
              processResult = tmp15;
            }
          } else {
            processResult = typeof tmp15 === "function";
            if (typeof tmp15 !== "function") {
              processResult = tmp15;
            }
          }
          if (undefined === processResult) {
            tmp4 = addNestedProperty(tmp7, tmp15, obj2);
            continue;
          } else {
            let obj = tmp7;
            if (!tmp7) {
              obj = {};
            }
            obj[tmp8] = processResult;
            tmp4 = obj;
            continue;
          }
          continue;
        }
        continue;
      }
    }
    return tmp5;
  }
}
let closure_2 = {};
let c3 = null;
let c4 = 0;
let closure_5 = { unsafelyIgnoreFunctions: true };
arg5.create = function create(closure_2) {
  return addNestedProperty(null, closure_2, arg1);
};
arg5.diff = function diff(arr, closure_2) {
  return diffProperties(null, arr, closure_2, arg2);
};