// === Module 17235: useTextChannelPressEvents ===

// Module 17235 (useTextChannelPressEvents)
import transitionToChannel from "transitionToChannel" /* 4651 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4653 */;
import showLongPressForumPostActionSheetDefault from "showLongPressForumPostActionSheet" /* 10367 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11070 */;
import showThreadLongPressActionSheetDefault from "showThreadLongPressActionSheet" /* 16274 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx");

export const useTextChannelPressEvents = function useTextChannelPressEvents(channel, flag2) {
  const user = channel;
  const navigationReplace = flag2;
  let obj = { onPress: null, onLongPress: null, unstable_pressDelay: 32 };
  const items = [, , ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  items[2] = flag2;
  obj.onPress = noop.useCallback(() => {
    ChannelActionCreatorsDefault.preload(user.guild_id, user.id);
    transitionToChannel.transitionToChannel(user.id, { navigationReplace });
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