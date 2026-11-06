// === Module 17095: UserSettingsFamilyCenterParentalControls ===

// Module 17095 (UserSettingsFamilyCenterParentalControls)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2664 from "module_2664" /* 2664 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7816 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const UserSettingsSections = fn(1072).UserSettingsSections;
const FamilyCenterSubPages = fn(7815).FamilyCenterSubPages;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5170);
let obj2 = { container: { display: "flex", flex: 1 }, segmentedControlContainer: { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 }, content: null };
let obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.content = { paddingBottom: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenterParentalControls.tsx");

export default function FamilyCenterParentalControlsSettings() {
  let tmp = closure_10();
  stackNavigation = stackNavigation(1499).useStackNavigation();
  let obj = stackNavigation(1499);
  const analyticsLocations = selectedSubPage(7410)(selectedSubPage(7435).FAMILY_CENTER).analyticsLocations;
  const tmp7 = selectedSubPage(9087)();
  const width = tmp7.width;
  let num = 0;
  ({ ref, onLayout } = tmp7);
  if (undefined !== width) {
    num = width;
  }
  const tmp6 = selectedSubPage(7410);
  const settingNavigationRoute = stackNavigation(7251).useSettingNavigationRoute();
  const params = settingNavigationRoute.params;
  selectedSubPage = undefined;
  if (params != null) {
    selectedSubPage = params.selectedSubPage;
  }
  if (selectedSubPage == null) {
    selectedSubPage = FamilyCenterSubPages.CONTENT_AND_SOCIAL;
  }
  const params2 = settingNavigationRoute.params;
  let autoOpenCreate;
  if (params2 != null) {
    autoOpenCreate = params2.autoOpenCreate;
  }
  dependencyMap = tmp12;
  const tmp2Result = stackNavigation(7251);
  const selectedTeenUser = stackNavigation(17056).useSelectedTeenUser();
  let id;
  if (selectedTeenUser != null) {
    id = selectedTeenUser.id;
  }
  const tmp15 = selectedSubPage(17074)();
  closure_4 = tmp15;
  ref = id.useRef(false);
  items = [true === autoOpenCreate, id, stackNavigation];
  const effect = id.useEffect(() => {
    let tmp = closure_2;
    if (closure_2) {
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
  const items1 = [stackNavigation, selectedSubPage, id, tmp15];
  const layoutEffect = id.useLayoutEffect(() => {
    if (selectedSubPage === FamilyCenterSubPages.SCREEN_TIME_CONTROLS) {
      if (null != id) {
        let obj = { title: null, headerRight: null };
        let intl = util.intl;
        obj.title = intl.string(_modDef2664["1Op+NP"]);
        let fn;
        if (!closure_4) {
          fn = (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.onPress = function onPress() {
              return navigation.navigate(constants.FAMILY_CENTER_SCHEDULE_DOWNTIME, { teenId });
            };
            const intl = stackNavigation(1113).intl;
            obj.label = intl.string(stackNavigation(1113).t.OYkgVk);
            return closure_2_8(stackNavigation(9918).HeaderTextButton, obj);
          };
        }
        obj.headerRight = fn;
        stackNavigation.setOptions(obj);
      }
    }
    stackNavigation.setOptions({ title: "Array", headerRight: "channel" });
  }, items1);
  const obj2 = { label: null, id: null, page: null };
  let intl = tmp2(1113).intl;
  obj2.label = intl.string(stackNavigation(1113).t["+o1pDZ"]);
  obj2.id = FamilyCenterSubPages.CONTENT_AND_SOCIAL;
  obj2.page = closure_8(selectedSubPage(17096), {});
  const items2 = [obj2, ];
  const obj3 = { label: null, id: null, page: null };
  const intl2 = tmp2(1113).intl;
  obj3.label = intl2.string(stackNavigation(1113).t.OAuOHD);
  obj3.id = FamilyCenterSubPages.DATA_AND_PRIVACY;
  obj3.page = closure_8(selectedSubPage(17097), {});
  items2[1] = obj3;
  const tmp2Result3 = stackNavigation(17056);
  const tmp2Result4 = stackNavigation(9077);
  const segmentedControlState = tmp2Result4.useSegmentedControlState({
    items: items2,
    onPageChange(arg0) {
      const tab = FamilyCenterActionCreatorsDefault.selectTab(items2[arg0].id);
    },
    pageWidth: num,
    defaultIndex: Math.max(items2.findIndex((id) => id.id === selectedSubPage), 0)
  });
  if (selectedSubPage === FamilyCenterSubPages.SCREEN_TIME_CONTROLS) {
    const obj5 = { value: analyticsLocations, children: null };
    const obj6 = { style: tmp.container, children: null };
    const obj7 = { bottom: true, style: tmp.content, children: null };
    const obj8 = { readOnly: tmp15 };
    obj7.children = closure_8(tmp5(17098), obj8);
    obj6.children = closure_8(tmp2(7378).SafeAreaPaddingView, obj7);
    obj5.children = closure_8(ref, obj6);
    let obj9 = obj5;
  } else {
    obj9 = { value: analyticsLocations, children: null };
    const obj10 = { style: tmp.container, ref, onLayout, children: null };
    const obj11 = { style: tmp.segmentedControlContainer, children: null };
    const obj12 = { state: segmentedControlState };
    obj11.children = closure_8(tmp2(9312).SegmentedControl, obj12);
    const items3 = [closure_8(closure_4, obj11), ];
    const obj13 = { style: tmp.container, children: null };
    const obj14 = { children: null };
    const obj15 = { bottom: true, style: tmp.content, children: null };
    const obj16 = { state: segmentedControlState };
    obj15.children = closure_8(tmp2(14401).SegmentedControlPages, obj16);
    obj14.children = closure_8(tmp2(7378).SafeAreaPaddingView, obj15);
    obj13.children = closure_8(ref, obj14);
    items3[1] = closure_8(closure_4, obj13);
    obj10.children = items3;
    obj9.children = closure_9(closure_4, obj10);
  }
  return closure_8(stackNavigation(7410).AnalyticsLocationProvider, obj9);
};