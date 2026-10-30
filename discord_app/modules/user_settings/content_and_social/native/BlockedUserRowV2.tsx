// discord_app/modules/user_settings/content_and_social/native/BlockedUserRowV2.tsx
import RelationshipActionCreatorsDefault from "../../../../actions/RelationshipActionCreators.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
function BlockedUserRow(userRecord) {
  userRecord = userRecord.userRecord;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7320)().analyticsLocations;
  const intl = userRecord(1114).intl;
  let username = userRecord.globalName;
  if (username == null) {
    username = userRecord.username;
  }
  function handleOpenProfile() {
    showUserProfileActionSheetDefault({ userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations });
  }
  const formatToPlainStringResult = intl.formatToPlainString(userRecord(1114).t.izBDZN, { name: username });
  let obj = { accessible: false, icon: null, label: null, onPress: null, trailing: null };
  let obj2 = { user: userRecord, guildId: "Array", size: userRecord(1188).AvatarSizes.REFRESH_MEDIUM_32 };
  obj.icon = jsx(userRecord(1188).Avatar, {
    user: userRecord,
    guildId: "Array",
    size: userRecord(1188).AvatarSizes.REFRESH_MEDIUM_32,
  });
  const obj3 = {
    userRecord,
    accessibilityActions: null,
    onAccessibilityAction: function handleAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if ("activate" === actionName) {
        const obj2 = { userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj2);
      } else if ("unblock" === actionName) {
        RelationshipActionCreatorsDefault.unblockUser(userRecord.id, { location: "blocked-users-list-mobile-v2" });
      }
    },
  };
  const items = [{ name: "activate" }, { name: "unblock", label: formatToPlainStringResult }];
  obj3.accessibilityActions = items;
  obj.label = jsx(userRecord(16653).RestrictedUserRowLabel, {
    userRecord,
    accessibilityActions: null,
    onAccessibilityAction: function handleAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if ("activate" === actionName) {
        const obj2 = { userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj2);
      } else if ("unblock" === actionName) {
        RelationshipActionCreatorsDefault.unblockUser(userRecord.id, { location: "blocked-users-list-mobile-v2" });
      }
    },
  });
  obj.onPress = handleOpenProfile;
  const obj4 = { size: "sm", variant: "secondary", text: null, accessibilityLabel: null, onPress: null };
  const intl2 = tmp2(1114).intl;
  obj4.text = intl2.string(userRecord(1114).t["PR/xUz"]);
  obj4.accessibilityLabel = formatToPlainStringResult;
  obj4.onPress = function onPress() {
    RelationshipActionCreatorsDefault.unblockUser(userRecord.id, { location: "blocked-users-list-mobile-v2" });
  };
  obj.trailing = jsx(userRecord(5629).Button, {
    size: "sm",
    variant: "secondary",
    text: null,
    accessibilityLabel: null,
    onPress: null,
  });
  return jsx(userRecord(6969).TableRow, { accessible: false, icon: null, label: null, onPress: null, trailing: null });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/BlockedUserRowV2.tsx");

export default function ConnectedBlockedUserRow(userId) {
  userId = userId.userId;
  const items = [UserStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { userRecord: stateFromStores };
    tmp2 = <BlockedUserRow userRecord={stateFromStores} />;
  }
  return tmp2;
}
