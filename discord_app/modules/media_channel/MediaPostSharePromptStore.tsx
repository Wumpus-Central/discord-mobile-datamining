// discord_app/modules/media_channel/MediaPostSharePromptStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import useIsFirstMessageInMediaPost from "useIsFirstMessageInMediaPost.tsx";
import GatedChannelStore from "../channel/GatedChannelStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

require = fn;
let set = new Set();
const Store = initializeDefault.Store;
class MediaPostSharePromptStore extends Store {}
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
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/MediaPostSharePromptStore.tsx");

export default mediaPostSharePromptStore;
