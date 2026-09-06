// === Module 9106: getFilterImage ===

// Module 9106 (getFilterImage)
import VideoBackgroundConstants from "VideoBackgroundConstants" /* 6987 */;
import size from "module_2" /* 2 */;

let closure_0 = VideoBackgroundConstants.BACKGROUND_REPLACEMENT_SIZE;
const result = size.fileFinishedImporting("modules/video_backgrounds/getFilterImage.native.tsx");

export default function getFilterImage(arg0) {
  const response = fetch(arg0);
  return response.then((ok) => {
    if (ok.ok) {
      return ok.arrayBuffer();
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Got invalid status code when fetching image: " + ok.status);
      throw error;
    }
  }).then((result) => {
    const size = { data: Buffer.from(result).toString("base64"), width: null, height: null, pixelFormat: "image" };
    ({ width: obj.width, height: obj.height } = closure_1_0);
    return size;
  });
};