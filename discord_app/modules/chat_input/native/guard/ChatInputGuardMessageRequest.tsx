// discord_app/modules/chat_input/native/guard/ChatInputGuardMessageRequest.tsx
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardMessageRequest.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ChatInputGuardMessageRequest(channel) {
        const cResult = require("c").c(29);
        channel = channel.channel;
        _require = channel;
        let obj = require("c");
        const navigation = require("useNavigation").useNavigation();
        let obj2 = require("useNavigation");
        const isMessageRequestRestrictedViewer =
          require("useIsMessageRequestRestrictedViewer").useIsMessageRequestRestrictedViewer();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channel) {
          const fn = function c() {
            return UserStore.getUser(recipientId.getRecipientId());
          };
          cResult[1] = channel;
          cResult[2] = fn;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[2];
        }
        let obj3 = require("useIsMessageRequestRestrictedViewer");
        const stateFromStores = require("initialize").useStateFromStores(first, tmp8);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          function handleRequestError() {
            const obj2 = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
            const intl = recipientId(acceptMessageRequest[10]).intl;
            obj2.content = intl.string(recipientId(acceptMessageRequest[10]).t["EDYbS+"]);
            obj2.icon = navigation(acceptMessageRequest[11]);
            navigation(acceptMessageRequest[9]).open(obj2);
          }
          cResult[3] = handleRequestError;
          let tmp10 = handleRequestError;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== navigation) {
          function handleRejectSuccess() {
            navigation.pop();
          }
          cResult[4] = navigation;
          cResult[5] = handleRejectSuccess;
          let tmp11 = handleRejectSuccess;
        } else {
          tmp11 = cResult[5];
        }
        if (cResult[6] === tmp11) {
          if (cResult[7] === stateFromStores) {
            let tmp12 = cResult[8];
          }
          const messageRequestActions = tmp(tmp2[12]).useMessageRequestActions(tmp12);
          acceptMessageRequest = messageRequestActions.acceptMessageRequest;
          const rejectMessageRequest = messageRequestActions.rejectMessageRequest;
          ({ isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected } =
            messageRequestActions);
          let tmp14 = isAcceptLoading;
          if (!isAcceptLoading) {
            tmp14 = isRejectLoading;
          }
          if (!tmp14) {
            tmp14 = isUserProfileLoading;
          }
          if (!tmp14) {
            tmp14 = isOptimisticAccepted;
          }
          if (!tmp14) {
            tmp14 = isOptimisticRejected;
          }
          if (cResult[9] === acceptMessageRequest) {
            if (cResult[10] === channel.id) {
              let tmp15 = cResult[11];
            }
            if (cResult[12] === channel.id) {
              if (cResult[13] === rejectMessageRequest) {
                let tmp17 = cResult[14];
              }
              const _Symbol = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                let intl = tmp(tmp2[10]).intl;
                const stringResult = intl.string(tmp(tmp2[10]).t["e/eQVB"]);
                cResult[15] = stringResult;
                let tmp19 = stringResult;
              } else {
                tmp19 = cResult[15];
              }
              if (cResult[16] !== isMessageRequestRestrictedViewer) {
                const intl2 = tmp(tmp2[10]).intl;
                const t = tmp(tmp2[10]).t;
                const stringResult1 = intl2.string(isMessageRequestRestrictedViewer ? t.YQ0uUE : t.HcVzGI);
                cResult[16] = isMessageRequestRestrictedViewer;
                cResult[17] = stringResult1;
              } else {
                const _Symbol2 = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = tmp(tmp2[10]).intl;
                  const stringResult2 = intl3.string(tmp(tmp2[10]).t.Kz8Pwr);
                  cResult[18] = stringResult2;
                  let tmp24 = stringResult2;
                } else {
                  tmp24 = cResult[18];
                }
                if (!isAcceptLoading) {
                  isAcceptLoading = isUserProfileLoading;
                }
                if (!isAcceptLoading) {
                  isAcceptLoading = isOptimisticAccepted;
                }
                if (cResult[19] !== isMessageRequestRestrictedViewer) {
                  const intl4 = tmp(tmp2[10]).intl;
                  const t2 = tmp(tmp2[10]).t;
                  const stringResult3 = intl4.string(isMessageRequestRestrictedViewer ? t2.BVN4pL : t2.B2nygW);
                  cResult[19] = isMessageRequestRestrictedViewer;
                  cResult[20] = stringResult3;
                } else {
                  if (!isRejectLoading) {
                    isRejectLoading = isOptimisticRejected;
                  }
                  if (cResult[21] === tmp14) {
                    if (cResult[22] === tmp15) {
                      if (cResult[23] === tmp17) {
                        if (cResult[24] === isAcceptLoading) {
                          if (cResult[25] === tmp26) {
                            if (cResult[26] === isRejectLoading) {
                              if (cResult[27] === tmp21) {
                                let tmp29 = cResult[28];
                              }
                              return tmp29;
                            }
                          }
                        }
                      }
                    }
                  }
                  let obj4 = {
                    type: "button-action",
                    message: tmp19,
                    subtext: tmp21,
                    buttonPrimaryText: tmp24,
                    buttonPrimaryOnPress: tmp15,
                    buttonPrimaryDisabled: tmp14,
                    buttonPrimaryLoading: isAcceptLoading,
                    buttonSecondaryText: cResult[20],
                    buttonSecondaryOnPress: tmp17,
                    buttonSecondaryDisabled: tmp14,
                    buttonSecondaryLoading: isRejectLoading,
                  };
                  const tmp32 = jsx(navigation(tmp2[14]), {
                    type: "button-action",
                    message: tmp19,
                    subtext: tmp21,
                    buttonPrimaryText: tmp24,
                    buttonPrimaryOnPress: tmp15,
                    buttonPrimaryDisabled: tmp14,
                    buttonPrimaryLoading: isAcceptLoading,
                    buttonSecondaryText: cResult[20],
                    buttonSecondaryOnPress: tmp17,
                    buttonSecondaryDisabled: tmp14,
                    buttonSecondaryLoading: isRejectLoading,
                  });
                  cResult[21] = tmp14;
                  cResult[22] = tmp15;
                  cResult[23] = tmp17;
                  cResult[24] = isAcceptLoading;
                  cResult[25] = cResult[20];
                  cResult[26] = isRejectLoading;
                  cResult[27] = tmp21;
                  cResult[28] = tmp32;
                  tmp29 = tmp32;
                }
              }
            }
            _require = rejectMessageRequest(function* (arg0) {
              if (c1 === 2) {
                c1 = 3;
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
                      closure_0.stopPropagation();
                      c2 = 1;
                      c1 = 1;
                      const obj4 = { value: rejectMessageRequest(closure_0.id), done: false };
                      return obj4;
                    }
                  } else if (arg0 === 1) {
                    c1 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c1 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    c1 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp9) {
                  c1 = tmp;
                  throw tmp9;
                }
              }
            });
            function onRejectClick() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }
            cResult[12] = channel.id;
            cResult[13] = rejectMessageRequest;
            cResult[14] = onRejectClick;
            tmp17 = onRejectClick;
          }
          _require = rejectMessageRequest(function* (arg0) {
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
              try {
                c3 = 2;
                if (0 === v1) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_1 = tmp4;
                    closure_0.stopPropagation();
                    v1 = 1;
                    c3 = 1;
                    const obj4 = { value: v1(closure_0.id), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  closure_0(acceptMessageRequest[13]).transitionToChannel(closure_0.id, { navigationReplace: true });
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp14) {
                c3 = tmp;
                throw tmp14;
              }
            }
          });
          function onAcceptClick() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
          cResult[9] = acceptMessageRequest;
          cResult[10] = channel.id;
          cResult[11] = onAcceptClick;
          tmp15 = onAcceptClick;
          const tmpResult2 = tmp(tmp2[12]);
        }
        let obj5 = { user: stateFromStores, onError: tmp10, onRejectSuccess: tmp11 };
        cResult[6] = tmp11;
        cResult[7] = stateFromStores;
        cResult[8] = obj5;
        tmp12 = obj5;
        const tmpResult = require("initialize");
      }
    : function ChatInputGuardMessageRequest(channel) {
        channel = channel.channel;
        dependencyMap = undefined;
        c3 = undefined;
        closure_4 = async function _onAcceptClick2(arg0) {
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
            try {
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_1 = tmp4;
                  channel.stopPropagation();
                  c2 = 1;
                  c3 = 1;
                  const obj4 = { value: _undefined(id.id), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                channel(c2[13]).transitionToChannel(closure_129_0.id, { navigationReplace: true });
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp14) {
              c3 = tmp;
              throw tmp14;
            }
          }
        };
        closure_5 = async function _onRejectClick2(arg0) {
          if (c1 === 2) {
            c1 = 3;
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
                  channel.stopPropagation();
                  c2 = 1;
                  c1 = 1;
                  const obj4 = { value: asyncGeneratorStep(id.id), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c1 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                c1 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp9) {
              c1 = tmp;
              throw tmp9;
            }
          }
        };
        importDefault = channel(1502).useNavigation();
        let obj = channel(1502);
        const isMessageRequestRestrictedViewer = channel(12176).useIsMessageRequestRestrictedViewer();
        let obj2 = channel(12176);
        const items = [closure_4];
        const stateFromStores = channel(504).useStateFromStores(items, () =>
          UserStore.getUser(channel.getRecipientId()),
        );
        let obj3 = channel(504);
        const messageRequestActions = channel(12177).useMessageRequestActions({
          user: stateFromStores,
          onError: function handleRequestError() {
            const obj2 = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
            const intl = channel(_undefined[10]).intl;
            obj2.content = intl.string(channel(_undefined[10]).t["EDYbS+"]);
            obj2.icon = closure_1(_undefined[11]);
            closure_1(_undefined[9]).open(obj2);
          },
          onRejectSuccess: function handleRejectSuccess() {
            closure_1.pop();
          },
        });
        ({
          acceptMessageRequest: c2,
          rejectMessageRequest: c3,
          isAcceptLoading,
          isRejectLoading,
          isUserProfileLoading,
          isOptimisticAccepted,
          isOptimisticRejected,
        } = messageRequestActions);
        let tmp6 = isAcceptLoading;
        if (!isAcceptLoading) {
          tmp6 = isRejectLoading;
        }
        if (!tmp6) {
          tmp6 = isUserProfileLoading;
        }
        if (!tmp6) {
          tmp6 = isOptimisticAccepted;
        }
        if (!tmp6) {
          tmp6 = isOptimisticRejected;
        }
        const obj6 = {
          type: "button-action",
          message: null,
          subtext: null,
          buttonPrimaryText: null,
          buttonPrimaryOnPress: null,
          buttonPrimaryDisabled: null,
          buttonPrimaryLoading: null,
          buttonSecondaryText: null,
          buttonSecondaryOnPress: null,
          buttonSecondaryDisabled: null,
          buttonSecondaryLoading: null,
        };
        let obj4 = channel(12177);
        let obj5 = {
          user: stateFromStores,
          onError: function handleRequestError() {
            const obj2 = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
            const intl = channel(_undefined[10]).intl;
            obj2.content = intl.string(channel(_undefined[10]).t["EDYbS+"]);
            obj2.icon = closure_1(_undefined[11]);
            closure_1(_undefined[9]).open(obj2);
          },
          onRejectSuccess: function handleRejectSuccess() {
            closure_1.pop();
          },
        };
        const tmp7 = closure_5;
        let intl = tmp(1126).intl;
        obj6.message = intl.string(channel(1126).t["e/eQVB"]);
        const intl2 = tmp(1126).intl;
        const t = tmp(1126).t;
        obj6.subtext = intl2.string(isMessageRequestRestrictedViewer ? t.YQ0uUE : t.HcVzGI);
        const intl3 = tmp(1126).intl;
        obj6.buttonPrimaryText = intl3.string(channel(1126).t.Kz8Pwr);
        obj6.buttonPrimaryOnPress = function onAcceptClick(arg0) {
          const self = this;
          const apply = closure_4.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        obj6.buttonPrimaryDisabled = tmp6;
        if (!isAcceptLoading) {
          isAcceptLoading = isUserProfileLoading;
        }
        if (!isAcceptLoading) {
          isAcceptLoading = isOptimisticAccepted;
        }
        obj6.buttonPrimaryLoading = isAcceptLoading;
        const intl4 = tmp(1126).intl;
        const t2 = tmp(1126).t;
        obj6.buttonSecondaryText = intl4.string(isMessageRequestRestrictedViewer ? t2.BVN4pL : t2.B2nygW);
        obj6.buttonSecondaryOnPress = function onRejectClick(arg0) {
          const self = this;
          const apply = closure_5.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        obj6.buttonSecondaryDisabled = tmp6;
        if (!isRejectLoading) {
          isRejectLoading = isOptimisticRejected;
        }
        obj6.buttonSecondaryLoading = isRejectLoading;
        return tmp7(ChatInputGuardDefault, obj6);
      },
);
