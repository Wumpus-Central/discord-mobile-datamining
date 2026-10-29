// discord_app/modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import _modDef2536 from "../../../parent_tools/FamilyCenter.messages.js";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import MonitoringAgentDefault from "../../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import FamilyCenterActionCreatorsDefault from "../../../parent_tools/FamilyCenterActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1084).AnalyticEvents;
const AgeGateSource = fn(1109).AgeGateSource;
const FamilyCenterConstants = fn(7704);
({
  FamilyCenterPageLocationAnalyticsIds: closure_11,
  FamilyCenterSubPageAnalyticsIds: closure_12,
  FamilyCenterSubPages,
} = FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let items = [,];
({ ACTIVITY: arr[0], REQUESTS: arr[1] } = FamilyCenterSubPages);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterLoading() {
      const cResult = c.c(3);
      const tmp4 = closure_19();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = closure_1_14(timestampProducer, {});
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.loadingContainer) {
        const obj2 = { justify: "center", align: "center", style: tmp4.loadingContainer, children: first };
        const tmp11 = closure_1_14(Stack_Stack.Stack, obj2);
        cResult[1] = tmp4.loadingContainer;
        cResult[2] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[2];
      }
      return tmp9;
    }
  : function FamilyCenterLoading() {
      const tmp = closure_19();
      return closure_1_14(Stack_Stack.Stack, {
        justify: "center",
        align: "center",
        style: closure_19().loadingContainer,
        children: closure_1_14(timestampProducer, {}),
      });
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterLoadError() {
      const cResult = children(576).c(10);
      const tmp4 = closure_19();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1125).intl;
        const stringResult = intl.string(_modDef2536.nGX8Co);
        cResult[0] = stringResult;
        children = stringResult;
      } else {
        children = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c() {
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          AccessibilityAnnouncer.announce(first, "assertive");
        };
        items = [children];
        cResult[1] = fn;
        cResult[2] = items;
        let tmp9 = items;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[1];
        tmp9 = cResult[2];
      }
      const effect = noop.useEffect(tmp8, tmp9);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { size: "lg", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
        const tmp14 = closure_14(tmp(7072).CircleErrorIcon, obj2);
        cResult[3] = tmp14;
        let tmp11 = tmp14;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] !== tmp4.loadErrorText) {
        const obj3 = { align: "center", spacing: nativeDefault.space.PX_12, children: null };
        const items1 = [tmp11];
        const obj4 = { variant: "text-md/medium", color: "text-strong", style: tmp4.loadErrorText, children };
        items1[1] = closure_14(tmp(5271).Text, obj4);
        obj3.children = items1;
        const tmp19 = closure_15(tmp(6015).Stack, obj3);
        cResult[4] = tmp4.loadErrorText;
        cResult[5] = tmp19;
        let tmp15 = tmp19;
      } else {
        tmp15 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { text: null, onPress: null };
        const intl2 = tmp(1125).intl;
        obj5.text = intl2.string(tmp(1125).t["7NqTJn"]);
        obj5.onPress = function onPress() {
          return FamilyCenterActionCreatorsDefault.initialPageLoad();
        };
        const tmp22 = closure_14(tmp(5281).Button, obj5);
        cResult[6] = tmp22;
        let tmp20 = tmp22;
      } else {
        tmp20 = cResult[6];
      }
      if (cResult[7] === tmp4.loadErrorContainer) {
        if (cResult[8] === tmp15) {
          let tmp23 = cResult[9];
        }
        return tmp23;
      }
      const obj6 = {
        justify: "center",
        align: "center",
        spacing: nativeDefault.space.PX_24,
        style: tmp4.loadErrorContainer,
        children: null,
      };
      const items2 = [tmp15, tmp20];
      obj6.children = items2;
      const tmp24 = closure_15(children(6015).Stack, obj6);
      cResult[7] = tmp4.loadErrorContainer;
      cResult[8] = tmp15;
      cResult[9] = tmp24;
      tmp23 = tmp24;
      const obj = children(576);
    }
  : function FamilyCenterLoadError() {
      const tmp = closure_19();
      const intl = util.intl;
      const stringResult = intl.string(_modDef2536.nGX8Co);
      require = stringResult;
      items = [stringResult];
      const effect = noop.useEffect(() => {
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(stringResult, "assertive");
      }, items);
      const obj = {
        justify: "center",
        align: "center",
        spacing: nativeDefault.space.PX_24,
        style: tmp.loadErrorContainer,
        children: null,
      };
      const obj2 = { align: "center", spacing: nativeDefault.space.PX_12, children: null };
      const items1 = [
        closure_14(CircleErrorIcon.CircleErrorIcon, { size: "lg", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL }),
        closure_14(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-strong",
          style: tmp.loadErrorText,
          children: stringResult,
        }),
      ];
      obj2.children = items1;
      const items2 = [closure_15(Stack_Stack.Stack, obj2)];
      const obj5 = { text: null, onPress: null };
      const intl2 = util.intl;
      obj5.text = intl2.string(util.t["7NqTJn"]);
      obj5.onPress = function onPress() {
        return FamilyCenterActionCreatorsDefault.initialPageLoad();
      };
      items2[1] = closure_14(components_Button_Button.Button, obj5);
      obj.children = items2;
      return closure_15(Stack_Stack.Stack, obj);
    };
const createStyles = fn(5005);
let obj4 = {
  container: { display: "flex", flex: 1 },
  segmentedControlContainer: { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 },
  loadingContainer: { minHeight: "100%" },
  loadErrorContainer: null,
  loadErrorText: null,
};
let obj5 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj4.loadErrorContainer = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
obj4.loadErrorText = { textAlign: "center" };
let closure_19 = createStyles.createStyles(obj4);
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenter() {
      const cResult = familyCenterInitialized(576).c(45);
      closure_19();
      let obj = familyCenterInitialized(576);
      const analyticsLocations = isLoading(7313)(isLoading(7338).FAMILY_CENTER).analyticsLocations;
      const tmp6 = isLoading(7313);
      const acceptedRequestsCount = familyCenterInitialized(8180).useAcceptedRequestsCount();
      const tmp8 = isLoading(16666)();
      const selectedTab = isLoading(16667)().selectedTab;
      let obj2 = familyCenterInitialized(8180);
      const selectedTeenId = familyCenterInitialized(8182).useSelectedTeenId();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [FamilyCenterStore];
        const fn = function c() {
          return {
            familyCenterInitialized: FamilyCenterStore.getIsInitialized(),
            isLoading: FamilyCenterStore.isLoading(),
            hasLoadFailed: FamilyCenterStore.hasInitialLoadFailed(),
          };
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp10 = items;
        tmp11 = fn;
      } else {
        [tmp10, tmp11] = cResult;
      }
      let obj3 = familyCenterInitialized(8182);
      const stateFromStoresObject = familyCenterInitialized(573).useStateFromStoresObject(tmp10, tmp11);
      familyCenterInitialized = stateFromStoresObject.familyCenterInitialized;
      isLoading = stateFromStoresObject.isLoading;
      dependencyMap = null != tmp8;
      const currentUser = UserStore.getCurrentUser();
      const tmpResult = familyCenterInitialized(573);
      [tmp16, _slicedToArray] = noop.useState(0);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            return;
          }
        }
        cResult[2] = N;
      } else {
        class N {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            return;
          }
        }
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            return;
          }
        }
        const stringResult = obj5.string(tmp5(2536).bdBmqy);
        cResult[3] = stringResult;
        const tmp18 = stringResult;
      } else {
        class N {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            return;
          }
        }
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            return;
          }
        }
        tmp22[0] = tmp18;
        tmp22[1] = FamilyCenterSubPages.ACTIVITY;
        tmp22[2] = closure_14(tmp5(16668), {});
        const intl = tmp(1125).intl;
        const stringResult1 = intl.string(tmp5(2536)["gVWG+6"]);
        cResult[4] = tmp22;
        cResult[5] = stringResult1;
        let tmp21 = stringResult1;
      } else {
        class N {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            return;
          }
        }
        tmp21 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            return;
          }
        }
        tmp28[0] = tmp22;
        let obj4 = { label: tmp21, id: FamilyCenterSubPages.REQUESTS, page: closure_14(tmp5(16708), {}) };
        tmp28[1] = obj4;
        const fn2 = function w(arg0) {
          return isLoading(closure_2[19]).selectTab(items[arg0]);
        };
        cResult[6] = tmp28;
        cResult[7] = fn2;
        let tmp27 = fn2;
      } else {
        class N {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            return;
          }
        }
        tmp27 = cResult[7];
      }
      if (cResult[8] !== selectedTab) {
        class N {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            return;
          }
        }
        const index = items.indexOf(selectedTab);
        cResult[8] = selectedTab;
        cResult[9] = index;
      } else {
        class N {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            return;
          }
        }
      }
      if (cResult[10] === tmp16) {
        class N {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            return;
          }
        }
        const segmentedControlState = tmp(8938).useSegmentedControlState(obj7);
        if (cResult[13] === tmp8) {
          class N {
            constructor(arg0) {
              tmp = closure_3(arg0.nativeEvent.layout.width);
              return;
            }
          }
        }
        const obj6 = { ageGroup: tmp8, numOfAcceptedRequests: acceptedRequestsCount, selectedTab, selectedTeenId };
        cResult[13] = tmp8;
        cResult[14] = acceptedRequestsCount;
        cResult[15] = selectedTab;
        cResult[16] = selectedTeenId;
        cResult[17] = obj6;
        const tmpResult2 = tmp(8938);
      }
      obj7 = { items: tmp28, onPageChange: tmp27, pageWidth: tmp16, defaultIndex: tmp31 };
      cResult[10] = tmp16;
      cResult[11] = tmp31;
      cResult[12] = obj7;
      const tmp15 = _slicedToArray(noop.useState(0), 2);
    }
  : function FamilyCenter() {
      const tmp = closure_19();
      const tmp3 = isLoading(7313);
      const acceptedRequestsCount = familyCenterInitialized(8180).useAcceptedRequestsCount();
      const tmp6 = isLoading(16666)();
      const selectedTab = isLoading(16667)().selectedTab;
      let obj = familyCenterInitialized(8180);
      const selectedTeenId = familyCenterInitialized(8182).useSelectedTeenId();
      let obj2 = familyCenterInitialized(8182);
      items = [FamilyCenterStore];
      const stateFromStoresObject = familyCenterInitialized(573).useStateFromStoresObject(items, () => ({
        familyCenterInitialized: FamilyCenterStore.getIsInitialized(),
        isLoading: FamilyCenterStore.isLoading(),
        hasLoadFailed: FamilyCenterStore.hasInitialLoadFailed(),
      }));
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
      const intl = familyCenterInitialized(1125).intl;
      obj6.label = intl.string(isLoading(2536).bdBmqy);
      obj6.id = FamilyCenterSubPages.ACTIVITY;
      obj6.page = closure_14(isLoading(16668), {});
      const items1 = [obj6];
      const obj7 = { label: null, id: null, page: null };
      const intl2 = familyCenterInitialized(1125).intl;
      obj7.label = intl2.string(isLoading(2536)["gVWG+6"]);
      obj7.id = FamilyCenterSubPages.REQUESTS;
      obj7.page = closure_14(isLoading(16708), {});
      items1[1] = obj7;
      obj5.items = items1;
      obj5.onPageChange = function onPageChange(arg0) {
        return isLoading(closure_2[19]).selectTab(items[arg0]);
      };
      obj5.pageWidth = tmp12;
      obj5.defaultIndex = items.indexOf(selectedTab);
      const segmentedControlState = familyCenterInitialized(8938).useSegmentedControlState(obj5);
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
              initial_page: dependencyMap2[selectedTab],
              source: constants.SETTINGS,
            };
            AnalyticsUtilsDefault.track(AnalyticEvents.FAMILY_CENTER_VIEWED, obj2);
            const obj4 = { name: MetricEvents.MetricEvents.FAMILY_CENTER_VIEW };
            MonitoringAgentDefault.increment(obj4);
          }
        }
      }, items2);
      isLoading(5300)(() => {
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
            tmp4(6726).openAgeGateModal(AgeGateSource.FAMILY_CENTER);
            return null;
          }
        }
      }
      const obj9 = { value: tmp3(isLoading(7338).FAMILY_CENTER).analyticsLocations, children: null };
      let obj10 = { style: tmp.container, onLayout: callback, children: null };
      let obj4 = familyCenterInitialized(8938);
      const items3 = [
        closure_14(ref, {
          style: tmp.segmentedControlContainer,
          children: closure_14(familyCenterInitialized(9182).SegmentedControl, { state: segmentedControlState }),
        }),
      ];
      let obj12 = { style: tmp.container, children: null };
      if (stateFromStoresObject.hasLoadFailed) {
        let tmp14Result = closure_14(closure_18, {});
      } else if (isLoading) {
        tmp14Result = closure_14(closure_17, {});
      } else {
        const obj13 = { state: segmentedControlState };
        tmp14Result = closure_14(tmp4(11240).SegmentedControlPages, obj13);
      }
      obj12.children = tmp14Result;
      obj12 = closure_14(tmp23, obj12);
      items3[1] = obj12;
      obj10.children = items3;
      obj10 = closure_15(tmp23, obj10);
      obj9.children = obj10;
      closure_14(familyCenterInitialized(7313).AnalyticsLocationProvider, obj9);
      const obj11 = {
        style: tmp.segmentedControlContainer,
        children: closure_14(familyCenterInitialized(9182).SegmentedControl, { state: segmentedControlState }),
      };
    };
ReactCompilerGating = fn(558);
let obj6 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterContainer() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp5 = closure_1_14(closure_20, {});
        cResult[0] = tmp5;
        let first = tmp5;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function FamilyCenterContainer() {
      return closure_1_14(closure_20, {});
    };
