// === Module 16760: UserSettingsFamilyCenter ===

// Module 16760 (UserSettingsFamilyCenter)
import DispatcherDefault from "Dispatcher" /* 572 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _modDef2538 from "module_2538" /* 2538 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5023 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 6540 */;
import MetricEvents from "MetricEvents" /* 6545 */;
import AgeGateModalActionCreators from "AgeGateModalActionCreators" /* 6739 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7086 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7717 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7715 */;
import UserStore from "UserStore" /* 1383 */;

require = fn;
function FamilyCenterLoading() {
  const tmp = closure_19();
  return closure_1_14(Stack_Stack.Stack, { justify: "center", align: "center", style: closure_19().loadingContainer, children: closure_1_14(timestampProducer, {}) });
}
function FamilyCenterLoadError() {
  const tmp = closure_19();
  const intl = util.intl;
  const stringResult = intl.string(_modDef2538.nGX8Co);
  require = stringResult;
  items = [stringResult];
  const effect = noop.useEffect(() => {
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(stringResult, "assertive");
  }, items);
  const obj = { justify: "center", align: "center", spacing: nativeDefault.space.PX_24, style: tmp.loadErrorContainer, children: null };
  const obj2 = { align: "center", spacing: nativeDefault.space.PX_12, children: null };
  const items1 = [closure_14(CircleErrorIcon.CircleErrorIcon, { size: "lg", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL }), closure_14(Text_Text.Text, { variant: "text-md/medium", color: "text-strong", style: tmp.loadErrorText, children: stringResult })];
  obj2.children = items1;
  const items2 = [closure_15(Stack_Stack.Stack, obj2), ];
  const obj5 = { text: null, onPress: null };
  const intl2 = util.intl;
  obj5.text = intl2.string(util.t["7NqTJn"]);
  obj5.onPress = function onPress() {
    return FamilyCenterActionCreatorsDefault.initialPageLoad();
  };
  items2[1] = closure_14(components_Button_Button.Button, obj5);
  obj.children = items2;
  return closure_15(Stack_Stack.Stack, obj);
}
function FamilyCenter() {
  let tmp = closure_19();
  navigation = navigation(isLoading[19]).useNavigation();
  let obj = navigation(isLoading[19]);
  const tmp6 = familyCenterInitialized(isLoading[20]);
  const acceptedRequestsCount = navigation(isLoading[22]).useAcceptedRequestsCount();
  const tmp8 = familyCenterInitialized(isLoading[23])();
  const selectedTab = familyCenterInitialized(isLoading[24])().selectedTab;
  let obj2 = navigation(isLoading[22]);
  const selectedTeenId = navigation(isLoading[25]).useSelectedTeenId();
  let obj3 = navigation(isLoading[25]);
  items = [closure_7];
  const stateFromStoresObject = navigation(isLoading[26]).useStateFromStoresObject(items, () => ({ familyCenterInitialized: closure_7.getIsInitialized(), isLoading: closure_7.isLoading(), hasLoadFailed: closure_7.hasInitialLoadFailed() }));
  familyCenterInitialized = stateFromStoresObject.familyCenterInitialized;
  isLoading = stateFromStoresObject.isLoading;
  const hasLoadFailed = stateFromStoresObject.hasLoadFailed;
  _slicedToArray = tmp12;
  let tmp13 = familyCenterInitialized;
  const currentUser = UserStore.getCurrentUser();
  if (familyCenterInitialized) {
    tmp13 = !isLoading;
  }
  if (tmp13) {
    tmp13 = !hasLoadFailed;
  }
  if (tmp13) {
    tmp13 = null != currentUser;
  }
  if (tmp13) {
    tmp13 = !tmp12;
  }
  noop = tmp13;
  let obj4 = navigation(isLoading[26]);
  [tmp15, closure_5] = noop.useState(0);
  const callback = noop.useCallback((nativeEvent) => {
    closure_1_5(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp14 = _slicedToArray(noop.useState(0), 2);
  const obj5 = { items: null, onPageChange: null, pageWidth: null, defaultIndex: null };
  const obj6 = { label: null, id: null, page: null };
  const intl = tmp2(tmp3[10]).intl;
  obj6.label = intl.string(familyCenterInitialized(isLoading[11]).bdBmqy);
  obj6.id = FamilyCenterSubPages.ACTIVITY;
  obj6.page = closure_14(familyCenterInitialized(isLoading[28]), {});
  const items1 = [obj6, ];
  const obj7 = { label: null, id: null, page: null };
  const intl2 = tmp2(tmp3[10]).intl;
  obj7.label = intl2.string(familyCenterInitialized(isLoading[11])["gVWG+6"]);
  obj7.id = FamilyCenterSubPages.REQUESTS;
  obj7.page = closure_14(familyCenterInitialized(isLoading[29]), {});
  items1[1] = obj7;
  obj5.items = items1;
  obj5.onPageChange = function onPageChange(arg0) {
    return familyCenterInitialized(isLoading[17]).selectTab(items[arg0]);
  };
  obj5.pageWidth = tmp15;
  obj5.defaultIndex = items.indexOf(selectedTab);
  const segmentedControlState = navigation(isLoading[27]).useSegmentedControlState(obj5);
  closure_7 = noop.useRef({ ageGroup: tmp8, numOfAcceptedRequests: acceptedRequestsCount, selectedTab, selectedTeenId });
  const effect = noop.useEffect(() => {
    closure_7.current = obj8;
  });
  const items2 = [familyCenterInitialized, null != tmp8];
  const effect1 = noop.useEffect(() => {
    if (familyCenterInitialized) {
      if (closure_3) {
        ({ ageGroup, numOfAcceptedRequests, selectedTab, selectedTeenId } = closure_7.current);
        const obj2 = { is_considered_adult: "adult" === ageGroup, num_of_accepted_links: numOfAcceptedRequests, selected_teen_id: selectedTeenId, initial_page: closure_2_12[selectedTab], source: constants.SETTINGS };
        AnalyticsUtilsDefault.track(AnalyticEvents.FAMILY_CENTER_VIEWED, obj2);
        const obj4 = { name: MetricEvents.MetricEvents.FAMILY_CENTER_VIEW };
        MonitoringAgentDefault.increment(obj4);
      }
    }
  }, items2);
  familyCenterInitialized(isLoading[33])(() => {
    let canRefetchResult = !isLoading;
    if (!isLoading) {
      canRefetchResult = FamilyCenterStore.canRefetch();
    }
    if (canRefetchResult) {
      FamilyCenterActionCreatorsDefault.initialPageLoad();
    }
  });
  familyCenterInitialized(isLoading[34])();
  UserStore = noop.useRef(false);
  const items3 = [tmp13];
  const effect2 = noop.useEffect(() => {
    let tmp = closure_4;
    if (closure_4) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      AgeGateModalActionCreators.openAgeGateModal(AgeGateSource.FAMILY_CENTER);
    }
  }, items3);
  const items4 = [navigation];
  const effect3 = noop.useEffect(() => {
    function handleGateClose(arg0) {
      if (ref.current) {
        tmp2.current = false;
        if (true !== tmp) {
          handleGateClose.goBack();
        }
      }
    }
    const subscription = familyCenterInitialized(isLoading[36]).subscribe("AGE_GATE_MODAL_CLOSE", handleGateClose);
    return () => {
      DispatcherDefault.unsubscribe("AGE_GATE_MODAL_CLOSE", handleGateClose);
    };
  }, items4);
  if (tmp13) {
    return null;
  } else {
    const obj9 = { value: tmp6(familyCenterInitialized(isLoading[21]).FAMILY_CENTER).analyticsLocations, children: null };
    let obj10 = { style: tmp.container, onLayout: callback, children: null };
    const obj11 = { style: tmp.segmentedControlContainer, children: null };
    const obj12 = { state: segmentedControlState };
    obj11.children = closure_14(tmp2(tmp3[37]).SegmentedControl, obj12);
    const items5 = [closure_14(closure_5, obj11), ];
    let obj13 = { style: tmp.container, children: null };
    if (hasLoadFailed) {
      let tmp17Result = closure_14(FamilyCenterLoadError, {});
    } else if (isLoading) {
      tmp17Result = closure_14(FamilyCenterLoading, {});
    } else {
      const obj14 = { state: segmentedControlState };
      tmp17Result = closure_14(tmp2(tmp3[38]).SegmentedControlPages, obj14);
    }
    obj13.children = tmp17Result;
    obj13 = closure_14(closure_5, obj13);
    items5[1] = obj13;
    obj10.children = items5;
    obj10 = closure_15(closure_5, obj10);
    obj9.children = obj10;
    closure_14(tmp2(tmp3[20]).AnalyticsLocationProvider, obj9);
  }
  const obj8 = { ageGroup: tmp8, numOfAcceptedRequests: acceptedRequestsCount, selectedTab, selectedTeenId };
  const tmp2Result = navigation(isLoading[27]);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1072).AnalyticEvents;
const AgeGateSource = fn(1097).AgeGateSource;
const FamilyCenterConstants = fn(7716);
({ FamilyCenterPageLocationAnalyticsIds: closure_11, FamilyCenterSubPageAnalyticsIds: closure_12, FamilyCenterSubPages } = FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let items = [, ];
({ ACTIVITY: arr[0], REQUESTS: arr[1] } = FamilyCenterSubPages);
const createStyles = fn(5014);
let obj2 = { container: { display: "flex", flex: 1 }, segmentedControlContainer: { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 }, loadingContainer: { minHeight: "100%" }, loadErrorContainer: null, loadErrorText: null };
let obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.loadErrorContainer = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.loadErrorText = { textAlign: "center" };
let closure_19 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx");

export default function FamilyCenterContainer() {
  return closure_1_14(FamilyCenter, {});
};