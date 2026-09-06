// discord_app/modules/activities/utils/useIsPrivateChannelWithEnabledActivities.tsx
import ChannelStore from "../../../stores/ChannelStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/useIsPrivateChannelWithEnabledActivities.tsx");

export default function useIsPrivateChannelWithEnabledActivities(arg0) {
  _require = arg0;
  const items = [ChannelStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
    ChannelStore.getChannel(closure_0),
  );
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.isPrivate();
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}
export const isPrivateChannelWithEnabledActivities = function isPrivateChannelWithEnabledActivities(arg0) {
  if (null == arg0) {
    return false;
  } else {
    const channel = ChannelStore.getChannel(arg0);
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
