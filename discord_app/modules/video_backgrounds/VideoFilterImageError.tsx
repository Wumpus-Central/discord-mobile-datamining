// discord_app/modules/video_backgrounds/VideoFilterImageError.tsx
import util from "../../intl/index.native.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const constants = { ASSET_SIZE: "BINARY_TYPE_MAX_SIZE" };
const constants2 = { ASSET: "asset" };
const V8APIError = HTTPUtils.V8APIError;
const prototype = function VideoFilterImageError(arg0, arg1) {
  const intl = util.intl;
  const tmp32 = new tmp3(
    arg0,
    arg1,
    intl.string(util.t.Mt8yDB),
    new.target,
    tmp3,
    tmp2,
    intl,
    require,
    new.target,
    tmp,
  );
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
    const intl2 = util.intl;
    tmp32.message = intl2.string(util.t.mrlScX);
  }
  return tmp32;
}.prototype;
class prototype extends V8APIError {}
const result = size.fileFinishedImporting("modules/video_backgrounds/VideoFilterImageError.tsx");

export default prototype;
