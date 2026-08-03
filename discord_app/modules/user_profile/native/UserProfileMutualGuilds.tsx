// === Module 12092: UserProfileMutualGuilds ===

// Module 12092 (UserProfileMutualGuilds)
import "noop";
import { View } from "set";
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" }, section: { flexDirection: "row", alignItems: "center", columnGap: 6 } });
const result = require("USER_PROFILE_TOOLTIP_DELAY").fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuilds.tsx");

export default function UserProfileMutualGuilds(user) {
  user = user.user;
  let trackUserProfileAction;
  const tmp = callback3();
  let obj = user(8442);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = trackUserProfileAction(11813)(user).mutualGuilds;
  if (trackUserProfileAction(12093)(user)) {
    if (null != mutualGuilds) {
      if (0 !== mutualGuilds.length) {
        const substr = mutualGuilds.slice(0, 3);
        const mapped = substr.map((guild) => guild.guild);
        obj = { style: null, children: null };
        obj[0] = tmp.container;
        obj = { style: null, accessibilityRole: "button", onPress: null, children: null };
        obj[0] = tmp.section;
        obj[2] = function onPress() {
          let obj = { action: "PRESS_SECTION", section: outer1_4.MUTUAL_GUILDS };
          trackUserProfileAction(obj);
          obj = {
            user,
            onPressMutualGuild(arg0) {
              callback({ action: "PRESS_MUTUAL_GUILD" });
              outer1_0(outer1_2[11]).transitionToGuild(arg0);
              const obj = outer1_0(outer1_2[11]);
              outer1_1(outer1_2[8]).hideActionSheet();
              const obj2 = outer1_1(outer1_2[8]);
              outer1_1(outer1_2[8]).hideActionSheet();
            }
          };
          trackUserProfileAction(outer1_2[8]).openLazy(user(outer1_2[10])(outer1_2[9], outer1_2.paths), "UserProfileMutualGuildsActionSheet", obj, "stack");
        };
        const obj1 = { size: null, totalCount: null, names: null, children: null };
        obj1[0] = tmp2(5632).GuildIconSizes.XXSMALL;
        obj1[1] = mapped.length;
        obj1[2] = mapped.map((name) => name.name);
        obj1[3] = mapped.map((guild) => {
          const obj = { guild, size: null };
          obj[1] = user(5632).GuildIconSizes.XXSMALL;
          return callback(trackUserProfileAction(5632), obj, guild.id);
        });
        const items = [callback(tmp2(11828).GuildIconPile, obj1), ];
        let obj2 = { variant: "text-sm/medium", color: "text-default", children: null };
        obj2[2] = trackUserProfileAction(11815)(mutualGuilds.length);
        items[1] = callback(tmp2(4251).Text, obj2);
        obj[3] = items;
        obj[1] = callback2(tmp2(4783).PressableOpacity, obj);
        return callback(View, obj);
      }
    }
  }
  return null;
};