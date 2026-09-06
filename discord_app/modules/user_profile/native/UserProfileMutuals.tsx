// discord_app/modules/user_profile/native/UserProfileMutuals.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const UserProfileSections = fn(8183).UserProfileSections;
const DIVIDER_DOT = fn(7208).DIVIDER_DOT;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = "text-sm/medium";
let c9 = "text-default";
const createStyles = fn(4560);
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
  let obj = user(8190);
  const userProfileAnalyticsContext = obj.useUserProfileAnalyticsContext();
  ({ context: c2, trackUserProfileAction: c3 } = userProfileAnalyticsContext);
  ({ mutualFriends, mutualGuilds } = guildId(12602)(user));
  if (guildId(12994)(user)) {
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
    obj = { style: tmp.container, children: null };
    let tmp9Result = null;
    if (tmp7) {
      const substr = mutualFriends.slice(0, 3);
      const mapped = substr.map((user) => user.user);
      obj = {
        style: tmp.section,
        accessibilityRole: "button",
        onPress() {
          const MUTUAL_FRIENDS = UserProfileSections.MUTUAL_FRIENDS;
          _undefined2({ action: "PRESS_SECTION", section: MUTUAL_FRIENDS });
          const obj = {
            user,
            section: MUTUAL_FRIENDS,
            guildId,
            onPressMutualFriend(userId) {
              _undefined2({ action: "PRESS_MUTUAL_FRIEND" });
              const obj = {};
              const merged = Object.assign(dependencyMap);
              obj.userId = userId;
              guildId(8179)(obj);
            },
            onPressMutualGuild(arg0) {
              _undefined2({ action: "PRESS_MUTUAL_GUILD" });
              user(7342).transitionToGuild(arg0);
              const obj = user(7342);
              guildId(4527).hideAllActionSheets();
            },
          };
          obj.openLazy(asyncRequireImpl(12608, dependencyMap.paths), "UserProfileMutualsActionSheet", obj, "stack");
        },
        children: null,
      };
      const obj1 = {
        size: tmp2(1178).AvatarSizes.SIZE_16,
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
      const items = [closure_6(tmp2(13027).AvatarPile, obj1)];
      const obj2 = { variant, color, children: tmp5(12609)(mutualFriends.length) };
      items[1] = closure_6(tmp2(4556).Text, obj2);
      obj.children = items;
      tmp9Result = closure_7(tmp2(5123).PressableOpacity, obj);
    }
    const items1 = [tmp9Result, ,];
    let tmp15 = tmp7;
    if (tmp7) {
      tmp15 = tmp8;
    }
    if (tmp15) {
      const obj3 = {
        variant,
        color,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: DIVIDER_DOT,
      };
      tmp15 = closure_6(tmp2(4556).Text, obj3);
    }
    items1[1] = tmp15;
    tmp9Result = null;
    if (tmp8) {
      const substr1 = mutualGuilds.slice(0, 3);
      const mapped1 = substr1.map((guild) => guild.guild);
      const obj4 = {
        style: tmp.section,
        accessibilityRole: "button",
        onPress() {
          const MUTUAL_GUILDS = UserProfileSections.MUTUAL_GUILDS;
          _undefined2({ action: "PRESS_SECTION", section: MUTUAL_GUILDS });
          let obj = {
            user,
            section: MUTUAL_GUILDS,
            guildId,
            onPressMutualFriend(userId) {
              _undefined2({ action: "PRESS_MUTUAL_FRIEND" });
              const obj = {};
              const merged = Object.assign(dependencyMap);
              obj.userId = userId;
              guildId(8179)(obj);
            },
            onPressMutualGuild(arg0) {
              _undefined2({ action: "PRESS_MUTUAL_GUILD" });
              user(7342).transitionToGuild(arg0);
              const obj = user(7342);
              guildId(4527).hideAllActionSheets();
            },
          };
          obj.openLazy(asyncRequireImpl(12608, dependencyMap.paths), "UserProfileMutualsActionSheet", obj, "stack");
        },
        children: null,
      };
      let tmp21 = !tmp7;
      if (!tmp7) {
        const obj5 = {
          size: tmp2(5584).GuildIconSizes.XXSMALL,
          totalCount: mapped1.length,
          names: mapped1.map((name) => name.name),
          children: mapped1.map((guild) => {
            const obj = { guild, size: user(_undefined[20]).GuildIconSizes.XXSMALL };
            return closure_1_6(guildId(_undefined[20]), obj, guild.id);
          }),
        };
        tmp21 = closure_6(tmp2(12618).GuildIconPile, obj5);
      }
      const items2 = [tmp21];
      const obj6 = { variant, color, children: tmp5(12603)(mutualGuilds.length) };
      items2[1] = closure_6(tmp2(4556).Text, obj6);
      obj4.children = items2;
      tmp9Result = closure_7(tmp2(5123).PressableOpacity, obj4);
    }
    items1[2] = tmp9Result;
    obj.children = items1;
    return closure_7(c3, obj);
  } else {
    return null;
  }
  const tmp6 = guildId(12602)(user);
}
