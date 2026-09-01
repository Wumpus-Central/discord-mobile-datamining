// === Module 14669: EmptyState ===

// Module 14669 (EmptyState)
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4474 */;
import AccountAgeTier10LargeBadge from "AccountAgeTier10LargeBadge" /* 6256 */;
import useTrackQuestEventWithImpression from "useTrackQuestEventWithImpression" /* 11341 */;
import StarfieldBackgroundDefault from "StarfieldBackground" /* 14681 */;
import ListEdgeSpacerDefault from "ListEdgeSpacer" /* 14686 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "set" /* 7447 */;
import { BountyCarouselEmptyStateReason as closure_7 } from "QuestsExperimentLocations" /* 5387 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1384 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function EmptyState(reason) {
  reason = reason.reason;
  const tmp = callback4();
  let obj = useTrackQuestEventWithImpression;
  const bountyCarouselEmptyStateAnalytics = obj.useBountyCarouselEmptyStateAnalytics(reason);
  if (reason === constants.COMPLETED) {
    const intl2 = tmp2(1236).intl;
    let stringResult = intl2.string(tmp2(1236).t.O2hRaZ);
  } else {
    const intl = tmp2(1236).intl;
    stringResult = intl.string(tmp2(1236).t.TKuW8z);
  }
  if (reason === constants.COMPLETED) {
    let ReqPds = tmp2(1236).t["D/790X"];
  } else {
    ReqPds = tmp2(1236).t.ReqPds;
  }
  obj = { style: tmp.emptyState, children: null };
  const items = [callback2(AccountAgeTier10LargeBadge.BountiesPosterIllocon, { size: 32 }), ];
  obj = { style: tmp.emptyStateText, children: null };
  const items1 = [callback2(Text.Text, { variant: "text-sm/semibold", color: "text-default", children: stringResult }), ];
  obj1 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl3 = tmp2(1236).intl;
  obj1[2] = intl3.format(ReqPds, {
    onClickLearnMore() {
      callback(table[14])();
    }
  });
  items1[1] = callback2(Text.Text, obj1);
  obj[1] = items1;
  items[1] = callback3(View, obj);
  obj[1] = items;
  return callback3(View, obj);
}
function ItemSeparator() {
  const style = { width: PX_16 };
  return callback2(View, { style });
}
function keyExtractor(id) {
  return id.id;
}
function QuestHomeBountiesCarousel(bounties) {
  bounties = bounties.bounties;
  let ref;
  let first;
  let callback;
  let first1;
  closure_5 = undefined;
  let first2;
  closure_7 = undefined;
  closure_8 = undefined;
  let callback2;
  closure_10 = undefined;
  callback = undefined;
  closure_12 = undefined;
  closure_13 = undefined;
  let callback4;
  closure_15 = undefined;
  let callback6;
  let callback7;
  let isInView;
  let tmp = callback4();
  ref = first1.useRef(null);
  const tmp3 = callback(first1.useState(0), 2);
  first = tmp3[0];
  callback = tmp3[1];
  let tmp5 = callback(first1.useState(0), 2);
  first1 = tmp5[0];
  closure_5 = tmp5[1];
  const tmp7 = callback(first1.useState(false), 2);
  first2 = tmp7[0];
  closure_7 = tmp7[1];
  closure_8 = first1.useRef(null);
  callback2 = first1.useRef(false);
  closure_10 = first1.useRef({ parent: { scrollX: 0 }, children: {}, axis: "horizontal" });
  callback = first1.useCallback((arg0) => {
    if (null != arg0) {
      const _Object2 = Object;
      if (Object.hasOwn(closure_10.current.children, arg0)) {
        if (tmp8.current.children[arg0] != null) {
          const calculateVisibility2 = tmp9.calculateVisibility;
          if (calculateVisibility2 != null) {
            calculateVisibility2();
          }
        }
      }
      tmp8 = closure_10;
    } else {
      const _Object = Object;
      const values = Object.values(closure_10.current.children);
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
    callback(nativeEvent.nativeEvent.layout.width);
    closure_10.current.parent.layout = nativeEvent.nativeEvent.layout;
    callback();
  }, items);
  const items2 = [first];
  const memo = first1.useMemo(() => {
    const array = new Array(bounties.length);
    return array.fill(0).map((arg0, arg1) => arg1 * closure_13);
  }, items1);
  callback2 = first1.useCallback(() => {
    let obj = { style: null };
    obj = { width: Math.max(0, first - bounties(first[8]).CARD_WIDTH - callback) };
    obj[0] = obj;
    return callback4(closure_5, obj);
  }, items2);
  closure_12 = first1.useRef(first1);
  closure_13 = first1.useRef(null);
  const items3 = [callback];
  const callback3 = first1.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.contentOffset.x / ref2);
    if (rounded !== ref.current) {
      ref.current = rounded;
      const _Date = Date;
      const timestamp = Date.now();
      let tmp5 = null == ref2.current;
      if (!tmp5) {
        tmp5 = timestamp - tmp3.current >= 50;
      }
      if (tmp5) {
        tmp3.current = timestamp;
        const result = bounties(first[19]).triggerHapticFeedback(bounties(first[19]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj = bounties(first[19]);
      }
    }
    closure_10.current.parent.scrollX = nativeEvent.nativeEvent.contentOffset.x;
    callback();
  }, items3);
  callback4 = first1.useRef(false);
  closure_15 = first1.useRef(null);
  const items4 = [first1];
  callback4 = first1.useCallback(() => {
    closure_14.current = false;
    if (null != ref3.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, []);
  const callback5 = first1.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.contentOffset.x / closure_13);
    closure_14.current = false;
    if (rounded !== first1) {
      let QUEST_HOME_MOBILE_CAROUSEL = first;
      const BountyScrollingType = bounties(first[21]).BountyScrollingType;
      let result = { scrollingType: null, scrollingDirection: null, carouselPosition: null, questContent: null };
      result[0] = tmp2 ? BountyScrollingType.AUTO : BountyScrollingType.MANUAL;
      if (rounded > tmp3) {
        let LEFT = tmp6(QUEST_HOME_MOBILE_CAROUSEL[21]).HorizontalScrollingDirection.RIGHT;
      } else {
        LEFT = tmp6(QUEST_HOME_MOBILE_CAROUSEL[21]).HorizontalScrollingDirection.LEFT;
      }
      result[1] = LEFT;
      result[2] = rounded;
      QUEST_HOME_MOBILE_CAROUSEL = tmp6(QUEST_HOME_MOBILE_CAROUSEL[22]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
      result[3] = QUEST_HOME_MOBILE_CAROUSEL;
      result = bounties(first[20]).trackBountyCarouselScroll(result);
      callback2(rounded);
      const obj2 = bounties(first[20]);
    }
  }, items4);
  callback6 = first1.useCallback((arg0) => {
    closure_0 = arg0;
    if (null != ref3.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
    ref3.current = setTimeout(() => {
      closure_1_14.current = true;
      const current = closure_1_1.current;
      if (current != null) {
        const obj = { offset: null, animated: true };
        obj[0] = closure_0 * closure_13;
        current.scrollToOffset(obj);
      }
      closure_1_15.current = null;
    }, 350);
  }, []);
  const effect = first1.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, []);
  const items5 = [bounties, first1, callback6];
  const effect1 = first1.useEffect(() => {
    function handleModalClose(key) {
      if (key.key === handleModalClose(closure_1_2[23]).BOUNTIES_MODAL_KEY) {
        callback(false);
        const current = ref.current;
        ref.current = null;
        if (null != current) {
          let isBountyCompletedResult = closure_1_6.isBountyCompleted(current);
          if (isBountyCompletedResult) {
            isBountyCompletedResult = !ref2.current;
          }
          ref2.current = false;
          const findIndexResult = current.findIndex((id) => id.id === current);
          closure_1 = findIndexResult;
          if (-1 !== findIndexResult) {
            const findIndexResult1 = obj.findIndex((id) => {
              let tmp = arg1 > closure_1_4;
              if (tmp) {
                tmp = arg1 > closure_1;
              }
              if (tmp) {
                tmp = !closure_2_6.isBountyCompleted(id.id);
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
              handleModalClose(closure_1_2[24]).runAfterInteractions(() => {
                closure_1_16(findIndexResult1);
              });
              const tmpResult = handleModalClose(closure_1_2[24]);
            }
          }
          obj = current;
        }
      }
    }
    const subscription = ref(first[17]).subscribe("MODAL_POP", handleModalClose);
    return () => {
      ref(first[17]).unsubscribe("MODAL_POP", handleModalClose);
    };
  }, items5);
  callback7 = first1.useCallback((bountyId) => {
    let obj = bounties(first[25]);
    if (obj.shouldMigrateToAdAnalyticsInterface(bounties(first[25]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_home_bounties")) {
      let tmpResult = tmp(tmp2[26]);
      obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null };
      obj[0] = tmp(tmp2[27]).AdUserActionType.CLICK_INTERNAL;
      obj[1] = tmp(tmp2[28]).AdCreativeType.BOUNTY;
      obj[2] = bountyId.id;
      obj[3] = tmp(tmp2[21]).QuestContentCTA.START_BOUNTY;
      obj[4] = tmp(tmp2[22]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
      obj[5] = tmp(tmp2[22]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
      obj[6] = arg1;
      tmpResult.captureAdUserAction(obj);
    } else {
      tmpResult = tmp(tmp2[20]);
      obj = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, sourceQuestContent: null, questContentPosition: null };
      obj[0] = bountyId.id;
      obj[1] = tmp(tmp2[28]).AdCreativeType.BOUNTY;
      obj[2] = tmp(tmp2[22]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
      obj[3] = tmp(tmp2[21]).QuestContentCTA.START_BOUNTY;
      obj[4] = tmp(tmp2[22]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
      obj[5] = arg1;
      const result = tmpResult.trackAdContentClicked(obj);
    }
    closure_8.current = bountyId.id;
    closure_9.current = first2.isBountyCompleted(bountyId.id);
    callback3(true);
    const obj6 = ref(first[23]);
    obj6.showModal({ bountyId: bountyId.id, sourceQuestContent: bounties(first[22]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL });
  }, []);
  const tmp20 = ref(first[29])();
  isInView = tmp20.isInView;
  const items6 = [first1, callback7, isInView, first2];
  const items7 = [bounties, callback];
  const callback8 = first1.useCallback((item) => {
    item = item.item;
    const index = item.index;
    return closure_9(bounties(first[30]).BillableAdPlacementImpressionTrackerNative, {
      adContentId: item.id,
      adCreativeType: bounties(first[28]).AdCreativeType.BOUNTY,
      questContent: bounties(first[22]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL,
      questContentPosition: index,
      trackGuildAndChannelMetadata: false,
      visibilityRef: closure_10,
      sourceQuestContent: bounties(first[22]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL,
      overrideVisibility: isInView && undefined,
      children() {
        return callback(ref(first[8]), { bounty: item, index, isActive: index === closure_1_4, isModalVisible: closure_1_6, onPress: closure_1_17 });
      }
    }, item.id);
  }, items6);
  const items8 = [isInView, first1, first2];
  const callback9 = first1.useCallback((arg0) => {
    closure_0 = arg0;
    let obj = {};
    let merged = Object.assign(arg0);
    obj.onLayout = function onLayout(nativeEvent) {
      let obj = index;
      if (null != index[index.index]) {
        obj = {};
        const merged = Object.assign(closure_1_10.current.children[tmp.id]);
        obj.layout = nativeEvent.nativeEvent.layout;
        closure_1_10.current.children[tmp.id] = obj;
        closure_1_11(tmp.id);
      }
      obj.onLayout(nativeEvent);
    };
    return callback4(closure_5, obj);
  }, items7);
  let obj = { style: tmp.container, children: null };
  obj = { ref: tmp20.containerRef, onLayout: callback1, children: null };
  const memo1 = first1.useMemo(() => ({ isInView, activeIndex: first1, isModalVisible: first2 }), items8);
  obj = { ref, horizontal: true, data: bounties, renderItem: callback8, keyExtractor: callback7, contentContainerStyle: tmp.listContentContainer, snapToOffsets: memo, snapToEnd: false, decelerationRate: "fast", showsHorizontalScrollIndicator: false, ItemSeparatorComponent: callback6, ListFooterComponent: callback2, onScroll: callback3, onScrollBeginDrag: callback4, onMomentumScrollEnd: callback5, scrollEventThrottle: 16, extraData: memo1, CellRendererComponent: callback9 };
  obj[2] = callback2(bounties(first[31]).FlashList, obj);
  obj[1] = callback2(closure_5, obj);
  return callback2(closure_5, obj);
}
let c4 = importAllResult;
({ jsx: c9, jsxs: c10 } = jsxProd);
let PX_16 = ThemesDefault.space.PX_16;
PX_16 = ThemesDefault.space.PX_16;
let closure_13 = require("CARD_WIDTH").CARD_WIDTH + PX_16;
let closure_14 = createCacheKey.createStyles(() => {
  let obj = { container: null, listContentContainer: null, emptyState: null, emptyStateText: null };
  obj = { marginBottom: ThemesDefault.space.PX_48 };
  obj[0] = obj;
  obj = { paddingLeft: PX_16 };
  obj[1] = obj;
  obj[2] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_12, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.lg, overflow: "hidden", paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: 14, marginHorizontal: ThemesDefault.space.PX_16 };
  obj[3] = { flex: 1, gap: 2 };
  return obj;
});
const memoResult = importAllResult.memo(function QuestHomeBounties(shopCarouselConfig) {
  ({ verticalScrollEnabled, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel } = shopCarouselConfig);
  if (showOrbShopPlaceholderCarousel === undefined) {
    showOrbShopPlaceholderCarousel = false;
  }
  let obj = first(11083);
  const questHomeBounties = obj.useQuestHomeBounties().questHomeBounties;
  const tmp3 = callback4();
  first = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  if (questHomeBounties.length > 0) {
    const items = [tmp(1373).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET];
    let items1 = items;
  } else {
    items1 = [];
  }
  let tmpResult = tmp(6251);
  const tmp4 = callback(tmpResult.useSelectedDismissibleContent(items1), 2);
  first = tmp4[0];
  importDefault = tmp6;
  dependencyMap = importAllResult.useRef(false);
  const items2 = [first];
  const effect = importAllResult.useEffect(() => {
    let current = first !== first(ref[15]).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      callback(ref[14])();
    }
  }, items2);
  const items3 = [first, tmp4[1]];
  const effect1 = importAllResult.useEffect(() => {
    function handleHide(key) {
      if (key.key === handleHide(closure_1_2[14]).PROMO_SHEET_KEY) {
        callback(closure_1_8.USER_DISMISS);
      }
    }
    if (handleHide === first(ref[15]).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET) {
      const subscription = callback(tmp[17]).subscribe("HIDE_ACTION_SHEET", handleHide);
      return () => {
        callback(table[17]).unsubscribe("HIDE_ACTION_SHEET", handleHide);
      };
    }
    tmp = ref;
  }, items3);
  tmpResult = tmp(589);
  const items4 = [closure_6];
  ({ placement, buttonVariant } = shopCarouselConfig.shopCarouselConfig);
  if (0 !== questHomeBounties.length) {
    if (!tmpResult.useStateFromStores(items4, () => closure_6.areAllBountiesCompleted())) {
      if (verticalScrollEnabled) {
        let tmp12 = "none" !== placement && obtainableOrbRewards > 0;
        if (tmp12) {
          tmp12 = orbShopProducts.length >= tmp(14671).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
          const tmp13 = orbShopProducts.length >= tmp(14671).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
        }
        if (!tmp12) {
          obj = { style: null, children: null };
          obj[0] = tmp3.container;
          obj = { bounties: null, shopCarouselButtonVariant: null, footer: null, replaceHeaderMediaWith: null };
          obj[0] = questHomeBounties;
          obj[1] = buttonVariant;
          let tmp24;
          if ("inside" === placement) {
            tmp24 = null;
          }
          obj[2] = tmp24;
          let tmp25;
          if ("replace_media" === placement) {
            tmp25 = null;
          }
          obj[3] = tmp25;
          const items5 = [callback2(StarfieldBackgroundDefault, obj), ];
          let tmp26 = null;
          if ("outside" === placement) {
            tmp26 = null;
          }
          items5[1] = tmp26;
          obj[1] = items5;
          return closure_10(View, obj);
        } else {
          obj1 = { embedded: null, replacesHeaderMedia: null, listEdgeSpacing: null, orbShopProducts: null, obtainableOrbRewards: null, showOrbShopPlaceholderCarousel: null };
          obj1[0] = "inside" === placement;
          obj1[1] = "replace_media" === placement;
          if ("outside" === placement) {
            let PX_20 = PX_16;
          } else {
            PX_20 = tmp16(712).space.PX_20;
          }
          obj1[2] = PX_20;
          obj1[3] = orbShopProducts;
          obj1[4] = obtainableOrbRewards;
          obj1[5] = showOrbShopPlaceholderCarousel;
          callback2(ListEdgeSpacerDefault, obj1);
          const tmp15 = callback2;
          tmp16 = importDefault;
          const tmp17 = ListEdgeSpacerDefault;
        }
      } else {
        const obj2 = { bounties: null };
        obj2[0] = questHomeBounties;
        return callback2(QuestHomeBountiesCarousel, obj2);
      }
    }
  }
  const obj3 = { style: tmp3.container, children: null };
  if (verticalScrollEnabled) {
    const obj4 = { bounties: null, shopCarouselButtonVariant: null, isEmptyOrCompleted: true };
    obj4[0] = questHomeBounties;
    obj4[1] = buttonVariant;
    let tmp27Result = tmp27(StarfieldBackgroundDefault, obj4);
  } else {
    const obj5 = { reason: null };
    obj5[0] = tmp9 ? closure_7.EMPTY : closure_7.COMPLETED;
    tmp27Result = tmp27(EmptyState, obj5);
  }
  obj3[1] = tmp27Result;
  return callback2(View, obj3);
});
let result = require("set").fileFinishedImporting("modules/quests/native/QuestHomeBounties.tsx");

export default memoResult;