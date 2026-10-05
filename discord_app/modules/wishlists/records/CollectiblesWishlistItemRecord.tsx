// === Module 8434: CollectiblesWishlistItemRecord ===

// Module 8434 (CollectiblesWishlistItemRecord)
import Constants from "Constants" /* 1085 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import CollectiblesItemRecord from "CollectiblesItemRecord" /* 7057 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 7058 */;
import NameplateRecord from "NameplateRecord" /* 1978 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 7059 */;
import ProfileFrameRecord from "ProfileFrameRecord" /* 7060 */;
import SKURecord from "SKURecord" /* 5696 */;
import BaseWishlistItemRecord from "BaseWishlistItemRecord" /* 8433 */;
import size from "module_2" /* 2 */;

function createCollectiblesItemFromServerResponse(collectibles_item) {
  const type = collectibles_item.type;
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    return AvatarDecorationRecord.fromServer(collectibles_item);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
    return ProfileEffectRecord.fromServer(collectibles_item);
  } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
    return NameplateRecord.fromServer(collectibles_item);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
    return ProfileFrameRecord.fromServer(collectibles_item);
  } else {
    return null;
  }
}
const _false = CollectiblesItemRecord.transformSKUToCollectiblesItem;
const SKUProductLines = Constants.SKUProductLines;
class CollectiblesWishlistItemRecord extends BaseWishlistItemRecord {
  constructor(bundle_items) {
    const tmp2 = new CollectiblesWishlistItemRecord(bundle_items, tmp);
    tmp2.skuProductLine = SKUProductLines.COLLECTIBLES;
    if (null != bundle_items.bundle_items) {
      const items = [];
      bundle_items = bundle_items.bundle_items;
      const tmp12 = bundle_items[Symbol.iterator]();
      while (tmp12 !== undefined) {
        let tmp17 = createCollectiblesItemFromServerResponse(tmp14);
        if (null != tmp17) {
          let arr = items.push(tmp18);
        }
        continue;
      }
      if (0 === items.length) {
        const _Error3 = Error;
        const self5 = this;
        const self6 = this;
        const error = new Error("Bundle has no valid items");
        throw error;
      } else {
        tmp2.bundleItems = items;
      }
    } else if (null != bundle_items.collectibles_item) {
      const tmp7 = createCollectiblesItemFromServerResponse(bundle_items.collectibles_item);
      if (null == tmp7) {
        const _Error2 = Error;
        const self3 = this;
        const self4 = this;
        const error1 = new Error("Collectibles item not found");
        throw error1;
      } else {
        tmp2.collectiblesItem = tmp7;
      }
    } else if (!bundle_items.skipValidation) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error2 = new Error("Collectibles wishlist item missing both collectibles_item and bundle_items");
      throw error2;
    }
    return tmp2;
  }
  static fromServer(sku) {
    let fromServer;
    const obj = { sku: fromServer };
    const merged = Object.assign(sku);
    fromServer = undefined;
    if (null != sku.sku) {
      fromServer = SKURecord.createFromServer(sku.sku);
    }
    return new CollectiblesWishlistItemRecord(obj);
  }
  static fromSKU(id) {
    const tmp = closure_3(id);
    if (null == tmp) {
      return null;
    } else {
      const self = this;
      const obj = { sku_id: id.id, sku_product_line: SKUProductLines.COLLECTIBLES, sku_name: id.name, sku: id, skipValidation: true };
      const tmp7 = new CollectiblesWishlistItemRecord(obj);
      let item;
      if ("single" === tmp.type) {
        item = tmp.item;
      }
      tmp7.collectiblesItem = item;
      let items;
      if ("bundle" === tmp.type) {
        items = tmp.items;
      }
      tmp7.bundleItems = items;
      return tmp7;
    }
  }
}
const result = size.fileFinishedImporting("modules/wishlists/records/CollectiblesWishlistItemRecord.tsx");

export default CollectiblesWishlistItemRecord;
export const isCollectiblesWishlistItemRecord = function isCollectiblesWishlistItemRecord(arg0) {
  return arg0 instanceof CollectiblesWishlistItemRecord;
};