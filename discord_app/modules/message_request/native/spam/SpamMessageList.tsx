// discord_app/modules/message_request/native/spam/SpamMessageList.tsx
import Form from "Form";
import get_ActivityIndicator from "registerAsset";
import { AnalyticEvents } from "ME";
import jsxProd from "useSpamMessageRequestCount";
import createCacheKey from "createCacheKey";
import { useMountLayoutEffect } from "../../../../hooks/useMountEffect.tsx";
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";
import { useSortedSpamMessageRequests } from "../../hooks/useSortedSpamMessageRequests.tsx";

let c4;
let c5;
let c9;
let closure_6;
let metroImportAll;
const require = arg1;
function PendingSpamMessageRequestRow(isLastRow) {
  let c6;
  let c7;
  let hasSingleMessageRequest;
  let isAcceptLoading;
  let isOptimisticAccepted;
  let isOptimisticRejected;
  let isRejectLoading;
  let isUserProfileLoading;
  let messageRequest;
  let require;
  ({ messageRequest, goToMessageRequestPreview: require, hasSingleMessageRequest } = isLastRow);
  let str;
  let channel;
  let id;
  let closure_5;
  c6 = undefined;
  c7 = undefined;
  const tmp = createCacheKey();
  str = messageRequest.user;
  channel = messageRequest.channel;
  id = channel.id;
  let obj = require(str[7]);
  closure_5 = obj.useLongestChannelMessageBeforeReply(id, channel.getRecipientId());
  const items = [id, hasSingleMessageRequest];
  const callback = channel.useCallback(() => {
    let obj = hasSingleMessageRequest(str[8]);
    obj = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", content: null, icon: null };
    const intl = callback(str[6]).intl;
    obj[1] = intl.string(callback(str[6]).t.pIQ3h4);
    obj[2] = hasSingleMessageRequest(str[9]);
    obj.open(obj);
  }, []);
  const callback1 = channel.useCallback(() => {
    if (hasSingleMessageRequest) {
      outer1_0(str[10]).transitionToChannel(id);
      let arr = hasSingleMessageRequest(str[11]);
      arr = arr.pop();
      const obj = outer1_0(str[10]);
    }
  }, items);
  let obj1 = require(str[12]);
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
    let obj = hasSingleMessageRequest(str[13]);
    obj = { is_spam: true, channel_id: channel.id, other_user_id: str.id };
    obj.track(_undefined2.MESSAGE_REQUEST_PREVIEW_VIEWED, obj);
    callback();
  }
  obj = { onPress: handleSelectRow, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null, style: null, children: null };
  obj = { name: constants.ACCEPT_SPAM_MESSAGE, label: null };
  let intl = tmp2(tmp3[6]).intl;
  obj[1] = intl.string(require(str[6]).t.apePSa);
  const items1 = [obj, , ];
  obj1 = { name: constants.IGNORE_SPAM_MESSAGE, label: null };
  const intl2 = tmp2(tmp3[6]).intl;
  obj1[1] = intl2.string(require(str[6]).t.MWOV9D);
  items1[1] = obj1;
  const obj2 = { name: constants.PREVIEW_SPAM_MESSAGE, label: null };
  const intl3 = tmp2(tmp3[6]).intl;
  obj2[1] = intl3.string(require(str[6]).t.I6PFLB);
  items1[2] = obj2;
  obj[2] = items1;
  obj[3] = function onAccessibilityAction(nativeEvent) {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (outer1_11.ACCEPT_SPAM_MESSAGE === actionName) {
      _undefined2(channel, closure_5);
    } else if (tmp.IGNORE_SPAM_MESSAGE === actionName) {
      _undefined(channel.id);
    } else if (tmp.PREVIEW_SPAM_MESSAGE === actionName) {
      let obj = hasSingleMessageRequest(str[13]);
      obj = { is_spam: true, channel_id: null, other_user_id: null };
      obj[1] = channel.id;
      obj[2] = str.id;
      obj.track(_undefined2.MESSAGE_REQUEST_PREVIEW_VIEWED, obj);
      callback();
    }
  };
  obj[4] = tmp.pressableRow;
  const obj3 = { style: tmp.rowContainer, children: null };
  const items2 = [callback(hasSingleMessageRequest(str[15]), { channel: messageRequest.channel, otherUser: messageRequest.user }), ];
  const obj5 = { style: tmp.actionContainer, children: null };
  const intl4 = tmp2(tmp3[6]).intl;
  str = undefined;
  if (str != null) {
    str = str.toString();
  }
  const obj6 = { accessibilityRole: "button", accessibilityLabel: intl4.formatToPlainString(require(str[6]).t["6p0yBo"], { name: str }), onPress: handleAcceptMessageRequest, disabled: tmp7, style: items3, children: null };
  handleAcceptMessageRequest = function handleAcceptMessageRequest() {
    _undefined2(channel, closure_5);
  };
  items3 = [, ];
  ({ actionButton: arr4[0], acceptButton: arr4[1] } = tmp);
  if (!isAcceptLoading) {
    if (!isUserProfileLoading) {
      if (!isOptimisticAccepted) {
        const obj7 = { size: null, disableColor: true, source: null };
        obj7[0] = tmp2(tmp3[16]).Icon.Sizes.SMALL;
        obj7[2] = tmp11(tmp3[17]);
        let tmp10Result = tmp10(tmp2(tmp3[16]).Icon, obj7);
      }
      obj6[5] = tmp10Result;
      const items4 = [tmp10(tmp2(tmp3[14]).PressableOpacity, obj6), ];
      const intl5 = tmp2(tmp3[6]).intl;
      let str1;
      if (str != null) {
        str1 = str.toString();
      }
      const obj8 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, disabled: null, style: null, children: null };
      const obj9 = { name: null };
      obj9[0] = str1;
      function handleRejectMessageRequest() {
        _undefined(channel.id);
      }
      obj8[1] = intl5.formatToPlainString(tmp2(tmp3[6]).t["C9Xe6+"], obj9);
      obj8[2] = handleRejectMessageRequest;
      obj8[3] = tmp7;
      obj8[4] = tmp.actionButton;
      if (!isRejectLoading) {
        if (!isOptimisticRejected) {
          const obj10 = { size: null, disableColor: true, source: null };
          obj10[0] = tmp2(tmp3[16]).Icon.Sizes.SMALL;
          obj10[2] = tmp11(tmp3[18]);
          tmp10Result = tmp10(tmp2(tmp3[16]).Icon, obj10);
        }
        obj8[5] = tmp10Result;
        items4[1] = tmp10(tmp2(tmp3[14]).PressableOpacity, obj8);
        obj5[1] = items4;
        items2[1] = tmp8(tmp9, obj5);
        obj3[1] = items2;
        const items5 = [tmp8(tmp9, obj3), ];
        let tmp10Result1 = null;
        if (!isLastRow.isLastRow) {
          tmp10Result1 = tmp10(tmp2(tmp3[19]).FormDivider, { iconPush: true, outer: true });
        }
        items5[1] = tmp10Result1;
        obj[5] = items5;
        return tmp8(tmp2(tmp3[14]).PressableOpacity, obj);
      }
      const obj11 = { style: null };
      obj11[0] = tmp.activityIndicator;
      tmp10Result = tmp10(id, obj11);
    }
  }
  tmp10Result = tmp10(id, { style: tmp.activityIndicator });
}
({ ActivityIndicator: c4, View: c5, FlatList: closure_6 } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { sectionContainer: null, rowContainer: null, actionContainer: null, actionButton: null, acceptButton: null, pressableRow: null, activityIndicator: null, list: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flexDirection: "row", justifyContent: "space-between", marginTop: 6, marginBottom: 10 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 14, marginBottom: 12 };
createCacheKey[2] = { flexDirection: "row", alignItems: "flex-start", height: "100%" };
createCacheKey[3] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: require("Themes").radii.lg, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
createCacheKey[4] = { marginRight: 16 };
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: require("Themes").radii.lg, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
createCacheKey[5] = { borderRadius: require("Themes").radii.md };
createCacheKey[6] = { height: 16, width: 16 };
let obj2 = { borderRadius: require("Themes").radii.md };
createCacheKey[7] = { flex: 1, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_11 = { ACCEPT_SPAM_MESSAGE: "accept-spam-message-request", IGNORE_SPAM_MESSAGE: "ignore-spam-message-request", PREVIEW_SPAM_MESSAGE: "preview-spam-message-request" };
let obj3 = { flex: 1, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
const result = require("ME").fileFinishedImporting("modules/message_request/native/spam/SpamMessageList.tsx");

export default function SpamMessageList(goToMessageRequestPreview) {
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  let importDefault;
  let dependencyMap;
  let arr;
  let closure_4;
  const tmp = createCacheKey();
  importDefault = tmp;
  const bottom = useSafeAreaInsets().bottom;
  let obj = goToMessageRequestPreview(15810);
  dependencyMap = obj.useSpamMessageRequestCount();
  arr = useSortedSpamMessageRequests();
  let obj1 = goToMessageRequestPreview(15808);
  closure_4 = obj1.useListHasSingleSpamMessageRequest();
  useMountLayoutEffect(() => {
    let obj = _undefined(698);
    obj = { num_spam_message_requests: dependencyMap };
    obj.track(outer1_7.SPAM_MESSAGE_REQUESTS_VIEWED, obj);
    obj = { name: goToMessageRequestPreview(6960).MetricEvents.SPAM_MESSAGE_REQUEST_VIEW };
    _undefined(6955).increment(obj);
  });
  if (0 === arr.length) {
    obj = { bodyText: null };
    let intl = tmp4(1236).intl;
    obj[0] = intl.string(tmp4(1236).t.hasFPQ);
    return callback(tmp2(15811), obj);
  } else {
    const items = ["header-section"];
    HermesBuiltin.arraySpread(arr, 1);
    const items1 = [tmp.list, ];
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
        obj[0] = _undefined.sectionContainer;
        obj = { variant: "eyebrow", color: "text-default", children: null };
        const intl = goToMessageRequestPreview(1236).intl;
        obj = { count: null };
        obj[0] = arr.length;
        obj[2] = intl.format(goToMessageRequestPreview(1236).t.aNh5Kf, obj);
        obj[1] = outer1_8(goToMessageRequestPreview(4251).Text, obj);
        let tmp11Result = outer1_8(outer1_5, obj);
      } else {
        const obj1 = { messageRequest: null, goToMessageRequestPreview: null, isLastRow: null, hasSingleMessageRequest: null };
        obj1[0] = item;
        obj1[1] = function goToMessageRequestPreview() {
          return item(item.channel.id);
        };
        let id;
        if (arr[arr.length - 1] != null) {
          id = tmp14.channel.id;
        }
        obj1[2] = item.channel.id === id;
        obj1[3] = closure_4;
        tmp11Result = outer1_8(outer1_12, obj1, item.channel.id);
        const tmp11 = outer1_8;
        const tmp12 = outer1_12;
      }
      return tmp11Result;
    };
    obj[4] = items;
    return callback(closure_6, obj);
  }
  tmp2 = importDefault;
};