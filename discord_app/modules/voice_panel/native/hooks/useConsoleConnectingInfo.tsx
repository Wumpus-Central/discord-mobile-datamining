// === Module 17292: useConsoleConnectingInfo ===

// Module 17292 (useConsoleConnectingInfo)
import useVoiceStateForRemoteSessionDefault from "useVoiceStateForRemoteSession" /* 9445 */;
import getConsoleIconDefault from "getConsoleIcon" /* 9463 */;
import useShouldDisplayCancelConsoleTransferDefault from "useShouldDisplayCancelConsoleTransfer" /* 17293 */;
import getConsoleColorDefault from "getConsoleColor" /* 17295 */;
import GameConsoleStore from "GameConsoleStore" /* 4907 */;
import SessionsStore from "SessionsStore" /* 4908 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
    class S {
      constructor() {
        str = undefined;
        tmp = closure_4;
        if (closure_0 != null) {
          str = closure_0.sessionId;
        }
        if (str == null) {
          str = "";
        }
        return closure_4.getSessionById(str);
      }
    }
    cResult[3] = sessionId1;
    cResult[4] = S;
    let tmp14 = S;
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
    if (stateFromStores1 != null) {
      const os = stateFromStores1.clientInfo.os;
    }
    class S {
      constructor() {
        str = undefined;
        tmp = closure_4;
        if (closure_0 != null) {
          str = closure_0.sessionId;
        }
        if (str == null) {
          str = "";
        }
        return closure_4.getSessionById(str);
      }
    }
  }
  if (str == null) {
    str = "";
  }
  const tmp17 = useShouldDisplayCancelConsoleTransferDefault(stateFromStores);
  if (stateFromStores != null) {
    const channelId = stateFromStores.channelId;
  }
  let channelId2;
  if (stateFromStores != null) {
    channelId2 = stateFromStores.channelId;
  }
  if (cResult[5] !== str) {
    const tmp22 = getConsoleIconDefault(str);
    class S {
      constructor() {
        str = undefined;
        tmp = closure_4;
        if (closure_0 != null) {
          str = closure_0.sessionId;
        }
        if (str == null) {
          str = "";
        }
        return closure_4.getSessionById(str);
      }
    }
    cResult[6] = tmp22;
    let tmp21 = tmp22;
  } else {
    tmp21 = cResult[6];
  }
  if (cResult[7] === stateFromStores) {
    if (cResult[8] === tmp19) {
      if (cResult[9] === stateFromStores1) {
        let tmp23 = cResult[10];
      }
      if (cResult[11] !== str) {
        const tmp26 = getConsoleColorDefault(str);
        class S {
          constructor() {
            str = undefined;
            tmp = closure_4;
            if (closure_0 != null) {
              str = closure_0.sessionId;
            }
            if (str == null) {
              str = "";
            }
            return closure_4.getSessionById(str);
          }
        }
        cResult[12] = tmp26;
        let tmp25 = tmp26;
      } else {
        tmp25 = cResult[12];
      }
      class S {
        constructor() {
          str = undefined;
          tmp = closure_4;
          if (closure_0 != null) {
            str = closure_0.sessionId;
          }
          if (str == null) {
            str = "";
          }
          return closure_4.getSessionById(str);
        }
      }
      if (cResult[13] === tmp17) {
        if (cResult[14] === tmp27) {
          if (cResult[15] === tmp20) {
            if (cResult[16] === tmp21) {
              if (cResult[17] === tmp23) {
                if (cResult[18] === tmp25) {
                  let tmp28 = cResult[19];
                }
                return tmp28;
              }
            }
          }
        }
      }
      const obj2 = { isConnectingToConsole: tmp27, isConnectingOrConnectedToConsole: tmp20, icon: tmp21, text: tmp23, color: tmp25, displayCancel: tmp17 };
      cResult[13] = tmp17;
      cResult[14] = tmp27;
      cResult[15] = tmp20;
      cResult[16] = tmp21;
      cResult[17] = tmp23;
      cResult[18] = tmp25;
      cResult[19] = obj2;
      tmp28 = obj2;
    }
  }
  const tmpResult3 = require("useStateFromStores");
  const consoleConnectingText = require("getConsoleConnectingText").getConsoleConnectingText(stateFromStores1, stateFromStores, tmp19);
  cResult[7] = stateFromStores;
  cResult[8] = channelId1 === arg0;
  cResult[9] = stateFromStores1;
  cResult[10] = consoleConnectingText;
  tmp23 = consoleConnectingText;
  const tmpResult4 = require("getConsoleConnectingText");
}) : ((arg0) => {
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
  obj3.text = tmp5(17294).getConsoleConnectingText(stateFromStores1, stateFromStores, channelId === arg0);
  obj3.color = getConsoleColorDefault(str);
  obj3.displayCancel = tmp9;
  return obj3;
});