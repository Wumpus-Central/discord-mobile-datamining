// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx
import transitionToChannel from "../../../../routing/transitionToChannel.tsx";
import ChannelActionCreatorsDefault from "../../../../../actions/ChannelActionCreators.tsx";
import showLongPressForumPostActionSheetDefault from "../../../../action_sheet/native/components/showLongPressForumPostActionSheet.tsx";
import openChannelLongPressActionSheet from "../../../../channel/native/openChannelLongPressActionSheet.tsx";
import showThreadLongPressActionSheetDefault from "../../../../threads/native/components/showThreadLongPressActionSheet.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx",
);

export const useTextChannelPressEvents = function useTextChannelPressEvents(channel, flag2) {
  const user = channel;
  const navigationReplace = flag2;
  let obj = { onPress: null, onLongPress: null, unstable_pressDelay: 32 };
  const items = [, ,];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  items[2] = flag2;
  obj.onPress = noop.useCallback(() => {
    let obj = ChannelActionCreatorsDefault;
    obj.preload(user.guild_id, user.id);
    obj = { navigationReplace };
    transitionToChannel.transitionToChannel(user.id, obj);
  }, items);
  const items1 = [channel];
  obj.onLongPress = noop.useCallback(() => {
    const channel = ChannelStore.getChannel(user.parent_id);
    if (null != channel) {
      if (channel.isForumLikeChannel()) {
        if (user.isForumPost()) {
          showLongPressForumPostActionSheetDefault(user, channel);
        }
      }
    }
    if (user.isThread()) {
      showThreadLongPressActionSheetDefault(user.id);
    } else {
      const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(user.id);
    }
  }, items1);
  return obj;
};
