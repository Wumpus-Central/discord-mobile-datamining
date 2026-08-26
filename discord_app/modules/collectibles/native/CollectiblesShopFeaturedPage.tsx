// === Module 15131: ? ===

// Module 15131
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import getNoResultsSource from "getNoResultsSource" /* 9042 */;
import blockDefault from "block" /* 15132 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { CollectiblesMobileShopScreen as closure_4 } from "items" /* 678 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
let closure_6 = createCacheKey.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesShopFeaturedPage.tsx");

export default function _default(shopBlock) {
  shopBlock = shopBlock.shopBlock;
  if (null === shopBlock.fetchShopHomeError) {
    if (undefined !== shopBlock) {
      let obj = { block: null, screen: null };
      obj[0] = shopBlock;
      obj[1] = constants.FEATURED_PAGE;
      let tmp6 = jsx(blockDefault, { block: null, screen: null });
    }
    return tmp6;
  }
  obj = { style: callback().container, children: null };
  obj = { style: { marginTop: 42 }, Illustration: getNoResultsSource.NoResults, body: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.eAn6z2);
  obj[1] = jsx(Button.EmptyState, { style: { marginTop: 42 }, Illustration: getNoResultsSource.NoResults, body: null });
  tmp6 = <View style={{ marginTop: 42 }} Illustration={getNoResultsSource.NoResults} body={null} />;
};