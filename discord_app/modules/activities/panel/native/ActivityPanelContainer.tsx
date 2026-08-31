// === Module 16551: ? ===

// Module 16551
import initialize from "initialize" /* 589 */;
import BaseActivityPanelControllerDefault from "BaseActivityPanelController" /* 16552 */;
import renderActivityOrPIPDefault from "renderActivityOrPIP" /* 16561 */;
import closure_3 from "ensureGuildLoaded" /* 1387 */;
import closure_4 from "handleConnectionOpen" /* 1981 */;
import closure_5 from "participantFromServer" /* 1386 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
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
    obj[0] = jsx(renderActivityOrPIPDefault, {});
    tmp2 = jsx(BaseActivityPanelControllerDefault, { children: null });
    const tmp5 = BaseActivityPanelControllerDefault;
  }
  return tmp2;
});
const result = require("set").fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default memoResult;