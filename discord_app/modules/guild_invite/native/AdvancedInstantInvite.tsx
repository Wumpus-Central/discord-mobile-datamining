// === Module 18164: AdvancedInstantInvite ===

// Module 18164 (AdvancedInstantInvite)
import util from "util" /* 1115 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import GuildInviteFlags from "GuildInviteFlags" /* 8624 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4371 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4722);
let closure_9 = createStyles.createStyles({ container: { flexGrow: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_invite/native/AdvancedInstantInvite.tsx");

export default function AdvancedInstantInvite(maxAge) {
  ({ channel, guild } = maxAge);
  maxAge = maxAge.maxAge;
  const onChangeMaxAge = maxAge.onChangeMaxAge;
  const maxUsesOptions = maxAge.maxUsesOptions;
  let maxUses = maxAge.maxUses;
  const onChangeMaxUses = maxAge.onChangeMaxUses;
  ({ onChangeTemporary, flags } = maxAge);
  ({ onChangeFlags: closure_7, roleIds } = maxAge);
  const onChangeRoleIds = maxAge.onChangeRoleIds;
  let maxAgeOptions;
  let assignableRoles;
  ({ style, temporary } = maxAge);
  if (null != channel) {
    const channelIconComponent = maxUses(onChangeMaxAge[6]).getChannelIconComponent(channel);
    let obj = maxUses(onChangeMaxAge[6]);
  }
  let str = " ";
  if (null != channel) {
    let obj2 = maxUses(onChangeMaxAge[7]);
    str = obj2.computeChannelName(channel, flags, onChangeMaxUses, true);
  }
  let tmp = onChangeRoleIds();
  const inviteApplicationBypassInfo = maxUses(onChangeMaxAge[8]).useInviteApplicationBypassInfo(guild);
  ({ isManualApprovalGuild, canCreateApplicationBypassInvites } = inviteApplicationBypassInfo);
  const obj3 = maxUses(onChangeMaxAge[8]);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  maxAgeOptions = maxUses(onChangeMaxAge[9]).useMaxAgeOptions({ guildId: id, location: "AdvancedInstantInvite" });
  let tmp17 = guild;
  const obj4 = maxUses(onChangeMaxAge[9]);
  if (guild == null) {
    tmp17 = null;
  }
  const tmp16Result = maxAge(onChangeMaxAge[10])(tmp17);
  assignableRoles = tmp16Result;
  const items = [guild, tmp16Result, roleIds, onChangeRoleIds];
  const items1 = [maxAge, maxAgeOptions, onChangeMaxAge];
  const callback = maxUsesOptions.useCallback(() => {
    let tmp = null != maxUses;
    if (tmp) {
      tmp = null != onChangeRoleIds;
    }
    if (tmp) {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { assignableRoles, selectedRoleIds: roleIds, onSave: onChangeRoleIds };
      obj.openLazy(asyncRequireImpl(18167, dependencyMap.paths), "SelectInviteRolesActionSheet", obj2, "stack");
    }
  }, items);
  const items2 = [maxUses, maxUsesOptions, onChangeMaxUses];
  const callback1 = maxUsesOptions.useCallback(() => {
    if (null != onChangeMaxAge) {
      const obj = ActionSheetActionCreatorsDefault;
      const tmp5 = asyncRequireImpl(18168, dependencyMap.paths);
      const obj2 = { title: null, options: null, value: null, onChange: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.gKmKP0);
      obj2.options = maxAgeOptions;
      obj2.value = maxAge;
      obj2.onChange = tmp;
      obj.openLazy(tmp5, "InviteMaxAgeActionSheet", obj2, "stack");
    }
  }, items1);
  const items3 = [tmp16Result, roleIds];
  const callback2 = maxUsesOptions.useCallback(() => {
    if (null != onChangeMaxUses) {
      const obj = ActionSheetActionCreatorsDefault;
      const tmp5 = asyncRequireImpl(18168, dependencyMap.paths);
      const obj2 = { title: null, options: null, value: null, onChange: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t["+3vH1h"]);
      obj2.options = maxUsesOptions;
      obj2.value = maxUses;
      obj2.onChange = tmp;
      obj.openLazy(tmp5, "InviteMaxUsesActionSheet", obj2, "stack");
    }
  }, items2);
  const memo = maxUsesOptions.useMemo(() => {
    const set = new Set(assignableRoles.map((id) => id.id));
    return roleIds.filter((item) => set.has(item)).length;
  }, items3);
  if (0 !== memo) {
    let intl = tmp11(tmp12[15]).intl;
    const obj5 = { count: memo };
    const formatToPlainStringResult = intl.formatToPlainString(tmp11(tmp12[15]).t["eXU3/V"], obj5);
  }
  maxUses = maxAge;
  const found = maxAgeOptions.find((value) => value.value === maxUses);
  let label;
  if (found != null) {
    label = found.label;
  }
  const found1 = maxUsesOptions.find((value) => value.value === maxUses);
  let label1;
  if (found1 != null) {
    label1 = found1.label;
  }
  if (null != guild) {
    const obj6 = { guild, size: tmp11(tmp12[16]).GuildIconSizes.SMALL_32 };
    let tmp28 = closure_7(tmp15(tmp12[16]), obj6);
    const tmp15Result = tmp15(tmp12[16]);
  } else if (null != channelIconComponent) {
    const obj7 = { IconComponent: channelIconComponent };
    tmp28 = closure_7(tmp11(tmp12[17]).TableRowIcon, obj7);
  }
  const obj8 = { style: null, children: null };
  const items4 = [tmp.container, style];
  obj8.style = items4;
  const obj9 = { spacing: maxAge(onChangeMaxAge[19]).space.PX_24, children: null };
  const obj10 = { title: null, hasIcons: null, children: null };
  const intl2 = tmp11(tmp12[15]).intl;
  obj10.title = intl2.string(maxUses(onChangeMaxAge[15]).t.LUo0Q8);
  obj10.hasIcons = null != tmp28;
  const obj11 = { icon: tmp28, label: str, subLabel: null };
  let name;
  if (guild != null) {
    name = guild.name;
  }
  obj11.subLabel = name;
  obj10.children = closure_7(maxUses(onChangeMaxAge[21]).TableRow, obj11);
  const items5 = [closure_7(maxUses(onChangeMaxAge[20]).TableRowGroup, obj10), , , , ];
  const obj12 = { title: null, hasIcons: false, children: null };
  const intl3 = tmp11(tmp12[15]).intl;
  obj12.title = intl3.string(maxUses(onChangeMaxAge[15]).t["4QuV7G"]);
  const obj13 = { label: null, trailing: null, arrow: true, onPress: null, disabled: null };
  const intl4 = tmp11(tmp12[15]).intl;
  obj13.label = intl4.string(maxUses(onChangeMaxAge[15]).t.gKmKP0);
  let tmp32Result;
  if (null != label) {
    const obj14 = { text: label };
    tmp32Result = closure_7(tmp11(tmp12[21]).TableRow.TrailingText, obj14);
  }
  obj13.trailing = tmp32Result;
  obj13.onPress = callback1;
  obj13.disabled = null == onChangeMaxAge;
  const items6 = [closure_7(maxUses(onChangeMaxAge[21]).TableRow, obj13), ];
  const obj15 = { label: null, trailing: null, arrow: true, onPress: null, disabled: null };
  const intl5 = tmp11(tmp12[15]).intl;
  obj15.label = intl5.string(maxUses(onChangeMaxAge[15]).t["+3vH1h"]);
  let tmp32Result5;
  if (null != label1) {
    const obj16 = { text: label1 };
    tmp32Result5 = closure_7(tmp11(tmp12[21]).TableRow.TrailingText, obj16);
  }
  obj15.trailing = tmp32Result5;
  obj15.onPress = callback2;
  obj15.disabled = null == onChangeMaxUses;
  items6[1] = closure_7(maxUses(onChangeMaxAge[21]).TableRow, obj15);
  obj12.children = items6;
  items5[1] = roleIds(maxUses(onChangeMaxAge[20]).TableRowGroup, obj12);
  let tmp32Result6 = null;
  if (tmp18) {
    const obj17 = { hasIcons: false, children: null };
    const obj18 = { label: null, arrow: true, subLabel: null, onPress: null };
    const intl6 = tmp11(tmp12[15]).intl;
    obj18.label = intl6.string(tmp11(tmp12[15]).t.rPYJxL);
    obj18.subLabel = formatToPlainStringResult;
    obj18.onPress = callback;
    obj17.children = closure_7(tmp11(tmp12[21]).TableRow, obj18);
    tmp32Result6 = closure_7(tmp11(tmp12[20]).TableRowGroup, obj17);
  }
  items5[2] = tmp32Result6;
  let tmp32Result7 = !isManualApprovalGuild;
  if (!isManualApprovalGuild) {
    tmp32Result7 = null != onChangeTemporary;
  }
  if (tmp32Result7) {
    const obj19 = { hasIcons: false, helperText: null, children: null };
    const intl7 = tmp11(tmp12[15]).intl;
    obj19.helperText = intl7.string(tmp11(tmp12[15]).t.A53l87);
    const obj20 = { label: null, value: null, onValueChange: null };
    const intl8 = tmp11(tmp12[15]).intl;
    obj20.label = intl8.string(tmp11(tmp12[15]).t.dy1ico);
    obj20.value = temporary;
    obj20.onValueChange = onChangeTemporary;
    obj19.children = closure_7(tmp11(tmp12[22]).TableSwitchRow, obj20);
    tmp32Result7 = closure_7(tmp11(tmp12[20]).TableRowGroup, obj19);
  }
  items5[3] = tmp32Result7;
  let tmp32Result8 = null;
  if (canCreateApplicationBypassInvites) {
    const obj21 = { hasIcons: false, helperText: null, children: null };
    const intl9 = tmp11(tmp12[15]).intl;
    obj21.helperText = intl9.string(tmp11(tmp12[15]).t["jvd/LF"]);
    const obj22 = { label: null, value: null, onValueChange: null };
    const intl10 = tmp11(tmp12[15]).intl;
    obj22.label = intl10.string(tmp11(tmp12[15]).t["1i1bUl"]);
    obj22.value = tmp11(tmp12[23]).hasFlag(flags, tmp11(tmp12[24]).GuildInviteFlags.IS_APPLICATION_BYPASS);
    obj22.onValueChange = function onValueChange(setting) {
      return closure_1_7(FlagUtils.setFlag(flags, GuildInviteFlags.GuildInviteFlags.IS_APPLICATION_BYPASS, setting));
    };
    obj21.children = closure_7(tmp11(tmp12[22]).TableSwitchRow, obj22);
    tmp32Result8 = closure_7(tmp11(tmp12[20]).TableRowGroup, obj21);
    const tmp11Result = tmp11(tmp12[23]);
  }
  items5[4] = tmp32Result8;
  obj9.children = items5;
  obj8.children = roleIds(maxUses(onChangeMaxAge[18]).Stack, obj9);
  return closure_7(maxUses, obj8);
};