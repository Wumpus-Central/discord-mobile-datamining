// discord_app/modules/message_request/native/spam/SpamMessageList.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import transitionToChannel from "../../../routing/transitionToChannel.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import MonitoringAgentDefault from "../../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import useMountEffectDefault from "../../../../hooks/useMountEffect.tsx";
import useSortedSpamMessageRequestsDefault from "../../hooks/useSortedSpamMessageRequests.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const MessageRequestEmptyDefault = tmp2(17066);
require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty, FlatList: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = "header-section";
const createStyles = fn(4890);
let obj2 = {
  sectionContainer: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 14,
    marginBottom: 12,
  },
  actionContainer: { flexDirection: "row", alignItems: "flex-start", height: "100%" },
  actionButton: null,
  acceptButton: null,
  pressableRow: null,
  activityIndicator: null,
  list: null,
};
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
  justifyContent: "center",
  height: 32,
  width: 32,
};
obj2.actionButton = size;
obj2.acceptButton = { marginRight: 16 };
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 6,
  marginBottom: 10,
};
obj2.pressableRow = { borderRadius: nativeDefault.radii.md };
obj2.activityIndicator = { height: 16, width: 16 };
let obj4 = { borderRadius: nativeDefault.radii.md };
obj2.list = {
  flex: 1,
  paddingHorizontal: 16,
  alignSelf: "stretch",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let closure_11 = createStyles.createStyles(obj2);
const constants = {
  ACCEPT_SPAM_MESSAGE: "accept-spam-message-request",
  IGNORE_SPAM_MESSAGE: "ignore-spam-message-request",
  PREVIEW_SPAM_MESSAGE: "preview-spam-message-request",
};
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = goToMessageRequestPreview(user[8]).c(72);
      ({ messageRequest, goToMessageRequestPreview } = arg0);
      ({ isLastRow, hasSingleMessageRequest } = arg0);
      closure_11();
      user = messageRequest.user;
      const channel = messageRequest.channel;
      const id = channel.id;
      if (cResult[0] !== channel) {
        const recipientId = channel.getRecipientId();
        cResult[0] = channel;
        cResult[1] = recipientId;
        let tmp5 = recipientId;
      } else {
        tmp5 = cResult[1];
      }
      let obj = goToMessageRequestPreview(user[8]);
      const longestChannelMessageBeforeReply = goToMessageRequestPreview(user[9]).useLongestChannelMessageBeforeReply(
        id,
        tmp5,
      );
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            obj = hasSingleMessageRequest(user[10]);
            obj1 = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", content: null, icon: null };
            intl = goToMessageRequestPreview(user[6]).intl;
            obj1.content = intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4);
            obj1.icon = hasSingleMessageRequest(user[11]);
            openResult = obj.open(obj1);
            return;
          }
        }
        cResult[2] = I;
      } else {
        class I {
          constructor() {
            obj = hasSingleMessageRequest(user[10]);
            obj1 = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", content: null, icon: null };
            intl = goToMessageRequestPreview(user[6]).intl;
            obj1.content = intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4);
            obj1.icon = hasSingleMessageRequest(user[11]);
            openResult = obj.open(obj1);
            return;
          }
        }
      }
      if (cResult[3] === id) {
        class I {
          constructor() {
            obj = hasSingleMessageRequest(user[10]);
            obj1 = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", content: null, icon: null };
            intl = goToMessageRequestPreview(user[6]).intl;
            obj1.content = intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4);
            obj1.icon = hasSingleMessageRequest(user[11]);
            openResult = obj.open(obj1);
            return;
          }
        }
        if (cResult[6] === tmp9) {
          class I {
            constructor() {
              obj = hasSingleMessageRequest(user[10]);
              obj1 = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", content: null, icon: null };
              intl = goToMessageRequestPreview(user[6]).intl;
              obj1.content = intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4);
              obj1.icon = hasSingleMessageRequest(user[11]);
              openResult = obj.open(obj1);
              return;
            }
          }
          const messageRequestActions = goToMessageRequestPreview(tmp2[14]).useMessageRequestActions(tmp10);
          const rejectMessageRequest = messageRequestActions.rejectMessageRequest;
          ({
            isAcceptLoading,
            isRejectLoading,
            isUserProfileLoading,
            isOptimisticAccepted,
            isOptimisticRejected,
            markAsNotSpam,
          } = messageRequestActions);
          if (cResult[9] === channel.id) {
            class I {
              constructor() {
                obj = hasSingleMessageRequest(user[10]);
                obj1 = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", content: null, icon: null };
                intl = goToMessageRequestPreview(user[6]).intl;
                obj1.content = intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4);
                obj1.icon = hasSingleMessageRequest(user[11]);
                openResult = obj.open(obj1);
                return;
              }
            }
            if (cResult[12] === channel) {
              class I {
                constructor() {
                  obj = hasSingleMessageRequest(user[10]);
                  obj1 = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", content: null, icon: null };
                  intl = goToMessageRequestPreview(user[6]).intl;
                  obj1.content = intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4);
                  obj1.icon = hasSingleMessageRequest(user[11]);
                  openResult = obj.open(obj1);
                  return;
                }
              }
            }
            const fn2 = function x() {
              markAsNotSpam(channel, longestChannelMessageBeforeReply);
            };
            cResult[12] = channel;
            cResult[13] = markAsNotSpam;
            cResult[14] = longestChannelMessageBeforeReply;
            cResult[15] = fn2;
          }
          class L {
            constructor() {
              tmp = rejectMessageRequest(channel.id);
              return;
            }
          }
          cResult[9] = channel.id;
          cResult[10] = rejectMessageRequest;
          cResult[11] = L;
          const tmpResult2 = goToMessageRequestPreview(tmp2[14]);
        }
        let obj2 = { user, onAcceptSuccess: tmp9, onError: I };
        cResult[6] = tmp9;
        cResult[7] = user;
        cResult[8] = obj2;
        tmp10 = obj2;
      }
      const fn = function f() {
        if (hasSingleMessageRequest) {
          transitionToChannel.transitionToChannel(id);
          ModalActionCreatorsDefault.pop();
        }
      };
      cResult[3] = id;
      cResult[4] = hasSingleMessageRequest;
      cResult[5] = fn;
      const tmpResult = goToMessageRequestPreview(user[9]);
    }
  : (isLastRow) => {
      ({ messageRequest, goToMessageRequestPreview: require, hasSingleMessageRequest } = isLastRow);
      c6 = undefined;
      c7 = undefined;
      const tmp = closure_11();
      const str = messageRequest.user;
      const channel = messageRequest.channel;
      const id = channel.id;
      closure_5 = require("useLongestChannelMessageBeforeReply").useLongestChannelMessageBeforeReply(
        id,
        channel.getRecipientId(),
      );
      const items = [id, hasSingleMessageRequest];
      const callback = channel.useCallback(() => {
        const obj2 = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", content: null, icon: null };
        const intl = require("util").intl;
        obj2.content = intl.string(require("util").t.pIQ3h4);
        obj2.icon = hasSingleMessageRequest(str[11]);
        hasSingleMessageRequest(str[10]).open(obj2);
      }, []);
      const callback1 = channel.useCallback(() => {
        if (hasSingleMessageRequest) {
          transitionToChannel.transitionToChannel(id);
          ModalActionCreatorsDefault.pop();
        }
      }, items);
      let obj = require("useLongestChannelMessageBeforeReply");
      const messageRequestActions = require("useMessageRequestActions").useMessageRequestActions({
        user: str,
        onAcceptSuccess: callback1,
        onError: callback,
      });
      ({
        rejectMessageRequest: c6,
        isAcceptLoading,
        isRejectLoading,
        isUserProfileLoading,
        isOptimisticAccepted,
        isOptimisticRejected,
        markAsNotSpam: c7,
      } = messageRequestActions);
      let tmp7 = isAcceptLoading;
      if (!isAcceptLoading) {
        tmp7 = isRejectLoading;
      }
      if (!tmp7) {
        tmp7 = isUserProfileLoading;
      }
      if (!tmp7) {
        tmp7 = isOptimisticAccepted;
      }
      if (!tmp7) {
        tmp7 = isOptimisticRejected;
      }
      function handleSelectRow() {
        AnalyticsUtilsDefault.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, {
          is_spam: true,
          channel_id: channel.id,
          other_user_id: str.id,
        });
        require();
      }
      const obj3 = {
        onPress: handleSelectRow,
        accessibilityRole: "button",
        accessibilityActions: null,
        onAccessibilityAction: null,
        style: null,
        children: null,
      };
      const obj4 = { name: constants.ACCEPT_SPAM_MESSAGE, label: null };
      let intl = require("util").intl;
      obj4.label = intl.string(require("util").t.apePSa);
      const items1 = [obj4, ,];
      const obj5 = { name: constants.IGNORE_SPAM_MESSAGE, label: null };
      const intl2 = require("util").intl;
      obj5.label = intl2.string(require("util").t.MWOV9D);
      items1[1] = obj5;
      const obj6 = { name: constants.PREVIEW_SPAM_MESSAGE, label: null };
      const intl3 = require("util").intl;
      obj6.label = intl3.string(require("util").t.I6PFLB);
      items1[2] = obj6;
      obj3.accessibilityActions = items1;
      obj3.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
        const actionName = nativeEvent.nativeEvent.actionName;
        if (constants.ACCEPT_SPAM_MESSAGE === actionName) {
          _undefined2(channel, closure_5);
        } else if (constants.IGNORE_SPAM_MESSAGE === actionName) {
          _undefined(channel.id);
        } else if (constants.PREVIEW_SPAM_MESSAGE === actionName) {
          const obj2 = { is_spam: true, channel_id: channel.id, other_user_id: str.id };
          AnalyticsUtilsDefault.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
          require();
        }
      };
      obj3.style = tmp.pressableRow;
      const obj7 = { style: tmp.rowContainer, children: null };
      const items2 = [
        closure_8(hasSingleMessageRequest(str[16]), {
          channel: messageRequest.channel,
          otherUser: messageRequest.user,
        }),
      ];
      const obj9 = { style: tmp.actionContainer, children: null };
      const intl4 = require("util").intl;
      let str1;
      if (str != null) {
        str1 = str.toString();
      }
      const obj10 = {
        accessibilityRole: "button",
        accessibilityLabel: intl4.formatToPlainString(require("util").t["6p0yBo"], { name: str1 }),
        onPress: null,
        disabled: tmp7,
        style: null,
        children: null,
      };
      function handleAcceptMessageRequest() {
        _undefined2(channel, closure_5);
      }
      obj10.onPress = handleAcceptMessageRequest;
      const items3 = [,];
      ({ actionButton: arr4[0], acceptButton: arr4[1] } = tmp);
      obj10.style = items3;
      if (!isAcceptLoading) {
        if (!isUserProfileLoading) {
          if (!isOptimisticAccepted) {
            const obj11 = {
              size: require("native").Icon.Sizes.SMALL,
              disableColor: true,
              source: hasSingleMessageRequest(tmp3[18]),
            };
            let tmp10Result = closure_8(require("native").Icon, obj11);
          }
          obj10.children = tmp10Result;
          const items4 = [closure_8(require("Pressables").PressableOpacity, obj10)];
          const intl5 = require("util").intl;
          let str2;
          if (str != null) {
            str2 = str.toString();
          }
          const obj12 = {
            accessibilityRole: "button",
            accessibilityLabel: null,
            onPress: null,
            disabled: null,
            style: null,
            children: null,
          };
          const obj13 = { name: str2 };
          function handleRejectMessageRequest() {
            _undefined(channel.id);
          }
          obj12.accessibilityLabel = intl5.formatToPlainString(require("util").t["C9Xe6+"], obj13);
          obj12.onPress = handleRejectMessageRequest;
          obj12.disabled = tmp7;
          obj12.style = tmp.actionButton;
          if (!isRejectLoading) {
            if (!isOptimisticRejected) {
              const obj14 = {
                size: require("native").Icon.Sizes.SMALL,
                disableColor: true,
                source: hasSingleMessageRequest(tmp3[20]),
              };
              let tmp10Result3 = closure_8(require("native").Icon, obj14);
            }
            obj12.children = tmp10Result3;
            items4[1] = closure_8(require("Pressables").PressableOpacity, obj12);
            obj9.children = items4;
            items2[1] = closure_9(tmp9, obj9);
            obj7.children = items2;
            const items5 = [closure_9(tmp9, obj7)];
            let tmp10Result4 = null;
            if (!isLastRow.isLastRow) {
              tmp10Result4 = closure_8(require("Form").FormDivider, { iconPush: true, outer: true });
            }
            items5[1] = tmp10Result4;
            obj3.children = items5;
            return closure_9(require("Pressables").PressableOpacity, obj3);
          }
          const obj15 = { style: tmp.activityIndicator };
          tmp10Result3 = closure_8(id, obj15);
        }
      }
      tmp10Result = closure_8(id, { style: tmp.activityIndicator });
      const obj16 = { style: tmp.activityIndicator };
      let obj2 = require("useMessageRequestActions");
      const obj8 = { channel: messageRequest.channel, otherUser: messageRequest.user };
    };
ReactCompilerGating = fn(558);
let obj5 = {
  flex: 1,
  paddingHorizontal: 16,
  alignSelf: "stretch",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/spam/SpamMessageList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (goToMessageRequestPreview) => {
      const cResult = goToMessageRequestPreview(spamMessageRequestCount[8]).c(25);
      goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
      const tmp4 = closure_11();
      importDefault = tmp4;
      const bottom = require("useSafeAreaInsets")().bottom;
      let obj = goToMessageRequestPreview(spamMessageRequestCount[8]);
      spamMessageRequestCount = goToMessageRequestPreview(spamMessageRequestCount[23]).useSpamMessageRequestCount();
      const arr = require("useSortedSpamMessageRequests")();
      let obj2 = goToMessageRequestPreview(spamMessageRequestCount[23]);
      const listHasSingleSpamMessageRequest = goToMessageRequestPreview(
        spamMessageRequestCount[25],
      ).useListHasSingleSpamMessageRequest();
      if (cResult[0] !== spamMessageRequestCount) {
        const fn = function n() {
          AnalyticsUtilsDefault.track(AnalyticEvents.SPAM_MESSAGE_REQUESTS_VIEWED, {
            num_spam_message_requests: spamMessageRequestCount,
          });
          const obj2 = { num_spam_message_requests: spamMessageRequestCount };
          const obj3 = MonitoringAgentDefault;
          obj3.increment({ name: MetricEvents.MetricEvents.SPAM_MESSAGE_REQUEST_VIEW });
        };
        cResult[0] = spamMessageRequestCount;
        cResult[1] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[1];
      }
      require("useMountEffect")(tmp8);
      if (0 === arr.length) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          let obj4 = { bodyText: null };
          let intl = tmp(tmp2[6]).intl;
          obj4.bodyText = intl.string(tmp(tmp2[6]).t.hasFPQ);
          const tmp31 = closure_8(tmp5(tmp2[29]), obj4);
          cResult[2] = tmp31;
          let tmp28 = tmp31;
          const tmp5Result = tmp5(tmp2[29]);
        } else {
          tmp28 = cResult[2];
        }
        return tmp28;
      } else {
        if (cResult[3] !== arr) {
          const items = [];
          class I {
            constructor(arg0) {
              item = goToMessageRequestPreview.item;
              if (typeof item === "string") {
                tmp4 = closure_1_8;
                tmp5 = closure_1_5;
                obj = { style: null, children: null };
                tmp6 = closure_1;
                obj.style = closure_1.sectionContainer;
                tmp7 = closure_1_8;
                tmp8 = goToMessageRequestPreview;
                tmp9 = closure_2;
                obj1 = { variant: "eyebrow", color: "text-default", children: null };
                intl = goToMessageRequestPreview(closure_2[6]).intl;
                obj5 = { count: null };
                tmp10 = closure_3;
                obj5.count = closure_3.length;
                obj1.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.aNh5Kf, obj5);
                obj.children = closure_1_8(goToMessageRequestPreview(closure_2[30]).Text, obj1);
                tmp11Result = closure_1_8(closure_1_5, obj);
              } else {
                obj6 = {
                  messageRequest: null,
                  goToMessageRequestPreview: null,
                  isLastRow: null,
                  hasSingleMessageRequest: null,
                };
                obj6.messageRequest = item;
                obj6.goToMessageRequestPreview = function goToMessageRequestPreview() {
                  return goToMessageRequestPreview(item.channel.id);
                };
                tmp13 = closure_3;
                num = 1;
                tmp14 = closure_3[closure_3.length - 1];
                tmp15 = null;
                id = undefined;
                tmp11 = closure_1_8;
                tmp12 = closure_1_13;
                if (tmp14 != null) {
                  id = tmp14.channel.id;
                }
                obj6.isLastRow = item.channel.id === id;
                tmp2 = closure_4;
                obj6.hasSingleMessageRequest = closure_4;
                tmp11Result = tmp11(tmp12, obj6, item.channel.id);
              }
              return tmp11Result;
            }
          }
          HermesBuiltin.arraySpread(arr, 1);
          cResult[3] = arr;
          cResult[4] = items;
          let tmp10 = items;
        } else {
          tmp10 = cResult[4];
        }
        if (cResult[5] === goToMessageRequestPreview) {
          if (cResult[6] === listHasSingleSpamMessageRequest) {
            if (cResult[7] === arr) {
              if (cResult[8] === tmp4.sectionContainer) {
                let tmp15 = cResult[9];
              }
              if (cResult[10] !== bottom) {
                tmp(tmp2[31]);
                class I {
                  constructor(arg0) {
                    item = goToMessageRequestPreview.item;
                    if (typeof item === "string") {
                      tmp4 = closure_1_8;
                      tmp5 = closure_1_5;
                      obj = { style: null, children: null };
                      tmp6 = closure_1;
                      obj.style = closure_1.sectionContainer;
                      tmp7 = closure_1_8;
                      tmp8 = goToMessageRequestPreview;
                      tmp9 = closure_2;
                      obj1 = { variant: "eyebrow", color: "text-default", children: null };
                      intl = goToMessageRequestPreview(closure_2[6]).intl;
                      obj5 = { count: null };
                      tmp10 = closure_3;
                      obj5.count = closure_3.length;
                      obj1.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.aNh5Kf, obj5);
                      obj.children = closure_1_8(goToMessageRequestPreview(closure_2[30]).Text, obj1);
                      tmp11Result = closure_1_8(closure_1_5, obj);
                    } else {
                      obj6 = {
                        messageRequest: null,
                        goToMessageRequestPreview: null,
                        isLastRow: null,
                        hasSingleMessageRequest: null,
                      };
                      obj6.messageRequest = item;
                      obj6.goToMessageRequestPreview = function goToMessageRequestPreview() {
                        return goToMessageRequestPreview(item.channel.id);
                      };
                      tmp13 = closure_3;
                      num = 1;
                      tmp14 = closure_3[closure_3.length - 1];
                      tmp15 = null;
                      id = undefined;
                      tmp11 = closure_1_8;
                      tmp12 = closure_1_13;
                      if (tmp14 != null) {
                        id = tmp14.channel.id;
                      }
                      obj6.isLastRow = item.channel.id === id;
                      tmp2 = closure_4;
                      obj6.hasSingleMessageRequest = closure_4;
                      tmp11Result = tmp11(tmp12, obj6, item.channel.id);
                    }
                    return tmp11Result;
                  }
                }
                cResult[10] = bottom;
                cResult[11] = 0;
              }
              class I {
                constructor(arg0) {
                  item = goToMessageRequestPreview.item;
                  if (typeof item === "string") {
                    tmp4 = closure_1_8;
                    tmp5 = closure_1_5;
                    obj = { style: null, children: null };
                    tmp6 = closure_1;
                    obj.style = closure_1.sectionContainer;
                    tmp7 = closure_1_8;
                    tmp8 = goToMessageRequestPreview;
                    tmp9 = closure_2;
                    obj1 = { variant: "eyebrow", color: "text-default", children: null };
                    intl = goToMessageRequestPreview(closure_2[6]).intl;
                    obj5 = { count: null };
                    tmp10 = closure_3;
                    obj5.count = closure_3.length;
                    obj1.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.aNh5Kf, obj5);
                    obj.children = closure_1_8(goToMessageRequestPreview(closure_2[30]).Text, obj1);
                    tmp11Result = closure_1_8(closure_1_5, obj);
                  } else {
                    obj6 = {
                      messageRequest: null,
                      goToMessageRequestPreview: null,
                      isLastRow: null,
                      hasSingleMessageRequest: null,
                    };
                    obj6.messageRequest = item;
                    obj6.goToMessageRequestPreview = function goToMessageRequestPreview() {
                      return goToMessageRequestPreview(item.channel.id);
                    };
                    tmp13 = closure_3;
                    num = 1;
                    tmp14 = closure_3[closure_3.length - 1];
                    tmp15 = null;
                    id = undefined;
                    tmp11 = closure_1_8;
                    tmp12 = closure_1_13;
                    if (tmp14 != null) {
                      id = tmp14.channel.id;
                    }
                    obj6.isLastRow = item.channel.id === id;
                    tmp2 = closure_4;
                    obj6.hasSingleMessageRequest = closure_4;
                    tmp11Result = tmp11(tmp12, obj6, item.channel.id);
                  }
                  return tmp11Result;
                }
              }
              if (cResult[14] === tmp4.list) {
                if (cResult[15] === tmp18) {
                  let tmp19 = cResult[16];
                }
                class I {
                  constructor(arg0) {
                    item = goToMessageRequestPreview.item;
                    if (typeof item === "string") {
                      tmp4 = closure_1_8;
                      tmp5 = closure_1_5;
                      obj = { style: null, children: null };
                      tmp6 = closure_1;
                      obj.style = closure_1.sectionContainer;
                      tmp7 = closure_1_8;
                      tmp8 = goToMessageRequestPreview;
                      tmp9 = closure_2;
                      obj1 = { variant: "eyebrow", color: "text-default", children: null };
                      intl = goToMessageRequestPreview(closure_2[6]).intl;
                      obj5 = { count: null };
                      tmp10 = closure_3;
                      obj5.count = closure_3.length;
                      obj1.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.aNh5Kf, obj5);
                      obj.children = closure_1_8(goToMessageRequestPreview(closure_2[30]).Text, obj1);
                      tmp11Result = closure_1_8(closure_1_5, obj);
                    } else {
                      obj6 = {
                        messageRequest: null,
                        goToMessageRequestPreview: null,
                        isLastRow: null,
                        hasSingleMessageRequest: null,
                      };
                      obj6.messageRequest = item;
                      obj6.goToMessageRequestPreview = function goToMessageRequestPreview() {
                        return goToMessageRequestPreview(item.channel.id);
                      };
                      tmp13 = closure_3;
                      num = 1;
                      tmp14 = closure_3[closure_3.length - 1];
                      tmp15 = null;
                      id = undefined;
                      tmp11 = closure_1_8;
                      tmp12 = closure_1_13;
                      if (tmp14 != null) {
                        id = tmp14.channel.id;
                      }
                      obj6.isLastRow = item.channel.id === id;
                      tmp2 = closure_4;
                      obj6.hasSingleMessageRequest = closure_4;
                      tmp11Result = tmp11(tmp12, obj6, item.channel.id);
                    }
                    return tmp11Result;
                  }
                }
                if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                  class I {
                    constructor(arg0) {
                      item = goToMessageRequestPreview.item;
                      if (typeof item === "string") {
                        tmp4 = closure_1_8;
                        tmp5 = closure_1_5;
                        obj = { style: null, children: null };
                        tmp6 = closure_1;
                        obj.style = closure_1.sectionContainer;
                        tmp7 = closure_1_8;
                        tmp8 = goToMessageRequestPreview;
                        tmp9 = closure_2;
                        obj1 = { variant: "eyebrow", color: "text-default", children: null };
                        intl = goToMessageRequestPreview(closure_2[6]).intl;
                        obj5 = { count: null };
                        tmp10 = closure_3;
                        obj5.count = closure_3.length;
                        obj1.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.aNh5Kf, obj5);
                        obj.children = closure_1_8(goToMessageRequestPreview(closure_2[30]).Text, obj1);
                        tmp11Result = closure_1_8(closure_1_5, obj);
                      } else {
                        obj6 = {
                          messageRequest: null,
                          goToMessageRequestPreview: null,
                          isLastRow: null,
                          hasSingleMessageRequest: null,
                        };
                        obj6.messageRequest = item;
                        obj6.goToMessageRequestPreview = function goToMessageRequestPreview() {
                          return goToMessageRequestPreview(item.channel.id);
                        };
                        tmp13 = closure_3;
                        num = 1;
                        tmp14 = closure_3[closure_3.length - 1];
                        tmp15 = null;
                        id = undefined;
                        tmp11 = closure_1_8;
                        tmp12 = closure_1_13;
                        if (tmp14 != null) {
                          id = tmp14.channel.id;
                        }
                        obj6.isLastRow = item.channel.id === id;
                        tmp2 = closure_4;
                        obj6.hasSingleMessageRequest = closure_4;
                        tmp11Result = tmp11(tmp12, obj6, item.channel.id);
                      }
                      return tmp11Result;
                    }
                  }
                  let tmp21 = { right: 0.01 };
                  const obj5 = { right: 0.01 };
                } else {
                  tmp21 = cResult[17];
                }
                if (cResult[18] !== bottom) {
                  const obj6 = { paddingBottom: bottom, paddingTop: 12 };
                  class I {
                    constructor(arg0) {
                      item = goToMessageRequestPreview.item;
                      if (typeof item === "string") {
                        tmp4 = closure_1_8;
                        tmp5 = closure_1_5;
                        obj = { style: null, children: null };
                        tmp6 = closure_1;
                        obj.style = closure_1.sectionContainer;
                        tmp7 = closure_1_8;
                        tmp8 = goToMessageRequestPreview;
                        tmp9 = closure_2;
                        obj1 = { variant: "eyebrow", color: "text-default", children: null };
                        intl = goToMessageRequestPreview(closure_2[6]).intl;
                        obj5 = { count: null };
                        tmp10 = closure_3;
                        obj5.count = closure_3.length;
                        obj1.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.aNh5Kf, obj5);
                        obj.children = closure_1_8(goToMessageRequestPreview(closure_2[30]).Text, obj1);
                        tmp11Result = closure_1_8(closure_1_5, obj);
                      } else {
                        obj6 = {
                          messageRequest: null,
                          goToMessageRequestPreview: null,
                          isLastRow: null,
                          hasSingleMessageRequest: null,
                        };
                        obj6.messageRequest = item;
                        obj6.goToMessageRequestPreview = function goToMessageRequestPreview() {
                          return goToMessageRequestPreview(item.channel.id);
                        };
                        tmp13 = closure_3;
                        num = 1;
                        tmp14 = closure_3[closure_3.length - 1];
                        tmp15 = null;
                        id = undefined;
                        tmp11 = closure_1_8;
                        tmp12 = closure_1_13;
                        if (tmp14 != null) {
                          id = tmp14.channel.id;
                        }
                        obj6.isLastRow = item.channel.id === id;
                        tmp2 = closure_4;
                        obj6.hasSingleMessageRequest = closure_4;
                        tmp11Result = tmp11(tmp12, obj6, item.channel.id);
                      }
                      return tmp11Result;
                    }
                  }
                  cResult[18] = bottom;
                  cResult[19] = obj6;
                  let tmp22 = obj6;
                } else {
                  tmp22 = cResult[19];
                }
                if (cResult[20] === tmp10) {
                  if (cResult[21] === tmp15) {
                    if (cResult[22] === tmp19) {
                      if (cResult[23] === tmp22) {
                        let tmp23 = cResult[24];
                      }
                      return tmp23;
                    }
                  }
                }
                const obj7 = {
                  style: tmp19,
                  scrollIndicatorInsets: tmp21,
                  contentContainerStyle: tmp22,
                  renderItem: tmp15,
                  data: tmp10,
                };
                const tmp26 = closure_8(closure_6, obj7);
                cResult[20] = tmp10;
                cResult[21] = tmp15;
                cResult[22] = tmp19;
                cResult[23] = tmp22;
                cResult[24] = tmp26;
                tmp23 = tmp26;
              }
              const items1 = [tmp4.list, tmp18];
              cResult[14] = tmp4.list;
              cResult[15] = tmp18;
              cResult[16] = items1;
              tmp19 = items1;
            }
          }
        }
        class I {
          constructor(arg0) {
            item = goToMessageRequestPreview.item;
            if (typeof item === "string") {
              tmp4 = closure_1_8;
              tmp5 = closure_1_5;
              obj = { style: null, children: null };
              tmp6 = closure_1;
              obj.style = closure_1.sectionContainer;
              tmp7 = closure_1_8;
              tmp8 = goToMessageRequestPreview;
              tmp9 = closure_2;
              obj1 = { variant: "eyebrow", color: "text-default", children: null };
              intl = goToMessageRequestPreview(closure_2[6]).intl;
              obj5 = { count: null };
              tmp10 = closure_3;
              obj5.count = closure_3.length;
              obj1.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.aNh5Kf, obj5);
              obj.children = closure_1_8(goToMessageRequestPreview(closure_2[30]).Text, obj1);
              tmp11Result = closure_1_8(closure_1_5, obj);
            } else {
              obj6 = {
                messageRequest: null,
                goToMessageRequestPreview: null,
                isLastRow: null,
                hasSingleMessageRequest: null,
              };
              obj6.messageRequest = item;
              obj6.goToMessageRequestPreview = function goToMessageRequestPreview() {
                return goToMessageRequestPreview(item.channel.id);
              };
              tmp13 = closure_3;
              num = 1;
              tmp14 = closure_3[closure_3.length - 1];
              tmp15 = null;
              id = undefined;
              tmp11 = closure_1_8;
              tmp12 = closure_1_13;
              if (tmp14 != null) {
                id = tmp14.channel.id;
              }
              obj6.isLastRow = item.channel.id === id;
              tmp2 = closure_4;
              obj6.hasSingleMessageRequest = closure_4;
              tmp11Result = tmp11(tmp12, obj6, item.channel.id);
            }
            return tmp11Result;
          }
        }
        cResult[5] = goToMessageRequestPreview;
        cResult[6] = listHasSingleSpamMessageRequest;
        cResult[7] = arr;
        cResult[8] = tmp4.sectionContainer;
        cResult[9] = I;
        tmp15 = I;
      }
      let obj3 = goToMessageRequestPreview(spamMessageRequestCount[25]);
    }
  : (goToMessageRequestPreview) => {
      goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
      const tmp = closure_11();
      importDefault = tmp;
      const bottom = useSafeAreaInsetsDefault().bottom;
      dependencyMap = goToMessageRequestPreview(17065).useSpamMessageRequestCount();
      const arr = useSortedSpamMessageRequestsDefault();
      let obj = goToMessageRequestPreview(17065);
      hasSingleMessageRequest = goToMessageRequestPreview(17063).useListHasSingleSpamMessageRequest();
      useMountEffectDefault(() => {
        AnalyticsUtilsDefault.track(AnalyticEvents.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests });
        const obj2 = { num_spam_message_requests };
        const obj3 = MonitoringAgentDefault;
        obj3.increment({ name: MetricEvents.MetricEvents.SPAM_MESSAGE_REQUEST_VIEW });
      });
      if (0 === arr.length) {
        let obj3 = { bodyText: null };
        let intl = tmp4(1126).intl;
        obj3.bodyText = intl.string(tmp4(1126).t.hasFPQ);
        return closure_8(MessageRequestEmptyDefault, obj3);
      } else {
        const items = [c10];
        HermesBuiltin.arraySpread(arr, 1);
        const items1 = [tmp.list];
        let num = 0;
        if (tmp4Result.isAndroid()) {
          num = bottom;
        }
        let obj4 = {
          style: null,
          scrollIndicatorInsets: null,
          contentContainerStyle: null,
          renderItem: null,
          data: null,
        };
        const obj5 = { marginBottom: num };
        items1[1] = obj5;
        obj4.style = items1;
        obj4.scrollIndicatorInsets = { right: 0.01 };
        const obj6 = { paddingBottom: bottom, paddingTop: 12 };
        obj4.contentContainerStyle = obj6;
        obj4.renderItem = function renderItem(item) {
          item = item.item;
          if (typeof item === "string") {
            const obj = { style: sectionContainer.sectionContainer, children: null };
            const obj2 = { variant: "eyebrow", color: "text-default", children: null };
            const intl = goToMessageRequestPreview(num_spam_message_requests[6]).intl;
            const obj3 = { count: arr.length };
            obj2.children = intl.format(goToMessageRequestPreview(num_spam_message_requests[6]).t.aNh5Kf, obj3);
            obj.children = closure_1_8(goToMessageRequestPreview(num_spam_message_requests[30]).Text, obj2);
            let tmp11Result = closure_1_8(closure_1_5, obj);
          } else {
            const obj4 = {
              messageRequest: item,
              goToMessageRequestPreview() {
                return goToMessageRequestPreview(item.channel.id);
              },
              isLastRow: null,
              hasSingleMessageRequest: null,
            };
            let id;
            if (arr[arr.length - 1] != null) {
              id = tmp14.channel.id;
            }
            obj4.isLastRow = item.channel.id === id;
            obj4.hasSingleMessageRequest = hasSingleMessageRequest;
            tmp11Result = closure_1_8(closure_1_13, obj4, item.channel.id);
          }
          return tmp11Result;
        };
        obj4.data = items;
        return closure_8(closure_6, obj4);
      }
      let obj2 = goToMessageRequestPreview(17063);
    };
