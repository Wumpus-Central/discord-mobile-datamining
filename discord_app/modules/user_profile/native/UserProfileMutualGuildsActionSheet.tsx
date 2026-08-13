// discord_app/modules/user_profile/native/UserProfileMutualGuildsActionSheet.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ View: c3, ActivityIndicator: c4 } = get_ActivityIndicator);
createCacheKey = { container: null, loadingState: null, emptyState: null };
createCacheKey = { flex: 1, gap: 20, paddingTop: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingTop: require("Themes").space.PX_8, alignItems: "center" };
createCacheKey[2] = { alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingTop: require("Themes").space.PX_8, alignItems: "center" };
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuildsActionSheet.tsx");

export default function UserProfileMutualGuildsActionSheet(user) {
  user = user.user;
  const onPressMutualGuild = user.onPressMutualGuild;
  const tmp = createCacheKey();
  const mutualGuilds = onPressMutualGuild(12023)(user).mutualGuilds;
  let length;
  const tmp4 = onPressMutualGuild(9518);
  if (mutualGuilds != null) {
    length = mutualGuilds.length;
  }
  let obj = { scrollable: true, title: onPressMutualGuild(12024)(length), children: null };
  obj = { style: tmp.container, children: null };
  if (null == mutualGuilds) {
    obj = { style: null, children: null };
    obj[0] = tmp.loadingState;
    obj[1] = tmp3(closure_4, {});
    let tmp3Result = tmp3(tmp7, obj);
  } else if (0 === mutualGuilds.length) {
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.emptyState;
    obj1[1] = tmp3(user(12025).NoMutualServers, {});
    tmp3Result = tmp3(tmp7, obj1);
  } else {
    const obj2 = { data: null, keyExtractor: null, renderItem: null };
    obj2[0] = mutualGuilds;
    obj2[1] = function keyExtractor(guild) {
      return guild.guild.id;
    };
    obj2[2] = function renderItem(item) {
      let end;
      let start;
      item = item.item;
      ({ start, end } = item);
      return outer1_5(user(outer1_2[9]).MutualGuildRow, {
        user: item,
        mutualGuild: item,
        onPress() {
          return outer1_1(item.guild.id);
        },
        start,
        end
      });
    };
    tmp3Result = tmp3(user(9518).UserProfileStackedActionSheetList, obj2);
  }
  obj[1] = tmp3Result;
  obj[2] = <closure_3 style={tmp.container}>{null}</closure_3>;
  return <tmp4 style={tmp.container}>{null}</tmp4>;
};