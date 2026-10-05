// === Module 7062: CollectiblesStoreListingRecord ===

// Module 7062 (CollectiblesStoreListingRecord)
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import _modDef7063 from "module_7063" /* 7063 */;
import Record from "Record" /* 1392 */;
import size from "module_2" /* 2 */;

class CollectiblesStoreListingRecord extends Record {
  constructor(styles) {
    let summary;
    const tmp2 = new CollectiblesStoreListingRecord(tmp, new.target, this);
    ({ storeListingId: tmp2.storeListingId, skuId: tmp2.skuId, name: tmp2.name, summary } = styles);
    let trimmed;
    if (summary != null) {
      trimmed = summary.trim();
    }
    tmp2.summary = trimmed;
    tmp2.styles = styles.styles;
    return tmp2;
  }
  static fromServer(styles) {
    let background_colors;
    let button_colors;
    let confetti_colors;
    let sku_id;
    let store_listing_id;
    let summary;
    let tmp5;
    styles = styles.styles;
    ({ store_listing_id, sku_id } = styles);
    const merged = Object.assign({ store_listing_id: 0, sku_id: 0, styles: 0 });
    const merged1 = Object.assign(styles, merged);
    let obj = { storeListingId: store_listing_id, skuId: sku_id, styles: tmp5 };
    const merged2 = Object.assign(merged1);
    tmp5 = styles;
    if (null != styles) {
      const obj2 = {
        backgroundColors: background_colors.map((item) => {
            const tmp = _modDef7063;
            const obj = utils_ColorUtils;
            return tmp(obj.int2hex(item));
          }),
        buttonColors: button_colors.map((item) => {
            const tmp = _modDef7063;
            const obj = utils_ColorUtils;
            return tmp(obj.int2hex(item));
          }),
        confettiColors: confetti_colors.map((item) => {
            const tmp = _modDef7063;
            const obj = utils_ColorUtils;
            return tmp(obj.int2hex(item));
          })
      };
      background_colors = styles.background_colors;
      button_colors = styles.button_colors;
      confetti_colors = styles.confetti_colors;
      tmp5 = obj2;
    }
    if (typeof CollectiblesStoreListingRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp7 = new CollectiblesStoreListingRecord(obj, merged1, merged);
      ({ storeListingId: tmp7.storeListingId, skuId: tmp7.skuId, name: tmp7.name, summary } = obj);
      let trimmed;
      if (summary != null) {
        trimmed = summary.trim();
      }
      tmp7.summary = trimmed;
      tmp7.styles = obj.styles;
      return tmp7;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesStoreListingRecord.tsx");

export default CollectiblesStoreListingRecord;