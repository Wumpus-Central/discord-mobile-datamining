// === Module 17071: SpamMessageList ===

// Module 17071 (SpamMessageList)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import transitionToChannel from "transitionToChannel" /* 4901 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5409 */;
import MetricEvents from "MetricEvents" /* 5414 */;
import useMountEffectDefault from "useMountEffect" /* 5590 */;
import useSortedSpamMessageRequestsDefault from "useSortedSpamMessageRequests" /* 17072 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, hasSingleMessageRequest, importDefault, obj1, tmp12, tmp13, tmp15, tmp4, tmp6, tmp7, tmp8;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
let tmp3;
const MessageRequestEmptyDefault = tmp3(17066);
({ ActivityIndicator: closure_4, View: hasOwnProperty, FlatList: metroRequire } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = "header-section";
let createStyles = createStyles_mod;
let obj = { sectionContainer: obj2, rowContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 14, marginBottom: 12 }, actionContainer: { flexDirection: "row", alignItems: "flex-start", height: "100%" }, actionButton: size, acceptButton: { marginRight: 16 }, pressableRow: obj3, activityIndicator: { height: 16, width: 16 }, list: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", justifyContent: "space-between", marginTop: 6, marginBottom: 10 };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
obj3 = { borderRadius: nativeDefault.radii.md };
obj4 = { flex: 1, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_11 = createStyles(obj);
const constants = { ACCEPT_SPAM_MESSAGE: "accept-spam-message-request", IGNORE_SPAM_MESSAGE: "ignore-spam-message-request", PREVIEW_SPAM_MESSAGE: "preview-spam-message-request" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_8;
  let goToMessageRequestPreview;
  let isAcceptLoading;
  let isLastRow;
  let isOptimisticAccepted;
  let isOptimisticRejected;
  let isRejectLoading;
  let isUserProfileLoading;
  let markAsNotSpam;
  let messageRequest;
  let tmp10;
  let tmp5;
  let user;
  let obj = goToMessageRequestPreview(user[8]);
  const cResult = obj.c(72);
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
    tmp5 = recipientId;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = goToMessageRequestPreview(user[9]);
  const longestChannelMessageBeforeReply = tmpResult.useLongestChannelMessageBeforeReply(id, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        let intl;
        const obj = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", content: intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4), icon: hasSingleMessageRequest(user[11]) };
        const open = hasSingleMessageRequest(user[10]).open;
        hasSingleMessageRequest(user[10]);
        intl = goToMessageRequestPreview(user[6]).intl;
        open(obj);
      }
    }
    cResult[2] = I;
  } else {
    class I {
      constructor() {
        let intl;
        const obj = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", content: intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4), icon: hasSingleMessageRequest(user[11]) };
        const open = hasSingleMessageRequest(user[10]).open;
        hasSingleMessageRequest(user[10]);
        intl = goToMessageRequestPreview(user[6]).intl;
        open(obj);
      }
    }
  }
  if (cResult[3] === id) {
    class I {
      constructor() {
        let intl;
        const obj = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", content: intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4), icon: hasSingleMessageRequest(user[11]) };
        const open = hasSingleMessageRequest(user[10]).open;
        hasSingleMessageRequest(user[10]);
        intl = goToMessageRequestPreview(user[6]).intl;
        open(obj);
      }
    }
    if (cResult[6] === tmp9) {
      class I {
        constructor() {
          let intl;
          const obj = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", content: intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4), icon: hasSingleMessageRequest(user[11]) };
          const open = hasSingleMessageRequest(user[10]).open;
          hasSingleMessageRequest(user[10]);
          intl = goToMessageRequestPreview(user[6]).intl;
          open(obj);
        }
      }
      const tmpResult2 = goToMessageRequestPreview(user[14]);
      const messageRequestActions = tmpResult2.useMessageRequestActions(tmp10);
      const rejectMessageRequest = messageRequestActions.rejectMessageRequest;
      ({ isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected, markAsNotSpam } = messageRequestActions);
      if (cResult[9] === channel.id) {
        class I {
          constructor() {
            let intl;
            const obj = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", content: intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4), icon: hasSingleMessageRequest(user[11]) };
            const open = hasSingleMessageRequest(user[10]).open;
            hasSingleMessageRequest(user[10]);
            intl = goToMessageRequestPreview(user[6]).intl;
            open(obj);
          }
        }
        if (cResult[12] === channel) {
          class I {
            constructor() {
              let intl;
              const obj = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", content: intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4), icon: hasSingleMessageRequest(user[11]) };
              const open = hasSingleMessageRequest(user[10]).open;
              hasSingleMessageRequest(user[10]);
              intl = goToMessageRequestPreview(user[6]).intl;
              open(obj);
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
          rejectMessageRequest(channel.id);
        }
      }
      cResult[9] = channel.id;
      cResult[10] = rejectMessageRequest;
      cResult[11] = L;
    }
    let obj2 = { user, onAcceptSuccess: tmp9, onError: I };
    cResult[6] = tmp9;
    cResult[7] = user;
    cResult[8] = obj2;
    tmp10 = obj2;
  }
  const fn = function f() {
    if (hasSingleMessageRequest) {
      const obj = transitionToChannel;
      obj.transitionToChannel(id);
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    }
  };
  cResult[3] = id;
  cResult[4] = hasSingleMessageRequest;
  cResult[5] = fn;
}) : ((isLastRow) => {
  let _undefined;
  let _undefined2;
  let c6;
  let c7;
  let handleAcceptMessageRequest;
  let handleRejectMessageRequest;
  let intl;
  let intl2;
  let intl3;
  let isAcceptLoading;
  let isOptimisticAccepted;
  let isOptimisticRejected;
  let isRejectLoading;
  let isUserProfileLoading;
  let items1;
  let items3;
  let messageRequest;
  let obj13;
  ({ messageRequest, goToMessageRequestPreview: require, hasSingleMessageRequest } = isLastRow);
  c6 = undefined;
  c7 = undefined;
  isLastRow = isLastRow.isLastRow;
  const tmp = closure_11();
  const str = messageRequest.user;
  const channel = messageRequest.channel;
  const id = channel.id;
  let obj = require("useLongestChannelMessageBeforeReply");
  let closure_5 = obj.useLongestChannelMessageBeforeReply(id, channel.getRecipientId());
  const items = [id, hasSingleMessageRequest];
  const callback = channel.useCallback(() => {
    let intl;
    const obj = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", content: intl.string(require("intl").t.pIQ3h4), icon: hasSingleMessageRequest(str[11]) };
    const open = hasSingleMessageRequest(str[10]).open;
    hasSingleMessageRequest(str[10]);
    intl = require("intl").intl;
    open(obj);
  }, []);
  const callback1 = channel.useCallback(() => {
    if (hasSingleMessageRequest) {
      const obj = transitionToChannel;
      obj.transitionToChannel(id);
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    }
  }, items);
  let obj2 = require("useMessageRequestActions");
  const messageRequestActions = obj2.useMessageRequestActions({ user: str, onAcceptSuccess: callback1, onError: callback });
  ({ rejectMessageRequest: c6, isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected, markAsNotSpam: c7 } = messageRequestActions);
  function handleSelectRow() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { is_spam: true, channel_id: channel.id, other_user_id: str.id };
    obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
    require();
  }
  const obj3 = {
    onPress: handleSelectRow,
    accessibilityRole: "button",
    accessibilityActions: items1,
    onAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if (constants.ACCEPT_SPAM_MESSAGE === actionName) {
        _undefined2(channel, closure_5);
      } else if (constants.IGNORE_SPAM_MESSAGE === actionName) {
        _undefined(channel.id);
      } else if (constants.PREVIEW_SPAM_MESSAGE === actionName) {
        const obj2 = { is_spam: true, channel_id: channel.id, other_user_id: str.id };
        const obj = AnalyticsUtilsDefault;
        obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
        require();
      }
    },
    style: tmp.pressableRow,
    children: null
  };
  const obj4 = { name: constants.ACCEPT_SPAM_MESSAGE, label: intl.string(require("intl").t.apePSa) };
  const PressableOpacity = require("Pressables").PressableOpacity;
  intl = require("intl").intl;
  items1 = [obj4, , ];
  const obj5 = { name: constants.IGNORE_SPAM_MESSAGE, label: intl2.string(require("intl").t.MWOV9D) };
  intl2 = require("intl").intl;
  items1[1] = obj5;
  const obj6 = { name: constants.PREVIEW_SPAM_MESSAGE, label: intl3.string(require("intl").t.I6PFLB) };
  intl3 = require("intl").intl;
  items1[2] = obj6;
  const obj7 = { style: tmp.rowContainer, children: null };
  const items2 = [, ];
  const obj8 = { channel: messageRequest.channel, otherUser: messageRequest.user };
  items2[0] = closure_8(hasSingleMessageRequest(str[16]), obj8);
  const obj9 = { style: tmp.actionContainer, children: null };
  const PressableOpacity2 = require("Pressables").PressableOpacity;
  const intl4 = require("intl").intl;
  const formatToPlainString = intl4.formatToPlainString;
  let str1;
  const v6p0yBo = require("intl").t["6p0yBo"];
  if (str != null) {
    str1 = str.toString();
  }
  const obj10 = { accessibilityRole: "button", accessibilityLabel: formatToPlainString(v6p0yBo, { name: str1 }), onPress: handleAcceptMessageRequest, disabled: isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected, style: items3, children: null };
  handleAcceptMessageRequest = function handleAcceptMessageRequest() {
    _undefined2(channel, closure_5);
  };
  items3 = [, ];
  ({ actionButton: arr4[0], acceptButton: arr4[1] } = tmp);
  if (!isAcceptLoading) {
    if (!isUserProfileLoading) {
      let tmp10Result;
      if (!isOptimisticAccepted) {
        const obj11 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[18]) };
        const Icon = require("native").Icon;
        tmp10Result = closure_8(Icon, obj11);
      }
      obj10.children = tmp10Result;
      const items4 = [closure_8(PressableOpacity2, obj10), ];
      const PressableOpacity3 = require("Pressables").PressableOpacity;
      const intl5 = require("intl").intl;
      const formatToPlainString2 = intl5.formatToPlainString;
      let str2;
      const prop = require("intl").t["C9Xe6+"];
      if (str != null) {
        str2 = str.toString();
      }
      const obj12 = { accessibilityRole: "button", accessibilityLabel: formatToPlainString2(prop, obj13), onPress: handleRejectMessageRequest, disabled: isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected, style: tmp.actionButton, children: null };
      handleRejectMessageRequest = function handleRejectMessageRequest() {
        _undefined(channel.id);
      };
      obj13 = { name: str2 };
      if (!isRejectLoading) {
        let tmp10Result3;
        if (!isOptimisticRejected) {
          const obj14 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[20]) };
          const Icon2 = require("native").Icon;
          tmp10Result3 = closure_8(Icon2, obj14);
        }
        obj12.children = tmp10Result3;
        items4[1] = closure_8(PressableOpacity3, obj12);
        obj9.children = items4;
        items2[1] = closure_9(closure_5, obj9);
        obj7.children = items2;
        const items5 = [closure_9(tmp9, obj7), ];
        let tmp10Result4 = null;
        if (!isLastRow) {
          tmp10Result4 = closure_8(require("Form").FormDivider, { iconPush: true, outer: true });
        }
        items5[1] = tmp10Result4;
        obj3.children = items5;
        return closure_9(PressableOpacity, obj3);
      }
      const obj15 = { style: tmp.activityIndicator };
      tmp10Result3 = closure_8(id, obj15);
    }
  }
  const obj16 = { style: tmp.activityIndicator };
  tmp10Result = closure_8(id, obj16);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((goToMessageRequestPreview) => {
  let intl;
  let sectionContainer;
  let spamMessageRequestCount;
  let tmp9;
  let obj = goToMessageRequestPreview(spamMessageRequestCount[8]);
  const cResult = obj.c(25);
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  const tmp5 = closure_11();
  importDefault = tmp5;
  const bottom = require("useSafeAreaInsets")().bottom;
  let obj2 = goToMessageRequestPreview(spamMessageRequestCount[23]);
  spamMessageRequestCount = obj2.useSpamMessageRequestCount();
  const arr = require("useSortedSpamMessageRequests")();
  let obj3 = goToMessageRequestPreview(spamMessageRequestCount[25]);
  const listHasSingleSpamMessageRequest = obj3.useListHasSingleSpamMessageRequest();
  if (cResult[0] !== spamMessageRequestCount) {
    const fn = function n() {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { num_spam_message_requests: spamMessageRequestCount };
      obj.track(AnalyticEvents.SPAM_MESSAGE_REQUESTS_VIEWED, obj2);
      const obj3 = MonitoringAgentDefault;
      const obj4 = { name: MetricEvents.MetricEvents.SPAM_MESSAGE_REQUEST_VIEW };
      obj3.increment(obj4);
    };
    cResult[0] = spamMessageRequestCount;
    cResult[1] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  require("useMountEffect")(tmp9);
  if (0 === arr.length) {
    let tmp29;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      let obj4 = { bodyText: intl.string(goToMessageRequestPreview(spamMessageRequestCount[6]).t.hasFPQ) };
      const tmp6Result = require("MessageRequestEmpty");
      intl = tmp2(tmp3[6]).intl;
      const tmp32 = closure_8(tmp6Result, obj4);
      cResult[2] = tmp32;
      tmp29 = tmp32;
    } else {
      tmp29 = cResult[2];
    }
    return tmp29;
  } else {
    let tmp11;
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
            Text = goToMessageRequestPreview(closure_2[30]).Text;
            intl = goToMessageRequestPreview(closure_2[6]).intl;
            obj5 = { count: null };
            tmp10 = closure_3;
            obj5.count = closure_3.length;
            obj1.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.aNh5Kf, obj5);
            obj.children = closure_1_8(Text, obj1);
            tmp11Result = closure_1_8(closure_1_5, obj);
          } else {
            obj6 = { messageRequest: null, goToMessageRequestPreview: null, isLastRow: null, hasSingleMessageRequest: null };
            obj6.messageRequest = item;
            obj6.goToMessageRequestPreview = function goToMessageRequestPreview() {
              return goToMessageRequestPreview(item.channel.id);
            };
            tmp13 = closure_3;
            num = 1;
            tmp14 = closure_3[closure_3.length - 1];
            tmp15 = null;
            id1 = undefined;
            tmp11 = closure_1_8;
            tmp12 = closure_1_13;
            id = item.channel.id;
            if (tmp14 != null) {
              id1 = tmp14.channel.id;
            }
            obj6.isLastRow = id === id1;
            tmp2 = closure_4;
            obj6.hasSingleMessageRequest = closure_4;
            tmp11Result = tmp11(tmp12, obj6, item.channel.id);
          }
          return tmp11Result;
        }
      }
      const tmp14 = arr;
      HermesBuiltin.arraySpread(items, arr, 1);
      cResult[3] = arr;
      cResult[4] = items;
      tmp11 = items;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] === goToMessageRequestPreview) {
      if (cResult[6] === listHasSingleSpamMessageRequest) {
        if (cResult[7] === arr) {
          let tmp16;
          if (cResult[8] === tmp5.sectionContainer) {
            tmp16 = cResult[9];
          }
          if (cResult[10] !== bottom) {
            goToMessageRequestPreview(spamMessageRequestCount[31]);
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
                  Text = goToMessageRequestPreview(closure_2[30]).Text;
                  intl = goToMessageRequestPreview(closure_2[6]).intl;
                  obj5 = { count: null };
                  tmp10 = closure_3;
                  obj5.count = closure_3.length;
                  obj1.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.aNh5Kf, obj5);
                  obj.children = closure_1_8(Text, obj1);
                  tmp11Result = closure_1_8(closure_1_5, obj);
                } else {
                  obj6 = { messageRequest: null, goToMessageRequestPreview: null, isLastRow: null, hasSingleMessageRequest: null };
                  obj6.messageRequest = item;
                  obj6.goToMessageRequestPreview = function goToMessageRequestPreview() {
                    return goToMessageRequestPreview(item.channel.id);
                  };
                  tmp13 = closure_3;
                  num = 1;
                  tmp14 = closure_3[closure_3.length - 1];
                  tmp15 = null;
                  id1 = undefined;
                  tmp11 = closure_1_8;
                  tmp12 = closure_1_13;
                  id = item.channel.id;
                  if (tmp14 != null) {
                    id1 = tmp14.channel.id;
                  }
                  obj6.isLastRow = id === id1;
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
                Text = goToMessageRequestPreview(closure_2[30]).Text;
                intl = goToMessageRequestPreview(closure_2[6]).intl;
                obj5 = { count: null };
                tmp10 = closure_3;
                obj5.count = closure_3.length;
                obj1.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.aNh5Kf, obj5);
                obj.children = closure_1_8(Text, obj1);
                tmp11Result = closure_1_8(closure_1_5, obj);
              } else {
                obj6 = { messageRequest: null, goToMessageRequestPreview: null, isLastRow: null, hasSingleMessageRequest: null };
                obj6.messageRequest = item;
                obj6.goToMessageRequestPreview = function goToMessageRequestPreview() {
                  return goToMessageRequestPreview(item.channel.id);
                };
                tmp13 = closure_3;
                num = 1;
                tmp14 = closure_3[closure_3.length - 1];
                tmp15 = null;
                id1 = undefined;
                tmp11 = closure_1_8;
                tmp12 = closure_1_13;
                id = item.channel.id;
                if (tmp14 != null) {
                  id1 = tmp14.channel.id;
                }
                obj6.isLastRow = id === id1;
                tmp2 = closure_4;
                obj6.hasSingleMessageRequest = closure_4;
                tmp11Result = tmp11(tmp12, obj6, item.channel.id);
              }
              return tmp11Result;
            }
          }
          if (cResult[14] === tmp5.list) {
            let tmp20;
            let tmp22;
            let tmp23;
            if (cResult[15] === tmp19) {
              tmp20 = cResult[16];
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
                  Text = goToMessageRequestPreview(closure_2[30]).Text;
                  intl = goToMessageRequestPreview(closure_2[6]).intl;
                  obj5 = { count: null };
                  tmp10 = closure_3;
                  obj5.count = closure_3.length;
                  obj1.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.aNh5Kf, obj5);
                  obj.children = closure_1_8(Text, obj1);
                  tmp11Result = closure_1_8(closure_1_5, obj);
                } else {
                  obj6 = { messageRequest: null, goToMessageRequestPreview: null, isLastRow: null, hasSingleMessageRequest: null };
                  obj6.messageRequest = item;
                  obj6.goToMessageRequestPreview = function goToMessageRequestPreview() {
                    return goToMessageRequestPreview(item.channel.id);
                  };
                  tmp13 = closure_3;
                  num = 1;
                  tmp14 = closure_3[closure_3.length - 1];
                  tmp15 = null;
                  id1 = undefined;
                  tmp11 = closure_1_8;
                  tmp12 = closure_1_13;
                  id = item.channel.id;
                  if (tmp14 != null) {
                    id1 = tmp14.channel.id;
                  }
                  obj6.isLastRow = id === id1;
                  tmp2 = closure_4;
                  obj6.hasSingleMessageRequest = closure_4;
                  tmp11Result = tmp11(tmp12, obj6, item.channel.id);
                }
                return tmp11Result;
              }
            }
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = { right: 0.01 };
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
                    Text = goToMessageRequestPreview(closure_2[30]).Text;
                    intl = goToMessageRequestPreview(closure_2[6]).intl;
                    obj5 = { count: null };
                    tmp10 = closure_3;
                    obj5.count = closure_3.length;
                    obj1.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.aNh5Kf, obj5);
                    obj.children = closure_1_8(Text, obj1);
                    tmp11Result = closure_1_8(closure_1_5, obj);
                  } else {
                    obj6 = { messageRequest: null, goToMessageRequestPreview: null, isLastRow: null, hasSingleMessageRequest: null };
                    obj6.messageRequest = item;
                    obj6.goToMessageRequestPreview = function goToMessageRequestPreview() {
                      return goToMessageRequestPreview(item.channel.id);
                    };
                    tmp13 = closure_3;
                    num = 1;
                    tmp14 = closure_3[closure_3.length - 1];
                    tmp15 = null;
                    id1 = undefined;
                    tmp11 = closure_1_8;
                    tmp12 = closure_1_13;
                    id = item.channel.id;
                    if (tmp14 != null) {
                      id1 = tmp14.channel.id;
                    }
                    obj6.isLastRow = id === id1;
                    tmp2 = closure_4;
                    obj6.hasSingleMessageRequest = closure_4;
                    tmp11Result = tmp11(tmp12, obj6, item.channel.id);
                  }
                  return tmp11Result;
                }
              }
              tmp22 = obj5;
            } else {
              tmp22 = cResult[17];
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
                    Text = goToMessageRequestPreview(closure_2[30]).Text;
                    intl = goToMessageRequestPreview(closure_2[6]).intl;
                    obj5 = { count: null };
                    tmp10 = closure_3;
                    obj5.count = closure_3.length;
                    obj1.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.aNh5Kf, obj5);
                    obj.children = closure_1_8(Text, obj1);
                    tmp11Result = closure_1_8(closure_1_5, obj);
                  } else {
                    obj6 = { messageRequest: null, goToMessageRequestPreview: null, isLastRow: null, hasSingleMessageRequest: null };
                    obj6.messageRequest = item;
                    obj6.goToMessageRequestPreview = function goToMessageRequestPreview() {
                      return goToMessageRequestPreview(item.channel.id);
                    };
                    tmp13 = closure_3;
                    num = 1;
                    tmp14 = closure_3[closure_3.length - 1];
                    tmp15 = null;
                    id1 = undefined;
                    tmp11 = closure_1_8;
                    tmp12 = closure_1_13;
                    id = item.channel.id;
                    if (tmp14 != null) {
                      id1 = tmp14.channel.id;
                    }
                    obj6.isLastRow = id === id1;
                    tmp2 = closure_4;
                    obj6.hasSingleMessageRequest = closure_4;
                    tmp11Result = tmp11(tmp12, obj6, item.channel.id);
                  }
                  return tmp11Result;
                }
              }
              cResult[18] = bottom;
              cResult[19] = obj6;
              tmp23 = obj6;
            } else {
              tmp23 = cResult[19];
            }
            if (cResult[20] === tmp11) {
              if (cResult[21] === tmp16) {
                if (cResult[22] === tmp20) {
                  let tmp24;
                  if (cResult[23] === tmp23) {
                    tmp24 = cResult[24];
                  }
                  return tmp24;
                }
              }
            }
            const obj7 = { style: tmp20, scrollIndicatorInsets: tmp22, contentContainerStyle: tmp23, renderItem: tmp16, data: tmp11 };
            const tmp27 = closure_8(closure_6, obj7);
            cResult[20] = tmp11;
            cResult[21] = tmp16;
            cResult[22] = tmp20;
            cResult[23] = tmp23;
            cResult[24] = tmp27;
            tmp24 = tmp27;
          }
          const items1 = [tmp5.list, tmp19];
          cResult[14] = tmp5.list;
          cResult[15] = tmp19;
          cResult[16] = items1;
          tmp20 = items1;
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
          Text = goToMessageRequestPreview(closure_2[30]).Text;
          intl = goToMessageRequestPreview(closure_2[6]).intl;
          obj5 = { count: null };
          tmp10 = closure_3;
          obj5.count = closure_3.length;
          obj1.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.aNh5Kf, obj5);
          obj.children = closure_1_8(Text, obj1);
          tmp11Result = closure_1_8(closure_1_5, obj);
        } else {
          obj6 = { messageRequest: null, goToMessageRequestPreview: null, isLastRow: null, hasSingleMessageRequest: null };
          obj6.messageRequest = item;
          obj6.goToMessageRequestPreview = function goToMessageRequestPreview() {
            return goToMessageRequestPreview(item.channel.id);
          };
          tmp13 = closure_3;
          num = 1;
          tmp14 = closure_3[closure_3.length - 1];
          tmp15 = null;
          id1 = undefined;
          tmp11 = closure_1_8;
          tmp12 = closure_1_13;
          id = item.channel.id;
          if (tmp14 != null) {
            id1 = tmp14.channel.id;
          }
          obj6.isLastRow = id === id1;
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
    cResult[8] = tmp5.sectionContainer;
    cResult[9] = I;
    tmp16 = I;
  }
}) : ((goToMessageRequestPreview) => {
  let intl;
  let num_spam_message_requests;
  let obj6;
  let sectionContainer;
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  const tmp2 = closure_11();
  importDefault = tmp2;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = goToMessageRequestPreview(17065);
  dependencyMap = obj.useSpamMessageRequestCount();
  const arr = useSortedSpamMessageRequestsDefault();
  let obj2 = goToMessageRequestPreview(17063);
  hasSingleMessageRequest = obj2.useListHasSingleSpamMessageRequest();
  useMountEffectDefault(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { num_spam_message_requests };
    obj.track(AnalyticEvents.SPAM_MESSAGE_REQUESTS_VIEWED, obj2);
    const obj3 = MonitoringAgentDefault;
    const obj4 = { name: MetricEvents.MetricEvents.SPAM_MESSAGE_REQUEST_VIEW };
    obj3.increment(obj4);
  });
  if (0 === arr.length) {
    let obj3 = { bodyText: intl.string(goToMessageRequestPreview(1126).t.hasFPQ) };
    const tmp3Result = MessageRequestEmptyDefault;
    intl = tmp5(1126).intl;
    return closure_8(tmp3Result, obj3);
  } else {
    const items = [c10];
    HermesBuiltin.arraySpread(items, arr, 1);
    const items1 = [tmp2.list, ];
    let num = 0;
    const tmp5Result = goToMessageRequestPreview(1369);
    if (tmp5Result.isAndroid()) {
      num = bottom;
    }
    let obj4 = {
      style: items1,
      scrollIndicatorInsets: { right: 0.01 },
      contentContainerStyle: obj6,
      renderItem(item) {
          let Text;
          let id;
          let id1;
          let intl;
          let obj2;
          let obj3;
          let tmp11Result;
          item = item.item;
          if (typeof item === "string") {
            const obj = { style: sectionContainer.sectionContainer, children: closure_1_8(Text, obj2) };
            obj2 = { variant: "eyebrow", color: "text-default", children: intl.format(goToMessageRequestPreview(num_spam_message_requests[6]).t.aNh5Kf, obj3) };
            Text = goToMessageRequestPreview(num_spam_message_requests[30]).Text;
            intl = goToMessageRequestPreview(num_spam_message_requests[6]).intl;
            obj3 = { count: arr.length };
            tmp11Result = closure_1_8(closure_1_5, obj);
          } else {
            const obj4 = {
              messageRequest: item,
              goToMessageRequestPreview() {
                  return goToMessageRequestPreview(item.channel.id);
                },
              isLastRow: id === id1,
              hasSingleMessageRequest
            };
            id1 = undefined;
            id = item.channel.id;
            if (arr[arr.length - 1] != null) {
              id1 = tmp14.channel.id;
            }
            tmp11Result = closure_1_8(closure_1_13, obj4, item.channel.id);
          }
          return tmp11Result;
        },
      data: items
    };
    const obj5 = { marginBottom: num };
    items1[1] = obj5;
    obj6 = { paddingBottom: bottom, paddingTop: 12 };
    return closure_8(closure_6, obj4);
  }
});
size = size_mod;
const result = size.fileFinishedImporting("modules/message_request/native/spam/SpamMessageList.tsx");

export default tmp5;