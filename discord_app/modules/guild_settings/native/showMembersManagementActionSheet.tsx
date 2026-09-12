// === Module 16673: showMembersManagementActionSheet ===

// Module 16673 (showMembersManagementActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/showMembersManagementActionSheet.tsx");

export default function showMembersManagementActionSheet(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  let obj = { label: null, onPress: null };
  const intl = guild(1114).intl;
  obj.label = intl.string(guild(1114).t.pEasFX);
  obj.onPress = function onPress() {
    const obj = { guild, selectedRoleId, onFilterRoleId };
    obj.openLazy(asyncRequireImpl(16674, dependencyMap.paths), "MembersFilter", obj);
  };
  const items = [obj];
  if (canPrune == null) {
    let tmpResult = tmp(7368);
    canPrune = tmpResult.canPruneGuildMembers(guild, UserStore.getCurrentUser());
  }
  if (canPrune) {
    obj = { label: null, onPress: null, isDestructive: true };
    const intl2 = tmp(1114).intl;
    obj.label = intl2.string(tmp(1114).t["2mIlKQ"]);
    obj.onPress = function onPress() {
      const obj = { guild };
      obj.openLazy(asyncRequireImpl(16675, dependencyMap.paths), "MembersPrune", obj);
    };
    items.push(obj);
  }
  tmpResult = tmp(7297);
  const result = tmpResult.showSimpleActionSheet({ key: "GuildSettingsMembersMore", options: items, hasIcons: false });
};
export const getMembersManagementActions = function getMembersManagementActions(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  let obj = { label: null, action: null };
  const intl = guild(1114).intl;
  obj.label = intl.string(guild(1114).t.pEasFX);
  obj.action = function action() {
    const obj = { guild, selectedRoleId, onFilterRoleId };
    obj.openLazy(asyncRequireImpl(16674, dependencyMap.paths), "MembersFilter", obj);
  };
  const items = [obj];
  if (canPrune == null) {
    canPrune = tmp(7368).canPruneGuildMembers(guild, UserStore.getCurrentUser());
    const tmpResult = tmp(7368);
  }
  if (canPrune) {
    obj = { label: null, action: null, variant: "destructive" };
    const intl2 = tmp(1114).intl;
    obj.label = intl2.string(tmp(1114).t["2mIlKQ"]);
    obj.action = function action() {
      const obj = { guild };
      obj.openLazy(asyncRequireImpl(16675, dependencyMap.paths), "MembersPrune", obj);
    };
    items.push(obj);
  }
  return items;
};