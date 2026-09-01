// discord_app/modules/user_profile/native/UserProfileMutuals.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { UserProfileSections } from "../Constants.tsx";
import { DIVIDER_DOT } from "Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
let c8 = "text-sm/medium";
let c9 = "text-default";
let closure_10 = createCacheKey.createStyles({ container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" }, section: { flexDirection: "row", alignItems: "center", columnGap: 6 } });
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileMutuals.tsx");

export default function UserProfileMutuals(user) {
  user = user.user;
  const guildId = user.guildId;
  dependencyMap = undefined;
  c3 = undefined;
  const tmp = callback2();
  let obj = user(8558);
  const userProfileAnalyticsContext = obj.useUserProfileAnalyticsContext();
  ({ context: c2, trackUserProfileAction: c3 } = userProfileAnalyticsContext);
  ({ mutualFriends, mutualGuilds } = guildId(9228)(user));
  if (guildId(9230)(user)) {
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
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    let tmp9Result = null;
    if (tmp7) {
      const substr = mutualFriends.slice(0, 3);
      const mapped = substr.map((user) => user.user);
      obj = { style: null, accessibilityRole: "button", onPress: null, children: null };
      obj[0] = tmp.section;
      obj[2] = function onPress() {
        const MUTUAL_FRIENDS = closure_1_4.MUTUAL_FRIENDS;
        _undefined2({ action: "PRESS_SECTION", section: MUTUAL_FRIENDS });
        let obj = guildId(_undefined[9]);
        obj = {
          user,
          section: MUTUAL_FRIENDS,
          guildId,
          onPressMutualFriend(userId) {
            callback({ action: "PRESS_MUTUAL_FRIEND" });
            const obj = {};
            const merged = Object.assign(closure_2);
            obj.userId = userId;
            closure_1_1(closure_1_2[12])(obj);
          },
          onPressMutualGuild(arg0) {
            callback({ action: "PRESS_MUTUAL_GUILD" });
            closure_1_0(closure_1_2[13]).transitionToGuild(arg0);
            const obj = closure_1_0(closure_1_2[13]);
            closure_1_1(closure_1_2[9]).hideAllActionSheets();
          }
        };
        obj.openLazy(user(_undefined[11])(_undefined[10], _undefined.paths), "UserProfileMutualsActionSheet", obj, "stack");
      };
      obj1 = { size: null, totalCount: null, names: null, children: null };
      obj1[0] = tmp2(1297).AvatarSizes.SIZE_16;
      obj1[1] = mapped.length;
      obj1[2] = mapped.map((username) => username.username);
      obj1[3] = mapped.map((id) => callback(user(_undefined[16]).Avatar, { user: id, size: user(_undefined[16]).AvatarSizes.SIZE_16, guildId: "r" }, id.id));
      const items = [callback(tmp2(9427).AvatarPile, obj1), ];
      const obj2 = { variant: null, color: null, children: null };
      obj2[0] = c8;
      obj2[1] = c9;
      obj2[2] = tmp5(9261)(mutualFriends.length);
      items[1] = callback(tmp2(4474).Text, obj2);
      obj[3] = items;
      tmp9Result = tmp9(tmp2(5068).PressableOpacity, obj);
    }
    const items1 = [tmp9Result, , ];
    let tmp15 = tmp7;
    if (tmp7) {
      tmp15 = tmp8;
    }
    if (tmp15) {
      const obj3 = { variant: null, color: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
      obj3[0] = c8;
      obj3[1] = c9;
      obj3[4] = DIVIDER_DOT;
      tmp15 = callback(tmp2(4474).Text, obj3);
    }
    items1[1] = tmp15;
    tmp9Result = null;
    if (tmp8) {
      const substr1 = mutualGuilds.slice(0, 3);
      const mapped1 = substr1.map((guild) => guild.guild);
      const obj4 = { style: null, accessibilityRole: "button", onPress: null, children: null };
      obj4[0] = tmp.section;
      obj4[2] = function onPress() {
        const MUTUAL_GUILDS = closure_1_4.MUTUAL_GUILDS;
        _undefined2({ action: "PRESS_SECTION", section: MUTUAL_GUILDS });
        let obj = guildId(_undefined[9]);
        obj = {
          user,
          section: MUTUAL_GUILDS,
          guildId,
          onPressMutualFriend(userId) {
            callback({ action: "PRESS_MUTUAL_FRIEND" });
            const obj = {};
            const merged = Object.assign(closure_2);
            obj.userId = userId;
            closure_1_1(closure_1_2[12])(obj);
          },
          onPressMutualGuild(arg0) {
            callback({ action: "PRESS_MUTUAL_GUILD" });
            closure_1_0(closure_1_2[13]).transitionToGuild(arg0);
            const obj = closure_1_0(closure_1_2[13]);
            closure_1_1(closure_1_2[9]).hideAllActionSheets();
          }
        };
        obj.openLazy(user(_undefined[11])(_undefined[10], _undefined.paths), "UserProfileMutualsActionSheet", obj, "stack");
      };
      let tmp21 = !tmp7;
      if (!tmp7) {
        const obj5 = { size: null, totalCount: null, names: null, children: null };
        obj5[0] = tmp2(6004).GuildIconSizes.XXSMALL;
        obj5[1] = mapped1.length;
        obj5[2] = mapped1.map((name) => name.name);
        obj5[3] = mapped1.map((guild) => {
          const obj = { guild, size: user(_undefined[20]).GuildIconSizes.XXSMALL };
          return callback(guildId(_undefined[20]), obj, guild.id);
        });
        tmp21 = callback(tmp2(9270).GuildIconPile, obj5);
      }
      const items2 = [tmp21, ];
      const obj6 = { variant: null, color: null, children: null };
      obj6[0] = c8;
      obj6[1] = c9;
      obj6[2] = tmp5(9233)(mutualGuilds.length);
      items2[1] = callback(tmp2(4474).Text, obj6);
      obj4[3] = items2;
      tmp9Result = tmp9(tmp2(5068).PressableOpacity, obj4);
    }
    items1[2] = tmp9Result;
    obj[1] = items1;
    return closure_7(c3, obj);
  } else {
    return null;
  }
  const tmp6 = guildId(9228)(user);
};