import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
// discord_app/modules/activities/utils/useIsPrivateChannelWithEnabledActivities.tsx
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/useIsPrivateChannelWithEnabledActivities.tsx");

export default function useIsPrivateChannelWithEnabledActivities(arg0) {
  const _require = arg0;
  const items = [ensureGuildLoaded];
  const stateFromStores = _defaultAreStatesEqual.useStateFromStores(items, () => outer1_2.getChannel(closure_0));
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.isPrivate();
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const isPrivateChannelWithEnabledActivities = function isPrivateChannelWithEnabledActivities(arg0) {
  if (null == arg0) {
    return false;
  } else {
    channel = channel.getChannel(arg0);
    let flag;
    if (channel != null) {
      flag = channel.isPrivate();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
};