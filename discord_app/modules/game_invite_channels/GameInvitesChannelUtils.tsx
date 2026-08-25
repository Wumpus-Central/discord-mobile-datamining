// === Module 5999: GAME_INVITES_CHANNEL_NO_MIC_TAG_NAME ===

// Module 5999 (GAME_INVITES_CHANNEL_NO_MIC_TAG_NAME)
import _modDef38 from "module_38" /* 38 */;
import loadForumPostData from "loadForumPostData" /* 6027 */;
import hasFlagDefault from "hasFlag" /* 6037 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import { useMemo } from "noop" /* 19 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import ME from "ME" /* 676 */;

require = arg1;
let closure_3 = ["data"];
({ ActivityFlags: error, ActivityTypes: closure_8 } = ME);
let c9 = "No Mic";
const result = require("set").fileFinishedImporting("modules/game_invite_channels/GameInvitesChannelUtils.tsx");

export const GAME_INVITES_CHANNEL_NO_MIC_TAG_NAME = "No Mic";
export const useIsGameInvitesPost = function useIsGameInvitesPost(channel) {
  const _require = channel;
  const items = [closure_6];
  return _require(589).useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      const isForumPostResult = obj.isForumPost();
      let tmp3 = !isForumPostResult;
      if (isForumPostResult) {
        tmp3 = null == obj.parent_id;
      }
      let tmp4 = !tmp3;
      if (!tmp3) {
        const channel = closure_1_6.getChannel(obj.parent_id);
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
export const useIsGameInvitePostVoiceEnabled = function useIsGameInvitePostVoiceEnabled(thread) {
  const appliedTags = _require(6000).useAppliedTags(thread);
  _require = thread;
  const obj = _require(6000);
  const items = [closure_6];
  const obj3 = _require(589);
  return _require(589).useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      const isForumPostResult = obj.isForumPost();
      let tmp3 = !isForumPostResult;
      if (isForumPostResult) {
        tmp3 = null == obj.parent_id;
      }
      let tmp4 = !tmp3;
      if (!tmp3) {
        const channel = closure_1_6.getChannel(obj.parent_id);
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
  }) && !appliedTags.some((name) => name.name === closure_9);
};
export const useFirstMessage = function useFirstMessage(stateFromStores, enabled) {
  let obj = loadForumPostData;
  obj = { enabled, allowArchived: true };
  return obj.useFirstForumPostMessage(stateFromStores, obj);
};
export const useGameInvitesChannelOfficialApplication = function useGameInvitesChannelOfficialApplication(arg0) {
  let application = arg0;
  const items = [closure_6];
  const stateFromStores = application(589).useStateFromStores(items, () => closure_1_6.getChannel(application));
  let isGameInvitesChannelResult = null == stateFromStores;
  const obj = application(589);
  if (!isGameInvitesChannelResult) {
    isGameInvitesChannelResult = stateFromStores.isGameInvitesChannel();
  }
  _modDef38(isGameInvitesChannelResult, "requires a game invites channel");
  let tmpResult = tmp(6033);
  let gameId;
  if (stateFromStores != null) {
    gameId = stateFromStores.gameId;
  }
  const data = tmpResult.useGame(gameId).data;
  let officialApplicationId;
  if (data != null) {
    officialApplicationId = data.getOfficialApplicationId();
  }
  tmpResult = tmp(5835);
  application = tmpResult.useApplication(officialApplicationId);
  const items1 = [application];
  return useMemo(() => {
    const merged = Object.assign(closure_1_4(application, closure_1_3));
    return { application: application.data };
  }, items1);
};
export const useSubscribeToGameInvitePostAuthors = function useSubscribeToGameInvitePostAuthors(isGameInvitesChannel) {
  const _require = isGameInvitesChannel;
  closure_1 = arg1;
  const isGameInvitesChannelResult = isGameInvitesChannel.isGameInvitesChannel();
  dependencyMap = isGameInvitesChannelResult;
  let items = [closure_6];
  const items1 = [isGameInvitesChannelResult, arg1];
  const stateFromStoresArray = _require(589).useStateFromStoresArray(items, () => {
    if (closure_2) {
      const _Set = Set;
      const set = new Set();
      const items = [];
      const tmp7 = dependencyMap[Symbol.iterator]();
      while (tmp7 !== undefined) {
        let tmp12 = closure_1_6;
        let channel = closure_1_6.getChannel(tmp10);
        let ownerId;
        if (channel != null) {
          ownerId = channel.ownerId;
        }
        let tmp15 = ownerId;
        let hasItem = null == ownerId;
        if (!hasItem) {
          let tmp17 = ownerId;
          hasItem = set.has(tmp15);
        }
        if (!hasItem) {
          let tmp18 = ownerId;
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
  let obj = _require(589);
  const tmp3 = useMemo(() => {
    const obj = {};
    if (closure_2) {
      obj[isGameInvitesChannel.guild_id] = stateFromStoresArray;
      let tmp = obj;
    } else {
      tmp = obj;
    }
    return tmp;
  }, items2);
  const subscribeGuildMembers = _require(6035).useSubscribeGuildMembers(tmp3, "GameInvitesChannelPostAuthors");
};
export const canInviteToActivity = function canInviteToActivity(type) {
  let tmp = type.type === constants2.PLAYING;
  if (tmp) {
    tmp = hasFlagDefault(type, constants.JOIN);
  }
  return tmp;
};
export const useGameInvitesActiveAndArchivedThreads = function useGameInvitesActiveAndArchivedThreads(isGameInvitesChannel) {
  closure_0 = arg1;
  closure_1 = arg2;
  const isGameInvitesChannelResult = isGameInvitesChannel.isGameInvitesChannel();
  dependencyMap = isGameInvitesChannelResult;
  let items = [isGameInvitesChannelResult, arg1, arg2];
  return useMemo(() => {
    if (closure_2) {
      const _Date = Date;
      const items = [];
      const items1 = [];
      const timestamp = Date.now();
      const iter = dependencyMap[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp11 = nextResult;
        let tmp12 = closure_1_6;
        let channel = closure_1_6.getChannel(nextResult);
        if (null != channel) {
          let tmp15 = callback;
          let tmp16 = isGameInvitesChannelResult;
          let tmp17 = channel;
          if (callback(isGameInvitesChannelResult[12])(tmp14) <= timestamp) {
            let tmp20 = nextResult;
            let arr = items1.push(tmp11);
            continue;
          }
        }
        let tmp18 = nextResult;
        arr = items.push(tmp11);
      }
      let obj = { activeThreadIds: null, archivedThreadIds: null };
      obj[0] = items;
      const items2 = [];
      HermesBuiltin.arraySpread(callback, HermesBuiltin.arraySpread(items1, 0));
      obj[1] = items2;
      return obj;
    } else {
      obj = { activeThreadIds: null, archivedThreadIds: null };
      obj[0] = dependencyMap;
      obj[1] = callback;
      return obj;
    }
  }, items);
};