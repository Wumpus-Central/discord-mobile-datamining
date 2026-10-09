// === Module 15004: IgnoredUserRow ===

// Module 15004 (IgnoredUserRow)
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7011 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8287 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

const require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (function IgnoredUserRow(userRecord) {
  const cResult = userRecord(576).c(31);
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
          const avatarSource = userRecord.getAvatarSource(undefined);
          cResult[9] = userRecord;
          cResult[10] = avatarSource;
          let tmp8 = avatarSource;
        } else {
          tmp8 = cResult[10];
        }
        if (cResult[11] !== tmp8) {
          const obj2 = { source: tmp8, size: tmp(1200).AvatarSizes.REFRESH_MEDIUM_32 };
          const tmp12 = jsx(tmp(1200).Avatar, { source: tmp8, size: tmp(1200).AvatarSizes.REFRESH_MEDIUM_32 });
          cResult[11] = tmp8;
          cResult[12] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[12];
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { name: "activate" };
          cResult[13] = obj3;
          let tmp14 = obj3;
        } else {
          tmp14 = cResult[13];
        }
        if (cResult[14] !== tmp4) {
          const items = [tmp14, ];
          const obj4 = { name: "unignore", label: tmp4 };
          items[1] = obj4;
          cResult[14] = tmp4;
          cResult[15] = items;
          let tmp15 = items;
        } else {
          tmp15 = cResult[15];
        }
        if (cResult[16] === tmp7) {
          if (cResult[17] === tmp15) {
            if (cResult[18] === userRecord) {
              let tmp16 = cResult[19];
            }
            const _Symbol2 = Symbol;
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1126).intl;
              const stringResult = intl2.string(tmp(1126).t["3GZE6a"]);
              cResult[20] = stringResult;
              let tmp19 = stringResult;
            } else {
              tmp19 = cResult[20];
            }
            if (cResult[21] !== userRecord.id) {
              class S {
                constructor() {
                  obj = closure_1(closure_2[3]);
                  unignoreUserResult = obj.unignoreUser(userRecord.id, "ignored-users-list-mobile");
                  return;
                }
              }
              cResult[21] = userRecord.id;
              cResult[22] = S;
            } else {
              class S {
                constructor() {
                  obj = closure_1(closure_2[3]);
                  unignoreUserResult = obj.unignoreUser(userRecord.id, "ignored-users-list-mobile");
                  return;
                }
              }
            }
            if (cResult[23] === S) {
              class S {
                constructor() {
                  obj = closure_1(closure_2[3]);
                  unignoreUserResult = obj.unignoreUser(userRecord.id, "ignored-users-list-mobile");
                  return;
                }
              }
              if (cResult[26] === tmp6) {
                class S {
                  constructor() {
                    obj = closure_1(closure_2[3]);
                    unignoreUserResult = obj.unignoreUser(userRecord.id, "ignored-users-list-mobile");
                    return;
                  }
                }
              }
              const obj5 = { accessible: false, icon: tmp10, label: tmp16, onPress: tmp6, trailing: tmp22 };
              const tmp27 = jsx(tmp(6186).TableRow, { accessible: false, icon: tmp10, label: tmp16, onPress: tmp6, trailing: tmp22 });
              cResult[26] = tmp6;
              cResult[27] = tmp22;
              cResult[28] = tmp10;
              cResult[29] = tmp16;
              cResult[30] = tmp27;
            }
            const obj6 = { size: "sm", variant: "secondary", text: tmp19, accessibilityLabel: tmp4, onPress: S };
            const tmp24 = jsx(tmp(5376).Button, { size: "sm", variant: "secondary", text: tmp19, accessibilityLabel: tmp4, onPress: S });
            cResult[23] = S;
            cResult[24] = tmp4;
            cResult[25] = tmp24;
          }
        }
        const obj7 = { userRecord, accessibilityActions: tmp15, onAccessibilityAction: tmp7 };
        const tmp18 = jsx(tmp(15001).RestrictedUserRowLabel, { userRecord, accessibilityActions: tmp15, onAccessibilityAction: tmp7 });
        cResult[16] = tmp7;
        cResult[17] = tmp15;
        cResult[18] = userRecord;
        cResult[19] = tmp18;
        tmp16 = tmp18;
      }
      function handleAccessibilityAction(nativeEvent) {
        const actionName = nativeEvent.nativeEvent.actionName;
        if ("activate" === actionName) {
          return closure_2();
        } else if ("unignore" === actionName) {
          RelationshipActionCreatorsDefault.unignoreUser(userRecord.id, "ignored-users-list-mobile");
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
  const globalName = userRecord.globalName;
  if (globalName == null) {
    class S {
      constructor() {
        obj = closure_1(closure_2[3]);
        unignoreUserResult = obj.unignoreUser(userRecord.id, "ignored-users-list-mobile");
        return;
      }
    }
  }
  const formatToPlainStringResult = intl.formatToPlainString(userRecord(1126).t.e3qAIz, { name: globalName });
  cResult[0] = userRecord.globalName;
  cResult[1] = userRecord.username;
  cResult[2] = formatToPlainStringResult;
  tmp4 = formatToPlainStringResult;
  let obj = userRecord(576);
}) : (function IgnoredUserRow(userRecord) {
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
  const formatToPlainStringResult = intl.formatToPlainString(userRecord(1126).t.e3qAIz, { name: username });
  let obj = { accessible: false, icon: jsx(userRecord(1200).Avatar, { source: userRecord.getAvatarSource(undefined), size: userRecord(1200).AvatarSizes.REFRESH_MEDIUM_32 }), label: null, onPress: handleOpenProfile, trailing: null };
  const obj3 = {
    userRecord,
    accessibilityActions: null,
    onAccessibilityAction: function handleAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if ("activate" === actionName) {
        const obj2 = { userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj2);
      } else if ("unignore" === actionName) {
        RelationshipActionCreatorsDefault.unignoreUser(userRecord.id, "ignored-users-list-mobile");
      }
    }
  };
  const items = [{ name: "activate" }, { name: "unignore", label: formatToPlainStringResult }];
  obj3.accessibilityActions = items;
  obj.label = jsx(userRecord(15001).RestrictedUserRowLabel, {
    userRecord,
    accessibilityActions: null,
    onAccessibilityAction: function handleAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if ("activate" === actionName) {
        const obj2 = { userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj2);
      } else if ("unignore" === actionName) {
        RelationshipActionCreatorsDefault.unignoreUser(userRecord.id, "ignored-users-list-mobile");
      }
    }
  });
  const obj4 = { size: "sm", variant: "secondary", text: null, accessibilityLabel: null, onPress: null };
  const intl2 = tmp2(1126).intl;
  obj4.text = intl2.string(userRecord(1126).t["3GZE6a"]);
  obj4.accessibilityLabel = formatToPlainStringResult;
  obj4.onPress = function onPress() {
    RelationshipActionCreatorsDefault.unignoreUser(userRecord.id, "ignored-users-list-mobile");
  };
  obj.trailing = jsx(userRecord(5376).Button, { size: "sm", variant: "secondary", text: null, accessibilityLabel: null, onPress: null });
  return jsx(userRecord(6186).TableRow, { accessible: false, icon: jsx(userRecord(1200).Avatar, { source: userRecord.getAvatarSource(undefined), size: userRecord(1200).AvatarSizes.REFRESH_MEDIUM_32 }), label: null, onPress: handleOpenProfile, trailing: null });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUserRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedIgnoredUserRow(userId) {
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
}) : (function ConnectedIgnoredUserRow(userId) {
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