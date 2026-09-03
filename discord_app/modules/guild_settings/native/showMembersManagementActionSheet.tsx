// === Module 16410: showMembersManagementActionSheet ===

// Module 16410 (showMembersManagementActionSheet)
import closure_3 from "mergeGuildAvatar" /* 1921 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_settings/native/showMembersManagementActionSheet.tsx");

export default function showMembersManagementActionSheet(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  let obj = { label: null, onPress: null };
  const intl = guild(1233).intl;
  obj[0] = intl.string(guild(1233).t.pEasFX);
  obj[1] = function onPress() {
    let obj = closure_1_1(closure_1_2[2]);
    obj = { guild, selectedRoleId: closure_1, onFilterRoleId: closure_2 };
    obj.openLazy(guild(closure_1_2[4])(closure_1_2[3], closure_1_2.paths), "MembersFilter", obj);
  };
  const items = [obj];
  if (canPrune == null) {
    let tmpResult = tmp(6121);
    canPrune = tmpResult.canPruneGuildMembers(guild, authStore.getCurrentUser());
  }
  if (canPrune) {
    obj = { label: null, onPress: null, isDestructive: true };
    const intl2 = tmp(1233).intl;
    obj[0] = intl2.string(tmp(1233).t["2mIlKQ"]);
    obj[1] = function onPress() {
      let obj = closure_1_1(closure_1_2[2]);
      obj = { guild };
      obj.openLazy(guild(closure_1_2[4])(closure_1_2[6], closure_1_2.paths), "MembersPrune", obj);
    };
    items.push(obj);
  }
  tmpResult = tmp(5995);
  const result = tmpResult.showSimpleActionSheet({ key: "GuildSettingsMembersMore", options: items, hasIcons: false });
};
export const getMembersManagementActions = function getMembersManagementActions(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  let obj = { label: null, action: null };
  const intl = guild(1233).intl;
  obj[0] = intl.string(guild(1233).t.pEasFX);
  obj[1] = function action() {
    let obj = closure_1_1(closure_1_2[2]);
    obj = { guild, selectedRoleId: closure_1, onFilterRoleId: closure_2 };
    obj.openLazy(guild(closure_1_2[4])(closure_1_2[3], closure_1_2.paths), "MembersFilter", obj);
  };
  const items = [obj];
  if (canPrune == null) {
    canPrune = tmp(6121).canPruneGuildMembers(guild, authStore.getCurrentUser());
    const tmpResult = tmp(6121);
  }
  if (canPrune) {
    obj = { label: null, action: null, variant: "destructive" };
    const intl2 = tmp(1233).intl;
    obj[0] = intl2.string(tmp(1233).t["2mIlKQ"]);
    obj[1] = function action() {
      let obj = closure_1_1(closure_1_2[2]);
      obj = { guild };
      obj.openLazy(guild(closure_1_2[4])(closure_1_2[6], closure_1_2.paths), "MembersPrune", obj);
    };
    items.push(obj);
  }
  return items;
};