// === Module 9166: UserProfileMutualGuilds ===

// Module 9166 (UserProfileMutualGuilds)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY" /* 8502 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" }, section: { flexDirection: "row", alignItems: "center", columnGap: 6 } });
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuilds.tsx");

export default function UserProfileMutualGuilds(user) {
  user = user.user;
  let trackUserProfileAction;
  const tmp = callback3();
  let obj = user(8504);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = trackUserProfileAction(9167)(user).mutualGuilds;
  if (trackUserProfileAction(9169)(user)) {
    if (null != mutualGuilds) {
      if (0 !== mutualGuilds.length) {
        const substr = mutualGuilds.slice(0, 3);
        const mapped = substr.map((guild) => guild.guild);
        obj = { style: null, children: null };
        obj[0] = tmp.container;
        obj = { style: null, accessibilityRole: "button", onPress: null, children: null };
        obj[0] = tmp.section;
        obj[2] = function onPress() {
          let obj = { action: "PRESS_SECTION", section: closure_1_4.MUTUAL_GUILDS };
          trackUserProfileAction(obj);
          obj = {
            user,
            onPressMutualGuild(arg0) {
              callback({ action: "PRESS_MUTUAL_GUILD" });
              closure_1_0(closure_1_2[11]).transitionToGuild(arg0);
              const obj = closure_1_0(closure_1_2[11]);
              closure_1_1(closure_1_2[8]).hideAllActionSheets();
            }
          };
          trackUserProfileAction(closure_1_2[8]).openLazy(user(closure_1_2[10])(closure_1_2[9], closure_1_2.paths), "UserProfileMutualGuildsActionSheet", obj, "stack");
        };
        obj1 = { size: null, totalCount: null, names: null, children: null };
        obj1[0] = tmp2(5969).GuildIconSizes.XXSMALL;
        obj1[1] = mapped.length;
        obj1[2] = mapped.map((name) => name.name);
        obj1[3] = mapped.map((guild) => {
          const obj = { guild, size: user(5969).GuildIconSizes.XXSMALL };
          return callback(trackUserProfileAction(5969), obj, guild.id);
        });
        const items = [callback(tmp2(9209).GuildIconPile, obj1), ];
        const obj2 = { variant: "text-sm/medium", color: "text-default", children: null };
        obj2[2] = trackUserProfileAction(9172)(mutualGuilds.length);
        items[1] = callback(tmp2(4442).Text, obj2);
        obj[3] = items;
        obj[1] = callback2(tmp2(5033).PressableOpacity, obj);
        return callback(View, obj);
      }
    }
  }
  return null;
};