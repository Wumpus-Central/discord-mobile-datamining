// === Module 10398: createCollectiblesItemFromServerResponse ===

// Module 10398 (createCollectiblesItemFromServerResponse)
import CollectiblesItemType from "CollectiblesItemType" /* 1951 */;
import fromServerDefault from "fromServer" /* 10397 */;
import closure_2 from "fromServer" /* 7239 */;
import { transformSKUToCollectiblesItem as closure_3 } from "createCollectiblesItemsFromServerResponse" /* 7238 */;
import closure_4 from "fromServer" /* 1949 */;
import closure_5 from "fromServer" /* 7240 */;
import closure_6 from "fromServer" /* 7241 */;
import closure_7 from "createFromServer" /* 4489 */;
import { SKUProductLines } from "ME" /* 676 */;

require = arg1;
function createCollectiblesItemFromServerResponse(collectibles_item) {
  const type = collectibles_item.type;
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    return closure_2.fromServer(collectibles_item);
  } else if (tmp(1951).CollectiblesItemType.PROFILE_EFFECT === type) {
    return closure_5.fromServer(collectibles_item);
  } else if (tmp(1951).CollectiblesItemType.NAMEPLATE === type) {
    return closure_4.fromServer(collectibles_item);
  } else if (tmp(1951).CollectiblesItemType.PROFILE_FRAME === type) {
    return closure_6.fromServer(collectibles_item);
  } else {
    return null;
  }
}
fromServerDefault;
let prototype;
prototype = function CollectiblesWishlistItemRecord(bundle_items) {
  const tmp2 = new prototype(bundle_items, tmp);
  // ThrowIfThisInitialized (0x7c)
  tmp2.skuProductLine = SKUProductLines.COLLECTIBLES;
  if (null != bundle_items.bundle_items) {
    const items = [];
    bundle_items = bundle_items.bundle_items;
    const tmp16 = bundle_items[Symbol.iterator]();
    while (tmp16 !== undefined) {
      let tmp20 = createCollectiblesItemFromServerResponse;
      let tmp21 = createCollectiblesItemFromServerResponse(tmp18);
      if (null != tmp21) {
        let tmp23 = tmp21;
        let arr = items.push(tmp22);
      }
      continue;
    }
    if (0 === items.length) {
      const _Error3 = Error;
      error = new Error("Bundle has no valid items");
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
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(sku) {
  const obj = {};
  const merged = Object.assign(sku);
  let fromServer;
  if (null != sku.sku) {
    fromServer = closure_7.createFromServer(sku.sku);
  }
  obj.sku = fromServer;
  return new prototype(obj);
};
prototype["fromSKU"] = function fromSKU(id) {
  const tmp = callback(id);
  if (null == tmp) {
    return null;
  } else {
    const obj = { sku_id: null, sku_product_line: null, sku_name: null, sku: null, skipValidation: true };
    obj[0] = id.id;
    obj[1] = SKUProductLines.COLLECTIBLES;
    obj[2] = id.name;
    obj[3] = id;
    const tmp6 = new prototype(obj);
    let item;
    if ("single" === tmp.type) {
      item = tmp.item;
    }
    tmp6.collectiblesItem = item;
    let items;
    if ("bundle" === tmp.type) {
      items = tmp.items;
    }
    tmp6.bundleItems = items;
    return tmp6;
  }
};
const result = require("set").fileFinishedImporting("modules/wishlists/records/CollectiblesWishlistItemRecord.tsx");

export default prototype;
export const isCollectiblesWishlistItemRecord = function isCollectiblesWishlistItemRecord(arg0) {
  return arg0 instanceof prototype;
};