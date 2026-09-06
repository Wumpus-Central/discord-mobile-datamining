// === Module 11834: ModerateUserActionSheet ===

// Module 11834 (ModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import useCanToggleCommunicationDisableOnUser from "useCanToggleCommunicationDisableOnUser" /* 9403 */;
import GuildMemberUtils from "GuildMemberUtils" /* 11835 */;
import GuildDisableCommunicationActionCreators from "GuildDisableCommunicationActionCreators" /* 11839 */;
import showKickConfirmModalDefault from "showKickConfirmModal" /* 11855 */;
import showBanConfirmModalDefault from "showBanConfirmModal" /* 11857 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const Permissions = fn(1074).Permissions;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
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
  let obj = user(stateFromStores[8]);
  let items = [c4];
  const items1 = [user, guild];
  stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    return GuildMemberStore.getMember(id, user.id);
  }, items1);
  let tmp2Result = tmp2(tmp3[8]);
  const items2 = [PermissionStore, UserStore, GuildStore];
  const items3 = [user, guild];
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items2, () => {
    let canKickMemberResult = null != guild;
    if (canKickMemberResult) {
      let obj = GuildMemberUtils;
      canKickMemberResult = obj.canKickMember(user, tmp);
    }
    obj = { canKickUser: canKickMemberResult, canBanUser: null, canChangeNick: null, canManageRoles: null, canModerateMembers: null };
    let canBanMemberResult = null != tmp;
    if (canBanMemberResult) {
      canBanMemberResult = GuildMemberUtils.canBanMember(user, tmp);
    }
    obj.canBanUser = canBanMemberResult;
    let canManageUserResult = null != tmp;
    if (canManageUserResult) {
      canManageUserResult = PermissionStore.canManageUser(Permissions.MANAGE_NICKNAMES, user, tmp);
    }
    obj.canChangeNick = canManageUserResult;
    let canResult = null != tmp;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.MANAGE_ROLES, tmp);
    }
    obj.canManageRoles = canResult;
    let result = null != tmp;
    if (result) {
      const items = [UserStore, GuildStore, PermissionStore];
      result = useCanToggleCommunicationDisableOnUser.canToggleCommunicationDisableOnUser(tmp.id, user.id, items);
    }
    obj.canModerateMembers = result;
    return obj;
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
        obj = { label: null, icon: null, onPress: null };
        const intl = tmp2(tmp3[14]).intl;
        obj.label = intl.string(tmp2(tmp3[14]).t.HxrBOZ);
        obj = { IconComponent: tmp2(tmp3[15]).SettingsIcon };
        obj.icon = closure_9(tmp2(tmp3[13]).ActionSheetRow.Icon, obj);
        obj.onPress = function onPress() {
          hideActionSheet();
          const obj = {
            userId: user.id,
            guildId: guild.id,
            onClose() {
              let arr = guild(stateFromStores[16]);
              arr = arr.pop();
              guild(stateFromStores[19])({ guild, user });
            },
            onRemove() {
              let arr = guild(stateFromStores[16]);
              arr = arr.pop();
            }
          };
          obj.pushLazy(asyncRequireImpl(11836, dependencyMap.paths), obj);
        };
        items4.push(closure_9(tmp2(tmp3[13]).ActionSheetRow, obj));
      }
      if (null != stateFromStores) {
        if (tmp9) {
          tmp2Result = tmp2(tmp3[20]);
          let result = tmp2Result.isMemberCommunicationDisabled(stateFromStores);
          c4 = result;
          let ClockWarningIcon = tmp2(tmp3[14]).intl;
          let Icon = ClockWarningIcon.string;
          let t = tmp2(tmp3[14]).t;
          if (result) {
            let IconResult = Icon(t.qXtNtS);
          } else {
            IconResult = Icon(t.xpsADY);
          }
          const obj1 = { label: IconResult, icon: null, onPress: null };
          Icon = tmp2(tmp3[13]).ActionSheetRow.Icon;
          const obj2 = { IconComponent: null };
          ClockWarningIcon = tmp2(tmp3[21]).ClockWarningIcon;
          obj2.IconComponent = ClockWarningIcon;
          obj1.icon = closure_9(Icon, obj2);
          obj1.onPress = function onPress() {
            hideActionSheet();
            let obj = GuildDisableCommunicationActionCreators;
            if (c4) {
              obj = { guildId: null, userId: null };
              ({ guildId: obj3.guildId, userId: obj3.userId } = stateFromStores);
              const result = obj.openEnableCommunication(obj);
            } else {
              obj = { guildId: null, userId: null };
              ({ guildId: obj2.guildId, userId: obj2.userId } = stateFromStores);
              const result1 = obj.openDisableCommunication(obj);
            }
          };
          t = items4.push(tmp15(tmp2(tmp3[13]).ActionSheetRow, obj1));
        }
      }
      if (tmp17) {
        let obj3 = { label: null, icon: null, variant: "danger", onPress: null };
        const intl2 = tmp2(tmp3[14]).intl;
        obj3.label = intl2.string(tmp2(tmp3[14]).t["3glT6Z"]);
        let obj4 = { IconComponent: tmp2(tmp3[23]).UserMinusIcon };
        obj3.icon = closure_9(tmp2(tmp3[13]).ActionSheetRow.Icon, obj4);
        obj3.onPress = function onPress() {
          showKickConfirmModalDefault({
            guildId: guild.id,
            userId: user.id,
            cancelButtonCallback() {
              return guild(stateFromStores[19])({ guild, user });
            }
          });
        };
        items4.push(closure_9(tmp2(tmp3[13]).ActionSheetRow, obj3));
      }
      if (tmp20) {
        const obj5 = { label: null, icon: null, variant: "danger", onPress: null };
        const intl3 = tmp2(tmp3[14]).intl;
        obj5.label = intl3.string(tmp2(tmp3[14]).t["5MBJ5M"]);
        const obj6 = { IconComponent: tmp2(tmp3[25]).HammerIcon };
        obj5.icon = closure_9(tmp2(tmp3[13]).ActionSheetRow.Icon, obj6);
        obj5.onPress = function onPress() {
          showBanConfirmModalDefault({
            guildId: guild.id,
            userId: user.id,
            cancelButtonCallback() {
              return guild(stateFromStores[19])({ guild, user });
            }
          });
        };
        items4.push(closure_9(tmp2(tmp3[13]).ActionSheetRow, obj5));
      }
      const obj7 = { header: null, bodyStyles: null, children: null };
      const obj8 = { title: null };
      const intl4 = tmp2(tmp3[14]).intl;
      const obj9 = { nick: name };
      obj8.title = intl4.formatToPlainString(tmp2(tmp3[14]).t["792QKT"], obj9);
      obj7.header = closure_9(tmp2(tmp3[28]).BottomSheetTitleHeader, obj8);
      obj7.bodyStyles = tmp.container;
      const obj10 = { style: null, guild: null, userRoles: null };
      const items5 = [tmp.memberRoles];
      obj10.style = items5;
      obj10.guild = guild;
      obj10.userRoles = tmp5;
      const items6 = [closure_9(guild(tmp3[29]), obj10), ];
      const obj11 = { hasIcons: true, children: items4.map((children, index) => closure_1_9(hideActionSheet.Fragment, { children }, "action_" + index)) };
      items6[1] = closure_9(tmp2(tmp3[30]).TableRowGroup, obj11);
      obj7.children = items6;
      return closure_10(tmp2(tmp3[27]).BottomSheet, obj7);
    }
  }
  return null;
});