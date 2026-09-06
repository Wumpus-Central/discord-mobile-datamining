// === Module 13062: GameFriendApplicationRow ===

// Module 13062 (GameFriendApplicationRow)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "markAllUserIdListsStale" /* 4209 */;
import { RelationshipTypes } from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
function GameFriendApplicationRow(application) {
  application = application.application;
  const userId = application.userId;
  const userDisplayName = application.userDisplayName;
  const tmp = callback4();
  const items = [, , , ];
  ({ id: arr[0], name: arr[1] } = application);
  items[2] = userDisplayName;
  items[3] = userId;
  const callback = React.useCallback(() => {
    let obj = application(userDisplayName[9]);
    obj = { userDisplayName, userId, applicationId: application.id, gameName: application.name };
    const result = obj.confirmRemoveGameFriend(obj);
  }, items);
  let obj = { trailing: callback3(application(userDisplayName[11]).XSmallIcon, { size: "md", color: "redesign-button-tertiary-text" }), label: null, onPress: null };
  obj = { style: tmp.applicationNameWrapper, children: null };
  obj = { style: tmp.gameIcon, resizeMode: "contain", source: null, disableColor: true };
  let str = application.getIconURL(32);
  if (str == null) {
    str = "";
  }
  obj[2] = { uri: str };
  const items1 = [callback3(application(userDisplayName[12]).Icon, obj, application.id), callback3(application(userDisplayName[13]).Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: application.name })];
  obj[1] = items1;
  obj[1] = closure_11(closure_7, obj);
  obj[2] = callback;
  return callback3(application(userDisplayName[10]).ActionSheetRow, obj, application.id);
}
({ ActivityIndicator: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { applicationNameWrapper: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 12 }, gameIcon: null };
createCacheKey = { width: 32, height: 32, borderRadius: ThemesDefault.radii.sm };
createCacheKey[1] = createCacheKey;
let closure_12 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileGameFriendActionSheet.tsx");

export default function UserProfileGameFriendActionSheet(user) {
  user = user.user;
  let gameFriendsForUser;
  let memo;
  let callback;
  let callback2;
  let React;
  ({ guildId, channelId } = user);
  let obj = user(memo[14]);
  gameFriendsForUser = obj.useGameFriendsForUser(user.id);
  const items = [gameFriendsForUser];
  memo = React.useMemo(() => gameFriendsForUser.map((applicationId) => applicationId.applicationId), items);
  obj1 = gameFriendsForUser(memo[16]);
  callback = obj1.useName(guildId, channelId, user);
  let first = callback2(React.useState(() => {
    if (!closure_1_8.isFriend(user.id)) {
      if (!obj.isBlockedOrIgnored(tmp.id)) {
        const relationshipType = obj.getRelationshipType(tmp.id);
        return relationshipType !== closure_1_9.PENDING_OUTGOING && relationshipType !== closure_1_9.PENDING_INCOMING;
      }
    }
    return false;
  }), 1)[0];
  const arr2 = gameFriendsForUser(memo[15])(memo);
  [tmp7, c4] = callback2(React.useState(false), 2);
  const tmp8 = callback2(React.useState(false), 2);
  React = tmp8[1];
  const items1 = [user.id];
  const items2 = [memo];
  callback = React.useCallback(callback(function*() {
    if (v02 === 2) {
      v02 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v02 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v02 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp4;
            v02(true);
            closure_1_5(true);
            c3 = 2;
            let obj2 = v0(closure_1_2[17]);
            obj1 = { userId: null, context: null };
            obj1[0] = closure_1_0.id;
            obj1[1] = { location: "User Profile Action Sheet" };
            v0 = 3;
            v02 = 1;
            obj2 = { value: null, done: false };
            obj2[0] = obj2.addRelationship(obj1);
            return obj2;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          callback(false);
          throw closure_2;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            v02(false);
            c3 = 0;
            closure_1_5(false);
            v02 = 3;
          } else if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            obj = closure_1_0(closure_1_2[18]);
            const result = obj.presentAddedFriendToast();
            c3 = 1;
          }
          c3 = 0;
          closure_1_5(false);
          v02 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        }
      } catch (tmp34) {
        closure_2 = tmp34;
        if (tmp5 === c3) {
          v02 = tmp3;
          throw tmp34;
        } else if (tmp2 === tmp36) {
          v0 = tmp2;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items1);
  const effect = React.useEffect(() => {
    if (0 === memo.length) {
      gameFriendsForUser(memo[19]).hideActionSheet();
      const obj = gameFriendsForUser(memo[19]);
    }
  }, items2);
  obj = { header: null, children: null };
  obj = { title: null };
  const intl = user(memo[22]).intl;
  obj[0] = intl.string(user(memo[22]).t["Uv/eTx"]);
  obj[0] = callback3(user(memo[21]).BottomSheetTitleHeader, obj);
  obj1 = { title: null, hasIcons: false, children: null };
  const intl2 = user(memo[22]).intl;
  obj1[0] = intl2.string(user(memo[22]).t.YpCiMt);
  obj1[2] = arr2.map((id) => {
    let tmp = null != id;
    if (tmp) {
      const obj = { application: null, userDisplayName: null, userId: null };
      obj[0] = id;
      obj[1] = closure_3;
      obj[2] = user.id;
      tmp = closure_1_10(closure_1_13, obj, id.id);
    }
    return tmp;
  });
  const items3 = [callback3(user(memo[10]).ActionSheetRow.Group, obj1), ];
  if (first) {
    let obj2 = { title: null, hasIcons: false, children: null };
    const intl3 = tmp(tmp2[22]).intl;
    obj2[0] = intl3.string(tmp(tmp2[22]).t.GbsGCp);
    let obj3 = { label: null, subLabel: null, onPress: null, disabled: null, trailing: null };
    const intl4 = tmp(tmp2[22]).intl;
    obj3[0] = intl4.string(tmp(tmp2[22]).t.LAcY7m);
    const intl5 = tmp(tmp2[22]).intl;
    obj3[1] = intl5.string(tmp(tmp2[22]).t.YTvOUx);
    obj3[2] = callback;
    obj3[3] = tmp7;
    let tmp12Result = null;
    if (tmp8[0]) {
      tmp12Result = tmp12(closure_6, {});
    }
    obj3[4] = tmp12Result;
    obj2[2] = tmp12(tmp(tmp2[10]).ActionSheetRow, obj3);
    first = tmp12(tmp(tmp2[10]).ActionSheetRow.Group, obj2);
  }
  items3[1] = first;
  obj[1] = items3;
  return closure_11(user(memo[20]).ActionSheet, obj);
};