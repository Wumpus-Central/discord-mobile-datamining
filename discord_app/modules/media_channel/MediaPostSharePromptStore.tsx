// === Module 8268: set ===

// Module 8268 (set)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import useIsFirstMessageInMediaPost from "useIsFirstMessageInMediaPost" /* 8269 */;
import closure_3 from "isSubscriptionGated" /* 1983 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import set from "set" /* 2 */;

require = arg1;
let set = new Set();
const Store = initializeDefault.Store;
class MediaPostSharePromptStore extends Store {
}
const prototype = MediaPostSharePromptStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_4, closure_5, closure_3);
};
prototype["shouldDisplayPrompt"] = function shouldDisplayPrompt(id) {
  return set.has(id);
};
MediaPostSharePromptStore.displayName = "MediaPostSharePromptStore";
const mediaPostSharePromptStore = new MediaPostSharePromptStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    set = new Set();
  },
  MESSAGE_CREATE: function handleMessageCreate(isPushNotification) {
    if (!isPushNotification.isPushNotification) {
      const message = isPushNotification.message;
      const author = message.author;
      let id1;
      id = id.getId();
      if (author != null) {
        id1 = author.id;
      }
      if (id === id1) {
        if (obj2.isFirstMessageIdInMediaPost(message.id, message.channel_id)) {
          channel = channel.getChannel(message.channel_id);
          if (null != channel) {
            if (null != channel.parent_id) {
              if (channelGated.isChannelGated(channel.guild_id, channel.parent_id)) {
                set.add(DISCORD_EPOCHDefault.castMessageIdAsChannelId(isPushNotification.message.id));
                const obj = DISCORD_EPOCHDefault;
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
const result = set.fileFinishedImporting("modules/media_channel/MediaPostSharePromptStore.tsx");

export default mediaPostSharePromptStore;