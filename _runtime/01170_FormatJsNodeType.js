// _runtime/01170_FormatJsNodeType.js
import _slicedToArray from "metro/00032__slicedToArray.js";

function hydrateSingle(arr) {
  let length;
  let length2;
  let obj;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp5;
  let tmp6;
  if (typeof arr === "string") {
    obj = { type: 0, value: arr };
    return obj;
  } else {
    const first = _slicedToArray(arr, 1)[0];
    if (obj.Argument === first) {
      return { type: first, value: arr[1] };
    } else {
      if (obj.Number !== first) {
        if (obj.Date !== first) {
          if (obj.Time !== first) {
            let obj5;
            if (obj.Select !== first) {
              if (obj.Plural !== first) {
                if (obj.Pound === first) {
                  return exports.FORMAT_JS_POUND;
                } else if (obj.Tag === first) {
                  const tmp20Result = _slicedToArray(arr, 4);
                  let num3 = 0;
                  [tmp5, tmp6] = tmp20Result;
                  if (0 < tmp20Result[2].length) {
                    do {
                      arr[num3] = hydrateSingle(arr[num3]);
                      num3 = num3 + 1;
                      length = arr.length;
                    } while (num3 < length);
                  }
                  if (null != tmp20Result[3]) {
                    let num4 = 0;
                    if (0 < tmp20Result[3].length) {
                      do {
                        arr2[num4] = hydrateSingle(arr2[num4]);
                        num4 = num4 + 1;
                        length2 = arr2.length;
                      } while (num4 < length2);
                    }
                  }
                  const element = { type: tmp5, value: tmp6, children: tmp20Result[2], control: tmp20Result[3] };
                  return element;
                } else {
                  const _Error = Error;
                  const _HermesInternal = HermesInternal;
                  const self = this;
                  const self2 = this;
                  const error = new Error("FormatJS keyless JSON encountered an unknown type: " + first);
                  throw error;
                }
              }
            }
            const tmp20Result2 = _slicedToArray(arr, 5);
            [tmp12, tmp13, tmp14, tmp15] = tmp20Result2;
            const tmp16 = tmp20Result2[4];
            for (const key10046 in tmp14) {
              let arr3 = tmp14[key10046];
              let num7 = 0;
              if (0 < arr3.length) {
                let length3;
                do {
                  arr3[num7] = hydrateSingle(arr3[num7]);
                  num7 = num7 + 1;
                  length3 = arr3.length;
                } while (num7 < length3);
              }
              let obj3 = { value: tmp14[key10046] };
              tmp14[key10046] = obj3;
              continue;
            }
            if (tmp12 === obj.Plural) {
              obj5 = { type: tmp12, value: tmp13, options: tmp14, offset: tmp15, pluralType: tmp16 };
              const obj4 = { type: tmp12, value: tmp13, options: tmp14, offset: tmp15, pluralType: tmp16 };
            } else {
              obj5 = { type: tmp12, value: tmp13, options: tmp14, offset: tmp15 };
            }
            return obj5;
          }
        }
      }
      return { type: first, value: arr[1], style: arr[2] };
    }
  }
}
function compressFormatJsToAst(value) {
  let obj;
  if (Array.isArray(value)) {
    return value.map((item) => compressFormatJsToAst(item));
  } else {
    const type = value.type;
    if (obj.Literal === type) {
      return value.value;
    } else if (obj.Argument === type) {
      const items = [,];
      ({ type: arr6[0], value: arr6[1] } = value);
      return items;
    } else {
      if (obj.Number !== type) {
        if (obj.Date !== type) {
          if (obj.Time !== type) {
            if (obj.Select === type) {
              const obj2 = {};
              const _Object2 = Object;
              const entries = Object.entries(value.options);
              const tmp14 = entries[Symbol.iterator]();
              while (tmp14 !== undefined) {
                let tmp19 = _slicedToArray(tmp16, 2);
                obj2[tmp19[0]] = compressFormatJsToAst(tmp19[1].value);
                continue;
              }
              const items1 = [, ,];
              ({ type: arr4[0], value: arr4[1] } = value);
              items1[2] = obj2;
              return items1;
            } else if (obj.Plural === type) {
              obj = {};
              const _Object = Object;
              const entries1 = Object.entries(value.options);
              const tmp5 = entries1[Symbol.iterator]();
              while (tmp5 !== undefined) {
                let tmp10 = _slicedToArray(tmp7, 2);
                obj[tmp10[0]] = compressFormatJsToAst(tmp10[1].value);
                continue;
              }
              const items2 = [, , , ,];
              ({ type: arr3[0], value: arr3[1] } = value);
              items2[2] = obj;
              ({ offset: arr3[3], pluralType: arr3[4] } = value);
              return items2;
            } else if (obj.Pound === type) {
              const items3 = [value.type];
              return items3;
            } else if (obj.Tag === type) {
              const items4 = [, , ,];
              ({ type: arr[0], value: arr[1] } = value);
              items4[2] = compressFormatJsToAst(value.children);
              items4[3] = compressFormatJsToAst(value.control);
              return items4;
            }
          }
        }
      }
      const items5 = [, ,];
      ({ type: arr5[0], value: arr5[1], style: arr5[2] } = value);
      return items5;
    }
  }
}
const FormatJsNodeType = {
  Literal: 0,
  Argument: 1,
  Number: 2,
  Date: 3,
  Time: 4,
  Select: 5,
  Plural: 6,
  Pound: 7,
  Tag: 8,
};
FormatJsNodeType[0] = "Literal";
FormatJsNodeType[1] = "Argument";
FormatJsNodeType[2] = "Number";
FormatJsNodeType[3] = "Date";
FormatJsNodeType[4] = "Time";
FormatJsNodeType[5] = "Select";
FormatJsNodeType[6] = "Plural";
FormatJsNodeType[7] = "Pound";
FormatJsNodeType[8] = "Tag";

export const hydrateFormatJsAst = function hydrateFormatJsAst(arr) {
  let length;
  let length2;
  if (typeof arr === "string") {
    return hydrateSingle(arr);
  } else if (typeof arr[0] === "string") {
    let num5 = 0;
    if (0 < arr.length) {
      do {
        arr[num5] = hydrateSingle(arr[num5]);
        num5 = num5 + 1;
        length2 = arr.length;
      } while (num5 < length2);
    }
    return arr;
  } else if (0 === arr.length) {
    return arr;
  } else {
    const _Array = Array;
    if (Array.isArray(arr[0])) {
      let num2 = 0;
      if (0 < arr.length) {
        do {
          arr[num2] = hydrateSingle(arr[num2]);
          num2 = num2 + 1;
          length = arr.length;
        } while (num2 < length);
      }
      return arr;
    } else {
      return hydrateSingle(arr);
    }
  }
};
export { compressFormatJsToAst };
export const isCompressedAst = function isCompressedAst(value) {
  let tmp = typeof value === "string";
  if (!tmp) {
    const _Array2 = Array;
    let isArray = Array.isArray(value);
    if (isArray) {
      const _Array = Array;
      isArray = Array.isArray(value[0]) || typeof value[0] === "string";
      Array.isArray(value[0]) || typeof value[0] === "string";
    }
    tmp = isArray;
  }
  return tmp;
};
export { FormatJsNodeType };
export const FORMAT_JS_POUND = Object.freeze({ type: 7 });
