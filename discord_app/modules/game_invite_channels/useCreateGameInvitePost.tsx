// === Module 12441: useCreateGameInvitePost ===

// Module 12441 (useCreateGameInvitePost)
import Constants from "Constants" /* 1085 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 6775 */;
import SlowmodeStore2 from "SlowmodeStore" /* 7171 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11393 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 11116 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5438 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SlowmodeStore = SlowmodeStore2;
let c1, c3, parentChannel, tmp10, tmp11, tmp3, tmp4, tmp6;

let react = react_mod;
const SlowmodeType = SlowmodeStore2.SlowmodeType;
const ActivityActionTypes = Constants.ActivityActionTypes;
const ChannelFlags = ChannelConstants.ChannelFlags;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((parentChannel) => {
  let applicationIdsForGame;
  let appliedTagIds;
  let first;
  let noMicTag;
  let onThreadCreated;
  let tmp9;
  let upload;
  let voiceChatEnabled;
  let voiceToggleDisabled;
  const tmp2 = applicationIdsForGame;
  let obj = parentChannel(applicationIdsForGame[9]);
  const cResult = obj.c(47);
  parentChannel = parentChannel.parentChannel;
  const description = parentChannel.description;
  ({ appliedTagIds, upload, onThreadCreated } = parentChannel);
  let obj2 = parentChannel(applicationIdsForGame[10]);
  const application = obj2.useGameInvitesChannelOfficialApplication(parentChannel.id).application;
  const obj3 = parentChannel(applicationIdsForGame[11]);
  applicationIdsForGame = obj3.useApplicationIdsForGame(parentChannel.gameId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocalActivityStore, SelfPresenceStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== applicationIdsForGame) {
    class C {
      constructor() {
        tmp = closure_2;
        obj = closure_2[Symbol.iterator]();
        while (obj !== undefined) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp5 = closure_6;
          tmp6 = closure_7;
          tmp7 = closure_1(closure_2[12])(closure_6, closure_7, tmp2);
          if (null != tmp7) {
            tmp9 = closure_0;
            obj2 = closure_0(tmp4[10]);
            tmp10 = tmp7;
            if (obj2.canInviteToActivity(tmp8)) {
              tmp11 = obj;
              obj.return();
              return tmp7;
            }
          }
          continue;
        }
        return null;
      }
    }
    const items1 = [applicationIdsForGame];
    cResult[1] = applicationIdsForGame;
    cResult[2] = C;
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    class C {
      constructor() {
        tmp = closure_2;
        obj = closure_2[Symbol.iterator]();
        while (obj !== undefined) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp5 = closure_6;
          tmp6 = closure_7;
          tmp7 = closure_1(closure_2[12])(closure_6, closure_7, tmp2);
          if (null != tmp7) {
            tmp9 = closure_0;
            obj2 = closure_0(tmp4[10]);
            tmp10 = tmp7;
            if (obj2.canInviteToActivity(tmp8)) {
              tmp11 = obj;
              obj.return();
              return tmp7;
            }
          }
          continue;
        }
        return null;
      }
    }
    tmp9 = cResult[3];
  }
  const tmpResult = parentChannel(tmp2[13]);
  const stateFromStores = tmpResult.useStateFromStores(first, C, tmp9);
  if (cResult[4] !== parentChannel.availableTags) {
    class C {
      constructor() {
        tmp = closure_2;
        obj = closure_2[Symbol.iterator]();
        while (obj !== undefined) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp5 = closure_6;
          tmp6 = closure_7;
          tmp7 = closure_1(closure_2[12])(closure_6, closure_7, tmp2);
          if (null != tmp7) {
            tmp9 = closure_0;
            obj2 = closure_0(tmp4[10]);
            tmp10 = tmp7;
            if (obj2.canInviteToActivity(tmp8)) {
              tmp11 = obj;
              obj.return();
              return tmp7;
            }
          }
          continue;
        }
        return null;
      }
    }
    if (tmp12 == null) {
      class C {
        constructor() {
          tmp = closure_2;
          obj = closure_2[Symbol.iterator]();
          while (obj !== undefined) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            tmp5 = closure_6;
            tmp6 = closure_7;
            tmp7 = closure_1(closure_2[12])(closure_6, closure_7, tmp2);
            if (null != tmp7) {
              tmp9 = closure_0;
              obj2 = closure_0(tmp4[10]);
              tmp10 = tmp7;
              if (obj2.canInviteToActivity(tmp8)) {
                tmp11 = obj;
                obj.return();
                return tmp7;
              }
            }
            continue;
          }
          return null;
        }
      }
    }
    cResult[4] = parentChannel.availableTags;
    cResult[5] = tmp12;
  } else {
    class C {
      constructor() {
        tmp = closure_2;
        obj = closure_2[Symbol.iterator]();
        while (obj !== undefined) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp5 = closure_6;
          tmp6 = closure_7;
          tmp7 = closure_1(closure_2[12])(closure_6, closure_7, tmp2);
          if (null != tmp7) {
            tmp9 = closure_0;
            obj2 = closure_0(tmp4[10]);
            tmp10 = tmp7;
            if (obj2.canInviteToActivity(tmp8)) {
              tmp11 = obj;
              obj.return();
              return tmp7;
            }
          }
          continue;
        }
        return null;
      }
    }
  }
  const tmpResult2 = parentChannel(tmp2[10]);
  const gameInviteVoiceChatState = tmpResult2.useGameInviteVoiceChatState(tmp12, appliedTagIds);
  ({ noMicTag, voiceChatEnabled, voiceToggleDisabled } = gameInviteVoiceChatState);
  let tmp15;
  if (null != stateFromStores) {
    class C {
      constructor() {
        tmp = closure_2;
        obj = closure_2[Symbol.iterator]();
        while (obj !== undefined) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp5 = closure_6;
          tmp6 = closure_7;
          tmp7 = closure_1(closure_2[12])(closure_6, closure_7, tmp2);
          if (null != tmp7) {
            tmp9 = closure_0;
            obj2 = closure_0(tmp4[10]);
            tmp10 = tmp7;
            if (obj2.canInviteToActivity(tmp8)) {
              tmp11 = obj;
              obj.return();
              return tmp7;
            }
          }
          continue;
        }
        return null;
      }
    }
    if (obj6.canInviteToActivity(stateFromStores)) {
      class C {
        constructor() {
          tmp = closure_2;
          obj = closure_2[Symbol.iterator]();
          while (obj !== undefined) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            tmp5 = closure_6;
            tmp6 = closure_7;
            tmp7 = closure_1(closure_2[12])(closure_6, closure_7, tmp2);
            if (null != tmp7) {
              tmp9 = closure_0;
              obj2 = closure_0(tmp4[10]);
              tmp10 = tmp7;
              if (obj2.canInviteToActivity(tmp8)) {
                tmp11 = obj;
                obj.return();
                return tmp7;
              }
            }
            continue;
          }
          return null;
        }
      }
      tmp15 = tmp16;
    }
  }
  if (cResult[8] !== description) {
    class C {
      constructor() {
        tmp = closure_2;
        obj = closure_2[Symbol.iterator]();
        while (obj !== undefined) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp5 = closure_6;
          tmp6 = closure_7;
          tmp7 = closure_1(closure_2[12])(closure_6, closure_7, tmp2);
          if (null != tmp7) {
            tmp9 = closure_0;
            obj2 = closure_0(tmp4[10]);
            tmp10 = tmp7;
            if (obj2.canInviteToActivity(tmp8)) {
              tmp11 = obj;
              obj.return();
              return tmp7;
            }
          }
          continue;
        }
        return null;
      }
    }
    cResult[8] = description;
    cResult[9] = obj7.deriveThreadName(description);
    const deriveThreadNameResult = obj7.deriveThreadName(description);
  } else {
    class C {
      constructor() {
        tmp = closure_2;
        obj = closure_2[Symbol.iterator]();
        while (obj !== undefined) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp5 = closure_6;
          tmp6 = closure_7;
          tmp7 = closure_1(closure_2[12])(closure_6, closure_7, tmp2);
          if (null != tmp7) {
            tmp9 = closure_0;
            obj2 = closure_0(tmp4[10]);
            tmp10 = tmp7;
            if (obj2.canInviteToActivity(tmp8)) {
              tmp11 = obj;
              obj.return();
              return tmp7;
            }
          }
          continue;
        }
        return null;
      }
    }
  }
  if (application != null) {
    class C {
      constructor() {
        tmp = closure_2;
        obj = closure_2[Symbol.iterator]();
        while (obj !== undefined) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp5 = closure_6;
          tmp6 = closure_7;
          tmp7 = closure_1(closure_2[12])(closure_6, closure_7, tmp2);
          if (null != tmp7) {
            tmp9 = closure_0;
            obj2 = closure_0(tmp4[10]);
            tmp10 = tmp7;
            if (obj2.canInviteToActivity(tmp8)) {
              tmp11 = obj;
              obj.return();
              return tmp7;
            }
          }
          continue;
        }
        return null;
      }
    }
  }
  if (cResult[10] === tmp15) {
    class C {
      constructor() {
        tmp = closure_2;
        obj = closure_2[Symbol.iterator]();
        while (obj !== undefined) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp5 = closure_6;
          tmp6 = closure_7;
          tmp7 = closure_1(closure_2[12])(closure_6, closure_7, tmp2);
          if (null != tmp7) {
            tmp9 = closure_0;
            obj2 = closure_0(tmp4[10]);
            tmp10 = tmp7;
            if (obj2.canInviteToActivity(tmp8)) {
              tmp11 = obj;
              obj.return();
              return tmp7;
            }
          }
          continue;
        }
        return null;
      }
    }
  }
  const obj4 = { parentChannel, name: tmp17, appliedTags: appliedTagIds, activityAction: tmp15, applicationId: undefined, voiceChatEnabled, upload, onThreadCreated };
  cResult[10] = tmp15;
  cResult[11] = onThreadCreated;
  cResult[12] = parentChannel;
  cResult[13] = tmp17;
  cResult[14] = appliedTagIds;
  cResult[15] = undefined;
  cResult[16] = upload;
  cResult[17] = voiceChatEnabled;
  cResult[18] = obj4;
}) : ((parentChannel) => {
  let _undefined;
  let _undefined2;
  let c6;
  let c7;
  let callback;
  let closure_5;
  let id;
  let noMicTag;
  let onThreadCreated;
  let tmp17;
  let tmp19;
  let tmpResult4;
  let upload;
  let voiceToggleDisabled;
  parentChannel = parentChannel.parentChannel;
  const str = parentChannel.description;
  const appliedTagIds = parentChannel.appliedTagIds;
  let applicationIdsForGame;
  let createForumPostCommon;
  react = undefined;
  c6 = undefined;
  c7 = undefined;
  let closure_8;
  const tmp = parentChannel;
  const tmp2 = applicationIdsForGame;
  ({ upload, onThreadCreated } = parentChannel);
  let obj = parentChannel(applicationIdsForGame[10]);
  const application = obj.useGameInvitesChannelOfficialApplication(parentChannel.id).application;
  let obj2 = parentChannel(applicationIdsForGame[11]);
  applicationIdsForGame = obj2.useApplicationIdsForGame(parentChannel.gameId);
  let obj3 = parentChannel(applicationIdsForGame[13]);
  const items = [c6, c7];
  const items1 = [applicationIdsForGame];
  const stateFromStores = obj3.useStateFromStores(items, () => {
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
  let availableTags = parentChannel.availableTags;
  const useGameInviteVoiceChatState = parentChannel(applicationIdsForGame[10]).useGameInviteVoiceChatState;
  const tmp5 = parentChannel(applicationIdsForGame[10]);
  if (availableTags == null) {
    availableTags = [];
  }
  const gameInviteVoiceChatState = useGameInviteVoiceChatState(availableTags, appliedTagIds);
  const voiceChatEnabled = gameInviteVoiceChatState.voiceChatEnabled;
  let obj4 = react;
  const items2 = [stateFromStores];
  ({ noMicTag, voiceToggleDisabled } = gameInviteVoiceChatState);
  const memo = react.useMemo(() => {
    if (null != stateFromStores) {
      const obj = GameInvitesChannelUtils;
      if (obj.canInviteToActivity(stateFromStores)) {
        return { type: ActivityActionTypes.JOIN, activity: stateFromStores };
      }
    }
  }, items2);
  const obj5 = { parentChannel, name: tmpResult4.deriveThreadName(str), appliedTags: appliedTagIds, activityAction: memo, applicationId: id, voiceChatEnabled, upload, onThreadCreated };
  const useCreateForumPostCommon = tmp(tmp2[14]).useCreateForumPostCommon;
  tmp(tmp2[14]);
  id = undefined;
  tmpResult4 = tmp(tmp2[10]);
  if (application != null) {
    id = application.id;
  }
  createForumPostCommon = useCreateForumPostCommon(obj5);
  const hasFlagResult = parentChannel.hasFlag(ChannelFlags.REQUIRE_TAG);
  let tmp12 = hasFlagResult;
  if (tmp12) {
    tmp12 = 0 === appliedTagIds.size;
  }
  react = tmp12;
  const rateLimitPerUser = parentChannel.rateLimitPerUser;
  const items3 = [closure_8];
  const tmpResult5 = tmp(tmp2[13]);
  const stateFromStores1 = tmpResult5.useStateFromStores(items3, () => SlowmodeStore.getSlowmodeCooldownGuess(parentChannel.id, SlowmodeType.CreateThread));
  const tmpResult6 = tmp(tmp2[15]);
  const canBypassSlowmode = tmpResult6.useCanBypassSlowmode(parentChannel);
  const tmp16 = createForumPostCommon(obj4.useState(false), 2);
  [tmp17, c6] = tmp16;
  [tmp19, c7] = createForumPostCommon(obj4.useState(false), 2);
  const tmp18 = createForumPostCommon(obj4.useState(false), 2);
  let tmp20 = !tmp17 && str.trim().length > 0 && str.length <= tmp(tmp2[10]).GAME_INVITE_POST_MESSAGE_MAX_LENGTH;
  if (tmp20) {
    tmp20 = !(tmp13 && !canBypassSlowmode && stateFromStores1 > 0);
  }
  closure_8 = tmp20;
  const items4 = [tmp20, tmp12, createForumPostCommon, str];
  const obj6 = { application, noMicTag, voiceChatEnabled, voiceToggleDisabled, isTagRequired: hasFlagResult, hasTagRequiredError: tmp19, isSlowmodeEnabled: rateLimitPerUser > 0, rateLimitPerUser, slowmodeCooldownGuess: stateFromStores1, isBypassSlowmode: canBypassSlowmode, submitting: tmp17, canSubmit: tmp20, submit: callback };
  callback = obj4.useCallback(stateFromStores(function*() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c2;
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
            let closure_0 = tmp;
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
        } else if (1 === tmp4) {
          c2 = 0;
          closure_128_6(false);
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c2 = 0;
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp16) {
        if (0 === c2) {
          c3 = 3;
          throw tmp16;
        } else {
          c1 = 1;
        }
      }
    }
  }), items4);
  return obj6;
});
const result = size.fileFinishedImporting("modules/game_invite_channels/useCreateGameInvitePost.tsx");

export const useCreateGameInvitePost = tmp2;