// === Module 14673: UserSettingsFamilyCenter ===

// Module 14673 (UserSettingsFamilyCenter)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5409 */;
import MetricEvents from "MetricEvents" /* 5414 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7050 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7048 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1085).AnalyticEvents;
const AgeGateSource = fn(1110).AgeGateSource;
const FamilyCenterConstants = fn(7049);
({ FamilyCenterPageLocationAnalyticsIds: closure_11, FamilyCenterSubPageAnalyticsIds: closure_12, FamilyCenterSubPages } = FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let items = [, ];
({ ACTIVITY: arr[0], REQUESTS: arr[1] } = FamilyCenterSubPages);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const tmp4 = closure_18();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = state(timestampProducer, {});
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.loadingContainer) {
    const obj2 = { justify: "center", align: "center", style: tmp4.loadingContainer, children: first };
    const tmp11 = state(Stack_Stack.Stack, obj2);
    cResult[1] = tmp4.loadingContainer;
    cResult[2] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (() => {
  const tmp = closure_18();
  return state(Stack_Stack.Stack, { justify: "center", align: "center", style: closure_18().loadingContainer, children: state(timestampProducer, {}) });
});
const createStyles = fn(4890);
let obj3 = { container: { display: "flex", flex: 1 }, segmentedControlContainer: { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 }, loadingContainer: { minHeight: "100%" } };
let closure_18 = createStyles.createStyles(obj3);
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = familyCenterInitialized(576).c(44);
  closure_18();
  let obj = familyCenterInitialized(576);
  const analyticsLocations = isLoading(6657)(isLoading(6681).FAMILY_CENTER).analyticsLocations;
  const tmp6 = isLoading(6657);
  const acceptedRequestsCount = familyCenterInitialized(8295).useAcceptedRequestsCount();
  const tmp8 = isLoading(14674)();
  const selectedTab = isLoading(14675)().selectedTab;
  let obj2 = familyCenterInitialized(8295);
  const selectedTeenId = familyCenterInitialized(8297).useSelectedTeenId();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [FamilyCenterStore];
    const fn = function o() {
      return { familyCenterInitialized: FamilyCenterStore.getIsInitialized(), isLoading: FamilyCenterStore.isLoading() };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = items;
    tmp11 = fn;
  } else {
    [tmp10, tmp11] = cResult;
  }
  let obj3 = familyCenterInitialized(8297);
  const stateFromStoresObject = familyCenterInitialized(573).useStateFromStoresObject(tmp10, tmp11);
  familyCenterInitialized = stateFromStoresObject.familyCenterInitialized;
  isLoading = stateFromStoresObject.isLoading;
  dependencyMap = null != tmp8;
  const currentUser = UserStore.getCurrentUser();
  const tmpResult = familyCenterInitialized(573);
  [tmp16, _slicedToArray] = noop.useState(0);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.width);
        return;
      }
    }
    cResult[2] = M;
  } else {
    class M {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.width);
        return;
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.width);
        return;
      }
    }
    const stringResult = obj5.string(tmp5(2493).bdBmqy);
    cResult[3] = stringResult;
    const tmp18 = stringResult;
  } else {
    class M {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.width);
        return;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.width);
        return;
      }
    }
    tmp22[0] = tmp18;
    tmp22[1] = FamilyCenterSubPages.ACTIVITY;
    tmp22[2] = closure_14(tmp5(14676), {});
    const intl = tmp(1126).intl;
    const stringResult1 = intl.string(tmp5(2493)["gVWG+6"]);
    cResult[4] = tmp22;
    cResult[5] = stringResult1;
    let tmp21 = stringResult1;
  } else {
    class M {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.width);
        return;
      }
    }
    tmp21 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.width);
        return;
      }
    }
    tmp28[0] = tmp22;
    let obj4 = { label: tmp21, id: FamilyCenterSubPages.REQUESTS, page: closure_14(tmp5(14716), {}) };
    tmp28[1] = obj4;
    class Q {
      constructor(arg0) {
        obj = isLoading(closure_2[25]);
        return obj.selectTab(closure_1_16[arg0]);
      }
    }
    cResult[6] = tmp28;
    cResult[7] = Q;
    let tmp27 = Q;
  } else {
    class M {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.width);
        return;
      }
    }
    tmp27 = cResult[7];
  }
  if (cResult[8] !== selectedTab) {
    class M {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.width);
        return;
      }
    }
    const index = items.indexOf(selectedTab);
    cResult[8] = selectedTab;
    cResult[9] = index;
  } else {
    class M {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.width);
        return;
      }
    }
  }
  if (cResult[10] === tmp16) {
    class M {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.width);
        return;
      }
    }
    const segmentedControlState = tmp(9282).useSegmentedControlState(obj7);
    if (cResult[13] === tmp8) {
      class M {
        constructor(arg0) {
          tmp = closure_3(arg0.nativeEvent.layout.width);
          return;
        }
      }
    }
    const obj6 = { ageGroup: tmp8, numOfAcceptedRequests: acceptedRequestsCount, selectedTab, selectedTeenId };
    class Q {
      constructor(arg0) {
        obj = isLoading(closure_2[25]);
        return obj.selectTab(closure_1_16[arg0]);
      }
    }
    cResult[13] = tmp8;
    cResult[14] = acceptedRequestsCount;
    cResult[15] = selectedTab;
    cResult[16] = selectedTeenId;
    cResult[17] = obj6;
    const tmpResult2 = tmp(9282);
  }
  obj7 = { items: tmp28, onPageChange: tmp27, pageWidth: tmp16, defaultIndex: tmp31 };
  cResult[10] = tmp16;
  cResult[11] = tmp31;
  cResult[12] = obj7;
  const tmp15 = _slicedToArray(noop.useState(0), 2);
}) : (() => {
  const tmp = closure_18();
  const tmp3 = isLoading(6657);
  const acceptedRequestsCount = familyCenterInitialized(8295).useAcceptedRequestsCount();
  const tmp6 = isLoading(14674)();
  const selectedTab = isLoading(14675)().selectedTab;
  let obj = familyCenterInitialized(8295);
  const selectedTeenId = familyCenterInitialized(8297).useSelectedTeenId();
  let obj2 = familyCenterInitialized(8297);
  items = [FamilyCenterStore];
  const stateFromStoresObject = familyCenterInitialized(573).useStateFromStoresObject(items, () => ({ familyCenterInitialized: FamilyCenterStore.getIsInitialized(), isLoading: FamilyCenterStore.isLoading() }));
  familyCenterInitialized = stateFromStoresObject.familyCenterInitialized;
  isLoading = stateFromStoresObject.isLoading;
  dependencyMap = tmp10;
  const currentUser = UserStore.getCurrentUser();
  let obj3 = familyCenterInitialized(573);
  [tmp12, _slicedToArray] = obj8.useState(0);
  const callback = obj8.useCallback((nativeEvent) => {
    _slicedToArray(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp11 = _slicedToArray(obj8.useState(0), 2);
  const obj5 = { items: null, onPageChange: null, pageWidth: null, defaultIndex: null };
  const obj6 = { label: null, id: null, page: null };
  const intl = familyCenterInitialized(1126).intl;
  obj6.label = intl.string(isLoading(2493).bdBmqy);
  obj6.id = FamilyCenterSubPages.ACTIVITY;
  obj6.page = closure_14(isLoading(14676), {});
  const items1 = [obj6, ];
  const obj7 = { label: null, id: null, page: null };
  const intl2 = familyCenterInitialized(1126).intl;
  obj7.label = intl2.string(isLoading(2493)["gVWG+6"]);
  obj7.id = FamilyCenterSubPages.REQUESTS;
  obj7.page = closure_14(isLoading(14716), {});
  items1[1] = obj7;
  obj5.items = items1;
  obj5.onPageChange = function onPageChange(arg0) {
    return isLoading(closure_2[25]).selectTab(items[arg0]);
  };
  obj5.pageWidth = tmp12;
  obj5.defaultIndex = items.indexOf(selectedTab);
  const segmentedControlState = familyCenterInitialized(9282).useSegmentedControlState(obj5);
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
        const obj2 = { is_considered_adult: "adult" === ageGroup, num_of_accepted_links: numOfAcceptedRequests, selected_teen_id: selectedTeenId, initial_page: dependencyMap2[selectedTab], source: constants.SETTINGS };
        AnalyticsUtilsDefault.track(AnalyticEvents.FAMILY_CENTER_VIEWED, obj2);
        const obj4 = { name: MetricEvents.MetricEvents.FAMILY_CENTER_VIEW };
        MonitoringAgentDefault.increment(obj4);
      }
    }
  }, items2);
  isLoading(5590)(() => {
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
        tmp4(6710).openAgeGateModal(AgeGateSource.FAMILY_CENTER);
        return null;
      }
    }
  }
  const obj9 = { value: tmp3(isLoading(6681).FAMILY_CENTER).analyticsLocations, children: null };
  let obj10 = { style: tmp.container, onLayout: callback, children: null };
  let obj4 = familyCenterInitialized(9282);
  const items3 = [closure_14(ref, { style: tmp.segmentedControlContainer, children: closure_14(familyCenterInitialized(9283).SegmentedControl, { state: segmentedControlState }) }), ];
  let obj12 = { style: tmp.container, children: null };
  if (isLoading) {
    let tmp14Result = closure_14(closure_17, {});
  } else {
    const obj13 = { state: segmentedControlState };
    tmp14Result = closure_14(tmp4(10974).SegmentedControlPages, obj13);
  }
  obj12.children = tmp14Result;
  obj12 = closure_14(tmp23, obj12);
  items3[1] = obj12;
  obj10.children = items3;
  obj10 = closure_15(tmp23, obj10);
  obj9.children = obj10;
  closure_14(familyCenterInitialized(6657).AnalyticsLocationProvider, obj9);
  const obj11 = { style: tmp.segmentedControlContainer, children: closure_14(familyCenterInitialized(9283).SegmentedControl, { state: segmentedControlState }) };
});
ReactCompilerGating = fn(558);
let obj4 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp5 = state(closure_19, {});
    cResult[0] = tmp5;
    let first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => state(closure_19, {}));