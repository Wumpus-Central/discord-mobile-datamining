// === Module 17464: SpamMessageList ===

// Module 17464 (SpamMessageList)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import transitionToChannel from "transitionToChannel" /* 4840 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5171 */;
import MetricEvents from "MetricEvents" /* 5176 */;
import useMountEffectDefault from "useMountEffect" /* 5290 */;
import useSortedSpamMessageRequestsDefault from "useSortedSpamMessageRequests" /* 17465 */;
import noop from "module_19" /* 19 */;

const MessageRequestEmptyDefault = tmp2(17459);
require = fn;
function PendingSpamMessageRequestRow(isLastRow) {
  ({ messageRequest, goToMessageRequestPreview: require, hasSingleMessageRequest } = isLastRow);
  c6 = undefined;
  c7 = undefined;
  const tmp = closure_10();
  const str = messageRequest.user;
  const channel = messageRequest.channel;
  const id = channel.id;
  closure_5 = require("useLongestChannelMessageBeforeReply").useLongestChannelMessageBeforeReply(id, channel.getRecipientId());
  const items = [id, hasSingleMessageRequest];
  const callback = channel.useCallback(() => {
    const obj2 = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", content: null, icon: null };
    const intl = require("util").intl;
    obj2.content = intl.string(require("util").t.pIQ3h4);
    obj2.icon = hasSingleMessageRequest(str[9]);
    hasSingleMessageRequest(str[8]).open(obj2);
  }, []);
  const callback1 = channel.useCallback(() => {
    if (hasSingleMessageRequest) {
      transitionToChannel.transitionToChannel(id);
      ModalActionCreatorsDefault.pop();
    }
  }, items);
  let obj = require("useLongestChannelMessageBeforeReply");
  const messageRequestActions = require("useMessageRequestActions").useMessageRequestActions({ user: str, onAcceptSuccess: callback1, onError: callback });
  ({ rejectMessageRequest: c6, isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected, markAsNotSpam: c7 } = messageRequestActions);
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
    AnalyticsUtilsDefault.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, { is_spam: true, channel_id: channel.id, other_user_id: str.id });
    require();
  }
  const obj3 = { onPress: handleSelectRow, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null, style: null, children: null };
  const obj4 = { name: constants.ACCEPT_SPAM_MESSAGE, label: null };
  let intl = require("util").intl;
  obj4.label = intl.string(require("util").t.apePSa);
  const items1 = [obj4, , ];
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
  const items2 = [closure_8(hasSingleMessageRequest(str[15]), { channel: messageRequest.channel, otherUser: messageRequest.user }), ];
  const obj9 = { style: tmp.actionContainer, children: null };
  const intl4 = require("util").intl;
  let str1;
  if (str != null) {
    str1 = str.toString();
  }
  const obj10 = { accessibilityRole: "button", accessibilityLabel: intl4.formatToPlainString(require("util").t["6p0yBo"], { name: str1 }), onPress: null, disabled: tmp7, style: null, children: null };
  function handleAcceptMessageRequest() {
    _undefined2(channel, closure_5);
  }
  obj10.onPress = handleAcceptMessageRequest;
  const items3 = [, ];
  ({ actionButton: arr4[0], acceptButton: arr4[1] } = tmp);
  obj10.style = items3;
  if (!isAcceptLoading) {
    if (!isUserProfileLoading) {
      if (!isOptimisticAccepted) {
        const obj11 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(tmp3[17]) };
        let tmp10Result = closure_8(require("native").Icon, obj11);
      }
      obj10.children = tmp10Result;
      const items4 = [closure_8(require("Pressables").PressableOpacity, obj10), ];
      const intl5 = require("util").intl;
      let str2;
      if (str != null) {
        str2 = str.toString();
      }
      const obj12 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, disabled: null, style: null, children: null };
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
          const obj14 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(tmp3[18]) };
          let tmp10Result3 = closure_8(require("native").Icon, obj14);
        }
        obj12.children = tmp10Result3;
        items4[1] = closure_8(require("Pressables").PressableOpacity, obj12);
        obj9.children = items4;
        items2[1] = closure_9(tmp9, obj9);
        obj7.children = items2;
        const items5 = [closure_9(tmp9, obj7), ];
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
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty, FlatList: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { sectionContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", justifyContent: "space-between", marginTop: 6, marginBottom: 10 }, rowContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 14, marginBottom: 12 }, actionContainer: { flexDirection: "row", alignItems: "flex-start", height: "100%" }, actionButton: null, acceptButton: null, pressableRow: null, activityIndicator: null, list: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
obj2.actionButton = size;
obj2.acceptButton = { marginRight: 16 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", justifyContent: "space-between", marginTop: 6, marginBottom: 10 };
obj2.pressableRow = { borderRadius: nativeDefault.radii.md };
obj2.activityIndicator = { height: 16, width: 16 };
let obj4 = { borderRadius: nativeDefault.radii.md };
obj2.list = { flex: 1, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createStyles.createStyles(obj2);
const constants = { ACCEPT_SPAM_MESSAGE: "accept-spam-message-request", IGNORE_SPAM_MESSAGE: "ignore-spam-message-request", PREVIEW_SPAM_MESSAGE: "preview-spam-message-request" };
size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/spam/SpamMessageList.tsx");

export default function SpamMessageList(goToMessageRequestPreview) {
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  const tmp = closure_10();
  importDefault = tmp;
  const bottom = useSafeAreaInsetsDefault().bottom;
  dependencyMap = goToMessageRequestPreview(17458).useSpamMessageRequestCount();
  const arr = useSortedSpamMessageRequestsDefault();
  let obj = goToMessageRequestPreview(17458);
  const hasSingleMessageRequest = goToMessageRequestPreview(17456).useListHasSingleSpamMessageRequest();
  useMountEffectDefault(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests });
    const obj2 = { num_spam_message_requests };
    const obj3 = MonitoringAgentDefault;
    obj3.increment({ name: MetricEvents.MetricEvents.SPAM_MESSAGE_REQUEST_VIEW });
  });
  if (0 === arr.length) {
    let obj3 = { bodyText: null };
    let intl = tmp4(1115).intl;
    obj3.bodyText = intl.string(tmp4(1115).t.hasFPQ);
    return closure_8(MessageRequestEmptyDefault, obj3);
  } else {
    const items = ["header-section"];
    HermesBuiltin.arraySpread(arr, 1);
    const items1 = [tmp.list, ];
    let num = 0;
    if (tmp4Result.isAndroid()) {
      num = bottom;
    }
    let obj4 = { style: null, scrollIndicatorInsets: null, contentContainerStyle: null, renderItem: null, data: null };
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
        obj.children = closure_1_8(goToMessageRequestPreview(num_spam_message_requests[29]).Text, obj2);
        let tmp11Result = closure_1_8(closure_1_5, obj);
      } else {
        const obj4 = {
          messageRequest: item,
          goToMessageRequestPreview() {
              return goToMessageRequestPreview(item.channel.id);
            },
          isLastRow: null,
          hasSingleMessageRequest: null
        };
        let id;
        if (arr[arr.length - 1] != null) {
          id = tmp14.channel.id;
        }
        obj4.isLastRow = item.channel.id === id;
        obj4.hasSingleMessageRequest = hasSingleMessageRequest;
        tmp11Result = closure_1_8(PendingSpamMessageRequestRow, obj4, item.channel.id);
      }
      return tmp11Result;
    };
    obj4.data = items;
    return closure_8(closure_6, obj4);
  }
  let obj2 = goToMessageRequestPreview(17456);
};