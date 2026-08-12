// discord_app/modules/game_invite_channels/GameInvitesChannelUtils.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import { useMemo } from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import ME from "ME";
import { 00038__ } from "../../../_runtime/metro/00038__.js";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { subscribeGuildMembers } from "../../lib/guild/subscribeGuildMembers.tsx";
import { hasFlag } from "../activities/utils/hasFlag.tsx";
import { loadForumPostData } from "../forums/ForumPostDataLoader.tsx";
import { useAvailableTags } from "../forums/ForumTagHooks.tsx";

let error;
let metroImportAll;
const require = arg1;
let closure_3 = ["data"];
({ ActivityFlags: error, ActivityTypes: metroImportAll } = ME);
let c9 = "No Mic";
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/game_invite_channels/GameInvitesChannelUtils.tsx");

export const GAME_INVITES_CHANNEL_NO_MIC_TAG_NAME = "No Mic";
export const useIsGameInvitesPost = function useIsGameInvitesPost(channel) {
  const _require = channel;
  const items = [ensureGuildLoaded];
  return _initialize.useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      const isForumPostResult = obj.isForumPost();
      let tmp3 = !isForumPostResult;
      if (isForumPostResult) {
        tmp3 = null == obj.parent_id;
      }
      let tmp4 = !tmp3;
      if (!tmp3) {
        const channel = outer1_6.getChannel(obj.parent_id);
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
  const appliedTags = _useAvailableTags.useAppliedTags(thread);
  _require = thread;
  const obj = _useAvailableTags;
  const items = [ensureGuildLoaded];
  const obj3 = _initialize;
  return _initialize.useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      const isForumPostResult = obj.isForumPost();
      let tmp3 = !isForumPostResult;
      if (isForumPostResult) {
        tmp3 = null == obj.parent_id;
      }
      let tmp4 = !tmp3;
      if (!tmp3) {
        const channel = outer1_6.getChannel(obj.parent_id);
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
  const items = [ensureGuildLoaded];
  const stateFromStores = application(589).useStateFromStores(items, () => outer1_6.getChannel(application));
  let isGameInvitesChannelResult = null == stateFromStores;
  const obj = application(589);
  if (!isGameInvitesChannelResult) {
    isGameInvitesChannelResult = stateFromStores.isGameInvitesChannel();
  }
  00038__(isGameInvitesChannelResult, "requires a game invites channel");
  let tmpResult = tmp(5965);
  let gameId;
  if (stateFromStores != null) {
    gameId = stateFromStores.gameId;
  }
  const data = tmpResult.useGame(gameId).data;
  let officialApplicationId;
  if (data != null) {
    officialApplicationId = data.getOfficialApplicationId();
  }
  tmpResult = tmp(5768);
  application = tmpResult.useApplication(officialApplicationId);
  const items1 = [application];
  return useMemo(() => {
    const merged = Object.assign(outer1_4(application, outer1_3));
    return { application: application.data };
  }, items1);
};
export const useSubscribeToGameInvitePostAuthors = function useSubscribeToGameInvitePostAuthors(isGameInvitesChannel) {
  const _require = isGameInvitesChannel;
  let closure_1 = arg1;
  const isGameInvitesChannelResult = isGameInvitesChannel.isGameInvitesChannel();
  const dependencyMap = isGameInvitesChannelResult;
  let items = [ensureGuildLoaded];
  const items1 = [isGameInvitesChannelResult, arg1];
  const stateFromStoresArray = _initialize.useStateFromStoresArray(items, () => {
    if (closure_2) {
      const _Set = Set;
      const set = new Set();
      const items = [];
      const tmp7 = dependencyMap[Symbol.iterator]();
      while (tmp7 !== undefined) {
        let tmp12 = outer1_6;
        let channel = outer1_6.getChannel(tmp10);
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
  let obj = _initialize;
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
  const subscribeGuildMembers = _subscribeGuildMembers.useSubscribeGuildMembers(tmp3, "GameInvitesChannelPostAuthors");
};
export const canInviteToActivity = function canInviteToActivity(type) {
  let tmp = type.type === constants2.PLAYING;
  if (tmp) {
    tmp = hasFlag(type, constants.JOIN);
  }
  return tmp;
};
export const useGameInvitesActiveAndArchivedThreads = function useGameInvitesActiveAndArchivedThreads(isGameInvitesChannel) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  const isGameInvitesChannelResult = isGameInvitesChannel.isGameInvitesChannel();
  const dependencyMap = isGameInvitesChannelResult;
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
        let tmp12 = outer1_6;
        let channel = outer1_6.getChannel(nextResult);
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