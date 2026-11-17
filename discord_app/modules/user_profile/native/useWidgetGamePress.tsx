// discord_app/modules/user_profile/native/useWidgetGamePress.tsx
import useOpenGameProfileModalDefault from "../../game_profile/hooks/useOpenGameProfileModal.tsx";
import GameProfileAnalyticUtils from "../../game_profile/GameProfileAnalyticUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/user_profile/native/useWidgetGamePress.tsx");

export default function useWidgetGamePress(sourceUserId, applicationId) {
  const obj = {
    location: "UserProfileWidgetsBoard",
    applicationId,
    source: GameProfileAnalyticUtils.GameProfileSources.UserProfile,
    sourceUserId,
    trackEntryPointImpression: true,
    stackingBehavior: "stack",
  };
  return useOpenGameProfileModalDefault(obj);
}
