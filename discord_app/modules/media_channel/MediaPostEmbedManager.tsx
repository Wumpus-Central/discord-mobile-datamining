// discord_app/modules/media_channel/MediaPostEmbedManager.tsx
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import setupLoadFromMessageManagerHandlersDefault from "../messages/setupLoadFromMessageManagerHandlers.tsx";
import isSubscriptionGated from "../channel/GatedChannelStore.tsx";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import getMediaPostEmbed from "MediaPostEmbedStore.tsx";
import { FetchState } from "MediaPostEmbedStore.tsx";
import { MessageFlags } from "../../Constants.tsx";

const require = fn;
function resolveMediaPostEmbeds(embeds) {
  closure_0 = embeds;
  embeds = embeds.embeds;
  let found;
  if (embeds != null) {
    found = embeds.filter((item, index) => item.type === first_message(table[5]).MessageEmbedTypes.POST_PREVIEW);
  }
  let tmp2 = null != found;
  if (tmp2) {
    tmp2 = 0 !== found.length;
  }
  if (tmp2) {
    const item = found.forEach((item, index) => {
      if (null != item.url) {
        const mediaPostEmbedChannelPath = first_message(closure_1_2[6]).getMediaPostEmbedChannelPath(item.url);
        if (null != mediaPostEmbedChannelPath) {
          let threadId;
          if (mediaPostEmbedChannelPath != null) {
            threadId = mediaPostEmbedChannelPath.threadId;
          }
          if (null != threadId) {
            let channelId;
            if (mediaPostEmbedChannelPath != null) {
              channelId = mediaPostEmbedChannelPath.channelId;
            }
            if (null != channelId) {
              if (closure_1_6.getEmbedFetchState(mediaPostEmbedChannelPath.threadId) === closure_1_7.NOT_FETCHED) {
                if (!closure_1_9.has(mediaPostEmbedChannelPath.threadId)) {
                  closure_1_9.add(mediaPostEmbedChannelPath.threadId);
                  let guildId;
                  const id = closure_1_4.getId();
                  if (mediaPostEmbedChannelPath != null) {
                    guildId = mediaPostEmbedChannelPath.guildId;
                  }
                  const isMemberResult = closure_1_5.isMember(guildId, id);
                  let tmp17Result = first_message(closure_1_2[7]);
                  let num = first_message.flags;
                  if (num == null) {
                    num = 0;
                  }
                  let tmp14 = isMemberResult;
                  const isChannelGatedResult = closure_1_3.isChannelGated(mediaPostEmbedChannelPath.guildId, mediaPostEmbedChannelPath.channelId);
                  if (isMemberResult) {
                    tmp14 = false === isChannelGatedResult;
                  }
                  if (!tmp14) {
                    let tmp15 = !isMemberResult;
                    if (!isMemberResult) {
                      tmp15 = hasFlagResult;
                    }
                    tmp14 = tmp15;
                  }
                  if (!tmp14) {
                    tmp17Result = first_message(closure_1_2[8]);
                    const mediaPostEmbed = tmp17Result.fetchMediaPostEmbed(mediaPostEmbedChannelPath.threadId);
                  }
                  hasFlagResult = tmp17Result.hasFlag(num, closure_1_8.IS_CROSSPOST);
                }
              }
            }
          }
        }
        const obj3 = first_message(closure_1_2[6]);
      }
    });
  }
}
const set = new Set();
initializeDefault;
class MediaPostEmbedManager extends tmp7 {
  constructor() {
    tmp3 = new MediaPostEmbedManager(tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    tmp3.actions = { LOAD_THREADS_SUCCESS: tmp3.handleLoadThreadsSuccess, LOAD_ARCHIVED_THREADS_SUCCESS: tmp3.handleLoadThreadsSuccess, LOAD_FORUM_POSTS: tmp3.handleLoadForumPosts };
    obj = {
      onBeforeBatch() {
            return closure_9.clear();
          }
    };
    tmp4 = require("setupLoadFromMessageManagerHandlers")(tmp3, resolveMediaPostEmbeds, obj);
    return tmp3;
  }
}
const prototype = MediaPostEmbedManager.prototype;
prototype["handleLoadThreadsSuccess"] = function handleLoadThreadsSuccess(firstMessages) {
  firstMessages = firstMessages.firstMessages;
  if (null == firstMessages) {
    return false;
  } else {
    set.clear();
    if (firstMessages != null) {
      let item = firstMessages.forEach((item, index) => {
        closure_0 = item;
        const embeds = item.embeds;
        let found;
        if (embeds != null) {
          found = embeds.filter((item, index) => item.type === first_message(table[5]).MessageEmbedTypes.POST_PREVIEW);
        }
        let tmp2 = null != found;
        if (tmp2) {
          tmp2 = 0 !== found.length;
        }
        if (tmp2) {
          item = found.forEach((item, index) => {
            if (null != item.url) {
              const mediaPostEmbedChannelPath = first_message(closure_1_2[6]).getMediaPostEmbedChannelPath(item.url);
              if (null != mediaPostEmbedChannelPath) {
                let threadId;
                if (mediaPostEmbedChannelPath != null) {
                  threadId = mediaPostEmbedChannelPath.threadId;
                }
                if (null != threadId) {
                  let channelId;
                  if (mediaPostEmbedChannelPath != null) {
                    channelId = mediaPostEmbedChannelPath.channelId;
                  }
                  if (null != channelId) {
                    if (closure_1_6.getEmbedFetchState(mediaPostEmbedChannelPath.threadId) === closure_1_7.NOT_FETCHED) {
                      if (!closure_1_9.has(mediaPostEmbedChannelPath.threadId)) {
                        closure_1_9.add(mediaPostEmbedChannelPath.threadId);
                        let guildId;
                        const id = closure_1_4.getId();
                        if (mediaPostEmbedChannelPath != null) {
                          guildId = mediaPostEmbedChannelPath.guildId;
                        }
                        const isMemberResult = closure_1_5.isMember(guildId, id);
                        let tmp17Result = first_message(closure_1_2[7]);
                        let num = first_message.flags;
                        if (num == null) {
                          num = 0;
                        }
                        let tmp14 = isMemberResult;
                        const isChannelGatedResult = closure_1_3.isChannelGated(mediaPostEmbedChannelPath.guildId, mediaPostEmbedChannelPath.channelId);
                        if (isMemberResult) {
                          tmp14 = false === isChannelGatedResult;
                        }
                        if (!tmp14) {
                          let tmp15 = !isMemberResult;
                          if (!isMemberResult) {
                            tmp15 = hasFlagResult;
                          }
                          tmp14 = tmp15;
                        }
                        if (!tmp14) {
                          tmp17Result = first_message(closure_1_2[8]);
                          const mediaPostEmbed = tmp17Result.fetchMediaPostEmbed(mediaPostEmbedChannelPath.threadId);
                        }
                        hasFlagResult = tmp17Result.hasFlag(num, closure_1_8.IS_CROSSPOST);
                      }
                    }
                  }
                }
              }
              const obj3 = first_message(closure_1_2[6]);
            }
          });
        }
      });
    }
  }
};
function handleLoadForumPosts(threads, arg1, arg2, Object, prototype, MediaPostEmbedManager, arg6, resolveMediaPostEmbeds) {
  set.clear();
  const values = Object.values(threads.threads);
  const mapped = values.map((item, index) => {
    const first_message = item.first_message;
    if (null != first_message) {
      const embeds = first_message.embeds;
      let found;
      if (embeds != null) {
        found = embeds.filter((item, index) => item.type === first_message(table[5]).MessageEmbedTypes.POST_PREVIEW);
      }
      let tmp3 = null != found;
      if (tmp3) {
        tmp3 = 0 !== found.length;
      }
      if (tmp3) {
        item = found.forEach((item, index) => {
          if (null != item.url) {
            const mediaPostEmbedChannelPath = first_message(closure_1_2[6]).getMediaPostEmbedChannelPath(item.url);
            if (null != mediaPostEmbedChannelPath) {
              let threadId;
              if (mediaPostEmbedChannelPath != null) {
                threadId = mediaPostEmbedChannelPath.threadId;
              }
              if (null != threadId) {
                let channelId;
                if (mediaPostEmbedChannelPath != null) {
                  channelId = mediaPostEmbedChannelPath.channelId;
                }
                if (null != channelId) {
                  if (closure_1_6.getEmbedFetchState(mediaPostEmbedChannelPath.threadId) === closure_1_7.NOT_FETCHED) {
                    if (!closure_1_9.has(mediaPostEmbedChannelPath.threadId)) {
                      closure_1_9.add(mediaPostEmbedChannelPath.threadId);
                      let guildId;
                      const id = closure_1_4.getId();
                      if (mediaPostEmbedChannelPath != null) {
                        guildId = mediaPostEmbedChannelPath.guildId;
                      }
                      const isMemberResult = closure_1_5.isMember(guildId, id);
                      let tmp17Result = first_message(closure_1_2[7]);
                      let num = first_message.flags;
                      if (num == null) {
                        num = 0;
                      }
                      let tmp14 = isMemberResult;
                      const isChannelGatedResult = closure_1_3.isChannelGated(mediaPostEmbedChannelPath.guildId, mediaPostEmbedChannelPath.channelId);
                      if (isMemberResult) {
                        tmp14 = false === isChannelGatedResult;
                      }
                      if (!tmp14) {
                        let tmp15 = !isMemberResult;
                        if (!isMemberResult) {
                          tmp15 = hasFlagResult;
                        }
                        tmp14 = tmp15;
                      }
                      if (!tmp14) {
                        tmp17Result = first_message(closure_1_2[8]);
                        const mediaPostEmbed = tmp17Result.fetchMediaPostEmbed(mediaPostEmbedChannelPath.threadId);
                      }
                      hasFlagResult = tmp17Result.hasFlag(num, closure_1_8.IS_CROSSPOST);
                    }
                  }
                }
              }
            }
            const obj3 = first_message(closure_1_2[6]);
          }
        });
      }
    }
    return null != first_message;
  });
}
prototype["handleLoadForumPosts"] = handleLoadForumPosts;
handleLoadForumPosts = new handleLoadForumPosts(tmp4, tmp3, tmp2, Object, prototype, MediaPostEmbedManager, tmp, resolveMediaPostEmbeds);
// ThrowIfThisInitialized (0x7c)
handleLoadForumPosts.actions = { LOAD_THREADS_SUCCESS: handleLoadForumPosts.handleLoadThreadsSuccess, LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadForumPosts.handleLoadThreadsSuccess, LOAD_FORUM_POSTS: handleLoadForumPosts.handleLoadForumPosts };
setupLoadFromMessageManagerHandlersDefault(handleLoadForumPosts, resolveMediaPostEmbeds, {
  onBeforeBatch() {
    return closure_9.clear();
  }
});
const result = require("obj132").fileFinishedImporting("modules/media_channel/MediaPostEmbedManager.tsx");

export default handleLoadForumPosts;