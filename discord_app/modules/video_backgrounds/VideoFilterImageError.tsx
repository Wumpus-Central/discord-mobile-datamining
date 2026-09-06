// === Module 9099: VideoFilterImageError ===

// Module 9099 (VideoFilterImageError)
import util from "util" /* 1114 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import size from "module_2" /* 2 */;

const constants = { ASSET_SIZE: "BINARY_TYPE_MAX_SIZE" };
const constants2 = { ASSET: "asset" };
const V8APIError = HTTPUtils.V8APIError;
const prototype = function VideoFilterImageError(arg0, arg1) {
  const intl = util.intl;
  tmp3 = new tmp3(arg0, arg1, intl.string(util.t.Mt8yDB), new.target, tmp3, tmp2, intl, require, new.target, tmp);
  const fieldErrors = tmp3.getFieldErrors(constants2.ASSET);
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
    const intl2 = util.intl;
    tmp3.message = intl2.string(util.t.mrlScX);
  }
  return tmp3;
}.prototype;
class prototype extends V8APIError {
}
const result = size.fileFinishedImporting("modules/video_backgrounds/VideoFilterImageError.tsx");

export default prototype;