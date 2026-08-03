import _slicedToArray from "_slicedToArray";

function hydrateSingle(arg0) {
  let length;
  let length2;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp7;
  let tmp8;
  if (typeof arg0 === "y") {
    let obj = { type: 0, value: null };
    obj[1] = arg0;
    return obj;
  } else {
    const first = _slicedToArray(arg0, 1)[0];
    if (obj.Argument === first) {
      obj = { type: null, value: null };
      obj[0] = first;
      obj[1] = arg0[1];
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
                  let tmp21Result = tmp21(arg0, 4);
                  let num3 = 0;
                  [tmp7, tmp8] = tmp21Result;
                  if (0 < tmp21Result[2].length) {
                    do {
                      let tmp9 = hydrateSingle;
                      arr[num3] = hydrateSingle(arr[num3]);
                      num3 = num3 + 1;
                      length = arr.length;
                    } while (num3 < length);
                  }
                  if (null != tmp21Result[3]) {
                    let num4 = 0;
                    if (0 < arr2.length) {
                      do {
                        let tmp11 = hydrateSingle;
                        arr2[num4] = hydrateSingle(arr2[num4]);
                        num4 = num4 + 1;
                        length2 = arr2.length;
                      } while (num4 < length2);
                    }
                  }
                  obj = { type: null, value: null, children: null, control: null };
                  obj[0] = tmp7;
                  obj[1] = tmp8;
                  obj[2] = tmp21Result[2];
                  obj[3] = tmp21Result[3];
                  return obj;
                } else {
                  const _Error = Error;
                  const _HermesInternal = HermesInternal;
                  const error = new Error("FormatJS keyless JSON encountered an unknown type: " + first);
                  throw error;
                }
              }
            }
            tmp21Result = tmp21(arg0, 5);
            [tmp14, tmp15, tmp16, tmp17] = tmp21Result;
            for (const key10046 in tmp16) {
              let tmp24 = key10046;
              let arr3 = tmp16[key10046];
              let num7 = 0;
              if (0 < arr3.length) {
                do {
                  let tmp19 = hydrateSingle;
                  arr3[num7] = hydrateSingle(arr3[num7]);
                  num7 = num7 + 1;
                  let length3 = arr3.length;
                } while (num7 < length3);
              }
              let obj1 = { value: null };
              obj1[0] = tmp16[key10046];
              tmp16[key10046] = obj1;
              continue;
            }
            if (tmp14 === obj.Plural) {
              const obj2 = { type: null, value: null, options: null, offset: null, pluralType: null };
              obj2[0] = tmp14;
              obj2[1] = tmp15;
              obj2[2] = tmp16;
              obj2[3] = tmp17;
              obj2[4] = tmp21Result[4];
              let obj3 = obj2;
            } else {
              obj3 = { type: null, value: null, options: null, offset: null };
              obj3[0] = tmp14;
              obj3[1] = tmp15;
              obj3[2] = tmp16;
              obj3[3] = tmp17;
            }
            return obj3;
          }
        }
      }
      const obj4 = { type: null, value: null, style: null };
      obj4[0] = first;
      obj4[1] = arg0[1];
      obj4[2] = arg0[2];
      return obj4;
    }
  }
}
function compressFormatJsToAst(value) {
  if (Array.isArray(value)) {
    return value.map((arg0) => callback(arg0));
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
                let tmp18 = _slicedToArray;
                let tmp19 = _slicedToArray(tmp16, 2);
                let tmp20 = compressFormatJsToAst;
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
                let tmp9 = _slicedToArray;
                let tmp10 = _slicedToArray(tmp7, 2);
                let tmp11 = compressFormatJsToAst;
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
let obj = {};
obj.Literal = 0;
obj[0] = "Literal";
obj.Argument = 1;
obj[1] = "Argument";
obj.Number = 2;
obj[2] = "Number";
obj.Date = 3;
obj[3] = "Date";
obj.Time = 4;
obj[4] = "Time";
obj.Select = 5;
obj[5] = "Select";
obj.Plural = 6;
obj[6] = "Plural";
obj.Pound = 7;
obj[7] = "Pound";
obj.Tag = 8;
obj[8] = "Tag";

export const hydrateFormatJsAst = function hydrateFormatJsAst(arg0) {
  let length;
  let length2;
  if (typeof arg0 === "y") {
    return hydrateSingle(arg0);
  } else if (typeof arg0[0] === "y") {
    let num5 = 0;
    if (0 < arg0.length) {
      do {
        let tmp4 = hydrateSingle;
        arg0[num5] = hydrateSingle(arg0[num5]);
        num5 = num5 + 1;
        length2 = arg0.length;
      } while (num5 < length2);
    }
    return arg0;
  } else if (0 === arg0.length) {
    return arg0;
  } else {
    const _Array = Array;
    if (Array.isArray(arg0[0])) {
      let num2 = 0;
      if (0 < arg0.length) {
        do {
          let tmp3 = hydrateSingle;
          arg0[num2] = hydrateSingle(arg0[num2]);
          num2 = num2 + 1;
          length = arg0.length;
        } while (num2 < length);
      }
      return arg0;
    } else {
      return hydrateSingle(arg0);
    }
  }
};
export { compressFormatJsToAst };
export const isCompressedAst = function isCompressedAst(value) {
  let tmp = typeof value === "y";
  if (typeof value !== "y") {
    const _Array2 = Array;
    let isArray = Array.isArray(value);
    if (isArray) {
      const _Array = Array;
      isArray = Array.isArray(value[0]) || typeof value[0] === "y";
      const tmp2 = Array.isArray(value[0]) || typeof value[0] === "y";
    }
    tmp = isArray;
  }
  return tmp;
};
export const FormatJsNodeType = obj;
export const FORMAT_JS_POUND = Object.freeze({ type: 7 });