// discord_app/modules/rpc/server/events/discordEnvironmentEvents.tsx
import closure_4 from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import closure_5 from "../../../a11y/AccessibilityStore.tsx";
import RPC_SCOPE_CONFIG from "../../Constants.tsx";
import { RPCEvents } from "../../../../Constants.tsx";

let c0 = arg1;
let closure_3 = ["uiDensity"];
const RPC_AUTHENTICATED_SCOPE = RPC_SCOPE_CONFIG.RPC_AUTHENTICATED_SCOPE;
const RPC_EMBEDDED_APP_SCOPE = RPC_SCOPE_CONFIG.RPC_EMBEDDED_APP_SCOPE;
RPC_SCOPE_CONFIG = RPC_SCOPE_CONFIG.RPC_SCOPE_CONFIG;
c0 = false;
let items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
const result = require("set").fileFinishedImporting("modules/rpc/server/events/discordEnvironmentEvents.tsx");

export const createDiscordEnvironmentEvents = function createDiscordEnvironmentEvents(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
  return {
    [closure_9.DISCORD_ENV_UPDATE]: {
      scope: { [closure_8.ANY]: items },
      handler() {
        c0 = false;
        c1 = null;
        return (arg0) => {
          ({ prevState, dispatch } = arg0);
          let discordEnvironment = callback(closure_1_2[4]).getDiscordEnvironment(closure_1_5.useReducedMotion);
          let tmp2 = discordEnvironment;
          if (callback) {
            let uiDensity = discordEnvironment.uiDensity;
            tmp2 = closure_1_4(discordEnvironment, closure_1_3);
          }
          let obj = callback(closure_1_2[4]);
          if (obj2.isEqual(tmp2, prevState)) {
            if (prevState == null) {
              prevState = null;
            }
            closure_1 = prevState;
          } else {
            closure_1 = tmp2;
            dispatch(tmp2);
          }
          callback = dispatch;
          if (!callback) {
            callback = true;
            const _requestAnimationFrame = requestAnimationFrame;
            let animationFrame = requestAnimationFrame(() => {
              const animationFrame = requestAnimationFrame(() => {
                const callback = false;
                const discordEnvironment = callback(closure_1_2[4]).getDiscordEnvironment(closure_1_5.useReducedMotion);
                let tmp2 = discordEnvironment;
                if (callback) {
                  const uiDensity = discordEnvironment.uiDensity;
                  tmp2 = closure_1_4(discordEnvironment, closure_1_3);
                }
                const obj = callback(closure_1_2[4]);
                if (!obj2.isEqual(tmp2, closure_1)) {
                  closure_1 = tmp2;
                  callback(tmp2);
                }
              });
            });
          }
          return tmp2;
        };
      },
    },
  };
};
export const discordEnvironmentEvents = {
  [RPCEvents.DISCORD_ENV_UPDATE]: {
    scope: { [RPC_SCOPE_CONFIG.ANY]: items },
    handler() {
      c0 = false;
      c1 = null;
      return (arg0) => {
        ({ prevState, dispatch } = arg0);
        let discordEnvironment = callback(closure_1_2[4]).getDiscordEnvironment(closure_1_5.useReducedMotion);
        let tmp2 = discordEnvironment;
        if (callback) {
          let uiDensity = discordEnvironment.uiDensity;
          tmp2 = closure_1_4(discordEnvironment, closure_1_3);
        }
        let obj = callback(closure_1_2[4]);
        if (obj2.isEqual(tmp2, prevState)) {
          if (prevState == null) {
            prevState = null;
          }
          closure_1 = prevState;
        } else {
          closure_1 = tmp2;
          dispatch(tmp2);
        }
        callback = dispatch;
        if (!callback) {
          callback = true;
          const _requestAnimationFrame = requestAnimationFrame;
          let animationFrame = requestAnimationFrame(() => {
            const animationFrame = requestAnimationFrame(() => {
              const callback = false;
              const discordEnvironment = callback(closure_1_2[4]).getDiscordEnvironment(closure_1_5.useReducedMotion);
              let tmp2 = discordEnvironment;
              if (callback) {
                const uiDensity = discordEnvironment.uiDensity;
                tmp2 = closure_1_4(discordEnvironment, closure_1_3);
              }
              const obj = callback(closure_1_2[4]);
              if (!obj2.isEqual(tmp2, closure_1)) {
                closure_1 = tmp2;
                callback(tmp2);
              }
            });
          });
        }
        return tmp2;
      };
    },
  },
};
