// discord_app/modules/game_invite_channels/GameInvitesChannelUtils.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import getThreadAutoArchiveTimeOnceDefault from "../threads/getThreadAutoArchiveTimeOnce.tsx";
import sanitizeThreadNameDefault from "../threads/sanitizeThreadName.tsx";
import ForumPostDataLoader from "../forums/ForumPostDataLoader.tsx";
import hasFlagDefault from "../activities/utils/hasFlag.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import ChannelStore from "../../stores/ChannelStore.tsx";

require = fn;
let closure_3 = ["data"];
const useMemo = fn(19).useMemo;
const Constants = fn(1074);
({ ActivityFlags: closure_7, ActivityTypes: closure_8, MAX_CHANNEL_NAME_LENGTH: closure_9 } = Constants);
const MAX_FORUM_POST_TAGS = fn(7273).MAX_FORUM_POST_TAGS;
let c11 = "No Mic";
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
  return sanitizeThreadNameDefault(str2.slice(0, React7), true);
};
export const useIsGameInvitesPost = function useIsGameInvitesPost(channel) {
  _require = channel;
  const items = [ChannelStore];
  return require("initialize").useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      const isForumPostResult = obj.isForumPost();
      let tmp3 = !isForumPostResult;
      if (isForumPostResult) {
        tmp3 = null == obj.parent_id;
      }
      let tmp4 = !tmp3;
      if (!tmp3) {
        channel = ChannelStore.getChannel(obj.parent_id);
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
export const useIsGameInvitePostVoiceEnabled = function useIsGameInvitePostVoiceEnabled(channel) {
  const appliedTags = require("ForumTagHooks").useAppliedTags(channel);
  _require = channel;
  const obj = require("ForumTagHooks");
  const items = [ChannelStore];
  const obj3 = require("initialize");
  return (
    require("initialize").useStateFromStores(items, () => {
      let tmp = null != closure_0;
      if (tmp) {
        const isForumPostResult = obj.isForumPost();
        let tmp3 = !isForumPostResult;
        if (isForumPostResult) {
          tmp3 = null == obj.parent_id;
        }
        let tmp4 = !tmp3;
        if (!tmp3) {
          channel = ChannelStore.getChannel(obj.parent_id);
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
    }) && !appliedTags.some((name) => name.name === closure_1_11)
  );
};
export const useFirstMessage = function useFirstMessage(stateFromStores, enabled) {
  const obj = { enabled, allowArchived: true };
  return obj.useFirstForumPostMessage(stateFromStores, obj);
};
export const useGameInvitesChannelOfficialApplication = function useGameInvitesChannelOfficialApplication(id) {
  _require = id;
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(closure_0));
  let isGameInvitesChannelResult = null == stateFromStores;
  const obj = require("initialize");
  if (!isGameInvitesChannelResult) {
    isGameInvitesChannelResult = stateFromStores.isGameInvitesChannel();
  }
  _modDef38(isGameInvitesChannelResult, "requires a game invites channel");
  let tmpResult = tmp(7309);
  let gameId;
  if (stateFromStores != null) {
    gameId = stateFromStores.gameId;
  }
  const data = tmpResult.useGame(gameId).data;
  let officialApplicationId;
  if (data != null) {
    officialApplicationId = data.getOfficialApplicationId();
  }
  tmpResult = tmp(7163);
  const application = tmpResult.useApplication(officialApplicationId);
  closure_129_0 = application;
  const items1 = [application];
  return useMemo(() => {
    const merged = Object.assign(_objectWithoutProperties(data, closure_3));
    return { application: data.data };
  }, items1);
};
export const useSubscribeToGameInvitePostAuthors = function useSubscribeToGameInvitePostAuthors(
  isGameInvitesChannel,
  arg1,
) {
  _require = isGameInvitesChannel;
  const isGameInvitesChannelResult = isGameInvitesChannel.isGameInvitesChannel();
  dependencyMap = isGameInvitesChannelResult;
  let items = [ChannelStore];
  const items1 = [isGameInvitesChannelResult, arg1];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items,
    () => {
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
    },
    items1,
  );
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
  const subscribeGuildMembers = require("subscribeGuildMembers").useSubscribeGuildMembers(
    tmp3,
    "GameInvitesChannelPostAuthors",
  );
};
export const canInviteToActivity = function canInviteToActivity(stateFromStores) {
  let tmp = stateFromStores.type === constants2.PLAYING;
  if (tmp) {
    tmp = hasFlagDefault(stateFromStores, constants.JOIN);
  }
  return tmp;
};
export const maxedAppliedForumPostTags = function maxedAppliedForumPostTags(size) {
  return size.size >= MAX_FORUM_POST_TAGS;
};
export const useGameInviteVoiceChatState = function useGameInviteVoiceChatState(availableTags, appliedTagIds) {
  const items = [availableTags];
  const tmp = useMemo(() => {
    let found;
    if (availableTags != null) {
      found = availableTags.find((name) => name.name === closure_1_11);
    }
    return found;
  }, items);
  const obj = { noMicTag: tmp, voiceChatEnabled: null == tmp || !appliedTagIds.has(tmp.id), voiceToggleDisabled: null };
  let tmp3 = null == tmp;
  if (!tmp3) {
    tmp3 = appliedTagIds.size >= MAX_FORUM_POST_TAGS && !appliedTagIds.has(tmp.id);
    const tmp5 = appliedTagIds.size >= MAX_FORUM_POST_TAGS && !appliedTagIds.has(tmp.id);
  }
  obj.voiceToggleDisabled = tmp3;
  return obj;
};
export const useGameInvitesActiveAndArchivedThreads = function useGameInvitesActiveAndArchivedThreads(
  channel,
  forumActiveThreadIds,
  threadIds,
) {
  const activeThreadIds = forumActiveThreadIds;
  const archivedThreadIds = threadIds;
  const isGameInvitesChannelResult = channel.isGameInvitesChannel();
  dependencyMap = isGameInvitesChannelResult;
  let items = [isGameInvitesChannelResult, forumActiveThreadIds, threadIds];
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
        if (null != channel) {
          if (getThreadAutoArchiveTimeOnceDefault(tmp14) <= timestamp) {
            let arr = items1.push(tmp11);
            continue;
          }
        }
        arr = items.push(tmp11);
      }
      let obj = { activeThreadIds: items, archivedThreadIds: null };
      const items2 = [];
      HermesBuiltin.arraySpread(archivedThreadIds, HermesBuiltin.arraySpread(items1, 0));
      obj.archivedThreadIds = items2;
      return obj;
    } else {
      obj = { activeThreadIds, archivedThreadIds };
      return obj;
    }
  }, items);
};
