// === Module 12314: useJoinRequestButtonActions ===

// Module 12314 (useJoinRequestButtonActions)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

let c4, c5;

const Routes = Constants.Routes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/useJoinRequestButtonActions.tsx");

export const useJoinRequestButtonActions = function useJoinRequestButtonActions(joinRequest, interviewChannelId, cResult) {
  let callback1;
  let items1;
  let items2;
  let onDismiss = cResult;
  let obj = joinRequest;
  if (joinRequest == null) {
    obj = {};
  }
  const guildId = obj.guildId;
  const userId = obj.userId;
  const joinRequestId = obj.joinRequestId;
  const tmp = userId(joinRequestId.useState(false), 2);
  const submitting = tmp[0];
  let closure_7 = tmp[1];
  const onError = joinRequestId.useCallback(() => {
    let intl;
    const obj = { key: "JOIN_REQUEST_ERROR", content: intl.string(joinRequest(onDismiss[7]).t.R0RpRX) };
    const open = interviewChannelId(onDismiss[6]).open;
    interviewChannelId(onDismiss[6]);
    intl = joinRequest(onDismiss[7]).intl;
    open(obj);
  }, []);
  const items = [guildId, joinRequestId, interviewChannelId, onError, submitting, userId];
  let obj2 = {
    approveRequest: joinRequestId.useCallback(guildId(function*() {
      let closure_0;
      let closure_1;
      let closure_2;
      let intl;
      let intl2;
      if (c5 === 2) {
        c5 = 3;
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
        let c3;
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else if (!first) {
              if (null != guildId) {
                if (null != userId) {
                  if (null != joinRequestId) {
                    closure_7(true);
                    c3 = 2;
                    const obj7 = tmp(onDismiss[10]);
                    c4 = 3;
                    c5 = 1;
                    const obj8 = { value: obj7.updateGuildJoinRequest(guildId, userId, joinRequestId, tmp(onDismiss[11]).GuildJoinRequestApplicationStatuses.APPROVED), done: false };
                    return obj8;
                  }
                }
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_7(false);
            const obj6 = tmp(onDismiss[9]);
            obj6.hideActionSheet();
            throw onDismiss;
          } else {
            if (2 === c4) {
              c3 = 1;
              closure_129_8();
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_7(false);
              const obj3 = tmp(onDismiss[9]);
              obj3.hideActionSheet();
              c5 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              const obj11 = tmp(onDismiss[12]);
              if (obj11.getDesignSystemsNotificationComponents("useJoinRequestButtonActions")) {
                const obj10 = { text: intl2.string(tmp(onDismiss[7]).t.WXHcq5), variant: "success" };
                const openMana = tmp(onDismiss[6]).openMana;
                const tmp18 = tmp(onDismiss[6]);
                intl2 = tmp(onDismiss[7]).intl;
                openMana("JOIN_REQUEST_APPROVE", obj10);
              } else {
                let obj = {
                  key: "JOIN_REQUEST_APPROVE",
                  content: intl.string(tmp(onDismiss[7]).t.WXHcq5),
                  icon() {
                              const obj = { color: closure_1_1(closure_1_2[14]).colors.STATUS_POSITIVE_BACKGROUND, secondaryColor: closure_1_1(closure_1_2[14]).colors.STATUS_POSITIVE_TEXT };
                              const CircleCheckIcon = closure_1_0(closure_1_2[13]).CircleCheckIcon;
                              return closure_1_8(CircleCheckIcon, obj);
                            }
                };
                const open = tmp(onDismiss[6]).open;
                const tmp9 = tmp(onDismiss[6]);
                intl = tmp(onDismiss[7]).intl;
                open(obj);
              }
              c3 = 1;
            }
            c3 = 0;
            closure_129_7(false);
            const obj5 = tmp(onDismiss[9]);
            obj5.hideActionSheet();
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp59) {
          onDismiss = tmp59;
          if (0 === c3) {
            c5 = 3;
            throw tmp59;
          } else if (1 === tmp61) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    }), items1),
    rejectRequest: joinRequestId.useCallback(() => {
      const tmp2 = null != joinRequest && null != guildId && null != userId && null != joinRequestId;
      if (tmp2) {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        const _HermesInternal = HermesInternal;
        ActionSheetActionCreatorsDefault;
        const obj = { joinRequest, onError, onDismiss };
        const tmp10 = asyncRequire(12315, dependencyMap.paths);
        openLazy(tmp10, "RejectionReason-" + joinRequestId, obj);
      }
    }, items2),
    submitting,
    handleOpenInterview: callback1
  };
  callback1 = joinRequestId.useCallback(guildId(function*() {
    let channel;
    let closure_1;
    let closure_2;
    let obj11;
    let tmp17;
    let tmp54;
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
      try {
        let closure_0;
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
            closure_0 = undefined;
            if (!first) {
              if (null != guildId) {
                if (null != userId) {
                  if (null != joinRequestId) {
                    channel = channel.getChannel(tmp);
                    if (null != channel) {
                      c4 = 1;
                      c5 = 1;
                      const obj5 = { value: tmp54(closure_1_7.CHANNEL(null, channel.id), { openChannel: true, navigationReplace: false }), done: false };
                      tmp54 = tmp(onDismiss[8]);
                      return obj5;
                    } else {
                      closure_7(true);
                      c3 = 2;
                      c4 = 4;
                      c5 = 1;
                      const obj9 = { value: obj11.createOrEnterJoinRequestInterview(tmp65, false), done: false };
                      obj11 = tmp(onDismiss[10]);
                      return obj9;
                    }
                  }
                }
              }
            }
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            const obj8 = tmp(onDismiss[9]);
            obj8.hideActionSheet();
            c5 = 3;
            const obj12 = { value: undefined, done: true };
            return obj12;
          }
        } else if (2 === c4) {
          c3 = 0;
          closure_129_7(false);
          const obj7 = tmp(onDismiss[9]);
          obj7.hideActionSheet();
          throw onDismiss;
        } else {
          if (3 === c4) {
            c3 = 1;
            closure_129_8();
          } else {
            if (4 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_7(false);
                const obj4 = tmp(onDismiss[9]);
                obj4.hideActionSheet();
                c5 = 3;
                const obj13 = { value, done: true };
                return obj13;
              } else {
                closure_0 = value;
                if (null != closure_0) {
                  c4 = 5;
                  c5 = 1;
                  const obj14 = { value: tmp17(closure_1_7.CHANNEL(null, closure_0), { openChannel: true, navigationReplace: false }), done: false };
                  tmp17 = tmp(onDismiss[8]);
                  return obj14;
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_7(false);
              const obj = tmp(onDismiss[9]);
              obj.hideActionSheet();
              c5 = 3;
              const obj15 = { value, done: true };
              return obj15;
            }
            c3 = 1;
          }
          c3 = 0;
          closure_129_7(false);
          const obj6 = tmp(onDismiss[9]);
          obj6.hideActionSheet();
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp56) {
        onDismiss = tmp56;
        if (0 === c3) {
          c5 = 3;
          throw tmp56;
        } else if (1 === tmp58) {
          c4 = 2;
        } else {
          c4 = 3;
        }
      }
    }
  }), items);
  items1 = [guildId, joinRequestId, onError, submitting, userId];
  items2 = [guildId, joinRequestId, joinRequest, cResult, onError, userId];
  return obj2;
};