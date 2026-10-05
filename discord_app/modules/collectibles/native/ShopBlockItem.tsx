// === Module 15714: ShopBlockItem ===

// Module 15714 (ShopBlockItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ShopBlockType from "ShopBlockType" /* 7083 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8421 */;
import FeaturedBlockDefault from "FeaturedBlock" /* 15736 */;
import FeedBlockDefault from "FeedBlock" /* 15738 */;
import ShelfBlockDefault from "ShelfBlock" /* 15745 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7053 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { shopBlockSpacing: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let block;
  let combined;
  let preferVCPrice;
  let screen;
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(38);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CollectiblesCategoryStore];
    const fn2 = function f() {
      return CollectiblesCategoryStore.products;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult2 = get_initialized;
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
  if (block.type !== ShopBlockType.ShopBlockType.HERO) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + stateFromStores.size + "-" + stateFromStores1.size;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "hero-" + block.categoryStoreListingId;
  }
  const type = block.type;
  if (ShopBlockType.ShopBlockType.HERO === type) {
    let tmp45;
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { pageSection: "top 4" };
      cResult[4] = obj2;
      tmp45 = obj2;
    } else {
      tmp45 = cResult[4];
    }
    if (cResult[5] === block) {
      if (cResult[6] === preferVCPrice) {
        if (cResult[7] === screen) {
          let tmp46;
          if (cResult[8] === combined) {
            tmp46 = cResult[9];
          }
          return tmp46;
        }
      }
    }
    const CollectiblesAnalyticsProvider3 = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
    const tmp49 = <CollectiblesAnalyticsProvider3 newValue={tmp45}>{null}</CollectiblesAnalyticsProvider3>;
    cResult[5] = block;
    cResult[6] = preferVCPrice;
    cResult[7] = screen;
    cResult[8] = combined;
    cResult[9] = tmp49;
    tmp46 = tmp49;
  } else if (ShopBlockType.ShopBlockType.FEATURED === type) {
    let tmp36;
    let tmp37;
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { pageSection: "featured_block" };
      cResult[10] = obj5;
      tmp36 = obj5;
    } else {
      tmp36 = cResult[10];
    }
    if (cResult[11] !== block) {
      const tmp40 = jsx(FeaturedBlockDefault, { featuredBlock: block });
      cResult[11] = block;
      cResult[12] = tmp40;
      tmp37 = tmp40;
    } else {
      tmp37 = cResult[12];
    }
    if (cResult[13] === combined) {
      if (cResult[14] === tmp4.shopBlockSpacing) {
        let tmp41;
        if (cResult[15] === tmp37) {
          tmp41 = cResult[16];
        }
        return tmp41;
      }
    }
    const CollectiblesAnalyticsProvider2 = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
    const tmp44 = <CollectiblesAnalyticsProvider2 newValue={tmp36}>{null}</CollectiblesAnalyticsProvider2>;
    cResult[13] = combined;
    cResult[14] = tmp4.shopBlockSpacing;
    cResult[15] = tmp37;
    cResult[16] = tmp44;
    tmp41 = tmp44;
  } else if (ShopBlockType.ShopBlockType.FEED === type) {
    let tmp27;
    const _Symbol = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      const obj9 = { pageSection: "popular picks" };
      cResult[17] = obj9;
      tmp27 = obj9;
    } else {
      tmp27 = cResult[17];
    }
    if (cResult[18] === block) {
      if (cResult[19] === preferVCPrice) {
        if (cResult[20] === screen) {
          let tmp28;
          if (cResult[21] === combined) {
            tmp28 = cResult[22];
          }
          if (cResult[23] === tmp4.shopBlockSpacing) {
            let tmp32;
            if (cResult[24] === tmp28) {
              tmp32 = cResult[25];
            }
            return tmp32;
          }
          const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
          const tmp35 = <CollectiblesAnalyticsProvider newValue={tmp27}>{null}</CollectiblesAnalyticsProvider>;
          cResult[23] = tmp4.shopBlockSpacing;
          cResult[24] = tmp28;
          cResult[25] = tmp35;
          tmp32 = tmp35;
        }
      }
    }
    const tmp31 = jsx(FeedBlockDefault, { feedBlock: block, screen, preferVCPrice, disableBundleStaticBackground: true }, combined);
    cResult[18] = block;
    cResult[19] = preferVCPrice;
    cResult[20] = screen;
    cResult[21] = combined;
    cResult[22] = tmp31;
    tmp28 = tmp31;
  } else if (ShopBlockType.ShopBlockType.SHELF === type) {
    let tmp15;
    if (cResult[26] !== block.name) {
      const obj13 = { pageSection: block.name };
      cResult[26] = block.name;
      cResult[27] = obj13;
      tmp15 = obj13;
    } else {
      tmp15 = cResult[27];
    }
    if (cResult[28] === preferVCPrice) {
      if (cResult[29] === block) {
        let tmp16;
        if (cResult[30] === combined) {
          tmp16 = cResult[31];
        }
        if (cResult[32] === tmp4.shopBlockSpacing) {
          let tmp20;
          if (cResult[33] === tmp16) {
            tmp20 = cResult[34];
          }
          if (cResult[35] === tmp15) {
            let tmp24;
            if (cResult[36] === tmp20) {
              tmp24 = cResult[37];
            }
            return tmp24;
          }
          const tmp26 = jsx(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, { newValue: tmp15, children: tmp20 });
          cResult[35] = tmp15;
          cResult[36] = tmp20;
          cResult[37] = tmp26;
          tmp24 = tmp26;
        }
        const tmp23 = <View style={tmp4.shopBlockSpacing}>{tmp16}</View>;
        cResult[32] = tmp4.shopBlockSpacing;
        cResult[33] = tmp16;
        cResult[34] = tmp23;
        tmp20 = tmp23;
      }
    }
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
}) : ((block) => {
  let preferVCPrice;
  let screen;
  block = block.block;
  ({ screen, preferVCPrice } = block);
  let stateFromStores1;
  const tmp = closure_7();
  const items = [CollectiblesCategoryStore];
  const obj = block(stateFromStores1[8]);
  const stateFromStores = obj.useStateFromStores(items, () => CollectiblesCategoryStore.categories);
  const items1 = [CollectiblesCategoryStore];
  const obj2 = block(stateFromStores1[8]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => CollectiblesCategoryStore.products);
  const items2 = [block, stateFromStores.size, stateFromStores1.size];
  const memo = react.useMemo(() => {
    let combined;
    if (block.type === ShopBlockType.ShopBlockType.HERO) {
      const _HermesInternal2 = HermesInternal;
      combined = "hero-" + block.categoryStoreListingId;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + stateFromStores.size + "-" + stateFromStores1.size;
    }
    return combined;
  }, items2);
  const type = block.type;
  if (block(stateFromStores1[9]).ShopBlockType.HERO === type) {
    const CollectiblesAnalyticsProvider4 = tmp2(tmp3[10]).CollectiblesAnalyticsProvider;
    return <CollectiblesAnalyticsProvider4 newValue={{ pageSection: "top 4" }}>{null}</CollectiblesAnalyticsProvider4>;
  } else if (block(stateFromStores1[9]).ShopBlockType.FEATURED === type) {
    const CollectiblesAnalyticsProvider3 = tmp2(tmp3[10]).CollectiblesAnalyticsProvider;
    return <CollectiblesAnalyticsProvider3 newValue={{ pageSection: "featured_block" }}>{null}</CollectiblesAnalyticsProvider3>;
  } else if (block(stateFromStores1[9]).ShopBlockType.FEED === type) {
    const CollectiblesAnalyticsProvider2 = tmp2(tmp3[10]).CollectiblesAnalyticsProvider;
    return <CollectiblesAnalyticsProvider2 newValue={{ pageSection: "popular picks" }}>{null}</CollectiblesAnalyticsProvider2>;
  } else if (block(stateFromStores1[9]).ShopBlockType.SHELF === type) {
    const obj12 = { pageSection: block.name };
    const CollectiblesAnalyticsProvider = tmp2(tmp3[10]).CollectiblesAnalyticsProvider;
    return <CollectiblesAnalyticsProvider newValue={obj12}>{null}</CollectiblesAnalyticsProvider>;
  } else {
    const WIDE_BANNER = tmp2(tmp3[9]).ShopBlockType.WIDE_BANNER;
    return null;
  }
});
const result = size.fileFinishedImporting("modules/collectibles/native/ShopBlockItem.tsx");

export default tmp2;