// === Module 17940: useTextChannelPressEvents ===

// Module 17940 (useTextChannelPressEvents)
import transitionToChannel from "transitionToChannel" /* 5103 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7014 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10282 */;
import showLongPressForumPostActionSheetDefault from "showLongPressForumPostActionSheet" /* 10454 */;
import showThreadLongPressActionSheetDefault from "showThreadLongPressActionSheet" /* 16528 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx");

export const useTextChannelPressEvents = ReactCompilerGating.isReactCompilerEnabled() ? (function useTextChannelPressEvents(guild_id, navigationReplace) {
  _require = guild_id;
  const cResult = require("c").c(9);
  if (cResult[0] === guild_id.guild_id) {
    if (cResult[1] === guild_id.id) {
      if (cResult[2] === navigationReplace) {
        let tmp2 = cResult[3];
      }
      if (cResult[4] !== guild_id) {
        const fn2 = function u() {
          const channel = ChannelStore.getChannel(guild_id.parent_id);
          if (null != channel) {
            if (channel.isForumLikeChannel()) {
              if (guild_id.isForumPost()) {
                showLongPressForumPostActionSheetDefault(guild_id, channel);
              }
            }
          }
          if (guild_id.isThread()) {
            showThreadLongPressActionSheetDefault(guild_id.id);
          } else {
            const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(guild_id.id);
          }
        };
        cResult[4] = guild_id;
        cResult[5] = fn2;
        let tmp3 = fn2;
      } else {
        tmp3 = cResult[5];
      }
      if (cResult[6] === tmp3) {
        if (cResult[7] === tmp2) {
          let tmp4 = cResult[8];
        }
        return tmp4;
      }
      const obj2 = { onPress: tmp2, onLongPress: tmp3, unstable_pressDelay: 32 };
      cResult[6] = tmp3;
      cResult[7] = tmp2;
      cResult[8] = obj2;
      tmp4 = obj2;
    }
  }
  const fn = function t() {
    ChannelActionCreatorsDefault.preload(guild_id.guild_id, guild_id.id);
    transitionToChannel.transitionToChannel(guild_id.id, { navigationReplace });
  };
  cResult[0] = guild_id.guild_id;
  cResult[1] = guild_id.id;
  cResult[2] = navigationReplace;
  cResult[3] = fn;
  tmp2 = fn;
}) : (function useTextChannelPressEvents(arg0, navigationReplace) {
  const user = arg0;
  let obj = { onPress: null, onLongPress: null, unstable_pressDelay: 32 };
  const items = [, , ];
  ({ id: arr[0], guild_id: arr[1] } = arg0);
  items[2] = navigationReplace;
  obj.onPress = noop.useCallback(() => {
    ChannelActionCreatorsDefault.preload(user.guild_id, user.id);
    transitionToChannel.transitionToChannel(user.id, { navigationReplace });
  }, items);
  const items1 = [arg0];
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
});