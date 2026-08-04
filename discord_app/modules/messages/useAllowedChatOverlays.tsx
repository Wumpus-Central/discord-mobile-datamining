// discord_app/modules/messages/useAllowedChatOverlays.tsx
import participantFromServer from "participantFromServer";
import ensureGuildLoaded from "ensureGuildLoaded";
import { ChatOverlays } from "ChatOverlays";
import { ActivityPanelModes } from "ActivityPanelModes";

const require = arg1;
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
const result = require("ChatOverlays").fileFinishedImporting("modules/messages/useAllowedChatOverlays.tsx");

export default function useAllowedChatOverlays() {
  const obj = require(647) /* defaultAreStatesEqual */;
  const items = [participantFromServer];
  const stateFromStores = obj.useStateFromStores(items, () => store.getCurrentEmbeddedActivity());
  const items1 = [participantFromServer];
  const stateFromStores1 = require(647) /* defaultAreStatesEqual */.useStateFromStores(items1, () => store.getActivityPanelMode());
  require(3811) /* getEmbeddedActivityLocationChannelId */;
  if (stateFromStores != null) {
    const _location = stateFromStores.location;
  }
  if (undefined !== stateFromStores) {
    if (!importDefault(10479)(tmp5, ensureGuildLoaded)) {
      let tmp9 = obj[stateFromStores1];
    }
    return tmp9;
  }
  tmp9 = obj[no_text_activity];
};