// === Module 11298: ModerateUserActionSheet ===

// Module 11298 (ModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import useCanToggleCommunicationDisableOnUser from "useCanToggleCommunicationDisableOnUser" /* 8698 */;
import GuildMemberUtils from "GuildMemberUtils" /* 11299 */;
import GuildDisableCommunicationActionCreators from "GuildDisableCommunicationActionCreators" /* 11304 */;
import showKickConfirmModalDefault from "showKickConfirmModal" /* 11320 */;
import showBanConfirmModalDefault from "showBanConfirmModal" /* 11322 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2107 */;
import GuildStore from "GuildStore" /* 2066 */;
import PermissionStore from "PermissionStore" /* 4466 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const Permissions = fn(1074).Permissions;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4829);
let closure_11 = createStyles.createStyles({ container: { padding: 16, gap: 16 }, memberRoles: { justifyContent: "flex-start" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_automod/native/ModerateUserActionSheet.tsx");

export default noop.memo((user) => {
  user = user.user;
  const guild = user.guild;
  let stateFromStores;
  let hideActionSheet;
  c4 = undefined;
  const tmp = closure_11();
  let items = [c4];
  const items1 = [user, guild];
  stateFromStores = user(stateFromStores[8]).useStateFromStores(items, () => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    return GuildMemberStore.getMember(id, user.id);
  }, items1);
  let obj = user(stateFromStores[8]);
  const tmp5 = null != stateFromStores ? stateFromStores.roles : [];
  const items2 = [PermissionStore, UserStore, GuildStore];
  const items3 = [user, guild];
  const stateFromStoresObject = user(stateFromStores[8]).useStateFromStoresObject(items2, () => {
    let canKickMemberResult = null != guild;
    if (canKickMemberResult) {
      canKickMemberResult = GuildMemberUtils.canKickMember(user, guild);
    }
    const obj2 = { canKickUser: canKickMemberResult, canBanUser: null, canChangeNick: null, canManageRoles: null, canModerateMembers: null };
    let canBanMemberResult = null != guild;
    if (canBanMemberResult) {
      canBanMemberResult = GuildMemberUtils.canBanMember(user, guild);
    }
    obj2.canBanUser = canBanMemberResult;
    let canManageUserResult = null != guild;
    if (canManageUserResult) {
      canManageUserResult = PermissionStore.canManageUser(Permissions.MANAGE_NICKNAMES, user, guild);
    }
    obj2.canChangeNick = canManageUserResult;
    let canResult = null != guild;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.MANAGE_ROLES, guild);
    }
    obj2.canManageRoles = canResult;
    let result = null != guild;
    if (result) {
      const items = [UserStore, GuildStore, PermissionStore];
      result = useCanToggleCommunicationDisableOnUser.canToggleCommunicationDisableOnUser(guild.id, user.id, items);
    }
    obj2.canModerateMembers = result;
    return obj2;
  }, items3);
  ({ canKickUser, canBanUser } = stateFromStoresObject);
  if (null != guild) {
    if (null != stateFromStores) {
      const name = guild(tmp3[11]).getName(guild.id, undefined, user);
      hideActionSheet = guild(tmp3[12]).hideActionSheet;
      let tmp11 = null != stateFromStores;
      if (tmp11) {
        let tmp10 = canKickUser;
        if (!canKickUser) {
          tmp10 = canBanUser;
        }
        if (!tmp10) {
          tmp10 = tmp7;
        }
        if (!tmp10) {
          tmp10 = tmp8;
        }
        tmp11 = tmp10;
      }
      if (tmp11) {
        tmp11 = !user.isNonUserBot();
      }
      const items4 = [];
      if (tmp11) {
        let obj2 = { label: null, icon: null, onPress: null };
        const intl = tmp2(tmp3[14]).intl;
        obj2.label = intl.string(tmp2(tmp3[14]).t.HxrBOZ);
        let obj3 = { IconComponent: tmp2(tmp3[15]).SettingsIcon };
        obj2.icon = closure_9(tmp2(tmp3[13]).ActionSheetRow.Icon, obj3);
        obj2.onPress = function onPress() {
          hideActionSheet();
          ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11300, dependencyMap.paths), {
            userId: user.id,
            guildId: guild.id,
            onClose() {
              guild(stateFromStores[16]).pop();
              guild(stateFromStores[19])({ guild, user });
            },
            onRemove() {
              guild(stateFromStores[16]).pop();
            }
          });
        };
        items4.push(closure_9(tmp2(tmp3[13]).ActionSheetRow, obj2));
      }
      if (null != stateFromStores) {
        if (tmp9) {
          let result = tmp2(tmp3[20]).isMemberCommunicationDisabled(stateFromStores);
          c4 = result;
          let ClockWarningIcon = tmp2(tmp3[14]).intl;
          let Icon = ClockWarningIcon.string;
          let t = tmp2(tmp3[14]).t;
          if (result) {
            let IconResult = Icon(t.qXtNtS);
          } else {
            IconResult = Icon(t.xpsADY);
          }
          let obj4 = { label: IconResult, icon: null, onPress: null };
          Icon = tmp2(tmp3[13]).ActionSheetRow.Icon;
          let obj5 = { IconComponent: null };
          ClockWarningIcon = tmp2(tmp3[21]).ClockWarningIcon;
          obj5.IconComponent = ClockWarningIcon;
          obj4.icon = closure_9(Icon, obj5);
          obj4.onPress = function onPress() {
            hideActionSheet();
            const obj = GuildDisableCommunicationActionCreators;
            if (c4) {
              ({ guildId: obj3.guildId, userId: obj3.userId } = stateFromStores);
              const result = obj.openEnableCommunication({ guildId: null, userId: null });
              const obj5 = { guildId: null, userId: null };
            } else {
              ({ guildId: obj2.guildId, userId: obj2.userId } = stateFromStores);
              const result1 = obj.openDisableCommunication({ guildId: null, userId: null });
              const obj6 = { guildId: null, userId: null };
            }
          };
          t = items4.push(closure_9(tmp2(tmp3[13]).ActionSheetRow, obj4));
          const tmp2Result2 = tmp2(tmp3[20]);
        }
      }
      if (tmp17) {
        let obj6 = { label: null, icon: null, variant: "danger", onPress: null };
        const intl2 = tmp2(tmp3[14]).intl;
        obj6.label = intl2.string(tmp2(tmp3[14]).t["3glT6Z"]);
        const obj7 = { IconComponent: tmp2(tmp3[23]).UserMinusIcon };
        obj6.icon = closure_9(tmp2(tmp3[13]).ActionSheetRow.Icon, obj7);
        obj6.onPress = function onPress() {
          showKickConfirmModalDefault({
            guildId: guild.id,
            userId: user.id,
            cancelButtonCallback() {
              return guild(stateFromStores[19])({ guild, user });
            }
          });
        };
        items4.push(closure_9(tmp2(tmp3[13]).ActionSheetRow, obj6));
      }
      if (tmp20) {
        const obj8 = { label: null, icon: null, variant: "danger", onPress: null };
        const intl3 = tmp2(tmp3[14]).intl;
        obj8.label = intl3.string(tmp2(tmp3[14]).t["5MBJ5M"]);
        const obj9 = { IconComponent: tmp2(tmp3[25]).HammerIcon };
        obj8.icon = closure_9(tmp2(tmp3[13]).ActionSheetRow.Icon, obj9);
        obj8.onPress = function onPress() {
          showBanConfirmModalDefault({
            guildId: guild.id,
            userId: user.id,
            cancelButtonCallback() {
              return guild(stateFromStores[19])({ guild, user });
            }
          });
        };
        items4.push(closure_9(tmp2(tmp3[13]).ActionSheetRow, obj8));
      }
      const obj10 = { header: null, bodyStyles: null, children: null };
      const obj11 = { title: null };
      const intl4 = tmp2(tmp3[14]).intl;
      const obj12 = { nick: name };
      obj11.title = intl4.formatToPlainString(tmp2(tmp3[14]).t["792QKT"], obj12);
      obj10.header = closure_9(tmp2(tmp3[28]).BottomSheetTitleHeader, obj11);
      obj10.bodyStyles = tmp.container;
      const obj13 = { style: null, guild: null, userRoles: null };
      const items5 = [tmp.memberRoles];
      obj13.style = items5;
      obj13.guild = guild;
      obj13.userRoles = tmp5;
      const items6 = [closure_9(guild(tmp3[29]), obj13), ];
      const obj14 = { hasIcons: true, children: items4.map((children, index) => closure_1_9(hideActionSheet.Fragment, { children }, "action_" + index)) };
      items6[1] = closure_9(tmp2(tmp3[30]).TableRowGroup, obj14);
      obj10.children = items6;
      return closure_10(tmp2(tmp3[27]).BottomSheet, obj10);
    }
  }
  return null;
});