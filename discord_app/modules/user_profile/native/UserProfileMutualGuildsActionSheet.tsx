// === Module 12382: UserProfileMutualGuildsActionSheet ===

// Module 12382 (UserProfileMutualGuildsActionSheet)
import nativeDefault from "native" /* 587 */;
import UserProfileStackedActionSheet from "UserProfileStackedActionSheet" /* 10505 */;
import NoMutualServers from "NoMutualServers" /* 12384 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ActivityIndicator: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { container: { flex: 1, gap: 20, paddingTop: nativeDefault.space.PX_8 }, loadingState: null, emptyState: null };
let obj3 = { flex: 1, gap: 20, paddingTop: nativeDefault.space.PX_8 };
obj2.loadingState = { paddingTop: nativeDefault.space.PX_8, alignItems: "center" };
obj2.emptyState = { alignItems: "center" };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { paddingTop: nativeDefault.space.PX_8, alignItems: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuildsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileMutualGuildsActionSheet(user) {
  const cResult = user(576).c(16);
  user = user.user;
  const onPressMutualGuild = user.onPressMutualGuild;
  const tmp3 = closure_6();
  dependencyMap = tmp3;
  const mutualGuilds = onPressMutualGuild(12383)(user).mutualGuilds;
  if (cResult[0] === mutualGuilds) {
    if (cResult[1] === onPressMutualGuild) {
      if (cResult[2] === tmp3.emptyState) {
        if (cResult[3] === tmp3.loadingState) {
          if (cResult[4] === user) {
            let tmp5 = cResult[5];
          }
          let length;
          if (mutualGuilds != null) {
            length = mutualGuilds.length;
          }
          if (cResult[6] !== length) {
            const tmp9 = tmp4(12394)(length);
            cResult[6] = length;
            cResult[7] = tmp9;
            let tmp8 = tmp9;
          } else {
            tmp8 = cResult[7];
          }
          if (cResult[8] !== tmp5) {
            const tmp5Result = tmp5();
            cResult[8] = tmp5;
            cResult[9] = tmp5Result;
            let tmp10 = tmp5Result;
          } else {
            tmp10 = cResult[9];
          }
          if (cResult[10] === tmp3.container) {
            if (cResult[11] === tmp10) {
              let tmp12 = cResult[12];
            }
            if (cResult[13] === tmp8) {
              if (cResult[14] === tmp12) {
                let tmp16 = cResult[15];
              }
              return tmp16;
            }
            let obj2 = { scrollable: true, title: tmp8, children: tmp12 };
            const tmp18 = jsx(tmp4(10505), { scrollable: true, title: tmp8, children: tmp12 });
            cResult[13] = tmp8;
            cResult[14] = tmp12;
            cResult[15] = tmp18;
            tmp16 = tmp18;
          }
          let obj3 = { style: tmp3.container, children: tmp10 };
          const tmp15 = <mutualGuilds style={tmp3.container}>{tmp10}</mutualGuilds>;
          cResult[10] = tmp3.container;
          cResult[11] = tmp10;
          cResult[12] = tmp15;
          tmp12 = tmp15;
        }
      }
    }
  }
  function renderMutualGuilds() {
    if (null == mutualGuilds) {
      const obj2 = { style: closure_2.loadingState, children: <React4 /> };
      let tmp4 = <React3 style={closure_2.loadingState}><React4 /></React3>;
    } else if (0 === mutualGuilds.length) {
      const obj3 = { style: closure_2.emptyState, children: jsx(NoMutualServers.NoMutualServers, {}) };
      tmp4 = <React3 style={closure_2.emptyState}>{jsx(NoMutualServers.NoMutualServers, {})}</React3>;
    } else {
      const obj = {
        data: mutualGuilds,
        keyExtractor(guild) {
            return guild.guild.id;
          },
        renderItem(item) {
            item = item.item;
            ({ start, end } = item);
            return closure_1_5(user(closure_1_2[10]).MutualGuildRow, {
              user: item,
              mutualGuild: item,
              onPress() {
                return onPressMutualGuild(item.guild.id);
              },
              start,
              end
            });
          }
      };
      tmp4 = jsx(UserProfileStackedActionSheet.UserProfileStackedActionSheetList, {
        data: mutualGuilds,
        keyExtractor(guild) {
            return guild.guild.id;
          },
        renderItem(item) {
            item = item.item;
            ({ start, end } = item);
            return closure_1_5(user(closure_1_2[10]).MutualGuildRow, {
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
    return tmp4;
  }
  cResult[0] = mutualGuilds;
  cResult[1] = onPressMutualGuild;
  cResult[2] = tmp3.emptyState;
  cResult[3] = tmp3.loadingState;
  cResult[4] = user;
  cResult[5] = renderMutualGuilds;
  tmp5 = renderMutualGuilds;
  let obj = user(576);
}) : (function UserProfileMutualGuildsActionSheet(user) {
  user = user.user;
  const onPressMutualGuild = user.onPressMutualGuild;
  const tmp = closure_6();
  const mutualGuilds = onPressMutualGuild(12383)(user).mutualGuilds;
  let length;
  const tmp4 = onPressMutualGuild(10505);
  if (mutualGuilds != null) {
    length = mutualGuilds.length;
  }
  const obj = { scrollable: true, title: onPressMutualGuild(12394)(length), children: null };
  const obj2 = { style: tmp.container, children: null };
  if (null == mutualGuilds) {
    const obj3 = { style: tmp.loadingState, children: <closure_4 /> };
    let tmp3Result = <closure_3 style={tmp.loadingState}><closure_4 /></closure_3>;
  } else if (0 === mutualGuilds.length) {
    const obj4 = { style: tmp.emptyState, children: jsx(user(12384).NoMutualServers, {}) };
    tmp3Result = <closure_3 style={tmp.emptyState}>{jsx(user(12384).NoMutualServers, {})}</closure_3>;
  } else {
    const obj5 = {
      data: mutualGuilds,
      keyExtractor(guild) {
          return guild.guild.id;
        },
      renderItem(item) {
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
    };
    tmp3Result = jsx(user(10505).UserProfileStackedActionSheetList, {
      data: mutualGuilds,
      keyExtractor(guild) {
          return guild.guild.id;
        },
      renderItem(item) {
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
  obj2.children = tmp3Result;
  obj.children = <closure_3 style={tmp.container}>{null}</closure_3>;
  return <tmp4 scrollable title={onPressMutualGuild(12394)(length)}>{null}</tmp4>;
});