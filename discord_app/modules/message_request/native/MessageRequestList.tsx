// === Module 16875: MessageRequestList ===

// Module 16875 (MessageRequestList)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import noop from "module_19" /* 19 */;

require = fn;
function PendingMessageRequestRow(isRestricted) {
  ({ messageRequest, goToMessageRequestPreview: require, hasSingleMessageRequest } = isRestricted);
  let flag = isRestricted.isRestricted;
  if (flag === undefined) {
    flag = false;
  }
  c5 = undefined;
  c6 = undefined;
  const tmp = closure_10();
  let str = messageRequest.user;
  const channel = messageRequest.channel;
  const id = channel.id;
  const items = [id, hasSingleMessageRequest];
  const callback = channel.useCallback(() => {
    hasSingleMessageRequest(str[7]);
    const obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
    const intl = require("util").intl;
    obj.content = intl.string(require("util").t["EDYbS+"]);
    obj.icon = hasSingleMessageRequest(str[8]);
    obj.open(obj);
  }, []);
  const callback1 = channel.useCallback(() => {
    if (hasSingleMessageRequest) {
      transitionToChannel.transitionToChannel(id);
      let arr = ModalActionCreatorsDefault;
      arr = arr.pop();
    }
  }, items);
  let obj = require("useMessageRequestActions");
  const messageRequestActions = obj.useMessageRequestActions({ user: str, onAcceptSuccess: callback1, onError: callback });
  ({ acceptMessageRequest: c5, rejectMessageRequest: c6, isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected } = messageRequestActions);
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
    const obj = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
    obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj);
    require();
  }
  obj = { onPress: handleSelectRow, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null, style: null, children: null };
  obj = { name: constants.ACCEPT_MESSAGE_REQUEST, label: null };
  let intl = tmp4(tmp5[6]).intl;
  obj.label = intl.string(require("util").t.hSLLWi);
  const items1 = [obj, , ];
  const obj1 = { name: constants.IGNORE_MESSAGE_REQUEST, label: null };
  const intl2 = tmp4(tmp5[6]).intl;
  obj1.label = intl2.string(require("util").t.fIBuSD);
  items1[1] = obj1;
  const obj2 = { name: constants.PREVIEW_MESSAGE_REQUEST, label: null };
  const intl3 = tmp4(tmp5[6]).intl;
  obj2.label = intl3.string(require("util").t.HjgsKJ);
  items1[2] = obj2;
  obj.accessibilityActions = items1;
  obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (constants.ACCEPT_MESSAGE_REQUEST === actionName) {
      _undefined(channel.id);
    } else if (tmp.IGNORE_MESSAGE_REQUEST === actionName) {
      _undefined2(channel.id);
    } else if (tmp.PREVIEW_MESSAGE_REQUEST === actionName) {
      const obj = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
      obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj);
      require();
    }
  };
  obj.style = tmp.pressableRow;
  const obj3 = { style: tmp.rowContainer, children: null };
  const items2 = [closure_8(hasSingleMessageRequest(str[14]), { channel: messageRequest.channel, otherUser: messageRequest.user, isRestricted: flag }), ];
  const obj5 = { style: tmp.actionContainer, children: null };
  const intl4 = tmp4(tmp5[6]).intl;
  str = undefined;
  if (str != null) {
    str = str.toString();
  }
  const obj6 = { accessibilityRole: "button", accessibilityLabel: intl4.formatToPlainString(require("util").t["6p0yBo"], { name: str }), onPress: null, disabled: tmp7, style: null, children: null };
  function handleAcceptMessageRequest() {
    _undefined(channel.id);
  }
  obj6.onPress = handleAcceptMessageRequest;
  const items3 = [tmp.actionButton, flag ? tmp.acceptButtonRestricted : tmp.acceptButton];
  obj6.style = items3;
  if (!isAcceptLoading) {
    if (!isUserProfileLoading) {
      if (!isOptimisticAccepted) {
        const obj7 = { size: tmp4(tmp5[15]).Icon.Sizes.SMALL, disableColor: true, source: tmp11(tmp5[16]) };
        let tmp10Result = tmp10(tmp4(tmp5[15]).Icon, obj7);
      }
      obj6.children = tmp10Result;
      const items4 = [tmp10(tmp4(tmp5[13]).PressableOpacity, obj6), ];
      const intl5 = tmp4(tmp5[6]).intl;
      let str1;
      if (str != null) {
        str1 = str.toString();
      }
      const obj8 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, disabled: null, style: null, children: null };
      const obj9 = { name: str1 };
      function handleRejectMessageRequest() {
        _undefined2(channel.id);
      }
      obj8.accessibilityLabel = intl5.formatToPlainString(tmp4(tmp5[6]).t["C9Xe6+"], obj9);
      obj8.onPress = handleRejectMessageRequest;
      obj8.disabled = tmp7;
      obj8.style = tmp.actionButton;
      if (!isRejectLoading) {
        if (!isOptimisticRejected) {
          const obj10 = { size: tmp4(tmp5[15]).Icon.Sizes.SMALL, disableColor: true, source: tmp11(tmp5[17]) };
          tmp10Result = tmp10(tmp4(tmp5[15]).Icon, obj10);
        }
        obj8.children = tmp10Result;
        items4[1] = tmp10(tmp4(tmp5[13]).PressableOpacity, obj8);
        obj5.children = items4;
        items2[1] = tmp8(tmp9, obj5);
        obj3.children = items2;
        const items5 = [tmp8(tmp9, obj3), ];
        let tmp10Result1 = null;
        if (!isRestricted.isLastRow) {
          tmp10Result1 = tmp10(tmp4(tmp5[18]).FormDivider, { iconPush: true, outer: true });
        }
        items5[1] = tmp10Result1;
        obj.children = items5;
        return tmp8(tmp4(tmp5[13]).PressableOpacity, obj);
      }
      const obj11 = { style: tmp.activityIndicator };
      tmp10Result = tmp10(id, obj11);
    }
  }
  tmp10Result = tmp10(id, { style: tmp.activityIndicator });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty, FlatList: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { sectionContainer: null, rowContainer: null, actionContainer: null, actionButton: null, acceptButton: null, acceptButtonRestricted: null, pressableRow: null, activityIndicator: null, list: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", justifyContent: "space-between", marginTop: 6, marginBottom: 10 };
createStyles.sectionContainer = createStyles;
createStyles.rowContainer = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 14, marginBottom: 12 };
createStyles.actionContainer = { flexDirection: "row", alignItems: "flex-start", height: "100%" };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
createStyles.actionButton = size;
createStyles.acceptButton = { marginRight: 16 };
createStyles.acceptButtonRestricted = { marginRight: 12 };
createStyles.pressableRow = { borderRadius: nativeDefault.radii.md };
createStyles.activityIndicator = { height: 16, width: 16 };
let obj1 = { borderRadius: nativeDefault.radii.md };
createStyles.list = { flex: 1, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createStyles.createStyles(createStyles);
const constants = { ACCEPT_MESSAGE_REQUEST: "accept-message-request", IGNORE_MESSAGE_REQUEST: "ignore-message-request", PREVIEW_MESSAGE_REQUEST: "preview-message-request" };
size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestList.tsx");

export default function MessageRequestList(goToMessageRequestPreview) {
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  let arr;
  const tmp = closure_10();
  importDefault = tmp;
  const bottom = require("useSafeAreaInsets")().bottom;
  arr = require("useSortedMessageRequests")();
  let obj = goToMessageRequestPreview(arr[21]);
  const hasSingleMessageRequest = obj.useListHasSingleMessageRequest();
  let obj1 = goToMessageRequestPreview(arr[22]);
  const isRestricted = obj1.useIsMessageRequestRestrictedViewer("MessageRequestList");
  if (0 === arr.length) {
    obj = { bodyText: null };
    let intl = tmp4(tmp3[6]).intl;
    obj.bodyText = intl.string(tmp4(tmp3[6]).t.SXrqTf);
    return closure_8(tmp2(tmp3[23]), obj);
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
        const intl = goToMessageRequestPreview(arr[6]).intl;
        const obj1 = { pendingRequestNumber: arr.length };
        obj.children = intl.format(goToMessageRequestPreview(arr[6]).t.evH4Yb, obj1);
        obj.children = closure_1_8(goToMessageRequestPreview(arr[25]).Text, obj);
        return closure_1_8(closure_1_5, obj);
      } else {
        let id;
        if (arr[arr.length - 1] != null) {
          id = tmp14.channel.id;
        }
        obj = {
          messageRequest: item,
          goToMessageRequestPreview() {
              return goToMessageRequestPreview(item.channel.id);
            },
          isLastRow: item.channel.id === id,
          hasSingleMessageRequest,
          isRestricted
        };
        return closure_1_8(PendingMessageRequestRow, obj, item.channel.id);
      }
    };
    obj.data = items;
    return closure_8(closure_6, obj);
  }
  tmp2 = importDefault;
};