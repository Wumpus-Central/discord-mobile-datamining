// === Module 7914: stageAttachmentFiles ===

// Module 7914 (stageAttachmentFiles)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_4 = async function _stageAttachmentFiles(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          constants = tmp2;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          let flag = dependencyMap;
          if (dependencyMap === undefined) {
            flag = false;
          }
          closure_131_1 = flag;
          closure_131_2 = closure_2;
          closure_131_3 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: null };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          closure_131_3 = closure_131_0.map((item) => new Promise((fn, fn2) => {
            item = fn;
            closure_1 = fn2;
            const status = item.status;
            if (closure_2_0(dependencyMap[2]).CloudUploadStatus.NOT_STARTED === status) {
              obj.upload();
            } else if (closure_2_0(dependencyMap[2]).CloudUploadStatus.COMPLETED === status) {
              fn("complete");
            } else if (closure_2_0(dependencyMap[2]).CloudUploadStatus.ERROR === status) {
              if (closure_1_1) {
                if (obj.error !== constants.ENTITY_TOO_LARGE) {
                  obj.upload();
                }
              }
              const _Error2 = Error;
              let error = new Error("File failed to upload");
              fn2(error);
            } else if (closure_2_0(dependencyMap[2]).CloudUploadStatus.CANCELED === status) {
              const _Error = Error;
              const error1 = new Error("Upload is canceled");
              fn2(error1);
            } else if (closure_2_0(dependencyMap[2]).CloudUploadStatus.REMOVED_FROM_MSG_DRAFT === status) {
              const _Error3 = Error;
              const error2 = new Error("Upload is removed from draft");
              fn2(error2);
            }
            item.on("complete", () => {
              closure_0("complete");
            });
            item.on("error", () => {
              const error = new Error("File " + closure_0.id + " failed to upload");
              closure_1(error);
            });
            item.on("progress", (arg0, arg1) => {
              if (closure_1_2 != null) {
                tmp(arg0, arg1);
              }
            });
          }));
          c4 = 2;
          c5 = 1;
          const obj2 = { value: Promise.all(closure_131_3), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        obj = { value, done: true };
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
};
const AbortCodes = fn(1074).AbortCodes;
const size = fn(2);
const result = size.fileFinishedImporting("lib/uploader/stageAttachmentFiles.tsx");

export default function stageAttachmentFiles() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};