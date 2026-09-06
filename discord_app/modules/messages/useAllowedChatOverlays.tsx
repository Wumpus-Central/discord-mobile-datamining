// === Module 11423: useAllowedChatOverlays ===

// Module 11423 (useAllowedChatOverlays)
import useStateFromStores from "useStateFromStores" /* 563 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4189 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 9526 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
const ChatOverlays = fn(11421).ChatOverlays;
const ActivityPanelModes = fn(9505).ActivityPanelModes;
const no_text_activity = "no_text_activity";
let obj = { no_text_activity: null };
let items = [, , ];
({ NEW_MESSAGES: arr[0], OPT_IN_CHANNEL: arr[1], SUMMARIES: arr[2] } = ChatOverlays);
obj.no_text_activity = items;
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/useAllowedChatOverlays.tsx");

export default function useAllowedChatOverlays() {
  obj = useStateFromStores;
  const items = [EmbeddedActivitiesStore];
  const stateFromStores = obj.useStateFromStores(items, () => EmbeddedActivitiesStore.getCurrentEmbeddedActivity());
  const items1 = [EmbeddedActivitiesStore];
  const stateFromStores1 = useStateFromStores.useStateFromStores(items1, () => EmbeddedActivitiesStore.getActivityPanelMode());
  embeddedActivityLocationUtils;
  if (stateFromStores != null) {
    const _location = stateFromStores.location;
  }
  if (undefined !== stateFromStores) {
    if (!isVoiceEmbeddedActivityDefault(tmp5, ChannelStore)) {
      let tmp9 = obj[stateFromStores1];
    }
    return tmp9;
  }
  tmp9 = obj[no_text_activity];
};