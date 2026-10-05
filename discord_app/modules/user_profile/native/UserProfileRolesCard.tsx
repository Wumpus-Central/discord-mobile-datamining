// discord_app/modules/user_profile/native/UserProfileRolesCard.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import VerifiedRoleIconDefault from "../../connections/native/VerifiedRoleIcon.tsx";
import RoleIconDefault from "../../roles/native/RoleIcon.tsx";
import UserProfileRoleUtils from "../UserProfileRoleUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let arr1,
  color,
  copyResult,
  customIconSrc,
  dependencyMap,
  guildMemberRoleIds,
  intl2,
  obj1,
  obj6,
  push,
  roleIconData,
  roleIdCopiedResult,
  tmp10,
  tmp17,
  tmp21,
  tmp22,
  tmpResult1,
  userId;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let size;
let unpackModuleId;
const View = react_native.View;
({ DEFAULT_ROLE_COLOR_HEX: metroImportDefault, MAX_VISUAL_ROLE_LENGTH: metroImportAll } = Constants);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let c12 = 12;
let createStyles = createStyles_mod;
let obj = { roleContainer: { flexDirection: "row", gap: 8, flexWrap: "wrap" }, role: obj2, roleDot: size };
obj2 = {
  flexDirection: "row",
  alignItems: "center",
  columnGap: 4,
  padding: 6,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.sm,
};
createStyles = createStyles.createStyles;
size = { borderRadius: nativeDefault.radii.round, height: 12, width: 12 };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (color) => {
      let items;
      let tmp3;
      const obj = react2;
      const cResult = obj.c(5);
      color = color.color;
      const tmp2 = closure_13();
      if (color == null) {
        color = metroImportDefault;
      }
      if (cResult[0] !== color) {
        const obj2 = { backgroundColor: color };
        cResult[0] = color;
        cResult[1] = obj2;
        tmp3 = obj2;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === tmp2.roleDot) {
        let tmp4;
        if (cResult[3] === tmp3) {
          tmp4 = cResult[4];
        }
        return tmp4;
      }
      const obj3 = { style: items };
      items = [tmp2.roleDot, tmp3];
      const tmp5 = React4(View, obj3);
      cResult[2] = tmp2.roleDot;
      cResult[3] = tmp3;
      cResult[4] = tmp5;
      tmp4 = tmp5;
    }
  : (color) => {
      color = color.color;
      const style = [closure_13().roleDot];
      if (color == null) {
        color = metroImportDefault;
      }
      style[1] = { backgroundColor: color };
      return React4(View, { style });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (role) => {
      let tmp5;
      let obj = role(576);
      const cResult = obj.c(30);
      role = role.role;
      const guildId = role.guildId;
      let colorString = role.color;
      closure_13();
      if (cResult[0] !== role.name) {
        let name;
        if (role.name.length <= closure_8) {
          name = role.name;
        } else {
          const name1 = role.name;
          const _HermesInternal = HermesInternal;
          name = "" + name1.slice(0, tmp6) + "...";
        }
        cResult[0] = role.name;
        cResult[1] = name;
        tmp5 = name;
      } else {
        tmp5 = cResult[1];
      }
      dependencyMap = tmp5;
      if (colorString == null) {
        colorString = role.colorString;
      }
      if (cResult[2] === guildId) {
        let tmp8;
        if (cResult[3] === role.id) {
          tmp8 = cResult[4];
        }
        let tmpResult = tmp(6685);
        const roleIconProps = tmpResult.useRoleIconProps(tmp8);
        const tags = role.tags;
        let guild_connections;
        if (tags != null) {
          guild_connections = tags.guild_connections;
        }
        let tmp11 = undefined !== guild_connections;
        let closure_5 = tmp11;
        const DeveloperMode = tmp(2028).DeveloperMode;
        const setting = DeveloperMode.useSetting();
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { location: "RoleItem" };
          let obj3 = { autoTrackExposure: false };
          cResult[5] = obj2;
          cResult[6] = obj3;
        }
        guildId(6687);
        if (cResult[7] === tmp5) {
          if (cResult[10] === tmp5) {
            if (cResult[11] === role) {
              if (cResult[12] === roleIconProps) {
                let tmp20 = cResult[13];
              }
              class T {
                constructor() {
                  obj = { label: null, onPress: null };
                  tmp = role;
                  tmp2 = closure_2;
                  intl = role(closure_2[15]).intl;
                  obj.label = intl.string(role(closure_2[15]).t.sMsaLg);
                  obj.onPress = function onPress() {
                    /* body not rendered: F137639 */
                  };
                  items = [];
                  items[0] = obj;
                  if (null != closure_4) {
                    tmpResult = tmp(tmp2[16]);
                    tmp5 = customIconSrc;
                    roleIconData = tmpResult.getRoleIconData(customIconSrc);
                    if (roleIconData == null) {
                      roleIconData = {};
                    }
                    customIconSrc = roleIconData.customIconSrc;
                    if (null != customIconSrc) {
                      obj1 = { label: null, onPress: null };
                      push = items.push;
                      intl2 = tmp(tmp2[15]).intl;
                      obj1.label = intl2.string(tmp(tmp2[15]).t["8xHmxo"]);
                      obj1.onPress = function onPress() {
                        /* body not rendered: F137640 */
                      };
                      arr1 = push(obj1);
                    }
                  }
                  tmpResult1 = tmp(tmp2[17]);
                  result = tmpResult1.showSimpleActionSheet({ key: "RoleItem", options: items, hasIcons: false });
                  return;
                }
              }
              class H {
                constructor() {
                  tmp3 = jsx;
                  tmp = jsxs;
                  tmp2 = Fragment;
                  if (closure_5) {
                    tmp9 = closure_1;
                    tmp10 = closure_2;
                    obj1 = { roleId: null, guildId: null, roleColor: null, size: null, displayRoleIcon: false };
                    obj1.roleId = role.id;
                    tmp12 = guildId;
                    obj1.guildId = guildId;
                    tmp13 = null;
                    colorString = undefined;
                    tmp11 = closure_1(closure_2[18]);
                    if (role != null) {
                      colorString = role.colorString;
                    }
                    obj1.roleColor = colorString;
                    tmp15 = c12;
                    obj1.size = c12;
                    tmp3Result = tmp3(tmp11, obj1);
                    tmp8 = tmp3;
                  } else {
                    tmp5 = colorString;
                    tmp6 = null;
                    tmp4 = f38717;
                    obj = { color: null };
                    obj.color = tmp5;
                    tmp3Result = tmp3(tmp4, obj);
                    tmp8 = tmp3;
                  }
                  items = [, ,];
                  items[0] = tmp3Result;
                  tmp16 = closure_2;
                  obj5 = { variant: "text-xs/medium", children: closure_2 };
                  items[1] = tmp8(closure_0(closure_2[19]).Text, obj5);
                  tmp17 = closure_4;
                  tmp8Result = null;
                  if (null != closure_4) {
                    tmp19 = closure_1;
                    obj6 = {};
                    tmp21 = obj6;
                    tmp22 = tmp17;
                    tmp20 = closure_1(tmp16[20]);
                    merged = Object.assign(tmp17);
                    tmp8Result = tmp8(tmp20, obj6);
                  }
                  items[2] = tmp8Result;
                  return tmp(tmp2, { children: items });
                }
              }
              cResult[14] = guildId;
              cResult[15] = tmp5;
              cResult[16] = role.colorString;
              cResult[17] = role.id;
              cResult[18] = colorString;
              cResult[19] = roleIconProps;
              cResult[20] = tmp11;
              class D {
                constructor() {
                  obj = closure_0(closure_2[13]);
                  copyResult = obj.copy(role.id);
                  obj2 = closure_0(closure_2[14]);
                  roleIdCopiedResult = obj2.roleIdCopied(closure_2);
                  return;
                }
              }
            }
          }
          class T {
            constructor() {
              obj = { label: null, onPress: null };
              tmp = role;
              tmp2 = closure_2;
              intl = role(closure_2[15]).intl;
              obj.label = intl.string(role(closure_2[15]).t.sMsaLg);
              obj.onPress = function onPress() {
                /* body not rendered: F137639 */
              };
              items = [];
              items[0] = obj;
              if (null != closure_4) {
                tmpResult = tmp(tmp2[16]);
                tmp5 = customIconSrc;
                roleIconData = tmpResult.getRoleIconData(customIconSrc);
                if (roleIconData == null) {
                  roleIconData = {};
                }
                customIconSrc = roleIconData.customIconSrc;
                if (null != customIconSrc) {
                  obj1 = { label: null, onPress: null };
                  push = items.push;
                  intl2 = tmp(tmp2[15]).intl;
                  obj1.label = intl2.string(tmp(tmp2[15]).t["8xHmxo"]);
                  obj1.onPress = function onPress() {
                    /* body not rendered: F137640 */
                  };
                  arr1 = push(obj1);
                }
              }
              tmpResult1 = tmp(tmp2[17]);
              result = tmpResult1.showSimpleActionSheet({ key: "RoleItem", options: items, hasIcons: false });
              return;
            }
          }
          cResult[10] = tmp5;
          cResult[11] = role;
          cResult[12] = roleIconProps;
          cResult[13] = T;
          tmp20 = T;
        }
        class D {
          constructor() {
            obj = closure_0(closure_2[13]);
            copyResult = obj.copy(role.id);
            obj2 = closure_0(closure_2[14]);
            roleIdCopiedResult = obj2.roleIdCopied(closure_2);
            return;
          }
        }
        cResult[7] = tmp5;
        cResult[8] = role.id;
        cResult[9] = D;
      }
      let obj4 = { guildId, roleId: role.id, size };
      cResult[2] = guildId;
      cResult[3] = role.id;
      cResult[4] = obj4;
      tmp8 = obj4;
    }
  : (role) => {
      let intl;
      let tmp11Result;
      let tmp14;
      role = role.role;
      const guildId = role.guildId;
      let name;
      let colorString;
      let roleIconProps;
      let closure_5;
      const tmp = closure_13();
      if (role.name.length <= closure_8) {
        name = role.name;
      } else {
        const name1 = role.name;
        const _HermesInternal = HermesInternal;
        name = "" + name1.slice(0, tmp2) + "...";
      }
      if (colorString == null) {
        colorString = role.colorString;
      }
      const tmp5 = name;
      let obj = role(name[10]);
      let obj2 = { guildId, roleId: role.id, size };
      roleIconProps = obj.useRoleIconProps(obj2);
      const tags = role.tags;
      let guild_connections;
      if (tags != null) {
        guild_connections = tags.guild_connections;
      }
      function renderContent() {
        let tmp3Result;
        let tmp8;
        if (closure_5) {
          const obj2 = { roleId: role.id, guildId, roleColor: colorString, size, displayRoleIcon: false };
          colorString = undefined;
          const tmp11 = VerifiedRoleIconDefault;
          if (role != null) {
            colorString = role.colorString;
          }
          tmp3Result = React4(tmp11, obj2);
          tmp8 = React4;
        } else {
          const obj = { color: colorString };
          tmp3Result = React4(closure_14, obj);
          tmp8 = React4;
        }
        const children = [tmp3Result, ,];
        const obj3 = { variant: "text-xs/medium", children: name };
        children[1] = tmp8(Text_Text.Text, obj3);
        let tmp8Result = null;
        if (null != roleIconProps) {
          const obj4 = {};
          const tmp20 = RoleIconDefault;
          const merged = Object.assign(roleIconProps);
          tmp8Result = tmp8(tmp20, obj4);
        }
        children[2] = tmp8Result;
        return unpackModuleId(authStore, { children });
      }
      closure_5 = undefined !== guild_connections;
      const DeveloperMode = tmp4(tmp5[11]).DeveloperMode;
      const setting = DeveloperMode.useSetting();
      let obj3 = guildId(tmp5[12]);
      let items = [role.id, name];
      const tidaWebformEnabled = obj3.useExperiment(
        { location: "RoleItem" },
        { autoTrackExposure: false },
      ).tidaWebformEnabled;
      const items1 = [role, name, roleIconProps];
      const callback = colorString.useCallback(() => {
        const obj = ClipboardUtils;
        obj.copy(role.id);
        const obj2 = ToastUtils;
        obj2.roleIdCopied(name);
      }, items);
      if (setting) {
        let obj4 = {
          onPress: callback,
          onLongPress: tmp14,
          accessibilityRole: "button",
          accessibilityLabel: name,
          accessibilityHint: intl.string(role(tmp5[15]).t.sMsaLg),
          style: tmp.role,
          children: renderContent(),
        };
        tmp14 = undefined;
        const PressableHighlight = tmp4(tmp5[21]).PressableHighlight;
        if (setting) {
          if (tidaWebformEnabled) {
            tmp14 = tmp10;
          }
        }
        intl = tmp4(tmp5[15]).intl;
        tmp11Result = closure_9(PressableHighlight, obj4);
      } else {
        const obj5 = { style: tmp.role, children: renderContent() };
        tmp11Result = closure_9(roleIconProps, obj5);
      }
      return tmp11Result;
    };
let closure_15 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildMemberRoleIds) => {
      let first;
      let obj = guildMemberRoleIds(576);
      const cResult = obj.c(13);
      const tmp = guildMemberRoleIds;
      guildMemberRoleIds = guildMemberRoleIds.guildMemberRoleIds;
      const guildId = guildMemberRoleIds.guildId;
      const tmp4 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guildId) {
        let tmp7;
        let tmp8;
        if (cResult[2] === guildMemberRoleIds) {
          tmp7 = cResult[3];
          tmp8 = cResult[4];
        }
        const tmpResult = tmp(504);
        const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
        if (0 === stateFromStoresArray.length) {
          return null;
        } else {
          if (cResult[5] === guildId) {
            let tmp9;
            if (cResult[6] === stateFromStoresArray) {
              tmp9 = cResult[7];
            }
            if (cResult[10] === tmp4.roleContainer) {
              let tmp12;
              if (cResult[11] === tmp9) {
                tmp12 = cResult[12];
              }
              return tmp12;
            }
            const obj2 = { style: tmp17, children: tmp9 };
            const tmp15 = closure_9(View, obj2);
            cResult[10] = tmp4.roleContainer;
            cResult[11] = tmp9;
            cResult[12] = tmp15;
            tmp12 = tmp15;
          }
          if (cResult[8] !== guildId) {
            class C {
              constructor(role) {
                const obj = { role, guildId };
                return React4(closure_15, obj, role.id);
              }
            }
            cResult[8] = guildId;
            cResult[9] = C;
          } else {
            class C {
              constructor(role) {
                const obj = { role, guildId };
                return React4(closure_15, obj, role.id);
              }
            }
          }
          const mapped = stateFromStoresArray.map(C);
          cResult[5] = guildId;
          cResult[6] = stateFromStoresArray;
          cResult[7] = mapped;
          tmp9 = mapped;
        }
      }
      const fn = function s() {
        const manyRoles = GuildRoleStore.getManyRoles(guildId, guildMemberRoleIds);
        return manyRoles.sort(UserProfileRoleUtils.sortRolesByVerification);
      };
      const items1 = [guildMemberRoleIds, guildId];
      cResult[1] = guildId;
      cResult[2] = guildMemberRoleIds;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp8 = items1;
      tmp7 = fn;
    }
  : (guildMemberRoleIds) => {
      guildMemberRoleIds = guildMemberRoleIds.guildMemberRoleIds;
      const guildId = guildMemberRoleIds.guildId;
      const tmp = closure_13();
      let obj = guildMemberRoleIds(504);
      const items = [GuildRoleStore];
      const items1 = [guildMemberRoleIds, guildId];
      const stateFromStoresArray = obj.useStateFromStoresArray(
        items,
        () => {
          const manyRoles = GuildRoleStore.getManyRoles(guildId, guildMemberRoleIds);
          return manyRoles.sort(UserProfileRoleUtils.sortRolesByVerification);
        },
        items1,
      );
      let tmp2 = null;
      if (0 !== stateFromStoresArray.length) {
        const obj2 = {
          style: tmp.roleContainer,
          children: stateFromStoresArray.map((role) => {
            const obj = { role, guildId };
            return React4(closure_15, obj, role.id);
          }),
        };
        tmp2 = closure_9(View, obj2);
      }
      return tmp2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let first;
      const obj = userId(576);
      const cResult = obj.c(14);
      userId = userId.userId;
      const guildId = userId.guildId;
      const style = userId.style;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guildId) {
        let tmp6;
        let tmp7;
        let arr3;
        if (cResult[2] === userId) {
          tmp6 = cResult[3];
          tmp7 = cResult[4];
        }
        const tmpResult = userId(504);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
        let roles;
        const tmp9 = cResult[5];
        if (stateFromStores != null) {
          roles = stateFromStores.roles;
        }
        if (tmp9 !== roles) {
          let roles1;
          if (stateFromStores != null) {
            roles1 = stateFromStores.roles;
          }
          if (roles1 == null) {
            roles1 = [];
          }
          let roles2;
          if (stateFromStores != null) {
            roles2 = stateFromStores.roles;
          }
          cResult[5] = roles2;
          cResult[6] = roles1;
          arr3 = roles1;
        } else {
          arr3 = cResult[6];
        }
        let tmp13 = null;
        if (0 !== arr3.length) {
          let tmp14;
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(userId(1126).t["LPJmL/"]);
            cResult[7] = stringResult;
            tmp14 = stringResult;
          } else {
            tmp14 = cResult[7];
          }
          if (cResult[8] === guildId) {
            let tmp16;
            if (cResult[9] === arr3) {
              tmp16 = cResult[10];
            }
            if (cResult[11] === style) {
              let tmp20;
              if (cResult[12] === tmp16) {
                tmp20 = cResult[13];
              }
              tmp13 = tmp20;
            }
            const obj2 = { title: tmp14, style, children: tmp16 };
            const tmp23 = closure_9(guildId(6706), obj2);
            cResult[11] = style;
            cResult[12] = tmp16;
            cResult[13] = tmp23;
            tmp20 = tmp23;
          }
          const obj3 = { guildId, guildMemberRoleIds: arr3 };
          const tmp19 = closure_9(closure_16, obj3);
          cResult[8] = guildId;
          cResult[9] = arr3;
          cResult[10] = tmp19;
          tmp16 = tmp19;
        }
        return tmp13;
      }
      const fn = function n() {
        return GuildMemberStore.getMember(guildId, userId);
      };
      const items1 = [userId, guildId];
      cResult[1] = guildId;
      cResult[2] = userId;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp7 = items1;
      tmp6 = fn;
    }
  : (userId) => {
      let intl;
      let obj3;
      userId = userId.userId;
      const guildId = userId.guildId;
      const style = userId.style;
      const items = [GuildMemberStore];
      const items1 = [userId, guildId];
      const obj = userId(504);
      const stateFromStores = obj.useStateFromStores(items, () => GuildMemberStore.getMember(guildId, userId), items1);
      let roles;
      if (stateFromStores != null) {
        roles = stateFromStores.roles;
      }
      if (roles == null) {
        roles = [];
      }
      let tmp4 = null;
      if (0 !== roles.length) {
        const obj2 = { title: intl.string(userId(1126).t["LPJmL/"]), style, children: closure_9(closure_16, obj3) };
        const tmp7 = guildId(6706);
        intl = tmp(1126).intl;
        obj3 = { guildId, guildMemberRoleIds: roles };
        tmp4 = closure_9(tmp7, obj2);
      }
      return tmp4;
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileRolesCard.tsx");

export default tmp6;
export const RoleItem = tmp5;
