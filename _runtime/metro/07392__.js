// === Module 7392: ? ===

// Module 7392
import _mod7345 from "module_7345" /* 7345 */;
import _modDef7348 from "module_7348" /* 7348 */;
import PNG_CHUNK_TYPE_SIZE from "PNG_CHUNK_TYPE_SIZE" /* 7352 */;
import _modDef7364 from "module_7364" /* 7364 */;
import _modDef7376 from "module_7376" /* 7376 */;
import _modDef7378 from "module_7378" /* 7378 */;

const require = globalThis.__r;
let _require;

function constructTag(decompressResult, type, items2, items1) {
  let stringFromDataView = decompressResult;
  if (decompressResult instanceof DataView) {
    const obj = _mod7345;
    stringFromDataView = obj.getStringFromDataView(decompressResult, 0, decompressResult.byteLength);
  }
  const obj2 = _mod7345;
  const stringValueFromArray = obj2.getStringValueFromArray(items1);
  let combined = stringValueFromArray;
  if (type !== PNG_CHUNK_TYPE_SIZE.TYPE_TEXT) {
    combined = stringValueFromArray;
    if (0 !== items2.length) {
      const _HermesInternal = HermesInternal;
      const tmp4Result = _mod7345;
      combined = "" + stringValueFromArray + " (" + tmp4Result.getStringValueFromArray(items2) + ")";
    }
  }
  const obj3 = { name: combined, value: stringFromDataView, description: stringFromDataView };
  if (type === PNG_CHUNK_TYPE_SIZE.TYPE_ITXT) {
    const decoder = _modDef7378;
    stringFromDataView = decoder.decode("UTF-8", decompressResult);
  }
  return obj3;
}
function isExifGroupTag(name, value) {
  const tmp = "raw profile type exif" === name.toLowerCase() && "exif" === value.substring(1, 5);
  return tmp;
}
function isIptcGroupTag(name, value) {
  const tmp = "raw profile type iptc" === name.toLowerCase() && "iptc" === value.substring(1, 5);
  return tmp;
}
function decodeRawData(value) {
  let length;
  let sum;
  const str = value.match(/\n(exif|iptc)\n\s*\d+\n([\s\S]*)$/)[2];
  const replaced = str.replace(/\n/g, "");
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
let obj = {
  read(byteLength, arg1, arg2, arg3) {
    let allPromises;
    let closure_0;
    let length;
    let offset;
    let type;
    _require = arg3;
    let obj = {};
    const items = [];
    let num = 0;
    if (0 < arg1.length) {
      while (true) {
        let str;
        let catchPromise;
        ({ offset, length, type } = arg1[num]);
        let items1 = [];
        let items2 = [];
        let items3 = [];
        let tmp = STATE_KEYWORD;
        let COMPRESSION_METHOD_NONE = require("module_7345").COMPRESSION_METHOD_NONE;
        let tmp5 = COMPRESSION_METHOD_NONE;
        let dataView;
        if (0 < length) {
          let num2 = 0;
          let tmp7 = COMPRESSION_METHOD_NONE;
          tmp5 = COMPRESSION_METHOD_NONE;
          if (offset < byteLength.byteLength) {
            while (true) {
              let tmp16;
              let sum1;
              let COMPRESSION_METHOD_NONE2;
              if (tmp !== STATE_COMPRESSION) {
                let tmp19 = STATE_TEXT;
                if (tmp === STATE_TEXT) {
                  break;
                } else {
                  let uint8 = byteLength.getUint8(offset + num2);
                  if (0 === uint8) {
                    let tmp28;
                    if (tmp !== STATE_KEYWORD) {
                      let tmp30;
                      if (tmp === STATE_COMPRESSION) {
                        if (type === require("PNG_CHUNK_TYPE_SIZE").TYPE_ITXT) {
                          tmp19 = STATE_LANG;
                        }
                        tmp30 = tmp19;
                      } else {
                        tmp30 = tmp19;
                        if (tmp === STATE_LANG) {
                          tmp30 = STATE_TRANSLATED_KEYWORD;
                        }
                      }
                      tmp28 = tmp30;
                    } else {
                      let items4 = [require("PNG_CHUNK_TYPE_SIZE").TYPE_ITXT, require("PNG_CHUNK_TYPE_SIZE").TYPE_ZTXT];
                      tmp28 = STATE_COMPRESSION;
                    }
                    tmp16 = tmp28;
                    sum1 = num2;
                    COMPRESSION_METHOD_NONE2 = tmp7;
                  } else if (tmp === STATE_KEYWORD) {
                    let arr = items1.push(uint8);
                    sum1 = num2;
                    COMPRESSION_METHOD_NONE2 = tmp7;
                    tmp16 = tmp;
                  } else if (tmp === STATE_LANG) {
                    let arr2 = items2.push(uint8);
                    sum1 = num2;
                    COMPRESSION_METHOD_NONE2 = tmp7;
                    tmp16 = tmp;
                  } else {
                    sum1 = num2;
                    COMPRESSION_METHOD_NONE2 = tmp7;
                    tmp16 = tmp;
                    if (tmp === STATE_TRANSLATED_KEYWORD) {
                      let arr3 = items3.push(uint8);
                      sum1 = num2;
                      COMPRESSION_METHOD_NONE2 = tmp7;
                      tmp16 = tmp;
                    }
                  }
                }
              } else {
                let sum = offset + num2;
                let tmp48 = _require;
                if (type === require("PNG_CHUNK_TYPE_SIZE").TYPE_ITXT) {
                  if (byteLength.getUint8(sum) === c9) {
                    COMPRESSION_METHOD_NONE2 = byteLength.getUint8(sum + 1);
                    sum1 = num2;
                    if (type === tmp48(7352).TYPE_ITXT) {
                      sum1 = num2 + c8;
                    }
                    if (tmp !== STATE_KEYWORD) {
                      let tmp18;
                      if (tmp === STATE_COMPRESSION) {
                        tmp18 = type === tmp48(7352).TYPE_ITXT ? STATE_LANG : STATE_TEXT;
                      } else {
                        tmp18 = tmp === STATE_LANG ? STATE_TRANSLATED_KEYWORD : STATE_TEXT;
                      }
                      tmp16 = tmp18;
                    } else {
                      let items5 = [tmp48(7352).TYPE_ITXT, tmp48(7352).TYPE_ZTXT];
                      tmp16 = STATE_COMPRESSION;
                    }
                  }
                } else if (type === tmp48(7352).TYPE_ZTXT) {
                  COMPRESSION_METHOD_NONE2 = byteLength.getUint8(sum);
                }
                COMPRESSION_METHOD_NONE2 = tmp48(7345).COMPRESSION_METHOD_NONE;
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
            let _DataView = DataView;
            let buffer = byteLength.buffer;
            let self = this;
            let self2 = this;
            dataView = new DataView(buffer.slice(offset + num2, offset + length));
            tmp5 = tmp7;
          }
        }
        let tmp34 = _require;
        if (tmp5 !== require("module_7345").COMPRESSION_METHOD_NONE) {
          let obj2;
          if (!arg2) {
            obj2 = {};
          }
          let _Promise2 = Promise;
          if (obj2 instanceof Promise) {
            let arr4 = items.push(obj2.then((result) => {
              let name;
              let tmp2Result;
              let tmp2Result2;
              let value;
              ({ name, value } = result);
              try {
                if (_modDef7348.USE_EXIF) {
                  if (isExifGroupTag(name, value)) {
                    const obj2 = { __exif: tmp2Result.read(decodeRawData(value), c10, closure_0).tags };
                    tmp2Result = _modDef7364;
                    return obj2;
                  }
                }
                if (_modDef7348.USE_IPTC) {
                  if (isIptcGroupTag(name, value)) {
                    const obj3 = { __iptc: tmp2Result2.read(decodeRawData(value), 0, closure_0) };
                    tmp2Result2 = _modDef7376;
                    return obj3;
                  }
                }
                if (name) {
                  if (!isExifGroupTag(name, value)) {
                    if (!isIptcGroupTag(name, value)) {
                      const obj = {};
                      const obj4 = { value, description: tmp };
                      obj[name] = obj4;
                      return obj;
                    }
                  }
                }
                return {};
              } catch (err) {
              }
            }));
          } else {
            let name = obj2.name;
            if (name) {
              let obj3 = { value: tmp43, description: tmp44 };
              obj[name] = obj3;
            }
          }
          num = num + 1;
          if (num >= arg1.length) {
            break;
          }
        }
        let tmp34Result = tmp34(7345);
        let decompress = tmp34Result.decompress;
        if (type === tmp34(7352).TYPE_TEXT) {
          str = "latin1";
        } else {
          str = "utf-8";
        }
        let decompressResult = decompress(dataView, tmp5, str);
        let _Promise = Promise;
        if (decompressResult instanceof Promise) {
          let nextPromise = decompressResult.then((result) => constructTag(result, type, items2, items1));
          catchPromise = nextPromise.catch(() => constructTag("<text using unknown compression>".split(""), type, items2, items1));
        } else {
          catchPromise = constructTag(decompressResult, type, items2, items1);
        }
        obj2 = catchPromise;
      }
    }
    let obj4 = { readTags: obj, readTagsPromise: allPromises };
    allPromises = undefined;
    if (items.length > 0) {
      allPromises = Promise.all(items);
    }
    return obj4;
  }
};
const STATE_KEYWORD = "STATE_KEYWORD";
const STATE_COMPRESSION = "STATE_COMPRESSION";
const STATE_LANG = "STATE_LANG";
const STATE_TRANSLATED_KEYWORD = "STATE_TRANSLATED_KEYWORD";
const STATE_TEXT = "STATE_TEXT";
let c8 = 1;
let c9 = 1;
let c10 = 6;

export default obj;