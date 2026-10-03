// === Module 7528: ForumHooks ===

// Module 7528 (ForumHooks)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import useMessageAuthor from "useMessageAuthor" /* 5304 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6605 */;
import renderMessageMarkupDefault from "renderMessageMarkup" /* 7531 */;
import ForumPostMediaUtils from "ForumPostMediaUtils" /* 7540 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5638 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5691 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5692 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6809 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberRequesterStore from "GuildMemberRequesterStore" /* 5583 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import UserStore from "UserStore" /* 1377 */;
import ForumActivePostStore from "ForumActivePostStore" /* 6808 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 6780 */;
import ForumPostUnreadCountStore from "ForumPostUnreadCountStore" /* 7529 */;
import ForumSearchStore from "ForumSearchStore" /* 7264 */;

const ThreadSortOrder = tmp(2061);
const ForumUtils = tmp(6810);
const ThreadUtils = tmp(7409);
require = fn;
const ForumTimestampFormats = fn(6776).ForumTimestampFormats;
const Constants = fn(1085);
({ AnalyticsObjectTypes: closure_20, AnalyticsObjects: closure_21, EMPTY_STRING_SNOWFLAKE_ID: closure_22, Permissions: closure_23 } = Constants);
const ChannelFlags = fn(2058).ChannelFlags;
let closure_25 = fn(1125).MAX_THREAD_UNREAD_MESSAGE_COUNT;
fn(558);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id, arg1, arg2, arg3) => {
  _require = guild_id;
  importDefault = arg1;
  dependencyMap = arg2;
  closure_3 = arg3;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ActiveThreadsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild_id.guild_id) {
    const fn = function c() {
      return ActiveThreadsStore.hasLoaded(guild_id.guild_id);
    };
    cResult[1] = guild_id.guild_id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === guild_id.guild_id) {
    if (cResult[4] === guild_id.id) {
      if (cResult[5] === stateFromStores) {
        if (cResult[6] === arg1) {
          if (cResult[7] === arg2) {
            if (cResult[8] === arg3) {
              let tmp8 = cResult[9];
              let tmp9 = cResult[10];
            }
            const effect = stateFromStores.useEffect(tmp8, tmp9);
          }
        }
      }
    }
  }
  class S {
    constructor() {
      if (closure_4) {
        tmp = closure_15;
        tmp2 = closure_0;
        tmp3 = closure_1;
        tmp4 = closure_2;
        tmp5 = closure_3;
        tmp6 = closure_15;
        tmp7 = closure_17;
        threadIdsMissingCounts = closure_17.getThreadIdsMissingCounts(closure_0.guild_id, closure_15.getThreadIds(closure_0.id, closure_1, closure_2, closure_3));
        found = threadIdsMissingCounts.filter((item) => {
          const items = [trackedAckMessageId];
          return guild_id(closure_1_2[23]).canDisplayPostUnreadMessageCount(item, items);
        });
        num = 180;
        num2 = 0;
        substr = found.slice(0, 180);
        mapped = substr.map((threadId) => ({ threadId, ackMessageId: trackedAckMessageId.getTrackedAckMessageId(threadId) }));
        if (mapped.length > 0) {
          tmp8 = closure_1;
          tmp9 = closure_2;
          obj = closure_1(closure_2[24]);
          obj1 = { type: "REQUEST_FORUM_UNREADS", guildId: null, channelId: null, threads: null };
          ({ guild_id: obj2.guildId, id: obj2.channelId } = tmp2);
          obj1.threads = mapped;
          dispatchResult = obj.dispatch(obj1);
        }
      }
      return;
    }
  }
  const items1 = [, , , , , ];
  ({ id: arr2[0], guild_id: arr2[1] } = guild_id);
  items1[2] = stateFromStores;
  items1[3] = arg2;
  items1[4] = arg1;
  items1[5] = arg3;
  cResult[3] = guild_id.guild_id;
  cResult[4] = guild_id.id;
  cResult[5] = stateFromStores;
  cResult[6] = arg1;
  cResult[7] = arg2;
  cResult[8] = arg3;
  cResult[9] = S;
  cResult[10] = items1;
  tmp9 = items1;
  tmp8 = S;
  const tmpResult = require("initialize");
}) : ((arg0, arg1, arg2, arg3) => {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  closure_3 = arg3;
  let items = [ActiveThreadsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ActiveThreadsStore.hasLoaded(closure_0.guild_id));
  const items1 = [, , , , , ];
  ({ id: arr2[0], guild_id: arr2[1] } = arg0);
  items1[2] = stateFromStores;
  items1[3] = arg2;
  items1[4] = arg1;
  items1[5] = arg3;
  const effect = stateFromStores.useEffect(() => {
    if (stateFromStores) {
      const threadIdsMissingCounts = ForumPostUnreadCountStore.getThreadIdsMissingCounts(closure_0.guild_id, ForumActivePostStore.getThreadIds(closure_0.id, closure_1, closure_2, closure_3));
      const found = threadIdsMissingCounts.filter((item) => {
        const items = [trackedAckMessageId];
        return closure_1_0(closure_1_2[23]).canDisplayPostUnreadMessageCount(item, items);
      });
      const substr = found.slice(0, 180);
      const mapped = substr.map((threadId) => ({ threadId, ackMessageId: trackedAckMessageId.getTrackedAckMessageId(threadId) }));
      if (mapped.length > 0) {
        const obj3 = { type: "REQUEST_FORUM_UNREADS", guildId: null, channelId: null, threads: null };
        ({ guild_id: obj2.guildId, id: obj2.channelId } = closure_0);
        obj3.threads = mapped;
        DispatcherDefault.dispatch(obj3);
      }
    }
  }, items1);
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id) => {
  _require = guild_id;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ActiveThreadsStore, ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guild_id.guild_id) {
    if (cResult[2] === guild_id.parent_id) {
      let tmp7 = cResult[3];
    }
    return tmp(504).useStateFromStores(first, tmp7);
  }
  const fn = function o() {
    const keys = _modDef12(ActiveThreadsStore.getThreadsForParent(guild_id.guild_id, guild_id.parent_id)).keys();
    const found = keys.filter((item) => {
      channel = channel.getChannel(item);
      let hasFlagResult;
      if (channel != null) {
        hasFlagResult = channel.hasFlag(constants.PINNED);
      }
      return true === hasFlagResult;
    });
    return ChannelStore.getChannel(found.head());
  };
  cResult[1] = guild_id.guild_id;
  cResult[2] = guild_id.parent_id;
  cResult[3] = fn;
  tmp7 = fn;
  const obj = require("c");
  tmp = _require;
}) : ((arg0) => {
  _require = arg0;
  const items = [ActiveThreadsStore, ChannelStore];
  return require("initialize").useStateFromStores(items, () => {
    const keys = _modDef12(ActiveThreadsStore.getThreadsForParent(closure_0.guild_id, closure_0.parent_id)).keys();
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
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg1) {
    const fn = function i() {
      const mapped = closure_1.map((item) => user.getUser(item));
      return mapped.filter(GlobalUtils.isNotNullish);
    };
    cResult[1] = arg1;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  stateFromStoresArray = require("initialize").useStateFromStoresArray(first, tmp6);
  if (cResult[3] === arg0) {
    if (cResult[4] === stateFromStoresArray) {
      let tmp8 = cResult[5];
    }
    require("useMountEffect")(tmp8);
    return stateFromStoresArray;
  }
  const fn2 = function u() {
    const item = stateFromStoresArray.forEach((id) => {
      const member = GuildMemberRequesterStore.requestMember(guild_id.guild_id, id.id);
    });
  };
  cResult[3] = arg0;
  cResult[4] = stateFromStoresArray;
  cResult[5] = fn2;
  tmp8 = fn2;
  const tmpResult = require("initialize");
}) : ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  const items = [UserStore];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const mapped = closure_1.map((item) => user.getUser(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  require("useMountEffect")(() => {
    const item = stateFromStoresArray.forEach((id) => {
      const member = GuildMemberRequesterStore.requestMember(guild_id.guild_id, id.id);
    });
  });
  return stateFromStoresArray;
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1, DURATION_AGO) => {
  let tmp = require;
  let getTimestampString = dependencyMap;
  const cResult = c.c(10);
  if (undefined === DURATION_AGO) {
    DURATION_AGO = ForumTimestampFormats.DURATION_AGO;
  }
  if (cResult[0] !== id.id) {
    const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(id.id);
    cResult[0] = id.id;
    cResult[1] = extractTimestampResult;
    let tmp4 = extractTimestampResult;
  } else {
    tmp4 = cResult[1];
  }
  const lastMessageTimestamp = ThreadUtils.useLastMessageTimestamp(id);
  if (cResult[2] === DURATION_AGO) {
    if (cResult[3] === arg1) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === tmp8) {
      if (cResult[6] === lastMessageTimestamp) {
        if (cResult[7] === arg1) {
          if (cResult[8] === tmp4) {
            return cResult[9];
          }
        }
      }
    }
    if (arg1 === ThreadSortOrder.ThreadSortOrder.CREATION_DATE) {
      tmp = ThreadUtils;
      getTimestampString = tmp.getTimestampString;
      let timestampString = getTimestampString(tmp4, tmp8);
    } else {
      timestampString = ThreadUtils.getTimestampString(lastMessageTimestamp, tmp8);
      const tmpResult3 = ThreadUtils;
    }
    cResult[5] = tmp8;
    cResult[6] = lastMessageTimestamp;
    cResult[7] = arg1;
    cResult[8] = tmp4;
    cResult[9] = timestampString;
  }
  const tmpResult = ThreadUtils;
  const forumTimestampFormatter = ForumUtils.getForumTimestampFormatter(arg1, DURATION_AGO);
  cResult[2] = DURATION_AGO;
  cResult[3] = arg1;
  cResult[4] = forumTimestampFormatter;
  tmp8 = forumTimestampFormatter;
  const tmpResult4 = ForumUtils;
}) : ((id, arg1) => {
  _require = id;
  closure_1 = arg1;
  let DURATION_AGO = arg2;
  if (arg2 === undefined) {
    DURATION_AGO = ForumTimestampFormats.DURATION_AGO;
  }
  let lastMessageTimestamp;
  const items = [id.id];
  const memo = lastMessageTimestamp.useMemo(() => SnowflakeUtilsDefault.extractTimestamp(id.id), items);
  lastMessageTimestamp = require("ThreadUtils").useLastMessageTimestamp(id);
  const items1 = [arg1, DURATION_AGO];
  const memo1 = lastMessageTimestamp.useMemo(() => ForumUtils.getForumTimestampFormatter(closure_1, DURATION_AGO), items1);
  const items2 = [lastMessageTimestamp, arg1, memo, memo1];
  return lastMessageTimestamp.useMemo(() => {
    if (closure_1 === ThreadSortOrder.ThreadSortOrder.CREATION_DATE) {
      let timestampString = ThreadUtils.getTimestampString(memo, memo1);
      const tmpResult = ThreadUtils;
    } else {
      timestampString = ThreadUtils.getTimestampString(lastMessageTimestamp, memo1);
      const tmpResult2 = ThreadUtils;
    }
    return timestampString;
  }, items2);
});
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((defaultReactionEmoji) => {
  const cResult = defaultReactionEmoji(576).c(10);
  defaultReactionEmoji = undefined;
  if (defaultReactionEmoji != null) {
    defaultReactionEmoji = defaultReactionEmoji.defaultReactionEmoji;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmojiStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== defaultReactionEmoji) {
    const fn = function i() {
      let emojiId;
      if (defaultReactionEmoji != null) {
        emojiId = defaultReactionEmoji.emojiId;
      }
      let usableCustomEmojiById = null;
      if (null != emojiId) {
        usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(defaultReactionEmoji.emojiId);
      }
      return usableCustomEmojiById;
    };
    cResult[1] = defaultReactionEmoji;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = defaultReactionEmoji(576);
  name = defaultReactionEmoji(504).useStateFromStores(first, tmp7);
  if (null == defaultReactionEmoji) {
    return null;
  } else {
    if (null == defaultReactionEmoji.emojiId) {
      if (null != defaultReactionEmoji.emojiName) {
        if (cResult[7] === defaultReactionEmoji.emojiId) {
        }
        const obj2 = { id: null, name: null, animated: false };
        ({ emojiId: obj3.id, emojiName: obj3.name } = defaultReactionEmoji);
        cResult[7] = defaultReactionEmoji.emojiId;
        cResult[8] = defaultReactionEmoji.emojiName;
        cResult[9] = obj2;
      }
    }
    if (cResult[3] === name.animated) {
      if (cResult[4] === name.name) {
      }
    }
    const obj6 = { id: defaultReactionEmoji.emojiId, name: null, animated: null };
    ({ name: obj4.name, animated: obj4.animated } = name);
    ({ animated: tmp3[3], name } = name);
    cResult[4] = name;
    defaultReactionEmoji = defaultReactionEmoji.emojiId;
    cResult[5] = defaultReactionEmoji;
    cResult[6] = obj6;
  }
  const tmpResult = defaultReactionEmoji(504);
}) : ((defaultReactionEmoji) => {
  defaultReactionEmoji = undefined;
  if (defaultReactionEmoji != null) {
    defaultReactionEmoji = defaultReactionEmoji.defaultReactionEmoji;
  }
  const items = [EmojiStore];
  let animated = defaultReactionEmoji(504).useStateFromStores(items, () => {
    let emojiId;
    if (defaultReactionEmoji != null) {
      emojiId = defaultReactionEmoji.emojiId;
    }
    let usableCustomEmojiById = null;
    if (null != emojiId) {
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(defaultReactionEmoji.emojiId);
    }
    return usableCustomEmojiById;
  });
  if (null == defaultReactionEmoji) {
    return null;
  } else {
    if (null == defaultReactionEmoji.emojiId) {
      if (null != defaultReactionEmoji.emojiName) {
        ({ emojiId: obj2.id, emojiName: obj2.name } = defaultReactionEmoji);
        const tmp2 = { id: null, name: null, animated: false };
        const obj3 = { id: null, name: null, animated: false };
      }
    }
    const obj5 = { id: defaultReactionEmoji.emojiId, name: null, animated: null };
    defaultReactionEmoji = animated.name;
    obj5.name = defaultReactionEmoji;
    animated = animated.animated;
    obj5.animated = animated;
  }
});
let closure_26 = tmp8;
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((reactions) => {
  let orderByResult = dependencyMap;
  const cResult = c.c(4);
  reactions = undefined;
  if (reactions != null) {
    reactions = reactions.reactions;
  }
  if (cResult[0] !== reactions) {
    let reactions1;
    if (reactions != null) {
      reactions1 = reactions.reactions;
    }
    if (reactions1 == null) {
      reactions1 = [];
    }
    let reactions2;
    if (reactions != null) {
      reactions2 = reactions.reactions;
    }
    cResult[0] = reactions2;
    cResult[1] = reactions1;
    let arr = reactions1;
  } else {
    arr = cResult[1];
  }
  if (0 !== arr.length) {
    if (cResult[2] !== arr) {
      const items = [(count) => count.count + count.burst_count, (burst_count) => burst_count.burst_count];
      orderByResult = _modDef12.orderBy(arr, items, ["desc", "desc"]);
      cResult[2] = arr;
      cResult[3] = orderByResult;
    }
    const first = 5;
  }
}) : ((reactions) => {
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
});
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((parentChannel) => {
  let sumResult = dependencyMap;
  const cResult = c.c(14);
  ({ message, count, sorted } = parentChannel);
  let num = 1;
  if (undefined !== count) {
    num = count;
  }
  const tmp4 = closure_26(parentChannel.parentChannel);
  let reactions;
  if (message != null) {
    reactions = message.reactions;
  }
  if (cResult[0] !== reactions) {
    let reactions1;
    if (message != null) {
      reactions1 = message.reactions;
    }
    if (reactions1 == null) {
      reactions1 = [];
    }
    let reactions2;
    if (message != null) {
      reactions2 = message.reactions;
    }
    cResult[0] = reactions2;
    cResult[1] = reactions1;
    let tmp6 = reactions1;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp6) {
    if (cResult[3] === tmp3) {
      let arr2 = cResult[4];
    }
    if (cResult[5] === num) {
      if (cResult[6] === tmp4) {
        if (cResult[7] === arr2) {
          if (cResult[11] === cResult[8]) {
            if (cResult[12] === tmp10) {
              let tmp18 = cResult[13];
            }
            return tmp18;
          }
          const obj3 = { reactions: cResult[8], additionalNonUniqueReactionCount: cResult[9] };
          cResult[11] = cResult[8];
          cResult[12] = cResult[9];
          cResult[13] = obj3;
          tmp18 = obj3;
        }
      }
    }
    let items = [];
    if (null != tmp4) {
      const obj5 = { emoji: tmp4, me: false, count: 0, burst_count: 0, me_burst: false };
      const items1 = [obj5];
      items = items1;
    }
    if (arr2.length > 0) {
      items = arr2;
    }
    const substr = items.slice(0, num);
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor(arg0) {
          return parentChannel.count + parentChannel.burst_count;
        }
      }
      cResult[10] = T;
    } else {
      class T {
        constructor(arg0) {
          return parentChannel.count + parentChannel.burst_count;
        }
      }
    }
    const substr1 = items.slice(num, items.length);
    sumResult = _modDef12.sum(substr1.map(T));
    cResult[5] = num;
    cResult[6] = tmp4;
    cResult[7] = arr2;
    cResult[8] = substr;
    cResult[9] = sumResult;
  }
  let orderByResult = tmp6;
  if (undefined === sorted || sorted) {
    class T {
      constructor(arg0) {
        return parentChannel.count + parentChannel.burst_count;
      }
    }
    const items2 = [(count) => count.count + count.burst_count, (burst_count) => burst_count.burst_count];
    orderByResult = _modDef12.orderBy(tmp6, items2, ["desc", "desc"]);
  }
  cResult[2] = tmp6;
  cResult[3] = undefined === sorted || sorted;
  cResult[4] = orderByResult;
  arr2 = orderByResult;
}) : ((message) => {
  message = message.message;
  let num = message.count;
  if (num === undefined) {
    num = 1;
  }
  let flag = message.sorted;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = closure_26(message.parentChannel);
  let reactions;
  if (message != null) {
    reactions = message.reactions;
  }
  let items = [reactions, flag];
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
  }, items);
  let items1 = [];
  if (null != tmp) {
    let obj = { emoji: tmp, me: false, count: 0, burst_count: 0, me_burst: false };
    const items2 = [obj];
    items1 = items2;
  }
  if (memo.length > 0) {
    items1 = memo;
  }
  const obj2 = { reactions: items1.slice(0, num), additionalNonUniqueReactionCount: null };
  const substr = items1.slice(num, items1.length);
  obj2.additionalNonUniqueReactionCount = flag(12).sum(substr.map((count) => count.count + count.burst_count));
  return obj2;
});
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  const cResult = c.c(13);
  message = message.message;
  ({ containerWidth, reactionEmojiWidth, digitWidth } = message);
  const tmp3 = closure_26(message.parentChannel);
  let reactions;
  if (message != null) {
    reactions = message.reactions;
  }
  if (cResult[0] !== reactions) {
    let reactions1;
    if (message != null) {
      reactions1 = message.reactions;
    }
    if (reactions1 == null) {
      reactions1 = [];
    }
    let reactions2;
    if (message != null) {
      reactions2 = message.reactions;
    }
    cResult[0] = reactions2;
    cResult[1] = reactions1;
    let tmp5 = reactions1;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    const items = [(count) => count.count + count.burst_count, (burst_count) => burst_count.burst_count];
    const orderByResult = _modDef12.orderBy(tmp5, items, ["desc", "desc"]);
    cResult[2] = tmp5;
    cResult[3] = orderByResult;
    let arr2 = orderByResult;
  } else {
    arr2 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    cResult[4] = items1;
    let arr4 = items1;
  } else {
    arr4 = cResult[4];
  }
  if (null == tmp3) {
    if (arr2.length > 0) {
      arr4 = arr2;
    }
    let num10 = 0;
    let num11 = 0;
    let num12 = 0;
    let num13 = 0;
    if (0 < arr4.length) {
      while (true) {
        let tmp11 = arr4[num10];
        let _Math = Math;
        let _Math2 = Math;
        let sum = reactionEmojiWidth + digitWidth * Math.ceil(Math.log10((tmp11.burst_count > 0 ? tmp11.burst_count : tmp11.count) + 1));
        num13 = num12;
        if (num11 + sum >= containerWidth) {
          break;
        } else {
          num11 = num11 + sum;
          num12 = num12 + 1;
          num10 = num10 + 1;
          num13 = num12;
          if (num10 >= arr4.length) {
            break;
          }
        }
      }
    }
    const diff = arr4.length - num13;
    let diff1 = num13;
    let sum1 = diff;
    if (0 < diff) {
      diff1 = num13 - 1;
      sum1 = diff + 1;
    }
    if (cResult[7] === arr4) {
      if (cResult[8] === diff1) {
        let tmp19 = cResult[9];
      }
      if (cResult[10] === sum1) {
        if (cResult[11] === tmp19) {
          let tmp21 = cResult[12];
        }
        return tmp21;
      }
      const obj3 = { reactions: tmp19, additionalReactionCount: sum1 };
      cResult[10] = sum1;
      cResult[11] = tmp19;
      cResult[12] = obj3;
      tmp21 = obj3;
    }
    const substr = arr4.slice(0, diff1);
    cResult[7] = arr4;
    cResult[8] = diff1;
    cResult[9] = substr;
    tmp19 = substr;
  } else if (cResult[5] !== tmp3) {
    const obj4 = { emoji: tmp3, me: false, count: 0, burst_count: 0, me_burst: false };
    const items2 = [obj4];
    cResult[5] = tmp3;
    cResult[6] = items2;
  }
}) : ((message) => {
  message = message.message;
  ({ containerWidth, reactionEmojiWidth, digitWidth } = message);
  const tmp = closure_26(message.parentChannel);
  let reactions;
  if (message != null) {
    reactions = message.reactions;
  }
  let items = [reactions];
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
  }, items);
  let items1 = [];
  if (null != tmp) {
    const obj = { emoji: tmp, me: false, count: 0, burst_count: 0, me_burst: false };
    const items2 = [obj];
    items1 = items2;
  }
  if (memo.length > 0) {
    items1 = memo;
  }
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  if (0 < items1.length) {
    while (true) {
      let tmp4 = items1[num];
      let _Math = Math;
      let _Math2 = Math;
      let sum = reactionEmojiWidth + digitWidth * Math.ceil(Math.log10((tmp4.burst_count > 0 ? tmp4.burst_count : tmp4.count) + 1));
      num4 = num3;
      if (num2 + sum >= containerWidth) {
        break;
      } else {
        num2 = num2 + sum;
        num3 = num3 + 1;
        num = num + 1;
        num4 = num3;
        if (num >= items1.length) {
          break;
        }
      }
    }
  }
  const diff = items1.length - num4;
  let diff1 = num4;
  let sum1 = diff;
  if (0 < diff) {
    diff1 = num4 - 1;
    sum1 = diff + 1;
  }
  return { reactions: items1.slice(0, diff1), additionalReactionCount: sum1 };
});
ReactCompilerGating = fn(558);
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  _require = id;
  const cResult = require("c").c(19);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ThreadMessageStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function o() {
      let num = ThreadMessageStore.getCount(user.id);
      if (num == null) {
        num = 0;
      }
      return num;
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === id.id) {
    if (cResult[4] === stateFromStores) {
      let tmp8 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ReadStateStore];
      cResult[6] = items1;
      let tmp10 = items1;
    } else {
      tmp10 = cResult[6];
    }
    if (cResult[7] !== id.id) {
      const fn2 = function h() {
        const items = [ReadStateStore];
        return ForumUtils.canDisplayPostUnreadMessageCount(user.id, items);
      };
      cResult[7] = id.id;
      cResult[8] = fn2;
      let tmp12 = fn2;
    } else {
      tmp12 = cResult[8];
    }
    stateFromStores1 = tmp(tmp2[22]).useStateFromStores(tmp10, tmp12);
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ForumPostUnreadCountStore];
      cResult[9] = items2;
      let tmp14 = items2;
    } else {
      tmp14 = cResult[9];
    }
    if (cResult[10] === id.id) {
      if (cResult[11] === stateFromStores1) {
        if (cResult[12] === stateFromStores) {
          let tmp16 = cResult[13];
        }
        const stateFromStores2 = tmp(tmp2[22]).useStateFromStores(tmp14, tmp16);
        let tmp19 = null != stateFromStores;
        if (tmp19) {
          let _HermesInternal = HermesInternal;
          tmp19 = "" + stateFromStores !== tmp8;
        }
        if (cResult[14] === stateFromStores) {
          if (cResult[15] === tmp8) {
            if (cResult[16] === tmp19) {
              if (cResult[17] === stateFromStores2) {
                let tmp20 = cResult[18];
              }
              return tmp20;
            }
          }
        }
        const obj2 = { messageCount: stateFromStores, isMaxMessageCount: tmp19, messageCountText: tmp8, unreadCount: stateFromStores2 };
        cResult[14] = stateFromStores;
        cResult[15] = tmp8;
        cResult[16] = tmp19;
        cResult[17] = stateFromStores2;
        cResult[18] = obj2;
        tmp20 = obj2;
        const tmpResult5 = tmp(tmp2[22]);
      }
    }
    const fn3 = function v() {
      if (stateFromStores1) {
        const count = ForumPostUnreadCountStore.getCount(user.id);
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
    };
    cResult[10] = id.id;
    cResult[11] = stateFromStores1;
    cResult[12] = stateFromStores;
    cResult[13] = fn3;
    tmp16 = fn3;
    const tmpResult4 = tmp(tmp2[22]);
  }
  const tmpResult = require("initialize");
  const messageCountText = require("MessageCountUtils").getMessageCountText(stateFromStores, id.id);
  cResult[3] = id.id;
  cResult[4] = stateFromStores;
  cResult[5] = messageCountText;
  tmp8 = messageCountText;
  const tmpResult6 = require("MessageCountUtils");
}) : ((id) => {
  _require = id;
  let items = [ThreadMessageStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let num = ThreadMessageStore.getCount(user.id);
    if (num == null) {
      num = 0;
    }
    return num;
  });
  const obj = require("initialize");
  const messageCountText = require("MessageCountUtils").getMessageCountText(stateFromStores, id.id);
  const obj2 = require("MessageCountUtils");
  const items1 = [ReadStateStore];
  dependencyMap = require("initialize").useStateFromStores(items1, () => {
    const items = [ReadStateStore];
    return ForumUtils.canDisplayPostUnreadMessageCount(user.id, items);
  });
  const obj3 = require("initialize");
  const items2 = [ForumPostUnreadCountStore];
  const obj5 = { messageCount: stateFromStores, isMaxMessageCount: null, messageCountText: null, unreadCount: null };
  let tmp4 = null != stateFromStores;
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    if (closure_2) {
      const count = ForumPostUnreadCountStore.getCount(user.id);
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
  obj5.isMaxMessageCount = tmp4;
  obj5.messageCountText = messageCountText;
  obj5.unreadCount = stateFromStores1;
  return obj5;
});
ReactCompilerGating = fn(558);
let tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? ((author, getGuildId) => {
  const cResult = id(576).c(14);
  id = undefined;
  if (author != null) {
    author = author.author;
    if (author != null) {
      id = author.id;
    }
  }
  if (cResult[0] !== getGuildId) {
    const guildId = getGuildId.getGuildId();
    cResult[0] = getGuildId;
    cResult[1] = guildId;
    let tmp5 = guildId;
  } else {
    tmp5 = cResult[1];
  }
  closure_1 = tmp5;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[2] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== id) {
    const fn = function h() {
      return UserStore.getUser(id);
    };
    cResult[3] = id;
    cResult[4] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[4];
  }
  const obj = id(576);
  const stateFromStores = id(504).useStateFromStores(tmp7, tmp9);
  const tmpResult = id(504);
  const nullableMessageAuthor = id(5304).useNullableMessageAuthor(author);
  if (cResult[5] === tmp5) {
    if (cResult[6] === id) {
      let tmp12 = cResult[7];
      let tmp13 = cResult[8];
    }
    const effect = noop.useEffect(tmp12, tmp13);
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
    let colorString;
    if (nullableMessageAuthor != null) {
      colorString = nullableMessageAuthor.colorString;
    }
    if (colorString == null) {
      colorString = null;
    }
    let colorStrings;
    if (nullableMessageAuthor != null) {
      colorStrings = nullableMessageAuthor.colorStrings;
    }
    if (colorStrings == null) {
      colorStrings = null;
    }
    if (cResult[9] === colorString) {
      if (cResult[10] === colorStrings) {
        if (cResult[11] === nick) {
          if (cResult[12] === stateFromStores) {
            let tmp20 = cResult[13];
          }
          return tmp20;
        }
      }
    }
    const obj2 = { authorName: nick, authorColor: colorString, authorColors: colorStrings, user: stateFromStores };
    cResult[9] = colorString;
    cResult[10] = colorStrings;
    cResult[11] = nick;
    cResult[12] = stateFromStores;
    cResult[13] = obj2;
    tmp20 = obj2;
  }
  const fn2 = function f() {
    let tmp2 = null != id;
    if (tmp2) {
      tmp2 = null != closure_1;
    }
    if (tmp2) {
      const member = GuildMemberRequesterStore.requestMember(closure_1, id);
    }
  };
  const items1 = [tmp5, id];
  cResult[5] = tmp5;
  cResult[6] = id;
  cResult[7] = fn2;
  cResult[8] = items1;
  tmp13 = items1;
  tmp12 = fn2;
  const tmpResult2 = id(5304);
}) : ((author, getGuildId) => {
  let id;
  if (author != null) {
    author = author.author;
    if (author != null) {
      id = author.id;
    }
  }
  const guildId = getGuildId.getGuildId();
  const items = [UserStore];
  const stateFromStores = id(504).useStateFromStores(items, () => UserStore.getUser(id));
  const obj = id(504);
  const nullableMessageAuthor = id(5304).useNullableMessageAuthor(author);
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
  const obj3 = { authorName: nick, authorColor: null, authorColors: null, user: null };
  let colorString;
  if (nullableMessageAuthor != null) {
    colorString = nullableMessageAuthor.colorString;
  }
  if (colorString == null) {
    colorString = null;
  }
  obj3.authorColor = colorString;
  let colorStrings;
  if (nullableMessageAuthor != null) {
    colorStrings = nullableMessageAuthor.colorStrings;
  }
  if (colorStrings == null) {
    colorStrings = null;
  }
  obj3.authorColors = colorStrings;
  obj3.user = stateFromStores;
  return obj3;
});
ReactCompilerGating = fn(558);
let tmp13 = ReactCompilerGating.isReactCompilerEnabled() ? ((ownerId) => {
  _require = ownerId;
  const cResult = require("c").c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== ownerId.ownerId) {
    const fn = function i() {
      return UserStore.getUser(ownerId.ownerId);
    };
    cResult[1] = ownerId.ownerId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ForumPostMessagesStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== ownerId.id) {
    const fn2 = function l() {
      const message = ForumPostMessagesStore.getMessage(ownerId.id);
      let firstMessage;
      if (message != null) {
        firstMessage = message.firstMessage;
      }
      return firstMessage;
    };
    cResult[4] = ownerId.id;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10);
  const tmpResult3 = require("initialize");
  let author;
  if (stateFromStores1 != null) {
    author = stateFromStores1.author;
  }
  if (author == null) {
    author = stateFromStores;
  }
  const nullableUserAuthor = require("useMessageAuthor").useNullableUserAuthor(author, ownerId);
  if (cResult[6] === ownerId.guild_id) {
    if (cResult[7] === ownerId.ownerId) {
      let tmp14 = cResult[8];
      let tmp15 = cResult[9];
    }
    const effect = noop.useEffect(tmp14, tmp15);
    if (cResult[10] === nullableUserAuthor) {
      if (cResult[11] === stateFromStores) {
        let tmp18 = cResult[12];
      }
      return tmp18;
    }
    const obj2 = { user: stateFromStores, author: nullableUserAuthor };
    cResult[10] = nullableUserAuthor;
    cResult[11] = stateFromStores;
    cResult[12] = obj2;
    tmp18 = obj2;
  }
  class S {
    constructor() {
      tmp = closure_0;
      if (null != closure_0.ownerId) {
        tmp2 = closure_10;
        member = closure_10.requestMember(tmp.guild_id, tmp.ownerId);
      }
      return;
    }
  }
  const items2 = [, ];
  ({ guild_id: arr3[0], ownerId: arr3[1] } = ownerId);
  cResult[6] = ownerId.guild_id;
  cResult[7] = ownerId.ownerId;
  cResult[8] = S;
  cResult[9] = items2;
  tmp15 = items2;
  tmp14 = S;
  const tmpResult4 = require("useMessageAuthor");
}) : ((arg0) => {
  _require = arg0;
  const items = [UserStore];
  const user = require("initialize").useStateFromStores(items, () => UserStore.getUser(closure_0.ownerId));
  const obj = require("initialize");
  const items1 = [ForumPostMessagesStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    const message = ForumPostMessagesStore.getMessage(closure_0.id);
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
  const items2 = [, ];
  ({ guild_id: arr3[0], ownerId: arr3[1] } = arg0);
  const author1 = require("useMessageAuthor").useNullableUserAuthor(author, arg0);
  const effect = noop.useEffect(() => {
    if (null != closure_0.ownerId) {
      const member = GuildMemberRequesterStore.requestMember(closure_0.guild_id, closure_0.ownerId);
    }
  }, items2);
  return { user, author: author1 };
});
ReactCompilerGating = fn(558);
let closure_27 = { isNew: false, hasUnreads: false };
let tmp14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(10);
  ({ firstMessage, formatInline, noStyleAndInteraction, hasUnreads } = arg0);
  if (undefined === hasUnreads) {
    let str = "text-default";
  } else {
    str = "text-muted";
  }
  if (cResult[0] === firstMessage) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === tmp5) {
        if (cResult[3] === str) {
          ({ hasSpoilerEmbeds, content } = cResult[4]);
          const findFirstMediaProperties = ForumPostMediaUtils.useFindFirstMediaProperties(firstMessage, hasSpoilerEmbeds);
          const tmpResult = ForumPostMediaUtils;
          const firstMediaIsEmbed = ForumPostMediaUtils.useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds);
          if (cResult[5] === content) {
            if (cResult[6] === findFirstMediaProperties) {
              if (cResult[7] === firstMediaIsEmbed) {
                if (cResult[8] === hasSpoilerEmbeds) {
                  let tmp10 = cResult[9];
                }
                return tmp10;
              }
            }
          }
          const obj2 = { hasSpoilerEmbeds, content, firstMedia: findFirstMediaProperties, firstMediaIsEmbed };
          cResult[5] = content;
          cResult[6] = findFirstMediaProperties;
          cResult[7] = firstMediaIsEmbed;
          cResult[8] = hasSpoilerEmbeds;
          cResult[9] = obj2;
          tmp10 = obj2;
          const tmpResult2 = ForumPostMediaUtils;
        }
      }
    }
  }
  let content1;
  if (firstMessage != null) {
    content1 = firstMessage.content;
  }
  if (null == content1) {
    let obj3 = { hasSpoilerEmbeds: false, content: null };
    cResult[0] = firstMessage;
    cResult[1] = tmp4;
    cResult[2] = tmp5;
    cResult[3] = str;
    cResult[4] = obj3;
  }
  obj3 = renderMessageMarkupDefault(firstMessage, { formatInline: tmp4, noStyleAndInteraction: tmp5, allowHeading: true, allowList: true, allowGameMentions: true, textColor: str, disablePressableChannelMention: true });
}) : ((firstMessage) => {
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
      content = firstMessage.content;
    }
    if (null != content) {
      if ("" !== firstMessage.content) {
        const obj = { formatInline: flag, noStyleAndInteraction: flag2, allowHeading: true, allowList: true, allowGameMentions: true, textColor: str, disablePressableChannelMention: true };
        renderMessageMarkupDefault(firstMessage, obj);
      }
      return { hasSpoilerEmbeds: false, content: null };
    }
  }, items);
  const hasSpoilerEmbeds = memo.hasSpoilerEmbeds;
  let obj = { hasSpoilerEmbeds, content: memo.content, firstMedia: firstMessage(flag2[34]).useFindFirstMediaProperties(firstMessage, hasSpoilerEmbeds), firstMediaIsEmbed: null };
  const obj2 = firstMessage(flag2[34]);
  obj.firstMediaIsEmbed = firstMessage(flag2[34]).useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds);
  return obj;
});
ReactCompilerGating = fn(558);
let tmp15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return PermissionStore.can(constants3.MANAGE_CHANNELS, closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => PermissionStore.can(constants3.MANAGE_CHANNELS, closure_0));
});
ReactCompilerGating = fn(558);
let tmp16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore, ReadStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      guildId = guildId.getGuildId();
      if (guildId == null) {
        guildId = closure_2_22;
      }
      guild = GuildStore.getGuild(guildId);
      if (null == guild) {
        let forumPostReadStates = closure_27;
      } else {
        const items = [ReadStateStore];
        forumPostReadStates = ForumUtils.getForumPostReadStates(guildId, guild, items);
      }
      return forumPostReadStates;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = require("c");
  return require("initialize").useStateFromStoresObject(first, tmp7);
}) : ((arg0) => {
  _require = arg0;
  let items = [GuildStore, ReadStateStore];
  return require("initialize").useStateFromStoresObject(items, () => {
    guildId = guildId.getGuildId();
    if (guildId == null) {
      guildId = closure_2_22;
    }
    guild = GuildStore.getGuild(guildId);
    if (null == guild) {
      let forumPostReadStates = closure_27;
    } else {
      const items = [ReadStateStore];
      forumPostReadStates = ForumUtils.getForumPostReadStates(guildId, guild, items);
    }
    return forumPostReadStates;
  });
});
ReactCompilerGating = fn(558);
const tmp17 = ReactCompilerGating.isReactCompilerEnabled() ? ((template) => {
  const cResult = c.c(2);
  if (cResult[0] !== template) {
    let str2 = "";
    if (null != template) {
      str2 = "";
      if (null != template.template) {
        str2 = template.template.trim();
      }
    }
    cResult[0] = template;
    cResult[1] = str2;
    let tmp2 = str2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(() => {
    let str = "";
    if (null != closure_0) {
      str = "";
      if (null != closure_0.template) {
        str = closure_0.template.trim();
      }
    }
    return str;
  }, items);
});
ReactCompilerGating = fn(558);
let tmp19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return PermissionStore.can(constants3.READ_MESSAGE_HISTORY, closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => PermissionStore.can(constants3.READ_MESSAGE_HISTORY, closure_0));
});
let closure_28 = tmp19;
ReactCompilerGating = fn(558);
let tmp18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ActiveJoinedThreadsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return { activeJoinedThreads: ActiveJoinedThreadsStore.getActiveJoinedThreadsForGuild(closure_0), activeUnjoinedThreads: ActiveJoinedThreadsStore.getActiveUnjoinedThreadsForGuild(closure_0), newThreadCounts: ActiveJoinedThreadsStore.getNewThreadCountsForGuild(closure_0) };
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(first, tmp6);
  ({ activeJoinedThreads, activeUnjoinedThreads, newThreadCounts } = stateFromStoresObject);
  if (cResult[3] === activeJoinedThreads) {
    if (cResult[4] === activeUnjoinedThreads) {
      if (cResult[5] === newThreadCounts) {
        let tmp8 = cResult[6];
      }
      return tmp8;
    }
  }
  const obj2 = { activeJoinedThreads, activeUnjoinedThreads, newThreadCounts };
  cResult[3] = activeJoinedThreads;
  cResult[4] = activeUnjoinedThreads;
  cResult[5] = newThreadCounts;
  cResult[6] = obj2;
  tmp8 = obj2;
  const tmpResult = require("initialize");
}) : ((arg0) => {
  _require = arg0;
  const items = [ActiveJoinedThreadsStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({ activeJoinedThreads: ActiveJoinedThreadsStore.getActiveJoinedThreadsForGuild(closure_0), activeUnjoinedThreads: ActiveJoinedThreadsStore.getActiveUnjoinedThreadsForGuild(closure_0), newThreadCounts: ActiveJoinedThreadsStore.getNewThreadCountsForGuild(closure_0) }));
  return { activeJoinedThreads: stateFromStoresObject.activeJoinedThreads, activeUnjoinedThreads: stateFromStoresObject.activeUnjoinedThreads, newThreadCounts: stateFromStoresObject.newThreadCounts };
});
ReactCompilerGating = fn(558);
let tmp20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return PermissionStore.can(constants3.READ_MESSAGE_HISTORY, closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => PermissionStore.can(constants3.READ_MESSAGE_HISTORY, closure_0));
});
ReactCompilerGating = fn(558);
let tmp22 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(576).c(3);
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ForumSearchStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      return { isSearchLoading: ForumSearchStore.getSearchLoading(channelId), searchQuery: ForumSearchStore.getSearchQuery(channelId), searchResults: ForumSearchStore.getSearchResults(channelId) };
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = channelId(576);
  return channelId(504).useStateFromStoresObject(first, tmp6);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const items = [ForumSearchStore];
  return channelId(504).useStateFromStoresObject(items, () => ({ isSearchLoading: ForumSearchStore.getSearchLoading(channelId), searchQuery: ForumSearchStore.getSearchQuery(channelId), searchResults: ForumSearchStore.getSearchResults(channelId) }));
});
let closure_29 = tmp22;
ReactCompilerGating = fn(558);
let tmp21 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(576).c(3);
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ForumSearchStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      let searchQuery = null;
      if (null != channelId) {
        searchQuery = ForumSearchStore.getSearchQuery(tmp);
      }
      return searchQuery;
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = channelId(576);
  return channelId(504).useStateFromStores(first, tmp6);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const items = [ForumSearchStore];
  return channelId(504).useStateFromStores(items, () => {
    let searchQuery = null;
    if (null != channelId) {
      searchQuery = ForumSearchStore.getSearchQuery(tmp);
    }
    return searchQuery;
  });
});
ReactCompilerGating = fn(558);
const tmp23 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ForumSearchStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return null != ForumSearchStore.getSearchQuery(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [ForumSearchStore];
  return require("initialize").useStateFromStores(items, () => null != ForumSearchStore.getSearchQuery(closure_0));
});
ReactCompilerGating = fn(558);
let tmp25 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ActiveJoinedThreadsStore, ReadStateStore, ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp8 = cResult[3];
    }
    return tmp(504).useStateFromStores(first, tmp8);
  }
  const fn = function s() {
    const channel = ChannelStore.getChannel(closure_1);
    let isForumLikeChannelResult;
    if (channel != null) {
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
    if (isForumLikeChannelResult) {
      const activeJoinedUnreadThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedUnreadThreadsForParent(closure_0, closure_1);
      const activeUnjoinedUnreadThreadsForParent = ActiveJoinedThreadsStore.getActiveUnjoinedUnreadThreadsForParent(closure_0, closure_1);
      const ackMessageIdResult = ReadStateStore.ackMessageId(closure_1);
      if (null == ackMessageIdResult) {
        return 0;
      } else {
        let num3 = 0;
        let num2 = 0;
        const keys = Object.keys();
        if (keys !== undefined) {
          num2 = num3;
          while (keys[tmp] !== undefined) {
            let lastMessageIdResult = ReadStateStore.lastMessageId(activeJoinedUnreadThreadsForParent[tmp11].channel.id);
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
  };
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  tmp8 = fn;
  const obj = require("c");
  tmp = _require;
}) : ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const items = [ActiveJoinedThreadsStore, ReadStateStore, ChannelStore];
  return require("initialize").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_1);
    let isForumLikeChannelResult;
    if (channel != null) {
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
    if (isForumLikeChannelResult) {
      const activeJoinedUnreadThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedUnreadThreadsForParent(closure_0, closure_1);
      const activeUnjoinedUnreadThreadsForParent = ActiveJoinedThreadsStore.getActiveUnjoinedUnreadThreadsForParent(closure_0, closure_1);
      const ackMessageIdResult = ReadStateStore.ackMessageId(closure_1);
      if (null == ackMessageIdResult) {
        return 0;
      } else {
        let num3 = 0;
        let num2 = 0;
        const keys = Object.keys();
        if (keys !== undefined) {
          num2 = num3;
          while (keys[tmp] !== undefined) {
            let lastMessageIdResult = ReadStateStore.lastMessageId(activeJoinedUnreadThreadsForParent[tmp11].channel.id);
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
});
let closure_30 = tmp25;
ReactCompilerGating = fn(558);
const tmp24 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1, arg2, arg3) => {
  _require = id;
  importDefault = arg1;
  dependencyMap = arg2;
  const cResult = require("c").c(13);
  asyncGeneratorStep = tmp2;
  if (cResult[0] !== id.id) {
    let obj2 = { channelId: id.id };
    cResult[0] = id.id;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  const tmp4 = closure_29(tmp3);
  const isSearchLoading = tmp4.isSearchLoading;
  const searchQuery = tmp4.searchQuery;
  const tmp5 = closure_28(id);
  closure_6 = tmp5;
  ActiveThreadsStore = isSearchLoading.useRef(null);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const _Set = Set;
    const set = new Set();
    cResult[2] = set;
    let tmp6 = set;
  } else {
    tmp6 = cResult[2];
  }
  ThreadMessageStore = obj3.useRef(tmp6);
  if (cResult[3] === tmp5) {
    if (cResult[4] === id.guild_id) {
      if (cResult[5] === id.id) {
        if (cResult[6] === tmp2) {
          if (cResult[7] === isSearchLoading) {
            if (cResult[8] === searchQuery) {
              if (cResult[9] === arg1) {
                if (cResult[10] === arg2) {
                  let tmp11 = cResult[11];
                  let tmp12 = cResult[12];
                }
                const effect = obj3.useEffect(tmp11, tmp12);
              }
            }
          }
        }
      }
    }
  }
  class C {
    constructor() {
      arr = searchQuery;
      if (null == searchQuery) {
        if (null != closure_7.current) {
          tmp13 = closure_1;
          tmp14 = closure_2;
          obj2 = closure_1(closure_2[35]);
          tmp15 = closure_0;
          clearForumSearchResult = obj2.clearForumSearch(closure_0.id);
          tmp.current = null;
          return;
        }
      }
      if (null != arr) {
        num2 = 0;
        if (0 !== arr.length) {
          tmp17 = closure_3;
          if (!closure_3) {
            tmp2 = closure_6;
            if (closure_6) {
              tmp7 = closure_7;
              if (closure_7.current !== arr) {
                tmp10 = isSearchLoading;
                if (!isSearchLoading) {
                  tmp11 = globalThis;
                  _setTimeout = setTimeout;
                  tmp12 = closure_3;
                  num = 350;
                  closure_0 = setTimeout(closure_3(/* F137997 */ function() { ... }), 350);
                  return () => { ... };
                }
              } else {
                tmp8 = closure_8;
                tmp9 = closure_1;
              }
            } else {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[35]);
              tmp5 = closure_0;
              clearForumSearchResult1 = obj.clearForumSearch(closure_0.id);
            }
          }
        }
      }
      return;
    }
  }
  const items = [tmp5, , , , , , , ];
  ({ guild_id: arr[1], id: arr[2] } = id);
  items[3] = undefined !== arg3 && arg3;
  items[4] = isSearchLoading;
  items[5] = searchQuery;
  items[6] = arg1;
  items[7] = arg2;
  cResult[3] = tmp5;
  cResult[4] = id.guild_id;
  cResult[5] = id.id;
  cResult[6] = undefined !== arg3 && arg3;
  cResult[7] = isSearchLoading;
  cResult[8] = searchQuery;
  cResult[9] = arg1;
  cResult[10] = arg2;
  cResult[11] = C;
  cResult[12] = items;
  tmp12 = items;
  tmp11 = C;
}) : ((channelId, arg1, arg2) => {
  let user = channelId;
  closure_1 = arg1;
  dependencyMap = arg2;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  const tmp = closure_29({ channelId: channelId.id });
  const isSearchLoading = tmp.isSearchLoading;
  const searchQuery = tmp.searchQuery;
  const tmp2 = closure_28(channelId);
  closure_6 = tmp2;
  isSearchLoading.useRef(null);
  isSearchLoading.useRef(new Set());
  const items = [tmp2, , , , , , , ];
  ({ guild_id: arr[1], id: arr[2] } = channelId);
  items[3] = flag;
  items[4] = isSearchLoading;
  items[5] = searchQuery;
  items[6] = arg1;
  items[7] = arg2;
  const effect = isSearchLoading.useEffect(() => {
    if (null == searchQuery) {
      if (null != ref.current) {
        closure_1(7541).clearForumSearch(user.id);
        tmp.current = null;
        const obj2 = closure_1(7541);
      }
    }
    if (null != searchQuery) {
      if (0 !== searchQuery.length) {
        if (!flag) {
          if (closure_6) {
            if (ref.current !== searchQuery) {
              if (!isSearchLoading) {
                const _setTimeout = setTimeout;
                user = setTimeout(flag(function*() {
                  ref.current = current2;
                  ref2.current = current;
                  c2 = 1;
                  yield closure_2_1(dependencyMap[35]).searchForumPosts(c0.guild_id, c0.id, current2, current, c2);
                  if (1 === tmp6) {
                    c2 = 0;
                    c0 = 3;
                  } else if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 !== 2) {
                    c2 = 0;
                  }
                  c2 = 0;
                  return value;
                }), 350);
                return () => clearTimeout(closure_0);
              }
            }
          } else {
            closure_1(7541).clearForumSearch(user.id);
            const obj = closure_1(7541);
          }
        }
      }
    }
  }, items);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/ForumHooks.tsx");

export const useLoadForumUnreadCounts = tmp3;
export const useExistingPin = tmp4;
export const useFacepileUsers = tmp5;
export const useLastActiveTimestamp = tmp6;
export const useMostUsedReaction = tmp7;
export const useDefaultReactionEmoji = tmp8;
export const useSomeForumPostReactions = tmp9;
export const useMaxPossibleForumPostReactions = tmp10;
export const useMessageCount = tmp11;
export const useForumPostMessageAuthor = tmp12;
export const useForumPostAuthor = tmp13;
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
export const useForumPostFirstMessageMarkup = tmp14;
export const useCanManageChannel = tmp15;
export const useForumPostReadStates = tmp16;
export const useChannelTemplate = tmp17;
export const useForumThreadsForChannelList = tmp18;
export const useCanSearchForumPosts = tmp19;
export const useCanViewArchivedPosts = tmp20;
export const useForumSearchQuery = tmp21;
export const useForumSearchState = tmp22;
export const useHasForumSearchQuery = tmp23;
export const useAutomaticForumSearch = tmp24;
export const useUnreadThreadsCountForParent = tmp25;
export const useForumActiveThreadIds = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(tagFilter[21]).c(15);
  channel = channel.channel;
  const sortOrder = channel.sortOrder;
  tagFilter = channel.tagFilter;
  const tagSetting = channel.tagSetting;
  const shouldAutomaticallyAck = channel.shouldAutomaticallyAck;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ForumActivePostStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.id) {
    if (cResult[2] === sortOrder) {
      if (cResult[3] === tagFilter) {
        if (cResult[4] === tagSetting) {
          let tmp6 = cResult[5];
        }
        const stateFromStoresArray = tmp(tmp2[22]).useStateFromStoresArray(first, tmp6);
        const tmp9 = closure_30(channel.guild_id, channel.id);
        closure_5 = tmp9;
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [ForumActivePostStore];
          cResult[6] = items1;
          let tmp10 = items1;
        } else {
          tmp10 = cResult[6];
        }
        if (cResult[7] === tmp9) {
          if (cResult[8] === shouldAutomaticallyAck) {
            let tmp12 = cResult[9];
            let tmp13 = cResult[10];
          }
          const stateFromStores = tmp(tmp2[22]).useStateFromStores(tmp10, tmp12, tmp13);
          if (cResult[11] === stateFromStores) {
            if (cResult[12] === channel) {
              let tmp15 = cResult[13];
              let tmp16 = cResult[14];
            }
            const effect = shouldAutomaticallyAck.useEffect(tmp15, tmp16);
            return stateFromStoresArray;
          }
          class T {
            constructor() {
              if (closure_6) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[36]);
                tmp3 = channel;
                obj1 = { object: null, objectType: null };
                tmp4 = AnalyticsObjects;
                obj1.object = AnalyticsObjects.ACK_FORUM_ACTIVE_THREADS;
                tmp5 = AnalyticsObjectTypes;
                obj1.objectType = AnalyticsObjectTypes.ACK_AUTOMATIC;
                ackChannelResult = obj.ackChannel(channel, obj1);
              }
              return;
            }
          }
          const items2 = [channel, stateFromStores];
          cResult[11] = stateFromStores;
          cResult[12] = channel;
          cResult[13] = T;
          cResult[14] = items2;
          tmp16 = items2;
          tmp15 = T;
          const tmpResult2 = tmp(tmp2[22]);
        }
        const fn2 = function _() {
          let tmp = shouldAutomaticallyAck;
          if (shouldAutomaticallyAck) {
            let canAckThreads = closure_5 > 0;
            if (!canAckThreads) {
              canAckThreads = ForumActivePostStore.getCanAckThreads();
            }
            tmp = canAckThreads;
          }
          return tmp;
        };
        const items3 = [shouldAutomaticallyAck, tmp9];
        cResult[7] = tmp9;
        cResult[8] = shouldAutomaticallyAck;
        cResult[9] = fn2;
        cResult[10] = items3;
        tmp13 = items3;
        tmp12 = fn2;
        const tmpResult = tmp(tmp2[22]);
      }
    }
  }
  const fn = function i() {
    return ForumActivePostStore.getThreadIds(channel.id, sortOrder, tagFilter, tagSetting);
  };
  cResult[1] = channel.id;
  cResult[2] = sortOrder;
  cResult[3] = tagFilter;
  cResult[4] = tagSetting;
  cResult[5] = fn;
  tmp6 = fn;
  let obj = channel(tagFilter[21]);
}) : ((channel) => {
  channel = channel.channel;
  ({ sortOrder: importDefault, tagFilter: dependencyMap, tagSetting: asyncGeneratorStep, shouldAutomaticallyAck } = channel);
  const items = [ForumActivePostStore];
  const stateFromStoresArray = channel(504).useStateFromStoresArray(items, () => ForumActivePostStore.getThreadIds(channel.id, importDefault, dependencyMap, asyncGeneratorStep));
  const tmp2 = closure_30(channel.guild_id, channel.id);
  closure_5 = tmp2;
  let obj = channel(504);
  const items1 = [ForumActivePostStore];
  const items2 = [shouldAutomaticallyAck, tmp2];
  const stateFromStores = channel(504).useStateFromStores(items1, () => {
    let tmp = shouldAutomaticallyAck;
    if (shouldAutomaticallyAck) {
      let canAckThreads = closure_5 > 0;
      if (!canAckThreads) {
        canAckThreads = ForumActivePostStore.getCanAckThreads();
      }
      tmp = canAckThreads;
    }
    return tmp;
  }, items2);
  const items3 = [channel, stateFromStores];
  const effect = shouldAutomaticallyAck.useEffect(() => {
    if (stateFromStores) {
      const obj2 = { object: constants2.ACK_FORUM_ACTIVE_THREADS, objectType: constants.ACK_AUTOMATIC };
      ReadStateActionCreators.ackChannel(channel, obj2);
    }
  }, items3);
  return stateFromStoresArray;
});