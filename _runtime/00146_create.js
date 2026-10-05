// === Module 146: create ===

// Module 146 (create)
import deepDifferDefault from "deepDiffer" /* 147 */;
import flattenStyleDefault from "flattenStyle" /* 148 */;

function restoreDeletedValuesInNestedArray(arg0, arg1, validAttributes) {
  if (Array.isArray(arg1)) {
    if (+arg1.length) {
      let diff = tmp6 - 1;
      if (closure_4 > 0) {
        restoreDeletedValuesInNestedArray(arg0, arg1[diff], validAttributes);
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
      for (const key10009 in obj4) {
        if (!obj4[key10009]) {
          continue;
        } else {
          let tmp2 = arg1[key10009];
          if (undefined === tmp2) {
            continue;
          } else {
            let obj = validAttributes[key10009];
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
              obj4[key10009] = false;
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
function diffNestedProperty(arg0, arr, arg2, validAttributes) {
  let length;
  let length2;
  let tmp;
  if (arg0) {
    let tmp3;
    if (arr) {
      if (arg2) {
        let tmp31;
        let tmp33Result;
        const _Array3 = Array;
        if (!Array.isArray(arr)) {
          const _Array4 = Array;
          if (!Array.isArray(arg2)) {
            tmp31 = diffProperties(arg0, arr, arg2, validAttributes);
          }
          tmp3 = tmp31;
        }
        const _Array5 = Array;
        if (Array.isArray(arr)) {
          const _Array6 = Array;
          if (Array.isArray(arg2)) {
            const tmp44 = arr.length < arg2.length ? arr.length : arg2.length;
            let num13 = 0;
            let tmp45 = arg0;
            let num14 = 0;
            let tmp46 = arg0;
            if (0 < tmp44) {
              do {
                tmp45 = diffNestedProperty(tmp45, arr[num13], arg2[num13], validAttributes);
                num13 = num13 + 1;
                tmp46 = tmp45;
                num14 = num13;
              } while (num13 < tmp44);
            }
            let sum = num14;
            let tmp51 = tmp46;
            let tmp52 = tmp46;
            let sum1 = num14;
            if (num14 < arr.length) {
              do {
                let arr2 = arr[sum];
                let tmp56 = tmp51;
                if (arr2) {
                  let _Array8 = Array;
                  if (Array.isArray(arr2)) {
                    let num17 = 0;
                    let tmp62 = tmp51;
                    let tmp63 = tmp51;
                    if (0 < arr2.length) {
                      do {
                        let arr3 = arr2[num17];
                        let tmp66 = tmp62;
                        if (arr3) {
                          let _Array9 = Array;
                          if (Array.isArray(arr3)) {
                            let num19 = 0;
                            let tmp72 = tmp62;
                            let tmp73 = tmp62;
                            if (0 < arr3.length) {
                              do {
                                tmp72 = clearNestedProperty(tmp72, arr3[num19], validAttributes);
                                num19 = num19 + 1;
                                tmp73 = tmp72;
                                length2 = arr3.length;
                              } while (num19 < length2);
                            }
                            tmp66 = tmp73;
                          } else {
                            tmp66 = diffProperties(tmp65, arr3, closure_2, validAttributes);
                          }
                        }
                        num17 = num17 + 1;
                        tmp62 = tmp66;
                        tmp63 = tmp66;
                      } while (num17 < arr2.length);
                    }
                    tmp56 = tmp63;
                  } else {
                    tmp56 = diffProperties(tmp55, arr2, closure_2, validAttributes);
                  }
                }
                sum = sum + 1;
                tmp51 = tmp56;
                tmp52 = tmp56;
                sum1 = sum;
              } while (sum < arr.length);
            }
            let tmp75 = tmp52;
            let tmp76 = tmp52;
            if (sum1 < arg2.length) {
              do {
                let tmp77 = arg2[sum1];
                let tmp80 = tmp75;
                if (tmp77) {
                  tmp80 = addNestedProperty(tmp75, tmp77, validAttributes);
                }
                sum1 = sum1 + 1;
                tmp75 = tmp80;
                tmp76 = tmp80;
              } while (sum1 < arg2.length);
            }
            tmp33Result = tmp76;
          }
          tmp31 = tmp33Result;
        }
        const _Array7 = Array;
        const isArray = Array.isArray(arr);
        const tmp36 = flattenStyleDefault;
        if (isArray) {
          tmp33Result = diffProperties(arg0, tmp36(arr), arg2, validAttributes);
        } else {
          tmp33Result = diffProperties(arg0, arr, tmp36(arg2), validAttributes);
        }
      }
      tmp = tmp3;
    }
    if (arg2) {
      tmp3 = addNestedProperty(arg0, arg2, validAttributes);
    } else {
      tmp3 = arg0;
      if (arr) {
        let tmp4 = arg0;
        if (arr) {
          const _Array = Array;
          if (Array.isArray(arr)) {
            let num4 = 0;
            let tmp11 = arg0;
            let tmp12 = arg0;
            if (0 < arr.length) {
              do {
                arr = arr[num4];
                let tmp15 = tmp11;
                if (arr) {
                  let _Array2 = Array;
                  if (Array.isArray(arr)) {
                    let num6 = 0;
                    let tmp21 = tmp11;
                    let tmp22 = tmp11;
                    if (0 < arr.length) {
                      do {
                        tmp21 = clearNestedProperty(tmp21, arr[num6], validAttributes);
                        num6 = num6 + 1;
                        tmp22 = tmp21;
                        length = arr.length;
                      } while (num6 < length);
                    }
                    tmp15 = tmp22;
                  } else {
                    tmp15 = diffProperties(tmp14, arr, closure_2, validAttributes);
                  }
                }
                num4 = num4 + 1;
                tmp11 = tmp15;
                tmp12 = tmp15;
              } while (num4 < arr.length);
            }
            tmp4 = tmp12;
          } else {
            tmp4 = diffProperties(arg0, arr, closure_2, validAttributes);
          }
        }
        tmp3 = tmp4;
      }
    }
  } else {
    tmp = arg0;
  }
  return tmp;
}
function clearNestedProperty(arg0, arr, validAttributes) {
  let length;
  const tmp = arr;
  if (tmp) {
    const _Array = Array;
    if (Array.isArray(arr)) {
      let num4 = 0;
      let tmp9 = arg0;
      let tmp10 = arg0;
      if (0 < arr.length) {
        do {
          tmp9 = clearNestedProperty(tmp9, arr[num4], validAttributes);
          num4 = num4 + 1;
          tmp10 = tmp9;
          length = arr.length;
        } while (num4 < length);
      }
      return tmp10;
    } else {
      return diffProperties(arg0, arr, closure_2, validAttributes);
    }
  } else {
    return arg0;
  }
}
function diffProperties(arg0, arr, arg2, validAttributes) {
  let length;
  let tmp4;
  let tmp5;
  let tmp3 = arg0;
  let tmp6 = arg0;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp5 = tmp4;
    tmp6 = tmp3;
    while (keys[tmp] !== undefined) {
      let obj5 = validAttributes[tmp9];
      tmp4 = obj5;
      if (!tmp4) {
        continue;
      } else {
        let tmp10 = arr[tmp9];
        let tmp11 = arg2[tmp9];
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
        if (obj4) {
          obj4[tmp9] = false;
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
            let tmp25 = typeof tmp13 !== "object" || null === tmp13 || deepDifferDefault(tmp14, tmp13, closure_5);
            tmp4 = obj5;
            tmp3 = tmp8;
            if (!tmp25) {
              continue;
            } else {
              let obj2 = tmp8;
              let tmp29 = tmp8;
              if (!tmp29) {
                obj2 = {};
                tmp29 = obj2;
              }
              obj2[tmp9] = tmp13;
              tmp3 = tmp29;
              tmp4 = obj5;
              continue;
            }
            continue;
          } else {
            if (typeof obj5.diff !== "function") {
              if (typeof obj5.process !== "function") {
                obj4 = null;
                closure_4 = 0;
                let tmp71 = diffNestedProperty(tmp8, tmp14, tmp13, obj5);
                let tmp16 = closure_4 > 0 && tmp71;
                tmp4 = obj5;
                tmp3 = tmp71;
                if (!tmp16) {
                  continue;
                } else {
                  let tmp18 = restoreDeletedValuesInNestedArray(tmp71, tmp13, obj5);
                  obj4 = null;
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
              let obj = tmp8;
              let tmp24 = tmp8;
              if (!tmp24) {
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
                diffResult = typeof tmp13 !== "object" || null === tmp13 || deepDifferDefault(tmp14, tmp13, closure_5);
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
    tmp32 = tmp31;
    while (keys1[tmp2] !== undefined) {
      let tmp37 = undefined === arg2[tmp36];
      if (tmp37) {
        tmp34 = validAttributes[tmp36];
      }
      tmp5 = tmp34;
      if (!tmp37) {
        continue;
      } else {
        let tmp38 = tmp35 && undefined !== tmp35[tmp36];
        let tmp39 = tmp35;
        if (!tmp38) {
          arr = arr[tmp36];
          let tmp40 = tmp35;
          if (undefined !== arr) {
            let tmp46;
            if (typeof tmp34 === "object") {
              if (typeof tmp34.diff !== "function") {
                if (typeof tmp34.process !== "function") {
                  tmp46 = tmp35;
                  if (arr) {
                    let _Array = Array;
                    if (Array.isArray(arr)) {
                      let num2 = 0;
                      let tmp47 = tmp35;
                      let tmp48 = tmp35;
                      if (0 < arr.length) {
                        do {
                          let arr2 = arr[num2];
                          let tmp51 = tmp47;
                          if (arr2) {
                            let _Array2 = Array;
                            if (Array.isArray(arr2)) {
                              let num4 = 0;
                              let tmp57 = tmp47;
                              let tmp58 = tmp47;
                              if (0 < arr2.length) {
                                do {
                                  tmp57 = clearNestedProperty(tmp57, arr2[num4], tmp34);
                                  num4 = num4 + 1;
                                  tmp58 = tmp57;
                                  length = arr2.length;
                                } while (num4 < length);
                              }
                              tmp51 = tmp58;
                            } else {
                              tmp51 = diffProperties(tmp50, arr2, closure_2, tmp34);
                            }
                          }
                          num2 = num2 + 1;
                          tmp47 = tmp51;
                          tmp48 = tmp51;
                        } while (num2 < arr.length);
                      }
                      tmp46 = tmp48;
                    } else {
                      tmp46 = diffProperties(tmp35, arr, closure_2, tmp34);
                    }
                  }
                }
                tmp40 = tmp46;
              }
            }
            let obj3 = tmp35;
            let tmp60 = tmp35;
            if (!tmp60) {
              obj3 = {};
              tmp60 = obj3;
            }
            obj3[tmp36] = null;
            let tmp61 = obj4;
            if (!tmp61) {
              obj4 = {};
              tmp61 = obj4;
            }
            tmp46 = tmp60;
            if (!tmp61[tmp36]) {
              obj4[tmp36] = true;
              closure_4 = closure_4 + 1;
              tmp46 = tmp60;
            }
          }
          tmp39 = tmp40;
        }
        tmp31 = tmp39;
        tmp5 = tmp34;
        continue;
      }
      continue;
    }
  }
  return tmp32;
}
function addNestedProperty(arg0, arg1, validAttributes) {
  let length;
  if (Array.isArray(arg1)) {
    let num4 = 0;
    let tmp12 = arg0;
    let tmp13 = arg0;
    if (0 < arg1.length) {
      do {
        tmp12 = addNestedProperty(tmp12, arg1[num4], validAttributes);
        num4 = num4 + 1;
        tmp13 = tmp12;
        length = arg1.length;
      } while (num4 < length);
    }
    return tmp13;
  } else {
    let tmp4 = arg0;
    let tmp5 = arg0;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp5 = tmp4;
      while (keys[tmp] !== undefined) {
        let tmp16 = arg1[tmp8];
        let obj = validAttributes[tmp8];
        if (null == obj) {
          continue;
        } else {
          let processResult;
          if (undefined === tmp16) {
            tmp4 = tmp7;
            if (!tmp4) {
              continue;
            } else {
              tmp4 = tmp7;
              processResult = null;
            }
            continue;
          } else if (typeof obj === "object") {
            if (typeof obj.process === "function") {
              processResult = obj.process(tmp16);
            } else if (typeof obj.diff === "function") {
              processResult = tmp16;
            }
          } else {
            processResult = typeof tmp16 === "function" || tmp16;
          }
          if (undefined === processResult) {
            tmp4 = addNestedProperty(tmp7, tmp16, obj);
            continue;
          } else {
            let tmp10 = tmp7 || {};
            tmp10[tmp8] = processResult;
            tmp4 = tmp10;
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
let obj4 = null;
let closure_4 = 0;
let closure_5 = { unsafelyIgnoreFunctions: true };
const diff_export = function diff(arr, arg1, validAttributes) {
  return diffProperties(null, arr, arg1, validAttributes);
};

export const create = function create(arg0, validAttributes) {
  return addNestedProperty(null, arg0, validAttributes);
};
export { diff_export as diff };