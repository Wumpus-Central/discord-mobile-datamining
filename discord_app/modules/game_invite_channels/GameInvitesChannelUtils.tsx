import _objectWithoutProperties from "_objectWithoutProperties";
import { useMemo } from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import ME from "ME";

let c9;
let metroImportAll;
const require = arg1;
let closure_3 = ["data"];
({ ActivityFlags: metroImportAll, ActivityTypes: c9 } = ME);
let closure_10 = { "1509696536903417891": "1373923512766697512" };
let c11 = "No Mic";
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/game_invite_channels/GameInvitesChannelUtils.tsx");

export const GAME_INVITES_CHANNEL_NO_MIC_TAG_NAME = "No Mic";
export const useIsGameInvitesPost = function useIsGameInvitesPost(channel) {
  const _require = channel;
  const items = [ensureGuildLoaded];
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
  const appliedTags = _require(5802).useAppliedTags(thread);
  _require = thread;
  const obj = _require(5802);
  const items = [ensureGuildLoaded];
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
  }) && !appliedTags.some((name) => name.name === closure_11);
};
export const useFirstMessage = function useFirstMessage(stateFromStores, enabled) {
  let obj = require(5829) /* loadForumPostData */;
  obj = { enabled, allowArchived: true };
  return obj.useFirstForumPostMessage(stateFromStores, obj);
};
export const useGameInvitesChannelApplicationId = function useGameInvitesChannelApplicationId(arg0) {
  const _require = arg0;
  const items = [createGuildRecordFromRust];
  const items1 = [arg0];
  let tmp2 = null;
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != application) {
      const guild = outer1_7.getGuild(tmp);
      let first;
      if (guild != null) {
        const gameApplicationIds = guild.gameApplicationIds;
        if (gameApplicationIds != null) {
          first = gameApplicationIds[0];
        }
      }
      if (first == null) {
        first = null;
      }
      tmp2 = first;
    }
    return tmp2;
  }, items1);
  if (null != arg0) {
    tmp2 = dependencyMap[arg0];
  }
  if (tmp2 == null) {
    tmp2 = stateFromStores;
  }
  return tmp2;
};
export const useGameInvitesChannelOfficialApplication = function useGameInvitesChannelOfficialApplication(arg0) {
  let application = arg0;
  const items = [createGuildRecordFromRust];
  const items1 = [arg0];
  let tmp4 = null;
  const stateFromStores = application(589).useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != application) {
      const guild = outer1_7.getGuild(tmp);
      let first;
      if (guild != null) {
        const gameApplicationIds = guild.gameApplicationIds;
        if (gameApplicationIds != null) {
          first = gameApplicationIds[0];
        }
      }
      if (first == null) {
        first = null;
      }
      tmp2 = first;
    }
    return tmp2;
  }, items1);
  if (null != arg0) {
    tmp4 = dependencyMap[arg0];
  }
  if (tmp4 == null) {
    tmp4 = stateFromStores;
  }
  const obj = application(589);
  const tmp = application;
  application = application(5611).useApplication(tmp4);
  const items2 = [application];
  return useMemo(() => {
    const merged = Object.assign(outer1_4(application, outer1_3));
    return { application: application.data };
  }, items2);
};
export const useSubscribeToGameInvitePostAuthors = function useSubscribeToGameInvitePostAuthors(isGameInvitesChannel) {
  const _require = isGameInvitesChannel;
  let closure_1 = arg1;
  const isGameInvitesChannelResult = isGameInvitesChannel.isGameInvitesChannel();
  const dependencyMap = isGameInvitesChannelResult;
  let items = [ensureGuildLoaded];
  const items1 = [isGameInvitesChannelResult, arg1];
  const stateFromStoresArray = _require(589).useStateFromStoresArray(items, () => {
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
  const subscribeGuildMembers = _require(5835).useSubscribeGuildMembers(tmp3, "GameInvitesChannelPostAuthors");
};
export const canInviteToActivity = function canInviteToActivity(type) {
  let tmp = type.type === constants2.PLAYING;
  if (tmp) {
    tmp = importDefault(5837)(type, constants.JOIN);
  }
  return tmp;
};