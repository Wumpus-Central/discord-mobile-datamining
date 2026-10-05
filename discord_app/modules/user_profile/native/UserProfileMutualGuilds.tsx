// discord_app/modules/user_profile/native/UserProfileMutualGuilds.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Constants from "../Constants.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const UserProfileSections = Constants.UserProfileSections;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({
  container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" },
  section: { flexDirection: "row", alignItems: "center", columnGap: 6 },
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuilds.tsx");

export default function UserProfileMutualGuilds(user) {
  let PressableOpacity;
  let items;
  let obj3;
  user = user.user;
  let tmp = closure_7();
  let obj = user(7861);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = trackUserProfileAction(12270)(user).mutualGuilds;
  const tmp4 = trackUserProfileAction;
  if (trackUserProfileAction(12813)(user)) {
    if (null != mutualGuilds) {
      if (0 !== mutualGuilds.length) {
        const substr = mutualGuilds.slice(0, 3);
        const mapped = substr.map((guild) => guild.guild);
        let obj2 = { style: tmp.container, children: closure_6(PressableOpacity, obj3) };
        obj3 = {
          style: tmp.section,
          accessibilityRole: "button",
          onPress() {
            let obj = { action: "PRESS_SECTION", section: UserProfileSections.MUTUAL_GUILDS };
            trackUserProfileAction(obj);
            let obj2 = ActionSheetActionCreatorsDefault;
            const obj3 = {
              user,
              onPressMutualGuild(arg0) {
                closure_1_1({ action: "PRESS_MUTUAL_GUILD" });
                const obj = user(dependencyMap[11]);
                obj.transitionToGuild(arg0);
                const obj2 = trackUserProfileAction(dependencyMap[8]);
                obj2.hideAllActionSheets();
              },
            };
            obj2.openLazy(
              asyncRequire(12269, dependencyMap.paths),
              "UserProfileMutualGuildsActionSheet",
              obj3,
              "stack",
            );
          },
          children: items,
        };
        PressableOpacity = tmp2(5909).PressableOpacity;
        const obj4 = {
          size: user(5971).GuildIconSizes.XXSMALL,
          totalCount: mapped.length,
          names: mapped.map((name) => name.name),
          children: mapped.map((guild) => {
            const obj = { guild, size: user(dependencyMap[14]).GuildIconSizes.XXSMALL };
            const tmp = trackUserProfileAction(dependencyMap[14]);
            return closure_1_5(tmp, obj, guild.id);
          }),
        };
        const GuildIconPile = tmp2(12284).GuildIconPile;
        items = [closure_5(GuildIconPile, obj4)];
        const obj5 = { variant: "text-sm/medium", color: "text-default", children: tmp4(12281)(mutualGuilds.length) };
        const Text = tmp2(4886).Text;
        items[1] = closure_5(Text, obj5);
        return closure_5(View, obj2);
      }
    }
  }
  return null;
}
