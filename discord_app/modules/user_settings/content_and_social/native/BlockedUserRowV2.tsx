// discord_app/modules/user_settings/content_and_social/native/BlockedUserRowV2.tsx
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import RelationshipActionCreatorsDefault from "../../../../actions/RelationshipActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
function BlockedUserRow(userRecord) {
  userRecord = userRecord.userRecord;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7493)().analyticsLocations;
  let obj = {
    icon: null,
    label: null,
    subLabel: null,
    labelLineClamp: 1,
    subLabelLineClamp: 1,
    accessibilityRole: "button",
    accessibilityActions: null,
    onAccessibilityAction: null,
    onPress: null,
    trailing: null,
  };
  const obj2 = { user: userRecord, guildId: "Array", size: userRecord(1177).AvatarSizes.REFRESH_MEDIUM_32 };
  obj.icon = jsx(userRecord(1177).Avatar, {
    user: userRecord,
    guildId: "Array",
    size: userRecord(1177).AvatarSizes.REFRESH_MEDIUM_32,
  });
  let tmp4 = null != userRecord;
  if (tmp4) {
    let username = userRecord.globalName;
    if (username == null) {
      username = userRecord.username;
    }
    tmp4 = username;
  }
  obj.label = tmp4;
  let globalName;
  if (userRecord != null) {
    globalName = userRecord.globalName;
  }
  let tmp6;
  if (null != globalName) {
    let username1;
    if (userRecord != null) {
      username1 = userRecord.username;
    }
    tmp6 = username1;
  }
  obj.subLabel = tmp6;
  const obj3 = { name: "unblock", label: null };
  const intl = tmp3(1115).intl;
  obj3.label = intl.string(userRecord(1115).t.XyHpKH);
  const items = [obj3];
  obj.accessibilityActions = items;
  obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
    if ("unblock" === nativeEvent.nativeEvent.actionName) {
      RelationshipActionCreatorsDefault.unblockUser(userRecord.id, { location: "blocked-users-list-mobile-v2" });
    }
  };
  obj.onPress = function onPress() {
    return showUserProfileActionSheetDefault({ userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations });
  };
  const obj4 = { size: "sm", variant: "secondary", text: null, onPress: null };
  const intl2 = tmp3(1115).intl;
  obj4.text = intl2.string(userRecord(1115).t["PR/xUz"]);
  obj4.onPress = function onPress() {
    RelationshipActionCreatorsDefault.unblockUser(userRecord.id, { location: "blocked-users-list-mobile-v2" });
  };
  obj.trailing = jsx(userRecord(5271).Button, { size: "sm", variant: "secondary", text: null, onPress: null });
  return jsx(userRecord(5908).TableRow, {
    icon: null,
    label: null,
    subLabel: null,
    labelLineClamp: 1,
    subLabelLineClamp: 1,
    accessibilityRole: "button",
    accessibilityActions: null,
    onAccessibilityAction: null,
    onPress: null,
    trailing: null,
  });
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
