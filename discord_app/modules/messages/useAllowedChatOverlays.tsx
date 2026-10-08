// === Module 10457: useAllowedChatOverlays ===

// Module 10457 (useAllowedChatOverlays)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4696 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 10458 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
import ChannelStore from "ChannelStore" /* 2063 */;

require = fn;
const ChatOverlays = fn(10455).ChatOverlays;
const ActivityPanelModes = fn(6072).ActivityPanelModes;
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/useAllowedChatOverlays.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useAllowedChatOverlays() {
  obj = c;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    class E {
      constructor() {
        return closure_1_3.getCurrentEmbeddedActivity();
      }
    }
    cResult[0] = items;
    cResult[1] = E;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = useStateFromStores.useStateFromStores(tmp4, E);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmbeddedActivitiesStore];
    class E {
      constructor() {
        return closure_1_3.getCurrentEmbeddedActivity();
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp11;
    let tmp9 = tmp11;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = useStateFromStores;
  const stateFromStores1 = useStateFromStores.useStateFromStores(tmp8, tmp9);
  embeddedActivityLocationUtils;
  if (stateFromStores != null) {
    const _location = stateFromStores.location;
  }
  if (undefined !== stateFromStores) {
    class E {
      constructor() {
        return closure_1_3.getCurrentEmbeddedActivity();
      }
    }
  }
  const tmpResult3 = useStateFromStores;
}) : (function useAllowedChatOverlays() {
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
});