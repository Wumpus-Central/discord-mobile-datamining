// === Module 7562: CollectiblesStoreListingStylesRecord ===

// Module 7562 (CollectiblesStoreListingStylesRecord)
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import tinycolorDefault from "tinycolor" /* 7552 */;
import Record from "Record" /* 1386 */;

require = fn;
const prototype = function CollectiblesStoreListingStylesRecord(arg0) {
  const tmp = new prototype(new.target, new.target);
  ({ backgroundColors: tmp.backgroundColors, buttonColors: tmp.buttonColors, confettiColors: tmp.confettiColors } = arg0);
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
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
    const tmp9 = new prototype(tmp, confetti_colors, prototype, new.target);
    tmp9.backgroundColors = mapped;
    tmp9.buttonColors = mapped1;
    tmp9.confettiColors = tmp5;
    return tmp9;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesStoreListingStylesRecord.tsx");

export default prototype;