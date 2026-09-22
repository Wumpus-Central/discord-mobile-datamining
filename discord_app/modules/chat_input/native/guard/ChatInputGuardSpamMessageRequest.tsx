// discord_app/modules/chat_input/native/guard/ChatInputGuardSpamMessageRequest.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardSpamMessageRequest.tsx");

export default noop.memo(function ChatInputGuardSpamMessageRequest(channel) {
  channel = channel.channel;
  noop = undefined;
  c4 = undefined;
  const navigation = channel(1484).useNavigation();
  const obj = channel(1484);
  const items = [c4];
  const stateFromStores = channel(504).useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
  let obj2 = channel(504);
  dependencyMap = channel(12708).useLongestChannelMessageBeforeReply(channel.id, channel.getRecipientId());
  const items1 = [navigation];
  const callback = noop.useCallback(() => {
    navigation.pop();
  }, items1);
  const obj3 = channel(12708);
  const messageRequestActions = channel(12700).useMessageRequestActions({
    user: stateFromStores,
    onError() {
      const obj2 = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
      const intl = channel(1115).intl;
      obj2.content = intl.string(channel(1115).t["EDYbS+"]);
      obj2.icon = navigation(5816);
      navigation(4455).open(obj2);
    },
    onRejectSuccess: callback,
  });
  ({
    rejectMessageRequest: c3,
    isRejectLoading,
    isUserProfileLoading,
    isOptimisticRejected,
    markAsNotSpam: c4,
  } = messageRequestActions);
  let tmp7 = isRejectLoading;
  if (!isRejectLoading) {
    tmp7 = isUserProfileLoading;
  }
  if (!tmp7) {
    tmp7 = isOptimisticRejected;
  }
  const obj6 = {
    type: "button-action",
    message: null,
    subtext: null,
    buttonPrimaryText: null,
    buttonPrimaryOnPress: null,
    buttonPrimaryDisabled: null,
    buttonPrimaryLoading: null,
    buttonPrimaryVariant: "destructive",
    buttonSecondaryText: null,
    buttonSecondaryOnPress: null,
    buttonSecondaryDisabled: null,
    buttonSecondaryLoading: null,
  };
  const obj4 = channel(12700);
  const obj5 = {
    user: stateFromStores,
    onError() {
      const obj2 = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
      const intl = channel(1115).intl;
      obj2.content = intl.string(channel(1115).t["EDYbS+"]);
      obj2.icon = navigation(5816);
      navigation(4455).open(obj2);
    },
    onRejectSuccess: callback,
  };
  let intl = tmp(1115).intl;
  obj6.message = intl.string(channel(1115).t.fS08qB);
  const intl2 = tmp(1115).intl;
  obj6.subtext = intl2.string(channel(1115).t["8U5OXE"]);
  const intl3 = tmp(1115).intl;
  obj6.buttonPrimaryText = intl3.string(channel(1115).t.cpT0Cq);
  obj6.buttonPrimaryOnPress = function buttonPrimaryOnPress(stopPropagation) {
    stopPropagation.stopPropagation();
    _undefined(channel.id);
  };
  obj6.buttonPrimaryDisabled = tmp7;
  if (!isRejectLoading) {
    isRejectLoading = isOptimisticRejected;
  }
  obj6.buttonPrimaryLoading = isRejectLoading;
  const intl4 = tmp(1115).intl;
  obj6.buttonSecondaryText = intl4.string(channel(1115).t.olZgw5);
  obj6.buttonSecondaryOnPress = function buttonSecondaryOnPress(stopPropagation) {
    stopPropagation.stopPropagation();
    _undefined2(channel, closure_2, () =>
      channel(closure_2[11]).transitionToChannel(id.id, { navigationReplace: true }),
    );
  };
  obj6.buttonSecondaryDisabled = tmp7;
  obj6.buttonSecondaryLoading = isUserProfileLoading;
  return jsx(navigation(12706), {
    type: "button-action",
    message: null,
    subtext: null,
    buttonPrimaryText: null,
    buttonPrimaryOnPress: null,
    buttonPrimaryDisabled: null,
    buttonPrimaryLoading: null,
    buttonPrimaryVariant: "destructive",
    buttonSecondaryText: null,
    buttonSecondaryOnPress: null,
    buttonSecondaryDisabled: null,
    buttonSecondaryLoading: null,
  });
});
