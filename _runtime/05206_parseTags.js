// _runtime/05206_parseTags.js
import getDataView from "05165_getDataView.js";
import _mod5207 from "metro/05207__.js";

require = arg1;
const dependencyMap = arg6;
function parseTags(buffer) {
  buffer = buffer.buffer;
  if (buffer.byteLength !== buffer.getUint32()) {
    const _Error3 = Error;
    error = new Error("ICC profile length not matching");
    throw error;
  } else if (buffer.byteLength < c2) {
    const _Error2 = Error;
    const error1 = new Error("ICC profile too short");
    throw error1;
  } else {
    let obj = {};
    const _Object = Object;
    const keys = Object.keys(_mod5207.iccProfile);
    for (let num = 0; num < keys.length; num = num + 1) {
      let tmp = keys[num];
      let tmp2 = require;
      let tmp3 = dependencyMap;
      let iter = _mod5207.iccProfile[tmp];
      let _parseInt = parseInt;
      let valueResult = iter.value(buffer, parseInt(tmp, 10));
      let tmp5 = num;
      let descriptionResult = valueResult;
      if (iter.description) {
        descriptionResult = iter.description(valueResult);
      }
      obj = { value: null, description: null };
      obj[0] = valueResult;
      obj[1] = descriptionResult;
      obj[iter.name] = obj;
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
        return obj;
      } else {
        const uint32 = buffer.getUint32(128);
        let num7 = 0;
        if (0 < uint32) {
          while (buffer.length >= num6 + c8) {
            let tmp55 = require;
            let tmp56 = dependencyMap;
            let obj17 = getDataView;
            let stringFromDataView = obj17.getStringFromDataView(buffer, num6, 4);
            let uint321 = buffer.getUint32(num6 + 4);
            let uint322 = buffer.getUint32(num6 + 8);
            if (uint321 > buffer.length) {
              return obj;
            } else {
              let tmp55Result = tmp55(5165);
              let stringFromDataView1 = tmp55Result.getStringFromDataView(buffer, uint321, 4);
              let tmp61 = desc;
              if (stringFromDataView1 === desc) {
                let uint323 = buffer.getUint32(uint321 + 8);
                if (uint323 > uint322) {
                  return obj;
                } else {
                  let _String4 = String;
                  let _Uint8Array4 = Uint8Array;
                  let tmp70 = new.target;
                  let tmp71 = new.target;
                  let uint8Array1 = new Uint8Array(buffer.slice(uint321 + 12, uint321 + uint323 + 11));
                  let tmp73 = uint8Array1;
                  let applyResult = fromCharCode4.apply(null, uint8Array1);
                  if (tmp55(5207).iccTags[stringFromDataView]) {
                    obj = { value: null, description: null };
                    obj[0] = applyResult;
                    obj[1] = applyResult;
                    obj[tmp55(5207).iccTags[stringFromDataView].name] = obj;
                  } else {
                    obj1 = { value: null, description: null };
                    obj1[0] = applyResult;
                    obj1[1] = applyResult;
                    obj[stringFromDataView] = obj1;
                  }
                }
              } else {
                let tmp62 = mluc;
                if (stringFromDataView1 === mluc) {
                  let uint324 = buffer.getUint32(uint321 + 8);
                  let sum = uint321 + 16;
                  let items = [];
                  let num4 = 0;
                  let tmp24 = tmp56;
                  let tmp25 = tmp55;
                  if (0 < uint324) {
                    do {
                      let tmp26 = require;
                      let tmp27 = dependencyMap;
                      let obj5 = getDataView;
                      let stringFromDataView2 = obj5.getStringFromDataView(buffer, sum, 2);
                      let obj6 = getDataView;
                      let stringFromDataView3 = obj6.getStringFromDataView(buffer, sum + 2, 2);
                      let uint325 = buffer.getUint32(sum + 4);
                      let uint326 = buffer.getUint32(sum + 8);
                      let obj7 = getDataView;
                      let obj2 = { languageCode: null, countryCode: null, text: null };
                      obj2[0] = stringFromDataView2;
                      obj2[1] = stringFromDataView3;
                      obj2[2] = obj7.getUnicodeStringFromDataView(buffer, uint321 + uint326, uint325);
                      let arr = items.push(obj2);
                      sum = sum + tmp22;
                      num4 = num4 + 1;
                      tmp24 = dependencyMap;
                      tmp25 = require;
                    } while (num4 < uint324);
                  }
                  if (1 === uint324) {
                    text = items[0].text;
                    if (tmp25(5207).iccTags[stringFromDataView]) {
                      let obj3 = { value: null, description: null };
                      obj3[0] = text;
                      obj3[1] = text;
                      obj[tmp25(5207).iccTags[stringFromDataView].name] = obj3;
                    } else {
                      let obj4 = { value: null, description: null };
                      obj4[0] = text;
                      obj4[1] = text;
                      obj[stringFromDataView] = obj4;
                    }
                  } else {
                    obj5 = {};
                    let num5 = 0;
                    if (0 < items.length) {
                      do {
                        let _HermesInternal = HermesInternal;
                        obj5["" + items[num5].languageCode + "-" + items[num5].countryCode] = items[num5].text;
                        num5 = num5 + 1;
                        length = items.length;
                      } while (num5 < length);
                    }
                    let tmp33 = require;
                    let tmp34 = dependencyMap;
                    if (_mod5207.iccTags[stringFromDataView]) {
                      obj6 = { value: null, description: null };
                      obj6[0] = obj5;
                      obj6[1] = obj5;
                      obj[tmp33(5207).iccTags[stringFromDataView].name] = obj6;
                    } else {
                      obj7 = { value: null, description: null };
                      obj7[0] = obj5;
                      obj7[1] = obj5;
                      obj[stringFromDataView] = obj7;
                    }
                  }
                } else {
                  let tmp63 = text;
                  if (stringFromDataView1 === text) {
                    let _String2 = String;
                    let _Uint8Array2 = Uint8Array;
                    let tmp16 = new.target;
                    let tmp17 = new.target;
                    let uint8Array2 = new Uint8Array(buffer.slice(uint321 + 8, uint321 + uint322 - 7));
                    let tmp19 = uint8Array2;
                    let applyResult1 = fromCharCode2.apply(null, uint8Array2);
                    if (tmp55(5207).iccTags[stringFromDataView]) {
                      let obj8 = { value: null, description: null };
                      obj8[0] = applyResult1;
                      obj8[1] = applyResult1;
                      obj[tmp55(5207).iccTags[stringFromDataView].name] = obj8;
                    } else {
                      let obj9 = { value: null, description: null };
                      obj9[0] = applyResult1;
                      obj9[1] = applyResult1;
                      obj[stringFromDataView] = obj9;
                    }
                  } else {
                    let tmp64 = c7;
                    if (stringFromDataView1 === c7) {
                      let _String3 = String;
                      let _Uint8Array3 = Uint8Array;
                      let tmp65 = new.target;
                      let tmp66 = new.target;
                      let uint8Array3 = new Uint8Array(buffer.slice(uint321 + 8, uint321 + 12));
                      let tmp68 = uint8Array3;
                      let applyResult2 = fromCharCode3.apply(null, uint8Array3);
                      if (tmp55(5207).iccTags[stringFromDataView]) {
                        let obj10 = { value: null, description: null };
                        obj10[0] = applyResult2;
                        obj10[1] = applyResult2;
                        obj[tmp55(5207).iccTags[stringFromDataView].name] = obj10;
                      } else {
                        let obj11 = { value: null, description: null };
                        obj11[0] = applyResult2;
                        obj11[1] = applyResult2;
                        obj[stringFromDataView] = obj11;
                      }
                    }
                  }
                }
              }
              num6 = num6 + 12;
              num7 = num7 + 1;
            }
          }
          return obj;
        }
        return obj;
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
arg5.default = {
  read(buffer, arr) {
    if (arg2) {
      if (arr[0].compressionMethod !== getDataView.COMPRESSION_METHOD_NONE) {
        if (arr[0].compressionMethod === tmp(5165).COMPRESSION_METHOD_DEFLATE) {
          let _DataView = DataView;
          buffer = buffer.buffer;
          let dataView = new DataView(buffer.slice(arr[0].offset, arr[0].offset + arr[0].length));
          const tmpResult = tmp(5165);
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
        let uint8Array = new Uint8Array(arr.reduce((arg0, arg1) => arg0 + arg1.length, 0));
        c2 = 0;
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
          const found = arg0.find((chunkNumber) => chunkNumber.chunkNumber === closure_0);
          if (found) {
            const _Uint8Array = Uint8Array;
            uint8Array = new Uint8Array(arr2.slice(found.offset, found.offset + found.length));
            const result = uint8Array.set(uint8Array, closure_2);
            closure_2 = closure_2 + uint8Array.length;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            error = new Error("ICC chunk " + arg0 + " not found");
            throw error;
          }
          arr = arg0;
        }
        let num3 = 1;
        if (1 <= arr.length) {
          do {
            let tmp8 = _loop;
            let tmp9 = num3;
            let _loopResult = _loop(num3);
            sum = num3 + 1;
            num3 = sum;
            length = arr.length;
          } while (sum <= length);
        }
        let _DataView = DataView;
        let dataView = new DataView(uint8Array.buffer);
        return callback(dataView);
      } catch (err) {
        return {};
      }
    })(buffer, arr);
  },
};
arg5.parseTags = parseTags;
