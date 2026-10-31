// === Module 14007: ChatInputGuardSpamMessageRequest ===

// Module 14007 (ChatInputGuardSpamMessageRequest)
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1383 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardSpamMessageRequest.tsx");

export default noop.memo(function ChatInputGuardSpamMessageRequest(channel) {
  channel = channel.channel;
  noop = undefined;
  c4 = undefined;
  const navigation = channel(1497).useNavigation();
  const obj = channel(1497);
  const items = [c4];
  const stateFromStores = channel(504).useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
  let obj2 = channel(504);
  dependencyMap = channel(14008).useLongestChannelMessageBeforeReply(channel.id, channel.getRecipientId());
  const items1 = [navigation];
  const callback = noop.useCallback(() => {
    navigation.pop();
  }, items1);
  const obj3 = channel(14008);
  const messageRequestActions = channel(14000).useMessageRequestActions({
    user: stateFromStores,
    onError: function handleRequestError() {
      const obj2 = { text: null, variant: "critical" };
      const intl = channel(1113).intl;
      obj2.text = intl.string(channel(1113).t["EDYbS+"]);
      navigation(5712).open("MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", obj2);
    },
    onRejectSuccess: callback
  });
  ({ rejectMessageRequest: c3, isRejectLoading, isUserProfileLoading, isOptimisticRejected, markAsNotSpam: c4 } = messageRequestActions);
  let tmp7 = isRejectLoading;
  if (!isRejectLoading) {
    tmp7 = isUserProfileLoading;
  }
  if (!tmp7) {
    tmp7 = isOptimisticRejected;
  }
  const obj6 = { type: "button-action", message: null, subtext: null, buttonPrimaryText: null, buttonPrimaryOnPress: null, buttonPrimaryDisabled: null, buttonPrimaryLoading: null, buttonPrimaryVariant: "destructive", buttonSecondaryText: null, buttonSecondaryOnPress: null, buttonSecondaryDisabled: null, buttonSecondaryLoading: null };
  const obj4 = channel(14000);
  const obj5 = {
    user: stateFromStores,
    onError: function handleRequestError() {
      const obj2 = { text: null, variant: "critical" };
      const intl = channel(1113).intl;
      obj2.text = intl.string(channel(1113).t["EDYbS+"]);
      navigation(5712).open("MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", obj2);
    },
    onRejectSuccess: callback
  };
  let intl = tmp(1113).intl;
  obj6.message = intl.string(channel(1113).t.fS08qB);
  const intl2 = tmp(1113).intl;
  obj6.subtext = intl2.string(channel(1113).t["8U5OXE"]);
  const intl3 = tmp(1113).intl;
  obj6.buttonPrimaryText = intl3.string(channel(1113).t.cpT0Cq);
  obj6.buttonPrimaryOnPress = function handleRejectClick(stopPropagation) {
    stopPropagation.stopPropagation();
    _undefined(channel.id);
  };
  obj6.buttonPrimaryDisabled = tmp7;
  if (!isRejectLoading) {
    isRejectLoading = isOptimisticRejected;
  }
  obj6.buttonPrimaryLoading = isRejectLoading;
  const intl4 = tmp(1113).intl;
  obj6.buttonSecondaryText = intl4.string(channel(1113).t.olZgw5);
  obj6.buttonSecondaryOnPress = function handleAcceptClick(stopPropagation) {
    stopPropagation.stopPropagation();
    _undefined2(channel, closure_2, () => channel(closure_2[10]).transitionToChannel(id.id, { navigationReplace: true }));
  };
  obj6.buttonSecondaryDisabled = tmp7;
  obj6.buttonSecondaryLoading = isUserProfileLoading;
  return jsx(navigation(14006), { type: "button-action", message: null, subtext: null, buttonPrimaryText: null, buttonPrimaryOnPress: null, buttonPrimaryDisabled: null, buttonPrimaryLoading: null, buttonPrimaryVariant: "destructive", buttonSecondaryText: null, buttonSecondaryOnPress: null, buttonSecondaryDisabled: null, buttonSecondaryLoading: null });
});