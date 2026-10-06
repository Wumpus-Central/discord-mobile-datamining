// === Module 8088: VideoFilterImageError ===

// Module 8088 (VideoFilterImageError)
import intl3 from "intl" /* 1126 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import size from "module_2" /* 2 */;

const React2 = { ASSET_SIZE: "BINARY_TYPE_MAX_SIZE" };
const _false = { ASSET: "asset" };
const V8APIError = HTTPUtils.V8APIError;
class VideoFilterImageError extends V8APIError {
  constructor(arg0, arg1) {
    const intl = intl3.intl;
    const tmp32 = new tmp3(arg0, arg1, intl.string(intl3.t.Mt8yDB), new.target, tmp3, tmp2, intl, require, this, tmp);
    const fieldErrors = tmp32.getFieldErrors(constants2.ASSET);
    let tmp7 = null != fieldErrors;
    if (tmp7) {
      const first = fieldErrors[0];
      let code;
      if (first != null) {
        code = first.code;
      }
      tmp7 = code === constants.ASSET_SIZE;
    }
    if (tmp7) {
      const intl2 = intl3.intl;
      tmp32.message = intl2.string(intl3.t.mrlScX);
    }
    return tmp32;
  }
}
const result = size.fileFinishedImporting("modules/video_backgrounds/VideoFilterImageError.tsx");

export default VideoFilterImageError;