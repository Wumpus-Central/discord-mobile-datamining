// discord_app/modules/user_settings/content_and_social/native/BlockedUserRowV2.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
function BlockedUserRow(userRecord) {
  userRecord = userRecord.userRecord;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7139)().analyticsLocations;
  let obj = { user: userRecord, guildId: "Array", size: userRecord(1297).AvatarSizes.REFRESH_MEDIUM_32 };
  obj[0] = jsx(userRecord(1297).Avatar, { user: userRecord, guildId: "Array", size: userRecord(1297).AvatarSizes.REFRESH_MEDIUM_32 });
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
  obj = { name: "unblock", label: null };
  const intl = tmp3(1236).intl;
  obj[1] = intl.string(userRecord(1236).t.XyHpKH);
  const items = [obj];
  obj[6] = items;
  obj[7] = function onAccessibilityAction(nativeEvent) {
    if ("unblock" === nativeEvent.nativeEvent.actionName) {
      analyticsLocations(dependencyMap[3]).unblockUser(userRecord.id, { location: "blocked-users-list-mobile-v2" });
      const obj = analyticsLocations(dependencyMap[3]);
    }
  };
  obj[8] = function onPress() {
    return analyticsLocations(dependencyMap[8])({ userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations });
  };
  obj1 = { size: "sm", variant: "secondary", text: null, onPress: null };
  const intl2 = tmp3(1236).intl;
  obj1[2] = intl2.string(userRecord(1236).t["PR/xUz"]);
  obj1[3] = function onPress() {
    analyticsLocations(dependencyMap[3]).unblockUser(userRecord.id, { location: "blocked-users-list-mobile-v2" });
  };
  obj[9] = jsx(userRecord(4745).Button, { size: "sm", variant: "secondary", text: null, onPress: null });
  return jsx(userRecord(6291).TableRow, { name: "unblock", label: null });
}
noopAll;
const result = require("obj132").fileFinishedImporting("modules/user_settings/content_and_social/native/BlockedUserRowV2.tsx");

export default function ConnectedBlockedUserRow(userId) {
  userId = userId.userId;
  let obj = userId(589);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_3.getUser(userId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { userRecord: null };
    obj[0] = stateFromStores;
    tmp2 = <BlockedUserRow userRecord={null} />;
  }
  return tmp2;
};