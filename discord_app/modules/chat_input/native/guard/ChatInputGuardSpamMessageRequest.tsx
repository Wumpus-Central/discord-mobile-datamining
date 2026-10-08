// discord_app/modules/chat_input/native/guard/ChatInputGuardSpamMessageRequest.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardSpamMessageRequest.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ChatInputGuardSpamMessageRequest(channel) {
        const cResult = channel(longestChannelMessageBeforeReply[4]).c(28);
        channel = channel.channel;
        const obj = channel(longestChannelMessageBeforeReply[4]);
        const navigation = channel(longestChannelMessageBeforeReply[5]).useNavigation();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [markAsNotSpam];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channel) {
          const fn = function s() {
            return UserStore.getUser(channel.getRecipientId());
          };
          cResult[1] = channel;
          cResult[2] = fn;
          let tmp7 = fn;
        } else {
          tmp7 = cResult[2];
        }
        let obj2 = channel(longestChannelMessageBeforeReply[5]);
        const stateFromStores = channel(longestChannelMessageBeforeReply[6]).useStateFromStores(first, tmp7);
        if (cResult[3] !== channel) {
          const recipientId = channel.getRecipientId();
          cResult[3] = channel;
          cResult[4] = recipientId;
          let tmp9 = recipientId;
        } else {
          tmp9 = cResult[4];
        }
        const tmpResult = channel(longestChannelMessageBeforeReply[6]);
        longestChannelMessageBeforeReply = channel(
          longestChannelMessageBeforeReply[7],
        ).useLongestChannelMessageBeforeReply(channel.id, tmp9);
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          function handleRequestError() {
            const obj2 = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
            const intl = channel(longestChannelMessageBeforeReply[9]).intl;
            obj2.content = intl.string(channel(longestChannelMessageBeforeReply[9]).t["EDYbS+"]);
            obj2.icon = navigation(longestChannelMessageBeforeReply[10]);
            navigation(longestChannelMessageBeforeReply[8]).open(obj2);
          }
          cResult[5] = handleRequestError;
          let tmp12 = handleRequestError;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] !== navigation) {
          class E {
            constructor() {
              arr = closure_1.pop();
              return;
            }
          }
          cResult[6] = navigation;
          cResult[7] = E;
        } else {
          class E {
            constructor() {
              arr = closure_1.pop();
              return;
            }
          }
        }
        if (cResult[8] === E) {
          class E {
            constructor() {
              arr = closure_1.pop();
              return;
            }
          }
          const messageRequestActions = tmp(tmp2[11]).useMessageRequestActions(obj3);
          const rejectMessageRequest = messageRequestActions.rejectMessageRequest;
          ({ isRejectLoading, isUserProfileLoading, isOptimisticRejected, markAsNotSpam } = messageRequestActions);
          if (!isRejectLoading) {
            class E {
              constructor() {
                arr = closure_1.pop();
                return;
              }
            }
          }
          if (!isRejectLoading) {
            class E {
              constructor() {
                arr = closure_1.pop();
                return;
              }
            }
          }
          if (cResult[11] === channel) {
            class E {
              constructor() {
                arr = closure_1.pop();
                return;
              }
            }
          }
          function handleAcceptClick(stopPropagation) {
            stopPropagation.stopPropagation();
            markAsNotSpam(channel, longestChannelMessageBeforeReply, () =>
              channel(longestChannelMessageBeforeReply[12]).transitionToChannel(id.id, { navigationReplace: true }),
            );
          }
          cResult[11] = channel;
          cResult[12] = markAsNotSpam;
          cResult[13] = longestChannelMessageBeforeReply;
          cResult[14] = handleAcceptClick;
          const tmpResult4 = tmp(tmp2[11]);
        }
        obj3 = { user: stateFromStores, onError: tmp12, onRejectSuccess: E };
        cResult[8] = E;
        cResult[9] = stateFromStores;
        cResult[10] = obj3;
        const tmpResult3 = channel(longestChannelMessageBeforeReply[7]);
      }
    : function ChatInputGuardSpamMessageRequest(channel) {
        channel = channel.channel;
        noop = undefined;
        c4 = undefined;
        const navigation = channel(1502).useNavigation();
        const obj = channel(1502);
        const items = [c4];
        const stateFromStores = channel(504).useStateFromStores(items, () =>
          UserStore.getUser(channel.getRecipientId()),
        );
        let obj2 = channel(504);
        dependencyMap = channel(12185).useLongestChannelMessageBeforeReply(channel.id, channel.getRecipientId());
        const items1 = [navigation];
        const callback = noop.useCallback(() => {
          navigation.pop();
        }, items1);
        const obj3 = channel(12185);
        const messageRequestActions = channel(12177).useMessageRequestActions({
          user: stateFromStores,
          onError: function handleRequestError() {
            const obj2 = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
            const intl = channel(1126).intl;
            obj2.content = intl.string(channel(1126).t["EDYbS+"]);
            obj2.icon = navigation(5007);
            navigation(4766).open(obj2);
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
        const obj4 = channel(12177);
        const obj5 = {
          user: stateFromStores,
          onError: function handleRequestError() {
            const obj2 = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
            const intl = channel(1126).intl;
            obj2.content = intl.string(channel(1126).t["EDYbS+"]);
            obj2.icon = navigation(5007);
            navigation(4766).open(obj2);
          },
          onRejectSuccess: callback,
        };
        let intl = tmp(1126).intl;
        obj6.message = intl.string(channel(1126).t.fS08qB);
        const intl2 = tmp(1126).intl;
        obj6.subtext = intl2.string(channel(1126).t["8U5OXE"]);
        const intl3 = tmp(1126).intl;
        obj6.buttonPrimaryText = intl3.string(channel(1126).t.cpT0Cq);
        obj6.buttonPrimaryOnPress = function handleRejectClick(stopPropagation) {
          stopPropagation.stopPropagation();
          _undefined(channel.id);
        };
        obj6.buttonPrimaryDisabled = tmp7;
        if (!isRejectLoading) {
          isRejectLoading = isOptimisticRejected;
        }
        obj6.buttonPrimaryLoading = isRejectLoading;
        const intl4 = tmp(1126).intl;
        obj6.buttonSecondaryText = intl4.string(channel(1126).t.olZgw5);
        obj6.buttonSecondaryOnPress = function handleAcceptClick(stopPropagation) {
          stopPropagation.stopPropagation();
          _undefined2(channel, closure_2, () =>
            channel(closure_2[12]).transitionToChannel(id.id, { navigationReplace: true }),
          );
        };
        obj6.buttonSecondaryDisabled = tmp7;
        obj6.buttonSecondaryLoading = isUserProfileLoading;
        return jsx(navigation(12183), {
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
      },
);
