// discord_app/modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx
import useVoiceStateForRemoteSessionDefault from "../../../game_console/hooks/useVoiceStateForRemoteSession.tsx";
import getConsoleIconDefault from "../../../game_console/native/getConsoleIcon.tsx";
import useShouldDisplayCancelConsoleTransferDefault from "../../../game_console/native/useShouldDisplayCancelConsoleTransfer.tsx";
import getConsoleColorDefault from "../../../game_console/native/getConsoleColor.tsx";
import closure_3 from "../../../game_console/GameConsoleStore.tsx";
import closure_4 from "../../../../stores/SessionsStore.tsx";
import { defaultAreStatesEqual } from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx");

export default function useConsoleConnectingInfo(arg0) {
  const tmp3 = useVoiceStateForRemoteSessionDefault();
  const _require = tmp3;
  let channelId;
  if (tmp3 != null) {
    channelId = tmp3.channelId;
  }
  let obj = defaultAreStatesEqual;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const items1 = [closure_4];
  const stateFromStores1 = require("../../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items1, () => {
    let str;
    if (sessionId != null) {
      str = sessionId.sessionId;
    }
    if (str == null) {
      str = "";
    }
    return closure_1_4.getSessionById(str);
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
  const tmp5 = _require;
  if (stateFromStores != null) {
    channelId1 = stateFromStores.channelId;
  }
  obj = { isConnectingToConsole: channelId1 === arg0, isConnectingOrConnectedToConsole: null, icon: null, text: null, color: null, displayCancel: null };
  let channelId2;
  if (stateFromStores != null) {
    channelId2 = stateFromStores.channelId;
  }
  obj[1] = channelId2 === arg0 || channelId === arg0;
  obj[2] = getConsoleIconDefault(str);
  const tmp9 = useShouldDisplayCancelConsoleTransferDefault(stateFromStores);
  obj[3] = tmp5(16518).getConsoleConnectingText(stateFromStores1, stateFromStores, channelId === arg0);
  obj[4] = getConsoleColorDefault(str);
  obj[5] = tmp9;
  return obj;
};