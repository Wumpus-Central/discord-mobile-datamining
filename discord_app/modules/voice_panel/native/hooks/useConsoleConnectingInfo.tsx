// discord_app/modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx
import set from "set";
import handleUpdate from "handleUpdate";
import { defaultAreStatesEqual } from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { useVoiceStateForRemoteSession } from "../../../game_console/hooks/useVoiceStateForRemoteSession.tsx";
import { getConsoleColor } from "../../../game_console/native/getConsoleColor.tsx";
import { getConsoleIcon } from "../../../game_console/native/getConsoleIcon.tsx";
import { useShouldDisplayCancelConsoleTransfer } from "../../../game_console/native/useShouldDisplayCancelConsoleTransfer.tsx";

let require = arg1;
const result = require("useVoiceStateForRemoteSession").fileFinishedImporting("modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx");

export default function useConsoleConnectingInfo(arg0) {
  const tmp3 = useVoiceStateForRemoteSession();
  const require = tmp3;
  let channelId;
  if (tmp3 != null) {
    channelId = tmp3.channelId;
  }
  let obj = defaultAreStatesEqual;
  const items = [set];
  const stateFromStores = obj.useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const items1 = [handleUpdate];
  const stateFromStores1 = defaultAreStatesEqual.useStateFromStores(items1, () => {
    let str;
    if (tmp3 != null) {
      str = tmp3.sessionId;
    }
    if (str == null) {
      str = "";
    }
    return outer1_4.getSessionById(str);
  });
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.type;
  }
  if (str == null) {
    let os;
    if (stateFromStores1 != null) {
      os = stateFromStores1.clientInfo.os;
    }
    str = os;
  }
  if (str == null) {
    str = "";
  }
  let channelId1;
  const obj2 = defaultAreStatesEqual;
  const tmp5 = require;
  if (stateFromStores != null) {
    channelId1 = stateFromStores.channelId;
  }
  obj = { isConnectingToConsole: channelId1 === arg0, isConnectingOrConnectedToConsole: null, icon: null, text: null, color: null, displayCancel: null };
  let channelId2;
  if (stateFromStores != null) {
    channelId2 = stateFromStores.channelId;
  }
  obj[1] = channelId2 === arg0 || channelId === arg0;
  obj[2] = getConsoleIcon(str);
  const tmp9 = useShouldDisplayCancelConsoleTransfer(stateFromStores);
  obj[3] = tmp5(16096).getConsoleConnectingText(stateFromStores1, stateFromStores, channelId === arg0);
  obj[4] = getConsoleColor(str);
  obj[5] = tmp9;
  return obj;
};