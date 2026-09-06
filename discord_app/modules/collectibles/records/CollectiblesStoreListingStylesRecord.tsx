// discord_app/modules/collectibles/records/CollectiblesStoreListingStylesRecord.tsx
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import tinycolorDefault from "../../../../_runtime/07552_tinycolor.js";
import Record from "../../../lib/Record.tsx";

require = fn;
const prototype = function CollectiblesStoreListingStylesRecord(arg0) {
  const tmp = new prototype(new.target, new.target);
  ({
    backgroundColors: tmp.backgroundColors,
    buttonColors: tmp.buttonColors,
    confettiColors: tmp.confettiColors,
  } = arg0);
  return tmp;
}.prototype;
class prototype extends tmp2 {}
prototype["fromServer"] = function fromServer(arg0) {
  ({ background_colors, button_colors, confetti_colors } = arg0);
  const mapped = background_colors.map((item) => {
    const tmp = tinycolorDefault;
    return tmp(utils_ColorUtils.int2hex(item));
  });
  const mapped1 = button_colors.map((item) => {
    const tmp = tinycolorDefault;
    return tmp(utils_ColorUtils.int2hex(item));
  });
  if (typeof prototype === "function") {
    const tmp9 = new prototype(tmp, confetti_colors, tmp2, new.target);
    tmp9.backgroundColors = mapped;
    tmp9.buttonColors = mapped1;
    tmp9.confettiColors = tmp5;
    return tmp9;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tmp2 = prototype;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesStoreListingStylesRecord.tsx");

export default prototype;
