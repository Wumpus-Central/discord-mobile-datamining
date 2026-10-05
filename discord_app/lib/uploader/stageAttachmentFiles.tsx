// discord_app/lib/uploader/stageAttachmentFiles.tsx
import Constants from "../../Constants.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_1, constants, item;

let obj = function _stageAttachmentFiles() {
  obj = _asyncToGenerator(async (arg0) => {
    let c4;
    let c5;
    let closure_2;
    let closure_3;
    let closure_0 = arg0;
    constants = closure_0.map((item) => {
      const promise = new Promise(function (fn, fn2) {
        item = fn;
        closure_1 = fn2;
        const status = item.status;
        if (closure_2_0(closure_2_1[2]).CloudUploadStatus.NOT_STARTED === status) {
          item.upload();
        } else if (closure_2_0(closure_2_1[2]).CloudUploadStatus.COMPLETED === status) {
          fn("complete");
        } else if (closure_2_0(closure_2_1[2]).CloudUploadStatus.ERROR === status) {
          if (closure_1_1) {
            if (item.error !== constants.ENTITY_TOO_LARGE) {
              item.upload();
            }
          }
          const _Error2 = Error;
          const self3 = this;
          const self4 = this;
          let error = new Error("File failed to upload");
          fn2(error);
        } else if (closure_2_0(closure_2_1[2]).CloudUploadStatus.CANCELED === status) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error1 = new Error("Upload is canceled");
          fn2(error1);
        } else if (closure_2_0(closure_2_1[2]).CloudUploadStatus.REMOVED_FROM_MSG_DRAFT === status) {
          const _Error3 = Error;
          const self5 = this;
          const self6 = this;
          const error2 = new Error("Upload is removed from draft");
          fn2(error2);
        }
        item.on("complete", () => {
          fn("complete");
        });
        item.on("error", () => {
          const error = new Error("File " + item.id + " failed to upload");
          fn2(error);
        });
        item.on("progress", (arg0, arg1) => {
          if (closure_1_2 != null) {
            tmp(arg0, arg1);
          }
        });
      });
      return promise;
    });
    await Promise.all(constants);
    await "IconComponent";
    constants = tmp;
    return "Set";
  });
  return obj(...arguments);
};
const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("lib/uploader/stageAttachmentFiles.tsx");

export default function stageAttachmentFiles() {
  return obj(...arguments);
}
