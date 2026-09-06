// discord_app/modules/message_request/hooks/useMessageRequestActions.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import ReportModals from "../../in_app_reports/ReportModals.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserProfileStore from "../../user_profile/UserProfileStore.tsx";

require = fn;
const MessageRequestConstants = fn(12443);
({ MessageRequestAnalyticsAction: closure_7, BATCH_REJECT_LIMIT: closure_8 } = MessageRequestConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestActions.tsx");

export const useMessageRequestActions = function useMessageRequestActions(user) {
  user = user.user;
  closure_0 = user;
  let onAcceptSuccess = user.onAcceptSuccess;
  let onRejectSuccess = user.onRejectSuccess;
  const onError = user.onError;
  _slicedToArray = undefined;
  noop = undefined;
  c6 = undefined;
  c7 = undefined;
  let isUserProfileLoading;
  let acceptMessageRequest;
  let tmp = onAcceptSuccess(onRejectSuccess[6])();
  [tmp3, c4] = _slicedToArray(noop.useState(false), 2);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  [tmp5, c5] = _slicedToArray(noop.useState(false), 2);
  let tmp4 = _slicedToArray(noop.useState(false), 2);
  [tmp7, c6] = _slicedToArray(noop.useState(false), 2);
  let tmp6 = _slicedToArray(noop.useState(false), 2);
  [tmp9, c7] = _slicedToArray(noop.useState(false), 2);
  const isOptimisticRejected = _slicedToArray(noop.useState(false), 2);
  closure_8 = isOptimisticRejected[1];
  let tmp11 = isAcceptLoading;
  if (!isAcceptLoading) {
    tmp11 = isRejectLoading;
  }
  if (!tmp11) {
    tmp11 = isUserProfileLoading;
  }
  isUserProfileLoading = tmp11;
  onError(function* (arg0) {
    if (c6 === 2) {
      c6 = 3;
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp4;
            onAcceptSuccess = tmp8;
            closure_129_0 = undefined;
            if (isUserProfileLoading) {
              c6 = 3;
            } else {
              v0(true);
              v0 = 2;
              let obj1 = closure_0(onRejectSuccess[7]);
              c5 = 3;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.acceptMessageRequest(tmp39);
              return obj1;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            v0 = 1;
            closure_129_1 = closure_3;
            const aPIError = new closure_0(onRejectSuccess[8]).APIError(closure_129_1);
            closure_129_0 = aPIError;
            if (closure_3 != null) {
              tmp27(closure_129_0);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            v0(false);
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            _undefined2(true);
            if (onAcceptSuccess != null) {
              onAcceptSuccess();
            }
            v0 = 1;
          }
          v0 = 0;
          v0(false);
        }
        v0 = 0;
        v0(false);
        throw closure_3;
      } catch (tmp45) {
        closure_3 = tmp45;
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
  });
  let items = [tmp11, onAcceptSuccess, onError];
  acceptMessageRequest = obj.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  onError(function* (arg0) {
    if (c6 === 2) {
      c6 = 3;
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
        c6 = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp8;
            closure_129_0 = undefined;
            if (isUserProfileLoading) {
              c6 = 3;
            } else {
              v3(true);
              c4 = 2;
              let obj1 = closure_0(onRejectSuccess[7]);
              v3 = 3;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.rejectMessageRequest(tmp39);
              return obj1;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c4 = 1;
            closure_129_1 = closure_3;
            const aPIError = new closure_0(onRejectSuccess[8]).APIError(closure_129_1);
            closure_129_0 = aPIError;
            if (closure_3 != null) {
              tmp27(closure_129_0);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            v3(false);
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1_8(true);
            if (tmp4 != null) {
              tmp4();
            }
            c4 = 1;
          }
          c4 = 0;
          v3(false);
        }
        c4 = 0;
        v3(false);
        throw closure_3;
      } catch (tmp45) {
        closure_3 = tmp45;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp45;
        } else if (tmp2 === tmp47) {
          v3 = tmp2;
        } else {
          v3 = tmp;
        }
      }
    }
  });
  const items1 = [tmp11, onRejectSuccess, onError];
  const rejectMessageRequest = obj.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  onError(function* (arg0) {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        v3 = 2;
        let tmp4 = c7;
        if (0 === c7) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp;
            closure_3 = tmp4;
            closure_131_0 = undefined;
            closure_131_1 = undefined;
            if (isUserProfileLoading) {
              v3 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              let tmp30 = _undefined(true);
              let tmp34 = onAcceptSuccess(onRejectSuccess[9])(tmp58, closure_8);
              c6 = 2;
              onRejectSuccess = tmp34;
              onAcceptSuccess = tmp34[Symbol.iterator]();
              if (onAcceptSuccess === undefined) {
                let tmp46 = v3(true);
                if (onRejectSuccess != null) {
                  let tmp47 = onRejectSuccess();
                }
                c6 = 0;
                let tmp50 = _undefined(false);
              } else {
                c6 = 3;
                closure_131_0 = tmp38;
                closure_0(onRejectSuccess[7]);
                c7 = 4;
                v3 = 1;
                let obj1 = { value: null, done: false };
                obj1.value = obj1.rejectMessageRequestBatch(closure_131_0);
                return obj1;
              }
            }
          }
        } else if (1 !== tmp4) {
          if (2 === tmp4) {
            c6 = 1;
            closure_131_2 = _undefined;
            let tmp19 = new.target;
            let tmp20 = new.target;
            let aPIError = new closure_0(onRejectSuccess[8]).APIError(closure_131_2);
            closure_131_1 = aPIError;
            if (closure_3 != null) {
              let tmp23Result = tmp23(closure_131_1);
            }
          } else if (3 === tmp4) {
            c6 = 2;
            onAcceptSuccess.return();
            throw _undefined;
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            onAcceptSuccess.return();
            c6 = 0;
            let tmp8 = _undefined(false);
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c6 = 2;
          }
        }
        c6 = 0;
        let tmp28 = _undefined(false);
        throw _undefined;
      }
    }
  });
  const items2 = [tmp11, onRejectSuccess, onError];
  const rejectAll = obj.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  closure_0 = onError(function* (arg0) {
    if (mutualGuilds === 2) {
      mutualGuilds = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
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
        mutualGuilds = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            mutualGuilds = 3;
            throw value;
          } else if (arg0 === 2) {
            mutualGuilds = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp4;
            closure_1 = tmp6;
            closure_129_0 = channel_id;
            closure_129_1 = function _onConfirm() {
              const self = this;
              const tmp = onError(function* () {
                if (c1 === 2) {
                  c1 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
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
                    c1 = 2;
                    if (0 === c2) {
                      if (arg0 === 1) {
                        c1 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c1 = 3;
                        obj = { value, done: true };
                        return obj;
                      } else {
                        if (null != mutual_guild_ids) {
                          mutualGuilds = mutualGuilds.getMutualGuilds(tmp21.id);
                          let mapped;
                          if (mutualGuilds != null) {
                            mapped = mutualGuilds.map((guild) => guild.guild.id);
                          }
                          let items = mapped;
                        } else {
                          items = [];
                        }
                        let obj1 = closure_2_1(closure_2_2[11]);
                        obj1 = {
                          action: constants.ACCEPT_CONFIRMATION_PROMPT,
                          channel_id,
                          mutual_guild_ids: null,
                          other_user_id: null,
                        };
                        mutual_guild_ids = items;
                        if (items == null) {
                          mutual_guild_ids = [];
                        }
                        obj1.mutual_guild_ids = mutual_guild_ids;
                        let id;
                        if (mutual_guild_ids != null) {
                          id = tmp21.id;
                        }
                        obj1.other_user_id = id;
                        obj1.track(constants2.MESSAGE_REQUEST_ACTION, obj1);
                        c2 = 1;
                        c1 = 1;
                        const obj2 = { value: closure_1_10(channel_id), done: false };
                        return obj2;
                      }
                    } else if (arg0 === 1) {
                      c1 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c1 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      c1 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } catch (tmp16) {
                    c1 = tmp;
                    throw tmp16;
                  }
                }
              });
              closure_1 = tmp;
              const apply = tmp.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            if (!isUserProfileLoading) {
              let obj1 = channel_id;
              mutualGuilds(true);
              c4 = 2;
              c5 = 3;
              mutualGuilds = 1;
              obj1 = { value: null, done: false };
              obj1.value = onAcceptSuccess(onRejectSuccess[10])(obj1.id, obj1.getAvatarURL(undefined, 80), {
                withMutualGuilds: true,
                withMutualFriendsCount: true,
              });
              return obj1;
            }
            mutualGuilds = 3;
          }
        } else if (1 === tmp9) {
          c4 = 0;
          mutualGuilds(false);
          throw closure_3;
        } else {
          if (2 === tmp9) {
            c4 = 1;
          } else if (arg0 === 1) {
            mutualGuilds = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            mutualGuilds(false);
            mutualGuilds = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c4 = 1;
          }
          c4 = 0;
          mutualGuilds(false);
        }
        let obj2 = channel_id(onRejectSuccess[12]);
        obj2 = {
          channelId: closure_129_0,
          onConfirm() {
            const self = this;
            const apply = closure_1.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          },
          onCancel() {
            if (null != user) {
              mutualGuilds = mutualGuilds.getMutualGuilds(user.id);
              let mapped;
              if (mutualGuilds != null) {
                mapped = mutualGuilds.map((guild) => guild.guild.id);
              }
              let items = mapped;
            } else {
              items = [];
            }
            onAcceptSuccess(onRejectSuccess[11]);
            const obj = {
              action: constants.DISMISS_CONFIRMATION_PROMPT,
              channel_id,
              mutual_guild_ids: null,
              other_user_id: null,
            };
            if (items == null) {
              items = [];
            }
            obj.mutual_guild_ids = items;
            let id;
            if (user != null) {
              id = user.id;
            }
            obj.other_user_id = id;
            obj.track(isUserProfileLoading.MESSAGE_REQUEST_ACTION, obj);
          },
        };
        const result = obj2.openAcceptMessageRequestConfirmModal(obj2);
      } catch (tmp34) {
        closure_3 = tmp34;
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
  });
  const items3 = [acceptMessageRequest, tmp11, user];
  const items4 = [acceptMessageRequest];
  const callback3 = obj.useCallback(function (arg0) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items3);
  const markAsNotSpam = obj.useCallback((channel, arg1, arg2) => {
    const user = channel;
    closure_1 = arg1;
    closure_2 = arg2;
    function onConfirm(setting, is_dont_show_again_checked) {
      if (is_dont_show_again_checked) {
        const NonSpamRetrainingOptIn = UserSettings.NonSpamRetrainingOptIn;
        NonSpamRetrainingOptIn.updateSetting(setting);
      }
      let tmp4 = setting;
      if (setting) {
        tmp4 = null != closure_1;
      }
      if (tmp4) {
        let obj = ReportModals;
        const result = obj.submitHamReportForFirstDM(closure_1);
      }
      acceptMessageRequest(user.id);
      obj = {
        action: constants.ACCEPT_HAM_CONFIRMATION_PROMPT,
        channel_id: user.id,
        is_dont_show_again_checked,
        non_spam_retraining_opt_in: setting,
      };
      AnalyticsUtilsDefault.track(AnalyticEvents.MESSAGE_REQUEST_ACTION, obj);
      if (null != closure_2) {
        closure_2();
      }
    }
    let NonSpamRetrainingOptIn = user(onRejectSuccess[13]).NonSpamRetrainingOptIn;
    const setting = NonSpamRetrainingOptIn.getSetting();
    if (null == setting) {
      let obj = {
        channel,
        onConfirm,
        onCancel() {
          const obj = { action: constants.DISMISS_HAM_CONFIRMATION_PROMPT, channel_id: user.id };
          obj.track(AnalyticEvents.MESSAGE_REQUEST_ACTION, obj);
        },
      };
      let result = tmp(onRejectSuccess[12]).onMarkAsNotSpamConfirmationModal(obj);
      const tmpResult = tmp(onRejectSuccess[12]);
    } else {
      onConfirm(setting);
    }
    tmp = user;
  }, items4);
  if (tmp) {
    acceptMessageRequest = callback3;
  }
  return {
    acceptMessageRequest,
    rejectMessageRequest,
    rejectAll,
    markAsNotSpam,
    isAcceptLoading,
    isRejectLoading,
    isUserProfileLoading,
    isOptimisticAccepted,
    isOptimisticRejected: isOptimisticRejected[0],
  };
};
