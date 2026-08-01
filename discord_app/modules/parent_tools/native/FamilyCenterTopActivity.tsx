// === Module 13946: FamilyCenterTopActivity ===

// Module 13946 (FamilyCenterTopActivity)
import noop from "noop";
import { View } from "GuildIconSizes";
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
let require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, section: null, avatarList: null, touchableHitBox: null, guildAvatar: null, guildAvatarText: null };
createCacheKey = { display: "flex", flexDirection: "row", flexWrap: "wrap", gap: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { display: "flex", flexDirection: "row", gap: require("Themes").space.PX_4, flexWrap: "wrap", paddingTop: require("Themes").space.PX_12, paddingBottom: require("Themes").space.PX_12 };
createCacheKey[3] = { width: "100%", alignItems: "flex-start" };
let obj1 = { display: "flex", flexDirection: "row", gap: require("Themes").space.PX_4, flexWrap: "wrap", paddingTop: require("Themes").space.PX_12, paddingBottom: require("Themes").space.PX_12 };
createCacheKey[4] = { borderRadius: require("Themes").radii.md, borderColor: require("Themes").colors.BACKGROUND_BASE_LOW, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGHEST };
createCacheKey[5] = { fontSize: 12 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { borderRadius: require("Themes").radii.md, borderColor: require("Themes").colors.BACKGROUND_BASE_LOW, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGHEST };
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopActivity.tsx");

export default function FamilyCenterTopActivity() {
  const tmp = createCacheKey();
  const require = tmp;
  let obj = require(stateFromStores1[7]);
  const items = [freshTeenActivityWithMap];
  const stateFromStores = obj.useStateFromStores(items, () => authStore.getTopUserActivities());
  let obj1 = require(stateFromStores1[7]);
  const items1 = [freshTeenActivityWithMap];
  stateFromStores1 = obj1.useStateFromStores(items1, () => authStore.getTopGuildActivities());
  const items2 = [stateFromStores];
  [][0] = stateFromStores1;
  const callback = React.useCallback(() => {
    let obj = stateFromStores(stateFromStores1[8]);
    obj = { topUserActivities: stateFromStores };
    obj.openLazy(tmp(stateFromStores1[10])(stateFromStores1[9], stateFromStores1.paths), "FamilyCenterTopUsers", obj);
  }, items2);
  if (0 !== stateFromStores.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    let tmp9 = stateFromStores.length > 0;
    if (tmp9) {
      obj = { style: null, children: null };
      obj[0] = tmp.section;
      obj1 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
      obj1[0] = tmp.touchableHitBox;
      obj1[1] = callback;
      const intl = tmp2(tmp3[13]).intl;
      obj1[3] = intl.string(stateFromStores(tmp3[14]).BxbvS7);
      const obj2 = { variant: "text-sm/semibold", children: null };
      const intl2 = tmp2(tmp3[13]).intl;
      obj2[1] = intl2.string(stateFromStores(tmp3[14]).BxbvS7);
      const items3 = [callback(tmp2(tmp3[15]).Text, obj2), ];
      const obj3 = { style: null, children: null };
      obj3[0] = tmp.avatarList;
      obj3[1] = stateFromStores.map((user_id) => {
        user = user.getUser(user_id.user_id);
        let tmp2 = null;
        if (null != user) {
          const obj = { user: null, size: null, guildId: "Array" };
          obj[0] = user;
          obj[1] = tmp(stateFromStores1[16]).AvatarSizes.SMALL;
          tmp2 = callback(tmp(stateFromStores1[16]).Avatar, obj, user.id);
        }
        return tmp2;
      });
      items3[1] = callback(tmp8, obj3);
      obj1[4] = items3;
      obj[1] = tmp7(stateFromStores(tmp3[12]), obj1);
      tmp9 = callback(tmp8, obj);
      const tmp12 = stateFromStores(tmp3[12]);
    }
    const items4 = [tmp9, ];
    let tmp13 = stateFromStores1.length > 0;
    if (tmp13) {
      const obj4 = { style: null, children: null };
      obj4[0] = tmp.section;
      const obj5 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
      obj5[0] = tmp.touchableHitBox;
      obj5[1] = tmp5;
      const intl3 = tmp2(tmp3[13]).intl;
      obj5[3] = intl3.string(stateFromStores(tmp3[14]).Lq9Set);
      const obj6 = { variant: "text-sm/semibold", children: null };
      const intl4 = tmp2(tmp3[13]).intl;
      obj6[1] = intl4.string(stateFromStores(tmp3[14]).Lq9Set);
      const items5 = [callback(tmp2(tmp3[15]).Text, obj6), ];
      const obj7 = { style: null, children: null };
      obj7[0] = tmp.avatarList;
      obj7[1] = stateFromStores1.map((guild_id) => {
        const guild = outer1_6.getGuild(guild_id.guild_id);
        let tmp2 = null;
        if (null != guild) {
          const obj = { style: null, textStyle: null, guild: null, size: null };
          ({ guildAvatar: obj[0], guildAvatarText: obj[1] } = tmp);
          obj[2] = guild;
          obj[3] = tmp(stateFromStores1[17]).GuildIconSizes.SMALL;
          tmp2 = outer1_7(stateFromStores(stateFromStores1[17]), obj, guild.id);
          const tmp6 = stateFromStores(stateFromStores1[17]);
        }
        return tmp2;
      });
      items5[1] = callback(tmp8, obj7);
      obj5[4] = items5;
      obj4[1] = tmp7(stateFromStores(tmp3[12]), obj5);
      tmp13 = callback(tmp8, obj4);
      const tmp16 = stateFromStores(tmp3[12]);
    }
    items4[1] = tmp13;
    obj[1] = items4;
    let tmp7Result = tmp7(tmp8, obj);
  } else {
    tmp7Result = null;
  }
  return tmp7Result;
};