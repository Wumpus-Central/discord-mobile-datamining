// discord_app/modules/parent_tools/hooks/useSelectedTab.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import c from "../../../../_runtime/00576_c.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import FamilyCenterActionCreatorsDefault from "../FamilyCenterActionCreators.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

require = fn;
const FamilyCenterConstants = fn(7253);
({ FamilyCenterAction: closure_4, FamilyCenterSubPages } = FamilyCenterConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useSelectedTab.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useSelectedMyFamilyTab() {
      const cResult = c.c(5);
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
      const stateFromStores = useStateFromStores.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        function handleTabChange(tab) {
          tab = FamilyCenterActionCreatorsDefault.selectTab(tab);
          AnalyticsUtilsDefault.track(constants.FAMILY_CENTER_ACTION, { action: TabChange.TabChange, tab });
        }
        cResult[2] = handleTabChange;
        let tmp8 = handleTabChange;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== stateFromStores) {
        const obj2 = { selectedTab: stateFromStores, handleTabChange: tmp8 };
        cResult[3] = stateFromStores;
        cResult[4] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[4];
      }
      return tmp9;
    }
  : function useSelectedMyFamilyTab() {
      let obj = {
        selectedTab: null,
        handleTabChange(tab) {
          tab = FamilyCenterActionCreatorsDefault.selectTab(tab);
          AnalyticsUtilsDefault.track(constants.FAMILY_CENTER_ACTION, { action: TabChange.TabChange, tab });
        },
      };
      const items = [FamilyCenterStore];
      obj.selectedTab = useStateFromStores.useStateFromStores(items, () => selectedTab.getSelectedTab());
      return obj;
    };
export const FAMILY_CENTER_TAB_ANALYTICS_LABELS = {
  [FamilyCenterSubPages.ACTIVITY]: "family_center_activity_tab",
  [FamilyCenterSubPages.REQUESTS]: "family_center_requests_tab",
  [FamilyCenterSubPages.SETTINGS]: "family_center_settings_tab",
  [FamilyCenterSubPages.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel",
  [FamilyCenterSubPages.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel",
  [FamilyCenterSubPages.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel",
};
