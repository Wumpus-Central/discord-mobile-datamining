// discord_app/modules/guild_member_verification/native/useJoinRequestButtonActions.tsx
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import closure_6 from "../../../stores/ChannelStore.tsx";
import { Routes } from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/useJoinRequestButtonActions.tsx");

export const useJoinRequestButtonActions = function useJoinRequestButtonActions(joinRequest, interviewChannelId, callback) {
  closure_0 = joinRequest;
  closure_1 = interviewChannelId;
  closure_2 = callback;
  let obj = joinRequest;
  if (joinRequest == null) {
    obj = {};
  }
  const guildId = obj.guildId;
  const userId = obj.userId;
  const joinRequestId = obj.joinRequestId;
  const tmp = userId(joinRequestId.useState(false), 2);
  const first = tmp[0];
  closure_7 = tmp[1];
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            closure_1 = tmp4;
            c0 = tmp8;
            c0 = undefined;
            if (!closure_1_6) {
              if (null != c3) {
                if (null != c4) {
                  if (null != c5) {
                    const channel = closure_1_6.getChannel(closure_1_1);
                    if (null != channel) {
                      c4 = 1;
                      c5 = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = closure_1_1(closure_1_2[8])(closure_1_7.CHANNEL(null, channel.id), { openChannel: true, navigationReplace: false });
                      return obj1;
                    } else {
                      closure_1_7(true);
                      c3 = 2;
                      c4 = 4;
                      c5 = 1;
                      const obj2 = { value: null, done: false };
                      obj2[0] = closure_1_1(closure_1_2[10]).createOrEnterJoinRequestInterview(tmp71, false);
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
            let obj7 = closure_1_1(closure_1_2[9]);
            obj7.hideActionSheet();
            c5 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = undefined;
            return obj4;
          }
        } else if (2 !== tmp8) {
          if (3 === tmp8) {
            c3 = 1;
            closure_1_8();
          } else {
            if (4 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_1_7(false);
                obj3 = closure_1_1(closure_1_2[9]);
                obj3.hideActionSheet();
                c5 = 3;
                let obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              } else {
                closure_0 = arg1;
                if (null != closure_0) {
                  c4 = 5;
                  c5 = 1;
                  let obj6 = { value: null, done: false };
                  obj6[0] = closure_1_1(closure_1_2[8])(closure_1_7.CHANNEL(null, closure_0), { openChannel: true, navigationReplace: false });
                  return obj6;
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              callback(false);
              obj = closure_1_1(closure_1_2[9]);
              obj.hideActionSheet();
              c5 = 3;
              obj7 = { value: null, done: true };
              obj7[0] = arg1;
              return obj7;
            }
            c3 = 1;
          }
          c3 = 0;
          closure_1_7(false);
          obj5 = closure_1_1(closure_1_2[9]);
          obj5.hideActionSheet();
        }
        c3 = 0;
        closure_1_7(false);
        obj6 = closure_1_1(closure_1_2[9]);
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            closure_1 = tmp4;
            closure_0 = tmp4;
            if (!closure_1_6) {
              if (null != c3) {
                if (null != c4) {
                  if (null != c5) {
                    closure_1_7(true);
                    c3 = 2;
                    const obj5 = closure_1_1(closure_1_2[10]);
                    c4 = 3;
                    c5 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = obj5.updateGuildJoinRequest(tmp32, tmp63, tmp33, closure_1_0(closure_1_2[11]).GuildJoinRequestApplicationStatuses.APPROVED);
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
            closure_1_8();
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            callback(false);
            obj = closure_1_1(closure_1_2[9]);
            obj.hideActionSheet();
            c5 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            let obj3 = { key: "JOIN_REQUEST_APPROVE", content: null, icon: null };
            const intl = closure_1_0(closure_1_2[7]).intl;
            obj3[1] = intl.string(closure_1_0(closure_1_2[7]).t.WXHcq5);
            obj3[2] = function icon() {
              return callback(tmp4(tmp44[12]).CircleCheckIcon, { color: tmp42(tmp44[13]).colors.STATUS_POSITIVE_BACKGROUND, secondaryColor: tmp42(tmp44[13]).colors.STATUS_POSITIVE_TEXT });
            };
            closure_1_1(closure_1_2[6]).open(obj3);
            c3 = 1;
            const obj9 = closure_1_1(closure_1_2[6]);
          }
          c3 = 0;
          closure_1_7(false);
          obj2 = closure_1_1(closure_1_2[9]);
          obj2.hideActionSheet();
        }
        c3 = 0;
        callback(false);
        obj3 = closure_1_1(closure_1_2[9]);
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