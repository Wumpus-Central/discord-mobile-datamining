import updateState from "updateState";
import AbortCodes from "AbortCodes";
import getEmojiToGroupId from "getEmojiToGroupId";
import rebuild from "rebuild";
import handleThreadCreateOrUpdate from "handleThreadCreateOrUpdate";
import closure_8 from "updateState";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionReset from "handleConnectionReset";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import mergeGuildAvatar from "mergeGuildAvatar";
import maybeRebuildState from "maybeRebuildState";
import handleLoadThreadsSuccess from "handleLoadThreadsSuccess";
import set from "set";
import initialize from "initialize";
import { ForumTimestampFormats } from "FORUM_GUIDELINES_ACTION_SHEET";
import ME from "ME";
import { ChannelFlags } from "set";
import { MAX_THREAD_UNREAD_MESSAGE_COUNT as closure_25 } from "AbortCodes";

let closure_20;
let closure_21;
let closure_22;
let closure_23;
const require = arg1;
({ AnalyticsObjectTypes: closure_20, AnalyticsObjects: closure_21, EMPTY_STRING_SNOWFLAKE_ID: closure_22, Permissions: closure_23 } = ME);
let closure_26 = { isNew: false, hasUnreads: false };
const result = require("getEmojiToGroupId").fileFinishedImporting("modules/forums/ForumHooks.tsx");

export const useLoadForumUnreadCounts = function useLoadForumUnreadCounts(channel, sortOrder, tagFilter, tagSetting) {
  const _require = channel;
  let closure_1 = sortOrder;
  const dependencyMap = tagFilter;
  let updateState = tagSetting;
  let items = [handleThreadCreateOrUpdate];
  const stateFromStores = _require(589).useStateFromStores(items, () => outer1_7.hasLoaded(channel.guild_id));
  const items1 = [, , , , , ];
  ({ id: arr2[0], guild_id: arr2[1] } = channel);
  items1[2] = stateFromStores;
  items1[3] = tagFilter;
  items1[4] = sortOrder;
  items1[5] = tagSetting;
  const effect = stateFromStores.useEffect(() => {
    if (stateFromStores) {
      const threadIdsMissingCounts = outer1_17.getThreadIdsMissingCounts(channel.guild_id, outer1_15.getThreadIds(channel.id, sortOrder, tagFilter, updateState));
      const found = threadIdsMissingCounts.filter((id) => {
        const items = [generateOldThreadCutoff];
        return callback(table[21]).canDisplayPostUnreadMessageCount(id, items);
      });
      const substr = found.slice(0, 180);
      const mapped = substr.map((threadId) => ({ threadId, ackMessageId: trackedAckMessageId.getTrackedAckMessageId(threadId) }));
      if (mapped.length > 0) {
        let obj = sortOrder(tagFilter[22]);
        obj = { type: "REQUEST_FORUM_UNREADS", guildId: null, channelId: null, threads: null };
        ({ guild_id: obj2[1], id: obj2[2] } = tmp2);
        obj[3] = mapped;
        obj.dispatch(obj);
      }
      tmp2 = channel;
    }
  }, items1);
};
export const useExistingPin = function useExistingPin(thread) {
  const _require = thread;
  const items = [handleThreadCreateOrUpdate, ensureGuildLoaded];
  return _require(589).useStateFromStores(items, () => {
    const tmp = outer1_1(outer1_2[23]);
    const keys = outer1_1(outer1_2[23])(outer1_7.getThreadsForParent(thread.guild_id, thread.parent_id)).keys();
    const found = keys.filter((arg0) => {
      channel = channel.getChannel(arg0);
      let hasFlagResult;
      if (channel != null) {
        hasFlagResult = channel.hasFlag(constants.PINNED);
      }
      return true === hasFlagResult;
    });
    return outer1_9.getChannel(found.head());
  });
};
export const useFacepileUsers = function useFacepileUsers(thread, typingUserIds) {
  const _require = thread;
  const importDefault = typingUserIds;
  const items = [mergeGuildAvatar];
  stateFromStoresArray = _require(stateFromStoresArray[20]).useStateFromStoresArray(items, () => {
    const mapped = typingUserIds.map((arg0) => user.getUser(arg0));
    return mapped.filter(thread(stateFromStoresArray[24]).isNotNullish);
  });
  importDefault(stateFromStoresArray[25])(() => {
    const item = stateFromStoresArray.forEach((id) => {
      const member = outer1_10.requestMember(guild_id.guild_id, id.id);
    });
  });
  return stateFromStoresArray;
};
export const useLastActiveTimestamp = function useLastActiveTimestamp(thread, sortOrder, format) {
  const _require = thread;
  let closure_1 = sortOrder;
  let DURATION_AGO = format;
  if (format === undefined) {
    DURATION_AGO = ForumTimestampFormats.DURATION_AGO;
  }
  let memo;
  let lastMessageTimestamp;
  let memo1;
  const items = [thread.id];
  memo = lastMessageTimestamp.useMemo(() => sortOrder(DURATION_AGO[26]).extractTimestamp(thread.id), items);
  lastMessageTimestamp = _require(DURATION_AGO[27]).useLastMessageTimestamp(thread);
  const items1 = [sortOrder, DURATION_AGO];
  memo1 = lastMessageTimestamp.useMemo(() => thread(DURATION_AGO[21]).getForumTimestampFormatter(closure_1, DURATION_AGO), items1);
  const items2 = [lastMessageTimestamp, sortOrder, memo, memo1];
  return lastMessageTimestamp.useMemo(() => {
    if (closure_1 === thread(DURATION_AGO[28]).ThreadSortOrder.CREATION_DATE) {
      let tmpResult = tmp(tmp2[27]);
      let timestampString = tmpResult.getTimestampString(memo, memo1);
    } else {
      tmpResult = tmp(tmp2[27]);
      timestampString = tmpResult.getTimestampString(lastMessageTimestamp, memo1);
    }
    return timestampString;
  }, items2);
};
export const useMostUsedReaction = function useMostUsedReaction(reactions) {
  let closure_0 = reactions;
  reactions = undefined;
  if (reactions != null) {
    reactions = reactions.reactions;
  }
  let items = [reactions];
  return React.useMemo(() => {
    let reactions;
    if (reactions != null) {
      reactions = reactions.reactions;
    }
    if (reactions == null) {
      reactions = [];
    }
    if (0 !== reactions.length) {
      const items = [(count) => count.count + count.burst_count, (burst_count) => burst_count.burst_count];
      return outer1_1(outer1_2[23]).orderBy(reactions, items, ["desc", "desc"])[0];
    }
  }, items);
};
export const useDefaultReactionEmoji = function useDefaultReactionEmoji(defaultReactionEmoji) {
  defaultReactionEmoji = undefined;
  if (defaultReactionEmoji != null) {
    defaultReactionEmoji = defaultReactionEmoji.defaultReactionEmoji;
  }
  let obj = defaultReactionEmoji(589);
  const items = [getEmojiToGroupId];
  let animated = obj.useStateFromStores(items, () => {
    let emojiId;
    if (defaultReactionEmoji != null) {
      emojiId = tmp.emojiId;
    }
    let usableCustomEmojiById = null;
    if (null != emojiId) {
      usableCustomEmojiById = outer1_5.getUsableCustomEmojiById(tmp.emojiId);
    }
    return usableCustomEmojiById;
  });
  if (null == defaultReactionEmoji) {
    return null;
  } else {
    if (null == defaultReactionEmoji.emojiId) {
      let tmp2 = null;
      if (null != defaultReactionEmoji.emojiName) {
        obj = { id: null, name: null, animated: false };
        ({ emojiId: obj2[0], emojiName: obj2[1] } = defaultReactionEmoji);
        tmp2 = obj;
      }
    }
    obj = { id: null, name: null, animated: null };
    obj[0] = defaultReactionEmoji.emojiId;
    defaultReactionEmoji = animated.name;
    obj[1] = defaultReactionEmoji;
    animated = animated.animated;
    obj[2] = animated;
    tmp2 = obj;
  }
};
export const useSomeForumPostReactions = function useSomeForumPostReactions(message) {
  let count;
  let parentChannel;
  message = message.message;
  let defaultReactionEmoji = message;
  ({ parentChannel, count } = message);
  if (count === undefined) {
    count = 1;
  }
  let flag = message.sorted;
  if (flag === undefined) {
    flag = true;
  }
  defaultReactionEmoji = undefined;
  defaultReactionEmoji = undefined;
  if (parentChannel != null) {
    defaultReactionEmoji = parentChannel.defaultReactionEmoji;
  }
  let obj = defaultReactionEmoji(589);
  let items = [getEmojiToGroupId];
  let animated = obj.useStateFromStores(items, () => {
    let emojiId;
    if (defaultReactionEmoji != null) {
      emojiId = tmp.emojiId;
    }
    let usableCustomEmojiById = null;
    if (null != emojiId) {
      usableCustomEmojiById = outer1_5.getUsableCustomEmojiById(tmp.emojiId);
    }
    return usableCustomEmojiById;
  });
  if (null == defaultReactionEmoji) {
    let reactions;
    if (message != null) {
      reactions = message.reactions;
    }
    const items1 = [reactions, flag];
    const memo = React.useMemo(() => {
      let reactions;
      if (defaultReactionEmoji != null) {
        reactions = defaultReactionEmoji.reactions;
      }
      if (reactions == null) {
        reactions = [];
      }
      let orderByResult = reactions;
      if (flag) {
        const items = [(count) => count.count + count.burst_count, (burst_count) => burst_count.burst_count];
        orderByResult = flag(outer1_2[23]).orderBy(reactions, items, ["desc", "desc"]);
        const obj = flag(outer1_2[23]);
      }
      return orderByResult;
    }, items1);
    let items2 = [];
    if (null != null) {
      obj = { emoji: null, me: false, count: 0, burst_count: 0, me_burst: false };
      obj[0] = null;
      const items3 = [obj];
      items2 = items3;
    }
    if (memo.length > 0) {
      items2 = memo;
    }
    obj = { reactions: null, additionalNonUniqueReactionCount: null };
    obj[0] = items2.slice(0, count);
    const substr = items2.slice(count, items2.length);
    obj[1] = flag(12).sum(substr.map((count) => count.count + count.burst_count));
    return obj;
  } else {
    if (null == defaultReactionEmoji.emojiId) {
      let tmp3 = null;
      if (null != defaultReactionEmoji.emojiName) {
        ({ emojiId: obj2[0], emojiName: obj2[1] } = defaultReactionEmoji);
        tmp3 = { id: null, name: null, animated: false };
        const obj1 = { id: null, name: null, animated: false };
      }
    }
    const obj2 = { id: null, name: null, animated: null };
    obj2[0] = defaultReactionEmoji.emojiId;
    defaultReactionEmoji = animated.name;
    obj2[1] = defaultReactionEmoji;
    animated = animated.animated;
    obj2[2] = animated;
    tmp3 = obj2;
  }
};
export const useMaxPossibleForumPostReactions = function useMaxPossibleForumPostReactions(message) {
  let containerWidth;
  let digitWidth;
  let reactionEmojiWidth;
  message = message.message;
  let defaultReactionEmoji = message;
  const parentChannel = message.parentChannel;
  defaultReactionEmoji = undefined;
  defaultReactionEmoji = undefined;
  ({ containerWidth, reactionEmojiWidth, digitWidth } = message);
  if (parentChannel != null) {
    defaultReactionEmoji = parentChannel.defaultReactionEmoji;
  }
  let obj = defaultReactionEmoji(589);
  let items = [getEmojiToGroupId];
  let animated = obj.useStateFromStores(items, () => {
    let emojiId;
    if (defaultReactionEmoji != null) {
      emojiId = tmp.emojiId;
    }
    let usableCustomEmojiById = null;
    if (null != emojiId) {
      usableCustomEmojiById = outer1_5.getUsableCustomEmojiById(tmp.emojiId);
    }
    return usableCustomEmojiById;
  });
  if (null == defaultReactionEmoji) {
    let reactions;
    if (message != null) {
      reactions = message.reactions;
    }
    const items1 = [reactions];
    const memo = React.useMemo(() => {
      let reactions;
      if (defaultReactionEmoji != null) {
        reactions = defaultReactionEmoji.reactions;
      }
      if (reactions == null) {
        reactions = [];
      }
      const items = [(count) => count.count + count.burst_count, (burst_count) => burst_count.burst_count];
      return outer1_1(outer1_2[23]).orderBy(reactions, items, ["desc", "desc"]);
    }, items1);
    let items2 = [];
    if (null != null) {
      obj = { emoji: null, me: false, count: 0, burst_count: 0, me_burst: false };
      obj[0] = null;
      const items3 = [obj];
      items2 = items3;
    }
    if (memo.length > 0) {
      items2 = memo;
    }
    let num3 = 0;
    let num4 = 0;
    let num5 = 0;
    let num6 = 0;
    if (0 < items2.length) {
      while (true) {
        let tmp7 = items2[num3];
        let tmp8 = num3;
        let tmp9 = num4;
        let tmp10 = num5;
        let _Math = Math;
        let _Math2 = Math;
        let sum = reactionEmojiWidth + digitWidth * Math.ceil(Math.log10((tmp7.burst_count > 0 ? tmp7.burst_count : tmp7.count) + 1));
        num6 = num5;
        if (num4 + sum >= containerWidth) {
          break;
        } else {
          num4 = num4 + sum;
          num5 = num5 + 1;
          num3 = num3 + 1;
          num6 = num5;
          if (num3 >= items2.length) {
            break;
          }
        }
      }
    }
    const diff = items2.length - num6;
    let diff1 = num6;
    let sum1 = diff;
    if (0 < diff) {
      diff1 = num6 - 1;
      sum1 = diff + 1;
    }
    obj = { reactions: null, additionalReactionCount: null };
    obj[0] = items2.slice(0, diff1);
    obj[1] = sum1;
    return obj;
  } else {
    if (null == defaultReactionEmoji.emojiId) {
      let tmp2 = null;
      if (null != defaultReactionEmoji.emojiName) {
        ({ emojiId: obj2[0], emojiName: obj2[1] } = defaultReactionEmoji);
        tmp2 = { id: null, name: null, animated: false };
        const obj1 = { id: null, name: null, animated: false };
      }
    }
    const obj2 = { id: null, name: null, animated: null };
    obj2[0] = defaultReactionEmoji.emojiId;
    defaultReactionEmoji = animated.name;
    obj2[1] = defaultReactionEmoji;
    animated = animated.animated;
    obj2[2] = animated;
    tmp2 = obj2;
  }
};
export const useMessageCount = function useMessageCount(thread) {
  const _require = thread;
  let obj = _require(589);
  let items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let num = outer1_8.getCount(thread.id);
    if (num == null) {
      num = 0;
    }
    return num;
  });
  const messageCountText = _require(7852).getMessageCountText(stateFromStores, thread.id);
  const obj2 = _require(7852);
  const items1 = [generateOldThreadCutoff];
  const dependencyMap = _require(589).useStateFromStores(items1, () => {
    const items = [outer1_13];
    return thread(table[21]).canDisplayPostUnreadMessageCount(thread.id, items);
  });
  const obj3 = _require(589);
  const items2 = [set];
  obj = { messageCount: stateFromStores, isMaxMessageCount: null, messageCountText: null, unreadCount: null };
  let tmp4 = null != stateFromStores;
  const stateFromStores1 = _require(589).useStateFromStores(items2, () => {
    if (closure_2) {
      const count = outer1_17.getCount(thread.id);
      if (null != count) {
        if (count > 0) {
          const _Math = Math;
          let bound = Math.min(count, stateFromStores);
          if (bound >= outer1_25) {
            const _HermesInternal = HermesInternal;
            bound = "" + tmp9 + "+";
          }
          return bound;
        }
      }
      return "1+";
    } else {
      return null;
    }
  });
  if (tmp4) {
    let _HermesInternal = HermesInternal;
    tmp4 = "" + stateFromStores !== messageCountText;
  }
  obj[1] = tmp4;
  obj[2] = messageCountText;
  obj[3] = stateFromStores1;
  return obj;
};
export const useForumPostMessageAuthor = function useForumPostMessageAuthor(message, thread) {
  let id;
  if (message != null) {
    const author = message.author;
    if (author != null) {
      id = author.id;
    }
  }
  const guildId = thread.getGuildId();
  let obj = id(589);
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_14.getUser(id));
  const nullableMessageAuthor = id(4484).useNullableMessageAuthor(message);
  const items1 = [guildId, id];
  const effect = React.useEffect(() => {
    let tmp2 = null != id;
    if (tmp2) {
      tmp2 = null != guildId;
    }
    if (tmp2) {
      const member = outer1_10.requestMember(guildId, id);
    }
  }, items1);
  let nick;
  if (nullableMessageAuthor != null) {
    nick = nullableMessageAuthor.nick;
  }
  if (nick == null) {
    let username;
    if (stateFromStores != null) {
      username = stateFromStores.username;
    }
    nick = username;
  }
  obj = { authorName: nick, authorColor: null, authorColors: null, user: null };
  let colorString;
  if (nullableMessageAuthor != null) {
    colorString = nullableMessageAuthor.colorString;
  }
  if (colorString == null) {
    colorString = null;
  }
  obj[1] = colorString;
  let colorStrings;
  if (nullableMessageAuthor != null) {
    colorStrings = nullableMessageAuthor.colorStrings;
  }
  if (colorStrings == null) {
    colorStrings = null;
  }
  obj[2] = colorStrings;
  obj[3] = stateFromStores;
  return obj;
};
export const useForumPostAuthor = function useForumPostAuthor(thread) {
  const _require = thread;
  const items = [mergeGuildAvatar];
  const user = _require(589).useStateFromStores(items, () => outer1_14.getUser(thread.ownerId));
  const obj = _require(589);
  const items1 = [handleLoadThreadsSuccess];
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => {
    const message = outer1_16.getMessage(thread.id);
    let firstMessage;
    if (message != null) {
      firstMessage = message.firstMessage;
    }
    return firstMessage;
  });
  const obj2 = _require(589);
  let author;
  if (stateFromStores1 != null) {
    author = stateFromStores1.author;
  }
  if (author == null) {
    author = user;
  }
  const items2 = [, ];
  ({ guild_id: arr3[0], ownerId: arr3[1] } = thread);
  author = _require(4484).useNullableUserAuthor(author, thread);
  const effect = React.useEffect(() => {
    if (null != thread.ownerId) {
      const member = outer1_10.requestMember(tmp.guild_id, tmp.ownerId);
    }
  }, items2);
  return { user, author };
};
export const getForumPostAuthor = function getForumPostAuthor(ownerId) {
  user = user.getUser(ownerId.ownerId);
  message = message.getMessage(ownerId.id);
  let firstMessage;
  if (message != null) {
    firstMessage = message.firstMessage;
  }
  const obj = { user, author: null };
  let author;
  if (firstMessage != null) {
    author = firstMessage.author;
  }
  if (author == null) {
    author = user;
  }
  obj[1] = require(4484) /* useNullableMessageAuthor */.getUserAuthor(author, ownerId);
  return obj;
};
export const useForumPostFirstMessageMarkup = function useForumPostFirstMessageMarkup(firstMessage) {
  firstMessage = firstMessage.firstMessage;
  let flag = firstMessage.formatInline;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = firstMessage.noStyleAndInteraction;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = firstMessage.hasUnreads;
  if (flag3 === undefined) {
    flag3 = true;
  }
  let str;
  str = "text-muted";
  if (flag3) {
    str = "text-default";
  }
  const items = [firstMessage, flag, flag2, str];
  const memo = React.useMemo(() => {
    let content;
    if (firstMessage != null) {
      content = tmp.content;
    }
    if (null != content) {
      if ("" !== tmp.content) {
        const obj = { formatInline: null, noStyleAndInteraction: null, allowHeading: true, allowList: true, allowGameMentions: true, textColor: null, disablePressableChannelMention: true };
        obj[0] = flag;
        obj[1] = flag2;
        obj[5] = str;
        flag(flag2[31])(tmp, obj);
      }
      return { hasSpoilerEmbeds: false, content: null };
    }
  }, items);
  const hasSpoilerEmbeds = memo.hasSpoilerEmbeds;
  let obj = { hasSpoilerEmbeds, content: memo.content, firstMedia: null, firstMediaIsEmbed: null };
  obj[2] = firstMessage(flag2[32]).useFindFirstMediaProperties(firstMessage, hasSpoilerEmbeds);
  const obj2 = firstMessage(flag2[32]);
  obj[3] = firstMessage(flag2[32]).useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds);
  return obj;
};
export const useCanManageChannel = function useCanManageChannel(channel) {
  const _require = channel;
  const items = [getUncachedChannelPermissions];
  return _require(589).useStateFromStores(items, () => outer1_12.can(outer1_23.MANAGE_CHANNELS, closure_0));
};
export const useForumPostReadStates = function useForumPostReadStates(stateFromStores) {
  const _require = stateFromStores;
  let items = [createGuildRecordFromRust, generateOldThreadCutoff];
  return _require(589).useStateFromStoresObject(items, () => {
    let guildId = stateFromStores.getGuildId();
    if (guildId == null) {
      guildId = outer1_22;
    }
    const guild = outer1_11.getGuild(guildId);
    if (null == guild) {
      let forumPostReadStates = outer1_26;
    } else {
      const items = [outer1_13];
      forumPostReadStates = stateFromStores(outer1_2[21]).getForumPostReadStates(stateFromStores, guild, items);
      const obj = stateFromStores(outer1_2[21]);
    }
    return forumPostReadStates;
  });
};
export const useChannelTemplate = function useChannelTemplate(parentChannel) {
  let closure_0 = parentChannel;
  const items = [parentChannel];
  return React.useMemo(() => {
    let str = "";
    if (null != closure_0) {
      str = "";
      if (null != tmp.template) {
        str = tmp.template.trim();
        const str2 = tmp.template;
      }
    }
    return str;
  }, items);
};
export const useForumThreadsForChannelList = function useForumThreadsForChannelList(arg0) {
  const _require = arg0;
  let obj = _require(589);
  const items = [rebuild];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ activeJoinedThreads: outer1_6.getActiveJoinedThreadsForGuild(closure_0), activeUnjoinedThreads: outer1_6.getActiveUnjoinedThreadsForGuild(closure_0), newThreadCounts: outer1_6.getNewThreadCountsForGuild(closure_0) }));
  obj = { activeJoinedThreads: stateFromStoresObject.activeJoinedThreads, activeUnjoinedThreads: stateFromStoresObject.activeUnjoinedThreads, newThreadCounts: stateFromStoresObject.newThreadCounts };
  return obj;
};
export const useCanSearchForumPosts = function useCanSearchForumPosts(channel) {
  const _require = channel;
  const items = [getUncachedChannelPermissions];
  return _require(589).useStateFromStores(items, () => outer1_12.can(outer1_23.READ_MESSAGE_HISTORY, closure_0));
};
export const useCanViewArchivedPosts = function useCanViewArchivedPosts(channel) {
  const _require = channel;
  const items = [getUncachedChannelPermissions];
  return _require(589).useStateFromStores(items, () => outer1_12.can(outer1_23.READ_MESSAGE_HISTORY, closure_0));
};
export const useForumSearchQuery = function useForumSearchQuery(channelId) {
  channelId = channelId.channelId;
  const items = [initialize];
  return channelId(589).useStateFromStores(items, () => {
    let searchQuery = null;
    if (null != channelId) {
      searchQuery = outer1_18.getSearchQuery(tmp);
    }
    return searchQuery;
  });
};
export const useForumSearchState = function useForumSearchState(channelId) {
  channelId = channelId.channelId;
  const items = [initialize];
  return channelId(589).useStateFromStoresObject(items, () => ({ isSearchLoading: outer1_18.getSearchLoading(closure_0), searchQuery: outer1_18.getSearchQuery(closure_0), searchResults: outer1_18.getSearchResults(closure_0) }));
};
export const useHasForumSearchQuery = function useHasForumSearchQuery(channelId) {
  const _require = channelId;
  const items = [initialize];
  return _require(589).useStateFromStores(items, () => null != outer1_18.getSearchQuery(closure_0));
};
export const useAutomaticForumSearch = function useAutomaticForumSearch(channel, tagFilter, tagSetting) {
  let _require = channel;
  let closure_1 = tagFilter;
  const dependencyMap = tagSetting;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let isSearchLoading;
  let searchQuery;
  let stateFromStores;
  let handleThreadCreateOrUpdate;
  let closure_8;
  _require = channel.id;
  const items = [initialize];
  const stateFromStoresObject = _require(589).useStateFromStoresObject(items, () => ({ isSearchLoading: outer1_18.getSearchLoading(closure_0), searchQuery: outer1_18.getSearchQuery(closure_0), searchResults: outer1_18.getSearchResults(closure_0) }));
  isSearchLoading = stateFromStoresObject.isSearchLoading;
  searchQuery = stateFromStoresObject.searchQuery;
  _require = channel;
  let obj = _require(589);
  const items1 = [getUncachedChannelPermissions];
  stateFromStores = _require(589).useStateFromStores(items1, () => outer1_12.can(outer1_23.READ_MESSAGE_HISTORY, closure_0));
  handleThreadCreateOrUpdate = isSearchLoading.useRef(null);
  const obj2 = _require(589);
  closure_8 = isSearchLoading.useRef(new Set());
  const items2 = [stateFromStores, , , , , , , ];
  ({ guild_id: arr3[1], id: arr3[2] } = channel);
  items2[3] = flag;
  items2[4] = isSearchLoading;
  items2[5] = searchQuery;
  items2[6] = tagFilter;
  items2[7] = tagSetting;
  const effect = isSearchLoading.useEffect(() => {
    if (null == searchQuery) {
      if (null != ref.current) {
        tagFilter(tagSetting[33]).clearForumSearch(user.id);
        tmp.current = null;
      }
    }
    if (null != searchQuery) {
      if (0 !== arr.length) {
        if (!flag) {
          if (stateFromStores) {
            if (ref.current !== arr) {
              if (!isSearchLoading) {
                const _setTimeout = setTimeout;
                user = setTimeout(flag(function*() {
                  if (c0 === 2) {
                    c0 = 3;
                    HermesBuiltin.throwTypeError();
                  } else if (tmp5 === 3) {
                    if (arg0 === 1) {
                      throw arg1;
                    } else if (arg0 === 2) {
                      let obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      return { value: "HermesInternal", done: null };
                    }
                  } else {
                    try {
                      c0 = 2;
                      if (0 === c1) {
                        if (arg0 === 1) {
                          c0 = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          c0 = 3;
                          obj = { value: null, done: true };
                          obj[0] = arg1;
                          return obj;
                        } else {
                          outer1_7.current = outer1_5;
                          outer1_8.current = c1;
                          let c2 = 1;
                          let obj1 = outer2_1(outer2_2[33]);
                          c1 = 2;
                          c0 = 1;
                          obj1 = { value: null, done: false };
                          obj1[0] = obj1.searchForumPosts(c0.guild_id, c0.id, outer1_5, c1, c2);
                          return obj1;
                        }
                      } else {
                        if (1 === tmp6) {
                          c2 = 0;
                          c0 = 3;
                        } else if (arg0 === 1) {
                          c0 = 3;
                          throw arg1;
                        } else if (arg0 !== 2) {
                          c2 = 0;
                        }
                        c2 = 0;
                        c0 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      }
                    } catch (tmp18) {
                      if (tmp3 === c2) {
                        c0 = tmp2;
                        throw tmp18;
                      } else {
                        c1 = tmp;
                      }
                    }
                  }
                }), 350);
                return () => clearTimeout(closure_0);
              }
            }
          } else {
            tagFilter(tagSetting[33]).clearForumSearch(user.id);
            let obj = tagFilter(tagSetting[33]);
          }
        }
      }
    }
  }, items2);
};
export const useUnreadThreadsCountForParent = function useUnreadThreadsCountForParent(guild_id, id) {
  const _require = guild_id;
  let closure_1 = id;
  const items = [rebuild, generateOldThreadCutoff, ensureGuildLoaded];
  return _require(589).useStateFromStores(items, () => {
    const channel = outer1_9.getChannel(closure_1);
    let isForumLikeChannelResult;
    if (channel != null) {
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
    if (isForumLikeChannelResult) {
      const activeJoinedUnreadThreadsForParent = stateFromStores1.getActiveJoinedUnreadThreadsForParent(channel, tmp2);
      const activeUnjoinedUnreadThreadsForParent = stateFromStores1.getActiveUnjoinedUnreadThreadsForParent(channel, tmp2);
      const ackMessageIdResult = outer1_13.ackMessageId(tmp2);
      if (null == ackMessageIdResult) {
        return 0;
      } else {
        let num3 = 0;
        let num2 = 0;
        const keys = Object.keys();
        if (keys !== undefined) {
          num2 = num3;
          while (keys[tmp] !== undefined) {
            let tmp22 = tmp11;
            let tmp23 = outer1_13;
            let lastMessageIdResult = outer1_13.lastMessageId(activeJoinedUnreadThreadsForParent[tmp11].channel.id);
            let tmp12 = null != lastMessageIdResult && lastMessageIdResult > ackMessageIdResult;
            if (!tmp12) {
              continue;
            } else {
              num3 = tmp10 + 1;
              continue;
            }
            continue;
          }
        }
        let sum = num2;
        let tmp15 = num2;
        const keys1 = Object.keys();
        if (keys1 !== undefined) {
          tmp15 = sum;
          while (keys1[tmp] !== undefined) {
            let tmp25 = tmp18;
            let tmp26 = outer1_13;
            let lastMessageIdResult1 = outer1_13.lastMessageId(activeUnjoinedUnreadThreadsForParent[tmp18].id);
            let tmp19 = null != lastMessageIdResult1 && lastMessageIdResult1 > ackMessageIdResult;
            if (!tmp19) {
              continue;
            } else {
              sum = tmp17 + 1;
              continue;
            }
            continue;
          }
        }
        return tmp15;
      }
    } else {
      return 0;
    }
  });
};
export const useForumActiveThreadIds = function useForumActiveThreadIds(channel) {
  let updateState;
  let dependencyMap;
  let importDefault;
  let shouldAutomaticallyAck;
  channel = channel.channel;
  ({ sortOrder: importDefault, tagFilter: dependencyMap, tagSetting: updateState, shouldAutomaticallyAck } = channel);
  let stateFromStores;
  let stateFromStores1;
  const items = [maybeRebuildState];
  ({ guild_id: channel, id: importDefault } = channel);
  const stateFromStoresArray = channel(589).useStateFromStoresArray(items, () => outer1_15.getThreadIds(channel.id, closure_1, closure_2, updateState));
  let obj = channel(589);
  const items1 = [stateFromStores1, generateOldThreadCutoff, ensureGuildLoaded];
  stateFromStores = channel(589).useStateFromStores(items1, () => {
    const channel = outer1_9.getChannel(closure_1);
    let isForumLikeChannelResult;
    if (channel != null) {
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
    if (isForumLikeChannelResult) {
      const activeJoinedUnreadThreadsForParent = stateFromStores1.getActiveJoinedUnreadThreadsForParent(channel, tmp2);
      const activeUnjoinedUnreadThreadsForParent = stateFromStores1.getActiveUnjoinedUnreadThreadsForParent(channel, tmp2);
      const ackMessageIdResult = outer1_13.ackMessageId(tmp2);
      if (null == ackMessageIdResult) {
        return 0;
      } else {
        let num3 = 0;
        let num2 = 0;
        const keys = Object.keys();
        if (keys !== undefined) {
          num2 = num3;
          while (keys[tmp] !== undefined) {
            let tmp22 = tmp11;
            let tmp23 = outer1_13;
            let lastMessageIdResult = outer1_13.lastMessageId(activeJoinedUnreadThreadsForParent[tmp11].channel.id);
            let tmp12 = null != lastMessageIdResult && lastMessageIdResult > ackMessageIdResult;
            if (!tmp12) {
              continue;
            } else {
              num3 = tmp10 + 1;
              continue;
            }
            continue;
          }
        }
        let sum = num2;
        let tmp15 = num2;
        const keys1 = Object.keys();
        if (keys1 !== undefined) {
          tmp15 = sum;
          while (keys1[tmp] !== undefined) {
            let tmp25 = tmp18;
            let tmp26 = outer1_13;
            let lastMessageIdResult1 = outer1_13.lastMessageId(activeUnjoinedUnreadThreadsForParent[tmp18].id);
            let tmp19 = null != lastMessageIdResult1 && lastMessageIdResult1 > ackMessageIdResult;
            if (!tmp19) {
              continue;
            } else {
              sum = tmp17 + 1;
              continue;
            }
            continue;
          }
        }
        return tmp15;
      }
    } else {
      return 0;
    }
  });
  const obj2 = channel(589);
  const items2 = [maybeRebuildState];
  const items3 = [shouldAutomaticallyAck, stateFromStores];
  stateFromStores1 = channel(589).useStateFromStores(items2, () => {
    let tmp = shouldAutomaticallyAck;
    if (shouldAutomaticallyAck) {
      let canAckThreads = stateFromStores > 0;
      if (!canAckThreads) {
        canAckThreads = outer1_15.getCanAckThreads();
      }
      tmp = canAckThreads;
    }
    return tmp;
  }, items3);
  const items4 = [channel, stateFromStores1];
  const effect = shouldAutomaticallyAck.useEffect(() => {
    if (stateFromStores1) {
      let obj = channel(outer1_2[34]);
      obj = { object: null, objectType: null };
      obj[0] = outer1_21.ACK_FORUM_ACTIVE_THREADS;
      obj[1] = outer1_20.ACK_AUTOMATIC;
      obj.ackChannel(channel, obj);
    }
  }, items4);
  return stateFromStoresArray;
};