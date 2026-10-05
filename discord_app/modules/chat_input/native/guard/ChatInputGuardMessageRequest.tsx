// discord_app/modules/chat_input/native/guard/ChatInputGuardMessageRequest.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c1, channel, dependencyMap, id, importDefault, navigation;

const jsx = Fragment.jsx;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let acceptMessageRequest;
        let first;
        let isAcceptLoading;
        let isOptimisticAccepted;
        let isOptimisticRejected;
        let isRejectLoading;
        let isUserProfileLoading;
        let obj5;
        let tmp10;
        let tmp8;
        const tmp = channel;
        const tmp2 = acceptMessageRequest;
        let obj = channel(acceptMessageRequest[5]);
        const cResult = obj.c(29);
        channel = channel.channel;
        let obj2 = channel(acceptMessageRequest[6]);
        navigation = obj2.useNavigation();
        let obj3 = channel(acceptMessageRequest[7]);
        const isMessageRequestRestrictedViewer = obj3.useIsMessageRequestRestrictedViewer();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channel) {
          const fn = function c() {
            return UserStore.getUser(channel.getRecipientId());
          };
          cResult[1] = channel;
          cResult[2] = fn;
          tmp8 = fn;
        } else {
          tmp8 = cResult[2];
        }
        const tmpResult = tmp(tmp2[8]);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function y() {
            let intl;
            const obj = {
              key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE",
              content: intl.string(channel(acceptMessageRequest[10]).t["EDYbS+"]),
              icon: navigation(acceptMessageRequest[11]),
            };
            const open = navigation(acceptMessageRequest[9]).open;
            navigation(acceptMessageRequest[9]);
            intl = channel(acceptMessageRequest[10]).intl;
            open(obj);
          };
          cResult[3] = fn2;
          tmp10 = fn2;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== navigation) {
          class S {
            constructor() {
              navigation.pop();
            }
          }
          cResult[4] = navigation;
          cResult[5] = S;
        } else {
          class S {
            constructor() {
              navigation.pop();
            }
          }
        }
        if (cResult[6] === S) {
          class S {
            constructor() {
              navigation.pop();
            }
          }
          const tmpResult2 = tmp(tmp2[12]);
          const messageRequestActions = tmpResult2.useMessageRequestActions(obj5);
          acceptMessageRequest = messageRequestActions.acceptMessageRequest;
          const rejectMessageRequest = messageRequestActions.rejectMessageRequest;
          ({ isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected } =
            messageRequestActions);
          const tmp13 =
            isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected;
          if (cResult[9] === acceptMessageRequest) {
            class S {
              constructor() {
                navigation.pop();
              }
            }
            if (cResult[12] === channel.id) {
              let tmp18;
              let tmp23;
              class S {
                constructor() {
                  navigation.pop();
                }
              }
              const _Symbol = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                class S {
                  constructor() {
                    navigation.pop();
                  }
                }
                const stringResult = obj7.string(tmp(tmp2[10]).t["e/eQVB"]);
                cResult[15] = stringResult;
                tmp18 = stringResult;
              } else {
                class S {
                  constructor() {
                    navigation.pop();
                  }
                }
              }
              if (cResult[16] !== isMessageRequestRestrictedViewer) {
                class S {
                  constructor() {
                    navigation.pop();
                  }
                }
                const string = tmp21.string;
                const t = tmp(tmp2[10]).t;
                cResult[16] = isMessageRequestRestrictedViewer;
                cResult[17] = string(isMessageRequestRestrictedViewer ? t.YQ0uUE : t.HcVzGI);
                const stringResult1 = string(isMessageRequestRestrictedViewer ? t.YQ0uUE : t.HcVzGI);
              } else {
                class S {
                  constructor() {
                    navigation.pop();
                  }
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                class S {
                  constructor() {
                    navigation.pop();
                  }
                }
                const stringResult2 = obj8.string(tmp(tmp2[10]).t.Kz8Pwr);
                cResult[18] = stringResult2;
                tmp23 = stringResult2;
              } else {
                class S {
                  constructor() {
                    navigation.pop();
                  }
                }
              }
              if (!isAcceptLoading) {
                class S {
                  constructor() {
                    navigation.pop();
                  }
                }
              }
              if (!isAcceptLoading) {
                class S {
                  constructor() {
                    navigation.pop();
                  }
                }
              }
              if (cResult[19] !== isMessageRequestRestrictedViewer) {
                class S {
                  constructor() {
                    navigation.pop();
                  }
                }
                const string2 = tmp26.string;
                const t2 = tmp(tmp2[10]).t;
                cResult[19] = isMessageRequestRestrictedViewer;
                cResult[20] = string2(isMessageRequestRestrictedViewer ? t2.BVN4pL : t2.B2nygW);
                const string2Result = string2(isMessageRequestRestrictedViewer ? t2.BVN4pL : t2.B2nygW);
              } else {
                class S {
                  constructor() {
                    navigation.pop();
                  }
                }
              }
              if (!isRejectLoading) {
                class S {
                  constructor() {
                    navigation.pop();
                  }
                }
              }
              if (cResult[21] === tmp13) {
                class S {
                  constructor() {
                    navigation.pop();
                  }
                }
              }
              cResult[21] = tmp13;
              cResult[22] = tmp14;
              cResult[23] = tmp16;
              cResult[24] = isAcceptLoading;
              cResult[25] = tmp25;
              cResult[26] = isRejectLoading;
              cResult[27] = tmp20;
              cResult[28] = jsx(navigation(tmp2[14]), {
                type: "button-action",
                message: tmp18,
                subtext: tmp20,
                buttonPrimaryText: tmp23,
                buttonPrimaryOnPress: tmp14,
                buttonPrimaryDisabled: tmp13,
                buttonPrimaryLoading: isAcceptLoading,
                buttonSecondaryText: tmp25,
                buttonSecondaryOnPress: tmp16,
                buttonSecondaryDisabled: tmp13,
                buttonSecondaryLoading: isRejectLoading,
              });
              const tmp31 = jsx(navigation(tmp2[14]), {
                type: "button-action",
                message: tmp18,
                subtext: tmp20,
                buttonPrimaryText: tmp23,
                buttonPrimaryOnPress: tmp14,
                buttonPrimaryDisabled: tmp13,
                buttonPrimaryLoading: isAcceptLoading,
                buttonSecondaryText: tmp25,
                buttonSecondaryOnPress: tmp16,
                buttonSecondaryDisabled: tmp13,
                buttonSecondaryLoading: isRejectLoading,
              });
            }
            let closure_0 = rejectMessageRequest(function* (arg0) {
              closure_0 = arg0;
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
                } catch (tmp8) {
                  c1 = 3;
                  throw tmp8;
                }
              }
            });
            function onRejectClick() {
              return closure_0(...arguments);
            }
            cResult[12] = channel.id;
            cResult[13] = rejectMessageRequest;
            cResult[14] = onRejectClick;
          }
          closure_0 = rejectMessageRequest(function* (arg0) {
            let v1;
            closure_0 = arg0;
            if (c3 === 2) {
              c3 = 3;
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
                    let closure_1 = tmp3;
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
                  const obj = closure_0(acceptMessageRequest[13]);
                  obj.transitionToChannel(closure_0.id, { navigationReplace: true });
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp13) {
                c3 = 3;
                throw tmp13;
              }
            }
          });
          function onAcceptClick() {
            return closure_0(...arguments);
          }
          cResult[9] = acceptMessageRequest;
          cResult[10] = channel.id;
          cResult[11] = onAcceptClick;
        }
        obj5 = { user: stateFromStores, onError: tmp10, onRejectSuccess: S };
        cResult[6] = S;
        cResult[7] = stateFromStores;
        cResult[8] = obj5;
      }
    : (channel) => {
        let _undefined;
        let c2;
        let c3;
        let intl;
        let intl3;
        let isAcceptLoading;
        let isOptimisticAccepted;
        let isOptimisticRejected;
        let isRejectLoading;
        let isUserProfileLoading;
        let string;
        let string2;
        let t;
        let t2;
        channel = channel.channel;
        dependencyMap = undefined;
        c3 = undefined;
        let obj = function _onAcceptClick2() {
          obj = _asyncToGenerator(async (arg0) => {
            let closure_0;
            id = arg0;
            if (c3 === 2) {
              c3 = 3;
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
                    closure_1 = tmp3;
                    id.stopPropagation();
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
                  obj = id(c2[13]);
                  obj.transitionToChannel(closure_129_0.id, { navigationReplace: true });
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp13) {
                c3 = 3;
                throw tmp13;
              }
            }
          });
          return obj(...arguments);
        };
        obj = function _onRejectClick2() {
          obj = _asyncToGenerator(async (arg0) => {
            let closure_0;
            id = arg0;
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
                    id.stopPropagation();
                    c2 = 1;
                    c1 = 1;
                    const obj4 = { value: _undefined(id.id), done: false };
                    return obj4;
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
              } catch (tmp8) {
                c1 = 3;
                throw tmp8;
              }
            }
          });
          return obj(...arguments);
        };
        const tmp = channel;
        const tmp2 = dependencyMap;
        obj = channel(1490);
        importDefault = obj.useNavigation();
        let obj2 = channel(12083);
        const isMessageRequestRestrictedViewer = obj2.useIsMessageRequestRestrictedViewer();
        let obj3 = channel(504);
        const items = [obj];
        const stateFromStores = obj3.useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
        let obj4 = channel(12084);
        let obj5 = {
          user: stateFromStores,
          onError: function handleRequestError() {
            let intl;
            obj = {
              key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE",
              content: intl.string(channel(c2[10]).t["EDYbS+"]),
              icon: closure_1(c2[11]),
            };
            const open = closure_1(c2[9]).open;
            closure_1(c2[9]);
            intl = channel(c2[10]).intl;
            open(obj);
          },
          onRejectSuccess: function handleRejectSuccess() {
            closure_1.pop();
          },
        };
        const messageRequestActions = obj4.useMessageRequestActions(obj5);
        ({
          acceptMessageRequest: c2,
          rejectMessageRequest: c3,
          isAcceptLoading,
          isRejectLoading,
          isUserProfileLoading,
          isOptimisticAccepted,
          isOptimisticRejected,
        } = messageRequestActions);
        const obj6 = {
          type: "button-action",
          message: intl.string(tmp(1126).t["e/eQVB"]),
          subtext: string(isMessageRequestRestrictedViewer ? t.YQ0uUE : t.HcVzGI),
          buttonPrimaryText: intl3.string(tmp(1126).t.Kz8Pwr),
          buttonPrimaryOnPress: function onAcceptClick(arg0) {
            return obj(...arguments);
          },
          buttonPrimaryDisabled:
            isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected,
          buttonPrimaryLoading: isAcceptLoading,
          buttonSecondaryText: string2(isMessageRequestRestrictedViewer ? t2.BVN4pL : t2.B2nygW),
          buttonSecondaryOnPress: function onRejectClick(arg0) {
            return obj(...arguments);
          },
          buttonSecondaryDisabled:
            isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected,
          buttonSecondaryLoading: isRejectLoading,
        };
        const tmp8 = ChatInputGuardDefault;
        intl = tmp(1126).intl;
        const intl2 = tmp(1126).intl;
        string = intl2.string;
        t = tmp(1126).t;
        intl3 = tmp(1126).intl;
        const tmp7 = obj;
        if (!isAcceptLoading) {
          isAcceptLoading = isUserProfileLoading;
        }
        if (!isAcceptLoading) {
          isAcceptLoading = isOptimisticAccepted;
        }
        const intl4 = tmp(1126).intl;
        string2 = intl4.string;
        t2 = tmp(1126).t;
        if (!isRejectLoading) {
          isRejectLoading = isOptimisticRejected;
        }
        return tmp7(tmp8, obj6);
      },
);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardMessageRequest.tsx");

export default memoResult;
