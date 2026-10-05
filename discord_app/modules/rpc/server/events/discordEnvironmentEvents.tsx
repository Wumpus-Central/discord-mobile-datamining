// discord_app/modules/rpc/server/events/discordEnvironmentEvents.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import Constants2 from "../../../../Constants.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let items;
function handler() {
  let _false;
  let useReducedMotion;
  let c0 = false;
  let c1 = null;
  return (arg0) => {
    let dispatch;
    let prevState;
    ({ prevState, dispatch } = arg0);
    let obj = _false(closure_1_2[4]);
    let discordEnvironment = obj.getDiscordEnvironment(useReducedMotion.useReducedMotion);
    let tmp2 = discordEnvironment;
    if (_false) {
      let uiDensity = discordEnvironment.uiDensity;
      tmp2 = closure_1_4(discordEnvironment, closure_1_3);
    }
    let obj2 = _modDef12;
    if (obj2.isEqual(tmp2, prevState)) {
      if (prevState == null) {
        prevState = null;
      }
      let closure_1 = prevState;
    } else {
      closure_1 = tmp2;
      dispatch(tmp2);
    }
    const tmp7 = dispatch;
    if (!tmp7) {
      dispatch = true;
      const _requestAnimationFrame = requestAnimationFrame;
      let animationFrame = requestAnimationFrame(() => {
        const animationFrame = requestAnimationFrame(() => {
          dispatch = false;
          const obj = dispatch(closure_1_2[4]);
          const discordEnvironment = obj.getDiscordEnvironment(useReducedMotion.useReducedMotion);
          let tmp2 = discordEnvironment;
          if (c0) {
            const uiDensity = discordEnvironment.uiDensity;
            tmp2 = closure_1_4(discordEnvironment, closure_1_3);
          }
          const obj2 = _modDef12;
          if (!obj2.isEqual(tmp2, closure_1)) {
            closure_1 = tmp2;
            dispatch(tmp2);
          }
        });
      });
    }
    return tmp2;
  };
}
let closure_3 = ["uiDensity"];
const RPC_AUTHENTICATED_SCOPE = Constants.RPC_AUTHENTICATED_SCOPE;
const RPC_EMBEDDED_APP_SCOPE = Constants.RPC_EMBEDDED_APP_SCOPE;
const RPC_SCOPE_CONFIG = Constants.RPC_SCOPE_CONFIG;
const RPCEvents = Constants2.RPCEvents;
let c0 = false;
let obj = { scope: { [RPC_SCOPE_CONFIG.ANY]: items }, handler };
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
const result = size.fileFinishedImporting("modules/rpc/server/events/discordEnvironmentEvents.tsx");

export const createDiscordEnvironmentEvents = function createDiscordEnvironmentEvents(arg0) {
  let items;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = { scope: { [closure_8.ANY]: items }, handler };
  items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
  return { [closure_9.DISCORD_ENV_UPDATE]: obj };
};
export const discordEnvironmentEvents = { [RPCEvents.DISCORD_ENV_UPDATE]: obj };
