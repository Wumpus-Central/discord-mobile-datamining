// discord_app/modules/quests/native/QuestHomeBounties.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import QuestTypes from "../QuestTypes.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import native from "../../../design/assets/native.tsx";
import AnalyticsActions from "../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../lib/analytics/AnalyticsTypes.tsx";
import AdAnalyticsInterfaceExperiment from "../experiments/AdAnalyticsInterfaceExperiment.tsx";
import captureAdUserAction from "../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../ads/analytics/captureAdUserActionTypes.tsx";
import AnalyticsHooks from "../lib/analytics/AnalyticsHooks.tsx";
import BountiesModalActionCreatorsDefault from "BountiesModal/BountiesModalActionCreators.tsx";
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet.tsx";
import BountyCard from "BountyCard.tsx";
import BountiesCtaHeaderDefault from "BountiesCtaHeader.tsx";
import QuestHomeOrbShopCarouselDefault from "QuestHomeOrbShopCarousel.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import BountyStore from "../BountyStore.tsx";

const BountyCardDefault = BountyCard;

require = fn;
function EmptyState(reason) {
  reason = reason.reason;
  const tmp = closure_14();
  let obj = AnalyticsHooks;
  const bountyCarouselEmptyStateAnalytics = obj.useBountyCarouselEmptyStateAnalytics(reason);
  if (reason === constants.COMPLETED) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.O2hRaZ);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t.TKuW8z);
  }
  if (reason === constants.COMPLETED) {
    let ReqPds = util.t["D/790X"];
  } else {
    ReqPds = util.t.ReqPds;
  }
  obj = { style: tmp.emptyState, children: null };
  const items = [React7(native.BountiesPosterIllocon, { size: 32 })];
  obj = { style: tmp.emptyStateText, children: null };
  const items1 = [
    React7(Text_Text.Text, { variant: "text-sm/semibold", color: "text-default", children: stringResult }),
  ];
  const obj1 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl3 = util.intl;
  obj1.children = intl3.format(ReqPds, {
    onClickLearnMore() {
      openBountiesNuxPromoSheetDefault();
    },
  });
  items1[1] = React7(Text_Text.Text, obj1);
  obj.children = items1;
  items[1] = closure_1_10(View, obj);
  obj.children = items;
  return closure_1_10(View, obj);
}
function ItemSeparator() {
  let obj = { style: null };
  obj = { width: PX_16 };
  obj.style = obj;
  return React7(View, obj);
}
function keyExtractor(id) {
  return id.id;
}
function QuestHomeBountiesCarousel(bounties) {
  bounties = bounties.bounties;
  _slicedToArray = undefined;
  let first1;
  closure_14 = undefined;
  let tmp = closure_14();
  first1.useRef(null);
  const tmp3 = _slicedToArray(first1.useState(0), 2);
  const first = tmp3[0];
  _slicedToArray = tmp3[1];
  let tmp5 = _slicedToArray(first1.useState(0), 2);
  first1 = tmp5[0];
  closure_5 = tmp5[1];
  const tmp7 = _slicedToArray(first1.useState(false), 2);
  const first2 = tmp7[0];
  closure_7 = tmp7[1];
  closure_8 = first1.useRef(null);
  closure_9 = first1.useRef(false);
  const visibilityRef = first1.useRef({ parent: { scrollX: 0 }, children: {}, axis: "horizontal" });
  const callback = first1.useCallback((arg0) => {
    if (null != arg0) {
      const _Object2 = Object;
      if (Object.hasOwn(visibilityRef.current.children, arg0)) {
        if (visibilityRef.current.children[arg0] != null) {
          const calculateVisibility2 = tmp9.calculateVisibility;
          if (calculateVisibility2 != null) {
            calculateVisibility2();
          }
        }
      }
    } else {
      const _Object = Object;
      const values = Object.values(visibilityRef.current.children);
      for (const item10013 of values) {
        if (item10013 != null) {
          let calculateVisibility = item10013.calculateVisibility;
          if (calculateVisibility != null) {
            let calculateVisibilityResult = calculateVisibility();
          }
        }
        continue;
      }
    }
  }, []);
  const items = [callback];
  const items1 = [bounties.length];
  const callback1 = first1.useCallback((nativeEvent) => {
    closure_3(nativeEvent.nativeEvent.layout.width);
    visibilityRef.current.parent.layout = nativeEvent.nativeEvent.layout;
    callback();
  }, items);
  const items2 = [first];
  const memo = first1.useMemo(() => {
    const array = new Array(bounties.length);
    return array.fill(0).map((item, index) => index * ref2);
  }, items1);
  const callback2 = first1.useCallback(() => {
    let obj = { style: null };
    obj = { width: Math.max(0, first - BountyCard.CARD_WIDTH - PX_16) };
    obj.style = obj;
    return React7(View, obj);
  }, items2);
  const ref = first1.useRef(first1);
  first1.useRef(null);
  const items3 = [callback];
  const callback3 = first1.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.contentOffset.x / ref2);
    if (rounded !== ref.current) {
      ref.current = rounded;
      const _Date = Date;
      const timestamp = Date.now();
      let tmp5 = null == ref2.current;
      if (!tmp5) {
        tmp5 = timestamp - ref2.current >= 50;
      }
      if (tmp5) {
        ref2.current = timestamp;
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
      }
    }
    visibilityRef.current.parent.scrollX = nativeEvent.nativeEvent.contentOffset.x;
    callback();
  }, items3);
  closure_14 = first1.useRef(false);
  first1.useRef(null);
  const items4 = [first1];
  const callback4 = first1.useCallback(() => {
    closure_14.current = false;
    if (null != ref3.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref3.current);
      ref3.current = null;
    }
  }, []);
  const callback5 = first1.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.contentOffset.x / closure_13);
    closure_14.current = false;
    if (rounded !== first1) {
      let QUEST_HOME_MOBILE_CAROUSEL = dependencyMap;
      const BountyScrollingType = AnalyticsTypes.BountyScrollingType;
      let result = {
        scrollingType: tmp2 ? BountyScrollingType.AUTO : BountyScrollingType.MANUAL,
        scrollingDirection: null,
        carouselPosition: null,
        questContent: null,
      };
      if (rounded > tmp3) {
        let LEFT = AnalyticsTypes.HorizontalScrollingDirection.RIGHT;
      } else {
        LEFT = AnalyticsTypes.HorizontalScrollingDirection.LEFT;
      }
      result.scrollingDirection = LEFT;
      result.carouselPosition = rounded;
      QUEST_HOME_MOBILE_CAROUSEL = QuestTypes.QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
      result.questContent = QUEST_HOME_MOBILE_CAROUSEL;
      result = AnalyticsActions.trackBountyCarouselScroll(result);
      closure_5(rounded);
    }
  }, items4);
  const callback6 = first1.useCallback((arg0) => {
    closure_0 = arg0;
    if (null != ref3.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref3.current);
      ref3.current = null;
    }
    ref3.current = setTimeout(() => {
      closure_14.current = true;
      const current = ref.current;
      if (current != null) {
        const obj = { offset: closure_0 * closure_13, animated: true };
        current.scrollToOffset(obj);
      }
      closure_15.current = null;
    }, 350);
  }, []);
  const effect = first1.useEffect(
    () => () => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        ref.current = null;
      }
    },
    [],
  );
  const items5 = [bounties, first1, callback6];
  const effect1 = first1.useEffect(() => {
    function handleModalClose(key) {
      if (key.key === handleModalClose(first[23]).BOUNTIES_MODAL_KEY) {
        closure_7(false);
        const current = ref.current;
        ref.current = null;
        if (null != current) {
          let isBountyCompletedResult = bountyCompleted.isBountyCompleted(current);
          if (isBountyCompletedResult) {
            isBountyCompletedResult = !ref2.current;
          }
          ref2.current = false;
          const findIndexResult = current.findIndex((id) => id.id === current);
          closure_1 = findIndexResult;
          if (-1 !== findIndexResult) {
            const findIndexResult1 = obj.findIndex((id, index) => {
              let tmp = index > first1;
              if (tmp) {
                tmp = index > findIndexResult;
              }
              if (tmp) {
                tmp = !first2.isBountyCompleted(id.id);
              }
              return tmp;
            });
            if (isBountyCompletedResult) {
              isBountyCompletedResult = -1 !== findIndexResult1;
            }
            if (isBountyCompletedResult) {
              isBountyCompletedResult = findIndexResult1 <= closure_4 + 3;
            }
            if (isBountyCompletedResult) {
              handleModalClose(first[24]).runAfterInteractions(() => {
                callback6(findIndexResult1);
              });
              const tmpResult = handleModalClose(first[24]);
            }
          }
          obj = current;
        }
      }
    }
    const subscription = ref(first[17]).subscribe("MODAL_POP", handleModalClose);
    return () => {
      DispatcherDefault.unsubscribe("MODAL_POP", handleModalClose);
    };
  }, items5);
  const callback7 = first1.useCallback((bountyId, questContentPosition) => {
    let obj = AdAnalyticsInterfaceExperiment;
    if (
      obj.shouldMigrateToAdAnalyticsInterface(
        AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
        "quest_home_bounties",
      )
    ) {
      let tmpResult = captureAdUserAction;
      obj = {
        type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
        adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
        adCreativeId: bountyId.id,
        questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY,
        surfaceId: QuestTypes.QuestContent.QUEST_HOME_MOBILE_CAROUSEL,
        sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE_CAROUSEL,
        questContentPosition,
      };
      tmpResult.captureAdUserAction(obj);
    } else {
      tmpResult = AnalyticsActions;
      obj = {
        adContentId: bountyId.id,
        adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
        questContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE_CAROUSEL,
        questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY,
        sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE_CAROUSEL,
        questContentPosition,
      };
      const result = tmpResult.trackAdContentClicked(obj);
    }
    closure_8.current = bountyId.id;
    closure_9.current = BountyStore.isBountyCompleted(bountyId.id);
    closure_7(true);
    const obj6 = BountiesModalActionCreatorsDefault;
    obj6.showModal({ bountyId: bountyId.id, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE_CAROUSEL });
    const obj1 = { bountyId: bountyId.id, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE_CAROUSEL };
  }, []);
  const tmp20 = ref(first[29])();
  const isInView = tmp20.isInView;
  const items6 = [first1, callback7, isInView, first2];
  const items7 = [bounties, callback];
  const callback8 = first1.useCallback((item) => {
    item = item.item;
    const index = item.index;
    return closure_9(
      bounties(first[30]).BillableAdPlacementImpressionTrackerNative,
      {
        adContentId: item.id,
        adCreativeType: bounties(first[28]).AdCreativeType.BOUNTY,
        questContent: bounties(first[22]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL,
        questContentPosition: index,
        trackGuildAndChannelMetadata: false,
        visibilityRef,
        sourceQuestContent: bounties(first[22]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL,
        overrideVisibility: isInView && undefined,
        children() {
          return React7(BountyCardDefault, {
            bounty: item,
            index,
            isActive: index === first1,
            isModalVisible: first2,
            onPress: callback7,
          });
        },
      },
      item.id,
    );
  }, items6);
  const items8 = [isInView, first1, first2];
  const callback9 = first1.useCallback((arg0) => {
    const index = arg0;
    let obj = {};
    let merged = Object.assign(arg0);
    obj.onLayout = function onLayout(nativeEvent) {
      let obj = index;
      if (null != bounties[index.index]) {
        obj = {};
        const merged = Object.assign(ref.current.children[tmp.id]);
        obj.layout = nativeEvent.nativeEvent.layout;
        ref.current.children[tmp.id] = obj;
        callback(tmp.id);
      }
      obj.onLayout(nativeEvent);
    };
    return closure_9(closure_5, obj);
  }, items7);
  let obj = { style: tmp.container, children: null };
  obj = { ref: tmp20.containerRef, onLayout: callback1, children: null };
  const memo1 = first1.useMemo(() => ({ isInView, activeIndex: first1, isModalVisible: first2 }), items8);
  obj = {
    ref,
    horizontal: true,
    data: bounties,
    renderItem: callback8,
    keyExtractor: callback7,
    contentContainerStyle: tmp.listContentContainer,
    snapToOffsets: memo,
    snapToEnd: false,
    decelerationRate: "fast",
    showsHorizontalScrollIndicator: false,
    ItemSeparatorComponent: callback6,
    ListFooterComponent: callback2,
    onScroll: callback3,
    onScrollBeginDrag: callback4,
    onMomentumScrollEnd: callback5,
    scrollEventThrottle: 16,
    extraData: memo1,
    CellRendererComponent: callback9,
  };
  obj.children = closure_9(bounties(first[31]).FlashList, obj);
  obj.children = closure_9(closure_5, obj);
  return closure_9(closure_5, obj);
}
const View = fn(17).View;
const constants = fn(5444).BountyCarouselEmptyStateReason;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
let closure_13 = fn(15068).CARD_WIDTH + PX_16;
const createStyles = fn(4560);
let closure_14 = createStyles.createStyles(() => {
  let obj = { container: null, listContentContainer: null, emptyState: null, emptyStateText: null };
  obj = { marginBottom: nativeDefault.space.PX_48 };
  obj.container = obj;
  obj = { paddingLeft: PX_16 };
  obj.listContentContainer = obj;
  obj.emptyState = {
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_12,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_MUTED,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.lg,
    overflow: "hidden",
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingVertical: 14,
    marginHorizontal: nativeDefault.space.PX_16,
  };
  obj.emptyStateText = { flex: 1, gap: 2 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestHomeBounties.tsx");

export default noop.memo(function QuestHomeBounties(shopCarouselConfig) {
  ({ verticalScrollEnabled, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel } =
    shopCarouselConfig);
  if (showOrbShopPlaceholderCarousel === undefined) {
    showOrbShopPlaceholderCarousel = false;
  }
  let obj = first(11483);
  const questHomeBounties = obj.useQuestHomeBounties().questHomeBounties;
  const tmp3 = closure_14();
  first = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  if (questHomeBounties.length > 0) {
    const items = [tmp(1943).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET];
    let items1 = items;
  } else {
    items1 = [];
  }
  let tmpResult = tmp(7388);
  const tmp4 = _slicedToArray(tmpResult.useSelectedDismissibleContent(items1), 2);
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
      if (key.key === first(closure_2[14]).PROMO_SHEET_KEY) {
        closure_1_1(constants.USER_DISMISS);
      }
    }
    if (handleHide === first(ref[15]).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET) {
      const subscription = closure_1(ref[17]).subscribe("HIDE_ACTION_SHEET", handleHide);
      return () => {
        DispatcherDefault.unsubscribe("HIDE_ACTION_SHEET", handleHide);
      };
    }
  }, items3);
  tmpResult = tmp(504);
  const items4 = [BountyStore];
  ({ placement, buttonVariant, clickable } = shopCarouselConfig.shopCarouselConfig);
  let tmp10 = undefined !== clickable;
  const stateFromStores = tmpResult.useStateFromStores(items4, () => BountyStore.areAllBountiesCompleted());
  if (tmp10) {
    tmp10 = clickable;
  }
  if (0 !== questHomeBounties.length) {
    if (!stateFromStores) {
      if (verticalScrollEnabled) {
        let tmp14 = "none" !== placement && obtainableOrbRewards > 0;
        if (tmp14) {
          tmp14 =
            orbShopProducts.length >= tmp(15069).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
          const tmp15 =
            orbShopProducts.length >= tmp(15069).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
        }
        if (!tmp14) {
          obj = { style: tmp3.container, children: null };
          obj = {
            bounties: questHomeBounties,
            shopCarouselButtonVariant: buttonVariant,
            footer: null,
            replaceHeaderMediaWith: null,
          };
          let tmp26;
          if ("inside" === placement) {
            tmp26 = null;
          }
          obj.footer = tmp26;
          let tmp27;
          if ("replace_media" === placement) {
            tmp27 = null;
          }
          obj.replaceHeaderMediaWith = tmp27;
          const items5 = [closure_9(BountiesCtaHeaderDefault, obj)];
          let tmp28 = null;
          if ("outside" === placement) {
            tmp28 = null;
          }
          items5[1] = tmp28;
          obj.children = items5;
          return closure_10(View, obj);
        } else {
          const obj1 = {
            embedded: "inside" === placement,
            replacesHeaderMedia: "replace_media" === placement,
            listEdgeSpacing: null,
            orbShopProducts: null,
            obtainableOrbRewards: null,
            showOrbShopPlaceholderCarousel: null,
            clickable: null,
          };
          if ("outside" === placement) {
            let PX_20 = PX_16;
          } else {
            PX_20 = tmp18(576).space.PX_20;
          }
          obj1.listEdgeSpacing = PX_20;
          obj1.orbShopProducts = orbShopProducts;
          obj1.obtainableOrbRewards = obtainableOrbRewards;
          obj1.showOrbShopPlaceholderCarousel = showOrbShopPlaceholderCarousel;
          obj1.clickable = tmp10;
          closure_9(QuestHomeOrbShopCarouselDefault, obj1);
          tmp18 = importDefault;
        }
      } else {
        const obj2 = { bounties: questHomeBounties };
        return closure_9(QuestHomeBountiesCarousel, obj2);
      }
    }
  }
  const obj3 = { style: tmp3.container, children: null };
  if (verticalScrollEnabled) {
    const obj4 = { bounties: questHomeBounties, shopCarouselButtonVariant: buttonVariant, isEmptyOrCompleted: true };
    let tmp29Result = closure_9(BountiesCtaHeaderDefault, obj4);
  } else {
    const obj5 = { reason: tmp11 ? constants.EMPTY : constants.COMPLETED };
    tmp29Result = closure_9(EmptyState, obj5);
  }
  obj3.children = tmp29Result;
  return closure_9(View, obj3);
});
