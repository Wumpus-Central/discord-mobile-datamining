import _slicedToArray from "_slicedToArray";
import FamilyCenterParentalControlsDataAndPrivacy from "FamilyCenterParentalControlsDataAndPrivacy";
import get_ActivityIndicator from "GenericHeaderTitle";
import { UserSettingsSections } from "ME";
import { FamilyCenterSubPages } from "items";
import jsxProd from "maybeFetchCollectiblesForInvoices";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let c9;
let closure_6;
const require = arg1;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: { display: "flex", flex: 1 }, segmentedControlContainer: null, content: null };
createCacheKey = { paddingTop: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingBottom: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingBottom: require("Themes").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenterParentalControls.tsx");

export default function FamilyCenterParentalControlsSettings() {
  let importDefault;
  let tmp8;
  let tmp = createCacheKey();
  let obj = stackNavigation(selectedSubPage[8]);
  stackNavigation = obj.useStackNavigation();
  let obj1 = isFamilyCenterV3Enabled;
  const tmp6 = importDefault(selectedSubPage[9]);
  [tmp8, importDefault] = callback(isFamilyCenterV3Enabled.useState(0), 2);
  let obj2 = stackNavigation(selectedSubPage[11]);
  const settingNavigationRoute = obj2.useSettingNavigationRoute();
  const params = settingNavigationRoute.params;
  selectedSubPage = undefined;
  if (params != null) {
    selectedSubPage = params.selectedSubPage;
  }
  if (selectedSubPage == null) {
    selectedSubPage = items2.CONTENT_AND_SOCIAL;
  }
  const params2 = settingNavigationRoute.params;
  let autoOpenCreate;
  if (params2 != null) {
    autoOpenCreate = params2.autoOpenCreate;
  }
  callback = tmp13;
  let tmp2Result = tmp2(tmp3[12]);
  isFamilyCenterV3Enabled = tmp2Result.useIsFamilyCenterV3Enabled({ location: "FamilyCenterParentalControlsSettings" });
  tmp2Result = tmp2(tmp3[13]);
  const selectedTeenUser = tmp2Result.useSelectedTeenUser();
  let id;
  if (selectedTeenUser != null) {
    id = selectedTeenUser.id;
  }
  const tmp17 = importDefault(selectedSubPage[14])();
  let closure_6 = tmp17;
  callback = obj1.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let closure_7 = obj1.useRef(false);
  const items = [true === autoOpenCreate, id, stackNavigation];
  const effect = obj1.useEffect(() => {
    let tmp = _slicedToArray;
    if (_slicedToArray) {
      tmp = null != id;
    }
    if (tmp) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      stackNavigation.setParams({ autoOpenCreate: false });
      const obj = { teenId: null };
      obj[0] = id;
      stackNavigation.navigate(ref.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
    }
  }, items);
  const items1 = [stackNavigation, selectedSubPage, isFamilyCenterV3Enabled, id, tmp17];
  const layoutEffect = obj1.useLayoutEffect(() => {
    if (isFamilyCenterV3Enabled) {
      if (selectedSubPage === items2.SCREEN_TIME_CONTROLS) {
        if (null != id) {
          let obj = { title: null, headerRight: null };
          let intl = stackNavigation(selectedSubPage[15]).intl;
          obj[0] = intl.string(outer1_1(selectedSubPage[16])["1Op+NP"]);
          let fn;
          if (!closure_6) {
            fn = (arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj.onPress = function onPress() {
                return navigation.navigate(outer1_7.FAMILY_CENTER_SCHEDULE_DOWNTIME, { teenId: closure_5 });
              };
              const intl = outer1_0(outer1_2[15]).intl;
              obj.label = intl.string(outer1_0(outer1_2[15]).t.OYkgVk);
              return outer1_9(outer1_0(outer1_2[17]).HeaderTextButton, obj);
            };
          }
          obj[1] = fn;
          stackNavigation.setOptions(obj);
        }
      }
    }
    stackNavigation.setOptions({ title: "body", headerRight: "useStateFromStores" });
  }, items1);
  if (isFamilyCenterV3Enabled) {
    isFamilyCenterV3Enabled = selectedSubPage === items2.SCREEN_TIME_CONTROLS;
  }
  obj = { label: null, id: null, page: null };
  let intl = tmp2(tmp3[15]).intl;
  obj[0] = intl.string(stackNavigation(selectedSubPage[15]).t["+o1pDZ"]);
  obj[1] = items2.CONTENT_AND_SOCIAL;
  obj[2] = callback2(importDefault(selectedSubPage[18]), {});
  items2 = [obj, ];
  obj = { label: null, id: null, page: null };
  const intl2 = tmp2(tmp3[15]).intl;
  obj[0] = intl2.string(stackNavigation(selectedSubPage[15]).t.OAuOHD);
  obj[1] = items2.DATA_AND_PRIVACY;
  obj[2] = callback2(importDefault(selectedSubPage[19]), {});
  items2[1] = obj;
  const tmp7 = callback(isFamilyCenterV3Enabled.useState(0), 2);
  obj1 = {
    items: items2,
    onPageChange(arg0) {
      const tab = outer1_1(selectedSubPage[21]).selectTab(items2[arg0].id);
    },
    pageWidth: tmp8,
    defaultIndex: Math.max(items2.findIndex((id) => id.id === selectedSubPage), 0)
  };
  const segmentedControlState = stackNavigation(selectedSubPage[20]).useSegmentedControlState(obj1);
  obj2 = { value: tmp6(importDefault(selectedSubPage[10]).FAMILY_CENTER).analyticsLocations, children: null };
  if (isFamilyCenterV3Enabled) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.container;
    const obj4 = { bottom: true, style: null, children: null };
    obj4[1] = tmp.content;
    const obj5 = { readOnly: null };
    obj5[0] = tmp17;
    obj4[2] = tmp22(tmp5(tmp3[23]), obj5);
    obj3[1] = tmp22(tmp2(tmp3[22]).SafeAreaPaddingView, obj4);
    obj2[1] = tmp22(closure_6, obj3);
    let tmp27 = obj2;
  } else {
    const obj6 = { style: null, onLayout: null, children: null };
    obj6[0] = tmp.container;
    obj6[1] = callback;
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.segmentedControlContainer;
    const obj8 = { state: null };
    obj8[0] = segmentedControlState;
    obj7[1] = tmp22(tmp2(tmp3[24]).SegmentedControl, obj8);
    const items3 = [tmp22(id, obj7), ];
    const obj9 = { style: null, children: null };
    obj9[0] = tmp.container;
    const obj10 = { children: null };
    const obj11 = { bottom: true, style: null, children: null };
    obj11[1] = tmp.content;
    const obj12 = { state: null };
    obj12[0] = segmentedControlState;
    obj11[2] = tmp22(tmp2(tmp3[25]).SegmentedControlPages, obj12);
    obj10[0] = tmp22(tmp2(tmp3[22]).SafeAreaPaddingView, obj11);
    obj9[1] = tmp22(closure_6, obj10);
    items3[1] = tmp22(id, obj9);
    obj6[2] = items3;
    obj2[1] = callback3(id, obj6);
    tmp27 = obj2;
  }
  return callback2(stackNavigation(selectedSubPage[9]).AnalyticsLocationProvider, tmp27);
};