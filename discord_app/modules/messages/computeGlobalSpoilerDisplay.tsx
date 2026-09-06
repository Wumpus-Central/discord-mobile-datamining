// discord_app/modules/messages/computeGlobalSpoilerDisplay.tsx
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
const Constants = fn(1074);
({ Permissions: c3, SpoilerRenderSetting: closure_4 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/computeGlobalSpoilerDisplay.tsx");

export default function computeGlobalSpoilerDisplay(arg0, arg1) {
  if (constants2.ALWAYS === arg0) {
    return true;
  } else if (tmp.IF_MODERATOR === arg0) {
    return arg1;
  } else {
    const ON_CLICK = tmp.ON_CLICK;
    return false;
  }
}
export const useShouldDisplaySpoilerObscurity = function useShouldDisplaySpoilerObscurity(channel) {
  _require = channel;
  const items = [PermissionStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
    PermissionStore.can(constants.MANAGE_MESSAGES, closure_0),
  );
  const RenderSpoilers = require("UserSettings").RenderSpoilers;
  const setting = RenderSpoilers.useSetting();
  let flag = true;
  if (constants2.ALWAYS !== setting) {
    flag = stateFromStores;
    if (tmp3.IF_MODERATOR !== setting) {
      const ON_CLICK = tmp3.ON_CLICK;
      flag = false;
    }
  }
  return !flag;
};
