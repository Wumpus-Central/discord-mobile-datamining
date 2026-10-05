// discord_app/modules/guild_settings/native/MembersPruneActionSheet.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import MemberSafetyPermissionsUtils from "../../guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx";
import PruneGuildModalActionCreatorsDefault from "../../../actions/PruneGuildModalActionCreators.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import PrunePreviewStore from "../../guild_mod_dash_member_safety/PrunePreviewStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let guild;

let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({
  usePrunePreview: hasOwnProperty,
  setPrunePreview: metroRequire,
  clearAllPrunePreviews: metroImportDefault,
} = PrunePreviewStore);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let closure_3;
      let count;
      let defaultValue;
      let first;
      let first1;
      let items1;
      let items2;
      let tmp8;
      let tmp = guild;
      let tmp2 = defaultValue;
      let obj = guild(defaultValue[8]);
      const cResult = obj.c(37);
      guild = guild.guild;
      const id = guild.id;
      let obj2 = count;
      [defaultValue, _slicedToArray] = count.useState(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        cResult[0] = items;
        first1 = items;
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
                closure_2_6(
                  guildId.guildId,
                  guildId.prune.days,
                  guildId.prune.includeRoles,
                  Number(guildId.prune.pruneCount),
                  guildId.prune.isFinished,
                );
              }
            }
          }
          let obj = id(first[9]);
          const subscription = obj.subscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
          return () => {
            const obj = DispatcherDefault;
            obj.unsubscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
          };
        };
        cResult[1] = guild.id;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === defaultValue) {
        let tmp9;
        if (cResult[4] === guild.id) {
          tmp9 = cResult[5];
        }
        const effect = obj2.useEffect(tmp8, tmp9);
        if (cResult[6] === defaultValue) {
          if (cResult[7] === count) {
            let tmp11;
            let tmp12;
            if (cResult[8] === guild.id) {
              tmp11 = cResult[9];
              tmp12 = cResult[10];
            }
            const effect1 = obj2.useEffect(tmp11, tmp12);
            if (cResult[11] === defaultValue) {
              let tmp14;
              if (cResult[12] === id) {
                tmp14 = cResult[13];
              }
              if (cResult[14] === defaultValue) {
                let tmp15;
                let tmp18;
                let tmp20;
                let tmp23;
                if (cResult[15] === id) {
                  tmp15 = cResult[16];
                }
                const _Symbol = Symbol;
                class I {
                  constructor(arg0) {
                    const tmp = first !== arg0 && null != id;
                    if (tmp) {
                      closure_3(arg0);
                    }
                  }
                }
                const _Symbol2 = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = tmp(tmp2[13]).intl;
                  const stringResult = intl.string(tmp(tmp2[13]).t.YccTvK);
                  class I {
                    constructor(arg0) {
                      const tmp = first !== arg0 && null != id;
                      if (tmp) {
                        closure_3(arg0);
                      }
                    }
                  }
                  cResult[18] = stringResult;
                  tmp18 = stringResult;
                } else {
                  tmp18 = cResult[18];
                }
                const _Symbol3 = Symbol;
                if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj3 = { value: 7, label: obj4.formatToPlainString(tmp(tmp2[13]).t.FM1dHS, { days: 7 }) };
                  const TableRadioRow = tmp(tmp2[14]).TableRadioRow;
                  class I {
                    constructor(arg0) {
                      const tmp = first !== arg0 && null != id;
                      if (tmp) {
                        closure_3(arg0);
                      }
                    }
                  }
                  const tmp22 = closure_11(TableRadioRow, obj3);
                  cResult[19] = tmp22;
                  tmp20 = tmp22;
                } else {
                  tmp20 = cResult[19];
                }
                const _Symbol4 = Symbol;
                if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj5 = { value: 30, label: obj6.formatToPlainString(tmp(tmp2[13]).t.FM1dHS, { days: 30 }) };
                  const TableRadioRow2 = tmp(tmp2[14]).TableRadioRow;
                  class I {
                    constructor(arg0) {
                      const tmp = first !== arg0 && null != id;
                      if (tmp) {
                        closure_3(arg0);
                      }
                    }
                  }
                  const tmp25 = closure_11(TableRadioRow2, obj5);
                  cResult[20] = tmp25;
                  tmp23 = tmp25;
                } else {
                  tmp23 = cResult[20];
                }
                if (cResult[21] === defaultValue) {
                  let tmp26;
                  if (cResult[22] === tmp14) {
                    tmp26 = cResult[23];
                  }
                  if (cResult[24] === defaultValue) {
                    if (cResult[25] === count) {
                      let tmp29;
                      let tmp34;
                      let tmp40;
                      if (cResult[26] === isLoading) {
                        tmp29 = cResult[27];
                      }
                      if (cResult[28] !== tmp29) {
                        class I {
                          constructor(arg0) {
                            const tmp = first !== arg0 && null != id;
                            if (tmp) {
                              closure_3(arg0);
                            }
                          }
                        }
                        cResult[28] = tmp29;
                        cResult[29] = tmp36;
                        tmp34 = tmp36;
                      } else {
                        tmp34 = cResult[29];
                      }
                      const _Symbol5 = Symbol;
                      class I {
                        constructor(arg0) {
                          const tmp = first !== arg0 && null != id;
                          if (tmp) {
                            closure_3(arg0);
                          }
                        }
                      }
                      if (tmp37 === Symbol.for("react.memo_cache_sentinel")) {
                        const intl3 = tmp(tmp2[13]).intl;
                        const stringResult1 = intl3.string(tmp(tmp2[13]).t["2mIlKQ"]);
                        class I {
                          constructor(arg0) {
                            const tmp = first !== arg0 && null != id;
                            if (tmp) {
                              closure_3(arg0);
                            }
                          }
                        }
                        cResult[30] = stringResult1;
                      }
                      if (cResult[31] !== tmp15) {
                        const obj8 = { variant: "destructive", onPress: tmp15, text: null };
                        class I {
                          constructor(arg0) {
                            const tmp = first !== arg0 && null != id;
                            if (tmp) {
                              closure_3(arg0);
                            }
                          }
                        }
                        const tmp42 = closure_11(tmp(tmp2[17]).Button, obj8);
                        cResult[31] = tmp15;
                        cResult[32] = tmp42;
                        tmp40 = tmp42;
                      } else {
                        tmp40 = cResult[32];
                      }
                      if (cResult[33] === tmp26) {
                        if (cResult[34] === tmp34) {
                          let tmp43;
                          if (cResult[35] === tmp40) {
                            tmp43 = cResult[36];
                          }
                          return tmp43;
                        }
                      }
                      const obj9 = { header: tmp17, children: items1 };
                      items1 = [tmp26, tmp34, tmp40];
                      const tmp45 = closure_12(tmp(tmp2[18]).ActionSheet, obj9);
                      cResult[33] = tmp26;
                      cResult[34] = tmp34;
                      cResult[35] = tmp40;
                      cResult[36] = tmp45;
                      tmp43 = tmp45;
                    }
                  }
                  const intl2 = tmp(tmp2[13]).intl;
                  class I {
                    constructor(arg0) {
                      const tmp = first !== arg0 && null != id;
                      if (tmp) {
                        closure_3(arg0);
                      }
                    }
                  }
                  const t = tmp(tmp2[13]).t;
                  let num17 = count;
                  const tmp31 = isLoading ? t["98cHOp"] : t.f13az9;
                  if (count == null) {
                    num17 = -1;
                  }
                  const obj10 = { members: num17, days: defaultValue };
                  const tmp30Result = tmp30(tmp31, obj10);
                  cResult[24] = defaultValue;
                  cResult[25] = count;
                  cResult[26] = isLoading;
                  cResult[27] = tmp30Result;
                  tmp29 = tmp30Result;
                }
                const obj11 = { title: tmp18, defaultValue, onChange: tmp14, hasIcons: false, children: items2 };
                items2 = [tmp20, tmp23];
                const tmp28 = closure_12(tmp(tmp2[15]).TableRadioGroup, obj11);
                cResult[21] = defaultValue;
                cResult[22] = tmp14;
                cResult[23] = tmp28;
                tmp26 = tmp28;
              }
              const fn2 = function x() {
                const tmp2 = null != id && null != first;
                if (tmp2) {
                  const obj = PruneGuildModalActionCreatorsDefault;
                  obj.prune(id, first);
                  const obj2 = ActionSheetActionCreatorsDefault;
                  obj2.hideActionSheet();
                  metroImportDefault();
                }
              };
              class I {
                constructor(arg0) {
                  const tmp = first !== arg0 && null != id;
                  if (tmp) {
                    closure_3(arg0);
                  }
                }
              }
              cResult[14] = defaultValue;
              cResult[15] = id;
              cResult[16] = fn2;
              tmp15 = fn2;
            }
            class I {
              constructor(arg0) {
                const tmp = first !== arg0 && null != id;
                if (tmp) {
                  closure_3(arg0);
                }
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
              const obj = PruneGuildModalActionCreatorsDefault;
              obj.updateEstimateV2(guild.id, first);
            }
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
    }
  : (guild) => {
      let BottomSheetTitleHeader;
      let closure_3;
      let days;
      let first;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl6;
      let items2;
      let items3;
      let obj2;
      guild = guild.guild;
      days = undefined;
      _slicedToArray = undefined;
      let num;
      const id = guild.id;
      [days, _slicedToArray] = num.useState(7);
      const tmp3 = closure_5(guild.id, days, []);
      num = tmp3.count;
      const items = [guild.id, days];
      const isLoading = tmp3.isLoading;
      const effect = num.useEffect(() => {
        function handlePruneUpdate(guildId) {
          if (guildId.guildId === handlePruneUpdate.id) {
            if (guildId.prune.isPreview) {
              const _Number = Number;
              closure_2_6(
                guildId.guildId,
                guildId.prune.days,
                guildId.prune.includeRoles,
                Number(guildId.prune.pruneCount),
                guildId.prune.isFinished,
              );
            }
          }
        }
        let obj = id(first[9]);
        const subscription = obj.subscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
        return () => {
          const obj = DispatcherDefault;
          obj.unsubscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
        };
      }, items);
      const items1 = [guild.id, days, num];
      const effect1 = num.useEffect(() => {
        if (null == num) {
          const obj = PruneGuildModalActionCreatorsDefault;
          obj.updateEstimateV2(guild.id, first);
        }
      }, items1);
      let obj = { header: closure_11(BottomSheetTitleHeader, obj2), children: items3 };
      const ActionSheet = guild(days[18]).ActionSheet;
      obj2 = { title: intl.string(guild(days[13]).t.zbyz7p) };
      BottomSheetTitleHeader = guild(days[12]).BottomSheetTitleHeader;
      intl = guild(days[13]).intl;
      const obj3 = {
        title: intl2.string(guild(days[13]).t.YccTvK),
        defaultValue: days,
        onChange(arg0) {
          const tmp = first !== arg0 && null != id;
          if (tmp) {
            closure_3(arg0);
          }
        },
        hasIcons: false,
        children: items2,
      };
      const TableRadioGroup = guild(days[15]).TableRadioGroup;
      intl2 = guild(days[13]).intl;
      const obj4 = { value: 7, label: intl3.formatToPlainString(guild(days[13]).t.FM1dHS, { days: 7 }) };
      const TableRadioRow = guild(days[14]).TableRadioRow;
      intl3 = guild(days[13]).intl;
      items2 = [closure_11(TableRadioRow, obj4)];
      const obj5 = { value: 30, label: intl4.formatToPlainString(guild(days[13]).t.FM1dHS, { days: 30 }) };
      const TableRadioRow2 = guild(days[14]).TableRadioRow;
      intl4 = guild(days[13]).intl;
      items2[1] = closure_11(TableRadioRow2, obj5);
      items3 = [closure_12(TableRadioGroup, obj3), ,];
      const Text = guild(days[16]).Text;
      const intl5 = guild(days[13]).intl;
      const format = intl5.format;
      const t = guild(days[13]).t;
      const tmp10 = isLoading ? t["98cHOp"] : t.f13az9;
      if (num == null) {
        num = -1;
      }
      const obj6 = { variant: "text-sm/medium", children: format(tmp10, { members: num, days }) };
      items3[1] = closure_11(Text, obj6);
      const obj7 = {
        variant: "destructive",
        onPress() {
          const tmp2 = null != id && null != first;
          if (tmp2) {
            const obj = PruneGuildModalActionCreatorsDefault;
            obj.prune(id, first);
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet();
            metroImportDefault();
          }
        },
        text: intl6.string(guild(days[13]).t["2mIlKQ"]),
      };
      const Button = tmp7(tmp8[17]).Button;
      intl6 = tmp7(tmp8[13]).intl;
      items3[2] = closure_11(Button, obj7);
      return closure_12(ActionSheet, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let first;
      let tmp12;
      let tmp8;
      let tmp9;
      const tmp = guild;
      let obj = guild(576);
      const cResult = obj.c(9);
      guild = guild.guild;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, PermissionStore, UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild) {
        const fn = function u() {
          const canPruneGuildMembers = MemberSafetyPermissionsUtils.canPruneGuildMembers;
          MemberSafetyPermissionsUtils;
          const tmp2 = guild;
          guild = GuildStore.getGuild(guild.id);
          if (guild == null) {
            guild = tmp2;
          }
          return canPruneGuildMembers(guild, UserStore.getCurrentUser(), PermissionStore);
        };
        const items1 = [guild];
        cResult[1] = guild;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
      if (cResult[4] !== stateFromStores) {
        class S {
          constructor() {
            if (!stateFromStores) {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
            }
          }
        }
        const items2 = [stateFromStores];
        cResult[4] = stateFromStores;
        cResult[5] = S;
        cResult[6] = items2;
        tmp12 = items2;
      } else {
        class S {
          constructor() {
            if (!stateFromStores) {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
            }
          }
        }
        tmp12 = cResult[6];
      }
      const effect = react.useEffect(S, tmp12);
      let tmp14 = null;
      if (stateFromStores) {
        class S {
          constructor() {
            if (!stateFromStores) {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
            }
          }
        }
        tmp14 = tmp15;
      }
      return tmp14;
    }
  : (guild) => {
      guild = guild.guild;
      let obj = guild(504);
      const items = [GuildStore, PermissionStore, UserStore];
      const items1 = [guild];
      const stateFromStores = obj.useStateFromStores(
        items,
        () => {
          const canPruneGuildMembers = MemberSafetyPermissionsUtils.canPruneGuildMembers;
          MemberSafetyPermissionsUtils;
          const tmp2 = guild;
          guild = GuildStore.getGuild(guild.id);
          if (guild == null) {
            guild = tmp2;
          }
          return canPruneGuildMembers(guild, UserStore.getCurrentUser(), PermissionStore);
        },
        items1,
      );
      const items2 = [stateFromStores];
      const effect = react.useEffect(() => {
        if (!stateFromStores) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        }
      }, items2);
      let tmp3 = null;
      if (stateFromStores) {
        const obj2 = { guild };
        tmp3 = closure_11(closure_13, obj2);
      }
      return tmp3;
    };
const result = size.fileFinishedImporting("modules/guild_settings/native/MembersPruneActionSheet.tsx");

export default tmp4;
