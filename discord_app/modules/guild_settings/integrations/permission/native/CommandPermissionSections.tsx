// === Module 20074: CommandPermissionSections ===

// Module 20074 (CommandPermissionSections)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import PermissionUtils from "PermissionUtils" /* 4980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5695 */;
import ChannelSettingsPermissionsOverrideCheckboxDefault from "ChannelSettingsPermissionsOverrideCheckbox" /* 19190 */;
import GuildSettingsModalIntegrationEmptyCardDefault from "GuildSettingsModalIntegrationEmptyCard" /* 20005 */;
import useCommandPermissionListDefault from "useCommandPermissionList" /* 20075 */;
import useCommandPermissionEntryDisplay from "useCommandPermissionEntryDisplay" /* 20076 */;
import useAddCommandPermissions from "useAddCommandPermissions" /* 20082 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;

require = fn;
function PermissionRow(display) {
  display = display.display;
  ({ label, subLabel } = display);
  const overwrite = display.overwrite;
  ({ onChange: importDefault, onRemove: dependencyMap } = display);
  ({ guild, commandId, hasAccessToMutatePermissions } = display);
  const commandPermissionEntryRestrictions = overwrite(20075).getCommandPermissionEntryRestrictions({ overwrite, guildId: guild.id, commandId, hasAccessToMutatePermissions });
  ({ isUpdateRestricted, lockReason } = commandPermissionEntryRestrictions);
  const obj3 = { icon: display.icon, label, subLabel: null, trailing: null };
  let tmp5 = subLabel;
  if (isUpdateRestricted) {
    tmp5 = subLabel;
    if (null != lockReason) {
      tmp5 = lockReason;
    }
  }
  obj3.subLabel = tmp5;
  const obj4 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_8, children: null };
  let tmp4Result = null;
  if (commandPermissionEntryRestrictions.isRemovable) {
    const obj5 = { icon: closure_4(tmp(5750).TrashIcon, { size: "sm" }), size: "sm", accessibilityLabel: null, variant: "icon-only", onPress: null };
    const intl = tmp(1112).intl;
    obj5.accessibilityLabel = intl.string(tmp(1112).t.mT0CQM);
    obj5.onPress = function onPress() {
      return dependencyMap(overwrite);
    };
    tmp4Result = closure_4(tmp(7944).IconButton, obj5);
  }
  items = [tmp4Result, ];
  const obj6 = { permissionTitle: label, value: null, states: null, disabled: null, onValueChange: null };
  const obj = overwrite(20075);
  const obj2 = { overwrite, guildId: guild.id, commandId, hasAccessToMutatePermissions };
  const tmpResult = overwrite(4980);
  obj6.value = overwrite.permission ? tmpResult.ALLOW : tmpResult.DENY;
  obj6.states = items;
  obj6.disabled = isUpdateRestricted;
  obj6.onValueChange = function onValueChange(arg0) {
    const tmp = arg0 === PermissionUtils.ALLOW;
    if (tmp !== overwrite.permission) {
      importDefault(tmp2, tmp);
    }
  };
  items[1] = closure_4(ChannelSettingsPermissionsOverrideCheckboxDefault, obj6);
  obj4.children = items;
  obj3.trailing = closure_5(overwrite(6115).Stack, obj4);
  return closure_4(overwrite(6144).TableRow, obj3);
}
function ChannelRow(guild) {
  const channelEntryDisplay = useCommandPermissionEntryDisplay.useChannelEntryDisplay(guild.guild, guild.overwrite.id);
  let tmp2 = null;
  if (null != channelEntryDisplay) {
    const obj2 = { display: channelEntryDisplay };
    const merged = Object.assign(guild);
    tmp2 = React4(PermissionRow, obj2);
  }
  return tmp2;
}
function RoleRow(guild) {
  const roleEntryDisplay = useCommandPermissionEntryDisplay.useRoleEntryDisplay(guild.guild, guild.overwrite.id);
  let tmp2 = null;
  if (null != roleEntryDisplay) {
    const obj2 = { display: roleEntryDisplay };
    const merged = Object.assign(guild);
    tmp2 = React4(PermissionRow, obj2);
  }
  return tmp2;
}
function UserRow(guild) {
  const userEntryDisplay = useCommandPermissionEntryDisplay.useUserEntryDisplay(guild.guild, guild.overwrite.id);
  let tmp2 = null;
  if (null != userEntryDisplay) {
    const obj2 = { display: userEntryDisplay };
    const merged = Object.assign(guild);
    tmp2 = React4(PermissionRow, obj2);
  }
  return tmp2;
}
function EntryRow(overwrite) {
  const type = overwrite.overwrite.type;
  if (ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL === type) {
    const obj2 = {};
    const merged = Object.assign(overwrite);
    return React4(ChannelRow, obj2);
  } else if (ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE === type) {
    const obj3 = {};
    const merged1 = Object.assign(overwrite);
    return React4(RoleRow, obj3);
  } else if (ApplicationCommandTypes.ApplicationCommandPermissionType.USER === type) {
    const obj = {};
    const merged2 = Object.assign(overwrite);
    return React4(UserRow, obj);
  }
}
function Section(guild) {
  guild = guild.guild;
  ({ commandId: importDefault, addDisabledReason, hasAccessToMutatePermissions: dependencyMap } = guild);
  c3 = undefined;
  c4 = undefined;
  ({ title, noneSelectedText, addText, overwrites, editPermissions, onAdd } = guild);
  const tmp = closure_8();
  ({ sortedOverwrites, onRemove: c3, onChange: c4 } = useCommandPermissionListDefault(guild.id, overwrites, editPermissions));
  const obj = { spacing: nativeDefault.space.PX_8, children: null };
  const obj2 = { direction: "horizontal", align: "center", justify: "space-between", spacing: nativeDefault.space.PX_8, children: null };
  items = [c4(guild(6140).TableRowGroupTitle, { title, style: tmp.sectionTitle }), ];
  const obj4 = { accessibilityRole: "button", accessibilityState: { disabled: null != addDisabledReason }, disabled: null != addDisabledReason, onPress: onAdd, children: null };
  let str = "text-brand";
  if (null != addDisabledReason) {
    str = "text-muted";
  }
  obj4.children = c4(guild(5634).Text, { variant: "body-sm/medium", color: str, children: addText });
  items[1] = c4(guild(6152).PressableOpacity, obj4);
  obj2.children = items;
  const items1 = [closure_5(guild(6115).Stack, obj2), , ];
  if (sortedOverwrites.length > 0) {
    const obj5 = { hasIcons: true, children: sortedOverwrites.map((overwrite) => React4(EntryRow, { guild, commandId, overwrite, hasAccessToMutatePermissions, onChange, onRemove }, overwrite.id)) };
    let tmp8Result = tmp8(tmp7(6140).TableRowGroup, obj5);
  } else {
    const obj6 = { text: noneSelectedText };
    tmp8Result = tmp8(GuildSettingsModalIntegrationEmptyCardDefault, obj6);
  }
  items1[1] = tmp8Result;
  let tmp8Result2 = null;
  if (null != addDisabledReason) {
    const obj7 = { variant: "body-sm/normal", color: "text-muted", children: addDisabledReason };
    tmp8Result2 = tmp8(tmp7(5634).Text, obj7);
  }
  items1[2] = tmp8Result2;
  obj.children = items1;
  return closure_5(guild(6115).Stack, obj);
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: closure_6 } = jsxProd);
let items = [fn(4980).DENY, fn(4980).ALLOW];
const createStyles = fn(5043);
let closure_8 = createStyles.createStyles({ bannerText: { flexShrink: 1 }, sectionTitle: { flexShrink: 1, marginBottom: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/native/CommandPermissionSections.tsx");

export default function CommandPermissionSections(selectedPermissionCount) {
  ({ commandId, guildId } = selectedPermissionCount);
  selectedPermissionCount = selectedPermissionCount.selectedPermissionCount;
  let channels;
  let membersAndRoles;
  defaultMemberPermissions = undefined;
  ({ applicationId, editedTargetPermissions, originalApplicationPermissions, originalCommandPermissions } = selectedPermissionCount);
  const tmp = closure_8();
  items = [membersAndRoles];
  const items1 = [guildId];
  const stateFromStores = guildId(channels[19]).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  let obj2 = { applicationId, commandId, guildId, editedTargetPermissions, originalApplicationPermissions, originalCommandPermissions, selectedPermissionCount, onLockout: null };
  let obj = guildId(channels[19]);
  obj2.onLockout = selectedPermissionCount(channels[21]);
  const tmp6Result = selectedPermissionCount(channels[20])(obj2);
  channels = tmp6Result.channels;
  membersAndRoles = tmp6Result.membersAndRoles;
  const editPermissions = tmp6Result.editPermissions;
  ({ hasAccessToMutatePermissions, overwritesOverLimit, addDisabledReason, defaultMemberPermissions } = tmp6Result);
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp9 = null;
    if (overwritesOverLimit > 0) {
      const obj3 = { type: "warning", message: null, role: "status" };
      let intl = guildId(tmp3[11]).intl;
      const obj4 = { removeCount: overwritesOverLimit };
      obj3.message = intl.format(guildId(tmp3[11]).t["B/dFBH"], obj4);
      tmp9 = editPermissions(guildId(tmp3[25]).InlineNotice, obj3);
    }
    const items2 = [tmp9, , , ];
    let tmp10 = null;
    if (null != defaultMemberPermissions) {
      const obj5 = { children: null };
      const obj6 = { direction: "horizontal", align: "center", spacing: tmp5(tmp3[8]).space.PX_12, children: null };
      const obj7 = { size: "sm", color: tmp5(tmp3[8]).colors.ICON_SUBTLE };
      const items3 = [editPermissions(guildId(tmp3[27]).CircleInformationIcon, obj7), , ];
      const obj8 = { variant: "body-sm/normal", style: tmp.bannerText, children: null };
      let intl2 = guildId(tmp3[11]).intl;
      obj8.children = intl2.format(guildId(tmp3[11]).t["2889Gq"], {});
      items3[1] = editPermissions(guildId(tmp3[17]).Text, obj8);
      const obj9 = { size: "sm", variant: "secondary", text: null, onPress: null };
      const intl3 = guildId(tmp3[11]).intl;
      obj9.text = intl3.string(guildId(tmp3[11]).t["HO/oXl"]);
      obj9.onPress = function onPress() {
        return ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(20086, dependencyMap.paths), "DefaultMemberPermissions", { defaultMemberPermissions, guildId });
      };
      items3[2] = editPermissions(guildId(tmp3[28]).Button, obj9);
      obj6.children = items3;
      obj5.children = tmp16(guildId(tmp3[7]).Stack, obj6);
      tmp10 = editPermissions(guildId(tmp3[26]).Card, obj5);
    }
    items2[1] = tmp10;
    const obj10 = { guild: stateFromStores, commandId, title: null, noneSelectedText: null, addText: null, addDisabledReason: null, overwrites: null, editPermissions: null, hasAccessToMutatePermissions: null, onAdd: null };
    if (null == commandId) {
      const intl5 = guildId(tmp3[11]).intl;
      let stringResult = intl5.string(guildId(tmp3[11]).t["vPWe++"]);
    } else {
      const intl4 = guildId(tmp3[11]).intl;
      stringResult = intl4.string(guildId(tmp3[11]).t["1jLVGB"]);
    }
    obj10.title = stringResult;
    const intl6 = guildId(tmp3[11]).intl;
    obj10.noneSelectedText = intl6.string(guildId(tmp3[11]).t.C0rYfq);
    const intl7 = guildId(tmp3[11]).intl;
    obj10.addText = intl7.string(guildId(tmp3[11]).t["56jRn8"]);
    obj10.addDisabledReason = addDisabledReason;
    obj10.overwrites = membersAndRoles;
    obj10.editPermissions = editPermissions;
    obj10.hasAccessToMutatePermissions = hasAccessToMutatePermissions;
    obj10.onAdd = function onAdd() {
      const intl = util.intl;
      const intl2 = util.intl;
      const stringResult = intl.string(util.t["56jRn8"]);
      const stringResult1 = intl2.string(util.t.wAfO5Y);
      const obj2 = { editPermissions, guildId, hasMemberSearch: true, title: stringResult, overwrittenKeys: null, search: null, searchPlaceholder: null, selectedPermissionCount: null };
      const obj = ActionSheetActionCreatorsDefault;
      obj2.overwrittenKeys = Object.keys(membersAndRoles);
      obj2.search = useAddCommandPermissions.useCommandPermissionMemberRoleSearch;
      obj2.searchPlaceholder = stringResult1;
      obj2.selectedPermissionCount = selectedPermissionCount;
      obj.openLazy(asyncRequireImpl(20081, dependencyMap.paths), "AddCommandPermissions", obj2);
    };
    items2[2] = editPermissions(Section, obj10);
    const obj11 = { guild: stateFromStores, commandId, title: null, noneSelectedText: null, addText: null, addDisabledReason: null, overwrites: null, editPermissions: null, hasAccessToMutatePermissions: null, onAdd: null };
    if (null == commandId) {
      const intl9 = guildId(tmp3[11]).intl;
      let stringResult1 = intl9.string(guildId(tmp3[11]).t.OGiMXJ);
    } else {
      const intl8 = guildId(tmp3[11]).intl;
      stringResult1 = intl8.string(guildId(tmp3[11]).t.Ujbaqm);
    }
    const obj12 = { children: null };
    obj11.title = stringResult1;
    const intl10 = guildId(tmp3[11]).intl;
    obj11.noneSelectedText = intl10.string(guildId(tmp3[11]).t["UBJhC/"]);
    const intl11 = guildId(tmp3[11]).intl;
    obj11.addText = intl11.string(guildId(tmp3[11]).t["i1c+kV"]);
    obj11.addDisabledReason = addDisabledReason;
    obj11.overwrites = channels;
    obj11.editPermissions = editPermissions;
    obj11.hasAccessToMutatePermissions = hasAccessToMutatePermissions;
    obj11.onAdd = function onAdd() {
      const intl = util.intl;
      const intl2 = util.intl;
      const stringResult = intl.string(util.t["i1c+kV"]);
      const stringResult1 = intl2.string(util.t["TLQo/i"]);
      const obj2 = { editPermissions, guildId, hasMemberSearch: false, title: stringResult, overwrittenKeys: null, search: null, searchPlaceholder: null, selectedPermissionCount: null };
      const obj = ActionSheetActionCreatorsDefault;
      obj2.overwrittenKeys = Object.keys(channels);
      obj2.search = useAddCommandPermissions.useCommandPermissionChannelSearch;
      obj2.searchPlaceholder = stringResult1;
      obj2.selectedPermissionCount = selectedPermissionCount;
      obj.openLazy(asyncRequireImpl(20081, dependencyMap.paths), "AddCommandPermissions", obj2);
    };
    items2[3] = editPermissions(Section, obj11);
    obj12.children = items2;
    return defaultMemberPermissions(closure_6, obj12);
  }
  const tmp6 = selectedPermissionCount(channels[20]);
};