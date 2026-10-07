// discord_app/modules/messages/native/RoleMembersActionSheet.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GuildRoleMemberActionCreators from "../../guild_settings/GuildRoleMemberActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";

require = fn;
const View = fn(17).View;
const EVERYONE_CHANNEL_ID = fn(6792).EVERYONE_CHANNEL_ID;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_4,
    paddingTop: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_4,
    paddingHorizontal: nativeDefault.space.PX_16,
  },
  headerText: { flex: 1 },
  roleDot: { paddingTop: 0 },
  memberCount: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_16,
};
obj2.memberCount = { color: nativeDefault.colors.TEXT_MUTED };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { color: nativeDefault.colors.TEXT_MUTED };
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/RoleMembersActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      const cResult = guildId(576).c(33);
      guildId = guildId.guildId;
      const roleId = guildId.roleId;
      const tmp4 = closure_10();
      if (cResult[0] === guildId) {
        if (cResult[1] === roleId) {
          let tmp5 = cResult[2];
          let tmp6 = cResult[3];
        }
        const effect = noop.useEffect(tmp5, tmp6);
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GuildRoleStore];
          cResult[4] = items;
          let tmp10 = items;
        } else {
          tmp10 = cResult[4];
        }
        if (cResult[5] === guildId) {
          if (cResult[6] === roleId) {
            let tmp12 = cResult[7];
            let tmp13 = cResult[8];
          }
          const stateFromStores = tmp(504).useStateFromStores(tmp10, tmp12, tmp13);
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [AccessibilityStore];
            class D {
              constructor() {
                return closure_1_5.roleStyle;
              }
            }
            cResult[9] = items1;
            cResult[10] = D;
            let tmp16 = D;
            let tmp15 = items1;
          } else {
            tmp15 = cResult[9];
            tmp16 = cResult[10];
          }
          const tmpResult = tmp(504);
          const tmp18 = "dot" === tmp(504).useStateFromStores(tmp15, tmp16);
          if (tmp18) {
            if (stateFromStores != null) {
              const colorString = stateFromStores.colorString;
            }
            class D {
              constructor() {
                return closure_1_5.roleStyle;
              }
            }
          }
          const tmpResult2 = tmp(504);
          const result = roleId(11).castGuildIdAsEveryoneGuildRoleId(guildId);
          const tmp22 = roleId(6629)(guildId);
          class I {
            constructor() {
              tmp = roleId;
              tmp2 = closure_2;
              obj = closure_1(closure_2[10]);
              tmp3 = guildId;
              if (roleId !== obj.castGuildIdAsEveryoneGuildRoleId(guildId)) {
                tmp4 = closure_0;
                obj2 = closure_0(tmp2[11]);
                membersForRole = obj2.requestMembersForRole(tmp3, tmp);
              }
              return;
            }
          }
          if (roleId !== result) {
            let tmp24;
            if (tmp22 != null) {
              tmp24 = tmp22[roleId];
            }
            if (tmp24 == null) {
              tmp24 = null;
            }
            class D {
              constructor() {
                return closure_1_5.roleStyle;
              }
            }
          }
          if (cResult[11] === stateFromStores) {
            if (cResult[12] === tmp18) {
              let name;
              if (stateFromStores != null) {
                name = stateFromStores.name;
              }
              class D {
                constructor() {
                  return closure_1_5.roleStyle;
                }
              }
              let obj2 = { variant: "text-sm/semibold", style: tmp4.headerText, children: name };
              cResult[15] = tmp4.headerText;
              cResult[16] = name;
              cResult[17] = closure_8(tmp(4892).Text, obj2);
              class I {
                constructor() {
                  tmp = roleId;
                  tmp2 = closure_2;
                  obj = closure_1(closure_2[10]);
                  tmp3 = guildId;
                  if (roleId !== obj.castGuildIdAsEveryoneGuildRoleId(guildId)) {
                    tmp4 = closure_0;
                    obj2 = closure_0(tmp2[11]);
                    membersForRole = obj2.requestMembersForRole(tmp3, tmp);
                  }
                  return;
                }
              }
              const tmp30 = closure_8(tmp(4892).Text, obj2);
            }
          }
          let tmp26 = null;
          if (tmp18) {
            const obj3 = { color: stateFromStores.colorString, colors: null, size: "small", containerStyles: null };
            class D {
              constructor() {
                return closure_1_5.roleStyle;
              }
            }
            obj3.containerStyles = tmp4.roleDot;
            tmp26 = closure_8(tmp(1188).RoleDot, obj3);
          }
          cResult[11] = stateFromStores;
          cResult[12] = tmp18;
          cResult[13] = tmp4.roleDot;
          cResult[14] = tmp26;
          const obj4 = roleId(11);
        }
        const fn = function v() {
          return GuildRoleStore.getRole(guildId, roleId);
        };
        const items2 = [guildId, roleId];
        cResult[5] = guildId;
        class I {
          constructor() {
            tmp = roleId;
            tmp2 = closure_2;
            obj = closure_1(closure_2[10]);
            tmp3 = guildId;
            if (roleId !== obj.castGuildIdAsEveryoneGuildRoleId(guildId)) {
              tmp4 = closure_0;
              obj2 = closure_0(tmp2[11]);
              membersForRole = obj2.requestMembersForRole(tmp3, tmp);
            }
            return;
          }
        }
        cResult[6] = roleId;
        cResult[7] = fn;
        cResult[8] = items2;
        tmp13 = items2;
        tmp12 = fn;
      }
      class I {
        constructor() {
          tmp = roleId;
          tmp2 = closure_2;
          obj = closure_1(closure_2[10]);
          tmp3 = guildId;
          if (roleId !== obj.castGuildIdAsEveryoneGuildRoleId(guildId)) {
            tmp4 = closure_0;
            obj2 = closure_0(tmp2[11]);
            membersForRole = obj2.requestMembersForRole(tmp3, tmp);
          }
          return;
        }
      }
      const items3 = [guildId, roleId];
      cResult[0] = guildId;
      cResult[1] = roleId;
      cResult[2] = I;
      cResult[3] = items3;
      tmp6 = items3;
      tmp5 = I;
      let obj = guildId(576);
    }
  : (guildId) => {
      guildId = guildId.guildId;
      const roleId = guildId.roleId;
      let channelId = guildId.channelId;
      let stateFromStores;
      closure_4 = undefined;
      c5 = undefined;
      const tmp = closure_10();
      dependencyMap = tmp;
      let items = [guildId, roleId];
      const effect = stateFromStores.useEffect(() => {
        if (roleId !== obj.castGuildIdAsEveryoneGuildRoleId(guildId)) {
          const membersForRole = GuildRoleMemberActionCreators.requestMembersForRole(guildId, roleId);
        }
        obj = SnowflakeUtilsDefault;
      }, items);
      const items1 = [GuildRoleStore];
      const items2 = [guildId, roleId];
      stateFromStores = guildId(504).useStateFromStores(items1, () => GuildRoleStore.getRole(guildId, roleId), items2);
      let obj = guildId(504);
      const tmp3 = guildId;
      const items3 = [c5];
      let tmp6 = "dot" === guildId(504).useStateFromStores(items3, () => _null.roleStyle);
      if (tmp6) {
        let colorString;
        if (stateFromStores != null) {
          colorString = stateFromStores.colorString;
        }
        tmp6 = null != colorString;
      }
      closure_4 = tmp6;
      let obj2 = guildId(504);
      const tmp9 = roleId;
      const result = roleId(11).castGuildIdAsEveryoneGuildRoleId(guildId);
      const tmp11 = roleId(6629)(guildId);
      let tmp12 = null;
      if (roleId !== result) {
        let tmp13;
        if (tmp11 != null) {
          tmp13 = tmp11[roleId];
        }
        if (tmp13 == null) {
          tmp13 = null;
        }
        tmp12 = tmp13;
      }
      c5 = tmp12;
      const items4 = [tmp6, stateFromStores, tmp12, tmp];
      let tmp16Result = null;
      if (null != stateFromStores) {
        let obj4 = { scrollable: true, header: tmp14, children: null };
        const obj5 = {
          guildId,
          channelId: null,
          roleId: null,
          headerShown: false,
          inActionSheet: true,
          disableStickySections: true,
          disableThemedGradient: true,
        };
        if (channelId == null) {
          channelId = EVERYONE_CHANNEL_ID;
        }
        obj5.channelId = channelId;
        obj5.roleId = roleId;
        obj4.children = closure_8(tmp9(11223), obj5);
        tmp16Result = closure_8(tmp3(6652).BottomSheet, obj4);
        let tmp9Result = tmp9(11223);
      }
      return tmp16Result;
    };
