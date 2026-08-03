import isSubscriptionGated from "isSubscriptionGated";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import { Store } from "initialize";
import set from "ensureGuildLoaded";

const require = arg1;
let set = new Set();
class MediaPostSharePromptStore extends Store {
}
const prototype = MediaPostSharePromptStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint, ensureGuildLoaded, isSubscriptionGated);
};
prototype["shouldDisplayPrompt"] = function shouldDisplayPrompt(id) {
  return set.has(id);
};
MediaPostSharePromptStore.displayName = "MediaPostSharePromptStore";
const mediaPostSharePromptStore = new MediaPostSharePromptStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const set = new Set();
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
                set.add(importDefault(11).castMessageIdAsChannelId(isPushNotification.message.id));
                const obj = importDefault(11);
              }
            }
          }
        }
        obj2 = require(7849) /* useIsFirstMessageInMediaPost */;
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