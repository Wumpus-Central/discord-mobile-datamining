// === Module 15381: block ===

// Module 15381 (block)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "updateCategoriesAndProducts" /* 7255 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
createCacheKey = { shopBlockSpacing: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/collectibles/native/ShopBlockItem.tsx");

export default function _default(block) {
  block = block.block;
  ({ screen, preferVCPrice } = block);
  let stateFromStores;
  let stateFromStores1;
  const tmp = callback();
  let obj = block(stateFromStores1[6]);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => closure_5.categories);
  obj1 = block(stateFromStores1[6]);
  const items1 = [closure_5];
  stateFromStores1 = obj1.useStateFromStores(items1, () => closure_5.products);
  const items2 = [block, stateFromStores.size, stateFromStores1.size];
  const memo = React.useMemo(() => {
    if (block.type === block(stateFromStores1[7]).ShopBlockType.HERO) {
      const _HermesInternal3 = HermesInternal;
      let combined = "hero-" + tmp.categoryStoreListingId;
    } else if (tmp.type === block(stateFromStores1[7]).ShopBlockType.REWARD_HERO) {
      const _HermesInternal2 = HermesInternal;
      combined = "reward-hero-" + tmp.categoryStoreListingId;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + stateFromStores.size + "-" + stateFromStores1.size;
    }
    return combined;
  }, items2);
  const type = block.type;
  if (block(stateFromStores1[7]).ShopBlockType.HERO === type) {
    obj = { newValue: null, children: null };
    obj[0] = { pageSection: "top 4" };
    obj = { heroBlock: null, preferVCPrice: null, screen: null };
    obj[0] = block;
    obj[1] = preferVCPrice;
    obj[2] = screen;
    obj[1] = jsx(stateFromStores(tmp3[9]), { heroBlock: null, preferVCPrice: null, screen: null }, memo);
    return jsx(tmp2(tmp3[8]).CollectiblesAnalyticsProvider, { heroBlock: null, preferVCPrice: null, screen: null });
  } else if (tmp2(tmp3[7]).ShopBlockType.FEATURED === type) {
    obj1 = { newValue: null, children: null };
    obj1[0] = { pageSection: "featured_block" };
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.shopBlockSpacing;
    const obj3 = { featuredBlock: null };
    obj3[0] = block;
    obj2[1] = jsx(stateFromStores(tmp3[10]), { featuredBlock: null });
    obj1[1] = <View key={memo} style={null}>{null}</View>;
    return jsx(tmp2(tmp3[8]).CollectiblesAnalyticsProvider, { newValue: null, children: null });
  } else if (tmp2(tmp3[7]).ShopBlockType.FEED === type) {
    const obj4 = { newValue: null, children: null };
    obj4[0] = { pageSection: "popular picks" };
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.shopBlockSpacing;
    const obj6 = { feedBlock: null, screen: null, preferVCPrice: null, disableBundleStaticBackground: true };
    obj6[0] = block;
    obj6[1] = screen;
    obj6[2] = preferVCPrice;
    obj5[1] = jsx(stateFromStores(tmp3[11]), { feedBlock: null, screen: null, preferVCPrice: null, disableBundleStaticBackground: true }, memo);
    obj4[1] = <View style={null}>{null}</View>;
    return jsx(tmp2(tmp3[8]).CollectiblesAnalyticsProvider, { newValue: null, children: null });
  } else if (tmp2(tmp3[7]).ShopBlockType.SHELF === type) {
    const obj7 = { newValue: null, children: null };
    const obj8 = { pageSection: null };
    obj8[0] = block.name;
    obj7[0] = obj8;
    const obj9 = { style: null, children: null };
    obj9[0] = tmp.shopBlockSpacing;
    const obj10 = { block: null, preferVCPrice: null };
    obj10[0] = block;
    obj10[1] = preferVCPrice;
    obj9[1] = jsx(stateFromStores(tmp3[12]), { block: null, preferVCPrice: null }, memo);
    obj7[1] = <View style={null}>{null}</View>;
    return jsx(tmp2(tmp3[8]).CollectiblesAnalyticsProvider, { newValue: null, children: null });
  } else {
    const WIDE_BANNER = tmp2(tmp3[7]).ShopBlockType.WIDE_BANNER;
    return null;
  }
};