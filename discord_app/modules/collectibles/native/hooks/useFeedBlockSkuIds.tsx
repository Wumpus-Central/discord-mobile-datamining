// === Module 17821: useFeedBlockSkuIds ===

// Module 17821 (useFeedBlockSkuIds)
import ShopHomeSortType from "ShopHomeSortType" /* 17822 */;
import noop from "module_19" /* 19 */;
import ConsentStore from "ConsentStore" /* 6742 */;

const require = globalThis.__r;

require = fn;
const Consents = fn(1072).Consents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useFeedBlockSkuIds.tsx");

export default function useFeedBlockSkuIds(sortedSkuIds) {
  _require = sortedSkuIds;
  let items = [ConsentStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  sortedSkuIds = undefined;
  if (sortedSkuIds != null) {
    sortedSkuIds = sortedSkuIds.sortedSkuIds;
  }
  let items1 = [sortedSkuIds, stateFromStores];
  return noop.useMemo(() => {
    let items;
    if (sortedSkuIds != null) {
      sortedSkuIds = sortedSkuIds.sortedSkuIds;
      if (sortedSkuIds != null) {
        items = sortedSkuIds[ShopHomeSortType.ShopHomeSortType.RECOMMENDED];
      }
    }
    if (items == null) {
      items = [];
    }
    let items1;
    if (sortedSkuIds != null) {
      const sortedSkuIds2 = sortedSkuIds.sortedSkuIds;
      if (sortedSkuIds2 != null) {
        items1 = sortedSkuIds2[ShopHomeSortType.ShopHomeSortType.POPULAR];
      }
    }
    if (items1 == null) {
      items1 = [];
    }
    let tmp6 = stateFromStores;
    if (stateFromStores) {
      tmp6 = items.length > 0;
    }
    if (tmp6) {
      items1 = items;
    }
    return { shownSkuIds: items1, resolvedSkuIds: items1.slice(0, 44), isPersonalized: tmp6 };
  }, items1);
};
export const MAX_FEED_PRODUCTS = 36;