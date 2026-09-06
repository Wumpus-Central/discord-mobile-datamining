// discord_app/modules/guild_member_verification/native/useJoinRequestButtonActions.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
const Routes = fn(1074).Routes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/useJoinRequestButtonActions.tsx");

export const useJoinRequestButtonActions = function useJoinRequestButtonActions(
  joinRequest,
  interviewChannelId,
  callback,
) {
  const onDismiss = callback;
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
    interviewChannelId(onDismiss[6]);
    const obj = { key: "JOIN_REQUEST_ERROR", content: null };
    const intl = joinRequest(onDismiss[7]).intl;
    obj.content = intl.string(joinRequest(onDismiss[7]).t.R0RpRX);
    obj.open(obj);
  }, []);
  const items = [guildId, joinRequestId, interviewChannelId, onError, submitting, userId];
  obj = { approveRequest: null, rejectRequest: null, submitting: null, handleOpenInterview: null };
  const callback1 = joinRequestId.useCallback(
    guildId(function* () {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
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
                        const obj1 = {
                          value: tmp4(tmp60[8])(closure_1_7.CHANNEL(null, channel.id), {
                            openChannel: true,
                            navigationReplace: false,
                          }),
                          done: false,
                        };
                        return obj1;
                      } else {
                        closure_7(true);
                        c3 = 2;
                        c4 = 4;
                        c5 = 1;
                        const obj2 = {
                          value: tmp4(tmp60[10]).createOrEnterJoinRequestInterview(tmp70, false),
                          done: false,
                        };
                        return obj2;
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
              let obj3 = { value, done: true };
              return obj3;
            } else {
              let obj7 = tmp4(tmp60[9]);
              obj7.hideActionSheet();
              c5 = 3;
              const obj4 = { value: undefined, done: true };
              return obj4;
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
                  obj3 = tmp4(tmp60[9]);
                  obj3.hideActionSheet();
                  c5 = 3;
                  let obj5 = { value, done: true };
                  return obj5;
                } else {
                  closure_128_0 = value;
                  if (null != closure_128_0) {
                    c4 = 5;
                    c5 = 1;
                    let obj6 = {
                      value: tmp4(tmp60[8])(closure_1_7.CHANNEL(null, closure_128_0), {
                        openChannel: true,
                        navigationReplace: false,
                      }),
                      done: false,
                    };
                    return obj6;
                  }
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_7(false);
                obj = tmp4(tmp60[9]);
                obj.hideActionSheet();
                c5 = 3;
                obj7 = { value, done: true };
                return obj7;
              }
              c3 = 1;
            }
            c3 = 0;
            closure_129_7(false);
            obj5 = tmp4(tmp60[9]);
            obj5.hideActionSheet();
          }
          c3 = 0;
          closure_129_7(false);
          obj6 = tmp4(tmp60[9]);
          obj6.hideActionSheet();
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
  obj.approveRequest = joinRequestId.useCallback(
    guildId(function* () {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let tmp42 = tmp4;
              if (!first) {
                if (null != guildId) {
                  if (null != userId) {
                    if (null != joinRequestId) {
                      closure_7(true);
                      c3 = 2;
                      const obj5 = tmp42(tmp44[10]);
                      tmp42 = userId;
                      c4 = 3;
                      c5 = 1;
                      const obj1 = {
                        value: obj5.updateGuildJoinRequest(
                          guildId,
                          userId,
                          joinRequestId,
                          tmp4(tmp44[11]).GuildJoinRequestApplicationStatuses.APPROVED,
                        ),
                        done: false,
                      };
                      return obj1;
                    }
                  }
                }
              }
              c5 = 3;
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c3 = 1;
              closure_129_8();
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_7(false);
              obj = tmp42(tmp44[9]);
              obj.hideActionSheet();
              c5 = 3;
              let obj2 = { value, done: true };
              return obj2;
            } else {
              let obj3 = { key: "JOIN_REQUEST_APPROVE", content: null, icon: null };
              const intl = tmp4(tmp44[7]).intl;
              obj3.content = intl.string(tmp4(tmp44[7]).t.WXHcq5);
              obj3.icon = function icon() {
                return closure_1_8(closure_1_0(4520).CircleCheckIcon, {
                  color: closure_1_1(576).colors.STATUS_POSITIVE_BACKGROUND,
                  secondaryColor: closure_1_1(576).colors.STATUS_POSITIVE_TEXT,
                });
              };
              tmp42(tmp44[6]).open(obj3);
              c3 = 1;
              const obj9 = tmp42(tmp44[6]);
            }
            c3 = 0;
            closure_129_7(false);
            obj2 = tmp42(tmp44[9]);
            obj2.hideActionSheet();
          }
          c3 = 0;
          closure_129_7(false);
          obj3 = tmp42(tmp44[9]);
          obj3.hideActionSheet();
          throw tmp44;
        } catch (tmp44) {
          if (tmp5 === c3) {
            c5 = tmp3;
            throw tmp44;
          } else if (tmp2 === tmp46) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
    items1,
  );
  const items2 = [guildId, joinRequestId, joinRequest, callback, onError, userId];
  obj.rejectRequest = joinRequestId.useCallback(() => {
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
      const obj = { joinRequest, onError, onDismiss };
      obj.openLazy(asyncRequireImpl(12634, dependencyMap.paths), "RejectionReason-" + joinRequestId, obj);
      const tmp9 = asyncRequireImpl(12634, dependencyMap.paths);
    }
  }, items2);
  obj.submitting = submitting;
  obj.handleOpenInterview = callback1;
  return obj;
};
