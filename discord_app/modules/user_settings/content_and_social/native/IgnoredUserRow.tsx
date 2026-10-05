// discord_app/modules/user_settings/content_and_social/native/IgnoredUserRow.tsx
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
      const cResult = obj.c(31);
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
            let tmp10;
            let tmp14;
            let tmp15;
            if (cResult[7] === userRecord.id) {
              tmp7 = cResult[8];
            }
            if (cResult[9] !== userRecord) {
              const avatarSource = userRecord.getAvatarSource(undefined);
              cResult[9] = userRecord;
              cResult[10] = avatarSource;
              tmp8 = avatarSource;
            } else {
              tmp8 = cResult[10];
            }
            if (cResult[11] !== tmp8) {
              const Avatar = tmp(1188).Avatar;
              const tmp12 = <Avatar source={tmp8} size={userRecord(1188).AvatarSizes.REFRESH_MEDIUM_32} />;
              cResult[11] = tmp8;
              cResult[12] = tmp12;
              tmp10 = tmp12;
            } else {
              tmp10 = cResult[12];
            }
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = { name: "activate" };
              cResult[13] = obj3;
              tmp14 = obj3;
            } else {
              tmp14 = cResult[13];
            }
            if (cResult[14] !== tmp4) {
              const items = [tmp14];
              const obj4 = { name: "unignore", label: tmp4 };
              items[1] = obj4;
              cResult[14] = tmp4;
              cResult[15] = items;
              tmp15 = items;
            } else {
              tmp15 = cResult[15];
            }
            if (cResult[16] === tmp7) {
              if (cResult[17] === tmp15) {
                let tmp16;
                let tmp19;
                let tmp21;
                if (cResult[18] === userRecord) {
                  tmp16 = cResult[19];
                }
                const _Symbol2 = Symbol;
                if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = tmp(1126).intl;
                  const stringResult = intl2.string(userRecord(1126).t["3GZE6a"]);
                  cResult[20] = stringResult;
                  tmp19 = stringResult;
                } else {
                  tmp19 = cResult[20];
                }
                if (cResult[21] !== userRecord.id) {
                  const fn3 = function h() {
                    const id = userRecord.id;
                    const obj = RelationshipActionCreatorsDefault;
                    obj.unignoreUser(id, "ignored-users-list-mobile");
                  };
                  cResult[21] = userRecord.id;
                  cResult[22] = fn3;
                  tmp21 = fn3;
                } else {
                  tmp21 = cResult[22];
                }
                if (cResult[23] === tmp21) {
                  let tmp22;
                  if (cResult[24] === tmp4) {
                    tmp22 = cResult[25];
                  }
                  if (cResult[26] === tmp6) {
                    if (cResult[27] === tmp22) {
                      if (cResult[28] === tmp10) {
                        let tmp25;
                        if (cResult[29] === tmp16) {
                          tmp25 = cResult[30];
                        }
                        return tmp25;
                      }
                    }
                  }
                  const tmp27 = jsx(userRecord(5993).TableRow, {
                    accessible: false,
                    icon: tmp10,
                    label: tmp16,
                    onPress: tmp6,
                    trailing: tmp22,
                  });
                  cResult[26] = tmp6;
                  cResult[27] = tmp22;
                  cResult[28] = tmp10;
                  cResult[29] = tmp16;
                  cResult[30] = tmp27;
                  tmp25 = tmp27;
                }
                const tmp24 = jsx(userRecord(5594).Button, {
                  size: "sm",
                  variant: "secondary",
                  text: tmp19,
                  accessibilityLabel: tmp4,
                  onPress: tmp21,
                });
                cResult[23] = tmp21;
                cResult[24] = tmp4;
                cResult[25] = tmp24;
                tmp22 = tmp24;
              }
            }
            const tmp18 = jsx(userRecord(14612).RestrictedUserRowLabel, {
              userRecord,
              accessibilityActions: tmp15,
              onAccessibilityAction: tmp7,
            });
            cResult[16] = tmp7;
            cResult[17] = tmp15;
            cResult[18] = userRecord;
            cResult[19] = tmp18;
            tmp16 = tmp18;
          }
          const fn2 = function b(nativeEvent) {
            const actionName = nativeEvent.nativeEvent.actionName;
            if ("activate" === actionName) {
              return closure_2();
            } else if ("unignore" === actionName) {
              const id = userRecord.id;
              const obj = RelationshipActionCreatorsDefault;
              obj.unignoreUser(id, "ignored-users-list-mobile");
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
      let username = userRecord.globalName;
      const e3qAIz = tmp(1126).t.e3qAIz;
      if (username == null) {
        username = userRecord.username;
      }
      const formatToPlainStringResult = formatToPlainString(e3qAIz, { name: username });
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
      const e3qAIz = userRecord(1126).t.e3qAIz;
      if (username == null) {
        username = userRecord.username;
      }
      function handleOpenProfile() {
        const obj = { userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj);
      }
      const formatToPlainStringResult = formatToPlainString(e3qAIz, { name: username });
      const TableRow = tmp2(5993).TableRow;
      let obj2 = {
        source: userRecord.getAvatarSource(undefined),
        size: userRecord(1188).AvatarSizes.REFRESH_MEDIUM_32,
      };
      const Avatar = tmp2(1188).Avatar;
      const items = [{ name: "activate" }, { name: "unignore", label: formatToPlainStringResult }];
      ({
        size: "sm",
        variant: "secondary",
        text: intl2.string(userRecord(1126).t["3GZE6a"]),
        accessibilityLabel: formatToPlainStringResult,
        onPress() {
          const id = userRecord.id;
          const obj = RelationshipActionCreatorsDefault;
          obj.unignoreUser(id, "ignored-users-list-mobile");
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
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUserRow.tsx");

export default tmp3;
