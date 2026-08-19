// === Module 4957: constructTag ===

// Module 4957 (constructTag)
import getDataView from "getDataView" /* 4910 */;
import _mod4917 from "module_4917" /* 4917 */;
import _modDef4943 from "module_4943" /* 4943 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
function constructTag(decompressResult, type, items2, items1) {
  let stringFromDataView = decompressResult;
  if (decompressResult instanceof DataView) {
    let obj = getDataView;
    stringFromDataView = obj.getStringFromDataView(decompressResult, 0, decompressResult.byteLength);
  }
  const stringValueFromArray = getDataView.getStringValueFromArray(items1);
  let combined = stringValueFromArray;
  if (type !== _mod4917.TYPE_TEXT) {
    combined = stringValueFromArray;
    if (0 !== items2.length) {
      const _HermesInternal = HermesInternal;
      combined = "" + stringValueFromArray + " (" + getDataView.getStringValueFromArray(items2) + ")";
      const tmp4Result = getDataView;
    }
  }
  obj = { name: combined, value: stringFromDataView, description: null };
  if (type === _mod4917.TYPE_ITXT) {
    const decoder = _modDef4943;
    stringFromDataView = decoder.decode("UTF-8", decompressResult);
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
        let COMPRESSION_METHOD_NONE = type(items2[3]).COMPRESSION_METHOD_NONE;
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
                  dataView = new DataView(buffer.slice(offset + num2, offset + length));
                  tmp5 = tmp7;
                } else {
                  let uint8 = byteLength.getUint8(offset + num2);
                  if (0 === uint8) {
                    if (tmp === STATE_KEYWORD) {
                      let items4 = [type(items2[4]).TYPE_ITXT, type(items2[4]).TYPE_ZTXT];
                      if (items4.includes(type)) {
                        let tmp16 = STATE_COMPRESSION;
                        let sum1 = num2;
                        let COMPRESSION_METHOD_NONE2 = tmp7;
                      }
                    }
                    if (tmp === STATE_COMPRESSION) {
                      if (type === type(items2[4]).TYPE_ITXT) {
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
                let tmp52 = type;
                let tmp53 = items2;
                if (type === type(items2[4]).TYPE_ITXT) {
                  if (byteLength.getUint8(sum) === c9) {
                    COMPRESSION_METHOD_NONE2 = byteLength.getUint8(sum + 1);
                    sum1 = num2;
                    if (type === tmp52(tmp53[4]).TYPE_ITXT) {
                      sum1 = num2 + c8;
                    }
                    if (tmp !== STATE_KEYWORD) {
                      break;
                    } else {
                      let items5 = [tmp52(tmp53[4]).TYPE_ITXT, tmp52(tmp53[4]).TYPE_ZTXT];
                      tmp16 = STATE_COMPRESSION;
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
              let arr2 = items.push(obj.then((result) => {
                ({ name, value } = result);
                try {
                  if (items1(items2[0]).USE_EXIF) {
                    if (isExifGroupTag(name, value)) {
                      let obj = { __exif: null };
                      let tmp2Result = items1(items2[1]);
                      obj[0] = tmp2Result.read(decodeRawData(value), closure_1_10, type).tags;
                      return obj;
                    }
                  }
                  if (items1(items2[0]).USE_IPTC) {
                    if (isIptcGroupTag(name, value)) {
                      obj = { __iptc: null };
                      tmp2Result = items1(items2[2]);
                      obj[0] = tmp2Result.read(decodeRawData(value), 0, type);
                      return obj;
                    }
                  }
                  if (name) {
                    if (!isExifGroupTag(name, value)) {
                      if (!isIptcGroupTag(name, value)) {
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
                } catch (err) {
                }
              }));
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
          let nextPromise = decompressResult.then((result) => constructTag(result, type, items2, items1));
          let catchPromise = nextPromise.catch((error) => constructTag("<text using unknown compression>".split(""), type, items2, items1));
        } else {
          catchPromise = constructTag(decompressResult, type, items2, items1);
        }
      }
    }
    obj1 = { readTags: obj, readTagsPromise: null };
    let allPromises;
    if (items.length > 0) {
      allPromises = Promise.all(items);
    }
    obj1[1] = allPromises;
    return obj1;
  }
};