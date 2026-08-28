// === Module 7533: _stageAttachmentFiles ===

// Module 7533 (_stageAttachmentFiles)
import closure_2 from "asyncGeneratorStep" /* 5 */;
import { AbortCodes } from "ME" /* 676 */;

const require = arg1;
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
          return { value: "HermesInternal", done: null };
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
              closure_3 = closure_0.map((arg0) => {
                closure_0 = arg0;
                return new Promise((arg0, arg1) => {
                  const lib = arg0;
                  closure_1 = arg1;
                  const status = lib.status;
                  if (lib(flag[2]).CloudUploadStatus.NOT_STARTED === status) {
                    obj.upload();
                  } else if (tmp(tmp2[2]).CloudUploadStatus.COMPLETED === status) {
                    arg0("complete");
                  } else if (tmp(tmp2[2]).CloudUploadStatus.ERROR === status) {
                    if (closure_1_1) {
                      if (obj.error !== constants.ENTITY_TOO_LARGE) {
                        obj.upload();
                      }
                    }
                    const _Error2 = Error;
                    error = new Error("File failed to upload");
                    arg1(error);
                  } else if (tmp(tmp2[2]).CloudUploadStatus.CANCELED === status) {
                    const _Error = Error;
                    const error1 = new Error("Upload is canceled");
                    arg1(error1);
                  } else if (tmp(tmp2[2]).CloudUploadStatus.REMOVED_FROM_MSG_DRAFT === status) {
                    const _Error3 = Error;
                    const error2 = new Error("Upload is removed from draft");
                    arg1(error2);
                  }
                  lib.on("complete", () => { ... });
                  lib.on("error", () => { ... });
                  lib.on("progress", () => { ... });
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
            return { value: "HermesInternal", done: null };
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
const result = require("set").fileFinishedImporting("lib/uploader/stageAttachmentFiles.tsx");

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