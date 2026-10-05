// discord_app/modules/user_profile/native/UserProfileMutuals.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Constants from "Constants.tsx";
import Constants2 from "../Constants.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const UserProfileSections = Constants2.UserProfileSections;
const DIVIDER_DOT = Constants.DIVIDER_DOT;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = "text-sm/medium";
let c9 = "text-default";
let closure_10 = createStyles.createStyles({
  container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" },
  section: { flexDirection: "row", alignItems: "center", columnGap: 6 },
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutuals.tsx");

export default function UserProfileMutuals(user) {
  let _undefined;
  let _undefined2;
  let c2;
  let c3;
  let items;
  let items1;
  let items2;
  let mutualFriends;
  let mutualGuilds;
  function onPressMutualFriend(userId) {
    _undefined2({ action: "PRESS_MUTUAL_FRIEND" });
    const obj = { userId };
    const tmp2 = guildId(c2[12]);
    const merged = Object.assign(_undefined);
    tmp2(obj);
  }
  function onPressMutualGuild(arg0) {
    _undefined2({ action: "PRESS_MUTUAL_GUILD" });
    const obj = user(c2[13]);
    obj.transitionToGuild(arg0);
    const obj2 = guildId(c2[9]);
    obj2.hideAllActionSheets();
  }
  user = user.user;
  const guildId = user.guildId;
  dependencyMap = undefined;
  c3 = undefined;
  let tmp = closure_10();
  let tmp2 = user;
  let obj = user(7861);
  const userProfileAnalyticsContext = obj.useUserProfileAnalyticsContext();
  ({ context: c2, trackUserProfileAction: c3 } = userProfileAnalyticsContext);
  ({ mutualFriends, mutualGuilds } = guildId(12270)(user));
  guildId(12270)(user);
  if (guildId(12813)(user)) {
    if (!(null != mutualFriends && mutualFriends.length > 0)) {
      if (!(null != mutualGuilds && mutualGuilds.length > 0)) {
        return null;
      }
    }
    let obj2 = { style: tmp.container, children: items1 };
    let tmp9Result = null;
    const tmp10 = c3;
    if (null != mutualFriends && mutualFriends.length > 0) {
      const substr = mutualFriends.slice(0, 3);
      const mapped = substr.map((user) => user.user);
      const obj3 = {
        style: tmp.section,
        accessibilityRole: "button",
        onPress() {
          const MUTUAL_FRIENDS = UserProfileSections.MUTUAL_FRIENDS;
          _undefined2({ action: "PRESS_SECTION", section: MUTUAL_FRIENDS });
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { user, section: MUTUAL_FRIENDS, guildId, onPressMutualFriend, onPressMutualGuild };
          obj.openLazy(asyncRequire(12275, dependencyMap.paths), "UserProfileMutualsActionSheet", obj2, "stack");
        },
        children: items,
      };
      const PressableOpacity = tmp2(5909).PressableOpacity;
      const obj4 = {
        size: tmp2(1188).AvatarSizes.SIZE_16,
        totalCount: mapped.length,
        names: mapped.map((username) => username.username),
        children: mapped.map((user) => {
          const obj = { user, size: user(c2[16]).AvatarSizes.SIZE_16, guildId: "r" };
          const Avatar = user(c2[16]).Avatar;
          return closure_1_6(Avatar, obj, user.id);
        }),
      };
      const AvatarPile = tmp2(12850).AvatarPile;
      items = [closure_6(AvatarPile, obj4)];
      const obj5 = { variant, color, children: guildId(12280)(mutualFriends.length) };
      const Text = tmp2(4886).Text;
      items[1] = closure_6(Text, obj5);
      tmp9Result = closure_7(PressableOpacity, obj3);
    }
    items1 = [tmp9Result, ,];
    let tmp15 = tmp7 && tmp8;
    if (tmp15) {
      const obj6 = {
        variant,
        color,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: DIVIDER_DOT,
      };
      tmp15 = closure_6(tmp2(4886).Text, obj6);
    }
    items1[1] = tmp15;
    let tmp9Result2 = null;
    if (null != mutualGuilds && mutualGuilds.length > 0) {
      const substr1 = mutualGuilds.slice(0, 3);
      const mapped1 = substr1.map((guild) => guild.guild);
      let tmp21 = !tmp7;
      const obj7 = {
        style: tmp.section,
        accessibilityRole: "button",
        onPress() {
          const MUTUAL_GUILDS = UserProfileSections.MUTUAL_GUILDS;
          _undefined2({ action: "PRESS_SECTION", section: MUTUAL_GUILDS });
          let obj = ActionSheetActionCreatorsDefault;
          let obj2 = { user, section: MUTUAL_GUILDS, guildId, onPressMutualFriend, onPressMutualGuild };
          obj.openLazy(asyncRequire(12275, dependencyMap.paths), "UserProfileMutualsActionSheet", obj2, "stack");
        },
        children: items2,
      };
      const PressableOpacity2 = tmp2(5909).PressableOpacity;
      if (!(null != mutualFriends && mutualFriends.length > 0)) {
        const obj8 = {
          size: tmp2(5971).GuildIconSizes.XXSMALL,
          totalCount: mapped1.length,
          names: mapped1.map((name) => name.name),
          children: mapped1.map((guild) => {
            const obj = { guild, size: user(c2[20]).GuildIconSizes.XXSMALL };
            const tmp = guildId(c2[20]);
            return closure_1_6(tmp, obj, guild.id);
          }),
        };
        const GuildIconPile = tmp2(12284).GuildIconPile;
        tmp21 = closure_6(GuildIconPile, obj8);
      }
      items2 = [tmp21];
      const obj9 = { variant, color, children: guildId(12281)(mutualGuilds.length) };
      const Text2 = tmp2(4886).Text;
      items2[1] = closure_6(Text2, obj9);
      tmp9Result2 = closure_7(PressableOpacity2, obj7);
    }
    items1[2] = tmp9Result2;
    return closure_7(tmp10, obj2);
  } else {
    return null;
  }
}
