// === Module 12812: UserProfileMutualGuilds ===

// Module 12812 (UserProfileMutualGuilds)
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserProfileSections = fn(7854).UserProfileSections;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" }, section: { flexDirection: "row", alignItems: "center", columnGap: 6 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuilds.tsx");

export default function UserProfileMutualGuilds(user) {
  user = user.user;
  const tmp = closure_7();
  const trackUserProfileAction = user(7861).useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = trackUserProfileAction(12270)(user).mutualGuilds;
  if (trackUserProfileAction(12813)(user)) {
    if (null != mutualGuilds) {
      if (0 !== mutualGuilds.length) {
        const substr = mutualGuilds.slice(0, 3);
        const mapped = substr.map((guild) => guild.guild);
        const obj2 = { style: tmp.container, children: null };
        const obj3 = {
          style: tmp.section,
          accessibilityRole: "button",
          onPress() {
                  trackUserProfileAction({ action: "PRESS_SECTION", section: UserProfileSections.MUTUAL_GUILDS });
                  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12269, dependencyMap.paths), "UserProfileMutualGuildsActionSheet", {
                    user,
                    onPressMutualGuild(arg0) {
                      closure_1_1({ action: "PRESS_MUTUAL_GUILD" });
                      user(6845).transitionToGuild(arg0);
                      const obj = user(6845);
                      trackUserProfileAction(4854).hideAllActionSheets();
                    }
                  }, "stack");
                },
          children: null
        };
        const obj4 = {
          size: tmp2(5971).GuildIconSizes.XXSMALL,
          totalCount: mapped.length,
          names: mapped.map((name) => name.name),
          children: mapped.map((guild) => {
                  const obj = { guild, size: user(5971).GuildIconSizes.XXSMALL };
                  return closure_1_5(trackUserProfileAction(5971), obj, guild.id);
                })
        };
        const items = [closure_5(tmp2(12284).GuildIconPile, obj4), ];
        const obj5 = { variant: "text-sm/medium", color: "text-default", children: trackUserProfileAction(12281)(mutualGuilds.length) };
        items[1] = closure_5(tmp2(4886).Text, obj5);
        obj3.children = items;
        obj2.children = closure_6(tmp2(5909).PressableOpacity, obj3);
        return closure_5(View, obj2);
      }
    }
  }
  return null;
};