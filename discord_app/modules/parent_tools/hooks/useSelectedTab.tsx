// discord_app/modules/parent_tools/hooks/useSelectedTab.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import FamilyCenterActionCreatorsDefault from "../FamilyCenterActionCreators.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

require = fn;
const FamilyCenterConstants = fn(7538);
({ FamilyCenterAction: closure_4, FamilyCenterSubPages } = FamilyCenterConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useSelectedTab.tsx");

export default function useSelectedMyFamilyTab() {
  let obj = {
    selectedTab: null,
    handleTabChange(tab) {
      let obj = FamilyCenterActionCreatorsDefault;
      tab = obj.selectTab(tab);
      obj = { action: TabChange.TabChange, tab };
      AnalyticsUtilsDefault.track(constants.FAMILY_CENTER_ACTION, obj);
    },
  };
  const items = [FamilyCenterStore];
  obj.selectedTab = useStateFromStores.useStateFromStores(items, () => selectedTab.getSelectedTab());
  return obj;
}
export const FAMILY_CENTER_TAB_ANALYTICS_LABELS = {
  [FamilyCenterSubPages.ACTIVITY]: "family_center_activity_tab",
  [FamilyCenterSubPages.REQUESTS]: "family_center_requests_tab",
  [FamilyCenterSubPages.SETTINGS]: "family_center_settings_tab",
  [FamilyCenterSubPages.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel",
  [FamilyCenterSubPages.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel",
  [FamilyCenterSubPages.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel",
};
