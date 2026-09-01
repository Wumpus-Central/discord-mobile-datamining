// discord_app/modules/collectibles/nameplates/hooks/useFetchNameplate.tsx
import set from "../../../../../_runtime/00002_set.js";
import getNameplateData from "../utils.tsx";
import CollectiblesItemType from "../../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import useFetchCollectiblesProduct from "../../hooks/useFetchCollectiblesProduct.tsx";

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
  obj = {
    nameplateProduct: product,
    nameplateRecord: first1,
    nameplateData: getNameplateData.getNameplateData(first1),
    isFetching: fetchCollectiblesProduct.isFetching,
  };
  return obj;
};
