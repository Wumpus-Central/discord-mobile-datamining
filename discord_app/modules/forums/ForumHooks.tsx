// discord_app/modules/forums/ForumHooks.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import react2 from "../../../_runtime/00576_react.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import ThreadConstants from "../threads/ThreadConstants.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import ChannelConstants from "../channel/ChannelConstants.tsx";
import ThreadSortOrder from "../../../discord_common/js/shared/shared-constants/ThreadSortOrder.tsx";
import useMessageAuthor from "../messages/useMessageAuthor.tsx";
import ReadStateActionCreators from "../../actions/ReadStateActionCreators.tsx";
import ForumConstants from "ForumConstants.tsx";
import ForumUtils from "ForumUtils.tsx";
import ThreadUtils from "../threads/ThreadUtils.tsx";
import renderMessageMarkupDefault from "../messages/renderMessageMarkup.tsx";
import ForumPostMediaUtils from "ForumPostMediaUtils.tsx";
import _asyncToGenerator_mod from "../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../_runtime/00019_react.js";
import EmojiStore from "../emojis/EmojiStore.tsx";
import ActiveJoinedThreadsStore from "../threads/ActiveJoinedThreadsStore.tsx";
import ActiveThreadsStore_mod from "../threads/ActiveThreadsStore.tsx";
import ThreadMessageStore_mod from "../threads/ThreadMessageStore.tsx";
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
import Constants from "../../Constants.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require,
  c0,
  channelId,
  clearForumSearchResult,
  clearForumSearchResult1,
  defaultReactionEmoji,
  dependencyMap,
  dispatchResult,
  importDefault,
  obj1,
  set;

let closure_20;
let closure_21;
let closure_22;
let closure_23;
const f95130 = (burst_count) => burst_count.burst_count;
let _asyncToGenerator = _asyncToGenerator_mod;
let ActiveThreadsStore = ActiveThreadsStore_mod;
let ThreadMessageStore = ThreadMessageStore_mod;
const ForumTimestampFormats = ForumConstants.ForumTimestampFormats;
({
  AnalyticsObjectTypes: closure_20,
  AnalyticsObjects: closure_21,
  EMPTY_STRING_SNOWFLAKE_ID: closure_22,
  Permissions: closure_23,
} = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
let closure_25 = ThreadConstants.MAX_THREAD_UNREAD_MESSAGE_COUNT;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild_id, arg1, arg2, arg3) => {
      let closure_1;
      let closure_2;
      let first;
      let tmp6;
      _require = guild_id;
      importDefault = arg1;
      dependencyMap = arg2;
      let closure_3 = arg3;
      let obj = require("react");
      const cResult = obj.c(11);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ActiveThreadsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild_id.guild_id) {
        const fn = function c() {
          return ActiveThreadsStore.hasLoaded(guild_id.guild_id);
        };
        cResult[1] = guild_id.guild_id;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === guild_id.guild_id) {
        if (cResult[4] === guild_id.id) {
          if (cResult[5] === stateFromStores) {
            if (cResult[6] === arg1) {
              if (cResult[7] === arg2) {
                let tmp8;
                let tmp9;
                if (cResult[8] === arg3) {
                  tmp8 = cResult[9];
                  tmp9 = cResult[10];
                }
                const effect = stateFromStores.useEffect(tmp8, tmp9);
              }
            }
          }
        }
      }
      class S {
        constructor() {
          tmp = closure_4;
          if (tmp) {
            tmp2 = closure_15;
            tmp3 = closure_0;
            tmp4 = closure_1;
            tmp5 = closure_2;
            tmp6 = closure_3;
            tmp7 = closure_15;
            tmp8 = closure_17;
            threadIdsMissingCounts = closure_17.getThreadIdsMissingCounts(
              closure_0.guild_id,
              closure_15.getThreadIds(closure_0.id, closure_1, closure_2, closure_3),
            );
            found = threadIdsMissingCounts.filter((item) => {
              const items = [trackedAckMessageId];
              const obj = guild_id(closure_1_2[23]);
              return obj.canDisplayPostUnreadMessageCount(item, items);
            });
            num = 180;
            num2 = 0;
            substr = found.slice(0, 180);
            mapped = substr.map((threadId) => {
              const obj = { threadId, ackMessageId: trackedAckMessageId.getTrackedAckMessageId(threadId) };
              return obj;
            });
            if (mapped.length > 0) {
              tmp9 = closure_1;
              tmp10 = closure_2;
              obj = closure_1(closure_2[24]);
              obj1 = { type: "REQUEST_FORUM_UNREADS", guildId: null, channelId: null, threads: null };
              ({ guild_id: obj2.guildId, id: obj2.channelId } = tmp3);
              obj1.threads = mapped;
              dispatchResult = obj.dispatch(obj1);
            }
          }
          return;
        }
      }
      const items1 = [, , , , ,];
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
    }
  : (arg0, arg1, arg2, arg3) => {
      let closure_0;
      let closure_2;
      _require = arg0;
      let closure_1 = arg1;
      dependencyMap = arg2;
      let closure_3 = arg3;
      let obj = require("get initialized");
      let items = [ActiveThreadsStore];
      const stateFromStores = obj.useStateFromStores(items, () => ActiveThreadsStore.hasLoaded(closure_0.guild_id));
      const items1 = [, , , , ,];
      ({ id: arr2[0], guild_id: arr2[1] } = arg0);
      items1[2] = stateFromStores;
      items1[3] = arg2;
      items1[4] = arg1;
      items1[5] = arg3;
      const effect = stateFromStores.useEffect(() => {
        let trackedAckMessageId;
        if (stateFromStores) {
          const threadIdsMissingCounts = ForumPostUnreadCountStore.getThreadIdsMissingCounts(
            closure_0.guild_id,
            ForumActivePostStore.getThreadIds(closure_0.id, closure_1, closure_2, closure_3),
          );
          const found = threadIdsMissingCounts.filter((item) => {
            const items = [trackedAckMessageId];
            const obj = closure_1_0(closure_1_2[23]);
            return obj.canDisplayPostUnreadMessageCount(item, items);
          });
          const substr = found.slice(0, 180);
          const mapped = substr.map((threadId) => {
            const obj = { threadId, ackMessageId: trackedAckMessageId.getTrackedAckMessageId(threadId) };
            return obj;
          });
          if (mapped.length > 0) {
            let obj = DispatcherDefault;
            const obj3 = { type: "REQUEST_FORUM_UNREADS", guildId: null, channelId: null, threads: mapped };
            ({ guild_id: obj2.guildId, id: obj2.channelId } = closure_0);
            obj.dispatch(obj3);
          }
        }
      }, items1);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild_id) => {
      let first;
      _require = guild_id;
      let tmp = _require;
      const obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ActiveThreadsStore, ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guild_id.guild_id) {
        let tmp7;
        if (cResult[2] === guild_id.parent_id) {
          tmp7 = cResult[3];
        }
        let tmpResult = tmp(504);
        return tmpResult.useStateFromStores(first, tmp7);
      }
      const fn = function o() {
        const tmp = _modDef12;
        const tmpResult = tmp(ActiveThreadsStore.getThreadsForParent(guild_id.guild_id, guild_id.parent_id));
        const keys = tmpResult.keys();
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
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [ActiveThreadsStore, ChannelStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        const tmp = _modDef12;
        const tmpResult = tmp(ActiveThreadsStore.getThreadsForParent(closure_0.guild_id, closure_0.parent_id));
        const keys = tmpResult.keys();
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      let stateFromStoresArray;
      let tmp6;
      _require = arg0;
      importDefault = arg1;
      const obj = require("react");
      const cResult = obj.c(6);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg1) {
        const fn = function i() {
          let user;
          const mapped = closure_1.map((item) => user.getUser(item));
          return mapped.filter(GlobalUtils.isNotNullish);
        };
        cResult[1] = arg1;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(stateFromStoresArray[22]);
      stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp6);
      if (cResult[3] === arg0) {
        let tmp8;
        if (cResult[4] === stateFromStoresArray) {
          tmp8 = cResult[5];
        }
        require("useMountEffect")(tmp8);
        return stateFromStoresArray;
      }
      const fn2 = function u() {
        let guild_id;
        const item = stateFromStoresArray.forEach((id) => {
          const member = GuildMemberRequesterStore.requestMember(guild_id.guild_id, id.id);
        });
      };
      cResult[3] = arg0;
      cResult[4] = stateFromStoresArray;
      cResult[5] = fn2;
      tmp8 = fn2;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let stateFromStoresArray;
      _require = arg0;
      importDefault = arg1;
      const items = [UserStore];
      const obj = require("get initialized");
      stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
        let user;
        const mapped = closure_1.map((item) => user.getUser(item));
        return mapped.filter(GlobalUtils.isNotNullish);
      });
      require("useMountEffect")(() => {
        let guild_id;
        const item = stateFromStoresArray.forEach((id) => {
          const member = GuildMemberRequesterStore.requestMember(guild_id.guild_id, id.id);
        });
      });
      return stateFromStoresArray;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id, arg1, DURATION_AGO) => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(10);
      if (undefined === DURATION_AGO) {
        DURATION_AGO = ForumTimestampFormats.DURATION_AGO;
      }
      if (cResult[0] !== id.id) {
        const obj2 = SnowflakeUtilsDefault;
        const extractTimestampResult = obj2.extractTimestamp(id.id);
        cResult[0] = id.id;
        cResult[1] = extractTimestampResult;
        tmp5 = extractTimestampResult;
      } else {
        tmp5 = cResult[1];
      }
      const tmpResult = ThreadUtils;
      const lastMessageTimestamp = tmpResult.useLastMessageTimestamp(id);
      if (cResult[2] === DURATION_AGO) {
        let tmp9;
        let timestampString;
        if (cResult[3] === arg1) {
          tmp9 = cResult[4];
        }
        if (cResult[5] === tmp9) {
          if (cResult[6] === lastMessageTimestamp) {
            if (cResult[7] === arg1) {
              let tmp11;
              if (cResult[8] === tmp5) {
                tmp11 = cResult[9];
              }
              return tmp11;
            }
          }
        }
        if (arg1 === ThreadSortOrder.ThreadSortOrder.CREATION_DATE) {
          const tmpResult4 = ThreadUtils;
          timestampString = tmpResult4.getTimestampString(tmp5, tmp9);
        } else {
          const tmpResult5 = ThreadUtils;
          timestampString = tmpResult5.getTimestampString(lastMessageTimestamp, tmp9);
        }
        cResult[5] = tmp9;
        cResult[6] = lastMessageTimestamp;
        cResult[7] = arg1;
        cResult[8] = tmp5;
        cResult[9] = timestampString;
        tmp11 = timestampString;
      }
      const tmpResult6 = ForumUtils;
      const forumTimestampFormatter = tmpResult6.getForumTimestampFormatter(arg1, DURATION_AGO);
      cResult[2] = DURATION_AGO;
      cResult[3] = arg1;
      cResult[4] = forumTimestampFormatter;
      tmp9 = forumTimestampFormatter;
    }
  : (id, arg1) => {
      _require = id;
      let closure_1 = arg1;
      let DURATION_AGO = arg2;
      if (arg2 === undefined) {
        DURATION_AGO = ForumTimestampFormats.DURATION_AGO;
      }
      let lastMessageTimestamp;
      const items = [id.id];
      const memo = lastMessageTimestamp.useMemo(() => {
        const obj = SnowflakeUtilsDefault;
        return obj.extractTimestamp(id.id);
      }, items);
      let obj = require("ThreadUtils");
      lastMessageTimestamp = obj.useLastMessageTimestamp(id);
      const items1 = [arg1, DURATION_AGO];
      const memo1 = lastMessageTimestamp.useMemo(() => {
        const obj = ForumUtils;
        return obj.getForumTimestampFormatter(closure_1, DURATION_AGO);
      }, items1);
      const items2 = [lastMessageTimestamp, arg1, memo, memo1];
      return lastMessageTimestamp.useMemo(() => {
        let timestampString;
        if (closure_1 === ThreadSortOrder.ThreadSortOrder.CREATION_DATE) {
          const tmpResult = ThreadUtils;
          timestampString = tmpResult.getTimestampString(memo, memo1);
        } else {
          const tmpResult2 = ThreadUtils;
          timestampString = tmpResult2.getTimestampString(lastMessageTimestamp, memo1);
        }
        return timestampString;
      }, items2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (reactions) => {
      let arr;
      const obj = react2;
      const cResult = obj.c(4);
      reactions = undefined;
      const first = cResult[0];
      if (reactions != null) {
        reactions = reactions.reactions;
      }
      if (first !== reactions) {
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
        arr = reactions1;
      } else {
        arr = cResult[1];
      }
      let first1;
      if (0 !== arr.length) {
        let tmp7;
        if (cResult[2] !== arr) {
          const items = [(count) => count.count + count.burst_count, f95130];
          const obj2 = _modDef12;
          const orderByResult = obj2.orderBy(arr, items, ["desc", "desc"]);
          cResult[2] = arr;
          cResult[3] = orderByResult;
          tmp7 = orderByResult;
        } else {
          tmp7 = cResult[3];
        }
        first1 = tmp7[0];
      }
      return first1;
    }
  : (reactions) => {
      reactions = undefined;
      const useMemo = react.useMemo;
      if (reactions != null) {
        reactions = reactions.reactions;
      }
      let items = [reactions];
      return useMemo(() => {
        reactions = undefined;
        if (reactions != null) {
          reactions = reactions.reactions;
        }
        if (reactions == null) {
          reactions = [];
        }
        if (0 !== reactions.length) {
          const items = [(count) => count.count + count.burst_count, f95130];
          const obj = _modDef12;
          return obj.orderBy(reactions, items, ["desc", "desc"])[0];
        }
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (defaultReactionEmoji) => {
      let first;
      let tmp7;
      const obj = defaultReactionEmoji(576);
      const cResult = obj.c(10);
      const tmp = defaultReactionEmoji;
      defaultReactionEmoji = undefined;
      if (defaultReactionEmoji != null) {
        defaultReactionEmoji = defaultReactionEmoji.defaultReactionEmoji;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmojiStore];
        cResult[0] = items;
        first = items;
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
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      let tmp9 = null;
      if (null != defaultReactionEmoji) {
        let tmp10;
        if (null != defaultReactionEmoji.emojiId) {
          if (null != stateFromStores) {
            if (cResult[3] === stateFromStores.animated) {
              if (cResult[4] === stateFromStores.name) {
                let tmp12;
                if (cResult[5] === defaultReactionEmoji.emojiId) {
                  tmp12 = cResult[6];
                }
                tmp10 = tmp12;
              }
            }
            const obj2 = { id: defaultReactionEmoji.emojiId, name: null, animated: null };
            ({ name: obj4.name, animated: obj4.animated } = stateFromStores);
            cResult[3] = stateFromStores.animated;
            cResult[4] = stateFromStores.name;
            cResult[5] = defaultReactionEmoji.emojiId;
            cResult[6] = obj2;
            tmp12 = obj2;
          }
          tmp9 = tmp10;
        }
        tmp10 = null;
        if (null != defaultReactionEmoji.emojiName) {
          if (cResult[7] === defaultReactionEmoji.emojiId) {
            let tmp11;
            if (cResult[8] === defaultReactionEmoji.emojiName) {
              tmp11 = cResult[9];
            }
            tmp10 = tmp11;
          }
          const obj6 = { id: null, name: null, animated: false };
          ({ emojiId: obj3.id, emojiName: obj3.name } = defaultReactionEmoji);
          cResult[7] = defaultReactionEmoji.emojiId;
          cResult[8] = defaultReactionEmoji.emojiName;
          cResult[9] = obj6;
          tmp11 = obj6;
        }
      }
      return tmp9;
    }
  : (defaultReactionEmoji) => {
      defaultReactionEmoji = undefined;
      if (defaultReactionEmoji != null) {
        defaultReactionEmoji = defaultReactionEmoji.defaultReactionEmoji;
      }
      const items = [EmojiStore];
      const obj = defaultReactionEmoji(504);
      const stateFromStores = obj.useStateFromStores(items, () => {
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
      let tmp3 = null;
      if (null != defaultReactionEmoji) {
        let tmp4;
        if (null != defaultReactionEmoji.emojiId) {
          if (null != stateFromStores) {
            const obj5 = { id: defaultReactionEmoji.emojiId, name: null, animated: null };
            ({ name: obj3.name, animated: obj3.animated } = stateFromStores);
            tmp4 = obj5;
          }
          tmp3 = tmp4;
        }
        tmp4 = null;
        if (null != defaultReactionEmoji.emojiName) {
          const obj6 = { id: null, name: null, animated: false };
          ({ emojiId: obj2.id, emojiName: obj2.name } = defaultReactionEmoji);
          tmp4 = obj6;
        }
      }
      return tmp3;
    };
let closure_26 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (parentChannel) => {
      let count;
      let message;
      let sorted;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(14);
      ({ message, count, sorted } = parentChannel);
      let num = 1;
      parentChannel = parentChannel.parentChannel;
      if (undefined !== count) {
        num = count;
      }
      const tmp4 = closure_26(parentChannel);
      let reactions;
      const first = cResult[0];
      if (message != null) {
        reactions = message.reactions;
      }
      if (first !== reactions) {
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
        tmp7 = reactions1;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === tmp7) {
        let arr2;
        if (cResult[3] === (undefined === sorted || sorted)) {
          arr2 = cResult[4];
        }
        if (cResult[5] === num) {
          if (cResult[6] === tmp4) {
            let tmp10;
            let tmp11;
            if (cResult[7] === arr2) {
              tmp10 = cResult[8];
              tmp11 = cResult[9];
            }
            if (cResult[11] === tmp10) {
              let tmp19;
              if (cResult[12] === tmp11) {
                tmp19 = cResult[13];
              }
              return tmp19;
            }
            const obj3 = { reactions: tmp10, additionalNonUniqueReactionCount: tmp11 };
            cResult[11] = tmp10;
            cResult[12] = tmp11;
            cResult[13] = obj3;
            tmp19 = obj3;
          }
        }
        let items = [];
        if (null != tmp4) {
          const items1 = [{ emoji: tmp4, me: false, count: 0, burst_count: 0, me_burst: false }];
          items = items1;
          const obj4 = { emoji: tmp4, me: false, count: 0, burst_count: 0, me_burst: false };
        }
        if (arr2.length > 0) {
          items = arr2;
        }
        const substr = items.slice(0, num);
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor(count) {
              return count.count + count.burst_count;
            }
          }
          cResult[10] = T;
        } else {
          class T {
            constructor(count) {
              return count.count + count.burst_count;
            }
          }
        }
        const sum = _modDef12.sum;
        _modDef12;
        const substr1 = items.slice(num, items.length);
        const sumResult = sum(substr1.map(T));
        cResult[5] = num;
        cResult[6] = tmp4;
        cResult[7] = arr2;
        cResult[8] = substr;
        cResult[9] = sumResult;
        tmp11 = sumResult;
        tmp10 = substr;
      }
      let orderByResult = tmp7;
      if (undefined === sorted || sorted) {
        class T {
          constructor(count) {
            return count.count + count.burst_count;
          }
        }
        const items2 = [(count) => count.count + count.burst_count, f95130];
        const obj2 = _modDef12;
        orderByResult = obj2.orderBy(tmp7, items2, ["desc", "desc"]);
      }
      cResult[2] = tmp7;
      cResult[3] = undefined === sorted || sorted;
      cResult[4] = orderByResult;
      arr2 = orderByResult;
    }
  : (message) => {
      let substr;
      let sum;
      message = message.message;
      let num = message.count;
      const parentChannel = message.parentChannel;
      if (num === undefined) {
        num = 1;
      }
      let flag = message.sorted;
      if (flag === undefined) {
        flag = true;
      }
      const tmp = closure_26(parentChannel);
      let reactions;
      const useMemo = react.useMemo;
      if (message != null) {
        reactions = message.reactions;
      }
      let items = [reactions, flag];
      const memo = useMemo(() => {
        let reactions;
        if (message != null) {
          reactions = message.reactions;
        }
        if (reactions == null) {
          reactions = [];
        }
        let orderByResult = reactions;
        if (flag) {
          const items = [(count) => count.count + count.burst_count, f95130];
          const obj = _modDef12;
          orderByResult = obj.orderBy(reactions, items, ["desc", "desc"]);
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
      const obj2 = {
        reactions: items1.slice(0, num),
        additionalNonUniqueReactionCount: sum(substr.map((count) => count.count + count.burst_count)),
      };
      sum = flag(12).sum;
      flag(12);
      substr = items1.slice(num, items1.length);
      return obj2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      let arr2;
      let arr4;
      let containerWidth;
      let digitWidth;
      let reactionEmojiWidth;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(13);
      message = message.message;
      ({ containerWidth, reactionEmojiWidth, digitWidth } = message);
      const tmp3 = closure_26(message.parentChannel);
      let reactions;
      const first = cResult[0];
      if (message != null) {
        reactions = message.reactions;
      }
      if (first !== reactions) {
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
        tmp6 = reactions1;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== tmp6) {
        const items = [(count) => count.count + count.burst_count, f95130];
        const obj2 = _modDef12;
        const orderByResult = obj2.orderBy(tmp6, items, ["desc", "desc"]);
        cResult[2] = tmp6;
        cResult[3] = orderByResult;
        arr2 = orderByResult;
      } else {
        arr2 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [];
        cResult[4] = items1;
        arr4 = items1;
      } else {
        arr4 = cResult[4];
      }
      if (null != tmp3) {
        let tmp10;
        if (cResult[5] !== tmp3) {
          const items2 = [{ emoji: tmp3, me: false, count: 0, burst_count: 0, me_burst: false }];
          const obj3 = { emoji: tmp3, me: false, count: 0, burst_count: 0, me_burst: false };
          cResult[5] = tmp3;
          cResult[6] = items2;
          tmp10 = items2;
        } else {
          tmp10 = cResult[6];
        }
        arr4 = tmp10;
      }
      if (arr2.length > 0) {
        arr4 = arr2;
      }
      let num8 = 0;
      let num9 = 0;
      let num10 = 0;
      let num11 = 0;
      if (0 < arr4.length) {
        while (true) {
          let tmp11 = arr4[num8];
          let _Math = Math;
          let _Math2 = Math;
          let sum =
            reactionEmojiWidth +
            digitWidth * Math.ceil(Math.log10((tmp11.burst_count > 0 ? tmp11.burst_count : tmp11.count) + 1));
          num11 = num10;
          if (num9 + sum >= containerWidth) {
            break;
          } else {
            num9 = num9 + sum;
            num10 = num10 + 1;
            num8 = num8 + 1;
            num11 = num10;
            if (num8 >= arr4.length) {
              break;
            }
          }
        }
      }
      const diff = arr4.length - num11;
      let diff1 = num11;
      let sum1 = diff;
      if (0 < diff) {
        diff1 = num11 - 1;
        sum1 = diff + 1;
      }
      if (cResult[7] === arr4) {
        let tmp19;
        if (cResult[8] === diff1) {
          tmp19 = cResult[9];
        }
        if (cResult[10] === sum1) {
          let tmp21;
          if (cResult[11] === tmp19) {
            tmp21 = cResult[12];
          }
          return tmp21;
        }
        const obj4 = { reactions: tmp19, additionalReactionCount: sum1 };
        cResult[10] = sum1;
        cResult[11] = tmp19;
        cResult[12] = obj4;
        tmp21 = obj4;
      }
      const substr = arr4.slice(0, diff1);
      cResult[7] = arr4;
      cResult[8] = diff1;
      cResult[9] = substr;
      tmp19 = substr;
    }
  : (message) => {
      let containerWidth;
      let digitWidth;
      let reactionEmojiWidth;
      message = message.message;
      ({ containerWidth, reactionEmojiWidth, digitWidth } = message);
      const tmp = closure_26(message.parentChannel);
      let reactions;
      const useMemo = react.useMemo;
      if (message != null) {
        reactions = message.reactions;
      }
      let items = [reactions];
      const memo = useMemo(() => {
        let reactions;
        if (message != null) {
          reactions = message.reactions;
        }
        if (reactions == null) {
          reactions = [];
        }
        const items = [(count) => count.count + count.burst_count, f95130];
        const obj = _modDef12;
        return obj.orderBy(reactions, items, ["desc", "desc"]);
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
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      let num4 = 0;
      if (0 < items1.length) {
        while (true) {
          let tmp4 = items1[num];
          let _Math = Math;
          let _Math2 = Math;
          let sum =
            reactionEmojiWidth +
            digitWidth * Math.ceil(Math.log10((tmp4.burst_count > 0 ? tmp4.burst_count : tmp4.count) + 1));
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
      const obj2 = { reactions: items1.slice(0, diff1), additionalReactionCount: sum1 };
      return obj2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let first;
      let stateFromStores1;
      let tmp6;
      let user;
      _require = id;
      let obj = require("react");
      const cResult = obj.c(19);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ThreadMessageStore];
        let num = 0;
        cResult[0] = items;
        first = items;
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
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === id.id) {
        let tmp8;
        let tmp10;
        let tmp12;
        let tmp14;
        if (cResult[4] === stateFromStores) {
          tmp8 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [ReadStateStore];
          cResult[6] = items1;
          tmp10 = items1;
        } else {
          tmp10 = cResult[6];
        }
        if (cResult[7] !== id.id) {
          const fn2 = function h() {
            const items = [ReadStateStore];
            const obj = ForumUtils;
            return obj.canDisplayPostUnreadMessageCount(user.id, items);
          };
          cResult[7] = id.id;
          cResult[8] = fn2;
          tmp12 = fn2;
        } else {
          tmp12 = cResult[8];
        }
        const tmpResult4 = require("get initialized");
        stateFromStores1 = tmpResult4.useStateFromStores(tmp10, tmp12);
        const _Symbol2 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [ForumPostUnreadCountStore];
          cResult[9] = items2;
          tmp14 = items2;
        } else {
          tmp14 = cResult[9];
        }
        if (cResult[10] === id.id) {
          if (cResult[11] === stateFromStores1) {
            let tmp16;
            if (cResult[12] === stateFromStores) {
              tmp16 = cResult[13];
            }
            const tmpResult5 = require("get initialized");
            const stateFromStores2 = tmpResult5.useStateFromStores(tmp14, tmp16);
            let tmp19 = null != stateFromStores;
            if (tmp19) {
              let _HermesInternal = HermesInternal;
              tmp19 = "" + stateFromStores !== tmp8;
            }
            if (cResult[14] === stateFromStores) {
              if (cResult[15] === tmp8) {
                if (cResult[16] === tmp19) {
                  let tmp20;
                  if (cResult[17] === stateFromStores2) {
                    tmp20 = cResult[18];
                  }
                  return tmp20;
                }
              }
            }
            const obj2 = {
              messageCount: stateFromStores,
              isMaxMessageCount: tmp19,
              messageCountText: tmp8,
              unreadCount: stateFromStores2,
            };
            cResult[14] = stateFromStores;
            cResult[15] = tmp8;
            cResult[16] = tmp19;
            cResult[17] = stateFromStores2;
            cResult[18] = obj2;
            tmp20 = obj2;
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
                  bound = "" + tmp10 + "+";
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
      }
      const tmpResult6 = require("MessageCountUtils");
      const messageCountText = tmpResult6.getMessageCountText(stateFromStores, id.id);
      cResult[3] = id.id;
      cResult[4] = stateFromStores;
      cResult[5] = messageCountText;
      tmp8 = messageCountText;
    }
  : (id) => {
      let closure_2;
      let stateFromStores1;
      let tmp4;
      let user;
      _require = id;
      let obj = require("get initialized");
      let items = [ThreadMessageStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
        let num = ThreadMessageStore.getCount(user.id);
        if (num == null) {
          num = 0;
        }
        return num;
      });
      const obj2 = require("MessageCountUtils");
      const messageCountText = obj2.getMessageCountText(stateFromStores, id.id);
      const items1 = [ReadStateStore];
      const obj3 = require("get initialized");
      dependencyMap = obj3.useStateFromStores(items1, () => {
        const items = [ReadStateStore];
        const obj = ForumUtils;
        return obj.canDisplayPostUnreadMessageCount(user.id, items);
      });
      const items2 = [ForumPostUnreadCountStore];
      const obj5 = {
        messageCount: stateFromStores,
        isMaxMessageCount: tmp4,
        messageCountText,
        unreadCount: stateFromStores1,
      };
      tmp4 = null != stateFromStores;
      const obj4 = require("get initialized");
      stateFromStores1 = obj4.useStateFromStores(items2, () => {
        if (closure_2) {
          const count = ForumPostUnreadCountStore.getCount(user.id);
          if (null != count) {
            if (count > 0) {
              const _Math = Math;
              let bound = Math.min(count, stateFromStores);
              if (bound >= closure_25) {
                const _HermesInternal = HermesInternal;
                bound = "" + tmp10 + "+";
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
      return obj5;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (author, getGuildId) => {
      let id;
      let tmp5;
      let tmp7;
      let tmp9;
      const obj = id(576);
      const cResult = obj.c(14);
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
        tmp5 = guildId;
      } else {
        tmp5 = cResult[1];
      }
      let closure_1 = tmp5;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[2] = items;
        tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== id) {
        const fn = function h() {
          return UserStore.getUser(id);
        };
        cResult[3] = id;
        cResult[4] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[4];
      }
      const tmpResult = id(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp9);
      const tmpResult2 = id(5311);
      const nullableMessageAuthor = tmpResult2.useNullableMessageAuthor(author);
      if (cResult[5] === tmp5) {
        let tmp12;
        let tmp13;
        if (cResult[6] === id) {
          tmp12 = cResult[7];
          tmp13 = cResult[8];
        }
        const effect = react.useEffect(tmp12, tmp13);
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
              let tmp20;
              if (cResult[12] === stateFromStores) {
                tmp20 = cResult[13];
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
        const tmp2 = null != id && null != closure_1;
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
    }
  : (author, getGuildId) => {
      let colorString;
      let colorStrings;
      let id;
      if (author != null) {
        author = author.author;
        if (author != null) {
          id = author.id;
        }
      }
      const guildId = getGuildId.getGuildId();
      const items = [UserStore];
      const obj = id(504);
      const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(id));
      const obj2 = id(5311);
      const nullableMessageAuthor = obj2.useNullableMessageAuthor(author);
      const items1 = [guildId, id];
      const effect = react.useEffect(() => {
        const tmp2 = null != id && null != guildId;
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
      const obj3 = { authorName: nick, authorColor: colorString, authorColors: colorStrings, user: stateFromStores };
      colorString = undefined;
      if (nullableMessageAuthor != null) {
        colorString = nullableMessageAuthor.colorString;
      }
      if (colorString == null) {
        colorString = null;
      }
      colorStrings = undefined;
      if (nullableMessageAuthor != null) {
        colorStrings = nullableMessageAuthor.colorStrings;
      }
      if (colorStrings == null) {
        colorStrings = null;
      }
      return obj3;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (ownerId) => {
      let first;
      let tmp10;
      let tmp6;
      let tmp8;
      _require = ownerId;
      const obj = require("react");
      const cResult = obj.c(13);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== ownerId.ownerId) {
        const fn = function i() {
          return UserStore.getUser(ownerId.ownerId);
        };
        cResult[1] = ownerId.ownerId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ForumPostMessagesStore];
        cResult[3] = items1;
        tmp8 = items1;
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
        tmp10 = fn2;
      } else {
        tmp10 = cResult[5];
      }
      const tmpResult3 = require("get initialized");
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp10);
      let author;
      const useNullableUserAuthor = require("useMessageAuthor").useNullableUserAuthor;
      require("useMessageAuthor");
      if (stateFromStores1 != null) {
        author = stateFromStores1.author;
      }
      if (author == null) {
        author = stateFromStores;
      }
      const nullableUserAuthor = useNullableUserAuthor(author, ownerId);
      if (cResult[6] === ownerId.guild_id) {
        let tmp15;
        let tmp16;
        if (cResult[7] === ownerId.ownerId) {
          tmp15 = cResult[8];
          tmp16 = cResult[9];
        }
        const effect = react.useEffect(tmp15, tmp16);
        if (cResult[10] === nullableUserAuthor) {
          let tmp19;
          if (cResult[11] === stateFromStores) {
            tmp19 = cResult[12];
          }
          return tmp19;
        }
        const obj2 = { user: stateFromStores, author: nullableUserAuthor };
        cResult[10] = nullableUserAuthor;
        cResult[11] = stateFromStores;
        cResult[12] = obj2;
        tmp19 = obj2;
      }
      class S {
        constructor() {
          if (null != ownerId.ownerId) {
            const member = GuildMemberRequesterStore.requestMember(ownerId.guild_id, ownerId.ownerId);
          }
        }
      }
      const items2 = [,];
      ({ guild_id: arr3[0], ownerId: arr3[1] } = ownerId);
      cResult[6] = ownerId.guild_id;
      cResult[7] = ownerId.ownerId;
      cResult[8] = S;
      cResult[9] = items2;
      tmp16 = items2;
      tmp15 = S;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [UserStore];
      const obj = require("get initialized");
      const user = obj.useStateFromStores(items, () => UserStore.getUser(closure_0.ownerId));
      const items1 = [ForumPostMessagesStore];
      const obj2 = require("get initialized");
      const stateFromStores1 = obj2.useStateFromStores(items1, () => {
        const message = ForumPostMessagesStore.getMessage(closure_0.id);
        let firstMessage;
        if (message != null) {
          firstMessage = message.firstMessage;
        }
        return firstMessage;
      });
      let author;
      const useNullableUserAuthor = require("useMessageAuthor").useNullableUserAuthor;
      require("useMessageAuthor");
      if (stateFromStores1 != null) {
        author = stateFromStores1.author;
      }
      if (author == null) {
        author = user;
      }
      const items2 = [,];
      ({ guild_id: arr3[0], ownerId: arr3[1] } = arg0);
      const author1 = useNullableUserAuthor(author, arg0);
      const effect = react.useEffect(() => {
        if (null != closure_0.ownerId) {
          const member = GuildMemberRequesterStore.requestMember(closure_0.guild_id, closure_0.ownerId);
        }
      }, items2);
      return { user, author: author1 };
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let content;
      let firstMessage;
      let formatInline;
      let hasSpoilerEmbeds;
      let hasUnreads;
      let noStyleAndInteraction;
      let str;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(10);
      ({ firstMessage, formatInline, noStyleAndInteraction, hasUnreads } = arg0);
      if (undefined === hasUnreads) {
        str = "text-default";
      } else {
        str = "text-muted";
      }
      if (cResult[0] === firstMessage) {
        if (cResult[1] === (undefined === formatInline || formatInline)) {
          if (cResult[2] === (undefined === noStyleAndInteraction || noStyleAndInteraction)) {
            if (cResult[3] === str) {
              tmp6 = cResult[4];
            }
            ({ hasSpoilerEmbeds, content } = tmp6);
            const tmpResult = ForumPostMediaUtils;
            const findFirstMediaProperties = tmpResult.useFindFirstMediaProperties(firstMessage, hasSpoilerEmbeds);
            const tmpResult2 = ForumPostMediaUtils;
            const firstMediaIsEmbed = tmpResult2.useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds);
            if (cResult[5] === content) {
              if (cResult[6] === findFirstMediaProperties) {
                if (cResult[7] === firstMediaIsEmbed) {
                  let tmp11;
                  if (cResult[8] === hasSpoilerEmbeds) {
                    tmp11 = cResult[9];
                  }
                  return tmp11;
                }
              }
            }
            const obj2 = { hasSpoilerEmbeds, content, firstMedia: findFirstMediaProperties, firstMediaIsEmbed };
            cResult[5] = content;
            cResult[6] = findFirstMediaProperties;
            cResult[7] = firstMediaIsEmbed;
            cResult[8] = hasSpoilerEmbeds;
            cResult[9] = obj2;
            tmp11 = obj2;
          }
        }
      }
      let content1;
      if (firstMessage != null) {
        content1 = firstMessage.content;
      }
      if (null != content1) {
        let obj4;
        if ("" !== firstMessage.content) {
          const obj3 = {
            formatInline: undefined === formatInline || formatInline,
            noStyleAndInteraction: undefined === noStyleAndInteraction || noStyleAndInteraction,
            allowHeading: true,
            allowList: true,
            allowGameMentions: true,
            textColor: str,
            disablePressableChannelMention: true,
          };
          obj4 = renderMessageMarkupDefault(firstMessage, obj3);
        }
        cResult[0] = firstMessage;
        cResult[1] = undefined === formatInline || formatInline;
        cResult[2] = undefined === noStyleAndInteraction || noStyleAndInteraction;
        cResult[3] = str;
        cResult[4] = obj4;
        tmp6 = obj4;
      }
      obj4 = { hasSpoilerEmbeds: false, content: null };
    }
  : (firstMessage) => {
      let obj2;
      let obj3;
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
      const memo = react.useMemo(() => {
        let content;
        if (firstMessage != null) {
          content = firstMessage.content;
        }
        if (null != content) {
          if ("" !== firstMessage.content) {
            const obj = {
              formatInline: flag,
              noStyleAndInteraction: flag2,
              allowHeading: true,
              allowList: true,
              allowGameMentions: true,
              textColor: "",
              disablePressableChannelMention: true,
            };
            renderMessageMarkupDefault(firstMessage, obj);
          }
          return { hasSpoilerEmbeds: false, content: null };
        }
      }, items);
      const hasSpoilerEmbeds = memo.hasSpoilerEmbeds;
      let obj = {
        hasSpoilerEmbeds,
        content: memo.content,
        firstMedia: obj2.useFindFirstMediaProperties(firstMessage, hasSpoilerEmbeds),
        firstMediaIsEmbed: obj3.useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds),
      };
      obj2 = firstMessage(flag2[34]);
      obj3 = firstMessage(flag2[34]);
      return obj;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = { isNew: false, hasUnreads: false };
let tmp15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          return PermissionStore.can(constants.MANAGE_CHANNELS, closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [PermissionStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => PermissionStore.can(constants.MANAGE_CHANNELS, closure_0));
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let tmp7;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildStore, ReadStateStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          let forumPostReadStates;
          const getGuild = GuildStore.getGuild;
          const tmp2 = guildId;
          guildId = guildId.getGuildId();
          if (guildId == null) {
            guildId = afk;
          }
          const guild = getGuild(guildId);
          if (null == guild) {
            forumPostReadStates = closure_27;
          } else {
            const items = [ReadStateStore];
            const obj = ForumUtils;
            forumPostReadStates = obj.getForumPostReadStates(tmp2, guild, items);
          }
          return forumPostReadStates;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStoresObject(first, tmp7);
    }
  : (arg0) => {
      _require = arg0;
      let obj = require("get initialized");
      let items = [GuildStore, ReadStateStore];
      return obj.useStateFromStoresObject(items, () => {
        let forumPostReadStates;
        const getGuild = GuildStore.getGuild;
        const tmp2 = guildId;
        guildId = guildId.getGuildId();
        if (guildId == null) {
          guildId = afk;
        }
        const guild = getGuild(guildId);
        if (null == guild) {
          forumPostReadStates = closure_27;
        } else {
          const items = [ReadStateStore];
          const obj = ForumUtils;
          forumPostReadStates = obj.getForumPostReadStates(tmp2, guild, items);
        }
        return forumPostReadStates;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (template) => {
      let tmp2;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== template) {
        let str2 = "";
        if (null != template) {
          str2 = "";
          if (null != template.template) {
            const str3 = template.template;
            str2 = str3.trim();
          }
        }
        cResult[0] = template;
        cResult[1] = str2;
        tmp2 = str2;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : (arg0) => {
      let closure_0 = arg0;
      const items = [arg0];
      return react.useMemo(() => {
        let str = "";
        if (null != closure_0) {
          str = "";
          if (null != closure_0.template) {
            const str2 = closure_0.template;
            str = str2.trim();
          }
        }
        return str;
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let activeJoinedThreads;
      let activeUnjoinedThreads;
      let closure_0;
      let first;
      let newThreadCounts;
      let tmp6;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(7);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ActiveJoinedThreadsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          const obj = {
            activeJoinedThreads: ActiveJoinedThreadsStore.getActiveJoinedThreadsForGuild(closure_0),
            activeUnjoinedThreads: ActiveJoinedThreadsStore.getActiveUnjoinedThreadsForGuild(closure_0),
            newThreadCounts: ActiveJoinedThreadsStore.getNewThreadCountsForGuild(closure_0),
          };
          return obj;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6);
      ({ activeJoinedThreads, activeUnjoinedThreads, newThreadCounts } = stateFromStoresObject);
      if (cResult[3] === activeJoinedThreads) {
        if (cResult[4] === activeUnjoinedThreads) {
          let tmp8;
          if (cResult[5] === newThreadCounts) {
            tmp8 = cResult[6];
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
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("get initialized");
      const items = [ActiveJoinedThreadsStore];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
        const obj = {
          activeJoinedThreads: ActiveJoinedThreadsStore.getActiveJoinedThreadsForGuild(closure_0),
          activeUnjoinedThreads: ActiveJoinedThreadsStore.getActiveUnjoinedThreadsForGuild(closure_0),
          newThreadCounts: ActiveJoinedThreadsStore.getNewThreadCountsForGuild(closure_0),
        };
        return obj;
      });
      return {
        activeJoinedThreads: stateFromStoresObject.activeJoinedThreads,
        activeUnjoinedThreads: stateFromStoresObject.activeUnjoinedThreads,
        newThreadCounts: stateFromStoresObject.newThreadCounts,
      };
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          return PermissionStore.can(constants.READ_MESSAGE_HISTORY, closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [PermissionStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => PermissionStore.can(constants.READ_MESSAGE_HISTORY, closure_0));
    };
let closure_28 = tmp19;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          return PermissionStore.can(constants.READ_MESSAGE_HISTORY, closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [PermissionStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => PermissionStore.can(constants.READ_MESSAGE_HISTORY, closure_0));
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let tmp6;
      const tmp = channelId;
      const obj = channelId(576);
      const cResult = obj.c(3);
      channelId = channelId.channelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ForumSearchStore];
        cResult[0] = items;
        first = items;
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
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const items = [ForumSearchStore];
      const obj = channelId(504);
      return obj.useStateFromStores(items, () => {
        let searchQuery = null;
        if (null != channelId) {
          searchQuery = ForumSearchStore.getSearchQuery(tmp);
        }
        return searchQuery;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let tmp6;
      let obj = channelId(576);
      const cResult = obj.c(3);
      const tmp = channelId;
      channelId = channelId.channelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ForumSearchStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function o() {
          const obj = {
            isSearchLoading: ForumSearchStore.getSearchLoading(channelId),
            searchQuery: ForumSearchStore.getSearchQuery(channelId),
            searchResults: ForumSearchStore.getSearchResults(channelId),
          };
          return obj;
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStoresObject(first, tmp6);
    }
  : (channelId) => {
      channelId = channelId.channelId;
      let obj = channelId(504);
      const items = [ForumSearchStore];
      return obj.useStateFromStoresObject(items, () => {
        const obj = {
          isSearchLoading: ForumSearchStore.getSearchLoading(channelId),
          searchQuery: ForumSearchStore.getSearchQuery(channelId),
          searchResults: ForumSearchStore.getSearchResults(channelId),
        };
        return obj;
      });
    };
let closure_29 = tmp22;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ForumSearchStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          return null != ForumSearchStore.getSearchQuery(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [ForumSearchStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => null != ForumSearchStore.getSearchQuery(closure_0));
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp24 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (id, arg1, arg2, arg3) {
      let closure_1;
      let closure_2;
      let closure_3;
      let ref;
      let ref2;
      let tmp3;
      let tmp6;
      _require = id;
      importDefault = arg1;
      dependencyMap = arg2;
      let obj = require("react");
      const cResult = obj.c(13);
      const tmp2 = undefined !== arg3 && arg3;
      _asyncToGenerator = tmp2;
      if (cResult[0] !== id.id) {
        let obj2 = { channelId: id.id };
        cResult[0] = id.id;
        cResult[1] = obj2;
        tmp3 = obj2;
      } else {
        tmp3 = cResult[1];
      }
      const tmp4 = closure_29(tmp3);
      const isSearchLoading = tmp4.isSearchLoading;
      const searchQuery = tmp4.searchQuery;
      const tmp5 = closure_28(id);
      let closure_6 = tmp5;
      let obj3 = isSearchLoading;
      ActiveThreadsStore = isSearchLoading.useRef(null);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
        cResult[2] = set;
        tmp6 = set;
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
                    let tmp9;
                    let tmp10;
                    if (cResult[10] === arg2) {
                      tmp9 = cResult[11];
                      tmp10 = cResult[12];
                    }
                    const effect = obj3.useEffect(tmp9, tmp10);
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
              if (!tmp17) {
                tmp2 = closure_6;
                if (tmp2) {
                  tmp7 = closure_7;
                  if (closure_7.current !== arr) {
                    tmp10 = isSearchLoading;
                    if (!tmp10) {
                      tmp11 = globalThis;
                      _setTimeout = setTimeout;
                      tmp12 = closure_3;
                      num = 350;
                      closure_0 = setTimeout(
                        closure_3(function () {
                          /* body not rendered: F138442 */
                        }),
                        350,
                      );
                      return () => {
                        /* body not rendered: F138443 */
                      };
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
      const items = [tmp5, , , , , , ,];
      ({ guild_id: arr[1], id: arr[2] } = id);
      items[3] = tmp2;
      items[4] = isSearchLoading;
      items[5] = searchQuery;
      items[6] = arg1;
      items[7] = arg2;
      cResult[3] = tmp5;
      cResult[4] = id.guild_id;
      cResult[5] = id.id;
      cResult[6] = tmp2;
      cResult[7] = isSearchLoading;
      cResult[8] = searchQuery;
      cResult[9] = arg1;
      cResult[10] = arg2;
      cResult[11] = C;
      cResult[12] = items;
      tmp10 = items;
      tmp9 = C;
    }
  : (channelId, arg1, arg2) => {
      let ref2;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let flag = arg3;
      if (arg3 === undefined) {
        flag = false;
      }
      let obj = { channelId: channelId.id };
      const tmp = closure_29(obj);
      const isSearchLoading = tmp.isSearchLoading;
      const searchQuery = tmp.searchQuery;
      const tmp2 = closure_28(channelId);
      let closure_6 = tmp2;
      const ref = isSearchLoading.useRef(null);
      const useRef = isSearchLoading.useRef;
      set = new Set();
      useRef(set);
      const items = [tmp2, , , , , , ,];
      ({ guild_id: arr[1], id: arr[2] } = channelId);
      items[3] = flag;
      items[4] = isSearchLoading;
      items[5] = searchQuery;
      items[6] = arg1;
      items[7] = arg2;
      const effect = isSearchLoading.useEffect(() => {
        let closure_0;
        if (null == searchQuery) {
          if (null != ref.current) {
            let obj2 = closure_1(closure_2[35]);
            const tmp15 = channelId;
            obj2.clearForumSearch(channelId.id);
            tmp.current = null;
          }
        }
        if (null != searchQuery) {
          if (0 !== searchQuery.length) {
            if (!flag) {
              if (closure_6) {
                if (ref.current !== searchQuery) {
                  if (!isSearchLoading) {
                    const _setTimeout = setTimeout;
                    channelId = setTimeout(
                      flag(function* () {
                        let current;
                        if (c0 === 2) {
                          c0 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp2 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            return { value: "IconComponent", done: null };
                          }
                        } else {
                          let c2;
                          try {
                            c0 = 2;
                            if (0 === current) {
                              if (arg0 === 1) {
                                c0 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c0 = 3;
                                const obj4 = { value, done: true };
                                return obj4;
                              } else {
                                ref.current = current2;
                                ref2.current = current;
                                c2 = 1;
                                const obj2 = closure_2_1(closure_2_2[35]);
                                current = 2;
                                c0 = 1;
                                const obj5 = {
                                  value: obj2.searchForumPosts(c0.guild_id, c0.id, current2, current, c2),
                                  done: false,
                                };
                                return obj5;
                              }
                            } else {
                              if (1 === tmp3) {
                                c2 = 0;
                              } else if (arg0 === 1) {
                                c0 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c2 = 0;
                                c0 = 3;
                                const obj = { value, done: true };
                                return obj;
                              } else {
                                c2 = 0;
                              }
                              c0 = 3;
                              return { value: "IconComponent", done: null };
                            }
                          } catch (tmp15) {
                            if (0 === c2) {
                              c0 = 3;
                              throw tmp15;
                            } else {
                              current = 1;
                            }
                          }
                        }
                      }),
                      350,
                    );
                    return () => clearTimeout(closure_0);
                  }
                }
              } else {
                let obj = closure_1(closure_2[35]);
                obj.clearForumSearch(channelId.id);
              }
            }
          }
        }
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp25 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let first;
      _require = arg0;
      let closure_1 = arg1;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ActiveJoinedThreadsStore, ReadStateStore, ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        let tmp8;
        if (cResult[2] === arg1) {
          tmp8 = cResult[3];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStores(first, tmp8);
      }
      const fn = function s() {
        const channel = ChannelStore.getChannel(closure_1);
        let isForumLikeChannelResult;
        if (channel != null) {
          isForumLikeChannelResult = channel.isForumLikeChannel();
        }
        if (isForumLikeChannelResult) {
          const activeJoinedUnreadThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedUnreadThreadsForParent(
            closure_0,
            closure_1,
          );
          const activeUnjoinedUnreadThreadsForParent = ActiveJoinedThreadsStore.getActiveUnjoinedUnreadThreadsForParent(
            closure_0,
            closure_1,
          );
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
      };
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      tmp8 = fn;
    }
  : (arg0, arg1) => {
      let closure_0;
      _require = arg0;
      let closure_1 = arg1;
      const items = [ActiveJoinedThreadsStore, ReadStateStore, ChannelStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        const channel = ChannelStore.getChannel(closure_1);
        let isForumLikeChannelResult;
        if (channel != null) {
          isForumLikeChannelResult = channel.isForumLikeChannel();
        }
        if (isForumLikeChannelResult) {
          const activeJoinedUnreadThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedUnreadThreadsForParent(
            closure_0,
            closure_1,
          );
          const activeUnjoinedUnreadThreadsForParent = ActiveJoinedThreadsStore.getActiveUnjoinedUnreadThreadsForParent(
            closure_0,
            closure_1,
          );
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
let closure_30 = tmp25;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let tagFilter;
      let tmp = channel;
      let obj = channel(tagFilter[21]);
      const cResult = obj.c(15);
      channel = channel.channel;
      const sortOrder = channel.sortOrder;
      tagFilter = channel.tagFilter;
      const tagSetting = channel.tagSetting;
      const shouldAutomaticallyAck = channel.shouldAutomaticallyAck;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ForumActivePostStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channel.id) {
        if (cResult[2] === sortOrder) {
          if (cResult[3] === tagFilter) {
            let tmp6;
            let tmp10;
            if (cResult[4] === tagSetting) {
              tmp6 = cResult[5];
            }
            const tmpResult = tmp(tagFilter[22]);
            const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp6);
            const tmp9 = closure_30(channel.guild_id, channel.id);
            let closure_5 = tmp9;
            const _Symbol = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const items1 = [ForumActivePostStore];
              cResult[6] = items1;
              tmp10 = items1;
            } else {
              tmp10 = cResult[6];
            }
            if (cResult[7] === tmp9) {
              let tmp12;
              let tmp13;
              if (cResult[8] === shouldAutomaticallyAck) {
                tmp12 = cResult[9];
                tmp13 = cResult[10];
              }
              const tmpResult2 = tmp(tagFilter[22]);
              const stateFromStores = tmpResult2.useStateFromStores(tmp10, tmp12, tmp13);
              if (cResult[11] === stateFromStores) {
                let tmp15;
                let tmp16;
                if (cResult[12] === channel) {
                  tmp15 = cResult[13];
                  tmp16 = cResult[14];
                }
                const effect = shouldAutomaticallyAck.useEffect(tmp15, tmp16);
                return stateFromStoresArray;
              }
              class T {
                constructor() {
                  if (stateFromStores) {
                    const obj2 = { object: constants2.ACK_FORUM_ACTIVE_THREADS, objectType: constants.ACK_AUTOMATIC };
                    const obj = ReadStateActionCreators;
                    obj.ackChannel(channel, obj2);
                  }
                }
              }
              const items2 = [channel, stateFromStores];
              cResult[11] = stateFromStores;
              cResult[12] = channel;
              cResult[13] = T;
              cResult[14] = items2;
              tmp16 = items2;
              tmp15 = T;
            }
            const fn2 = function _() {
              let tmp = shouldAutomaticallyAck;
              if (tmp) {
                const canAckThreads = closure_5 > 0 || ForumActivePostStore.getCanAckThreads();
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
    }
  : (channel) => {
      let shouldAutomaticallyAck;
      channel = channel.channel;
      ({
        sortOrder: importDefault,
        tagFilter: dependencyMap,
        tagSetting: _asyncToGenerator,
        shouldAutomaticallyAck,
      } = channel);
      let obj = channel(504);
      const items = [ForumActivePostStore];
      const stateFromStoresArray = obj.useStateFromStoresArray(items, () =>
        ForumActivePostStore.getThreadIds(channel.id, importDefault, dependencyMap, _asyncToGenerator),
      );
      const tmp2 = closure_30(channel.guild_id, channel.id);
      let closure_5 = tmp2;
      let obj2 = channel(504);
      const items1 = [ForumActivePostStore];
      const items2 = [shouldAutomaticallyAck, tmp2];
      const stateFromStores = obj2.useStateFromStores(
        items1,
        () => {
          let tmp = shouldAutomaticallyAck;
          if (tmp) {
            const canAckThreads = closure_5 > 0 || ForumActivePostStore.getCanAckThreads();
            tmp = canAckThreads;
          }
          return tmp;
        },
        items2,
      );
      const items3 = [channel, stateFromStores];
      const effect = shouldAutomaticallyAck.useEffect(() => {
        if (stateFromStores) {
          const obj2 = { object: constants2.ACK_FORUM_ACTIVE_THREADS, objectType: constants.ACK_AUTOMATIC };
          const obj = ReadStateActionCreators;
          obj.ackChannel(channel, obj2);
        }
      }, items3);
      return stateFromStoresArray;
    };
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
  let author;
  let getUserAuthor;
  const user = UserStore.getUser(ownerId.ownerId);
  const message = ForumPostMessagesStore.getMessage(ownerId.id);
  let firstMessage;
  if (message != null) {
    firstMessage = message.firstMessage;
  }
  const obj = { user, author: getUserAuthor(author, ownerId) };
  author = undefined;
  getUserAuthor = useMessageAuthor.getUserAuthor;
  useMessageAuthor;
  if (firstMessage != null) {
    author = firstMessage.author;
  }
  if (author == null) {
    author = user;
  }
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
export const useForumActiveThreadIds = tmp26;
