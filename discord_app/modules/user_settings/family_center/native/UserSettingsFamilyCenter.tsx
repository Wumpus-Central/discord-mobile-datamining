// discord_app/modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import AgeGateConstants from "../../../age_gate/AgeGateConstants.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import MonitoringAgentDefault from "../../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import FamilyCenterActionCreatorsDefault from "../../../parent_tools/FamilyCenterActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import FamilyCenterConstants from "../../../parent_tools/FamilyCenterConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap;

let FamilyCenterSubPages;
let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let metroRequire;
let obj2;
let unpackModuleId;
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
const AgeGateSource = AgeGateConstants.AgeGateSource;
({
  FamilyCenterPageLocationAnalyticsIds: unpackModuleId,
  FamilyCenterSubPageAnalyticsIds: closure_12,
  FamilyCenterSubPages,
} = FamilyCenterConstants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let items = [,];
({ ACTIVITY: arr[0], REQUESTS: arr[1] } = FamilyCenterSubPages);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(3);
      const tmp4 = closure_18();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = authStore2(metroRequire, {});
        cResult[0] = tmp8;
        first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.loadingContainer) {
        const obj2 = { justify: "center", align: "center", style: tmp4.loadingContainer, children: first };
        const tmp11 = authStore2(Stack_Stack.Stack, obj2);
        cResult[1] = tmp4.loadingContainer;
        cResult[2] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[2];
      }
      return tmp9;
    }
  : () => {
      const obj = {
        justify: "center",
        align: "center",
        style: closure_18().loadingContainer,
        children: authStore2(metroRequire, {}),
      };
      const Stack = Stack_Stack.Stack;
      return authStore2(Stack, obj);
    };
let obj = {
  container: { display: "flex", flex: 1 },
  segmentedControlContainer: obj2,
  loadingContainer: { minHeight: "100%" },
};
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_18 = createStyles.createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_2;
      let current;
      let familyCenterInitialized;
      let isLoading;
      let obj7;
      let ref;
      let tmp10;
      let tmp11;
      let tmp16;
      let tmp18;
      let tmp21;
      let tmp27;
      let obj = familyCenterInitialized(576);
      const cResult = obj.c(44);
      closure_18();
      const tmp6 = isLoading(6664);
      const analyticsLocations = tmp6(isLoading(6688).FAMILY_CENTER).analyticsLocations;
      let obj2 = familyCenterInitialized(8328);
      const acceptedRequestsCount = obj2.useAcceptedRequestsCount();
      const tmp8 = isLoading(14694)();
      const selectedTab = isLoading(14695)().selectedTab;
      let obj3 = familyCenterInitialized(8330);
      const selectedTeenId = obj3.useSelectedTeenId();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [FamilyCenterStore];
        const fn = function o() {
          const obj = {
            familyCenterInitialized: FamilyCenterStore.getIsInitialized(),
            isLoading: FamilyCenterStore.isLoading(),
          };
          return obj;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp10 = items;
        tmp11 = fn;
      } else {
        [tmp10, tmp11] = cResult;
      }
      const tmpResult = familyCenterInitialized(573);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp10, tmp11);
      familyCenterInitialized = stateFromStoresObject.familyCenterInitialized;
      isLoading = stateFromStoresObject.isLoading;
      dependencyMap = null != tmp8;
      const currentUser = UserStore.getCurrentUser();
      const tmp15 = _slicedToArray(react.useState(0), 2);
      [tmp16, _slicedToArray] = tmp15;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(nativeEvent) {
            _slicedToArray(nativeEvent.nativeEvent.layout.width);
          }
        }
        cResult[2] = M;
      } else {
        class M {
          constructor(nativeEvent) {
            _slicedToArray(nativeEvent.nativeEvent.layout.width);
          }
        }
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(nativeEvent) {
            _slicedToArray(nativeEvent.nativeEvent.layout.width);
          }
        }
        const stringResult = obj5.string(isLoading(2521).bdBmqy);
        cResult[3] = stringResult;
        tmp18 = stringResult;
      } else {
        class M {
          constructor(nativeEvent) {
            _slicedToArray(nativeEvent.nativeEvent.layout.width);
          }
        }
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(nativeEvent) {
            _slicedToArray(nativeEvent.nativeEvent.layout.width);
          }
        }
        tmp22[0] = tmp18;
        tmp22[1] = FamilyCenterSubPages.ACTIVITY;
        tmp22[2] = closure_14(isLoading(14696), {});
        const intl = tmp(1126).intl;
        const stringResult1 = intl.string(isLoading(2521)["gVWG+6"]);
        cResult[4] = tmp22;
        cResult[5] = stringResult1;
        tmp21 = stringResult1;
      } else {
        class M {
          constructor(nativeEvent) {
            _slicedToArray(nativeEvent.nativeEvent.layout.width);
          }
        }
        tmp21 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(nativeEvent) {
            _slicedToArray(nativeEvent.nativeEvent.layout.width);
          }
        }
        tmp28[0] = tmp22;
        tmp28[1] = { label: tmp21, id: FamilyCenterSubPages.REQUESTS, page: closure_14(isLoading(14736), {}) };
        const obj4 = { label: tmp21, id: FamilyCenterSubPages.REQUESTS, page: closure_14(isLoading(14736), {}) };
        class Q {
          constructor(arg0) {
            const obj = isLoading(closure_2[25]);
            return obj.selectTab(items[arg0]);
          }
        }
        cResult[6] = tmp28;
        cResult[7] = Q;
        tmp27 = Q;
      } else {
        class M {
          constructor(nativeEvent) {
            _slicedToArray(nativeEvent.nativeEvent.layout.width);
          }
        }
        tmp27 = cResult[7];
      }
      if (cResult[8] !== selectedTab) {
        class M {
          constructor(nativeEvent) {
            _slicedToArray(nativeEvent.nativeEvent.layout.width);
          }
        }
        const index = items.indexOf(selectedTab);
        cResult[8] = selectedTab;
        cResult[9] = index;
      } else {
        class M {
          constructor(nativeEvent) {
            _slicedToArray(nativeEvent.nativeEvent.layout.width);
          }
        }
      }
      if (cResult[10] === tmp16) {
        class M {
          constructor(nativeEvent) {
            _slicedToArray(nativeEvent.nativeEvent.layout.width);
          }
        }
        const tmpResult2 = familyCenterInitialized(9317);
        const segmentedControlState = tmpResult2.useSegmentedControlState(obj7);
        if (cResult[13] === tmp8) {
          class M {
            constructor(nativeEvent) {
              _slicedToArray(nativeEvent.nativeEvent.layout.width);
            }
          }
        }
        const obj6 = { ageGroup: tmp8, numOfAcceptedRequests: acceptedRequestsCount, selectedTab, selectedTeenId };
        class Q {
          constructor(arg0) {
            const obj = isLoading(closure_2[25]);
            return obj.selectTab(items[arg0]);
          }
        }
        cResult[13] = tmp8;
        cResult[14] = acceptedRequestsCount;
        cResult[15] = selectedTab;
        cResult[16] = selectedTeenId;
        cResult[17] = obj6;
      }
      obj7 = { items: tmp28, onPageChange: tmp27, pageWidth: tmp16, defaultIndex: tmp31 };
      cResult[10] = tmp16;
      cResult[11] = tmp31;
      cResult[12] = obj7;
    }
  : () => {
      let closure_2;
      let familyCenterInitialized;
      let intl;
      let intl2;
      let isLoading;
      let items1;
      let items3;
      let obj7;
      let obj9;
      let tmp12;
      let tmp15Result;
      const tmp = closure_18();
      const tmp3 = isLoading(6664);
      const analyticsLocations = tmp3(isLoading(6688).FAMILY_CENTER).analyticsLocations;
      let obj = familyCenterInitialized(8328);
      const acceptedRequestsCount = obj.useAcceptedRequestsCount();
      const tmp6 = isLoading(14694)();
      const selectedTab = isLoading(14695)().selectedTab;
      let obj2 = familyCenterInitialized(8330);
      const selectedTeenId = obj2.useSelectedTeenId();
      let obj3 = familyCenterInitialized(573);
      items = [FamilyCenterStore];
      const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
        const obj = {
          familyCenterInitialized: FamilyCenterStore.getIsInitialized(),
          isLoading: FamilyCenterStore.isLoading(),
        };
        return obj;
      });
      familyCenterInitialized = stateFromStoresObject.familyCenterInitialized;
      isLoading = stateFromStoresObject.isLoading;
      const tmp10 = null != tmp6;
      dependencyMap = tmp10;
      const currentUser = UserStore.getCurrentUser();
      const tmp11 = _slicedToArray(obj7.useState(0), 2);
      [tmp12, _slicedToArray] = tmp11;
      const callback = obj7.useCallback((nativeEvent) => {
        _slicedToArray(nativeEvent.nativeEvent.layout.width);
      }, []);
      const obj4 = {
        items: items1,
        onPageChange(arg0) {
          const obj = isLoading(closure_2[25]);
          return obj.selectTab(items[arg0]);
        },
        pageWidth: tmp12,
        defaultIndex: items.indexOf(selectedTab),
      };
      const obj5 = {
        label: intl.string(isLoading(2521).bdBmqy),
        id: FamilyCenterSubPages.ACTIVITY,
        page: closure_14(isLoading(14696), {}),
      };
      const useSegmentedControlState = familyCenterInitialized(9317).useSegmentedControlState;
      familyCenterInitialized(9317);
      intl = familyCenterInitialized(1126).intl;
      items1 = [obj5];
      const obj6 = {
        label: intl2.string(isLoading(2521)["gVWG+6"]),
        id: FamilyCenterSubPages.REQUESTS,
        page: closure_14(isLoading(14736), {}),
      };
      intl2 = familyCenterInitialized(1126).intl;
      items1[1] = obj6;
      const segmentedControlState = useSegmentedControlState(obj4);
      obj7 = { ageGroup: tmp6, numOfAcceptedRequests: acceptedRequestsCount, selectedTab, selectedTeenId };
      const ref = obj7.useRef(obj7);
      const effect = obj7.useEffect(() => {
        ref.current = obj7;
      });
      const items2 = [familyCenterInitialized, tmp10];
      const effect1 = obj7.useEffect(() => {
        let ageGroup;
        let numOfAcceptedRequests;
        let selectedTab;
        let selectedTeenId;
        if (familyCenterInitialized) {
          if (closure_2) {
            ({ ageGroup, numOfAcceptedRequests, selectedTab, selectedTeenId } = ref.current);
            const obj2 = {
              is_considered_adult: "adult" === ageGroup,
              num_of_accepted_links: numOfAcceptedRequests,
              selected_teen_id: selectedTeenId,
              initial_page: closure_12[selectedTab],
              source: unpackModuleId.SETTINGS,
            };
            const obj = AnalyticsUtilsDefault;
            obj.track(AnalyticEvents.FAMILY_CENTER_VIEWED, obj2);
            const obj3 = { name: MetricEvents.MetricEvents.FAMILY_CENTER_VIEW };
            const increment = MonitoringAgentDefault.increment;
            MonitoringAgentDefault;
            increment(obj3);
          }
        }
      }, items2);
      isLoading(5597)(() => {
        const canRefetchResult = !isLoading && FamilyCenterStore.canRefetch();
        if (canRefetchResult) {
          const obj = FamilyCenterActionCreatorsDefault;
          obj.initialPageLoad();
        }
      });
      if (familyCenterInitialized) {
        if (null != currentUser) {
          let tmp15Result2;
          if (!tmp10) {
            const tmp4Result = familyCenterInitialized(6717);
            tmp4Result.openAgeGateModal(AgeGateSource.FAMILY_CENTER);
            tmp15Result2 = null;
          }
          return tmp15Result2;
        }
      }
      const obj8 = { value: analyticsLocations, children: closure_15(ref, obj9) };
      obj9 = { style: tmp.container, onLayout: callback, children: items3 };
      const obj10 = {
        style: tmp.segmentedControlContainer,
        children: closure_14(familyCenterInitialized(9318).SegmentedControl, { state: segmentedControlState }),
      };
      const AnalyticsLocationProvider = tmp4(6664).AnalyticsLocationProvider;
      items3 = [closure_14(ref, obj10)];
      const obj11 = { style: tmp.container, children: tmp15Result };
      if (isLoading) {
        tmp15Result = closure_14(closure_17, {});
      } else {
        const obj12 = { state: segmentedControlState };
        tmp15Result = closure_14(tmp4(10987).SegmentedControlPages, obj12);
      }
      items3[1] = closure_14(ref, obj11);
      tmp15Result2 = closure_14(AnalyticsLocationProvider, obj8);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp5 = authStore2(closure_19, {});
        cResult[0] = tmp5;
        first = tmp5;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => authStore2(closure_19, {});
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx");

export default tmp5;
