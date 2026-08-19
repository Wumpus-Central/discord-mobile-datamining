// === Module 14358: EmptyStateNoQuestsAvailable ===

// Module 14358 (EmptyStateNoQuestsAvailable)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4330 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import PressableBase from "PressableBase" /* 5433 */;
import useQuests from "useQuests" /* 10684 */;
import useBountiesExperience from "useBountiesExperience" /* 10711 */;
import QuestHomeEmptyStateDefault from "QuestHomeEmptyState" /* 14416 */;
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet" /* 14418 */;
import EmptyStateDefault from "EmptyState" /* 14420 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import zustandStore from "zustandStore" /* 10948 */;
import initializeState from "initializeState" /* 7453 */;
import keys from "keys" /* 7475 */;
import { QuestsExperimentLocations } from "QuestsExperimentLocations" /* 6716 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function EmptyStateNoQuestsAvailable() {
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  const items = [navigation];
  const callback = importAllResult.useCallback(() => navigation.goBack(), items);
  obj = { variant: "secondary", text: null, onPress: null };
  const intl = navigation(1236).intl;
  obj[1] = intl.string(navigation(1236).t["/g10LC"]);
  obj[2] = callback;
  obj[0] = callback2(navigation(4745).Button, obj);
  return callback2(QuestHomeEmptyStateDefault, obj);
}
function EmptyStateFiltered(onClearFilters) {
  const obj = { variant: "secondary", text: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.urZl31);
  obj[2] = onClearFilters.onClearFilters;
  obj[0] = callback2(Button.Button, obj);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.PBfFnx);
  const intl3 = getSystemLocale.intl;
  obj[2] = intl3.string(getSystemLocale.t.nwdKFC);
  return callback2(QuestHomeEmptyStateDefault, obj);
}
function HeaderPreviewButton() {
  const callback = importAllResult.useCallback(() => {
    let obj = callback2(5260);
    obj.popAll();
    obj = { screen: QUEST_PREVIEW_TOOL_2.QUEST_PREVIEW_TOOL_2 };
    callback(7360).openUserSettings(obj);
  }, []);
  let obj = useQuests;
  let tmp5 = null;
  if (obj.useShouldShowPreviewToolTab()) {
    obj = { style: null, children: null };
    obj[0] = tmp.previewButton;
    obj = { grow: true, onPress: null, variant: "primary", text: null };
    obj[1] = callback;
    const intl = getSystemLocale.intl;
    obj[3] = intl.string(getSystemLocale.t.tx5Ax5);
    obj[1] = callback2(Button.Button, obj);
    tmp5 = callback2(closure_5, obj);
  }
  return tmp5;
}
function HeaderWithBounties(arg0) {
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel } = arg0);
  const tmp = callback3();
  let obj = useBountiesExperience;
  const verticalScrollEnabled = obj.useBountiesExperience(QuestsExperimentLocations.QUEST_HOME_MOBILE).verticalScrollEnabled;
  const items = [callback2(HeaderPreviewButton, {}), , , ];
  let tmp4Result = !verticalScrollEnabled;
  if (!verticalScrollEnabled) {
    obj = { style: null, children: null };
    const items1 = [, ];
    ({ sectionHeader: arr2[0], sectionHeaderRow: arr2[1] } = tmp);
    obj[0] = items1;
    obj = { variant: "text-lg/semibold", color: "text-strong", children: null };
    const intl = getSystemLocale.intl;
    obj[2] = intl.string(getSystemLocale.t.qetVDw);
    const items2 = [callback2(Text.Text, obj), ];
    obj1 = { onPress: null, hitSlop: 14, "aria-label": null, accessibilityRole: "button", children: null };
    obj1[0] = openBountiesNuxPromoSheetDefault;
    const intl2 = getSystemLocale.intl;
    obj1[2] = intl2.string(getSystemLocale.t.hvVgAZ);
    const obj2 = { size: "xs", color: null };
    obj2[1] = ThemesDefault.colors.ICON_SUBTLE;
    obj1[4] = callback2(CircleInformationIcon.CircleInformationIcon, obj2);
    items2[1] = callback2(PressableBase.PressableOpacity, obj1);
    obj[1] = items2;
    tmp4Result = callback2(closure_5, obj);
  }
  const obj3 = { children: null };
  items[1] = tmp4Result;
  items[2] = callback2(EmptyStateDefault, { verticalScrollEnabled, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel });
  const obj4 = { style: items3, children: null };
  items3 = [, ];
  ({ sectionHeader: arr4[0], sectionHeaderWithTag: arr4[1] } = tmp);
  const obj5 = { variant: "text-lg/semibold", color: "text-strong", children: null };
  const intl3 = getSystemLocale.intl;
  obj5[2] = intl3.string(getSystemLocale.t.JALI2K);
  obj4[1] = callback2(Text.Text, obj5);
  items[3] = callback2(closure_5, obj4);
  obj3[0] = items;
  return callback2(closure_16, obj3);
}
let c4 = importAllResult;
({ View: c5, ActivityIndicator: closure_6, StyleSheet } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, UserSettingsSections: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.justifyContent = "center";
obj.alignItems = "center";
obj[1] = obj;
const createCacheKey = { marginBottom: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 };
obj[2] = createCacheKey;
obj[3] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
obj[4] = { marginBottom: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16, backgroundColor: "transparent" };
obj[5] = { gap: ThemesDefault.space.PX_4 };
let closure_17 = createCacheKey.createStyles(obj);
let closure_22 = importAllResult.memo((onLayout) => {
  let obj = { onLayout: onLayout.onLayout, children: null };
  if (onLayout.shouldShowBounties) {
    obj = { orbShopProducts: null, obtainableOrbRewards: null, showOrbShopPlaceholderCarousel: null };
    obj[0] = tmp;
    obj[1] = tmp2;
    obj[2] = tmp3;
    let tmp4Result = callback(HeaderWithBounties, obj);
  } else {
    tmp4Result = callback(HeaderPreviewButton, {});
  }
  obj[1] = tmp4Result;
  return callback(closure_5, obj);
});
const memoResult = importAllResult.memo(function QuestHome(filters) {
  ({ containerStyle, isNavigationComplete, scrollToQuestId } = filters);
  let _require = scrollToQuestId;
  filters = filters.filters;
  const sortMethod = filters.sortMethod;
  importAllResult = undefined;
  closure_9 = undefined;
  let isLoading;
  let questHomeBounties;
  let products;
  let obtainableOrbRewards;
  let showPlaceholderCarousel;
  closure_23 = undefined;
  let obj = _require(10685);
  const isEligibleForQuests = obj.getIsEligibleForQuests();
  let tmp4 = questHomeBounties();
  obj1 = _require(10684);
  const items = [filters, sortMethod];
  const filteredQuests = obj1.useFilteredQuests(_require(10684).QuestTabs.ALL, importAllResult.useMemo(() => ({ filters: navigation, sortMethod: closure_2 }), items));
  let quests = filteredQuests.quests;
  importAllResult = quests;
  const excludedQuests = filteredQuests.excludedQuests;
  let isFetchingCurrentQuests = filteredQuests.isFetchingCurrentQuests;
  const hasFetched = filteredQuests.hasFetched;
  let obj3 = _require(589);
  const items1 = [closure_9];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
    const quests = ref2.quests;
    const found = Array.from(quests.values()).filter((item, index) => !callback(table[32]).isQuestExpired(item));
    const mapped = found.map((item, index) => item.id);
    return mapped.sort();
  }, []);
  const items2 = [stateFromStoresArray];
  const effect = importAllResult.useEffect(() => {
    if (stateFromStoresArray.length > 0) {
      callback(ref[33]).markAdContentSeen(callback(ref[34]).AdCreativeType.QUEST, tmp);
      const obj = callback(ref[33]);
    }
  }, items2);
  closure_9 = importAllResult.useRef(null);
  const items3 = [scrollToQuestId, quests, excludedQuests];
  const memo = importAllResult.useMemo(() => {
    if (null == callback) {
      return null;
    } else {
      const result = callback(ref[32]).findQuestOrReplacement(tmp, closure_4, first);
      callback = result;
      let findIndexResult = null;
      if (null != result) {
        findIndexResult = closure_4.findIndex((item, index) => item.id === id.id);
      }
      return findIndexResult;
    }
  }, items3);
  const items4 = [scrollToQuestId, quests, excludedQuests, hasFetched, isFetchingCurrentQuests];
  const effect1 = importAllResult.useEffect(() => {
    let tmp2 = null != callback;
    if (tmp2) {
      tmp2 = "" !== callback;
    }
    if (tmp2) {
      tmp2 = callback5;
    }
    if (tmp2) {
      tmp2 = !closure_6;
    }
    if (tmp2) {
      let obj = callback(ref[32]);
      let tmp8 = null == obj.findQuestOrReplacement(callback, closure_4, first);
      if (tmp8) {
        tmp8 = ref2.current !== callback;
      }
      if (tmp8) {
        obj = { key: "QUEST_HOME_MOBILE_DEEP_LINK_QUEST_NOT_FOUND", content: null, icon: null, toastDurationMs: 5000 };
        const intl = callback(ref[20]).intl;
        obj[1] = intl.string(callback(ref[20]).t.sIyHuY);
        obj[2] = navigation(ref[36]);
        navigation(ref[35]).open(obj);
        const obj2 = navigation(ref[35]);
        obj = { quest_id: null };
        obj[0] = callback;
        navigation(ref[37]).track(callback6.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, obj);
        ref2.current = callback;
        const obj4 = navigation(ref[37]);
      }
    }
  }, items4);
  _require = memo;
  importAllResult = undefined;
  let callback5;
  let obj4 = _require(589);
  const items5 = [callback5];
  const stateFromStores = obj4.useStateFromStores(items5, () => callback5.useReducedMotion);
  let navigation = stateFromStores;
  const ref = importAllResult.useRef(null);
  dependencyMap = ref;
  const ref1 = importAllResult.useRef({ parent: { scrollY: 0 }, children: {} });
  let callback = importAllResult.useCallback((arg0) => {
    const keys = Object.keys(closure_3.current.children);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp4 = null != arg0;
      if (tmp4) {
        tmp4 = tmp3 !== arg0;
      }
      if (!tmp4) {
        let tmp8 = closure_3.current.children[tmp3];
        if (tmp8 != null) {
          let calculateVisibility = tmp8.calculateVisibility;
          if (calculateVisibility != null) {
            let calculateVisibilityResult = calculateVisibility();
          }
        }
      }
      continue;
    }
  }, []);
  importAllResult = callback;
  const items6 = [callback];
  const items7 = [callback];
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    closure_3.current.parent.scrollY = nativeEvent.nativeEvent.contentOffset.y;
    callback2();
  }, items6);
  const callback2 = importAllResult.useCallback((nativeEvent) => {
    closure_3.current.parent.layout = nativeEvent.nativeEvent.layout;
    callback2();
  }, items7);
  const tmp17 = callback(importAllResult.useState(false), 2);
  const first = tmp17[0];
  closure_6 = tmp17[1];
  const items8 = [callback];
  const callback3 = importAllResult.useCallback(() => {
    callback3(true);
  }, []);
  const callback4 = importAllResult.useCallback((nativeEvent) => {
    const obj = {};
    const merged = Object.assign(closure_3.current.children[arg1]);
    obj.layout = nativeEvent.nativeEvent.layout;
    closure_3.current.children[arg1] = obj;
    callback2(arg1);
  }, items8);
  const items9 = [stateFromStores];
  callback5 = importAllResult.useCallback((arg0) => {
    if (null != ref.current) {
      const current = tmp.current;
      const obj = { index: null, animated: null, viewOffset: null };
      obj[0] = arg0;
      obj[1] = !navigation;
      obj[2] = navigation(ref[11]).space.PX_8;
      current.scrollToIndex(obj);
    }
  }, items9);
  const items10 = [callback];
  const callback6 = importAllResult.useCallback((nativeEvent) => {
    closure_3.current.parent.firstItemOffset = nativeEvent.nativeEvent.layout.height;
    callback2();
  }, items10);
  const items11 = [first, stateFromStores, memo, callback5];
  const effect2 = importAllResult.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = -1 !== closure_0;
    }
    if (tmp2) {
      tmp2 = first;
    }
    if (tmp2) {
      callback5(closure_0);
      stateFromStoresArray.setState({ scrollToQuestId: null });
    }
  }, items11);
  const tmp24 = ref((getUtmCurrentContext) => getUtmCurrentContext.getUtmCurrentContext());
  { name: _require(503).ImpressionNames.QUEST_HOME, type: _require(503).ImpressionTypes.VIEW, properties: null };
  obj = { utm_source_current: tmp24.utmSourceCurrent, utm_medium_current: tmp24.utmMediumCurrent, utm_campaign_current: tmp24.utmCampaignCurrent, utm_content_current: tmp24.utmContentCurrent, tab: _require(10684).QuestTabs.ALL };
  obj[2] = obj;
  navigation(9177)(obj);
  const items12 = [isEligibleForQuests];
  const effect3 = importAllResult.useEffect(() => {
    if (closure_3) {
      const QuestHomeOpenTriggerPoint = callback(ref[40]).QuestHomeOpenTriggerPoint;
      QuestHomeOpenTriggerPoint.trigger();
    }
  }, items12);
  const items13 = [filters, sortMethod, hasFetched, ref];
  const effect4 = importAllResult.useEffect(() => {
    let tmp2 = null != ref.current;
    if (tmp2) {
      tmp2 = callback5;
    }
    if (tmp2) {
      const current = ref.current;
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items13);
  let obj7 = _require(10684);
  obj1 = { selectedSortMethod: sortMethod, selectedFilters: filters, numQuestsVisible: quests.length };
  const questHomeSortingFilteringAnalytics = obj7.useQuestHomeSortingFilteringAnalytics(obj1);
  const tmp25 = navigation(9177);
  let tmp5 = navigation;
  let showBounties = _require(4380).useVirtualCurrencyMobileEnabled().enabled;
  const obj10 = _require(4380);
  const bountiesExperience = _require(10711).useBountiesExperience(callback4.QUEST_HOME_MOBILE);
  const verticalScrollEnabled = bountiesExperience.verticalScrollEnabled;
  const OrbsHoldoutExperiment = _require(14441).OrbsHoldoutExperiment;
  let obj2 = { location: callback4.QUEST_HOME_MOBILE };
  const obj11 = _require(10711);
  const tmp30 = callback4;
  const params = _require(1501).useRoute().params;
  let previewAdCreativeIds;
  if (params != null) {
    previewAdCreativeIds = params.previewAdCreativeIds;
  }
  let tmpResult = tmp(10684);
  const fetchQuestHomeBounties = tmpResult.useFetchQuestHomeBounties({ previewAdCreativeIds });
  isLoading = fetchQuestHomeBounties.isLoading;
  questHomeBounties = fetchQuestHomeBounties.questHomeBounties;
  const items14 = [previewAdCreativeIds, verticalScrollEnabled, isLoading, questHomeBounties];
  const effect5 = obj2.useEffect(() => {
    if (null != previewAdCreativeIds) {
      if (0 !== previewAdCreativeIds.length) {
        if (verticalScrollEnabled) {
          if (!isLoading) {
            const found = questHomeBounties.find((item, index) => closure_15.includes(item.id));
            if (null != found) {
              navigation(ref[14]);
              const obj = { bountyId: null, sourceQuestContent: null };
              obj[0] = found.id;
              obj[1] = callback(ref[44]).QuestContent.VIDEO_MODAL_MOBILE;
              obj.showModal(obj);
            }
          }
        }
      }
    }
  }, items14);
  if (showBounties) {
    showBounties = bountiesExperience.showBounties;
  }
  if (showBounties) {
    showBounties = !OrbsHoldoutExperiment.useConfig(obj2).enabled;
  }
  if (showBounties) {
    tmpResult = tmp(7474);
    showBounties = tmpResult.shouldShowBountiesGivenFilters(filters);
  }
  const BountiesShopCarouselExperiment = tmp(14423).BountiesShopCarouselExperiment;
  obj3 = { location: tmp30.QUEST_HOME_MOBILE };
  const config = BountiesShopCarouselExperiment.useConfig(obj3);
  ({ enabled, variation } = config);
  const obj13 = _require(1501);
  if (enabled) {
    enabled = showBounties;
  }
  const questHomeOrbShopCarouselData = _require(14433).useQuestHomeOrbShopCarouselData({ enabled, variation });
  products = questHomeOrbShopCarouselData.products;
  obtainableOrbRewards = questHomeOrbShopCarouselData.obtainableOrbRewards;
  showPlaceholderCarousel = questHomeOrbShopCarouselData.showPlaceholderCarousel;
  let tmp37 = showBounties;
  if (showBounties) {
    tmp37 = !isLoading;
  }
  if (tmp37) {
    tmp37 = questHomeBounties.length > 0;
  }
  _require = tmp37;
  const tmpResult1 = _require(14433);
  navigation = _require(1500).useNavigation();
  dependencyMap = obj2.useRef(false);
  callback = obj2.useRef(false);
  importAllResult = obj2.useRef(false);
  const items15 = [tmp37];
  const effect6 = obj2.useEffect(() => {
    if (closure_0) {
      closure_2.current = true;
    }
  }, items15);
  const effect7 = obj2.useEffect(() => {
    function handleBountiesModalPush(closure_1_2) {
      if (closure_1_2.key === handleBountiesModalPush(closure_1_2[14]).BOUNTIES_MODAL_KEY) {
        closure_3.current = true;
      }
    }
    const subscription = navigation(ref[15]).subscribe("MODAL_PUSH", handleBountiesModalPush);
    return () => {
      navigation(table[15]).unsubscribe("MODAL_PUSH", handleBountiesModalPush);
    };
  }, []);
  const effect8 = obj2.useEffect(() => {
    function handleClaimSuccess() {
      closure_4.current = true;
    }
    const subscription = navigation(ref[15]).subscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
    return () => {
      navigation(table[15]).unsubscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
    };
  }, []);
  const items16 = [navigation];
  const effect9 = obj2.useEffect(() => navigation.addListener("beforeRemove", () => {
    if (ref.current) {
      if (ref3.current) {
        closure_1_0(closure_1_2[16]).fireSurveyAction(closure_1_0(closure_1_2[17]).SurveyActionTypes.BOUNTY_SESSION_COMPLETED);
        const obj = closure_1_0(closure_1_2[16]);
      } else {
        const fireSurveyAction = closure_1_0(closure_1_2[16]).fireSurveyAction;
        const SurveyActionTypes = closure_1_0(closure_1_2[17]).SurveyActionTypes;
        if (ref2.current) {
          fireSurveyAction(SurveyActionTypes.BOUNTY_ABANDONED);
        } else {
          fireSurveyAction(SurveyActionTypes.BOUNTY_IMMEDIATE_DISMISSAL);
        }
        const tmp5 = closure_1_0(closure_1_2[16]);
      }
    }
  }), items16);
  const items17 = [showBounties, callback6, products, obtainableOrbRewards, showPlaceholderCarousel];
  const items18 = [ref1];
  const callback7 = obj2.useCallback(() => verticalScrollEnabled(isFetchingCurrentQuests, { shouldShowBounties: showBounties, onLayout: callback6, orbShopProducts: products, obtainableOrbRewards, showOrbShopPlaceholderCarousel: showPlaceholderCarousel }), items17);
  const items19 = [quests, callback4];
  const callback8 = obj2.useCallback((item) => {
    item = item.item;
    const index = item.index;
    return verticalScrollEnabled(callback(ref[48]).QuestContentImpressionTrackerNative, {
      questOrQuests: item,
      questContent: callback(ref[44]).QuestContent.QUEST_HOME_MOBILE,
      questContentPosition: index,
      trackGuildAndChannelMetadata: false,
      visibilityRef: ref1,
      skipRemountKey: true,
      sourceQuestContent: callback(ref[44]).QuestContent.QUEST_HOME_MOBILE,
      children() {
        return verticalScrollEnabled(item(closure_1_2[49]).QuestCard, { quest: item, questContentPosition: index, containerPadding: 0, sourceQuestContent: item(closure_1_2[44]).QuestContent.QUEST_HOME_MOBILE });
      }
    });
  }, items18);
  let tmp46 = !isNavigationComplete;
  const callback9 = obj2.useCallback((arg0) => {
    closure_0 = arg0;
    const obj = {};
    const merged = Object.assign(arg0);
    obj.onLayout = function onLayout(arg0) {
      if (null != closure_1_4[index.index]) {
        callback4(arg0, tmp.id);
      }
      index.onLayout(arg0);
    };
    return verticalScrollEnabled(first, obj);
  }, items19);
  if (isNavigationComplete) {
    let tmp47 = showBounties;
    if (showBounties) {
      tmp47 = isLoading;
    }
    tmp46 = tmp47;
  }
  if (!tmp46) {
    if (isFetchingCurrentQuests) {
      isFetchingCurrentQuests = 0 === quests.length;
    }
    tmp46 = isFetchingCurrentQuests;
  }
  isFetchingCurrentQuests = tmp46;
  closure_23 = obj2.useRef(showBounties);
  const items20 = [showBounties];
  const effect10 = obj2.useEffect(() => {
    closure_23.current = showBounties;
  }, items20);
  const items21 = [isEligibleForQuests];
  const effect11 = obj2.useEffect(() => {
    if (closure_3) {
      navigation(ref[50]);
      const obj = { includesBounties: null };
      obj[0] = ref3.current;
      obj.startTracking(obj);
      return () => {
        callback(table[50]).clearTracking();
      };
    }
  }, items21);
  const items22 = [isEligibleForQuests, tmp46];
  const effect12 = obj2.useEffect(() => {
    let tmp = closure_3;
    if (closure_3) {
      tmp = !isFetchingCurrentQuests;
    }
    if (tmp) {
      navigation(ref[50]);
      const obj = { includesBounties: null };
      obj[0] = ref3.current;
      obj.stopTracking(obj);
    }
  }, items22);
  _require(10684);
  if (!isEligibleForQuests) {
    return null;
  } else if (tmp46) {
    obj4 = { style: null, children: null };
    const items23 = [tmp4.loadingContainer, containerStyle];
    obj4[0] = items23;
    tmp4 = closure_6;
    obj4[1] = verticalScrollEnabled(closure_6, { animating: true });
    let tmp63Result = verticalScrollEnabled(first, obj4);
  } else if (0 === quests.length) {
    if (0 === filters.length) {
      let tmp56 = verticalScrollEnabled(showBounties, {});
    } else {
      const obj5 = { onClearFilters: null };
      obj5[0] = filters.onClearFilters;
      tmp56 = verticalScrollEnabled(products, obj5);
    }
  } else {
    const obj6 = { ref: null, contentContainerStyle: null, style: null, accessibilityLabel: null, data: null, renderItem: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, CellRendererComponent: null, onLayout: null, onScroll: null, onLoad: null, scrollEventThrottle: 16 };
    obj6[0] = ref;
    if (!verticalScrollEnabled) {
      let num4 = tmp5(712).space.PX_16;
    } else {
      num4 = 0;
    }
    obj7 = { paddingTop: null, paddingBottom: null };
    obj7[0] = num4;
    obj7[1] = navigation(1629)().bottom;
    obj6[1] = obj7;
    const items24 = [tmp4.container, containerStyle];
    obj6[2] = items24;
    let intl = tmp(1236).intl;
    obj6[3] = intl.string(tmp(1236).t.JALI2K);
    obj6[4] = quests;
    obj6[5] = callback8;
    obj6[7] = callback7;
    obj6[8] = callback9;
    obj6[9] = callback2;
    obj6[10] = callback1;
    obj6[11] = callback3;
    tmp63Result = verticalScrollEnabled(tmp(8029).FlashList, obj6);
  }
});
let result = require("obj132").fileFinishedImporting("modules/quests/native/QuestHome.tsx");

export default memoResult;