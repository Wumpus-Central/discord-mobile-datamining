// === Module 12449: ChatInputGuardSpamMessageRequest ===

// Module 12449 (ChatInputGuardSpamMessageRequest)
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardSpamMessageRequest.tsx");

export default noop.memo(function ChatInputGuardSpamMessageRequest(channel) {
  channel = channel.channel;
  noop = undefined;
  c4 = undefined;
  let obj = channel(1483);
  const navigation = obj.useNavigation();
  const items = [c4];
  const stateFromStores = channel(504).useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
  const obj2 = channel(504);
  dependencyMap = channel(12450).useLongestChannelMessageBeforeReply(channel.id, channel.getRecipientId());
  const items1 = [navigation];
  const callback = noop.useCallback(() => {
    navigation.pop();
  }, items1);
  const obj3 = channel(12450);
  obj = {
    user: stateFromStores,
    onError() {
      navigation(4259);
      const obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
      const intl = channel(1114).intl;
      obj.content = intl.string(channel(1114).t["EDYbS+"]);
      obj.icon = navigation(5597);
      obj.open(obj);
    },
    onRejectSuccess: callback
  };
  const messageRequestActions = channel(12442).useMessageRequestActions(obj);
  ({ rejectMessageRequest: c3, isRejectLoading, isUserProfileLoading, isOptimisticRejected, markAsNotSpam: c4 } = messageRequestActions);
  let tmp7 = isRejectLoading;
  if (!isRejectLoading) {
    tmp7 = isUserProfileLoading;
  }
  if (!tmp7) {
    tmp7 = isOptimisticRejected;
  }
  obj = { type: "button-action", message: null, subtext: null, buttonPrimaryText: null, buttonPrimaryOnPress: null, buttonPrimaryDisabled: null, buttonPrimaryLoading: null, buttonPrimaryVariant: "destructive", buttonSecondaryText: null, buttonSecondaryOnPress: null, buttonSecondaryDisabled: null, buttonSecondaryLoading: null };
  const obj4 = channel(12442);
  const tmp8 = jsx;
  let intl = tmp(1114).intl;
  obj.message = intl.string(channel(1114).t.fS08qB);
  const intl2 = tmp(1114).intl;
  obj.subtext = intl2.string(channel(1114).t["8U5OXE"]);
  const intl3 = tmp(1114).intl;
  obj.buttonPrimaryText = intl3.string(channel(1114).t.cpT0Cq);
  obj.buttonPrimaryOnPress = function buttonPrimaryOnPress(stopPropagation) {
    stopPropagation.stopPropagation();
    _undefined(channel.id);
  };
  obj.buttonPrimaryDisabled = tmp7;
  if (!isRejectLoading) {
    isRejectLoading = isOptimisticRejected;
  }
  obj.buttonPrimaryLoading = isRejectLoading;
  const intl4 = tmp(1114).intl;
  obj.buttonSecondaryText = intl4.string(channel(1114).t.olZgw5);
  obj.buttonSecondaryOnPress = function buttonSecondaryOnPress(stopPropagation) {
    stopPropagation.stopPropagation();
    _undefined2(channel, closure_2, () => channel(closure_2[11]).transitionToChannel(id.id, { navigationReplace: true }));
  };
  obj.buttonSecondaryDisabled = tmp7;
  obj.buttonSecondaryLoading = isUserProfileLoading;
  return tmp8(navigation(12448), obj);
});