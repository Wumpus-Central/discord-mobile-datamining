// discord_app/modules/user_profile/native/UserProfileMutualGuilds.tsx
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const UserProfileSections = fn(8307).UserProfileSections;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let closure_7 = createStyles.createStyles({
  container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" },
  section: { flexDirection: "row", alignItems: "center", columnGap: 6 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuilds.tsx");

export default function UserProfileMutualGuilds(user) {
  user = user.user;
  const tmp = closure_7();
  const trackUserProfileAction = user(8314).useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = trackUserProfileAction(12345)(user).mutualGuilds;
  if (trackUserProfileAction(13108)(user)) {
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
            ActionSheetActionCreatorsDefault.openLazy(
              asyncRequireImpl(12344, dependencyMap.paths),
              "UserProfileMutualGuildsActionSheet",
              {
                user,
                onPressMutualGuild(arg0) {
                  closure_1_1({ action: "PRESS_MUTUAL_GUILD" });
                  user(7052).transitionToGuild(arg0);
                  const obj = user(7052);
                  trackUserProfileAction(5056).hideAllActionSheets();
                },
              },
              "stack",
            );
          },
          children: null,
        };
        const obj4 = {
          size: tmp2(6158).GuildIconSizes.XXSMALL,
          totalCount: mapped.length,
          names: mapped.map((name) => name.name),
          children: mapped.map((guild) => {
            const obj = { guild, size: user(6158).GuildIconSizes.XXSMALL };
            return closure_1_5(trackUserProfileAction(6158), obj, guild.id);
          }),
        };
        const items = [closure_5(tmp2(12359).GuildIconPile, obj4)];
        const obj5 = {
          variant: "text-sm/medium",
          color: "text-default",
          children: trackUserProfileAction(12356)(mutualGuilds.length),
        };
        items[1] = closure_5(tmp2(5088).Text, obj5);
        obj3.children = items;
        obj2.children = closure_6(tmp2(6184).PressableOpacity, obj3);
        return closure_5(View, obj2);
      }
    }
  }
  return null;
}
