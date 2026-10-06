// === Module 12902: UserProfileGameFriendActionSheet ===

// Module 12902 (UserProfileGameFriendActionSheet)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12301 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let application;

let c10;
let metroImportDefault;
let metroRequire;
let size;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
const RelationshipTypes = Constants.RelationshipTypes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { applicationNameWrapper: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 12 }, gameIcon: size };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
let closure_12 = createStyles.createStyles(obj);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((application) => {
  let items;
  let userDisplayName;
  let obj = application(userDisplayName[10]);
  const cResult = obj.c(24);
  application = application.application;
  const userId = application.userId;
  userDisplayName = application.userDisplayName;
  const tmp4 = closure_12();
  if (cResult[0] === application.id) {
    if (cResult[1] === application.name) {
      if (cResult[2] === userDisplayName) {
        let tmp5;
        let tmp7;
        let tmp10;
        let tmp12;
        if (cResult[3] === userId) {
          tmp5 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp9 = closure_10(application(userDisplayName[12]).XSmallIcon, { size: "md", color: "redesign-button-tertiary-text" });
          cResult[5] = tmp9;
          tmp7 = tmp9;
        } else {
          tmp7 = cResult[5];
        }
        if (cResult[6] !== application) {
          let str2 = application.getIconURL(32);
          if (str2 == null) {
            str2 = "";
          }
          cResult[6] = application;
          cResult[7] = str2;
          tmp10 = str2;
        } else {
          tmp10 = cResult[7];
        }
        if (cResult[8] !== tmp10) {
          let obj2 = { uri: tmp10 };
          cResult[8] = tmp10;
          cResult[9] = obj2;
          tmp12 = obj2;
        } else {
          tmp12 = cResult[9];
        }
        if (cResult[10] === application.id) {
          if (cResult[11] === tmp4.gameIcon) {
            let tmp13;
            let tmp16;
            if (cResult[12] === tmp12) {
              tmp13 = cResult[13];
            }
            if (cResult[14] !== application.name) {
              const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: application.name };
              const tmp18 = closure_10(application(userDisplayName[14]).Text, obj3);
              cResult[14] = application.name;
              cResult[15] = tmp18;
              tmp16 = tmp18;
            } else {
              tmp16 = cResult[15];
            }
            if (cResult[16] === tmp4.applicationNameWrapper) {
              if (cResult[17] === tmp13) {
                let tmp19;
                if (cResult[18] === tmp16) {
                  tmp19 = cResult[19];
                }
                if (cResult[20] === application.id) {
                  if (cResult[21] === tmp5) {
                    let tmp23;
                    if (cResult[22] === tmp19) {
                      tmp23 = cResult[23];
                    }
                    return tmp23;
                  }
                }
                const obj4 = { trailing: tmp7, label: tmp19, onPress: tmp5 };
                const tmp25 = closure_10(application(userDisplayName[15]).ActionSheetRow, obj4, application.id);
                cResult[20] = application.id;
                cResult[21] = tmp5;
                cResult[22] = tmp19;
                cResult[23] = tmp25;
                tmp23 = tmp25;
              }
            }
            const obj5 = { style: tmp4.applicationNameWrapper, children: items };
            items = [tmp13, tmp16];
            const tmp22 = closure_11(closure_7, obj5);
            cResult[16] = tmp4.applicationNameWrapper;
            cResult[17] = tmp13;
            cResult[18] = tmp16;
            cResult[19] = tmp22;
            tmp19 = tmp22;
          }
        }
        const obj6 = { style: tmp4.gameIcon, resizeMode: "contain", source: tmp12, disableColor: true };
        const tmp15 = closure_10(application(userDisplayName[13]).Icon, obj6, application.id);
        cResult[10] = application.id;
        cResult[11] = tmp4.gameIcon;
        cResult[12] = tmp12;
        cResult[13] = tmp15;
        tmp13 = tmp15;
      }
    }
  }
  const fn = function n() {
    const obj = UserProfileAlertUtils;
    const obj2 = { userDisplayName, userId, applicationId: application.id, gameName: application.name };
    const result = obj.confirmRemoveGameFriend(obj2);
  };
  cResult[0] = application.id;
  cResult[1] = application.name;
  cResult[2] = userDisplayName;
  cResult[3] = userId;
  cResult[4] = fn;
  tmp5 = fn;
}) : ((application) => {
  let items1;
  let obj2;
  let str;
  application = application.application;
  const userId = application.userId;
  const userDisplayName = application.userDisplayName;
  const tmp = closure_12();
  const items = [, , , ];
  ({ id: arr[0], name: arr[1] } = application);
  items[2] = userDisplayName;
  items[3] = userId;
  const callback = react.useCallback(() => {
    const obj = UserProfileAlertUtils;
    const obj2 = { userDisplayName, userId, applicationId: application.id, gameName: application.name };
    const result = obj.confirmRemoveGameFriend(obj2);
  }, items);
  let obj = { trailing: closure_10(application(userDisplayName[12]).XSmallIcon, { size: "md", color: "redesign-button-tertiary-text" }), label: closure_11(closure_7, obj2), onPress: callback };
  const ActionSheetRow = application(userDisplayName[15]).ActionSheetRow;
  obj2 = { style: tmp.applicationNameWrapper, children: items1 };
  const obj3 = { style: tmp.gameIcon, resizeMode: "contain", source: { uri: str }, disableColor: true };
  const Icon = application(userDisplayName[13]).Icon;
  str = application.getIconURL(32);
  const tmp4 = application;
  const tmp5 = userDisplayName;
  if (str == null) {
    str = "";
  }
  items1 = [closure_10(Icon, obj3, application.id), ];
  const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: application.name };
  items1[1] = closure_10(tmp4(tmp5[14]).Text, obj4);
  return closure_10(ActionSheetRow, obj, application.id);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameFriendActionSheet.tsx");

export default function UserProfileGameFriendActionSheet(user) {
  let ActionSheetRow;
  let BottomSheetTitleHeader;
  let c4;
  let channelId;
  let closure_5;
  let first1;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items3;
  let obj4;
  let obj7;
  let tmp13Result;
  let tmp7;
  let userDisplayName;
  user = user.user;
  let memo;
  _slicedToArray = undefined;
  react = undefined;
  let tmp = user;
  ({ guildId, channelId } = user);
  let obj = user(memo[16]);
  const gameFriendsForUser = obj.useGameFriendsForUser(user.id);
  const items = [gameFriendsForUser];
  memo = react.useMemo(() => gameFriendsForUser.map((applicationId) => applicationId.applicationId), items);
  const arr2 = gameFriendsForUser(memo[17])(memo);
  let obj2 = gameFriendsForUser(memo[18]);
  _asyncToGenerator = obj2.useName(guildId, channelId, user);
  let first = _slicedToArray(react.useState(() => {
    if (!RelationshipStore.isFriend(user.id)) {
      if (!RelationshipStore.isBlockedOrIgnored(user.id)) {
        const relationshipType = RelationshipStore.getRelationshipType(user.id);
        return relationshipType !== RelationshipTypes.PENDING_OUTGOING && relationshipType !== RelationshipTypes.PENDING_INCOMING;
      }
    }
    return false;
  }), 1)[0];
  [tmp7, c4] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [first1, react] = react.useState(false);
  const items1 = [user.id];
  const items2 = [memo];
  const callback = react.useCallback(_asyncToGenerator(async () => {
    let closure_0;
    let closure_2;
    let v2;
    let v3;
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        v3 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            v3(true);
            closure_5(true);
            c3 = 2;
            const obj5 = { userId: user.id, context: { location: "User Profile Action Sheet" } };
            const obj3 = v2(memo[19]);
            v2 = 3;
            v3 = 1;
            const obj6 = { value: obj3.addRelationship(obj5), done: false };
            return obj6;
          }
        } else if (1 === v2) {
          c3 = 0;
          closure_128_5(false);
          throw memo;
        } else {
          if (2 === v2) {
            c3 = 1;
            closure_128_4(false);
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_5(false);
            v3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            const obj = tmp(memo[20]);
            const result = obj.presentAddedFriendToast();
            c3 = 1;
          }
          c3 = 0;
          closure_128_5(false);
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp30) {
        memo = tmp30;
        if (0 === c3) {
          v3 = 3;
          throw tmp30;
        } else if (1 === tmp32) {
          v2 = 1;
        } else {
          v2 = 2;
        }
      }
    }
  }), items1);
  const effect = react.useEffect(() => {
    if (0 === memo.length) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  }, items2);
  let obj3 = { header: closure_10(BottomSheetTitleHeader, obj4), children: items3 };
  const ActionSheet = user(memo[22]).ActionSheet;
  obj4 = { title: intl.string(user(memo[24]).t["Uv/eTx"]) };
  BottomSheetTitleHeader = user(memo[23]).BottomSheetTitleHeader;
  intl = user(memo[24]).intl;
  let obj5 = {
    title: intl2.string(user(memo[24]).t.YpCiMt),
    hasIcons: false,
    children: arr2.map((application) => {
      let tmp = null != application;
      if (tmp) {
        const obj = { application, userDisplayName, userId: user.id };
        tmp = authStore(closure_13, obj, application.id);
      }
      return tmp;
    })
  };
  const Group = user(memo[15]).ActionSheetRow.Group;
  intl2 = user(memo[24]).intl;
  items3 = [closure_10(Group, obj5), ];
  if (first) {
    let obj6 = { title: intl3.string(tmp(memo[24]).t.GbsGCp), hasIcons: false, children: closure_10(ActionSheetRow, obj7) };
    const Group2 = tmp(tmp2[15]).ActionSheetRow.Group;
    intl3 = tmp(tmp2[24]).intl;
    obj7 = { label: intl4.string(tmp(memo[24]).t.LAcY7m), subLabel: intl5.string(tmp(memo[24]).t.YTvOUx), onPress: callback, disabled: tmp7, trailing: tmp13Result };
    ActionSheetRow = tmp(tmp2[15]).ActionSheetRow;
    intl4 = tmp(tmp2[24]).intl;
    intl5 = tmp(tmp2[24]).intl;
    tmp13Result = null;
    if (first1) {
      tmp13Result = closure_10(closure_6, {});
    }
    first = closure_10(Group2, obj6);
  }
  items3[1] = first;
  return closure_11(ActionSheet, obj3);
};