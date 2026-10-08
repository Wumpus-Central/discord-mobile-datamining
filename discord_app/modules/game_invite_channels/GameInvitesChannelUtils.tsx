// === Module 6960: GameInvitesChannelUtils ===

// Module 6960 (GameInvitesChannelUtils)
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 576 */;
import getThreadAutoArchiveTimeOnceDefault from "getThreadAutoArchiveTimeOnce" /* 6090 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6842 */;
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 6962 */;
import ForumTagHooks from "ForumTagHooks" /* 6963 */;
import ForumPostDataLoader from "ForumPostDataLoader" /* 6990 */;
import hasFlagDefault from "hasFlag" /* 6999 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import ChannelStore from "ChannelStore" /* 2063 */;

require = fn;
let closure_3 = ["data"];
let closure_4 = ["data"];
const useMemo = fn(19).useMemo;
const Constants = fn(1085);
({ ActivityFlags: closure_8, ActivityTypes: closure_9, MAX_CHANNEL_NAME_LENGTH: c10 } = Constants);
const ChannelFlags = fn(2070).ChannelFlags;
const MAX_FORUM_POST_TAGS = fn(6961).MAX_FORUM_POST_TAGS;
let c13 = "No Mic";
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsGameInvitesPost(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let tmp = null != forumPost;
      if (tmp) {
        const isForumPostResult = forumPost.isForumPost();
        let tmp3 = !isForumPostResult;
        if (isForumPostResult) {
          tmp3 = null == forumPost.parent_id;
        }
        let tmp4 = !tmp3;
        if (!tmp3) {
          const channel = ChannelStore.getChannel(forumPost.parent_id);
          let flag;
          if (channel != null) {
            flag = channel.isGameInvitesChannel();
          }
          if (flag == null) {
            flag = false;
          }
          tmp4 = flag;
        }
        tmp = tmp4;
      }
      return tmp;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : (function useIsGameInvitesPost(arg0) {
  _require = arg0;
  const items = [ChannelStore];
  return require("initialize").useStateFromStores(items, () => {
    let tmp = null != forumPost;
    if (tmp) {
      const isForumPostResult = forumPost.isForumPost();
      let tmp3 = !isForumPostResult;
      if (isForumPostResult) {
        tmp3 = null == forumPost.parent_id;
      }
      let tmp4 = !tmp3;
      if (!tmp3) {
        const channel = ChannelStore.getChannel(forumPost.parent_id);
        let flag;
        if (channel != null) {
          flag = channel.isGameInvitesChannel();
        }
        if (flag == null) {
          flag = false;
        }
        tmp4 = flag;
      }
      tmp = tmp4;
    }
    return tmp;
  });
});
let closure_14 = tmp3;
fn(558);
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsGameInvitePostVoiceEnabled(arg0) {
  const cResult = c.c(3);
  const appliedTags = ForumTagHooks.useAppliedTags(arg0);
  if (closure_14(arg0)) {
    if (cResult[0] !== appliedTags) {
      const _Symbol = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s(name) {
          return name.name === closure_1_13;
        };
        cResult[2] = fn;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[2];
      }
      const someResult = appliedTags.some(tmp3);
      cResult[0] = appliedTags;
      cResult[1] = someResult;
    } else {
      return !cResult[1];
    }
  } else {
    return false;
  }
}) : (function useIsGameInvitePostVoiceEnabled(arg0) {
  const appliedTags = ForumTagHooks.useAppliedTags(arg0);
  return closure_14(arg0) && !appliedTags.some((name) => name.name === closure_1_13);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameInvitesChannelApplicationId(arg0) {
  _require = arg0;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return ChannelStore.getChannel(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  let isGameInvitesChannelResult = null == stateFromStores;
  const tmpResult = require("initialize");
  if (!isGameInvitesChannelResult) {
    isGameInvitesChannelResult = stateFromStores.isGameInvitesChannel();
  }
  _modDef38(isGameInvitesChannelResult, "requires a game invites channel");
  let gameId;
  if (stateFromStores != null) {
    gameId = stateFromStores.gameId;
  }
  const data = require("useGame").useGame(gameId).data;
  if (cResult[3] !== data) {
    let officialApplicationId;
    if (data != null) {
      officialApplicationId = data.getOfficialApplicationId();
    }
    cResult[3] = data;
    cResult[4] = officialApplicationId;
    let tmp11 = officialApplicationId;
  } else {
    tmp11 = cResult[4];
  }
  return tmp11;
}) : (function useGameInvitesChannelApplicationId(arg0) {
  _require = arg0;
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(closure_0));
  let isGameInvitesChannelResult = null == stateFromStores;
  const obj = require("initialize");
  const tmp = _require;
  if (!isGameInvitesChannelResult) {
    isGameInvitesChannelResult = stateFromStores.isGameInvitesChannel();
  }
  _modDef38(isGameInvitesChannelResult, "requires a game invites channel");
  let gameId;
  if (stateFromStores != null) {
    gameId = stateFromStores.gameId;
  }
  const data = tmp(6995).useGame(gameId).data;
  let officialApplicationId;
  if (data != null) {
    officialApplicationId = data.getOfficialApplicationId();
  }
  return officialApplicationId;
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFirstMessage(arg0, enabled) {
  const cResult = c.c(2);
  if (cResult[0] !== enabled) {
    const obj2 = { enabled, allowArchived: true };
    cResult[0] = enabled;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  return ForumPostDataLoader.useFirstForumPostMessage(arg0, tmp4);
}) : (function useFirstMessage(arg0, enabled) {
  return ForumPostDataLoader.useFirstForumPostMessage(arg0, { enabled, allowArchived: true });
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameInvitesChannelOfficialApplication(arg0) {
  const cResult = c.c(6);
  const tmp2 = closure_15(arg0);
  const application = ApplicationActionCreators.useApplication(tmp2);
  if (cResult[0] !== application) {
    const data = application.data;
    const tmp8 = _objectWithoutProperties(application, closure_3);
    cResult[0] = application;
    cResult[1] = data;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
    let tmp4 = data;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === tmp5) {
      let tmp9 = cResult[5];
    }
    return tmp9;
  }
  const obj3 = { application: tmp4 };
  const merged = Object.assign(tmp5);
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = obj3;
  tmp9 = obj3;
}) : (function useGameInvitesChannelOfficialApplication(arg0) {
  const tmp = closure_15(arg0);
  application = application(6842).useApplication(tmp);
  const items = [application];
  return useMemo(() => {
    const merged = Object.assign(_objectWithoutProperties(application, closure_4));
    return { application: application.data };
  }, items);
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSubscribeToGameInvitePostAuthors(arg0, arg1) {
  let guild_id = arg0;
  _require = arg1;
  const cResult = require("c").c(11);
  if (cResult[0] !== arg0) {
    const isGameInvitesChannelResult = guild_id.isGameInvitesChannel();
    cResult[0] = guild_id;
    cResult[1] = isGameInvitesChannelResult;
    let tmp4 = isGameInvitesChannelResult;
  } else {
    tmp4 = cResult[1];
  }
  closure_1 = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ChannelStore];
    cResult[2] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === arg1) {
      let tmp8 = cResult[5];
      let tmp9 = cResult[6];
    }
    const stateFromStoresArray = tmp(504).useStateFromStoresArray(tmp6, tmp8, tmp9);
    if (tmp4) {
      if (cResult[8] === stateFromStoresArray) {
      }
      const obj2 = {};
      obj2[guild_id.guild_id] = stateFromStoresArray;
      cResult[8] = stateFromStoresArray;
      guild_id = guild_id.guild_id;
      cResult[9] = guild_id;
      cResult[10] = obj2;
    } else {
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = {};
        cResult[7] = obj3;
        let tmp11 = obj3;
      } else {
        tmp11 = cResult[7];
      }
      const subscribeGuildMembers = tmp(6997).useSubscribeGuildMembers(tmp11, "GameInvitesChannelPostAuthors");
      const tmpResult2 = tmp(6997);
    }
    const tmpResult = tmp(504);
  }
  const fn = function c() {
    if (closure_1) {
      const _Set = Set;
      const set = new Set();
      const items = [];
      const tmp7 = dependencyMap[Symbol.iterator]();
      while (tmp7 !== undefined) {
        let channel = ChannelStore.getChannel(tmp10);
        let ownerId;
        if (channel != null) {
          ownerId = channel.ownerId;
        }
        let tmp15 = ownerId;
        let hasItem = null == ownerId;
        if (!hasItem) {
          hasItem = set.has(tmp15);
        }
        if (!hasItem) {
          let addResult = set.add(tmp15);
          let arr = items.push(tmp15);
        }
        continue;
      }
      return items;
    } else {
      return [];
    }
  };
  const items1 = [tmp4, arg1];
  cResult[3] = tmp4;
  cResult[4] = arg1;
  cResult[5] = fn;
  cResult[6] = items1;
  tmp9 = items1;
  tmp8 = fn;
  const obj = require("c");
}) : (function useSubscribeToGameInvitePostAuthors(isGameInvitesChannel, arg1) {
  _require = isGameInvitesChannel;
  const isGameInvitesChannelResult = isGameInvitesChannel.isGameInvitesChannel();
  dependencyMap = isGameInvitesChannelResult;
  let items = [ChannelStore];
  const items1 = [isGameInvitesChannelResult, arg1];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    if (isGameInvitesChannelResult) {
      const _Set = Set;
      const set = new Set();
      const items = [];
      const tmp7 = dependencyMap[Symbol.iterator]();
      while (tmp7 !== undefined) {
        let channel = ChannelStore.getChannel(tmp10);
        let ownerId;
        if (channel != null) {
          ownerId = channel.ownerId;
        }
        let tmp15 = ownerId;
        let hasItem = null == ownerId;
        if (!hasItem) {
          hasItem = set.has(tmp15);
        }
        if (!hasItem) {
          let addResult = set.add(tmp15);
          let arr = items.push(tmp15);
        }
        continue;
      }
      return items;
    } else {
      return [];
    }
  }, items1);
  const items2 = [stateFromStoresArray, isGameInvitesChannel.guild_id, isGameInvitesChannelResult];
  let obj = require("initialize");
  const tmp3 = useMemo(() => {
    const obj = {};
    if (isGameInvitesChannelResult) {
      obj[isGameInvitesChannel.guild_id] = stateFromStoresArray;
      let tmp = obj;
    } else {
      tmp = obj;
    }
    return tmp;
  }, items2);
  const subscribeGuildMembers = require("subscribeGuildMembers").useSubscribeGuildMembers(tmp3, "GameInvitesChannelPostAuthors");
});
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameInviteVoiceChatState(arr, size) {
  const cResult = c.c(12);
  if (cResult[0] !== arr) {
    let found;
    if (arr != null) {
      found = arr.find((name) => name.name === closure_1_13);
    }
    cResult[0] = arr;
    cResult[1] = found;
    let tmp2 = found;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] === size) {
    if (cResult[3] === tmp2) {
      let tmp5 = cResult[4];
    }
    if (cResult[5] === size) {
      if (cResult[6] === tmp2) {
        let tmp7 = cResult[7];
      }
      if (cResult[8] === tmp2) {
        if (cResult[9] === tmp5) {
          if (cResult[10] === tmp7) {
            let tmp12 = cResult[11];
          }
          return tmp12;
        }
      }
      const obj2 = { noMicTag: tmp2, voiceChatEnabled: tmp5, voiceToggleDisabled: tmp7 };
      cResult[8] = tmp2;
      cResult[9] = tmp5;
      cResult[10] = tmp7;
      cResult[11] = obj2;
      tmp12 = obj2;
    }
    let tmp9 = null == tmp2;
    if (!tmp9) {
      tmp9 = size.size >= MAX_FORUM_POST_TAGS && !size.has(tmp2.id);
      const tmp11 = size.size >= MAX_FORUM_POST_TAGS && !size.has(tmp2.id);
    }
    cResult[5] = size;
    cResult[6] = tmp2;
    cResult[7] = tmp9;
    tmp7 = tmp9;
  }
  const tmp6 = null == tmp2 || !size.has(tmp2.id);
  cResult[2] = size;
  cResult[3] = tmp2;
  cResult[4] = tmp6;
  tmp5 = tmp6;
}) : (function useGameInviteVoiceChatState(arg0, has) {
  closure_0 = arg0;
  const items = [arg0];
  const tmp = useMemo(() => {
    let found;
    if (closure_0 != null) {
      found = closure_0.find((name) => name.name === closure_1_13);
    }
    return found;
  }, items);
  const obj = { noMicTag: tmp, voiceChatEnabled: null == tmp || !has.has(tmp.id), voiceToggleDisabled: null };
  let tmp3 = null == tmp;
  if (!tmp3) {
    tmp3 = has.size >= MAX_FORUM_POST_TAGS && !has.has(tmp.id);
    const tmp5 = has.size >= MAX_FORUM_POST_TAGS && !has.has(tmp.id);
  }
  obj.voiceToggleDisabled = tmp3;
  return obj;
});
function maxedAppliedForumPostTags(size) {
  return size.size >= MAX_FORUM_POST_TAGS;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_invite_channels/GameInvitesChannelUtils.tsx");

export const GAME_INVITES_CHANNEL_NO_MIC_TAG_NAME = "No Mic";
export const GAME_INVITE_POST_MESSAGE_MAX_LENGTH = 120;
export const deriveThreadName = function deriveThreadName(description) {
  let str2 = description.trim().split("\n")[0];
  if (str2 == null) {
    str2 = "";
  }
  const str = description.trim();
  return sanitizeThreadNameDefault(str2.slice(0, collapsed), true);
};
export const useIsGameInvitesPost = tmp3;
export const useIsGameInvitePostVoiceEnabled = tmp4;
export const useFirstMessage = tmp5;
export const useGameInvitesChannelOfficialApplication = tmp6;
export const useSubscribeToGameInvitePostAuthors = tmp7;
export const canInviteToActivity = function canInviteToActivity(stateFromStores) {
  let tmp = stateFromStores.type === constants2.PLAYING;
  if (tmp) {
    tmp = hasFlagDefault(stateFromStores, constants.JOIN);
  }
  return tmp;
};
export { maxedAppliedForumPostTags };
export const useGameInviteVoiceChatState = tmp8;
export const useGameInvitesActiveAndArchivedThreads = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameInvitesActiveAndArchivedThreads(isGameInvitesChannel, activeThreadIds, archivedThreadIds) {
  const cResult = c.c(12);
  if (isGameInvitesChannel.isGameInvitesChannel()) {
    const _Date = Date;
    if (cResult[3] !== activeThreadIds) {
      const items = [];
      const items1 = [];
      const iter = activeThreadIds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp12 = nextResult;
        let channel = ChannelStore.getChannel(nextResult);
        let obj3 = channel;
        if (null != channel) {
          if (!obj3.hasFlag(ChannelFlags.PINNED)) {
            if (getThreadAutoArchiveTimeOnceDefault(obj3) <= tmp4) {
              let arr = items1.push(tmp12);
            }
            continue;
          }
        }
        let arr2 = items.push(tmp12);
      }
      cResult[3] = activeThreadIds;
      cResult[4] = items;
      cResult[5] = items1;
      let tmp6 = items1;
      let tmp5 = items;
    } else {
      tmp5 = cResult[4];
      tmp6 = cResult[5];
    }
    if (cResult[6] === tmp6) {
      if (cResult[7] === archivedThreadIds) {
        let tmp24 = cResult[8];
      }
      if (cResult[9] === tmp5) {
      }
      const obj2 = { activeThreadIds: tmp5, archivedThreadIds: tmp24 };
      cResult[9] = tmp5;
      cResult[10] = tmp24;
      cResult[11] = obj2;
    }
    const items2 = [];
    HermesBuiltin.arraySpread(archivedThreadIds, HermesBuiltin.arraySpread(tmp6, 0));
    cResult[6] = tmp6;
    cResult[7] = archivedThreadIds;
    cResult[8] = items2;
    tmp24 = items2;
  } else {
    if (cResult[0] === activeThreadIds) {
      if (cResult[1] === archivedThreadIds) {
        let tmp2 = cResult[2];
      }
      return tmp2;
    }
    const obj4 = { activeThreadIds, archivedThreadIds };
    cResult[0] = activeThreadIds;
    cResult[1] = archivedThreadIds;
    cResult[2] = obj4;
    tmp2 = obj4;
  }
}) : (function useGameInvitesActiveAndArchivedThreads(isGameInvitesChannel, activeThreadIds, archivedThreadIds) {
  const isGameInvitesChannelResult = isGameInvitesChannel.isGameInvitesChannel();
  dependencyMap = isGameInvitesChannelResult;
  let items = [isGameInvitesChannelResult, activeThreadIds, archivedThreadIds];
  return useMemo(() => {
    if (isGameInvitesChannelResult) {
      const _Date = Date;
      const items = [];
      const items1 = [];
      const timestamp = Date.now();
      const iter = activeThreadIds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp11 = nextResult;
        let channel = ChannelStore.getChannel(nextResult);
        let obj2 = channel;
        if (null != channel) {
          if (!obj2.hasFlag(ChannelFlags.PINNED)) {
            if (getThreadAutoArchiveTimeOnceDefault(obj2) <= timestamp) {
              let arr = items1.push(tmp11);
            }
            continue;
          }
        }
        let arr2 = items.push(tmp11);
      }
      const obj3 = { activeThreadIds: items, archivedThreadIds: null };
      const items2 = [];
      HermesBuiltin.arraySpread(archivedThreadIds, HermesBuiltin.arraySpread(items1, 0));
      obj3.archivedThreadIds = items2;
      return obj3;
    } else {
      const obj = { activeThreadIds, archivedThreadIds };
      return obj;
    }
  }, items);
});