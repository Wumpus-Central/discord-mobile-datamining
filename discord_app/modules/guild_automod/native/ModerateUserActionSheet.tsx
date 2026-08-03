// === Module 11038: ? ===

// Module 11038
import importAllResult from "showModerateUserActionSheet";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import { Permissions } from "ME";
import jsxProd from "ClockWarningIcon";
import createCacheKey from "createCacheKey";

let c10;
let c9;
const require = arg1;
let c3 = importAllResult;
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ container: { padding: 16, gap: 16 }, memberRoles: { justifyContent: "flex-start" } });
const memoResult = importAllResult.memo((user) => {
  let canBanUser;
  let canKickUser;
  user = user.user;
  const guild = user.guild;
  let stateFromStores;
  let hideActionSheet;
  let c4;
  const tmp = callback3();
  let obj = user(stateFromStores[8]);
  let items = [c4];
  const items1 = [user, guild];
  stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    return _undefined.getMember(id, user.id);
  }, items1);
  let tmp2Result = tmp2(tmp3[8]);
  const items2 = [getUncachedChannelPermissions, mergeGuildAvatar, createGuildRecordFromRust];
  const items3 = [user, guild];
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items2, () => {
    let canKickMemberResult = null != guild;
    if (canKickMemberResult) {
      let obj = user(stateFromStores[9]);
      canKickMemberResult = obj.canKickMember(user, tmp);
    }
    obj = { canKickUser: canKickMemberResult, canBanUser: null, canChangeNick: null, canManageRoles: null, canModerateMembers: null };
    let canBanMemberResult = null != tmp;
    if (canBanMemberResult) {
      canBanMemberResult = user(stateFromStores[9]).canBanMember(user, tmp);
      const obj3 = user(stateFromStores[9]);
    }
    obj[1] = canBanMemberResult;
    let canManageUserResult = null != tmp;
    if (canManageUserResult) {
      canManageUserResult = outer1_6.canManageUser(outer1_8.MANAGE_NICKNAMES, user, tmp);
    }
    obj[2] = canManageUserResult;
    let canResult = null != tmp;
    if (canResult) {
      canResult = outer1_6.can(outer1_8.MANAGE_ROLES, tmp);
    }
    obj[3] = canResult;
    let result = null != tmp;
    if (result) {
      const items = [outer1_7, outer1_5, outer1_6];
      result = user(stateFromStores[10]).canToggleCommunicationDisableOnUser(tmp.id, user.id, items);
      const obj4 = user(stateFromStores[10]);
    }
    obj[4] = result;
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
        obj[0] = intl.string(tmp2(tmp3[14]).t.HxrBOZ);
        obj = { IconComponent: null };
        obj[0] = tmp2(tmp3[15]).SettingsIcon;
        obj[1] = callback(tmp2(tmp3[13]).ActionSheetRow.Icon, obj);
        obj[2] = function onPress() {
          hideActionSheet();
          let obj = guild(stateFromStores[16]);
          obj = {
            userId: user.id,
            guildId: guild.id,
            onClose() {
              let arr = outer1_1(outer1_2[16]);
              arr = arr.pop();
              outer1_1(outer1_2[19])({ guild: closure_1, user: closure_0 });
            },
            onRemove() {
              let arr = callback(table[16]);
              arr = arr.pop();
            }
          };
          obj.pushLazy(user(stateFromStores[18])(stateFromStores[17], stateFromStores.paths), obj);
        };
        items4.push(callback(tmp2(tmp3[13]).ActionSheetRow, obj));
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
          const obj1 = { label: null, icon: null, onPress: null };
          obj1[0] = IconResult;
          Icon = tmp2(tmp3[13]).ActionSheetRow.Icon;
          const obj2 = { IconComponent: null };
          ClockWarningIcon = tmp2(tmp3[21]).ClockWarningIcon;
          obj2[0] = ClockWarningIcon;
          obj1[1] = callback(Icon, obj2);
          obj1[2] = function onPress() {
            hideActionSheet();
            let obj = user(stateFromStores[22]);
            if (c4) {
              obj = { guildId: null, userId: null };
              ({ guildId: obj3[0], userId: obj3[1] } = stateFromStores);
              const result = obj.openEnableCommunication(obj);
            } else {
              obj = { guildId: null, userId: null };
              ({ guildId: obj2[0], userId: obj2[1] } = stateFromStores);
              const result1 = obj.openDisableCommunication(obj);
            }
          };
          t = items4.push(tmp15(tmp2(tmp3[13]).ActionSheetRow, obj1));
        }
      }
      if (tmp17) {
        let obj3 = { label: null, icon: null, variant: "danger", onPress: null };
        const intl2 = tmp2(tmp3[14]).intl;
        obj3[0] = intl2.string(tmp2(tmp3[14]).t["3glT6Z"]);
        let obj4 = { IconComponent: null };
        obj4[0] = tmp2(tmp3[23]).UserMinusIcon;
        obj3[1] = callback(tmp2(tmp3[13]).ActionSheetRow.Icon, obj4);
        obj3[3] = function onPress() {
          guild(stateFromStores[24])({
            guildId: guild.id,
            userId: user.id,
            cancelButtonCallback() {
              return outer1_1(outer1_2[19])({ guild: closure_1, user: closure_0 });
            }
          });
        };
        items4.push(callback(tmp2(tmp3[13]).ActionSheetRow, obj3));
      }
      if (tmp20) {
        const obj5 = { label: null, icon: null, variant: "danger", onPress: null };
        const intl3 = tmp2(tmp3[14]).intl;
        obj5[0] = intl3.string(tmp2(tmp3[14]).t["5MBJ5M"]);
        const obj6 = { IconComponent: null };
        obj6[0] = tmp2(tmp3[25]).HammerIcon;
        obj5[1] = callback(tmp2(tmp3[13]).ActionSheetRow.Icon, obj6);
        obj5[3] = function onPress() {
          guild(stateFromStores[26])({
            guildId: guild.id,
            userId: user.id,
            cancelButtonCallback() {
              return outer1_1(outer1_2[19])({ guild: closure_1, user: closure_0 });
            }
          });
        };
        items4.push(callback(tmp2(tmp3[13]).ActionSheetRow, obj5));
      }
      const obj7 = { header: null, bodyStyles: null, children: null };
      const obj8 = { title: null };
      const intl4 = tmp2(tmp3[14]).intl;
      const obj9 = { nick: null };
      obj9[0] = name;
      obj8[0] = intl4.formatToPlainString(tmp2(tmp3[14]).t["792QKT"], obj9);
      obj7[0] = callback(tmp2(tmp3[28]).BottomSheetTitleHeader, obj8);
      obj7[1] = tmp.container;
      const obj10 = { style: null, guild: null, userRoles: null };
      const items5 = [tmp.memberRoles];
      obj10[0] = items5;
      obj10[1] = guild;
      obj10[2] = tmp5;
      const items6 = [callback(guild(tmp3[29]), obj10), ];
      const obj11 = { hasIcons: true, children: null };
      obj11[1] = items4.map((children) => callback(hideActionSheet.Fragment, { children }, "action_" + arg1));
      items6[1] = callback(tmp2(tmp3[30]).TableRowGroup, obj11);
      obj7[2] = items6;
      return callback2(tmp2(tmp3[27]).BottomSheet, obj7);
    }
  }
  return null;
});
let result = require("createGuildRecordFromRust").fileFinishedImporting("modules/guild_automod/native/ModerateUserActionSheet.tsx");

export default memoResult;