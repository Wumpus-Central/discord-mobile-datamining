// === Module 12907: useCreateGameInvitePost ===

// Module 12907 (useCreateGameInvitePost)
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 7379 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11895 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 11595 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5364 */;

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
  const items = [LocalActivityStore, SelfPresenceStore];
  const items1 = [application];
  stateFromStores = description(stateFromStores[7]).useStateFromStores(items, () => {
    let id;
    if (application != null) {
      id = application.id;
    }
    return getCurrentUserPresenceActivityDefault(LocalActivityStore, SelfPresenceStore, id);
  }, items1);
  let obj2 = description(stateFromStores[7]);
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
  let obj3 = description(stateFromStores[6]);
  const obj5 = { parentChannel, name: null, appliedTags: null, activityAction: null, applicationId: null, voiceChatEnabled: null, upload: null, onThreadCreated: null };
  const tmpResult = description(stateFromStores[9]);
  obj5.name = description(stateFromStores[6]).deriveThreadName(description);
  obj5.appliedTags = appliedTagIds;
  obj5.activityAction = memo;
  let id;
  if (application != null) {
    id = application.id;
  }
  obj5.applicationId = id;
  obj5.voiceChatEnabled = voiceChatEnabled;
  obj5.upload = upload;
  obj5.onThreadCreated = onThreadCreated;
  createForumPostCommon = tmpResult.useCreateForumPostCommon(obj5);
  const tmpResult2 = description(stateFromStores[6]);
  [tmp9, c4] = noop.useState(false);
  let tmp10 = !tmp9;
  if (!tmp9) {
    tmp10 = description.trim().length > 0;
  }
  if (tmp10) {
    tmp10 = description.length <= tmp(tmp2[6]).GAME_INVITE_POST_MESSAGE_MAX_LENGTH;
  }
  noop = tmp10;
  const items3 = [tmp10, createForumPostCommon, description];
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  return {
    application,
    noMicTag,
    voiceChatEnabled,
    voiceToggleDisabled,
    submitting: tmp9,
    canSubmit: tmp10,
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