// === Module 15146: QuestHomeBounties ===

// Module 15146 (QuestHomeBounties)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import dismissible_content from "dismissible_content" /* 2048 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10575 */;
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet" /* 15147 */;
import usePopularOrbShopProducts from "usePopularOrbShopProducts" /* 15151 */;
import BountiesCtaHeaderDefault from "BountiesCtaHeader" /* 15158 */;
import QuestHomeOrbShopCarouselDefault from "QuestHomeOrbShopCarousel" /* 15164 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BountyStore from "BountyStore" /* 7378 */;

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(5090);
let closure_11 = createStyles.createStyles(() => {
  const obj = { container: { marginBottom: nativeDefault.space.PX_48 } };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBountiesNux(arg0) {
  const cResult = first(576).c(9);
  if (cResult[0] !== arg0) {
    if (arg0) {
      const items = [tmp(2048).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET];
      let items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = arg0;
    cResult[1] = items1;
  } else {
    const tmp6 = _slicedToArray(tmp(7090).useSelectedDismissibleContent(cResult[1]), 2);
    first = tmp6[0];
    importDefault = tmp8;
    dependencyMap = noop.useRef(false);
    if (cResult[2] !== first) {
      const fn = function c() {
        let current = first !== dismissible_content.DismissibleContent.BOUNTIES_NUX_PROMO_SHEET;
        if (!current) {
          current = ref.current;
        }
        if (!current) {
          ref.current = true;
          openBountiesNuxPromoSheetDefault();
        }
      };
      const items2 = [first];
      cResult[2] = first;
      cResult[3] = fn;
      cResult[4] = items2;
      let tmp10 = items2;
      let tmp9 = fn;
    } else {
      tmp9 = cResult[3];
      tmp10 = cResult[4];
    }
    const effect = noop.useEffect(tmp9, tmp10);
    if (cResult[5] === tmp6[1]) {
      if (cResult[6] === first) {
        let tmp12 = cResult[7];
        let tmp13 = cResult[8];
      }
      const effect1 = noop.useEffect(tmp12, tmp13);
    }
    class S {
      constructor() {
        tmp = closure_2;
        if (handleHide === closure_0(closure_2[10]).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET) {
          handleHide = function handleHide(key) {
            if (key.key === first(closure_2[12]).PROMO_SHEET_KEY) {
              closure_1_1(constants.USER_DISMISS);
            }
          };
          tmp2 = closure_1;
          obj = closure_1(tmp[13]);
          str = "HIDE_ACTION_SHEET";
          subscription = obj.subscribe("HIDE_ACTION_SHEET", handleHide);
          return () => {
            DispatcherDefault.unsubscribe("HIDE_ACTION_SHEET", handleHide);
          };
        } else {
          return;
        }
      }
    }
    const items3 = [first, tmp6[1]];
    cResult[5] = tmp6[1];
    cResult[6] = first;
    cResult[7] = S;
    cResult[8] = items3;
    tmp13 = items3;
    tmp12 = S;
    const tmpResult = tmp(7090);
  }
  const obj = first(576);
}) : (function useBountiesNux(arg0) {
  if (arg0) {
    const items = [first(2048).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp3 = _slicedToArray(first(7090).useSelectedDismissibleContent(items1), 2);
  first = tmp3[0];
  closure_1 = tmp5;
  dependencyMap = noop.useRef(false);
  const items2 = [first];
  const effect = noop.useEffect(() => {
    let current = first !== dismissible_content.DismissibleContent.BOUNTIES_NUX_PROMO_SHEET;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      openBountiesNuxPromoSheetDefault();
    }
  }, items2);
  const items3 = [first, tmp3[1]];
  const effect1 = noop.useEffect(() => {
    function handleHide(key) {
      if (key.key === first(closure_2[12]).PROMO_SHEET_KEY) {
        closure_1_1(constants.USER_DISMISS);
      }
    }
    if (handleHide === first(ref[10]).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET) {
      const subscription = closure_1(ref[13]).subscribe("HIDE_ACTION_SHEET", handleHide);
      return () => {
        DispatcherDefault.unsubscribe("HIDE_ACTION_SHEET", handleHide);
      };
    }
  }, items3);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeBounties.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestHomeBounties(arg0) {
  const cResult = c.c(23);
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = arg0);
  const questHomeBounties = hooks_QuestHooks.useQuestHomeBounties().questHomeBounties;
  const tmp5 = closure_11();
  closure_12(questHomeBounties.length > 0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [BountyStore];
    const fn = function f() {
      return BountyStore.areAllBountiesCompleted();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = hooks_QuestHooks;
  ({ placement, buttonVariant, clickable } = shopCarouselConfig);
  let tmp11 = undefined !== clickable;
  const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
  if (tmp11) {
    tmp11 = clickable;
  }
  if (0 !== questHomeBounties.length) {
    if (!stateFromStores) {
      if (cResult[8] === tmp11) {
        if (cResult[9] === obtainableOrbRewards) {
          if (cResult[10] === orbShopProducts) {
            if (cResult[11] === placement) {
              if (cResult[12] === tmp4) {
                let tmp12 = cResult[13];
              }
              let tmp20;
              if ("inside" === placement) {
                tmp20 = tmp12;
              }
              let tmp21;
              if ("replace_media" === placement) {
                tmp21 = tmp12;
              }
              if (cResult[14] === questHomeBounties) {
                if (cResult[15] === buttonVariant) {
                  if (cResult[16] === tmp20) {
                    if (cResult[17] === tmp21) {
                      let tmp22 = cResult[18];
                    }
                    let tmp26 = null;
                    if ("outside" === placement) {
                      tmp26 = tmp12;
                    }
                    if (cResult[19] === tmp5.container) {
                      if (cResult[20] === tmp22) {
                        if (cResult[21] === tmp26) {
                          let tmp27 = cResult[22];
                        }
                        return tmp27;
                      }
                    }
                    const obj2 = { style: tmp5.container, children: null };
                    const items1 = [tmp22, tmp26];
                    obj2.children = items1;
                    const tmp30 = options(View, obj2);
                    cResult[19] = tmp5.container;
                    cResult[20] = tmp22;
                    cResult[21] = tmp26;
                    cResult[22] = tmp30;
                    tmp27 = tmp30;
                  }
                }
              }
              const obj3 = { bounties: questHomeBounties, shopCarouselButtonVariant: buttonVariant, footer: tmp20, replaceHeaderMediaWith: tmp21 };
              const tmp25 = closure_1_8(BountiesCtaHeaderDefault, obj3);
              cResult[14] = questHomeBounties;
              cResult[15] = buttonVariant;
              cResult[16] = tmp20;
              cResult[17] = tmp21;
              cResult[18] = tmp25;
              tmp22 = tmp25;
            }
          }
        }
      }
      let tmp13 = "none" !== placement && obtainableOrbRewards > 0;
      if (tmp13) {
        tmp13 = orbShopProducts.length >= usePopularOrbShopProducts.MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || tmp4;
        const tmp14 = orbShopProducts.length >= usePopularOrbShopProducts.MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || tmp4;
      }
      if (!tmp13) {
        cResult[8] = tmp11;
        cResult[9] = obtainableOrbRewards;
        cResult[10] = orbShopProducts;
        cResult[11] = placement;
        cResult[12] = tmp4;
        cResult[13] = null;
        tmp12 = null;
      } else {
        const obj4 = { embedded: "inside" === placement, replacesHeaderMedia: "replace_media" === placement, listEdgeSpacing: null, orbShopProducts: null, obtainableOrbRewards: null, showOrbShopPlaceholderCarousel: null, clickable: null };
        if ("outside" === placement) {
          let PX_20 = PX_16;
        } else {
          PX_20 = nativeDefault.space.PX_20;
        }
        obj4.listEdgeSpacing = PX_20;
        obj4.orbShopProducts = orbShopProducts;
        obj4.obtainableOrbRewards = obtainableOrbRewards;
        obj4.showOrbShopPlaceholderCarousel = tmp4;
        obj4.clickable = tmp11;
        closure_1_8(QuestHomeOrbShopCarouselDefault, obj4);
      }
    }
  }
  if (cResult[2] === questHomeBounties) {
    if (cResult[3] === buttonVariant) {
      let tmp31 = cResult[4];
    }
    if (cResult[5] === tmp5.container) {
      if (cResult[6] === tmp31) {
        let tmp33 = cResult[7];
      }
      return tmp33;
    }
    const obj5 = { style: tmp5.container, children: tmp31 };
    const tmp36 = closure_1_8(View, obj5);
    cResult[5] = tmp5.container;
    cResult[6] = tmp31;
    cResult[7] = tmp36;
    tmp33 = tmp36;
  }
  const tmp32 = closure_1_8(BountiesCtaHeaderDefault, { bounties: questHomeBounties, shopCarouselButtonVariant: buttonVariant, isEmptyOrCompleted: true });
  cResult[2] = questHomeBounties;
  cResult[3] = buttonVariant;
  cResult[4] = tmp32;
  tmp31 = tmp32;
  const tmpResult2 = initialize;
}) : (function QuestHomeBounties(shopCarouselConfig) {
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel } = shopCarouselConfig);
  if (showOrbShopPlaceholderCarousel === undefined) {
    showOrbShopPlaceholderCarousel = false;
  }
  const questHomeBounties = hooks_QuestHooks.useQuestHomeBounties().questHomeBounties;
  const tmp3 = closure_11();
  closure_12(questHomeBounties.length > 0);
  const items = [BountyStore];
  ({ placement, buttonVariant, clickable } = shopCarouselConfig.shopCarouselConfig);
  let tmp6 = undefined !== clickable;
  const stateFromStores = initialize.useStateFromStores(items, () => BountyStore.areAllBountiesCompleted());
  if (tmp6) {
    tmp6 = clickable;
  }
  if (0 !== questHomeBounties.length) {
    if (!stateFromStores) {
      let tmp7 = "none" !== placement && obtainableOrbRewards > 0;
      if (tmp7) {
        tmp7 = orbShopProducts.length >= usePopularOrbShopProducts.MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
        const tmp8 = orbShopProducts.length >= usePopularOrbShopProducts.MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
      }
      if (!tmp7) {
        const obj3 = { style: tmp3.container, children: null };
        const obj4 = { bounties: questHomeBounties, shopCarouselButtonVariant: buttonVariant, footer: null, replaceHeaderMediaWith: null };
        let tmp19;
        if ("inside" === placement) {
          tmp19 = null;
        }
        obj4.footer = tmp19;
        let tmp20;
        if ("replace_media" === placement) {
          tmp20 = null;
        }
        obj4.replaceHeaderMediaWith = tmp20;
        const items1 = [closure_1_8(BountiesCtaHeaderDefault, obj4), ];
        let tmp21 = null;
        if ("outside" === placement) {
          tmp21 = null;
        }
        items1[1] = tmp21;
        obj3.children = items1;
        return options(View, obj3);
      } else {
        const obj5 = { embedded: "inside" === placement, replacesHeaderMedia: "replace_media" === placement, listEdgeSpacing: null, orbShopProducts: null, obtainableOrbRewards: null, showOrbShopPlaceholderCarousel: null, clickable: null };
        if ("outside" === placement) {
          let PX_20 = PX_16;
        } else {
          PX_20 = nativeDefault.space.PX_20;
        }
        obj5.listEdgeSpacing = PX_20;
        obj5.orbShopProducts = orbShopProducts;
        obj5.obtainableOrbRewards = obtainableOrbRewards;
        obj5.showOrbShopPlaceholderCarousel = showOrbShopPlaceholderCarousel;
        obj5.clickable = tmp6;
        closure_1_8(QuestHomeOrbShopCarouselDefault, obj5);
      }
    }
  }
  return closure_1_8(View, { style: tmp3.container, children: closure_1_8(BountiesCtaHeaderDefault, { bounties: questHomeBounties, shopCarouselButtonVariant: buttonVariant, isEmptyOrCompleted: true }) });
}));