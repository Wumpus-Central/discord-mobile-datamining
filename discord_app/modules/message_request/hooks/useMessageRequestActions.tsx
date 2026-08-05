// discord_app/modules/message_request/hooks/useMessageRequestActions.tsx
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL from "MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL";
import { AnalyticEvents } from "ME";

let error;
let metroImportAll;
const require = arg1;
({ MessageRequestAnalyticsAction: error, BATCH_REJECT_LIMIT: metroImportAll } = MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL);
let result = require("noop").fileFinishedImporting("modules/message_request/hooks/useMessageRequestActions.tsx");

export const useMessageRequestActions = function useMessageRequestActions(user) {
  let c4;
  let c5;
  let c6;
  let c7;
  let tmp3;
  let tmp5;
  let tmp7;
  let tmp9;
  user = user.user;
  let closure_0 = user;
  const onAcceptSuccess = user.onAcceptSuccess;
  const onRejectSuccess = user.onRejectSuccess;
  const onError = user.onError;
  let callback;
  let React;
  c6 = undefined;
  c7 = undefined;
  let closure_8;
  let c9;
  let acceptMessageRequest;
  let tmp = onAcceptSuccess(onRejectSuccess[6])();
  [tmp3, c4] = callback(React.useState(false), 2);
  const tmp2 = callback(React.useState(false), 2);
  [tmp5, c5] = callback(React.useState(false), 2);
  let tmp4 = callback(React.useState(false), 2);
  [tmp7, c6] = callback(React.useState(false), 2);
  let tmp6 = callback(React.useState(false), 2);
  [tmp9, c7] = callback(React.useState(false), 2);
  const isOptimisticRejected = callback(React.useState(false), 2);
  closure_8 = isOptimisticRejected[1];
  let tmp11 = isAcceptLoading;
  if (!isAcceptLoading) {
    tmp11 = isRejectLoading;
  }
  if (!tmp11) {
    tmp11 = isUserProfileLoading;
  }
  c9 = tmp11;
  closure_0 = undefined;
  closure_0 = onError((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp4;
              let closure_1 = tmp8;
              let aPIError;
              if (outer1_9) {
                c6 = 3;
              } else {
                v0(true);
                v0 = 2;
                let obj1 = callback(onRejectSuccess[7]);
                c5 = 3;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.acceptMessageRequest(tmp39);
                return obj1;
              }
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              v0 = 1;
              closure_1 = ME;
              aPIError = new callback(onRejectSuccess[8]).APIError(closure_1);
              if (outer1_3 != null) {
                tmp27(callback);
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 0;
              v0(false);
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              outer1_7(true);
              if (outer1_1 != null) {
                outer1_1();
              }
              v0 = 1;
            }
            v0 = 0;
            v0(false);
          }
          v0 = 0;
          v0(false);
          throw ME;
        } catch (tmp45) {
          ME = tmp45;
          if (tmp5 === v0) {
            c6 = tmp3;
            throw tmp45;
          } else if (tmp2 === tmp47) {
            c5 = tmp2;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  let items = [tmp11, onAcceptSuccess, onError];
  acceptMessageRequest = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  closure_0 = undefined;
  closure_0 = onError((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp4;
              let closure_1 = tmp8;
              let aPIError;
              if (outer1_9) {
                c6 = 3;
              } else {
                v0(true);
                let c4 = 2;
                let obj1 = callback(onRejectSuccess[7]);
                v0 = 3;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.rejectMessageRequest(tmp39);
                return obj1;
              }
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c4 = 1;
              closure_1 = ME;
              aPIError = new callback(onRejectSuccess[8]).APIError(closure_1);
              if (outer1_3 != null) {
                tmp27(callback);
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              v0(false);
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              outer1_8(true);
              if (outer1_2 != null) {
                outer1_2();
              }
              c4 = 1;
            }
            c4 = 0;
            v0(false);
          }
          c4 = 0;
          v0(false);
          throw ME;
        } catch (tmp45) {
          ME = tmp45;
          if (tmp5 === c4) {
            c6 = tmp3;
            throw tmp45;
          } else if (tmp2 === tmp47) {
            v0 = tmp2;
          } else {
            v0 = tmp;
          }
        }
      }
    })();
  });
  const items1 = [tmp11, onRejectSuccess, onError];
  closure_0 = undefined;
  const rejectMessageRequest = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  closure_0 = onError((arg0) => {
    let closure_0 = arg0;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
        while (true) {
          let num = 2;
          v0 = 2;
          let tmp4 = c7;
          if (0 === c7) {
            if (arg0 === 1) {
              let num7 = 3;
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num6 = 3;
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let _slicedToArray = tmp;
              let ME = tmp4;
              let c0;
              let aPIError;
              let tmp60 = outer1_9;
              if (outer1_9) {
                let num5 = 3;
                v0 = 3;
                return { value: "T", done: null };
              } else {
                let tmp29 = outer1_5;
                let tmp30 = outer1_5(true);
                let tmp31 = onAcceptSuccess;
                let tmp32 = onRejectSuccess;
                let tmp33 = closure_8;
                let tmp34 = onAcceptSuccess(onRejectSuccess[9])(tmp59, closure_8);
                let c6 = 2;
                let closure_2 = tmp34;
                let tmp35 = tmp34;
                closure_2 = tmp34;
                aPIError = tmp34[Symbol.iterator]();
                let tmp36 = closure_2;
                let tmp37 = aPIError;
                if (aPIError === undefined) {
                  let tmp44 = _slicedToArray;
                  let tmp45 = v0;
                  let tmp46 = v0(true);
                  if (outer1_2 != null) {
                    let tmp47 = outer1_2();
                  }
                  c6 = 1;
                  c6 = 0;
                  let tmp48 = _slicedToArray;
                  let tmp49 = outer1_5;
                  let tmp50 = outer1_5(false);
                } else {
                  let tmp39 = ME;
                  let tmp40 = _slicedToArray;
                  c6 = 3;
                  let callback = tmp38;
                  let tmp41 = callback;
                  let tmp42 = onRejectSuccess;
                  let obj1 = callback(onRejectSuccess[7]);
                  let tmp43 = callback;
                  c7 = 4;
                  let num4 = 1;
                  v0 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = obj1.rejectMessageRequestBatch(callback);
                  return obj1;
                }
              }
            }
          } else if (1 !== tmp4) {
            if (2 === tmp4) {
              let tmp12 = ME;
              let tmp13 = _slicedToArray;
              let tmp14 = noop;
              let tmp15 = noop;
              c6 = 1;
              closure_2 = noop;
              let tmp16 = callback;
              let tmp17 = onRejectSuccess;
              let tmp18 = closure_2;
              let tmp19 = new.target;
              let tmp20 = new.target;
              aPIError = new callback(onRejectSuccess[8]).APIError(closure_2);
              let tmp22 = aPIError;
              if (outer1_3 != null) {
                let tmp56 = ME;
                let tmp57 = outer1_1;
                let tmp23Result = tmp23(outer1_1);
              }
            } else if (3 === tmp4) {
              let tmp9 = noop;
              let tmp10 = noop;
              c6 = 2;
              let tmp11 = aPIError;
              aPIError.return();
              throw noop;
            } else if (arg0 === 1) {
              let num3 = 3;
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 2;
              let tmp5 = aPIError;
              aPIError.return();
              c6 = 0;
              let tmp6 = _slicedToArray;
              let tmp7 = outer1_5;
              let tmp8 = outer1_5(false);
              let num2 = 3;
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c6 = 2;
            }
          }
          let tmp24 = _slicedToArray;
          let tmp25 = noop;
          let tmp26 = noop;
          c6 = 0;
          let tmp27 = outer1_5;
          let tmp28 = outer1_5(false);
          throw noop;
        }
      }
    })();
  });
  const items2 = [tmp11, onRejectSuccess, onError];
  closure_0 = undefined;
  const rejectAll = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  closure_0 = onError((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (mutualGuilds === 2) {
        mutualGuilds = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
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
          mutualGuilds = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              mutualGuilds = 3;
              throw arg1;
            } else if (arg0 === 2) {
              mutualGuilds = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp4;
              let _onConfirm = tmp6;
              _onConfirm = function _onConfirm() {
                const self = this;
                const tmp = outer2_3(function*() {
                  if (c1 === 2) {
                    c1 = 3;
                    HermesBuiltin.throwTypeError();
                  } else if (tmp3 === 3) {
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
                      c1 = 2;
                      if (0 === c2) {
                        if (arg0 === 1) {
                          c1 = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          c1 = 3;
                          obj = { value: null, done: true };
                          obj[0] = arg1;
                          return obj;
                        } else {
                          if (null != outer1_0) {
                            const mutualGuilds = outer2_6.getMutualGuilds(tmp22.id);
                            let mapped;
                            if (mutualGuilds != null) {
                              mapped = mutualGuilds.map(() => { ... });
                            }
                            let items = mapped;
                          } else {
                            items = [];
                          }
                          let obj1 = v0(outer2_2[11]);
                          obj1 = { action: null, channel_id: null, mutual_guild_ids: null, other_user_id: null };
                          obj1[0] = outer2_7.ACCEPT_CONFIRMATION_PROMPT;
                          obj1[1] = outer1_0;
                          let closure_0 = items;
                          if (items == null) {
                            closure_0 = [];
                          }
                          obj1[2] = closure_0;
                          let id;
                          if (outer1_0 != null) {
                            id = tmp22.id;
                          }
                          obj1[3] = id;
                          obj1.track(outer2_9.MESSAGE_REQUEST_ACTION, obj1);
                          c2 = 1;
                          c1 = 1;
                          const obj2 = { value: null, done: false };
                          obj2[0] = outer1_10(outer1_0);
                          return obj2;
                        }
                      } else if (arg0 === 1) {
                        c1 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c1 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        c1 = 3;
                        return { value: "T", done: null };
                      }
                    } catch (tmp16) {
                      c1 = tmp;
                      throw tmp16;
                    }
                  }
                });
                const _onConfirm = tmp;
                const apply = tmp.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              };
              if (!outer1_9) {
                let obj1 = callback;
                mutualGuilds(true);
                let c4 = 2;
                c5 = 3;
                mutualGuilds = 1;
                obj1 = { value: null, done: false };
                obj1[0] = onAcceptSuccess(onRejectSuccess[10])(obj1.id, obj1.getAvatarURL(undefined, 80), { withMutualGuilds: true, withMutualFriendsCount: true });
                return obj1;
              }
              mutualGuilds = 3;
            }
          } else if (1 === tmp9) {
            c4 = 0;
            mutualGuilds(false);
            throw ME;
          } else {
            if (2 === tmp9) {
              c4 = 1;
            } else if (arg0 === 1) {
              mutualGuilds = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              mutualGuilds(false);
              mutualGuilds = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c4 = 1;
            }
            c4 = 0;
            mutualGuilds(false);
          }
          let obj2 = callback(onRejectSuccess[12]);
          obj2 = { channelId: null, onConfirm: null, onCancel: null };
          obj2[0] = callback;
          obj2[1] = function onConfirm() {
            const self = this;
            const apply = _onConfirm.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          obj2[2] = function onCancel() {
            if (null != closure_0) {
              mutualGuilds = mutualGuilds.getMutualGuilds(tmp.id);
              let mapped;
              if (mutualGuilds != null) {
                mapped = mutualGuilds.map((guild) => guild.guild.id);
              }
              let items = mapped;
            } else {
              items = [];
            }
            let obj = outer2_1(outer2_2[11]);
            obj = { action: outer2_7.DISMISS_CONFIRMATION_PROMPT, channel_id: closure_0, mutual_guild_ids: null, other_user_id: null };
            if (items == null) {
              items = [];
            }
            obj[2] = items;
            let id;
            if (closure_0 != null) {
              id = tmp.id;
            }
            obj[3] = id;
            obj.track(outer2_9.MESSAGE_REQUEST_ACTION, obj);
          };
          const result = obj2.openAcceptMessageRequestConfirmModal(obj2);
        } catch (tmp34) {
          ME = tmp34;
          if (tmp5 === c4) {
            mutualGuilds = tmp3;
            throw tmp34;
          } else if (tmp2 === tmp36) {
            c5 = tmp2;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const items3 = [acceptMessageRequest, tmp11, user];
  const items4 = [acceptMessageRequest];
  const callback3 = obj.useCallback(function(arg0) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items3);
  const markAsNotSpam = obj.useCallback((arg0, arg1, arg2) => {
    const callback = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    function onConfirm(setting) {
      if (arg1) {
        const NonSpamRetrainingOptIn = lib(onRejectSuccess[13]).NonSpamRetrainingOptIn;
        NonSpamRetrainingOptIn.updateSetting(setting);
      }
      let tmp4 = setting;
      if (setting) {
        tmp4 = null != closure_1;
      }
      if (tmp4) {
        let obj = lib(onRejectSuccess[14]);
        const result = obj.submitHamReportForFirstDM(closure_1);
      }
      outer1_10(lib.id);
      obj = { action: constants.ACCEPT_HAM_CONFIRMATION_PROMPT, channel_id: lib.id, is_dont_show_again_checked: arg1, non_spam_retraining_opt_in: setting };
      onAcceptSuccess(onRejectSuccess[11]).track(constants2.MESSAGE_REQUEST_ACTION, obj);
      if (null != callback) {
        callback();
      }
    }
    let NonSpamRetrainingOptIn = callback(onRejectSuccess[13]).NonSpamRetrainingOptIn;
    const setting = NonSpamRetrainingOptIn.getSetting();
    if (null == setting) {
      let obj = { channel: null, onConfirm: null, onCancel: null };
      obj[0] = arg0;
      obj[1] = onConfirm;
      obj[2] = function onCancel() {
        let obj = onAcceptSuccess(onRejectSuccess[11]);
        obj = { action: constants.DISMISS_HAM_CONFIRMATION_PROMPT, channel_id: lib.id };
        obj.track(constants2.MESSAGE_REQUEST_ACTION, obj);
      };
      let result = callback(onRejectSuccess[12]).onMarkAsNotSpamConfirmationModal(obj);
      const tmpResult = callback(onRejectSuccess[12]);
    } else {
      onConfirm(setting);
    }
  }, items4);
  if (tmp) {
    acceptMessageRequest = callback3;
  }
  return { acceptMessageRequest, rejectMessageRequest, rejectAll, markAsNotSpam, isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected: isOptimisticRejected[0] };
};