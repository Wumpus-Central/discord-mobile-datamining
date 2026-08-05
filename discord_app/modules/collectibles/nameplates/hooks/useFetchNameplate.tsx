// discord_app/modules/collectibles/nameplates/hooks/useFetchNameplate.tsx
const result = require("getNameplateData").fileFinishedImporting("modules/collectibles/nameplates/hooks/useFetchNameplate.tsx");

export const useFetchNameplate = function useFetchNameplate(skuId) {
  let obj = require("../../hooks/useFetchCollectiblesProduct.tsx") /* useFetchCollectiblesProduct */;
  const fetchCollectiblesProduct = obj.useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  let type;
  if (product != null) {
    const first = product.items[0];
    if (first != null) {
      type = first.type;
    }
  }
  let first1;
  if (type === require("../../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx") /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE) {
    first1 = product.items[0];
  }
  obj = { nameplateProduct: product, nameplateRecord: first1, nameplateData: null, isFetching: null };
  obj[2] = require("../utils.tsx") /* getNameplateData */.getNameplateData(first1);
  obj[3] = fetchCollectiblesProduct.isFetching;
  return obj;
};