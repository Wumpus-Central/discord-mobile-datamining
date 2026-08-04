import ListEdgeSpacer from "ListEdgeSpacer";
import importAllResult from "HapticFeedbackTypes";
import { View } from "dispatcher";
import set from "set";
import { BountyCarouselEmptyStateReason as closure_7 } from "QuestsExperimentLocations";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "getQuestContentName";
import createCacheKey from "createCacheKey";

let c10;
let c9;
const require = arg1;
function EmptyState(reason) {
  reason = reason.reason;
  const tmp = callback4();
  let obj = require(11086) /* useTrackQuestEventWithImpression */;
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
  const items = [callback2(require(5936) /* AccountAgeTier10LargeBadge */.BountiesPosterIllocon, { size: 32 }), ];
  obj = { style: tmp.emptyStateText, children: null };
  const items1 = [callback2(require(4281) /* Text */.Text, { variant: "text-sm/semibold", color: "text-default", children: stringResult }), ];
  const obj1 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl3 = tmp2(1236).intl;
  obj1[2] = intl3.format(ReqPds, {
    onClickLearnMore() {
      callback(table[14])();
    }
  });
  items1[1] = callback2(require(4281) /* Text */.Text, obj1);
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
  let obtainableOrbRewards;
  let orbShopProducts;
  let showOrbShopPlaceholderCarousel;
  bounties = bounties.bounties;
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel } = bounties);
  if (showOrbShopPlaceholderCarousel === undefined) {
    showOrbShopPlaceholderCarousel = false;
  }
  let ref;
  let first;
  let callback;
  let first1;
  let closure_5;
  let first2;
  let closure_7;
  let closure_8;
  let callback2;
  let closure_10;
  callback = undefined;
  let closure_12;
  let closure_13;
  let callback4;
  let closure_15;
  let callback6;
  let callback7;
  let isInView;
  let tmp = callback4();
  let tmp2 = obtainableOrbRewards > 0;
  if (tmp2) {
    tmp2 = orbShopProducts.length >= bounties(first[18]).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
    let tmp5 = orbShopProducts.length >= bounties(first[18]).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
  }
  ref = first1.useRef(null);
  const tmp7 = callback(first1.useState(0), 2);
  first = tmp7[0];
  callback = tmp7[1];
  const tmp9 = callback(first1.useState(0), 2);
  first1 = tmp9[0];
  closure_5 = tmp9[1];
  const tmp11 = callback(first1.useState(false), 2);
  first2 = tmp11[0];
  closure_7 = tmp11[1];
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
    let closure_0 = arg0;
    if (null != ref3.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
    ref3.current = setTimeout(() => {
      outer1_14.current = true;
      const current = outer1_1.current;
      if (current != null) {
        const obj = { offset: null, animated: true };
        obj[0] = closure_0 * closure_13;
        current.scrollToOffset(obj);
      }
      outer1_15.current = null;
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
      if (key.key === handleModalClose(outer1_2[23]).BOUNTIES_MODAL_KEY) {
        callback(false);
        const current = ref.current;
        ref.current = null;
        if (null != current) {
          let isBountyCompletedResult = outer1_6.isBountyCompleted(current);
          if (isBountyCompletedResult) {
            isBountyCompletedResult = !ref2.current;
          }
          ref2.current = false;
          const findIndexResult = current.findIndex((id) => id.id === current);
          let closure_1 = findIndexResult;
          if (-1 !== findIndexResult) {
            const findIndexResult1 = obj.findIndex((id) => {
              let tmp = arg1 > outer1_4;
              if (tmp) {
                tmp = arg1 > closure_1;
              }
              if (tmp) {
                tmp = !outer2_6.isBountyCompleted(id.id);
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
              handleModalClose(outer1_2[24]).runAfterInteractions(() => {
                outer1_16(findIndexResult1);
              });
              const tmpResult = handleModalClose(outer1_2[24]);
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
  const tmp26 = ref(first[29])();
  isInView = tmp26.isInView;
  const items6 = [first1, callback7, isInView, first2];
  const items7 = [bounties, callback];
  const callback8 = first1.useCallback((item) => {
    item = item.item;
    const index = item.index;
    const obj = { adContentId: item.id, adCreativeType: null, questContent: null, questContentPosition: null, trackGuildAndChannelMetadata: false, visibilityRef: null, sourceQuestContent: null, overrideVisibility: null, children: null };
    obj[1] = bounties(first[28]).AdCreativeType.BOUNTY;
    obj[2] = bounties(first[22]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
    obj[3] = index;
    obj[5] = closure_10;
    obj[6] = bounties(first[22]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
    obj[7] = isInView && undefined;
    obj[8] = function children() {
      return callback(ref(first[8]), { bounty: item, index, isActive: index === outer1_4, isModalVisible: outer1_6, onPress: outer1_17 });
    };
    return closure_9(bounties(first[30]).BillableAdPlacementImpressionTrackerNative, obj, item.id);
  }, items6);
  const items8 = [isInView, first1, first2];
  const callback9 = first1.useCallback((arg0) => {
    let closure_0 = arg0;
    let obj = {};
    let merged = Object.assign(arg0);
    obj.onLayout = function onLayout(nativeEvent) {
      let obj = index;
      if (null != index[index.index]) {
        obj = {};
        const merged = Object.assign(outer1_10.current.children[tmp.id]);
        obj.layout = nativeEvent.nativeEvent.layout;
        outer1_10.current.children[tmp.id] = obj;
        outer1_11(tmp.id);
      }
      obj.onLayout(nativeEvent);
    };
    return callback4(closure_5, obj);
  }, items7);
  let obj = { style: tmp.container, children: null };
  obj = { ref: tmp26.containerRef, onLayout: callback1, children: null };
  const memo1 = first1.useMemo(() => ({ isInView, activeIndex: first1, isModalVisible: first2 }), items8);
  obj = { ref, horizontal: true, data: bounties, renderItem: callback8, keyExtractor: callback7, contentContainerStyle: tmp.listContentContainer, snapToOffsets: memo, snapToEnd: false, decelerationRate: "fast", showsHorizontalScrollIndicator: false, ItemSeparatorComponent: callback6, ListFooterComponent: callback2, onScroll: callback3, onScrollBeginDrag: callback4, onMomentumScrollEnd: callback5, scrollEventThrottle: 16, extraData: memo1, CellRendererComponent: callback9 };
  obj[2] = callback2(bounties(first[31]).FlashList, obj);
  const items9 = [callback2(closure_5, obj), ];
  let tmp32Result = null;
  if (tmp2) {
    const obj1 = { orbShopProducts: null, obtainableOrbRewards: null, showOrbShopPlaceholderCarousel: null };
    obj1[0] = orbShopProducts;
    obj1[1] = obtainableOrbRewards;
    obj1[2] = showOrbShopPlaceholderCarousel;
    tmp32Result = callback2(ref(first[32]), obj1);
  }
  items9[1] = tmp32Result;
  obj[1] = items9;
  return closure_10(closure_5, obj);
}
let c4 = importAllResult;
({ jsx: c9, jsxs: c10 } = jsxProd);
let PX_16 = require("Themes").space.PX_16;
PX_16 = require("Themes").space.PX_16;
let closure_13 = require("CARD_WIDTH").CARD_WIDTH + PX_16;
let closure_14 = createCacheKey.createStyles(() => {
  let obj = { container: null, listContentContainer: null, emptyState: null, emptyStateText: null };
  obj = { marginBottom: importDefault(712).space.PX_48 };
  obj[0] = obj;
  obj = { paddingLeft: PX_16 };
  obj[1] = obj;
  obj[2] = { flexDirection: "row", alignItems: "center", gap: importDefault(712).space.PX_12, borderWidth: 1, borderColor: importDefault(712).colors.BORDER_MUTED, backgroundColor: importDefault(712).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(712).radii.lg, overflow: "hidden", paddingHorizontal: importDefault(712).space.PX_16, paddingVertical: 14, marginHorizontal: importDefault(712).space.PX_16 };
  obj[3] = { flex: 1, gap: 2 };
  return obj;
});
const memoResult = importAllResult.memo(function QuestHomeBounties(arg0) {
  let obtainableOrbRewards;
  let orbShopProducts;
  let showOrbShopPlaceholderCarousel;
  let verticalScrollEnabled;
  ({ verticalScrollEnabled, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel } = arg0);
  if (showOrbShopPlaceholderCarousel === undefined) {
    showOrbShopPlaceholderCarousel = false;
  }
  let obj = dependencyMap;
  let obj1 = first(10374);
  const questHomeBounties = obj1.useQuestHomeBounties().questHomeBounties;
  const tmp2 = callback4();
  first = undefined;
  let importDefault;
  dependencyMap = undefined;
  if (questHomeBounties.length > 0) {
    const items = [tmp(1358).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET];
    let items1 = items;
  } else {
    items1 = [];
  }
  let tmpResult = tmp(5931);
  const tmp3 = callback(tmpResult.useSelectedDismissibleContent(items1), 2);
  first = tmp3[0];
  importDefault = tmp5;
  dependencyMap = importAllResult.useRef(false);
  const items2 = [first];
  const effect = importAllResult.useEffect(() => {
    let current = first !== first(ref[15]).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      _undefined(ref[14])();
    }
  }, items2);
  const items3 = [first, tmp3[1]];
  const effect1 = importAllResult.useEffect(() => {
    function handleHide(key) {
      if (key.key === handleHide(outer1_2[14]).PROMO_SHEET_KEY) {
        callback(outer1_8.USER_DISMISS);
      }
    }
    if (handleHide === first(ref[15]).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET) {
      const subscription = _undefined(tmp[17]).subscribe("HIDE_ACTION_SHEET", handleHide);
      return () => {
        callback(table[17]).unsubscribe("HIDE_ACTION_SHEET", handleHide);
      };
    }
    tmp = ref;
  }, items3);
  let tmp8 = 0 === questHomeBounties.length;
  tmpResult = tmp(589);
  const items4 = [set];
  const stateFromStores = tmpResult.useStateFromStores(items4, () => set.areAllBountiesCompleted());
  let tmp10 = !tmp8;
  if (!tmp8) {
    tmp10 = !stateFromStores;
  }
  if (tmp10) {
    tmp10 = obtainableOrbRewards > 0;
  }
  if (tmp10) {
    tmp10 = orbShopProducts.length >= tmp(14215).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
    const tmp11 = orbShopProducts.length >= tmp(14215).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
  }
  if (!tmp8) {
    if (!stateFromStores) {
      if (verticalScrollEnabled) {
        obj = { style: null, children: null };
        obj[0] = tmp2.container;
        obj = { bounties: null };
        obj[0] = questHomeBounties;
        const items5 = [callback2(importDefault(14229), obj), ];
        let tmp17Result = null;
        if (tmp10) {
          obj1 = { orbShopProducts: null, obtainableOrbRewards: null, showOrbShopPlaceholderCarousel: null };
          obj1[0] = orbShopProducts;
          obj1[1] = obtainableOrbRewards;
          obj1[2] = showOrbShopPlaceholderCarousel;
          tmp17Result = tmp17(tmp18(14226), obj1);
        }
        items5[1] = tmp17Result;
        obj[1] = items5;
        let tmp15Result = closure_10(View, obj);
        const tmp15 = closure_10;
        const tmp16 = View;
        tmp17 = callback2;
        tmp18 = importDefault;
      } else {
        const obj2 = { bounties: null, orbShopProducts: null, obtainableOrbRewards: null, showOrbShopPlaceholderCarousel: null };
        obj2[0] = questHomeBounties;
        obj2[1] = orbShopProducts;
        obj2[2] = obtainableOrbRewards;
        obj2[3] = showOrbShopPlaceholderCarousel;
        tmp15Result = callback2(QuestHomeBountiesCarousel, obj2);
      }
      return tmp15Result;
    }
  }
  const obj3 = { style: tmp2.container, children: null };
  if (verticalScrollEnabled) {
    obj = { bounties: null, isEmptyOrCompleted: null };
    obj[0] = questHomeBounties;
    if (!tmp8) {
      tmp8 = stateFromStores;
    }
    obj[1] = tmp8;
    let tmp20Result = tmp20(importDefault(14229), obj);
    const tmp25 = importDefault(14229);
  } else {
    const obj4 = { reason: null };
    obj4[0] = tmp8 ? closure_7.EMPTY : closure_7.COMPLETED;
    tmp20Result = tmp20(EmptyState, obj4);
  }
  obj3[1] = tmp20Result;
  tmp20Result = tmp20(View, obj3);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestHomeBounties.tsx");

export default memoResult;