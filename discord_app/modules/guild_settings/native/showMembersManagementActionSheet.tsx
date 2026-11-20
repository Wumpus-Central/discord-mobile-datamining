// === Module 18093: showMembersManagementActionSheet ===

// Module 18093 (showMembersManagementActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/showMembersManagementActionSheet.tsx");

export default function showMembersManagementActionSheet(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  const obj = { label: null, onPress: null };
  const intl = guild(1112).intl;
  obj.label = intl.string(guild(1112).t.pEasFX);
  obj.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18094, dependencyMap.paths), "MembersFilter", { guild, selectedRoleId, onFilterRoleId });
  };
  items = [obj];
  if (canPrune == null) {
    canPrune = tmp(6768).canPruneGuildMembers(guild, UserStore.getCurrentUser());
    const tmpResult = tmp(6768);
  }
  if (canPrune) {
    const obj2 = { label: null, onPress: null, isDestructive: true };
    const intl2 = tmp(1112).intl;
    obj2.label = intl2.string(tmp(1112).t["2mIlKQ"]);
    obj2.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18095, dependencyMap.paths), "MembersPrune", { guild });
    };
    items.push(obj2);
  }
  const result = guild(7430).showSimpleActionSheet({ key: "GuildSettingsMembersMore", options: items, hasIcons: false });
  const tmpResult2 = guild(7430);
};
export function getMembersManagementActions(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  const obj = { label: null, action: null };
  const intl = guild(1112).intl;
  obj.label = intl.string(guild(1112).t.pEasFX);
  obj.action = function action() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18094, dependencyMap.paths), "MembersFilter", { guild, selectedRoleId, onFilterRoleId });
  };
  items = [obj];
  if (canPrune == null) {
    canPrune = tmp(6768).canPruneGuildMembers(guild, UserStore.getCurrentUser());
    const tmpResult = tmp(6768);
  }
  if (canPrune) {
    const obj2 = { label: null, action: null, variant: "destructive" };
    const intl2 = tmp(1112).intl;
    obj2.label = intl2.string(tmp(1112).t["2mIlKQ"]);
    obj2.action = function action() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18095, dependencyMap.paths), "MembersPrune", { guild });
    };
    items.push(obj2);
  }
  return items;
}