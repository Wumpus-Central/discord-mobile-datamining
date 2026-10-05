// discord_app/modules/chat_input/native/guard/ChatInputGuardSpamMessageRequest.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, navigation;

let react = react_mod;
const jsx = Fragment.jsx;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let first;
        let isOptimisticRejected;
        let isRejectLoading;
        let isUserProfileLoading;
        let longestChannelMessageBeforeReply;
        let markAsNotSpam;
        let obj3;
        let tmp7;
        let tmp9;
        const tmp = channel;
        let obj = channel(longestChannelMessageBeforeReply[4]);
        const cResult = obj.c(28);
        channel = channel.channel;
        const obj2 = channel(longestChannelMessageBeforeReply[5]);
        navigation = obj2.useNavigation();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [markAsNotSpam];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channel) {
          const fn = function s() {
            return UserStore.getUser(channel.getRecipientId());
          };
          cResult[1] = channel;
          cResult[2] = fn;
          tmp7 = fn;
        } else {
          tmp7 = cResult[2];
        }
        const tmpResult = tmp(longestChannelMessageBeforeReply[6]);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
        const id = channel.id;
        if (cResult[3] !== channel) {
          const recipientId = channel.getRecipientId();
          cResult[3] = channel;
          cResult[4] = recipientId;
          tmp9 = recipientId;
        } else {
          tmp9 = cResult[4];
        }
        const tmpResult3 = tmp(longestChannelMessageBeforeReply[7]);
        longestChannelMessageBeforeReply = tmpResult3.useLongestChannelMessageBeforeReply(id, tmp9);
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor() {
              let intl;
              const obj = {
                key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE",
                content: intl.string(channel(longestChannelMessageBeforeReply[9]).t["EDYbS+"]),
                icon: navigation(longestChannelMessageBeforeReply[10]),
              };
              const open = navigation(longestChannelMessageBeforeReply[8]).open;
              navigation(longestChannelMessageBeforeReply[8]);
              intl = channel(longestChannelMessageBeforeReply[9]).intl;
              open(obj);
            }
          }
          cResult[5] = R;
        } else {
          class R {
            constructor() {
              let intl;
              const obj = {
                key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE",
                content: intl.string(channel(longestChannelMessageBeforeReply[9]).t["EDYbS+"]),
                icon: navigation(longestChannelMessageBeforeReply[10]),
              };
              const open = navigation(longestChannelMessageBeforeReply[8]).open;
              navigation(longestChannelMessageBeforeReply[8]);
              intl = channel(longestChannelMessageBeforeReply[9]).intl;
              open(obj);
            }
          }
        }
        if (cResult[6] !== navigation) {
          class E {
            constructor() {
              navigation.pop();
            }
          }
          cResult[6] = navigation;
          cResult[7] = E;
        } else {
          class E {
            constructor() {
              navigation.pop();
            }
          }
        }
        if (cResult[8] === E) {
          class E {
            constructor() {
              navigation.pop();
            }
          }
          const tmpResult4 = tmp(longestChannelMessageBeforeReply[11]);
          const messageRequestActions = tmpResult4.useMessageRequestActions(obj3);
          const rejectMessageRequest = messageRequestActions.rejectMessageRequest;
          ({ isRejectLoading, isUserProfileLoading, isOptimisticRejected, markAsNotSpam } = messageRequestActions);
          if (cResult[11] === channel) {
            class E {
              constructor() {
                navigation.pop();
              }
            }
          }
          const fn2 = function v(stopPropagation) {
            let id;
            stopPropagation.stopPropagation();
            markAsNotSpam(channel, longestChannelMessageBeforeReply, () => {
              const obj = channel(longestChannelMessageBeforeReply[12]);
              return obj.transitionToChannel(id.id, { navigationReplace: true });
            });
          };
          cResult[11] = channel;
          cResult[12] = markAsNotSpam;
          cResult[13] = longestChannelMessageBeforeReply;
          cResult[14] = fn2;
        }
        obj3 = { user: stateFromStores, onError: R, onRejectSuccess: E };
        cResult[8] = E;
        cResult[9] = stateFromStores;
        cResult[10] = obj3;
      }
    : (channel) => {
        let _undefined;
        let _undefined2;
        let c3;
        let c4;
        let closure_2;
        let isOptimisticRejected;
        let isRejectLoading;
        let isUserProfileLoading;
        channel = channel.channel;
        react = undefined;
        c4 = undefined;
        const tmp = channel;
        let obj = channel(1490);
        navigation = obj.useNavigation();
        const items = [c4];
        const obj2 = channel(504);
        const stateFromStores = obj2.useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
        const obj3 = channel(12092);
        dependencyMap = obj3.useLongestChannelMessageBeforeReply(channel.id, channel.getRecipientId());
        const items1 = [navigation];
        const callback = react.useCallback(() => {
          navigation.pop();
        }, items1);
        const obj4 = channel(12084);
        const obj5 = {
          user: stateFromStores,
          onError() {
            let intl;
            const obj = {
              key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE",
              content: intl.string(channel(closure_2[9]).t["EDYbS+"]),
              icon: navigation(closure_2[10]),
            };
            const open = navigation(closure_2[8]).open;
            navigation(closure_2[8]);
            intl = channel(closure_2[9]).intl;
            open(obj);
          },
          onRejectSuccess: callback,
        };
        const messageRequestActions = obj4.useMessageRequestActions(obj5);
        ({
          rejectMessageRequest: c3,
          isRejectLoading,
          isUserProfileLoading,
          isOptimisticRejected,
          markAsNotSpam: c4,
        } = messageRequestActions);
        navigation(12090);
        let intl = tmp(1126).intl;
        const intl2 = tmp(1126).intl;
        const intl3 = tmp(1126).intl;
        if (!isRejectLoading) {
          isRejectLoading = isOptimisticRejected;
        }
        const intl4 = tmp(1126).intl;
        return (
          <tmp9
            type="button-action"
            message={intl.string(tmp(1126).t.fS08qB)}
            subtext={intl2.string(tmp(1126).t["8U5OXE"])}
            buttonPrimaryText={intl3.string(tmp(1126).t.cpT0Cq)}
            buttonPrimaryOnPress={function buttonPrimaryOnPress(stopPropagation) {
              stopPropagation.stopPropagation();
              _undefined(channel.id);
            }}
            buttonPrimaryDisabled={isRejectLoading || isUserProfileLoading || isOptimisticRejected}
            buttonPrimaryLoading={isRejectLoading}
            buttonPrimaryVariant="destructive"
            buttonSecondaryText={intl4.string(tmp(1126).t.olZgw5)}
            buttonSecondaryOnPress={function buttonSecondaryOnPress(stopPropagation) {
              let id;
              stopPropagation.stopPropagation();
              _undefined2(channel, closure_2, () => {
                const obj = channel(closure_2[12]);
                return obj.transitionToChannel(id.id, { navigationReplace: true });
              });
            }}
            buttonSecondaryDisabled={isRejectLoading || isUserProfileLoading || isOptimisticRejected}
            buttonSecondaryLoading={isUserProfileLoading}
          />
        );
      },
);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardSpamMessageRequest.tsx");

export default memoResult;
