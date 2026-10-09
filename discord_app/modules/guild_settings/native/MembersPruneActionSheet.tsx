// === Module 16950: MembersPruneActionSheet ===

// Module 16950 (MembersPruneActionSheet)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import MemberSafetyPermissionsUtils from "MemberSafetyPermissionsUtils" /* 6961 */;
import PruneGuildModalActionCreatorsDefault from "PruneGuildModalActionCreators" /* 16952 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const PrunePreviewStore = fn(16951);
({ usePrunePreview: hasOwnProperty, setPrunePreview: metroRequire, clearAllPrunePreviews: closure_7 } = PrunePreviewStore);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function MembersPruneActionSheetContent(guild) {
  const cResult = guild(first[8]).c(37);
  guild = guild.guild;
  const id = guild.id;
  [first, _slicedToArray] = count.useState(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first1 = items;
  } else {
    first1 = cResult[0];
  }
  let obj = guild(first[8]);
  let obj2 = count;
  count = closure_5(guild.id, first, first1).count;
  if (cResult[1] !== guild.id) {
    class T {
      constructor() {
        handlePruneUpdate = function handlePruneUpdate() { ... };
        obj = id(closure_2[9]);
        subscription = obj.subscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
        return () => { ... };
      }
    }
    cResult[1] = guild.id;
    cResult[2] = T;
  } else {
    class T {
      constructor() {
        handlePruneUpdate = function handlePruneUpdate() { ... };
        obj = id(closure_2[9]);
        subscription = obj.subscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
        return () => { ... };
      }
    }
  }
  if (cResult[3] === first) {
    class T {
      constructor() {
        handlePruneUpdate = function handlePruneUpdate() { ... };
        obj = id(closure_2[9]);
        subscription = obj.subscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
        return () => { ... };
      }
    }
    const effect = obj2.useEffect(T, items2);
    if (cResult[6] === first) {
      class T {
        constructor() {
          handlePruneUpdate = function handlePruneUpdate() { ... };
          obj = id(closure_2[9]);
          subscription = obj.subscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
          return () => { ... };
        }
      }
    }
    class R {
      constructor() {
        if (null == count) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[10]);
          tmp3 = guild;
          tmp4 = closure_2;
          updateEstimateV2Result = obj.updateEstimateV2(guild.id, closure_2);
        }
        return;
      }
    }
    const items1 = [guild.id, first, count];
    cResult[6] = first;
    cResult[7] = count;
    cResult[8] = guild.id;
    cResult[9] = R;
    cResult[10] = items1;
  }
  items2 = [guild.id, first];
  cResult[3] = first;
  cResult[4] = guild.id;
  cResult[5] = items2;
  const tmp5 = closure_5(guild.id, first, first1);
}) : (function MembersPruneActionSheetContent(guild) {
  guild = guild.guild;
  days = undefined;
  _slicedToArray = undefined;
  let num;
  const id = guild.id;
  [days, _slicedToArray] = num.useState(7);
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
    const subscription = id(first[9]).subscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
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
  let obj2 = { title: null };
  const intl = guild(days[13]).intl;
  obj2.title = intl.string(guild(days[13]).t.zbyz7p);
  obj.header = closure_11(guild(days[12]).BottomSheetTitleHeader, obj2);
  const obj3 = { title: null, defaultValue: null, onChange: null, hasIcons: false, children: null };
  const intl2 = guild(days[13]).intl;
  obj3.title = intl2.string(guild(days[13]).t.YccTvK);
  obj3.defaultValue = days;
  obj3.onChange = function handleDaysChange(arg0) {
    let tmp = first !== arg0;
    if (tmp) {
      tmp = null != id;
    }
    if (tmp) {
      closure_3(arg0);
    }
  };
  const obj4 = { value: 7, label: null };
  const intl3 = guild(days[13]).intl;
  obj4.label = intl3.formatToPlainString(guild(days[13]).t.FM1dHS, { days: 7 });
  const items2 = [closure_11(guild(days[14]).TableRadioRow, obj4), ];
  const obj5 = { value: 30, label: null };
  const intl4 = guild(days[13]).intl;
  obj5.label = intl4.formatToPlainString(guild(days[13]).t.FM1dHS, { days: 30 });
  items2[1] = closure_11(guild(days[14]).TableRadioRow, obj5);
  obj3.children = items2;
  const items3 = [closure_12(guild(days[15]).TableRadioGroup, obj3), , ];
  const intl5 = guild(days[13]).intl;
  const t = guild(days[13]).t;
  if (num == null) {
    num = -1;
  }
  items3[1] = closure_11(guild(days[16]).Text, { variant: "text-sm/medium", children: intl5.format(tmp3.isLoading ? t["98cHOp"] : t.f13az9, { members: num, days }) });
  const obj7 = {
    variant: "destructive",
    onPress: function handlePrune() {
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
  const intl6 = tmp7(tmp8[13]).intl;
  obj7.text = intl6.string(guild(days[13]).t["2mIlKQ"]);
  items3[2] = closure_11(guild(days[17]).Button, obj7);
  obj.children = items3;
  return closure_12(guild(days[18]).ActionSheet, obj);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/MembersPruneActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MembersPruneActionSheet(guild) {
  const cResult = guild(576).c(9);
  guild = guild.guild;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, PermissionStore, UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild) {
    const fn = function u() {
      guild = GuildStore.getGuild(guild.id);
      return MemberSafetyPermissionsUtils.canPruneGuildMembers(guild, UserStore.getCurrentUser(), PermissionStore);
    };
    const items1 = [guild];
    cResult[1] = guild;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  let obj = guild(576);
  const stateFromStores = guild(504).useStateFromStores(first, tmp8, tmp9);
  if (cResult[4] !== stateFromStores) {
    class S {
      constructor() {
        if (!closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[11]);
          hideActionSheetResult = obj.hideActionSheet();
        }
        return;
      }
    }
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = S;
    cResult[6] = items2;
    let tmp12 = items2;
  } else {
    class S {
      constructor() {
        if (!closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[11]);
          hideActionSheetResult = obj.hideActionSheet();
        }
        return;
      }
    }
    tmp12 = cResult[6];
  }
  const effect = noop.useEffect(S, tmp12);
  if (!stateFromStores) {
    class S {
      constructor() {
        if (!closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[11]);
          hideActionSheetResult = obj.hideActionSheet();
        }
        return;
      }
    }
  } else {
    class S {
      constructor() {
        if (!closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[11]);
          hideActionSheetResult = obj.hideActionSheet();
        }
        return;
      }
    }
  }
  const tmpResult = guild(504);
}) : (function MembersPruneActionSheet(guild) {
  guild = guild.guild;
  const items = [GuildStore, PermissionStore, UserStore];
  const items1 = [guild];
  const stateFromStores = guild(504).useStateFromStores(items, () => {
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
    const obj2 = { guild };
    tmp3 = closure_11(closure_13, obj2);
  }
  return tmp3;
});