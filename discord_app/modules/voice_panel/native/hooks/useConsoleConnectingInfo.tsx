// === Module 17173: useConsoleConnectingInfo ===

// Module 17173 (useConsoleConnectingInfo)
import useVoiceStateForRemoteSessionDefault from "useVoiceStateForRemoteSession" /* 9215 */;
import getConsoleIconDefault from "getConsoleIcon" /* 9463 */;
import useShouldDisplayCancelConsoleTransferDefault from "useShouldDisplayCancelConsoleTransfer" /* 17174 */;
import getConsoleColorDefault from "getConsoleColor" /* 17176 */;
import GameConsoleStore from "GameConsoleStore" /* 4577 */;
import SessionsStore from "SessionsStore" /* 4578 */;

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
  obj = { isConnectingToConsole: channelId1 === arg0, isConnectingOrConnectedToConsole: null, icon: null, text: null, color: null, displayCancel: null };
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
};