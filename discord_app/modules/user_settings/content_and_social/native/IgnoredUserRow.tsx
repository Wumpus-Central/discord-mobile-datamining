// === Module 14809: IgnoredUserRow ===

// Module 14809 (IgnoredUserRow)
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9042 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
function IgnoredUserRow(userRecord) {
  userRecord = userRecord.userRecord;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7162)().analyticsLocations;
  let obj = { icon: null, label: null, subLabel: null, labelLineClamp: 1, subLabelLineClamp: 1, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null, onPress: null, trailing: null };
  obj = { source: userRecord.getAvatarSource(undefined), size: userRecord(1178).AvatarSizes.REFRESH_MEDIUM_32 };
  obj.icon = jsx(userRecord(1178).Avatar, { source: userRecord.getAvatarSource(undefined), size: userRecord(1178).AvatarSizes.REFRESH_MEDIUM_32 });
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
    username = undefined;
    if (userRecord != null) {
      username = userRecord.username;
    }
    tmp6 = username;
  }
  obj.subLabel = tmp6;
  obj = { name: "unignore", label: null };
  const intl = tmp3(1114).intl;
  obj.label = intl.string(userRecord(1114).t["8wXU9B"]);
  const items = [obj];
  obj.accessibilityActions = items;
  obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
    if ("unignore" === nativeEvent.nativeEvent.actionName) {
      RelationshipActionCreatorsDefault.unignoreUser(userRecord.id, "ignored-users-list-mobile");
    }
  };
  obj.onPress = function onPress() {
    return showUserProfileActionSheetDefault({ userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations });
  };
  const obj1 = { size: "sm", variant: "secondary", text: null, onPress: null };
  const intl2 = tmp3(1114).intl;
  obj1.text = intl2.string(userRecord(1114).t["3GZE6a"]);
  obj1.onPress = function onPress() {
    RelationshipActionCreatorsDefault.unignoreUser(userRecord.id, "ignored-users-list-mobile");
  };
  obj.trailing = jsx(userRecord(4975).Button, { size: "sm", variant: "secondary", text: null, onPress: null });
  return jsx(userRecord(5605).TableRow, { name: "unignore", label: null });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUserRow.tsx");

export default function ConnectedIgnoredUserRow(userId) {
  userId = userId.userId;
  let obj = userId(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { userRecord: stateFromStores };
    tmp2 = <IgnoredUserRow userRecord={stateFromStores} />;
  }
  return tmp2;
};