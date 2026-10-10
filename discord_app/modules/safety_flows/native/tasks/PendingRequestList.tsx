// === Module 18645: PendingRequestList ===

// Module 18645 (PendingRequestList)
import nativeDefault from "native" /* 587 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import _modDef2568 from "module_2568" /* 2568 */;
import _modDef2862 from "module_2862" /* 2862 */;
import useRefreshLinkCodeOnExpiryDefault from "useRefreshLinkCodeOnExpiry" /* 15133 */;
import _modDef15181 from "module_15181" /* 15181 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { card: { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden" }, row: null, divider: null, avatar: null, details: null, actions: null, actionButton: null, acceptButton: null, declineButton: null, acceptIcon: null, declineIcon: null, inviteIconContainer: null, inviteQrButton: null, inviteShareButton: null, dividerRow: null, dividerLine: null, dividerLabel: null };
let obj3 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden" };
obj2.row = { flexDirection: "row", alignItems: "center", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let obj5 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: null };
const sum = nativeDefault.space.PX_16 + fn(1200).AVATAR_SIZE_MAP[fn(undefined, 1200).AvatarSizes.NORMAL];
obj5.marginLeft = sum + nativeDefault.space.PX_12;
obj2.divider = obj5;
let obj4 = { flexDirection: "row", alignItems: "center", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.avatar = { borderRadius: fn(1200).AVATAR_SIZE_MAP[fn(undefined, 1200).AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let obj6 = { borderRadius: fn(1200).AVATAR_SIZE_MAP[fn(undefined, 1200).AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj2.details = { flexGrow: 1, flexShrink: 1, paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_4 };
obj2.actions = { flexDirection: "row", alignItems: "center" };
let size = { height: 36, width: 36, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj2.actionButton = size;
let obj7 = { flexGrow: 1, flexShrink: 1, paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_4 };
obj2.acceptButton = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE, marginRight: nativeDefault.space.PX_8 };
let obj8 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE, marginRight: nativeDefault.space.PX_8 };
obj2.declineButton = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
obj2.acceptIcon = { color: nativeDefault.colors.WHITE };
let obj10 = { color: nativeDefault.colors.WHITE };
obj2.declineIcon = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const size1 = { width: fn(1200).AVATAR_SIZE_MAP[fn(undefined, 1200).AvatarSizes.NORMAL], height: fn(1200).AVATAR_SIZE_MAP[fn(undefined, 1200).AvatarSizes.NORMAL], alignItems: "center", justifyContent: "center" };
obj2.inviteIconContainer = size1;
let obj11 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.inviteQrButton = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
let obj12 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
obj2.inviteShareButton = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, marginRight: nativeDefault.space.PX_8 };
obj2.dividerRow = { flexDirection: "row", alignItems: "center" };
let obj13 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, marginRight: nativeDefault.space.PX_8 };
obj2.dividerLine = { flexGrow: 1, flexShrink: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj14 = { flexGrow: 1, flexShrink: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.dividerLabel = { marginHorizontal: nativeDefault.space.PX_12 };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function PendingRequestRow(request) {
  const cResult = request(onDecline[8]).c(45);
  request = request.request;
  ({ hasMaxConnections, isAcceptLoading, isDeclineLoading, actionsDisabled, onAccept } = request);
  onDecline = request.onDecline;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== request.parent_id) {
    const fn = function s() {
      return UserStore.getUser(request.parent_id);
    };
    cResult[1] = request.parent_id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = request(onDecline[8]);
  const stateFromStores = request(onDecline[9]).useStateFromStores(first, tmp7);
  let globalName;
  if (stateFromStores != null) {
    globalName = stateFromStores.globalName;
  }
  if (globalName == null) {
    let username;
    if (stateFromStores != null) {
      username = stateFromStores.username;
    }
    globalName = username;
  }
  if (globalName == null) {
    globalName = request.parent_username;
  }
  let username1;
  if (stateFromStores != null) {
    username1 = stateFromStores.username;
  }
  if (username1 == null) {
    username1 = request.parent_username;
  }
  let avatar;
  if (stateFromStores != null) {
    avatar = stateFromStores.avatar;
  }
  if (avatar == null) {
    avatar = request.parent_avatar;
  }
  const tmpResult = request(onDecline[9]);
  const pendingRequestResolution = request(onDecline[10]).usePendingRequestResolution(request.parent_id);
  ({ isConnected, isResolved } = pendingRequestResolution);
  if (cResult[3] !== request.created_at) {
    const result = tmp(tmp2[11]).formatPendingRequestSentText(request.created_at);
    cResult[3] = request.created_at;
    cResult[4] = result;
    let tmp14 = result;
    const tmpResult4 = tmp(tmp2[11]);
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === avatar) {
    if (cResult[6] === request.parent_id) {
      let tmp18 = cResult[7];
    }
    if (cResult[8] === tmp4.avatar) {
      if (cResult[9] === tmp18) {
        let tmp20 = cResult[10];
      }
      if (cResult[11] !== globalName) {
        const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: globalName };
        const tmp25 = closure_7(tmp(tmp2[13]).Text, obj2);
        cResult[11] = globalName;
        cResult[12] = tmp25;
        let tmp23 = tmp25;
      } else {
        tmp23 = cResult[12];
      }
      if (cResult[13] === username1 !== globalName) {
        if (cResult[14] === username1) {
          let tmp27 = cResult[15];
        }
        if (cResult[16] !== tmp14) {
          const obj3 = { variant: "text-xs/medium", color: "text-muted", children: tmp14 };
          const tmp32 = closure_7(tmp(tmp2[13]).Text, obj3);
          cResult[16] = tmp14;
          cResult[17] = tmp32;
          let tmp30 = tmp32;
        } else {
          tmp30 = cResult[17];
        }
        if (cResult[18] === tmp4.details) {
          if (cResult[19] === tmp30) {
            if (cResult[20] === tmp23) {
              if (cResult[21] === tmp27) {
                let tmp33 = cResult[22];
              }
              if (cResult[23] === actionsDisabled) {
                if (cResult[24] === hasMaxConnections) {
                  if (cResult[25] === isAcceptLoading) {
                    if (cResult[26] === isConnected) {
                      if (cResult[27] === isDeclineLoading) {
                        if (cResult[28] === isResolved) {
                          if (cResult[29] === onAccept) {
                            if (cResult[30] === onDecline) {
                              if (cResult[31] === request.parent_id) {
                                if (cResult[32] === request.parent_username) {
                                  if (cResult[33] === tmp4.acceptButton) {
                                    if (cResult[34] === tmp4.acceptIcon) {
                                      if (cResult[35] === tmp4.actionButton) {
                                        if (cResult[36] === tmp4.actions) {
                                          if (cResult[37] === tmp4.declineButton) {
                                            if (cResult[38] === tmp4.declineIcon) {
                                              if (cResult[40] === tmp4.row) {
                                                if (cResult[41] === tmp33) {
                                                  if (cResult[42] === tmp37) {
                                                    if (cResult[43] === tmp20) {
                                                      let tmp56 = cResult[44];
                                                    }
                                                    return tmp56;
                                                  }
                                                }
                                              }
                                              const obj4 = { style: tmp16, children: null };
                                              const items1 = [tmp20, tmp33, cResult[39]];
                                              obj4.children = items1;
                                              const tmp59 = closure_8(closure_5, obj4);
                                              cResult[40] = tmp4.row;
                                              cResult[41] = tmp33;
                                              cResult[42] = cResult[39];
                                              cResult[43] = tmp20;
                                              cResult[44] = tmp59;
                                              tmp56 = tmp59;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              if (!isResolved) {
                const obj6 = { style: tmp4.actions, children: null };
                if (hasMaxConnections) {
                  const items2 = [tmp40, ];
                  const obj7 = { accessibilityRole: "button", accessibilityLabel: null, disabled: null, onPress: null, style: null, children: null };
                  const intl2 = tmp(tmp2[14]).intl;
                  const obj8 = { name: request.parent_username };
                  obj7.accessibilityLabel = intl2.formatToPlainString(onAccept(tmp2[17])["4GtllP"], obj8);
                  obj7.disabled = actionsDisabled;
                  obj7.onPress = function onPress() {
                    return onDecline(request.parent_id);
                  };
                  const items3 = [, ];
                  ({ actionButton: arr5[0], declineButton: arr5[1] } = tmp4);
                  obj7.style = items3;
                  if (isDeclineLoading) {
                    const obj9 = { size: "small", color: tmp4.declineIcon.color };
                    let tmp46Result = closure_7(closure_4, obj9);
                  } else {
                    const obj10 = { size: tmp(tmp2[6]).Icon.Sizes.SMALL, color: tmp4.declineIcon.color, source: onAccept(tmp2[19]) };
                    tmp46Result = closure_7(tmp(tmp2[6]).Icon, obj10);
                  }
                  obj7.children = tmp46Result;
                  items2[1] = closure_7(tmp(tmp2[16]).PressableOpacity, obj7);
                  obj6.children = items2;
                  const tmp38Result = tmp38(tmp39, obj6);
                  cResult[23] = actionsDisabled;
                  cResult[24] = hasMaxConnections;
                  cResult[25] = isAcceptLoading;
                  cResult[26] = isConnected;
                  cResult[27] = isDeclineLoading;
                  cResult[28] = isResolved;
                  cResult[29] = onAccept;
                  cResult[30] = onDecline;
                  cResult[31] = request.parent_id;
                  cResult[32] = request.parent_username;
                  cResult[33] = tmp4.acceptButton;
                  cResult[34] = tmp4.acceptIcon;
                  cResult[35] = tmp4.actionButton;
                  cResult[36] = tmp4.actions;
                  cResult[37] = tmp4.declineButton;
                  cResult[38] = tmp4.declineIcon;
                  cResult[39] = tmp38Result;
                } else {
                  const obj11 = { accessibilityRole: "button", accessibilityLabel: null, disabled: null, onPress: null, style: null, children: null };
                  const intl = tmp(tmp2[14]).intl;
                  const obj12 = { name: request.parent_username };
                  obj11.accessibilityLabel = intl.formatToPlainString(onAccept(tmp2[17]).jc1Ip7, obj12);
                  obj11.disabled = actionsDisabled;
                  obj11.onPress = function onPress() {
                    return onAccept(request.parent_id);
                  };
                  const items4 = [, ];
                  ({ actionButton: arr3[0], acceptButton: arr3[1] } = tmp4);
                  obj11.style = items4;
                  if (isAcceptLoading) {
                    const obj13 = { size: "small", color: tmp4.acceptIcon.color };
                    let tmp41Result = closure_7(closure_4, obj13);
                  } else {
                    const obj14 = { size: "sm", color: onAccept(tmp2[5]).colors.WHITE };
                    tmp41Result = closure_7(tmp(tmp2[18]).CheckmarkLargeBoldIcon, obj14);
                  }
                  obj11.children = tmp41Result;
                  closure_7(tmp(tmp2[16]).PressableOpacity, obj11);
                }
              }
              const intl3 = tmp(tmp2[14]).intl;
              onAccept(tmp2[15]);
              const obj15 = { variant: "text-sm/normal", color: "text-muted", children: null };
              obj15.children = intl3.string(isConnected ? obj15.YQP5dE : obj15["2HvOvh"]);
              closure_7(tmp(tmp2[13]).Text, obj15);
              const tmp53 = isConnected ? obj15.YQP5dE : obj15["2HvOvh"];
            }
          }
        }
        const obj16 = { style: tmp4.details, children: null };
        const items5 = [tmp23, tmp27, tmp30];
        obj16.children = items5;
        const tmp36 = closure_8(closure_5, obj16);
        cResult[18] = tmp4.details;
        cResult[19] = tmp30;
        cResult[20] = tmp23;
        cResult[21] = tmp27;
        cResult[22] = tmp36;
        tmp33 = tmp36;
      }
      let tmp28 = tmp26;
      if (username1 !== globalName) {
        const obj17 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: username1 };
        tmp28 = closure_7(tmp(tmp2[13]).Text, obj17);
      }
      cResult[13] = username1 !== globalName;
      cResult[14] = username1;
      cResult[15] = tmp28;
      tmp27 = tmp28;
    }
    const obj18 = { avatarStyle: tmp17, source: tmp18, disablePlaceholder: true };
    const tmp22 = closure_7(tmp(tmp2[6]).Avatar, obj18);
    cResult[8] = tmp4.avatar;
    cResult[9] = tmp18;
    cResult[10] = tmp22;
    tmp20 = tmp22;
  }
  const tmpResult3 = request(onDecline[10]);
  const userAvatarSource = onAccept(onDecline[12]).getUserAvatarSource({ id: request.parent_id, avatar });
  cResult[5] = avatar;
  cResult[6] = request.parent_id;
  cResult[7] = userAvatarSource;
  tmp18 = userAvatarSource;
  const obj19 = { id: request.parent_id, avatar };
  const obj5 = onAccept(onDecline[12]);
}) : (function PendingRequestRow(request) {
  request = request.request;
  ({ hasMaxConnections, actionsDisabled, onAccept: importDefault, onDecline: dependencyMap } = request);
  ({ isAcceptLoading, isDeclineLoading } = request);
  const tmp = closure_9();
  const items = [UserStore];
  const stateFromStores = request(504).useStateFromStores(items, () => UserStore.getUser(request.parent_id));
  let globalName;
  if (stateFromStores != null) {
    globalName = stateFromStores.globalName;
  }
  if (globalName == null) {
    let username;
    if (stateFromStores != null) {
      username = stateFromStores.username;
    }
    globalName = username;
  }
  if (globalName == null) {
    globalName = request.parent_username;
  }
  let username1;
  if (stateFromStores != null) {
    username1 = stateFromStores.username;
  }
  if (username1 == null) {
    username1 = request.parent_username;
  }
  let avatar;
  if (stateFromStores != null) {
    avatar = stateFromStores.avatar;
  }
  if (avatar == null) {
    avatar = request.parent_avatar;
  }
  const obj = request(504);
  const pendingRequestResolution = request(18643).usePendingRequestResolution(request.parent_id);
  ({ isConnected, isResolved } = pendingRequestResolution);
  const tmp2Result = request(18643);
  const obj2 = { style: tmp.row, children: null };
  const result = request(18646).formatPendingRequestSentText(request.created_at);
  const obj3 = { avatarStyle: tmp.avatar, source: null, disablePlaceholder: true };
  const tmp2Result2 = request(18646);
  obj3.source = AvatarUtilsDefault.getUserAvatarSource({ id: request.parent_id, avatar });
  const items1 = [closure_7(request(1200).Avatar, obj3), , ];
  const obj5 = { style: tmp.details, children: null };
  const items2 = [closure_7(request(5088).Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: globalName }), , ];
  let tmp13Result = username1 !== globalName;
  if (tmp13Result) {
    const obj7 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: username1 };
    tmp13Result = closure_7(tmp2(5088).Text, obj7);
  }
  items2[1] = tmp13Result;
  items2[2] = closure_7(request(5088).Text, { variant: "text-xs/medium", color: "text-muted", children: result });
  obj5.children = items2;
  items1[1] = closure_8(closure_5, obj5);
  if (isResolved) {
    const intl3 = tmp2(1126).intl;
    const obj8 = { variant: "text-sm/normal", color: "text-muted", children: null };
    obj8.children = intl3.string(isConnected ? obj8.YQP5dE : obj8["2HvOvh"]);
    closure_7(tmp2(5088).Text, obj8);
    const tmp22 = isConnected ? obj8.YQP5dE : obj8["2HvOvh"];
  } else {
    const obj9 = { style: tmp.actions, children: null };
    if (hasMaxConnections) {
      const items3 = [tmp16, ];
      const obj10 = { accessibilityRole: "button", accessibilityLabel: null, disabled: null, onPress: null, style: null, children: null };
      const intl2 = tmp2(1126).intl;
      const obj11 = { name: request.parent_username };
      obj10.accessibilityLabel = intl2.formatToPlainString(_modDef2568["4GtllP"], obj11);
      obj10.disabled = actionsDisabled;
      obj10.onPress = function onPress() {
        return dependencyMap(request.parent_id);
      };
      const items4 = [, ];
      ({ actionButton: arr6[0], declineButton: arr6[1] } = tmp);
      obj10.style = items4;
      if (isDeclineLoading) {
        const obj12 = { size: "small", color: tmp.declineIcon.color };
        let tmp13Result6 = closure_7(closure_4, obj12);
      } else {
        const obj13 = { size: tmp2(1200).Icon.Sizes.SMALL, color: tmp.declineIcon.color, source: _modDef15181 };
        tmp13Result6 = closure_7(tmp2(1200).Icon, obj13);
      }
      obj10.children = tmp13Result6;
      items3[1] = closure_7(tmp2(6184).PressableOpacity, obj10);
      obj9.children = items3;
      items1[2] = closure_8(closure_5, obj9);
      obj2.children = items1;
      return closure_8(closure_5, obj2);
    } else {
      const obj14 = { accessibilityRole: "button", accessibilityLabel: null, disabled: null, onPress: null, style: null, children: null };
      const intl = tmp2(1126).intl;
      const obj15 = { name: request.parent_username };
      obj14.accessibilityLabel = intl.formatToPlainString(_modDef2568.jc1Ip7, obj15);
      obj14.disabled = actionsDisabled;
      obj14.onPress = function onPress() {
        return importDefault(request.parent_id);
      };
      const items5 = [, ];
      ({ actionButton: arr4[0], acceptButton: arr4[1] } = tmp);
      obj14.style = items5;
      if (isAcceptLoading) {
        const obj16 = { size: "small", color: tmp.acceptIcon.color };
        let tmp13Result7 = closure_7(closure_4, obj16);
      } else {
        const obj17 = { size: "sm", color: nativeDefault.colors.WHITE };
        tmp13Result7 = closure_7(tmp2(8848).CheckmarkLargeBoldIcon, obj17);
      }
      obj14.children = tmp13Result7;
      closure_7(tmp2(6184).PressableOpacity, obj14);
    }
  }
  const obj4 = { id: request.parent_id, avatar };
});
let closure_10 = tmp5;
ReactCompilerGating = fn(558);
let obj15 = { marginHorizontal: nativeDefault.space.PX_12 };
size = fn(2);
let result = size.fileFinishedImporting("modules/safety_flows/native/tasks/PendingRequestList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PendingRequestList(arg0) {
  const cResult = require("c").c(70);
  ({ pendingRequests, linkedUsersProcessed, onInviteAnotherGuardian, onShare } = arg0);
  ({ expiresAt, onRefreshLinkCode } = arg0);
  const tmp4 = closure_9();
  _require = tmp4;
  hasMaxConnections(actioningUserId[20])(expiresAt, onRefreshLinkCode);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const obj2 = { text: null };
      const intl = closure_0(actioningUserId[14]).intl;
      obj2.text = intl.string(hasMaxConnections(actioningUserId[17]).Wu8BK2);
      hasMaxConnections(actioningUserId[21]).open("SAFETY_FLOWS_PARENTAL_CONSENT_LINK_UPDATE_ERROR", obj2);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === linkedUsersProcessed) {
    if (cResult[2] === pendingRequests) {
      let tmp8 = cResult[3];
    }
    const pendingRequestListController = tmp(tmp2[10]).usePendingRequestListController(tmp8);
    ({ seenRequests, hasMaxConnections } = pendingRequestListController);
    actioningUserId = pendingRequestListController.actioningUserId;
    const isAcceptLoading = pendingRequestListController.isAcceptLoading;
    const isDeclineLoading = pendingRequestListController.isDeclineLoading;
    const actionsDisabled = pendingRequestListController.actionsDisabled;
    const handleAccept = pendingRequestListController.handleAccept;
    const handleDecline = pendingRequestListController.handleDecline;
    if (cResult[4] === actioningUserId) {
      if (cResult[5] === actionsDisabled) {
        if (cResult[6] === handleAccept) {
          if (cResult[7] === handleDecline) {
            if (cResult[8] === hasMaxConnections) {
              if (cResult[9] === isAcceptLoading) {
                if (cResult[10] === isDeclineLoading) {
                  if (cResult[11] === seenRequests) {
                    if (cResult[12] === tmp4.card) {
                      if (cResult[13] === tmp4.divider) {
                        let tmp10 = cResult[14];
                      }
                      if (cResult[15] !== tmp4.dividerLine) {
                        let obj2 = { style: tmp4.dividerLine };
                        const tmp17 = handleDecline(actionsDisabled, obj2);
                        cResult[15] = tmp4.dividerLine;
                        cResult[16] = tmp17;
                        let tmp14 = tmp17;
                      } else {
                        tmp14 = cResult[16];
                      }
                      const _Symbol = Symbol;
                      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                        let intl = tmp(tmp2[14]).intl;
                        const stringResult = intl.string(hasMaxConnections(tmp2[15])["/SbB94"]);
                        cResult[17] = stringResult;
                        let tmp18 = stringResult;
                      } else {
                        tmp18 = cResult[17];
                      }
                      if (cResult[18] !== tmp4.dividerLabel) {
                        let obj3 = { style: tmp4.dividerLabel, variant: "text-sm/medium", color: "text-muted", children: tmp18 };
                        const tmp22 = handleDecline(tmp(tmp2[13]).Text, obj3);
                        cResult[18] = tmp4.dividerLabel;
                        cResult[19] = tmp22;
                        let tmp20 = tmp22;
                      } else {
                        tmp20 = cResult[19];
                      }
                      if (cResult[20] !== tmp4.dividerLine) {
                        const obj4 = { style: tmp4.dividerLine };
                        const tmp26 = handleDecline(actionsDisabled, obj4);
                        cResult[20] = tmp4.dividerLine;
                        cResult[21] = tmp26;
                        let tmp23 = tmp26;
                      } else {
                        tmp23 = cResult[21];
                      }
                      if (cResult[22] === tmp4.dividerRow) {
                        if (cResult[23] === tmp14) {
                          if (cResult[24] === tmp20) {
                            if (cResult[25] === tmp23) {
                              let tmp27 = cResult[26];
                            }
                            if (cResult[27] === tmp4.card) {
                              if (cResult[28] === tmp4.row) {
                                let tmp31 = cResult[29];
                              }
                              const _Symbol2 = Symbol;
                              if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                                const tmp34 = handleDecline(tmp(tmp2[22]).PlaneIllocon, { size: 32 });
                                cResult[30] = tmp34;
                                let tmp32 = tmp34;
                              } else {
                                tmp32 = cResult[30];
                              }
                              if (cResult[31] !== tmp4.inviteIconContainer) {
                                const obj5 = { style: tmp4.inviteIconContainer, children: tmp32 };
                                const tmp38 = handleDecline(actionsDisabled, obj5);
                                cResult[31] = tmp4.inviteIconContainer;
                                cResult[32] = tmp38;
                                let tmp35 = tmp38;
                              } else {
                                tmp35 = cResult[32];
                              }
                              const _Symbol3 = Symbol;
                              if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                                const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
                                const intl2 = tmp(tmp2[14]).intl;
                                obj6.children = intl2.string(hasMaxConnections(tmp2[15]).z9gkwZ);
                                const tmp41 = handleDecline(tmp(tmp2[13]).Text, obj6);
                                cResult[33] = tmp41;
                                let tmp39 = tmp41;
                              } else {
                                tmp39 = cResult[33];
                              }
                              const _Symbol4 = Symbol;
                              if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                                const obj7 = { variant: "text-xs/medium", color: "text-default", children: null };
                                const intl3 = tmp(tmp2[14]).intl;
                                obj7.children = intl3.string(hasMaxConnections(tmp2[15])["9t4+vC"]);
                                const tmp44 = handleDecline(tmp(tmp2[13]).Text, obj7);
                                cResult[34] = tmp44;
                                let tmp42 = tmp44;
                              } else {
                                tmp42 = cResult[34];
                              }
                              if (cResult[35] !== tmp4.details) {
                                const obj8 = { style: tmp4.details, children: null };
                                let items = [tmp39, tmp42];
                                obj8.children = items;
                                const tmp48 = closure_8(actionsDisabled, obj8);
                                cResult[35] = tmp4.details;
                                cResult[36] = tmp48;
                                let tmp45 = tmp48;
                              } else {
                                tmp45 = cResult[36];
                              }
                              const _Symbol5 = Symbol;
                              if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                                const intl4 = tmp(tmp2[14]).intl;
                                const stringResult1 = intl4.string(tmp(tmp2[14]).t.Ej3B3Y);
                                cResult[37] = stringResult1;
                                let tmp49 = stringResult1;
                              } else {
                                tmp49 = cResult[37];
                              }
                              if (cResult[38] === tmp4.actionButton) {
                                if (cResult[39] === tmp4.inviteShareButton) {
                                  let tmp51 = cResult[40];
                                }
                                if (cResult[41] !== tmp4.declineIcon.color) {
                                  const obj9 = { size: "sm", color: tmp4.declineIcon.color };
                                  const tmp54 = handleDecline(tmp(tmp2[23]).ShareIcon, obj9);
                                  cResult[41] = tmp4.declineIcon.color;
                                  cResult[42] = tmp54;
                                  let tmp52 = tmp54;
                                } else {
                                  tmp52 = cResult[42];
                                }
                                if (cResult[43] === onShare) {
                                  if (cResult[44] === tmp51) {
                                    if (cResult[45] === tmp52) {
                                      let tmp55 = cResult[46];
                                    }
                                    const _Symbol6 = Symbol;
                                    if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                                      const intl5 = tmp(tmp2[14]).intl;
                                      const stringResult2 = intl5.string(hasMaxConnections(tmp2[15]).z9gkwZ);
                                      cResult[47] = stringResult2;
                                      let tmp58 = stringResult2;
                                    } else {
                                      tmp58 = cResult[47];
                                    }
                                    if (cResult[48] === tmp4.actionButton) {
                                      if (cResult[49] === tmp4.inviteQrButton) {
                                        let tmp60 = cResult[50];
                                      }
                                      if (cResult[51] !== tmp4.declineIcon.color) {
                                        const obj10 = { size: "sm", color: tmp4.declineIcon.color };
                                        const tmp63 = handleDecline(tmp(tmp2[24]).QrCodeIcon, obj10);
                                        cResult[51] = tmp4.declineIcon.color;
                                        cResult[52] = tmp63;
                                        let tmp61 = tmp63;
                                      } else {
                                        tmp61 = cResult[52];
                                      }
                                      if (cResult[53] === onInviteAnotherGuardian) {
                                        if (cResult[54] === tmp60) {
                                          if (cResult[55] === tmp61) {
                                            let tmp64 = cResult[56];
                                          }
                                          if (cResult[57] === tmp4.actions) {
                                            if (cResult[58] === tmp55) {
                                              if (cResult[59] === tmp64) {
                                                let tmp67 = cResult[60];
                                              }
                                              if (cResult[61] === tmp31) {
                                                if (cResult[62] === tmp35) {
                                                  if (cResult[63] === tmp45) {
                                                    if (cResult[64] === tmp67) {
                                                      let tmp71 = cResult[65];
                                                    }
                                                    if (cResult[66] === tmp27) {
                                                      if (cResult[67] === tmp71) {
                                                        if (cResult[68] === tmp10) {
                                                          let tmp75 = cResult[69];
                                                        }
                                                        return tmp75;
                                                      }
                                                    }
                                                    const obj11 = { spacing: hasMaxConnections(tmp2[5]).space.PX_16, children: null };
                                                    const items1 = [tmp10, tmp27, tmp71];
                                                    obj11.children = items1;
                                                    const tmp77 = closure_8(tmp(tmp2[25]).Stack, obj11);
                                                    cResult[66] = tmp27;
                                                    cResult[67] = tmp71;
                                                    cResult[68] = tmp10;
                                                    cResult[69] = tmp77;
                                                    tmp75 = tmp77;
                                                  }
                                                }
                                              }
                                              const obj12 = { style: tmp31, children: null };
                                              const items2 = [tmp35, tmp45, tmp67];
                                              obj12.children = items2;
                                              const tmp74 = closure_8(actionsDisabled, obj12);
                                              cResult[61] = tmp31;
                                              cResult[62] = tmp35;
                                              cResult[63] = tmp45;
                                              cResult[64] = tmp67;
                                              cResult[65] = tmp74;
                                              tmp71 = tmp74;
                                            }
                                          }
                                          const obj13 = { style: tmp4.actions, children: null };
                                          const items3 = [tmp55, tmp64];
                                          obj13.children = items3;
                                          const tmp70 = closure_8(actionsDisabled, obj13);
                                          cResult[57] = tmp4.actions;
                                          cResult[58] = tmp55;
                                          cResult[59] = tmp64;
                                          cResult[60] = tmp70;
                                          tmp67 = tmp70;
                                        }
                                      }
                                      const obj14 = { accessibilityRole: "button", accessibilityLabel: tmp58, onPress: onInviteAnotherGuardian, style: tmp60, children: tmp61 };
                                      const tmp66 = handleDecline(tmp(tmp2[16]).PressableOpacity, obj14);
                                      cResult[53] = onInviteAnotherGuardian;
                                      cResult[54] = tmp60;
                                      cResult[55] = tmp61;
                                      cResult[56] = tmp66;
                                      tmp64 = tmp66;
                                    }
                                    const items4 = [, ];
                                    ({ actionButton: arr5[0], inviteQrButton: arr5[1] } = tmp4);
                                    cResult[48] = tmp4.actionButton;
                                    cResult[49] = tmp4.inviteQrButton;
                                    cResult[50] = items4;
                                    tmp60 = items4;
                                  }
                                }
                                const obj15 = { accessibilityRole: "button", accessibilityLabel: tmp49, onPress: onShare, style: tmp51, children: tmp52 };
                                const tmp57 = handleDecline(tmp(tmp2[16]).PressableOpacity, obj15);
                                cResult[43] = onShare;
                                cResult[44] = tmp51;
                                cResult[45] = tmp52;
                                cResult[46] = tmp57;
                                tmp55 = tmp57;
                              }
                              const items5 = [, ];
                              ({ actionButton: arr4[0], inviteShareButton: arr4[1] } = tmp4);
                              cResult[38] = tmp4.actionButton;
                              cResult[39] = tmp4.inviteShareButton;
                              cResult[40] = items5;
                              tmp51 = items5;
                            }
                            const items6 = [, ];
                            ({ card: arr2[0], row: arr2[1] } = tmp4);
                            cResult[27] = tmp4.card;
                            cResult[28] = tmp4.row;
                            cResult[29] = items6;
                            tmp31 = items6;
                          }
                        }
                      }
                      const obj16 = { style: tmp4.dividerRow, children: null };
                      const items7 = [tmp14, tmp20, tmp23];
                      obj16.children = items7;
                      const tmp30 = closure_8(actionsDisabled, obj16);
                      cResult[22] = tmp4.dividerRow;
                      cResult[23] = tmp14;
                      cResult[24] = tmp20;
                      cResult[25] = tmp23;
                      cResult[26] = tmp30;
                      tmp27 = tmp30;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    let tmp11 = seenRequests.length > 0;
    if (tmp11) {
      const obj17 = {
        style: tmp4.card,
        children: seenRequests.map((request, index) => {
              let tmp2 = index > 0;
              if (tmp2) {
                const obj = { style: closure_0.divider };
                tmp2 = React5(hasOwnProperty, obj);
              }
              const items = [tmp2, ];
              const obj2 = { request, hasMaxConnections, isAcceptLoading: null, isDeclineLoading: null, actionsDisabled: null, onAccept: null, onDecline: null };
              let tmp8 = isAcceptLoading;
              if (isAcceptLoading) {
                tmp8 = actioningUserId === request.parent_id;
              }
              obj2.isAcceptLoading = tmp8;
              let tmp10 = isDeclineLoading;
              if (isDeclineLoading) {
                tmp10 = actioningUserId === request.parent_id;
              }
              const obj3 = { children: null };
              obj2.isDeclineLoading = tmp10;
              obj2.actionsDisabled = actionsDisabled;
              obj2.onAccept = handleAccept;
              obj2.onDecline = handleDecline;
              items[1] = React5(closure_10, obj2);
              obj3.children = items;
              return closure_2_8(noop.Fragment, obj3, request.parent_id);
            })
      };
      tmp11 = handleDecline(actionsDisabled, obj17);
    }
    cResult[4] = actioningUserId;
    cResult[5] = actionsDisabled;
    cResult[6] = handleAccept;
    cResult[7] = handleDecline;
    cResult[8] = hasMaxConnections;
    cResult[9] = isAcceptLoading;
    cResult[10] = isDeclineLoading;
    cResult[11] = seenRequests;
    cResult[12] = tmp4.card;
    cResult[13] = tmp4.divider;
    cResult[14] = tmp11;
    tmp10 = tmp11;
    const tmpResult = tmp(tmp2[10]);
  }
  const obj18 = { pendingRequests, linkedUsersProcessed, onActionError: first };
  cResult[1] = linkedUsersProcessed;
  cResult[2] = pendingRequests;
  cResult[3] = obj18;
  tmp8 = obj18;
  let obj = require("c");
}) : (function PendingRequestList(arg0) {
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
  const pendingRequestListController = require("usePendingParentRequests").usePendingRequestListController({
    pendingRequests,
    linkedUsersProcessed,
    onActionError() {
      const obj2 = { text: null };
      const intl = closure_0(_undefined[14]).intl;
      obj2.text = intl.string(hasMaxConnections(_undefined[17]).Wu8BK2);
      hasMaxConnections(_undefined[21]).open("SAFETY_FLOWS_PARENTAL_CONSENT_LINK_UPDATE_ERROR", obj2);
    }
  });
  ({ seenRequests, hasMaxConnections: c1, actioningUserId: c2, isAcceptLoading: c3, isDeclineLoading: c4, actionsDisabled: c5, handleAccept: c6, handleDecline: c7 } = pendingRequestListController);
  let obj3 = { spacing: nativeDefault.space.PX_16, children: null };
  let tmp8 = seenRequests.length > 0;
  if (tmp8) {
    const obj4 = {
      style: tmp.card,
      children: seenRequests.map((request, index) => {
          let tmp2 = index > 0;
          if (tmp2) {
            const obj = { style: closure_0.divider };
            tmp2 = React5(hasOwnProperty, obj);
          }
          const items = [tmp2, ];
          const obj2 = { request, hasMaxConnections, isAcceptLoading: null, isDeclineLoading: null, actionsDisabled: null, onAccept: null, onDecline: null };
          let tmp8 = c3;
          if (c3) {
            tmp8 = c2 === request.parent_id;
          }
          obj2.isAcceptLoading = tmp8;
          let tmp10 = c4;
          if (c4) {
            tmp10 = c2 === request.parent_id;
          }
          const obj3 = { children: null };
          obj2.isDeclineLoading = tmp10;
          obj2.actionsDisabled = actionsDisabled;
          obj2.onAccept = onAccept;
          obj2.onDecline = onDecline;
          items[1] = React5(closure_10, obj2);
          obj3.children = items;
          return closure_2_8(noop.Fragment, obj3, request.parent_id);
        })
    };
    tmp8 = c7(c5, obj4);
  }
  let items = [tmp8, , ];
  const obj5 = { style: tmp.dividerRow, children: null };
  const items1 = [c7(c5, { style: tmp.dividerLine }), , ];
  const obj7 = { style: tmp.dividerLabel, variant: "text-sm/medium", color: "text-muted", children: null };
  let intl = tmp5(1126).intl;
  obj7.children = intl.string(_modDef2862["/SbB94"]);
  items1[1] = c7(require("Text/Text").Text, obj7);
  items1[2] = c7(c5, { style: tmp.dividerLine });
  obj5.children = items1;
  items[1] = closure_8(c5, obj5);
  const obj9 = { style: null, children: null };
  const items2 = [, ];
  ({ card: arr3[0], row: arr3[1] } = tmp);
  obj9.style = items2;
  let obj = require("usePendingParentRequests");
  let obj2 = {
    pendingRequests,
    linkedUsersProcessed,
    onActionError() {
      const obj2 = { text: null };
      const intl = closure_0(_undefined[14]).intl;
      obj2.text = intl.string(hasMaxConnections(_undefined[17]).Wu8BK2);
      hasMaxConnections(_undefined[21]).open("SAFETY_FLOWS_PARENTAL_CONSENT_LINK_UPDATE_ERROR", obj2);
    }
  };
  const obj6 = { style: tmp.dividerLine };
  const obj8 = { style: tmp.dividerLine };
  const items3 = [c7(c5, { style: tmp.inviteIconContainer, children: c7(require("PlaneIllocon").PlaneIllocon, { size: 32 }) }), , ];
  const obj11 = { style: tmp.details, children: null };
  const obj12 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp5(1126).intl;
  obj12.children = intl2.string(_modDef2862.z9gkwZ);
  const items4 = [c7(require("Text/Text").Text, obj12), ];
  const obj13 = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl3 = tmp5(1126).intl;
  obj13.children = intl3.string(_modDef2862["9t4+vC"]);
  items4[1] = c7(require("Text/Text").Text, obj13);
  obj11.children = items4;
  items3[1] = closure_8(c5, obj11);
  const obj14 = { style: tmp.actions, children: null };
  const obj15 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
  const intl4 = tmp5(1126).intl;
  obj15.accessibilityLabel = intl4.string(require("util").t.Ej3B3Y);
  obj15.onPress = onShare;
  const items5 = [, ];
  ({ actionButton: arr6[0], inviteShareButton: arr6[1] } = tmp);
  obj15.style = items5;
  obj15.children = c7(require("ShareIcon").ShareIcon, { size: "sm", color: tmp.declineIcon.color });
  const items6 = [c7(require("Pressables").PressableOpacity, obj15), ];
  const obj17 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
  const intl5 = tmp5(1126).intl;
  obj17.accessibilityLabel = intl5.string(_modDef2862.z9gkwZ);
  obj17.onPress = onInviteAnotherGuardian;
  const items7 = [, ];
  ({ actionButton: arr8[0], inviteQrButton: arr8[1] } = tmp);
  obj17.style = items7;
  obj17.children = c7(require("QrCodeIcon").QrCodeIcon, { size: "sm", color: tmp.declineIcon.color });
  items6[1] = c7(require("Pressables").PressableOpacity, obj17);
  obj14.children = items6;
  items3[2] = closure_8(c5, obj14);
  obj9.children = items3;
  items[2] = closure_8(c5, obj9);
  obj3.children = items;
  return closure_8(require("Stack/Stack").Stack, obj3);
});
export const PendingRequestRow = tmp5;