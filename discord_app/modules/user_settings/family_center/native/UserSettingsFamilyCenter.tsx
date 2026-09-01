// discord_app/modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../parent_tools/FamilyCenterStore.tsx";
import closure_8 from "../../../../stores/UserStore.tsx";
import { AnalyticEvents } from "../../../../Constants.tsx";
import { AgeGateSource } from "../../../age_gate/AgeGateConstants.tsx";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import items from "../../../parent_tools/FamilyCenterConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function FamilyCenterLoading() {
  const tmp = callback3();
  return callback2(Stack.Stack, { justify: "center", align: "center", style: callback3().loadingContainer, children: callback2(closure_6, {}) });
}
function FamilyCenter() {
  const tmp = callback3();
  let obj = familyCenterInitialized(8772);
  const acceptedRequestsCount = obj.useAcceptedRequestsCount();
  const tmp6 = isLoading(14476)();
  const selectedTab = isLoading(14477)().selectedTab;
  obj1 = familyCenterInitialized(8774);
  const selectedTeenId = obj1.useSelectedTeenId();
  let obj2 = familyCenterInitialized(647);
  items = [closure_7];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => ({ familyCenterInitialized: closure_7.getIsInitialized(), isLoading: closure_7.isLoading() }));
  familyCenterInitialized = stateFromStoresObject.familyCenterInitialized;
  isLoading = stateFromStoresObject.isLoading;
  dependencyMap = tmp10;
  currentUser = currentUser.getCurrentUser();
  const tmp3 = isLoading(5953);
  [tmp12, closure_3] = callback(obj2.useState(0), 2);
  callback = obj2.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj3 = familyCenterInitialized(9260);
  obj = { items: null, onPageChange: null, pageWidth: null, defaultIndex: null };
  obj = { label: null, id: null, page: null };
  const intl = familyCenterInitialized(1236).intl;
  obj[0] = intl.string(isLoading(2369).bdBmqy);
  obj[1] = FamilyCenterSubPages.ACTIVITY;
  obj[2] = callback2(isLoading(14478), {});
  const items1 = [obj, ];
  obj1 = { label: null, id: null, page: null };
  const intl2 = familyCenterInitialized(1236).intl;
  obj1[0] = intl2.string(isLoading(2369)["gVWG+6"]);
  obj1[1] = FamilyCenterSubPages.REQUESTS;
  obj1[2] = callback2(isLoading(14518), {});
  items1[1] = obj1;
  obj[0] = items1;
  obj[1] = function onPageChange(arg0) {
    return isLoading(7284).selectTab(table[arg0]);
  };
  obj[2] = tmp12;
  obj[3] = items.indexOf(selectedTab);
  const segmentedControlState = obj3.useSegmentedControlState(obj);
  obj2 = { ageGroup: tmp6, numOfAcceptedRequests: acceptedRequestsCount, selectedTab, selectedTeenId };
  closure_5 = obj2.useRef(obj2);
  const effect = obj2.useEffect(() => {
    closure_5.current = obj2;
  });
  const items2 = [familyCenterInitialized, null != tmp6];
  const effect1 = obj2.useEffect(() => {
    if (familyCenterInitialized) {
      if (dependencyMap) {
        ({ ageGroup, numOfAcceptedRequests, selectedTab, selectedTeenId } = ref.current);
        let obj = isLoading(698);
        obj = { is_considered_adult: null, num_of_accepted_links: null, selected_teen_id: null, initial_page: null, source: null };
        obj[0] = "adult" === ageGroup;
        obj[1] = numOfAcceptedRequests;
        obj[2] = selectedTeenId;
        obj[3] = closure_1_13[selectedTab];
        obj[4] = closure_1_12.SETTINGS;
        obj.track(closure_1_9.FAMILY_CENTER_VIEWED, obj);
        obj = { name: null };
        obj[0] = familyCenterInitialized(7352).MetricEvents.FAMILY_CENTER_VIEW;
        isLoading(7347).increment(obj);
        const obj3 = isLoading(7347);
      }
    }
  }, items2);
  isLoading(4945)(() => {
    let obj = familyCenterInitialized(4298);
    obj = { dismissAction: closure_1_11.AUTO, forceTrack: true };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(familyCenterInitialized(1373).DismissibleContent.FAMILY_CENTER_NEW_BADGE, obj);
    let canRefetchResult = !isLoading;
    if (!isLoading) {
      canRefetchResult = closure_1_7.canRefetch();
    }
    if (canRefetchResult) {
      isLoading(7284).initialPageLoad();
      const obj3 = isLoading(7284);
    }
  });
  if (familyCenterInitialized) {
    if (null != currentUser) {
      if (!tmp10) {
        tmp4(6051).openAgeGateModal(AgeGateSource.FAMILY_CENTER);
        return null;
      }
    }
  }
  obj3 = { value: tmp3(isLoading(5973).FAMILY_CENTER).analyticsLocations, children: null };
  let obj4 = { style: tmp.container, onLayout: callback, children: null };
  const tmp11 = callback(obj2.useState(0), 2);
  const items3 = [callback2(closure_5, { style: tmp.segmentedControlContainer, children: callback2(familyCenterInitialized(9762).SegmentedControl, { state: segmentedControlState }) }), ];
  let obj6 = { style: tmp.container, children: null };
  if (isLoading) {
    let tmp14Result = tmp14(FamilyCenterLoading, {});
  } else {
    const obj7 = { state: null };
    obj7[0] = segmentedControlState;
    tmp14Result = tmp14(tmp4(9268).SegmentedControlPages, obj7);
  }
  obj6[1] = tmp14Result;
  obj6 = tmp14(tmp23, obj6);
  items3[1] = obj6;
  obj4[2] = items3;
  obj4 = closure_16(tmp23, obj4);
  obj3[1] = obj4;
  tmp14Result = tmp14(tmp4(5953).AnalyticsLocationProvider, obj3);
}
({ View: c5, ActivityIndicator: closure_6 } = get_ActivityIndicator);
({ FamilyCenterPageLocationAnalyticsIds: closure_12, FamilyCenterSubPageAnalyticsIds: map1, FamilyCenterSubPages } = items);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
items = [, ];
({ ACTIVITY: arr[0], REQUESTS: arr[1] } = FamilyCenterSubPages);
createCacheKey = { container: { display: "flex", flex: 1 }, segmentedControlContainer: null, loadingContainer: null };
createCacheKey = { paddingTop: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { minHeight: "100%" };
let closure_19 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx");

export default function FamilyCenterContainer() {
  return callback2(FamilyCenter, {});
};