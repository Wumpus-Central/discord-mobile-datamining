// discord_app/modules/user_settings/family_center/native/UserSettingsFamilyCenterParentalControls.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { UserSettingsSections } from "../../../../Constants.tsx";
import { FamilyCenterSubPages } from "../../../parent_tools/FamilyCenterConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
const createCacheKey = { paddingTop: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingBottom: ThemesDefault.space.PX_16 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenterParentalControls.tsx");

export default function FamilyCenterParentalControlsSettings() {
  let tmp = callback4();
  let obj = stackNavigation(selectedSubPage[8]);
  stackNavigation = obj.useStackNavigation();
  obj1 = isFamilyCenterV3Enabled;
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
  closure_6 = tmp17;
  callback = obj1.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  closure_7 = obj1.useRef(false);
  const items = [true === autoOpenCreate, id, stackNavigation];
  const effect = obj1.useEffect(() => {
    let tmp = closure_3;
    if (closure_3) {
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
          obj[0] = intl.string(importDefault(selectedSubPage[16])["1Op+NP"]);
          let fn;
          if (!closure_6) {
            fn = (arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj.onPress = function onPress() {
                return navigation.navigate(closure_1_7.FAMILY_CENTER_SCHEDULE_DOWNTIME, { teenId: closure_5 });
              };
              const intl = stackNavigation(selectedSubPage[15]).intl;
              obj.label = intl.string(stackNavigation(selectedSubPage[15]).t.OYkgVk);
              return closure_1_9(stackNavigation(selectedSubPage[17]).HeaderTextButton, obj);
            };
          }
          obj[1] = fn;
          stackNavigation.setOptions(obj);
        }
      }
    }
    stackNavigation.setOptions({ title: "r", headerRight: "accessibilityRole" });
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
      const tab = importDefault(selectedSubPage[21]).selectTab(items2[arg0].id);
    },
    pageWidth: tmp8,
    defaultIndex: Math.max(items2.findIndex((item, index) => item.id === selectedSubPage), 0)
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
    obj4[2] = callback2(importDefault(tmp3[23]), obj5);
    obj3[1] = callback2(tmp2(tmp3[22]).SafeAreaPaddingView, obj4);
    obj2[1] = callback2(closure_6, obj3);
    let tmp27 = obj2;
  } else {
    const obj6 = { style: null, onLayout: null, children: null };
    obj6[0] = tmp.container;
    obj6[1] = callback;
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.segmentedControlContainer;
    const obj8 = { state: null };
    obj8[0] = segmentedControlState;
    obj7[1] = callback2(tmp2(tmp3[24]).SegmentedControl, obj8);
    const items3 = [callback2(id, obj7), ];
    const obj9 = { style: null, children: null };
    obj9[0] = tmp.container;
    const obj10 = { children: null };
    const obj11 = { bottom: true, style: null, children: null };
    obj11[1] = tmp.content;
    const obj12 = { state: null };
    obj12[0] = segmentedControlState;
    obj11[2] = callback2(tmp2(tmp3[25]).SegmentedControlPages, obj12);
    obj10[0] = callback2(tmp2(tmp3[22]).SafeAreaPaddingView, obj11);
    obj9[1] = callback2(closure_6, obj10);
    items3[1] = callback2(id, obj9);
    obj6[2] = items3;
    obj2[1] = callback3(id, obj6);
    tmp27 = obj2;
  }
  return callback2(stackNavigation(selectedSubPage[9]).AnalyticsLocationProvider, tmp27);
};