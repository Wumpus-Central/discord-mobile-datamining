// === Module 5348: fromServer ===

// Module 5348 (fromServer)
import set from "set" /* 2 */;
import ShopBlockType from "ShopBlockType" /* 5339 */;

let prototype;
prototype = function ShelfBlockRecord(show_button) {
  const obj = Object.create(new.target.prototype);
  obj.type = ShopBlockType.ShopBlockType.SHELF;
  ({ name: tmp.name, ranked_sku_ids: tmp.rankedSkuIds, category_sku_id } = show_button);
  if (category_sku_id == null) {
    category_sku_id = null;
  }
  obj.categorySkuId = category_sku_id;
  obj.showButton = false !== show_button.show_button;
  let button_text = show_button.button_text;
  if (button_text == null) {
    button_text = null;
  }
  obj.buttonText = button_text;
  let title_color = show_button.title_color;
  if (title_color == null) {
    title_color = null;
  }
  obj.titleColor = title_color;
  let prop = show_button.desktop_background_image;
  if (prop == null) {
    prop = null;
  }
  obj.desktopBackgroundImage = prop;
  let prop1 = show_button.mobile_background_image;
  if (prop1 == null) {
    prop1 = null;
  }
  obj.mobileBackgroundImage = prop1;
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(show_button) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = ShopBlockType.ShopBlockType.SHELF;
  ({ name: tmp2.name, ranked_sku_ids: tmp2.rankedSkuIds, category_sku_id } = show_button);
  if (category_sku_id == null) {
    category_sku_id = null;
  }
  obj.categorySkuId = category_sku_id;
  obj.showButton = false !== show_button.show_button;
  let button_text = show_button.button_text;
  if (button_text == null) {
    button_text = null;
  }
  obj.buttonText = button_text;
  let title_color = show_button.title_color;
  if (title_color == null) {
    title_color = null;
  }
  obj.titleColor = title_color;
  let prop = show_button.desktop_background_image;
  if (prop == null) {
    prop = null;
  }
  obj.desktopBackgroundImage = prop;
  let prop1 = show_button.mobile_background_image;
  if (prop1 == null) {
    prop1 = null;
  }
  obj.mobileBackgroundImage = prop1;
  return obj;
};
const result = set.fileFinishedImporting("modules/collectibles/records/ShelfBlockRecord.tsx");

export const ShelfBlockRecord = prototype;