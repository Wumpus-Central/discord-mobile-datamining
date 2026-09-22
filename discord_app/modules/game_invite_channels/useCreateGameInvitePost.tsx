// === Module 13029: useCreateGameInvitePost ===

// Module 13029 (useCreateGameInvitePost)
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 7516 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 12018 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 9631 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5498 */;

require = fn;
const ActivityActionTypes = fn(1074).ActivityActionTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_invite_channels/useCreateGameInvitePost.tsx");

export const useCreateGameInvitePost = function useCreateGameInvitePost(appliedTagIds) {
  ({ parentChannel, description } = appliedTagIds);
  appliedTagIds = appliedTagIds.appliedTagIds;
  let stateFromStores;
  let createForumPostCommon;
  _slicedToArray = undefined;
  noop = undefined;
  ({ upload, onThreadCreated } = appliedTagIds);
  const application = description(stateFromStores[6]).useGameInvitesChannelOfficialApplication(parentChannel.id).application;
  let obj = description(stateFromStores[6]);
  const applicationIdsForGame = description(stateFromStores[7]).useApplicationIdsForGame(parentChannel.gameId);
  let obj2 = description(stateFromStores[7]);
  const items = [LocalActivityStore, SelfPresenceStore];
  const items1 = [applicationIdsForGame];
  stateFromStores = description(stateFromStores[8]).useStateFromStores(items, () => {
    const obj = applicationIdsForGame[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp7 = getCurrentUserPresenceActivityDefault(LocalActivityStore, SelfPresenceStore, tmp2);
      if (null != tmp7) {
        let obj2 = GameInvitesChannelUtils;
        if (obj2.canInviteToActivity(tmp8)) {
          obj.return();
          return tmp7;
        }
      }
      continue;
    }
    return null;
  }, items1);
  let obj3 = description(stateFromStores[8]);
  let availableTags = parentChannel.availableTags;
  if (availableTags == null) {
    availableTags = [];
  }
  const gameInviteVoiceChatState = description(stateFromStores[6]).useGameInviteVoiceChatState(availableTags, appliedTagIds);
  const voiceChatEnabled = gameInviteVoiceChatState.voiceChatEnabled;
  const items2 = [stateFromStores];
  ({ noMicTag, voiceToggleDisabled } = gameInviteVoiceChatState);
  const memo = noop.useMemo(() => {
    if (null != stateFromStores) {
      if (obj.canInviteToActivity(stateFromStores)) {
        const obj2 = { type: ActivityActionTypes.JOIN, activity: stateFromStores };
        return obj2;
      }
      obj = GameInvitesChannelUtils;
    }
  }, items2);
  let obj4 = description(stateFromStores[6]);
  const obj6 = { parentChannel, name: null, appliedTags: null, activityAction: null, applicationId: null, voiceChatEnabled: null, upload: null, onThreadCreated: null };
  const tmpResult = description(stateFromStores[10]);
  obj6.name = description(stateFromStores[6]).deriveThreadName(description);
  obj6.appliedTags = appliedTagIds;
  obj6.activityAction = memo;
  let id;
  if (application != null) {
    id = application.id;
  }
  obj6.applicationId = id;
  obj6.voiceChatEnabled = voiceChatEnabled;
  obj6.upload = upload;
  obj6.onThreadCreated = onThreadCreated;
  createForumPostCommon = tmpResult.useCreateForumPostCommon(obj6);
  const tmpResult2 = description(stateFromStores[6]);
  [tmp10, c4] = noop.useState(false);
  let tmp11 = !tmp10;
  if (!tmp10) {
    tmp11 = description.trim().length > 0;
  }
  if (tmp11) {
    tmp11 = description.length <= tmp(tmp2[6]).GAME_INVITE_POST_MESSAGE_MAX_LENGTH;
  }
  noop = tmp11;
  const items3 = [tmp11, createForumPostCommon, description];
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  return {
    application,
    noMicTag,
    voiceChatEnabled,
    voiceToggleDisabled,
    submitting: tmp10,
    canSubmit: tmp11,
    submit: noop.useCallback(createForumPostCommon(function*() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp3;
              if (closure_5) {
                _undefined(true);
                c2 = 1;
                c1 = 2;
                c3 = 1;
                const obj4 = { value: createForumPostCommon(description), done: false };
                return obj4;
              }
            }
          } else {
            if (1 === tmp7) {
              c2 = 0;
              closure_128_4(false);
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c2 = 0;
            }
            c2 = 0;
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c3 = 3;
        } catch (tmp16) {
          if (tmp4 === c2) {
            c3 = tmp2;
            throw tmp16;
          } else {
            c1 = tmp;
          }
        }
      }
    }), items3)
  };
};