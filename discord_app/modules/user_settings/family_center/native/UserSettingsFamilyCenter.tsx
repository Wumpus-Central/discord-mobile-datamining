// discord_app/modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx
import ThemesDefault from "Themes" /* 712 */;
import Stack from "Stack" /* 4733 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "freshTeenActivityWithMap" /* 5296 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { AgeGateSource } from "result" /* 1221 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import items from "items" /* 5297 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function FamilyCenterLoading() {
  const tmp = callback3();
  return callback2(Stack.Stack, { justify: "center", align: "center", style: callback3().loadingContainer, children: callback2(closure_6, {}) });
}
function FamilyCenter() {
  const tmp = callback3();
  let obj = familyCenterInitialized(7621);
  const acceptedRequestsCount = obj.useAcceptedRequestsCount();
  const tmp6 = isLoading(14227)();
  const selectedTab = isLoading(14228)().selectedTab;
  obj1 = familyCenterInitialized(7623);
  const selectedTeenId = obj1.useSelectedTeenId();
  let obj2 = familyCenterInitialized(647);
  items = [closure_7];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => ({ familyCenterInitialized: closure_7.getIsInitialized(), isLoading: closure_7.isLoading() }));
  familyCenterInitialized = stateFromStoresObject.familyCenterInitialized;
  isLoading = stateFromStoresObject.isLoading;
  dependencyMap = tmp10;
  currentUser = currentUser.getCurrentUser();
  const tmp3 = isLoading(7139);
  [tmp12, closure_3] = callback(obj2.useState(0), 2);
  callback = obj2.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj3 = familyCenterInitialized(8799);
  obj = { items: null, onPageChange: null, pageWidth: null, defaultIndex: null };
  obj = { label: null, id: null, page: null };
  const intl = familyCenterInitialized(1236).intl;
  obj[0] = intl.string(isLoading(2335).bdBmqy);
  obj[1] = FamilyCenterSubPages.ACTIVITY;
  obj[2] = callback2(isLoading(14229), {});
  const items1 = [obj, ];
  obj1 = { label: null, id: null, page: null };
  const intl2 = familyCenterInitialized(1236).intl;
  obj1[0] = intl2.string(isLoading(2335)["gVWG+6"]);
  obj1[1] = FamilyCenterSubPages.REQUESTS;
  obj1[2] = callback2(isLoading(14269), {});
  items1[1] = obj1;
  obj[0] = items1;
  obj[1] = function onPageChange(arg0) {
    return isLoading(5298).selectTab(table[arg0]);
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
        obj[0] = familyCenterInitialized(5011).MetricEvents.FAMILY_CENTER_VIEW;
        isLoading(5006).increment(obj);
        const obj3 = isLoading(5006);
      }
    }
  }, items2);
  isLoading(4761)(() => {
    let obj = familyCenterInitialized(4196);
    obj = { dismissAction: closure_1_11.AUTO, forceTrack: true };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(familyCenterInitialized(1377).DismissibleContent.FAMILY_CENTER_NEW_BADGE, obj);
    let canRefetchResult = !isLoading;
    if (!isLoading) {
      canRefetchResult = closure_1_7.canRefetch();
    }
    if (canRefetchResult) {
      isLoading(5298).initialPageLoad();
      const obj3 = isLoading(5298);
    }
  });
  if (familyCenterInitialized) {
    if (null != currentUser) {
      if (!tmp10) {
        tmp4(5255).openAgeGateModal(AgeGateSource.FAMILY_CENTER);
        return null;
      }
    }
  }
  obj3 = { value: tmp3(isLoading(7159).FAMILY_CENTER).analyticsLocations, children: null };
  let obj4 = { style: tmp.container, onLayout: callback, children: null };
  const tmp11 = callback(obj2.useState(0), 2);
  const items3 = [callback2(closure_5, { style: tmp.segmentedControlContainer, children: callback2(familyCenterInitialized(10096).SegmentedControl, { state: segmentedControlState }) }), ];
  let obj6 = { style: tmp.container, children: null };
  if (isLoading) {
    let tmp14Result = tmp14(FamilyCenterLoading, {});
  } else {
    const obj7 = { state: null };
    obj7[0] = segmentedControlState;
    tmp14Result = tmp14(tmp4(11785).SegmentedControlPages, obj7);
  }
  obj6[1] = tmp14Result;
  obj6 = tmp14(tmp23, obj6);
  items3[1] = obj6;
  obj4[2] = items3;
  obj4 = closure_16(tmp23, obj4);
  obj3[1] = obj4;
  tmp14Result = tmp14(tmp4(7139).AnalyticsLocationProvider, obj3);
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