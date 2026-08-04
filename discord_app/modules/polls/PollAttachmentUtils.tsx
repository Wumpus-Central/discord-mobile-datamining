import asyncGeneratorStep from "asyncGeneratorStep";
import { POLL_ATTACHMENT_FOLDER } from "POLL_ATTACHMENT_FOLDER";

function _downloadPollGif() {
  const self = this;
  const tmp = callback((arg0) => {
    let asyncGeneratorStep = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      const _fetch = fetch;
      asyncGeneratorStep = yield fetch(asyncGeneratorStep);
      function convertBlobToBase64(arg0) {
        let asyncGeneratorStep = arg0;
        const fileReader = new FileReader();
        return new Promise((asyncGeneratorStep, onerror) => {
          fileReader.onload = function onload() { ... };
          fileReader.onerror = onerror;
          const asDataURL = fileReader.readAsDataURL(asyncGeneratorStep);
        });
      }
      yield asyncGeneratorStep.blob();
      return convertBlobToBase64(arg1);
    })();
  });
  const _downloadPollGif = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/polls/PollAttachmentUtils.tsx");

export const getFileNameFromGifUrl = function getFileNameFromGifUrl(closure_1, closure_2) {
  const parts = decodeURIComponent(closure_2).split("/");
  let str2 = parts.pop();
  if (str2 == null) {
    str2 = "temp.gif";
  }
  return "" + closure_1 + "-" + str2;
};
export const getFilePathForGif = function getFilePathForGif(closure_2) {
  return POLL_ATTACHMENT_FOLDER + "/" + closure_2;
};
export const downloadPollGif = function downloadPollGif(closure_2) {
  const self = this;
  const apply = _downloadPollGif.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};