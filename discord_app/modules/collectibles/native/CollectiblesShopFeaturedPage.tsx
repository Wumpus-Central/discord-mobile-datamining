// discord_app/modules/collectibles/native/CollectiblesShopFeaturedPage.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { CollectiblesMobileShopScreen as closure_4 } from "items";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { getNoResultsSource } from "../../../design/components/Illustration/native/redesign/generated/NoResults.tsx";
import { Button } from "../../../design/void/native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { block } from "ShopBlockItem.tsx";

const require = arg1;
let closure_6 = createCacheKey.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const result = require("items").fileFinishedImporting("modules/collectibles/native/CollectiblesShopFeaturedPage.tsx");

export default function _default(shopBlock) {
  shopBlock = shopBlock.shopBlock;
  if (null === shopBlock.fetchShopHomeError) {
    if (undefined !== shopBlock) {
      let obj = { block: null, screen: null };
      obj[0] = shopBlock;
      obj[1] = constants.FEATURED_PAGE;
      let tmp6 = jsx(block, { block: null, screen: null });
    }
    return tmp6;
  }
  obj = { style: callback().container, children: null };
  obj = { style: { marginTop: 42 }, Illustration: null, body: null };
  obj[1] = getNoResultsSource.NoResults;
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.eAn6z2);
  obj[1] = jsx(Button.EmptyState, { style: { marginTop: 42 }, Illustration: null, body: null });
  tmp6 = <View style={{ marginTop: 42 }} Illustration={null} body={null} />;
};