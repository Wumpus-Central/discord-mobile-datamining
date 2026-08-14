// discord_app/modules/user_settings/content_and_social/native/IgnoredUserRow.tsx
import "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import { jsx } from "jsxProd";

const require = arg1;
function IgnoredUserRow(userRecord) {
  userRecord = userRecord.userRecord;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(5789)().analyticsLocations;
  let obj = { icon: null, label: null, subLabel: null, labelLineClamp: 1, subLabelLineClamp: 1, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null, onPress: null, trailing: null };
  obj = { source: null, size: null };
  obj[0] = userRecord.getAvatarSource(undefined);
  obj[1] = userRecord(1297).AvatarSizes.REFRESH_MEDIUM_32;
  obj[0] = jsx(userRecord(1297).Avatar, { source: null, size: null });
  let tmp4 = null != userRecord;
  if (tmp4) {
    let username = userRecord.globalName;
    if (username == null) {
      username = userRecord.username;
    }
    tmp4 = username;
  }
  obj[1] = tmp4;
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
  obj[2] = tmp6;
  obj = { name: "unignore", label: null };
  const intl = tmp3(1236).intl;
  obj[1] = intl.string(userRecord(1236).t["8wXU9B"]);
  const items = [obj];
  obj[6] = items;
  obj[7] = function onAccessibilityAction(nativeEvent) {
    if ("unignore" === nativeEvent.nativeEvent.actionName) {
      analyticsLocations(outer1_2[3]).unignoreUser(userRecord.id, "ignored-users-list-mobile");
    }
  };
  obj[8] = function onPress() {
    return analyticsLocations(outer1_2[8])({ userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations });
  };
  const obj1 = { size: "sm", variant: "secondary", text: null, onPress: null };
  const intl2 = tmp3(1236).intl;
  obj1[2] = intl2.string(userRecord(1236).t["3GZE6a"]);
  obj1[3] = function onPress() {
    analyticsLocations(outer1_2[3]).unignoreUser(userRecord.id, "ignored-users-list-mobile");
  };
  obj[9] = jsx(userRecord(4777).Button, { size: "sm", variant: "secondary", text: null, onPress: null });
  return jsx(userRecord(5435).TableRow, { name: "unignore", label: null });
}
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUserRow.tsx");

export default function ConnectedIgnoredUserRow(userId) {
  userId = userId.userId;
  let obj = userId(589);
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getUser(userId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { userRecord: null };
    obj[0] = stateFromStores;
    tmp2 = <IgnoredUserRow userRecord={null} />;
  }
  return tmp2;
};