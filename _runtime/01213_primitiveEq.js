// === Module 1213: primitiveEq ===

// Module 1213 (primitiveEq)
import ScalarType from "ScalarType" /* 1201 */;

require = arg1;
const dependencyMap = arg6;
function primitiveEq(arg0, arg1, arg2) {
  if (arg1 === arg2) {
    return true;
  } else if (arg0 !== ScalarType.ScalarType.BYTES) {
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
function repeatedPrimitiveEq(T, arg1, arg2) {
  if (arg1.length !== arg2.length) {
    return false;
  } else {
    let num2 = 0;
    if (0 < arg1.length) {
      while (true) {
        let arr = arg1[num2];
        let arr2 = arg2[num2];
        let flag = true;
        if (arr !== arr2) {
          flag = false;
          if (T === ScalarType.ScalarType.BYTES) {
            flag = false;
            if (arr.length === arr2.length) {
              let num = 0;
              flag = true;
              if (0 < arr.length) {
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

export const reflectionEquals = function reflectionEquals(fields, arg1, arg2) {
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
            let tmp7 = arg1[obj.oneof][localName];
          } else {
            tmp7 = arg1[localName];
          }
          let tmp10 = tmp7;
          if (obj.oneof) {
            let tmp13 = arg2[obj.oneof][localName];
          } else {
            tmp13 = arg2[localName];
          }
          let tmp16 = tmp13;
          let kind = obj.kind;
          if ("enum" !== kind) {
            if ("scalar" !== kind) {
              if ("map" === kind) {
                if ("message" == obj.V.kind) {
                  let V = obj.V;
                  let TResult = V.T();
                  let tmp43 = values(tmp10);
                  let tmp28Result = repeatedMsgEq(TResult, tmp43, values(tmp16));
                } else {
                  if ("enum" == obj.V.kind) {
                    let T = ScalarType.ScalarType.INT32;
                  } else {
                    T = obj.V.T;
                  }
                  let tmp35 = values(tmp10);
                  tmp28Result = repeatedPrimitiveEq(T, tmp35, values(tmp16));
                }
                if (!tmp28Result) {
                  iter.return();
                  let flag3 = false;
                  return false;
                }
              } else if ("message" === kind) {
                let TResult1 = obj.T();
                if (obj.repeat) {
                  let equalsResult = repeatedMsgEq(TResult1, tmp10, tmp16);
                } else {
                  equalsResult = TResult1.equals(tmp10, tmp16);
                }
                if (!equalsResult) {
                  iter.return();
                  let flag2 = false;
                  return false;
                }
              }
            }
            continue;
          }
          if ("enum" == obj.kind) {
            let T2 = ScalarType.ScalarType.INT32;
          } else {
            T2 = obj.T;
          }
          let tmp50 = T2;
          if (obj.repeat) {
            let tmp56 = repeatedPrimitiveEq(tmp50, tmp10, tmp16);
          } else {
            tmp56 = primitiveEq(tmp50, tmp10, tmp16);
          }
          if (!tmp56) {
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