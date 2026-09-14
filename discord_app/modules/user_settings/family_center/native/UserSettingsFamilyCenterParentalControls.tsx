// discord_app/modules/user_settings/family_center/native/UserSettingsFamilyCenterParentalControls.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2396 from "../../../parent_tools/FamilyCenter.messages.js";
import FamilyCenterActionCreatorsDefault from "../../../parent_tools/FamilyCenterActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const UserSettingsSections = fn(1074).UserSettingsSections;
const FamilyCenterSubPages = fn(7641).FamilyCenterSubPages;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4636);
const obj2 = {
  container: { display: "flex", flex: 1 },
  segmentedControlContainer: { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 },
  content: null,
};
let obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.content = { paddingBottom: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/family_center/native/UserSettingsFamilyCenterParentalControls.tsx",
);

export default function FamilyCenterParentalControlsSettings() {
  let tmp = closure_11();
  stackNavigation = stackNavigation(selectedSubPage[8]).useStackNavigation();
  let obj = stackNavigation(selectedSubPage[8]);
  const tmp6 = require("useAnalyticsLocations");
  [tmp8, importDefault] = isFamilyCenterV3Enabled.useState(0);
  const tmp7 = _slicedToArray(isFamilyCenterV3Enabled.useState(0), 2);
  const settingNavigationRoute = stackNavigation(selectedSubPage[11]).useSettingNavigationRoute();
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
  const obj3 = stackNavigation(selectedSubPage[11]);
  isFamilyCenterV3Enabled = stackNavigation(selectedSubPage[12]).useIsFamilyCenterV3Enabled({
    location: "FamilyCenterParentalControlsSettings",
  });
  const tmp2Result = stackNavigation(selectedSubPage[12]);
  const selectedTeenUser = stackNavigation(selectedSubPage[13]).useSelectedTeenUser();
  let id;
  if (selectedTeenUser != null) {
    id = selectedTeenUser.id;
  }
  const tmp17 = require("useUserIsTeenAgeGroup")();
  closure_6 = tmp17;
  const callback = obj2.useCallback((nativeEvent) => {
    importDefault(nativeEvent.nativeEvent.layout.width);
  }, []);
  isFamilyCenterV3Enabled.useRef(false);
  const items = [true === autoOpenCreate, id, stackNavigation];
  const effect = obj2.useEffect(() => {
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
  const layoutEffect = obj2.useLayoutEffect(() => {
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
    stackNavigation.setOptions({ title: "Array", headerRight: "PX_16" });
  }, items1);
  if (isFamilyCenterV3Enabled) {
    isFamilyCenterV3Enabled = selectedSubPage === items2.SCREEN_TIME_CONTROLS;
  }
  const obj4 = { label: null, id: null, page: null };
  let intl = tmp2(tmp3[15]).intl;
  obj4.label = intl.string(stackNavigation(selectedSubPage[15]).t["+o1pDZ"]);
  obj4.id = items2.CONTENT_AND_SOCIAL;
  obj4.page = closure_9(require("FamilyCenterParentalControlsContentAndSocial"), {});
  items2 = [obj4];
  const obj5 = { label: null, id: null, page: null };
  const intl2 = tmp2(tmp3[15]).intl;
  obj5.label = intl2.string(stackNavigation(selectedSubPage[15]).t.OAuOHD);
  obj5.id = items2.DATA_AND_PRIVACY;
  obj5.page = closure_9(require("FamilyCenterParentalControlsDataAndPrivacy"), {});
  items2[1] = obj5;
  const tmp2Result3 = stackNavigation(selectedSubPage[13]);
  const tmp2Result4 = stackNavigation(selectedSubPage[20]);
  const segmentedControlState = tmp2Result4.useSegmentedControlState({
    items: items2,
    onPageChange(arg0) {
      const tab = FamilyCenterActionCreatorsDefault.selectTab(items2[arg0].id);
    },
    pageWidth: tmp8,
    defaultIndex: Math.max(
      items2.findIndex((id) => id.id === selectedSubPage),
      0,
    ),
  });
  const obj7 = { value: tmp6(require("AnalyticsLocation").FAMILY_CENTER).analyticsLocations, children: null };
  if (isFamilyCenterV3Enabled) {
    const obj8 = { style: tmp.container, children: null };
    const obj9 = { bottom: true, style: tmp.content, children: null };
    const obj10 = { readOnly: tmp17 };
    obj9.children = closure_9(require("FamilyCenterParentalControlsScreenTime"), obj10);
    obj8.children = closure_9(tmp2(tmp3[22]).SafeAreaPaddingView, obj9);
    obj7.children = closure_9(closure_6, obj8);
    let tmp27 = obj7;
  } else {
    const obj11 = { style: tmp.container, onLayout: callback, children: null };
    const obj12 = { style: tmp.segmentedControlContainer, children: null };
    const obj13 = { state: segmentedControlState };
    obj12.children = closure_9(tmp2(tmp3[24]).SegmentedControl, obj13);
    const items3 = [closure_9(id, obj12)];
    const obj14 = { style: tmp.container, children: null };
    const obj15 = { children: null };
    const obj16 = { bottom: true, style: tmp.content, children: null };
    const obj17 = { state: segmentedControlState };
    obj16.children = closure_9(tmp2(tmp3[25]).SegmentedControlPages, obj17);
    obj15.children = closure_9(tmp2(tmp3[22]).SafeAreaPaddingView, obj16);
    obj14.children = closure_9(closure_6, obj15);
    items3[1] = closure_9(id, obj14);
    obj11.children = items3;
    obj7.children = closure_10(id, obj11);
    tmp27 = obj7;
  }
  return closure_9(stackNavigation(selectedSubPage[9]).AnalyticsLocationProvider, tmp27);
}
