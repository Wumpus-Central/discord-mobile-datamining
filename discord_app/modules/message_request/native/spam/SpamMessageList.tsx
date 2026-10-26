// === Module 18355: SpamMessageList ===

// Module 18355 (SpamMessageList)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import transitionToChannel from "transitionToChannel" /* 5707 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 6468 */;
import MetricEvents from "MetricEvents" /* 6473 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const AnalyticEvents = fn(1087).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4971);
let obj2 = { sectionContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", justifyContent: "space-between", marginTop: 6, marginBottom: 10 }, rowContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 14, marginBottom: 12 }, actionContainer: { flexDirection: "row", alignItems: "flex-start", height: "100%" }, actionButton: null, acceptButton: null, pressableRow: null, activityIndicator: null, list: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
obj2.actionButton = size;
obj2.acceptButton = { marginRight: 16 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", justifyContent: "space-between", marginTop: 6, marginBottom: 10 };
obj2.pressableRow = { borderRadius: nativeDefault.radii.md };
obj2.activityIndicator = { height: 16, width: 16 };
let obj4 = { borderRadius: nativeDefault.radii.md };
obj2.list = { flex: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_9 = createStyles.createStyles(obj2);
const constants = { ACCEPT_SPAM_MESSAGE: "accept-spam-message-request", IGNORE_SPAM_MESSAGE: "ignore-spam-message-request", PREVIEW_SPAM_MESSAGE: "preview-spam-message-request" };
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function PendingSpamMessageRequestRow(arg0) {
  const cResult = goToMessageRequestPreview(user[8]).c(72);
  ({ messageRequest, goToMessageRequestPreview } = arg0);
  ({ isLastRow, hasSingleMessageRequest } = arg0);
  closure_9();
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
  const longestChannelMessageBeforeReply = goToMessageRequestPreview(user[9]).useLongestChannelMessageBeforeReply(id, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        obj = hasSingleMessageRequest(user[10]);
        obj1 = { text: null, variant: "critical" };
        intl = goToMessageRequestPreview(user[6]).intl;
        obj1.text = intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4);
        openResult = obj.open("MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", obj1);
        return;
      }
    }
    cResult[2] = C;
  } else {
    class C {
      constructor() {
        obj = hasSingleMessageRequest(user[10]);
        obj1 = { text: null, variant: "critical" };
        intl = goToMessageRequestPreview(user[6]).intl;
        obj1.text = intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4);
        openResult = obj.open("MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", obj1);
        return;
      }
    }
  }
  if (cResult[3] === id) {
    class C {
      constructor() {
        obj = hasSingleMessageRequest(user[10]);
        obj1 = { text: null, variant: "critical" };
        intl = goToMessageRequestPreview(user[6]).intl;
        obj1.text = intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4);
        openResult = obj.open("MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", obj1);
        return;
      }
    }
    if (cResult[6] === tmp9) {
      class C {
        constructor() {
          obj = hasSingleMessageRequest(user[10]);
          obj1 = { text: null, variant: "critical" };
          intl = goToMessageRequestPreview(user[6]).intl;
          obj1.text = intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4);
          openResult = obj.open("MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", obj1);
          return;
        }
      }
      const messageRequestActions = goToMessageRequestPreview(tmp2[13]).useMessageRequestActions(tmp10);
      const rejectMessageRequest = messageRequestActions.rejectMessageRequest;
      ({ isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected, markAsNotSpam } = messageRequestActions);
      if (cResult[9] === channel.id) {
        class C {
          constructor() {
            obj = hasSingleMessageRequest(user[10]);
            obj1 = { text: null, variant: "critical" };
            intl = goToMessageRequestPreview(user[6]).intl;
            obj1.text = intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4);
            openResult = obj.open("MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", obj1);
            return;
          }
        }
        if (cResult[12] === channel) {
          class C {
            constructor() {
              obj = hasSingleMessageRequest(user[10]);
              obj1 = { text: null, variant: "critical" };
              intl = goToMessageRequestPreview(user[6]).intl;
              obj1.text = intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4);
              openResult = obj.open("MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", obj1);
              return;
            }
          }
        }
        function handleAcceptMessageRequest() {
          markAsNotSpam(channel, longestChannelMessageBeforeReply);
        }
        cResult[12] = channel;
        cResult[13] = markAsNotSpam;
        cResult[14] = longestChannelMessageBeforeReply;
        cResult[15] = handleAcceptMessageRequest;
      }
      function handleRejectMessageRequest() {
        rejectMessageRequest(channel.id);
      }
      cResult[9] = channel.id;
      cResult[10] = rejectMessageRequest;
      cResult[11] = handleRejectMessageRequest;
      const tmpResult2 = goToMessageRequestPreview(tmp2[13]);
    }
    let obj2 = { user, onAcceptSuccess: tmp9, onError: C };
    cResult[6] = tmp9;
    cResult[7] = user;
    cResult[8] = obj2;
    tmp10 = obj2;
  }
  const fn = function v() {
    if (hasSingleMessageRequest) {
      transitionToChannel.transitionToChannel(id);
      ModalActionCreatorsDefault.pop();
    }
  };
  cResult[3] = id;
  cResult[4] = hasSingleMessageRequest;
  cResult[5] = fn;
  const tmpResult = goToMessageRequestPreview(user[9]);
}) : (function PendingSpamMessageRequestRow(isLastRow) {
  ({ messageRequest, goToMessageRequestPreview: require, hasSingleMessageRequest } = isLastRow);
  c6 = undefined;
  c7 = undefined;
  const tmp = closure_9();
  const str = messageRequest.user;
  const channel = messageRequest.channel;
  const id = channel.id;
  closure_5 = require("useLongestChannelMessageBeforeReply").useLongestChannelMessageBeforeReply(id, channel.getRecipientId());
  const items = [id, hasSingleMessageRequest];
  const callback = channel.useCallback(() => {
    const obj2 = { text: null, variant: "critical" };
    const intl = require("util").intl;
    obj2.text = intl.string(require("util").t.pIQ3h4);
    hasSingleMessageRequest(str[10]).open("MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", obj2);
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
  obj3.onAccessibilityAction = function handleAccessibilityAction(nativeEvent) {
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
  const items2 = [c7(hasSingleMessageRequest(str[15]), { channel: messageRequest.channel, otherUser: messageRequest.user }), ];
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
        let tmp10Result = tmp10(require("native").Icon, obj11);
      }
      obj10.children = tmp10Result;
      const items4 = [tmp10(require("Pressables").PressableOpacity, obj10), ];
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
          const obj14 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(tmp3[19]) };
          let tmp10Result3 = tmp10(require("native").Icon, obj14);
        }
        obj12.children = tmp10Result3;
        items4[1] = tmp10(require("Pressables").PressableOpacity, obj12);
        obj9.children = items4;
        items2[1] = closure_8(tmp9, obj9);
        obj7.children = items2;
        const items5 = [closure_8(tmp9, obj7), ];
        let tmp10Result4 = null;
        if (!isLastRow.isLastRow) {
          tmp10Result4 = tmp10(require("Form").FormDivider, { iconPush: true, outer: true });
        }
        items5[1] = tmp10Result4;
        obj3.children = items5;
        return closure_8(require("Pressables").PressableOpacity, obj3);
      }
      const obj15 = { style: tmp.activityIndicator };
      tmp10Result3 = tmp10(id, obj15);
    }
  }
  tmp10Result = tmp10(id, { style: tmp.activityIndicator });
  const obj16 = { style: tmp.activityIndicator };
  let obj2 = require("useMessageRequestActions");
  const obj8 = { channel: messageRequest.channel, otherUser: messageRequest.user };
});
ReactCompilerGating = fn(558);
let obj5 = { flex: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/spam/SpamMessageList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SpamMessageList(goToMessageRequestPreview) {
  const cResult = goToMessageRequestPreview(data[8]).c(31);
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  const tmp4 = closure_9();
  const bottom = spamMessageRequestCount(data[21])().bottom;
  let obj = goToMessageRequestPreview(data[8]);
  spamMessageRequestCount = goToMessageRequestPreview(data[22]).useSpamMessageRequestCount();
  data = spamMessageRequestCount(data[23])();
  let obj2 = goToMessageRequestPreview(data[22]);
  const listHasSingleSpamMessageRequest = goToMessageRequestPreview(data[24]).useListHasSingleSpamMessageRequest();
  if (cResult[0] !== spamMessageRequestCount) {
    const fn = function n() {
      AnalyticsUtilsDefault.track(AnalyticEvents.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: spamMessageRequestCount });
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
  spamMessageRequestCount(data[27])(tmp8);
  if (0 === data.length) {
    const _Symbol3 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { bodyText: null };
      const intl2 = tmp(tmp2[6]).intl;
      obj4.bodyText = intl2.string(tmp(tmp2[6]).t.hasFPQ);
      const tmp34 = closure_7(tmp5(tmp2[28]), obj4);
      cResult[2] = tmp34;
      let tmp31 = tmp34;
      const tmp5Result = tmp5(tmp2[28]);
    } else {
      tmp31 = cResult[2];
    }
    return tmp31;
  } else {
    if (cResult[3] === goToMessageRequestPreview) {
      if (cResult[4] === listHasSingleSpamMessageRequest) {
        if (cResult[5] === data) {
          let tmp10 = cResult[6];
        }
        if (cResult[7] !== bottom) {
          let num7 = 0;
          if (tmpResult.isAndroid()) {
            num7 = bottom;
          }
          cResult[7] = bottom;
          cResult[8] = num7;
          let tmp11 = num7;
          tmpResult = tmp(tmp2[29]);
        } else {
          tmp11 = cResult[8];
        }
        if (cResult[9] !== tmp11) {
          const obj5 = { marginBottom: tmp11 };
          cResult[9] = tmp11;
          cResult[10] = obj5;
          let tmp12 = obj5;
        } else {
          tmp12 = cResult[10];
        }
        if (cResult[11] === tmp4.list) {
          if (cResult[12] === tmp12) {
            let tmp13 = cResult[13];
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { right: 0.01 };
            cResult[14] = obj6;
            let tmp15 = obj6;
          } else {
            tmp15 = cResult[14];
          }
          if (cResult[15] !== bottom) {
            const obj7 = { paddingHorizontal: 16, paddingBottom: bottom, paddingTop: 12 };
            cResult[15] = bottom;
            cResult[16] = obj7;
            let tmp16 = obj7;
          } else {
            tmp16 = cResult[16];
          }
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function f(channel) {
              return channel.channel.id;
            };
            cResult[17] = fn2;
            let tmp17 = fn2;
          } else {
            tmp17 = cResult[17];
          }
          if (cResult[18] !== data.length) {
            const intl = tmp(tmp2[6]).intl;
            const obj8 = { count: data.length };
            const formatResult = intl.format(tmp(tmp2[6]).t.aNh5Kf, obj8);
            cResult[18] = data.length;
            cResult[19] = formatResult;
            let tmp18 = formatResult;
          } else {
            tmp18 = cResult[19];
          }
          if (cResult[20] !== tmp18) {
            const obj9 = { variant: "eyebrow", color: "text-default", children: tmp18 };
            const tmp22 = closure_7(tmp(tmp2[30]).Text, obj9);
            cResult[20] = tmp18;
            cResult[21] = tmp22;
            let tmp20 = tmp22;
          } else {
            tmp20 = cResult[21];
          }
          if (cResult[22] === tmp4.sectionContainer) {
            if (cResult[23] === tmp20) {
              let tmp23 = cResult[24];
            }
            if (cResult[25] === tmp10) {
              if (cResult[26] === data) {
                if (cResult[27] === tmp23) {
                  if (cResult[28] === tmp13) {
                    if (cResult[29] === tmp16) {
                      let tmp27 = cResult[30];
                    }
                    return tmp27;
                  }
                }
              }
            }
            const obj10 = { style: tmp13, scrollIndicatorInsets: tmp15, contentContainerStyle: tmp16, renderItem: tmp10, data, keyExtractor: tmp17, ListHeaderComponent: tmp23 };
            const tmp29 = closure_7(tmp(tmp2[31]).FlashList, obj10);
            cResult[25] = tmp10;
            cResult[26] = data;
            cResult[27] = tmp23;
            cResult[28] = tmp13;
            cResult[29] = tmp16;
            cResult[30] = tmp29;
            tmp27 = tmp29;
          }
          const obj11 = { style: tmp4.sectionContainer, children: tmp20 };
          const tmp26 = closure_7(closure_5, obj11);
          cResult[22] = tmp4.sectionContainer;
          cResult[23] = tmp20;
          cResult[24] = tmp26;
          tmp23 = tmp26;
        }
        const items = [tmp4.list, tmp12];
        cResult[11] = tmp4.list;
        cResult[12] = tmp12;
        cResult[13] = items;
        tmp13 = items;
      }
    }
    function renderData(item) {
      item = item.item;
      const obj = {
        messageRequest: item,
        goToMessageRequestPreview() {
          return goToMessageRequestPreview(item.channel.id);
        },
        isLastRow: null,
        hasSingleMessageRequest: null
      };
      let id;
      if (arr[arr.length - 1] != null) {
        id = tmp3.channel.id;
      }
      obj.isLastRow = item.channel.id === id;
      obj.hasSingleMessageRequest = listHasSingleSpamMessageRequest;
      return closure_1_7(closure_1_11, obj, item.channel.id);
    }
    cResult[3] = goToMessageRequestPreview;
    cResult[4] = listHasSingleSpamMessageRequest;
    cResult[5] = data;
    cResult[6] = renderData;
    tmp10 = renderData;
  }
  let obj3 = goToMessageRequestPreview(data[24]);
}) : (function SpamMessageList(goToMessageRequestPreview) {
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  importDefault = undefined;
  let data;
  const tmp = closure_9();
  const bottom = require("useSafeAreaInsets")().bottom;
  importDefault = goToMessageRequestPreview(data[22]).useSpamMessageRequestCount();
  data = require("useSortedSpamMessageRequests")();
  let obj = goToMessageRequestPreview(data[22]);
  const tmp2 = importDefault;
  const hasSingleMessageRequest = goToMessageRequestPreview(data[24]).useListHasSingleSpamMessageRequest();
  require("useMountEffect")(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests });
    const obj2 = { num_spam_message_requests };
    const obj3 = MonitoringAgentDefault;
    obj3.increment({ name: MetricEvents.MetricEvents.SPAM_MESSAGE_REQUEST_VIEW });
  });
  if (0 === data.length) {
    let obj3 = { bodyText: null };
    const intl2 = tmp4(tmp3[6]).intl;
    obj3.bodyText = intl2.string(tmp4(tmp3[6]).t.hasFPQ);
    let tmp10Result = closure_7(tmp2(tmp3[28]), obj3);
    const tmp2Result = tmp2(tmp3[28]);
  } else {
    const items = [tmp.list, ];
    let num = 0;
    if (tmp4Result.isAndroid()) {
      num = bottom;
    }
    const obj4 = { style: null, scrollIndicatorInsets: null, contentContainerStyle: null, renderItem: null, data: null, keyExtractor: null, ListHeaderComponent: null };
    const obj5 = { marginBottom: num };
    items[1] = obj5;
    obj4.style = items;
    obj4.scrollIndicatorInsets = { right: 0.01 };
    const obj6 = { paddingHorizontal: 16, paddingBottom: bottom, paddingTop: 12 };
    obj4.contentContainerStyle = obj6;
    obj4.renderItem = function renderData(item) {
      item = item.item;
      const obj = {
        messageRequest: item,
        goToMessageRequestPreview() {
          return goToMessageRequestPreview(item.channel.id);
        },
        isLastRow: null,
        hasSingleMessageRequest: null
      };
      let id;
      if (arr[arr.length - 1] != null) {
        id = tmp3.channel.id;
      }
      obj.isLastRow = item.channel.id === id;
      obj.hasSingleMessageRequest = hasSingleMessageRequest;
      return closure_1_7(closure_1_11, obj, item.channel.id);
    };
    obj4.data = data;
    obj4.keyExtractor = function keyExtractor(channel) {
      return channel.channel.id;
    };
    const obj7 = { style: tmp.sectionContainer, children: null };
    const obj8 = { variant: "eyebrow", color: "text-default", children: null };
    const intl = tmp4(tmp3[6]).intl;
    const obj9 = { count: data.length };
    obj8.children = intl.format(tmp4(tmp3[6]).t.aNh5Kf, obj9);
    obj7.children = closure_7(tmp4(tmp3[30]).Text, obj8);
    obj4.ListHeaderComponent = closure_7(closure_5, obj7);
    tmp10Result = closure_7(tmp4(tmp3[31]).FlashList, obj4);
    tmp4Result = tmp4(tmp3[29]);
  }
  return tmp10Result;
});