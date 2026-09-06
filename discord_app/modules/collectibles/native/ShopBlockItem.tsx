// discord_app/modules/collectibles/native/ShopBlockItem.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ShopBlockType from "../../../../discord_common/js/shared/shared-constants/ShopBlockType.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { shopBlockSpacing: null };
createStyles = { marginTop: nativeDefault.space.PX_16 };
createStyles.shopBlockSpacing = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopBlockItem.tsx");

export default function _default(block) {
  block = block.block;
  ({ screen, preferVCPrice } = block);
  let stateFromStores1;
  const tmp = closure_7();
  let obj = block(stateFromStores1[6]);
  const items = [CollectiblesCategoryStore];
  const stateFromStores = obj.useStateFromStores(items, () => CollectiblesCategoryStore.categories);
  let obj1 = block(stateFromStores1[6]);
  const items1 = [CollectiblesCategoryStore];
  stateFromStores1 = obj1.useStateFromStores(items1, () => CollectiblesCategoryStore.products);
  const items2 = [block, stateFromStores.size, stateFromStores1.size];
  const memo = noop.useMemo(() => {
    if (block.type === ShopBlockType.ShopBlockType.HERO) {
      const _HermesInternal3 = HermesInternal;
      let combined = "hero-" + tmp.categoryStoreListingId;
    } else if (tmp.type === ShopBlockType.ShopBlockType.REWARD_HERO) {
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
    obj = { newValue: { pageSection: "top 4" }, children: null };
    obj = { heroBlock: block, preferVCPrice, screen };
    obj.children = jsx(stateFromStores(tmp3[9]), { heroBlock: block, preferVCPrice, screen }, memo);
    return jsx(tmp2(tmp3[8]).CollectiblesAnalyticsProvider, { heroBlock: block, preferVCPrice, screen });
  } else if (tmp2(tmp3[7]).ShopBlockType.FEATURED === type) {
    obj1 = { newValue: { pageSection: "featured_block" }, children: null };
    const obj2 = { style: tmp.shopBlockSpacing, children: null };
    const obj3 = { featuredBlock: block };
    obj2.children = jsx(stateFromStores(tmp3[10]), { featuredBlock: block });
    obj1.children = (
      <View key={memo} style={tmp.shopBlockSpacing}>
        {null}
      </View>
    );
    return jsx(tmp2(tmp3[8]).CollectiblesAnalyticsProvider, {
      newValue: { pageSection: "featured_block" },
      children: null,
    });
  } else if (tmp2(tmp3[7]).ShopBlockType.FEED === type) {
    const obj4 = { newValue: { pageSection: "popular picks" }, children: null };
    const obj5 = { style: tmp.shopBlockSpacing, children: null };
    const obj6 = { feedBlock: block, screen, preferVCPrice, disableBundleStaticBackground: true };
    obj5.children = jsx(
      stateFromStores(tmp3[11]),
      { feedBlock: block, screen, preferVCPrice, disableBundleStaticBackground: true },
      memo,
    );
    obj4.children = <View style={tmp.shopBlockSpacing}>{null}</View>;
    return jsx(tmp2(tmp3[8]).CollectiblesAnalyticsProvider, {
      newValue: { pageSection: "popular picks" },
      children: null,
    });
  } else if (tmp2(tmp3[7]).ShopBlockType.SHELF === type) {
    const obj7 = { newValue: null, children: null };
    const obj8 = { pageSection: block.name };
    obj7.newValue = obj8;
    const obj9 = { style: tmp.shopBlockSpacing, children: null };
    const obj10 = { block, preferVCPrice };
    obj9.children = jsx(stateFromStores(tmp3[12]), { block, preferVCPrice }, memo);
    obj7.children = <View style={tmp.shopBlockSpacing}>{null}</View>;
    return jsx(tmp2(tmp3[8]).CollectiblesAnalyticsProvider, { newValue: null, children: null });
  } else {
    const WIDE_BANNER = tmp2(tmp3[7]).ShopBlockType.WIDE_BANNER;
    return null;
  }
}
