// === Module 11848: PollAttachmentUtils ===

// Module 11848 (PollAttachmentUtils)
import PollsConstants from "PollsConstants" /* 7468 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _downloadPollGif() {
  obj = _asyncToGenerator(async (arg0) => {
    let c3;
    let c4;
    let closure_2;
    let closure_0 = arg0;
    const _fetch = fetch;
    await fetch(closure_0);
    closure_0 = value;
    function convertBlobToBase64(value) {
      closure_0 = value;
      const fileReader = new FileReader();
      const promise = new Promise((data, onerror) => {
        fileReader.onload = () => {
          const str = fileReader.result;
          const parts = str.split(",");
          data(parts.pop());
        };
        fileReader.onerror = onerror;
        const asDataURL = fileReader.readAsDataURL(data);
      });
      return promise;
    }
    await closure_0.blob();
    return convertBlobToBase64(value);
  });
  return obj(...arguments);
};
const POLL_ATTACHMENT_FOLDER = PollsConstants.POLL_ATTACHMENT_FOLDER;
const result = size.fileFinishedImporting("modules/polls/PollAttachmentUtils.tsx");

export const getFileNameFromGifUrl = function getFileNameFromGifUrl(localCreationAnswerId, mediaURL) {
  const str = decodeURIComponent(mediaURL);
  const parts = str.split("/");
  let str2 = parts.pop();
  if (str2 == null) {
    str2 = "temp.gif";
  }
  return "" + localCreationAnswerId + "-" + str2;
};
export const getFilePathForGif = function getFilePathForGif(filename) {
  return POLL_ATTACHMENT_FOLDER + "/" + filename;
};
export const downloadPollGif = function downloadPollGif() {
  return obj(...arguments);
};