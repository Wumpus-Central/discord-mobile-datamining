// discord_app/modules/parent_tools/hooks/useSelectedTab.tsx
import defaultAreStatesEqual from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import closure_3 from "../FamilyCenterStore.tsx";
import items from "../FamilyCenterConstants.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";

require = arg1;
({ FamilyCenterAction: c4, FamilyCenterSubPages } = items);
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useSelectedTab.tsx");

export default function useSelectedMyFamilyTab() {
  let obj = {
    selectedTab: defaultAreStatesEqual.useStateFromStores(items, () => selectedTab.getSelectedTab()),
    handleTabChange(tab) {
      let obj = callback(7284);
      tab = obj.selectTab(tab);
      obj = { action: TabChange.TabChange, tab };
      callback(698).track(constants.FAMILY_CENTER_ACTION, obj);
    }
  };
  items = [closure_3];
  return obj;
};
export const FAMILY_CENTER_TAB_ANALYTICS_LABELS = { [FamilyCenterSubPages.ACTIVITY]: "family_center_activity_tab", [FamilyCenterSubPages.REQUESTS]: "family_center_requests_tab", [FamilyCenterSubPages.SETTINGS]: "family_center_settings_tab", [FamilyCenterSubPages.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel", [FamilyCenterSubPages.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel", [FamilyCenterSubPages.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel" };