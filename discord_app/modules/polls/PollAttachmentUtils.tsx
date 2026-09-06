// discord_app/modules/polls/PollAttachmentUtils.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

let closure_2 = async function _downloadPollGif() {
  const _fetch = fetch;
  closure_130_0 = await fetch(closure_0);
  function convertBlobToBase64(value) {
    closure_0 = value;
    const fileReader = new FileReader();
    return new Promise((data, onerror) => {
      fileReader.onload = () => {
        const parts = fileReader.result.split(",");
        data(parts.pop());
      };
      fileReader.onerror = onerror;
      const asDataURL = fileReader.readAsDataURL(data);
    });
  }
  await closure_130_0.blob();
  return convertBlobToBase64(arg1);
};
const POLL_ATTACHMENT_FOLDER = fn(7829).POLL_ATTACHMENT_FOLDER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/PollAttachmentUtils.tsx");

export const getFileNameFromGifUrl = function getFileNameFromGifUrl(localCreationAnswerId, mediaURL) {
  const parts = decodeURIComponent(mediaURL).split("/");
  let str2 = parts.pop();
  if (str2 == null) {
    str2 = "temp.gif";
  }
  return "" + localCreationAnswerId + "-" + str2;
};
export const getFilePathForGif = function getFilePathForGif(arg0) {
  return POLL_ATTACHMENT_FOLDER + "/" + arg0;
};
export const downloadPollGif = function downloadPollGif() {
  const self = this;
  const apply = closure_2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
