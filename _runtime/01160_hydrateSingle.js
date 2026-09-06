// === Module 1160: hydrateSingle ===

// Module 1160 (hydrateSingle)
import _slicedToArray from "module_32" /* 32 */;

function hydrateSingle(arr) {
  let length;
  let length2;
  if (typeof arr === "string") {
    let obj = { type: 0, value: arr };
    return obj;
  } else {
    const first = _slicedToArray(arr, 1)[0];
    if (obj.Argument === first) {
      obj = { type: first, value: arr[1] };
      return obj;
    } else {
      if (tmp23.Number !== first) {
        if (tmp23.Date !== first) {
          if (tmp23.Time !== first) {
            if (tmp23.Select !== first) {
              if (tmp23.Plural !== first) {
                if (tmp23.Pound === first) {
                  return exports.FORMAT_JS_POUND;
                } else if (tmp23.Tag === first) {
                  let tmp21Result = _slicedToArray(arr, 4);
                  let num3 = 0;
                  [tmp7, tmp8] = tmp21Result;
                  if (0 < tmp21Result[2].length) {
                    do {
                      arr[num3] = hydrateSingle(arr[num3]);
                      num3 = num3 + 1;
                      length = arr.length;
                    } while (num3 < length);
                  }
                  if (null != tmp21Result[3]) {
                    let num4 = 0;
                    if (0 < arr2.length) {
                      do {
                        arr2[num4] = hydrateSingle(arr2[num4]);
                        num4 = num4 + 1;
                        length2 = arr2.length;
                      } while (num4 < length2);
                    }
                  }
                  const element = { type: tmp7, value: tmp8, children: tmp21Result[2], control: tmp21Result[3] };
                  return element;
                } else {
                  const _Error = Error;
                  const _HermesInternal = HermesInternal;
                  const error = new Error("FormatJS keyless JSON encountered an unknown type: " + first);
                  throw error;
                }
              }
            }
            tmp21Result = _slicedToArray(arr, 5);
            [tmp14, tmp15, tmp16, tmp17] = tmp21Result;
            for (const key10046 in tmp16) {
              let arr3 = tmp16[key10046];
              let num7 = 0;
              if (0 < arr3.length) {
                do {
                  arr3[num7] = hydrateSingle(arr3[num7]);
                  num7 = num7 + 1;
                  let length3 = arr3.length;
                } while (num7 < length3);
              }
              let obj1 = { value: tmp16[key10046] };
              tmp16[key10046] = obj1;
              continue;
            }
            if (tmp14 === obj.Plural) {
              const obj2 = { type: tmp14, value: tmp15, options: tmp16, offset: tmp17, pluralType: tmp21Result[4] };
              let obj3 = obj2;
            } else {
              obj3 = { type: tmp14, value: tmp15, options: tmp16, offset: tmp17 };
            }
            return obj3;
          }
        }
      }
      const obj4 = { type: first, value: arr[1], style: arr[2] };
      return obj4;
    }
  }
}
function compressFormatJsToAst(value) {
  if (Array.isArray(value)) {
    return value.map((item) => compressFormatJsToAst(item));
  } else {
    const type = value.type;
    if (obj.Literal === type) {
      return value.value;
    } else if (tmp.Argument === type) {
      const items = [, ];
      ({ type: arr6[0], value: arr6[1] } = value);
      return items;
    } else {
      if (tmp.Number !== type) {
        if (tmp.Date !== type) {
          if (tmp.Time !== type) {
            if (tmp.Select === type) {
              obj = {};
              const _Object2 = Object;
              const entries = Object.entries(value.options);
              const tmp14 = entries[Symbol.iterator]();
              while (tmp14 !== undefined) {
                let tmp19 = _slicedToArray(tmp16, 2);
                obj[tmp19[0]] = compressFormatJsToAst(tmp19[1].value);
                continue;
              }
              const items1 = [, , ];
              ({ type: arr4[0], value: arr4[1] } = value);
              items1[2] = obj;
              return items1;
            } else if (tmp.Plural === type) {
              obj = {};
              const _Object = Object;
              const entries1 = Object.entries(value.options);
              const tmp5 = entries1[Symbol.iterator]();
              while (tmp5 !== undefined) {
                let tmp10 = _slicedToArray(tmp7, 2);
                obj[tmp10[0]] = compressFormatJsToAst(tmp10[1].value);
                continue;
              }
              const items2 = [, , , , ];
              ({ type: arr3[0], value: arr3[1] } = value);
              items2[2] = obj;
              ({ offset: arr3[3], pluralType: arr3[4] } = value);
              return items2;
            } else if (tmp.Pound === type) {
              const items3 = [value.type];
              return items3;
            } else if (tmp.Tag === type) {
              const items4 = [, , , ];
              ({ type: arr[0], value: arr[1] } = value);
              items4[2] = compressFormatJsToAst(value.children);
              items4[3] = compressFormatJsToAst(value.control);
              return items4;
            }
          }
        }
      }
      const items5 = [, , ];
      ({ type: arr5[0], value: arr5[1], style: arr5[2] } = value);
      return items5;
    }
  }
}
const FormatJsNodeType = {};
FormatJsNodeType.Literal = 0;
FormatJsNodeType[0] = "Literal";
FormatJsNodeType.Argument = 1;
FormatJsNodeType[1] = "Argument";
FormatJsNodeType.Number = 2;
FormatJsNodeType[2] = "Number";
FormatJsNodeType.Date = 3;
FormatJsNodeType[3] = "Date";
FormatJsNodeType.Time = 4;
FormatJsNodeType[4] = "Time";
FormatJsNodeType.Select = 5;
FormatJsNodeType[5] = "Select";
FormatJsNodeType.Plural = 6;
FormatJsNodeType[6] = "Plural";
FormatJsNodeType.Pound = 7;
FormatJsNodeType[7] = "Pound";
FormatJsNodeType.Tag = 8;
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
export const isCompressedAst = function isCompressedAst(dependencyMap) {
  let tmp = typeof dependencyMap === "string";
  if (typeof dependencyMap !== "string") {
    const _Array2 = Array;
    let isArray = Array.isArray(dependencyMap);
    if (isArray) {
      const _Array = Array;
      isArray = Array.isArray(dependencyMap[0]) || typeof dependencyMap[0] === "string";
      const tmp2 = Array.isArray(dependencyMap[0]) || typeof dependencyMap[0] === "string";
    }
    tmp = isArray;
  }
  return tmp;
};
export { FormatJsNodeType };
export const FORMAT_JS_POUND = Object.freeze({ type: 7 });