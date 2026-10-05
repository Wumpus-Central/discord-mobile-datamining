// === Module 11445: ModerateUserActionSheet ===

// Module 11445 (ModerateUserActionSheet)
import Constants from "Constants" /* 1085 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import useCanToggleCommunicationDisableOnUser from "useCanToggleCommunicationDisableOnUser" /* 8926 */;
import GuildMemberUtils from "GuildMemberUtils" /* 11446 */;
import GuildDisableCommunicationActionCreators from "GuildDisableCommunicationActionCreators" /* 11451 */;
import showKickConfirmModalDefault from "showKickConfirmModal" /* 11467 */;
import showBanConfirmModalDefault from "showBanConfirmModal" /* 11469 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let BottomSheet, user;

let c10;
let c9;
const Permissions = Constants.Permissions;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ container: { padding: 16, gap: 16 }, memberRoles: { justifyContent: "flex-start" } });
const memoResult = react.memo((user) => {
  let BottomSheetTitleHeader;
  let Icon;
  let Icon2;
  let Icon3;
  let Icon4;
  let canBanUser;
  let canKickUser;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let items5;
  let items6;
  let obj11;
  let obj12;
  let obj3;
  let obj5;
  let obj7;
  let obj9;
  user = user.user;
  const guild = user.guild;
  let stateFromStores;
  let hideActionSheet;
  let c4;
  const tmp = closure_11();
  let obj = user(stateFromStores[8]);
  let items = [c4];
  const items1 = [user, guild];
  stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    const getMember = GuildMemberStore.getMember;
    if (guild != null) {
      id = guild.id;
    }
    return getMember(id, user.id);
  }, items1);
  const items2 = [PermissionStore, UserStore, GuildStore];
  const items3 = [user, guild];
  const tmp5 = null != stateFromStores ? stateFromStores.roles : [];
  const tmp2Result = user(stateFromStores[8]);
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items2, () => {
    let canBanMemberResult;
    let canManageUserResult;
    let canResult;
    let result;
    let canKickMemberResult = null != guild;
    if (canKickMemberResult) {
      const obj = GuildMemberUtils;
      canKickMemberResult = obj.canKickMember(user, guild);
    }
    const obj2 = { canKickUser: canKickMemberResult, canBanUser: canBanMemberResult, canChangeNick: canManageUserResult, canManageRoles: canResult, canModerateMembers: result };
    canBanMemberResult = null != guild;
    if (canBanMemberResult) {
      const obj3 = GuildMemberUtils;
      canBanMemberResult = obj3.canBanMember(user, guild);
    }
    canManageUserResult = null != guild && PermissionStore.canManageUser(Permissions.MANAGE_NICKNAMES, user, guild);
    result = null != guild;
    canResult = null != guild && PermissionStore.can(Permissions.MANAGE_ROLES, guild);
    if (result) {
      const items = [UserStore, GuildStore, PermissionStore];
      const obj4 = useCanToggleCommunicationDisableOnUser;
      result = obj4.canToggleCommunicationDisableOnUser(guild.id, user.id, items);
    }
    return obj2;
  }, items3);
  ({ canKickUser, canBanUser } = stateFromStoresObject);
  if (null != guild) {
    if (null != stateFromStores) {
      const obj17 = guild(stateFromStores[11]);
      const name = obj17.getName(guild.id, undefined, user);
      hideActionSheet = guild(tmp3[12]).hideActionSheet;
      let tmp11 = null != stateFromStores;
      const tmp26 = guild;
      if (tmp11) {
        tmp11 = canKickUser || canBanUser || tmp7 || tmp8;
      }
      if (tmp11) {
        tmp11 = !user.isNonUserBot();
      }
      const items4 = [];
      if (tmp11) {
        const push = items4.push;
        let obj2 = {
          label: intl.string(tmp2(stateFromStores[14]).t.HxrBOZ),
          icon: closure_9(Icon, obj3),
          onPress() {
                  hideActionSheet();
                  let obj = ModalActionCreatorsDefault;
                  const obj2 = {
                    userId: user.id,
                    guildId: guild.id,
                    onClose() {
                      const arr = guild(stateFromStores[16]);
                      arr.pop();
                      const obj = { guild, user };
                      guild(stateFromStores[19])(obj);
                    },
                    onRemove() {
                      const arr = guild(stateFromStores[16]);
                      arr.pop();
                    }
                  };
                  obj.pushLazy(asyncRequire(11447, dependencyMap.paths), obj2);
                }
        };
        const ActionSheetRow = tmp2(tmp3[13]).ActionSheetRow;
        intl = tmp2(tmp3[14]).intl;
        obj3 = { IconComponent: tmp2(stateFromStores[15]).SettingsIcon };
        Icon = tmp2(tmp3[13]).ActionSheetRow.Icon;
        let arr = push(closure_9(ActionSheetRow, obj2));
      }
      if (null != stateFromStores) {
        if (tmp9) {
          let stringResult;
          const tmp2Result2 = user(stateFromStores[20]);
          let result = tmp2Result2.isMemberCommunicationDisabled(stateFromStores);
          c4 = result;
          const push2 = items4.push;
          const ActionSheetRow2 = tmp2(tmp3[13]).ActionSheetRow;
          const intl2 = tmp2(tmp3[14]).intl;
          const string = intl2.string;
          const t = tmp2(tmp3[14]).t;
          if (result) {
            stringResult = string(t.qXtNtS);
          } else {
            stringResult = string(t.xpsADY);
          }
          let obj4 = {
            label: stringResult,
            icon: closure_9(Icon2, obj5),
            onPress() {
                      hideActionSheet();
                      const obj = GuildDisableCommunicationActionCreators;
                      if (c4) {
                        const obj5 = { guildId: null, userId: null };
                        ({ guildId: obj3.guildId, userId: obj3.userId } = stateFromStores);
                        const result = obj.openEnableCommunication(obj5);
                      } else {
                        const obj6 = { guildId: null, userId: null };
                        ({ guildId: obj2.guildId, userId: obj2.userId } = stateFromStores);
                        const result1 = obj.openDisableCommunication(obj6);
                      }
                    }
          };
          obj5 = { IconComponent: tmp2(stateFromStores[21]).ClockWarningIcon };
          Icon2 = tmp2(tmp3[13]).ActionSheetRow.Icon;
          push2(closure_9(ActionSheetRow2, obj4));
        }
      }
      const tmp18 = null != stateFromStores && canKickUser;
      if (tmp18) {
        const push3 = items4.push;
        let obj6 = {
          label: intl3.string(tmp2(stateFromStores[14]).t["3glT6Z"]),
          icon: closure_9(Icon3, obj7),
          variant: "danger",
          onPress() {
                  let obj = {
                    guildId: guild.id,
                    userId: user.id,
                    cancelButtonCallback() {
                      const obj = { guild, user };
                      return guild(stateFromStores[19])(obj);
                    }
                  };
                  showKickConfirmModalDefault(obj);
                }
        };
        const ActionSheetRow3 = tmp2(tmp3[13]).ActionSheetRow;
        intl3 = tmp2(tmp3[14]).intl;
        obj7 = { IconComponent: user(stateFromStores[23]).UserMinusIcon };
        Icon3 = tmp2(tmp3[13]).ActionSheetRow.Icon;
        push3(closure_9(ActionSheetRow3, obj6));
      }
      const tmp21 = null != stateFromStores && canBanUser;
      if (tmp21) {
        const push4 = items4.push;
        const obj8 = {
          label: intl4.string(user(stateFromStores[14]).t["5MBJ5M"]),
          icon: closure_9(Icon4, obj9),
          variant: "danger",
          onPress() {
                  let obj = {
                    guildId: guild.id,
                    userId: user.id,
                    cancelButtonCallback() {
                      const obj = { guild, user };
                      return guild(stateFromStores[19])(obj);
                    }
                  };
                  showBanConfirmModalDefault(obj);
                }
        };
        const ActionSheetRow4 = tmp2(tmp3[13]).ActionSheetRow;
        intl4 = tmp2(tmp3[14]).intl;
        obj9 = { IconComponent: user(stateFromStores[25]).HammerIcon };
        Icon4 = tmp2(tmp3[13]).ActionSheetRow.Icon;
        push4(closure_9(ActionSheetRow4, obj8));
      }
      const obj10 = { header: closure_9(BottomSheetTitleHeader, obj11), bodyStyles: tmp.container, children: items6 };
      BottomSheet = tmp2(tmp3[27]).BottomSheet;
      obj11 = { title: intl5.formatToPlainString(user(stateFromStores[14]).t["792QKT"], obj12) };
      BottomSheetTitleHeader = tmp2(tmp3[28]).BottomSheetTitleHeader;
      intl5 = tmp2(tmp3[14]).intl;
      const obj13 = { style: items5, guild, userRoles: tmp5 };
      items5 = [tmp.memberRoles];
      obj12 = { nick: name };
      items6 = [closure_9(tmp26(stateFromStores[29]), obj13), ];
      const obj14 = {
        hasIcons: true,
        children: items4.map((children, index) => {
              const obj = { children };
              return closure_1_9(hideActionSheet.Fragment, obj, "action_" + index);
            })
      };
      const TableRowGroup = tmp2(tmp3[30]).TableRowGroup;
      items6[1] = closure_9(TableRowGroup, obj14);
      return closure_10(BottomSheet, obj10);
    }
  }
  return null;
});
let result = size.fileFinishedImporting("modules/guild_automod/native/ModerateUserActionSheet.tsx");

export default memoResult;