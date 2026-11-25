// === Module 14536: useWidgetGamePress ===

// Module 14536 (useWidgetGamePress)
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8703 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8712 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/native/useWidgetGamePress.tsx");

export default function useWidgetGamePress(sourceUserId, applicationId) {
  const obj = { location: "UserProfileWidgetsBoard", applicationId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  return useOpenGameProfileModalDefault(obj);
};