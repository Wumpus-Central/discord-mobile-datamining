// === Module 12060: useWidgetGamePress ===

// Module 12060 (useWidgetGamePress)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 10217 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 10595 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/native/useWidgetGamePress.tsx");

export default function useWidgetGamePress(sourceUserId, applicationId) {
  const obj = { location: "UserProfileWidgetsBoard", applicationId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  return useOpenGameProfileModalDefault(obj);
};