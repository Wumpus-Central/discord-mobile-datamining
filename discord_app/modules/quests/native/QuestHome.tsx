// discord_app/modules/quests/native/QuestHome.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import useQuests from "../hooks/QuestHooks.tsx";
import useBountiesExperience from "../experiments/useBountiesExperience.tsx";
import QuestHomeEmptyStateDefault from "QuestHomeEmptyState.tsx";
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet.tsx";
import EmptyStateDefault from "QuestHomeBounties.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../a11y/AccessibilityStore.tsx";
import closure_8 from "../QuestHomeNavigationStore.tsx";
import closure_9 from "../QuestStore.tsx";
import closure_10 from "../QuestUtmStore.tsx";
import { QuestsExperimentLocations } from "../QuestConstants.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { createStandardNavigationFactories } from "../../../../_runtime/01499_createStandardNavigationFactories.js";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { isVirtualCurrencyEnabled } from "../../virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx";
import { useBountiesExperience } from "../experiments/useBountiesExperience.tsx";
import { useQuests } from "../hooks/QuestHooks.tsx";
import { getIsEligibleForQuests } from "../lib/QuestsEligibility.tsx";
import { ListEdgeSpacer } from "QuestHomeOrbShopCarousel.tsx";

require = arg1;
function EmptyStateNoQuestsAvailable() {
  let obj = navigation(1498);
  navigation = obj.useNavigation();
  const items = [navigation];
  const callback = importAllResult.useCallback(() => navigation.goBack(), items);
  obj = { action: null };
  obj = { variant: "secondary", text: null, onPress: null };
  const intl = navigation(1233).intl;
  obj[1] = intl.string(navigation(1233).t["/g10LC"]);
  obj[2] = callback;
  obj[0] = callback2(navigation(4929).Button, obj);
  return callback2(QuestHomeEmptyStateDefault, obj);
}
function EmptyStateFiltered(onClearFilters) {
  let obj = { action: null, title: null, subtitle: null };
  obj = { variant: "secondary", text: null, onPress: null };
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
    let obj = callback2(4724);
    obj.popAll();
    obj = { screen: QUEST_PREVIEW_TOOL_2.QUEST_PREVIEW_TOOL_2 };
    callback(6255).openUserSettings(obj);
  }, []);
  let obj = useQuests;
  let tmp5 = null;
  if (obj.useShouldShowPreviewToolTab()) {
    obj = { style: null, children: null };
    obj[0] = tmp.previewButton;
    obj = { grow: true, onPress: null, variant: "primary", text: null };
    obj[1] = callback;
    const intl = tmp3(1233).intl;
    obj[3] = intl.string(tmp3(1233).t.tx5Ax5);
    obj[1] = callback2(tmp3(4929).Button, obj);
    tmp5 = callback2(closure_5, obj);
  }
  return tmp5;
}
function HeaderWithBounties(arg0) {
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = arg0);
  const tmp = callback3();
  let obj = useBountiesExperience;
  const verticalScrollEnabled = obj.useBountiesExperience(
    QuestsExperimentLocations.QUEST_HOME_MOBILE,
  ).verticalScrollEnabled;
  const items = [callback2(HeaderPreviewButton, {}), , ,];
  let tmp4Result = !verticalScrollEnabled;
  if (!verticalScrollEnabled) {
    obj = { style: null, children: null };
    const items1 = [,];
    ({ sectionHeader: arr2[0], sectionHeaderRow: arr2[1] } = tmp);
    obj[0] = items1;
    obj = { variant: "text-lg/semibold", color: "text-strong", children: null };
    const intl = tmp2(1233).intl;
    obj[2] = intl.string(tmp2(1233).t.qetVDw);
    const items2 = [tmp6(tmp2(4474).Text, obj)];
    obj1 = { onPress: null, hitSlop: 14, "aria-label": null, accessibilityRole: "button", children: null };
    obj1[0] = openBountiesNuxPromoSheetDefault;
    const intl2 = tmp2(1233).intl;
    obj1[2] = intl2.string(tmp2(1233).t.hvVgAZ);
    const obj2 = { size: "xs", color: null };
    obj2[1] = ThemesDefault.colors.ICON_SUBTLE;
    obj1[4] = tmp6(tmp2(4433).CircleInformationIcon, obj2);
    items2[1] = tmp6(tmp2(5077).PressableOpacity, obj1);
    obj[1] = items2;
    tmp4Result = tmp4(closure_5, obj);
  }
  const obj3 = { children: null };
  items[1] = tmp4Result;
  items[2] = callback2(EmptyStateDefault, {
    verticalScrollEnabled,
    shopCarouselConfig,
    orbShopProducts,
    obtainableOrbRewards,
    showOrbShopPlaceholderCarousel,
  });
  const obj4 = { style: items3, children: null };
  items3 = [,];
  ({ sectionHeader: arr4[0], sectionHeaderWithTag: arr4[1] } = tmp);
  const obj5 = { variant: "text-lg/semibold", color: "text-strong", children: null };
  const intl3 = tmp2(1233).intl;
  obj5[2] = intl3.string(getSystemLocale.t.JALI2K);
  obj4[1] = callback2(Text.Text, obj5);
  items[3] = callback2(closure_5, obj4);
  obj3[0] = items;
  return closure_15(closure_16, obj3);
}
let c4 = importAllResult;
({ View: c5, ActivityIndicator: closure_6, StyleSheet } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, UserSettingsSections: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let obj = {
  container: { flex: 1 },
  loadingContainer: null,
  sectionHeader: null,
  sectionHeaderRow: null,
  previewButton: null,
  sectionHeaderWithTag: null,
};
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.justifyContent = "center";
obj.alignItems = "center";
obj[1] = obj;
createCacheKey = { marginBottom: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 };
obj[2] = createCacheKey;
obj[3] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
let obj2 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
obj[4] = {
  marginBottom: ThemesDefault.space.PX_16,
  paddingHorizontal: ThemesDefault.space.PX_16,
  backgroundColor: "transparent",
};
let obj3 = {
  marginBottom: ThemesDefault.space.PX_16,
  paddingHorizontal: ThemesDefault.space.PX_16,
  backgroundColor: "transparent",
};
obj[5] = { gap: ThemesDefault.space.PX_4 };
let closure_17 = createCacheKey.createStyles(obj);
let closure_22 = importAllResult.memo((onLayout) => {
  let obj = { onLayout: onLayout.onLayout, children: null };
  if (onLayout.shouldShowBounties) {
    obj = {
      shopCarouselConfig: null,
      orbShopProducts: null,
      obtainableOrbRewards: null,
      showOrbShopPlaceholderCarousel: null,
    };
    obj[0] = tmp4;
    obj[1] = tmp;
    obj[2] = tmp2;
    obj[3] = tmp3;
    let tmp5Result = tmp5(HeaderWithBounties, obj);
  } else {
    tmp5Result = tmp5(HeaderPreviewButton, {});
  }
  obj[1] = tmp5Result;
  return closure_14(closure_5, obj);
});
let obj4 = { gap: ThemesDefault.space.PX_4 };
const memoResult = importAllResult.memo(function QuestHome(filters) {
  ({ containerStyle, isNavigationComplete, scrollToQuestId } = filters);
  let _require = scrollToQuestId;
  filters = filters.filters;
  let navigation = filters;
  const sortMethod = filters.sortMethod;
  dependencyMap = sortMethod;
  let callback;
  importAllResult = undefined;
  let first;
  closure_6 = undefined;
  let callback5;
  let stateFromStoresArray;
  closure_9 = undefined;
  let ref;
  let callback4;
  let callback6;
  let ref1;
  let verticalScrollEnabled;
  let previewAdCreativeIds;
  let isLoading;
  let questHomeBounties;
  let showBounties;
  let config;
  let products;
  let obtainableOrbRewards;
  let showPlaceholderCarousel;
  let isFetchingCurrentQuests;
  closure_24 = undefined;
  let obj = getIsEligibleForQuests;
  const isEligibleForQuests = obj.getIsEligibleForQuests();
  callback = isEligibleForQuests;
  let tmp4 = questHomeBounties();
  obj1 = useQuests;
  let obj2 = importAllResult;
  const items = [filters, sortMethod];
  const filteredQuests = obj1.useFilteredQuests(
    require("../hooks/QuestHooks.tsx").QuestTabs.ALL,
    importAllResult.useMemo(() => ({ filters: navigation, sortMethod: closure_2 }), items),
  );
  let quests = filteredQuests.quests;
  importAllResult = quests;
  const excludedQuests = filteredQuests.excludedQuests;
  first = excludedQuests;
  isFetchingCurrentQuests = filteredQuests.isFetchingCurrentQuests;
  closure_6 = isFetchingCurrentQuests;
  const hasFetched = filteredQuests.hasFetched;
  callback5 = hasFetched;
  let obj3 = initialize;
  const items1 = [closure_9];
  stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
    const quests = ref2.quests;
    const found = Array.from(quests.values()).filter((arg0) => !callback(table[32]).isQuestExpired(arg0));
    const mapped = found.map((id) => id.id);
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
        findIndexResult = closure_4.findIndex((id) => id.id === id.id);
      }
      return findIndexResult;
    }
  }, items3);
  const items4 = [scrollToQuestId, quests, excludedQuests, hasFetched, isFetchingCurrentQuests];
  const effect1 = importAllResult.useEffect(() => {
    let tmp2 = null != callback;
    if (tmp2) {
      tmp2 = "" !== tmp;
    }
    if (tmp2) {
      tmp2 = callback5;
    }
    if (tmp2) {
      tmp2 = !closure_6;
    }
    if (tmp2) {
      let obj = callback(ref[32]);
      let tmp8 = null == obj.findQuestOrReplacement(tmp, closure_4, first);
      if (tmp8) {
        tmp8 = ref2.current !== tmp;
      }
      if (tmp8) {
        obj = { key: "QUEST_HOME_MOBILE_DEEP_LINK_QUEST_NOT_FOUND", content: null, icon: null, toastDurationMs: 5000 };
        const intl = tmp4(tmp5[20]).intl;
        obj[1] = intl.string(tmp4(tmp5[20]).t.sIyHuY);
        obj[2] = navigation(tmp5[36]);
        navigation(tmp5[35]).open(obj);
        const obj2 = navigation(tmp5[35]);
        obj = { quest_id: null };
        obj[0] = tmp;
        navigation(tmp5[37]).track(callback6.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, obj);
        ref2.current = tmp;
        const obj4 = navigation(tmp5[37]);
      }
    }
  }, items4);
  _require = memo;
  navigation = undefined;
  dependencyMap = undefined;
  callback = undefined;
  importAllResult = undefined;
  first = undefined;
  closure_6 = undefined;
  callback5 = undefined;
  let obj4 = initialize;
  const items5 = [callback5];
  const stateFromStores = obj4.useStateFromStores(items5, () => callback5.useReducedMotion);
  navigation = stateFromStores;
  ref = importAllResult.useRef(null);
  dependencyMap = ref;
  ref1 = importAllResult.useRef({ parent: { scrollY: 0 }, children: {} });
  callback = ref1;
  callback = importAllResult.useCallback((arg0) => {
    const keys = Object.keys(closure_3.current.children);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp4 = null != arg0;
      if (tmp4) {
        let tmp5 = nextResult;
        tmp4 = tmp3 !== arg0;
      }
      if (!tmp4) {
        let tmp6 = closure_3;
        let tmp7 = nextResult;
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
  first = tmp17[0];
  closure_6 = tmp17[1];
  const items8 = [callback];
  const callback3 = importAllResult.useCallback(() => {
    callback3(true);
  }, []);
  callback4 = importAllResult.useCallback((nativeEvent) => {
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
  callback6 = importAllResult.useCallback((nativeEvent) => {
    closure_3.current.parent.firstItemOffset = nativeEvent.nativeEvent.layout.height;
    callback2();
  }, items10);
  const items11 = [first, stateFromStores, memo, callback5];
  const effect2 = importAllResult.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = -1 !== tmp;
    }
    if (tmp2) {
      tmp2 = first;
    }
    if (tmp2) {
      callback5(tmp);
      stateFromStoresArray.setState({ scrollToQuestId: null });
    }
  }, items11);
  const tmp24 = ref((getUtmCurrentContext) => getUtmCurrentContext.getUtmCurrentContext());
  obj = {
    name: require("../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx").ImpressionNames
      .QUEST_HOME,
    type: require("../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx").ImpressionTypes.VIEW,
    properties: null,
  };
  obj = {
    utm_source_current: tmp24.utmSourceCurrent,
    utm_medium_current: tmp24.utmMediumCurrent,
    utm_campaign_current: tmp24.utmCampaignCurrent,
    utm_content_current: tmp24.utmContentCurrent,
    tab: require("../hooks/QuestHooks.tsx").QuestTabs.ALL,
  };
  obj[2] = obj;
  navigation(8911)(obj);
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
  let obj7 = useQuests;
  obj1 = { selectedSortMethod: sortMethod, selectedFilters: filters, numQuestsVisible: quests.length };
  const questHomeSortingFilteringAnalytics = obj7.useQuestHomeSortingFilteringAnalytics(obj1);
  const tmp25 = navigation(8911);
  let tmp5 = navigation;
  showBounties =
    require("../../virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx").useVirtualCurrencyMobileEnabled()
      .enabled;
  const obj10 = isVirtualCurrencyEnabled;
  const bountiesExperience = require("../experiments/useBountiesExperience.tsx").useBountiesExperience(
    callback4.QUEST_HOME_MOBILE,
  );
  verticalScrollEnabled = bountiesExperience.verticalScrollEnabled;
  const OrbsHoldoutExperiment = require("../experiments/OrbsHoldoutExperiment.tsx").OrbsHoldoutExperiment;
  obj2 = { location: callback4.QUEST_HOME_MOBILE };
  const obj11 = useBountiesExperience;
  const tmp30 = callback4;
  const params = require("../../../../_runtime/01499_createStandardNavigationFactories.js").useRoute().params;
  previewAdCreativeIds = undefined;
  if (params != null) {
    previewAdCreativeIds = params.previewAdCreativeIds;
  }
  let tmpResult = tmp(11307);
  const fetchQuestHomeBounties = tmpResult.useFetchQuestHomeBounties({ previewAdCreativeIds });
  isLoading = fetchQuestHomeBounties.isLoading;
  questHomeBounties = fetchQuestHomeBounties.questHomeBounties;
  const items14 = [previewAdCreativeIds, verticalScrollEnabled, isLoading, questHomeBounties];
  const effect5 = obj2.useEffect(() => {
    if (null != previewAdCreativeIds) {
      if (0 !== previewAdCreativeIds.length) {
        if (verticalScrollEnabled) {
          if (!isLoading) {
            const found = questHomeBounties.find((id) => closure_15.includes(id.id));
            if (null != found) {
              let obj = navigation(ref[14]);
              obj = { bountyId: null, sourceQuestContent: null };
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
    tmpResult = tmp(7478);
    showBounties = tmpResult.shouldShowBountiesGivenFilters(filters);
  }
  const BountiesShopCarouselExperiment = tmp(14924).BountiesShopCarouselExperiment;
  obj3 = { location: tmp30.QUEST_HOME_MOBILE };
  config = BountiesShopCarouselExperiment.useConfig(obj3);
  const obj13 = createStandardNavigationFactories;
  let tmp36 = verticalScrollEnabled;
  if (verticalScrollEnabled) {
    tmp36 = showBounties;
  }
  if (tmp36) {
    tmp36 = "none" !== config.placement;
  }
  obj4 = { enabled: tmp36, sortType: config.sortType };
  const questHomeOrbShopCarouselData = require("QuestHomeOrbShopCarousel.tsx").useQuestHomeOrbShopCarouselData(obj4);
  products = questHomeOrbShopCarouselData.products;
  obtainableOrbRewards = questHomeOrbShopCarouselData.obtainableOrbRewards;
  showPlaceholderCarousel = questHomeOrbShopCarouselData.showPlaceholderCarousel;
  let tmp38 = showBounties;
  if (showBounties) {
    tmp38 = !isLoading;
  }
  if (tmp38) {
    tmp38 = questHomeBounties.length > 0;
  }
  _require = tmp38;
  const tmpResult1 = ListEdgeSpacer;
  navigation = require("../../../design/components/Navigator/native/useNavigation.native.tsx").useNavigation();
  dependencyMap = obj2.useRef(false);
  callback = obj2.useRef(false);
  importAllResult = obj2.useRef(false);
  const items15 = [tmp38];
  const effect6 = obj2.useEffect(() => {
    if (closure_0) {
      closure_2.current = true;
    }
  }, items15);
  const effect7 = obj2.useEffect(() => {
    function handleBountiesModalPush(key) {
      if (key.key === handleBountiesModalPush(closure_1_2[14]).BOUNTIES_MODAL_KEY) {
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
  const effect9 = obj2.useEffect(
    () =>
      navigation.addListener("beforeRemove", () => {
        if (ref.current) {
          if (ref3.current) {
            closure_1_0(closure_1_2[16]).fireSurveyAction(
              closure_1_0(closure_1_2[17]).SurveyActionTypes.BOUNTY_SESSION_COMPLETED,
            );
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
      }),
    items16,
  );
  const items17 = [showBounties, callback6, config, products, obtainableOrbRewards, showPlaceholderCarousel];
  const items18 = [ref1];
  const callback7 = obj2.useCallback(
    () =>
      verticalScrollEnabled(showPlaceholderCarousel, {
        shouldShowBounties: showBounties,
        onLayout: callback6,
        shopCarouselConfig: config,
        orbShopProducts: products,
        obtainableOrbRewards,
        showOrbShopPlaceholderCarousel: showPlaceholderCarousel,
      }),
    items17,
  );
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
        return closure_1_14(item(closure_1_2[49]).QuestCard, {
          quest: item,
          questContentPosition: index,
          containerPadding: 0,
          sourceQuestContent: item(closure_1_2[44]).QuestContent.QUEST_HOME_MOBILE,
        });
      },
    });
  }, items18);
  let tmp47 = !isNavigationComplete;
  const callback9 = obj2.useCallback((arg0) => {
    closure_0 = arg0;
    const obj = {};
    const merged = Object.assign(arg0);
    obj.onLayout = function onLayout(arg0) {
      if (null != closure_1_4[index.index]) {
        closure_1_11(arg0, tmp.id);
      }
      index.onLayout(arg0);
    };
    return verticalScrollEnabled(first, obj);
  }, items19);
  if (isNavigationComplete) {
    let tmp48 = showBounties;
    if (showBounties) {
      tmp48 = isLoading;
    }
    tmp47 = tmp48;
  }
  if (!tmp47) {
    if (isFetchingCurrentQuests) {
      isFetchingCurrentQuests = 0 === quests.length;
    }
    tmp47 = isFetchingCurrentQuests;
  }
  isFetchingCurrentQuests = tmp47;
  closure_24 = obj2.useRef(showBounties);
  const items20 = [showBounties];
  const effect10 = obj2.useEffect(() => {
    closure_24.current = showBounties;
  }, items20);
  const items21 = [isEligibleForQuests];
  const effect11 = obj2.useEffect(() => {
    if (closure_3) {
      let obj = navigation(ref[50]);
      obj = { includesBounties: null };
      obj[0] = ref3.current;
      obj.startTracking(obj);
      return () => {
        callback(table[50]).clearTracking();
      };
    }
  }, items21);
  const items22 = [isEligibleForQuests, tmp47];
  const effect12 = obj2.useEffect(() => {
    let tmp = closure_3;
    if (closure_3) {
      tmp = !isFetchingCurrentQuests;
    }
    if (tmp) {
      let obj = navigation(ref[50]);
      obj = { includesBounties: null };
      obj[0] = ref3.current;
      obj.stopTracking(obj);
    }
  }, items22);
  useQuests;
  if (!isEligibleForQuests) {
    return null;
  } else if (tmp47) {
    const obj5 = { style: null, children: null };
    const items23 = [tmp4.loadingContainer, containerStyle];
    obj5[0] = items23;
    tmp4 = closure_6;
    obj5[1] = verticalScrollEnabled(closure_6, { animating: true });
    let tmp64Result = verticalScrollEnabled(first, obj5);
  } else if (0 === quests.length) {
    if (0 === filters.length) {
      let tmp57 = verticalScrollEnabled(showBounties, {});
    } else {
      const obj6 = { onClearFilters: null };
      obj6[0] = filters.onClearFilters;
      tmp57 = verticalScrollEnabled(config, obj6);
    }
  } else {
    obj7 = {
      ref: null,
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
    obj7[0] = ref;
    if (!verticalScrollEnabled) {
      let num4 = tmp5(709).space.PX_16;
    } else {
      num4 = 0;
    }
    const obj8 = { paddingTop: null, paddingBottom: null };
    obj8[0] = num4;
    obj8[1] = navigation(1627)().bottom;
    obj7[1] = obj8;
    const items24 = [tmp4.container, containerStyle];
    obj7[2] = items24;
    let intl = tmp(1233).intl;
    obj7[3] = intl.string(tmp(1233).t.JALI2K);
    obj7[4] = quests;
    obj7[5] = callback8;
    obj7[7] = callback7;
    obj7[8] = callback9;
    obj7[9] = callback2;
    obj7[10] = callback1;
    obj7[11] = callback3;
    tmp64Result = verticalScrollEnabled(tmp(8116).FlashList, obj7);
    const tmp64 = verticalScrollEnabled;
  }
});
let result = require("set").fileFinishedImporting("modules/quests/native/QuestHome.tsx");

export default memoResult;
