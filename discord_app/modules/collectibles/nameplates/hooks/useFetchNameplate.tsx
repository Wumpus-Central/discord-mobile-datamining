// === Module 14253: useFetchNameplate ===

// Module 14253 (useFetchNameplate)
import set from "set" /* 2 */;
import getNameplateData from "getNameplateData" /* 1947 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1950 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 8424 */;

const result = set.fileFinishedImporting("modules/collectibles/nameplates/hooks/useFetchNameplate.tsx");

export const useFetchNameplate = function useFetchNameplate(skuId) {
  let obj = useFetchCollectiblesProduct;
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
  if (type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE) {
    first1 = product.items[0];
  }
  obj = { nameplateProduct: product, nameplateRecord: first1, nameplateData: getNameplateData.getNameplateData(first1), isFetching: fetchCollectiblesProduct.isFetching };
  return obj;
};