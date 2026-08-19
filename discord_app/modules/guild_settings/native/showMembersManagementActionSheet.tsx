// === Module 15828: showMembersManagementActionSheet ===

// Module 15828 (showMembersManagementActionSheet)
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/guild_settings/native/showMembersManagementActionSheet.tsx");

export default function showMembersManagementActionSheet(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  let obj = { label: null, onPress: null };
  const intl = guild(1236).intl;
  obj[0] = intl.string(guild(1236).t.pEasFX);
  obj[1] = function onPress() {
    const obj = { guild, selectedRoleId: closure_1, onFilterRoleId: closure_2 };
    obj.openLazy(guild(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), "MembersFilter", obj);
  };
  const items = [obj];
  if (canPrune == null) {
    let tmpResult = tmp(7231);
    canPrune = tmpResult.canPruneGuildMembers(guild, authStore.getCurrentUser());
  }
  if (canPrune) {
    obj = { label: null, onPress: null, isDestructive: true };
    const intl2 = tmp(1236).intl;
    obj[0] = intl2.string(tmp(1236).t["2mIlKQ"]);
    obj[1] = function onPress() {
      const obj = { guild };
      obj.openLazy(guild(dependencyMap[4])(dependencyMap[6], dependencyMap.paths), "MembersPrune", obj);
    };
    items.push(obj);
  }
  tmpResult = tmp(7172);
  const result = tmpResult.showSimpleActionSheet({ key: "GuildSettingsMembersMore", options: items, hasIcons: false });
};
export const getMembersManagementActions = function getMembersManagementActions(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  let obj = { label: null, action: null };
  const intl = guild(1236).intl;
  obj[0] = intl.string(guild(1236).t.pEasFX);
  obj[1] = function action() {
    const obj = { guild, selectedRoleId: closure_1, onFilterRoleId: closure_2 };
    obj.openLazy(guild(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), "MembersFilter", obj);
  };
  const items = [obj];
  if (canPrune == null) {
    canPrune = tmp(7231).canPruneGuildMembers(guild, authStore.getCurrentUser());
    const tmpResult = tmp(7231);
  }
  if (canPrune) {
    obj = { label: null, action: null, variant: "destructive" };
    const intl2 = tmp(1236).intl;
    obj[0] = intl2.string(tmp(1236).t["2mIlKQ"]);
    obj[1] = function action() {
      const obj = { guild };
      obj.openLazy(guild(dependencyMap[4])(dependencyMap[6], dependencyMap.paths), "MembersPrune", obj);
    };
    items.push(obj);
  }
  return items;
};