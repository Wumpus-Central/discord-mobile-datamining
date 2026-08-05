// discord_app/modules/guild_member_verification/native/useJoinRequestButtonActions.tsx
import jsxProd from "jsxProd";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import { Routes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/guild_member_verification/native/useJoinRequestButtonActions.tsx");

export const useJoinRequestButtonActions = function useJoinRequestButtonActions(joinRequest, interviewChannelId, callback) {
  let closure_0 = joinRequest;
  let closure_1 = interviewChannelId;
  let closure_2 = callback;
  let obj = joinRequest;
  if (joinRequest == null) {
    obj = {};
  }
  const guildId = obj.guildId;
  const userId = obj.userId;
  const joinRequestId = obj.joinRequestId;
  const tmp = userId(joinRequestId.useState(false), 2);
  const first = tmp[0];
  let closure_7 = tmp[1];
  callback = joinRequestId.useCallback(() => {
    let obj = interviewChannelId(paths[6]);
    obj = { key: "JOIN_REQUEST_ERROR", content: null };
    const intl = joinRequest(paths[7]).intl;
    obj[1] = intl.string(joinRequest(paths[7]).t.R0RpRX);
    obj.open(obj);
  }, []);
  const items = [guildId, joinRequestId, interviewChannelId, callback, first, userId];
  obj = { approveRequest: null, rejectRequest: null, submitting: null, handleOpenInterview: null };
  const callback1 = joinRequestId.useCallback(guildId(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "T", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp4;
            let c0 = tmp8;
            c0 = undefined;
            if (!outer1_6) {
              if (null != c3) {
                if (null != c4) {
                  if (null != c5) {
                    const channel = outer1_6.getChannel(outer1_1);
                    if (null != channel) {
                      c4 = 1;
                      c5 = 1;
                      const obj1 = { value: null, done: false };
                      obj1[0] = outer1_1(outer1_2[8])(outer1_7.CHANNEL(null, channel.id), { openChannel: true, navigationReplace: false });
                      return obj1;
                    } else {
                      outer1_7(true);
                      c3 = 2;
                      c4 = 4;
                      c5 = 1;
                      const obj2 = { value: null, done: false };
                      obj2[0] = outer1_1(outer1_2[10]).createOrEnterJoinRequestInterview(tmp71, false);
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
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            let obj7 = outer1_1(outer1_2[9]);
            obj7.hideActionSheet();
            c5 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = undefined;
            return obj4;
          }
        } else if (2 !== tmp8) {
          if (3 === tmp8) {
            c3 = 1;
            outer1_8();
          } else {
            if (4 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                outer1_7(false);
                obj3 = outer1_1(outer1_2[9]);
                obj3.hideActionSheet();
                c5 = 3;
                let obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              } else {
                const outer1_0 = arg1;
                if (null != outer1_0) {
                  c4 = 5;
                  c5 = 1;
                  let obj6 = { value: null, done: false };
                  obj6[0] = outer1_1(outer1_2[8])(outer1_7.CHANNEL(null, outer1_0), { openChannel: true, navigationReplace: false });
                  return obj6;
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              callback(false);
              obj = outer1_1(outer1_2[9]);
              obj.hideActionSheet();
              c5 = 3;
              obj7 = { value: null, done: true };
              obj7[0] = arg1;
              return obj7;
            }
            c3 = 1;
          }
          c3 = 0;
          outer1_7(false);
          obj5 = outer1_1(outer1_2[9]);
          obj5.hideActionSheet();
        }
        c3 = 0;
        outer1_7(false);
        obj6 = outer1_1(outer1_2[9]);
        obj6.hideActionSheet();
        throw closure_2;
      } catch (tmp60) {
        closure_2 = tmp60;
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
  }), items);
  const items1 = [guildId, joinRequestId, callback, first, userId];
  obj[0] = joinRequestId.useCallback(guildId(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "T", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp4;
            let closure_0 = tmp4;
            if (!outer1_6) {
              if (null != c3) {
                if (null != c4) {
                  if (null != c5) {
                    outer1_7(true);
                    c3 = 2;
                    const obj5 = outer1_1(outer1_2[10]);
                    c4 = 3;
                    c5 = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = obj5.updateGuildJoinRequest(tmp32, tmp63, tmp33, outer1_0(outer1_2[11]).GuildJoinRequestApplicationStatuses.APPROVED);
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
            outer1_8();
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            callback(false);
            obj = outer1_1(outer1_2[9]);
            obj.hideActionSheet();
            c5 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            let obj3 = { key: "JOIN_REQUEST_APPROVE", content: null, icon: null };
            const intl = outer1_0(outer1_2[7]).intl;
            obj3[1] = intl.string(outer1_0(outer1_2[7]).t.WXHcq5);
            obj3[2] = function icon() {
              const obj = { color: null, secondaryColor: null };
              obj[0] = tmp42(tmp44[13]).colors.STATUS_POSITIVE_BACKGROUND;
              obj[1] = tmp42(tmp44[13]).colors.STATUS_POSITIVE_TEXT;
              return callback(tmp4(tmp44[12]).CircleCheckIcon, obj);
            };
            outer1_1(outer1_2[6]).open(obj3);
            c3 = 1;
            const obj9 = outer1_1(outer1_2[6]);
          }
          c3 = 0;
          outer1_7(false);
          obj2 = outer1_1(outer1_2[9]);
          obj2.hideActionSheet();
        }
        c3 = 0;
        callback(false);
        obj3 = outer1_1(outer1_2[9]);
        obj3.hideActionSheet();
        throw closure_2;
      } catch (tmp44) {
        closure_2 = tmp44;
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
  }), items1);
  const items2 = [guildId, joinRequestId, joinRequest, callback, callback, userId];
  obj[1] = joinRequestId.useCallback(() => {
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
      let obj = interviewChannelId(paths[9]);
      const _HermesInternal = HermesInternal;
      obj = { joinRequest: null, onError: null, onDismiss: null };
      obj[0] = joinRequest;
      obj[1] = callback;
      obj[2] = paths;
      obj.openLazy(joinRequest(paths[15])(paths[14], paths.paths), "RejectionReason-" + joinRequestId, obj);
      const tmp9 = joinRequest(paths[15])(paths[14], paths.paths);
    }
  }, items2);
  obj[2] = first;
  obj[3] = callback1;
  return obj;
};