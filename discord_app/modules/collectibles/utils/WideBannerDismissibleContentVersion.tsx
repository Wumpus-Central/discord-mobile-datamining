// === Module 13950: getWideBannerDismissibleContentVersion ===

// Module 13950 (getWideBannerDismissibleContentVersion)
import closure_2 from "map" /* 7340 */;
import { CollectibleShopTab } from "items" /* 675 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/utils/WideBannerDismissibleContentVersion.tsx");

export const getWideBannerDismissibleContentVersion = function getWideBannerDismissibleContentVersion() {
  const items = [, , ];
  ({ HOME: arr[0], ORBS: arr[1], CATALOG: arr[2] } = CollectibleShopTab);
  const obj = items[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp2 = shopBlocks;
    shopBlocks = shopBlocks.getShopBlocks(tmp);
    let found = shopBlocks.find((type) => type.type === callback(table[2]).ShopBlockType.WIDE_BANNER);
    let tmp4 = found;
    let prop;
    if (found != null) {
      prop = found.dismissibleContentVersion;
    }
    if (null != prop) {
      let tmp6 = obj;
      obj.return();
      return found.dismissibleContentVersion;
    }
  }
  return 0;
};