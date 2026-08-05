// discord_app/modules/quests/native/QuestHome.tsx
import getQuestDeliveryDataForPlacement from "getQuestDeliveryDataForPlacement";
import importAllResult from "Button";
import get_ActivityIndicator from "SurveyActionTypes";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import zustandStore from "zustandStore";
import initializeState from "initializeState";
import keys from "keys";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import ME from "ME";
import jsxProd from "module_4460";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { Button } from "../../../design/components/Button/native/Button.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { useBountiesExperience } from "../experiments/useBountiesExperience.tsx";
import { useQuests } from "../hooks/QuestHooks.tsx";
import { openBountiesNuxPromoSheet } from "openBountiesNuxPromoSheet.tsx";
import { EmptyState } from "QuestHomeBounties.tsx";
import { QuestHomeEmptyState } from "QuestHomeEmptyState.tsx";

let StyleSheet;
let c5;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_6;
let map1;
const require = arg1;
function EmptyStateNoQuestsAvailable() {
  let obj = navigation(1480);
  navigation = obj.useNavigation();
  const items = [navigation];
  const callback = importAllResult.useCallback(() => navigation.goBack(), items);
  obj = { action: null };
  obj = { variant: "secondary", text: null, onPress: null };
  const intl = navigation(1236).intl;
  obj[1] = intl.string(navigation(1236).t["/g10LC"]);
  obj[2] = callback;
  obj[0] = callback2(navigation(4665).Button, obj);
  return callback2(QuestHomeEmptyState, obj);
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
  return callback2(QuestHomeEmptyState, obj);
}
function HeaderPreviewButton() {
  const callback = importAllResult.useCallback(() => {
    let obj = callback2(4460);
    obj.popAll();
    obj = { screen: QUEST_PREVIEW_TOOL_2.QUEST_PREVIEW_TOOL_2 };
    callback(5910).openUserSettings(obj);
  }, []);
  let obj = useQuests;
  let tmp5 = null;
  if (obj.useShouldShowPreviewToolTab()) {
    obj = { style: null, children: null };
    obj[0] = tmp.previewButton;
    obj = { grow: true, onPress: null, variant: "primary", text: null };
    obj[1] = callback;
    const intl = tmp3(1236).intl;
    obj[3] = intl.string(tmp3(1236).t.tx5Ax5);
    obj[1] = callback2(tmp3(4665).Button, obj);
    tmp5 = callback2(closure_5, obj);
  }
  return tmp5;
}
function HeaderWithBounties(arg0) {
  let obtainableOrbRewards;
  let orbShopProducts;
  let showOrbShopPlaceholderCarousel;
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
    const intl = tmp2(1236).intl;
    obj[2] = intl.string(tmp2(1236).t.qetVDw);
    const items2 = [tmp6(tmp2(4251).Text, obj), ];
    const obj1 = { onPress: null, hitSlop: 14, "aria-label": null, accessibilityRole: "button", children: null };
    obj1[0] = openBountiesNuxPromoSheet;
    const intl2 = tmp2(1236).intl;
    obj1[2] = intl2.string(tmp2(1236).t.hvVgAZ);
    const obj2 = { size: "xs", color: null };
    obj2[1] = Themes.colors.ICON_SUBTLE;
    obj1[4] = tmp6(tmp2(4211).CircleInformationIcon, obj2);
    items2[1] = tmp6(tmp2(4797).PressableOpacity, obj1);
    obj[1] = items2;
    tmp4Result = tmp4(closure_5, obj);
  }
  const obj3 = { children: null };
  items[1] = tmp4Result;
  items[2] = callback2(EmptyState, { verticalScrollEnabled, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel });
  const obj4 = { style: items3, children: null };
  items3 = [, ];
  ({ sectionHeader: arr4[0], sectionHeaderWithTag: arr4[1] } = tmp);
  const obj5 = { variant: "text-lg/semibold", color: "text-strong", children: null };
  const intl3 = tmp2(1236).intl;
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
let obj = { container: { flex: 1 }, loadingContainer: null, sectionHeader: null, sectionHeaderRow: null, previewButton: null, sectionHeaderWithTag: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.justifyContent = "center";
obj.alignItems = "center";
obj[1] = obj;
createCacheKey = { marginBottom: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16 };
obj[2] = createCacheKey;
obj[3] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
let obj2 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
obj[4] = { marginBottom: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16, backgroundColor: "transparent" };
let obj3 = { marginBottom: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16, backgroundColor: "transparent" };
obj[5] = { gap: require("Themes").space.PX_4 };
let closure_17 = createCacheKey.createStyles(obj);
let closure_22 = importAllResult.memo((onLayout) => {
  let obj = { onLayout: onLayout.onLayout, children: null };
  if (onLayout.shouldShowBounties) {
    obj = { orbShopProducts: null, obtainableOrbRewards: null, showOrbShopPlaceholderCarousel: null };
    obj[0] = tmp;
    obj[1] = tmp2;
    obj[2] = tmp3;
    let tmp4Result = tmp4(HeaderWithBounties, obj);
  } else {
    tmp4Result = tmp4(HeaderPreviewButton, {});
  }
  obj[1] = tmp4Result;
  return closure_14(closure_5, obj);
});
let obj4 = { gap: require("Themes").space.PX_4 };
const memoResult = importAllResult.memo(function QuestHome(filters) {
  let containerStyle;
  let enabled;
  let isNavigationComplete;
  let scrollToQuestId;
  let variation;
  ({ containerStyle, isNavigationComplete, scrollToQuestId } = filters);
  let memo = scrollToQuestId;
  filters = filters.filters;
  let navigation = filters;
  const sortMethod = filters.sortMethod;
  let dependencyMap = sortMethod;
  let callback;
  let importAllResult;
  let first;
  let closure_6;
  let callback5;
  let stateFromStoresArray;
  let initializeState;
  let ref;
  let callback4;
  let callback6;
  let ref1;
  let verticalScrollEnabled;
  let previewAdCreativeIds;
  let isLoading;
  let questHomeBounties;
  let showBounties;
  let products;
  let obtainableOrbRewards;
  let showPlaceholderCarousel;
  let c22;
  let closure_23;
  let obj = memo(10347);
  const isEligibleForQuests = obj.getIsEligibleForQuests();
  callback = isEligibleForQuests;
  let tmp4 = questHomeBounties();
  let obj1 = memo(10346);
  let obj2 = importAllResult;
  const items = [filters, sortMethod];
  const filteredQuests = obj1.useFilteredQuests(memo(10346).QuestTabs.ALL, importAllResult.useMemo(() => ({ filters: navigation, sortMethod: closure_2 }), items));
  let quests = filteredQuests.quests;
  importAllResult = quests;
  const excludedQuests = filteredQuests.excludedQuests;
  first = excludedQuests;
  let isFetchingCurrentQuests = filteredQuests.isFetchingCurrentQuests;
  closure_6 = isFetchingCurrentQuests;
  const hasFetched = filteredQuests.hasFetched;
  callback5 = hasFetched;
  let obj3 = memo(589);
  const items1 = [initializeState];
  stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
    const quests = ref2.quests;
    const found = Array.from(quests.values()).filter((arg0) => !callback(table[32]).isQuestExpired(arg0));
    const mapped = found.map((id) => id.id);
    return mapped.sort();
  }, []);
  const items2 = [stateFromStoresArray];
  const effect = importAllResult.useEffect(() => {
    if (stateFromStoresArray.length > 0) {
      memo(ref[33]).markAdContentSeen(memo(ref[34]).AdCreativeType.QUEST, tmp);
      const obj = memo(ref[33]);
    }
  }, items2);
  initializeState = importAllResult.useRef(null);
  const items3 = [scrollToQuestId, quests, excludedQuests];
  memo = importAllResult.useMemo(() => {
    if (null == memo) {
      return null;
    } else {
      const result = memo(ref[32]).findQuestOrReplacement(tmp, closure_4, first);
      memo = result;
      let findIndexResult = null;
      if (null != result) {
        findIndexResult = closure_4.findIndex((id) => id.id === id.id);
      }
      return findIndexResult;
    }
  }, items3);
  const items4 = [scrollToQuestId, quests, excludedQuests, hasFetched, isFetchingCurrentQuests];
  const effect1 = importAllResult.useEffect(() => {
    let tmp2 = null != memo;
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
      let obj = memo(ref[32]);
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
  navigation = undefined;
  dependencyMap = undefined;
  callback = undefined;
  importAllResult = undefined;
  first = undefined;
  closure_6 = undefined;
  callback5 = undefined;
  let obj4 = memo(589);
  const items5 = [callback5];
  const stateFromStores = obj4.useStateFromStores(items5, () => callback5.useReducedMotion);
  navigation = stateFromStores;
  ref = importAllResult.useRef(null);
  dependencyMap = ref;
  ref1 = importAllResult.useRef({ parent: { scrollY: 0 }, children: {} });
  callback = ref1;
  callback = importAllResult.useCallback((arg0) => {
    const keys = Object.keys(getQuestDeliveryDataForPlacement.current.children);
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
        let tmp6 = getQuestDeliveryDataForPlacement;
        let tmp7 = nextResult;
        let tmp8 = getQuestDeliveryDataForPlacement.current.children[tmp3];
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
    getQuestDeliveryDataForPlacement.current.parent.scrollY = nativeEvent.nativeEvent.contentOffset.y;
    callback();
  }, items6);
  const callback2 = importAllResult.useCallback((nativeEvent) => {
    getQuestDeliveryDataForPlacement.current.parent.layout = nativeEvent.nativeEvent.layout;
    callback();
  }, items7);
  const tmp17 = callback(importAllResult.useState(false), 2);
  first = tmp17[0];
  closure_6 = tmp17[1];
  const items8 = [callback];
  const callback3 = importAllResult.useCallback(() => {
    callback2(true);
  }, []);
  callback4 = importAllResult.useCallback((nativeEvent) => {
    const obj = {};
    const merged = Object.assign(getQuestDeliveryDataForPlacement.current.children[arg1]);
    obj.layout = nativeEvent.nativeEvent.layout;
    getQuestDeliveryDataForPlacement.current.children[arg1] = obj;
    callback(arg1);
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
    getQuestDeliveryDataForPlacement.current.parent.firstItemOffset = nativeEvent.nativeEvent.layout.height;
    callback();
  }, items10);
  const items11 = [first, stateFromStores, memo, callback5];
  const effect2 = importAllResult.useEffect(() => {
    let tmp2 = null != memo;
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
  obj = { name: null, type: null, properties: null };
  obj[0] = memo(503).ImpressionNames.QUEST_HOME;
  obj[1] = memo(503).ImpressionTypes.VIEW;
  obj = { utm_source_current: tmp24.utmSourceCurrent, utm_medium_current: tmp24.utmMediumCurrent, utm_campaign_current: tmp24.utmCampaignCurrent, utm_content_current: tmp24.utmContentCurrent, tab: memo(10346).QuestTabs.ALL };
  obj[2] = obj;
  navigation(9238)(obj);
  const items12 = [isEligibleForQuests];
  const effect3 = importAllResult.useEffect(() => {
    if (getQuestDeliveryDataForPlacement) {
      const QuestHomeOpenTriggerPoint = memo(ref[40]).QuestHomeOpenTriggerPoint;
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
  let obj7 = memo(10346);
  obj1 = { selectedSortMethod: sortMethod, selectedFilters: filters, numQuestsVisible: quests.length };
  const questHomeSortingFilteringAnalytics = obj7.useQuestHomeSortingFilteringAnalytics(obj1);
  const tmp25 = navigation(9238);
  let tmp5 = navigation;
  showBounties = memo(12103).useVirtualCurrencyMobileEnabled().enabled;
  const obj10 = memo(12103);
  const bountiesExperience = memo(10867).useBountiesExperience(callback4.QUEST_HOME_MOBILE);
  verticalScrollEnabled = bountiesExperience.verticalScrollEnabled;
  const OrbsHoldoutExperiment = memo(14208).OrbsHoldoutExperiment;
  obj2 = { location: callback4.QUEST_HOME_MOBILE };
  const obj11 = memo(10867);
  const tmp30 = callback4;
  const params = memo(1481).useRoute().params;
  previewAdCreativeIds = undefined;
  if (params != null) {
    previewAdCreativeIds = params.previewAdCreativeIds;
  }
  let tmpResult = tmp(10346);
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
              obj[1] = memo(ref[44]).QuestContent.VIDEO_MODAL_MOBILE;
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
    tmpResult = tmp(7075);
    showBounties = tmpResult.shouldShowBountiesGivenFilters(filters);
  }
  const BountiesShopCarouselExperiment = tmp(14190).BountiesShopCarouselExperiment;
  obj3 = { location: tmp30.QUEST_HOME_MOBILE };
  const config = BountiesShopCarouselExperiment.useConfig(obj3);
  ({ enabled, variation } = config);
  const obj13 = memo(1481);
  if (enabled) {
    enabled = showBounties;
  }
  const questHomeOrbShopCarouselData = memo(14200).useQuestHomeOrbShopCarouselData({ enabled, variation });
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
  memo = tmp37;
  const tmpResult1 = memo(14200);
  navigation = memo(1480).useNavigation();
  dependencyMap = obj2.useRef(false);
  callback = obj2.useRef(false);
  importAllResult = obj2.useRef(false);
  const items15 = [tmp37];
  const effect6 = obj2.useEffect(() => {
    if (memo) {
      closure_2.current = true;
    }
  }, items15);
  const effect7 = obj2.useEffect(() => {
    function handleBountiesModalPush(key) {
      if (key.key === handleBountiesModalPush(outer1_2[14]).BOUNTIES_MODAL_KEY) {
        getQuestDeliveryDataForPlacement.current = true;
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
        outer1_0(outer1_2[16]).fireSurveyAction(outer1_0(outer1_2[17]).SurveyActionTypes.BOUNTY_SESSION_COMPLETED);
        const obj = outer1_0(outer1_2[16]);
      } else {
        const fireSurveyAction = outer1_0(outer1_2[16]).fireSurveyAction;
        const SurveyActionTypes = outer1_0(outer1_2[17]).SurveyActionTypes;
        if (ref2.current) {
          fireSurveyAction(SurveyActionTypes.BOUNTY_ABANDONED);
        } else {
          fireSurveyAction(SurveyActionTypes.BOUNTY_IMMEDIATE_DISMISSAL);
        }
        const tmp5 = outer1_0(outer1_2[16]);
      }
    }
  }), items16);
  const items17 = [showBounties, callback6, products, obtainableOrbRewards, showPlaceholderCarousel];
  const items18 = [ref1];
  const callback7 = obj2.useCallback(() => verticalScrollEnabled(c22, { shouldShowBounties: showBounties, onLayout: callback6, orbShopProducts: products, obtainableOrbRewards, showOrbShopPlaceholderCarousel: showPlaceholderCarousel }), items17);
  const items19 = [quests, callback4];
  const callback8 = obj2.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let obj = { questOrQuests: item, questContent: null, questContentPosition: null, trackGuildAndChannelMetadata: false, visibilityRef: null, skipRemountKey: true, sourceQuestContent: null, children: null };
    obj[1] = memo(ref[44]).QuestContent.QUEST_HOME_MOBILE;
    obj[2] = index;
    obj[4] = ref1;
    obj[6] = memo(ref[44]).QuestContent.QUEST_HOME_MOBILE;
    obj[7] = function children() {
      const obj = { quest: item, questContentPosition: index, containerPadding: 0, sourceQuestContent: null };
      obj[3] = item(outer1_2[44]).QuestContent.QUEST_HOME_MOBILE;
      return outer1_14(item(outer1_2[49]).QuestCard, obj);
    };
    return verticalScrollEnabled(memo(ref[48]).QuestContentImpressionTrackerNative, obj);
  }, items18);
  let tmp46 = !isNavigationComplete;
  const callback9 = obj2.useCallback((arg0) => {
    let closure_0 = arg0;
    const obj = {};
    const merged = Object.assign(arg0);
    obj.onLayout = function onLayout(arg0) {
      if (null != outer1_4[index.index]) {
        outer1_11(arg0, tmp.id);
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
  c22 = tmp46;
  closure_23 = obj2.useRef(showBounties);
  const items20 = [showBounties];
  const effect10 = obj2.useEffect(() => {
    closure_23.current = showBounties;
  }, items20);
  const items21 = [isEligibleForQuests];
  const effect11 = obj2.useEffect(() => {
    if (getQuestDeliveryDataForPlacement) {
      let obj = navigation(ref[50]);
      obj = { includesBounties: null };
      obj[0] = ref3.current;
      obj.startTracking(obj);
      return () => {
        callback(table[50]).clearTracking();
      };
    }
  }, items21);
  const items22 = [isEligibleForQuests, tmp46];
  const effect12 = obj2.useEffect(() => {
    let tmp = getQuestDeliveryDataForPlacement;
    if (getQuestDeliveryDataForPlacement) {
      tmp = !c22;
    }
    if (tmp) {
      let obj = navigation(ref[50]);
      obj = { includesBounties: null };
      obj[0] = ref3.current;
      obj.stopTracking(obj);
    }
  }, items22);
  memo(10346);
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
    obj7[1] = navigation(1581)().bottom;
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
    tmp63Result = verticalScrollEnabled(tmp(7638).FlashList, obj6);
    const tmp63 = verticalScrollEnabled;
  }
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestHome.tsx");

export default memoResult;