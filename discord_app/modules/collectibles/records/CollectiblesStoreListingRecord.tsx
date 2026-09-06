// discord_app/modules/collectibles/records/CollectiblesStoreListingRecord.tsx
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import tinycolorDefault from "../../../../_runtime/07552_tinycolor.js";
import Record from "../../../lib/Record.tsx";

require = fn;
const prototype = function CollectiblesStoreListingRecord(styles) {
  const tmp2 = new prototype(tmp, new.target, new.target);
  ({ storeListingId: tmp2.storeListingId, skuId: tmp2.skuId, name: tmp2.name, summary } = styles);
  let trimmed;
  if (summary != null) {
    trimmed = summary.trim();
  }
  tmp2.summary = trimmed;
  tmp2.styles = styles.styles;
  return tmp2;
}.prototype;
class prototype extends tmp2 {}
prototype["fromServer"] = function fromServer(styles) {
  styles = styles.styles;
  ({ store_listing_id, sku_id } = styles);
  const merged = Object.assign({ store_listing_id: 0, sku_id: 0, styles: 0 });
  const merged1 = Object.assign(styles, merged);
  let obj = {};
  const merged2 = Object.assign(merged1);
  obj.storeListingId = store_listing_id;
  obj.skuId = sku_id;
  let tmp5 = styles;
  if (null != styles) {
    obj = { backgroundColors: null, buttonColors: null, confettiColors: null };
    const background_colors = styles.background_colors;
    obj.backgroundColors = background_colors.map((item) => {
      const tmp = tinycolorDefault;
      return tmp(utils_ColorUtils.int2hex(item));
    });
    const button_colors = styles.button_colors;
    obj.buttonColors = button_colors.map((item) => {
      const tmp = tinycolorDefault;
      return tmp(utils_ColorUtils.int2hex(item));
    });
    const confetti_colors = styles.confetti_colors;
    obj.confettiColors = confetti_colors.map((item) => {
      const tmp = tinycolorDefault;
      return tmp(utils_ColorUtils.int2hex(item));
    });
    tmp5 = obj;
  }
  obj.styles = tmp5;
  if (typeof prototype === "function") {
    const tmp9 = new prototype(obj, merged1, merged);
    ({ storeListingId: tmp9.storeListingId, skuId: tmp9.skuId, name: tmp9.name, summary } = obj);
    let trimmed;
    if (summary != null) {
      trimmed = summary.trim();
    }
    tmp9.summary = trimmed;
    tmp9.styles = obj.styles;
    return tmp9;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesStoreListingRecord.tsx");

export default prototype;
