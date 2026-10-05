// === Module 17991: AdvancedInstantInvite ===

// Module 17991 (AdvancedInstantInvite)
import react_native from "react-native" /* 17 */;
import intl11 from "intl" /* 1126 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import GuildInviteFlags from "GuildInviteFlags" /* 8068 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let set;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ container: { flexGrow: 1 } });
const result = size.fileFinishedImporting("modules/guild_invite/native/AdvancedInstantInvite.tsx");

export default function AdvancedInstantInvite(maxAge) {
  let Stack;
  let TableRow;
  let TableRow4;
  let TableSwitchRow;
  let TableSwitchRow2;
  let canCreateApplicationBypassInvites;
  let channel;
  let channelIconComponent;
  let closure_7;
  let flags;
  let formatToPlainStringResult;
  let guild;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isManualApprovalGuild;
  let items4;
  let items5;
  let items6;
  let name;
  let obj10;
  let obj17;
  let obj19;
  let obj21;
  let obj8;
  let onChangeTemporary;
  let roleIds;
  let style;
  let temporary;
  let tmp11Result;
  let tmp29;
  let tmp33Result;
  let tmp33Result5;
  const f132858 = (value) => value.value === maxUses;
  ({ channel, guild } = maxAge);
  maxAge = maxAge.maxAge;
  const onChangeMaxAge = maxAge.onChangeMaxAge;
  const maxUsesOptions = maxAge.maxUsesOptions;
  const maxUses = maxAge.maxUses;
  const onChangeMaxUses = maxAge.onChangeMaxUses;
  ({ onChangeTemporary, flags } = maxAge);
  ({ onChangeFlags: closure_7, roleIds } = maxAge);
  const onChangeRoleIds = maxAge.onChangeRoleIds;
  let maxAgeOptions;
  let assignableRoles;
  ({ style, temporary } = maxAge);
  let tmp = onChangeRoleIds();
  if (null != channel) {
    let tmp4 = onChangeMaxAge;
    let obj = guild(onChangeMaxAge[6]);
    channelIconComponent = obj.getChannelIconComponent(channel);
  }
  let str = " ";
  if (null != channel) {
    let tmp6 = onChangeMaxAge;
    let obj2 = guild(onChangeMaxAge[7]);
    str = obj2.computeChannelName(channel, flags, onChangeMaxUses, true);
  }
  const obj3 = guild(onChangeMaxAge[8]);
  const inviteApplicationBypassInfo = obj3.useInviteApplicationBypassInfo(guild);
  ({ isManualApprovalGuild, canCreateApplicationBypassInvites } = inviteApplicationBypassInfo);
  let id;
  const useMaxAgeOptions = guild(onChangeMaxAge[9]).useMaxAgeOptions;
  guild(onChangeMaxAge[9]);
  if (guild != null) {
    id = guild.id;
  }
  maxAgeOptions = useMaxAgeOptions({ guildId: id, location: "AdvancedInstantInvite" });
  let tmp18 = guild;
  const tmp17 = maxAge(onChangeMaxAge[10]);
  if (guild == null) {
    tmp18 = null;
  }
  const tmp17Result = tmp17(tmp18);
  assignableRoles = tmp17Result;
  const items = [guild, tmp17Result, roleIds, onChangeRoleIds];
  const items1 = [, , ];
  const tmp19 = tmp17Result.length > 0;
  items1[0] = maxAge;
  items1[1] = maxAgeOptions;
  items1[2] = onChangeMaxAge;
  const callback = maxUsesOptions.useCallback(() => {
    const tmp = null != guild && null != onChangeRoleIds;
    if (tmp) {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { assignableRoles, selectedRoleIds: roleIds, onSave: onChangeRoleIds };
      obj.openLazy(asyncRequire(17994, dependencyMap.paths), "SelectInviteRolesActionSheet", obj2, "stack");
    }
  }, items);
  const items2 = [maxUses, maxUsesOptions, onChangeMaxUses];
  const callback1 = maxUsesOptions.useCallback(() => {
    let intl;
    if (null != onChangeMaxAge) {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const tmp6 = asyncRequire(17995, dependencyMap.paths);
      const obj = { title: intl.string(intl11.t.gKmKP0), options: maxAgeOptions, value: maxAge, onChange: tmp };
      intl = intl11.intl;
      openLazy(tmp6, "InviteMaxAgeActionSheet", obj, "stack");
    }
  }, items1);
  const items3 = [tmp17Result, roleIds];
  const callback2 = maxUsesOptions.useCallback(() => {
    let intl;
    if (null != onChangeMaxUses) {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const tmp6 = asyncRequire(17995, dependencyMap.paths);
      const obj = { title: intl.string(intl11.t["+3vH1h"]), options: maxUsesOptions, value: maxUses, onChange: tmp };
      intl = intl11.intl;
      openLazy(tmp6, "InviteMaxUsesActionSheet", obj, "stack");
    }
  }, items2);
  const memo = maxUsesOptions.useMemo(() => {
    set = new Set(assignableRoles.map((id) => id.id));
    return roleIds.filter((item) => set.has(item)).length;
  }, items3);
  if (0 !== memo) {
    let intl = guild(tmp12[15]).intl;
    const obj4 = { count: memo };
    formatToPlainStringResult = intl.formatToPlainString(guild(onChangeMaxAge[15]).t["eXU3/V"], obj4);
  }
  const found = maxAgeOptions.find(f132858);
  let label;
  if (found != null) {
    label = found.label;
  }
  const found1 = maxUsesOptions.find(f132858);
  let label1;
  if (found1 != null) {
    label1 = found1.label;
  }
  if (null != guild) {
    const obj5 = { guild, size: guild(onChangeMaxAge[16]).GuildIconSizes.SMALL_32 };
    const tmp16Result = maxAge(onChangeMaxAge[16]);
    tmp29 = closure_7(tmp16Result, obj5);
  } else if (null != channelIconComponent) {
    const obj6 = { IconComponent: channelIconComponent };
    tmp29 = closure_7(guild(tmp12[17]).TableRowIcon, obj6);
  }
  const obj7 = { style: items4, children: roleIds(Stack, obj8) };
  items4 = [tmp.container, style];
  obj8 = { spacing: maxAge(onChangeMaxAge[19]).space.PX_24, children: items5 };
  Stack = guild(tmp12[18]).Stack;
  const obj9 = { title: intl2.string(guild(onChangeMaxAge[15]).t.LUo0Q8), hasIcons: null != tmp29, children: closure_7(TableRow, obj10) };
  const TableRowGroup = guild(tmp12[20]).TableRowGroup;
  intl2 = guild(tmp12[15]).intl;
  obj10 = { icon: tmp29, label: str, subLabel: name };
  name = undefined;
  TableRow = guild(tmp12[21]).TableRow;
  const tmp34 = maxUses;
  if (guild != null) {
    name = guild.name;
  }
  items5 = [closure_7(TableRowGroup, obj9), , , , ];
  const obj11 = { title: intl3.string(guild(onChangeMaxAge[15]).t["4QuV7G"]), hasIcons: false, children: items6 };
  const TableRowGroup2 = guild(tmp12[20]).TableRowGroup;
  intl3 = guild(tmp12[15]).intl;
  const obj12 = { label: intl4.string(guild(onChangeMaxAge[15]).t.gKmKP0), trailing: tmp33Result, arrow: true, onPress: callback1, disabled: null == onChangeMaxAge };
  const TableRow2 = guild(tmp12[21]).TableRow;
  intl4 = guild(tmp12[15]).intl;
  tmp33Result = undefined;
  if (null != label) {
    const obj13 = { text: label };
    tmp33Result = closure_7(guild(tmp12[21]).TableRow.TrailingText, obj13);
  }
  items6 = [closure_7(TableRow2, obj12), ];
  const obj14 = { label: intl5.string(guild(onChangeMaxAge[15]).t["+3vH1h"]), trailing: tmp33Result5, arrow: true, onPress: callback2, disabled: null == onChangeMaxUses };
  const TableRow3 = guild(tmp12[21]).TableRow;
  intl5 = guild(tmp12[15]).intl;
  tmp33Result5 = undefined;
  if (null != label1) {
    const obj15 = { text: label1 };
    tmp33Result5 = closure_7(guild(tmp12[21]).TableRow.TrailingText, obj15);
  }
  items6[1] = closure_7(TableRow3, obj14);
  items5[1] = roleIds(TableRowGroup2, obj11);
  let tmp33Result6 = null;
  if (tmp19) {
    const obj16 = { hasIcons: false, children: closure_7(TableRow4, obj17) };
    const TableRowGroup3 = guild(tmp12[20]).TableRowGroup;
    obj17 = { label: intl6.string(guild(onChangeMaxAge[15]).t.rPYJxL), arrow: true, subLabel: formatToPlainStringResult, onPress: callback };
    TableRow4 = guild(tmp12[21]).TableRow;
    intl6 = guild(tmp12[15]).intl;
    tmp33Result6 = closure_7(TableRowGroup3, obj16);
  }
  items5[2] = tmp33Result6;
  let tmp33Result7 = !isManualApprovalGuild && null != onChangeTemporary;
  if (tmp33Result7) {
    const obj18 = { hasIcons: false, helperText: intl7.string(guild(onChangeMaxAge[15]).t.A53l87), children: closure_7(TableSwitchRow, obj19) };
    const TableRowGroup4 = guild(tmp12[20]).TableRowGroup;
    intl7 = guild(tmp12[15]).intl;
    obj19 = { label: intl8.string(guild(onChangeMaxAge[15]).t.dy1ico), value: temporary, onValueChange: onChangeTemporary };
    TableSwitchRow = guild(tmp12[22]).TableSwitchRow;
    intl8 = guild(tmp12[15]).intl;
    tmp33Result7 = closure_7(TableRowGroup4, obj18);
  }
  items5[3] = tmp33Result7;
  let tmp33Result8 = null;
  if (canCreateApplicationBypassInvites) {
    const obj20 = { hasIcons: false, helperText: intl9.string(guild(onChangeMaxAge[15]).t["jvd/LF"]), children: closure_7(TableSwitchRow2, obj21) };
    const TableRowGroup5 = guild(tmp12[20]).TableRowGroup;
    intl9 = guild(tmp12[15]).intl;
    obj21 = {
      label: intl10.string(guild(onChangeMaxAge[15]).t["1i1bUl"]),
      value: tmp11Result.hasFlag(flags, guild(onChangeMaxAge[24]).GuildInviteFlags.IS_APPLICATION_BYPASS),
      onValueChange(setting) {
          const obj = FlagUtils;
          return closure_7(obj.setFlag(flags, GuildInviteFlags.GuildInviteFlags.IS_APPLICATION_BYPASS, setting));
        }
    };
    TableSwitchRow2 = guild(tmp12[22]).TableSwitchRow;
    intl10 = guild(tmp12[15]).intl;
    tmp11Result = guild(onChangeMaxAge[23]);
    tmp33Result8 = closure_7(TableRowGroup5, obj20);
  }
  items5[4] = tmp33Result8;
  return closure_7(tmp34, obj7);
};