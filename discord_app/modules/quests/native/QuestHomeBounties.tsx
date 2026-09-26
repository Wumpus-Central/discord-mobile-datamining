// === Module 14596: QuestHomeBounties ===

// Module 14596 (QuestHomeBounties)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet" /* 14597 */;
import BountiesCtaHeaderDefault from "BountiesCtaHeader" /* 14608 */;
import QuestHomeOrbShopCarouselDefault from "QuestHomeOrbShopCarousel" /* 14614 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BountyStore from "BountyStore" /* 7115 */;

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(4836);
let closure_11 = createStyles.createStyles(() => {
  const obj = { container: { marginBottom: nativeDefault.space.PX_48 } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeBounties.tsx");

export default noop.memo(function QuestHomeBounties(shopCarouselConfig) {
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel } = shopCarouselConfig);
  if (showOrbShopPlaceholderCarousel === undefined) {
    showOrbShopPlaceholderCarousel = false;
  }
  const questHomeBounties = first(10681).useQuestHomeBounties().questHomeBounties;
  const tmp3 = closure_11();
  first = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  if (questHomeBounties.length > 0) {
    const items = [tmp(2029).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET];
    let items1 = items;
  } else {
    items1 = [];
  }
  const obj = first(10681);
  const tmp4 = _slicedToArray(first(6806).useSelectedDismissibleContent(items1), 2);
  first = tmp4[0];
  importDefault = tmp6;
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
  const items3 = [first, tmp4[1]];
  const effect1 = noop.useEffect(() => {
    function handleHide(key) {
      if (key.key === first(closure_2[10]).PROMO_SHEET_KEY) {
        closure_1_1(constants.USER_DISMISS);
      }
    }
    if (handleHide === first(ref[8]).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET) {
      const subscription = closure_1(ref[11]).subscribe("HIDE_ACTION_SHEET", handleHide);
      return () => {
        DispatcherDefault.unsubscribe("HIDE_ACTION_SHEET", handleHide);
      };
    }
  }, items3);
  const tmpResult = first(6806);
  const items4 = [BountyStore];
  ({ placement, buttonVariant, clickable } = shopCarouselConfig.shopCarouselConfig);
  let tmp10 = undefined !== clickable;
  const stateFromStores = first(504).useStateFromStores(items4, () => BountyStore.areAllBountiesCompleted());
  if (tmp10) {
    tmp10 = clickable;
  }
  if (0 !== questHomeBounties.length) {
    if (!stateFromStores) {
      let tmp11 = "none" !== placement && obtainableOrbRewards > 0;
      if (tmp11) {
        tmp11 = orbShopProducts.length >= tmp(14601).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
        const tmp12 = orbShopProducts.length >= tmp(14601).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
      }
      if (!tmp11) {
        const obj2 = { style: tmp3.container, children: null };
        const obj3 = { bounties: questHomeBounties, shopCarouselButtonVariant: buttonVariant, footer: null, replaceHeaderMediaWith: null };
        let tmp23;
        if ("inside" === placement) {
          tmp23 = null;
        }
        obj3.footer = tmp23;
        let tmp24;
        if ("replace_media" === placement) {
          tmp24 = null;
        }
        obj3.replaceHeaderMediaWith = tmp24;
        const items5 = [closure_8(BountiesCtaHeaderDefault, obj3), ];
        let tmp25 = null;
        if ("outside" === placement) {
          tmp25 = null;
        }
        items5[1] = tmp25;
        obj2.children = items5;
        return closure_9(View, obj2);
      } else {
        const obj4 = { embedded: "inside" === placement, replacesHeaderMedia: "replace_media" === placement, listEdgeSpacing: null, orbShopProducts: null, obtainableOrbRewards: null, showOrbShopPlaceholderCarousel: null, clickable: null };
        if ("outside" === placement) {
          let PX_20 = PX_16;
        } else {
          PX_20 = tmp15(576).space.PX_20;
        }
        obj4.listEdgeSpacing = PX_20;
        obj4.orbShopProducts = orbShopProducts;
        obj4.obtainableOrbRewards = obtainableOrbRewards;
        obj4.showOrbShopPlaceholderCarousel = showOrbShopPlaceholderCarousel;
        obj4.clickable = tmp10;
        closure_8(QuestHomeOrbShopCarouselDefault, obj4);
        tmp15 = importDefault;
      }
    }
  }
  const tmpResult2 = first(504);
  return closure_8(View, { style: tmp3.container, children: closure_8(BountiesCtaHeaderDefault, { bounties: questHomeBounties, shopCarouselButtonVariant: buttonVariant, isEmptyOrCompleted: true }) });
});