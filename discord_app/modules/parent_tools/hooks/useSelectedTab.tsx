// === Module 14871: useSelectedMyFamilyTab ===

// Module 14871 (useSelectedMyFamilyTab)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 563 */;
import closure_3 from "freshTeenActivityWithMap" /* 7537 */;
import items from "items" /* 7538 */;
import { AnalyticEvents } from "ME" /* 1074 */;

require = arg1;
({ FamilyCenterAction: c4, FamilyCenterSubPages } = items);
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useSelectedTab.tsx");

export default function useSelectedMyFamilyTab() {
  let obj = {
    selectedTab: defaultAreStatesEqual.useStateFromStores(items, () => selectedTab.getSelectedTab()),
    handleTabChange(tab) {
      let obj = callback(7539);
      tab = obj.selectTab(tab);
      obj = { action: TabChange.TabChange, tab };
      callback(1242).track(constants.FAMILY_CENTER_ACTION, obj);
    }
  };
  items = [closure_3];
  return obj;
};
export const FAMILY_CENTER_TAB_ANALYTICS_LABELS = { [FamilyCenterSubPages.ACTIVITY]: "family_center_activity_tab", [FamilyCenterSubPages.REQUESTS]: "family_center_requests_tab", [FamilyCenterSubPages.SETTINGS]: "family_center_settings_tab", [FamilyCenterSubPages.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel", [FamilyCenterSubPages.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel", [FamilyCenterSubPages.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel" };