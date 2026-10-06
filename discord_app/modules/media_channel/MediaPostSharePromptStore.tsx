// === Module 7612: MediaPostSharePromptStore ===

// Module 7612 (MediaPostSharePromptStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import useIsFirstMessageInMediaPost from "useIsFirstMessageInMediaPost" /* 7613 */;
import GatedChannelStore from "GatedChannelStore" /* 2104 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

let set = new Set();
const Store = get_initializedDefault.Store;
class MediaPostSharePromptStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, ChannelStore, GatedChannelStore);
  }
  shouldDisplayPrompt(id) {
    return set.has(id);
  }
}
const prototype = MediaPostSharePromptStore.prototype;
MediaPostSharePromptStore.displayName = "MediaPostSharePromptStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    set = new Set();
  },
  MESSAGE_CREATE: function handleMessageCreate(isPushNotification) {
    if (!isPushNotification.isPushNotification) {
      const message = isPushNotification.message;
      const author = message.author;
      let id1;
      const id = AuthenticationStore.getId();
      if (author != null) {
        id1 = author.id;
      }
      if (id === id1) {
        const obj2 = useIsFirstMessageInMediaPost;
        if (obj2.isFirstMessageIdInMediaPost(message.id, message.channel_id)) {
          const channel = ChannelStore.getChannel(message.channel_id);
          if (null != channel) {
            if (null != channel.parent_id) {
              if (GatedChannelStore.isChannelGated(channel.guild_id, channel.parent_id)) {
                const add = set.add;
                const obj = SnowflakeUtilsDefault;
                add(obj.castMessageIdAsChannelId(isPushNotification.message.id));
              }
            }
          }
        }
      }
    }
  },
  DISMISS_MEDIA_POST_SHARE_PROMPT: function handleDismissMediaPostSharePrompt(threadId) {
    set.delete(threadId.threadId);
  },
  LOGOUT: function handleLogout() {
    set.clear();
  }
};
const mediaPostSharePromptStore = new MediaPostSharePromptStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/media_channel/MediaPostSharePromptStore.tsx");

export default mediaPostSharePromptStore;