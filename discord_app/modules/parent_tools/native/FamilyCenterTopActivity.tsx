// discord_app/modules/parent_tools/native/FamilyCenterTopActivity.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
let _require, user;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  section: { flex: 1 },
  avatarList: obj3,
  touchableHitBox: { width: "100%", alignItems: "flex-start" },
  guildAvatar: obj4,
  guildAvatarText: { fontSize: 12 },
};
obj2 = { display: "flex", flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = {
  display: "flex",
  flexDirection: "row",
  gap: nativeDefault.space.PX_4,
  flexWrap: "wrap",
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_12,
};
obj4 = {
  borderRadius: nativeDefault.radii.md,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
};
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopActivity.tsx");

export default function FamilyCenterTopActivity() {
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items3;
  let items4;
  let items5;
  let obj5;
  let obj9;
  let stateFromStores1;
  let tmp12;
  let tmp16;
  let tmp7Result;
  const tmp = closure_9();
  _require = tmp;
  let tmp2 = _require;
  let obj = require("useStateFromStores");
  const items = [FamilyCenterStore];
  const stateFromStores = obj.useStateFromStores(items, () => authStore.getTopUserActivities());
  let obj2 = require("useStateFromStores");
  const items1 = [FamilyCenterStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => authStore.getTopGuildActivities());
  const items2 = [stateFromStores];
  [][0] = stateFromStores1;
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { topUserActivities: stateFromStores };
    obj.openLazy(asyncRequire(14705, dependencyMap.paths), "FamilyCenterTopUsers", obj2);
  }, items2);
  if (0 !== stateFromStores.length) {
    let tmp9 = stateFromStores.length > 0;
    const obj3 = { style: tmp.container, children: items4 };
    if (tmp9) {
      const obj4 = { style: tmp.section, children: closure_8(tmp12, obj5) };
      obj5 = {
        style: tmp.touchableHitBox,
        onPress: callback,
        accessibilityRole: "button",
        accessibilityLabel: intl.string(stateFromStores(stateFromStores1[14]).BxbvS7),
        children: items3,
      };
      tmp12 = stateFromStores(stateFromStores1[12]);
      intl = tmp2(tmp3[13]).intl;
      const obj6 = {
        variant: "text-sm/semibold",
        children: intl2.string(stateFromStores(stateFromStores1[14]).BxbvS7),
      };
      const Text = tmp2(tmp3[15]).Text;
      intl2 = tmp2(tmp3[13]).intl;
      items3 = [closure_7(Text, obj6)];
      const obj7 = {
        style: tmp.avatarList,
        children: stateFromStores.map((user_id) => {
          user = user.getUser(user_id.user_id);
          let tmp2 = null;
          if (null != user) {
            const obj = { user, size: closure_0(stateFromStores1[16]).AvatarSizes.SMALL, guildId: "r" };
            const Avatar = closure_0(stateFromStores1[16]).Avatar;
            tmp2 = closure_1_7(Avatar, obj, user.id);
          }
          return tmp2;
        }),
      };
      items3[1] = closure_7(View, obj7);
      tmp9 = closure_7(View, obj4);
    }
    items4 = [tmp9];
    let tmp13 = stateFromStores1.length > 0;
    if (tmp13) {
      const obj8 = { style: tmp.section, children: closure_8(tmp16, obj9) };
      obj9 = {
        style: tmp.touchableHitBox,
        onPress: tmp5,
        accessibilityRole: "button",
        accessibilityLabel: intl3.string(stateFromStores(stateFromStores1[14]).Lq9Set),
        children: items5,
      };
      tmp16 = stateFromStores(stateFromStores1[12]);
      intl3 = tmp2(tmp3[13]).intl;
      const obj10 = {
        variant: "text-sm/semibold",
        children: intl4.string(stateFromStores(stateFromStores1[14]).Lq9Set),
      };
      const Text2 = tmp2(tmp3[15]).Text;
      intl4 = tmp2(tmp3[13]).intl;
      items5 = [closure_7(Text2, obj10)];
      const obj11 = {
        style: tmp.avatarList,
        children: stateFromStores1.map((guild_id) => {
          const guild = FamilyCenterStore.getGuild(guild_id.guild_id);
          let tmp2 = null;
          if (null != guild) {
            const obj = { style: null, textStyle: null, guild, size: GuildIcon.GuildIconSizes.SMALL };
            ({ guildAvatar: obj.style, guildAvatarText: obj.textStyle } = closure_0);
            const tmp6 = GuildIconDefault;
            tmp2 = metroImportDefault(tmp6, obj, guild.id);
          }
          return tmp2;
        }),
      };
      items5[1] = closure_7(View, obj11);
      tmp13 = closure_7(View, obj8);
    }
    items4[1] = tmp13;
    tmp7Result = closure_8(View, obj3);
  } else {
    tmp7Result = null;
  }
  return tmp7Result;
}
