// === Module 11380: _downloadPollGif ===

// Module 11380 (_downloadPollGif)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { POLL_ATTACHMENT_FOLDER } from "POLL_ATTACHMENT_FOLDER" /* 7576 */;

function _downloadPollGif() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      const _fetch = fetch;
      closure_0 = yield fetch(closure_0);
      function convertBlobToBase64(arg0) {
        closure_0 = arg0;
        const fileReader = new FileReader();
        return new Promise((closure_0, onerror) => {
          fileReader.onload = function onload() { ... };
          fileReader.onerror = onerror;
          const asDataURL = fileReader.readAsDataURL(closure_0);
        });
      }
      yield closure_0.blob();
      return convertBlobToBase64(arg1);
    })();
  });
  closure_2 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("obj132").fileFinishedImporting("modules/polls/PollAttachmentUtils.tsx");

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