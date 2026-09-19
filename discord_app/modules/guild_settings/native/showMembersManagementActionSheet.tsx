// === Module 16915: showMembersManagementActionSheet ===

// Module 16915 (showMembersManagementActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/showMembersManagementActionSheet.tsx");

export default function showMembersManagementActionSheet(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  const obj = { label: null, onPress: null };
  const intl = guild(1115).intl;
  obj.label = intl.string(guild(1115).t.pEasFX);
  obj.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16916, dependencyMap.paths), "MembersFilter", { guild, selectedRoleId, onFilterRoleId });
  };
  const items = [obj];
  if (canPrune == null) {
    canPrune = tmp(7505).canPruneGuildMembers(guild, UserStore.getCurrentUser());
    const tmpResult = tmp(7505);
  }
  if (canPrune) {
    const obj2 = { label: null, onPress: null, isDestructive: true };
    const intl2 = tmp(1115).intl;
    obj2.label = intl2.string(tmp(1115).t["2mIlKQ"]);
    obj2.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16917, dependencyMap.paths), "MembersPrune", { guild });
    };
    items.push(obj2);
  }
  const result = guild(7434).showSimpleActionSheet({ key: "GuildSettingsMembersMore", options: items, hasIcons: false });
  const tmpResult2 = guild(7434);
};
export const getMembersManagementActions = function getMembersManagementActions(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  const obj = { label: null, action: null };
  const intl = guild(1115).intl;
  obj.label = intl.string(guild(1115).t.pEasFX);
  obj.action = function action() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16916, dependencyMap.paths), "MembersFilter", { guild, selectedRoleId, onFilterRoleId });
  };
  const items = [obj];
  if (canPrune == null) {
    canPrune = tmp(7505).canPruneGuildMembers(guild, UserStore.getCurrentUser());
    const tmpResult = tmp(7505);
  }
  if (canPrune) {
    const obj2 = { label: null, action: null, variant: "destructive" };
    const intl2 = tmp(1115).intl;
    obj2.label = intl2.string(tmp(1115).t["2mIlKQ"]);
    obj2.action = function action() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16917, dependencyMap.paths), "MembersPrune", { guild });
    };
    items.push(obj2);
  }
  return items;
};