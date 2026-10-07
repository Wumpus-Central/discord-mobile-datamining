// discord_app/modules/game_invite_channels/useCreateGameInvitePost.tsx
import GameInvitesChannelUtils from "GameInvitesChannelUtils.tsx";
import getCurrentUserPresenceActivityDefault from "../activities/utils/getCurrentUserPresenceActivity.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import LocalActivityStore from "../../stores/LocalActivityStore.tsx";
import SelfPresenceStore from "../../stores/SelfPresenceStore.tsx";
import SlowmodeStore from "../../stores/SlowmodeStore.tsx";

require = fn;
const SlowmodeType = fn(7184).SlowmodeType;
const ActivityActionTypes = fn(1085).ActivityActionTypes;
const ChannelFlags = fn(2058).ChannelFlags;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_invite_channels/useCreateGameInvitePost.tsx");

export const useCreateGameInvitePost = ReactCompilerGating.isReactCompilerEnabled()
  ? (parentChannel) => {
      const cResult = parentChannel(applicationIdsForGame[9]).c(47);
      parentChannel = parentChannel.parentChannel;
      const description = parentChannel.description;
      ({ appliedTagIds, upload, onThreadCreated } = parentChannel);
      let obj = parentChannel(applicationIdsForGame[9]);
      let obj2 = parentChannel(applicationIdsForGame[10]);
      applicationIdsForGame = parentChannel(applicationIdsForGame[11]).useApplicationIdsForGame(parentChannel.gameId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocalActivityStore, SelfPresenceStore];
        cResult[0] = items;
        let first = items;
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
        let tmp9 = items1;
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
      let obj3 = parentChannel(applicationIdsForGame[11]);
      const stateFromStores = parentChannel(applicationIdsForGame[13]).useStateFromStores(first, C, tmp9);
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
      const tmpResult = parentChannel(applicationIdsForGame[13]);
      const gameInviteVoiceChatState = parentChannel(applicationIdsForGame[10]).useGameInviteVoiceChatState(
        tmp12,
        appliedTagIds,
      );
      ({ noMicTag, voiceChatEnabled, voiceToggleDisabled } = gameInviteVoiceChatState);
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
        const deriveThreadNameResult = obj7.deriveThreadName(description);
        cResult[8] = description;
        cResult[9] = deriveThreadNameResult;
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
      if (obj2.useGameInvitesChannelOfficialApplication(parentChannel.id).application != null) {
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
      if (cResult[10] === undefined) {
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
      cResult[10] = undefined;
      cResult[11] = onThreadCreated;
      cResult[12] = parentChannel;
      cResult[13] = tmp18;
      cResult[14] = appliedTagIds;
      cResult[15] = undefined;
      cResult[16] = upload;
      cResult[17] = voiceChatEnabled;
      cResult[18] = {
        parentChannel,
        name: tmp18,
        appliedTags: appliedTagIds,
        activityAction: undefined,
        applicationId: undefined,
        voiceChatEnabled,
        upload,
        onThreadCreated,
      };
      let obj4 = {
        parentChannel,
        name: tmp18,
        appliedTags: appliedTagIds,
        activityAction: undefined,
        applicationId: undefined,
        voiceChatEnabled,
        upload,
        onThreadCreated,
      };
      const tmpResult2 = parentChannel(applicationIdsForGame[10]);
    }
  : (parentChannel) => {
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
      const application = parentChannel(applicationIdsForGame[10]).useGameInvitesChannelOfficialApplication(
        parentChannel.id,
      ).application;
      let obj = parentChannel(applicationIdsForGame[10]);
      applicationIdsForGame = parentChannel(applicationIdsForGame[11]).useApplicationIdsForGame(parentChannel.gameId);
      let obj2 = parentChannel(applicationIdsForGame[11]);
      const items = [c6, c7];
      const items1 = [applicationIdsForGame];
      const stateFromStores = parentChannel(applicationIdsForGame[13]).useStateFromStores(
        items,
        () => {
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
        },
        items1,
      );
      let obj3 = parentChannel(applicationIdsForGame[13]);
      let availableTags = parentChannel.availableTags;
      if (availableTags == null) {
        availableTags = [];
      }
      const gameInviteVoiceChatState = parentChannel(applicationIdsForGame[10]).useGameInviteVoiceChatState(
        availableTags,
        appliedTagIds,
      );
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
      let obj4 = parentChannel(applicationIdsForGame[10]);
      const obj6 = {
        parentChannel,
        name: null,
        appliedTags: null,
        activityAction: null,
        applicationId: null,
        voiceChatEnabled: null,
        upload: null,
        onThreadCreated: null,
      };
      const tmpResult = parentChannel(applicationIdsForGame[14]);
      obj6.name = parentChannel(applicationIdsForGame[10]).deriveThreadName(str);
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
      const tmpResult4 = parentChannel(applicationIdsForGame[10]);
      const items3 = [closure_8];
      const stateFromStores1 = parentChannel(applicationIdsForGame[13]).useStateFromStores(items3, () =>
        SlowmodeStore.getSlowmodeCooldownGuess(parentChannel.id, SlowmodeType.CreateThread),
      );
      const tmpResult5 = parentChannel(applicationIdsForGame[13]);
      const canBypassSlowmode = parentChannel(applicationIdsForGame[15]).useCanBypassSlowmode(parentChannel);
      const tmpResult6 = parentChannel(applicationIdsForGame[15]);
      [tmp15, c6] = createForumPostCommon(noop.useState(false), 2);
      const tmp14 = createForumPostCommon(noop.useState(false), 2);
      [tmp17, c7] = createForumPostCommon(noop.useState(false), 2);
      let tmp18 = !tmp15;
      if (!tmp15) {
        tmp18 = str.trim().length > 0;
      }
      if (tmp18) {
        tmp18 = str.length <= tmp(tmp2[10]).GAME_INVITE_POST_MESSAGE_MAX_LENGTH;
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
      const obj7 = {
        application,
        noMicTag,
        voiceChatEnabled,
        voiceToggleDisabled,
        isTagRequired: hasFlagResult,
        hasTagRequiredError: null,
        isSlowmodeEnabled: null,
        rateLimitPerUser: null,
        slowmodeCooldownGuess: null,
        isBypassSlowmode: null,
        submitting: null,
        canSubmit: null,
        submit: null,
      };
      const callback = obj5.useCallback(
        stateFromStores(function* () {
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
              return { value: "IconComponent", done: null };
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
        }),
        items4,
      );
      obj7.hasTagRequiredError = tmp17;
      obj7.isSlowmodeEnabled = rateLimitPerUser > 0;
      obj7.rateLimitPerUser = rateLimitPerUser;
      obj7.slowmodeCooldownGuess = stateFromStores1;
      obj7.isBypassSlowmode = canBypassSlowmode;
      obj7.submitting = tmp15;
      obj7.canSubmit = tmp18;
      obj7.submit = callback;
      return obj7;
    };
