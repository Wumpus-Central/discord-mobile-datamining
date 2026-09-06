// discord_app/modules/chat_input/native/guard/ChatInputGuardMessageRequest.tsx
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardMessageRequest.tsx");

export default noop.memo(function ChatInputGuardMessageRequest(channel) {
  channel = channel.channel;
  dependencyMap = undefined;
  c3 = undefined;
  closure_4 = async function _onAcceptClick(arg0, value) {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp4;
            channel.stopPropagation();
            c2 = 1;
            c3 = 1;
            const obj1 = { value: _undefined(id.id), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          obj = channel(c2[11]);
          obj.transitionToChannel(closure_129_0.id, { navigationReplace: true });
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp14) {
        c3 = tmp;
        throw tmp14;
      }
    }
  };
  closure_5 = async function _onRejectClick(arg0, value) {
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
            channel.stopPropagation();
            c2 = 1;
            c1 = 1;
            const obj1 = { value: asyncGeneratorStep(id.id), done: false };
            return obj1;
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
      } catch (tmp9) {
        c1 = tmp;
        throw tmp9;
      }
    }
  };
  let obj = channel(1483);
  importDefault = obj.useNavigation();
  const isMessageRequestRestrictedViewer =
    channel(12440).useIsMessageRequestRestrictedViewer("ChatInputGuardMessageRequest");
  let obj2 = channel(12440);
  const items = [closure_4];
  const stateFromStores = channel(504).useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
  const obj3 = channel(504);
  obj = {
    user: stateFromStores,
    onError: function handleRequestError() {
      closure_1(_undefined[8]);
      const obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
      const intl = channel(_undefined[9]).intl;
      obj.content = intl.string(channel(_undefined[9]).t["EDYbS+"]);
      obj.icon = closure_1(_undefined[10]);
      obj.open(obj);
    },
    onRejectSuccess: function handleRejectSuccess() {
      closure_1.pop();
    },
  };
  const messageRequestActions = channel(12442).useMessageRequestActions(obj);
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
  obj = {
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
  const obj4 = channel(12442);
  const tmp7 = closure_5;
  let intl = tmp(1114).intl;
  obj.message = intl.string(channel(1114).t["e/eQVB"]);
  const intl2 = tmp(1114).intl;
  const t = tmp(1114).t;
  obj.subtext = intl2.string(isMessageRequestRestrictedViewer ? t.YQ0uUE : t.HcVzGI);
  const intl3 = tmp(1114).intl;
  obj.buttonPrimaryText = intl3.string(channel(1114).t.Kz8Pwr);
  obj.buttonPrimaryOnPress = function onAcceptClick(arg0) {
    const self = this;
    const apply = closure_4.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj.buttonPrimaryDisabled = tmp6;
  if (!isAcceptLoading) {
    isAcceptLoading = isUserProfileLoading;
  }
  if (!isAcceptLoading) {
    isAcceptLoading = isOptimisticAccepted;
  }
  obj.buttonPrimaryLoading = isAcceptLoading;
  const intl4 = tmp(1114).intl;
  const t2 = tmp(1114).t;
  obj.buttonSecondaryText = intl4.string(isMessageRequestRestrictedViewer ? t2.BVN4pL : t2.B2nygW);
  obj.buttonSecondaryOnPress = function onRejectClick(arg0) {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj.buttonSecondaryDisabled = tmp6;
  if (!isRejectLoading) {
    isRejectLoading = isOptimisticRejected;
  }
  obj.buttonSecondaryLoading = isRejectLoading;
  return tmp7(ChatInputGuardDefault, obj);
});
