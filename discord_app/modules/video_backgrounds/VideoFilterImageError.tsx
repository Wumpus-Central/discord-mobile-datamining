// discord_app/modules/video_backgrounds/VideoFilterImageError.tsx
import { V8APIError } from "sendRequest";

let closure_2 = { ASSET_SIZE: "BINARY_TYPE_MAX_SIZE" };
let closure_3 = { ASSET: "asset" };
const prototype = function VideoFilterImageError(arg0, arg1) {
  const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  tmp3 = new tmp3(arg0, arg1, intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.Mt8yDB), new.target, tmp3, tmp2, intl, require, new.target, tmp);
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
    const intl2 = tmp4(1236).intl;
    tmp3.message = intl2.string(tmp4(1236).t.mrlScX);
  }
  return tmp3;
}.prototype;
class prototype extends V8APIError {
}
const result = require("set").fileFinishedImporting("modules/video_backgrounds/VideoFilterImageError.tsx");

export default prototype;