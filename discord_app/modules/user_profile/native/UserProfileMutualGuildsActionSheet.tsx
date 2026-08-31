// discord_app/modules/user_profile/native/UserProfileMutualGuildsActionSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ View: c3, ActivityIndicator: c4 } = get_ActivityIndicator);
createCacheKey = { container: null, loadingState: null, emptyState: null };
createCacheKey = { flex: 1, gap: 20, paddingTop: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingTop: ThemesDefault.space.PX_8, alignItems: "center" };
createCacheKey[2] = { alignItems: "center" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingTop: ThemesDefault.space.PX_8, alignItems: "center" };
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuildsActionSheet.tsx");

export default function UserProfileMutualGuildsActionSheet(user) {
  user = user.user;
  const onPressMutualGuild = user.onPressMutualGuild;
  const tmp = callback();
  const mutualGuilds = onPressMutualGuild(9189)(user).mutualGuilds;
  let length;
  const tmp4 = onPressMutualGuild(9179);
  if (mutualGuilds != null) {
    length = mutualGuilds.length;
  }
  let obj = { scrollable: true, title: onPressMutualGuild(9194)(length), children: null };
  obj = { style: tmp.container, children: null };
  if (null == mutualGuilds) {
    obj = { style: null, children: null };
    obj[0] = tmp.loadingState;
    obj[1] = tmp3(closure_4, {});
    let tmp3Result = tmp3(tmp7, obj);
  } else if (0 === mutualGuilds.length) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.emptyState;
    obj1[1] = tmp3(user(9195).NoMutualServers, {});
    tmp3Result = tmp3(tmp7, obj1);
  } else {
    const obj2 = { data: null, keyExtractor: null, renderItem: null };
    obj2[0] = mutualGuilds;
    obj2[1] = function keyExtractor(guild) {
      return guild.guild.id;
    };
    obj2[2] = function renderItem(item) {
      item = item.item;
      ({ start, end } = item);
      return closure_1_5(user(closure_1_2[9]).MutualGuildRow, {
        user: item,
        mutualGuild: item,
        onPress() {
          return closure_1_1(item.guild.id);
        },
        start,
        end
      });
    };
    tmp3Result = tmp3(user(9179).UserProfileStackedActionSheetList, obj2);
  }
  obj[1] = tmp3Result;
  obj[2] = <closure_3 style={tmp.container}>{null}</closure_3>;
  return <tmp4 style={tmp.container}>{null}</tmp4>;
};