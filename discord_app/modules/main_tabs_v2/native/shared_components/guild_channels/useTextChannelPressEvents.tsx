// === Module 16208: useTextChannelPressEvents ===

// Module 16208 (useTextChannelPressEvents)
import noop from "noop" /* 19 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx");

export const useTextChannelPressEvents = function useTextChannelPressEvents(channel, flag2) {
  closure_0 = channel;
  closure_1 = flag2;
  const items = [, , ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  items[2] = flag2;
  const items1 = [channel];
  return {
    onPress: React.useCallback(() => {
      let obj = callback(dependencyMap[2]);
      obj.preload(channel.guild_id, channel.id);
      obj = { navigationReplace: callback };
      channel(dependencyMap[3]).transitionToChannel(channel.id, obj);
    }, items),
    onLongPress: React.useCallback(() => {
      channel = closure_1_4.getChannel(channel.parent_id);
      if (null != channel) {
        if (channel.isForumLikeChannel()) {
          if (obj.isForumPost()) {
            callback(dependencyMap[4])(obj, channel);
          }
        }
      }
      if (channel.isThread()) {
        callback(dependencyMap[5])(obj.id);
      } else {
        const result = channel(dependencyMap[6]).openChannelLongPressActionSheet(obj.id);
        const obj3 = channel(dependencyMap[6]);
      }
    }, items1),
    unstable_pressDelay: 32
  };
};