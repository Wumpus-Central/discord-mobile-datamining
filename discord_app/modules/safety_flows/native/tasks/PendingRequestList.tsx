// discord_app/modules/safety_flows/native/tasks/PendingRequestList.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import _modDef2521 from "../../../parent_tools/FamilyCenter.messages.js";
import _modDef2815 from "../../SafetyFlows.messages.js";
import useRefreshLinkCodeOnExpiryDefault from "../../../parent_tools/hooks/useRefreshLinkCodeOnExpiry.tsx";
import AssetRegistryDefault from "../../../../../_runtime/14747_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import UserStore from "../../../../stores/UserStore.tsx";
import Fragment_mod from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault, request;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let sum;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
let Fragment = Fragment_mod;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  card: obj2,
  row: obj3,
  divider: obj4,
  avatar: obj5,
  details: obj6,
  actions: { flexDirection: "row", alignItems: "center" },
  actionButton: size,
  acceptButton: obj7,
  declineButton: obj8,
  acceptIcon: obj9,
  declineIcon: obj10,
  inviteIconContainer: size1,
  inviteQrButton: obj11,
  inviteShareButton: obj12,
  dividerRow: { flexDirection: "row", alignItems: "center" },
  dividerLine: obj13,
  dividerLabel: obj14,
};
obj2 = {
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  overflow: "hidden",
};
createStyles = createStyles.createStyles;
obj3 = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
};
obj4 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: sum + nativeDefault.space.PX_12 };
const PX_16 = nativeDefault.space.PX_16;
sum = PX_16 + native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL];
obj5 = {
  borderRadius: native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL] / 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
};
obj6 = { flexGrow: 1, flexShrink: 1, paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_4 };
size = {
  height: 36,
  width: 36,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
};
obj7 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE, marginRight: nativeDefault.space.PX_8 };
obj8 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_STRONG,
};
obj9 = { color: nativeDefault.colors.WHITE };
obj10 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
size1 = {
  width: native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL],
  height: native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL],
  alignItems: "center",
  justifyContent: "center",
};
obj11 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_STRONG,
};
obj12 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  marginRight: nativeDefault.space.PX_8,
};
obj13 = { flexGrow: 1, flexShrink: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj14 = { marginHorizontal: nativeDefault.space.PX_12 };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (request) => {
      let actionsDisabled;
      let first;
      let hasMaxConnections;
      let intl;
      let intl2;
      let isAcceptLoading;
      let isConnected;
      let isDeclineLoading;
      let isResolved;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let obj13;
      let obj9;
      let onAccept;
      let onDecline;
      let tmp14;
      let tmp41Result;
      let tmp45Result;
      let tmp7;
      const obj = request(onDecline[8]);
      const cResult = obj.c(45);
      request = request.request;
      ({ hasMaxConnections, isAcceptLoading, isDeclineLoading, actionsDisabled, onAccept } = request);
      onDecline = request.onDecline;
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== request.parent_id) {
        const fn = function s() {
          return UserStore.getUser(request.parent_id);
        };
        cResult[1] = request.parent_id;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = request(onDecline[9]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
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
      const tmpResult3 = request(onDecline[10]);
      const pendingRequestResolution = tmpResult3.usePendingRequestResolution(request.parent_id);
      ({ isConnected, isResolved } = pendingRequestResolution);
      if (cResult[3] !== request.created_at) {
        const tmpResult4 = request(onDecline[11]);
        const result = tmpResult4.formatPendingRequestSentText(request.created_at);
        cResult[3] = request.created_at;
        cResult[4] = result;
        tmp14 = result;
      } else {
        tmp14 = cResult[4];
      }
      if (cResult[5] === avatar) {
        let tmp18;
        if (cResult[6] === request.parent_id) {
          tmp18 = cResult[7];
        }
        if (cResult[8] === tmp4.avatar) {
          let tmp20;
          let tmp23;
          if (cResult[9] === tmp18) {
            tmp20 = cResult[10];
          }
          if (cResult[11] !== globalName) {
            const obj2 = {
              variant: "text-md/semibold",
              color: "mobile-text-heading-primary",
              lineClamp: 1,
              children: globalName,
            };
            const tmp25 = closure_7(request(onDecline[13]).Text, obj2);
            cResult[11] = globalName;
            cResult[12] = tmp25;
            tmp23 = tmp25;
          } else {
            tmp23 = cResult[12];
          }
          if ((cResult[13] === username1) !== globalName) {
            let tmp27;
            let tmp30;
            if (cResult[14] === username1) {
              tmp27 = cResult[15];
            }
            if (cResult[16] !== tmp14) {
              const obj3 = { variant: "text-xs/medium", color: "text-muted", children: tmp14 };
              const tmp32 = closure_7(request(onDecline[13]).Text, obj3);
              cResult[16] = tmp14;
              cResult[17] = tmp32;
              tmp30 = tmp32;
            } else {
              tmp30 = cResult[17];
            }
            if (cResult[18] === tmp4.details) {
              if (cResult[19] === tmp30) {
                if (cResult[20] === tmp23) {
                  let tmp33;
                  let tmp38Result;
                  if (cResult[21] === tmp27) {
                    tmp33 = cResult[22];
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
                                                let tmp37;
                                                if (cResult[38] === tmp4.declineIcon) {
                                                  tmp37 = cResult[39];
                                                }
                                                if (cResult[40] === tmp4.row) {
                                                  if (cResult[41] === tmp33) {
                                                    if (cResult[42] === tmp37) {
                                                      let tmp53;
                                                      if (cResult[43] === tmp20) {
                                                        tmp53 = cResult[44];
                                                      }
                                                      return tmp53;
                                                    }
                                                  }
                                                }
                                                const obj4 = { style: tmp16, children: items1 };
                                                items1 = [tmp20, tmp33, tmp37];
                                                const tmp56 = closure_8(closure_5, obj4);
                                                cResult[40] = tmp4.row;
                                                cResult[41] = tmp33;
                                                cResult[42] = tmp37;
                                                cResult[43] = tmp20;
                                                cResult[44] = tmp56;
                                                tmp53 = tmp56;
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
                  if (isResolved) {
                    const Text = tmp(tmp2[13]).Text;
                    const intl3 = tmp(tmp2[14]).intl;
                    const string = intl3.string;
                    const tmp52 = onAccept(onDecline[15]);
                    const obj6 = {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: string(isConnected ? tmp52.YQP5dE : tmp52["2HvOvh"]),
                    };
                    tmp38Result = closure_7(Text, obj6);
                  } else {
                    let tmp41Result2 = !hasMaxConnections;
                    const obj7 = { style: tmp4.actions, children: items3 };
                    if (tmp41Result2) {
                      const obj8 = {
                        accessibilityRole: "button",
                        accessibilityLabel: intl.formatToPlainString(onAccept(onDecline[17]).jc1Ip7, obj9),
                        disabled: actionsDisabled,
                        onPress() {
                          return onAccept(request.parent_id);
                        },
                        style: items2,
                        children: tmp41Result,
                      };
                      const PressableOpacity = tmp(tmp2[16]).PressableOpacity;
                      intl = tmp(tmp2[14]).intl;
                      items2 = [,];
                      obj9 = { name: request.parent_username };
                      ({ actionButton: arr3[0], acceptButton: arr3[1] } = tmp4);
                      if (isAcceptLoading) {
                        const obj10 = { size: "small", color: tmp4.acceptIcon.color };
                        tmp41Result = closure_7(closure_4, obj10);
                      } else {
                        const obj11 = { size: "sm", color: onAccept(onDecline[5]).colors.WHITE };
                        const CheckmarkLargeBoldIcon = tmp(tmp2[18]).CheckmarkLargeBoldIcon;
                        tmp41Result = closure_7(CheckmarkLargeBoldIcon, obj11);
                      }
                      tmp41Result2 = closure_7(PressableOpacity, obj8);
                    }
                    items3 = [tmp41Result2];
                    const obj12 = {
                      accessibilityRole: "button",
                      accessibilityLabel: intl2.formatToPlainString(onAccept(onDecline[17])["4GtllP"], obj13),
                      disabled: actionsDisabled,
                      onPress() {
                        return onDecline(request.parent_id);
                      },
                      style: items4,
                      children: tmp45Result,
                    };
                    const PressableOpacity2 = tmp(tmp2[16]).PressableOpacity;
                    intl2 = tmp(tmp2[14]).intl;
                    items4 = [,];
                    obj13 = { name: request.parent_username };
                    ({ actionButton: arr5[0], declineButton: arr5[1] } = tmp4);
                    if (isDeclineLoading) {
                      const obj14 = { size: "small", color: tmp4.declineIcon.color };
                      tmp45Result = closure_7(closure_4, obj14);
                    } else {
                      const obj15 = {
                        size: request(onDecline[6]).Icon.Sizes.SMALL,
                        color: tmp4.declineIcon.color,
                        source: onAccept(onDecline[19]),
                      };
                      const Icon = tmp(tmp2[6]).Icon;
                      tmp45Result = closure_7(Icon, obj15);
                    }
                    items3[1] = closure_7(PressableOpacity2, obj12);
                    tmp38Result = closure_8(closure_5, obj7);
                  }
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
                  tmp37 = tmp38Result;
                }
              }
            }
            const obj16 = { style: tmp4.details, children: items5 };
            items5 = [tmp23, tmp27, tmp30];
            const tmp36 = closure_8(closure_5, obj16);
            cResult[18] = tmp4.details;
            cResult[19] = tmp30;
            cResult[20] = tmp23;
            cResult[21] = tmp27;
            cResult[22] = tmp36;
            tmp33 = tmp36;
          }
          let tmp28 = tmp26;
          if (tmp28) {
            const obj17 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: username1 };
            tmp28 = closure_7(tmp(tmp2[13]).Text, obj17);
          }
          cResult[13] = username1 !== globalName;
          cResult[14] = username1;
          cResult[15] = tmp28;
          tmp27 = tmp28;
        }
        const obj18 = { avatarStyle: tmp17, source: tmp18, disablePlaceholder: true };
        const tmp22 = closure_7(request(onDecline[6]).Avatar, obj18);
        cResult[8] = tmp4.avatar;
        cResult[9] = tmp18;
        cResult[10] = tmp22;
        tmp20 = tmp22;
      }
      const obj19 = { id: request.parent_id, avatar };
      const obj5 = onAccept(onDecline[12]);
      const userAvatarSource = obj5.getUserAvatarSource(obj19);
      cResult[5] = avatar;
      cResult[6] = request.parent_id;
      cResult[7] = userAvatarSource;
      tmp18 = userAvatarSource;
    }
  : (request) => {
      let actionsDisabled;
      let hasMaxConnections;
      let intl;
      let intl2;
      let isAcceptLoading;
      let isConnected;
      let isDeclineLoading;
      let isResolved;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let obj11;
      let obj15;
      let obj4;
      let obj6;
      let tmp13Result5;
      let tmp13Result6;
      let tmp13Result8;
      request = request.request;
      ({ hasMaxConnections, actionsDisabled, onAccept: importDefault, onDecline: dependencyMap } = request);
      ({ isAcceptLoading, isDeclineLoading } = request);
      const tmp = closure_9();
      const items = [UserStore];
      const obj = request(504);
      const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(request.parent_id));
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
      const tmp2Result = request(18120);
      const pendingRequestResolution = tmp2Result.usePendingRequestResolution(request.parent_id);
      ({ isConnected, isResolved } = pendingRequestResolution);
      const obj2 = { style: tmp.row, children: items1 };
      const tmp2Result2 = request(18123);
      const result = tmp2Result2.formatPendingRequestSentText(request.created_at);
      const obj3 = { avatarStyle: tmp.avatar, source: obj6.getUserAvatarSource(obj4), disablePlaceholder: true };
      const Avatar = tmp2(1188).Avatar;
      obj4 = { id: request.parent_id, avatar };
      obj6 = AvatarUtilsDefault;
      items1 = [closure_7(Avatar, obj3), ,];
      const obj5 = { style: tmp.details, children: items2 };
      items2 = [
        closure_7(request(4892).Text, {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          children: globalName,
        }),
        ,
      ];
      let tmp13Result = username1 !== globalName;
      if (tmp13Result) {
        const obj7 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: username1 };
        tmp13Result = closure_7(tmp2(4892).Text, obj7);
      }
      items2[1] = tmp13Result;
      items2[2] = closure_7(request(4892).Text, { variant: "text-xs/medium", color: "text-muted", children: result });
      items1[1] = closure_8(closure_5, obj5);
      if (isResolved) {
        const Text = tmp2(4892).Text;
        const intl3 = tmp2(1126).intl;
        const string = intl3.string;
        const tmp14Result = _modDef2815;
        const obj8 = {
          variant: "text-sm/normal",
          color: "text-muted",
          children: string(isConnected ? tmp14Result.YQP5dE : tmp14Result["2HvOvh"]),
        };
        tmp13Result5 = closure_7(Text, obj8);
      } else {
        let tmp13Result7 = !hasMaxConnections;
        const obj9 = { style: tmp.actions, children: items4 };
        if (tmp13Result7) {
          const obj10 = {
            accessibilityRole: "button",
            accessibilityLabel: intl.formatToPlainString(_modDef2521.jc1Ip7, obj11),
            disabled: actionsDisabled,
            onPress() {
              return importDefault(request.parent_id);
            },
            style: items3,
            children: tmp13Result6,
          };
          const PressableOpacity = tmp2(5916).PressableOpacity;
          intl = tmp2(1126).intl;
          items3 = [,];
          obj11 = { name: request.parent_username };
          ({ actionButton: arr4[0], acceptButton: arr4[1] } = tmp);
          if (isAcceptLoading) {
            const obj12 = { size: "small", color: tmp.acceptIcon.color };
            tmp13Result6 = closure_7(closure_4, obj12);
          } else {
            const obj13 = { size: "sm", color: nativeDefault.colors.WHITE };
            const CheckmarkLargeBoldIcon = tmp2(8484).CheckmarkLargeBoldIcon;
            tmp13Result6 = closure_7(CheckmarkLargeBoldIcon, obj13);
          }
          tmp13Result7 = closure_7(PressableOpacity, obj10);
        }
        items4 = [tmp13Result7];
        const obj14 = {
          accessibilityRole: "button",
          accessibilityLabel: intl2.formatToPlainString(_modDef2521["4GtllP"], obj15),
          disabled: actionsDisabled,
          onPress() {
            return dependencyMap(request.parent_id);
          },
          style: items5,
          children: tmp13Result8,
        };
        const PressableOpacity2 = tmp2(5916).PressableOpacity;
        intl2 = tmp2(1126).intl;
        items5 = [,];
        obj15 = { name: request.parent_username };
        ({ actionButton: arr6[0], declineButton: arr6[1] } = tmp);
        if (isDeclineLoading) {
          const obj16 = { size: "small", color: tmp.declineIcon.color };
          tmp13Result8 = closure_7(closure_4, obj16);
        } else {
          const obj17 = {
            size: request(1188).Icon.Sizes.SMALL,
            color: tmp.declineIcon.color,
            source: AssetRegistryDefault,
          };
          const Icon = tmp2(1188).Icon;
          tmp13Result8 = closure_7(Icon, obj17);
        }
        items4[1] = closure_7(PressableOpacity2, obj14);
        tmp13Result5 = closure_8(closure_5, obj9);
      }
      items1[2] = tmp13Result5;
      return closure_8(closure_5, obj2);
    };
let closure_10 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let actioningUserId;
      let closure_0;
      let expiresAt;
      let first;
      let hasMaxConnections;
      let intl2;
      let intl3;
      let items;
      let items1;
      let items2;
      let items3;
      let items7;
      let linkedUsersProcessed;
      let onInviteAnotherGuardian;
      let onRefreshLinkCode;
      let onShare;
      let pendingRequests;
      let seenRequests;
      const tmp = _require;
      let tmp2 = actioningUserId;
      let obj = require("react");
      const cResult = obj.c(70);
      ({ pendingRequests, linkedUsersProcessed, onInviteAnotherGuardian, onShare } = arg0);
      ({ expiresAt, onRefreshLinkCode } = arg0);
      const tmp4 = closure_9();
      _require = tmp4;
      hasMaxConnections(actioningUserId[20])(expiresAt, onRefreshLinkCode);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          let intl;
          const obj = {
            key: "SAFETY_FLOWS_PARENTAL_CONSENT_LINK_UPDATE_ERROR",
            content: intl.string(hasMaxConnections(actioningUserId[17]).Wu8BK2),
          };
          const open = hasMaxConnections(actioningUserId[21]).open;
          hasMaxConnections(actioningUserId[21]);
          intl = closure_0(actioningUserId[14]).intl;
          open(obj);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === linkedUsersProcessed) {
        let tmp8;
        if (cResult[2] === pendingRequests) {
          tmp8 = cResult[3];
        }
        const tmpResult = tmp(tmp2[10]);
        const pendingRequestListController = tmpResult.usePendingRequestListController(tmp8);
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
                          let tmp10;
                          let tmp14;
                          let tmp18;
                          let tmp20;
                          let tmp23;
                          if (cResult[13] === tmp4.divider) {
                            tmp10 = cResult[14];
                          }
                          const dividerRow = tmp4.dividerRow;
                          if (cResult[15] !== tmp4.dividerLine) {
                            let obj2 = { style: tmp4.dividerLine };
                            const tmp17 = handleDecline(actionsDisabled, obj2);
                            cResult[15] = tmp4.dividerLine;
                            cResult[16] = tmp17;
                            tmp14 = tmp17;
                          } else {
                            tmp14 = cResult[16];
                          }
                          const _Symbol = Symbol;
                          const dividerLabel = tmp4.dividerLabel;
                          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                            let intl = tmp(tmp2[14]).intl;
                            const stringResult = intl.string(hasMaxConnections(tmp2[15])["/SbB94"]);
                            cResult[17] = stringResult;
                            tmp18 = stringResult;
                          } else {
                            tmp18 = cResult[17];
                          }
                          if (cResult[18] !== tmp4.dividerLabel) {
                            let obj3 = {
                              style: dividerLabel,
                              variant: "text-sm/medium",
                              color: "text-muted",
                              children: tmp18,
                            };
                            const tmp22 = handleDecline(tmp(tmp2[13]).Text, obj3);
                            cResult[18] = tmp4.dividerLabel;
                            cResult[19] = tmp22;
                            tmp20 = tmp22;
                          } else {
                            tmp20 = cResult[19];
                          }
                          if (cResult[20] !== tmp4.dividerLine) {
                            const obj4 = { style: tmp4.dividerLine };
                            const tmp26 = handleDecline(actionsDisabled, obj4);
                            cResult[20] = tmp4.dividerLine;
                            cResult[21] = tmp26;
                            tmp23 = tmp26;
                          } else {
                            tmp23 = cResult[21];
                          }
                          if (cResult[22] === tmp4.dividerRow) {
                            if (cResult[23] === tmp14) {
                              if (cResult[24] === tmp20) {
                                let tmp27;
                                if (cResult[25] === tmp23) {
                                  tmp27 = cResult[26];
                                }
                                if (cResult[27] === tmp4.card) {
                                  let tmp31;
                                  let tmp32;
                                  let tmp35;
                                  let tmp39;
                                  let tmp42;
                                  let tmp45;
                                  let tmp49;
                                  if (cResult[28] === tmp4.row) {
                                    tmp31 = cResult[29];
                                  }
                                  const _Symbol2 = Symbol;
                                  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                                    const tmp34 = handleDecline(tmp(tmp2[22]).PlaneIllocon, { size: 32 });
                                    cResult[30] = tmp34;
                                    tmp32 = tmp34;
                                  } else {
                                    tmp32 = cResult[30];
                                  }
                                  if (cResult[31] !== tmp4.inviteIconContainer) {
                                    const obj5 = { style: tmp4.inviteIconContainer, children: tmp32 };
                                    const tmp38 = handleDecline(actionsDisabled, obj5);
                                    cResult[31] = tmp4.inviteIconContainer;
                                    cResult[32] = tmp38;
                                    tmp35 = tmp38;
                                  } else {
                                    tmp35 = cResult[32];
                                  }
                                  const _Symbol3 = Symbol;
                                  if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                                    const obj6 = {
                                      variant: "text-md/semibold",
                                      color: "mobile-text-heading-primary",
                                      children: intl2.string(hasMaxConnections(tmp2[15]).z9gkwZ),
                                    };
                                    const Text = tmp(tmp2[13]).Text;
                                    intl2 = tmp(tmp2[14]).intl;
                                    const tmp41 = handleDecline(Text, obj6);
                                    cResult[33] = tmp41;
                                    tmp39 = tmp41;
                                  } else {
                                    tmp39 = cResult[33];
                                  }
                                  const _Symbol4 = Symbol;
                                  if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                                    const obj7 = {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: intl3.string(hasMaxConnections(tmp2[15])["9t4+vC"]),
                                    };
                                    const Text2 = tmp(tmp2[13]).Text;
                                    intl3 = tmp(tmp2[14]).intl;
                                    const tmp44 = handleDecline(Text2, obj7);
                                    cResult[34] = tmp44;
                                    tmp42 = tmp44;
                                  } else {
                                    tmp42 = cResult[34];
                                  }
                                  if (cResult[35] !== tmp4.details) {
                                    const obj8 = { style: tmp4.details, children: items };
                                    items = [tmp39, tmp42];
                                    const tmp48 = closure_8(actionsDisabled, obj8);
                                    cResult[35] = tmp4.details;
                                    cResult[36] = tmp48;
                                    tmp45 = tmp48;
                                  } else {
                                    tmp45 = cResult[36];
                                  }
                                  const _Symbol5 = Symbol;
                                  const actions = tmp4.actions;
                                  if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                                    const intl4 = tmp(tmp2[14]).intl;
                                    const stringResult1 = intl4.string(tmp(tmp2[14]).t.Ej3B3Y);
                                    cResult[37] = stringResult1;
                                    tmp49 = stringResult1;
                                  } else {
                                    tmp49 = cResult[37];
                                  }
                                  if (cResult[38] === tmp4.actionButton) {
                                    let tmp51;
                                    let tmp52;
                                    if (cResult[39] === tmp4.inviteShareButton) {
                                      tmp51 = cResult[40];
                                    }
                                    if (cResult[41] !== tmp4.declineIcon.color) {
                                      const obj9 = { size: "sm", color: tmp4.declineIcon.color };
                                      const tmp54 = handleDecline(tmp(tmp2[23]).ShareIcon, obj9);
                                      cResult[41] = tmp4.declineIcon.color;
                                      cResult[42] = tmp54;
                                      tmp52 = tmp54;
                                    } else {
                                      tmp52 = cResult[42];
                                    }
                                    if (cResult[43] === onShare) {
                                      if (cResult[44] === tmp51) {
                                        let tmp55;
                                        let tmp58;
                                        if (cResult[45] === tmp52) {
                                          tmp55 = cResult[46];
                                        }
                                        const _Symbol6 = Symbol;
                                        if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                                          const intl5 = tmp(tmp2[14]).intl;
                                          const stringResult2 = intl5.string(hasMaxConnections(tmp2[15]).z9gkwZ);
                                          cResult[47] = stringResult2;
                                          tmp58 = stringResult2;
                                        } else {
                                          tmp58 = cResult[47];
                                        }
                                        if (cResult[48] === tmp4.actionButton) {
                                          let tmp60;
                                          let tmp61;
                                          if (cResult[49] === tmp4.inviteQrButton) {
                                            tmp60 = cResult[50];
                                          }
                                          if (cResult[51] !== tmp4.declineIcon.color) {
                                            const obj10 = { size: "sm", color: tmp4.declineIcon.color };
                                            const tmp63 = handleDecline(tmp(tmp2[24]).QrCodeIcon, obj10);
                                            cResult[51] = tmp4.declineIcon.color;
                                            cResult[52] = tmp63;
                                            tmp61 = tmp63;
                                          } else {
                                            tmp61 = cResult[52];
                                          }
                                          if (cResult[53] === onInviteAnotherGuardian) {
                                            if (cResult[54] === tmp60) {
                                              let tmp64;
                                              if (cResult[55] === tmp61) {
                                                tmp64 = cResult[56];
                                              }
                                              if (cResult[57] === tmp4.actions) {
                                                if (cResult[58] === tmp55) {
                                                  let tmp67;
                                                  if (cResult[59] === tmp64) {
                                                    tmp67 = cResult[60];
                                                  }
                                                  if (cResult[61] === tmp31) {
                                                    if (cResult[62] === tmp35) {
                                                      if (cResult[63] === tmp45) {
                                                        let tmp71;
                                                        if (cResult[64] === tmp67) {
                                                          tmp71 = cResult[65];
                                                        }
                                                        if (cResult[66] === tmp27) {
                                                          if (cResult[67] === tmp71) {
                                                            let tmp75;
                                                            if (cResult[68] === tmp10) {
                                                              tmp75 = cResult[69];
                                                            }
                                                            return tmp75;
                                                          }
                                                        }
                                                        const obj11 = {
                                                          spacing: hasMaxConnections(tmp2[5]).space.PX_16,
                                                          children: items1,
                                                        };
                                                        const Stack = tmp(tmp2[25]).Stack;
                                                        items1 = [tmp10, tmp27, tmp71];
                                                        const tmp77 = closure_8(Stack, obj11);
                                                        cResult[66] = tmp27;
                                                        cResult[67] = tmp71;
                                                        cResult[68] = tmp10;
                                                        cResult[69] = tmp77;
                                                        tmp75 = tmp77;
                                                      }
                                                    }
                                                  }
                                                  const obj12 = { style: tmp31, children: items2 };
                                                  items2 = [tmp35, tmp45, tmp67];
                                                  const tmp74 = closure_8(actionsDisabled, obj12);
                                                  cResult[61] = tmp31;
                                                  cResult[62] = tmp35;
                                                  cResult[63] = tmp45;
                                                  cResult[64] = tmp67;
                                                  cResult[65] = tmp74;
                                                  tmp71 = tmp74;
                                                }
                                              }
                                              const obj13 = { style: actions, children: items3 };
                                              items3 = [tmp55, tmp64];
                                              const tmp70 = closure_8(actionsDisabled, obj13);
                                              cResult[57] = tmp4.actions;
                                              cResult[58] = tmp55;
                                              cResult[59] = tmp64;
                                              cResult[60] = tmp70;
                                              tmp67 = tmp70;
                                            }
                                          }
                                          const obj14 = {
                                            accessibilityRole: "button",
                                            accessibilityLabel: tmp58,
                                            onPress: onInviteAnotherGuardian,
                                            style: tmp60,
                                            children: tmp61,
                                          };
                                          const tmp66 = handleDecline(tmp(tmp2[16]).PressableOpacity, obj14);
                                          cResult[53] = onInviteAnotherGuardian;
                                          cResult[54] = tmp60;
                                          cResult[55] = tmp61;
                                          cResult[56] = tmp66;
                                          tmp64 = tmp66;
                                        }
                                        const items4 = [,];
                                        ({ actionButton: arr5[0], inviteQrButton: arr5[1] } = tmp4);
                                        cResult[48] = tmp4.actionButton;
                                        cResult[49] = tmp4.inviteQrButton;
                                        cResult[50] = items4;
                                        tmp60 = items4;
                                      }
                                    }
                                    const obj15 = {
                                      accessibilityRole: "button",
                                      accessibilityLabel: tmp49,
                                      onPress: onShare,
                                      style: tmp51,
                                      children: tmp52,
                                    };
                                    const tmp57 = handleDecline(tmp(tmp2[16]).PressableOpacity, obj15);
                                    cResult[43] = onShare;
                                    cResult[44] = tmp51;
                                    cResult[45] = tmp52;
                                    cResult[46] = tmp57;
                                    tmp55 = tmp57;
                                  }
                                  const items5 = [,];
                                  ({ actionButton: arr4[0], inviteShareButton: arr4[1] } = tmp4);
                                  cResult[38] = tmp4.actionButton;
                                  cResult[39] = tmp4.inviteShareButton;
                                  cResult[40] = items5;
                                  tmp51 = items5;
                                }
                                const items6 = [,];
                                ({ card: arr2[0], row: arr2[1] } = tmp4);
                                cResult[27] = tmp4.card;
                                cResult[28] = tmp4.row;
                                cResult[29] = items6;
                                tmp31 = items6;
                              }
                            }
                          }
                          const obj16 = { style: dividerRow, children: items7 };
                          items7 = [tmp14, tmp20, tmp23];
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
              let tmp10;
              let tmp8;
              let tmp2 = index > 0;
              const Fragment = react.Fragment;
              if (tmp2) {
                const obj = { style: closure_0.divider };
                tmp2 = metroImportDefault(hasOwnProperty, obj);
              }
              const items = [tmp2];
              const obj2 = {
                request,
                hasMaxConnections,
                isAcceptLoading: tmp8,
                isDeclineLoading: tmp10,
                actionsDisabled,
                onAccept: handleAccept,
                onDecline: handleDecline,
              };
              const obj3 = { children: items };
              tmp10 = isDeclineLoading && actioningUserId === request.parent_id;
              tmp8 = isAcceptLoading && actioningUserId === request.parent_id;
              items[1] = metroImportDefault(closure_10, obj2);
              return metroImportAll(Fragment, obj3, request.parent_id);
            }),
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
      }
      const obj18 = { pendingRequests, linkedUsersProcessed, onActionError: first };
      cResult[1] = linkedUsersProcessed;
      cResult[2] = pendingRequests;
      cResult[3] = obj18;
      tmp8 = obj18;
    }
  : (arg0) => {
      let _undefined;
      let actionsDisabled;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let closure_0;
      let expiresAt;
      let hasMaxConnections;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let linkedUsersProcessed;
      let obj16;
      let obj18;
      let onAccept;
      let onDecline;
      let onInviteAnotherGuardian;
      let onRefreshLinkCode;
      let onShare;
      let pendingRequests;
      let seenRequests;
      importDefault = undefined;
      dependencyMap = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      ({ pendingRequests, linkedUsersProcessed, expiresAt, onRefreshLinkCode, onInviteAnotherGuardian, onShare } =
        arg0);
      const tmp = closure_9();
      _require = tmp;
      let tmp2 = importDefault;
      useRefreshLinkCodeOnExpiryDefault(expiresAt, onRefreshLinkCode);
      let obj = require("usePendingParentRequests");
      let obj2 = {
        pendingRequests,
        linkedUsersProcessed,
        onActionError() {
          let intl;
          const obj = {
            key: "SAFETY_FLOWS_PARENTAL_CONSENT_LINK_UPDATE_ERROR",
            content: intl.string(hasMaxConnections(c2[17]).Wu8BK2),
          };
          const open = hasMaxConnections(c2[21]).open;
          hasMaxConnections(c2[21]);
          intl = closure_0(c2[14]).intl;
          open(obj);
        },
      };
      const pendingRequestListController = obj.usePendingRequestListController(obj2);
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
      let obj3 = { spacing: nativeDefault.space.PX_16, children: items };
      const Stack = require("Stack/Stack").Stack;
      let tmp8 = seenRequests.length > 0;
      if (tmp8) {
        let tmp10 = c5;
        const obj4 = {
          style: tmp.card,
          children: seenRequests.map((request, index) => {
            let tmp10;
            let tmp8;
            let tmp2 = index > 0;
            const Fragment = react.Fragment;
            if (tmp2) {
              const obj = { style: closure_0.divider };
              tmp2 = metroImportDefault(hasOwnProperty, obj);
            }
            const items = [tmp2];
            const obj2 = {
              request,
              hasMaxConnections,
              isAcceptLoading: tmp8,
              isDeclineLoading: tmp10,
              actionsDisabled,
              onAccept,
              onDecline,
            };
            const obj3 = { children: items };
            tmp10 = c4 && c2 === request.parent_id;
            tmp8 = c3 && c2 === request.parent_id;
            items[1] = metroImportDefault(closure_10, obj2);
            return metroImportAll(Fragment, obj3, request.parent_id);
          }),
        };
        tmp8 = c7(c5, obj4);
      }
      items = [tmp8, ,];
      const obj5 = { style: tmp.dividerRow, children: items1 };
      items1 = [, ,];
      const obj6 = { style: tmp.dividerLine };
      items1[0] = c7(c5, obj6);
      const obj7 = {
        style: tmp.dividerLabel,
        variant: "text-sm/medium",
        color: "text-muted",
        children: intl.string(_modDef2815["/SbB94"]),
      };
      const Text = tmp5(4892).Text;
      intl = tmp5(1126).intl;
      items1[1] = c7(Text, obj7);
      const obj8 = { style: tmp.dividerLine };
      items1[2] = c7(c5, obj8);
      items[1] = closure_8(c5, obj5);
      const obj9 = { style: items2, children: items3 };
      items2 = [,];
      ({ card: arr3[0], row: arr3[1] } = tmp);
      items3 = [, ,];
      const obj10 = {
        style: tmp.inviteIconContainer,
        children: c7(require("PlaneIllocon").PlaneIllocon, { size: 32 }),
      };
      items3[0] = c7(c5, obj10);
      const obj11 = { style: tmp.details, children: items4 };
      const obj12 = {
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        children: intl2.string(_modDef2815.z9gkwZ),
      };
      const Text2 = tmp5(4892).Text;
      intl2 = tmp5(1126).intl;
      items4 = [c7(Text2, obj12)];
      const obj13 = { variant: "text-xs/medium", color: "text-default", children: intl3.string(_modDef2815["9t4+vC"]) };
      const Text3 = tmp5(4892).Text;
      intl3 = tmp5(1126).intl;
      items4[1] = c7(Text3, obj13);
      items3[1] = closure_8(c5, obj11);
      const obj14 = { style: tmp.actions, children: items6 };
      const obj15 = {
        accessibilityRole: "button",
        accessibilityLabel: intl4.string(require("intl").t.Ej3B3Y),
        onPress: onShare,
        style: items5,
        children: c7(require("ShareIcon").ShareIcon, obj16),
      };
      const PressableOpacity = tmp5(5916).PressableOpacity;
      intl4 = tmp5(1126).intl;
      items5 = [,];
      ({ actionButton: arr6[0], inviteShareButton: arr6[1] } = tmp);
      obj16 = { size: "sm", color: tmp.declineIcon.color };
      items6 = [c7(PressableOpacity, obj15)];
      const obj17 = {
        accessibilityRole: "button",
        accessibilityLabel: intl5.string(_modDef2815.z9gkwZ),
        onPress: onInviteAnotherGuardian,
        style: items7,
        children: c7(require("QrCodeIcon").QrCodeIcon, obj18),
      };
      const PressableOpacity2 = tmp5(5916).PressableOpacity;
      intl5 = tmp5(1126).intl;
      items7 = [,];
      ({ actionButton: arr8[0], inviteQrButton: arr8[1] } = tmp);
      obj18 = { size: "sm", color: tmp.declineIcon.color };
      items6[1] = c7(PressableOpacity2, obj17);
      items3[2] = closure_8(c5, obj14);
      items[2] = closure_8(c5, obj9);
      return closure_8(Stack, obj3);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/safety_flows/native/tasks/PendingRequestList.tsx");

export default tmp7;
export const PendingRequestRow = tmp6;
