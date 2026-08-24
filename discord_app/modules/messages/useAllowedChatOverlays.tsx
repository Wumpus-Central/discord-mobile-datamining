// === Module 10675: ChatOverlays ===

// Module 10675 (ChatOverlays)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import getEmbeddedActivityLocationChannelId from "getEmbeddedActivityLocationChannelId" /* 4014 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 8761 */;
import closure_3 from "participantFromServer" /* 1390 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import { ChatOverlays } from "ChatOverlays" /* 10673 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 8740 */;

require = arg1;
const no_text_activity = "no_text_activity";
let obj = { no_text_activity: items };
items = [, , ];
({ NEW_MESSAGES: arr[0], OPT_IN_CHANNEL: arr[1], SUMMARIES: arr[2] } = ChatOverlays);
let items1 = [, , ];
({ NEW_MESSAGES: arr2[0], OPT_IN_CHANNEL: arr2[1], SUMMARIES: arr2[2] } = ChatOverlays);
obj[ActivityPanelModes.DISCONNECTED] = items1;
const items2 = [, , ];
({ NEW_MESSAGES: arr3[0], OPT_IN_CHANNEL: arr3[1], SUMMARIES: arr3[2] } = ChatOverlays);
obj[ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE] = items2;
obj[ActivityPanelModes.PANEL] = [];
const items3 = [, , ];
({ NEW_MESSAGES: arr4[0], OPT_IN_CHANNEL: arr4[1], SUMMARIES: arr4[2] } = ChatOverlays);
obj[ActivityPanelModes.PIP] = items3;
const items4 = [, , ];
({ NEW_MESSAGES: arr5[0], OPT_IN_CHANNEL: arr5[1], SUMMARIES: arr5[2] } = ChatOverlays);
obj[ActivityPanelModes.ACTIVITY_POPOUT_WINDOW] = items4;
const result = require("set").fileFinishedImporting("modules/messages/useAllowedChatOverlays.tsx");

export default function useAllowedChatOverlays() {
  obj = defaultAreStatesEqual;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => store.getCurrentEmbeddedActivity());
  const items1 = [closure_3];
  const stateFromStores1 = defaultAreStatesEqual.useStateFromStores(items1, () => store.getActivityPanelMode());
  getEmbeddedActivityLocationChannelId;
  if (stateFromStores != null) {
    const _location = stateFromStores.location;
  }
  if (undefined !== stateFromStores) {
    if (!isVoiceEmbeddedActivityDefault(tmp5, closure_4)) {
      let tmp9 = obj[stateFromStores1];
    }
    return tmp9;
  }
  tmp9 = obj[no_text_activity];
};