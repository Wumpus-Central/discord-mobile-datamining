// discord_app/modules/quests/native/QuestHome.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import useNavigation from "../../../design/components/Navigator/native/useNavigation.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import QuestTypes from "../QuestTypes.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import _modDef5904 from "../../../../_runtime/metro/05904__.js";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import QuestDataUtils from "../utils/QuestDataUtils.tsx";
import QuestActionCreators from "../QuestActionCreators.tsx";
import QuestContentImpressionTracker from "QuestContentImpressionTracker.native.tsx";
import BountiesModalActionCreatorsDefault from "BountiesModal/BountiesModalActionCreators.tsx";
import BountiesModalTypes from "BountiesModal/BountiesModalTypes.tsx";
import QuestHomeEmptyStateDefault from "QuestHomeEmptyState.tsx";
import QuestHomeBountiesDefault from "QuestHomeBounties.tsx";
import QuestHomeOpenTriggerPoint2 from "../../experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx";
import QuestHomeRoundtripTrackerDefault from "../QuestHomeRoundtripTracker.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import QuestHomeNavigationStore from "../QuestHomeNavigationStore.tsx";
import QuestStore from "../QuestStore.tsx";
import QuestUtmStore from "../QuestUtmStore.tsx";

require = fn;
function EmptyStateNoQuestsAvailable() {
  const navigation = useNavigation.useNavigation();
  const items = [navigation];
  const callback = noop.useCallback(() => navigation.goBack(), items);
  const obj2 = { action: null };
  const obj3 = { variant: "secondary", text: null, onPress: null };
  const intl = util.intl;
  obj3.text = intl.string(util.t["/g10LC"]);
  obj3.onPress = callback;
  obj2.action = closure_1_14(components_Button_Button.Button, obj3);
  return closure_1_14(QuestHomeEmptyStateDefault, obj2);
}
function EmptyStateFiltered(onClearFilters) {
  const obj = { action: null, title: null, subtitle: null };
  const obj2 = { variant: "secondary", text: null, onPress: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.urZl31);
  obj2.onPress = onClearFilters.onClearFilters;
  obj.action = closure_1_14(components_Button_Button.Button, obj2);
  const intl2 = util.intl;
  obj.title = intl2.string(util.t.PBfFnx);
  const intl3 = util.intl;
  obj.subtitle = intl3.string(util.t.nwdKFC);
  return closure_1_14(QuestHomeEmptyStateDefault, obj);
}
function HeaderPreviewButton() {
  const callback = noop.useCallback(() => {
    ModalActionCreatorsDefault.popAll();
    openUserSettings.openUserSettings({ screen: QUEST_PREVIEW_TOOL_2.QUEST_PREVIEW_TOOL_2 });
  }, []);
  const tmp = closure_17();
  let tmp5 = null;
  if (obj.useShouldShowPreviewToolTab()) {
    const obj2 = { style: tmp.previewButton, children: null };
    const obj3 = { grow: true, onPress: callback, variant: "primary", text: null };
    const intl = util.intl;
    obj3.text = intl.string(util.t.tx5Ax5);
    obj2.children = closure_1_14(components_Button_Button.Button, obj3);
    tmp5 = closure_1_14(hasOwnProperty, obj2);
  }
  return tmp5;
}
function HeaderWithBounties(arg0) {
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = arg0);
  const obj = { children: null };
  const items = [
    closure_1_14(HeaderPreviewButton, {}),
    closure_1_14(QuestHomeBountiesDefault, {
      shopCarouselConfig,
      orbShopProducts,
      obtainableOrbRewards,
      showOrbShopPlaceholderCarousel,
    }),
  ];
  const obj2 = { style: null, children: null };
  const items1 = [,];
  ({ sectionHeader: arr2[0], sectionHeaderWithTag: arr2[1] } = closure_17());
  obj2.style = items1;
  const obj3 = { variant: "text-lg/semibold", color: "text-strong", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.JALI2K);
  obj2.children = closure_1_14(Text_Text.Text, obj3);
  items[2] = closure_1_14(hasOwnProperty, obj2);
  obj.children = items;
  return value2(__initData, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, StyleSheet } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5751).QuestsExperimentLocations;
const Constants = fn(1074);
({ AnalyticEvents: closure_12, UserSettingsSections: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4829);
let obj = {
  container: { flex: 1 },
  loadingContainer: null,
  sectionHeader: null,
  previewButton: null,
  sectionHeaderWithTag: null,
};
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.justifyContent = "center";
obj3.alignItems = "center";
obj.loadingContainer = obj3;
obj.sectionHeader = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj.previewButton = {
  marginBottom: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  backgroundColor: "transparent",
};
let obj5 = {
  marginBottom: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  backgroundColor: "transparent",
};
obj.sectionHeaderWithTag = { gap: nativeDefault.space.PX_4 };
let closure_17 = createStyles.createStyles(obj);
let closure_22 = noop.memo((onLayout) => {
  const obj = { onLayout: onLayout.onLayout, children: null };
  if (onLayout.shouldShowBounties) {
    const obj2 = {
      shopCarouselConfig: tmp4,
      orbShopProducts: tmp,
      obtainableOrbRewards: tmp2,
      showOrbShopPlaceholderCarousel: tmp3,
    };
    let tmp5Result = closure_1_14(HeaderWithBounties, obj2);
  } else {
    tmp5Result = closure_1_14(HeaderPreviewButton, {});
  }
  obj.children = tmp5Result;
  return closure_1_14(hasOwnProperty, obj);
});
let obj6 = { gap: nativeDefault.space.PX_4 };
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
  const isEligibleForQuests = scrollToQuestId(sortMethod[26]).getIsEligibleForQuests();
  let tmp4 = enabled();
  let obj = scrollToQuestId(sortMethod[26]);
  let tmp5 = filters;
  const items = [filters, sortMethod];
  const filteredQuests = scrollToQuestId(sortMethod[23]).useFilteredQuests(
    scrollToQuestId(sortMethod[23]).QuestTabs.ALL,
    quests.useMemo(() => ({ filters, sortMethod }), items),
  );
  quests = filteredQuests.quests;
  const excludedQuests = filteredQuests.excludedQuests;
  let isFetchingCurrentQuests = filteredQuests.isFetchingCurrentQuests;
  const hasFetched = filteredQuests.hasFetched;
  let obj2 = scrollToQuestId(sortMethod[23]);
  const items1 = [ref];
  const stateFromStoresArray = scrollToQuestId(sortMethod[12]).useStateFromStoresArray(items1, () => {
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
      let tmp8 = null == QuestDataUtils.findQuestOrReplacement(scrollToQuestId, quests, excludedQuests);
      if (tmp8) {
        tmp8 = ref.current !== scrollToQuestId;
      }
      if (tmp8) {
        const obj3 = {
          key: "QUEST_HOME_MOBILE_DEEP_LINK_QUEST_NOT_FOUND",
          content: null,
          icon: null,
          toastDurationMs: 5000,
        };
        const intl = util.intl;
        obj3.content = intl.string(util.t.sIyHuY);
        obj3.icon = _modDef5904;
        ToastActionCreatorsDefault.open(obj3);
        const obj5 = { quest_id: scrollToQuestId };
        AnalyticsUtilsDefault.track(constants.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, obj5);
        ref.current = scrollToQuestId;
      }
    }
  }, items4);
  closure_129_0 = memo;
  let obj4 = scrollToQuestId(sortMethod[12]);
  const items5 = [hasFetched];
  const stateFromStores = scrollToQuestId(sortMethod[12]).useStateFromStores(items5, () => hasFetched.useReducedMotion);
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
  const obj6 = { name: null, type: null, properties: null };
  let obj5 = scrollToQuestId(sortMethod[12]);
  obj6.name = scrollToQuestId(sortMethod[35]).ImpressionNames.QUEST_HOME;
  obj6.type = scrollToQuestId(sortMethod[35]).ImpressionTypes.VIEW;
  const tmp25 = filters(sortMethod[34]);
  obj6.properties = {
    utm_source_current: tmp24.utmSourceCurrent,
    utm_medium_current: tmp24.utmMediumCurrent,
    utm_campaign_current: tmp24.utmCampaignCurrent,
    utm_content_current: tmp24.utmContentCurrent,
    tab: scrollToQuestId(sortMethod[23]).QuestTabs.ALL,
  };
  tmp25(obj6);
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
  const obj7 = {
    utm_source_current: tmp24.utmSourceCurrent,
    utm_medium_current: tmp24.utmMediumCurrent,
    utm_campaign_current: tmp24.utmCampaignCurrent,
    utm_content_current: tmp24.utmContentCurrent,
    tab: scrollToQuestId(sortMethod[23]).QuestTabs.ALL,
  };
  const questHomeSortingFilteringAnalytics = scrollToQuestId(sortMethod[23]).useQuestHomeSortingFilteringAnalytics({
    selectedSortMethod: sortMethod,
    selectedFilters: filters,
    numQuestsVisible: quests.length,
  });
  const obj8 = scrollToQuestId(sortMethod[23]);
  const obj9 = { selectedSortMethod: sortMethod, selectedFilters: filters, numQuestsVisible: quests.length };
  enabled = scrollToQuestId(sortMethod[37]).useVirtualCurrencyMobileEnabled().enabled;
  const QuestHomeBountiesFeatureGateExperiment = scrollToQuestId(sortMethod[38]).QuestHomeBountiesFeatureGateExperiment;
  const OrbsHoldoutExperiment = scrollToQuestId(sortMethod[39]).OrbsHoldoutExperiment;
  const obj10 = scrollToQuestId(sortMethod[37]);
  const obj11 = { location: callback4.QUEST_HOME_MOBILE };
  const obj12 = { location: callback4.QUEST_HOME_MOBILE };
  const tmp30 = callback4;
  const params = scrollToQuestId(sortMethod[40]).useRoute().params;
  let previewAdCreativeIds;
  if (params != null) {
    previewAdCreativeIds = params.previewAdCreativeIds;
  }
  const obj13 = scrollToQuestId(sortMethod[40]);
  const fetchQuestHomeBounties = scrollToQuestId(sortMethod[23]).useFetchQuestHomeBounties({ previewAdCreativeIds });
  isLoading = fetchQuestHomeBounties.isLoading;
  questHomeBounties = fetchQuestHomeBounties.questHomeBounties;
  const items14 = [previewAdCreativeIds, isLoading, questHomeBounties];
  const effect5 = obj3.useEffect(() => {
    if (null != previewAdCreativeIds) {
      if (0 !== previewAdCreativeIds.length) {
        if (!isLoading) {
          const found = questHomeBounties.find((id) => previewAdCreativeIds.includes(id.id));
          if (null != found) {
            const obj2 = {
              bountyId: found.id,
              sourceQuestContent: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE,
              variant: BountiesModalTypes.BountiesModalVariant.VERTICAL_SCROLL,
            };
            BountiesModalActionCreatorsDefault.showModal(obj2);
          }
        }
      }
    }
  }, items14);
  if (enabled) {
    enabled = QuestHomeBountiesFeatureGateExperiment.useConfig(obj11).enabled;
  }
  if (enabled) {
    enabled = !OrbsHoldoutExperiment.useConfig(obj12).enabled;
  }
  if (enabled) {
    enabled = tmp(tmp2[43]).shouldShowBountiesGivenFilters(filters);
    const tmpResult5 = tmp(tmp2[43]);
  }
  const BountiesShopCarouselExperiment = tmp(tmp2[44]).BountiesShopCarouselExperiment;
  config = BountiesShopCarouselExperiment.useConfig({ location: tmp30.QUEST_HOME_MOBILE });
  const obj14 = { location: tmp30.QUEST_HOME_MOBILE };
  const tmpResult = scrollToQuestId(sortMethod[23]);
  let tmp35 = enabled;
  if (enabled) {
    tmp35 = "none" !== config.placement;
  }
  const questHomeOrbShopCarouselData = scrollToQuestId(sortMethod[45]).useQuestHomeOrbShopCarouselData({
    enabled: tmp35,
    sortType: config.sortType,
  });
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
  const obj15 = { enabled: tmp35, sortType: config.sortType };
  const tmpResult6 = scrollToQuestId(sortMethod[45]);
  const navigation = scrollToQuestId(sortMethod[13]).useNavigation();
  closure_130_1 = navigation;
  closure_130_2 = obj3.useRef(false);
  closure_130_3 = obj3.useRef(false);
  closure_130_4 = obj3.useRef(false);
  const items15 = [tmp37];
  const effect6 = obj3.useEffect(() => {
    if (scrollToQuestId) {
      sortMethod.current = true;
    }
  }, items15);
  const effect7 = obj3.useEffect(() => {
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
  const effect8 = obj3.useEffect(() => {
    function handleClaimSuccess() {
      quests.current = true;
    }
    const subscription = filters(sortMethod[15]).subscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
    return () => {
      DispatcherDefault.unsubscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
    };
  }, []);
  const items16 = [navigation];
  const effect9 = obj3.useEffect(
    () =>
      filters.addListener("beforeRemove", () => {
        if (ref.current) {
          if (ref3.current) {
            scrollToQuestId(sortMethod[16]).fireSurveyAction(
              scrollToQuestId(sortMethod[17]).SurveyActionTypes.BOUNTY_SESSION_COMPLETED,
            );
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
      }),
    items16,
  );
  const items17 = [enabled, callback6, config, products, obtainableOrbRewards, showPlaceholderCarousel];
  const items18 = [ref1];
  const callback7 = obj3.useCallback(
    () =>
      closure_2_14(closure_22, {
        shouldShowBounties: enabled,
        onLayout: callback6,
        shopCarouselConfig: config,
        orbShopProducts: products,
        obtainableOrbRewards,
        showOrbShopPlaceholderCarousel: showPlaceholderCarousel,
      }),
    items17,
  );
  const items19 = [quests, callback4];
  const callback8 = obj3.useCallback((item) => {
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
        return previewAdCreativeIds(scrollToQuestId(sortMethod[47]).QuestCard, {
          quest: item,
          questContentPosition: index,
          containerPadding: 0,
          sourceQuestContent: scrollToQuestId(sortMethod[41]).QuestContent.QUEST_HOME_MOBILE,
        });
      },
    });
  }, items18);
  let tmp46 = !isNavigationComplete;
  const callback9 = obj3.useCallback((arg0) => {
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
  quests.useRef(enabled);
  const items20 = [enabled];
  const effect10 = obj3.useEffect(() => {
    closure_23.current = enabled;
  }, items20);
  const items21 = [isEligibleForQuests];
  const effect11 = obj3.useEffect(() => {
    if (isEligibleForQuests) {
      const obj2 = { includesBounties: ref2.current };
      QuestHomeRoundtripTrackerDefault.startTracking(obj2);
      return () => {
        filters(sortMethod[48]).clearTracking();
      };
    }
  }, items21);
  const items22 = [isEligibleForQuests, tmp46];
  const effect12 = obj3.useEffect(() => {
    let tmp = isEligibleForQuests;
    if (isEligibleForQuests) {
      tmp = !isFetchingCurrentQuests;
    }
    if (tmp) {
      const obj2 = { includesBounties: ref2.current };
      QuestHomeRoundtripTrackerDefault.stopTracking(obj2);
    }
  }, items22);
  scrollToQuestId(sortMethod[23]);
  if (!isEligibleForQuests) {
    return null;
  } else if (tmp46) {
    const obj16 = { style: null, children: null };
    const items23 = [tmp4.loadingContainer, containerStyle];
    obj16.style = items23;
    tmp4 = isFetchingCurrentQuests;
    obj16.children = previewAdCreativeIds(isFetchingCurrentQuests, { animating: true });
    let tmp63Result = previewAdCreativeIds(excludedQuests, obj16);
  } else if (0 === quests.length) {
    if (0 === filters.length) {
      let tmp56 = previewAdCreativeIds(config, {});
    } else {
      const obj17 = { onClearFilters: filters.onClearFilters };
      tmp56 = previewAdCreativeIds(products, obj17);
    }
  } else {
    const obj18 = {
      ref,
      contentContainerStyle: null,
      style: null,
      accessibilityLabel: null,
      data: null,
      renderItem: null,
      showsHorizontalScrollIndicator: false,
      ListHeaderComponent: null,
      CellRendererComponent: null,
      onLayout: null,
      onScroll: null,
      onLoad: null,
      scrollEventThrottle: 16,
    };
    let num4 = 0;
    if (tmp52) {
      num4 = tmp5(tmp2[11]).space.PX_16;
    }
    const obj19 = { paddingTop: num4, paddingBottom: filters(sortMethod[27])().bottom };
    obj18.contentContainerStyle = obj19;
    const items24 = [tmp4.container, containerStyle];
    obj18.style = items24;
    let intl = tmp(tmp2[20]).intl;
    obj18.accessibilityLabel = intl.string(tmp(tmp2[20]).t.JALI2K);
    obj18.data = quests;
    obj18.renderItem = callback8;
    obj18.ListHeaderComponent = callback7;
    obj18.CellRendererComponent = callback9;
    obj18.onLayout = callback2;
    obj18.onScroll = callback1;
    obj18.onLoad = callback3;
    tmp63Result = previewAdCreativeIds(tmp(tmp2[49]).FlashList, obj18);
  }
});
