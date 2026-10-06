// === Module 18043: MediaPostEmbedManager ===

// Module 18043 (MediaPostEmbedManager)
import Constants from "Constants" /* 1085 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import MediaPostEmbedUtils from "MediaPostEmbedUtils" /* 5044 */;
import MediaPostEmbedStore2 from "MediaPostEmbedStore" /* 11098 */;
import MediaChannelActionCreators from "MediaChannelActionCreators" /* 11500 */;
import setupLoadFromMessageManagerHandlersDefault from "setupLoadFromMessageManagerHandlers" /* 17605 */;
import GatedChannelStore from "GatedChannelStore" /* 2104 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

let first_message, id, isMember;

let tmp2;
let tmp3;
function onBeforeBatch() {
  return set.clear();
}
function resolveMediaPostEmbeds(embeds) {
  let closure_0 = embeds;
  embeds = embeds.embeds;
  let found;
  if (embeds != null) {
    found = embeds.filter((type) => type.type === first_message(closure_1_2[5]).MessageEmbedTypes.POST_PREVIEW);
  }
  const tmp2 = null != found && 0 !== found.length;
  if (tmp2) {
    const item = found.forEach((url) => {
      if (null != url.url) {
        const obj2 = MediaPostEmbedUtils;
        const mediaPostEmbedChannelPath = obj2.getMediaPostEmbedChannelPath(url.url);
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
              if (embedFetchState.getEmbedFetchState(mediaPostEmbedChannelPath.threadId) === constants.NOT_FETCHED) {
                if (!set.has(mediaPostEmbedChannelPath.threadId)) {
                  set.add(mediaPostEmbedChannelPath.threadId);
                  let guildId;
                  id = id.getId();
                  isMember = isMember.isMember;
                  if (mediaPostEmbedChannelPath != null) {
                    guildId = mediaPostEmbedChannelPath.guildId;
                  }
                  const isMemberResult = isMember(guildId, id);
                  let num = first_message.flags;
                  const isChannelGatedResult = channelGated.isChannelGated(mediaPostEmbedChannelPath.guildId, mediaPostEmbedChannelPath.channelId);
                  const hasFlag = FlagUtils.hasFlag;
                  FlagUtils;
                  if (num == null) {
                    num = 0;
                  }
                  let tmp15 = isMemberResult;
                  const hasFlagResult = hasFlag(num, constants2.IS_CROSSPOST);
                  if (isMemberResult) {
                    tmp15 = false === isChannelGatedResult;
                  }
                  if (!tmp15) {
                    tmp15 = !isMemberResult && hasFlagResult;
                  }
                  if (!tmp15) {
                    const tmp18Result2 = MediaChannelActionCreators;
                    const mediaPostEmbed = tmp18Result2.fetchMediaPostEmbed(mediaPostEmbedChannelPath.threadId);
                  }
                }
              }
            }
          }
        }
      }
    });
  }
}
const FetchState = MediaPostEmbedStore2.FetchState;
const MessageFlags = Constants.MessageFlags;
const set = new Set();
class MediaPostEmbedManager extends AutomaticLifecycleManager {
  constructor() {
    const tmp3 = new MediaPostEmbedManager(tmp2, tmp);
    tmp3.actions = { LOAD_THREADS_SUCCESS: tmp3.handleLoadThreadsSuccess, LOAD_ARCHIVED_THREADS_SUCCESS: tmp3.handleLoadThreadsSuccess, LOAD_FORUM_POSTS: tmp3.handleLoadForumPosts };
    const obj = { onBeforeBatch };
    setupLoadFromMessageManagerHandlersDefault(tmp3, resolveMediaPostEmbeds, obj);
    return tmp3;
  }
  handleLoadThreadsSuccess(firstMessages) {
    firstMessages = firstMessages.firstMessages;
    if (null == firstMessages) {
      return false;
    } else {
      set.clear();
      if (firstMessages != null) {
        let item = firstMessages.forEach((embeds) => {
          let closure_0 = embeds;
          embeds = embeds.embeds;
          let found;
          if (embeds != null) {
            found = embeds.filter((type) => type.type === first_message(closure_1_2[5]).MessageEmbedTypes.POST_PREVIEW);
          }
          const tmp2 = null != found && 0 !== found.length;
          if (tmp2) {
            const item = found.forEach((url) => {
              if (null != url.url) {
                const obj2 = MediaPostEmbedUtils;
                const mediaPostEmbedChannelPath = obj2.getMediaPostEmbedChannelPath(url.url);
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
                      if (embedFetchState.getEmbedFetchState(mediaPostEmbedChannelPath.threadId) === constants.NOT_FETCHED) {
                        if (!set.has(mediaPostEmbedChannelPath.threadId)) {
                          set.add(mediaPostEmbedChannelPath.threadId);
                          let guildId;
                          id = id.getId();
                          isMember = isMember.isMember;
                          if (mediaPostEmbedChannelPath != null) {
                            guildId = mediaPostEmbedChannelPath.guildId;
                          }
                          const isMemberResult = isMember(guildId, id);
                          let num = first_message.flags;
                          const isChannelGatedResult = channelGated.isChannelGated(mediaPostEmbedChannelPath.guildId, mediaPostEmbedChannelPath.channelId);
                          const hasFlag = FlagUtils.hasFlag;
                          FlagUtils;
                          if (num == null) {
                            num = 0;
                          }
                          let tmp15 = isMemberResult;
                          const hasFlagResult = hasFlag(num, constants2.IS_CROSSPOST);
                          if (isMemberResult) {
                            tmp15 = false === isChannelGatedResult;
                          }
                          if (!tmp15) {
                            tmp15 = !isMemberResult && hasFlagResult;
                          }
                          if (!tmp15) {
                            const tmp18Result2 = MediaChannelActionCreators;
                            const mediaPostEmbed = tmp18Result2.fetchMediaPostEmbed(mediaPostEmbedChannelPath.threadId);
                          }
                        }
                      }
                    }
                  }
                }
              }
            });
          }
        });
      }
    }
  }
}
const prototype = MediaPostEmbedManager.prototype;
function handleLoadForumPosts(threads) {
  let channelGated;
  let constants2;
  let embedFetchState;
  threads = threads.threads;
  set.clear();
  const values = Object.values(threads);
  const mapped = values.map((first_message) => {
    first_message = first_message.first_message;
    if (null != first_message) {
      const embeds = first_message.embeds;
      let found;
      if (embeds != null) {
        found = embeds.filter((type) => type.type === first_message(closure_1_2[5]).MessageEmbedTypes.POST_PREVIEW);
      }
      let tmp3 = null != found;
      if (tmp3) {
        let num = 0;
        tmp3 = 0 !== found.length;
      }
      if (tmp3) {
        const item = found.forEach((url) => {
          if (null != url.url) {
            const obj2 = MediaPostEmbedUtils;
            const mediaPostEmbedChannelPath = obj2.getMediaPostEmbedChannelPath(url.url);
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
                  if (embedFetchState.getEmbedFetchState(mediaPostEmbedChannelPath.threadId) === constants.NOT_FETCHED) {
                    if (!set.has(mediaPostEmbedChannelPath.threadId)) {
                      set.add(mediaPostEmbedChannelPath.threadId);
                      let guildId;
                      id = id.getId();
                      isMember = isMember.isMember;
                      if (mediaPostEmbedChannelPath != null) {
                        guildId = mediaPostEmbedChannelPath.guildId;
                      }
                      const isMemberResult = isMember(guildId, id);
                      let num = first_message.flags;
                      const isChannelGatedResult = channelGated.isChannelGated(mediaPostEmbedChannelPath.guildId, mediaPostEmbedChannelPath.channelId);
                      const hasFlag = FlagUtils.hasFlag;
                      FlagUtils;
                      if (num == null) {
                        num = 0;
                      }
                      let tmp15 = isMemberResult;
                      const hasFlagResult = hasFlag(num, constants2.IS_CROSSPOST);
                      if (isMemberResult) {
                        tmp15 = false === isChannelGatedResult;
                      }
                      if (!tmp15) {
                        tmp15 = !isMemberResult && hasFlagResult;
                      }
                      if (!tmp15) {
                        const tmp18Result2 = MediaChannelActionCreators;
                        const mediaPostEmbed = tmp18Result2.fetchMediaPostEmbed(mediaPostEmbedChannelPath.threadId);
                      }
                    }
                  }
                }
              }
            }
          }
        });
      }
    }
    return null != first_message;
  });
}
prototype["handleLoadForumPosts"] = handleLoadForumPosts;
const handleLoadForumPosts1 = new handleLoadForumPosts(tmp4, tmp3, tmp2, Object, prototype, MediaPostEmbedManager, tmp, resolveMediaPostEmbeds);
handleLoadForumPosts1.actions = { LOAD_THREADS_SUCCESS: handleLoadForumPosts1.handleLoadThreadsSuccess, LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadForumPosts1.handleLoadThreadsSuccess, LOAD_FORUM_POSTS: handleLoadForumPosts1.handleLoadForumPosts };
let obj = { onBeforeBatch };
setupLoadFromMessageManagerHandlersDefault(handleLoadForumPosts1, resolveMediaPostEmbeds, obj);
const result = size.fileFinishedImporting("modules/media_channel/MediaPostEmbedManager.tsx");

export default handleLoadForumPosts1;