// discord_app/modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx
import useVoiceStateForRemoteSessionDefault from "../../../game_console/hooks/useVoiceStateForRemoteSession.tsx";
import getConsoleIconDefault from "../../../game_console/native/getConsoleIcon.tsx";
import useShouldDisplayCancelConsoleTransferDefault from "../../../game_console/native/useShouldDisplayCancelConsoleTransfer.tsx";
import getConsoleColorDefault from "../../../game_console/native/getConsoleColor.tsx";
import GameConsoleStore from "../../../game_console/GameConsoleStore.tsx";
import SessionsStore from "../../../../stores/SessionsStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx");

export default function useConsoleConnectingInfo(arg0) {
  const tmp3 = useVoiceStateForRemoteSessionDefault();
  _require = tmp3;
  let channelId;
  if (tmp3 != null) {
    channelId = tmp3.channelId;
  }
  let obj = require("useStateFromStores");
  const items = [GameConsoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const items1 = [SessionsStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => {
    let str;
    if (sessionId != null) {
      str = sessionId.sessionId;
    }
    if (str == null) {
      str = "";
    }
    return SessionsStore.getSessionById(str);
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
  const obj2 = require("useStateFromStores");
  const tmp5 = _require;
  if (stateFromStores != null) {
    channelId1 = stateFromStores.channelId;
  }
  obj = {
    isConnectingToConsole: channelId1 === arg0,
    isConnectingOrConnectedToConsole: null,
    icon: null,
    text: null,
    color: null,
    displayCancel: null,
  };
  let channelId2;
  if (stateFromStores != null) {
    channelId2 = stateFromStores.channelId;
  }
  obj.isConnectingOrConnectedToConsole = channelId2 === arg0 || channelId === arg0;
  obj.icon = getConsoleIconDefault(str);
  const tmp9 = useShouldDisplayCancelConsoleTransferDefault(stateFromStores);
  obj.text = tmp5(17175).getConsoleConnectingText(stateFromStores1, stateFromStores, channelId === arg0);
  obj.color = getConsoleColorDefault(str);
  obj.displayCancel = tmp9;
  return obj;
}
