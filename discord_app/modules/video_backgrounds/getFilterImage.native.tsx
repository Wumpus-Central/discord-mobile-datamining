// discord_app/modules/video_backgrounds/getFilterImage.native.tsx
import VideoBackgroundConstants from "VideoBackgroundConstants.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

let closure_0 = VideoBackgroundConstants.BACKGROUND_REPLACEMENT_SIZE;
let size = size_mod;
const result = size.fileFinishedImporting("modules/video_backgrounds/getFilterImage.native.tsx");

export default function getFilterImage(arg0) {
  const response = fetch(arg0);
  const nextPromise = response.then(function (ok) {
    if (ok.ok) {
      return ok.arrayBuffer();
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Got invalid status code when fetching image: " + ok.status);
      throw error;
    }
  });
  return nextPromise.then((result) => {
    let str;
    size = { data: str.toString("base64"), width: null, height: null, pixelFormat: "image" };
    ({ width: obj.width, height: obj.height } = closure_1_0);
    str = Buffer.from(result);
    return size;
  });
}
