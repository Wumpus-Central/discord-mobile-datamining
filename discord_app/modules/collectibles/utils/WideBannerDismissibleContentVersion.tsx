// === Module 13988: WideBannerDismissibleContentVersion ===

// Module 13988 (WideBannerDismissibleContentVersion)
import ShopBlockType from "ShopBlockType" /* 7573 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 7586 */;

require = fn;
const CollectibleShopTab = fn(1076).CollectibleShopTab;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/utils/WideBannerDismissibleContentVersion.tsx");

export const getWideBannerDismissibleContentVersion = function getWideBannerDismissibleContentVersion() {
  const items = [, , ];
  ({ HOME: arr[0], ORBS: arr[1], CATALOG: arr[2] } = CollectibleShopTab);
  const obj = items[Symbol.iterator]();
  while (obj !== undefined) {
    let shopBlocks = CollectiblesShopHomeStore.getShopBlocks(tmp);
    let found = shopBlocks.find((type) => type.type === ShopBlockType.ShopBlockType.WIDE_BANNER);
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