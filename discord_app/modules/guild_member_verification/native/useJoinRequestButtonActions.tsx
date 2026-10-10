// discord_app/modules/guild_member_verification/native/useJoinRequestButtonActions.tsx
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
const Routes = fn(1085).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/useJoinRequestButtonActions.tsx");

export const useJoinRequestButtonActions = function useJoinRequestButtonActions(
  joinRequest,
  interviewChannelId,
  cResult,
) {
  const onDismiss = cResult;
  let obj = joinRequest;
  if (joinRequest == null) {
    obj = {};
  }
  const guildId = obj.guildId;
  const userId = obj.userId;
  const joinRequestId = obj.joinRequestId;
  const tmp = userId(joinRequestId.useState(false), 2);
  const submitting = tmp[0];
  closure_7 = tmp[1];
  const onError = joinRequestId.useCallback(() => {
    const obj2 = { text: null };
    const intl = joinRequest(onDismiss[6]).intl;
    obj2.text = intl.string(joinRequest(onDismiss[6]).t.R0RpRX);
    interviewChannelId(onDismiss[5]).open("JOIN_REQUEST_ERROR", obj2);
  }, []);
  const items = [guildId, joinRequestId, interviewChannelId, onError, submitting, userId];
  let obj2 = { approveRequest: null, rejectRequest: null, submitting: null, handleOpenInterview: null };
  const callback1 = joinRequestId.useCallback(
    guildId(function* () {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp8;
              closure_128_0 = undefined;
              if (!first) {
                if (null != guildId) {
                  if (null != userId) {
                    if (null != joinRequestId) {
                      channel = channel.getChannel(tmp4);
                      if (null != channel) {
                        c4 = 1;
                        c5 = 1;
                        const obj5 = {
                          value: tmp4(tmp60[7])(closure_1_7.CHANNEL(null, channel.id), {
                            openChannel: true,
                            navigationReplace: false,
                          }),
                          done: false,
                        };
                        return obj5;
                      } else {
                        closure_7(true);
                        c3 = 2;
                        c4 = 4;
                        c5 = 1;
                        const obj9 = {
                          value: tmp4(tmp60[9]).createOrEnterJoinRequestInterview(tmp70, false),
                          done: false,
                        };
                        return obj9;
                      }
                    }
                  }
                }
              }
              c5 = 3;
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              tmp4(tmp60[8]).hideActionSheet();
              c5 = 3;
              const obj12 = { value: undefined, done: true };
              return obj12;
            }
          } else if (2 !== tmp8) {
            if (3 === tmp8) {
              c3 = 1;
              closure_129_8();
            } else {
              if (4 === tmp8) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  closure_129_7(false);
                  tmp4(tmp60[8]).hideActionSheet();
                  c5 = 3;
                  const obj13 = { value, done: true };
                  return obj13;
                } else {
                  closure_128_0 = value;
                  if (null != closure_128_0) {
                    c4 = 5;
                    c5 = 1;
                    const obj14 = {
                      value: tmp4(tmp60[7])(closure_1_7.CHANNEL(null, closure_128_0), {
                        openChannel: true,
                        navigationReplace: false,
                      }),
                      done: false,
                    };
                    return obj14;
                  }
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_7(false);
                tmp4(tmp60[8]).hideActionSheet();
                c5 = 3;
                const obj15 = { value, done: true };
                return obj15;
              }
              c3 = 1;
            }
            c3 = 0;
            closure_129_7(false);
            tmp4(tmp60[8]).hideActionSheet();
            const obj6 = tmp4(tmp60[8]);
          }
          c3 = 0;
          closure_129_7(false);
          tmp4(tmp60[8]).hideActionSheet();
          throw tmp60;
        } catch (tmp60) {
          if (tmp5 === c3) {
            c5 = tmp3;
            throw tmp60;
          } else if (tmp2 === tmp62) {
            c4 = tmp;
          } else {
            c4 = tmp3;
          }
        }
      }
    }),
    items,
  );
  const items1 = [guildId, joinRequestId, onError, submitting, userId];
  obj2.approveRequest = joinRequestId.useCallback(
    guildId(function* () {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              if (!first) {
                if (null != guildId) {
                  if (null != userId) {
                    if (null != joinRequestId) {
                      closure_7(true);
                      c3 = 2;
                      const obj7 = v3(tmp52[9]);
                      v3 = 3;
                      c4 = 1;
                      const obj8 = {
                        value: obj7.updateGuildJoinRequest(
                          guildId,
                          userId,
                          joinRequestId,
                          tmp4(tmp52[10]).GuildJoinRequestApplicationStatuses.APPROVED,
                        ),
                        done: false,
                      };
                      return obj8;
                    }
                  }
                }
              }
              c4 = 3;
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c3 = 1;
              closure_128_8();
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_7(false);
              v3(tmp52[8]).hideActionSheet();
              c4 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              const obj10 = { text: null, variant: "success" };
              const intl = tmp4(tmp52[6]).intl;
              obj10.text = intl.string(tmp4(tmp52[6]).t.WXHcq5);
              v3(tmp52[5]).open("JOIN_REQUEST_APPROVE", obj10);
              c3 = 1;
              const obj = v3(tmp52[5]);
            }
            c3 = 0;
            closure_128_7(false);
            v3(tmp52[8]).hideActionSheet();
            const obj5 = v3(tmp52[8]);
          }
          c3 = 0;
          closure_128_7(false);
          v3(tmp52[8]).hideActionSheet();
          throw tmp52;
        } catch (tmp52) {
          if (tmp5 === c3) {
            c4 = tmp3;
            throw tmp52;
          } else if (tmp2 === tmp54) {
            v3 = tmp2;
          } else {
            v3 = tmp;
          }
        }
      }
    }),
    items1,
  );
  const items2 = [guildId, joinRequestId, joinRequest, cResult, onError, userId];
  obj2.rejectRequest = joinRequestId.useCallback(() => {
    let tmp2 = null != joinRequest;
    if (tmp2) {
      tmp2 = null != guildId;
    }
    if (tmp2) {
      tmp2 = null != userId;
    }
    if (tmp2) {
      tmp2 = null != joinRequestId;
    }
    if (tmp2) {
      const _HermesInternal = HermesInternal;
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { joinRequest, onError, onDismiss };
      obj.openLazy(asyncRequireImpl(12375, dependencyMap.paths), "RejectionReason-" + joinRequestId, obj2);
      const tmp9 = asyncRequireImpl(12375, dependencyMap.paths);
    }
  }, items2);
  obj2.submitting = submitting;
  obj2.handleOpenInterview = callback1;
  return obj2;
};
