// discord_app/modules/game_invite_channels/useCreateGameInvitePost.tsx
import GameInvitesChannelUtils from "GameInvitesChannelUtils.tsx";
import getCurrentUserPresenceActivityDefault from "../activities/utils/getCurrentUserPresenceActivity.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import LocalActivityStore from "../../stores/LocalActivityStore.tsx";
import SelfPresenceStore from "../../stores/SelfPresenceStore.tsx";

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
  let obj = description(stateFromStores[6]);
  const application = obj.useGameInvitesChannelOfficialApplication(parentChannel.id).application;
  const items = [LocalActivityStore, SelfPresenceStore];
  const items1 = [application];
  stateFromStores = description(stateFromStores[7]).useStateFromStores(
    items,
    () => {
      let id;
      if (application != null) {
        id = application.id;
      }
      return getCurrentUserPresenceActivityDefault(LocalActivityStore, SelfPresenceStore, id);
    },
    items1,
  );
  const obj2 = description(stateFromStores[7]);
  let availableTags = parentChannel.availableTags;
  if (availableTags == null) {
    availableTags = [];
  }
  const gameInviteVoiceChatState = description(stateFromStores[6]).useGameInviteVoiceChatState(
    availableTags,
    appliedTagIds,
  );
  const voiceChatEnabled = gameInviteVoiceChatState.voiceChatEnabled;
  const items2 = [stateFromStores];
  ({ noMicTag, voiceToggleDisabled } = gameInviteVoiceChatState);
  const memo = noop.useMemo(() => {
    if (null != stateFromStores) {
      let obj = GameInvitesChannelUtils;
      if (obj.canInviteToActivity(stateFromStores)) {
        obj = { type: ActivityActionTypes.JOIN, activity: stateFromStores };
        return obj;
      }
    }
  }, items2);
  tmp(tmp2[9]);
  obj = {
    parentChannel,
    name: null,
    appliedTags: null,
    activityAction: null,
    applicationId: null,
    voiceChatEnabled: null,
    upload: null,
    onThreadCreated: null,
  };
  const tmpResult = tmp(tmp2[6]);
  obj.name = tmpResult.deriveThreadName(description);
  obj.appliedTags = appliedTagIds;
  obj.activityAction = memo;
  let id;
  if (application != null) {
    id = application.id;
  }
  obj.applicationId = id;
  obj.voiceChatEnabled = voiceChatEnabled;
  obj.upload = upload;
  obj.onThreadCreated = onThreadCreated;
  createForumPostCommon = tmpResult.useCreateForumPostCommon(obj);
  const obj3 = description(stateFromStores[6]);
  [tmp9, c4] = _slicedToArray(noop.useState(false), 2);
  let tmp10 = !tmp9;
  if (!tmp9) {
    tmp10 = description.trim().length > 0;
  }
  if (tmp10) {
    tmp10 = description.length <= tmp(tmp2[6]).GAME_INVITE_POST_MESSAGE_MAX_LENGTH;
  }
  noop = tmp10;
  const items3 = [tmp10, createForumPostCommon, description];
  obj = {
    application,
    noMicTag,
    voiceChatEnabled,
    voiceToggleDisabled,
    submitting: tmp9,
    canSubmit: tmp10,
    submit: obj4.useCallback(
      createForumPostCommon(function* () {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
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
                obj = { value, done: true };
                return obj;
              } else {
                closure_0 = tmp3;
                if (closure_5) {
                  _undefined(true);
                  c2 = 1;
                  c1 = 2;
                  c3 = 1;
                  const obj1 = { value: createForumPostCommon(description), done: false };
                  return obj1;
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
              obj = { value, done: true };
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
      }),
      items3,
    ),
  };
  return obj;
};
