// === Module 1213: primitiveEq ===

// Module 1213 (primitiveEq)
import RepeatType from "RepeatType" /* 1201 */;

require = arg1;
const dependencyMap = arg6;
function primitiveEq(arg0, arg1, arg2) {
  if (arg1 === arg2) {
    return true;
  } else if (arg0 !== RepeatType.ScalarType.BYTES) {
    return false;
  } else if (arg1.length !== arg2.length) {
    return false;
  } else {
    let num = 0;
    if (0 < arg1.length) {
      while (arg1[num] == arg2[num]) {
        num = num + 1;
      }
      return false;
    }
    return true;
  }
}
function repeatedPrimitiveEq(arg0, arg1, arg2) {
  if (arg1.length !== arg2.length) {
    return false;
  } else {
    let num2 = 0;
    if (0 < arg1.length) {
      while (true) {
        let arr = arg1[num2];
        let arr2 = arg2[num2];
        let tmp = num2;
        let flag = true;
        if (arr !== arr2) {
          let tmp2 = require;
          let tmp3 = dependencyMap;
          flag = false;
          if (arg0 === RepeatType.ScalarType.BYTES) {
            flag = false;
            if (arr.length === arr2.length) {
              let num = 0;
              flag = true;
              if (0 < arr.length) {
                let tmp4 = num;
                flag = false;
                while (arr[num] == arr2[num]) {
                  let sum = num + 1;
                  num = sum;
                  flag = true;
                  if (sum >= arr.length) {
                    break;
                  }
                }
              }
            }
          }
        }
        if (!flag) {
          break;
        } else {
          num2 = num2 + 1;
        }
      }
      return false;
    }
    return true;
  }
}
function repeatedMsgEq(TResult, arg1, arg2) {
  if (arg1.length !== arg2.length) {
    return false;
  } else {
    let num = 0;
    if (0 < arg1.length) {
      while (TResult.equals(arg1[num], arg2[num])) {
        num = num + 1;
      }
      return false;
    }
    return true;
  }
}
arg5.reflectionEquals = function reflectionEquals(fields, arg1, arg2) {
  if (arg1 === arg2) {
    return true;
  } else {
    if (arg1) {
      if (arg2) {
        fields = fields.fields;
        const iter = fields[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let obj = nextResult;
          let localName = nextResult.localName;
          if (nextResult.oneof) {
            let tmp8 = nextResult;
            let tmp9 = localName;
            let tmp7 = arg1[obj.oneof][localName];
          } else {
            let tmp6 = localName;
            tmp7 = arg1[localName];
          }
          let tmp10 = tmp7;
          let tmp11 = nextResult;
          if (obj.oneof) {
            let tmp14 = nextResult;
            let tmp15 = localName;
            let tmp13 = arg2[obj.oneof][localName];
          } else {
            let tmp12 = localName;
            tmp13 = arg2[localName];
          }
          let tmp16 = tmp13;
          let tmp17 = nextResult;
          let kind = obj.kind;
          if ("enum" !== kind) {
            if ("scalar" !== kind) {
              if ("map" === kind) {
                let tmp27 = nextResult;
                if ("message" == obj.V.kind) {
                  let tmp38 = repeatedMsgEq;
                  let tmp39 = nextResult;
                  let V = obj.V;
                  let tmp41 = values;
                  let tmp42 = tmp7;
                  let TResult = V.T();
                  let tmp44 = tmp13;
                  let tmp43 = values(tmp10);
                  let tmp28Result = repeatedMsgEq(TResult, tmp43, values(tmp16));
                } else {
                  let tmp29 = nextResult;
                  let tmp28 = repeatedPrimitiveEq;
                  if ("enum" == obj.V.kind) {
                    let tmp31 = require;
                    let tmp32 = dependencyMap;
                    let T = RepeatType.ScalarType.INT32;
                  } else {
                    let tmp30 = nextResult;
                    T = obj.V.T;
                  }
                  let tmp33 = values;
                  let tmp34 = tmp7;
                  let tmp36 = tmp13;
                  let tmp35 = values(tmp10);
                  tmp28Result = tmp28(T, tmp35, values(tmp16));
                }
                if (!tmp28Result) {
                  let tmp45 = iter;
                  iter.return();
                  let flag3 = false;
                  return false;
                }
              } else if ("message" === kind) {
                let tmp62 = nextResult;
                let TResult1 = obj.T();
                if (obj.repeat) {
                  let tmp22 = repeatedMsgEq;
                  let tmp23 = TResult1;
                  let tmp24 = tmp7;
                  let tmp25 = tmp13;
                  let equalsResult = repeatedMsgEq(TResult1, tmp10, tmp16);
                } else {
                  let tmp18 = TResult1;
                  let tmp19 = tmp7;
                  let tmp20 = tmp13;
                  equalsResult = TResult1.equals(tmp10, tmp16);
                }
                if (!equalsResult) {
                  let tmp26 = iter;
                  iter.return();
                  let flag2 = false;
                  return false;
                }
              }
            }
            continue;
          }
          let tmp46 = nextResult;
          if ("enum" == obj.kind) {
            let tmp48 = require;
            let tmp49 = dependencyMap;
            let T2 = RepeatType.ScalarType.INT32;
          } else {
            let tmp47 = nextResult;
            T2 = obj.T;
          }
          let tmp50 = T2;
          let tmp51 = nextResult;
          if (obj.repeat) {
            let tmp57 = repeatedPrimitiveEq;
            let tmp58 = T2;
            let tmp59 = tmp7;
            let tmp60 = tmp13;
            let tmp56 = repeatedPrimitiveEq(tmp50, tmp10, tmp16);
          } else {
            let tmp52 = primitiveEq;
            let tmp53 = T2;
            let tmp54 = tmp7;
            let tmp55 = tmp13;
            tmp56 = primitiveEq(tmp50, tmp10, tmp16);
          }
          if (!tmp56) {
            let tmp61 = iter;
            iter.return();
            let flag4 = false;
            return false;
          }
        }
        return true;
      }
    }
    return false;
  }
};