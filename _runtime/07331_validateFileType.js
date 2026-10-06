// _runtime/07331_validateFileType.js
import _mod7328 from "metro/07328__.js";
import _mod7329 from "metro/07329__.js";
import _mod7332 from "metro/07332__.js";
import is7Z from "07333_is7Z.js";
import _mod7334 from "metro/07334__.js";
import _mod7335 from "metro/07335__.js";
import _mod7336 from "metro/07336__.js";

let hasOwnProperty, signatures;

let self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let _Object = Object;
  tmp = Object.create
    ? (arg0, __esModule, arg2, arg3) => {
        function get() {
          return __esModule[closure_1];
        }
        let closure_0 = __esModule;
        let closure_1 = arg2;
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
        let tmp3 = ownPropertyDescriptor;
        if (tmp3) {
          let tmp4;
          if ("get" in ownPropertyDescriptor) {
            tmp4 = !__esModule.__esModule;
          } else {
            tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
          }
          tmp3 = !tmp4;
        }
        if (!tmp3) {
          ownPropertyDescriptor = { enumerable: true, get };
          const obj = { enumerable: true, get };
        }
        Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
      }
    : (arg0, arg1, arg2, arg3) => {
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        arg0[tmp] = arg1[arg2];
      };
}
let closure_2 = tmp;
let tmp3 =
  (self && self.__exportStar) ||
  ((obj, arg1) => {
    for (const key10007 in obj) {
      let callResult = "default" === key10007;
      if (!callResult) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(arg1, key10007);
      }
      if (callResult) {
        continue;
      } else {
        let tmp3 = closure_2(arg1, obj, key10007);
        continue;
      }
      continue;
    }
  });
tmp3(_mod7332, exports);
tmp3(is7Z, exports);
tmp3(_mod7334, exports);
tmp3(_mod7335, exports);
tmp3(_mod7336, exports);

export const validateFileType = function validateFileType(fileChunk, arr, chunkSize) {
  let combined;
  const f94842 = (item) => {
    const parts = item.split(".");
    const str = parts.join("");
    const formatted = str.toUpperCase();
    let combined = formatted;
    if ("7Z" === formatted) {
      const _HermesInternal = HermesInternal;
      combined = "_" + formatted;
    }
    return combined;
  };
  function addSimilarTypes(items) {
    if (items.some((item) => "MP4" === item)) {
      items = ["M4V"];
    } else {
      items = items.some((item) => "AAC" === item) ? ["M4A"] : [];
    }
    return items;
  }
  let items = [];
  const items1 = [...new Set(arr.map(f94842))];
  new Set(arr.map(f94842));
  for (const item10023 of items1) {
    let _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    if (hasOwnProperty.call(_mod7329.FileTypes, item10023)) {
      arr = items.push(item10023);
      continue;
    } else {
      let _TypeError = TypeError;
      let _HermesInternal = HermesInternal;
      let str2 = "` is not supported. Please make sure that `types` list conatins only supported files";
      let str3 = "Type `";
      let self = this;
      let self2 = this;
      let typeError = new TypeError(
        "Type `" +
          item10023.toLowerCase() +
          "` is not supported. Please make sure that `types` list conatins only supported files",
      );
      throw typeError;
    }
  }
  const tmp11 = chunkSize;
  if (tmp11) {
    const _Object2 = Object;
    const hasOwnProperty2 = Object.prototype.hasOwnProperty;
    if (hasOwnProperty2.call(chunkSize, "chunkSize")) {
      chunkSize = undefined;
      if (null != chunkSize) {
        chunkSize = chunkSize.chunkSize;
      }
      let num = 0;
      if (null !== chunkSize) {
        num = 0;
        if (undefined !== chunkSize) {
          num = chunkSize;
        }
      }
      if (num <= 0) {
        const _RangeError = RangeError;
        const self3 = this;
        const self4 = this;
        const rangeError = new RangeError("chunkSize must be bigger than zero");
        throw rangeError;
      }
    }
  }
  if (!chunkSize) {
    const arr3 = addSimilarTypes(items);
    combined = items;
    if (arr3.length > 0) {
      combined = items.concat(arr3);
    }
  } else {
    let excludeSimilarTypes;
    if (null != chunkSize) {
      excludeSimilarTypes = chunkSize.excludeSimilarTypes;
    }
    combined = items;
  }
  let items2 = [];
  const items3 = [];
  for (const item10079 of combined) {
    let FileTypes = _mod7329.FileTypes;
    items2 = items2.concat(FileTypes.getSignaturesByName(item10079));
    let FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = _mod7329.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK;
    if (FILE_TYPES_REQUIRED_ADDITIONAL_CHECK.includes(item10079.toLowerCase())) {
      let push = items3.push;
      let FileTypes2 = _mod7329.FileTypes;
      let arr2 = push(FileTypes2.getInfoByName(item10079));
    }
    continue;
  }
  let num2;
  const getFileChunk = _mod7328.getFileChunk;
  if (null != chunkSize) {
    num2 = chunkSize.chunkSize;
  }
  if (!num2) {
    num2 = 64;
  }
  fileChunk = getFileChunk(fileChunk, num2);
  const FileTypes3 = _mod7329.FileTypes;
  const detectSignatureResult = FileTypes3.detectSignature(fileChunk, items2);
  if (detectSignatureResult) {
    if (items3.length > 0) {
      const found = items3.filter((signatures) => {
        signatures = signatures.signatures;
        return signatures.includes(detectSignatureResult);
      });
      if (found.length > 0) {
        const FileTypes4 = _mod7329.FileTypes;
        const result = FileTypes4.detectTypeByAdditionalCheck(fileChunk, found);
        const tmp33 = result && combined.some((item) => item.toLowerCase() === result);
        return tmp33;
      }
    }
    return true;
  } else {
    return false;
  }
};
