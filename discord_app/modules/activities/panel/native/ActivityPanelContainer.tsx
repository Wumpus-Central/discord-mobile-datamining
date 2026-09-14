// === Module 17117: ActivityPanelContainer ===

// Module 17117 (ActivityPanelContainer)
import ChannelTypes from "ChannelTypes" /* 1094 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4265 */;
import ActivityPanelControllerDefault from "ActivityPanelController" /* 17118 */;
import ActivityPanelUIDefault from "ActivityPanelUI" /* 17127 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default noop.memo(function ActivityPanelContainer() {
  const items = [EmbeddedActivitiesStore, ChannelStore, SelectedChannelStore];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => {
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    if (null == connectedActivityLocation) {
      return false;
    } else {
      const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
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
  }, [])) {
    let obj2 = { children: jsx(ActivityPanelUIDefault, {}) };
    tmp2 = jsx(ActivityPanelControllerDefault, { children: jsx(ActivityPanelUIDefault, {}) });
  }
  return tmp2;
});