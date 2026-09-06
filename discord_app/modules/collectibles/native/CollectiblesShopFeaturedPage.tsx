// === Module 15814: CollectiblesShopFeaturedPage ===

// Module 15814 (CollectiblesShopFeaturedPage)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import generated_NoResults from "generated/NoResults" /* 8232 */;
import ShopBlockItemDefault from "ShopBlockItem" /* 15815 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const constants = fn(1076).CollectiblesMobileShopScreen;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopFeaturedPage.tsx");

export default function _default(shopBlock) {
  shopBlock = shopBlock.shopBlock;
  if (null === shopBlock.fetchShopHomeError) {
    if (undefined !== shopBlock) {
      let obj = { block: shopBlock, screen: constants.FEATURED_PAGE };
      let tmp6 = jsx(ShopBlockItemDefault, { block: shopBlock, screen: constants.FEATURED_PAGE });
    }
    return tmp6;
  }
  obj = { style: closure_6().container, children: null };
  obj = { style: { marginTop: 42 }, Illustration: generated_NoResults.NoResults, body: null };
  const intl = util.intl;
  obj.body = intl.string(util.t.eAn6z2);
  obj.children = jsx(native.EmptyState, { style: { marginTop: 42 }, Illustration: generated_NoResults.NoResults, body: null });
  tmp6 = <View style={{ marginTop: 42 }} Illustration={generated_NoResults.NoResults} body={null} />;
  const tmp = closure_6();
};