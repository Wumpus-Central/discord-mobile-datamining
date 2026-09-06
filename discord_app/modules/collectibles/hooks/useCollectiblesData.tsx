// discord_app/modules/collectibles/hooks/useCollectiblesData.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";
import CollectiblesPurchaseStore from "../CollectiblesPurchaseStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectiblesData.tsx");

export default function useCollectiblesData(arg0) {
  _require = arg0;
  let obj = require("useStateFromStores");
  let items = [CollectiblesCategoryStore];
  const tmp = _slicedToArray(
    obj.useStateFromStoresArray(items, () => {
      const items = [
        CollectiblesCategoryStore.getCategoryForProduct(closure_0),
        CollectiblesCategoryStore.getProduct(closure_0),
      ];
      return items;
    }),
    2,
  );
  obj = { category: tmp[0], product: tmp[1], purchase: null };
  const items1 = [CollectiblesPurchaseStore];
  obj.purchase = require("useStateFromStores").useStateFromStores(items1, () =>
    CollectiblesPurchaseStore.getPurchase(closure_0),
  );
  return obj;
}
