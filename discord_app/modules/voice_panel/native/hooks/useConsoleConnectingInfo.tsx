// discord_app/modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx
import useVoiceStateForRemoteSessionDefault from "../../../game_console/hooks/useVoiceStateForRemoteSession.tsx";
import getConsoleIconDefault from "../../../game_console/native/getConsoleIcon.tsx";
import useShouldDisplayCancelConsoleTransferDefault from "../../../game_console/native/useShouldDisplayCancelConsoleTransfer.tsx";
import getConsoleColorDefault from "../../../game_console/native/getConsoleColor.tsx";
import GameConsoleStore from "../../../game_console/GameConsoleStore.tsx";
import SessionsStore from "../../../../stores/SessionsStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let awaitingRemoteSessionInfo;
      let tmp11;
      let tmp15;
      let tmp22;
      let tmp7;
      let tmp8;
      const obj = require("react");
      const cResult = obj.c(20);
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
      const tmpResult = require("useStateFromStores");
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SessionsStore];
        cResult[2] = items1;
        tmp11 = items1;
      } else {
        tmp11 = cResult[2];
      }
      let sessionId;
      const tmp13 = cResult[3];
      if (tmp5 != null) {
        sessionId = tmp5.sessionId;
      }
      if (tmp13 !== sessionId) {
        let sessionId1;
        if (tmp5 != null) {
          sessionId1 = tmp5.sessionId;
        }
        class S {
          constructor() {
            let str;
            const getSessionById = SessionsStore.getSessionById;
            if (sessionId != null) {
              str = sessionId.sessionId;
            }
            if (str == null) {
              str = "";
            }
            return getSessionById(str);
          }
        }
        cResult[3] = sessionId1;
        cResult[4] = S;
        tmp15 = S;
      } else {
        tmp15 = cResult[4];
      }
      const tmpResult3 = require("useStateFromStores");
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp11, tmp15);
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
            let str;
            const getSessionById = SessionsStore.getSessionById;
            if (sessionId != null) {
              str = sessionId.sessionId;
            }
            if (str == null) {
              str = "";
            }
            return getSessionById(str);
          }
        }
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
        class S {
          constructor() {
            let str;
            const getSessionById = SessionsStore.getSessionById;
            if (sessionId != null) {
              str = sessionId.sessionId;
            }
            if (str == null) {
              str = "";
            }
            return getSessionById(str);
          }
        }
        cResult[6] = tmp23;
        tmp22 = tmp23;
      } else {
        tmp22 = cResult[6];
      }
      if (cResult[7] === stateFromStores) {
        if ((cResult[8] === channelId1) === arg0) {
          let tmp24;
          let tmp26;
          if (cResult[9] === stateFromStores1) {
            tmp24 = cResult[10];
          }
          if (cResult[11] !== str) {
            const tmp27 = getConsoleColorDefault(str);
            class S {
              constructor() {
                let str;
                const getSessionById = SessionsStore.getSessionById;
                if (sessionId != null) {
                  str = sessionId.sessionId;
                }
                if (str == null) {
                  str = "";
                }
                return getSessionById(str);
              }
            }
            cResult[12] = tmp27;
            tmp26 = tmp27;
          } else {
            tmp26 = cResult[12];
          }
          class S {
            constructor() {
              let str;
              const getSessionById = SessionsStore.getSessionById;
              if (sessionId != null) {
                str = sessionId.sessionId;
              }
              if (str == null) {
                str = "";
              }
              return getSessionById(str);
            }
          }
          if (cResult[13] === tmp18) {
            if (cResult[14] === tmp28) {
              if (cResult[15] === (channelId2 === arg0 || channelId1 === arg0)) {
                if (cResult[16] === tmp22) {
                  if (cResult[17] === tmp24) {
                    let tmp29;
                    if (cResult[18] === tmp26) {
                      tmp29 = cResult[19];
                    }
                    return tmp29;
                  }
                }
              }
            }
          }
          const obj2 = {
            isConnectingToConsole: tmp28,
            isConnectingOrConnectedToConsole: channelId2 === arg0 || channelId1 === arg0,
            icon: tmp22,
            text: tmp24,
            color: tmp26,
            displayCancel: tmp18,
          };
          cResult[13] = tmp18;
          cResult[14] = tmp28;
          cResult[15] = channelId2 === arg0 || channelId1 === arg0;
          cResult[16] = tmp22;
          cResult[17] = tmp24;
          cResult[18] = tmp26;
          cResult[19] = obj2;
          tmp29 = obj2;
        }
      }
      const tmpResult4 = require("getConsoleConnectingText");
      const consoleConnectingText = tmpResult4.getConsoleConnectingText(stateFromStores1, stateFromStores, tmp20);
      cResult[7] = stateFromStores;
      cResult[8] = channelId1 === arg0;
      cResult[9] = stateFromStores1;
      cResult[10] = consoleConnectingText;
      tmp24 = consoleConnectingText;
    }
  : (arg0) => {
      let awaitingRemoteSessionInfo;
      let channelId2;
      let sessionId;
      let tmp5Result;
      const tmp3 = useVoiceStateForRemoteSessionDefault();
      _require = tmp3;
      let channelId;
      if (tmp3 != null) {
        channelId = tmp3.channelId;
      }
      const items = [GameConsoleStore];
      const obj = require("useStateFromStores");
      const stateFromStores = obj.useStateFromStores(items, () =>
        awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo(),
      );
      const items1 = [SessionsStore];
      const obj2 = require("useStateFromStores");
      const stateFromStores1 = obj2.useStateFromStores(items1, () => {
        let str;
        const getSessionById = SessionsStore.getSessionById;
        if (sessionId != null) {
          str = sessionId.sessionId;
        }
        if (str == null) {
          str = "";
        }
        return getSessionById(str);
      });
      let str;
      const tmp5 = _require;
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
      const tmp9 = useShouldDisplayCancelConsoleTransferDefault(stateFromStores);
      if (stateFromStores != null) {
        channelId1 = stateFromStores.channelId;
      }
      const obj3 = {
        isConnectingToConsole: channelId1 === arg0,
        isConnectingOrConnectedToConsole: channelId2 === arg0 || channelId === arg0,
        icon: getConsoleIconDefault(str),
        text: tmp5Result.getConsoleConnectingText(stateFromStores1, stateFromStores, channelId === arg0),
        color: getConsoleColorDefault(str),
        displayCancel: tmp9,
      };
      channelId2 = undefined;
      if (stateFromStores != null) {
        channelId2 = stateFromStores.channelId;
      }
      tmp5Result = tmp5(17346);
      return obj3;
    };
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx");

export default tmp2;
