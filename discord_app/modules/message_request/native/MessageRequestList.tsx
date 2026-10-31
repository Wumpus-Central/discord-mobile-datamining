// discord_app/modules/message_request/native/MessageRequestList.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function PendingMessageRequestRow(isRestricted) {
  ({ messageRequest, goToMessageRequestPreview: require, hasSingleMessageRequest } = isRestricted);
  let flag = isRestricted.isRestricted;
  if (flag === undefined) {
    flag = false;
  }
  c5 = undefined;
  c6 = undefined;
  const tmp = closure_9();
  const str = messageRequest.user;
  const channel = messageRequest.channel;
  const id = channel.id;
  const items = [id, hasSingleMessageRequest];
  const callback = channel.useCallback(() => {
    const obj2 = { text: null, variant: "critical" };
    const intl = require("util").intl;
    obj2.text = intl.string(require("util").t["EDYbS+"]);
    hasSingleMessageRequest(str[7]).open("MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", obj2);
  }, []);
  const callback1 = channel.useCallback(() => {
    if (hasSingleMessageRequest) {
      transitionToChannel.transitionToChannel(id);
      ModalActionCreatorsDefault.pop();
    }
  }, items);
  const messageRequestActions = require("useMessageRequestActions").useMessageRequestActions({
    user: str,
    onAcceptSuccess: callback1,
    onError: callback,
  });
  ({
    acceptMessageRequest: c5,
    rejectMessageRequest: c6,
    isAcceptLoading,
    isRejectLoading,
    isUserProfileLoading,
    isOptimisticAccepted,
    isOptimisticRejected,
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
      is_spam: false,
      channel_id: channel.id,
      other_user_id: str.id,
    });
    require();
  }
  let obj2 = {
    onPress: handleSelectRow,
    accessibilityRole: "button",
    accessibilityActions: null,
    onAccessibilityAction: null,
    style: null,
    children: null,
  };
  const obj3 = { name: constants.ACCEPT_MESSAGE_REQUEST, label: null };
  let intl = require("util").intl;
  obj3.label = intl.string(require("util").t.hSLLWi);
  const items1 = [obj3, ,];
  const obj4 = { name: constants.IGNORE_MESSAGE_REQUEST, label: null };
  const intl2 = require("util").intl;
  obj4.label = intl2.string(require("util").t.fIBuSD);
  items1[1] = obj4;
  const obj5 = { name: constants.PREVIEW_MESSAGE_REQUEST, label: null };
  const intl3 = require("util").intl;
  obj5.label = intl3.string(require("util").t.HjgsKJ);
  items1[2] = obj5;
  obj2.accessibilityActions = items1;
  obj2.onAccessibilityAction = function handleAccessibilityAction(nativeEvent) {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (constants.ACCEPT_MESSAGE_REQUEST === actionName) {
      _undefined(channel.id);
    } else if (constants.IGNORE_MESSAGE_REQUEST === actionName) {
      _undefined2(channel.id);
    } else if (constants.PREVIEW_MESSAGE_REQUEST === actionName) {
      const obj2 = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
      AnalyticsUtilsDefault.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
      require();
    }
  };
  obj2.style = tmp.pressableRow;
  const obj6 = { style: tmp.rowContainer, children: null };
  const items2 = [
    closure_7(hasSingleMessageRequest(str[13]), {
      channel: messageRequest.channel,
      otherUser: messageRequest.user,
      isRestricted: flag,
    }),
  ];
  const obj8 = { style: tmp.actionContainer, children: null };
  const intl4 = require("util").intl;
  let str1;
  if (str != null) {
    str1 = str.toString();
  }
  const obj9 = {
    accessibilityRole: "button",
    accessibilityLabel: intl4.formatToPlainString(require("util").t["6p0yBo"], { name: str1 }),
    onPress: null,
    disabled: tmp7,
    style: null,
    children: null,
  };
  function handleAcceptMessageRequest() {
    _undefined(channel.id);
  }
  obj9.onPress = handleAcceptMessageRequest;
  const items3 = [tmp.actionButton, flag ? tmp.acceptButtonRestricted : tmp.acceptButton];
  obj9.style = items3;
  if (!isAcceptLoading) {
    if (!isUserProfileLoading) {
      if (!isOptimisticAccepted) {
        const obj10 = {
          size: require("native").Icon.Sizes.SMALL,
          disableColor: true,
          source: hasSingleMessageRequest(tmp5[15]),
        };
        let tmp10Result = closure_7(require("native").Icon, obj10);
      }
      obj9.children = tmp10Result;
      const items4 = [closure_7(require("Pressables").PressableOpacity, obj9)];
      const intl5 = require("util").intl;
      let str2;
      if (str != null) {
        str2 = str.toString();
      }
      const obj11 = {
        accessibilityRole: "button",
        accessibilityLabel: null,
        onPress: null,
        disabled: null,
        style: null,
        children: null,
      };
      const obj12 = { name: str2 };
      function handleRejectMessageRequest() {
        _undefined2(channel.id);
      }
      obj11.accessibilityLabel = intl5.formatToPlainString(require("util").t["C9Xe6+"], obj12);
      obj11.onPress = handleRejectMessageRequest;
      obj11.disabled = tmp7;
      obj11.style = tmp.actionButton;
      if (!isRejectLoading) {
        if (!isOptimisticRejected) {
          const obj13 = {
            size: require("native").Icon.Sizes.SMALL,
            disableColor: true,
            source: hasSingleMessageRequest(tmp5[16]),
          };
          let tmp10Result3 = closure_7(require("native").Icon, obj13);
        }
        obj11.children = tmp10Result3;
        items4[1] = closure_7(require("Pressables").PressableOpacity, obj11);
        obj8.children = items4;
        items2[1] = closure_8(tmp9, obj8);
        obj6.children = items2;
        const items5 = [closure_8(tmp9, obj6)];
        let tmp10Result4 = null;
        if (!isRestricted.isLastRow) {
          tmp10Result4 = closure_7(require("Form").FormDivider, { iconPush: true, outer: true });
        }
        items5[1] = tmp10Result4;
        obj2.children = items5;
        return closure_8(require("Pressables").PressableOpacity, obj2);
      }
      const obj14 = { style: tmp.activityIndicator };
      tmp10Result3 = closure_7(id, obj14);
    }
  }
  tmp10Result = closure_7(id, { style: tmp.activityIndicator });
  let obj = require("useMessageRequestActions");
  const obj15 = { style: tmp.activityIndicator };
  const obj7 = { channel: messageRequest.channel, otherUser: messageRequest.user, isRestricted: flag };
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5014);
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
  acceptButtonRestricted: null,
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
obj2.acceptButtonRestricted = { marginRight: 12 };
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
obj2.list = { flex: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_9 = createStyles.createStyles(obj2);
const constants = {
  ACCEPT_MESSAGE_REQUEST: "accept-message-request",
  IGNORE_MESSAGE_REQUEST: "ignore-message-request",
  PREVIEW_MESSAGE_REQUEST: "preview-message-request",
};
size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestList.tsx");

export default function MessageRequestList(goToMessageRequestPreview) {
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  let data;
  const tmp = closure_9();
  const bottom = data(1625)().bottom;
  data = data(18963)();
  dependencyMap = goToMessageRequestPreview(18965).useListHasSingleMessageRequest();
  let obj = goToMessageRequestPreview(18965);
  const tmp2 = data;
  const isRestricted = goToMessageRequestPreview(13999).useIsMessageRequestRestrictedViewer();
  if (0 === data.length) {
    const obj3 = { bodyText: null };
    const intl2 = tmp4(1113).intl;
    obj3.bodyText = intl2.string(tmp4(1113).t.SXrqTf);
    let tmp9Result = closure_7(tmp2(18968), obj3);
    const tmp2Result = tmp2(18968);
  } else {
    const items = [tmp.list];
    let num = 0;
    if (tmp4Result.isAndroid()) {
      num = bottom;
    }
    const obj4 = {
      style: null,
      scrollIndicatorInsets: null,
      contentContainerStyle: null,
      renderItem: null,
      data: null,
      keyExtractor: null,
      ListHeaderComponent: null,
    };
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
        hasSingleMessageRequest: null,
        isRestricted: null,
      };
      let id;
      if (arr[arr.length - 1] != null) {
        id = tmp3.channel.id;
      }
      obj.isLastRow = item.channel.id === id;
      obj.hasSingleMessageRequest = hasSingleMessageRequest;
      obj.isRestricted = isRestricted;
      return closure_1_7(PendingMessageRequestRow, obj, item.channel.id);
    };
    obj4.data = data;
    obj4.keyExtractor = function keyExtractor(channel) {
      return channel.channel.id;
    };
    const obj7 = { style: tmp.sectionContainer, children: null };
    const obj8 = { variant: "eyebrow", color: "text-default", children: null };
    const intl = tmp4(1113).intl;
    const obj9 = { pendingRequestNumber: data.length };
    obj8.children = intl.format(tmp4(1113).t.evH4Yb, obj9);
    obj7.children = closure_7(tmp4(5624).Text, obj8);
    obj4.ListHeaderComponent = closure_7(closure_5, obj7);
    tmp9Result = closure_7(tmp4(7294).FlashList, obj4);
    tmp4Result = tmp4(1375);
  }
  return tmp9Result;
}
