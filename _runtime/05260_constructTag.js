// _runtime/05260_constructTag.js
import _mod5213 from "metro/05213__.js";
import _modDef5216 from "metro/05216__.js";
import PNG_CHUNK_TYPE_SIZE from "05220_PNG_CHUNK_TYPE_SIZE.js";
import _modDef5232 from "metro/05232__.js";
import _modDef5244 from "metro/05244__.js";
import _modDef5246 from "metro/05246__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
function constructTag(decompressResult, type, items2, items1) {
  let stringFromDataView = decompressResult;
  if (decompressResult instanceof DataView) {
    let obj = _mod5213;
    stringFromDataView = obj.getStringFromDataView(decompressResult, 0, decompressResult.byteLength);
  }
  const stringValueFromArray = _mod5213.getStringValueFromArray(items1);
  let combined = stringValueFromArray;
  if (type !== PNG_CHUNK_TYPE_SIZE.TYPE_TEXT) {
    combined = stringValueFromArray;
    if (0 !== items2.length) {
      const _HermesInternal = HermesInternal;
      combined = "" + stringValueFromArray + " (" + _mod5213.getStringValueFromArray(items2) + ")";
      const tmp4Result = _mod5213;
    }
  }
  obj = { name: combined, value: stringFromDataView, description: null };
  if (type === PNG_CHUNK_TYPE_SIZE.TYPE_ITXT) {
    const decoder = _modDef5246;
    stringFromDataView = decoder.decode("UTF-8", decompressResult);
  }
  obj.description = stringFromDataView;
  return obj;
}
function isExifGroupTag(name, value) {
  let tmp = "raw profile type exif" === name.toLowerCase();
  if (tmp) {
    tmp = "exif" === value.substring(1, 5);
  }
  return tmp;
}
function isIptcGroupTag(name, value) {
  let tmp = "raw profile type iptc" === name.toLowerCase();
  if (tmp) {
    tmp = "iptc" === value.substring(1, 5);
  }
  return tmp;
}
function decodeRawData(value) {
  let length;
  let sum;
  const replaced = value.match(/\n(exif|iptc)\n\s*\d+\n([\s\S]*)$/)[2].replace(/\n/g, "");
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

export default {
  read(byteLength, arg1, arg2, arg3) {
    _require = arg3;
    let obj = {};
    const items = [];
    let num = 0;
    if (0 < arg1.length) {
      while (true) {
        ({ offset, length, type } = arg1[num]);
        closure_129_0 = type;
        let items1 = [];
        closure_129_1 = items1;
        let items2 = [];
        closure_129_2 = items2;
        let items3 = [];
        let tmp = STATE_KEYWORD;
        let COMPRESSION_METHOD_NONE = require("metro/05213__.js").COMPRESSION_METHOD_NONE;
        let tmp5 = COMPRESSION_METHOD_NONE;
        let dataView;
        if (0 < length) {
          let num2 = 0;
          let tmp7 = COMPRESSION_METHOD_NONE;
          tmp5 = COMPRESSION_METHOD_NONE;
          if (offset < byteLength.byteLength) {
            while (true) {
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
                    if (tmp === STATE_KEYWORD) {
                      let items4 = [require("PNG_CHUNK_TYPE_SIZE").TYPE_ITXT, require("PNG_CHUNK_TYPE_SIZE").TYPE_ZTXT];
                      if (items4.includes(type)) {
                        let tmp16 = STATE_COMPRESSION;
                        let sum1 = num2;
                        let COMPRESSION_METHOD_NONE2 = tmp7;
                      }
                    }
                    if (tmp === STATE_COMPRESSION) {
                      if (type === require("PNG_CHUNK_TYPE_SIZE").TYPE_ITXT) {
                        tmp20 = STATE_LANG;
                      }
                    }
                  } else if (tmp === STATE_KEYWORD) {
                    let arr = items1.push(uint8);
                    sum1 = num2;
                    COMPRESSION_METHOD_NONE2 = tmp7;
                    tmp16 = tmp;
                  } else if (tmp === STATE_LANG) {
                    arr = items2.push(uint8);
                    sum1 = num2;
                    COMPRESSION_METHOD_NONE2 = tmp7;
                    tmp16 = tmp;
                  } else {
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
              } else {
                let sum = offset + num2;
                let tmp52 = _require;
                if (type === require("PNG_CHUNK_TYPE_SIZE").TYPE_ITXT) {
                  if (byteLength.getUint8(sum) === c9) {
                    COMPRESSION_METHOD_NONE2 = byteLength.getUint8(sum + 1);
                    sum1 = num2;
                    if (type === tmp52(5220).TYPE_ITXT) {
                      sum1 = num2 + c8;
                    }
                    if (tmp !== STATE_KEYWORD) {
                      break;
                    } else {
                      let items5 = [tmp52(5220).TYPE_ITXT, tmp52(5220).TYPE_ZTXT];
                      tmp16 = STATE_COMPRESSION;
                      if (!items5.includes(type)) {
                        break;
                      }
                    }
                  }
                } else if (type === tmp52(5220).TYPE_ZTXT) {
                  COMPRESSION_METHOD_NONE2 = byteLength.getUint8(sum);
                }
                COMPRESSION_METHOD_NONE2 = tmp52(5213).COMPRESSION_METHOD_NONE;
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
            if (tmp !== STATE_COMPRESSION) {
              let tmp19 = tmp === STATE_LANG ? STATE_TRANSLATED_KEYWORD : STATE_TEXT;
            }
            let tmp18 = type === tmp52(5220).TYPE_ITXT ? STATE_LANG : STATE_TEXT;
          }
        }
        let tmp38 = _require;
        if (tmp5 !== require("metro/05213__.js").COMPRESSION_METHOD_NONE) {
          if (!arg2) {
            obj = {};
            let _Promise2 = Promise;
            if (obj instanceof Promise) {
              let arr2 = items.push(
                obj.then((result) => {
                  ({ name, value } = result);
                  try {
                    if (_modDef5216.USE_EXIF) {
                      if (isExifGroupTag(name, value)) {
                        let obj = { __exif: null };
                        let tmp2Result = _modDef5232;
                        obj.__exif = tmp2Result.read(decodeRawData(value), c10, closure_0).tags;
                        return obj;
                      }
                    }
                    if (_modDef5216.USE_IPTC) {
                      if (isIptcGroupTag(name, value)) {
                        obj = { __iptc: null };
                        tmp2Result = _modDef5244;
                        obj.__iptc = tmp2Result.read(decodeRawData(value), 0, closure_0);
                        return obj;
                      }
                    }
                    if (name) {
                      if (!isExifGroupTag(name, value)) {
                        if (!isIptcGroupTag(name, value)) {
                          obj = {};
                          const obj1 = { value, description: tmp };
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
                obj = { value: tmp47, description: tmp48 };
                obj[name] = obj;
              }
            }
            num = num + 1;
          }
        }
        let tmp38Result = tmp38(5213);
        if (type === tmp38(5220).TYPE_TEXT) {
          let str = "latin1";
        } else {
          str = "utf-8";
        }
        let decompressResult = tmp38Result.decompress(dataView, tmp5, str);
        let _Promise = Promise;
        if (decompressResult instanceof Promise) {
          let nextPromise = decompressResult.then((result) =>
            constructTag(result, closure_0, dependencyMap, importDefault),
          );
          let catchPromise = nextPromise.catch(() =>
            constructTag("<text using unknown compression>".split(""), closure_0, dependencyMap, importDefault),
          );
        } else {
          catchPromise = constructTag(decompressResult, type, items2, items1);
        }
      }
    }
    let obj1 = { readTags: obj, readTagsPromise: null };
    let allPromises;
    if (items.length > 0) {
      allPromises = Promise.all(items);
    }
    obj1.readTagsPromise = allPromises;
    return obj1;
  },
};
