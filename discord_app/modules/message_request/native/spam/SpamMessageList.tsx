// === Module 16891: SpamMessageList ===

// Module 16891 (SpamMessageList)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import useMountEffectDefault from "useMountEffect" /* 4992 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7602 */;
import MetricEvents from "MetricEvents" /* 7607 */;
import useSortedSpamMessageRequestsDefault from "useSortedSpamMessageRequests" /* 16892 */;
import noop from "module_19" /* 19 */;

const MessageRequestEmptyDefault = tmp2(16886);
require = fn;
function PendingSpamMessageRequestRow(isLastRow) {
  ({ messageRequest, goToMessageRequestPreview: require, hasSingleMessageRequest } = isLastRow);
  c6 = undefined;
  c7 = undefined;
  const tmp = closure_10();
  let str = messageRequest.user;
  const channel = messageRequest.channel;
  const id = channel.id;
  let obj = require("useLongestChannelMessageBeforeReply");
  closure_5 = obj.useLongestChannelMessageBeforeReply(id, channel.getRecipientId());
  const items = [id, hasSingleMessageRequest];
  const callback = channel.useCallback(() => {
    hasSingleMessageRequest(str[8]);
    const obj = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", content: null, icon: null };
    const intl = require("util").intl;
    obj.content = intl.string(require("util").t.pIQ3h4);
    obj.icon = hasSingleMessageRequest(str[9]);
    obj.open(obj);
  }, []);
  const callback1 = channel.useCallback(() => {
    if (hasSingleMessageRequest) {
      transitionToChannel.transitionToChannel(id);
      let arr = ModalActionCreatorsDefault;
      arr = arr.pop();
    }
  }, items);
  let obj1 = require("useMessageRequestActions");
  const messageRequestActions = obj1.useMessageRequestActions({ user: str, onAcceptSuccess: callback1, onError: callback });
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
    const obj = { is_spam: true, channel_id: channel.id, other_user_id: str.id };
    obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj);
    require();
  }
  obj = { onPress: handleSelectRow, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null, style: null, children: null };
  obj = { name: constants.ACCEPT_SPAM_MESSAGE, label: null };
  let intl = require("util").intl;
  obj.label = intl.string(require("util").t.apePSa);
  const items1 = [obj, , ];
  obj1 = { name: constants.IGNORE_SPAM_MESSAGE, label: null };
  const intl2 = require("util").intl;
  obj1.label = intl2.string(require("util").t.MWOV9D);
  items1[1] = obj1;
  const obj2 = { name: constants.PREVIEW_SPAM_MESSAGE, label: null };
  const intl3 = require("util").intl;
  obj2.label = intl3.string(require("util").t.I6PFLB);
  items1[2] = obj2;
  obj.accessibilityActions = items1;
  obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (constants.ACCEPT_SPAM_MESSAGE === actionName) {
      _undefined2(channel, closure_5);
    } else if (constants.IGNORE_SPAM_MESSAGE === actionName) {
      _undefined(channel.id);
    } else if (constants.PREVIEW_SPAM_MESSAGE === actionName) {
      const obj = { is_spam: true, channel_id: channel.id, other_user_id: str.id };
      obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj);
      require();
    }
  };
  obj.style = tmp.pressableRow;
  const obj3 = { style: tmp.rowContainer, children: null };
  const items2 = [closure_8(hasSingleMessageRequest(str[15]), { channel: messageRequest.channel, otherUser: messageRequest.user }), ];
  const obj5 = { style: tmp.actionContainer, children: null };
  const intl4 = require("util").intl;
  str = undefined;
  if (str != null) {
    str = str.toString();
  }
  const obj6 = { accessibilityRole: "button", accessibilityLabel: intl4.formatToPlainString(require("util").t["6p0yBo"], { name: str }), onPress: null, disabled: tmp7, style: null, children: null };
  function handleAcceptMessageRequest() {
    _undefined2(channel, closure_5);
  }
  obj6.onPress = handleAcceptMessageRequest;
  const items3 = [, ];
  ({ actionButton: arr4[0], acceptButton: arr4[1] } = tmp);
  obj6.style = items3;
  if (!isAcceptLoading) {
    if (!isUserProfileLoading) {
      if (!isOptimisticAccepted) {
        const obj7 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(tmp3[17]) };
        let tmp10Result = closure_8(require("native").Icon, obj7);
      }
      obj6.children = tmp10Result;
      const items4 = [closure_8(require("Pressables").PressableOpacity, obj6), ];
      const intl5 = require("util").intl;
      let str1;
      if (str != null) {
        str1 = str.toString();
      }
      const obj8 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, disabled: null, style: null, children: null };
      const obj9 = { name: str1 };
      function handleRejectMessageRequest() {
        _undefined(channel.id);
      }
      obj8.accessibilityLabel = intl5.formatToPlainString(require("util").t["C9Xe6+"], obj9);
      obj8.onPress = handleRejectMessageRequest;
      obj8.disabled = tmp7;
      obj8.style = tmp.actionButton;
      if (!isRejectLoading) {
        if (!isOptimisticRejected) {
          const obj10 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(tmp3[18]) };
          tmp10Result = closure_8(require("native").Icon, obj10);
        }
        obj8.children = tmp10Result;
        items4[1] = closure_8(require("Pressables").PressableOpacity, obj8);
        obj5.children = items4;
        items2[1] = closure_9(tmp9, obj5);
        obj3.children = items2;
        const items5 = [closure_9(tmp9, obj3), ];
        let tmp10Result1 = null;
        if (!isLastRow.isLastRow) {
          tmp10Result1 = closure_8(require("Form").FormDivider, { iconPush: true, outer: true });
        }
        items5[1] = tmp10Result1;
        obj.children = items5;
        return closure_9(require("Pressables").PressableOpacity, obj);
      }
      const obj11 = { style: tmp.activityIndicator };
      tmp10Result = closure_8(id, obj11);
    }
  }
  tmp10Result = closure_8(id, { style: tmp.activityIndicator });
  const obj12 = { style: tmp.activityIndicator };
  const obj4 = { channel: messageRequest.channel, otherUser: messageRequest.user };
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty, FlatList: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { sectionContainer: null, rowContainer: null, actionContainer: null, actionButton: null, acceptButton: null, pressableRow: null, activityIndicator: null, list: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", justifyContent: "space-between", marginTop: 6, marginBottom: 10 };
createStyles.sectionContainer = createStyles;
createStyles.rowContainer = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 14, marginBottom: 12 };
createStyles.actionContainer = { flexDirection: "row", alignItems: "flex-start", height: "100%" };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
createStyles.actionButton = size;
createStyles.acceptButton = { marginRight: 16 };
createStyles.pressableRow = { borderRadius: nativeDefault.radii.md };
createStyles.activityIndicator = { height: 16, width: 16 };
let obj1 = { borderRadius: nativeDefault.radii.md };
createStyles.list = { flex: 1, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createStyles.createStyles(createStyles);
const constants = { ACCEPT_SPAM_MESSAGE: "accept-spam-message-request", IGNORE_SPAM_MESSAGE: "ignore-spam-message-request", PREVIEW_SPAM_MESSAGE: "preview-spam-message-request" };
size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/spam/SpamMessageList.tsx");

export default function SpamMessageList(goToMessageRequestPreview) {
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  const tmp = closure_10();
  importDefault = tmp;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = goToMessageRequestPreview(16885);
  dependencyMap = obj.useSpamMessageRequestCount();
  const arr = useSortedSpamMessageRequestsDefault();
  let obj1 = goToMessageRequestPreview(16883);
  const hasSingleMessageRequest = obj1.useListHasSingleSpamMessageRequest();
  useMountEffectDefault(() => {
    let obj = { num_spam_message_requests };
    obj.track(AnalyticEvents.SPAM_MESSAGE_REQUESTS_VIEWED, obj);
    obj = { name: MetricEvents.MetricEvents.SPAM_MESSAGE_REQUEST_VIEW };
    MonitoringAgentDefault.increment(obj);
  });
  if (0 === arr.length) {
    obj = { bodyText: null };
    let intl = tmp4(1114).intl;
    obj.bodyText = intl.string(tmp4(1114).t.hasFPQ);
    return closure_8(MessageRequestEmptyDefault, obj);
  } else {
    const items = ["header-section"];
    HermesBuiltin.arraySpread(arr, 1);
    const items1 = [tmp.list, ];
    let num = 0;
    if (tmp4Result.isAndroid()) {
      num = bottom;
    }
    obj = { style: null, scrollIndicatorInsets: null, contentContainerStyle: null, renderItem: null, data: null };
    obj1 = { marginBottom: num };
    items1[1] = obj1;
    obj.style = items1;
    obj.scrollIndicatorInsets = { right: 0.01 };
    const obj2 = { paddingBottom: bottom, paddingTop: 12 };
    obj.contentContainerStyle = obj2;
    obj.renderItem = function renderItem(item) {
      item = item.item;
      if (typeof item === "string") {
        let obj = { style: sectionContainer.sectionContainer, children: null };
        obj = { variant: "eyebrow", color: "text-default", children: null };
        const intl = goToMessageRequestPreview(num_spam_message_requests[6]).intl;
        obj = { count: arr.length };
        obj.children = intl.format(goToMessageRequestPreview(num_spam_message_requests[6]).t.aNh5Kf, obj);
        obj.children = closure_1_8(goToMessageRequestPreview(num_spam_message_requests[29]).Text, obj);
        let tmp11Result = closure_1_8(closure_1_5, obj);
      } else {
        const obj1 = {
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
        obj1.isLastRow = item.channel.id === id;
        obj1.hasSingleMessageRequest = hasSingleMessageRequest;
        tmp11Result = closure_1_8(PendingSpamMessageRequestRow, obj1, item.channel.id);
      }
      return tmp11Result;
    };
    obj.data = items;
    return closure_8(closure_6, obj);
  }
};