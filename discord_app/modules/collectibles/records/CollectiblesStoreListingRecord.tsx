// discord_app/modules/collectibles/records/CollectiblesStoreListingRecord.tsx
import toJSDefault from "../../../lib/Record.tsx";

const require = fn;
toJSDefault;
const prototype = function CollectiblesStoreListingRecord(styles) {
  const tmp2 = new prototype(tmp, new.target, new.target);
  // ThrowIfThisInitialized (0x7c)
  ({ storeListingId: tmp2.storeListingId, skuId: tmp2.skuId, name: tmp2.name, summary } = styles);
  let trimmed;
  if (summary != null) {
    trimmed = summary.trim();
  }
  tmp2.summary = trimmed;
  tmp2.styles = styles.styles;
  return tmp2;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(styles) {
  styles = styles.styles;
  ({ store_listing_id, sku_id } = styles);
  let obj = Object.create(null);
  const merged = Object.assign(styles, obj);
  obj = {};
  let str = obj;
  const merged1 = Object.assign(merged);
  obj.storeListingId = store_listing_id;
  obj.skuId = sku_id;
  let tmp5 = styles;
  if (null != styles) {
    obj = { backgroundColors: null, buttonColors: null, confettiColors: null };
    const background_colors = styles.background_colors;
    obj[0] = background_colors.map((item, index) => {
      const tmp = callback2(5311);
      return tmp(callback(688).int2hex(item));
    });
    const button_colors = styles.button_colors;
    obj[1] = button_colors.map((item, index) => {
      const tmp = callback2(5311);
      return tmp(callback(688).int2hex(item));
    });
    const confetti_colors = styles.confetti_colors;
    obj[2] = confetti_colors.map((item, index) => {
      const tmp = callback2(5311);
      return tmp(callback(688).int2hex(item));
    });
    tmp5 = obj;
  }
  obj.styles = tmp5;
  if (typeof prototype !== "function") {
    str = "Trying to call a non-function";
    HermesBuiltin.throwTypeError();
  }
  const tmp6 = new prototype(str, merged, obj);
  // ThrowIfThisInitialized (0x7c)
  ({ storeListingId: tmp6.storeListingId, skuId: tmp6.skuId, name: tmp6.name, summary } = obj);
  let trimmed;
  if (summary != null) {
    trimmed = summary.trim();
  }
  tmp6.summary = trimmed;
  tmp6.styles = obj.styles;
  return tmp6;
};
const result = require("obj132").fileFinishedImporting("modules/collectibles/records/CollectiblesStoreListingRecord.tsx");

export default prototype;