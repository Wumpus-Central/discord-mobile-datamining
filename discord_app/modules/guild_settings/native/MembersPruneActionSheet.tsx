// === Module 16531: MembersPruneActionSheet ===

// Module 16531 (MembersPruneActionSheet)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import MemberSafetyPermissionsUtils from "MemberSafetyPermissionsUtils" /* 6768 */;
import PruneGuildModalActionCreatorsDefault from "PruneGuildModalActionCreators" /* 16533 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const PrunePreviewStore = fn(16532);
({ usePrunePreview: hasOwnProperty, setPrunePreview: metroRequire, clearAllPrunePreviews: closure_7 } = PrunePreviewStore);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(defaultValue[8]).c(37);
  guild = guild.guild;
  const id = guild.id;
  [defaultValue, _slicedToArray] = count.useState(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first1 = items;
  } else {
    first1 = cResult[0];
  }
  const tmp7 = closure_5(guild.id, defaultValue, first1);
  count = tmp7.count;
  const isLoading = tmp7.isLoading;
  if (cResult[1] !== guild.id) {
    const fn = function y() {
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
    };
    cResult[1] = guild.id;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === defaultValue) {
    if (cResult[4] === guild.id) {
      let tmp9 = cResult[5];
    }
    const effect = obj2.useEffect(tmp8, tmp9);
    if (cResult[6] === defaultValue) {
      if (cResult[7] === count) {
        if (cResult[8] === guild.id) {
          let tmp11 = cResult[9];
          let tmp12 = cResult[10];
        }
        const effect1 = obj2.useEffect(tmp11, tmp12);
        if (cResult[11] === defaultValue) {
          if (cResult[12] === id) {
            let tmp14 = cResult[13];
          }
          if (cResult[14] === defaultValue) {
            if (cResult[15] === id) {
              let tmp15 = cResult[16];
            }
            const _Symbol = Symbol;
            class I {
              constructor(arg0) {
                tmp = closure_2 !== guild;
                if (tmp) {
                  tmp2 = id;
                  tmp3 = null;
                  tmp = null != id;
                }
                if (tmp) {
                  tmp4 = closure_3;
                  tmp5 = closure_3(guild);
                }
                return;
              }
            }
            const _Symbol2 = Symbol;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(tmp2[13]).intl;
              const stringResult = intl.string(tmp(tmp2[13]).t.YccTvK);
              class I {
                constructor(arg0) {
                  tmp = closure_2 !== guild;
                  if (tmp) {
                    tmp2 = id;
                    tmp3 = null;
                    tmp = null != id;
                  }
                  if (tmp) {
                    tmp4 = closure_3;
                    tmp5 = closure_3(guild);
                  }
                  return;
                }
              }
              cResult[18] = stringResult;
              let tmp18 = stringResult;
            } else {
              tmp18 = cResult[18];
            }
            const _Symbol3 = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = { value: 7, label: null };
              class I {
                constructor(arg0) {
                  tmp = closure_2 !== guild;
                  if (tmp) {
                    tmp2 = id;
                    tmp3 = null;
                    tmp = null != id;
                  }
                  if (tmp) {
                    tmp4 = closure_3;
                    tmp5 = closure_3(guild);
                  }
                  return;
                }
              }
              obj3.label = obj4.formatToPlainString(tmp(tmp2[13]).t.FM1dHS, { days: 7 });
              const tmp22 = closure_11(tmp(tmp2[14]).TableRadioRow, obj3);
              cResult[19] = tmp22;
              let tmp20 = tmp22;
            } else {
              tmp20 = cResult[19];
            }
            const _Symbol4 = Symbol;
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = { value: 30, label: null };
              class I {
                constructor(arg0) {
                  tmp = closure_2 !== guild;
                  if (tmp) {
                    tmp2 = id;
                    tmp3 = null;
                    tmp = null != id;
                  }
                  if (tmp) {
                    tmp4 = closure_3;
                    tmp5 = closure_3(guild);
                  }
                  return;
                }
              }
              obj5.label = obj6.formatToPlainString(tmp(tmp2[13]).t.FM1dHS, { days: 30 });
              const tmp25 = closure_11(tmp(tmp2[14]).TableRadioRow, obj5);
              cResult[20] = tmp25;
              let tmp23 = tmp25;
            } else {
              tmp23 = cResult[20];
            }
            if (cResult[21] === defaultValue) {
              if (cResult[22] === tmp14) {
                let tmp26 = cResult[23];
              }
              if (cResult[24] === defaultValue) {
                if (cResult[25] === count) {
                  if (cResult[26] === isLoading) {
                    let tmp29 = cResult[27];
                  }
                  if (cResult[28] !== tmp29) {
                    { variant: "text-sm/medium", children: null }.children = tmp29;
                    class I {
                      constructor(arg0) {
                        tmp = closure_2 !== guild;
                        if (tmp) {
                          tmp2 = id;
                          tmp3 = null;
                          tmp = null != id;
                        }
                        if (tmp) {
                          tmp4 = closure_3;
                          tmp5 = closure_3(guild);
                        }
                        return;
                      }
                    }
                    cResult[28] = tmp29;
                    cResult[29] = tmp36;
                    let tmp34 = tmp36;
                    const obj7 = { variant: "text-sm/medium", children: null };
                  } else {
                    tmp34 = cResult[29];
                  }
                  const _Symbol5 = Symbol;
                  class I {
                    constructor(arg0) {
                      tmp = closure_2 !== guild;
                      if (tmp) {
                        tmp2 = id;
                        tmp3 = null;
                        tmp = null != id;
                      }
                      if (tmp) {
                        tmp4 = closure_3;
                        tmp5 = closure_3(guild);
                      }
                      return;
                    }
                  }
                  if (tmp37 === Symbol.for("react.memo_cache_sentinel")) {
                    const intl2 = tmp(tmp2[13]).intl;
                    const stringResult1 = intl2.string(tmp(tmp2[13]).t["2mIlKQ"]);
                    class I {
                      constructor(arg0) {
                        tmp = closure_2 !== guild;
                        if (tmp) {
                          tmp2 = id;
                          tmp3 = null;
                          tmp = null != id;
                        }
                        if (tmp) {
                          tmp4 = closure_3;
                          tmp5 = closure_3(guild);
                        }
                        return;
                      }
                    }
                    cResult[30] = stringResult1;
                  }
                  if (cResult[31] !== tmp15) {
                    const obj8 = { variant: "destructive", onPress: tmp15, text: null };
                    class I {
                      constructor(arg0) {
                        tmp = closure_2 !== guild;
                        if (tmp) {
                          tmp2 = id;
                          tmp3 = null;
                          tmp = null != id;
                        }
                        if (tmp) {
                          tmp4 = closure_3;
                          tmp5 = closure_3(guild);
                        }
                        return;
                      }
                    }
                    const tmp42 = closure_11(tmp(tmp2[17]).Button, obj8);
                    cResult[31] = tmp15;
                    cResult[32] = tmp42;
                    let tmp40 = tmp42;
                  } else {
                    tmp40 = cResult[32];
                  }
                  if (cResult[33] === tmp26) {
                    if (cResult[34] === tmp34) {
                      if (cResult[35] === tmp40) {
                        let tmp43 = cResult[36];
                      }
                      return tmp43;
                    }
                  }
                  const obj9 = { header: tmp17, children: null };
                  const items1 = [tmp26, tmp34, tmp40];
                  obj9.children = items1;
                  const tmp45 = closure_12(tmp(tmp2[18]).ActionSheet, obj9);
                  cResult[33] = tmp26;
                  cResult[34] = tmp34;
                  cResult[35] = tmp40;
                  cResult[36] = tmp45;
                  tmp43 = tmp45;
                }
              }
              class I {
                constructor(arg0) {
                  tmp = closure_2 !== guild;
                  if (tmp) {
                    tmp2 = id;
                    tmp3 = null;
                    tmp = null != id;
                  }
                  if (tmp) {
                    tmp4 = closure_3;
                    tmp5 = closure_3(guild);
                  }
                  return;
                }
              }
              const t = tmp(tmp2[13]).t;
              let num17 = count;
              if (count == null) {
                num17 = -1;
              }
              const obj10 = { members: num17, days: defaultValue };
              const tmp30Result = tmp30(isLoading ? t["98cHOp"] : t.f13az9, obj10);
              cResult[24] = defaultValue;
              cResult[25] = count;
              cResult[26] = isLoading;
              cResult[27] = tmp30Result;
              tmp29 = tmp30Result;
              const tmp31 = isLoading ? t["98cHOp"] : t.f13az9;
            }
            const obj11 = { title: tmp18, defaultValue, onChange: tmp14, hasIcons: false, children: null };
            const items2 = [tmp20, tmp23];
            obj11.children = items2;
            const tmp28 = closure_12(tmp(tmp2[15]).TableRadioGroup, obj11);
            cResult[21] = defaultValue;
            cResult[22] = tmp14;
            cResult[23] = tmp28;
            tmp26 = tmp28;
          }
          const fn2 = function x() {
            let tmp2 = null != id;
            if (tmp2) {
              tmp2 = null != first;
            }
            if (tmp2) {
              PruneGuildModalActionCreatorsDefault.prune(id, first);
              ActionSheetActionCreatorsDefault.hideActionSheet();
              React5();
            }
          };
          class I {
            constructor(arg0) {
              tmp = closure_2 !== guild;
              if (tmp) {
                tmp2 = id;
                tmp3 = null;
                tmp = null != id;
              }
              if (tmp) {
                tmp4 = closure_3;
                tmp5 = closure_3(guild);
              }
              return;
            }
          }
          cResult[14] = defaultValue;
          cResult[15] = id;
          cResult[16] = fn2;
          tmp15 = fn2;
        }
        class I {
          constructor(arg0) {
            tmp = closure_2 !== guild;
            if (tmp) {
              tmp2 = id;
              tmp3 = null;
              tmp = null != id;
            }
            if (tmp) {
              tmp4 = closure_3;
              tmp5 = closure_3(guild);
            }
            return;
          }
        }
        cResult[11] = defaultValue;
        cResult[12] = id;
        cResult[13] = I;
        tmp14 = I;
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
    const items3 = [guild.id, defaultValue, count];
    cResult[6] = defaultValue;
    cResult[7] = count;
    cResult[8] = guild.id;
    cResult[9] = R;
    cResult[10] = items3;
    tmp12 = items3;
    tmp11 = R;
  }
  const items4 = [guild.id, defaultValue];
  cResult[3] = defaultValue;
  cResult[4] = guild.id;
  cResult[5] = items4;
  tmp9 = items4;
  let obj = guild(defaultValue[8]);
}) : ((guild) => {
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
  obj3.onChange = function onChange(arg0) {
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
  const intl6 = tmp7(tmp8[13]).intl;
  obj7.text = intl6.string(guild(days[13]).t["2mIlKQ"]);
  items3[2] = closure_11(guild(days[17]).Button, obj7);
  obj.children = items3;
  return closure_12(guild(days[18]).ActionSheet, obj);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/MembersPruneActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
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
}) : ((guild) => {
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