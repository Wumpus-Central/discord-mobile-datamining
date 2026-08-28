// === Module 13965: replaceByteInByteSequence ===

// Module 13965 (replaceByteInByteSequence)
import Buffer from "Buffer" /* 511 */;
import _mod13964 from "module_13964" /* 13964 */;
import closure_2 from "_slicedToArray" /* 32 */;

function replaceByteInByteSequence(arr) {
  let index = arr.indexOf(43);
  if (index >= 0) {
    do {
      arr[index] = 32;
      index = arr.indexOf(43, index + 1);
    } while (index >= 0);
  }
  return arr;
}
function percentEncode(arg0) {
  const formatted = arg0.toString(16).toUpperCase();
  let text = formatted;
  if (1 === formatted.length) {
    text = `0${arr}`;
  }
  return "%" + text;
}
function percentDecode(_Buffer) {
  _Buffer = Buffer.Buffer;
  const allocResult = _Buffer.alloc(_Buffer.byteLength);
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < _Buffer.length) {
    while (true) {
      let tmp = num;
      let tmp2 = num2;
      if (37 === _Buffer[num]) {
        let tmp3 = require;
        let tmp4 = dependencyMap;
        let obj = _mod13964;
        let sum = num + 1;
        if (obj.isASCIIHex(_Buffer[sum])) {
          let tmp3Result = tmp3(13964);
          let sum1 = num + 2;
          if (tmp3Result.isASCIIHex(_Buffer[sum1])) {
            let sum2 = num2 + 1;
            let _parseInt = parseInt;
            let str = _Buffer.slice(sum, num + 3);
            allocResult[num2] = parseInt(str.toString(), 16);
            let tmp8 = sum1;
            num = tmp8 + 1;
            num2 = sum2;
            num3 = sum2;
            if (num >= _Buffer.length) {
              break;
            }
          }
        }
      }
      sum2 = num2 + 1;
      allocResult[num2] = _Buffer[num];
      tmp8 = num;
    }
  }
  return allocResult.slice(0, num3);
}
function serializeUrlencodedByte(_Buffer) {
  let str = "";
  const iter = _Buffer[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = str;
    let str2 = "+";
    if (32 === nextResult) {
      str = `+`;
      continue;
    } else {
      let tmp4 = nextResult;
      if (42 !== tmp2) {
        let tmp5 = nextResult;
        if (45 !== tmp2) {
          let tmp6 = nextResult;
          if (46 !== tmp2) {
            let tmp7 = nextResult;
            if (tmp2 < 48) {
              let tmp9 = nextResult;
              if (tmp2 < 65) {
                let tmp11 = nextResult;
                if (95 !== tmp2) {
                  let tmp12 = nextResult;
                  if (tmp2 < 97) {
                    let tmp14 = percentEncode;
                    let tmp15 = nextResult;
                    let fromCodePointResult = percentEncode(tmp2);
                  } else {
                    let tmp13 = nextResult;
                  }
                }
                let tmp18 = fromCodePointResult;
              } else {
                let tmp10 = nextResult;
              }
            } else {
              let tmp8 = nextResult;
            }
          }
        }
      }
      let _String = String;
      let tmp17 = nextResult;
      fromCodePointResult = String.fromCodePoint(tmp2);
    }
  }
  return str;
}

export default {
  percentEncode,
  percentDecode,
  parseUrlencoded(arg0) {
    let _Buffer = Buffer.Buffer;
    return (function parseUrlencoded(_Buffer) {
      let items = [];
      const iter = (function strictlySplitByteSequence(arr, arg1) {
        const items = [];
        const index = arr.indexOf(38);
        let index1 = index;
        let num = 0;
        let num2 = 0;
        if (index >= 0) {
          do {
            arr = items.push(arr.slice(num, index1));
            let sum = index1 + 1;
            index1 = arr.indexOf(38, sum);
            num = sum;
            num2 = sum;
          } while (index1 >= 0);
        }
        if (num2 !== arr.length) {
          items.push(arr.slice(num2));
        }
        return items;
      })(_Buffer, 38)[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let arr3 = nextResult;
        if (0 === nextResult.length) {
          continue;
        } else {
          let tmp21 = nextResult;
          let index = arr3.indexOf(61);
          let tmp23 = index;
          if (index >= 0) {
            let tmp6 = nextResult;
            let tmp7 = index;
            let substr = arr3.slice(0, tmp23);
            let substr1 = arr3.slice(tmp23 + 1);
          } else {
            substr = nextResult;
            let tmp3 = callback;
            let tmp4 = dependencyMap;
            _Buffer = callback(511).Buffer;
            substr1 = _Buffer.alloc(0);
          }
          let tmp8 = callback2;
          let tmp9 = callback;
          let tmp10 = dependencyMap;
          let _Buffer2 = callback(511).Buffer;
          let tmp11 = substr;
          let fromResult = _Buffer2.from(substr);
          let tmp13 = callback2(fromResult, 43, 32);
          let tmp14 = fromResult;
          let _Buffer3 = callback(511).Buffer;
          let tmp15 = substr1;
          let fromResult1 = _Buffer3.from(substr1);
          let tmp17 = callback2(fromResult1, 43, 32);
          let tmp18 = fromResult1;
          let tmp19 = callback3;
          let str = callback3(fromResult);
          let items1 = [str.toString(), ];
          let str2 = callback3(fromResult1);
          items1[1] = str2.toString();
          let arr = items.push(items1);
        }
      }
      return items;
    })(_Buffer.from(arg0));
  },
  serializeUrlencoded(_list) {
    let str = "utf-8";
    if (undefined !== arg1) {
      str = tmp;
    }
    let str2 = "";
    const entries = _list.entries();
    while (tmp3 !== undefined) {
      let tmp5 = callback;
      let tmp6 = callback(tmp4, 2);
      [tmp7, arr] = tmp6;
      let tmp8 = arr;
      let tmp9 = serializeUrlencodedByte;
      let tmp10 = require;
      let tmp11 = dependencyMap;
      let _Buffer = Buffer.Buffer;
      let tmp12 = serializeUrlencodedByte(_Buffer.from(arr[0]));
      let name = arr[1];
      let tmp13 = arr.length > 2;
      if (tmp13) {
        let tmp14 = arr;
        tmp13 = undefined !== tmp8[2];
      }
      if (tmp13) {
        let tmp15 = arr;
        if ("hidden" === tmp8[2]) {
          let tmp16 = tmp12;
          if ("_charset_" === tmp12) {
            name = str;
          }
        }
        let tmp17 = arr;
        if ("file" === tmp8[2]) {
          let tmp18 = name;
          name = name.name;
        }
      }
      let tmp19 = tmp7;
      if (0 !== tmp7) {
        let tmp20 = str2;
        str2 = `${str2}&`;
      }
      let tmp21 = str2;
      let tmp22 = tmp12;
      let _Buffer2 = tmp10(511).Buffer;
      let tmp23 = name;
      let tmp9Result = tmp9(_Buffer2.from(name));
      let tmp25 = tmp9Result;
      let _HermesInternal = HermesInternal;
      str2 = str2 + "" + tmp12 + "=" + tmp9Result;
      continue;
    }
    return str2;
  }
};