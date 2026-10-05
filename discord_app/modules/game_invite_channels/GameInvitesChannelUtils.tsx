// discord_app/modules/game_invite_channels/GameInvitesChannelUtils.tsx
import react from "../../../_runtime/00019_react.js";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import react2 from "../../../_runtime/00576_react.js";
import ChannelConstants from "../channel/ChannelConstants.tsx";
import getThreadAutoArchiveTimeOnceDefault from "../threads/getThreadAutoArchiveTimeOnce.tsx";
import ApplicationActionCreators from "../applications/ApplicationActionCreators.tsx";
import ForumConstants from "../forums/ForumConstants.tsx";
import sanitizeThreadNameDefault from "../threads/sanitizeThreadName.tsx";
import ForumTagHooks from "../forums/ForumTagHooks.tsx";
import ForumPostDataLoader from "../forums/ForumPostDataLoader.tsx";
import hasFlagDefault from "../activities/utils/hasFlag.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import Constants from "../../Constants.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, set;

let c10;
let c9;
let metroImportAll;
let closure_3 = ["data"];
let closure_4 = ["data"];
const useMemo = react.useMemo;
({ ActivityFlags: metroImportAll, ActivityTypes: c9, MAX_CHANNEL_NAME_LENGTH: c10 } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
const MAX_FORUM_POST_TAGS = ForumConstants.MAX_FORUM_POST_TAGS;
let c13 = "No Mic";
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let forumPost;
      let tmp6;
      _require = arg0;
      let tmp = _require;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
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
            if (tmp4) {
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
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let forumPost;
      _require = arg0;
      const items = [ChannelStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        let tmp = null != forumPost;
        if (tmp) {
          const isForumPostResult = forumPost.isForumPost();
          let tmp3 = !isForumPostResult;
          if (isForumPostResult) {
            tmp3 = null == forumPost.parent_id;
          }
          let tmp4 = !tmp3;
          if (tmp4) {
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
    };
let closure_14 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = react2;
      const cResult = obj.c(3);
      const obj2 = ForumTagHooks;
      const appliedTags = obj2.useAppliedTags(arg0);
      if (closure_14(arg0)) {
        let tmp2;
        if (cResult[0] !== appliedTags) {
          let tmp4;
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function s(name) {
              return name.name === closure_1_13;
            };
            cResult[2] = fn;
            tmp4 = fn;
          } else {
            tmp4 = cResult[2];
          }
          const someResult = appliedTags.some(tmp4);
          cResult[0] = appliedTags;
          cResult[1] = someResult;
          tmp2 = someResult;
        } else {
          tmp2 = cResult[1];
        }
        return !tmp2;
      } else {
        return false;
      }
    }
  : (arg0) => {
      const obj = ForumTagHooks;
      const appliedTags = obj.useAppliedTags(arg0);
      const tmp = closure_14(arg0) && !appliedTags.some((name) => name.name === closure_1_13);
      return tmp;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, enabled) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== enabled) {
        const obj2 = { enabled, allowArchived: true };
        cResult[0] = enabled;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const tmpResult = ForumPostDataLoader;
      return tmpResult.useFirstForumPostMessage(arg0, tmp4);
    }
  : (arg0, enabled) => {
      const obj = ForumPostDataLoader;
      const obj2 = { enabled, allowArchived: true };
      return obj.useFirstForumPostMessage(arg0, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp12;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          return ChannelStore.getChannel(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      let isGameInvitesChannelResult = null == stateFromStores;
      const tmp7 = _modDef38;
      if (!isGameInvitesChannelResult) {
        isGameInvitesChannelResult = stateFromStores.isGameInvitesChannel();
      }
      tmp7(isGameInvitesChannelResult, "requires a game invites channel");
      let gameId;
      const useGame = require("useGame").useGame;
      require("useGame");
      if (stateFromStores != null) {
        gameId = stateFromStores.gameId;
      }
      const data = useGame(gameId).data;
      if (cResult[3] !== data) {
        let officialApplicationId;
        if (data != null) {
          officialApplicationId = data.getOfficialApplicationId();
        }
        cResult[3] = data;
        cResult[4] = officialApplicationId;
        tmp12 = officialApplicationId;
      } else {
        tmp12 = cResult[4];
      }
      return tmp12;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [ChannelStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(closure_0));
      let isGameInvitesChannelResult = null == stateFromStores;
      const tmp3 = _modDef38;
      if (!isGameInvitesChannelResult) {
        isGameInvitesChannelResult = stateFromStores.isGameInvitesChannel();
      }
      tmp3(isGameInvitesChannelResult, "requires a game invites channel");
      let gameId;
      const useGame = tmp(6812).useGame;
      require("useGame");
      if (stateFromStores != null) {
        gameId = stateFromStores.gameId;
      }
      const data = useGame(gameId).data;
      let officialApplicationId;
      if (data != null) {
        officialApplicationId = data.getOfficialApplicationId();
      }
      return officialApplicationId;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(6);
      const tmp2 = closure_15(arg0);
      const obj2 = ApplicationActionCreators;
      const application = obj2.useApplication(tmp2);
      if (cResult[0] !== application) {
        const data = application.data;
        const tmp8 = _objectWithoutProperties(application, closure_3);
        cResult[0] = application;
        cResult[1] = data;
        cResult[2] = tmp8;
        tmp5 = tmp8;
        tmp4 = data;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      if (cResult[3] === tmp4) {
        let tmp9;
        if (cResult[4] === tmp5) {
          tmp9 = cResult[5];
        }
        return tmp9;
      }
      const obj3 = { application: tmp4 };
      const merged = Object.assign(tmp5);
      cResult[3] = tmp4;
      cResult[4] = tmp5;
      cResult[5] = obj3;
      tmp9 = obj3;
    }
  : (arg0) => {
      let application;
      const tmp = closure_15(arg0);
      let obj = application(6658);
      application = obj.useApplication(tmp);
      const items = [application];
      return useMemo(() => {
        const obj = { application: application.data };
        const merged = Object.assign(_objectWithoutProperties(application, closure_4));
        return obj;
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isGameInvitesChannel, arg1) => {
      let closure_0;
      let tmp4;
      let tmp6;
      _require = arg1;
      const obj = require("react");
      const cResult = obj.c(11);
      if (cResult[0] !== isGameInvitesChannel) {
        const isGameInvitesChannelResult = isGameInvitesChannel.isGameInvitesChannel();
        cResult[0] = isGameInvitesChannel;
        cResult[1] = isGameInvitesChannelResult;
        tmp4 = isGameInvitesChannelResult;
      } else {
        tmp4 = cResult[1];
      }
      let closure_1 = tmp4;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ChannelStore];
        cResult[2] = items;
        tmp6 = items;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === tmp4) {
        let tmp8;
        let tmp9;
        let tmp11;
        if (cResult[4] === arg1) {
          tmp8 = cResult[5];
          tmp9 = cResult[6];
        }
        const tmpResult = require("get initialized");
        const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp6, tmp8, tmp9);
        if (tmp4) {
          if (cResult[8] === stateFromStoresArray) {
            let tmp12;
            if (cResult[9] === isGameInvitesChannel.guild_id) {
              tmp12 = cResult[10];
            }
            tmp11 = tmp12;
          }
          const obj2 = {};
          obj2[isGameInvitesChannel.guild_id] = stateFromStoresArray;
          cResult[8] = stateFromStoresArray;
          cResult[9] = isGameInvitesChannel.guild_id;
          cResult[10] = obj2;
          tmp12 = obj2;
        } else {
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = {};
            cResult[7] = obj3;
            tmp11 = obj3;
          } else {
            tmp11 = cResult[7];
          }
        }
        const tmpResult2 = require("subscribeGuildMembers");
        const subscribeGuildMembers = tmpResult2.useSubscribeGuildMembers(tmp11, "GameInvitesChannelPostAuthors");
      }
      const fn = function c() {
        if (closure_1) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set();
          const items = [];
          const tmp6 = closure_0[Symbol.iterator]();
          while (tmp6 !== undefined) {
            let channel = ChannelStore.getChannel(tmp9);
            let ownerId;
            if (channel != null) {
              ownerId = channel.ownerId;
            }
            let tmp14 = ownerId;
            let hasItem = null == ownerId;
            if (!hasItem) {
              hasItem = set.has(tmp14);
            }
            if (!hasItem) {
              let addResult = set.add(tmp14);
              let arr = items.push(tmp14);
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
    }
  : (isGameInvitesChannel, arg1) => {
      _require = isGameInvitesChannel;
      let closure_1 = arg1;
      const isGameInvitesChannelResult = isGameInvitesChannel.isGameInvitesChannel();
      dependencyMap = isGameInvitesChannelResult;
      let obj = require("get initialized");
      let items = [ChannelStore];
      const items1 = [isGameInvitesChannelResult, arg1];
      const stateFromStoresArray = obj.useStateFromStoresArray(
        items,
        function () {
          if (dependencyMap) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set();
            const items = [];
            const tmp6 = closure_1[Symbol.iterator]();
            while (tmp6 !== undefined) {
              let channel = ChannelStore.getChannel(tmp9);
              let ownerId;
              if (channel != null) {
                ownerId = channel.ownerId;
              }
              let tmp14 = ownerId;
              let hasItem = null == ownerId;
              if (!hasItem) {
                hasItem = set.has(tmp14);
              }
              if (!hasItem) {
                let addResult = set.add(tmp14);
                let arr = items.push(tmp14);
              }
              continue;
            }
            return items;
          } else {
            return [];
          }
        },
        items1,
      );
      const items2 = [stateFromStoresArray, isGameInvitesChannel.guild_id, isGameInvitesChannelResult];
      const tmp3 = useMemo(() => {
        let tmp;
        const obj = {};
        if (dependencyMap) {
          obj[isGameInvitesChannel.guild_id] = stateFromStoresArray;
          tmp = obj;
        } else {
          tmp = obj;
        }
        return tmp;
      }, items2);
      const obj2 = require("subscribeGuildMembers");
      const subscribeGuildMembers = obj2.useSubscribeGuildMembers(tmp3, "GameInvitesChannelPostAuthors");
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr, size) => {
      let tmp2;
      const obj = react2;
      const cResult = obj.c(12);
      if (cResult[0] !== arr) {
        let found;
        if (arr != null) {
          found = arr.find((name) => name.name === closure_1_13);
        }
        cResult[0] = arr;
        cResult[1] = found;
        tmp2 = found;
      } else {
        tmp2 = cResult[1];
      }
      if (cResult[2] === size) {
        let tmp5;
        if (cResult[3] === tmp2) {
          tmp5 = cResult[4];
        }
        if (cResult[5] === size) {
          let tmp7;
          if (cResult[6] === tmp2) {
            tmp7 = cResult[7];
          }
          if (cResult[8] === tmp2) {
            if (cResult[9] === tmp5) {
              let tmp12;
              if (cResult[10] === tmp7) {
                tmp12 = cResult[11];
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
          size.size >= MAX_FORUM_POST_TAGS && !size.has(tmp2.id);
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
    }
  : (arg0, has) => {
      let tmp3;
      let closure_0 = arg0;
      const items = [arg0];
      const tmp = useMemo(() => {
        let found;
        if (closure_0 != null) {
          found = closure_0.find((name) => name.name === closure_1_13);
        }
        return found;
      }, items);
      const obj = { noMicTag: tmp, voiceChatEnabled: null == tmp || !has.has(tmp.id), voiceToggleDisabled: tmp3 };
      tmp3 = null == tmp;
      null == tmp || !has.has(tmp.id);
      if (!tmp3) {
        tmp3 = has.size >= MAX_FORUM_POST_TAGS && !has.has(tmp.id);
        has.size >= MAX_FORUM_POST_TAGS && !has.has(tmp.id);
      }
      return obj;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isGameInvitesChannel, activeThreadIds, archivedThreadIds) => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(12);
      if (isGameInvitesChannel.isGameInvitesChannel()) {
        let tmp7;
        let tmp6;
        const _Date = Date;
        if (cResult[3] !== activeThreadIds) {
          const items = [];
          const items1 = [];
          const iter = activeThreadIds[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp13 = nextResult;
            let channel = ChannelStore.getChannel(nextResult);
            let obj3 = channel;
            if (null != channel) {
              if (!obj3.hasFlag(ChannelFlags.PINNED)) {
                if (getThreadAutoArchiveTimeOnceDefault(obj3) <= tmp5) {
                  let arr = items1.push(tmp13);
                }
                continue;
              }
            }
            let arr2 = items.push(tmp13);
          }
          cResult[3] = activeThreadIds;
          cResult[4] = items;
          cResult[5] = items1;
          tmp7 = items1;
          tmp6 = items;
        } else {
          tmp6 = cResult[4];
          tmp7 = cResult[5];
        }
        if (cResult[6] === tmp7) {
          let tmp25;
          if (cResult[7] === archivedThreadIds) {
            tmp25 = cResult[8];
          }
          if (cResult[9] === tmp6) {
            let tmp31;
            if (cResult[10] === tmp25) {
              tmp31 = cResult[11];
            }
            tmp3 = tmp31;
          }
          const obj2 = { activeThreadIds: tmp6, archivedThreadIds: tmp25 };
          cResult[9] = tmp6;
          cResult[10] = tmp25;
          cResult[11] = obj2;
          tmp31 = obj2;
        }
        const items2 = [];
        HermesBuiltin.arraySpread(items2, archivedThreadIds, HermesBuiltin.arraySpread(items2, tmp7, 0));
        cResult[6] = tmp7;
        cResult[7] = archivedThreadIds;
        cResult[8] = items2;
        tmp25 = items2;
      } else {
        if (cResult[0] === activeThreadIds) {
          if (cResult[1] === archivedThreadIds) {
            tmp3 = cResult[2];
          }
        }
        const obj4 = { activeThreadIds, archivedThreadIds };
        cResult[0] = activeThreadIds;
        cResult[1] = archivedThreadIds;
        cResult[2] = obj4;
        tmp3 = obj4;
      }
      return tmp3;
    }
  : (isGameInvitesChannel, activeThreadIds, archivedThreadIds) => {
      const isGameInvitesChannelResult = isGameInvitesChannel.isGameInvitesChannel();
      dependencyMap = isGameInvitesChannelResult;
      let items = [isGameInvitesChannelResult, activeThreadIds, archivedThreadIds];
      return useMemo(() => {
        let items2;
        if (dependencyMap) {
          const _Date = Date;
          const items = [];
          const items1 = [];
          const timestamp = Date.now();
          const iter = activeThreadIds[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp13 = nextResult;
            let channel = ChannelStore.getChannel(nextResult);
            let obj2 = channel;
            if (null != channel) {
              if (!obj2.hasFlag(ChannelFlags.PINNED)) {
                if (getThreadAutoArchiveTimeOnceDefault(obj2) <= timestamp) {
                  let arr = items1.push(tmp13);
                }
                continue;
              }
            }
            let arr2 = items.push(tmp13);
          }
          const obj3 = { activeThreadIds: items, archivedThreadIds: items2 };
          items2 = [];
          HermesBuiltin.arraySpread(items2, archivedThreadIds, HermesBuiltin.arraySpread(items2, items1, 0));
          return obj3;
        } else {
          return { activeThreadIds, archivedThreadIds };
        }
      }, items);
    };
function maxedAppliedForumPostTags(size) {
  return size.size >= MAX_FORUM_POST_TAGS;
}
const result = size.fileFinishedImporting("modules/game_invite_channels/GameInvitesChannelUtils.tsx");

export const GAME_INVITES_CHANNEL_NO_MIC_TAG_NAME = "No Mic";
export const GAME_INVITE_POST_MESSAGE_MAX_LENGTH = 120;
export const deriveThreadName = function deriveThreadName(description) {
  const str = description.trim();
  let str2 = str.split("\n")[0];
  if (str2 == null) {
    str2 = "";
  }
  const tmp = sanitizeThreadNameDefault;
  return tmp(str2.slice(0, authStore), true);
};
export const useIsGameInvitesPost = tmp3;
export const useIsGameInvitePostVoiceEnabled = tmp4;
export const useFirstMessage = tmp5;
export const useGameInvitesChannelOfficialApplication = tmp6;
export const useSubscribeToGameInvitePostAuthors = tmp7;
export const canInviteToActivity = function canInviteToActivity(stateFromStores) {
  const tmp = stateFromStores.type === constants2.PLAYING && hasFlagDefault(stateFromStores, metroImportAll.JOIN);
  return tmp;
};
export { maxedAppliedForumPostTags };
export const useGameInviteVoiceChatState = tmp8;
export const useGameInvitesActiveAndArchivedThreads = tmp9;
