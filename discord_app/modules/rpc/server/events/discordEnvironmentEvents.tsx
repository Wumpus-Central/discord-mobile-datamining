// discord_app/modules/rpc/server/events/discordEnvironmentEvents.tsx
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

let closure_3 = ["uiDensity"];
const Constants = fn(6450);
const RPC_AUTHENTICATED_SCOPE = Constants.RPC_AUTHENTICATED_SCOPE;
const RPC_EMBEDDED_APP_SCOPE = Constants.RPC_EMBEDDED_APP_SCOPE;
const RPC_SCOPE_CONFIG = Constants.RPC_SCOPE_CONFIG;
const RPCEvents = fn(1072).RPCEvents;
let c0 = false;
let c1;
let obj = {
  scope: null,
  handler() {
    c0 = false;
    c1 = null;
    return (arg0) => {
      ({ prevState, dispatch } = arg0);
      let discordEnvironment = c0(dependencyMap[4]).getDiscordEnvironment(useReducedMotion.useReducedMotion);
      if (null != _null) {
        discordEnvironment.customTheme = _null();
      }
      let tmp2 = discordEnvironment;
      if (c0) {
        let uiDensity = discordEnvironment.uiDensity;
        tmp2 = closure_1_4(discordEnvironment, closure_1_3);
      }
      let obj = c0(dependencyMap[4]);
      if (obj2.isEqual(tmp2, prevState)) {
        if (prevState == null) {
          prevState = null;
        }
        _null = prevState;
      } else {
        _null = tmp2;
        dispatch(tmp2);
      }
      c0 = dispatch;
      if (!c0) {
        c0 = true;
        const _requestAnimationFrame = requestAnimationFrame;
        let animationFrame = requestAnimationFrame(() => {
          const animationFrame = requestAnimationFrame(() => {
            c0 = false;
            const discordEnvironment = closure_1_0(dependencyMap[4]).getDiscordEnvironment(
              useReducedMotion.useReducedMotion,
            );
            if (null != c1) {
              discordEnvironment.customTheme = c1();
            }
            let tmp2 = discordEnvironment;
            if (c0) {
              const uiDensity = discordEnvironment.uiDensity;
              tmp2 = closure_1_4(discordEnvironment, closure_1_3);
            }
            const obj = closure_1_0(dependencyMap[4]);
            if (!obj2.isEqual(tmp2, closure_1)) {
              closure_1 = tmp2;
              closure_1_0(tmp2);
            }
            obj2 = closure_1(12);
          });
        });
      }
      return tmp2;
    };
  },
};
let items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj.scope = { [RPC_SCOPE_CONFIG.ANY]: items };
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/events/discordEnvironmentEvents.tsx");

export function createDiscordEnvironmentEvents(arg0, arg1) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  closure_1 = arg1;
  let obj = {
    scope: null,
    handler() {
      c0 = false;
      c1 = null;
      return (arg0) => {
        ({ prevState, dispatch } = arg0);
        let discordEnvironment = c0(dependencyMap[4]).getDiscordEnvironment(useReducedMotion.useReducedMotion);
        if (null != _null) {
          discordEnvironment.customTheme = _null();
        }
        let tmp2 = discordEnvironment;
        if (c0) {
          let uiDensity = discordEnvironment.uiDensity;
          tmp2 = closure_1_4(discordEnvironment, closure_1_3);
        }
        let obj = c0(dependencyMap[4]);
        if (obj2.isEqual(tmp2, prevState)) {
          if (prevState == null) {
            prevState = null;
          }
          _null = prevState;
        } else {
          _null = tmp2;
          dispatch(tmp2);
        }
        c0 = dispatch;
        if (!c0) {
          c0 = true;
          const _requestAnimationFrame = requestAnimationFrame;
          let animationFrame = requestAnimationFrame(() => {
            const animationFrame = requestAnimationFrame(() => {
              c0 = false;
              const discordEnvironment = closure_1_0(dependencyMap[4]).getDiscordEnvironment(
                useReducedMotion.useReducedMotion,
              );
              if (null != c1) {
                discordEnvironment.customTheme = c1();
              }
              let tmp2 = discordEnvironment;
              if (c0) {
                const uiDensity = discordEnvironment.uiDensity;
                tmp2 = closure_1_4(discordEnvironment, closure_1_3);
              }
              const obj = closure_1_0(dependencyMap[4]);
              if (!obj2.isEqual(tmp2, closure_1)) {
                closure_1 = tmp2;
                closure_1_0(tmp2);
              }
              obj2 = closure_1(12);
            });
          });
        }
        return tmp2;
      };
    },
  };
  const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
  obj.scope = { [closure_8.ANY]: items };
  return { [closure_9.DISCORD_ENV_UPDATE]: obj };
}
export const discordEnvironmentEvents = { [RPCEvents.DISCORD_ENV_UPDATE]: obj };
