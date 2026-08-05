// discord_app/modules/media_uploads/DetectedFileSize.tsx
import asyncGeneratorStep from "asyncGeneratorStep";

function _getDetectedFileSize() {
  const self = this;
  const tmp = callback((arg0) => {
    let asyncGeneratorStep = arg0;
    let c2 = 0;
    let c1 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if (asyncGeneratorStep.size > 0) {
              c1 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = asyncGeneratorStep.size;
              return obj1;
            } else {
              let c4 = 1;
              const promise = new Promise((asyncGeneratorStep) => {
                let closure_1 = arg1;
                const fileReader = new FileReader();
                const timeout = setTimeout(() => {
                  const error = new Error("File read timeout");
                  callback2(error);
                }, 10000);
                fileReader.onload = (target) => {
                  clearTimeout(closure_2);
                  target = target.target;
                  let result;
                  if (target != null) {
                    result = target.result;
                  }
                  if (result instanceof ArrayBuffer) {
                    callback(result.byteLength);
                  } else {
                    const _Error = Error;
                    const error = new Error("Unexpected FileReader result type");
                    callback2(error);
                  }
                };
                fileReader.onerror = () => {
                  clearTimeout(closure_2);
                  const error = new Error("Could not read file");
                  callback2(error);
                };
                const asArrayBuffer = fileReader.readAsArrayBuffer(asyncGeneratorStep);
              });
              c2 = 2;
              c1 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = promise;
              return obj2;
            }
          } else if (1 === tmp6) {
            c4 = 0;
            c1 = 3;
            return { value: 0, done: true };
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c1 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            c4 = 0;
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp12) {
          let closure_3 = tmp12;
          if (tmp3 === c4) {
            c1 = tmp2;
            throw tmp12;
          } else {
            c2 = tmp;
          }
        }
      }
    })();
  });
  const _getDetectedFileSize = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("set").fileFinishedImporting("modules/media_uploads/DetectedFileSize.tsx");

export const getDetectedFileSize = function getDetectedFileSize() {
  const self = this;
  const apply = _getDetectedFileSize.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};