// discord_app/modules/activities/panel/native/ActivityPanelContainer.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import BaseActivityPanelControllerDefault from "ActivityPanelController.tsx";
import renderActivityOrPIPDefault from "ActivityPanelUI.tsx";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import handleConnectionOpen from "../../../../stores/SelectedChannelStore.tsx";
import participantFromServer from "../../EmbeddedActivitiesStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = fn;
const memoResult = importAllResult.memo(function ActivityPanelContainer() {
  let obj = initialize;
  const items = [closure_5, closure_3, closure_4];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => {
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    if (null == connectedActivityLocation) {
      return false;
    } else {
      const embeddedActivityLocationChannelId = callback(table[6]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      if (null == embeddedActivityLocationChannelId) {
        return false;
      } else {
        channel = channel.getChannel(embeddedActivityLocationChannelId);
        let type;
        if (channel != null) {
          type = channel.type;
        }
        let tmp4 = type === callback(table[7]).ChannelTypes.GUILD_TEXT;
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
      const obj2 = callback(table[6]);
    }
  }, [])) {
    obj = { children: null };
    obj[0] = jsx(renderActivityOrPIPDefault, {});
    tmp2 = jsx(BaseActivityPanelControllerDefault, { children: null });
  }
  return tmp2;
});
const result = require("obj132").fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default memoResult;