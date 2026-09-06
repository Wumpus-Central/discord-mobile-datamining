// === Module 16574: MembersPruneActionSheet ===

// Module 16574 (MembersPruneActionSheet)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import MemberSafetyPermissionsUtils from "MemberSafetyPermissionsUtils" /* 7265 */;
import PruneGuildModalActionCreatorsDefault from "PruneGuildModalActionCreators" /* 16576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function MembersPruneActionSheetContent(guild) {
  guild = guild.guild;
  _slicedToArray = undefined;
  let num;
  const id = guild.id;
  let tmp = _slicedToArray(num.useState(7), 2);
  const days = tmp[0];
  _slicedToArray = tmp[1];
  const tmp3 = closure_5(guild.id, days, []);
  num = tmp3.count;
  const items = [guild.id, days];
  const effect = num.useEffect(() => {
    function handlePruneUpdate(guildId) {
      if (guildId.guildId === handlePruneUpdate.id) {
        if (guildId.prune.isPreview) {
          const _Number = Number;
          closure_2_6(guildId.guildId, guildId.prune.days, guildId.prune.includeRoles, Number(guildId.prune.pruneCount), guildId.prune.isFinished);
        }
      }
    }
    const subscription = id(first[7]).subscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
    return () => {
      DispatcherDefault.unsubscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
    };
  }, items);
  const items1 = [guild.id, days, num];
  const effect1 = num.useEffect(() => {
    if (null == num) {
      PruneGuildModalActionCreatorsDefault.updateEstimateV2(guild.id, first);
    }
  }, items1);
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = guild(days[11]).intl;
  obj.title = intl.string(guild(days[11]).t.zbyz7p);
  obj.header = closure_11(guild(days[10]).BottomSheetTitleHeader, obj);
  obj = { title: null, defaultValue: null, onChange: null, hasIcons: false, children: null };
  const intl2 = guild(days[11]).intl;
  obj.title = intl2.string(guild(days[11]).t.YccTvK);
  obj.defaultValue = days;
  obj.onChange = function onChange(arg0) {
    let tmp = first !== arg0;
    if (tmp) {
      tmp = null != id;
    }
    if (tmp) {
      closure_3(arg0);
    }
  };
  const obj1 = { value: 7, label: null };
  const intl3 = guild(days[11]).intl;
  obj1.label = intl3.formatToPlainString(guild(days[11]).t.FM1dHS, { days: 7 });
  const items2 = [closure_11(guild(days[13]).TableRadioRow, obj1), ];
  let obj2 = { value: 30, label: null };
  const intl4 = guild(days[11]).intl;
  obj2.label = intl4.formatToPlainString(guild(days[11]).t.FM1dHS, { days: 30 });
  items2[1] = closure_11(guild(days[13]).TableRadioRow, obj2);
  obj.children = items2;
  const items3 = [closure_12(guild(days[12]).TableRadioGroup, obj), , ];
  const intl5 = guild(days[11]).intl;
  const t = guild(days[11]).t;
  if (num == null) {
    num = -1;
  }
  items3[1] = closure_11(guild(days[14]).Text, { variant: "text-sm/medium", children: intl5.format(tmp3.isLoading ? t["98cHOp"] : t.f13az9, { members: num, days }) });
  const obj4 = {
    variant: "destructive",
    onPress() {
      let tmp2 = null != id;
      if (tmp2) {
        tmp2 = null != first;
      }
      if (tmp2) {
        PruneGuildModalActionCreatorsDefault.prune(id, first);
        ActionSheetActionCreatorsDefault.hideActionSheet();
        React5();
      }
    },
    text: null
  };
  const intl6 = tmp7(tmp8[11]).intl;
  obj4.text = intl6.string(guild(days[11]).t["2mIlKQ"]);
  items3[2] = closure_11(guild(days[15]).Button, obj4);
  obj.children = items3;
  return closure_12(guild(days[9]).ActionSheet, obj);
}
const PrunePreviewStore = fn(16575);
({ usePrunePreview: hasOwnProperty, setPrunePreview: metroRequire, clearAllPrunePreviews: closure_7 } = PrunePreviewStore);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/MembersPruneActionSheet.tsx");

export default function MembersPruneActionSheet(guild) {
  guild = guild.guild;
  let obj = guild(504);
  const items = [GuildStore, PermissionStore, UserStore];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(items, () => {
    guild = GuildStore.getGuild(guild.id);
    return MemberSafetyPermissionsUtils.canPruneGuildMembers(guild, UserStore.getCurrentUser(), PermissionStore);
  }, items1);
  const items2 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (!stateFromStores) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, items2);
  let tmp3 = null;
  if (stateFromStores) {
    obj = { guild };
    tmp3 = closure_11(MembersPruneActionSheetContent, obj);
  }
  return tmp3;
};