// === Module 13123: UserProfileMutualGuilds ===

// Module 13123 (UserProfileMutualGuilds)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserProfileSections = fn(8300).UserProfileSections;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4636);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" }, section: { flexDirection: "row", alignItems: "center", columnGap: 6 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuilds.tsx");

export default function UserProfileMutualGuilds(user) {
  user = user.user;
  const tmp = closure_7();
  let obj = user(8307);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = trackUserProfileAction(12731)(user).mutualGuilds;
  if (trackUserProfileAction(13124)(user)) {
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
                      user(7445).transitionToGuild(arg0);
                      const obj = user(7445);
                      trackUserProfileAction(4603).hideAllActionSheets();
                    }
                  };
                  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12730, dependencyMap.paths), "UserProfileMutualGuildsActionSheet", obj, "stack");
                },
          children: null
        };
        const obj1 = {
          size: tmp2(5665).GuildIconSizes.XXSMALL,
          totalCount: mapped.length,
          names: mapped.map((name) => name.name),
          children: mapped.map((guild) => {
                  const obj = { guild, size: user(5665).GuildIconSizes.XXSMALL };
                  return closure_1_5(trackUserProfileAction(5665), obj, guild.id);
                })
        };
        const items = [closure_5(tmp2(12747).GuildIconPile, obj1), ];
        const obj2 = { variant: "text-sm/medium", color: "text-default", children: trackUserProfileAction(12732)(mutualGuilds.length) };
        items[1] = closure_5(tmp2(4632).Text, obj2);
        obj.children = items;
        obj.children = closure_6(tmp2(5204).PressableOpacity, obj);
        return closure_5(View, obj);
      }
    }
  }
  return null;
};