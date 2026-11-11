// === Module 19225: showMembersManagementActionSheet ===

// Module 19225 (showMembersManagementActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/showMembersManagementActionSheet.tsx");

export default function showMembersManagementActionSheet(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  const obj = { label: null, onPress: null };
  const intl = guild(1113).intl;
  obj.label = intl.string(guild(1113).t.pEasFX);
  obj.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19226, dependencyMap.paths), "MembersFilter", { guild, selectedRoleId, onFilterRoleId });
  };
  items = [obj];
  if (canPrune == null) {
    canPrune = tmp(7219).canPruneGuildMembers(guild, UserStore.getCurrentUser());
    const tmpResult = tmp(7219);
  }
  if (canPrune) {
    const obj2 = { label: null, onPress: null, isDestructive: true };
    const intl2 = tmp(1113).intl;
    obj2.label = intl2.string(tmp(1113).t["2mIlKQ"]);
    obj2.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19227, dependencyMap.paths), "MembersPrune", { guild });
    };
    items.push(obj2);
  }
  const result = guild(7882).showSimpleActionSheet({ key: "GuildSettingsMembersMore", options: items, hasIcons: false });
  const tmpResult2 = guild(7882);
};
export function getMembersManagementActions(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  const obj = { label: null, action: null };
  const intl = guild(1113).intl;
  obj.label = intl.string(guild(1113).t.pEasFX);
  obj.action = function action() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19226, dependencyMap.paths), "MembersFilter", { guild, selectedRoleId, onFilterRoleId });
  };
  items = [obj];
  if (canPrune == null) {
    canPrune = tmp(7219).canPruneGuildMembers(guild, UserStore.getCurrentUser());
    const tmpResult = tmp(7219);
  }
  if (canPrune) {
    const obj2 = { label: null, action: null, variant: "destructive" };
    const intl2 = tmp(1113).intl;
    obj2.label = intl2.string(tmp(1113).t["2mIlKQ"]);
    obj2.action = function action() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19227, dependencyMap.paths), "MembersPrune", { guild });
    };
    items.push(obj2);
  }
  return items;
}