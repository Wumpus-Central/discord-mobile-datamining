// === Module 17434: useTextChannelPressEvents ===

// Module 17434 (useTextChannelPressEvents)
import transitionToChannel from "transitionToChannel" /* 4907 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4909 */;
import showLongPressForumPostActionSheetDefault from "showLongPressForumPostActionSheet" /* 10045 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10664 */;
import showThreadLongPressActionSheetDefault from "showThreadLongPressActionSheet" /* 16079 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id, navigationReplace) => {
  _require = guild_id;
  let obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] === guild_id.guild_id) {
    if (cResult[1] === guild_id.id) {
      let tmp2;
      let tmp3;
      if (cResult[2] === navigationReplace) {
        tmp2 = cResult[3];
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
            const obj3 = openChannelLongPressActionSheet;
            const result = obj3.openChannelLongPressActionSheet(guild_id.id);
          }
        };
        cResult[4] = guild_id;
        cResult[5] = fn2;
        tmp3 = fn2;
      } else {
        tmp3 = cResult[5];
      }
      if (cResult[6] === tmp3) {
        let tmp4;
        if (cResult[7] === tmp2) {
          tmp4 = cResult[8];
        }
        return tmp4;
      }
      let obj2 = { onPress: tmp2, onLongPress: tmp3, unstable_pressDelay: 32 };
      cResult[6] = tmp3;
      cResult[7] = tmp2;
      cResult[8] = obj2;
      tmp4 = obj2;
    }
  }
  const fn = function t() {
    const obj = ChannelActionCreatorsDefault;
    obj.preload(guild_id.guild_id, guild_id.id);
    const obj2 = transitionToChannel;
    const obj3 = { navigationReplace };
    obj2.transitionToChannel(guild_id.id, obj3);
  };
  cResult[0] = guild_id.guild_id;
  cResult[1] = guild_id.id;
  cResult[2] = navigationReplace;
  cResult[3] = fn;
  tmp2 = fn;
}) : ((arg0, navigationReplace) => {
  let items;
  let items1;
  const user = arg0;
  let obj = {
    onPress: react.useCallback(() => {
      const obj = ChannelActionCreatorsDefault;
      obj.preload(user.guild_id, user.id);
      const obj2 = transitionToChannel;
      const obj3 = { navigationReplace };
      obj2.transitionToChannel(user.id, obj3);
    }, items),
    onLongPress: react.useCallback(() => {
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
        const obj3 = openChannelLongPressActionSheet;
        const result = obj3.openChannelLongPressActionSheet(user.id);
      }
    }, items1),
    unstable_pressDelay: 32
  };
  items = [, , ];
  ({ id: arr[0], guild_id: arr[1] } = arg0);
  items[2] = navigationReplace;
  items1 = [arg0];
  return obj;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx");

export const useTextChannelPressEvents = tmp2;