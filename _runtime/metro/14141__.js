// === Module 14141: ? ===

// Module 14141
import Buffer from "Buffer" /* 1263 */;
import _mod14140 from "module_14140" /* 14140 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function replaceByteInByteSequence(arr, arg1, arg2) {
  let index = arr.indexOf(43);
  if (index >= 0) {
    do {
      arr[index] = 32;
      index = arr.indexOf(43, index + 1);
    } while (index >= 0);
  }
  return arr;
}
function percentEncode(arr) {
  const str = arr.toString(16);
  const formatted = str.toUpperCase();
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
      if (37 === _Buffer[num]) {
        let obj = _mod14140;
        let sum = num + 1;
        if (obj.isASCIIHex(_Buffer[sum])) {
          let tmp3Result = _mod14140;
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
    let str2 = "+";
    if (32 !== nextResult) {
      if (42 !== tmp2) {
        if (45 !== tmp2) {
          if (46 !== tmp2) {
            if (tmp2 < 48) {
              if (tmp2 < 65) {
                let fromCodePointResult;
                if (95 !== tmp2) {
                  if (tmp2 < 97) {
                    fromCodePointResult = percentEncode(tmp2);
                  }
                }
                str2 = fromCodePointResult;
              }
            }
          }
        }
      }
      let _String = String;
      fromCodePointResult = String.fromCodePoint(tmp2);
    }
    str = str + str2;
    continue;
  }
  return str;
}
let obj = {
  percentEncode,
  percentDecode,
  parseUrlencoded(arg0) {
    function parseUrlencoded(_Buffer) {
      function strictlySplitByteSequence(arr, arg1) {
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
      }
      let items = [];
      const tmp = strictlySplitByteSequence(_Buffer, 38);
      const iter = tmp[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let arr3 = nextResult;
        if (0 !== nextResult.length) {
          let substr;
          let substr1;
          let index = arr3.indexOf(61);
          let tmp23 = index;
          if (index >= 0) {
            substr = arr3.slice(0, tmp23);
            substr1 = arr3.slice(tmp23 + 1);
          } else {
            substr = nextResult;
            _Buffer = Buffer.Buffer;
            substr1 = _Buffer.alloc(0);
          }
          let _Buffer2 = Buffer.Buffer;
          let fromResult = _Buffer2.from(substr);
          let tmp13 = replaceByteInByteSequence(fromResult, 43, 32);
          let _Buffer3 = Buffer.Buffer;
          let fromResult1 = _Buffer3.from(substr1);
          let tmp17 = replaceByteInByteSequence(fromResult1, 43, 32);
          let push = items.push;
          let str = percentDecode(fromResult);
          let items1 = [str.toString(), ];
          let str2 = percentDecode(fromResult1);
          items1[1] = str2.toString();
          let arr = push(items1);
        }
        continue;
      }
      return items;
    }
    let _Buffer = Buffer.Buffer;
    return parseUrlencoded(_Buffer.from(arg0));
  },
  serializeUrlencoded(_list) {
    let arr;
    let tmp7;
    let str = "utf-8";
    if (undefined !== arg1) {
      str = tmp;
    }
    let str2 = "";
    const entries = _list.entries();
    const tmp3 = entries[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp6 = _slicedToArray(tmp4, 2);
      [tmp7, arr] = tmp6;
      let _Buffer = Buffer.Buffer;
      let tmp12 = serializeUrlencodedByte(_Buffer.from(arr[0]));
      let name = arr[1];
      let tmp13 = arr.length > 2 && undefined !== arr[2];
      if (tmp13) {
        if ("hidden" === arr[2]) {
          if ("_charset_" === tmp12) {
            name = str;
          }
        }
        if ("file" === arr[2]) {
          name = name.name;
        }
      }
      if (0 !== tmp7) {
        str2 = `${str2}&`;
      }
      let _Buffer2 = Buffer.Buffer;
      let tmp9Result = serializeUrlencodedByte(_Buffer2.from(name));
      let _HermesInternal = HermesInternal;
      str2 = str2 + "" + tmp12 + "=" + tmp9Result;
      continue;
    }
    return str2;
  }
};

export default obj;