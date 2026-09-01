// _runtime/05204_constructTag.js
import getDataView from "05157_getDataView.js";
import _mod5164 from "metro/05164__.js";

require = arg1;
const module = arg2;
const dependencyMap = arg6;
function constructTag(decompressResult, type, items2, items1) {
  let stringFromDataView = decompressResult;
  if (decompressResult instanceof DataView) {
    let obj = getDataView;
    stringFromDataView = obj.getStringFromDataView(decompressResult, 0, decompressResult.byteLength);
  }
  const stringValueFromArray = getDataView.getStringValueFromArray(items1);
  let combined = stringValueFromArray;
  if (type !== _mod5164.TYPE_TEXT) {
    combined = stringValueFromArray;
    if (0 !== items2.length) {
      const _HermesInternal = HermesInternal;
      combined = "" + stringValueFromArray + " (" + tmp4(5157).getStringValueFromArray(items2) + ")";
      const tmp4Result = tmp4(5157);
    }
  }
  obj = { name: combined, value: stringFromDataView, description: null };
  if (type === _mod5164.TYPE_ITXT) {
    stringFromDataView = module(5190).decode("UTF-8", decompressResult);
    const obj5 = module(5190);
  }
  obj[2] = stringFromDataView;
  return obj;
}
function isExifGroupTag(str, str2) {
  let tmp = "raw profile type exif" === str.toLowerCase();
  if (tmp) {
    tmp = "exif" === str2.substring(1, 5);
  }
  return tmp;
}
function isIptcGroupTag(str, str2) {
  let tmp = "raw profile type iptc" === str.toLowerCase();
  if (tmp) {
    tmp = "iptc" === str2.substring(1, 5);
  }
  return tmp;
}
function decodeRawData(arg0) {
  let length;
  let sum;
  const replaced = arg0.match(/\n(exif|iptc)\n\s*\d+\n([\s\S]*)$/)[2].replace(/\n/g, "");
  const arrayBuffer = new ArrayBuffer(replaced.length / 2);
  const dataView = new DataView(arrayBuffer);
  let num = 0;
  if (0 < replaced.length) {
    do {
      let _parseInt = parseInt;
      sum = num + 2;
      let setUint8Result = dataView.setUint8(num / 2, parseInt(replaced.substring(num, sum), 16));
      num = sum;
      length = replaced.length;
    } while (sum < length);
  }
  return dataView;
}
const STATE_KEYWORD = "STATE_KEYWORD";
const STATE_COMPRESSION = "STATE_COMPRESSION";
const STATE_LANG = "STATE_LANG";
const STATE_TRANSLATED_KEYWORD = "STATE_TRANSLATED_KEYWORD";
const STATE_TEXT = "STATE_TEXT";
let c8 = 1;
let c9 = 1;
let c10 = 6;
arg5.default = {
  read(byteLength, arg1, arg2, type) {
    let obj = {};
    const items = [];
    let num = 0;
    if (0 < arg1.length) {
      while (true) {
        ({ offset, length, type } = arg1[num]);
        let items1 = [];
        let items2 = [];
        let items3 = [];
        let tmp = STATE_KEYWORD;
        let tmp2 = type;
        let tmp3 = items2;
        let COMPRESSION_METHOD_NONE = type(items2[3]).COMPRESSION_METHOD_NONE;
        let tmp4 = num;
        let tmp5 = COMPRESSION_METHOD_NONE;
        let dataView;
        if (0 < length) {
          let num2 = 0;
          let tmp7 = COMPRESSION_METHOD_NONE;
          tmp5 = COMPRESSION_METHOD_NONE;
          if (offset < byteLength.byteLength) {
            while (true) {
              let tmp8 = STATE_COMPRESSION;
              let tmp9 = num2;
              let tmp10 = tmp7;
              let tmp11 = tmp;
              if (tmp !== STATE_COMPRESSION) {
                let tmp20 = STATE_TEXT;
                if (tmp === STATE_TEXT) {
                  let _DataView = DataView;
                  let buffer = byteLength.buffer;
                  let tmp36 = new.target;
                  let tmp37 = new.target;
                  dataView = new DataView(buffer.slice(offset + num2, offset + length));
                  tmp5 = tmp7;
                } else {
                  let uint8 = byteLength.getUint8(offset + num2);
                  if (0 === uint8) {
                    let tmp26 = STATE_KEYWORD;
                    if (tmp === STATE_KEYWORD) {
                      let tmp27 = type;
                      let tmp28 = items2;
                      let items4 = [type(items2[4]).TYPE_ITXT, type(items2[4]).TYPE_ZTXT];
                      let tmp29 = tmp8;
                      if (items4.includes(type)) {
                        let tmp16 = tmp8;
                        let sum1 = num2;
                        let COMPRESSION_METHOD_NONE2 = tmp7;
                      }
                    }
                    if (tmp === tmp8) {
                      let tmp32 = type;
                      let tmp33 = items2;
                      if (type === type(items2[4]).TYPE_ITXT) {
                        tmp20 = STATE_LANG;
                      }
                      let tmp31 = tmp20;
                    } else {
                      let tmp30 = STATE_LANG;
                      tmp31 = tmp20;
                      if (tmp === STATE_LANG) {
                        tmp31 = STATE_TRANSLATED_KEYWORD;
                      }
                    }
                    let tmp34 = tmp31;
                  } else {
                    let tmp21 = STATE_KEYWORD;
                    if (tmp === STATE_KEYWORD) {
                      let arr = items1.push(uint8);
                      sum1 = num2;
                      COMPRESSION_METHOD_NONE2 = tmp7;
                      tmp16 = tmp;
                    } else {
                      let tmp22 = STATE_LANG;
                      if (tmp === STATE_LANG) {
                        arr = items2.push(uint8);
                        sum1 = num2;
                        COMPRESSION_METHOD_NONE2 = tmp7;
                        tmp16 = tmp;
                      } else {
                        let tmp23 = STATE_TRANSLATED_KEYWORD;
                        sum1 = num2;
                        COMPRESSION_METHOD_NONE2 = tmp7;
                        tmp16 = tmp;
                        if (tmp === STATE_TRANSLATED_KEYWORD) {
                          let arr1 = items3.push(uint8);
                          sum1 = num2;
                          COMPRESSION_METHOD_NONE2 = tmp7;
                          tmp16 = tmp;
                        }
                      }
                    }
                  }
                }
              } else {
                let sum = offset + num2;
                let tmp52 = type;
                let tmp53 = items2;
                if (type === type(items2[4]).TYPE_ITXT) {
                  let tmp12 = c9;
                  if (byteLength.getUint8(sum) === c9) {
                    COMPRESSION_METHOD_NONE2 = byteLength.getUint8(sum + 1);
                    sum1 = num2;
                    if (type === tmp52(tmp53[4]).TYPE_ITXT) {
                      let tmp14 = c8;
                      sum1 = num2 + c8;
                    }
                    let tmp15 = STATE_KEYWORD;
                    if (tmp !== STATE_KEYWORD) {
                      break;
                    } else {
                      let items5 = [tmp52(tmp53[4]).TYPE_ITXT, tmp52(tmp53[4]).TYPE_ZTXT];
                      tmp16 = tmp8;
                      if (!items5.includes(type)) {
                        break;
                      }
                    }
                  }
                } else if (type === tmp52(tmp53[4]).TYPE_ZTXT) {
                  COMPRESSION_METHOD_NONE2 = byteLength.getUint8(sum);
                }
                COMPRESSION_METHOD_NONE2 = tmp52(tmp53[3]).COMPRESSION_METHOD_NONE;
              }
              let sum2 = sum1 + 1;
              tmp5 = COMPRESSION_METHOD_NONE2;
              if (sum2 < length) {
                num2 = sum2;
                tmp7 = COMPRESSION_METHOD_NONE2;
                tmp = tmp16;
                tmp5 = COMPRESSION_METHOD_NONE2;
              }
              continue;
            }
            if (tmp !== tmp8) {
              let tmp17 = STATE_LANG;
              let tmp19 = tmp === STATE_LANG ? STATE_TRANSLATED_KEYWORD : STATE_TEXT;
            }
            let tmp18 = type === tmp52(tmp53[4]).TYPE_ITXT ? STATE_LANG : STATE_TEXT;
          }
        }
        let tmp38 = type;
        let tmp39 = items2;
        if (tmp5 !== type(items2[3]).COMPRESSION_METHOD_NONE) {
          if (!arg2) {
            obj = {};
            let _Promise2 = Promise;
            if (obj instanceof Promise) {
              let arr2 = items.push(
                obj.then((arg0) => {
                  ({ name, value } = arg0);
                  try {
                    if (items1(items2[0]).USE_EXIF) {
                      if (closure_1_12(name, value)) {
                        let obj = { __exif: null };
                        let tmp2Result = tmp2(tmp3[1]);
                        obj[0] = tmp2Result.read(closure_1_14(value), closure_1_10, type).tags;
                        return obj;
                      }
                    }
                    if (items1(items2[0]).USE_IPTC) {
                      if (closure_1_13(name, value)) {
                        obj = { __iptc: null };
                        tmp2Result = tmp2(tmp3[2]);
                        obj[0] = tmp2Result.read(closure_1_14(value), 0, type);
                        return obj;
                      }
                    }
                    if (name) {
                      if (!closure_1_12(name, value)) {
                        if (!closure_1_13(name, value)) {
                          obj = {};
                          obj1 = { value: null, description: null };
                          obj1[0] = value;
                          obj1[1] = tmp;
                          obj[name] = obj1;
                          return obj;
                        }
                      }
                    }
                    return {};
                  } catch (err) {}
                }),
              );
            } else {
              let name = obj.name;
              if (name) {
                obj = { value: null, description: null };
                obj[0] = tmp47;
                obj[1] = tmp48;
                obj[name] = obj;
              }
            }
            num = num + 1;
          }
        }
        let tmp38Result = tmp38(tmp39[3]);
        if (type === tmp38(tmp39[4]).TYPE_TEXT) {
          let str = "latin1";
        } else {
          str = "utf-8";
        }
        let decompressResult = tmp38Result.decompress(dataView, tmp5, str);
        let _Promise = Promise;
        if (decompressResult instanceof Promise) {
          let nextPromise = decompressResult.then((arg0) => closure_1_11(arg0, type, items2, items1));
          let catchPromise = nextPromise.catch(() =>
            closure_1_11("<text using unknown compression>".split(""), type, items2, items1),
          );
        } else {
          let tmp40 = constructTag;
          let num3 = 0;
          let tmp41 = decompressResult;
          let tmp42 = type;
          let tmp43 = items2;
          let tmp44 = items1;
          catchPromise = constructTag(decompressResult, type, items2, items1);
        }
        let tmp46 = catchPromise;
      }
    }
    obj1 = { readTags: obj, readTagsPromise: null };
    let allPromises;
    if (items.length > 0) {
      allPromises = Promise.all(items);
    }
    obj1[1] = allPromises;
    return obj1;
  },
};
