// === Module 14464: useFetchNameplate ===

// Module 14464 (useFetchNameplate)
import c from "c" /* 576 */;
import utils from "utils" /* 1977 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 10778 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/nameplates/hooks/useFetchNameplate.tsx");

export const useFetchNameplate = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  const fetchCollectiblesProduct = useFetchCollectiblesProduct.useFetchCollectiblesProduct(arg0);
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
    const nameplateData = utils.getNameplateData(first1);
    cResult[0] = first1;
    cResult[1] = nameplateData;
    let tmp8 = nameplateData;
    const tmpResult = utils;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === isFetching) {
    if (cResult[3] === tmp8) {
      if (cResult[4] === first1) {
        if (cResult[5] === product) {
          let tmp10 = cResult[6];
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
  const fetchCollectiblesProduct = useFetchCollectiblesProduct.useFetchCollectiblesProduct(arg0);
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
});