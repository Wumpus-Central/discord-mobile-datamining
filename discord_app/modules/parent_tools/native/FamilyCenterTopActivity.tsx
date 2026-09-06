// === Module 14896: FamilyCenterTopActivity ===

// Module 14896 (FamilyCenterTopActivity)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import GuildIcon from "GuildIcon" /* 5584 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, section: null, avatarList: null, touchableHitBox: null, guildAvatar: null, guildAvatarText: null };
createStyles = { display: "flex", flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
createStyles.container = createStyles;
createStyles.section = { flex: 1 };
createStyles.avatarList = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_4, flexWrap: "wrap", paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 };
createStyles.touchableHitBox = { width: "100%", alignItems: "flex-start" };
let obj1 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_4, flexWrap: "wrap", paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 };
createStyles.guildAvatar = { borderRadius: nativeDefault.radii.md, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
createStyles.guildAvatarText = { fontSize: 12 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopActivity.tsx");

export default function FamilyCenterTopActivity() {
  const tmp = closure_9();
  _require = tmp;
  let obj = require("useStateFromStores");
  const items = [FamilyCenterStore];
  const stateFromStores = obj.useStateFromStores(items, () => authStore.getTopUserActivities());
  let obj1 = require("useStateFromStores");
  const items1 = [FamilyCenterStore];
  stateFromStores1 = obj1.useStateFromStores(items1, () => authStore.getTopGuildActivities());
  const items2 = [stateFromStores];
  [][0] = stateFromStores1;
  const callback = noop.useCallback(() => {
    const obj = { topUserActivities: stateFromStores };
    obj.openLazy(asyncRequireImpl(14897, dependencyMap.paths), "FamilyCenterTopUsers", obj);
  }, items2);
  if (0 !== stateFromStores.length) {
    obj = { style: tmp.container, children: null };
    let tmp9 = stateFromStores.length > 0;
    if (tmp9) {
      obj = { style: tmp.section, children: null };
      obj1 = { style: tmp.touchableHitBox, onPress: callback, accessibilityRole: "button", accessibilityLabel: null, children: null };
      const intl = tmp2(tmp3[13]).intl;
      obj1.accessibilityLabel = intl.string(stateFromStores(tmp3[14]).BxbvS7);
      const obj2 = { variant: "text-sm/semibold", children: null };
      const intl2 = tmp2(tmp3[13]).intl;
      obj2.children = intl2.string(stateFromStores(tmp3[14]).BxbvS7);
      const items3 = [closure_7(tmp2(tmp3[15]).Text, obj2), ];
      const obj3 = {
        style: tmp.avatarList,
        children: stateFromStores.map((user_id) => {
              user = user.getUser(user_id.user_id);
              let tmp2 = null;
              if (null != user) {
                const obj = { user, size: closure_0(stateFromStores1[16]).AvatarSizes.SMALL, guildId: "Array" };
                tmp2 = closure_1_7(closure_0(stateFromStores1[16]).Avatar, obj, user.id);
              }
              return tmp2;
            })
      };
      items3[1] = closure_7(tmp8, obj3);
      obj1.children = items3;
      obj.children = tmp7(stateFromStores(tmp3[12]), obj1);
      tmp9 = closure_7(tmp8, obj);
      const tmp12 = stateFromStores(tmp3[12]);
    }
    const items4 = [tmp9, ];
    let tmp13 = stateFromStores1.length > 0;
    if (tmp13) {
      const obj4 = { style: tmp.section, children: null };
      const obj5 = { style: tmp.touchableHitBox, onPress: tmp5, accessibilityRole: "button", accessibilityLabel: null, children: null };
      const intl3 = tmp2(tmp3[13]).intl;
      obj5.accessibilityLabel = intl3.string(stateFromStores(tmp3[14]).Lq9Set);
      const obj6 = { variant: "text-sm/semibold", children: null };
      const intl4 = tmp2(tmp3[13]).intl;
      obj6.children = intl4.string(stateFromStores(tmp3[14]).Lq9Set);
      const items5 = [closure_7(tmp2(tmp3[15]).Text, obj6), ];
      const obj7 = {
        style: tmp.avatarList,
        children: stateFromStores1.map((guild_id) => {
              const guild = FamilyCenterStore.getGuild(guild_id.guild_id);
              let tmp2 = null;
              if (null != guild) {
                const obj = { style: null, textStyle: null, guild: null, size: null };
                ({ guildAvatar: obj.style, guildAvatarText: obj.textStyle } = closure_0);
                obj.guild = guild;
                obj.size = GuildIcon.GuildIconSizes.SMALL;
                tmp2 = React5(GuildIconDefault, obj, guild.id);
              }
              return tmp2;
            })
      };
      items5[1] = closure_7(tmp8, obj7);
      obj5.children = items5;
      obj4.children = tmp7(stateFromStores(tmp3[12]), obj5);
      tmp13 = closure_7(tmp8, obj4);
      const tmp16 = stateFromStores(tmp3[12]);
    }
    items4[1] = tmp13;
    obj.children = items4;
    let tmp7Result = tmp7(tmp8, obj);
  } else {
    tmp7Result = null;
  }
  return tmp7Result;
};