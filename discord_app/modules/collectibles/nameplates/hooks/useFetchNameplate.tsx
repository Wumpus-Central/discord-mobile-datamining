// === Module 14480: useFetchNameplate ===

// Module 14480 (useFetchNameplate)
import react from "react" /* 576 */;
import utils from "utils" /* 1977 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 10791 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isFetching;
  let product;
  let tmp8;
  const obj = react;
  const cResult = obj.c(7);
  const obj2 = useFetchCollectiblesProduct;
  const fetchCollectiblesProduct = obj2.useFetchCollectiblesProduct(arg0);
  ({ product, isFetching } = fetchCollectiblesProduct);
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
  if (cResult[0] !== first1) {
    const tmpResult = utils;
    const nameplateData = tmpResult.getNameplateData(first1);
    cResult[0] = first1;
    cResult[1] = nameplateData;
    tmp8 = nameplateData;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === isFetching) {
    if (cResult[3] === tmp8) {
      if (cResult[4] === first1) {
        let tmp10;
        if (cResult[5] === product) {
          tmp10 = cResult[6];
        }
        return tmp10;
      }
    }
  }
  const obj3 = { nameplateProduct: product, nameplateRecord: first1, nameplateData: tmp8, isFetching };
  cResult[2] = isFetching;
  cResult[3] = tmp8;
  cResult[4] = first1;
  cResult[5] = product;
  cResult[6] = obj3;
  tmp10 = obj3;
}) : ((arg0) => {
  let tmpResult;
  const obj = useFetchCollectiblesProduct;
  const fetchCollectiblesProduct = obj.useFetchCollectiblesProduct(arg0);
  const product = fetchCollectiblesProduct.product;
  let type;
  const isFetching = fetchCollectiblesProduct.isFetching;
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
  const obj2 = { nameplateProduct: product, nameplateRecord: first1, nameplateData: tmpResult.getNameplateData(first1), isFetching };
  tmpResult = utils;
  return obj2;
});
const result = size.fileFinishedImporting("modules/collectibles/nameplates/hooks/useFetchNameplate.tsx");

export const useFetchNameplate = tmp2;