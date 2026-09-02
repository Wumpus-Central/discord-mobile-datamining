// === Module 9819: getFilterImage ===

// Module 9819 (getFilterImage)
import set from "set" /* 2 */;
import VideoFilterType from "VideoFilterType" /* 7768 */;

let closure_0 = VideoFilterType.BACKGROUND_REPLACEMENT_SIZE;
const result = set.fileFinishedImporting("modules/video_backgrounds/getFilterImage.native.tsx");

export default function getFilterImage(arg0) {
  const response = fetch(arg0);
  return response.then((ok) => {
    if (ok.ok) {
      return ok.arrayBuffer();
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      error = new Error("Got invalid status code when fetching image: " + ok.status);
      throw error;
    }
  }).then((arg0) => {
    const obj = { data: Buffer.from(arg0).toString("base64"), width: null, height: null, pixelFormat: "image" };
    ({ width: obj[1], height: obj[2] } = closure_0);
    return obj;
  });
};