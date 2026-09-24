// === Module 15153: IgnoredUserRow ===

// Module 15153 (IgnoredUserRow)
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8527 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 10087 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

const require = fn;
function IgnoredUserRow(userRecord) {
  userRecord = userRecord.userRecord;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7495)().analyticsLocations;
  let obj = { icon: jsx(userRecord(1177).Avatar, { source: userRecord.getAvatarSource(undefined), size: userRecord(1177).AvatarSizes.REFRESH_MEDIUM_32 }), label: null, subLabel: null, labelLineClamp: 1, subLabelLineClamp: 1, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null, onPress: null, trailing: null };
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
  const obj3 = { name: "unignore", label: null };
  const intl = tmp3(1115).intl;
  obj3.label = intl.string(userRecord(1115).t["8wXU9B"]);
  const items = [obj3];
  obj.accessibilityActions = items;
  obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
    if ("unignore" === nativeEvent.nativeEvent.actionName) {
      RelationshipActionCreatorsDefault.unignoreUser(userRecord.id, "ignored-users-list-mobile");
    }
  };
  obj.onPress = function onPress() {
    return showUserProfileActionSheetDefault({ userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations });
  };
  const obj4 = { size: "sm", variant: "secondary", text: null, onPress: null };
  const intl2 = tmp3(1115).intl;
  obj4.text = intl2.string(userRecord(1115).t["3GZE6a"]);
  obj4.onPress = function onPress() {
    RelationshipActionCreatorsDefault.unignoreUser(userRecord.id, "ignored-users-list-mobile");
  };
  obj.trailing = jsx(userRecord(5273).Button, { size: "sm", variant: "secondary", text: null, onPress: null });
  return jsx(userRecord(5910).TableRow, { icon: jsx(userRecord(1177).Avatar, { source: userRecord.getAvatarSource(undefined), size: userRecord(1177).AvatarSizes.REFRESH_MEDIUM_32 }), label: null, subLabel: null, labelLineClamp: 1, subLabelLineClamp: 1, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null, onPress: null, trailing: null });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUserRow.tsx");

export default function ConnectedIgnoredUserRow(userId) {
  userId = userId.userId;
  const items = [UserStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { userRecord: stateFromStores };
    tmp2 = <IgnoredUserRow userRecord={stateFromStores} />;
  }
  return tmp2;
};