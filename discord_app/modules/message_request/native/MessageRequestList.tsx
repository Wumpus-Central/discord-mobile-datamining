// discord_app/modules/message_request/native/MessageRequestList.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { AnalyticEvents } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function PendingMessageRequestRow(isRestricted) {
  ({ messageRequest, goToMessageRequestPreview: require, hasSingleMessageRequest } = isRestricted);
  let flag = isRestricted.isRestricted;
  if (flag === undefined) {
    flag = false;
  }
  let str;
  let channel;
  let id;
  c5 = undefined;
  c6 = undefined;
  const tmp = callback2();
  str = messageRequest.user;
  channel = messageRequest.channel;
  id = channel.id;
  const items = [id, hasSingleMessageRequest];
  const callback = channel.useCallback(() => {
    let obj = hasSingleMessageRequest(str[7]);
    obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: null, icon: null };
    const intl = callback(str[6]).intl;
    obj[1] = intl.string(callback(str[6]).t["EDYbS+"]);
    obj[2] = hasSingleMessageRequest(str[8]);
    obj.open(obj);
  }, []);
  const callback1 = channel.useCallback(() => {
    if (hasSingleMessageRequest) {
      closure_1_0(str[9]).transitionToChannel(id);
      let arr = hasSingleMessageRequest(str[10]);
      arr = arr.pop();
      const obj = closure_1_0(str[9]);
    }
  }, items);
  let obj = require(str[11]);
  const messageRequestActions = obj.useMessageRequestActions({
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
    let obj = hasSingleMessageRequest(str[12]);
    obj = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
    obj.track(closure_1_7.MESSAGE_REQUEST_PREVIEW_VIEWED, obj);
    callback();
  }
  obj = {
    onPress: handleSelectRow,
    accessibilityRole: "button",
    accessibilityActions: null,
    onAccessibilityAction: null,
    style: null,
    children: null,
  };
  obj = { name: constants.ACCEPT_MESSAGE_REQUEST, label: null };
  let intl = tmp4(tmp5[6]).intl;
  obj[1] = intl.string(require(str[6]).t.hSLLWi);
  const items1 = [obj, ,];
  obj1 = { name: constants.IGNORE_MESSAGE_REQUEST, label: null };
  const intl2 = tmp4(tmp5[6]).intl;
  obj1[1] = intl2.string(require(str[6]).t.fIBuSD);
  items1[1] = obj1;
  const obj2 = { name: constants.PREVIEW_MESSAGE_REQUEST, label: null };
  const intl3 = tmp4(tmp5[6]).intl;
  obj2[1] = intl3.string(require(str[6]).t.HjgsKJ);
  items1[2] = obj2;
  obj[2] = items1;
  obj[3] = function onAccessibilityAction(nativeEvent) {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (closure_1_11.ACCEPT_MESSAGE_REQUEST === actionName) {
      _undefined(channel.id);
    } else if (tmp.IGNORE_MESSAGE_REQUEST === actionName) {
      _undefined2(channel.id);
    } else if (tmp.PREVIEW_MESSAGE_REQUEST === actionName) {
      let obj = hasSingleMessageRequest(str[12]);
      obj = { is_spam: false, channel_id: null, other_user_id: null };
      obj[1] = channel.id;
      obj[2] = str.id;
      obj.track(closure_1_7.MESSAGE_REQUEST_PREVIEW_VIEWED, obj);
      callback();
    }
  };
  obj[4] = tmp.pressableRow;
  const obj3 = { style: tmp.rowContainer, children: null };
  const items2 = [
    callback(hasSingleMessageRequest(str[14]), {
      channel: messageRequest.channel,
      otherUser: messageRequest.user,
      isRestricted: flag,
    }),
  ];
  const obj5 = { style: tmp.actionContainer, children: null };
  const intl4 = tmp4(tmp5[6]).intl;
  str = undefined;
  if (str != null) {
    str = str.toString();
  }
  const obj6 = {
    accessibilityRole: "button",
    accessibilityLabel: intl4.formatToPlainString(require(str[6]).t["6p0yBo"], { name: str }),
    onPress: handleAcceptMessageRequest,
    disabled: tmp7,
    style: items3,
    children: null,
  };
  handleAcceptMessageRequest = function handleAcceptMessageRequest() {
    _undefined(channel.id);
  };
  items3 = [tmp.actionButton, flag ? tmp.acceptButtonRestricted : tmp.acceptButton];
  if (!isAcceptLoading) {
    if (!isUserProfileLoading) {
      if (!isOptimisticAccepted) {
        const obj7 = { size: null, disableColor: true, source: null };
        obj7[0] = tmp4(tmp5[15]).Icon.Sizes.SMALL;
        obj7[2] = tmp11(tmp5[16]);
        let tmp10Result = tmp10(tmp4(tmp5[15]).Icon, obj7);
      }
      obj6[5] = tmp10Result;
      const items4 = [tmp10(tmp4(tmp5[13]).PressableOpacity, obj6)];
      const intl5 = tmp4(tmp5[6]).intl;
      let str1;
      if (str != null) {
        str1 = str.toString();
      }
      const obj8 = {
        accessibilityRole: "button",
        accessibilityLabel: null,
        onPress: null,
        disabled: null,
        style: null,
        children: null,
      };
      const obj9 = { name: null };
      obj9[0] = str1;
      function handleRejectMessageRequest() {
        _undefined2(channel.id);
      }
      obj8[1] = intl5.formatToPlainString(tmp4(tmp5[6]).t["C9Xe6+"], obj9);
      obj8[2] = handleRejectMessageRequest;
      obj8[3] = tmp7;
      obj8[4] = tmp.actionButton;
      if (!isRejectLoading) {
        if (!isOptimisticRejected) {
          const obj10 = { size: null, disableColor: true, source: null };
          obj10[0] = tmp4(tmp5[15]).Icon.Sizes.SMALL;
          obj10[2] = tmp11(tmp5[17]);
          tmp10Result = tmp10(tmp4(tmp5[15]).Icon, obj10);
        }
        obj8[5] = tmp10Result;
        items4[1] = tmp10(tmp4(tmp5[13]).PressableOpacity, obj8);
        obj5[1] = items4;
        items2[1] = tmp8(tmp9, obj5);
        obj3[1] = items2;
        const items5 = [tmp8(tmp9, obj3)];
        let tmp10Result1 = null;
        if (!isRestricted.isLastRow) {
          tmp10Result1 = tmp10(tmp4(tmp5[18]).FormDivider, { iconPush: true, outer: true });
        }
        items5[1] = tmp10Result1;
        obj[5] = items5;
        return tmp8(tmp4(tmp5[13]).PressableOpacity, obj);
      }
      const obj11 = { style: null };
      obj11[0] = tmp.activityIndicator;
      tmp10Result = tmp10(id, obj11);
    }
  }
  tmp10Result = tmp10(id, { style: tmp.activityIndicator });
}
({ ActivityIndicator: c4, View: c5, FlatList: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = {
  sectionContainer: null,
  rowContainer: null,
  actionContainer: null,
  actionButton: null,
  acceptButton: null,
  acceptButtonRestricted: null,
  pressableRow: null,
  activityIndicator: null,
  list: null,
};
createCacheKey = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW,
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 6,
  marginBottom: 10,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 14,
  marginBottom: 12,
};
createCacheKey[2] = { flexDirection: "row", alignItems: "flex-start", height: "100%" };
createCacheKey[3] = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  borderRadius: ThemesDefault.radii.lg,
  alignItems: "center",
  justifyContent: "center",
  height: 32,
  width: 32,
};
createCacheKey[4] = { marginRight: 16 };
createCacheKey[5] = { marginRight: 12 };
let obj1 = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  borderRadius: ThemesDefault.radii.lg,
  alignItems: "center",
  justifyContent: "center",
  height: 32,
  width: 32,
};
createCacheKey[6] = { borderRadius: ThemesDefault.radii.md };
createCacheKey[7] = { height: 16, width: 16 };
let obj2 = { borderRadius: ThemesDefault.radii.md };
createCacheKey[8] = {
  flex: 1,
  paddingHorizontal: 16,
  alignSelf: "stretch",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW,
};
let closure_10 = createCacheKey.createStyles(createCacheKey);
let closure_11 = {
  ACCEPT_MESSAGE_REQUEST: "accept-message-request",
  IGNORE_MESSAGE_REQUEST: "ignore-message-request",
  PREVIEW_MESSAGE_REQUEST: "preview-message-request",
};
let obj3 = {
  flex: 1,
  paddingHorizontal: 16,
  alignSelf: "stretch",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW,
};
const result = require("set").fileFinishedImporting("modules/message_request/native/MessageRequestList.tsx");

export default function MessageRequestList(goToMessageRequestPreview) {
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  importDefault = undefined;
  let arr;
  closure_3 = undefined;
  closure_4 = undefined;
  const tmp = callback2();
  importDefault = tmp;
  const bottom = importDefault(arr[19])().bottom;
  arr = importDefault(arr[20])();
  let obj = goToMessageRequestPreview(arr[21]);
  closure_3 = obj.useListHasSingleMessageRequest();
  obj1 = goToMessageRequestPreview(arr[22]);
  closure_4 = obj1.useIsMessageRequestRestrictedViewer("MessageRequestList");
  if (0 === arr.length) {
    obj = { bodyText: null };
    let intl = tmp4(tmp3[6]).intl;
    obj[0] = intl.string(tmp4(tmp3[6]).t.SXrqTf);
    return callback(tmp2(tmp3[23]), obj);
  } else {
    const items = ["header-section"];
    HermesBuiltin.arraySpread(arr, 1);
    const items1 = [tmp.list];
    let num = 0;
    if (tmp4Result.isAndroid()) {
      num = bottom;
    }
    obj = { style: null, scrollIndicatorInsets: null, contentContainerStyle: null, renderItem: null, data: null };
    obj1 = { marginBottom: null };
    obj1[0] = num;
    items1[1] = obj1;
    obj[0] = items1;
    obj[1] = { right: 0.01 };
    const obj2 = { paddingBottom: null, paddingTop: 12 };
    obj2[0] = bottom;
    obj[2] = obj2;
    obj[3] = function renderItem(item) {
      item = item.item;
      if (typeof item === "string") {
        let obj = { style: null, children: null };
        obj[0] = sectionContainer.sectionContainer;
        obj = { variant: "eyebrow", color: "text-default", children: null };
        const intl = goToMessageRequestPreview(arr[6]).intl;
        obj1 = { pendingRequestNumber: null };
        obj1[0] = arr.length;
        obj[2] = intl.format(goToMessageRequestPreview(arr[6]).t.evH4Yb, obj1);
        obj[1] = closure_1_8(goToMessageRequestPreview(arr[25]).Text, obj);
        return closure_1_8(closure_1_5, obj);
      } else {
        let id;
        if (arr[arr.length - 1] != null) {
          id = tmp14.channel.id;
        }
        obj = {
          messageRequest: null,
          goToMessageRequestPreview: null,
          isLastRow: null,
          hasSingleMessageRequest: null,
          isRestricted: null,
        };
        obj[0] = item;
        obj[1] = function goToMessageRequestPreview() {
          return item(item.channel.id);
        };
        obj[2] = item.channel.id === id;
        obj[3] = closure_3;
        obj[4] = closure_4;
        return closure_1_8(closure_1_12, obj, item.channel.id);
      }
    };
    obj[4] = items;
    return callback(closure_6, obj);
  }
  tmp2 = importDefault;
}
