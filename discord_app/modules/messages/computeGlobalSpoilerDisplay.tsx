// discord_app/modules/messages/computeGlobalSpoilerDisplay.tsx
import closure_2 from "../../stores/PermissionStore.tsx";
import ME from "../../Constants.tsx";

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
}
export const useShouldDisplaySpoilerObscurity = function useShouldDisplaySpoilerObscurity(channel) {
  const _require = channel;
  const items = [closure_2];
  const stateFromStores = require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(
    items,
    () => closure_1_2.can(closure_1_3.MANAGE_MESSAGES, closure_0),
  );
  const RenderSpoilers = require("../user_settings/UserSettings.tsx").RenderSpoilers;
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
