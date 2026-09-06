// === Module 14869: UserSettingsFamilyCenter ===

// Module 14869 (UserSettingsFamilyCenter)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4380 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7539 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7602 */;
import MetricEvents from "MetricEvents" /* 7607 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function FamilyCenterLoading() {
  const tmp = closure_19();
  return __initData(Stack_Stack.Stack, { justify: "center", align: "center", style: closure_19().loadingContainer, children: __initData(timestampProducer, {}) });
}
function FamilyCenter() {
  const tmp = closure_19();
  let obj = familyCenterInitialized(8645);
  const acceptedRequestsCount = obj.useAcceptedRequestsCount();
  const tmp6 = isLoading(14870)();
  const selectedTab = isLoading(14871)().selectedTab;
  let obj1 = familyCenterInitialized(8647);
  const selectedTeenId = obj1.useSelectedTeenId();
  let obj2 = familyCenterInitialized(563);
  items = [FamilyCenterStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => ({ familyCenterInitialized: FamilyCenterStore.getIsInitialized(), isLoading: FamilyCenterStore.isLoading() }));
  familyCenterInitialized = stateFromStoresObject.familyCenterInitialized;
  isLoading = stateFromStoresObject.isLoading;
  dependencyMap = tmp10;
  const currentUser = UserStore.getCurrentUser();
  const tmp3 = isLoading(7162);
  [tmp12, _slicedToArray] = _slicedToArray(obj2.useState(0), 2);
  const callback = obj2.useCallback((nativeEvent) => {
    _slicedToArray(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj3 = familyCenterInitialized(9792);
  obj = { items: null, onPageChange: null, pageWidth: null, defaultIndex: null };
  obj = { label: null, id: null, page: null };
  const intl = familyCenterInitialized(1114).intl;
  obj.label = intl.string(isLoading(2396).bdBmqy);
  obj.id = FamilyCenterSubPages.ACTIVITY;
  obj.page = closure_15(isLoading(14872), {});
  const items1 = [obj, ];
  obj1 = { label: null, id: null, page: null };
  const intl2 = familyCenterInitialized(1114).intl;
  obj1.label = intl2.string(isLoading(2396)["gVWG+6"]);
  obj1.id = FamilyCenterSubPages.REQUESTS;
  obj1.page = closure_15(isLoading(14912), {});
  items1[1] = obj1;
  obj.items = items1;
  obj.onPageChange = function onPageChange(arg0) {
    return isLoading(closure_2[25]).selectTab(items[arg0]);
  };
  obj.pageWidth = tmp12;
  obj.defaultIndex = items.indexOf(selectedTab);
  const segmentedControlState = obj3.useSegmentedControlState(obj);
  obj2 = { ageGroup: tmp6, numOfAcceptedRequests: acceptedRequestsCount, selectedTab, selectedTeenId };
  const ref = obj2.useRef(obj2);
  const effect = obj2.useEffect(() => {
    closure_5.current = obj2;
  });
  const items2 = [familyCenterInitialized, null != tmp6];
  const effect1 = obj2.useEffect(() => {
    if (familyCenterInitialized) {
      if (closure_2) {
        ({ ageGroup, numOfAcceptedRequests, selectedTab, selectedTeenId } = ref.current);
        let obj = { is_considered_adult: "adult" === ageGroup, num_of_accepted_links: numOfAcceptedRequests, selected_teen_id: selectedTeenId, initial_page: map1[selectedTab], source: constants.SETTINGS };
        obj.track(AnalyticEvents.FAMILY_CENTER_VIEWED, obj);
        obj = { name: MetricEvents.MetricEvents.FAMILY_CENTER_VIEW };
        MonitoringAgentDefault.increment(obj);
      }
    }
  }, items2);
  isLoading(4992)(() => {
    const obj = { dismissAction: ContentDismissActionType.AUTO, forceTrack: true };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.FAMILY_CENTER_NEW_BADGE, obj);
    let canRefetchResult = !isLoading;
    if (!isLoading) {
      canRefetchResult = FamilyCenterStore.canRefetch();
    }
    if (canRefetchResult) {
      FamilyCenterActionCreatorsDefault.initialPageLoad();
    }
  });
  if (familyCenterInitialized) {
    if (null != currentUser) {
      if (!tmp10) {
        tmp4(7211).openAgeGateModal(AgeGateSource.FAMILY_CENTER);
        return null;
      }
    }
  }
  obj3 = { value: tmp3(isLoading(7182).FAMILY_CENTER).analyticsLocations, children: null };
  let obj4 = { style: tmp.container, onLayout: callback, children: null };
  const tmp11 = _slicedToArray(obj2.useState(0), 2);
  const items3 = [closure_15(ref, { style: tmp.segmentedControlContainer, children: closure_15(familyCenterInitialized(9793).SegmentedControl, { state: segmentedControlState }) }), ];
  let obj6 = { style: tmp.container, children: null };
  if (isLoading) {
    let tmp14Result = tmp14(FamilyCenterLoading, {});
  } else {
    const obj7 = { state: segmentedControlState };
    tmp14Result = tmp14(tmp4(12616).SegmentedControlPages, obj7);
  }
  obj6.children = tmp14Result;
  obj6 = tmp14(tmp23, obj6);
  items3[1] = obj6;
  obj4.children = items3;
  obj4 = closure_16(tmp23, obj4);
  obj3.children = obj4;
  tmp14Result = tmp14(tmp4(7162).AnalyticsLocationProvider, obj3);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const AgeGateSource = fn(1098).AgeGateSource;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const FamilyCenterConstants = fn(7538);
({ FamilyCenterPageLocationAnalyticsIds: closure_12, FamilyCenterSubPageAnalyticsIds: map1, FamilyCenterSubPages } = FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let items = [, ];
({ ACTIVITY: arr[0], REQUESTS: arr[1] } = FamilyCenterSubPages);
fn(4560);
let createStyles = { container: { display: "flex", flex: 1 }, segmentedControlContainer: null, loadingContainer: null };
createStyles = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.segmentedControlContainer = createStyles;
createStyles.loadingContainer = { minHeight: "100%" };
let closure_19 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx");

export default function FamilyCenterContainer() {
  return __initData(FamilyCenter, {});
};