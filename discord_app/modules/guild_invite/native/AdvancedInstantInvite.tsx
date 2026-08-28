// === Module 17310: AdvancedInstantInvite ===

// Module 17310 (AdvancedInstantInvite)
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "markAllUserIdListsStale" /* 4099 */;
import closure_6 from "mergeGuildAvatar" /* 1923 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ container: { flexGrow: 1 } });
const result = require("set").fileFinishedImporting("modules/guild_invite/native/AdvancedInstantInvite.tsx");

export default function AdvancedInstantInvite(maxAge) {
  ({ channel, guild } = maxAge);
  let maxUses = guild;
  maxAge = maxAge.maxAge;
  const onChangeMaxAge = maxAge.onChangeMaxAge;
  const maxUsesOptions = maxAge.maxUsesOptions;
  maxUses = maxAge.maxUses;
  const onChangeMaxUses = maxAge.onChangeMaxUses;
  ({ onChangeTemporary, flags } = maxAge);
  ({ onChangeFlags: closure_7, roleIds } = maxAge);
  const onChangeRoleIds = maxAge.onChangeRoleIds;
  let maxAgeOptions;
  closure_11 = undefined;
  ({ style, temporary } = maxAge);
  if (null != channel) {
    let obj = maxUses(onChangeMaxAge[6]);
    const channelIconComponent = obj.getChannelIconComponent(channel);
  }
  let str = " ";
  if (null != channel) {
    obj1 = maxUses(onChangeMaxAge[7]);
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
  closure_11 = tmp16Result;
  const items = [guild, tmp16Result, roleIds, onChangeRoleIds];
  const items1 = [maxAge, maxAgeOptions, onChangeMaxAge];
  const callback = maxUsesOptions.useCallback(() => {
    let tmp = null != maxUses;
    if (tmp) {
      tmp = null != onChangeRoleIds;
    }
    if (tmp) {
      let obj = maxAge(onChangeMaxAge[11]);
      obj = { assignableRoles: null, selectedRoleIds: null, onSave: null };
      obj[0] = closure_11;
      obj[1] = roleIds;
      obj[2] = onChangeRoleIds;
      obj.openLazy(maxUses(onChangeMaxAge[13])(onChangeMaxAge[12], onChangeMaxAge.paths), "SelectInviteRolesActionSheet", obj, "stack");
    }
  }, items);
  const items2 = [maxUses, maxUsesOptions, onChangeMaxUses];
  const callback1 = maxUsesOptions.useCallback(() => {
    if (null != onChangeMaxAge) {
      let obj = maxAge(onChangeMaxAge[11]);
      const tmp5 = maxUses(onChangeMaxAge[13])(onChangeMaxAge[14], onChangeMaxAge.paths);
      obj = { title: null, options: null, value: null, onChange: null };
      const intl = maxUses(onChangeMaxAge[15]).intl;
      obj[0] = intl.string(maxUses(onChangeMaxAge[15]).t.gKmKP0);
      obj[1] = maxAgeOptions;
      obj[2] = maxAge;
      obj[3] = tmp;
      obj.openLazy(tmp5, "InviteMaxAgeActionSheet", obj, "stack");
    }
  }, items1);
  const items3 = [tmp16Result, roleIds];
  const callback2 = maxUsesOptions.useCallback(() => {
    if (null != onChangeMaxUses) {
      let obj = maxAge(onChangeMaxAge[11]);
      const tmp5 = maxUses(onChangeMaxAge[13])(onChangeMaxAge[14], onChangeMaxAge.paths);
      obj = { title: null, options: null, value: null, onChange: null };
      const intl = maxUses(onChangeMaxAge[15]).intl;
      obj[0] = intl.string(maxUses(onChangeMaxAge[15]).t["+3vH1h"]);
      obj[1] = maxUsesOptions;
      obj[2] = maxUses;
      obj[3] = tmp;
      obj.openLazy(tmp5, "InviteMaxUsesActionSheet", obj, "stack");
    }
  }, items2);
  const memo = maxUsesOptions.useMemo(() => {
    const set = new Set(closure_11.map((id) => id.id));
    return roleIds.filter((arg0) => set.has(arg0)).length;
  }, items3);
  if (0 !== memo) {
    let intl = tmp11(tmp12[15]).intl;
    obj = { count: null };
    obj[0] = memo;
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
    obj = { guild: null, size: null };
    obj[0] = guild;
    obj[1] = tmp11(tmp12[16]).GuildIconSizes.SMALL_32;
    let tmp28 = callback(tmp15(tmp12[16]), obj);
    const tmp15Result = tmp15(tmp12[16]);
  } else if (null != channelIconComponent) {
    obj1 = { IconComponent: null };
    obj1[0] = channelIconComponent;
    tmp28 = callback(tmp11(tmp12[17]).TableRowIcon, obj1);
  }
  obj2 = { style: items4, children: null };
  items4 = [tmp.container, style];
  obj3 = { spacing: tmp15(tmp12[19]).space.PX_24, children: null };
  const obj4 = { title: null, hasIcons: null, children: null };
  const intl2 = tmp11(tmp12[15]).intl;
  obj4[0] = intl2.string(maxUses(onChangeMaxAge[15]).t.LUo0Q8);
  obj4[1] = null != tmp28;
  const obj5 = { icon: tmp28, label: str, subLabel: null };
  let name;
  if (guild != null) {
    name = guild.name;
  }
  obj5[2] = name;
  obj4[2] = callback(maxUses(onChangeMaxAge[21]).TableRow, obj5);
  const items5 = [callback(maxUses(onChangeMaxAge[20]).TableRowGroup, obj4), , , , ];
  const obj6 = { title: null, hasIcons: false, children: null };
  const intl3 = tmp11(tmp12[15]).intl;
  obj6[0] = intl3.string(maxUses(onChangeMaxAge[15]).t["4QuV7G"]);
  const obj7 = { label: null, trailing: null, arrow: true, onPress: null, disabled: null };
  const intl4 = tmp11(tmp12[15]).intl;
  obj7[0] = intl4.string(maxUses(onChangeMaxAge[15]).t.gKmKP0);
  let tmp32Result;
  if (null != label) {
    const obj8 = { text: null };
    obj8[0] = label;
    tmp32Result = tmp32(tmp11(tmp12[21]).TableRow.TrailingText, obj8);
  }
  obj7[1] = tmp32Result;
  obj7[3] = callback1;
  obj7[4] = null == onChangeMaxAge;
  const items6 = [callback(maxUses(onChangeMaxAge[21]).TableRow, obj7), ];
  const obj9 = { label: null, trailing: null, arrow: true, onPress: null, disabled: null };
  const intl5 = tmp11(tmp12[15]).intl;
  obj9[0] = intl5.string(maxUses(onChangeMaxAge[15]).t["+3vH1h"]);
  tmp32Result = undefined;
  if (null != label1) {
    const obj10 = { text: null };
    obj10[0] = label1;
    tmp32Result = tmp32(tmp11(tmp12[21]).TableRow.TrailingText, obj10);
  }
  obj9[1] = tmp32Result;
  obj9[3] = callback2;
  obj9[4] = null == onChangeMaxUses;
  items6[1] = callback(maxUses(onChangeMaxAge[21]).TableRow, obj9);
  obj6[2] = items6;
  items5[1] = roleIds(maxUses(onChangeMaxAge[20]).TableRowGroup, obj6);
  let tmp32Result1 = null;
  if (tmp18) {
    const obj11 = { hasIcons: false, children: null };
    const obj12 = { label: null, arrow: true, subLabel: null, onPress: null };
    const intl6 = tmp11(tmp12[15]).intl;
    obj12[0] = intl6.string(tmp11(tmp12[15]).t.rPYJxL);
    obj12[2] = formatToPlainStringResult;
    obj12[3] = callback;
    obj11[1] = tmp32(tmp11(tmp12[21]).TableRow, obj12);
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
    obj13[1] = intl7.string(tmp11(tmp12[15]).t.A53l87);
    const obj14 = { label: null, value: null, onValueChange: null };
    const intl8 = tmp11(tmp12[15]).intl;
    obj14[0] = intl8.string(tmp11(tmp12[15]).t.dy1ico);
    obj14[1] = temporary;
    obj14[2] = onChangeTemporary;
    obj13[2] = tmp32(tmp11(tmp12[22]).TableSwitchRow, obj14);
    tmp32Result2 = tmp32(tmp11(tmp12[20]).TableRowGroup, obj13);
  }
  items5[3] = tmp32Result2;
  let tmp32Result3 = null;
  if (canCreateApplicationBypassInvites) {
    const obj15 = { hasIcons: false, helperText: null, children: null };
    const intl9 = tmp11(tmp12[15]).intl;
    obj15[1] = intl9.string(tmp11(tmp12[15]).t["jvd/LF"]);
    const obj16 = { label: null, value: null, onValueChange: null };
    const intl10 = tmp11(tmp12[15]).intl;
    obj16[0] = intl10.string(tmp11(tmp12[15]).t["1i1bUl"]);
    obj16[1] = tmp11(tmp12[23]).hasFlag(flags, tmp11(tmp12[24]).GuildInviteFlags.IS_APPLICATION_BYPASS);
    obj16[2] = function onValueChange(arg0) {
      return callback(maxUses(onChangeMaxAge[23]).setFlag(flags, maxUses(onChangeMaxAge[24]).GuildInviteFlags.IS_APPLICATION_BYPASS, arg0));
    };
    obj15[2] = tmp32(tmp11(tmp12[22]).TableSwitchRow, obj16);
    tmp32Result3 = tmp32(tmp11(tmp12[20]).TableRowGroup, obj15);
    const tmp11Result = tmp11(tmp12[23]);
  }
  items5[4] = tmp32Result3;
  obj3[1] = items5;
  obj2[1] = roleIds(maxUses(onChangeMaxAge[18]).Stack, obj3);
  return callback(maxUses, obj2);
};