// === Module 15213: useWidgetGamePress ===

// Module 15213 (useWidgetGamePress)
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 9397 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9421 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/native/useWidgetGamePress.tsx");

export default function useWidgetGamePress(sourceUserId, applicationId) {
  const obj = { location: "UserProfileWidgetsBoard", applicationId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  return useOpenGameProfileModalDefault(obj);
};