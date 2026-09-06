// discord_app/modules/activities/panel/native/utils/ActivityPanelUtils.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import embeddedActivityLocationUtils from "../../../utils/embeddedActivityLocationUtils.tsx";
import isVoiceEmbeddedActivityDefault from "../../../utils/isVoiceEmbeddedActivity.tsx";
import EmbeddedActivitiesStore from "../../../EmbeddedActivitiesStore.tsx";

require = fn;
const ActivityPanelModes = fn(9505).ActivityPanelModes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

export const useIsActivityPanelFullscreen = function useIsActivityPanelFullscreen() {
  const items = [EmbeddedActivitiesStore];
  return initialize.useStateFromStores(items, () => {
    const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(
      EmbeddedActivitiesStore.getConnectedActivityLocation(),
    );
    let tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === constants.PANEL;
    if (tmp3) {
      tmp3 = !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
    }
    return tmp3;
  });
};
