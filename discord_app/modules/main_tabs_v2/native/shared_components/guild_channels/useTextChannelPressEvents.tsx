// === Module 19446: useTextChannelPressEvents ===

// Module 19446 (useTextChannelPressEvents)
import transitionToChannel from "transitionToChannel" /* 5885 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7549 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10921 */;
import showLongPressForumPostActionSheetDefault from "showLongPressForumPostActionSheet" /* 11265 */;
import showThreadLongPressActionSheetDefault from "showThreadLongPressActionSheet" /* 18496 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4989 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx");

export function useTextChannelPressEvents(channel, flag2) {
  const user = channel;
  const navigationReplace = flag2;
  let obj = { onPress: null, onLongPress: null, unstable_pressDelay: 32 };
  items = [, , ];
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
}