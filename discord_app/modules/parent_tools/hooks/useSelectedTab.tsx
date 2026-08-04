import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import items from "items";
import { AnalyticEvents } from "ME";

let FamilyCenterSubPages;
let c4;
const require = arg1;
({ FamilyCenterAction: c4, FamilyCenterSubPages } = items);
const result = require("ME").fileFinishedImporting("modules/parent_tools/hooks/useSelectedTab.tsx");

export default function useSelectedMyFamilyTab() {
  let obj = { selectedTab: null, handleTabChange: null };
  const items = [freshTeenActivityWithMap];
  obj[0] = require(647) /* defaultAreStatesEqual */.useStateFromStores(items, () => selectedTab.getSelectedTab());
  obj[1] = function handleTabChange(tab) {
    let obj = callback(6907);
    tab = obj.selectTab(tab);
    obj = { action: TabChange.TabChange, tab };
    callback(698).track(constants.FAMILY_CENTER_ACTION, obj);
  };
  return obj;
};
export const FAMILY_CENTER_TAB_ANALYTICS_LABELS = { [FamilyCenterSubPages.ACTIVITY]: "family_center_activity_tab", [FamilyCenterSubPages.REQUESTS]: "family_center_requests_tab", [FamilyCenterSubPages.SETTINGS]: "family_center_settings_tab", [FamilyCenterSubPages.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel", [FamilyCenterSubPages.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel", [FamilyCenterSubPages.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel" };