// === Module 7942: MediaPostSharePromptStore ===

// Module 7942 (MediaPostSharePromptStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import useIsFirstMessageInMediaPost from "useIsFirstMessageInMediaPost" /* 7943 */;
import GatedChannelStore from "GatedChannelStore" /* 2013 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
let set = new Set();
const Store = initializeDefault.Store;
class MediaPostSharePromptStore extends Store {
}
const prototype = MediaPostSharePromptStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, ChannelStore, GatedChannelStore);
};
prototype["shouldDisplayPrompt"] = function shouldDisplayPrompt(id) {
  return set.has(id);
};
MediaPostSharePromptStore.displayName = "MediaPostSharePromptStore";
const mediaPostSharePromptStore = new MediaPostSharePromptStore(DispatcherDefault, {
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
        if (obj2.isFirstMessageIdInMediaPost(message.id, message.channel_id)) {
          const channel = ChannelStore.getChannel(message.channel_id);
          if (null != channel) {
            if (null != channel.parent_id) {
              if (GatedChannelStore.isChannelGated(channel.guild_id, channel.parent_id)) {
                set.add(SnowflakeUtilsDefault.castMessageIdAsChannelId(isPushNotification.message.id));
              }
            }
          }
        }
        obj2 = useIsFirstMessageInMediaPost;
      }
    }
  },
  DISMISS_MEDIA_POST_SHARE_PROMPT: function handleDismissMediaPostSharePrompt(threadId) {
    set.delete(threadId.threadId);
  },
  LOGOUT: function handleLogout() {
    set.clear();
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/MediaPostSharePromptStore.tsx");

export default mediaPostSharePromptStore;