// === Module 13448: getWideBannerDismissibleContentVersion ===

// Module 13448 (getWideBannerDismissibleContentVersion)
import map from "map" /* 5352 */;
import { CollectibleShopTab } from "items" /* 678 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/utils/WideBannerDismissibleContentVersion.tsx");

export const getWideBannerDismissibleContentVersion = function getWideBannerDismissibleContentVersion() {
  const items = [, , ];
  ({ HOME: arr[0], ORBS: arr[1], CATALOG: arr[2] } = CollectibleShopTab);
  const obj = items[Symbol.iterator]();
  while (obj !== undefined) {
    shopBlocks = shopBlocks.getShopBlocks(tmp);
    let found = shopBlocks.find((item, index) => item.type === callback(table[2]).ShopBlockType.WIDE_BANNER);
    let prop;
    if (found != null) {
      prop = found.dismissibleContentVersion;
    }
    if (null != prop) {
      obj.return();
      return found.dismissibleContentVersion;
    }
  }
  return 0;
};