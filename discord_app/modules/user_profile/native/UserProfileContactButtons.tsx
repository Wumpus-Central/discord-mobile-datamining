// discord_app/modules/user_profile/native/UserProfileContactButtons.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import RelationshipActionCreatorsDefault from "../../../actions/RelationshipActionCreators.tsx";
import navigateToLastChannelDefault from "../../main_tabs_v2/native/navigateToLastChannel.tsx";
import UserProfileAlertUtils from "UserProfileAlertUtils.tsx";
import ConfirmStartCall from "../../voice_calls/native/ConfirmStartCall.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

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
  return timestampProducer(components_Button_Button.Button, {
    text: label,
    icon: timestampProducer(icon, { color: CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs" }),
    accessibilityLabel: label,
    variant: str,
    size: "md",
    grow: true,
  });
}
function FriendRequestButton(user) {
  user = user.user;
  let newestAnalyticsLocation = user.location;
  dependencyMap = undefined;
  let stateFromStores;
  let userDisplayName;
  ({ hasCustomProfileTheme, ButtonComponent } = user);
  let obj = user(8190);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  if (newestAnalyticsLocation == null) {
    newestAnalyticsLocation = trackUserProfileAction(7162)().newestAnalyticsLocation;
  }
  dependencyMap = { location: newestAnalyticsLocation };
  let tmp3Result = tmp3(13063);
  const gameFriendsForUser = tmp3Result.useGameFriendsForUser(user.id);
  tmp3Result = tmp3(504);
  const items = [userDisplayName];
  stateFromStores = tmp3Result.useStateFromStores(items, () => RelationshipStore.getRelationshipType(user.id));
  userDisplayName = trackUserProfileAction(4404).useName(user);
  if (stateFromStores !== RelationshipTypes.FRIEND) {
    if (stateFromStores !== tmp5.BLOCKED) {
      if (gameFriendsForUser.length > 0) {
        return null;
      } else if (stateFromStores === tmp5.PENDING_INCOMING) {
        return null;
      } else {
        if (stateFromStores === tmp5.PENDING_OUTGOING) {
          let UserPlusIcon = tmp3(13125).UserClockIcon;
        } else {
          UserPlusIcon = tmp3(4497).UserPlusIcon;
        }
        const intl = tmp3(1114).intl;
        const string = intl.string;
        const t = tmp3(1114).t;
        if (stateFromStores === tmp5.PENDING_OUTGOING) {
          let stringResult = string(t["fMm5q/"]);
        } else {
          stringResult = string(t["7815ae"]);
        }
        const intl2 = tmp3(1114).intl;
        const string2 = intl2.string;
        const t2 = tmp3(1114).t;
        if (stateFromStores === tmp5.PENDING_OUTGOING) {
          let string2Result = string2(t2.H0Ql7N);
        } else {
          string2Result = string2(t2.gc9aSx);
        }
        obj = {
          icon: UserPlusIcon,
          label: stringResult,
          accessibilityHint: string2Result,
          onPress() {
            if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
              let obj = {
                userDisplayName,
                onConfirm() {
                  closure_1_1({ action: "CANCEL_FRIEND_REQUEST" });
                  trackUserProfileAction(closure_2[17]).cancelFriendRequest(id.id, context);
                },
              };
              const result = UserProfileAlertUtils.confirmCancelFriendRequest(obj);
            } else {
              trackUserProfileAction({ action: "SEND_FRIEND_REQUEST" });
              obj = { userId: user.id, context };
              obj.addRelationship(obj);
            }
          },
          hasCustomProfileTheme,
          isPending: stateFromStores === tmp5.PENDING_OUTGOING,
        };
        return closure_6(ButtonComponent, obj);
      }
    }
  }
  return null;
}
const View = fn(17).View;
const RelationshipTypes = fn(1074).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { threeButtonLayout: null, flexGrow: null, iconButtonGroup: null };
createStyles = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles.threeButtonLayout = createStyles;
createStyles.flexGrow = { flex: 1 };
createStyles.iconButtonGroup = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContactButtons.tsx");

export default function UserProfileContactButtons(user) {
  user = user.user;
  ({ disableMessage, disableCalls, hasCustomProfileTheme, style } = user);
  let onPress;
  let obj = user(onPress[9]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp3 = closure_8();
  let obj1 = user(onPress[11]);
  const items = [RelationshipStore];
  const stateFromStores = obj1.useStateFromStores(items, () => RelationshipStore.getRelationshipType(user.id));
  let obj2 = user(onPress[10]);
  const gameFriendsForUser = obj2.useGameFriendsForUser(user.id);
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
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    ModalActionCreatorsDefault.popAll();
    obj = { recipientIds: user.id };
    ChannelActionCreatorsDefault.openPrivateChannel(obj);
  }
  if (stateFromStores !== RelationshipTypes.FRIEND) {
    if (stateFromStores !== tmp8.BLOCKED) {
      if (stateFromStores !== tmp8.PENDING_INCOMING) {
        if (0 === gameFriendsForUser.length) {
          obj = { style: null, children: null };
          const items1 = [tmp3.threeButtonLayout, style];
          obj.style = items1;
          obj = { style: tmp3.flexGrow, children: null };
          obj1 = { user, location: user.location, hasCustomProfileTheme, ButtonComponent: FlatFriendButton };
          obj.children = closure_6(FriendRequestButton, obj1);
          const items2 = [closure_6(View, obj)];
          obj2 = { style: tmp3.iconButtonGroup, children: null };
          const obj3 = {
            icon: null,
            accessibilityLabel: null,
            accessibilityHint: null,
            variant: null,
            size: "md",
            onPress: null,
            disabled: null,
          };
          const obj4 = { color: tmp7, size: "xs" };
          obj3.icon = closure_6(tmp(tmp2[24]).ChatIcon, obj4);
          const intl7 = tmp(tmp2[15]).intl;
          obj3.accessibilityLabel = intl7.string(tmp(tmp2[15]).t.zROXEV);
          const intl8 = tmp(tmp2[15]).intl;
          const obj5 = { name: null };
          let tmp5Result = tmp5(tmp2[12]);
          obj5.name = tmp5Result.getName(user);
          obj3.accessibilityHint = intl8.formatToPlainString(tmp(tmp2[15]).t.zFfSFQ, obj5);
          obj3.variant = str;
          obj3.onPress = handleMessage;
          obj3.disabled = disableMessage;
          const items3 = [closure_6(tmp(tmp2[23]).IconButton, obj3)];
          const obj6 = {
            icon: null,
            accessibilityLabel: null,
            accessibilityHint: null,
            variant: null,
            size: "md",
            onPress: null,
            disabled: null,
          };
          const obj7 = { color: tmp7, size: "xs" };
          obj6.icon = closure_6(tmp(tmp2[25]).PhoneCallIcon, obj7);
          const intl9 = tmp(tmp2[15]).intl;
          obj6.accessibilityLabel = intl9.string(tmp(tmp2[15]).t.JJogjm);
          if (accessibilityHint == null) {
            const intl10 = tmp(tmp2[15]).intl;
            accessibilityHint = intl10.string(tmp(tmp2[15]).t.focH1t);
          }
          obj6.accessibilityHint = accessibilityHint;
          obj6.variant = str;
          if (!inCall) {
            onPress = () => ConfirmStartCall.confirmStartCall(fn);
          }
          obj6.onPress = onPress;
          if (!disableCalls) {
            disableCalls = null == text;
          }
          obj6.disabled = disableCalls;
          items3[1] = closure_6(tmp(tmp2[23]).IconButton, obj6);
          obj2.children = items3;
          items2[1] = closure_7(View, obj2);
          obj.children = items2;
          let tmp9Result = tmp15(tmp16, obj, "three-button-group");
        }
        return tmp9Result;
      }
    }
  }
  const obj8 = { style: null, children: null };
  const items4 = [{ flexDirection: "row", gap: trackUserProfileAction(onPress[6]).space.PX_12 }, style];
  obj8.style = items4;
  const obj10 = { style: { flex: 1 }, children: null };
  const obj11 = {
    text: null,
    icon: null,
    accessibilityLabel: null,
    accessibilityHint: null,
    variant: null,
    size: "md",
    grow: true,
    onPress: null,
    disabled: null,
  };
  const intl = tmp(tmp2[15]).intl;
  obj11.text = intl.string(user(onPress[15]).t.zROXEV);
  obj11.icon = closure_6(user(onPress[24]).ChatIcon, { color: tmp7, size: "xs" });
  const intl2 = tmp(tmp2[15]).intl;
  obj11.accessibilityLabel = intl2.string(user(onPress[15]).t.zROXEV);
  const intl3 = tmp(tmp2[15]).intl;
  const obj12 = { name: null };
  tmp5Result = tmp5(tmp2[12]);
  obj12.name = tmp5Result.getName(user);
  obj11.accessibilityHint = intl3.formatToPlainString(user(onPress[15]).t.zFfSFQ, obj12);
  obj11.variant = str;
  obj11.onPress = handleMessage;
  obj11.disabled = disableMessage;
  obj10.children = closure_6(user(onPress[7]).Button, obj11);
  const items5 = [closure_6(View, obj10)];
  const obj13 = { style: { flex: 1 }, children: null };
  const obj14 = {
    text: null,
    icon: null,
    accessibilityLabel: null,
    accessibilityHint: null,
    variant: null,
    size: "md",
    grow: true,
    onPress: null,
    disabled: null,
  };
  const intl4 = tmp(tmp2[15]).intl;
  obj14.text = intl4.string(user(onPress[15]).t.JJogjm);
  obj14.icon = closure_6(user(onPress[25]).PhoneCallIcon, { color: tmp7, size: "xs" });
  const intl5 = tmp(tmp2[15]).intl;
  obj14.accessibilityLabel = intl5.string(user(onPress[15]).t.JJogjm);
  let stringResult = accessibilityHint;
  if (accessibilityHint == null) {
    const intl6 = tmp(tmp2[15]).intl;
    stringResult = intl6.string(tmp(tmp2[15]).t.focH1t);
  }
  obj14.accessibilityHint = stringResult;
  obj14.variant = str;
  let fn2 = onPress;
  if (!inCall) {
    fn2 = () => ConfirmStartCall.confirmStartCall(fn);
  }
  obj14.onPress = fn2;
  let tmp13 = disableCalls;
  if (!disableCalls) {
    tmp13 = null == text;
  }
  obj14.disabled = tmp13;
  obj13.children = closure_6(user(onPress[7]).Button, obj14);
  items5[1] = closure_6(View, obj13);
  obj8.children = items5;
  tmp9Result = closure_7(tmp10, obj8, "two-button-group");
}
