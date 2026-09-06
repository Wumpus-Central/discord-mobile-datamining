// discord_app/modules/media_uploads/DetectedFileSize.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

let closure_1 = async function _getDetectedFileSize(arg0, value) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else if (asyncGeneratorStep.size > 0) {
          c1 = 3;
          const obj1 = { value: asyncGeneratorStep.size, done: true };
          return obj1;
        } else {
          c4 = 1;
          const promise = new Promise((response, arg1) => {
            closure_0 = response;
            closure_1 = arg1;
            const fileReader = new FileReader();
            const timeout = setTimeout(() => {
              const error = new Error("File read timeout");
              closure_1(error);
            }, 10000);
            fileReader.onload = (target) => {
              clearTimeout(closure_2);
              target = target.target;
              let result;
              if (target != null) {
                result = target.result;
              }
              if (result instanceof ArrayBuffer) {
                closure_0(result.byteLength);
              } else {
                const _Error = Error;
                const error = new Error("Unexpected FileReader result type");
                closure_1(error);
              }
            };
            fileReader.onerror = () => {
              clearTimeout(closure_2);
              const error = new Error("Could not read file");
              closure_1(error);
            };
            const asArrayBuffer = fileReader.readAsArrayBuffer(closure_0);
          });
          c2 = 2;
          c1 = 1;
          const obj2 = { value: promise, done: false };
          return obj2;
        }
      } else if (1 === tmp6) {
        c4 = 0;
        c1 = 3;
        return { value: 0, done: true };
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c1 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        c4 = 0;
        c1 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp12) {
      closure_3 = tmp12;
      if (tmp3 === c4) {
        c1 = tmp2;
        throw tmp12;
      } else {
        c2 = tmp;
      }
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_uploads/DetectedFileSize.tsx");

export const getDetectedFileSize = function getDetectedFileSize() {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
