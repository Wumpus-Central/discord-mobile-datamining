// discord_app/modules/safety_flows/native/tasks/PendingRequestList.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getAvatarURLDefault from "../../../../utils/AvatarUtils.tsx";
import messagesProxyDefault from "../../SafetyFlows.messages.js";
import useRefreshLinkCodeOnExpiryDefault from "../../../parent_tools/hooks/useRefreshLinkCodeOnExpiry.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../stores/UserStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { useDerivedPendingRequests } from "../../usePendingParentRequests.tsx";

const require = arg1;
class PendingRequestRow {
  constructor(arg0) {
    request = global.request;
    ({ hasMaxConnections, actionsDisabled, onAccept, onDecline } = global);
    ({ isAcceptLoading, isDeclineLoading } = global);
    tmp = closure_9();
    tmp2 = request;
    tmp3 = onDecline;
    obj = require("initialize");
    items = [];
    items[0] = closure_6;
    stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getUser(request.parent_id));
    globalName = undefined;
    if (stateFromStores != null) {
      globalName = stateFromStores.globalName;
    }
    if (globalName == null) {
      username = undefined;
      if (stateFromStores != null) {
        username = stateFromStores.username;
      }
      globalName = username;
    }
    if (globalName == null) {
      globalName = request.parent_username;
    }
    username1 = undefined;
    if (stateFromStores != null) {
      username1 = stateFromStores.username;
    }
    if (username1 == null) {
      username1 = request.parent_username;
    }
    avatar = undefined;
    if (stateFromStores != null) {
      avatar = stateFromStores.avatar;
    }
    if (avatar == null) {
      avatar = request.parent_avatar;
    }
    tmp2Result = require("useDerivedPendingRequests");
    pendingRequestResolution = tmp2Result.usePendingRequestResolution(request.parent_id);
    ({ isConnected, isResolved } = pendingRequestResolution);
    tmp2Result1 = require("SENT_TIMESTAMP_FORMATTER");
    tmp11 = jsxs;
    tmp12 = View;
    obj = { style: tmp.row, children: null };
    tmp13 = jsx;
    result = tmp2Result1.formatPendingRequestSentText(request.created_at);
    obj1 = { avatarStyle: tmp.avatar, source: null, disablePlaceholder: true };
    tmp14 = onAccept;
    obj6 = require("getAvatarURL");
    obj2 = { id: request.parent_id, avatar };
    obj1[1] = obj6.getUserAvatarSource(obj2);
    items1 = [, ,];
    items1[0] = jsx(require("Button").Avatar, obj1);
    obj3 = { style: tmp.details, children: null };
    items2 = [, ,];
    items2[0] = jsx(require("Text").Text, {
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      children: globalName,
    });
    tmp13Result = username1 !== globalName;
    if (tmp13Result) {
      obj4 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: null };
      obj4[3] = username1;
      tmp13Result = tmp13(require("Text").Text, obj4);
    }
    items2[1] = tmp13Result;
    items2[2] = tmp13(require("Text").Text, { variant: "text-xs/medium", color: "text-muted", children: result });
    obj3[1] = items2;
    items1[1] = tmp11(tmp12, obj3);
    if (isResolved) {
      intl3 = require("getSystemLocale").intl;
      tmp14Result = require("messagesProxy");
      tmp22 = isConnected ? tmp14Result.YQP5dE : tmp14Result["2HvOvh"];
      tmp14Result = { variant: "text-sm/normal", color: "text-muted", children: null };
      tmp14Result[2] = intl3.string(tmp22);
      tmp13Result1 = tmp13(require("Text").Text, tmp14Result);
    } else {
      obj5 = { style: null, children: null };
      obj5[0] = tmp.actions;
      if (hasMaxConnections) {
        items3 = [,];
        items3[0] = tmp16;
        obj6 = {
          accessibilityRole: "button",
          accessibilityLabel: null,
          disabled: null,
          onPress: null,
          style: null,
          children: null,
        };
        intl2 = require("getSystemLocale").intl;
        obj7 = { name: null };
        obj7[0] = request.parent_username;
        obj6[1] = intl2.formatToPlainString(require("messagesProxy")["4GtllP"], obj7);
        obj6[2] = actionsDisabled;
        obj6[3] = function onPress() {
          return callback2(request.parent_id);
        };
        items4 = [,];
        ({ actionButton: arr6[0], declineButton: arr6[1] } = tmp);
        obj6[4] = items4;
        if (isDeclineLoading) {
          tmp21 = ActivityIndicator;
          obj8 = { size: "small", color: null };
          obj8[1] = tmp.declineIcon.color;
          tmp13Result2 = tmp13(ActivityIndicator, obj8);
        } else {
          obj9 = { size: null, color: null, source: null };
          obj9[0] = require("Button").Icon.Sizes.SMALL;
          obj9[1] = tmp.declineIcon.color;
          obj9[2] = require("registerAsset");
          tmp13Result2 = tmp13(require("Button").Icon, obj9);
        }
        obj6[5] = tmp13Result2;
        items3[1] = tmp13(require("PressableBase").PressableOpacity, obj6);
        obj5[1] = items3;
        items1[2] = tmp11(tmp12, obj5);
        obj[1] = items1;
        return tmp11(tmp12, obj);
      } else {
        obj10 = {
          accessibilityRole: "button",
          accessibilityLabel: null,
          disabled: null,
          onPress: null,
          style: null,
          children: null,
        };
        intl = require("getSystemLocale").intl;
        obj11 = { name: null };
        obj11[0] = request.parent_username;
        obj10[1] = intl.formatToPlainString(require("messagesProxy").jc1Ip7, obj11);
        obj10[2] = actionsDisabled;
        obj10[3] = function onPress() {
          return callback(request.parent_id);
        };
        items5 = [,];
        ({ actionButton: arr4[0], acceptButton: arr4[1] } = tmp);
        obj10[4] = items5;
        if (isAcceptLoading) {
          tmp18 = ActivityIndicator;
          obj12 = { size: "small", color: null };
          obj12[1] = tmp.acceptIcon.color;
          tmp13Result3 = tmp13(ActivityIndicator, obj12);
        } else {
          obj13 = { size: "sm", color: null };
          obj13[1] = require("Themes").colors.WHITE;
          tmp13Result3 = tmp13(require("CheckmarkLargeBoldIcon").CheckmarkLargeBoldIcon, obj13);
        }
        obj10[5] = tmp13Result3;
        tmp13Result4 = tmp13(require("PressableBase").PressableOpacity, obj10);
      }
    }
    return;
  }
}
({ ActivityIndicator: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = {
  card: null,
  row: null,
  divider: null,
  avatar: null,
  details: null,
  actions: null,
  actionButton: null,
  acceptButton: null,
  declineButton: null,
  acceptIcon: null,
  declineIcon: null,
  inviteIconContainer: null,
  inviteQrButton: null,
  inviteShareButton: null,
  dividerRow: null,
  dividerLine: null,
  dividerLabel: null,
};
createCacheKey = {
  borderRadius: ThemesDefault.radii.lg,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  overflow: "hidden",
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: ThemesDefault.space.PX_12,
  paddingHorizontal: ThemesDefault.space.PX_16,
};
let obj2 = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginLeft: null };
const sum = ThemesDefault.space.PX_16 + require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL];
obj2[2] = sum + ThemesDefault.space.PX_12;
createCacheKey[2] = obj2;
let obj1 = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: ThemesDefault.space.PX_12,
  paddingHorizontal: ThemesDefault.space.PX_16,
};
createCacheKey[3] = {
  borderRadius: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL] / 2,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST,
};
let obj3 = {
  borderRadius: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL] / 2,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST,
};
createCacheKey[4] = {
  flexGrow: 1,
  flexShrink: 1,
  paddingLeft: ThemesDefault.space.PX_12,
  paddingRight: ThemesDefault.space.PX_4,
};
createCacheKey[5] = { flexDirection: "row", alignItems: "center" };
let obj4 = {
  flexGrow: 1,
  flexShrink: 1,
  paddingLeft: ThemesDefault.space.PX_12,
  paddingRight: ThemesDefault.space.PX_4,
};
createCacheKey[6] = {
  height: 36,
  width: 36,
  borderRadius: ThemesDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
};
let obj5 = {
  height: 36,
  width: 36,
  borderRadius: ThemesDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
};
createCacheKey[7] = { backgroundColor: ThemesDefault.colors.STATUS_POSITIVE, marginRight: ThemesDefault.space.PX_8 };
let obj6 = { backgroundColor: ThemesDefault.colors.STATUS_POSITIVE, marginRight: ThemesDefault.space.PX_8 };
createCacheKey[8] = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_STRONG,
};
let obj7 = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_STRONG,
};
createCacheKey[9] = { color: ThemesDefault.colors.WHITE };
let obj8 = { color: ThemesDefault.colors.WHITE };
createCacheKey[10] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj9 = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[11] = {
  width: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL],
  height: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL],
  alignItems: "center",
  justifyContent: "center",
};
let obj10 = {
  width: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL],
  height: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL],
  alignItems: "center",
  justifyContent: "center",
};
createCacheKey[12] = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_STRONG,
};
let obj11 = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_STRONG,
};
createCacheKey[13] = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_STRONG,
  marginRight: ThemesDefault.space.PX_8,
};
createCacheKey[14] = { flexDirection: "row", alignItems: "center" };
let obj12 = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_STRONG,
  marginRight: ThemesDefault.space.PX_8,
};
createCacheKey[15] = { flexGrow: 1, flexShrink: 1, height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
let obj13 = { flexGrow: 1, flexShrink: 1, height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[16] = { marginHorizontal: ThemesDefault.space.PX_12 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj14 = { marginHorizontal: ThemesDefault.space.PX_12 };
let result = require("set").fileFinishedImporting("modules/safety_flows/native/tasks/PendingRequestList.tsx");

export default function PendingRequestList(arg0) {
  let _require;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  let callback;
  ({ pendingRequests, linkedUsersProcessed, expiresAt, onRefreshLinkCode, onInviteAnotherGuardian, onShare } = arg0);
  const tmp = callback2();
  _require = tmp;
  useRefreshLinkCodeOnExpiryDefault(expiresAt, onRefreshLinkCode);
  let obj = useDerivedPendingRequests;
  obj = {
    pendingRequests,
    linkedUsersProcessed,
    onActionError() {
      let obj = _undefined(_undefined2[19]);
      obj = { key: "SAFETY_FLOWS_PARENTAL_CONSENT_LINK_UPDATE_ERROR", content: null };
      const intl = lib(_undefined2[12]).intl;
      obj[1] = intl.string(_undefined(_undefined2[15]).Wu8BK2);
      obj.open(obj);
    },
  };
  const pendingRequestListController = obj.usePendingRequestListController(obj);
  ({
    seenRequests,
    hasMaxConnections: c1,
    actioningUserId: c2,
    isAcceptLoading: c3,
    isDeclineLoading: c4,
    actionsDisabled: c5,
    handleAccept: c6,
    handleDecline: c7,
  } = pendingRequestListController);
  obj = { spacing: ThemesDefault.space.PX_16, children: null };
  let tmp8 = seenRequests.length > 0;
  if (tmp8) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.card;
    obj1[1] = seenRequests.map((parent_id) => {
      let tmp2 = arg1 > 0;
      if (tmp2) {
        let obj = { style: null };
        obj[0] = lib.divider;
        tmp2 = _undefined4(c5, obj);
      }
      const items = [tmp2];
      obj = {
        request: parent_id,
        hasMaxConnections: c1,
        isAcceptLoading: null,
        isDeclineLoading: null,
        actionsDisabled: null,
        onAccept: null,
        onDecline: null,
      };
      let tmp8 = _undefined3;
      if (_undefined3) {
        tmp8 = c2 === parent_id.parent_id;
      }
      obj[2] = tmp8;
      let tmp10 = c4;
      if (c4) {
        tmp10 = c2 === parent_id.parent_id;
      }
      obj = { children: null };
      obj[3] = tmp10;
      obj[4] = c5;
      obj[5] = c6;
      obj[6] = _undefined4;
      items[1] = _undefined4(closure_1_10, obj);
      obj[0] = items;
      return closure_1_8(_undefined3.Fragment, obj, parent_id.parent_id);
    });
    tmp8 = callback(c5, obj1);
  }
  let items = [tmp8, ,];
  const obj2 = { style: tmp.dividerRow, children: null };
  const items1 = [callback(c5, { style: tmp.dividerLine }), ,];
  const obj4 = { style: tmp.dividerLabel, variant: "text-sm/medium", color: "text-muted", children: null };
  let intl = tmp5(1236).intl;
  obj4[3] = intl.string(messagesProxyDefault["/SbB94"]);
  items1[1] = callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj4);
  items1[2] = callback(c5, { style: tmp.dividerLine });
  obj2[1] = items1;
  items[1] = closure_8(c5, obj2);
  const obj6 = { style: items2, children: null };
  items2 = [,];
  ({ card: arr3[0], row: arr3[1] } = tmp);
  const items3 = [
    callback(c5, {
      style: tmp.inviteIconContainer,
      children: callback(require("../../../../design/assets/native.tsx").PlaneIllocon, { size: 32 }),
    }),
    ,
  ];
  const obj8 = { style: tmp.details, children: null };
  const obj9 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp5(1236).intl;
  obj9[2] = intl2.string(messagesProxyDefault.z9gkwZ);
  const items4 = [callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj9)];
  const obj10 = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl3 = tmp5(1236).intl;
  obj10[2] = intl3.string(messagesProxyDefault["9t4+vC"]);
  items4[1] = callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj10);
  obj8[1] = items4;
  items3[1] = closure_8(c5, obj8);
  const obj11 = { style: tmp.actions, children: null };
  const obj12 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
  const intl4 = tmp5(1236).intl;
  obj12[1] = intl4.string(require("../../../../intl/index.native.tsx").t.Ej3B3Y);
  obj12[2] = onShare;
  const items5 = [,];
  ({ actionButton: arr6[0], inviteShareButton: arr6[1] } = tmp);
  obj12[3] = items5;
  obj12[4] = callback(require("../../../../design/components/Icon/native/redesign/generated/ShareIcon.tsx").ShareIcon, {
    size: "sm",
    color: tmp.declineIcon.color,
  });
  const items6 = [
    callback(require("../../../../design/void/Pressables/native/Pressables.tsx").PressableOpacity, obj12),
  ];
  const obj14 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
  const intl5 = tmp5(1236).intl;
  obj14[1] = intl5.string(messagesProxyDefault.z9gkwZ);
  obj14[2] = onInviteAnotherGuardian;
  const items7 = [,];
  ({ actionButton: arr8[0], inviteQrButton: arr8[1] } = tmp);
  obj14[3] = items7;
  obj14[4] = callback(
    require("../../../../design/components/Icon/native/redesign/generated/QrCodeIcon.tsx").QrCodeIcon,
    { size: "sm", color: tmp.declineIcon.color },
  );
  items6[1] = callback(require("../../../../design/void/Pressables/native/Pressables.tsx").PressableOpacity, obj14);
  obj11[1] = items6;
  items3[2] = closure_8(c5, obj11);
  obj6[1] = items3;
  items[2] = closure_8(c5, obj6);
  obj[1] = items;
  return closure_8(require("../../../../design/components/Stack/native/Stack.native.tsx").Stack, obj);
}
export { PendingRequestRow };
