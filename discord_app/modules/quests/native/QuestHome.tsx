// === Module 15090: QuestHome ===

// Module 15090 (QuestHome)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import useNavigation from "useNavigation" /* 1483 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4335 */;
import Text_Text from "Text/Text" /* 4632 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import components_Button_Button from "components/Button/Button" /* 5056 */;
import QuestTypes from "QuestTypes" /* 5528 */;
import AdCreativeType from "AdCreativeType" /* 5532 */;
import _modDef5678 from "module_5678" /* 5678 */;
import openUserSettings from "openUserSettings" /* 7485 */;
import QuestDataUtils from "QuestDataUtils" /* 7801 */;
import QuestActionCreators from "QuestActionCreators" /* 11409 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 11616 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 11907 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 15091 */;
import BountiesModalTypes from "BountiesModalTypes" /* 15093 */;
import QuestHomeEmptyStateDefault from "QuestHomeEmptyState" /* 15144 */;
import QuestHomeBountiesDefault from "QuestHomeBounties" /* 15146 */;
import QuestHomeOpenTriggerPoint2 from "QuestHomeOpenTriggerPoint" /* 15168 */;
import QuestHomeRoundtripTrackerDefault from "QuestHomeRoundtripTracker" /* 15249 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;
import QuestHomeNavigationStore from "QuestHomeNavigationStore" /* 11897 */;
import QuestStore from "QuestStore" /* 7805 */;
import QuestUtmStore from "QuestUtmStore" /* 7825 */;

require = fn;
function EmptyStateNoQuestsAvailable() {
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  const items = [navigation];
  const callback = noop.useCallback(() => navigation.goBack(), items);
  obj = { action: null };
  obj = { variant: "secondary", text: null, onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t["/g10LC"]);
  obj.onPress = callback;
  obj.action = closure_1_14(components_Button_Button.Button, obj);
  return closure_1_14(QuestHomeEmptyStateDefault, obj);
}
function EmptyStateFiltered(onClearFilters) {
  let obj = { action: null, title: null, subtitle: null };
  obj = { variant: "secondary", text: null, onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.urZl31);
  obj.onPress = onClearFilters.onClearFilters;
  obj.action = closure_1_14(components_Button_Button.Button, obj);
  const intl2 = util.intl;
  obj.title = intl2.string(util.t.PBfFnx);
  const intl3 = util.intl;
  obj.subtitle = intl3.string(util.t.nwdKFC);
  return closure_1_14(QuestHomeEmptyStateDefault, obj);
}
function HeaderPreviewButton() {
  const callback = noop.useCallback(() => {
    let obj = ModalActionCreatorsDefault;
    obj.popAll();
    obj = { screen: QUEST_PREVIEW_TOOL_2.QUEST_PREVIEW_TOOL_2 };
    openUserSettings.openUserSettings(obj);
  }, []);
  let obj = hooks_QuestHooks;
  let tmp5 = null;
  if (obj.useShouldShowPreviewToolTab()) {
    obj = { style: tmp.previewButton, children: null };
    obj = { grow: true, onPress: callback, variant: "primary", text: null };
    const intl = util.intl;
    obj.text = intl.string(util.t.tx5Ax5);
    obj.children = closure_1_14(components_Button_Button.Button, obj);
    tmp5 = closure_1_14(hasOwnProperty, obj);
  }
  return tmp5;
}
function HeaderWithBounties(arg0) {
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = arg0);
  let obj = { children: null };
  const items = [closure_1_14(HeaderPreviewButton, {}), closure_1_14(QuestHomeBountiesDefault, { shopCarouselConfig, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel }), ];
  obj = { style: null, children: null };
  const items1 = [, ];
  ({ sectionHeader: arr2[0], sectionHeaderWithTag: arr2[1] } = closure_17());
  obj.style = items1;
  obj = { variant: "text-lg/semibold", color: "text-strong", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.JALI2K);
  obj.children = closure_1_14(Text_Text.Text, obj);
  items[2] = closure_1_14(hasOwnProperty, obj);
  obj.children = items;
  return value2(__initData, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, StyleSheet } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5525).QuestsExperimentLocations;
const Constants = fn(1074);
({ AnalyticEvents: closure_12, UserSettingsSections: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
fn(4636);
let obj = { container: { flex: 1 }, loadingContainer: null, sectionHeader: null, previewButton: null, sectionHeaderWithTag: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.justifyContent = "center";
obj.alignItems = "center";
obj.loadingContainer = obj;
const createStyles = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj.sectionHeader = createStyles;
obj.previewButton = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: "transparent" };
let obj2 = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: "transparent" };
obj.sectionHeaderWithTag = { gap: nativeDefault.space.PX_4 };
let closure_17 = createStyles.createStyles(obj);
let closure_22 = noop.memo((onLayout) => {
  let obj = { onLayout: onLayout.onLayout, children: null };
  if (onLayout.shouldShowBounties) {
    obj = { shopCarouselConfig: tmp4, orbShopProducts: tmp, obtainableOrbRewards: tmp2, showOrbShopPlaceholderCarousel: tmp3 };
    let tmp5Result = closure_1_14(HeaderWithBounties, obj);
  } else {
    tmp5Result = closure_1_14(HeaderPreviewButton, {});
  }
  obj.children = tmp5Result;
  return closure_1_14(hasOwnProperty, obj);
});
let obj3 = { gap: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestHome.tsx");

export default noop.memo(function QuestHome(filters) {
  ({ containerStyle, isNavigationComplete, scrollToQuestId } = filters);
  filters = filters.filters;
  const sortMethod = filters.sortMethod;
  let quests;
  let ref;
  let isLoading;
  let questHomeBounties;
  let enabled;
  let config;
  let products;
  let obtainableOrbRewards;
  let showPlaceholderCarousel;
  let obj = scrollToQuestId(sortMethod[26]);
  const isEligibleForQuests = obj.getIsEligibleForQuests();
  let tmp4 = enabled();
  let obj1 = scrollToQuestId(sortMethod[23]);
  const items = [filters, sortMethod];
  const filteredQuests = obj1.useFilteredQuests(scrollToQuestId(sortMethod[23]).QuestTabs.ALL, quests.useMemo(() => ({ filters, sortMethod }), items));
  quests = filteredQuests.quests;
  const excludedQuests = filteredQuests.excludedQuests;
  let isFetchingCurrentQuests = filteredQuests.isFetchingCurrentQuests;
  const hasFetched = filteredQuests.hasFetched;
  let obj3 = scrollToQuestId(sortMethod[12]);
  const items1 = [ref];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
    quests = ref.quests;
    const found = Array.from(quests.values()).filter((item) => !scrollToQuestId(sortMethod[28]).isQuestExpired(item));
    const mapped = found.map((id) => id.id);
    return mapped.sort();
  }, []);
  const items2 = [stateFromStoresArray];
  const effect = quests.useEffect(() => {
    if (stateFromStoresArray.length > 0) {
      QuestActionCreators.markAdContentSeen(AdCreativeType.AdCreativeType.QUEST, tmp);
    }
  }, items2);
  quests.useRef(null);
  const items3 = [scrollToQuestId, quests, excludedQuests];
  const memo = quests.useMemo(() => {
    if (null == scrollToQuestId) {
      return null;
    } else {
      const result = QuestDataUtils.findQuestOrReplacement(tmp, quests, excludedQuests);
      scrollToQuestId = result;
      let findIndexResult = null;
      if (null != result) {
        findIndexResult = quests.findIndex((id) => id.id === result.id);
      }
      return findIndexResult;
    }
  }, items3);
  const items4 = [scrollToQuestId, quests, excludedQuests, hasFetched, isFetchingCurrentQuests];
  const effect1 = quests.useEffect(() => {
    let tmp2 = null != scrollToQuestId;
    if (tmp2) {
      tmp2 = "" !== scrollToQuestId;
    }
    if (tmp2) {
      tmp2 = hasFetched;
    }
    if (tmp2) {
      tmp2 = !isFetchingCurrentQuests;
    }
    if (tmp2) {
      let obj = QuestDataUtils;
      let tmp8 = null == obj.findQuestOrReplacement(scrollToQuestId, quests, excludedQuests);
      if (tmp8) {
        tmp8 = ref.current !== scrollToQuestId;
      }
      if (tmp8) {
        obj = { key: "QUEST_HOME_MOBILE_DEEP_LINK_QUEST_NOT_FOUND", content: null, icon: null, toastDurationMs: 5000 };
        const intl = util.intl;
        obj.content = intl.string(util.t.sIyHuY);
        obj.icon = _modDef5678;
        ToastActionCreatorsDefault.open(obj);
        obj = { quest_id: scrollToQuestId };
        AnalyticsUtilsDefault.track(constants.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, obj);
        ref.current = scrollToQuestId;
      }
    }
  }, items4);
  closure_129_0 = memo;
  let obj4 = scrollToQuestId(sortMethod[12]);
  const items5 = [hasFetched];
  const stateFromStores = obj4.useStateFromStores(items5, () => hasFetched.useReducedMotion);
  closure_129_1 = stateFromStores;
  ref = quests.useRef(null);
  closure_129_2 = ref;
  const ref1 = quests.useRef({ parent: { scrollY: 0 }, children: {} });
  closure_129_3 = ref1;
  const callback = quests.useCallback((arg0) => {
    const keys = Object.keys(isEligibleForQuests.current.children);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp4 = null != arg0;
      if (tmp4) {
        tmp4 = tmp3 !== arg0;
      }
      if (!tmp4) {
        let tmp8 = isEligibleForQuests.current.children[tmp3];
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
  closure_129_4 = callback;
  const items6 = [callback];
  const items7 = [callback];
  const callback1 = quests.useCallback((nativeEvent) => {
    isEligibleForQuests.current.parent.scrollY = nativeEvent.nativeEvent.contentOffset.y;
    quests();
  }, items6);
  const callback2 = quests.useCallback((nativeEvent) => {
    isEligibleForQuests.current.parent.layout = nativeEvent.nativeEvent.layout;
    quests();
  }, items7);
  const tmp17 = isEligibleForQuests(quests.useState(false), 2);
  const first = tmp17[0];
  closure_129_5 = first;
  closure_129_6 = tmp17[1];
  const items8 = [callback];
  const callback3 = quests.useCallback(() => {
    isFetchingCurrentQuests(true);
  }, []);
  const callback4 = quests.useCallback((nativeEvent, arg1) => {
    const obj = {};
    const merged = Object.assign(isEligibleForQuests.current.children[arg1]);
    obj.layout = nativeEvent.nativeEvent.layout;
    isEligibleForQuests.current.children[arg1] = obj;
    quests(arg1);
  }, items8);
  const items9 = [stateFromStores];
  const callback5 = quests.useCallback((index) => {
    if (null != sortMethod.current) {
      const current = tmp.current;
      const obj = { index, animated: !filters, viewOffset: nativeDefault.space.PX_8 };
      current.scrollToIndex(obj);
    }
  }, items9);
  closure_129_7 = callback5;
  const items10 = [callback];
  const callback6 = quests.useCallback((nativeEvent) => {
    isEligibleForQuests.current.parent.firstItemOffset = nativeEvent.nativeEvent.layout.height;
    quests();
  }, items10);
  const items11 = [first, stateFromStores, memo, callback5];
  const effect2 = quests.useEffect(() => {
    let tmp2 = null != scrollToQuestId;
    if (tmp2) {
      tmp2 = -1 !== scrollToQuestId;
    }
    if (tmp2) {
      tmp2 = excludedQuests;
    }
    if (tmp2) {
      hasFetched(scrollToQuestId);
      QuestHomeNavigationStore.setState({ scrollToQuestId: null });
    }
  }, items11);
  const tmp24 = ref((getUtmCurrentContext) => getUtmCurrentContext.getUtmCurrentContext());
  obj = { name: scrollToQuestId(sortMethod[35]).ImpressionNames.QUEST_HOME, type: scrollToQuestId(sortMethod[35]).ImpressionTypes.VIEW, properties: null };
  obj = { utm_source_current: tmp24.utmSourceCurrent, utm_medium_current: tmp24.utmMediumCurrent, utm_campaign_current: tmp24.utmCampaignCurrent, utm_content_current: tmp24.utmContentCurrent, tab: scrollToQuestId(sortMethod[23]).QuestTabs.ALL };
  obj.properties = obj;
  filters(sortMethod[34])(obj);
  const items12 = [isEligibleForQuests];
  const effect3 = quests.useEffect(() => {
    if (isEligibleForQuests) {
      const QuestHomeOpenTriggerPoint = QuestHomeOpenTriggerPoint2.QuestHomeOpenTriggerPoint;
      QuestHomeOpenTriggerPoint.trigger();
    }
  }, items12);
  const items13 = [filters, sortMethod, hasFetched, ref];
  const effect4 = quests.useEffect(() => {
    let tmp2 = null != ref.current;
    if (tmp2) {
      tmp2 = hasFetched;
    }
    if (tmp2) {
      const current = ref.current;
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items13);
  let obj7 = scrollToQuestId(sortMethod[23]);
  obj1 = { selectedSortMethod: sortMethod, selectedFilters: filters, numQuestsVisible: quests.length };
  const questHomeSortingFilteringAnalytics = obj7.useQuestHomeSortingFilteringAnalytics(obj1);
  let obj9 = scrollToQuestId(sortMethod[37]);
  enabled = obj9.useVirtualCurrencyMobileEnabled().enabled;
  const QuestHomeBountiesFeatureGateExperiment = scrollToQuestId(sortMethod[38]).QuestHomeBountiesFeatureGateExperiment;
  let obj2 = { location: callback4.QUEST_HOME_MOBILE };
  const OrbsHoldoutExperiment = scrollToQuestId(sortMethod[39]).OrbsHoldoutExperiment;
  obj3 = { location: callback4.QUEST_HOME_MOBILE };
  const tmp25 = filters(sortMethod[34]);
  const tmp30 = callback4;
  let tmp5 = filters;
  const params = scrollToQuestId(sortMethod[40]).useRoute().params;
  let previewAdCreativeIds;
  if (params != null) {
    previewAdCreativeIds = params.previewAdCreativeIds;
  }
  let tmpResult = tmp(tmp2[23]);
  const fetchQuestHomeBounties = tmpResult.useFetchQuestHomeBounties({ previewAdCreativeIds });
  isLoading = fetchQuestHomeBounties.isLoading;
  questHomeBounties = fetchQuestHomeBounties.questHomeBounties;
  const items14 = [previewAdCreativeIds, isLoading, questHomeBounties];
  const effect5 = obj2.useEffect(() => {
    if (null != previewAdCreativeIds) {
      if (0 !== previewAdCreativeIds.length) {
        if (!isLoading) {
          const found = questHomeBounties.find((id) => previewAdCreativeIds.includes(id.id));
          if (null != found) {
            const obj = { bountyId: found.id, sourceQuestContent: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE, variant: BountiesModalTypes.BountiesModalVariant.VERTICAL_SCROLL };
            obj.showModal(obj);
          }
        }
      }
    }
  }, items14);
  if (enabled) {
    enabled = QuestHomeBountiesFeatureGateExperiment.useConfig(obj2).enabled;
  }
  if (enabled) {
    enabled = !OrbsHoldoutExperiment.useConfig(obj3).enabled;
  }
  if (enabled) {
    tmpResult = tmp(tmp2[43]);
    enabled = tmpResult.shouldShowBountiesGivenFilters(filters);
  }
  const BountiesShopCarouselExperiment = tmp(tmp2[44]).BountiesShopCarouselExperiment;
  obj4 = { location: tmp30.QUEST_HOME_MOBILE };
  config = BountiesShopCarouselExperiment.useConfig(obj4);
  const obj13 = scrollToQuestId(sortMethod[40]);
  let tmp35 = enabled;
  if (enabled) {
    tmp35 = "none" !== config.placement;
  }
  const questHomeOrbShopCarouselData = scrollToQuestId(sortMethod[45]).useQuestHomeOrbShopCarouselData({ enabled: tmp35, sortType: config.sortType });
  products = questHomeOrbShopCarouselData.products;
  obtainableOrbRewards = questHomeOrbShopCarouselData.obtainableOrbRewards;
  showPlaceholderCarousel = questHomeOrbShopCarouselData.showPlaceholderCarousel;
  let tmp37 = enabled;
  if (enabled) {
    tmp37 = !isLoading;
  }
  if (tmp37) {
    tmp37 = questHomeBounties.length > 0;
  }
  closure_130_0 = tmp37;
  const obj5 = { enabled: tmp35, sortType: config.sortType };
  const tmpResult1 = scrollToQuestId(sortMethod[45]);
  const navigation = scrollToQuestId(sortMethod[13]).useNavigation();
  closure_130_1 = navigation;
  closure_130_2 = obj2.useRef(false);
  closure_130_3 = obj2.useRef(false);
  closure_130_4 = obj2.useRef(false);
  const items15 = [tmp37];
  const effect6 = obj2.useEffect(() => {
    if (scrollToQuestId) {
      sortMethod.current = true;
    }
  }, items15);
  const effect7 = obj2.useEffect(() => {
    function handleBountiesModalPush(key) {
      if (key.key === scrollToQuestId(sortMethod[14]).BOUNTIES_MODAL_KEY) {
        isEligibleForQuests.current = true;
      }
    }
    const subscription = filters(sortMethod[15]).subscribe("MODAL_PUSH", handleBountiesModalPush);
    return () => {
      DispatcherDefault.unsubscribe("MODAL_PUSH", handleBountiesModalPush);
    };
  }, []);
  const effect8 = obj2.useEffect(() => {
    function handleClaimSuccess() {
      quests.current = true;
    }
    const subscription = filters(sortMethod[15]).subscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
    return () => {
      DispatcherDefault.unsubscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
    };
  }, []);
  const items16 = [navigation];
  const effect9 = obj2.useEffect(() => filters.addListener("beforeRemove", () => {
    if (ref.current) {
      if (ref3.current) {
        scrollToQuestId(sortMethod[16]).fireSurveyAction(scrollToQuestId(sortMethod[17]).SurveyActionTypes.BOUNTY_SESSION_COMPLETED);
        const obj = scrollToQuestId(sortMethod[16]);
      } else {
        const fireSurveyAction = scrollToQuestId(sortMethod[16]).fireSurveyAction;
        const SurveyActionTypes = scrollToQuestId(sortMethod[17]).SurveyActionTypes;
        if (ref2.current) {
          fireSurveyAction(SurveyActionTypes.BOUNTY_ABANDONED);
        } else {
          fireSurveyAction(SurveyActionTypes.BOUNTY_IMMEDIATE_DISMISSAL);
        }
        const tmp5 = scrollToQuestId(sortMethod[16]);
      }
    }
  }), items16);
  const items17 = [enabled, callback6, config, products, obtainableOrbRewards, showPlaceholderCarousel];
  const items18 = [ref1];
  const callback7 = obj2.useCallback(() => closure_2_14(closure_22, { shouldShowBounties: enabled, onLayout: callback6, shopCarouselConfig: config, orbShopProducts: products, obtainableOrbRewards, showOrbShopPlaceholderCarousel: showPlaceholderCarousel }), items17);
  const items19 = [quests, callback4];
  const callback8 = obj2.useCallback((item) => {
    item = item.item;
    const index = item.index;
    return closure_2_14(QuestContentImpressionTracker.QuestContentImpressionTrackerNative, {
      questOrQuests: item,
      questContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE,
      questContentPosition: index,
      trackGuildAndChannelMetadata: false,
      visibilityRef: ref1,
      skipRemountKey: true,
      sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE,
      children() {
        return previewAdCreativeIds(scrollToQuestId(sortMethod[47]).QuestCard, { quest: item, questContentPosition: index, containerPadding: 0, sourceQuestContent: scrollToQuestId(sortMethod[41]).QuestContent.QUEST_HOME_MOBILE });
      }
    });
  }, items18);
  let tmp46 = !isNavigationComplete;
  const callback9 = obj2.useCallback((arg0) => {
    const index = arg0;
    const obj = {};
    const merged = Object.assign(arg0);
    obj.onLayout = function onLayout(arg0) {
      if (null != quests[index.index]) {
        callback4(arg0, tmp.id);
      }
      index.onLayout(arg0);
    };
    return previewAdCreativeIds(excludedQuests, obj);
  }, items19);
  if (isNavigationComplete) {
    let tmp47 = enabled;
    if (enabled) {
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
  obj2.useRef(enabled);
  const items20 = [enabled];
  const effect10 = obj2.useEffect(() => {
    closure_23.current = enabled;
  }, items20);
  const items21 = [isEligibleForQuests];
  const effect11 = obj2.useEffect(() => {
    if (isEligibleForQuests) {
      const obj = { includesBounties: ref2.current };
      obj.startTracking(obj);
      return () => {
        filters(sortMethod[48]).clearTracking();
      };
    }
  }, items21);
  const items22 = [isEligibleForQuests, tmp46];
  const effect12 = obj2.useEffect(() => {
    let tmp = isEligibleForQuests;
    if (isEligibleForQuests) {
      tmp = !isFetchingCurrentQuests;
    }
    if (tmp) {
      const obj = { includesBounties: ref2.current };
      obj.stopTracking(obj);
    }
  }, items22);
  scrollToQuestId(sortMethod[23]);
  if (!isEligibleForQuests) {
    return null;
  } else if (tmp46) {
    const obj6 = { style: null, children: null };
    const items23 = [tmp4.loadingContainer, containerStyle];
    obj6.style = items23;
    tmp4 = isFetchingCurrentQuests;
    obj6.children = previewAdCreativeIds(isFetchingCurrentQuests, { animating: true });
    let tmp63Result = previewAdCreativeIds(excludedQuests, obj6);
  } else if (0 === quests.length) {
    if (0 === filters.length) {
      let tmp56 = previewAdCreativeIds(config, {});
    } else {
      obj7 = { onClearFilters: filters.onClearFilters };
      tmp56 = previewAdCreativeIds(products, obj7);
    }
  } else {
    const obj8 = { ref, contentContainerStyle: null, style: null, accessibilityLabel: null, data: null, renderItem: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, CellRendererComponent: null, onLayout: null, onScroll: null, onLoad: null, scrollEventThrottle: 16 };
    let num4 = 0;
    if (tmp52) {
      num4 = tmp5(tmp2[11]).space.PX_16;
    }
    obj9 = { paddingTop: num4, paddingBottom: filters(sortMethod[27])().bottom };
    obj8.contentContainerStyle = obj9;
    const items24 = [tmp4.container, containerStyle];
    obj8.style = items24;
    let intl = tmp(tmp2[20]).intl;
    obj8.accessibilityLabel = intl.string(tmp(tmp2[20]).t.JALI2K);
    obj8.data = quests;
    obj8.renderItem = callback8;
    obj8.ListHeaderComponent = callback7;
    obj8.CellRendererComponent = callback9;
    obj8.onLayout = callback2;
    obj8.onScroll = callback1;
    obj8.onLoad = callback3;
    tmp63Result = previewAdCreativeIds(tmp(tmp2[49]).FlashList, obj8);
  }
});