// discord_app/modules/guild_settings/native/showMembersManagementActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/showMembersManagementActionSheet.tsx");

export default function showMembersManagementActionSheet(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  const obj = { label: null, onPress: null };
  const intl = guild(1114).intl;
  obj.label = intl.string(guild(1114).t.pEasFX);
  obj.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16676, dependencyMap.paths), "MembersFilter", {
      guild,
      selectedRoleId,
      onFilterRoleId,
    });
  };
  const items = [obj];
  if (canPrune == null) {
    canPrune = tmp(7368).canPruneGuildMembers(guild, UserStore.getCurrentUser());
    const tmpResult = tmp(7368);
  }
  if (canPrune) {
    const obj2 = { label: null, onPress: null, isDestructive: true };
    const intl2 = tmp(1114).intl;
    obj2.label = intl2.string(tmp(1114).t["2mIlKQ"]);
    obj2.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16677, dependencyMap.paths), "MembersPrune", {
        guild,
      });
    };
    items.push(obj2);
  }
  const result = guild(7297).showSimpleActionSheet({
    key: "GuildSettingsMembersMore",
    options: items,
    hasIcons: false,
  });
  const tmpResult2 = guild(7297);
}
export const getMembersManagementActions = function getMembersManagementActions(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  const obj = { label: null, action: null };
  const intl = guild(1114).intl;
  obj.label = intl.string(guild(1114).t.pEasFX);
  obj.action = function action() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16676, dependencyMap.paths), "MembersFilter", {
      guild,
      selectedRoleId,
      onFilterRoleId,
    });
  };
  const items = [obj];
  if (canPrune == null) {
    canPrune = tmp(7368).canPruneGuildMembers(guild, UserStore.getCurrentUser());
    const tmpResult = tmp(7368);
  }
  if (canPrune) {
    const obj2 = { label: null, action: null, variant: "destructive" };
    const intl2 = tmp(1114).intl;
    obj2.label = intl2.string(tmp(1114).t["2mIlKQ"]);
    obj2.action = function action() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16677, dependencyMap.paths), "MembersPrune", {
        guild,
      });
    };
    items.push(obj2);
  }
  return items;
};
