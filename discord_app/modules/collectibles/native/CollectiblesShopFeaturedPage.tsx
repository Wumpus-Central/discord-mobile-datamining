// === Module 15713: CollectiblesShopFeaturedPage ===

// Module 15713 (CollectiblesShopFeaturedPage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import generated_NoResults from "generated/NoResults" /* 7904 */;
import ShopBlockItemDefault from "ShopBlockItem" /* 15714 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let shopBlock;

const View = react_native.View;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((shopBlock) => {
  let first;
  let tmp11;
  let tmp14;
  const obj = react2;
  const cResult = obj.c(6);
  shopBlock = shopBlock.shopBlock;
  const fetchShopHomeError = shopBlock.fetchShopHomeError;
  const tmp4 = closure_6();
  if (null === fetchShopHomeError) {
    let tmp5;
    if (undefined !== shopBlock) {
      if (cResult[4] !== shopBlock) {
        const tmp9 = jsx(ShopBlockItemDefault, { block: shopBlock, screen: constants.FEATURED_PAGE });
        cResult[4] = shopBlock;
        cResult[5] = tmp9;
        tmp5 = tmp9;
      } else {
        tmp5 = cResult[5];
      }
    }
    return tmp5;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { marginTop: 42 };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const EmptyState = native.EmptyState;
    const intl = intl2.intl;
    const tmp13 = <EmptyState style={first} Illustration={generated_NoResults.NoResults} body={intl.string(intl2.t.eAn6z2)} />;
    cResult[1] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== tmp4.container) {
    const tmp17 = <View style={tmp4.container}>{tmp11}</View>;
    cResult[2] = tmp4.container;
    cResult[3] = tmp17;
    tmp14 = tmp17;
  } else {
    tmp14 = cResult[3];
  }
  tmp5 = tmp14;
}) : ((shopBlock) => {
  let intl;
  shopBlock = shopBlock.shopBlock;
  const fetchShopHomeError = shopBlock.fetchShopHomeError;
  const tmp = closure_6();
  if (null === fetchShopHomeError) {
    let tmp6;
    if (undefined !== shopBlock) {
      tmp6 = jsx(ShopBlockItemDefault, { block: shopBlock, screen: constants.FEATURED_PAGE });
    }
    return tmp6;
  }
  ({ style: { marginTop: 42 }, Illustration: generated_NoResults.NoResults, body: intl.string(intl2.t.eAn6z2) });
  const EmptyState = native.EmptyState;
  intl = intl2.intl;
  tmp6 = <View style={tmp.container}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopFeaturedPage.tsx");

export default tmp3;