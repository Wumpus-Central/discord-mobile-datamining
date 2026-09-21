// _runtime/metro/05471__.js
import _mod5430 from "05430__.js";
import iccTags from "../05472_iccTags.js";

require = arg1;
const dependencyMap = arg6;
function parseTags(buffer) {
  buffer = buffer.buffer;
  if (buffer.byteLength !== buffer.getUint32()) {
    const _Error3 = Error;
    const error = new Error("ICC profile length not matching");
    throw error;
  } else if (buffer.byteLength < c2) {
    const _Error2 = Error;
    const error1 = new Error("ICC profile too short");
    throw error1;
  } else {
    const obj2 = {};
    const _Object = Object;
    const keys = Object.keys(iccTags.iccProfile);
    for (let num = 0; num < keys.length; num = num + 1) {
      let tmp = keys[num];
      let iter = iccTags.iccProfile[tmp];
      let _parseInt = parseInt;
      let valueResult = iter.value(buffer, parseInt(tmp, 10));
      let descriptionResult = valueResult;
      if (iter.description) {
        descriptionResult = iter.description(valueResult);
      }
      let obj = { value: valueResult, description: descriptionResult };
      obj2[iter.name] = obj;
    }
    const _String = String;
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(buffer.slice(36, 40));
    if (fromCharCode.apply(null, uint8Array) !== acsp) {
      const _Error = Error;
      const error2 = new Error("ICC profile: missing signature");
      throw error2;
    } else {
      let num6 = 132;
      if (buffer.length < 132) {
        return obj2;
      } else {
        const uint32 = buffer.getUint32(128);
        let num7 = 0;
        if (0 < uint32) {
          while (buffer.length >= num6 + c8) {
            let obj17 = _mod5430;
            let stringFromDataView = obj17.getStringFromDataView(buffer, num6, 4);
            let uint321 = buffer.getUint32(num6 + 4);
            let uint322 = buffer.getUint32(num6 + 8);
            if (uint321 > buffer.length) {
              return obj2;
            } else {
              let tmp55Result = _mod5430;
              let stringFromDataView1 = tmp55Result.getStringFromDataView(buffer, uint321, 4);
              if (stringFromDataView1 === desc) {
                let uint323 = buffer.getUint32(uint321 + 8);
                if (uint323 > uint322) {
                  return obj2;
                } else {
                  let _String4 = String;
                  let _Uint8Array4 = Uint8Array;
                  let tmp70 = new.target;
                  let tmp71 = new.target;
                  let uint8Array1 = new Uint8Array(buffer.slice(uint321 + 12, uint321 + uint323 + 11));
                  let applyResult = fromCharCode4.apply(null, uint8Array1);
                  if (iccTags.iccTags[stringFromDataView]) {
                    let obj3 = { value: applyResult, description: applyResult };
                    obj2[iccTags.iccTags[stringFromDataView].name] = obj3;
                  } else {
                    let obj4 = { value: applyResult, description: applyResult };
                    obj2[stringFromDataView] = obj4;
                  }
                }
              } else if (stringFromDataView1 === mluc) {
                let uint324 = buffer.getUint32(uint321 + 8);
                let sum = uint321 + 16;
                let items = [];
                let num4 = 0;
                let tmp25 = require;
                if (0 < uint324) {
                  do {
                    let obj6 = _mod5430;
                    let stringFromDataView2 = obj6.getStringFromDataView(buffer, sum, 2);
                    let obj7 = _mod5430;
                    let stringFromDataView3 = obj7.getStringFromDataView(buffer, sum + 2, 2);
                    let uint325 = buffer.getUint32(sum + 4);
                    let uint326 = buffer.getUint32(sum + 8);
                    let obj8 = _mod5430;
                    let obj5 = {
                      languageCode: stringFromDataView2,
                      countryCode: stringFromDataView3,
                      text: obj8.getUnicodeStringFromDataView(buffer, uint321 + uint326, uint325),
                    };
                    let arr = items.push(obj5);
                    sum = sum + tmp22;
                    num4 = num4 + 1;
                    tmp25 = require;
                  } while (num4 < uint324);
                }
                if (1 === uint324) {
                  text = items[0].text;
                  if (tmp25(5472).iccTags[stringFromDataView]) {
                    let obj9 = { value: text, description: text };
                    obj2[tmp25(5472).iccTags[stringFromDataView].name] = obj9;
                  } else {
                    let obj10 = { value: text, description: text };
                    obj2[stringFromDataView] = obj10;
                  }
                } else {
                  let obj11 = {};
                  let num5 = 0;
                  if (0 < items.length) {
                    do {
                      let _HermesInternal = HermesInternal;
                      obj11["" + items[num5].languageCode + "-" + items[num5].countryCode] = items[num5].text;
                      num5 = num5 + 1;
                      length = items.length;
                    } while (num5 < length);
                  }
                  if (iccTags.iccTags[stringFromDataView]) {
                    let obj12 = { value: obj11, description: obj11 };
                    obj2[iccTags.iccTags[stringFromDataView].name] = obj12;
                  } else {
                    let obj13 = { value: obj11, description: obj11 };
                    obj2[stringFromDataView] = obj13;
                  }
                }
              } else if (stringFromDataView1 === text) {
                let _String2 = String;
                let _Uint8Array2 = Uint8Array;
                let tmp16 = new.target;
                let tmp17 = new.target;
                let uint8Array2 = new Uint8Array(buffer.slice(uint321 + 8, uint321 + uint322 - 7));
                let applyResult1 = fromCharCode2.apply(null, uint8Array2);
                if (iccTags.iccTags[stringFromDataView]) {
                  let obj14 = { value: applyResult1, description: applyResult1 };
                  obj2[iccTags.iccTags[stringFromDataView].name] = obj14;
                } else {
                  let obj15 = { value: applyResult1, description: applyResult1 };
                  obj2[stringFromDataView] = obj15;
                }
              } else if (stringFromDataView1 === c7) {
                let _String3 = String;
                let _Uint8Array3 = Uint8Array;
                let tmp65 = new.target;
                let tmp66 = new.target;
                let uint8Array3 = new Uint8Array(buffer.slice(uint321 + 8, uint321 + 12));
                let applyResult2 = fromCharCode3.apply(null, uint8Array3);
                if (iccTags.iccTags[stringFromDataView]) {
                  let obj16 = { value: applyResult2, description: applyResult2 };
                  obj2[iccTags.iccTags[stringFromDataView].name] = obj16;
                } else {
                  let obj18 = { value: applyResult2, description: applyResult2 };
                  obj2[stringFromDataView] = obj18;
                }
              }
              num6 = num6 + 12;
              num7 = num7 + 1;
            }
          }
          return obj2;
        }
        return obj2;
      }
    }
  }
}
let c2 = 84;
const acsp = "acsp";
const desc = "desc";
const mluc = "mluc";
let text = "text";
let c7 = "sig ";
let c8 = 12;

export default {
  read(buffer, arr, arg2) {
    if (arg2) {
      if (arr[0].compressionMethod !== _mod5430.COMPRESSION_METHOD_NONE) {
        if (arr[0].compressionMethod === _mod5430.COMPRESSION_METHOD_DEFLATE) {
          let _DataView = DataView;
          buffer = buffer.buffer;
          let dataView = new DataView(buffer.slice(arr[0].offset, arr[0].offset + arr[0].length));
          const tmpResult = _mod5430;
          const decompressResult = tmpResult.decompress(dataView, arr[0].compressionMethod, "utf-8", "dataview");
          let catchPromise = tmpResult
            .decompress(dataView, arr[0].compressionMethod, "utf-8", "dataview")
            .then(parseTags)
            .catch(() => ({}));
          const nextPromise = tmpResult
            .decompress(dataView, arr[0].compressionMethod, "utf-8", "dataview")
            .then(parseTags);
        } else {
          catchPromise = {};
        }
        return catchPromise;
      }
    }
    return (function readIcc(buffer, arr) {
      let length;
      let sum;
      closure_0 = arr;
      try {
        let _Uint8Array = Uint8Array;
        let uint8Array = new Uint8Array(arr.reduce((acc, item) => acc + item.length, 0));
        closure_2 = 0;
        closure_3 = (function getBuffer(buffer) {
          if (Array.isArray(buffer)) {
            const _DataView = DataView;
            const _Uint8Array = Uint8Array;
            const dataView = new DataView(Uint8Array.from(buffer).buffer);
            return dataView.buffer;
          } else {
            return buffer.buffer;
          }
        })(buffer);
        function _loop(arg0) {
          closure_0 = arg0;
          const found = closure_0.find((chunkNumber) => chunkNumber.chunkNumber === closure_0);
          if (found) {
            const _Uint8Array = Uint8Array;
            uint8Array = new Uint8Array(closure_3.slice(found.offset, found.offset + found.length));
            const result = uint8Array.set(uint8Array, closure_2);
            closure_2 = closure_2 + uint8Array.length;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("ICC chunk " + arg0 + " not found");
            throw error;
          }
        }
        let num3 = 1;
        if (1 <= arr.length) {
          do {
            let _loopResult = _loop(num3);
            sum = num3 + 1;
            num3 = sum;
            length = arr.length;
          } while (sum <= length);
        }
        let _DataView = DataView;
        let dataView = new DataView(uint8Array.buffer);
        return parseTags(dataView);
      } catch (err) {
        return {};
      }
    })(buffer, arr);
  },
};
export { parseTags };
