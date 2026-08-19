// === Module 7586: _stageAttachmentFiles ===

// Module 7586 (_stageAttachmentFiles)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { AbortCodes } from "ME" /* 676 */;

const require = fn;
function _stageAttachmentFiles() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp2;
              let flag;
              closure_2 = undefined;
              if (flag === undefined) {
                flag = false;
              }
              closure_3 = undefined;
              c4 = 1;
              c5 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              closure_3 = closure_0.map((item, index) => {
                closure_0 = item;
                return new Promise((fn, fn2) => {
                  item = fn;
                  closure_1 = fn2;
                  const status = item.status;
                  if (item(flag[2]).CloudUploadStatus.NOT_STARTED === status) {
                    obj.upload();
                  } else if (tmp(flag[2]).CloudUploadStatus.COMPLETED === status) {
                    fn("complete");
                  } else if (tmp(flag[2]).CloudUploadStatus.ERROR === status) {
                    if (closure_1_1) {
                      if (obj.error !== constants.ENTITY_TOO_LARGE) {
                        obj.upload();
                      }
                    }
                    const _Error2 = Error;
                    error = new Error("File failed to upload");
                    fn2(error);
                  } else if (tmp(flag[2]).CloudUploadStatus.CANCELED === status) {
                    const _Error = Error;
                    const error1 = new Error("Upload is canceled");
                    fn2(error1);
                  } else if (tmp(flag[2]).CloudUploadStatus.REMOVED_FROM_MSG_DRAFT === status) {
                    const _Error3 = Error;
                    const error2 = new Error("Upload is removed from draft");
                    fn2(error2);
                  }
                  item.on("complete", () => { ... });
                  item.on("error", () => { ... });
                  item.on("progress", () => { ... });
                });
              });
              c4 = 2;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = Promise.all(closure_3);
              return obj2;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c5 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp12) {
          c5 = tmp;
          throw tmp12;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_4 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("obj132").fileFinishedImporting("lib/uploader/stageAttachmentFiles.tsx");

export default function stageAttachmentFiles() {
  const self = this;
  const apply = _stageAttachmentFiles.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};