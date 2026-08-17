// discord_app/modules/chat_input/native/guard/ChatInputGuardMessageRequest.tsx
import ChatInputGuardDefault from "ChatInputGuard" /* 11616 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
const memoResult = importAllResult.memo(function ChatInputGuardMessageRequest(channel) {
  channel = channel.channel;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  function _onAcceptClick() {
    const self = this;
    const tmp = _undefined2((arg0) => {
      closure_0 = arg0;
      c2 = 0;
      c3 = 0;
      return (function*(arg0) {
        if (c3 === 2) {
          c3 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
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
            c3 = 2;
            if (0 === dependencyMap) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp4;
                lib.stopPropagation();
                dependencyMap = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = dependencyMap(lib.id);
                return obj1;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              obj = lib(4768);
              obj.transitionToChannel(lib.id, { navigationReplace: true });
              c3 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp14) {
            c3 = tmp;
            throw tmp14;
          }
        }
      })();
    });
    closure_4 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function _onRejectClick() {
    const self = this;
    const tmp = _undefined2((arg0) => {
      closure_0 = arg0;
      c2 = 0;
      c1 = 0;
      return (function*(arg0) {
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                closure_0.stopPropagation();
                c2 = 1;
                c1 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_3(closure_0.id);
                return obj1;
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
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp9) {
            c1 = tmp;
            throw tmp9;
          }
        }
      })();
    });
    closure_5 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let obj = channel(1500);
  importDefault = obj.useNavigation();
  const isMessageRequestRestrictedViewer = channel(11608).useIsMessageRequestRestrictedViewer("ChatInputGuardMessageRequest");
  let obj2 = channel(11608);
  const items = [_onAcceptClick];
  const stateFromStores = channel(589).useStateFromStores(items, () => _onAcceptClick.getUser(channel.getRecipientId()));
  const obj3 = channel(589);
  obj = {
    user: stateFromStores,
    onError: function handleRequestError() {
      let obj = arr(_undefined[8]);
      obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
      const intl = channel(_undefined[9]).intl;
      obj[1] = intl.string(channel(_undefined[9]).t["EDYbS+"]);
      obj[2] = arr(_undefined[10]);
      obj.open(obj);
    },
    onRejectSuccess: function handleRejectSuccess() {

    }
  };
  const messageRequestActions = channel(11610).useMessageRequestActions(obj);
  ({ acceptMessageRequest: c2, rejectMessageRequest: c3, isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected } = messageRequestActions);
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
  obj = { type: "button-action", message: null, subtext: null, buttonPrimaryText: null, buttonPrimaryOnPress: null, buttonPrimaryDisabled: null, buttonPrimaryLoading: null, buttonSecondaryText: null, buttonSecondaryOnPress: null, buttonSecondaryDisabled: null, buttonSecondaryLoading: null };
  const obj4 = channel(11610);
  const tmp7 = _onRejectClick;
  let intl = tmp(1236).intl;
  obj[1] = intl.string(channel(1236).t["e/eQVB"]);
  const intl2 = tmp(1236).intl;
  const t = tmp(1236).t;
  obj[2] = intl2.string(isMessageRequestRestrictedViewer ? t.YQ0uUE : t.HcVzGI);
  const intl3 = tmp(1236).intl;
  obj[3] = intl3.string(channel(1236).t.Kz8Pwr);
  obj[4] = function onAcceptClick(arg0) {
    const self = this;
    const apply = _onAcceptClick.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj[5] = tmp6;
  if (!isAcceptLoading) {
    isAcceptLoading = isUserProfileLoading;
  }
  if (!isAcceptLoading) {
    isAcceptLoading = isOptimisticAccepted;
  }
  obj[6] = isAcceptLoading;
  const intl4 = tmp(1236).intl;
  const t2 = tmp(1236).t;
  obj[7] = intl4.string(isMessageRequestRestrictedViewer ? t2.BVN4pL : t2.B2nygW);
  obj[8] = function onRejectClick(arg0) {
    const self = this;
    const apply = _onRejectClick.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj[9] = tmp6;
  if (!isRejectLoading) {
    isRejectLoading = isOptimisticRejected;
  }
  obj[10] = isRejectLoading;
  return tmp7(ChatInputGuardDefault, obj);
});
const result = require("set").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardMessageRequest.tsx");

export default memoResult;