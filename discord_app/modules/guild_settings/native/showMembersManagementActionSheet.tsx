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
  let obj = { label: null, onPress: null };
  const intl = guild(1114).intl;
  obj.label = intl.string(guild(1114).t.pEasFX);
  obj.onPress = function onPress() {
    const obj = { guild, selectedRoleId, onFilterRoleId };
    obj.openLazy(asyncRequireImpl(16573, dependencyMap.paths), "MembersFilter", obj);
  };
  const items = [obj];
  if (canPrune == null) {
    let tmpResult = tmp(7265);
    canPrune = tmpResult.canPruneGuildMembers(guild, UserStore.getCurrentUser());
  }
  if (canPrune) {
    obj = { label: null, onPress: null, isDestructive: true };
    const intl2 = tmp(1114).intl;
    obj.label = intl2.string(tmp(1114).t["2mIlKQ"]);
    obj.onPress = function onPress() {
      const obj = { guild };
      obj.openLazy(asyncRequireImpl(16574, dependencyMap.paths), "MembersPrune", obj);
    };
    items.push(obj);
  }
  tmpResult = tmp(7195);
  const result = tmpResult.showSimpleActionSheet({ key: "GuildSettingsMembersMore", options: items, hasIcons: false });
}
export const getMembersManagementActions = function getMembersManagementActions(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  let obj = { label: null, action: null };
  const intl = guild(1114).intl;
  obj.label = intl.string(guild(1114).t.pEasFX);
  obj.action = function action() {
    const obj = { guild, selectedRoleId, onFilterRoleId };
    obj.openLazy(asyncRequireImpl(16573, dependencyMap.paths), "MembersFilter", obj);
  };
  const items = [obj];
  if (canPrune == null) {
    canPrune = tmp(7265).canPruneGuildMembers(guild, UserStore.getCurrentUser());
    const tmpResult = tmp(7265);
  }
  if (canPrune) {
    obj = { label: null, action: null, variant: "destructive" };
    const intl2 = tmp(1114).intl;
    obj.label = intl2.string(tmp(1114).t["2mIlKQ"]);
    obj.action = function action() {
      const obj = { guild };
      obj.openLazy(asyncRequireImpl(16574, dependencyMap.paths), "MembersPrune", obj);
    };
    items.push(obj);
  }
  return items;
};
