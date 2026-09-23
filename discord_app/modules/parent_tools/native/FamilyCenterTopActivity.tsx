// discord_app/modules/parent_tools/native/FamilyCenterTopActivity.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4827);
const obj2 = {
  container: { display: "flex", flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 },
  section: { flex: 1 },
  avatarList: null,
  touchableHitBox: null,
  guildAvatar: null,
  guildAvatarText: null,
};
let obj3 = { display: "flex", flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj2.avatarList = {
  display: "flex",
  flexDirection: "row",
  gap: nativeDefault.space.PX_4,
  flexWrap: "wrap",
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_12,
};
obj2.touchableHitBox = { width: "100%", alignItems: "flex-start" };
let obj4 = {
  display: "flex",
  flexDirection: "row",
  gap: nativeDefault.space.PX_4,
  flexWrap: "wrap",
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_12,
};
obj2.guildAvatar = {
  borderRadius: nativeDefault.radii.md,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
};
obj2.guildAvatarText = { fontSize: 12 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopActivity.tsx");

export default function FamilyCenterTopActivity() {
  const tmp = closure_9();
  _require = tmp;
  const items = [FamilyCenterStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
    authStore.getTopUserActivities(),
  );
  let obj = require("useStateFromStores");
  const items1 = [FamilyCenterStore];
  stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => authStore.getTopGuildActivities());
  const items2 = [stateFromStores];
  [][0] = stateFromStores1;
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15234, dependencyMap.paths), "FamilyCenterTopUsers", {
      topUserActivities: stateFromStores,
    });
  }, items2);
  if (0 !== stateFromStores.length) {
    const obj3 = { style: tmp.container, children: null };
    let tmp9 = stateFromStores.length > 0;
    if (tmp9) {
      const obj4 = { style: tmp.section, children: null };
      const obj5 = {
        style: tmp.touchableHitBox,
        onPress: callback,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
      const intl = tmp2(tmp3[13]).intl;
      obj5.accessibilityLabel = intl.string(stateFromStores(tmp3[14]).BxbvS7);
      const obj6 = { variant: "text-sm/semibold", children: null };
      const intl2 = tmp2(tmp3[13]).intl;
      obj6.children = intl2.string(stateFromStores(tmp3[14]).BxbvS7);
      const items3 = [closure_7(tmp2(tmp3[15]).Text, obj6)];
      const obj7 = {
        style: tmp.avatarList,
        children: stateFromStores.map((user_id) => {
          user = user.getUser(user_id.user_id);
          let tmp2 = null;
          if (null != user) {
            const obj = { user, size: closure_0(stateFromStores1[16]).AvatarSizes.SMALL, guildId: "Array" };
            tmp2 = closure_1_7(closure_0(stateFromStores1[16]).Avatar, obj, user.id);
          }
          return tmp2;
        }),
      };
      items3[1] = closure_7(View, obj7);
      obj5.children = items3;
      obj4.children = closure_8(stateFromStores(tmp3[12]), obj5);
      tmp9 = closure_7(View, obj4);
      const tmp12 = stateFromStores(tmp3[12]);
    }
    const items4 = [tmp9];
    let tmp13 = stateFromStores1.length > 0;
    if (tmp13) {
      const obj8 = { style: tmp.section, children: null };
      const obj9 = {
        style: tmp.touchableHitBox,
        onPress: tmp5,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
      const intl3 = tmp2(tmp3[13]).intl;
      obj9.accessibilityLabel = intl3.string(stateFromStores(tmp3[14]).Lq9Set);
      const obj10 = { variant: "text-sm/semibold", children: null };
      const intl4 = tmp2(tmp3[13]).intl;
      obj10.children = intl4.string(stateFromStores(tmp3[14]).Lq9Set);
      const items5 = [closure_7(tmp2(tmp3[15]).Text, obj10)];
      const obj11 = {
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
        }),
      };
      items5[1] = closure_7(View, obj11);
      obj9.children = items5;
      obj8.children = closure_8(stateFromStores(tmp3[12]), obj9);
      tmp13 = closure_7(View, obj8);
      const tmp16 = stateFromStores(tmp3[12]);
    }
    items4[1] = tmp13;
    obj3.children = items4;
    let tmp7Result = closure_8(View, obj3);
  } else {
    tmp7Result = null;
  }
  return tmp7Result;
}
