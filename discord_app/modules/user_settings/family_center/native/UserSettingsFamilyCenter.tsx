// discord_app/modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import FamilyCenterActionCreatorsDefault from "../../../parent_tools/FamilyCenterActionCreators.tsx";
import MonitoringAgentDefault from "../../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function FamilyCenterLoading() {
  const tmp = closure_18();
  return closure_1_14(Stack_Stack.Stack, {
    justify: "center",
    align: "center",
    style: closure_18().loadingContainer,
    children: closure_1_14(timestampProducer, {}),
  });
}
function FamilyCenter() {
  const tmp = closure_18();
  const tmp3 = isLoading(7358);
  const acceptedRequestsCount = familyCenterInitialized(8883).useAcceptedRequestsCount();
  const tmp6 = isLoading(15088)();
  const selectedTab = isLoading(15089)().selectedTab;
  let obj = familyCenterInitialized(8883);
  const selectedTeenId = familyCenterInitialized(8885).useSelectedTeenId();
  let obj2 = familyCenterInitialized(8885);
  items = [FamilyCenterStore];
  const stateFromStoresObject = familyCenterInitialized(563).useStateFromStoresObject(items, () => ({
    familyCenterInitialized: FamilyCenterStore.getIsInitialized(),
    isLoading: FamilyCenterStore.isLoading(),
  }));
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
  const intl = familyCenterInitialized(1115).intl;
  obj6.label = intl.string(isLoading(2480).bdBmqy);
  obj6.id = FamilyCenterSubPages.ACTIVITY;
  obj6.page = closure_14(isLoading(15090), {});
  const items1 = [obj6];
  const obj7 = { label: null, id: null, page: null };
  const intl2 = familyCenterInitialized(1115).intl;
  obj7.label = intl2.string(isLoading(2480)["gVWG+6"]);
  obj7.id = FamilyCenterSubPages.REQUESTS;
  obj7.page = closure_14(isLoading(15130), {});
  items1[1] = obj7;
  obj5.items = items1;
  obj5.onPageChange = function onPageChange(arg0) {
    return isLoading(closure_2[24]).selectTab(items[arg0]);
  };
  obj5.pageWidth = tmp12;
  obj5.defaultIndex = items.indexOf(selectedTab);
  const segmentedControlState = familyCenterInitialized(10037).useSegmentedControlState(obj5);
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
        const obj2 = {
          is_considered_adult: "adult" === ageGroup,
          num_of_accepted_links: numOfAcceptedRequests,
          selected_teen_id: selectedTeenId,
          initial_page: closure_2_12[selectedTab],
          source: constants.SETTINGS,
        };
        AnalyticsUtilsDefault.track(AnalyticEvents.FAMILY_CENTER_VIEWED, obj2);
        const obj4 = { name: MetricEvents.MetricEvents.FAMILY_CENTER_VIEW };
        MonitoringAgentDefault.increment(obj4);
      }
    }
  }, items2);
  isLoading(5161)(() => {
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
        tmp4(7407).openAgeGateModal(AgeGateSource.FAMILY_CENTER);
        return null;
      }
    }
  }
  const obj9 = { value: tmp3(isLoading(7378).FAMILY_CENTER).analyticsLocations, children: null };
  let obj10 = { style: tmp.container, onLayout: callback, children: null };
  let obj4 = familyCenterInitialized(10037);
  const items3 = [
    closure_14(ref, {
      style: tmp.segmentedControlContainer,
      children: closure_14(familyCenterInitialized(10038).SegmentedControl, { state: segmentedControlState }),
    }),
  ];
  let obj12 = { style: tmp.container, children: null };
  if (isLoading) {
    let tmp14Result = closure_14(FamilyCenterLoading, {});
  } else {
    const obj13 = { state: segmentedControlState };
    tmp14Result = closure_14(tmp4(12858).SegmentedControlPages, obj13);
  }
  obj12.children = tmp14Result;
  obj12 = closure_14(tmp23, obj12);
  items3[1] = obj12;
  obj10.children = items3;
  obj10 = closure_15(tmp23, obj10);
  obj9.children = obj10;
  closure_14(familyCenterInitialized(7358).AnalyticsLocationProvider, obj9);
  const obj11 = {
    style: tmp.segmentedControlContainer,
    children: closure_14(familyCenterInitialized(10038).SegmentedControl, { state: segmentedControlState }),
  };
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const AgeGateSource = fn(1099).AgeGateSource;
const FamilyCenterConstants = fn(7734);
({
  FamilyCenterPageLocationAnalyticsIds: closure_11,
  FamilyCenterSubPageAnalyticsIds: closure_12,
  FamilyCenterSubPages,
} = FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let items = [,];
({ ACTIVITY: arr[0], REQUESTS: arr[1] } = FamilyCenterSubPages);
const createStyles = fn(4722);
let obj2 = {
  container: { display: "flex", flex: 1 },
  segmentedControlContainer: { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 },
  loadingContainer: { minHeight: "100%" },
};
let closure_18 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx");

export default function FamilyCenterContainer() {
  return closure_1_14(FamilyCenter, {});
}
