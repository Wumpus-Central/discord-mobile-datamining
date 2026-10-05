// discord_app/modules/user_settings/content_and_social/native/BlockedUserRowV2.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import RelationshipActionCreatorsDefault from "../../../../actions/RelationshipActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, userId, userRecord;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userRecord) => {
      let analyticsLocations;
      let closure_2;
      let obj = userRecord(576);
      const cResult = obj.c(29);
      userRecord = userRecord.userRecord;
      analyticsLocations = analyticsLocations(6657)().analyticsLocations;
      if (cResult[0] === userRecord.globalName) {
        let tmp4;
        if (cResult[1] === userRecord.username) {
          tmp4 = cResult[2];
        }
        if (cResult[3] === analyticsLocations) {
          let tmp6;
          if (cResult[4] === userRecord.id) {
            tmp6 = cResult[5];
          }
          dependencyMap = tmp6;
          if (cResult[6] === tmp6) {
            let tmp7;
            let tmp8;
            let tmp12;
            let tmp13;
            if (cResult[7] === userRecord.id) {
              tmp7 = cResult[8];
            }
            if (cResult[9] !== userRecord) {
              const Avatar = tmp(1188).Avatar;
              const tmp10 = (
                <Avatar user={userRecord} guildId="Array" size={userRecord(1188).AvatarSizes.REFRESH_MEDIUM_32} />
              );
              cResult[9] = userRecord;
              cResult[10] = tmp10;
              tmp8 = tmp10;
            } else {
              tmp8 = cResult[10];
            }
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = { name: "activate" };
              cResult[11] = obj3;
              tmp12 = obj3;
            } else {
              tmp12 = cResult[11];
            }
            if (cResult[12] !== tmp4) {
              const items = [tmp12];
              const obj4 = { name: "unblock", label: tmp4 };
              items[1] = obj4;
              cResult[12] = tmp4;
              cResult[13] = items;
              tmp13 = items;
            } else {
              tmp13 = cResult[13];
            }
            if (cResult[14] === tmp7) {
              if (cResult[15] === tmp13) {
                let tmp14;
                let tmp17;
                if (cResult[16] === userRecord) {
                  tmp14 = cResult[17];
                }
                const _Symbol2 = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = tmp(1126).intl;
                  const stringResult = intl2.string(userRecord(1126).t["PR/xUz"]);
                  cResult[18] = stringResult;
                  tmp17 = stringResult;
                } else {
                  tmp17 = cResult[18];
                }
                if (cResult[19] !== userRecord.id) {
                  class S {
                    constructor() {
                      const id = userRecord.id;
                      const obj = RelationshipActionCreatorsDefault;
                      obj.unblockUser(id, { location: "blocked-users-list-mobile-v2" });
                    }
                  }
                  cResult[19] = userRecord.id;
                  cResult[20] = S;
                } else {
                  class S {
                    constructor() {
                      const id = userRecord.id;
                      const obj = RelationshipActionCreatorsDefault;
                      obj.unblockUser(id, { location: "blocked-users-list-mobile-v2" });
                    }
                  }
                }
                if (cResult[21] === S) {
                  class S {
                    constructor() {
                      const id = userRecord.id;
                      const obj = RelationshipActionCreatorsDefault;
                      obj.unblockUser(id, { location: "blocked-users-list-mobile-v2" });
                    }
                  }
                  if (cResult[24] === tmp6) {
                    class S {
                      constructor() {
                        const id = userRecord.id;
                        const obj = RelationshipActionCreatorsDefault;
                        obj.unblockUser(id, { location: "blocked-users-list-mobile-v2" });
                      }
                    }
                  }
                  cResult[24] = tmp6;
                  cResult[25] = tmp20;
                  cResult[26] = tmp8;
                  cResult[27] = tmp14;
                  cResult[28] = jsx(userRecord(5993).TableRow, {
                    accessible: false,
                    icon: tmp8,
                    label: tmp14,
                    onPress: tmp6,
                    trailing: tmp20,
                  });
                  const tmp25 = jsx(userRecord(5993).TableRow, {
                    accessible: false,
                    icon: tmp8,
                    label: tmp14,
                    onPress: tmp6,
                    trailing: tmp20,
                  });
                }
                cResult[21] = S;
                cResult[22] = tmp4;
                cResult[23] = jsx(userRecord(5594).Button, {
                  size: "sm",
                  variant: "secondary",
                  text: tmp17,
                  accessibilityLabel: tmp4,
                  onPress: S,
                });
                const tmp22 = jsx(userRecord(5594).Button, {
                  size: "sm",
                  variant: "secondary",
                  text: tmp17,
                  accessibilityLabel: tmp4,
                  onPress: S,
                });
              }
            }
            const tmp16 = jsx(userRecord(14612).RestrictedUserRowLabel, {
              userRecord,
              accessibilityActions: tmp13,
              onAccessibilityAction: tmp7,
            });
            cResult[14] = tmp7;
            cResult[15] = tmp13;
            cResult[16] = userRecord;
            cResult[17] = tmp16;
            tmp14 = tmp16;
          }
          const fn2 = function v(nativeEvent) {
            const actionName = nativeEvent.nativeEvent.actionName;
            if ("activate" === actionName) {
              return closure_2();
            } else if ("unblock" === actionName) {
              const id = userRecord.id;
              const obj = RelationshipActionCreatorsDefault;
              obj.unblockUser(id, { location: "blocked-users-list-mobile-v2" });
            }
          };
          cResult[6] = tmp6;
          cResult[7] = userRecord.id;
          cResult[8] = fn2;
          tmp7 = fn2;
        }
        const fn = function u() {
          const obj = { userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations };
          showUserProfileActionSheetDefault(obj);
        };
        cResult[3] = analyticsLocations;
        cResult[4] = userRecord.id;
        cResult[5] = fn;
        tmp6 = fn;
      }
      const intl = tmp(1126).intl;
      const formatToPlainString = intl.formatToPlainString;
      const globalName = userRecord.globalName;
      const izBDZN = tmp(1126).t.izBDZN;
      if (globalName == null) {
        class S {
          constructor() {
            const id = userRecord.id;
            const obj = RelationshipActionCreatorsDefault;
            obj.unblockUser(id, { location: "blocked-users-list-mobile-v2" });
          }
        }
      }
      const formatToPlainStringResult = formatToPlainString(izBDZN, { name: globalName });
      cResult[0] = userRecord.globalName;
      cResult[1] = userRecord.username;
      cResult[2] = formatToPlainStringResult;
      tmp4 = formatToPlainStringResult;
    }
  : (userRecord) => {
      let intl2;
      userRecord = userRecord.userRecord;
      let analyticsLocations;
      analyticsLocations = analyticsLocations(6657)().analyticsLocations;
      const intl = userRecord(1126).intl;
      const formatToPlainString = intl.formatToPlainString;
      let username = userRecord.globalName;
      const izBDZN = userRecord(1126).t.izBDZN;
      if (username == null) {
        username = userRecord.username;
      }
      function handleOpenProfile() {
        const obj = { userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj);
      }
      const formatToPlainStringResult = formatToPlainString(izBDZN, { name: username });
      const TableRow = tmp2(5993).TableRow;
      let obj2 = { user: userRecord, guildId: "Array", size: userRecord(1188).AvatarSizes.REFRESH_MEDIUM_32 };
      const Avatar = tmp2(1188).Avatar;
      const items = [{ name: "activate" }, { name: "unblock", label: formatToPlainStringResult }];
      ({
        size: "sm",
        variant: "secondary",
        text: intl2.string(userRecord(1126).t["PR/xUz"]),
        accessibilityLabel: formatToPlainStringResult,
        onPress() {
          const id = userRecord.id;
          const obj = RelationshipActionCreatorsDefault;
          obj.unblockUser(id, { location: "blocked-users-list-mobile-v2" });
        },
      });
      const Button = tmp2(5594).Button;
      intl2 = tmp2(1126).intl;
      return <TableRow accessible={false} icon={null} label={null} onPress={handleOpenProfile} trailing={null} />;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let first;
      let tmp6;
      const obj = userId(576);
      const cResult = obj.c(5);
      const tmp = userId;
      userId = userId.userId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== userId) {
        const fn = function l() {
          return UserStore.getUser(userId);
        };
        cResult[1] = userId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      let tmp8 = null;
      if (null != stateFromStores) {
        let tmp9;
        if (cResult[3] !== stateFromStores) {
          const tmp12 = <closure_5 userRecord={stateFromStores} />;
          cResult[3] = stateFromStores;
          cResult[4] = tmp12;
          tmp9 = tmp12;
        } else {
          tmp9 = cResult[4];
        }
        tmp8 = tmp9;
      }
      return tmp8;
    }
  : (userId) => {
      userId = userId.userId;
      const items = [UserStore];
      const obj = userId(504);
      const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
      let tmp2 = null;
      if (null != stateFromStores) {
        tmp2 = <closure_5 userRecord={stateFromStores} />;
      }
      return tmp2;
    };
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/BlockedUserRowV2.tsx");

export default tmp3;
