// === Module 14832: UserProfileMutualGuilds ===

// Module 14832 (UserProfileMutualGuilds)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserProfileSections = fn(6106).UserProfileSections;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5012);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" }, section: { flexDirection: "row", alignItems: "center", columnGap: 6 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuilds.tsx");

export default function UserProfileMutualGuilds(user) {
  user = user.user;
  const tmp = closure_7();
  const trackUserProfileAction = user(6350).useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = trackUserProfileAction(13548)(user).mutualGuilds;
  if (trackUserProfileAction(14833)(user)) {
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
                  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13547, dependencyMap.paths), "UserProfileMutualGuildsActionSheet", {
                    user,
                    onPressMutualGuild(arg0) {
                      closure_1_1({ action: "PRESS_MUTUAL_GUILD" });
                      user(8558).transitionToGuild(arg0);
                      const obj = user(8558);
                      trackUserProfileAction(5226).hideAllActionSheets();
                    }
                  }, "stack");
                },
          children: null
        };
        const obj4 = {
          size: tmp2(7021).GuildIconSizes.XXSMALL,
          totalCount: mapped.length,
          names: mapped.map((name) => name.name),
          children: mapped.map((guild) => {
                  const obj = { guild, size: user(7021).GuildIconSizes.XXSMALL };
                  return closure_1_5(trackUserProfileAction(7021), obj, guild.id);
                })
        };
        items = [closure_5(tmp2(13565).GuildIconPile, obj4), ];
        const obj5 = { variant: "body-sm/medium", color: "text-default", children: trackUserProfileAction(13549)(mutualGuilds.length) };
        items[1] = closure_5(tmp2(5603).Text, obj5);
        obj3.children = items;
        obj2.children = closure_6(tmp2(6121).PressableOpacity, obj3);
        return closure_5(View, obj2);
      }
    }
  }
  return null;
};