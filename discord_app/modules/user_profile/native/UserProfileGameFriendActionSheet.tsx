// === Module 12067: GameFriendApplicationRow ===

// Module 12067 (GameFriendApplicationRow)
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import ACTION_SHEET_HEIGHT_HALF from "ACTION_SHEET_HEIGHT_HALF";
import get_ActivityIndicator from "handleRelationshipAddError";
import upsertRelationship from "upsertRelationship";
import { RelationshipTypes } from "ME";
import jsxProd from "RedesignBottomSheetTitleHeaderBase";
import createCacheKey from "createCacheKey";

let c10;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
function GameFriendApplicationRow(application) {
  application = application.application;
  const userId = application.userId;
  const userDisplayName = application.userDisplayName;
  const tmp = createCacheKey();
  const items = [, , , ];
  ({ id: arr[0], name: arr[1] } = application);
  items[2] = userDisplayName;
  items[3] = userId;
  const callback = React.useCallback(() => {
    let obj = application(userDisplayName[9]);
    obj = { userDisplayName, userId, applicationId: application.id, gameName: application.name };
    const result = obj.confirmRemoveGameFriend(obj);
  }, items);
  let obj = { trailing: null, label: null, onPress: null };
  obj[0] = callback3(application(userDisplayName[11]).XSmallIcon, { size: "md", color: "redesign-button-tertiary-text" });
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
createCacheKey = { width: 32, height: 32, borderRadius: require("Themes").radii.sm };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("noop").fileFinishedImporting("modules/user_profile/native/UserProfileGameFriendActionSheet.tsx");

export default function UserProfileGameFriendActionSheet(user) {
  let c4;
  let channelId;
  let guildId;
  let tmp7;
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
  let obj1 = gameFriendsForUser(memo[16]);
  callback = obj1.useName(guildId, channelId, user);
  let first = callback2(React.useState(() => {
    if (!outer1_8.isFriend(user.id)) {
      if (!obj.isBlockedOrIgnored(tmp.id)) {
        const relationshipType = obj.getRelationshipType(tmp.id);
        return relationshipType !== outer1_9.PENDING_OUTGOING && relationshipType !== outer1_9.PENDING_INCOMING;
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
            let closure_0 = tmp4;
            v02(true);
            outer1_5(true);
            let c3 = 2;
            let obj2 = v0(outer1_2[17]);
            const obj1 = { userId: null, context: null };
            obj1[0] = outer1_0.id;
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
            outer1_5(false);
            v02 = 3;
          } else if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            obj = outer1_0(outer1_2[18]);
            const result = obj.presentAddedFriendToast();
            c3 = 1;
          }
          c3 = 0;
          outer1_5(false);
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
      obj[1] = ME;
      obj[2] = user.id;
      tmp = outer1_10(outer1_13, obj, id.id);
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