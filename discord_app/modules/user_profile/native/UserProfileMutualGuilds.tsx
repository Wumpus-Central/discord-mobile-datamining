// === Module 13086: UserProfileMutualGuilds ===

// Module 13086 (UserProfileMutualGuilds)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserProfileSections = fn(8268).UserProfileSections;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4606);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" }, section: { flexDirection: "row", alignItems: "center", columnGap: 6 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuilds.tsx");

export default function UserProfileMutualGuilds(user) {
  user = user.user;
  const tmp = closure_7();
  let obj = user(8275);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = trackUserProfileAction(12695)(user).mutualGuilds;
  if (trackUserProfileAction(13087)(user)) {
    if (null != mutualGuilds) {
      if (0 !== mutualGuilds.length) {
        const substr = mutualGuilds.slice(0, 3);
        const mapped = substr.map((guild) => guild.guild);
        obj = { style: tmp.container, children: null };
        obj = {
          style: tmp.section,
          accessibilityRole: "button",
          onPress() {
                  let obj = { action: "PRESS_SECTION", section: UserProfileSections.MUTUAL_GUILDS };
                  trackUserProfileAction(obj);
                  obj = {
                    user,
                    onPressMutualGuild(arg0) {
                      closure_1_1({ action: "PRESS_MUTUAL_GUILD" });
                      user(7415).transitionToGuild(arg0);
                      const obj = user(7415);
                      trackUserProfileAction(4573).hideAllActionSheets();
                    }
                  };
                  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12694, dependencyMap.paths), "UserProfileMutualGuildsActionSheet", obj, "stack");
                },
          children: null
        };
        const obj1 = {
          size: tmp2(5635).GuildIconSizes.XXSMALL,
          totalCount: mapped.length,
          names: mapped.map((name) => name.name),
          children: mapped.map((guild) => {
                  const obj = { guild, size: user(5635).GuildIconSizes.XXSMALL };
                  return closure_1_5(trackUserProfileAction(5635), obj, guild.id);
                })
        };
        const items = [closure_5(tmp2(12711).GuildIconPile, obj1), ];
        const obj2 = { variant: "text-sm/medium", color: "text-default", children: trackUserProfileAction(12696)(mutualGuilds.length) };
        items[1] = closure_5(tmp2(4602).Text, obj2);
        obj.children = items;
        obj.children = closure_6(tmp2(5174).PressableOpacity, obj);
        return closure_5(View, obj);
      }
    }
  }
  return null;
};