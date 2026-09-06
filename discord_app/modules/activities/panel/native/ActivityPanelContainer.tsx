// discord_app/modules/activities/panel/native/ActivityPanelContainer.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ChannelTypes from "../../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import embeddedActivityLocationUtils from "../../utils/embeddedActivityLocationUtils.tsx";
import ActivityPanelControllerDefault from "ActivityPanelController.tsx";
import ActivityPanelUIDefault from "ActivityPanelUI.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import EmbeddedActivitiesStore from "../../EmbeddedActivitiesStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default noop.memo(function ActivityPanelContainer() {
  let obj = initialize;
  const items = [EmbeddedActivitiesStore, ChannelStore, SelectedChannelStore];
  let tmp2 = null;
  if (
    obj.useStateFromStores(items, () => {
      connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
      if (null == connectedActivityLocation) {
        return false;
      } else {
        const embeddedActivityLocationChannelId =
          embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
        if (null == embeddedActivityLocationChannelId) {
          return false;
        } else {
          channel = channel.getChannel(embeddedActivityLocationChannelId);
          let type;
          if (channel != null) {
            type = channel.type;
          }
          let tmp4 = type === ChannelTypes.ChannelTypes.GUILD_TEXT;
          if (!tmp4) {
            let isPrivateResult;
            if (channel != null) {
              isPrivateResult = channel.isPrivate();
            }
            let tmp6;
            if (true === isPrivateResult) {
              tmp6 = voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId;
            }
            tmp4 = tmp6;
          }
          return tmp4;
        }
      }
    }, [])
  ) {
    obj = { children: jsx(ActivityPanelUIDefault, {}) };
    tmp2 = jsx(ActivityPanelControllerDefault, { children: jsx(ActivityPanelUIDefault, {}) });
  }
  return tmp2;
});
