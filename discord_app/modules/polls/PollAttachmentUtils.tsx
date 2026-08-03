// === Module 11393: _downloadPollGif ===

// Module 11393 (_downloadPollGif)
import asyncGeneratorStep from "asyncGeneratorStep";
import { POLL_ATTACHMENT_FOLDER } from "POLL_ATTACHMENT_FOLDER";

function _downloadPollGif() {
  const self = this;
  const tmp = callback((arg0) => {
    let asyncGeneratorStep = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp4;
              let asyncGeneratorStep;
              const _fetch = fetch;
              c3 = 1;
              c4 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = fetch(asyncGeneratorStep);
              return obj1;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              asyncGeneratorStep = arg1;
              function convertBlobToBase64(arg0) {
                let asyncGeneratorStep = arg0;
                const fileReader = new FileReader();
                return new Promise((asyncGeneratorStep, onerror) => {
                  fileReader.onload = function onload() { ... };
                  fileReader.onerror = onerror;
                  const asDataURL = fileReader.readAsDataURL(asyncGeneratorStep);
                });
              }
              c3 = 2;
              c4 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = asyncGeneratorStep.blob();
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = convertBlobToBase64(arg1);
            return obj;
          }
        } catch (tmp10) {
          c4 = tmp;
          throw tmp10;
        }
      }
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