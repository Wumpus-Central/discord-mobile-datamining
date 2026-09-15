// === Module 13263: UserProfileContactButtons ===

// Module 13263 (UserProfileContactButtons)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4652 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4842 */;
import components_Button_Button from "components/Button/Button" /* 5059 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9174 */;
import navigateToLastChannelDefault from "navigateToLastChannel" /* 11355 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12755 */;
import ConfirmStartCall from "ConfirmStartCall" /* 13267 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4288 */;

require = fn;
function FlatFriendButton(label) {
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
  return timestampProducer(components_Button_Button.Button, { text: label, icon: timestampProducer(icon, { color: CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs" }), accessibilityLabel: label, variant: str, size: "md", grow: true });
}
function FriendRequestButton(user) {
  user = user.user;
  let newestAnalyticsLocation = user.location;
  dependencyMap = undefined;
  let stateFromStores;
  let userDisplayName;
  ({ hasCustomProfileTheme, ButtonComponent } = user);
  const trackUserProfileAction = user(8310).useUserProfileAnalyticsContext().trackUserProfileAction;
  if (newestAnalyticsLocation == null) {
    newestAnalyticsLocation = trackUserProfileAction(7269)().newestAnalyticsLocation;
  }
  dependencyMap = { location: newestAnalyticsLocation };
  let obj = user(8310);
  const tmp = trackUserProfileAction;
  const gameFriendsForUser = user(13199).useGameFriendsForUser(user.id);
  const tmp3Result = user(13199);
  const items = [userDisplayName];
  stateFromStores = user(504).useStateFromStores(items, () => RelationshipStore.getRelationshipType(user.id));
  const tmp3Result2 = user(504);
  userDisplayName = tmp(4484).useName(user);
  if (stateFromStores !== RelationshipTypes.FRIEND) {
    if (stateFromStores !== RelationshipTypes.BLOCKED) {
      if (gameFriendsForUser.length > 0) {
        return null;
      } else if (stateFromStores === RelationshipTypes.PENDING_INCOMING) {
        return null;
      } else {
        if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
          let UserPlusIcon = tmp3(13264).UserClockIcon;
        } else {
          UserPlusIcon = tmp3(4576).UserPlusIcon;
        }
        const intl = tmp3(1115).intl;
        const string = intl.string;
        const t = tmp3(1115).t;
        if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
          let stringResult = string(t["fMm5q/"]);
        } else {
          stringResult = string(t["7815ae"]);
        }
        const intl2 = tmp3(1115).intl;
        const string2 = intl2.string;
        const t2 = tmp3(1115).t;
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
                          trackUserProfileAction(closure_2[17]).cancelFriendRequest(id.id, context);
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
        return closure_6(ButtonComponent, obj2);
      }
    }
  }
  return null;
}
const View = fn(17).View;
const RelationshipTypes = fn(1074).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { threeButtonLayout: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 }, flexGrow: { flex: 1 }, iconButtonGroup: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.iconButtonGroup = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContactButtons.tsx");

export default function UserProfileContactButtons(user) {
  user = user.user;
  ({ disableMessage, disableCalls, hasCustomProfileTheme, style } = user);
  let onPress;
  const trackUserProfileAction = user(onPress[9]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp3 = closure_8();
  let obj = user(onPress[9]);
  const items = [RelationshipStore];
  const stateFromStores = user(onPress[11]).useStateFromStores(items, () => RelationshipStore.getRelationshipType(user.id));
  let obj2 = user(onPress[11]);
  const gameFriendsForUser = user(onPress[10]).useGameFriendsForUser(user.id);
  const tmp6 = trackUserProfileAction(onPress[22])(user.id, false, () => {
    trackUserProfileAction({ action: "VOICE_CALL" });
    navigateToLastChannelDefault();
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
  });
  onPress = tmp6.handlePress;
  ({ text, inCall, accessibilityHint } = tmp6);
  let str = "secondary";
  if (hasCustomProfileTheme) {
    str = "primary";
  }
  const colors = tmp5(tmp2[6]).colors;
  const tmp7 = hasCustomProfileTheme ? colors.WHITE : colors.CONTROL_SECONDARY_TEXT_DEFAULT;
  function handleMessage() {
    trackUserProfileAction({ action: "SEND_MESSAGE" });
    navigateToLastChannelDefault();
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    ModalActionCreatorsDefault.popAll();
    ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: user.id });
  }
  if (stateFromStores !== RelationshipTypes.FRIEND) {
    if (stateFromStores !== RelationshipTypes.BLOCKED) {
      if (stateFromStores !== RelationshipTypes.PENDING_INCOMING) {
        if (0 === gameFriendsForUser.length) {
          const obj4 = { style: null, children: null };
          const items1 = [tmp3.threeButtonLayout, style];
          obj4.style = items1;
          const obj5 = { style: tmp3.flexGrow, children: null };
          const obj6 = { user, location: user.location, hasCustomProfileTheme, ButtonComponent: FlatFriendButton };
          obj5.children = closure_6(FriendRequestButton, obj6);
          const items2 = [closure_6(View, obj5), ];
          const obj7 = { style: tmp3.iconButtonGroup, children: null };
          const obj8 = { icon: null, accessibilityLabel: null, accessibilityHint: null, variant: null, size: "md", onPress: null, disabled: null };
          const obj9 = { color: tmp7, size: "xs" };
          obj8.icon = closure_6(tmp(tmp2[24]).ChatIcon, obj9);
          const intl7 = tmp(tmp2[15]).intl;
          obj8.accessibilityLabel = intl7.string(tmp(tmp2[15]).t.zROXEV);
          const intl8 = tmp(tmp2[15]).intl;
          const obj10 = { name: tmp5(tmp2[12]).getName(user) };
          obj8.accessibilityHint = intl8.formatToPlainString(tmp(tmp2[15]).t.zFfSFQ, obj10);
          obj8.variant = str;
          obj8.onPress = handleMessage;
          obj8.disabled = disableMessage;
          const items3 = [closure_6(tmp(tmp2[23]).IconButton, obj8), ];
          const obj11 = { icon: null, accessibilityLabel: null, accessibilityHint: null, variant: null, size: "md", onPress: null, disabled: null };
          const obj12 = { color: tmp7, size: "xs" };
          obj11.icon = closure_6(tmp(tmp2[25]).PhoneCallIcon, obj12);
          const intl9 = tmp(tmp2[15]).intl;
          obj11.accessibilityLabel = intl9.string(tmp(tmp2[15]).t.JJogjm);
          if (accessibilityHint == null) {
            const intl10 = tmp(tmp2[15]).intl;
            accessibilityHint = intl10.string(tmp(tmp2[15]).t.focH1t);
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
          items3[1] = closure_6(tmp(tmp2[23]).IconButton, obj11);
          obj7.children = items3;
          items2[1] = closure_7(View, obj7);
          obj4.children = items2;
          let tmp9Result = closure_7(View, obj4, "three-button-group");
          const tmp5Result = tmp5(tmp2[12]);
        }
        return tmp9Result;
      }
    }
  }
  const obj13 = { style: null, children: null };
  const obj3 = user(onPress[10]);
  const items4 = [{ flexDirection: "row", gap: trackUserProfileAction(onPress[6]).space.PX_12 }, style];
  obj13.style = items4;
  const obj15 = { style: { flex: 1 }, children: null };
  const obj16 = { text: null, icon: null, accessibilityLabel: null, accessibilityHint: null, variant: null, size: "md", grow: true, onPress: null, disabled: null };
  const intl = tmp(tmp2[15]).intl;
  obj16.text = intl.string(user(onPress[15]).t.zROXEV);
  obj16.icon = closure_6(user(onPress[24]).ChatIcon, { color: tmp7, size: "xs" });
  const intl2 = tmp(tmp2[15]).intl;
  obj16.accessibilityLabel = intl2.string(user(onPress[15]).t.zROXEV);
  const intl3 = tmp(tmp2[15]).intl;
  const obj17 = { name: null };
  const obj14 = { flexDirection: "row", gap: trackUserProfileAction(onPress[6]).space.PX_12 };
  obj17.name = trackUserProfileAction(onPress[12]).getName(user);
  obj16.accessibilityHint = intl3.formatToPlainString(user(onPress[15]).t.zFfSFQ, obj17);
  obj16.variant = str;
  obj16.onPress = handleMessage;
  obj16.disabled = disableMessage;
  obj15.children = closure_6(user(onPress[7]).Button, obj16);
  const items5 = [closure_6(View, obj15), ];
  const obj18 = { style: { flex: 1 }, children: null };
  const obj19 = { text: null, icon: null, accessibilityLabel: null, accessibilityHint: null, variant: null, size: "md", grow: true, onPress: null, disabled: null };
  const intl4 = tmp(tmp2[15]).intl;
  obj19.text = intl4.string(user(onPress[15]).t.JJogjm);
  obj19.icon = closure_6(user(onPress[25]).PhoneCallIcon, { color: tmp7, size: "xs" });
  const intl5 = tmp(tmp2[15]).intl;
  obj19.accessibilityLabel = intl5.string(user(onPress[15]).t.JJogjm);
  let stringResult = accessibilityHint;
  if (accessibilityHint == null) {
    const intl6 = tmp(tmp2[15]).intl;
    stringResult = intl6.string(tmp(tmp2[15]).t.focH1t);
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
  obj18.children = closure_6(user(onPress[7]).Button, obj19);
  items5[1] = closure_6(View, obj18);
  obj13.children = items5;
  tmp9Result = closure_7(View, obj13, "two-button-group");
  const tmp5Result2 = trackUserProfileAction(onPress[12]);
};