// === Module 14959: UserSettingsFamilyCenter ===

// Module 14959 (UserSettingsFamilyCenter)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4457 */;
import Stack_Stack from "Stack/Stack" /* 5054 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7642 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7704 */;
import MetricEvents from "MetricEvents" /* 7709 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7640 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function FamilyCenterLoading() {
  const tmp = closure_19();
  return __initData(Stack_Stack.Stack, { justify: "center", align: "center", style: closure_19().loadingContainer, children: __initData(timestampProducer, {}) });
}
function FamilyCenter() {
  const tmp = closure_19();
  const tmp3 = isLoading(7265);
  const acceptedRequestsCount = familyCenterInitialized(8768).useAcceptedRequestsCount();
  const tmp6 = isLoading(14960)();
  const selectedTab = isLoading(14961)().selectedTab;
  let obj = familyCenterInitialized(8768);
  const selectedTeenId = familyCenterInitialized(8770).useSelectedTeenId();
  let obj2 = familyCenterInitialized(8770);
  items = [FamilyCenterStore];
  const stateFromStoresObject = familyCenterInitialized(563).useStateFromStoresObject(items, () => ({ familyCenterInitialized: FamilyCenterStore.getIsInitialized(), isLoading: FamilyCenterStore.isLoading() }));
  familyCenterInitialized = stateFromStoresObject.familyCenterInitialized;
  isLoading = stateFromStoresObject.isLoading;
  dependencyMap = tmp10;
  const currentUser = UserStore.getCurrentUser();
  let obj3 = familyCenterInitialized(563);
  [tmp12, _slicedToArray] = obj8.useState(0);
  const callback = obj8.useCallback((nativeEvent) => {
    _slicedToArray(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp11 = _slicedToArray(obj8.useState(0), 2);
  const obj5 = { items: null, onPageChange: null, pageWidth: null, defaultIndex: null };
  const obj6 = { label: null, id: null, page: null };
  const intl = familyCenterInitialized(1114).intl;
  obj6.label = intl.string(isLoading(2396).bdBmqy);
  obj6.id = FamilyCenterSubPages.ACTIVITY;
  obj6.page = closure_15(isLoading(14962), {});
  const items1 = [obj6, ];
  const obj7 = { label: null, id: null, page: null };
  const intl2 = familyCenterInitialized(1114).intl;
  obj7.label = intl2.string(isLoading(2396)["gVWG+6"]);
  obj7.id = FamilyCenterSubPages.REQUESTS;
  obj7.page = closure_15(isLoading(15002), {});
  items1[1] = obj7;
  obj5.items = items1;
  obj5.onPageChange = function onPageChange(arg0) {
    return isLoading(closure_2[25]).selectTab(items[arg0]);
  };
  obj5.pageWidth = tmp12;
  obj5.defaultIndex = items.indexOf(selectedTab);
  const segmentedControlState = familyCenterInitialized(9922).useSegmentedControlState(obj5);
  obj8 = { ageGroup: tmp6, numOfAcceptedRequests: acceptedRequestsCount, selectedTab, selectedTeenId };
  const ref = obj8.useRef(obj8);
  const effect = obj8.useEffect(() => {
    closure_5.current = obj8;
  });
  const items2 = [familyCenterInitialized, null != tmp6];
  const effect1 = obj8.useEffect(() => {
    if (familyCenterInitialized) {
      if (closure_2) {
        ({ ageGroup, numOfAcceptedRequests, selectedTab, selectedTeenId } = ref.current);
        const obj2 = { is_considered_adult: "adult" === ageGroup, num_of_accepted_links: numOfAcceptedRequests, selected_teen_id: selectedTeenId, initial_page: map1[selectedTab], source: constants.SETTINGS };
        AnalyticsUtilsDefault.track(AnalyticEvents.FAMILY_CENTER_VIEWED, obj2);
        const obj4 = { name: MetricEvents.MetricEvents.FAMILY_CENTER_VIEW };
        MonitoringAgentDefault.increment(obj4);
      }
    }
  }, items2);
  isLoading(5073)(() => {
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.FAMILY_CENTER_NEW_BADGE, { dismissAction: ContentDismissActionType.AUTO, forceTrack: true });
    let canRefetchResult = !isLoading;
    if (!isLoading) {
      canRefetchResult = FamilyCenterStore.canRefetch();
    }
    if (canRefetchResult) {
      FamilyCenterActionCreatorsDefault.initialPageLoad();
    }
    const obj2 = { dismissAction: ContentDismissActionType.AUTO, forceTrack: true };
  });
  if (familyCenterInitialized) {
    if (null != currentUser) {
      if (!tmp10) {
        tmp4(7314).openAgeGateModal(AgeGateSource.FAMILY_CENTER);
        return null;
      }
    }
  }
  const obj9 = { value: tmp3(isLoading(7285).FAMILY_CENTER).analyticsLocations, children: null };
  let obj10 = { style: tmp.container, onLayout: callback, children: null };
  let obj4 = familyCenterInitialized(9922);
  const items3 = [closure_15(ref, { style: tmp.segmentedControlContainer, children: closure_15(familyCenterInitialized(9923).SegmentedControl, { state: segmentedControlState }) }), ];
  let obj12 = { style: tmp.container, children: null };
  if (isLoading) {
    let tmp14Result = closure_15(FamilyCenterLoading, {});
  } else {
    const obj13 = { state: segmentedControlState };
    tmp14Result = closure_15(tmp4(12746).SegmentedControlPages, obj13);
  }
  obj12.children = tmp14Result;
  obj12 = closure_15(tmp23, obj12);
  items3[1] = obj12;
  obj10.children = items3;
  obj10 = closure_16(tmp23, obj10);
  obj9.children = obj10;
  closure_15(familyCenterInitialized(7265).AnalyticsLocationProvider, obj9);
  const obj11 = { style: tmp.segmentedControlContainer, children: closure_15(familyCenterInitialized(9923).SegmentedControl, { state: segmentedControlState }) };
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const AgeGateSource = fn(1098).AgeGateSource;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const FamilyCenterConstants = fn(7641);
({ FamilyCenterPageLocationAnalyticsIds: closure_12, FamilyCenterSubPageAnalyticsIds: map1, FamilyCenterSubPages } = FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let items = [, ];
({ ACTIVITY: arr[0], REQUESTS: arr[1] } = FamilyCenterSubPages);
const createStyles = fn(4636);
let obj2 = { container: { display: "flex", flex: 1 }, segmentedControlContainer: { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 }, loadingContainer: { minHeight: "100%" } };
let closure_19 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx");

export default function FamilyCenterContainer() {
  return __initData(FamilyCenter, {});
};