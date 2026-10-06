// === Module 14695: useSelectedTab ===

// Module 14695 (useSelectedTab)
import useStateFromStores from "useStateFromStores" /* 573 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7063 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7061 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7062 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let FamilyCenterSubPages;
let closure_4;
({ FamilyCenterAction: closure_4, FamilyCenterSubPages } = FamilyCenterConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let TabChange;
  let selectedTab;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let obj = react;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    const fn = function c() {
      return selectedTab.getSelectedTab();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s(tab) {
      const obj = FamilyCenterActionCreatorsDefault;
      tab = obj.selectTab(tab);
      const obj2 = AnalyticsUtilsDefault;
      const obj3 = { action: TabChange.TabChange, tab };
      obj2.track(constants.FAMILY_CENTER_ACTION, obj3);
    };
    cResult[2] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    let obj2 = { selectedTab: stateFromStores, handleTabChange: tmp8 };
    cResult[3] = stateFromStores;
    cResult[4] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[4];
  }
  return tmp9;
}) : (() => {
  let TabChange;
  let items;
  let obj2;
  let selectedTab;
  let obj = {
    selectedTab: obj2.useStateFromStores(items, () => selectedTab.getSelectedTab()),
    handleTabChange(tab) {
      const obj = FamilyCenterActionCreatorsDefault;
      tab = obj.selectTab(tab);
      const obj2 = AnalyticsUtilsDefault;
      const obj3 = { action: TabChange.TabChange, tab };
      obj2.track(constants.FAMILY_CENTER_ACTION, obj3);
    }
  };
  obj2 = useStateFromStores;
  items = [FamilyCenterStore];
  return obj;
});
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useSelectedTab.tsx");

export default tmp3;
export const FAMILY_CENTER_TAB_ANALYTICS_LABELS = { [FamilyCenterSubPages.ACTIVITY]: "family_center_activity_tab", [FamilyCenterSubPages.REQUESTS]: "family_center_requests_tab", [FamilyCenterSubPages.SETTINGS]: "family_center_settings_tab", [FamilyCenterSubPages.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel", [FamilyCenterSubPages.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel", [FamilyCenterSubPages.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel" };