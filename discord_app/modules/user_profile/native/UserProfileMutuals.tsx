// discord_app/modules/user_profile/native/UserProfileMutuals.tsx
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const UserProfileSections = fn(8413).UserProfileSections;
const DIVIDER_DOT = fn(7404).DIVIDER_DOT;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = "text-sm/medium";
let c9 = "text-default";
const createStyles = fn(4722);
let closure_10 = createStyles.createStyles({
  container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" },
  section: { flexDirection: "row", alignItems: "center", columnGap: 6 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutuals.tsx");

export default function UserProfileMutuals(user) {
  user = user.user;
  const guildId = user.guildId;
  dependencyMap = undefined;
  c3 = undefined;
  const tmp = closure_10();
  const userProfileAnalyticsContext = user(8420).useUserProfileAnalyticsContext();
  ({ context: c2, trackUserProfileAction: c3 } = userProfileAnalyticsContext);
  let obj = user(8420);
  ({ mutualFriends, mutualGuilds } = guildId(12844)(user));
  if (guildId(13240)(user)) {
    let tmp7 = null != mutualFriends;
    if (tmp7) {
      tmp7 = mutualFriends.length > 0;
    }
    let tmp8 = null != mutualGuilds;
    if (tmp8) {
      tmp8 = mutualGuilds.length > 0;
    }
    if (!tmp7) {
      if (!tmp8) {
        return null;
      }
    }
    const obj2 = { style: tmp.container, children: null };
    let tmp9Result = null;
    if (tmp7) {
      const substr = mutualFriends.slice(0, 3);
      const mapped = substr.map((user) => user.user);
      const obj3 = {
        style: tmp.section,
        accessibilityRole: "button",
        onPress() {
          const MUTUAL_FRIENDS = UserProfileSections.MUTUAL_FRIENDS;
          _undefined2({ action: "PRESS_SECTION", section: MUTUAL_FRIENDS });
          ActionSheetActionCreatorsDefault.openLazy(
            asyncRequireImpl(12850, dependencyMap.paths),
            "UserProfileMutualsActionSheet",
            {
              user,
              section: MUTUAL_FRIENDS,
              guildId,
              onPressMutualFriend(userId) {
                _undefined2({ action: "PRESS_MUTUAL_FRIEND" });
                const obj = {};
                const merged = Object.assign(dependencyMap);
                obj.userId = userId;
                guildId(8409)(obj);
              },
              onPressMutualGuild(arg0) {
                _undefined2({ action: "PRESS_MUTUAL_GUILD" });
                user(7538).transitionToGuild(arg0);
                const obj = user(7538);
                guildId(4689).hideAllActionSheets();
              },
            },
            "stack",
          );
        },
        children: null,
      };
      const obj4 = {
        size: tmp2(1177).AvatarSizes.SIZE_16,
        totalCount: mapped.length,
        names: mapped.map((username) => username.username),
        children: mapped.map((user) =>
          closure_1_6(
            user(_undefined[16]).Avatar,
            { user, size: user(_undefined[16]).AvatarSizes.SIZE_16, guildId: "Array" },
            user.id,
          ),
        ),
      };
      const items = [closure_6(tmp2(13273).AvatarPile, obj4)];
      const obj5 = { variant, color, children: tmp5(12851)(mutualFriends.length) };
      items[1] = closure_6(tmp2(4718).Text, obj5);
      obj3.children = items;
      tmp9Result = closure_7(tmp2(5292).PressableOpacity, obj3);
    }
    const items1 = [tmp9Result, ,];
    let tmp15 = tmp7;
    if (tmp7) {
      tmp15 = tmp8;
    }
    if (tmp15) {
      const obj6 = {
        variant,
        color,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: DIVIDER_DOT,
      };
      tmp15 = closure_6(tmp2(4718).Text, obj6);
    }
    items1[1] = tmp15;
    let tmp9Result2 = null;
    if (tmp8) {
      const substr1 = mutualGuilds.slice(0, 3);
      const mapped1 = substr1.map((guild) => guild.guild);
      const obj7 = {
        style: tmp.section,
        accessibilityRole: "button",
        onPress() {
          const MUTUAL_GUILDS = UserProfileSections.MUTUAL_GUILDS;
          _undefined2({ action: "PRESS_SECTION", section: MUTUAL_GUILDS });
          ActionSheetActionCreatorsDefault.openLazy(
            asyncRequireImpl(12850, dependencyMap.paths),
            "UserProfileMutualsActionSheet",
            {
              user,
              section: MUTUAL_GUILDS,
              guildId,
              onPressMutualFriend(userId) {
                _undefined2({ action: "PRESS_MUTUAL_FRIEND" });
                const obj = {};
                const merged = Object.assign(dependencyMap);
                obj.userId = userId;
                guildId(8409)(obj);
              },
              onPressMutualGuild(arg0) {
                _undefined2({ action: "PRESS_MUTUAL_GUILD" });
                user(7538).transitionToGuild(arg0);
                const obj = user(7538);
                guildId(4689).hideAllActionSheets();
              },
            },
            "stack",
          );
        },
        children: null,
      };
      let tmp21 = !tmp7;
      if (!tmp7) {
        const obj8 = {
          size: tmp2(5754).GuildIconSizes.XXSMALL,
          totalCount: mapped1.length,
          names: mapped1.map((name) => name.name),
          children: mapped1.map((guild) => {
            const obj = { guild, size: user(_undefined[20]).GuildIconSizes.XXSMALL };
            return closure_1_6(guildId(_undefined[20]), obj, guild.id);
          }),
        };
        tmp21 = closure_6(tmp2(12860).GuildIconPile, obj8);
      }
      const items2 = [tmp21];
      const obj9 = { variant, color, children: tmp5(12845)(mutualGuilds.length) };
      items2[1] = closure_6(tmp2(4718).Text, obj9);
      obj7.children = items2;
      tmp9Result2 = closure_7(tmp2(5292).PressableOpacity, obj7);
    }
    items1[2] = tmp9Result2;
    obj2.children = items1;
    return closure_7(c3, obj2);
  } else {
    return null;
  }
  const tmp6 = guildId(12844)(user);
}
