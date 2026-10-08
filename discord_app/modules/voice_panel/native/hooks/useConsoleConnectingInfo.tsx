// === Module 17625: useConsoleConnectingInfo ===

// Module 17625 (useConsoleConnectingInfo)
import useVoiceStateForRemoteSessionDefault from "useVoiceStateForRemoteSession" /* 9109 */;
import getConsoleIconDefault from "getConsoleIcon" /* 12895 */;
import useShouldDisplayCancelConsoleTransferDefault from "useShouldDisplayCancelConsoleTransfer" /* 17626 */;
import getConsoleColorDefault from "getConsoleColor" /* 17628 */;
import GameConsoleStore from "GameConsoleStore" /* 5109 */;
import SessionsStore from "SessionsStore" /* 5110 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConsoleConnectingInfo(arg0) {
  const cResult = require("c").c(20);
  const tmp5 = useVoiceStateForRemoteSessionDefault();
  _require = tmp5;
  let channelId1;
  if (tmp5 != null) {
    channelId1 = tmp5.channelId;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameConsoleStore];
    const fn = function c() {
      return awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(tmp7, tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SessionsStore];
    cResult[2] = items1;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[2];
  }
  let sessionId;
  if (tmp5 != null) {
    sessionId = tmp5.sessionId;
  }
  if (cResult[3] !== sessionId) {
    let sessionId1;
    if (tmp5 != null) {
      sessionId1 = tmp5.sessionId;
    }
    const fn2 = function f() {
      let str;
      if (sessionId != null) {
        str = sessionId.sessionId;
      }
      if (str == null) {
        str = "";
      }
      return SessionsStore.getSessionById(str);
    };
    cResult[3] = sessionId1;
    cResult[4] = fn2;
    let tmp14 = fn2;
  } else {
    tmp14 = cResult[4];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp11, tmp14);
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
  const tmp18 = useShouldDisplayCancelConsoleTransferDefault(stateFromStores);
  if (stateFromStores != null) {
    const channelId = stateFromStores.channelId;
  }
  let channelId2;
  if (stateFromStores != null) {
    channelId2 = stateFromStores.channelId;
  }
  if (cResult[5] !== str) {
    const tmp23 = getConsoleIconDefault(str);
    cResult[5] = str;
    cResult[6] = tmp23;
    let tmp22 = tmp23;
  } else {
    tmp22 = cResult[6];
  }
  if (cResult[7] === stateFromStores) {
    if (cResult[8] === tmp20) {
      if (cResult[9] === stateFromStores1) {
        let tmp24 = cResult[10];
      }
      if (cResult[11] !== str) {
        const tmp27 = getConsoleColorDefault(str);
        cResult[11] = str;
        cResult[12] = tmp27;
        let tmp26 = tmp27;
      } else {
        tmp26 = cResult[12];
      }
      if (cResult[13] === tmp18) {
        if (cResult[14] === tmp28) {
          if (cResult[15] === tmp21) {
            if (cResult[16] === tmp22) {
              if (cResult[17] === tmp24) {
                if (cResult[18] === tmp26) {
                  let tmp29 = cResult[19];
                }
                return tmp29;
              }
            }
          }
        }
      }
      const obj2 = { isConnectingToConsole: channelId === arg0, isConnectingOrConnectedToConsole: tmp21, icon: tmp22, text: tmp24, color: tmp26, displayCancel: tmp18 };
      cResult[13] = tmp18;
      cResult[14] = channelId === arg0;
      cResult[15] = tmp21;
      cResult[16] = tmp22;
      cResult[17] = tmp24;
      cResult[18] = tmp26;
      cResult[19] = obj2;
      tmp29 = obj2;
    }
  }
  const tmpResult3 = require("useStateFromStores");
  const consoleConnectingText = require("getConsoleConnectingText").getConsoleConnectingText(stateFromStores1, stateFromStores, tmp20);
  cResult[7] = stateFromStores;
  cResult[8] = channelId1 === arg0;
  cResult[9] = stateFromStores1;
  cResult[10] = consoleConnectingText;
  tmp24 = consoleConnectingText;
  const tmpResult4 = require("getConsoleConnectingText");
}) : (function useConsoleConnectingInfo(arg0) {
  const tmp3 = useVoiceStateForRemoteSessionDefault();
  _require = tmp3;
  let channelId;
  if (tmp3 != null) {
    channelId = tmp3.channelId;
  }
  const items = [GameConsoleStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const obj = require("useStateFromStores");
  const tmp5 = _require;
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
  if (stateFromStores != null) {
    channelId1 = stateFromStores.channelId;
  }
  const obj3 = { isConnectingToConsole: channelId1 === arg0, isConnectingOrConnectedToConsole: null, icon: null, text: null, color: null, displayCancel: null };
  let channelId2;
  if (stateFromStores != null) {
    channelId2 = stateFromStores.channelId;
  }
  obj3.isConnectingOrConnectedToConsole = channelId2 === arg0 || channelId === arg0;
  obj3.icon = getConsoleIconDefault(str);
  const tmp9 = useShouldDisplayCancelConsoleTransferDefault(stateFromStores);
  obj3.text = tmp5(17627).getConsoleConnectingText(stateFromStores1, stateFromStores, channelId === arg0);
  obj3.color = getConsoleColorDefault(str);
  obj3.displayCancel = tmp9;
  return obj3;
});