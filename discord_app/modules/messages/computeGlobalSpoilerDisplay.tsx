// === Module 11124: computeGlobalSpoilerDisplay ===

// Module 11124 (computeGlobalSpoilerDisplay)
import closure_2 from "getUncachedChannelPermissions" /* 4121 */;
import ME from "ME" /* 676 */;

const require = arg1;
({ Permissions: c3, SpoilerRenderSetting: c4 } = ME);
const result = require("set").fileFinishedImporting("modules/messages/computeGlobalSpoilerDisplay.tsx");

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
  const items = [closure_2];
  const stateFromStores = _require(647).useStateFromStores(items, () => closure_1_2.can(closure_1_3.MANAGE_MESSAGES, closure_0));
  const RenderSpoilers = _require(4166).RenderSpoilers;
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