// === Module 14934: UserProfileContactButtons ===

// Module 14934 (UserProfileContactButtons)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7471 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7474 */;
import navigateToLastChannelDefault from "navigateToLastChannel" /* 11264 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 14011 */;
import ConfirmStartCall from "ConfirmStartCall" /* 14485 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4947 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["icon", "label", "hasCustomProfileTheme", "isPending"];
const View = fn(17).View;
const RelationshipTypes = fn(1084).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5005);
let obj2 = { threeButtonLayout: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 }, flexGrow: { flex: 1 }, iconButtonGroup: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.iconButtonGroup = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
const ButtonComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function FlatFriendButton(arg0) {
  const cResult = c.c(14);
  if (cResult[0] !== arg0) {
    ({ icon, label, hasCustomProfileTheme, isPending } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = icon;
    cResult[2] = hasCustomProfileTheme;
    cResult[3] = isPending;
    cResult[4] = label;
    cResult[5] = tmp11;
    let tmp8 = tmp11;
    let tmp7 = label;
    let tmp6 = isPending;
    let tmp4 = icon;
  } else {
    tmp4 = cResult[1];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  if (false === tmp6) {
    let str = "primary";
  } else {
    str = "secondary";
  }
  if ("primary" === str) {
    let CONTROL_SECONDARY_TEXT_DEFAULT = nativeDefault.colors.WHITE;
  } else {
    CONTROL_SECONDARY_TEXT_DEFAULT = nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT;
  }
  if (cResult[6] === tmp4) {
    if (cResult[7] === CONTROL_SECONDARY_TEXT_DEFAULT) {
      let tmp14 = cResult[8];
    }
    if (cResult[9] === tmp7) {
      if (cResult[10] === tmp8) {
        if (cResult[11] === tmp14) {
          if (cResult[12] === str) {
            let tmp16 = cResult[13];
          }
          return tmp16;
        }
      }
    }
    const obj2 = { text: tmp7, icon: tmp14, accessibilityLabel: tmp7, variant: str, size: "md", grow: true };
    const merged = Object.assign(tmp8);
    const tmp21 = closure_1_8(components_Button_Button.Button, obj2);
    cResult[9] = tmp7;
    cResult[10] = tmp8;
    cResult[11] = tmp14;
    cResult[12] = str;
    cResult[13] = tmp21;
    tmp16 = tmp21;
  }
  const tmp15 = closure_1_8(tmp4, { color: CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs" });
  cResult[6] = tmp4;
  cResult[7] = CONTROL_SECONDARY_TEXT_DEFAULT;
  cResult[8] = tmp15;
  tmp14 = tmp15;
}) : (function FlatFriendButton(label) {
  label = label.label;
  ({ icon, hasCustomProfileTheme, isPending } = label);
  const merged = Object.assign(label, Object.assign({ icon: 0, label: 0, hasCustomProfileTheme: 0, isPending: 0 }));
  if (false === isPending) {
    let str = "primary";
  } else {
    str = "secondary";
  }
  if ("primary" === str) {
    let CONTROL_SECONDARY_TEXT_DEFAULT = nativeDefault.colors.WHITE;
  } else {
    CONTROL_SECONDARY_TEXT_DEFAULT = nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT;
  }
  const merged1 = Object.assign(merged);
  return closure_1_8(components_Button_Button.Button, { text: label, icon: closure_1_8(icon, { color: CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs" }), accessibilityLabel: label, variant: str, size: "md", grow: true });
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function FriendRequestButton(user) {
  const cResult = user(576).c(23);
  user = user.user;
  ({ hasCustomProfileTheme, location: _location, ButtonComponent } = user);
  let obj = user(576);
  const tmp4 = trackUserProfileAction;
  trackUserProfileAction = user(8719).useUserProfileAnalyticsContext().trackUserProfileAction;
  if (_location == null) {
    _location = trackUserProfileAction(7313)().newestAnalyticsLocation;
  }
  if (cResult[0] !== _location) {
    let obj3 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj3;
    let tmp5 = obj3;
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  let obj2 = user(8719);
  const gameFriendsForUser = user(14842).useGameFriendsForUser(user.id);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[2] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== user.id) {
    const fn = function _() {
      return RelationshipStore.getRelationshipType(user.id);
    };
    cResult[3] = user.id;
    cResult[4] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[4];
  }
  const tmpResult = user(14842);
  const stateFromStores = user(504).useStateFromStores(tmp6, tmp8);
  const tmpResult2 = user(504);
  const name = tmp4(5059).useName(user);
  if (stateFromStores !== RelationshipTypes.FRIEND) {
    if (stateFromStores !== RelationshipTypes.BLOCKED) {
      if (gameFriendsForUser.length > 0) {
        return null;
      } else if (stateFromStores === RelationshipTypes.PENDING_INCOMING) {
        return null;
      } else {
        if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
          let UserPlusIcon = tmp(14935).UserClockIcon;
        } else {
          UserPlusIcon = tmp(5710).UserPlusIcon;
        }
        if (cResult[5] !== (stateFromStores === RelationshipTypes.PENDING_OUTGOING)) {
          const intl = tmp(1125).intl;
          const string = intl.string;
          let t = tmp(1125).t;
          if (tmp23) {
            t = t["fMm5q/"];
            let stringResult = string(t);
          } else {
            stringResult = string(t["7815ae"]);
          }
          cResult[5] = tmp23;
          cResult[6] = stringResult;
        } else if (cResult[7] !== tmp23) {
          const intl2 = tmp(1125).intl;
          const string2 = intl2.string;
          let H0Ql7N = tmp(1125).t;
          if (tmp23) {
            H0Ql7N = H0Ql7N.H0Ql7N;
            let string2Result = string2(H0Ql7N);
          } else {
            string2Result = string2(H0Ql7N.gc9aSx);
          }
          cResult[7] = tmp23;
          cResult[8] = string2Result;
        } else {
          if (cResult[9] === tmp5) {
            if (cResult[10] === name) {
              if (cResult[11] === stateFromStores) {
                if (cResult[12] === trackUserProfileAction) {
                  if (cResult[13] === user.id) {
                    let tmp19 = cResult[14];
                  }
                  if (cResult[15] === ButtonComponent) {
                    if (cResult[16] === tmp16) {
                      if (cResult[17] === hasCustomProfileTheme) {
                        if (cResult[18] === UserPlusIcon) {
                          if (cResult[19] === tmp23) {
                            if (cResult[20] === tmp12) {
                              if (cResult[21] === tmp19) {
                                let tmp20 = cResult[22];
                              }
                              return tmp20;
                            }
                          }
                        }
                      }
                    }
                  }
                  let obj4 = { icon: UserPlusIcon, label: tmp12, accessibilityHint: tmp16, onPress: tmp19, hasCustomProfileTheme, isPending: tmp23 };
                  const tmp22 = closure_8(ButtonComponent, obj4);
                  cResult[15] = ButtonComponent;
                  cResult[16] = tmp16;
                  cResult[17] = hasCustomProfileTheme;
                  cResult[18] = UserPlusIcon;
                  cResult[19] = tmp23;
                  cResult[20] = tmp12;
                  cResult[21] = tmp19;
                  cResult[22] = tmp22;
                  tmp20 = tmp22;
                }
              }
            }
          }
          function onPress() {
            if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
              const obj2 = {
                userDisplayName: name,
                onConfirm() {
                    closure_1_1({ action: "CANCEL_FRIEND_REQUEST" });
                    trackUserProfileAction(closure_2[20]).cancelFriendRequest(id.id, context);
                  }
              };
              const result = UserProfileAlertUtils.confirmCancelFriendRequest(obj2);
            } else {
              trackUserProfileAction({ action: "SEND_FRIEND_REQUEST" });
              const obj4 = { userId: user.id, context };
              RelationshipActionCreatorsDefault.addRelationship(obj4);
            }
          }
          cResult[9] = tmp5;
          cResult[10] = name;
          cResult[11] = stateFromStores;
          cResult[12] = trackUserProfileAction;
          cResult[13] = user.id;
          cResult[14] = onPress;
          tmp19 = onPress;
        }
      }
    }
  }
  return null;
}) : (function FriendRequestButton(user) {
  user = user.user;
  let newestAnalyticsLocation = user.location;
  dependencyMap = undefined;
  let stateFromStores;
  let userDisplayName;
  ({ hasCustomProfileTheme, ButtonComponent } = user);
  const trackUserProfileAction = user(8719).useUserProfileAnalyticsContext().trackUserProfileAction;
  if (newestAnalyticsLocation == null) {
    newestAnalyticsLocation = trackUserProfileAction(7313)().newestAnalyticsLocation;
  }
  dependencyMap = { location: newestAnalyticsLocation };
  let obj = user(8719);
  const tmp = trackUserProfileAction;
  const gameFriendsForUser = user(14842).useGameFriendsForUser(user.id);
  const tmp3Result = user(14842);
  const items = [RelationshipStore];
  stateFromStores = user(504).useStateFromStores(items, () => RelationshipStore.getRelationshipType(user.id));
  const tmp3Result2 = user(504);
  userDisplayName = tmp(5059).useName(user);
  if (stateFromStores !== RelationshipTypes.FRIEND) {
    if (stateFromStores !== RelationshipTypes.BLOCKED) {
      if (gameFriendsForUser.length > 0) {
        return null;
      } else if (stateFromStores === RelationshipTypes.PENDING_INCOMING) {
        return null;
      } else {
        if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
          let UserPlusIcon = tmp3(14935).UserClockIcon;
        } else {
          UserPlusIcon = tmp3(5710).UserPlusIcon;
        }
        const intl = tmp3(1125).intl;
        const string = intl.string;
        const t = tmp3(1125).t;
        if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
          let stringResult = string(t["fMm5q/"]);
        } else {
          stringResult = string(t["7815ae"]);
        }
        const intl2 = tmp3(1125).intl;
        const string2 = intl2.string;
        const t2 = tmp3(1125).t;
        if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
          let string2Result = string2(t2.H0Ql7N);
        } else {
          string2Result = string2(t2.gc9aSx);
        }
        let obj2 = {
          icon: UserPlusIcon,
          label: stringResult,
          accessibilityHint: string2Result,
          onPress() {
                  if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
                    const obj2 = {
                      userDisplayName,
                      onConfirm() {
                          closure_1_1({ action: "CANCEL_FRIEND_REQUEST" });
                          trackUserProfileAction(closure_2[20]).cancelFriendRequest(id.id, context);
                        }
                    };
                    const result = UserProfileAlertUtils.confirmCancelFriendRequest(obj2);
                  } else {
                    trackUserProfileAction({ action: "SEND_FRIEND_REQUEST" });
                    const obj4 = { userId: user.id, context };
                    RelationshipActionCreatorsDefault.addRelationship(obj4);
                  }
                },
          hasCustomProfileTheme,
          isPending: stateFromStores === RelationshipTypes.PENDING_OUTGOING
        };
        return closure_8(ButtonComponent, obj2);
      }
    }
  }
  return null;
});
ReactCompilerGating = fn(558);
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContactButtons.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileContactButtons(user) {
  const cResult = user(trackUserProfileAction[9]).c(89);
  user = user.user;
  ({ disableMessage, navigationReplace } = user);
  ({ disableCalls, location: _location, hasCustomProfileTheme, style } = user);
  let obj = user(trackUserProfileAction[9]);
  trackUserProfileAction = user(trackUserProfileAction[12]).useUserProfileAnalyticsContext().trackUserProfileAction;
  closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function c() {
      return RelationshipStore.getRelationshipType(user.id);
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj2 = user(trackUserProfileAction[12]);
  const stateFromStores = user(trackUserProfileAction[14]).useStateFromStores(first, tmp7);
  const tmpResult = user(trackUserProfileAction[14]);
  const gameFriendsForUser = user(trackUserProfileAction[13]).useGameFriendsForUser(user.id);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    function closeUserProfile() {
      navigationReplace(trackUserProfileAction[21])();
      navigationReplace(trackUserProfileAction[22]).hideAllActionSheets();
      const obj = navigationReplace(trackUserProfileAction[22]);
      navigationReplace(trackUserProfileAction[23]).popAll();
    }
    cResult[3] = closeUserProfile;
    let tmp10 = closeUserProfile;
  } else {
    tmp10 = cResult[3];
  }
  closure_3 = tmp10;
  if (cResult[4] === navigationReplace) {
    if (cResult[5] === trackUserProfileAction) {
      if (cResult[6] === user.id) {
        let tmp11 = cResult[7];
      }
      if (cResult[8] !== trackUserProfileAction) {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
        cResult[8] = trackUserProfileAction;
        cResult[9] = G;
      } else {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
      }
      const tmp14 = navigationReplace(tmp2[25])(user.id, false, G);
      const handlePress = tmp14.handlePress;
      ({ text, inCall, accessibilityHint } = tmp14);
      if (hasCustomProfileTheme) {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
      }
      const colors = navigationReplace(tmp2[7]).colors;
      const tmp15 = hasCustomProfileTheme ? colors.WHITE : colors.CONTROL_SECONDARY_TEXT_DEFAULT;
      if (stateFromStores !== RelationshipTypes.FRIEND) {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
        tmp18[1] = navigationReplace(tmp2[7]).space.PX_12;
        cResult[53] = tmp18;
      } else {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
      }
      if (cResult[54] !== style) {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
        tmp20[0] = tmp18;
        tmp20[1] = style;
        cResult[54] = style;
        cResult[55] = tmp20;
      } else {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
        cResult[56] = tmp22;
      } else {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[57] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
        const stringResult = obj5.string(tmp(tmp2[18]).t.zROXEV);
        cResult[57] = stringResult;
        const tmp23 = stringResult;
      } else {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
      }
      if (cResult[58] !== tmp15) {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
        const obj3 = { color: tmp15, size: "xs" };
        const tmp26 = closure_8(tmp(tmp2[26]).ChatIcon, obj3);
        cResult[58] = tmp15;
        cResult[59] = tmp26;
      } else {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
      }
      const _Symbol4 = Symbol;
      if (cResult[60] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
        const stringResult1 = obj7.string(tmp(tmp2[18]).t.zROXEV);
        cResult[60] = stringResult1;
        const tmp27 = stringResult1;
      } else {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
      }
      if (cResult[61] !== user) {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
        const obj4 = { name: navigationReplace(tmp2[15]).getName(user) };
        const formatToPlainStringResult = obj8.formatToPlainString(tmp(tmp2[18]).t.zFfSFQ, obj4);
        cResult[61] = user;
        cResult[62] = formatToPlainStringResult;
        const tmp13Result = navigationReplace(tmp2[15]);
      } else {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
      }
      if (cResult[63] === disableMessage) {
        class G {
          constructor() {
            tmp = trackUserProfileAction({ action: "VOICE_CALL" });
            tmp2 = closure_3();
            return;
          }
        }
      }
      const obj6 = { style: tmp22, children: null };
      const obj9 = { text: tmp23, icon: tmp25, accessibilityLabel: tmp27, accessibilityHint: tmp29, variant: "secondary", size: "md", grow: true, onPress: tmp11, disabled: disableMessage };
      obj6.children = closure_8(tmp(tmp2[10]).Button, obj9);
      const tmp34 = closure_8(View, obj6);
      cResult[63] = disableMessage;
      cResult[64] = tmp11;
      cResult[65] = tmp25;
      cResult[66] = tmp29;
      cResult[67] = "secondary";
      cResult[68] = tmp34;
    }
  }
  function handleMessage() {
    trackUserProfileAction({ action: "SEND_MESSAGE" });
    closure_3();
    ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: user.id, navigationReplace });
  }
  cResult[4] = navigationReplace;
  cResult[5] = trackUserProfileAction;
  cResult[6] = user.id;
  cResult[7] = handleMessage;
  tmp11 = handleMessage;
  const tmpResult2 = user(trackUserProfileAction[13]);
}) : (function UserProfileContactButtons(user) {
  user = user.user;
  ({ disableMessage, navigationReplace: importDefault, disableCalls, hasCustomProfileTheme, style } = user);
  let trackUserProfileAction;
  trackUserProfileAction = user(trackUserProfileAction[12]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp3 = closure_10();
  let obj = user(trackUserProfileAction[12]);
  const items = [RelationshipStore];
  const stateFromStores = user(trackUserProfileAction[14]).useStateFromStores(items, () => RelationshipStore.getRelationshipType(user.id));
  let obj2 = user(trackUserProfileAction[14]);
  const gameFriendsForUser = user(trackUserProfileAction[13]).useGameFriendsForUser(user.id);
  const tmp6 = require("usePrivateChannelCall")(user.id, false, () => {
    trackUserProfileAction({ action: "VOICE_CALL" });
    navigateToLastChannelDefault();
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    ModalActionCreatorsDefault.popAll();
  });
  let onPress = tmp6.handlePress;
  ({ text, inCall, accessibilityHint } = tmp6);
  let str = "secondary";
  if (hasCustomProfileTheme) {
    str = "primary";
  }
  const colors = require("native").colors;
  const tmp7 = hasCustomProfileTheme ? colors.WHITE : colors.CONTROL_SECONDARY_TEXT_DEFAULT;
  function handleMessage() {
    trackUserProfileAction({ action: "SEND_MESSAGE" });
    navigateToLastChannelDefault();
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    ModalActionCreatorsDefault.popAll();
    ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: user.id, navigationReplace });
  }
  if (stateFromStores !== RelationshipTypes.FRIEND) {
    if (stateFromStores !== RelationshipTypes.BLOCKED) {
      if (stateFromStores !== RelationshipTypes.PENDING_INCOMING) {
        if (0 === gameFriendsForUser.length) {
          const obj4 = { style: null, children: null };
          const items1 = [tmp3.threeButtonLayout, style];
          obj4.style = items1;
          const obj5 = { style: tmp3.flexGrow, children: null };
          const obj6 = { user, location: user.location, hasCustomProfileTheme, ButtonComponent };
          obj5.children = closure_8(closure_12, obj6);
          const items2 = [closure_8(View, obj5), ];
          const obj7 = { style: tmp3.iconButtonGroup, children: null };
          const obj8 = { icon: null, accessibilityLabel: null, accessibilityHint: null, variant: null, size: "md", onPress: null, disabled: null };
          const obj9 = { color: tmp7, size: "xs" };
          obj8.icon = closure_8(tmp(tmp2[26]).ChatIcon, obj9);
          const intl7 = tmp(tmp2[18]).intl;
          obj8.accessibilityLabel = intl7.string(tmp(tmp2[18]).t.zROXEV);
          const intl8 = tmp(tmp2[18]).intl;
          const obj10 = { name: require("UserUtils").getName(user) };
          obj8.accessibilityHint = intl8.formatToPlainString(tmp(tmp2[18]).t.zFfSFQ, obj10);
          obj8.variant = str;
          obj8.onPress = handleMessage;
          obj8.disabled = disableMessage;
          const items3 = [closure_8(tmp(tmp2[27]).IconButton, obj8), ];
          const obj11 = { icon: null, accessibilityLabel: null, accessibilityHint: null, variant: null, size: "md", onPress: null, disabled: null };
          const obj12 = { color: tmp7, size: "xs" };
          obj11.icon = closure_8(tmp(tmp2[28]).PhoneCallIcon, obj12);
          const intl9 = tmp(tmp2[18]).intl;
          obj11.accessibilityLabel = intl9.string(tmp(tmp2[18]).t.JJogjm);
          if (accessibilityHint == null) {
            const intl10 = tmp(tmp2[18]).intl;
            accessibilityHint = intl10.string(tmp(tmp2[18]).t.focH1t);
          }
          obj11.accessibilityHint = accessibilityHint;
          obj11.variant = str;
          if (!inCall) {
            onPress = () => ConfirmStartCall.confirmStartCall(fn);
          }
          obj11.onPress = onPress;
          if (!disableCalls) {
            disableCalls = null == text;
          }
          obj11.disabled = disableCalls;
          items3[1] = closure_8(tmp(tmp2[27]).IconButton, obj11);
          obj7.children = items3;
          items2[1] = closure_9(View, obj7);
          obj4.children = items2;
          let tmp9Result = closure_9(View, obj4, "three-button-group");
          const tmp5Result = require("UserUtils");
        }
        return tmp9Result;
      }
    }
  }
  const obj13 = { style: null, children: null };
  const obj3 = user(trackUserProfileAction[13]);
  const items4 = [{ flexDirection: "row", gap: require("native").space.PX_12 }, style];
  obj13.style = items4;
  const obj15 = { style: { flex: 1 }, children: null };
  const obj16 = { text: null, icon: null, accessibilityLabel: null, accessibilityHint: null, variant: null, size: "md", grow: true, onPress: null, disabled: null };
  const intl = tmp(tmp2[18]).intl;
  obj16.text = intl.string(user(trackUserProfileAction[18]).t.zROXEV);
  obj16.icon = closure_8(user(trackUserProfileAction[26]).ChatIcon, { color: tmp7, size: "xs" });
  const intl2 = tmp(tmp2[18]).intl;
  obj16.accessibilityLabel = intl2.string(user(trackUserProfileAction[18]).t.zROXEV);
  const intl3 = tmp(tmp2[18]).intl;
  const obj17 = { name: null };
  const obj14 = { flexDirection: "row", gap: require("native").space.PX_12 };
  obj17.name = require("UserUtils").getName(user);
  obj16.accessibilityHint = intl3.formatToPlainString(user(trackUserProfileAction[18]).t.zFfSFQ, obj17);
  obj16.variant = str;
  obj16.onPress = handleMessage;
  obj16.disabled = disableMessage;
  obj15.children = closure_8(user(trackUserProfileAction[10]).Button, obj16);
  const items5 = [closure_8(View, obj15), ];
  const obj18 = { style: { flex: 1 }, children: null };
  const obj19 = { text: null, icon: null, accessibilityLabel: null, accessibilityHint: null, variant: null, size: "md", grow: true, onPress: null, disabled: null };
  const intl4 = tmp(tmp2[18]).intl;
  obj19.text = intl4.string(user(trackUserProfileAction[18]).t.JJogjm);
  obj19.icon = closure_8(user(trackUserProfileAction[28]).PhoneCallIcon, { color: tmp7, size: "xs" });
  const intl5 = tmp(tmp2[18]).intl;
  obj19.accessibilityLabel = intl5.string(user(trackUserProfileAction[18]).t.JJogjm);
  let stringResult = accessibilityHint;
  if (accessibilityHint == null) {
    const intl6 = tmp(tmp2[18]).intl;
    stringResult = intl6.string(tmp(tmp2[18]).t.focH1t);
  }
  obj19.accessibilityHint = stringResult;
  obj19.variant = str;
  let fn2 = onPress;
  if (!inCall) {
    fn2 = () => ConfirmStartCall.confirmStartCall(fn);
  }
  obj19.onPress = fn2;
  let tmp13 = disableCalls;
  if (!disableCalls) {
    tmp13 = null == text;
  }
  obj19.disabled = tmp13;
  obj18.children = closure_8(user(trackUserProfileAction[10]).Button, obj19);
  items5[1] = closure_8(View, obj18);
  obj13.children = items5;
  tmp9Result = closure_9(View, obj13, "two-button-group");
  const tmp5Result2 = require("UserUtils");
});