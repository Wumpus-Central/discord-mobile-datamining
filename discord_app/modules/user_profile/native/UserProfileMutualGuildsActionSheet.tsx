// === Module 12284: UserProfileMutualGuildsActionSheet ===

// Module 12284 (UserProfileMutualGuildsActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import UserProfileStackedActionSheet from "UserProfileStackedActionSheet" /* 10854 */;
import NoMutualServers from "NoMutualServers" /* 12286 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, user;

let c3;
let closure_4;
let obj2;
let obj3;
({ View: c3, ActivityIndicator: closure_4 } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, loadingState: obj3, emptyState: { alignItems: "center" } };
obj2 = { flex: 1, gap: 20, paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_8, alignItems: "center" };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let closure_2;
  let obj = user(576);
  const cResult = obj.c(16);
  user = user.user;
  const onPressMutualGuild = user.onPressMutualGuild;
  const tmp3 = closure_6();
  dependencyMap = tmp3;
  let tmp4 = onPressMutualGuild;
  const mutualGuilds = onPressMutualGuild(12285)(user).mutualGuilds;
  if (cResult[0] === mutualGuilds) {
    if (cResult[1] === onPressMutualGuild) {
      if (cResult[2] === tmp3.emptyState) {
        if (cResult[3] === tmp3.loadingState) {
          let tmp5;
          let tmp8;
          let tmp10;
          if (cResult[4] === user) {
            tmp5 = cResult[5];
          }
          let length;
          if (mutualGuilds != null) {
            length = mutualGuilds.length;
          }
          if (cResult[6] !== length) {
            const tmp9 = tmp4(12296)(length);
            cResult[6] = length;
            cResult[7] = tmp9;
            tmp8 = tmp9;
          } else {
            tmp8 = cResult[7];
          }
          const container = tmp3.container;
          if (cResult[8] !== tmp5) {
            const tmp5Result = tmp5();
            cResult[8] = tmp5;
            cResult[9] = tmp5Result;
            tmp10 = tmp5Result;
          } else {
            tmp10 = cResult[9];
          }
          if (cResult[10] === tmp3.container) {
            let tmp12;
            if (cResult[11] === tmp10) {
              tmp12 = cResult[12];
            }
            if (cResult[13] === tmp8) {
              let tmp16;
              if (cResult[14] === tmp12) {
                tmp16 = cResult[15];
              }
              return tmp16;
            }
            const tmp18 = jsx(tmp4(10854), { scrollable: true, title: tmp8, children: tmp12 });
            cResult[13] = tmp8;
            cResult[14] = tmp12;
            cResult[15] = tmp18;
            tmp16 = tmp18;
          }
          const tmp15 = <mutualGuilds style={container}>{tmp10}</mutualGuilds>;
          cResult[10] = tmp3.container;
          cResult[11] = tmp10;
          cResult[12] = tmp15;
          tmp12 = tmp15;
        }
      }
    }
  }
  const fn = function o() {
    let tmp4;
    if (null == mutualGuilds) {
      tmp4 = <_false style={closure_2.loadingState}><React3 /></_false>;
    } else if (0 === mutualGuilds.length) {
      tmp4 = <_false style={closure_2.emptyState}>{jsx(NoMutualServers.NoMutualServers, {})}</_false>;
    } else {
      tmp4 = jsx(UserProfileStackedActionSheet.UserProfileStackedActionSheetList, {
        data: mutualGuilds,
        keyExtractor(guild) {
            return guild.guild.id;
          },
        renderItem(item) {
            let end;
            let start;
            item = item.item;
            ({ start, end } = item);
            const obj = {
              user: item,
              mutualGuild: item,
              onPress() {
                return onPressMutualGuild(item.guild.id);
              },
              start,
              end
            };
            return closure_1_5(user(closure_1_2[10]).MutualGuildRow, obj);
          }
      });
    }
    return tmp4;
  };
  cResult[0] = mutualGuilds;
  cResult[1] = onPressMutualGuild;
  cResult[2] = tmp3.emptyState;
  cResult[3] = tmp3.loadingState;
  cResult[4] = user;
  cResult[5] = fn;
  tmp5 = fn;
}) : ((user) => {
  user = user.user;
  const onPressMutualGuild = user.onPressMutualGuild;
  const tmp = closure_6();
  const mutualGuilds = onPressMutualGuild(12285)(user).mutualGuilds;
  let length;
  onPressMutualGuild(10854);
  const tmp5 = onPressMutualGuild(12296);
  if (mutualGuilds != null) {
    length = mutualGuilds.length;
  }
  if (null == mutualGuilds) {
    let tmp3Result = <closure_3 style={tmp.loadingState}><closure_4 /></closure_3>;
  } else if (0 === mutualGuilds.length) {
    tmp3Result = <closure_3 style={tmp.emptyState}>{jsx(user(12286).NoMutualServers, {})}</closure_3>;
  } else {
    tmp3Result = jsx(user(10854).UserProfileStackedActionSheetList, {
      data: mutualGuilds,
      keyExtractor(guild) {
          return guild.guild.id;
        },
      renderItem(item) {
          let end;
          let start;
          item = item.item;
          ({ start, end } = item);
          return jsx(user(dependencyMap[10]).MutualGuildRow, {
            user: item,
            mutualGuild: item,
            onPress() {
              return onPressMutualGuild(item.guild.id);
            },
            start,
            end
          });
        }
    });
  }
  return <tmp4 scrollable title={tmp5(length)}>{null}</tmp4>;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuildsActionSheet.tsx");

export default tmp5;