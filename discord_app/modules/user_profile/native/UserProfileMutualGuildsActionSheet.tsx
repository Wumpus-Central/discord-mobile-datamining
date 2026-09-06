// === Module 12601: UserProfileMutualGuildsActionSheet ===

// Module 12601 (UserProfileMutualGuildsActionSheet)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ActivityIndicator: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, loadingState: null, emptyState: null };
createStyles = { flex: 1, gap: 20, paddingTop: nativeDefault.space.PX_8 };
createStyles.container = createStyles;
createStyles.loadingState = { paddingTop: nativeDefault.space.PX_8, alignItems: "center" };
createStyles.emptyState = { alignItems: "center" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuildsActionSheet.tsx");

export default function UserProfileMutualGuildsActionSheet(user) {
  user = user.user;
  const onPressMutualGuild = user.onPressMutualGuild;
  const tmp = closure_6();
  const mutualGuilds = onPressMutualGuild(12602)(user).mutualGuilds;
  let length;
  const tmp4 = onPressMutualGuild(11151);
  if (mutualGuilds != null) {
    length = mutualGuilds.length;
  }
  let obj = { scrollable: true, title: onPressMutualGuild(12603)(length), children: null };
  obj = { style: tmp.container, children: null };
  if (null == mutualGuilds) {
    obj = { style: tmp.loadingState, children: <closure_4 /> };
    let tmp3Result = <closure_3 style={tmp.loadingState}><closure_4 /></closure_3>;
  } else if (0 === mutualGuilds.length) {
    const obj1 = { style: tmp.emptyState, children: jsx(user(12604).NoMutualServers, {}) };
    tmp3Result = <closure_3 style={tmp.emptyState}>{jsx(user(12604).NoMutualServers, {})}</closure_3>;
  } else {
    const obj2 = {
      data: mutualGuilds,
      keyExtractor(guild) {
          return guild.guild.id;
        },
      renderItem(item) {
          item = item.item;
          ({ start, end } = item);
          return jsx(user(dependencyMap[9]).MutualGuildRow, {
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
    tmp3Result = jsx(user(11151).UserProfileStackedActionSheetList, {
      data: mutualGuilds,
      keyExtractor(guild) {
          return guild.guild.id;
        },
      renderItem(item) {
          item = item.item;
          ({ start, end } = item);
          return jsx(user(dependencyMap[9]).MutualGuildRow, {
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
  obj.children = tmp3Result;
  obj.children = <closure_3 style={tmp.container}>{null}</closure_3>;
  return <tmp4 style={tmp.container}>{null}</tmp4>;
};