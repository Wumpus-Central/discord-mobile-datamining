// discord_app/modules/user_profile/native/UserProfileContactButtons.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../stores/RelationshipStore.tsx";
import { RelationshipTypes } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function FlatFriendButton(label) {
  label = label.label;
  ({ icon, hasCustomProfileTheme, isPending } = label);
  const merged = Object.assign(label, Object.create(null));
  if (false === isPending) {
    let str = "primary";
  } else {
    str = "secondary";
  }
  if ("primary" === str) {
    let CONTROL_SECONDARY_TEXT_DEFAULT = ThemesDefault.colors.WHITE;
  } else {
    CONTROL_SECONDARY_TEXT_DEFAULT = ThemesDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT;
  }
  const merged1 = Object.assign(merged);
  return callback(Button.Button, { text: label, icon: callback(icon, { color: CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs" }), accessibilityLabel: label, variant: str, size: "md", grow: true });
}
function FriendRequestButton(user) {
  user = user.user;
  let newestAnalyticsLocation = user.location;
  let trackUserProfileAction;
  dependencyMap = undefined;
  let stateFromStores;
  closure_4 = undefined;
  ({ hasCustomProfileTheme, ButtonComponent } = user);
  let obj = user(8934);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  if (newestAnalyticsLocation == null) {
    newestAnalyticsLocation = trackUserProfileAction(7139)().newestAnalyticsLocation;
  }
  dependencyMap = { location: newestAnalyticsLocation };
  let tmp3Result = tmp3(12172);
  const gameFriendsForUser = tmp3Result.useGameFriendsForUser(user.id);
  tmp3Result = tmp3(589);
  const items = [closure_4];
  stateFromStores = tmp3Result.useStateFromStores(items, () => relationshipType.getRelationshipType(user.id));
  closure_4 = trackUserProfileAction(4219).useName(user);
  if (stateFromStores !== RelationshipTypes.FRIEND) {
    if (stateFromStores !== tmp5.BLOCKED) {
      if (gameFriendsForUser.length > 0) {
        return null;
      } else if (stateFromStores === tmp5.PENDING_INCOMING) {
        return null;
      } else {
        if (stateFromStores === tmp5.PENDING_OUTGOING) {
          let UserPlusIcon = tmp3(12353).UserClockIcon;
        } else {
          UserPlusIcon = tmp3(4312).UserPlusIcon;
        }
        const intl = tmp3(1236).intl;
        const string = intl.string;
        const t = tmp3(1236).t;
        if (stateFromStores === tmp5.PENDING_OUTGOING) {
          let stringResult = string(t["fMm5q/"]);
        } else {
          stringResult = string(t["7815ae"]);
        }
        const intl2 = tmp3(1236).intl;
        const string2 = intl2.string;
        const t2 = tmp3(1236).t;
        if (stateFromStores === tmp5.PENDING_OUTGOING) {
          let string2Result = string2(t2.H0Ql7N);
        } else {
          string2Result = string2(t2.gc9aSx);
        }
        obj = { icon: null, label: null, accessibilityHint: null, onPress: null, hasCustomProfileTheme: null, isPending: null };
        obj[0] = UserPlusIcon;
        obj[1] = stringResult;
        obj[2] = string2Result;
        obj[3] = function onPress() {
          if (stateFromStores === closure_1_5.PENDING_OUTGOING) {
            let obj = { userDisplayName: null, onConfirm: null };
            obj[0] = closure_4;
            obj[1] = function onConfirm() {
              callback({ action: "CANCEL_FRIEND_REQUEST" });
              closure_1_1(closure_1_2[17]).cancelFriendRequest(id.id, closure_2);
            };
            const result = user(11791).confirmCancelFriendRequest(obj);
            const obj3 = user(11791);
          } else {
            trackUserProfileAction({ action: "SEND_FRIEND_REQUEST" });
            obj = trackUserProfileAction(9736);
            obj = { userId: null, context: null };
            obj[0] = user.id;
            obj[1] = dependencyMap;
            obj.addRelationship(obj);
          }
        };
        obj[4] = hasCustomProfileTheme;
        obj[5] = stateFromStores === tmp5.PENDING_OUTGOING;
        return callback(ButtonComponent, obj);
      }
    }
  }
  return null;
}
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { threeButtonLayout: null, flexGrow: null, iconButtonGroup: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { flexDirection: "row", gap: ThemesDefault.space.PX_12 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { flexDirection: "row", gap: ThemesDefault.space.PX_12 };
let result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileContactButtons.tsx");

export default function UserProfileContactButtons(user) {
  user = user.user;
  ({ disableMessage, disableCalls, hasCustomProfileTheme, style } = user);
  let trackUserProfileAction;
  let fn;
  let obj = user(fn[9]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp3 = callback2();
  obj1 = user(fn[11]);
  const items = [closure_4];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_4.getRelationshipType(user.id));
  let obj2 = user(fn[10]);
  const gameFriendsForUser = obj2.useGameFriendsForUser(user.id);
  const tmp6 = trackUserProfileAction(fn[22])(user.id, false, () => {
    trackUserProfileAction({ action: "VOICE_CALL" });
    trackUserProfileAction(fn[18])();
    trackUserProfileAction(fn[19]).hideActionSheet();
  });
  fn = tmp6.handlePress;
  ({ text, inCall, accessibilityHint } = tmp6);
  let str = "secondary";
  if (hasCustomProfileTheme) {
    str = "primary";
  }
  const colors = tmp5(tmp2[6]).colors;
  const tmp7 = hasCustomProfileTheme ? colors.WHITE : colors.CONTROL_SECONDARY_TEXT_DEFAULT;
  function handleMessage() {
    trackUserProfileAction({ action: "SEND_MESSAGE" });
    trackUserProfileAction(fn[18])();
    let obj = trackUserProfileAction(fn[19]);
    obj.hideActionSheet();
    trackUserProfileAction(fn[20]).popAll();
    const obj2 = trackUserProfileAction(fn[20]);
    obj = { recipientIds: user.id };
    trackUserProfileAction(fn[21]).openPrivateChannel(obj);
  }
  if (stateFromStores !== RelationshipTypes.FRIEND) {
    if (stateFromStores !== tmp8.BLOCKED) {
      if (stateFromStores !== tmp8.PENDING_INCOMING) {
        if (0 === gameFriendsForUser.length) {
          obj = { style: null, children: null };
          const items1 = [tmp3.threeButtonLayout, style];
          obj[0] = items1;
          obj = { style: null, children: null };
          obj[0] = tmp3.flexGrow;
          obj1 = { user: null, location: null, hasCustomProfileTheme: null, ButtonComponent: null };
          obj1[0] = user;
          obj1[1] = user.location;
          obj1[2] = hasCustomProfileTheme;
          obj1[3] = FlatFriendButton;
          obj[1] = callback(FriendRequestButton, obj1);
          const items2 = [callback(View, obj), ];
          obj2 = { style: null, children: null };
          obj2[0] = tmp3.iconButtonGroup;
          const obj3 = { icon: null, accessibilityLabel: null, accessibilityHint: null, variant: null, size: "md", onPress: null, disabled: null };
          const obj4 = { color: null, size: "xs" };
          obj4[0] = tmp7;
          obj3[0] = callback(tmp(tmp2[24]).ChatIcon, obj4);
          const intl7 = tmp(tmp2[15]).intl;
          obj3[1] = intl7.string(tmp(tmp2[15]).t.zROXEV);
          const intl8 = tmp(tmp2[15]).intl;
          const obj5 = { name: null };
          let tmp5Result = tmp5(tmp2[12]);
          obj5[0] = tmp5Result.getName(user);
          obj3[2] = intl8.formatToPlainString(tmp(tmp2[15]).t.zFfSFQ, obj5);
          obj3[3] = str;
          obj3[5] = handleMessage;
          obj3[6] = disableMessage;
          const items3 = [callback(tmp(tmp2[23]).IconButton, obj3), ];
          const obj6 = { icon: null, accessibilityLabel: null, accessibilityHint: null, variant: null, size: "md", onPress: null, disabled: null };
          const obj7 = { color: null, size: "xs" };
          obj7[0] = tmp7;
          obj6[0] = callback(tmp(tmp2[25]).PhoneCallIcon, obj7);
          const intl9 = tmp(tmp2[15]).intl;
          obj6[1] = intl9.string(tmp(tmp2[15]).t.JJogjm);
          if (accessibilityHint == null) {
            const intl10 = tmp(tmp2[15]).intl;
            accessibilityHint = intl10.string(tmp(tmp2[15]).t.focH1t);
          }
          obj6[2] = accessibilityHint;
          obj6[3] = str;
          if (!inCall) {
            fn = () => user(fn[26]).confirmStartCall(fn);
          }
          obj6[5] = fn;
          if (!disableCalls) {
            disableCalls = null == text;
          }
          obj6[6] = disableCalls;
          items3[1] = callback(tmp(tmp2[23]).IconButton, obj6);
          obj2[1] = items3;
          items2[1] = closure_7(View, obj2);
          obj[1] = items2;
          let tmp9Result = tmp15(tmp16, obj, "three-button-group");
          const tmp17 = callback;
        }
        return tmp9Result;
      }
    }
  }
  const obj8 = { style: null, children: null };
  const items4 = [{ flexDirection: "row", gap: trackUserProfileAction(fn[6]).space.PX_12 }, style];
  obj8[0] = items4;
  const obj10 = { style: { flex: 1 }, children: null };
  const obj11 = { text: null, icon: null, accessibilityLabel: null, accessibilityHint: null, variant: null, size: "md", grow: true, onPress: null, disabled: null };
  const intl = tmp(tmp2[15]).intl;
  obj11[0] = intl.string(user(fn[15]).t.zROXEV);
  obj11[1] = callback(user(fn[24]).ChatIcon, { color: tmp7, size: "xs" });
  const intl2 = tmp(tmp2[15]).intl;
  obj11[2] = intl2.string(user(fn[15]).t.zROXEV);
  const intl3 = tmp(tmp2[15]).intl;
  const obj12 = { name: null };
  tmp5Result = tmp5(tmp2[12]);
  obj12[0] = tmp5Result.getName(user);
  obj11[3] = intl3.formatToPlainString(user(fn[15]).t.zFfSFQ, obj12);
  obj11[4] = str;
  obj11[7] = handleMessage;
  obj11[8] = disableMessage;
  obj10[1] = callback(user(fn[7]).Button, obj11);
  const items5 = [callback(View, obj10), ];
  const obj13 = { style: { flex: 1 }, children: null };
  const obj14 = { text: null, icon: null, accessibilityLabel: null, accessibilityHint: null, variant: null, size: "md", grow: true, onPress: null, disabled: null };
  const intl4 = tmp(tmp2[15]).intl;
  obj14[0] = intl4.string(user(fn[15]).t.JJogjm);
  obj14[1] = callback(user(fn[25]).PhoneCallIcon, { color: tmp7, size: "xs" });
  const intl5 = tmp(tmp2[15]).intl;
  obj14[2] = intl5.string(user(fn[15]).t.JJogjm);
  let stringResult = accessibilityHint;
  if (accessibilityHint == null) {
    const intl6 = tmp(tmp2[15]).intl;
    stringResult = intl6.string(tmp(tmp2[15]).t.focH1t);
  }
  obj14[3] = stringResult;
  obj14[4] = str;
  let fn2 = fn;
  if (!inCall) {
    fn2 = () => user(fn[26]).confirmStartCall(fn);
  }
  obj14[7] = fn2;
  let tmp13 = disableCalls;
  if (!disableCalls) {
    tmp13 = null == text;
  }
  obj14[8] = tmp13;
  obj13[1] = callback(user(fn[7]).Button, obj14);
  items5[1] = callback(View, obj13);
  obj8[1] = items5;
  tmp9Result = closure_7(tmp10, obj8, "two-button-group");
};