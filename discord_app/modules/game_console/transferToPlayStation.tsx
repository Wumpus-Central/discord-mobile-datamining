// discord_app/modules/game_console/transferToPlayStation.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import GameConsoleAlertUtilsDefault from "GameConsoleAlertUtils.tsx";
import ConsoleCommands from "../../../discord_common/js/shared/shared-constants/ConsoleCommands.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_5 = async function _transferToPlayStation(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = closure_2;
          closure_131_3 = undefined;
          c5 = 1;
          c6 = 1;
          const obj5 = { value: GameConsoleAlertUtilsDefault.maybeShowPTTAlert(closure_0), done: false };
          return obj5;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c5 = 2;
          c6 = 1;
          const obj8 = { value: closure_132_0(closure_132_2[3]).disconnectRemote(), done: false };
          return obj8;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          c5 = 3;
          c6 = 1;
          const obj11 = { value: closure_132_0(closure_132_2[3]).getConnectNonce(), done: false };
          return obj11;
        }
      } else if (3 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          closure_131_3 = value;
          c5 = 4;
          c6 = 1;
          const obj13 = {
            value: (function sendConnectVoiceCommand() {
              const self = this;
              const apply = closure_1_6.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_131_0, closure_131_1, closure_131_2, closure_131_3),
            done: false,
          };
          return obj13;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_132_1(closure_132_2[4])(closure_131_2.id, closure_131_0);
        c6 = 3;
        return { value: "IconComponent", done: "+51" };
      }
    } catch (tmp29) {
      c6 = tmp;
      throw tmp29;
    }
  }
};
let closure_6 = async function _sendConnectVoiceCommand() {
  closure_1 = arg1;
  closure_2 = arg2;
  c8 = 0;
  c9 = 0;
  c7 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_5 = tmp3;
            closure_4 = tmp7;
            closure_132_0 = platform;
            closure_132_1 = closure_1;
            closure_132_2 = closure_2;
            closure_132_3 = nonce;
            closure_132_4 = undefined;
            let id;
            const obj5 = { type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START", platform };
            DispatcherDefault.dispatch(obj5);
            c7 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = {
              url: Endpoints.CONSOLES_DEVICES_COMMANDS(platform, closure_1),
              body: null,
              rejectWithError: false,
            };
            const obj6 = {
              command: ConsoleCommands.ConsoleCommands.CONNECT_VOICE,
              channel_id: null,
              guild_id: null,
              nonce: null,
            };
            ({ id: obj13.channel_id, guild_id: obj13.guild_id } = closure_2);
            obj6.nonce = nonce;
            request.body = obj6;
            c8 = 2;
            c9 = 1;
            const obj7 = { value: HTTP.post(request), done: false };
            return obj7;
          }
        } else if (1 === tmp7) {
          c7 = 0;
          closure_132_6 = closure_6;
          const obj9 = { type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL", platform: closure_132_0, error: closure_132_6 };
          closure_133_1(closure_133_2[5]).dispatch(obj9);
          throw closure_132_6;
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          closure_132_4 = value;
          c7 = 0;
          id = closure_132_4.body.id;
          const obj12 = {
            type: "WAIT_FOR_REMOTE_SESSION",
            sessionType: closure_132_0,
            nonce: closure_132_3,
            channelId: closure_132_2.id,
            deviceId: closure_132_1,
            commandId: id,
          };
          closure_133_1(closure_133_2[5]).dispatch(obj12);
          c9 = 3;
          const obj = { value: id, done: true };
          return obj;
        }
      } catch (tmp18) {
        closure_6 = tmp18;
        if (tmp4 === c7) {
          c9 = tmp2;
          throw tmp18;
        } else {
          c8 = tmp;
        }
      }
    }
  })();
};
const Endpoints = fn(1085).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/transferToPlayStation.tsx");

export const transferToPlayStation = function transferToPlayStation() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
