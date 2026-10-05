// discord_app/modules/wishlists/records/SKUWishlistItemRecord.tsx
import SKURecord from "../../skus/SKURecord.tsx";
import BaseWishlistItemRecord from "BaseWishlistItemRecord.tsx";
import size from "../../../../_runtime/metro/00002__.js";

class SKUWishlistItemRecord extends BaseWishlistItemRecord {
  constructor(sku) {
    const tmp = new SKUWishlistItemRecord(sku, new.target);
    tmp.skuProductLine = sku.sku.productLine;
    tmp.sku = sku.sku;
    return tmp;
  }
  static fromServer(sku) {
    const fromServer = SKURecord.createFromServer(sku.sku);
    if (null == fromServer) {
      const _Error = Error;
      const self4 = this;
      const self5 = this;
      const error = new Error("SKU not found");
      throw error;
    } else {
      const obj = { sku: fromServer };
      const self = this;
      if (typeof SKUWishlistItemRecord === "function") {
        const self2 = this;
        const self3 = this;
        const tmp8 = new SKUWishlistItemRecord(obj, sku, tmp5);
        tmp8.skuProductLine = obj.sku.productLine;
        tmp8.sku = obj.sku;
        return tmp8;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  static fromSKU(sku) {
    let name;
    let tmp = null;
    if (null != sku) {
      const obj = { sku_id: null, sku_product_line: null, sku_name: name, sku };
      ({ id: obj.sku_id, productLine: obj.sku_product_line, name } = sku);
      const self = this;
      if (typeof SKUWishlistItemRecord === "function") {
        const self2 = this;
        const self3 = this;
        const tmp5 = new SKUWishlistItemRecord(obj, name, tmp2, this);
        tmp5.skuProductLine = obj.sku.productLine;
        tmp5.sku = obj.sku;
        tmp = tmp5;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return tmp;
  }
}
const result = size.fileFinishedImporting("modules/wishlists/records/SKUWishlistItemRecord.tsx");

export default SKUWishlistItemRecord;
export const isSKUWishlistItemRecord = function isSKUWishlistItemRecord(sku) {
  return sku instanceof SKUWishlistItemRecord;
};
