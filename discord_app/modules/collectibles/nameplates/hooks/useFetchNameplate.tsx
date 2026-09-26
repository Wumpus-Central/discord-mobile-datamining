// === Module 14193: useFetchNameplate ===

// Module 14193 (useFetchNameplate)
import utils from "utils" /* 1971 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1974 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 10508 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/nameplates/hooks/useFetchNameplate.tsx");

export const useFetchNameplate = function useFetchNameplate(skuId) {
  const fetchCollectiblesProduct = useFetchCollectiblesProduct.useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  let type;
  if (product != null) {
    const first = product.items[0];
    if (first != null) {
      type = first.type;
    }
  }
  let first1;
  if (type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE) {
    first1 = product.items[0];
  }
  const obj2 = { nameplateProduct: product, nameplateRecord: first1, nameplateData: null, isFetching: null };
  obj2.nameplateData = utils.getNameplateData(first1);
  obj2.isFetching = fetchCollectiblesProduct.isFetching;
  return obj2;
};