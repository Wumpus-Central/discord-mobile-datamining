// discord_app/modules/collectibles/hooks/useCollectiblesData.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import updateCategoriesAndProducts from "../CollectiblesCategoryStore.tsx";
import map from "../CollectiblesPurchaseStore.tsx";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useCollectiblesData.tsx");

export default function useCollectiblesData(arg0) {
  const _require = arg0;
  let obj = defaultAreStatesEqual;
  let items = [closure_3];
  const tmp = callback(obj.useStateFromStoresArray(items, () => {
    const items = [closure_1_3.getCategoryForProduct(closure_0), closure_1_3.getProduct(closure_0)];
    return items;
  }), 2);
  obj = { category: tmp[0], product: tmp[1], purchase: require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items1, () => closure_1_4.getPurchase(closure_0)) };
  items1 = [closure_4];
  return obj;
};