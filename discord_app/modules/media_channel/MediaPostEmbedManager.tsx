// discord_app/modules/media_channel/MediaPostEmbedManager.tsx
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import MediaPostEmbedUtils from "MediaPostEmbedUtils.tsx";
import MediaChannelActionCreators from "MediaChannelActionCreators.tsx";
import setupLoadFromMessageManagerHandlersDefault from "../messages/setupLoadFromMessageManagerHandlers.tsx";
import GatedChannelStore from "../channel/GatedChannelStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import MediaPostEmbedStore from "MediaPostEmbedStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function resolveMediaPostEmbeds(embeds) {
  closure_0 = embeds;
  embeds = embeds.embeds;
  let found;
  if (embeds != null) {
    found = embeds.filter((type) => type.type === first_message(closure_1_2[5]).MessageEmbedTypes.POST_PREVIEW);
  }
  let tmp2 = null != found;
  if (tmp2) {
    tmp2 = 0 !== found.length;
  }
  if (tmp2) {
    const item = found.forEach((url) => {
      if (null != url.url) {
        const mediaPostEmbedChannelPath = MediaPostEmbedUtils.getMediaPostEmbedChannelPath(url.url);
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
                  if (mediaPostEmbedChannelPath != null) {
                    guildId = mediaPostEmbedChannelPath.guildId;
                  }
                  const isMemberResult = member.isMember(guildId, id);
                  let tmp17Result = FlagUtils;
                  let num = first_message.flags;
                  if (num == null) {
                    num = 0;
                  }
                  let tmp14 = isMemberResult;
                  const isChannelGatedResult = channelGated.isChannelGated(
                    mediaPostEmbedChannelPath.guildId,
                    mediaPostEmbedChannelPath.channelId,
                  );
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
                    tmp17Result = MediaChannelActionCreators;
                    const mediaPostEmbed = tmp17Result.fetchMediaPostEmbed(mediaPostEmbedChannelPath.threadId);
                  }
                  hasFlagResult = tmp17Result.hasFlag(num, constants2.IS_CROSSPOST);
                }
              }
            }
          }
        }
      }
    });
  }
}
const FetchState = fn(11426).FetchState;
const MessageFlags = fn(1074).MessageFlags;
const set = new Set();
class MediaPostEmbedManager extends tmp7 {
  constructor() {
    tmp3 = new MediaPostEmbedManager(tmp2, tmp);
    tmp3.actions = {
      LOAD_THREADS_SUCCESS: tmp3.handleLoadThreadsSuccess,
      LOAD_ARCHIVED_THREADS_SUCCESS: tmp3.handleLoadThreadsSuccess,
      LOAD_FORUM_POSTS: tmp3.handleLoadForumPosts,
    };
    obj = {
      onBeforeBatch() {
        return set.clear();
      },
    };
    tmp4 = closure_1(closure_2[10])(tmp3, resolveMediaPostEmbeds, obj);
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
      let item = firstMessages.forEach((embeds) => {
        closure_0 = embeds;
        embeds = embeds.embeds;
        let found;
        if (embeds != null) {
          found = embeds.filter((type) => type.type === first_message(closure_1_2[5]).MessageEmbedTypes.POST_PREVIEW);
        }
        let tmp2 = null != found;
        if (tmp2) {
          tmp2 = 0 !== found.length;
        }
        if (tmp2) {
          const item = found.forEach((url) => {
            if (null != url.url) {
              const mediaPostEmbedChannelPath = MediaPostEmbedUtils.getMediaPostEmbedChannelPath(url.url);
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
                    if (
                      embedFetchState.getEmbedFetchState(mediaPostEmbedChannelPath.threadId) === constants.NOT_FETCHED
                    ) {
                      if (!set.has(mediaPostEmbedChannelPath.threadId)) {
                        set.add(mediaPostEmbedChannelPath.threadId);
                        let guildId;
                        id = id.getId();
                        if (mediaPostEmbedChannelPath != null) {
                          guildId = mediaPostEmbedChannelPath.guildId;
                        }
                        const isMemberResult = member.isMember(guildId, id);
                        let tmp17Result = FlagUtils;
                        let num = first_message.flags;
                        if (num == null) {
                          num = 0;
                        }
                        let tmp14 = isMemberResult;
                        const isChannelGatedResult = channelGated.isChannelGated(
                          mediaPostEmbedChannelPath.guildId,
                          mediaPostEmbedChannelPath.channelId,
                        );
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
                          tmp17Result = MediaChannelActionCreators;
                          const mediaPostEmbed = tmp17Result.fetchMediaPostEmbed(mediaPostEmbedChannelPath.threadId);
                        }
                        hasFlagResult = tmp17Result.hasFlag(num, constants2.IS_CROSSPOST);
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
};
function handleLoadForumPosts(threads) {
  set.clear();
  const values = Object.values(threads.threads);
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
        tmp3 = 0 !== found.length;
      }
      if (tmp3) {
        const item = found.forEach((url) => {
          if (null != url.url) {
            const mediaPostEmbedChannelPath = MediaPostEmbedUtils.getMediaPostEmbedChannelPath(url.url);
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
                  if (
                    embedFetchState.getEmbedFetchState(mediaPostEmbedChannelPath.threadId) === constants.NOT_FETCHED
                  ) {
                    if (!set.has(mediaPostEmbedChannelPath.threadId)) {
                      set.add(mediaPostEmbedChannelPath.threadId);
                      let guildId;
                      id = id.getId();
                      if (mediaPostEmbedChannelPath != null) {
                        guildId = mediaPostEmbedChannelPath.guildId;
                      }
                      const isMemberResult = member.isMember(guildId, id);
                      let tmp17Result = FlagUtils;
                      let num = first_message.flags;
                      if (num == null) {
                        num = 0;
                      }
                      let tmp14 = isMemberResult;
                      const isChannelGatedResult = channelGated.isChannelGated(
                        mediaPostEmbedChannelPath.guildId,
                        mediaPostEmbedChannelPath.channelId,
                      );
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
                        tmp17Result = MediaChannelActionCreators;
                        const mediaPostEmbed = tmp17Result.fetchMediaPostEmbed(mediaPostEmbedChannelPath.threadId);
                      }
                      hasFlagResult = tmp17Result.hasFlag(num, constants2.IS_CROSSPOST);
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
handleLoadForumPosts = new handleLoadForumPosts(
  tmp4,
  tmp3,
  tmp2,
  Object,
  prototype,
  MediaPostEmbedManager,
  tmp,
  resolveMediaPostEmbeds,
);
handleLoadForumPosts.actions = {
  LOAD_THREADS_SUCCESS: handleLoadForumPosts.handleLoadThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadForumPosts.handleLoadThreadsSuccess,
  LOAD_FORUM_POSTS: handleLoadForumPosts.handleLoadForumPosts,
};
setupLoadFromMessageManagerHandlersDefault(handleLoadForumPosts, resolveMediaPostEmbeds, {
  onBeforeBatch() {
    return set.clear();
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/MediaPostEmbedManager.tsx");

export default handleLoadForumPosts;
