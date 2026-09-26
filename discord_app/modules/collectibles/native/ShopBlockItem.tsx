// discord_app/modules/collectibles/native/ShopBlockItem.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ShopBlockType from "../../../../discord_common/js/shared/shared-constants/ShopBlockType.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj2 = { shopBlockSpacing: { marginTop: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopBlockItem.tsx");

export default function _default(block) {
  block = block.block;
  ({ screen, preferVCPrice } = block);
  let stateFromStores1;
  const tmp = closure_7();
  const items = [CollectiblesCategoryStore];
  const stateFromStores = block(stateFromStores1[6]).useStateFromStores(
    items,
    () => CollectiblesCategoryStore.categories,
  );
  const obj = block(stateFromStores1[6]);
  const items1 = [CollectiblesCategoryStore];
  stateFromStores1 = block(stateFromStores1[6]).useStateFromStores(items1, () => CollectiblesCategoryStore.products);
  const items2 = [block, stateFromStores.size, stateFromStores1.size];
  const memo = noop.useMemo(() => {
    if (block.type === ShopBlockType.ShopBlockType.HERO) {
      const _HermesInternal3 = HermesInternal;
      let combined = "hero-" + block.categoryStoreListingId;
    } else if (block.type === ShopBlockType.ShopBlockType.REWARD_HERO) {
      const _HermesInternal2 = HermesInternal;
      combined = "reward-hero-" + block.categoryStoreListingId;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + stateFromStores.size + "-" + stateFromStores1.size;
    }
    return combined;
  }, items2);
  const type = block.type;
  if (block(stateFromStores1[7]).ShopBlockType.HERO === type) {
    const obj3 = { newValue: { pageSection: "top 4" }, children: null };
    const obj4 = { heroBlock: block, preferVCPrice, screen };
    obj3.children = jsx(stateFromStores(tmp3[9]), { heroBlock: block, preferVCPrice, screen }, memo);
    return jsx(tmp2(tmp3[8]).CollectiblesAnalyticsProvider, { newValue: { pageSection: "top 4" }, children: null });
  } else if (tmp2(tmp3[7]).ShopBlockType.FEATURED === type) {
    const obj5 = { newValue: { pageSection: "featured_block" }, children: null };
    const obj6 = { style: tmp.shopBlockSpacing, children: null };
    const obj7 = { featuredBlock: block };
    obj6.children = jsx(stateFromStores(tmp3[10]), { featuredBlock: block });
    obj5.children = (
      <View key={memo} style={tmp.shopBlockSpacing}>
        {null}
      </View>
    );
    return jsx(tmp2(tmp3[8]).CollectiblesAnalyticsProvider, {
      newValue: { pageSection: "featured_block" },
      children: null,
    });
  } else if (tmp2(tmp3[7]).ShopBlockType.FEED === type) {
    const obj8 = { newValue: { pageSection: "popular picks" }, children: null };
    const obj9 = { style: tmp.shopBlockSpacing, children: null };
    const obj10 = { feedBlock: block, screen, preferVCPrice, disableBundleStaticBackground: true };
    obj9.children = jsx(
      stateFromStores(tmp3[11]),
      { feedBlock: block, screen, preferVCPrice, disableBundleStaticBackground: true },
      memo,
    );
    obj8.children = <View style={tmp.shopBlockSpacing}>{null}</View>;
    return jsx(tmp2(tmp3[8]).CollectiblesAnalyticsProvider, {
      newValue: { pageSection: "popular picks" },
      children: null,
    });
  } else if (tmp2(tmp3[7]).ShopBlockType.SHELF === type) {
    const obj11 = { newValue: null, children: null };
    const obj12 = { pageSection: block.name };
    obj11.newValue = obj12;
    const obj13 = { style: tmp.shopBlockSpacing, children: null };
    const obj14 = { block, preferVCPrice };
    obj13.children = jsx(stateFromStores(tmp3[12]), { block, preferVCPrice }, memo);
    obj11.children = <View style={tmp.shopBlockSpacing}>{null}</View>;
    return jsx(tmp2(tmp3[8]).CollectiblesAnalyticsProvider, { newValue: null, children: null });
  } else {
    const WIDE_BANNER = tmp2(tmp3[7]).ShopBlockType.WIDE_BANNER;
    return null;
  }
  const obj2 = block(stateFromStores1[6]);
}
