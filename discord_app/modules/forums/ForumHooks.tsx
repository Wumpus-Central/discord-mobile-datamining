// discord_app/modules/forums/ForumHooks.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import ThreadSortOrder from "../../../discord_common/js/shared/shared-constants/ThreadSortOrder.tsx";
import useMessageAuthor from "../messages/useMessageAuthor.tsx";
import ReadStateActionCreators from "../../actions/ReadStateActionCreators.tsx";
import ForumUtils from "ForumUtils.tsx";
import renderMessageMarkupDefault from "../messages/renderMessageMarkup.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import EmojiStore from "../emojis/EmojiStore.tsx";
import ActiveJoinedThreadsStore from "../threads/ActiveJoinedThreadsStore.tsx";
import ActiveThreadsStore from "../threads/ActiveThreadsStore.tsx";
import ThreadMessageStore from "../threads/ThreadMessageStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberRequesterStore from "../../stores/GuildMemberRequesterStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ForumActivePostStore from "ForumActivePostStore.tsx";
import ForumPostMessagesStore from "ForumPostMessagesStore.tsx";
import ForumPostUnreadCountStore from "ForumPostUnreadCountStore.tsx";
import ForumSearchStore from "ForumSearchStore.tsx";

require = fn;
const ForumTimestampFormats = fn(7273).ForumTimestampFormats;
const Constants = fn(1074);
({
  AnalyticsObjectTypes: closure_20,
  AnalyticsObjects: closure_21,
  EMPTY_STRING_SNOWFLAKE_ID: closure_22,
  Permissions: closure_23,
} = Constants);
const ChannelFlags = fn(1964).ChannelFlags;
let closure_25 = fn(1113).MAX_THREAD_UNREAD_MESSAGE_COUNT;
let closure_26 = { isNew: false, hasUnreads: false };
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/ForumHooks.tsx");

export const useLoadForumUnreadCounts = function useLoadForumUnreadCounts(channel, sortOrder, tagFilter, tagSetting) {
  _require = channel;
  closure_1 = sortOrder;
  dependencyMap = tagFilter;
  closure_3 = tagSetting;
  let items = [ActiveThreadsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    ActiveThreadsStore.hasLoaded(channel.guild_id),
  );
  const items1 = [, , , , ,];
  ({ id: arr2[0], guild_id: arr2[1] } = channel);
  items1[2] = stateFromStores;
  items1[3] = tagFilter;
  items1[4] = sortOrder;
  items1[5] = tagSetting;
  const effect = stateFromStores.useEffect(() => {
    if (stateFromStores) {
      const threadIdsMissingCounts = ForumPostUnreadCountStore.getThreadIdsMissingCounts(
        channel.guild_id,
        ForumActivePostStore.getThreadIds(channel.id, closure_1, closure_2, closure_3),
      );
      const found = threadIdsMissingCounts.filter((item) => {
        const items = [trackedAckMessageId];
        return channel(tagFilter[21]).canDisplayPostUnreadMessageCount(item, items);
      });
      const substr = found.slice(0, 180);
      const mapped = substr.map((threadId) => ({
        threadId,
        ackMessageId: trackedAckMessageId.getTrackedAckMessageId(threadId),
      }));
      if (mapped.length > 0) {
        const obj = { type: "REQUEST_FORUM_UNREADS", guildId: null, channelId: null, threads: null };
        ({ guild_id: obj2.guildId, id: obj2.channelId } = tmp2);
        obj.threads = mapped;
        obj.dispatch(obj);
      }
      tmp2 = channel;
    }
  }, items1);
};
export const useExistingPin = function useExistingPin(thread) {
  _require = thread;
  const items = [ActiveThreadsStore, ChannelStore];
  return require("initialize").useStateFromStores(items, () => {
    const keys = _modDef12(ActiveThreadsStore.getThreadsForParent(thread.guild_id, thread.parent_id)).keys();
    const found = keys.filter((item) => {
      channel = channel.getChannel(item);
      let hasFlagResult;
      if (channel != null) {
        hasFlagResult = channel.hasFlag(constants.PINNED);
      }
      return true === hasFlagResult;
    });
    return ChannelStore.getChannel(found.head());
  });
};
export const useFacepileUsers = function useFacepileUsers(thread, typingUserIds) {
  _require = thread;
  importDefault = typingUserIds;
  const items = [UserStore];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const mapped = typingUserIds.map((item) => user.getUser(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  require("useMountEffect")(() => {
    const item = stateFromStoresArray.forEach((id) => {
      const member = GuildMemberRequesterStore.requestMember(guild_id.guild_id, id.id);
    });
  });
  return stateFromStoresArray;
};
export const useLastActiveTimestamp = function useLastActiveTimestamp(thread, sortOrder, format) {
  _require = thread;
  closure_1 = sortOrder;
  let DURATION_AGO = format;
  if (format === undefined) {
    DURATION_AGO = ForumTimestampFormats.DURATION_AGO;
  }
  let lastMessageTimestamp;
  const items = [thread.id];
  const memo = lastMessageTimestamp.useMemo(() => SnowflakeUtilsDefault.extractTimestamp(thread.id), items);
  lastMessageTimestamp = require("ThreadUtils").useLastMessageTimestamp(thread);
  const items1 = [sortOrder, DURATION_AGO];
  const memo1 = lastMessageTimestamp.useMemo(
    () => ForumUtils.getForumTimestampFormatter(closure_1, DURATION_AGO),
    items1,
  );
  const items2 = [lastMessageTimestamp, sortOrder, memo, memo1];
  return lastMessageTimestamp.useMemo(() => {
    if (closure_1 === ThreadSortOrder.ThreadSortOrder.CREATION_DATE) {
      let tmpResult = tmp(7781);
      let timestampString = tmpResult.getTimestampString(memo, memo1);
    } else {
      tmpResult = tmp(7781);
      timestampString = tmpResult.getTimestampString(lastMessageTimestamp, memo1);
    }
    return timestampString;
  }, items2);
};
export const useMostUsedReaction = function useMostUsedReaction(reactions) {
  reactions = undefined;
  if (reactions != null) {
    reactions = reactions.reactions;
  }
  let items = [reactions];
  return noop.useMemo(() => {
    reactions = undefined;
    if (reactions != null) {
      reactions = reactions.reactions;
    }
    if (reactions == null) {
      reactions = [];
    }
    if (0 !== reactions.length) {
      const items = [(count) => count.count + count.burst_count, (burst_count) => burst_count.burst_count];
      return _modDef12.orderBy(reactions, items, ["desc", "desc"])[0];
    }
  }, items);
};
export const useDefaultReactionEmoji = function useDefaultReactionEmoji(defaultReactionEmoji) {
  defaultReactionEmoji = undefined;
  if (defaultReactionEmoji != null) {
    defaultReactionEmoji = defaultReactionEmoji.defaultReactionEmoji;
  }
  let obj = defaultReactionEmoji(504);
  const items = [EmojiStore];
  let animated = obj.useStateFromStores(items, () => {
    let emojiId;
    if (message != null) {
      emojiId = tmp.emojiId;
    }
    let usableCustomEmojiById = null;
    if (null != emojiId) {
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp.emojiId);
    }
    return usableCustomEmojiById;
  });
  if (null == defaultReactionEmoji) {
    return null;
  } else {
    if (null == defaultReactionEmoji.emojiId) {
      if (null != defaultReactionEmoji.emojiName) {
        obj = { id: null, name: null, animated: false };
        ({ emojiId: obj2.id, emojiName: obj2.name } = defaultReactionEmoji);
      }
    }
    obj = { id: defaultReactionEmoji.emojiId, name: null, animated: null };
    defaultReactionEmoji = animated.name;
    obj.name = defaultReactionEmoji;
    animated = animated.animated;
    obj.animated = animated;
  }
};
export const useSomeForumPostReactions = function useSomeForumPostReactions(message) {
  message = message.message;
  ({ parentChannel, count } = message);
  if (count === undefined) {
    count = 1;
  }
  let flag = message.sorted;
  if (flag === undefined) {
    flag = true;
  }
  closure_129_0 = undefined;
  let defaultReactionEmoji;
  if (parentChannel != null) {
    defaultReactionEmoji = parentChannel.defaultReactionEmoji;
  }
  closure_129_0 = defaultReactionEmoji;
  let obj = message(504);
  let items = [EmojiStore];
  let animated = obj.useStateFromStores(items, () => {
    let emojiId;
    if (message != null) {
      emojiId = tmp.emojiId;
    }
    let usableCustomEmojiById = null;
    if (null != emojiId) {
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp.emojiId);
    }
    return usableCustomEmojiById;
  });
  if (null == defaultReactionEmoji) {
    let reactions;
    if (message != null) {
      reactions = message.reactions;
    }
    const items1 = [reactions, flag];
    const memo = noop.useMemo(() => {
      let reactions;
      if (message != null) {
        reactions = message.reactions;
      }
      if (reactions == null) {
        reactions = [];
      }
      let orderByResult = reactions;
      if (flag) {
        const items = [(count) => count.count + count.burst_count, (burst_count) => burst_count.burst_count];
        orderByResult = _modDef12.orderBy(reactions, items, ["desc", "desc"]);
      }
      return orderByResult;
    }, items1);
    let items2 = [];
    if (null != null) {
      obj = { emoji: null, me: false, count: 0, burst_count: 0, me_burst: false };
      const items3 = [obj];
      items2 = items3;
    }
    if (memo.length > 0) {
      items2 = memo;
    }
    obj = { reactions: items2.slice(0, count), additionalNonUniqueReactionCount: null };
    const substr = items2.slice(count, items2.length);
    obj.additionalNonUniqueReactionCount = flag(12).sum(substr.map((count) => count.count + count.burst_count));
    return obj;
  } else {
    if (null == defaultReactionEmoji.emojiId) {
      if (null != defaultReactionEmoji.emojiName) {
        ({ emojiId: obj2.id, emojiName: obj2.name } = defaultReactionEmoji);
        const tmp3 = { id: null, name: null, animated: false };
        const obj1 = { id: null, name: null, animated: false };
      }
    }
    const obj2 = { id: defaultReactionEmoji.emojiId, name: null, animated: null };
    defaultReactionEmoji = animated.name;
    obj2.name = defaultReactionEmoji;
    animated = animated.animated;
    obj2.animated = animated;
  }
};
export const useMaxPossibleForumPostReactions = function useMaxPossibleForumPostReactions(message) {
  message = message.message;
  const parentChannel = message.parentChannel;
  closure_129_0 = undefined;
  let defaultReactionEmoji;
  ({ containerWidth, reactionEmojiWidth, digitWidth } = message);
  if (parentChannel != null) {
    defaultReactionEmoji = parentChannel.defaultReactionEmoji;
  }
  closure_129_0 = defaultReactionEmoji;
  let obj = message(504);
  let items = [EmojiStore];
  let animated = obj.useStateFromStores(items, () => {
    let emojiId;
    if (message != null) {
      emojiId = tmp.emojiId;
    }
    let usableCustomEmojiById = null;
    if (null != emojiId) {
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp.emojiId);
    }
    return usableCustomEmojiById;
  });
  if (null == defaultReactionEmoji) {
    let reactions;
    if (message != null) {
      reactions = message.reactions;
    }
    const items1 = [reactions];
    const memo = noop.useMemo(() => {
      let reactions;
      if (message != null) {
        reactions = message.reactions;
      }
      if (reactions == null) {
        reactions = [];
      }
      const items = [(count) => count.count + count.burst_count, (burst_count) => burst_count.burst_count];
      return _modDef12.orderBy(reactions, items, ["desc", "desc"]);
    }, items1);
    let items2 = [];
    if (null != null) {
      obj = { emoji: null, me: false, count: 0, burst_count: 0, me_burst: false };
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
        let _Math = Math;
        let _Math2 = Math;
        let sum =
          reactionEmojiWidth +
          digitWidth * Math.ceil(Math.log10((tmp7.burst_count > 0 ? tmp7.burst_count : tmp7.count) + 1));
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
    obj = { reactions: items2.slice(0, diff1), additionalReactionCount: sum1 };
    return obj;
  } else {
    if (null == defaultReactionEmoji.emojiId) {
      if (null != defaultReactionEmoji.emojiName) {
        ({ emojiId: obj2.id, emojiName: obj2.name } = defaultReactionEmoji);
        const tmp2 = { id: null, name: null, animated: false };
        const obj1 = { id: null, name: null, animated: false };
      }
    }
    const obj2 = { id: defaultReactionEmoji.emojiId, name: null, animated: null };
    defaultReactionEmoji = animated.name;
    obj2.name = defaultReactionEmoji;
    animated = animated.animated;
    obj2.animated = animated;
  }
};
export const useMessageCount = function useMessageCount(thread) {
  _require = thread;
  let obj = require("initialize");
  let items = [ThreadMessageStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let num = ThreadMessageStore.getCount(thread.id);
    if (num == null) {
      num = 0;
    }
    return num;
  });
  const messageCountText = require("MessageCountUtils").getMessageCountText(stateFromStores, thread.id);
  const obj2 = require("MessageCountUtils");
  const items1 = [ReadStateStore];
  dependencyMap = require("initialize").useStateFromStores(items1, () => {
    const items = [ReadStateStore];
    return ForumUtils.canDisplayPostUnreadMessageCount(thread.id, items);
  });
  const obj3 = require("initialize");
  const items2 = [ForumPostUnreadCountStore];
  obj = { messageCount: stateFromStores, isMaxMessageCount: null, messageCountText: null, unreadCount: null };
  let tmp4 = null != stateFromStores;
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    if (closure_2) {
      const count = ForumPostUnreadCountStore.getCount(thread.id);
      if (null != count) {
        if (count > 0) {
          const _Math = Math;
          let bound = Math.min(count, stateFromStores);
          if (bound >= closure_25) {
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
  obj.isMaxMessageCount = tmp4;
  obj.messageCountText = messageCountText;
  obj.unreadCount = stateFromStores1;
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
  let obj = id(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(id));
  const nullableMessageAuthor = id(4793).useNullableMessageAuthor(message);
  const items1 = [guildId, id];
  const effect = noop.useEffect(() => {
    let tmp2 = null != id;
    if (tmp2) {
      tmp2 = null != guildId;
    }
    if (tmp2) {
      const member = GuildMemberRequesterStore.requestMember(guildId, id);
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
  obj.authorColor = colorString;
  let colorStrings;
  if (nullableMessageAuthor != null) {
    colorStrings = nullableMessageAuthor.colorStrings;
  }
  if (colorStrings == null) {
    colorStrings = null;
  }
  obj.authorColors = colorStrings;
  obj.user = stateFromStores;
  return obj;
};
export const useForumPostAuthor = function useForumPostAuthor(thread) {
  _require = thread;
  const items = [UserStore];
  const user = require("initialize").useStateFromStores(items, () => UserStore.getUser(thread.ownerId));
  const obj = require("initialize");
  const items1 = [ForumPostMessagesStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    const message = ForumPostMessagesStore.getMessage(thread.id);
    let firstMessage;
    if (message != null) {
      firstMessage = message.firstMessage;
    }
    return firstMessage;
  });
  const obj2 = require("initialize");
  let author;
  if (stateFromStores1 != null) {
    author = stateFromStores1.author;
  }
  if (author == null) {
    author = user;
  }
  const items2 = [,];
  ({ guild_id: arr3[0], ownerId: arr3[1] } = thread);
  author = require("useMessageAuthor").useNullableUserAuthor(author, thread);
  const effect = noop.useEffect(() => {
    if (null != thread.ownerId) {
      const member = GuildMemberRequesterStore.requestMember(tmp.guild_id, tmp.ownerId);
    }
  }, items2);
  return { user, author };
};
export const getForumPostAuthor = function getForumPostAuthor(ownerId) {
  const user = UserStore.getUser(ownerId.ownerId);
  const message = ForumPostMessagesStore.getMessage(ownerId.id);
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
  obj.author = useMessageAuthor.getUserAuthor(author, ownerId);
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
  let str = "text-muted";
  if (flag3) {
    str = "text-default";
  }
  const items = [firstMessage, flag, flag2, str];
  const memo = noop.useMemo(() => {
    let content;
    if (firstMessage != null) {
      content = tmp.content;
    }
    if (null != content) {
      if ("" !== tmp.content) {
        const obj = {
          formatInline: flag,
          noStyleAndInteraction: flag2,
          allowHeading: true,
          allowList: true,
          allowGameMentions: true,
          textColor: str,
          disablePressableChannelMention: true,
        };
        renderMessageMarkupDefault(tmp, obj);
      }
      return { hasSpoilerEmbeds: false, content: null };
    }
  }, items);
  const hasSpoilerEmbeds = memo.hasSpoilerEmbeds;
  let obj = {
    hasSpoilerEmbeds,
    content: memo.content,
    firstMedia: firstMessage(flag2[32]).useFindFirstMediaProperties(firstMessage, hasSpoilerEmbeds),
    firstMediaIsEmbed: null,
  };
  const obj2 = firstMessage(flag2[32]);
  obj.firstMediaIsEmbed = firstMessage(flag2[32]).useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds);
  return obj;
};
export const useCanManageChannel = function useCanManageChannel(channel) {
  _require = channel;
  const items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () =>
    PermissionStore.can(constants3.MANAGE_CHANNELS, closure_0),
  );
};
export const useForumPostReadStates = function useForumPostReadStates(stateFromStores) {
  _require = stateFromStores;
  let items = [GuildStore, ReadStateStore];
  return require("initialize").useStateFromStoresObject(items, () => {
    let guildId = stateFromStores.getGuildId();
    if (guildId == null) {
      guildId = __initData2;
    }
    const guild = GuildStore.getGuild(guildId);
    if (null == guild) {
      let forumPostReadStates = closure_26;
    } else {
      const items = [ReadStateStore];
      forumPostReadStates = ForumUtils.getForumPostReadStates(stateFromStores, guild, items);
    }
    return forumPostReadStates;
  });
};
export const useChannelTemplate = function useChannelTemplate(parentChannel) {
  closure_0 = parentChannel;
  const items = [parentChannel];
  return noop.useMemo(() => {
    let str = "";
    if (null != closure_0) {
      str = "";
      if (null != tmp.template) {
        str = tmp.template.trim();
      }
    }
    return str;
  }, items);
};
export const useForumThreadsForChannelList = function useForumThreadsForChannelList(arg0) {
  _require = arg0;
  let obj = require("initialize");
  const items = [ActiveJoinedThreadsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
    activeJoinedThreads: ActiveJoinedThreadsStore.getActiveJoinedThreadsForGuild(closure_0),
    activeUnjoinedThreads: ActiveJoinedThreadsStore.getActiveUnjoinedThreadsForGuild(closure_0),
    newThreadCounts: ActiveJoinedThreadsStore.getNewThreadCountsForGuild(closure_0),
  }));
  obj = {
    activeJoinedThreads: stateFromStoresObject.activeJoinedThreads,
    activeUnjoinedThreads: stateFromStoresObject.activeUnjoinedThreads,
    newThreadCounts: stateFromStoresObject.newThreadCounts,
  };
  return obj;
};
export const useCanSearchForumPosts = function useCanSearchForumPosts(channel) {
  _require = channel;
  const items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () =>
    PermissionStore.can(constants3.READ_MESSAGE_HISTORY, closure_0),
  );
};
export const useCanViewArchivedPosts = function useCanViewArchivedPosts(channel) {
  _require = channel;
  const items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () =>
    PermissionStore.can(constants3.READ_MESSAGE_HISTORY, closure_0),
  );
};
export const useForumSearchQuery = function useForumSearchQuery(channelId) {
  channelId = channelId.channelId;
  const items = [ForumSearchStore];
  return channelId(504).useStateFromStores(items, () => {
    let searchQuery = null;
    if (null != channelId) {
      searchQuery = ForumSearchStore.getSearchQuery(tmp);
    }
    return searchQuery;
  });
};
export const useForumSearchState = function useForumSearchState(channelId) {
  channelId = channelId.channelId;
  const items = [ForumSearchStore];
  return channelId(504).useStateFromStoresObject(items, () => ({
    isSearchLoading: ForumSearchStore.getSearchLoading(closure_0),
    searchQuery: ForumSearchStore.getSearchQuery(closure_0),
    searchResults: ForumSearchStore.getSearchResults(closure_0),
  }));
};
export const useHasForumSearchQuery = function useHasForumSearchQuery(channelId) {
  _require = channelId;
  const items = [ForumSearchStore];
  return require("initialize").useStateFromStores(items, () => null != ForumSearchStore.getSearchQuery(closure_0));
};
export const useAutomaticForumSearch = function useAutomaticForumSearch(channel, tagFilter, tagSetting) {
  _require = channel;
  dependencyMap = tagSetting;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  const id = channel.id;
  const items = [ForumSearchStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({
    isSearchLoading: ForumSearchStore.getSearchLoading(closure_0),
    searchQuery: ForumSearchStore.getSearchQuery(closure_0),
    searchResults: ForumSearchStore.getSearchResults(closure_0),
  }));
  const isSearchLoading = stateFromStoresObject.isSearchLoading;
  const searchQuery = stateFromStoresObject.searchQuery;
  closure_130_0 = channel;
  let obj = require("initialize");
  const items1 = [PermissionStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () =>
    PermissionStore.can(constants3.READ_MESSAGE_HISTORY, closure_0),
  );
  isSearchLoading.useRef(null);
  const obj2 = require("initialize");
  isSearchLoading.useRef(new Set());
  const items2 = [stateFromStores, , , , , , ,];
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
                user = setTimeout(
                  flag(function* () {
                    ref.current = current2;
                    ref2.current = current;
                    c2 = 1;
                    yield tagFilter(tagSetting[33]).searchForumPosts(c0.guild_id, c0.id, current2, current, c2);
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
                    return arg1;
                  }),
                  350,
                );
                return () => clearTimeout(closure_0);
              }
            }
          } else {
            tagFilter(tagSetting[33]).clearForumSearch(user.id);
            const obj = tagFilter(tagSetting[33]);
          }
        }
      }
    }
  }, items2);
};
export const useUnreadThreadsCountForParent = function useUnreadThreadsCountForParent(guild_id, id) {
  _require = guild_id;
  closure_1 = id;
  const items = [ActiveJoinedThreadsStore, ReadStateStore, ChannelStore];
  return require("initialize").useStateFromStores(items, () => {
    channel = ChannelStore.getChannel(importDefault);
    let isForumLikeChannelResult;
    if (channel != null) {
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
    if (isForumLikeChannelResult) {
      const activeJoinedUnreadThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedUnreadThreadsForParent(
        channel,
        tmp2,
      );
      const activeUnjoinedUnreadThreadsForParent = ActiveJoinedThreadsStore.getActiveUnjoinedUnreadThreadsForParent(
        channel,
        tmp2,
      );
      const ackMessageIdResult = ReadStateStore.ackMessageId(tmp2);
      if (null == ackMessageIdResult) {
        return 0;
      } else {
        let num3 = 0;
        let num2 = 0;
        const keys = Object.keys();
        if (keys !== undefined) {
          num2 = num3;
          while (keys[tmp] !== undefined) {
            let lastMessageIdResult = ReadStateStore.lastMessageId(
              activeJoinedUnreadThreadsForParent[tmp11].channel.id,
            );
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
            let lastMessageIdResult1 = ReadStateStore.lastMessageId(activeUnjoinedUnreadThreadsForParent[tmp18].id);
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
  channel = channel.channel;
  ({
    sortOrder: importDefault,
    tagFilter: dependencyMap,
    tagSetting: asyncGeneratorStep,
    shouldAutomaticallyAck,
  } = channel);
  let stateFromStores1;
  const items = [ForumActivePostStore];
  ({ guild_id: closure_129_0, id: closure_129_1 } = channel);
  const stateFromStoresArray = channel(504).useStateFromStoresArray(items, () =>
    ForumActivePostStore.getThreadIds(channel.id, importDefault, dependencyMap, asyncGeneratorStep),
  );
  let obj = channel(504);
  const items1 = [stateFromStores1, ReadStateStore, ChannelStore];
  const stateFromStores = channel(504).useStateFromStores(items1, () => {
    channel = ChannelStore.getChannel(importDefault);
    let isForumLikeChannelResult;
    if (channel != null) {
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
    if (isForumLikeChannelResult) {
      const activeJoinedUnreadThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedUnreadThreadsForParent(
        channel,
        tmp2,
      );
      const activeUnjoinedUnreadThreadsForParent = ActiveJoinedThreadsStore.getActiveUnjoinedUnreadThreadsForParent(
        channel,
        tmp2,
      );
      const ackMessageIdResult = ReadStateStore.ackMessageId(tmp2);
      if (null == ackMessageIdResult) {
        return 0;
      } else {
        let num3 = 0;
        let num2 = 0;
        const keys = Object.keys();
        if (keys !== undefined) {
          num2 = num3;
          while (keys[tmp] !== undefined) {
            let lastMessageIdResult = ReadStateStore.lastMessageId(
              activeJoinedUnreadThreadsForParent[tmp11].channel.id,
            );
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
            let lastMessageIdResult1 = ReadStateStore.lastMessageId(activeUnjoinedUnreadThreadsForParent[tmp18].id);
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
  const obj2 = channel(504);
  const items2 = [ForumActivePostStore];
  const items3 = [shouldAutomaticallyAck, stateFromStores];
  stateFromStores1 = channel(504).useStateFromStores(
    items2,
    () => {
      let tmp = shouldAutomaticallyAck;
      if (shouldAutomaticallyAck) {
        let canAckThreads = stateFromStores > 0;
        if (!canAckThreads) {
          canAckThreads = ForumActivePostStore.getCanAckThreads();
        }
        tmp = canAckThreads;
      }
      return tmp;
    },
    items3,
  );
  const items4 = [channel, stateFromStores1];
  const effect = shouldAutomaticallyAck.useEffect(() => {
    if (stateFromStores1) {
      const obj = { object: constants2.ACK_FORUM_ACTIVE_THREADS, objectType: constants.ACK_AUTOMATIC };
      obj.ackChannel(channel, obj);
    }
  }, items4);
  return stateFromStoresArray;
};
