// discord_app/modules/guild_settings/native/showMembersManagementActionSheet.tsx
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/guild_settings/native/showMembersManagementActionSheet.tsx");

export default function showMembersManagementActionSheet(guild) {
  let canPrune;
  let dependencyMap;
  let importDefault;
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  let obj = { label: null, onPress: null };
  const intl = guild(1236).intl;
  obj[0] = intl.string(guild(1236).t.pEasFX);
  obj[1] = function onPress() {
    let obj = outer1_1(outer1_2[2]);
    obj = { guild, selectedRoleId: closure_1, onFilterRoleId: closure_2 };
    obj.openLazy(guild(outer1_2[4])(outer1_2[3], outer1_2.paths), "MembersFilter", obj);
  };
  const items = [obj];
  if (canPrune == null) {
    let tmpResult = tmp(5885);
    canPrune = tmpResult.canPruneGuildMembers(guild, authStore.getCurrentUser());
  }
  if (canPrune) {
    obj = { label: null, onPress: null, isDestructive: true };
    const intl2 = tmp(1236).intl;
    obj[0] = intl2.string(tmp(1236).t["2mIlKQ"]);
    obj[1] = function onPress() {
      let obj = outer1_1(outer1_2[2]);
      obj = { guild };
      obj.openLazy(guild(outer1_2[4])(outer1_2[6], outer1_2.paths), "MembersPrune", obj);
    };
    items.push(obj);
  }
  tmpResult = tmp(5761);
  const result = tmpResult.showSimpleActionSheet({ key: "GuildSettingsMembersMore", options: items, hasIcons: false });
};
export const getMembersManagementActions = function getMembersManagementActions(guild) {
  let canPrune;
  let dependencyMap;
  let importDefault;
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  let obj = { label: null, action: null };
  const intl = guild(1236).intl;
  obj[0] = intl.string(guild(1236).t.pEasFX);
  obj[1] = function action() {
    let obj = outer1_1(outer1_2[2]);
    obj = { guild, selectedRoleId: closure_1, onFilterRoleId: closure_2 };
    obj.openLazy(guild(outer1_2[4])(outer1_2[3], outer1_2.paths), "MembersFilter", obj);
  };
  const items = [obj];
  if (canPrune == null) {
    canPrune = tmp(5885).canPruneGuildMembers(guild, authStore.getCurrentUser());
    const tmpResult = tmp(5885);
  }
  if (canPrune) {
    obj = { label: null, action: null, variant: "destructive" };
    const intl2 = tmp(1236).intl;
    obj[0] = intl2.string(tmp(1236).t["2mIlKQ"]);
    obj[1] = function action() {
      let obj = outer1_1(outer1_2[2]);
      obj = { guild };
      obj.openLazy(guild(outer1_2[4])(outer1_2[6], outer1_2.paths), "MembersPrune", obj);
    };
    items.push(obj);
  }
  return items;
};