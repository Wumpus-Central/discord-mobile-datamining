// discord_app/modules/activities/panel/native/ActivityPanelContainer.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import participantFromServer from "participantFromServer";
import { jsx } from "jsxProd";
import importAllResult from "noop";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { BaseActivityPanelController } from "ActivityPanelController.tsx";
import { renderActivityOrPIP } from "ActivityPanelUI.tsx";

const require = arg1;
const memoResult = require("noop").memo(function ActivityPanelContainer() {
  let obj = initialize;
  const items = [participantFromServer, ensureGuildLoaded, handleConnectionOpen];
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
        let tmp4 = type === tmp8(tmp9[7]).ChannelTypes.GUILD_TEXT;
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
      tmp8 = callback;
      tmp9 = table;
    }
  }, [])) {
    obj = { children: null };
    obj[0] = jsx(renderActivityOrPIP, {});
    tmp2 = jsx(BaseActivityPanelController, { children: null });
    const tmp5 = BaseActivityPanelController;
  }
  return tmp2;
});
const result = require("handleConnectionOpen").fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default memoResult;