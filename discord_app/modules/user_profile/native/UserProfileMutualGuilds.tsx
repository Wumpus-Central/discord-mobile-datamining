// === Module 14095: UserProfileMutualGuilds ===

// Module 14095 (UserProfileMutualGuilds)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserProfileSections = fn(8609).UserProfileSections;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4945);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" }, section: { flexDirection: "row", alignItems: "center", columnGap: 6 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuilds.tsx");

export default function UserProfileMutualGuilds(user) {
  user = user.user;
  const tmp = closure_7();
  const trackUserProfileAction = user(8616).useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = trackUserProfileAction(13350)(user).mutualGuilds;
  if (trackUserProfileAction(14096)(user)) {
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
                  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13349, dependencyMap.paths), "UserProfileMutualGuildsActionSheet", {
                    user,
                    onPressMutualGuild(arg0) {
                      closure_1_1({ action: "PRESS_MUTUAL_GUILD" });
                      user(7398).transitionToGuild(arg0);
                      const obj = user(7398);
                      trackUserProfileAction(5171).hideAllActionSheets();
                    }
                  }, "stack");
                },
          children: null
        };
        const obj4 = {
          size: tmp2(6834).GuildIconSizes.XXSMALL,
          totalCount: mapped.length,
          names: mapped.map((name) => name.name),
          children: mapped.map((guild) => {
                  const obj = { guild, size: user(6834).GuildIconSizes.XXSMALL };
                  return closure_1_5(trackUserProfileAction(6834), obj, guild.id);
                })
        };
        const items = [closure_5(tmp2(13362).GuildIconPile, obj4), ];
        const obj5 = { variant: "text-sm/medium", color: "text-default", children: trackUserProfileAction(13361)(mutualGuilds.length) };
        items[1] = closure_5(tmp2(5195).Text, obj5);
        obj3.children = items;
        obj2.children = closure_6(tmp2(6859).PressableOpacity, obj3);
        return closure_5(View, obj2);
      }
    }
  }
  return null;
};