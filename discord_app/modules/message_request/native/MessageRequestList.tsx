// discord_app/modules/message_request/native/MessageRequestList.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

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
  const str = messageRequest.user;
  const channel = messageRequest.channel;
  const id = channel.id;
  const items = [id, hasSingleMessageRequest];
  const callback = channel.useCallback(() => {
    const obj2 = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
    const intl = require("util").intl;
    obj2.content = intl.string(require("util").t["EDYbS+"]);
    obj2.icon = hasSingleMessageRequest(str[8]);
    hasSingleMessageRequest(str[7]).open(obj2);
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
  obj2.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
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
    closure_8(hasSingleMessageRequest(str[14]), {
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
          source: hasSingleMessageRequest(tmp5[16]),
        };
        let tmp10Result = closure_8(require("native").Icon, obj10);
      }
      obj9.children = tmp10Result;
      const items4 = [closure_8(require("Pressables").PressableOpacity, obj9)];
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
            source: hasSingleMessageRequest(tmp5[17]),
          };
          let tmp10Result3 = closure_8(require("native").Icon, obj13);
        }
        obj11.children = tmp10Result3;
        items4[1] = closure_8(require("Pressables").PressableOpacity, obj11);
        obj8.children = items4;
        items2[1] = closure_9(tmp9, obj8);
        obj6.children = items2;
        const items5 = [closure_9(tmp9, obj6)];
        let tmp10Result4 = null;
        if (!isRestricted.isLastRow) {
          tmp10Result4 = closure_8(require("Form").FormDivider, { iconPush: true, outer: true });
        }
        items5[1] = tmp10Result4;
        obj2.children = items5;
        return closure_9(require("Pressables").PressableOpacity, obj2);
      }
      const obj14 = { style: tmp.activityIndicator };
      tmp10Result3 = closure_8(id, obj14);
    }
  }
  tmp10Result = closure_8(id, { style: tmp.activityIndicator });
  let obj = require("useMessageRequestActions");
  const obj15 = { style: tmp.activityIndicator };
  const obj7 = { channel: messageRequest.channel, otherUser: messageRequest.user, isRestricted: flag };
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty, FlatList: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4829);
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
obj2.list = {
  flex: 1,
  paddingHorizontal: 16,
  alignSelf: "stretch",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let closure_10 = createStyles.createStyles(obj2);
const constants = {
  ACCEPT_MESSAGE_REQUEST: "accept-message-request",
  IGNORE_MESSAGE_REQUEST: "ignore-message-request",
  PREVIEW_MESSAGE_REQUEST: "preview-message-request",
};
size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestList.tsx");

export default function MessageRequestList(goToMessageRequestPreview) {
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  let arr;
  const tmp = closure_10();
  importDefault = tmp;
  const bottom = require("useSafeAreaInsets")().bottom;
  arr = require("useSortedMessageRequests")();
  const hasSingleMessageRequest = goToMessageRequestPreview(arr[21]).useListHasSingleMessageRequest();
  let obj = goToMessageRequestPreview(arr[21]);
  const tmp2 = importDefault;
  const isRestricted = goToMessageRequestPreview(arr[22]).useIsMessageRequestRestrictedViewer("MessageRequestList");
  if (0 === arr.length) {
    let obj3 = { bodyText: null };
    let intl = tmp4(tmp3[6]).intl;
    obj3.bodyText = intl.string(tmp4(tmp3[6]).t.SXrqTf);
    return closure_8(tmp2(tmp3[23]), obj3);
  } else {
    const items = ["header-section"];
    HermesBuiltin.arraySpread(arr, 1);
    const items1 = [tmp.list];
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
        const obj2 = { style: sectionContainer.sectionContainer, children: null };
        const obj3 = { variant: "eyebrow", color: "text-default", children: null };
        const intl = goToMessageRequestPreview(arr[6]).intl;
        const obj4 = { pendingRequestNumber: arr.length };
        obj3.children = intl.format(goToMessageRequestPreview(arr[6]).t.evH4Yb, obj4);
        obj2.children = closure_1_8(goToMessageRequestPreview(arr[25]).Text, obj3);
        return closure_1_8(closure_1_5, obj2);
      } else {
        let id;
        if (arr[arr.length - 1] != null) {
          id = tmp14.channel.id;
        }
        const obj = {
          messageRequest: item,
          goToMessageRequestPreview() {
            return goToMessageRequestPreview(item.channel.id);
          },
          isLastRow: item.channel.id === id,
          hasSingleMessageRequest,
          isRestricted,
        };
        return closure_1_8(PendingMessageRequestRow, obj, item.channel.id);
      }
    };
    obj4.data = items;
    return closure_8(closure_6, obj4);
  }
  let obj2 = goToMessageRequestPreview(arr[22]);
}
