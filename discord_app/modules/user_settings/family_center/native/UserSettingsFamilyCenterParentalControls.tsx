// === Module 14929: UserSettingsFamilyCenterParentalControls ===

// Module 14929 (UserSettingsFamilyCenterParentalControls)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2396 from "module_2396" /* 2396 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7539 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const UserSettingsSections = fn(1074).UserSettingsSections;
const FamilyCenterSubPages = fn(7538).FamilyCenterSubPages;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: { display: "flex", flex: 1 }, segmentedControlContainer: null, content: null };
createStyles = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.segmentedControlContainer = createStyles;
createStyles.content = { paddingBottom: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenterParentalControls.tsx");

export default function FamilyCenterParentalControlsSettings() {
  let tmp = closure_11();
  let obj = stackNavigation(selectedSubPage[8]);
  stackNavigation = obj.useStackNavigation();
  let obj1 = isFamilyCenterV3Enabled;
  const tmp6 = require("useAnalyticsLocations");
  [tmp8, importDefault] = _slicedToArray(isFamilyCenterV3Enabled.useState(0), 2);
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
  _slicedToArray = tmp13;
  let tmp2Result = tmp2(tmp3[12]);
  isFamilyCenterV3Enabled = tmp2Result.useIsFamilyCenterV3Enabled({ location: "FamilyCenterParentalControlsSettings" });
  tmp2Result = tmp2(tmp3[13]);
  const selectedTeenUser = tmp2Result.useSelectedTeenUser();
  let id;
  if (selectedTeenUser != null) {
    id = selectedTeenUser.id;
  }
  const tmp17 = require("useUserIsTeenAgeGroup")();
  closure_6 = tmp17;
  const callback = obj1.useCallback((nativeEvent) => {
    importDefault(nativeEvent.nativeEvent.layout.width);
  }, []);
  obj1.useRef(false);
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
      const obj = { teenId: id };
      stackNavigation.navigate(UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
    }
  }, items);
  const items1 = [stackNavigation, selectedSubPage, isFamilyCenterV3Enabled, id, tmp17];
  const layoutEffect = obj1.useLayoutEffect(() => {
    if (isFamilyCenterV3Enabled) {
      if (selectedSubPage === FamilyCenterSubPages.SCREEN_TIME_CONTROLS) {
        if (null != id) {
          let obj = { title: null, headerRight: null };
          let intl = util.intl;
          obj.title = intl.string(_modDef2396["1Op+NP"]);
          let fn;
          if (!closure_6) {
            fn = (arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj.onPress = function onPress() {
                return navigation.navigate(constants.FAMILY_CENTER_SCHEDULE_DOWNTIME, { teenId });
              };
              const intl = stackNavigation(selectedSubPage[15]).intl;
              obj.label = intl.string(stackNavigation(selectedSubPage[15]).t.OYkgVk);
              return closure_2_9(stackNavigation(selectedSubPage[17]).HeaderTextButton, obj);
            };
          }
          obj.headerRight = fn;
          stackNavigation.setOptions(obj);
        }
      }
    }
    stackNavigation.setOptions({ title: "hash", headerRight: "call" });
  }, items1);
  if (isFamilyCenterV3Enabled) {
    isFamilyCenterV3Enabled = selectedSubPage === items2.SCREEN_TIME_CONTROLS;
  }
  obj = { label: null, id: null, page: null };
  let intl = tmp2(tmp3[15]).intl;
  obj.label = intl.string(stackNavigation(selectedSubPage[15]).t["+o1pDZ"]);
  obj.id = items2.CONTENT_AND_SOCIAL;
  obj.page = closure_9(require("FamilyCenterParentalControlsContentAndSocial"), {});
  items2 = [obj, ];
  obj = { label: null, id: null, page: null };
  const intl2 = tmp2(tmp3[15]).intl;
  obj.label = intl2.string(stackNavigation(selectedSubPage[15]).t.OAuOHD);
  obj.id = items2.DATA_AND_PRIVACY;
  obj.page = closure_9(require("FamilyCenterParentalControlsDataAndPrivacy"), {});
  items2[1] = obj;
  const tmp7 = _slicedToArray(isFamilyCenterV3Enabled.useState(0), 2);
  obj1 = {
    items: items2,
    onPageChange(arg0) {
      const tab = FamilyCenterActionCreatorsDefault.selectTab(items2[arg0].id);
    },
    pageWidth: tmp8,
    defaultIndex: Math.max(items2.findIndex((id) => id.id === selectedSubPage), 0)
  };
  const segmentedControlState = stackNavigation(selectedSubPage[20]).useSegmentedControlState(obj1);
  obj2 = { value: tmp6(require("AnalyticsLocation").FAMILY_CENTER).analyticsLocations, children: null };
  if (isFamilyCenterV3Enabled) {
    const obj3 = { style: tmp.container, children: null };
    const obj4 = { bottom: true, style: tmp.content, children: null };
    const obj5 = { readOnly: tmp17 };
    obj4.children = tmp22(tmp5(tmp3[23]), obj5);
    obj3.children = tmp22(tmp2(tmp3[22]).SafeAreaPaddingView, obj4);
    obj2.children = tmp22(closure_6, obj3);
    let tmp27 = obj2;
  } else {
    const obj6 = { style: tmp.container, onLayout: callback, children: null };
    const obj7 = { style: tmp.segmentedControlContainer, children: null };
    const obj8 = { state: segmentedControlState };
    obj7.children = tmp22(tmp2(tmp3[24]).SegmentedControl, obj8);
    const items3 = [tmp22(id, obj7), ];
    const obj9 = { style: tmp.container, children: null };
    const obj10 = { children: null };
    const obj11 = { bottom: true, style: tmp.content, children: null };
    const obj12 = { state: segmentedControlState };
    obj11.children = tmp22(tmp2(tmp3[25]).SegmentedControlPages, obj12);
    obj10.children = tmp22(tmp2(tmp3[22]).SafeAreaPaddingView, obj11);
    obj9.children = tmp22(closure_6, obj10);
    items3[1] = tmp22(id, obj9);
    obj6.children = items3;
    obj2.children = closure_10(id, obj6);
    tmp27 = obj2;
  }
  return closure_9(stackNavigation(selectedSubPage[9]).AnalyticsLocationProvider, tmp27);
};