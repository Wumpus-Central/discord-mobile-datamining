// === Module 17885: PendingRequestList ===

// Module 17885 (PendingRequestList)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import _modDef2690 from "module_2690" /* 2690 */;
import useRefreshLinkCodeOnExpiryDefault from "useRefreshLinkCodeOnExpiry" /* 14877 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
class PendingRequestRow {
  constructor(arg0) {
    request = global.request;
    ({ hasMaxConnections, actionsDisabled, onAccept, onDecline } = global);
    ({ isAcceptLoading, isDeclineLoading } = global);
    tmp = closure_9();
    tmp2 = request;
    tmp3 = onDecline;
    obj = request(onDecline[7]);
    items = [];
    items[0] = closure_6;
    stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(request.parent_id));
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
    tmp2Result = tmp2(tmp3[8]);
    pendingRequestResolution = tmp2Result.usePendingRequestResolution(request.parent_id);
    ({ isConnected, isResolved } = pendingRequestResolution);
    tmp2Result1 = tmp2(tmp3[9]);
    tmp11 = jsxs;
    tmp12 = View;
    obj = { style: tmp.row, children: null };
    tmp13 = jsx;
    result = tmp2Result1.formatPendingRequestSentText(request.created_at);
    obj1 = { avatarStyle: tmp.avatar, source: null, disablePlaceholder: true };
    tmp14 = onAccept;
    obj6 = onAccept(tmp3[10]);
    obj2 = { id: request.parent_id, avatar };
    obj1.source = obj6.getUserAvatarSource(obj2);
    items1 = [, , ];
    items1[0] = jsx(tmp2(tmp3[6]).Avatar, obj1);
    obj3 = { style: tmp.details, children: null };
    items2 = [, , ];
    items2[0] = jsx(tmp2(tmp3[11]).Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: globalName });
    tmp13Result = username1 !== globalName;
    if (tmp13Result) {
      obj4 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: null };
      obj4.children = username1;
      tmp13Result = tmp13(tmp2(tmp3[11]).Text, obj4);
    }
    items2[1] = tmp13Result;
    items2[2] = tmp13(tmp2(tmp3[11]).Text, { variant: "text-xs/medium", color: "text-muted", children: result });
    obj3.children = items2;
    items1[1] = tmp11(tmp12, obj3);
    if (isResolved) {
      intl3 = tmp2(tmp3[12]).intl;
      tmp14Result = tmp14(tmp3[13]);
      tmp22 = isConnected ? tmp14Result.YQP5dE : tmp14Result["2HvOvh"];
      tmp14Result = { variant: "text-sm/normal", color: "text-muted", children: null };
      tmp14Result.children = intl3.string(tmp22);
      tmp13Result1 = tmp13(tmp2(tmp3[11]).Text, tmp14Result);
    } else {
      obj5 = { style: null, children: null };
      obj5.style = tmp.actions;
      if (hasMaxConnections) {
        items3 = [, ];
        items3[0] = tmp16;
        obj6 = { accessibilityRole: "button", accessibilityLabel: null, disabled: null, onPress: null, style: null, children: null };
        intl2 = tmp2(tmp3[12]).intl;
        obj7 = { name: null };
        obj7.name = request.parent_username;
        obj6.accessibilityLabel = intl2.formatToPlainString(tmp14(tmp3[15])["4GtllP"], obj7);
        obj6.disabled = actionsDisabled;
        obj6.onPress = function onPress() {
          return dependencyMap(request.parent_id);
        };
        items4 = [, ];
        ({ actionButton: arr6[0], declineButton: arr6[1] } = tmp);
        obj6.style = items4;
        if (isDeclineLoading) {
          tmp21 = ActivityIndicator;
          obj8 = { size: "small", color: null };
          obj8.color = tmp.declineIcon.color;
          tmp13Result2 = tmp13(ActivityIndicator, obj8);
        } else {
          obj9 = { size: null, color: null, source: null };
          obj9.size = tmp2(tmp3[6]).Icon.Sizes.SMALL;
          obj9.color = tmp.declineIcon.color;
          obj9.source = tmp14(tmp3[17]);
          tmp13Result2 = tmp13(tmp2(tmp3[6]).Icon, obj9);
        }
        obj6.children = tmp13Result2;
        items3[1] = tmp13(tmp2(tmp3[14]).PressableOpacity, obj6);
        obj5.children = items3;
        items1[2] = tmp11(tmp12, obj5);
        obj.children = items1;
        return tmp11(tmp12, obj);
      } else {
        obj10 = { accessibilityRole: "button", accessibilityLabel: null, disabled: null, onPress: null, style: null, children: null };
        intl = tmp2(tmp3[12]).intl;
        obj11 = { name: null };
        obj11.name = request.parent_username;
        obj10.accessibilityLabel = intl.formatToPlainString(tmp14(tmp3[15]).jc1Ip7, obj11);
        obj10.disabled = actionsDisabled;
        obj10.onPress = function onPress() {
          return importDefault(request.parent_id);
        };
        items5 = [, ];
        ({ actionButton: arr4[0], acceptButton: arr4[1] } = tmp);
        obj10.style = items5;
        if (isAcceptLoading) {
          tmp18 = ActivityIndicator;
          obj12 = { size: "small", color: null };
          obj12.color = tmp.acceptIcon.color;
          tmp13Result3 = tmp13(ActivityIndicator, obj12);
        } else {
          obj13 = { size: "sm", color: null };
          obj13.color = tmp14(tmp3[5]).colors.WHITE;
          tmp13Result3 = tmp13(tmp2(tmp3[16]).CheckmarkLargeBoldIcon, obj13);
        }
        obj10.children = tmp13Result3;
        tmp13Result4 = tmp13(tmp2(tmp3[14]).PressableOpacity, obj10);
      }
    }
    return;
  }
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { card: null, row: null, divider: null, avatar: null, details: null, actions: null, actionButton: null, acceptButton: null, declineButton: null, acceptIcon: null, declineIcon: null, inviteIconContainer: null, inviteQrButton: null, inviteShareButton: null, dividerRow: null, dividerLine: null, dividerLabel: null };
createStyles = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden" };
createStyles.card = createStyles;
createStyles.row = { flexDirection: "row", alignItems: "center", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let obj2 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: null };
const sum = nativeDefault.space.PX_16 + fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.NORMAL];
obj2.marginLeft = sum + nativeDefault.space.PX_12;
createStyles.divider = obj2;
let obj1 = { flexDirection: "row", alignItems: "center", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.avatar = { borderRadius: fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let obj3 = { borderRadius: fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
createStyles.details = { flexGrow: 1, flexShrink: 1, paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_4 };
createStyles.actions = { flexDirection: "row", alignItems: "center" };
let size = { height: 36, width: 36, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
createStyles.actionButton = size;
let obj4 = { flexGrow: 1, flexShrink: 1, paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_4 };
createStyles.acceptButton = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE, marginRight: nativeDefault.space.PX_8 };
let obj5 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE, marginRight: nativeDefault.space.PX_8 };
createStyles.declineButton = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
createStyles.acceptIcon = { color: nativeDefault.colors.WHITE };
let obj7 = { color: nativeDefault.colors.WHITE };
createStyles.declineIcon = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const size1 = { width: fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.NORMAL], height: fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.NORMAL], alignItems: "center", justifyContent: "center" };
createStyles.inviteIconContainer = size1;
let obj8 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.inviteQrButton = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
createStyles.inviteShareButton = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, marginRight: nativeDefault.space.PX_8 };
createStyles.dividerRow = { flexDirection: "row", alignItems: "center" };
let obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, marginRight: nativeDefault.space.PX_8 };
createStyles.dividerLine = { flexGrow: 1, flexShrink: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj11 = { flexGrow: 1, flexShrink: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.dividerLabel = { marginHorizontal: nativeDefault.space.PX_12 };
const React7 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/safety_flows/native/tasks/PendingRequestList.tsx");

export default function PendingRequestList(arg0) {
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  ({ pendingRequests, linkedUsersProcessed, expiresAt, onRefreshLinkCode, onInviteAnotherGuardian, onShare } = arg0);
  const tmp = closure_9();
  _require = tmp;
  useRefreshLinkCodeOnExpiryDefault(expiresAt, onRefreshLinkCode);
  require("usePendingParentRequests");
  let obj = {
    pendingRequests,
    linkedUsersProcessed,
    onActionError() {
      hasMaxConnections(_undefined[19]);
      const obj = { key: "SAFETY_FLOWS_PARENTAL_CONSENT_LINK_UPDATE_ERROR", content: null };
      const intl = closure_0(_undefined[12]).intl;
      obj.content = intl.string(hasMaxConnections(_undefined[15]).Wu8BK2);
      obj.open(obj);
    }
  };
  const pendingRequestListController = obj.usePendingRequestListController(obj);
  ({ seenRequests, hasMaxConnections: c1, actioningUserId: c2, isAcceptLoading: c3, isDeclineLoading: c4, actionsDisabled: c5, handleAccept: c6, handleDecline: c7 } = pendingRequestListController);
  obj = { spacing: nativeDefault.space.PX_16, children: null };
  let tmp8 = seenRequests.length > 0;
  if (tmp8) {
    const obj1 = {
      style: tmp.card,
      children: seenRequests.map((request, index) => {
          let tmp2 = index > 0;
          if (tmp2) {
            let obj = { style: closure_0.divider };
            tmp2 = React5(hasOwnProperty, obj);
          }
          const items = [tmp2, ];
          obj = { request, hasMaxConnections, isAcceptLoading: null, isDeclineLoading: null, actionsDisabled: null, onAccept: null, onDecline: null };
          let tmp8 = c3;
          if (c3) {
            tmp8 = c2 === request.parent_id;
          }
          obj.isAcceptLoading = tmp8;
          let tmp10 = c4;
          if (c4) {
            tmp10 = c2 === request.parent_id;
          }
          obj = { children: null, isDeclineLoading: tmp10, actionsDisabled, onAccept, onDecline };
          items[1] = React5(PendingRequestRow, obj);
          obj.children = items;
          return React6(noop.Fragment, obj, request.parent_id);
        })
    };
    tmp8 = c7(c5, obj1);
  }
  let items = [tmp8, , ];
  const obj2 = { style: tmp.dividerRow, children: null };
  const items1 = [c7(c5, { style: tmp.dividerLine }), , ];
  const obj4 = { style: tmp.dividerLabel, variant: "text-sm/medium", color: "text-muted", children: null };
  let intl = tmp5(1114).intl;
  obj4.children = intl.string(_modDef2690["/SbB94"]);
  items1[1] = c7(require("Text/Text").Text, obj4);
  items1[2] = c7(c5, { style: tmp.dividerLine });
  obj2.children = items1;
  items[1] = closure_8(c5, obj2);
  const obj6 = { style: null, children: null };
  const items2 = [, ];
  ({ card: arr3[0], row: arr3[1] } = tmp);
  obj6.style = items2;
  const items3 = [c7(c5, { style: tmp.inviteIconContainer, children: c7(require("native").PlaneIllocon, { size: 32 }) }), , ];
  const obj8 = { style: tmp.details, children: null };
  const obj9 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp5(1114).intl;
  obj9.children = intl2.string(_modDef2690.z9gkwZ);
  const items4 = [c7(require("Text/Text").Text, obj9), ];
  const obj10 = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl3 = tmp5(1114).intl;
  obj10.children = intl3.string(_modDef2690["9t4+vC"]);
  items4[1] = c7(require("Text/Text").Text, obj10);
  obj8.children = items4;
  items3[1] = closure_8(c5, obj8);
  const obj11 = { style: tmp.actions, children: null };
  const obj12 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
  const intl4 = tmp5(1114).intl;
  obj12.accessibilityLabel = intl4.string(require("util").t.Ej3B3Y);
  obj12.onPress = onShare;
  const items5 = [, ];
  ({ actionButton: arr6[0], inviteShareButton: arr6[1] } = tmp);
  obj12.style = items5;
  obj12.children = c7(require("ShareIcon").ShareIcon, { size: "sm", color: tmp.declineIcon.color });
  const items6 = [c7(require("Pressables").PressableOpacity, obj12), ];
  const obj14 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
  const intl5 = tmp5(1114).intl;
  obj14.accessibilityLabel = intl5.string(_modDef2690.z9gkwZ);
  obj14.onPress = onInviteAnotherGuardian;
  const items7 = [, ];
  ({ actionButton: arr8[0], inviteQrButton: arr8[1] } = tmp);
  obj14.style = items7;
  obj14.children = c7(require("QrCodeIcon").QrCodeIcon, { size: "sm", color: tmp.declineIcon.color });
  items6[1] = c7(require("Pressables").PressableOpacity, obj14);
  obj11.children = items6;
  items3[2] = closure_8(c5, obj11);
  obj6.children = items3;
  items[2] = closure_8(c5, obj6);
  obj.children = items;
  return closure_8(require("Stack/Stack").Stack, obj);
};
export { PendingRequestRow };