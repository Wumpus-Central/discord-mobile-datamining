// === Module 15000: BlockedUserRowV2 ===

// Module 15000 (BlockedUserRowV2)
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7011 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8287 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

const require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (function BlockedUserRow(userRecord) {
  const cResult = userRecord(576).c(29);
  userRecord = userRecord.userRecord;
  analyticsLocations = analyticsLocations(6848)().analyticsLocations;
  if (cResult[0] === userRecord.globalName) {
    if (cResult[1] === userRecord.username) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === analyticsLocations) {
      if (cResult[4] === userRecord.id) {
        let tmp6 = cResult[5];
      }
      dependencyMap = tmp6;
      if (cResult[6] === tmp6) {
        if (cResult[7] === userRecord.id) {
          let tmp7 = cResult[8];
        }
        if (cResult[9] !== userRecord) {
          const obj2 = { user: userRecord, guildId: "Array", size: tmp(1200).AvatarSizes.REFRESH_MEDIUM_32 };
          const tmp10 = jsx(tmp(1200).Avatar, { user: userRecord, guildId: "Array", size: tmp(1200).AvatarSizes.REFRESH_MEDIUM_32 });
          cResult[9] = userRecord;
          cResult[10] = tmp10;
          let tmp8 = tmp10;
        } else {
          tmp8 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { name: "activate" };
          cResult[11] = obj3;
          let tmp12 = obj3;
        } else {
          tmp12 = cResult[11];
        }
        if (cResult[12] !== tmp4) {
          const items = [tmp12, ];
          const obj4 = { name: "unblock", label: tmp4 };
          items[1] = obj4;
          cResult[12] = tmp4;
          cResult[13] = items;
          let tmp13 = items;
        } else {
          tmp13 = cResult[13];
        }
        if (cResult[14] === tmp7) {
          if (cResult[15] === tmp13) {
            if (cResult[16] === userRecord) {
              let tmp14 = cResult[17];
            }
            const _Symbol2 = Symbol;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1126).intl;
              const stringResult = intl2.string(tmp(1126).t["PR/xUz"]);
              cResult[18] = stringResult;
              let tmp17 = stringResult;
            } else {
              tmp17 = cResult[18];
            }
            if (cResult[19] !== userRecord.id) {
              const fn = function k() {
                RelationshipActionCreatorsDefault.unblockUser(userRecord.id, { location: "blocked-users-list-mobile-v2" });
              };
              cResult[19] = userRecord.id;
              cResult[20] = fn;
              let tmp19 = fn;
            } else {
              tmp19 = cResult[20];
            }
            if (cResult[21] === tmp19) {
              if (cResult[22] === tmp4) {
                let tmp20 = cResult[23];
              }
              if (cResult[24] === tmp6) {
                if (cResult[25] === tmp20) {
                  if (cResult[26] === tmp8) {
                    if (cResult[27] === tmp14) {
                      let tmp23 = cResult[28];
                    }
                    return tmp23;
                  }
                }
              }
              const obj5 = { accessible: false, icon: tmp8, label: tmp14, onPress: tmp6, trailing: tmp20 };
              const tmp25 = jsx(tmp(6186).TableRow, { accessible: false, icon: tmp8, label: tmp14, onPress: tmp6, trailing: tmp20 });
              cResult[24] = tmp6;
              cResult[25] = tmp20;
              cResult[26] = tmp8;
              cResult[27] = tmp14;
              cResult[28] = tmp25;
              tmp23 = tmp25;
            }
            const obj6 = { size: "sm", variant: "secondary", text: tmp17, accessibilityLabel: tmp4, onPress: tmp19 };
            const tmp22 = jsx(tmp(5376).Button, { size: "sm", variant: "secondary", text: tmp17, accessibilityLabel: tmp4, onPress: tmp19 });
            cResult[21] = tmp19;
            cResult[22] = tmp4;
            cResult[23] = tmp22;
            tmp20 = tmp22;
          }
        }
        const obj7 = { userRecord, accessibilityActions: tmp13, onAccessibilityAction: tmp7 };
        const tmp16 = jsx(tmp(15001).RestrictedUserRowLabel, { userRecord, accessibilityActions: tmp13, onAccessibilityAction: tmp7 });
        cResult[14] = tmp7;
        cResult[15] = tmp13;
        cResult[16] = userRecord;
        cResult[17] = tmp16;
        tmp14 = tmp16;
      }
      function handleAccessibilityAction(nativeEvent) {
        const actionName = nativeEvent.nativeEvent.actionName;
        if ("activate" === actionName) {
          return closure_2();
        } else if ("unblock" === actionName) {
          RelationshipActionCreatorsDefault.unblockUser(userRecord.id, { location: "blocked-users-list-mobile-v2" });
        }
      }
      cResult[6] = tmp6;
      cResult[7] = userRecord.id;
      cResult[8] = handleAccessibilityAction;
      tmp7 = handleAccessibilityAction;
    }
    function handleOpenProfile() {
      showUserProfileActionSheetDefault({ userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations });
    }
    cResult[3] = analyticsLocations;
    cResult[4] = userRecord.id;
    cResult[5] = handleOpenProfile;
    tmp6 = handleOpenProfile;
  }
  const intl = tmp(1126).intl;
  let username = userRecord.globalName;
  if (username == null) {
    username = userRecord.username;
  }
  const formatToPlainStringResult = intl.formatToPlainString(userRecord(1126).t.izBDZN, { name: username });
  cResult[0] = userRecord.globalName;
  cResult[1] = userRecord.username;
  cResult[2] = formatToPlainStringResult;
  tmp4 = formatToPlainStringResult;
  let obj = userRecord(576);
}) : (function BlockedUserRow(userRecord) {
  userRecord = userRecord.userRecord;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(6848)().analyticsLocations;
  const intl = userRecord(1126).intl;
  let username = userRecord.globalName;
  if (username == null) {
    username = userRecord.username;
  }
  function handleOpenProfile() {
    showUserProfileActionSheetDefault({ userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations });
  }
  const formatToPlainStringResult = intl.formatToPlainString(userRecord(1126).t.izBDZN, { name: username });
  let obj = { accessible: false, icon: null, label: null, onPress: null, trailing: null };
  let obj2 = { user: userRecord, guildId: "Array", size: userRecord(1200).AvatarSizes.REFRESH_MEDIUM_32 };
  obj.icon = jsx(userRecord(1200).Avatar, { user: userRecord, guildId: "Array", size: userRecord(1200).AvatarSizes.REFRESH_MEDIUM_32 });
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
    }
  };
  const items = [{ name: "activate" }, { name: "unblock", label: formatToPlainStringResult }];
  obj3.accessibilityActions = items;
  obj.label = jsx(userRecord(15001).RestrictedUserRowLabel, {
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
    }
  });
  obj.onPress = handleOpenProfile;
  const obj4 = { size: "sm", variant: "secondary", text: null, accessibilityLabel: null, onPress: null };
  const intl2 = tmp2(1126).intl;
  obj4.text = intl2.string(userRecord(1126).t["PR/xUz"]);
  obj4.accessibilityLabel = formatToPlainStringResult;
  obj4.onPress = function onPress() {
    RelationshipActionCreatorsDefault.unblockUser(userRecord.id, { location: "blocked-users-list-mobile-v2" });
  };
  obj.trailing = jsx(userRecord(5376).Button, { size: "sm", variant: "secondary", text: null, accessibilityLabel: null, onPress: null });
  return jsx(userRecord(6186).TableRow, { accessible: false, icon: null, label: null, onPress: null, trailing: null });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/BlockedUserRowV2.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedBlockedUserRow(userId) {
  const cResult = userId(576).c(5);
  userId = userId.userId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function l() {
      return UserStore.getUser(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = userId(576);
  const stateFromStores = userId(504).useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    return null;
  } else if (cResult[3] !== stateFromStores) {
    const obj2 = { userRecord: stateFromStores };
    const tmp11 = <closure_5 userRecord={stateFromStores} />;
    cResult[3] = stateFromStores;
    cResult[4] = tmp11;
  }
  const tmpResult = userId(504);
}) : (function ConnectedBlockedUserRow(userId) {
  userId = userId.userId;
  const items = [UserStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { userRecord: stateFromStores };
    tmp2 = <closure_5 userRecord={stateFromStores} />;
  }
  return tmp2;
});