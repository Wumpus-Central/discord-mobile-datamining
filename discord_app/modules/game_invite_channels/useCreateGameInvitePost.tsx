// === Module 14369: useCreateGameInvitePost ===

// Module 14369 (useCreateGameInvitePost)
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 7453 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11687 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 11524 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6570 */;
import SlowmodeStore from "SlowmodeStore" /* 7830 */;

require = fn;
const SlowmodeType = fn(7830).SlowmodeType;
const ActivityActionTypes = fn(1072).ActivityActionTypes;
const ChannelFlags = fn(4870).ChannelFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_invite_channels/useCreateGameInvitePost.tsx");

export function useCreateGameInvitePost(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  const str = parentChannel.description;
  const appliedTagIds = parentChannel.appliedTagIds;
  let applicationIdsForGame;
  let createForumPostCommon;
  noop = undefined;
  c6 = undefined;
  c7 = undefined;
  closure_8 = undefined;
  ({ upload, onThreadCreated } = parentChannel);
  const application = parentChannel(applicationIdsForGame[8]).useGameInvitesChannelOfficialApplication(parentChannel.id).application;
  let obj = parentChannel(applicationIdsForGame[8]);
  applicationIdsForGame = parentChannel(applicationIdsForGame[9]).useApplicationIdsForGame(parentChannel.gameId);
  let obj2 = parentChannel(applicationIdsForGame[9]);
  const items = [c6, c7];
  const items1 = [applicationIdsForGame];
  const stateFromStores = parentChannel(applicationIdsForGame[10]).useStateFromStores(items, () => {
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
  let obj3 = parentChannel(applicationIdsForGame[10]);
  let availableTags = parentChannel.availableTags;
  if (availableTags == null) {
    availableTags = [];
  }
  const gameInviteVoiceChatState = parentChannel(applicationIdsForGame[8]).useGameInviteVoiceChatState(availableTags, appliedTagIds);
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
  let obj4 = parentChannel(applicationIdsForGame[8]);
  const obj6 = { parentChannel, name: null, appliedTags: null, activityAction: null, applicationId: null, voiceChatEnabled: null, upload: null, onThreadCreated: null };
  const tmpResult = parentChannel(applicationIdsForGame[12]);
  obj6.name = parentChannel(applicationIdsForGame[8]).deriveThreadName(str);
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
  const hasFlagResult = parentChannel.hasFlag(ChannelFlags.REQUIRE_TAG);
  let tmp10 = hasFlagResult;
  if (hasFlagResult) {
    tmp10 = 0 === appliedTagIds.size;
  }
  noop = tmp10;
  const rateLimitPerUser = parentChannel.rateLimitPerUser;
  const tmpResult4 = parentChannel(applicationIdsForGame[8]);
  const items3 = [closure_8];
  const stateFromStores1 = parentChannel(applicationIdsForGame[10]).useStateFromStores(items3, () => SlowmodeStore.getSlowmodeCooldownGuess(parentChannel.id, SlowmodeType.CreateThread));
  const tmpResult5 = parentChannel(applicationIdsForGame[10]);
  const canBypassSlowmode = parentChannel(applicationIdsForGame[13]).useCanBypassSlowmode(parentChannel);
  const tmpResult6 = parentChannel(applicationIdsForGame[13]);
  [tmp15, c6] = createForumPostCommon(noop.useState(false), 2);
  const tmp14 = createForumPostCommon(noop.useState(false), 2);
  [tmp17, c7] = createForumPostCommon(noop.useState(false), 2);
  let tmp18 = !tmp15;
  if (!tmp15) {
    tmp18 = str.trim().length > 0;
  }
  if (tmp18) {
    tmp18 = str.length <= tmp(tmp2[8]).GAME_INVITE_POST_MESSAGE_MAX_LENGTH;
  }
  if (tmp18) {
    let tmp19 = tmp11;
    if (tmp11) {
      tmp19 = !canBypassSlowmode;
    }
    if (tmp19) {
      tmp19 = stateFromStores1 > 0;
    }
    tmp18 = !tmp19;
  }
  closure_8 = tmp18;
  const items4 = [tmp18, tmp10, createForumPostCommon, str];
  const obj7 = { application, noMicTag, voiceChatEnabled, voiceToggleDisabled, isTagRequired: hasFlagResult, hasTagRequiredError: null, isSlowmodeEnabled: null, rateLimitPerUser: null, slowmodeCooldownGuess: null, isBypassSlowmode: null, submitting: null, canSubmit: null, submit: null };
  const callback = obj5.useCallback(stateFromStores(function*() {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            if (closure_8) {
              if (closure_5) {
                _undefined2(true);
              } else {
                _undefined(true);
                c2 = 1;
                c1 = 2;
                c3 = 1;
                const obj4 = { value: createForumPostCommon(str), done: false };
                return obj4;
              }
            }
          }
        } else {
          if (1 === tmp7) {
            c2 = 0;
            closure_128_6(false);
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
      } catch (tmp19) {
        if (tmp4 === c2) {
          c3 = tmp2;
          throw tmp19;
        } else {
          c1 = tmp;
        }
      }
    }
  }), items4);
  obj7.hasTagRequiredError = tmp17;
  obj7.isSlowmodeEnabled = rateLimitPerUser > 0;
  obj7.rateLimitPerUser = rateLimitPerUser;
  obj7.slowmodeCooldownGuess = stateFromStores1;
  obj7.isBypassSlowmode = canBypassSlowmode;
  obj7.submitting = tmp15;
  obj7.canSubmit = tmp18;
  obj7.submit = callback;
  return obj7;
}