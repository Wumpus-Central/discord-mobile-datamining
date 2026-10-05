// discord_app/modules/message_request/hooks/useMessageRequestActions.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import ReportModals from "../../in_app_reports/ReportModals.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import UserProfileStore from "../../user_profile/UserProfileStore.tsx";
import MessageRequestConstants from "../MessageRequestConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c1, c2;

let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ MessageRequestAnalyticsAction: metroImportDefault, BATCH_REJECT_LIMIT: metroImportAll } = MessageRequestConstants);
const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestActions.tsx");

export const useMessageRequestActions = function useMessageRequestActions(user) {
  let c4;
  let c5;
  let c6;
  let c7;
  let closure_8;
  let isOptimisticRejected;
  let tmp3;
  let tmp5;
  let tmp7;
  let tmp9;
  user = user.user;
  const onAcceptSuccess = user.onAcceptSuccess;
  const onRejectSuccess = user.onRejectSuccess;
  const onError = user.onError;
  _slicedToArray = undefined;
  react = undefined;
  c6 = undefined;
  c7 = undefined;
  closure_8 = undefined;
  let isUserProfileLoading;
  let obj = react;
  let tmp = onAcceptSuccess(onRejectSuccess[6])();
  const tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c4] = tmp2;
  let tmp4 = _slicedToArray(react.useState(false), 2);
  [tmp5, c5] = tmp4;
  let tmp6 = _slicedToArray(react.useState(false), 2);
  [tmp7, c6] = tmp6;
  let tmp8 = _slicedToArray(react.useState(false), 2);
  [tmp9, c7] = tmp8;
  [isOptimisticRejected, closure_8] = react.useState(false);
  let tmp12 = isAcceptLoading || isRejectLoading || isUserProfileLoading;
  isUserProfileLoading = tmp12;
  const useCallback = obj.useCallback;
  onError(function* (arg0) {
    let obj2;
    let v0;
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_1;
        let aPIError;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            closure_1 = tmp4;
            aPIError = undefined;
            if (!isUserProfileLoading) {
              v0(true);
              v0 = 2;
              c5 = 3;
              c6 = 1;
              const obj5 = { value: obj2.acceptMessageRequest(tmp33), done: false };
              obj2 = closure_0(onRejectSuccess[7]);
              return obj5;
            }
          }
        } else if (1 === c5) {
          v0 = 0;
          v0(false);
          throw closure_3;
        } else {
          if (2 === c5) {
            v0 = 1;
            closure_1 = closure_3;
            const self = this;
            const self2 = this;
            aPIError = new closure_0(onRejectSuccess[8]).APIError(closure_1);
            if (closure_3 != null) {
              tmp21(aPIError);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            v0(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_1_7(true);
            if (closure_1 != null) {
              closure_1();
            }
            v0 = 1;
          }
          v0 = 0;
          v0(false);
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp39) {
        closure_3 = tmp39;
        if (0 === v0) {
          c6 = 3;
          throw tmp39;
        } else if (1 === tmp41) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  });
  let items = [tmp12, onAcceptSuccess, onError];
  let acceptMessageRequest = useCallback(function () {
    return closure_0(...arguments);
  }, items);
  const useCallback2 = obj.useCallback;
  onError(function* (arg0) {
    let closure_2;
    let obj2;
    let v2;
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_1;
        let aPIError;
        c6 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp4;
            aPIError = undefined;
            if (!isUserProfileLoading) {
              v2(true);
              c4 = 2;
              v2 = 3;
              c6 = 1;
              const obj5 = { value: obj2.rejectMessageRequest(tmp33), done: false };
              obj2 = closure_0(onRejectSuccess[7]);
              return obj5;
            }
          }
        } else if (1 === v2) {
          c4 = 0;
          v2(false);
          throw closure_3;
        } else {
          if (2 === v2) {
            c4 = 1;
            closure_1 = closure_3;
            const self = this;
            const self2 = this;
            aPIError = new closure_0(onRejectSuccess[8]).APIError(closure_1);
            if (closure_3 != null) {
              tmp21(aPIError);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            v2(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_1_8(true);
            if (tmp != null) {
              tmp();
            }
            c4 = 1;
          }
          c4 = 0;
          v2(false);
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp39) {
        closure_3 = tmp39;
        if (0 === c4) {
          c6 = 3;
          throw tmp39;
        } else if (1 === tmp41) {
          v2 = 1;
        } else {
          v2 = 2;
        }
      }
    }
  });
  const items1 = [tmp12, onRejectSuccess, onError];
  const rejectMessageRequest = useCallback2(function () {
    return closure_0(...arguments);
  }, items1);
  const useCallback3 = obj.useCallback;
  onError(function* (arg0) {
    let v3;
    closure_0 = arg0;
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      while (true) {
        let closure_3;
        let aPIError;
        let closure_2;
        let closure_1;
        v3 = 2;
        let tmp4 = c7;
        if (0 === c7) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_4 = tmp;
            closure_3 = tmp4;
            let c0;
            aPIError = undefined;
            if (!isUserProfileLoading) {
              let tmp28 = closure_1_5(true);
              let tmp32 = onAcceptSuccess(onRejectSuccess[9])(tmp56, closure_2_8);
              c6 = 2;
              closure_2 = tmp32;
              closure_1 = tmp32[Symbol.iterator]();
              if (closure_1 === undefined) {
                let tmp44 = v3(true);
                if (closure_2 != null) {
                  let tmp45 = closure_2();
                }
                c6 = 1;
              } else {
                c6 = 3;
                c0 = tmp36;
                let obj2 = closure_0(onRejectSuccess[7]);
                c7 = 4;
                v3 = 1;
                let obj5 = { value: obj2.rejectMessageRequestBatch(c0), done: false };
                return obj5;
              }
            }
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (1 === tmp4) {
          c6 = 0;
          let tmp26 = closure_1_5(false);
          throw closure_1_5;
        } else if (2 === tmp4) {
          c6 = 1;
          closure_2 = closure_1_5;
          let self = this;
          let self2 = this;
          aPIError = new closure_0(onRejectSuccess[8]).APIError(closure_2);
          if (closure_3 != null) {
            let tmp21Result = tmp21(aPIError);
          }
        } else if (3 === tmp4) {
          c6 = 2;
          closure_1.return();
          throw closure_1_5;
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          closure_1.return();
          c6 = 0;
          let tmp8 = closure_1_5(false);
          v3 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          c6 = 2;
        }
        c6 = 0;
        let tmp48 = closure_1_5(false);
      }
    }
  });
  const items2 = [tmp12, onRejectSuccess, onError];
  const rejectAll = useCallback3(function () {
    return closure_0(...arguments);
  }, items2);
  const useCallback4 = obj.useCallback;
  let closure_0 = onError((channelId) => {
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function* (arg0) {
      let channel_id;
      let tmp27Result;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let obj;
          v3 = 2;
          const tmp4 = c5;
          if (0 === c5) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp;
              closure_1 = tmp27Result;
              obj = function _onConfirm() {
                obj = closure_3(function* () {
                  let id;
                  let mutual_guild_ids;
                  if (c1 === 2) {
                    c1 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp2 === 3) {
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
                      c1 = 2;
                      if (0 === c2) {
                        if (arg0 === 1) {
                          c1 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c1 = 3;
                          const obj3 = { value, done: true };
                          return obj3;
                        } else {
                          let items;
                          if (null != mutual_guild_ids) {
                            mutualGuilds = mutualGuilds.getMutualGuilds(tmp20.id);
                            let mapped;
                            if (mutualGuilds != null) {
                              mapped = mutualGuilds.map((guild) => guild.guild.id);
                            }
                            items = mapped;
                          } else {
                            items = [];
                          }
                          const obj4 = {
                            action: constants.ACCEPT_CONFIRMATION_PROMPT,
                            channel_id,
                            mutual_guild_ids,
                            other_user_id: id,
                          };
                          mutual_guild_ids = items;
                          const track = closure_2_1(closure_2_2[11]).track;
                          const MESSAGE_REQUEST_ACTION = constants2.MESSAGE_REQUEST_ACTION;
                          const tmp8 = closure_2_1(closure_2_2[11]);
                          if (items == null) {
                            mutual_guild_ids = [];
                          }
                          id = undefined;
                          if (mutual_guild_ids != null) {
                            id = tmp20.id;
                          }
                          track(MESSAGE_REQUEST_ACTION, obj4);
                          c2 = 1;
                          c1 = 1;
                          const obj5 = { value: closure_1_10(channel_id), done: false };
                          return obj5;
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
                        return { value: "IconComponent", done: null };
                      }
                    } catch (tmp16) {
                      c1 = 3;
                      throw tmp16;
                    }
                  }
                });
                return obj(...arguments);
              };
              if (!constants2) {
                tmp27Result = channelId;
                if (null != channelId) {
                  if (null == closure_2_6.getMutualGuilds(tmp27Result.id)) {
                    v3(true);
                    c4 = 2;
                    const tmp27 = onAcceptSuccess(onRejectSuccess[10]);
                    tmp27Result = tmp27(tmp27Result.id, tmp27Result.getAvatarURL(undefined, 80), {
                      withMutualGuilds: true,
                      withMutualFriendsCount: true,
                    });
                    c5 = 3;
                    v3 = 1;
                    let obj5 = { value: tmp27Result, done: false };
                    return obj5;
                  }
                }
              }
              v3 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === tmp4) {
            c4 = 0;
            tmp27Result = v3(false);
            throw closure_3;
          } else {
            if (2 === tmp4) {
              let tmp8 = closure_3;
              c4 = 1;
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              v3(false);
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c4 = 1;
            }
            c4 = 0;
            v3(false);
          }
          let obj3 = channelId(onRejectSuccess[12]);
          const obj6 = {
            channelId,
            onConfirm() {
              return closure_1_1(...arguments);
            },
            onCancel() {
              let id;
              let items;
              if (null != channelId) {
                const mutualGuilds = closure_3_6.getMutualGuilds(channelId.id);
                let mapped;
                if (mutualGuilds != null) {
                  mapped = mutualGuilds.map((guild) => guild.guild.id);
                }
                items = mapped;
              } else {
                items = [];
              }
              const obj = {
                action: constants.DISMISS_CONFIRMATION_PROMPT,
                channel_id,
                mutual_guild_ids: items,
                other_user_id: id,
              };
              const track = onAcceptSuccess(onRejectSuccess[11]).track;
              const MESSAGE_REQUEST_ACTION = constants2.MESSAGE_REQUEST_ACTION;
              onAcceptSuccess(onRejectSuccess[11]);
              if (items == null) {
                items = [];
              }
              id = undefined;
              if (channelId != null) {
                id = channelId.id;
              }
              track(MESSAGE_REQUEST_ACTION, obj);
            },
          };
          const result = obj3.openAcceptMessageRequestConfirmModal(obj6);
        } catch (tmp28) {
          closure_3 = tmp28;
          if (0 === c4) {
            v3 = 3;
            throw tmp28;
          } else if (1 === tmp30) {
            c5 = 1;
          } else {
            c5 = 2;
          }
        }
      }
    })();
  });
  const items3 = [acceptMessageRequest, tmp12, user];
  const items4 = [acceptMessageRequest];
  const callback4 = useCallback4(function (arg0) {
    return closure_0(...arguments);
  }, items3);
  const markAsNotSpam = obj.useCallback((channel, arg1, arg2) => {
    let closure_1 = arg1;
    let closure_2 = arg2;
    function onConfirm_0(setting, is_dont_show_again_checked) {
      const tmp = is_dont_show_again_checked;
      if (tmp) {
        const NonSpamRetrainingOptIn = UserSettings.NonSpamRetrainingOptIn;
        NonSpamRetrainingOptIn.updateSetting(setting);
      }
      const tmp5 = setting && null != closure_1;
      if (tmp5) {
        const obj = ReportModals;
        const result = obj.submitHamReportForFirstDM(closure_1);
      }
      acceptMessageRequest(channel.id);
      const obj2 = AnalyticsUtilsDefault;
      const obj3 = {
        action: metroImportDefault.ACCEPT_HAM_CONFIRMATION_PROMPT,
        channel_id: channel.id,
        is_dont_show_again_checked,
        non_spam_retraining_opt_in: setting,
      };
      obj2.track(AnalyticEvents.MESSAGE_REQUEST_ACTION, obj3);
      if (null != closure_2) {
        closure_2();
      }
    }
    let NonSpamRetrainingOptIn = user(onRejectSuccess[13]).NonSpamRetrainingOptIn;
    const setting = NonSpamRetrainingOptIn.getSetting();
    if (null == setting) {
      let obj = {
        channel,
        onConfirm: onConfirm_0,
        onCancel: function onCancel_0() {
          const obj = AnalyticsUtilsDefault;
          const obj2 = { action: metroImportDefault.DISMISS_HAM_CONFIRMATION_PROMPT, channel_id: channel.id };
          obj.track(AnalyticEvents.MESSAGE_REQUEST_ACTION, obj2);
        },
      };
      const tmpResult = user(onRejectSuccess[12]);
      let result = tmpResult.onMarkAsNotSpamConfirmationModal(obj);
    } else {
      onConfirm_0(setting);
    }
  }, items4);
  if (tmp) {
    acceptMessageRequest = callback4;
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
    isOptimisticRejected,
  };
};
