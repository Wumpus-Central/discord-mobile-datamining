// discord_app/modules/user_profile/native/UserProfileMutualGuilds.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const UserProfileSections = fn(8209).UserProfileSections;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4574);
let closure_7 = createStyles.createStyles({
  container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" },
  section: { flexDirection: "row", alignItems: "center", columnGap: 6 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuilds.tsx");

export default function UserProfileMutualGuilds(user) {
  user = user.user;
  const tmp = closure_7();
  let obj = user(8216);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = trackUserProfileAction(12632)(user).mutualGuilds;
  if (trackUserProfileAction(13024)(user)) {
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
                user(7356).transitionToGuild(arg0);
                const obj = user(7356);
                trackUserProfileAction(4541).hideAllActionSheets();
              },
            };
            ActionSheetActionCreatorsDefault.openLazy(
              asyncRequireImpl(12631, dependencyMap.paths),
              "UserProfileMutualGuildsActionSheet",
              obj,
              "stack",
            );
          },
          children: null,
        };
        const obj1 = {
          size: tmp2(5598).GuildIconSizes.XXSMALL,
          totalCount: mapped.length,
          names: mapped.map((name) => name.name),
          children: mapped.map((guild) => {
            const obj = { guild, size: user(5598).GuildIconSizes.XXSMALL };
            return closure_1_5(trackUserProfileAction(5598), obj, guild.id);
          }),
        };
        const items = [closure_5(tmp2(12648).GuildIconPile, obj1)];
        const obj2 = {
          variant: "text-sm/medium",
          color: "text-default",
          children: trackUserProfileAction(12633)(mutualGuilds.length),
        };
        items[1] = closure_5(tmp2(4570).Text, obj2);
        obj.children = items;
        obj.children = closure_6(tmp2(5137).PressableOpacity, obj);
        return closure_5(View, obj);
      }
    }
  }
  return null;
}
