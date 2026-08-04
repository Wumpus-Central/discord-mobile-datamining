import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";

let c3;
let c4;
const require = arg1;
({ Permissions: c3, SpoilerRenderSetting: c4 } = ME);
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/messages/computeGlobalSpoilerDisplay.tsx");

export default function computeGlobalSpoilerDisplay(arg0, arg1) {
  if (constants.ALWAYS === arg0) {
    return true;
  } else if (tmp.IF_MODERATOR === arg0) {
    return arg1;
  } else {
    const ON_CLICK = tmp.ON_CLICK;
    return false;
  }
};
export const useShouldDisplaySpoilerObscurity = function useShouldDisplaySpoilerObscurity(channel) {
  const _require = channel;
  const items = [getUncachedChannelPermissions];
  const stateFromStores = _require(647).useStateFromStores(items, () => outer1_2.can(outer1_3.MANAGE_MESSAGES, closure_0));
  const RenderSpoilers = _require(3958).RenderSpoilers;
  const setting = RenderSpoilers.useSetting();
  let flag = true;
  if (constants.ALWAYS !== setting) {
    flag = stateFromStores;
    if (tmp3.IF_MODERATOR !== setting) {
      const ON_CLICK = tmp3.ON_CLICK;
      flag = false;
    }
  }
  return !flag;
};