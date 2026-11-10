// discord_app/modules/wishlists/records/BaseWishlistItemRecord.tsx
import Record from "../../../lib/Record.tsx";
import SKURecord from "../../skus/SKURecord.tsx";

const prototype = function BaseWishlistItemRecord(shop_expires_at) {
  const tmp3 = new prototype(tmp2, tmp, new.target);
  ({
    sku_id: tmp3.skuId,
    sku_product_line: tmp3.skuProductLine,
    sku_name: tmp3.skuName,
    is_owned: tmp3.isOwned,
    gifter_user_id: tmp3.gifterUserId,
    sku: tmp3.sku,
    added_at: tmp3.addedAt,
  } = shop_expires_at);
  let date;
  if (null != shop_expires_at.shop_expires_at) {
    const _Date = Date;
    date = new Date(shop_expires_at.shop_expires_at);
  }
  tmp3.shopExpiresAt = date;
  return tmp3;
}.prototype;
class prototype extends tmp2 {}
prototype["fromServer"] = function fromServer(arg0) {
  ({ sku_id, sku } = arg0);
  ({ sku_product_line, sku_name, is_owned, gifter_user_id } = arg0);
  const merged = Object.assign({ sku_id: 0, sku_product_line: 0, sku_name: 0, is_owned: 0, gifter_user_id: 0, sku: 0 });
  const merged1 = Object.assign(arg0, merged);
  const obj = { sku_id, sku_product_line, sku_name, is_owned, gifter_user_id };
  let fromServer;
  const merged2 = Object.assign(merged1);
  if (null != sku) {
    fromServer = SKURecord.createFromServer(sku);
  }
  obj.sku = fromServer;
  if (typeof prototype === "function") {
    const tmp10 = new prototype(obj, merged1, merged, merged2, sku_id);
    ({
      sku_id: tmp10.skuId,
      sku_product_line: tmp10.skuProductLine,
      sku_name: tmp10.skuName,
      is_owned: tmp10.isOwned,
      gifter_user_id: tmp10.gifterUserId,
      sku: tmp10.sku,
      added_at: tmp10.addedAt,
    } = obj);
    let date;
    if (null != obj.shop_expires_at) {
      const _Date = Date;
      date = new Date(obj.shop_expires_at);
    }
    tmp10.shopExpiresAt = date;
    return tmp10;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/records/BaseWishlistItemRecord.tsx");

export default prototype;
