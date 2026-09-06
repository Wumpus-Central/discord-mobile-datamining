// === Module 17795: AdvancedInstantInvite ===

// Module 17795 (AdvancedInstantInvite)
import util from "util" /* 1114 */;
import FlagUtils from "FlagUtils" /* 1384 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import GuildInviteFlags from "GuildInviteFlags" /* 8392 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
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
    let obj = maxUses(onChangeMaxAge[6]);
    const channelIconComponent = obj.getChannelIconComponent(channel);
  }
  let str = " ";
  if (null != channel) {
    let obj1 = maxUses(onChangeMaxAge[7]);
    str = obj1.computeChannelName(channel, flags, onChangeMaxUses, true);
  }
  let obj2 = maxUses(onChangeMaxAge[8]);
  const inviteApplicationBypassInfo = obj2.useInviteApplicationBypassInfo(guild);
  ({ isManualApprovalGuild, canCreateApplicationBypassInvites } = inviteApplicationBypassInfo);
  let obj3 = maxUses(onChangeMaxAge[9]);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  maxAgeOptions = obj3.useMaxAgeOptions({ guildId: id, location: "AdvancedInstantInvite" });
  let tmp17 = guild;
  let tmp = onChangeRoleIds();
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
      const obj = { assignableRoles, selectedRoleIds: roleIds, onSave: onChangeRoleIds };
      obj.openLazy(asyncRequireImpl(17798, dependencyMap.paths), "SelectInviteRolesActionSheet", obj, "stack");
    }
  }, items);
  const items2 = [maxUses, maxUsesOptions, onChangeMaxUses];
  const callback1 = maxUsesOptions.useCallback(() => {
    if (null != onChangeMaxAge) {
      const tmp5 = asyncRequireImpl(17799, dependencyMap.paths);
      const obj = { title: null, options: null, value: null, onChange: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.gKmKP0);
      obj.options = maxAgeOptions;
      obj.value = maxAge;
      obj.onChange = tmp;
      obj.openLazy(tmp5, "InviteMaxAgeActionSheet", obj, "stack");
    }
  }, items1);
  const items3 = [tmp16Result, roleIds];
  const callback2 = maxUsesOptions.useCallback(() => {
    if (null != onChangeMaxUses) {
      const tmp5 = asyncRequireImpl(17799, dependencyMap.paths);
      const obj = { title: null, options: null, value: null, onChange: null };
      const intl = util.intl;
      obj.title = intl.string(util.t["+3vH1h"]);
      obj.options = maxUsesOptions;
      obj.value = maxUses;
      obj.onChange = tmp;
      obj.openLazy(tmp5, "InviteMaxUsesActionSheet", obj, "stack");
    }
  }, items2);
  const memo = maxUsesOptions.useMemo(() => {
    const set = new Set(assignableRoles.map((id) => id.id));
    return roleIds.filter((item) => set.has(item)).length;
  }, items3);
  if (0 !== memo) {
    let intl = tmp11(tmp12[15]).intl;
    obj = { count: memo };
    const formatToPlainStringResult = intl.formatToPlainString(tmp11(tmp12[15]).t["eXU3/V"], obj);
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
    obj = { guild, size: tmp11(tmp12[16]).GuildIconSizes.SMALL_32 };
    let tmp28 = closure_7(tmp15(tmp12[16]), obj);
    const tmp15Result = tmp15(tmp12[16]);
  } else if (null != channelIconComponent) {
    obj1 = { IconComponent: channelIconComponent };
    tmp28 = closure_7(tmp11(tmp12[17]).TableRowIcon, obj1);
  }
  obj2 = { style: null, children: null };
  const items4 = [tmp.container, style];
  obj2.style = items4;
  obj3 = { spacing: tmp15(tmp12[19]).space.PX_24, children: null };
  const obj4 = { title: null, hasIcons: null, children: null };
  const intl2 = tmp11(tmp12[15]).intl;
  obj4.title = intl2.string(maxUses(onChangeMaxAge[15]).t.LUo0Q8);
  obj4.hasIcons = null != tmp28;
  const obj5 = { icon: tmp28, label: str, subLabel: null };
  let name;
  if (guild != null) {
    name = guild.name;
  }
  obj5.subLabel = name;
  obj4.children = closure_7(maxUses(onChangeMaxAge[21]).TableRow, obj5);
  const items5 = [closure_7(maxUses(onChangeMaxAge[20]).TableRowGroup, obj4), , , , ];
  const obj6 = { title: null, hasIcons: false, children: null };
  const intl3 = tmp11(tmp12[15]).intl;
  obj6.title = intl3.string(maxUses(onChangeMaxAge[15]).t["4QuV7G"]);
  const obj7 = { label: null, trailing: null, arrow: true, onPress: null, disabled: null };
  const intl4 = tmp11(tmp12[15]).intl;
  obj7.label = intl4.string(maxUses(onChangeMaxAge[15]).t.gKmKP0);
  let tmp32Result;
  if (null != label) {
    const obj8 = { text: label };
    tmp32Result = tmp32(tmp11(tmp12[21]).TableRow.TrailingText, obj8);
  }
  obj7.trailing = tmp32Result;
  obj7.onPress = callback1;
  obj7.disabled = null == onChangeMaxAge;
  const items6 = [closure_7(maxUses(onChangeMaxAge[21]).TableRow, obj7), ];
  const obj9 = { label: null, trailing: null, arrow: true, onPress: null, disabled: null };
  const intl5 = tmp11(tmp12[15]).intl;
  obj9.label = intl5.string(maxUses(onChangeMaxAge[15]).t["+3vH1h"]);
  tmp32Result = undefined;
  if (null != label1) {
    const obj10 = { text: label1 };
    tmp32Result = tmp32(tmp11(tmp12[21]).TableRow.TrailingText, obj10);
  }
  obj9.trailing = tmp32Result;
  obj9.onPress = callback2;
  obj9.disabled = null == onChangeMaxUses;
  items6[1] = closure_7(maxUses(onChangeMaxAge[21]).TableRow, obj9);
  obj6.children = items6;
  items5[1] = roleIds(maxUses(onChangeMaxAge[20]).TableRowGroup, obj6);
  let tmp32Result1 = null;
  if (tmp18) {
    const obj11 = { hasIcons: false, children: null };
    const obj12 = { label: null, arrow: true, subLabel: null, onPress: null };
    const intl6 = tmp11(tmp12[15]).intl;
    obj12.label = intl6.string(tmp11(tmp12[15]).t.rPYJxL);
    obj12.subLabel = formatToPlainStringResult;
    obj12.onPress = callback;
    obj11.children = tmp32(tmp11(tmp12[21]).TableRow, obj12);
    tmp32Result1 = tmp32(tmp11(tmp12[20]).TableRowGroup, obj11);
  }
  items5[2] = tmp32Result1;
  let tmp32Result2 = !isManualApprovalGuild;
  if (!isManualApprovalGuild) {
    tmp32Result2 = null != onChangeTemporary;
  }
  if (tmp32Result2) {
    const obj13 = { hasIcons: false, helperText: null, children: null };
    const intl7 = tmp11(tmp12[15]).intl;
    obj13.helperText = intl7.string(tmp11(tmp12[15]).t.A53l87);
    const obj14 = { label: null, value: null, onValueChange: null };
    const intl8 = tmp11(tmp12[15]).intl;
    obj14.label = intl8.string(tmp11(tmp12[15]).t.dy1ico);
    obj14.value = temporary;
    obj14.onValueChange = onChangeTemporary;
    obj13.children = tmp32(tmp11(tmp12[22]).TableSwitchRow, obj14);
    tmp32Result2 = tmp32(tmp11(tmp12[20]).TableRowGroup, obj13);
  }
  items5[3] = tmp32Result2;
  let tmp32Result3 = null;
  if (canCreateApplicationBypassInvites) {
    const obj15 = { hasIcons: false, helperText: null, children: null };
    const intl9 = tmp11(tmp12[15]).intl;
    obj15.helperText = intl9.string(tmp11(tmp12[15]).t["jvd/LF"]);
    const obj16 = { label: null, value: null, onValueChange: null };
    const intl10 = tmp11(tmp12[15]).intl;
    obj16.label = intl10.string(tmp11(tmp12[15]).t["1i1bUl"]);
    obj16.value = tmp11(tmp12[23]).hasFlag(flags, tmp11(tmp12[24]).GuildInviteFlags.IS_APPLICATION_BYPASS);
    obj16.onValueChange = function onValueChange(arg0) {
      return closure_1_7(FlagUtils.setFlag(flags, GuildInviteFlags.GuildInviteFlags.IS_APPLICATION_BYPASS, arg0));
    };
    obj15.children = tmp32(tmp11(tmp12[22]).TableSwitchRow, obj16);
    tmp32Result3 = tmp32(tmp11(tmp12[20]).TableRowGroup, obj15);
    const tmp11Result = tmp11(tmp12[23]);
  }
  items5[4] = tmp32Result3;
  obj3.children = items5;
  obj2.children = roleIds(maxUses(onChangeMaxAge[18]).Stack, obj3);
  return closure_7(maxUses, obj2);
};