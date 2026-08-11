// discord_app/modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx
import openAgeGateModal from "openAgeGateModal";
import defaultAreStatesEqual from "defaultAreStatesEqual";
import get_ActivityIndicator from "useSelectedMyFamilyTab";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import mergeGuildAvatar from "mergeGuildAvatar";
import { AnalyticEvents } from "ME";
import { AgeGateSource } from "result";
import { ContentDismissActionType } from "ContentDismissActionType";
import items from "items";
import jsxProd from "getSystemLocale";
import createCacheKey from "createCacheKey";
import { Stack } from "../../../../design/components/Stack/native/Stack.native.tsx";

let FamilyCenterSubPages;
let c5;
let closure_12;
let closure_15;
let closure_16;
let closure_6;
let map1;
const require = arg1;
function FamilyCenterLoading() {
  const obj = { justify: "center", align: "center", style: createCacheKey().loadingContainer, children: null };
  obj[3] = callback2(closure_6, {});
  return callback2(Stack.Stack, obj);
}
function FamilyCenter() {
  let openAgeGateModal;
  let tmp12;
  const tmp = createCacheKey();
  let obj = familyCenterInitialized(7338);
  const acceptedRequestsCount = obj.useAcceptedRequestsCount();
  const tmp6 = isLoading(14125)();
  const selectedTab = isLoading(14126)().selectedTab;
  let obj1 = familyCenterInitialized(7340);
  const selectedTeenId = obj1.useSelectedTeenId();
  let obj2 = familyCenterInitialized(647);
  const items = [freshTeenActivityWithMap];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => ({ familyCenterInitialized: freshTeenActivityWithMap.getIsInitialized(), isLoading: freshTeenActivityWithMap.isLoading() }));
  familyCenterInitialized = stateFromStoresObject.familyCenterInitialized;
  isLoading = stateFromStoresObject.isLoading;
  const dependencyMap = tmp10;
  currentUser = currentUser.getCurrentUser();
  const tmp3 = isLoading(5728);
  [tmp12, openAgeGateModal] = callback(obj2.useState(0), 2);
  callback = obj2.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj3 = familyCenterInitialized(8962);
  obj = { items: null, onPageChange: null, pageWidth: null, defaultIndex: null };
  obj = { label: null, id: null, page: null };
  const intl = familyCenterInitialized(1236).intl;
  obj[0] = intl.string(isLoading(2303).bdBmqy);
  obj[1] = FamilyCenterSubPages.ACTIVITY;
  obj[2] = callback2(isLoading(14127), {});
  const items1 = [obj, ];
  obj1 = { label: null, id: null, page: null };
  const intl2 = familyCenterInitialized(1236).intl;
  obj1[0] = intl2.string(isLoading(2303)["gVWG+6"]);
  obj1[1] = FamilyCenterSubPages.REQUESTS;
  obj1[2] = callback2(isLoading(14167), {});
  items1[1] = obj1;
  obj[0] = items1;
  obj[1] = function onPageChange(arg0) {
    return isLoading(tmp10[25]).selectTab(table[arg0]);
  };
  obj[2] = tmp12;
  obj[3] = items.indexOf(selectedTab);
  const segmentedControlState = obj3.useSegmentedControlState(obj);
  obj2 = { ageGroup: tmp6, numOfAcceptedRequests: acceptedRequestsCount, selectedTab, selectedTeenId };
  let closure_5 = obj2.useRef(obj2);
  const effect = obj2.useEffect(() => {
    closure_5.current = obj2;
  });
  const items2 = [familyCenterInitialized, null != tmp6];
  const effect1 = obj2.useEffect(() => {
    let ageGroup;
    let numOfAcceptedRequests;
    let selectedTab;
    let selectedTeenId;
    if (familyCenterInitialized) {
      if (tmp10) {
        ({ ageGroup, numOfAcceptedRequests, selectedTab, selectedTeenId } = ref.current);
        let obj = isLoading(tmp10[26]);
        obj = { is_considered_adult: null, num_of_accepted_links: null, selected_teen_id: null, initial_page: null, source: null };
        obj[0] = "adult" === ageGroup;
        obj[1] = numOfAcceptedRequests;
        obj[2] = selectedTeenId;
        obj[3] = outer1_13[selectedTab];
        obj[4] = outer1_12.SETTINGS;
        obj.track(outer1_9.FAMILY_CENTER_VIEWED, obj);
        obj = { name: null };
        obj[0] = familyCenterInitialized(tmp10[28]).MetricEvents.FAMILY_CENTER_VIEW;
        isLoading(tmp10[27]).increment(obj);
        const obj3 = isLoading(tmp10[27]);
      }
    }
  }, items2);
  isLoading(4730)(() => {
    let obj = familyCenterInitialized(tmp10[30]);
    obj = { dismissAction: outer1_11.AUTO, forceTrack: true };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(familyCenterInitialized(tmp10[31]).DismissibleContent.FAMILY_CENTER_NEW_BADGE, obj);
    let canRefetchResult = !isLoading;
    if (!isLoading) {
      canRefetchResult = outer1_7.canRefetch();
    }
    if (canRefetchResult) {
      isLoading(tmp10[25]).initialPageLoad();
      const obj3 = isLoading(tmp10[25]);
    }
  });
  if (familyCenterInitialized) {
    if (null != currentUser) {
      if (!tmp10) {
        tmp4(5826).openAgeGateModal(AgeGateSource.FAMILY_CENTER);
        return null;
      }
    }
  }
  obj3 = { value: tmp3(isLoading(5748).FAMILY_CENTER).analyticsLocations, children: null };
  let obj4 = { style: tmp.container, onLayout: callback, children: null };
  const obj5 = { style: tmp.segmentedControlContainer, children: null };
  obj5[1] = callback2(familyCenterInitialized(9147).SegmentedControl, { state: segmentedControlState });
  const items3 = [callback2(closure_5, obj5), ];
  let obj6 = { style: tmp.container, children: null };
  if (isLoading) {
    let tmp14Result = tmp14(FamilyCenterLoading, {});
  } else {
    const obj7 = { state: null };
    obj7[0] = segmentedControlState;
    tmp14Result = tmp14(tmp4(9567).SegmentedControlPages, obj7);
  }
  obj6[1] = tmp14Result;
  obj6 = tmp14(tmp23, obj6);
  items3[1] = obj6;
  obj4[2] = items3;
  obj4 = closure_16(tmp23, obj4);
  obj3[1] = obj4;
  tmp14Result = tmp14(tmp4(5728).AnalyticsLocationProvider, obj3);
}
({ View: c5, ActivityIndicator: closure_6 } = get_ActivityIndicator);
({ FamilyCenterPageLocationAnalyticsIds: closure_12, FamilyCenterSubPageAnalyticsIds: map1, FamilyCenterSubPages } = items);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
items = [, ];
({ ACTIVITY: arr[0], REQUESTS: arr[1] } = FamilyCenterSubPages);
createCacheKey = { container: { display: "flex", flex: 1 }, segmentedControlContainer: null, loadingContainer: null };
createCacheKey = { paddingTop: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { minHeight: "100%" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx");

export default function FamilyCenterContainer() {
  return callback2(FamilyCenter, {});
};