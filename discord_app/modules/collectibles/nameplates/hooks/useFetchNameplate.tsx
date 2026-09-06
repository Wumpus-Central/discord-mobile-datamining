// discord_app/modules/collectibles/nameplates/hooks/useFetchNameplate.tsx
import utils from "../utils.tsx";
import CollectiblesItemType from "../../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import useFetchCollectiblesProduct from "../../hooks/useFetchCollectiblesProduct.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/collectibles/nameplates/hooks/useFetchNameplate.tsx");

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
    nameplateData: utils.getNameplateData(first1),
    isFetching: fetchCollectiblesProduct.isFetching,
  };
  return obj;
};
