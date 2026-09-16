// === Module 12582: ChatInputGuardMessageRequest ===

// Module 12582 (ChatInputGuardMessageRequest)
import ChatInputGuardDefault from "ChatInputGuard" /* 12591 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardMessageRequest.tsx");

export default noop.memo(function ChatInputGuardMessageRequest(channel) {
  channel = channel.channel;
  dependencyMap = undefined;
  c3 = undefined;
  closure_4 = async function _onAcceptClick(arg0) {
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
        return { value: "HermesInternal", done: null };
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
          channel(c2[11]).transitionToChannel(closure_129_0.id, { navigationReplace: true });
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp14) {
        c3 = tmp;
        throw tmp14;
      }
    }
  };
  closure_5 = async function _onRejectClick(arg0) {
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp9) {
        c1 = tmp;
        throw tmp9;
      }
    }
  };
  importDefault = channel(1484).useNavigation();
  let obj = channel(1484);
  const isMessageRequestRestrictedViewer = channel(12583).useIsMessageRequestRestrictedViewer("ChatInputGuardMessageRequest");
  let obj2 = channel(12583);
  const items = [closure_4];
  const stateFromStores = channel(504).useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
  let obj3 = channel(504);
  const messageRequestActions = channel(12585).useMessageRequestActions({
    user: stateFromStores,
    onError: function handleRequestError() {
      const obj2 = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
      const intl = channel(_undefined[9]).intl;
      obj2.content = intl.string(channel(_undefined[9]).t["EDYbS+"]);
      obj2.icon = closure_1(_undefined[10]);
      closure_1(_undefined[8]).open(obj2);
    },
    onRejectSuccess: function handleRejectSuccess() {
      closure_1.pop();
    }
  });
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
  const obj6 = { type: "button-action", message: null, subtext: null, buttonPrimaryText: null, buttonPrimaryOnPress: null, buttonPrimaryDisabled: null, buttonPrimaryLoading: null, buttonSecondaryText: null, buttonSecondaryOnPress: null, buttonSecondaryDisabled: null, buttonSecondaryLoading: null };
  let obj4 = channel(12585);
  let obj5 = {
    user: stateFromStores,
    onError: function handleRequestError() {
      const obj2 = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
      const intl = channel(_undefined[9]).intl;
      obj2.content = intl.string(channel(_undefined[9]).t["EDYbS+"]);
      obj2.icon = closure_1(_undefined[10]);
      closure_1(_undefined[8]).open(obj2);
    },
    onRejectSuccess: function handleRejectSuccess() {
      closure_1.pop();
    }
  };
  const tmp7 = closure_5;
  let intl = tmp(1115).intl;
  obj6.message = intl.string(channel(1115).t["e/eQVB"]);
  const intl2 = tmp(1115).intl;
  const t = tmp(1115).t;
  obj6.subtext = intl2.string(isMessageRequestRestrictedViewer ? t.YQ0uUE : t.HcVzGI);
  const intl3 = tmp(1115).intl;
  obj6.buttonPrimaryText = intl3.string(channel(1115).t.Kz8Pwr);
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
  const intl4 = tmp(1115).intl;
  const t2 = tmp(1115).t;
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
});