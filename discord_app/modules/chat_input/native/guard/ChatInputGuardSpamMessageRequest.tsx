// discord_app/modules/chat_input/native/guard/ChatInputGuardSpamMessageRequest.tsx
import importAllResult from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../stores/UserStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function ChatInputGuardSpamMessageRequest(channel) {
  channel = channel.channel;
  let navigation;
  dependencyMap = undefined;
  c4 = undefined;
  let obj = channel(1500);
  navigation = obj.useNavigation();
  const items = [c4];
  const stateFromStores = channel(589).useStateFromStores(items, () => _undefined2.getUser(channel.getRecipientId()));
  const obj2 = channel(589);
  dependencyMap = channel(11929).useLongestChannelMessageBeforeReply(channel.id, channel.getRecipientId());
  const items1 = [navigation];
  const callback = importAllResult.useCallback(() => {
    navigation.pop();
  }, items1);
  const obj3 = channel(11929);
  obj = {
    user: stateFromStores,
    onError() {
      let obj = navigation(4162);
      obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
      const intl = channel(1236).intl;
      obj[1] = intl.string(channel(1236).t["EDYbS+"]);
      obj[2] = navigation(7613);
      obj.open(obj);
    },
    onRejectSuccess: callback
  };
  const messageRequestActions = channel(11921).useMessageRequestActions(obj);
  ({ rejectMessageRequest: c3, isRejectLoading, isUserProfileLoading, isOptimisticRejected, markAsNotSpam: c4 } = messageRequestActions);
  let tmp7 = isRejectLoading;
  if (!isRejectLoading) {
    tmp7 = isUserProfileLoading;
  }
  if (!tmp7) {
    tmp7 = isOptimisticRejected;
  }
  obj = { type: "button-action", message: null, subtext: null, buttonPrimaryText: null, buttonPrimaryOnPress: null, buttonPrimaryDisabled: null, buttonPrimaryLoading: null, buttonPrimaryVariant: "destructive", buttonSecondaryText: null, buttonSecondaryOnPress: null, buttonSecondaryDisabled: null, buttonSecondaryLoading: null };
  const obj4 = channel(11921);
  const tmp8 = jsx;
  let intl = tmp(1236).intl;
  obj[1] = intl.string(channel(1236).t.fS08qB);
  const intl2 = tmp(1236).intl;
  obj[2] = intl2.string(channel(1236).t["8U5OXE"]);
  const intl3 = tmp(1236).intl;
  obj[3] = intl3.string(channel(1236).t.cpT0Cq);
  obj[4] = function buttonPrimaryOnPress(stopPropagation) {
    stopPropagation.stopPropagation();
    _undefined(channel.id);
  };
  obj[5] = tmp7;
  if (!isRejectLoading) {
    isRejectLoading = isOptimisticRejected;
  }
  obj[6] = isRejectLoading;
  const intl4 = tmp(1236).intl;
  obj[8] = intl4.string(channel(1236).t.olZgw5);
  obj[9] = function buttonSecondaryOnPress(stopPropagation) {
    stopPropagation.stopPropagation();
    _undefined2(channel, closure_2, () => closure_1_0(closure_1_2[11]).transitionToChannel(id.id, { navigationReplace: true }));
  };
  obj[10] = tmp7;
  obj[11] = isUserProfileLoading;
  return tmp8(navigation(11927), obj);
});
const result = require("set").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardSpamMessageRequest.tsx");

export default memoResult;