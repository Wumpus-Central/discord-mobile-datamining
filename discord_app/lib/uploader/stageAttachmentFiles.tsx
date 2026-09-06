// discord_app/lib/uploader/stageAttachmentFiles.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_4 = async function _stageAttachmentFiles() {
  closure_131_3 = closure_131_0.map(
    (item) =>
      new Promise((fn, fn2) => {
        item = fn;
        closure_1 = fn2;
        const status = item.status;
        if (closure_2_0(closure_2_1[2]).CloudUploadStatus.NOT_STARTED === status) {
          obj.upload();
        } else if (tmp(tmp2[2]).CloudUploadStatus.COMPLETED === status) {
          fn("complete");
        } else if (tmp(tmp2[2]).CloudUploadStatus.ERROR === status) {
          if (closure_1_1) {
            if (obj.error !== constants.ENTITY_TOO_LARGE) {
              obj.upload();
            }
          }
          const _Error2 = Error;
          let error = new Error("File failed to upload");
          fn2(error);
        } else if (tmp(tmp2[2]).CloudUploadStatus.CANCELED === status) {
          const _Error = Error;
          const error1 = new Error("Upload is canceled");
          fn2(error1);
        } else if (tmp(tmp2[2]).CloudUploadStatus.REMOVED_FROM_MSG_DRAFT === status) {
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
      }),
  );
  await Promise.all(closure_131_3);
  await "HermesInternal";
  constants = tmp2;
  closure_131_0 = closure_0;
  let flag = closure_1;
  if (closure_1 === undefined) {
    flag = false;
  }
  closure_131_1 = flag;
  closure_131_2 = closure_2;
  return "PX_16";
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
}
