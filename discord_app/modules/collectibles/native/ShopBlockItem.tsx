// === Module 15714: ShopBlockItem ===

// Module 15714 (ShopBlockItem)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ShopBlockType from "ShopBlockType" /* 7083 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8421 */;
import HeroBlockDefault from "HeroBlock" /* 15715 */;
import FeaturedBlockDefault from "FeaturedBlock" /* 15736 */;
import FeedBlockDefault from "FeedBlock" /* 15738 */;
import ShelfBlockDefault from "ShelfBlock" /* 15745 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7053 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { shopBlockSpacing: { marginTop: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginTop: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopBlockItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(38);
  ({ block, screen, preferVCPrice } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesCategoryStore];
    const fn = function p() {
      return CollectiblesCategoryStore.categories;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CollectiblesCategoryStore];
    const fn2 = function f() {
      return CollectiblesCategoryStore.products;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp10 = fn2;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = initialize;
  const stateFromStores1 = initialize.useStateFromStores(tmp9, tmp10);
  if (block.type !== ShopBlockType.ShopBlockType.HERO) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + stateFromStores.size + "-" + stateFromStores1.size;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "hero-" + block.categoryStoreListingId;
  }
  const type = block.type;
  if (ShopBlockType.ShopBlockType.HERO === type) {
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { pageSection: "top 4" };
      cResult[4] = obj2;
      let tmp45 = obj2;
    } else {
      tmp45 = cResult[4];
    }
    if (cResult[5] === block) {
      if (cResult[6] === preferVCPrice) {
        if (cResult[7] === screen) {
          if (cResult[8] === combined) {
            let tmp46 = cResult[9];
          }
          return tmp46;
        }
      }
    }
    const obj3 = { newValue: tmp45, children: null };
    const obj4 = { heroBlock: block, preferVCPrice, screen };
    obj3.children = jsx(HeroBlockDefault, { heroBlock: block, preferVCPrice, screen }, combined);
    const tmp49 = jsx(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, { newValue: tmp45, children: null });
    cResult[5] = block;
    cResult[6] = preferVCPrice;
    cResult[7] = screen;
    cResult[8] = combined;
    cResult[9] = tmp49;
    tmp46 = tmp49;
  } else if (ShopBlockType.ShopBlockType.FEATURED === type) {
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { pageSection: "featured_block" };
      cResult[10] = obj5;
      let tmp36 = obj5;
    } else {
      tmp36 = cResult[10];
    }
    if (cResult[11] !== block) {
      const obj6 = { featuredBlock: block };
      const tmp40 = jsx(FeaturedBlockDefault, { featuredBlock: block });
      cResult[11] = block;
      cResult[12] = tmp40;
      let tmp37 = tmp40;
    } else {
      tmp37 = cResult[12];
    }
    if (cResult[13] === combined) {
      if (cResult[14] === tmp4.shopBlockSpacing) {
        if (cResult[15] === tmp37) {
          let tmp41 = cResult[16];
        }
        return tmp41;
      }
    }
    const obj7 = { newValue: tmp36, children: null };
    const obj8 = { style: tmp4.shopBlockSpacing, children: tmp37 };
    obj7.children = <View key={combined} style={tmp4.shopBlockSpacing}>{tmp37}</View>;
    const tmp44 = jsx(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, { newValue: tmp36, children: null });
    cResult[13] = combined;
    cResult[14] = tmp4.shopBlockSpacing;
    cResult[15] = tmp37;
    cResult[16] = tmp44;
    tmp41 = tmp44;
  } else if (ShopBlockType.ShopBlockType.FEED === type) {
    const _Symbol = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      const obj9 = { pageSection: "popular picks" };
      cResult[17] = obj9;
      let tmp27 = obj9;
    } else {
      tmp27 = cResult[17];
    }
    if (cResult[18] === block) {
      if (cResult[19] === preferVCPrice) {
        if (cResult[20] === screen) {
          if (cResult[21] === combined) {
            let tmp28 = cResult[22];
          }
          if (cResult[23] === tmp4.shopBlockSpacing) {
            if (cResult[24] === tmp28) {
              let tmp32 = cResult[25];
            }
            return tmp32;
          }
          const obj10 = { newValue: tmp27, children: null };
          const obj11 = { style: tmp4.shopBlockSpacing, children: tmp28 };
          obj10.children = <View style={tmp4.shopBlockSpacing}>{tmp28}</View>;
          const tmp35 = jsx(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, { newValue: tmp27, children: null });
          cResult[23] = tmp4.shopBlockSpacing;
          cResult[24] = tmp28;
          cResult[25] = tmp35;
          tmp32 = tmp35;
        }
      }
    }
    const obj12 = { feedBlock: block, screen, preferVCPrice, disableBundleStaticBackground: true };
    const tmp31 = jsx(FeedBlockDefault, { feedBlock: block, screen, preferVCPrice, disableBundleStaticBackground: true }, combined);
    cResult[18] = block;
    cResult[19] = preferVCPrice;
    cResult[20] = screen;
    cResult[21] = combined;
    cResult[22] = tmp31;
    tmp28 = tmp31;
  } else if (ShopBlockType.ShopBlockType.SHELF === type) {
    if (cResult[26] !== block.name) {
      const obj13 = { pageSection: block.name };
      cResult[26] = block.name;
      cResult[27] = obj13;
      let tmp15 = obj13;
    } else {
      tmp15 = cResult[27];
    }
    if (cResult[28] === preferVCPrice) {
      if (cResult[29] === block) {
        if (cResult[30] === combined) {
          let tmp16 = cResult[31];
        }
        if (cResult[32] === tmp4.shopBlockSpacing) {
          if (cResult[33] === tmp16) {
            let tmp20 = cResult[34];
          }
          if (cResult[35] === tmp15) {
            if (cResult[36] === tmp20) {
              let tmp24 = cResult[37];
            }
            return tmp24;
          }
          const obj14 = { newValue: tmp15, children: tmp20 };
          const tmp26 = jsx(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, { newValue: tmp15, children: tmp20 });
          cResult[35] = tmp15;
          cResult[36] = tmp20;
          cResult[37] = tmp26;
          tmp24 = tmp26;
        }
        const obj15 = { style: tmp4.shopBlockSpacing, children: tmp16 };
        const tmp23 = <View style={tmp4.shopBlockSpacing}>{tmp16}</View>;
        cResult[32] = tmp4.shopBlockSpacing;
        cResult[33] = tmp16;
        cResult[34] = tmp23;
        tmp20 = tmp23;
      }
    }
    const obj16 = { block, preferVCPrice };
    const tmp19 = jsx(ShelfBlockDefault, { block, preferVCPrice }, combined);
    cResult[28] = preferVCPrice;
    cResult[29] = block;
    cResult[30] = combined;
    cResult[31] = tmp19;
    tmp16 = tmp19;
  } else {
    const WIDE_BANNER = ShopBlockType.ShopBlockType.WIDE_BANNER;
    return null;
  }
  const tmpResult2 = initialize;
}) : ((block) => {
  block = block.block;
  ({ screen, preferVCPrice } = block);
  let stateFromStores1;
  const tmp = closure_7();
  const items = [CollectiblesCategoryStore];
  const stateFromStores = block(stateFromStores1[8]).useStateFromStores(items, () => CollectiblesCategoryStore.categories);
  const obj = block(stateFromStores1[8]);
  const items1 = [CollectiblesCategoryStore];
  stateFromStores1 = block(stateFromStores1[8]).useStateFromStores(items1, () => CollectiblesCategoryStore.products);
  const items2 = [block, stateFromStores.size, stateFromStores1.size];
  const memo = noop.useMemo(() => {
    if (block.type === ShopBlockType.ShopBlockType.HERO) {
      const _HermesInternal2 = HermesInternal;
      let combined = "hero-" + block.categoryStoreListingId;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + stateFromStores.size + "-" + stateFromStores1.size;
    }
    return combined;
  }, items2);
  const type = block.type;
  if (block(stateFromStores1[9]).ShopBlockType.HERO === type) {
    const obj3 = { newValue: { pageSection: "top 4" }, children: null };
    const obj4 = { heroBlock: block, preferVCPrice, screen };
    obj3.children = jsx(stateFromStores(tmp3[11]), { heroBlock: block, preferVCPrice, screen }, memo);
    return jsx(tmp2(tmp3[10]).CollectiblesAnalyticsProvider, { newValue: { pageSection: "top 4" }, children: null });
  } else if (tmp2(tmp3[9]).ShopBlockType.FEATURED === type) {
    const obj5 = { newValue: { pageSection: "featured_block" }, children: null };
    const obj6 = { style: tmp.shopBlockSpacing, children: null };
    const obj7 = { featuredBlock: block };
    obj6.children = jsx(stateFromStores(tmp3[12]), { featuredBlock: block });
    obj5.children = <View key={memo} style={tmp.shopBlockSpacing}>{null}</View>;
    return jsx(tmp2(tmp3[10]).CollectiblesAnalyticsProvider, { newValue: { pageSection: "featured_block" }, children: null });
  } else if (tmp2(tmp3[9]).ShopBlockType.FEED === type) {
    const obj8 = { newValue: { pageSection: "popular picks" }, children: null };
    const obj9 = { style: tmp.shopBlockSpacing, children: null };
    const obj10 = { feedBlock: block, screen, preferVCPrice, disableBundleStaticBackground: true };
    obj9.children = jsx(stateFromStores(tmp3[13]), { feedBlock: block, screen, preferVCPrice, disableBundleStaticBackground: true }, memo);
    obj8.children = <View style={tmp.shopBlockSpacing}>{null}</View>;
    return jsx(tmp2(tmp3[10]).CollectiblesAnalyticsProvider, { newValue: { pageSection: "popular picks" }, children: null });
  } else if (tmp2(tmp3[9]).ShopBlockType.SHELF === type) {
    const obj11 = { newValue: null, children: null };
    const obj12 = { pageSection: block.name };
    obj11.newValue = obj12;
    const obj13 = { style: tmp.shopBlockSpacing, children: null };
    const obj14 = { block, preferVCPrice };
    obj13.children = jsx(stateFromStores(tmp3[14]), { block, preferVCPrice }, memo);
    obj11.children = <View style={tmp.shopBlockSpacing}>{null}</View>;
    return jsx(tmp2(tmp3[10]).CollectiblesAnalyticsProvider, { newValue: null, children: null });
  } else {
    const WIDE_BANNER = tmp2(tmp3[9]).ShopBlockType.WIDE_BANNER;
    return null;
  }
  const obj2 = block(stateFromStores1[8]);
});