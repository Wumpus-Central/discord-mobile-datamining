// discord_app/modules/wishlists/records/CollectiblesWishlistItemRecord.tsx
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import AvatarDecorationRecord from "../../collectibles/records/AvatarDecorationRecord.tsx";
import NameplateRecord from "../../collectibles/records/NameplateRecord.tsx";
import ProfileEffectRecord from "../../collectibles/records/ProfileEffectRecord.tsx";
import ProfileFrameRecord from "../../collectibles/records/ProfileFrameRecord.tsx";
import SKURecord from "../../skus/SKURecord.tsx";
import BaseWishlistItemRecord from "BaseWishlistItemRecord.tsx";

require = fn;
function createCollectiblesItemFromServerResponse(collectibles_item) {
  const type = collectibles_item.type;
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    return AvatarDecorationRecord.fromServer(collectibles_item);
  } else if (tmp(1889).CollectiblesItemType.PROFILE_EFFECT === type) {
    return ProfileEffectRecord.fromServer(collectibles_item);
  } else if (tmp(1889).CollectiblesItemType.NAMEPLATE === type) {
    return NameplateRecord.fromServer(collectibles_item);
  } else if (tmp(1889).CollectiblesItemType.PROFILE_FRAME === type) {
    return ProfileFrameRecord.fromServer(collectibles_item);
  } else {
    return null;
  }
}
let closure_3 = fn(7546).transformSKUToCollectiblesItem;
const SKUProductLines = fn(1074).SKUProductLines;
const prototype = function CollectiblesWishlistItemRecord(bundle_items) {
  const tmp2 = new prototype(bundle_items, tmp);
  tmp2.skuProductLine = SKUProductLines.COLLECTIBLES;
  if (null != bundle_items.bundle_items) {
    const items = [];
    bundle_items = bundle_items.bundle_items;
    const tmp16 = bundle_items[Symbol.iterator]();
    while (tmp16 !== undefined) {
      let tmp21 = createCollectiblesItemFromServerResponse(tmp18);
      if (null != tmp21) {
        let arr = items.push(tmp22);
      }
      continue;
    }
    if (0 === items.length) {
      const _Error3 = Error;
      const error = new Error("Bundle has no valid items");
      throw error;
    } else {
      tmp2.bundleItems = items;
    }
  } else if (null != bundle_items.collectibles_item) {
    const tmp9 = createCollectiblesItemFromServerResponse(bundle_items.collectibles_item);
    if (null == tmp9) {
      const _Error2 = Error;
      const error1 = new Error("Collectibles item not found");
      throw error1;
    } else {
      tmp2.collectiblesItem = tmp9;
    }
  } else if (!bundle_items.skipValidation) {
    const _Error = Error;
    const error2 = new Error("Collectibles wishlist item missing both collectibles_item and bundle_items");
    throw error2;
  }
  return tmp2;
}.prototype;
class prototype extends tmp2 {}
prototype["fromServer"] = function fromServer(sku) {
  const obj = {};
  const merged = Object.assign(sku);
  let fromServer;
  if (null != sku.sku) {
    fromServer = SKURecord.createFromServer(sku.sku);
  }
  obj.sku = fromServer;
  return new prototype(obj);
};
prototype["fromSKU"] = function fromSKU(id) {
  const tmp = closure_3(id);
  if (null == tmp) {
    return null;
  } else {
    const obj = {
      sku_id: id.id,
      sku_product_line: SKUProductLines.COLLECTIBLES,
      sku_name: id.name,
      sku: id,
      skipValidation: true,
    };
    const tmp8 = new prototype(obj);
    let item;
    if ("single" === tmp.type) {
      item = tmp.item;
    }
    tmp8.collectiblesItem = item;
    let items;
    if ("bundle" === tmp.type) {
      items = tmp.items;
    }
    tmp8.bundleItems = items;
    return tmp8;
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/records/CollectiblesWishlistItemRecord.tsx");

export default prototype;
export const isCollectiblesWishlistItemRecord = function isCollectiblesWishlistItemRecord(arg0) {
  return arg0 instanceof prototype;
};
