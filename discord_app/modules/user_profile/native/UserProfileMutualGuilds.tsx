// discord_app/modules/user_profile/native/UserProfileMutualGuilds.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { UserProfileSections } from "../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" }, section: { flexDirection: "row", alignItems: "center", columnGap: 6 } });
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuilds.tsx");

export default function UserProfileMutualGuilds(user) {
  user = user.user;
  const tmp = callback3();
  let obj = user(8934);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = trackUserProfileAction(11771)(user).mutualGuilds;
  if (trackUserProfileAction(12091)(user)) {
    if (null != mutualGuilds) {
      if (0 !== mutualGuilds.length) {
        const substr = mutualGuilds.slice(0, 3);
        const mapped = substr.map((item, index) => item.guild);
        obj = { style: null, children: null };
        obj[0] = tmp.container;
        obj = { style: null, accessibilityRole: "button", onPress: null, children: null };
        obj[0] = tmp.section;
        obj[2] = function onPress() {
          let obj = { action: "PRESS_SECTION", section: UserProfileSections.MUTUAL_GUILDS };
          trackUserProfileAction(obj);
          obj = {
            user,
            onPressMutualGuild(arg0) {
              callback({ action: "PRESS_MUTUAL_GUILD" });
              user(closure_1_2[11]).transitionToGuild(arg0);
              const obj = user(closure_1_2[11]);
              trackUserProfileAction(closure_1_2[8]).hideActionSheet();
              const obj2 = trackUserProfileAction(closure_1_2[8]);
              trackUserProfileAction(closure_1_2[8]).hideActionSheet();
            }
          };
          trackUserProfileAction(dependencyMap[8]).openLazy(user(dependencyMap[10])(dependencyMap[9], dependencyMap.paths), "UserProfileMutualGuildsActionSheet", obj, "stack");
        };
        obj1 = { size: null, totalCount: null, names: null, children: null };
        obj1[0] = tmp2(7188).GuildIconSizes.XXSMALL;
        obj1[1] = mapped.length;
        obj1[2] = mapped.map((item, index) => item.name);
        obj1[3] = mapped.map((item, index) => {
          const obj = { guild: item, size: user(7188).GuildIconSizes.XXSMALL };
          return callback(trackUserProfileAction(7188), obj, item.id);
        });
        const items = [callback(tmp2(11787).GuildIconPile, obj1), ];
        let obj2 = { variant: "text-sm/medium", color: "text-default", children: null };
        obj2[2] = trackUserProfileAction(11772)(mutualGuilds.length);
        items[1] = callback(tmp2(4734).Text, obj2);
        obj[3] = items;
        obj[1] = callback2(tmp2(5433).PressableOpacity, obj);
        return callback(View, obj);
      }
    }
  }
  return null;
};