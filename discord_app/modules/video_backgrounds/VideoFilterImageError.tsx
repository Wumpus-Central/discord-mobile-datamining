// === Module 9099: prototype ===

// Module 9099 (prototype)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import sendRequest from "sendRequest" /* 1272 */;

let closure_2 = { ASSET_SIZE: "BINARY_TYPE_MAX_SIZE" };
let closure_3 = { ASSET: "asset" };
const V8APIError = sendRequest.V8APIError;
const prototype = function VideoFilterImageError(arg0, arg1) {
  const intl = getSystemLocale.intl;
  tmp3 = new tmp3(arg0, arg1, intl.string(getSystemLocale.t.Mt8yDB), new.target, tmp3, tmp2, intl, require, new.target, tmp);
  // ThrowIfThisInitialized (0x7c)
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
    const intl2 = tmp4(1114).intl;
    tmp3.message = intl2.string(tmp4(1114).t.mrlScX);
  }
  return tmp3;
}.prototype;
class prototype extends V8APIError {
}
const result = set.fileFinishedImporting("modules/video_backgrounds/VideoFilterImageError.tsx");

export default prototype;