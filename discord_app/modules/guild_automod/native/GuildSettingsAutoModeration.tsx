// === Module 17674: GuildSettingsAutoModeration ===

// Module 17674 (GuildSettingsAutoModeration)
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5968 */;
import TableRowGroup2 from "TableRowGroup" /* 6074 */;
import GuildSettingsAutomodRuleStore from "GuildSettingsAutomodRuleStore" /* 17677 */;
import AutomodTriggerConfigs from "AutomodTriggerConfigs" /* 17679 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AutomodStore from "AutomodStore" /* 17675 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let constants2, importDefault, navigation;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ useAutomodRulesList: closure_4, useSyncAutomodRulesEffect: hasOwnProperty } = AutomodStore);
let closure_6 = GuildSettingsAutomodRuleStore.useAutomodEditingRuleState;
({ GuildSettingsSections: metroImportDefault, HelpdeskArticles: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { stack: obj2, loading: obj3 };
obj2 = { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_24 };
let closure_12 = createStyles(obj);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_1;
  let closure_8;
  let createNewEditingRule;
  let first;
  let format;
  let items;
  let items1;
  let obj8;
  let obj9;
  let prop;
  let rulesByTriggerType;
  let setEditingRule;
  const tmp = guildId;
  let tmp2 = navigation;
  let obj = guildId(navigation[11]);
  const cResult = obj.c(24);
  guildId = guildId.guildId;
  const contentContainerStyle = guildId.contentContainerStyle;
  let tmp4 = closure_12();
  importDefault = tmp4;
  let obj2 = guildId(navigation[12]);
  navigation = obj2.useNavigation();
  first = first(setEditingRule(guildId), 1)[0];
  rulesByTriggerType = rulesByTriggerType(guildId).rulesByTriggerType;
  const tmp7 = createNewEditingRule();
  setEditingRule = tmp7.setEditingRule;
  createNewEditingRule = tmp7.createNewEditingRule;
  const obj3 = guildId(navigation[8]);
  const availableTriggerTypes = obj3.useAvailableTriggerTypes(guildId);
  if (cResult[0] === createNewEditingRule) {
    if (cResult[1] === guildId) {
      if (cResult[2] === navigation) {
        if (cResult[3] === rulesByTriggerType) {
          let tmp9;
          if (cResult[4] === setEditingRule) {
            tmp9 = cResult[5];
          }
          constants2 = tmp9;
          if (cResult[6] === availableTriggerTypes) {
            if (cResult[7] === first) {
              if (cResult[8] === tmp9) {
                let tmp10;
                let tmp15;
                let tmp22;
                if (cResult[9] === tmp4.loading) {
                  tmp10 = cResult[10];
                }
                const _Symbol = Symbol;
                class D {
                  constructor() {
                    let mapped;
                    if (first) {
                      let obj = { style: closure_1.loading };
                      mapped = React4(ActivityIndicator_ActivityIndicator.ActivityIndicator, obj);
                    } else {
                      const tmp2 = globalThis;
                      const _Object = Object;
                      const entries = Object.entries(availableTriggerTypes);
                      mapped = entries.map((item) => {
                        let arr;
                        let tmp2;
                        [tmp2, arr] = first(item, 2);
                        let tmp6Result = null;
                        first(item, 2);
                        if (0 !== arr.length) {
                          let stringResult;
                          const TableRowGroup = guildId(navigation[16]).TableRowGroup;
                          if (guildId(navigation[8]).AutomodTriggerCategory.MEMBERS === tmp2) {
                            const intl2 = guildId(navigation[9]).intl;
                            stringResult = intl2.string(guildId(navigation[9]).t.sx4E5v);
                          } else if (guildId(navigation[8]).AutomodTriggerCategory.CONTENT === tmp2) {
                            const intl = guildId(navigation[9]).intl;
                            stringResult = intl.string(guildId(navigation[9]).t.fphZb0);
                          }
                          const obj = { title: stringResult, hasIcons: true, children: arr.map(closure_1_8) };
                          tmp6Result = closure_2_9(TableRowGroup, obj, tmp2);
                        }
                        return tmp6Result;
                      });
                    }
                    return mapped;
                  }
                }
                const stack = tmp4.stack;
                if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj4 = { variant: "text-sm/normal", color: "text-default", children: obj5.string(tmp(tmp2[9]).t.EwuSCR) };
                  const Text = tmp(tmp2[17]).Text;
                  class D {
                    constructor() {
                      let mapped;
                      if (first) {
                        let obj = { style: closure_1.loading };
                        mapped = React4(ActivityIndicator_ActivityIndicator.ActivityIndicator, obj);
                      } else {
                        const tmp2 = globalThis;
                        const _Object = Object;
                        const entries = Object.entries(availableTriggerTypes);
                        mapped = entries.map((item) => {
                          let arr;
                          let tmp2;
                          [tmp2, arr] = first(item, 2);
                          let tmp6Result = null;
                          first(item, 2);
                          if (0 !== arr.length) {
                            let stringResult;
                            const TableRowGroup = guildId(navigation[16]).TableRowGroup;
                            if (guildId(navigation[8]).AutomodTriggerCategory.MEMBERS === tmp2) {
                              const intl2 = guildId(navigation[9]).intl;
                              stringResult = intl2.string(guildId(navigation[9]).t.sx4E5v);
                            } else if (guildId(navigation[8]).AutomodTriggerCategory.CONTENT === tmp2) {
                              const intl = guildId(navigation[9]).intl;
                              stringResult = intl.string(guildId(navigation[9]).t.fphZb0);
                            }
                            const obj = { title: stringResult, hasIcons: true, children: arr.map(closure_1_8) };
                            tmp6Result = closure_2_9(TableRowGroup, obj, tmp2);
                          }
                          return tmp6Result;
                        });
                      }
                      return mapped;
                    }
                  }
                  cResult[11] = closure_9(Text, obj4);
                  const tmp14 = closure_9(Text, obj4);
                }
                const _Symbol2 = Symbol;
                if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj6 = { children: items };
                  items = [, ];
                  class D {
                    constructor() {
                      let mapped;
                      if (first) {
                        let obj = { style: closure_1.loading };
                        mapped = React4(ActivityIndicator_ActivityIndicator.ActivityIndicator, obj);
                      } else {
                        const tmp2 = globalThis;
                        const _Object = Object;
                        const entries = Object.entries(availableTriggerTypes);
                        mapped = entries.map((item) => {
                          let arr;
                          let tmp2;
                          [tmp2, arr] = first(item, 2);
                          let tmp6Result = null;
                          first(item, 2);
                          if (0 !== arr.length) {
                            let stringResult;
                            const TableRowGroup = guildId(navigation[16]).TableRowGroup;
                            if (guildId(navigation[8]).AutomodTriggerCategory.MEMBERS === tmp2) {
                              const intl2 = guildId(navigation[9]).intl;
                              stringResult = intl2.string(guildId(navigation[9]).t.sx4E5v);
                            } else if (guildId(navigation[8]).AutomodTriggerCategory.CONTENT === tmp2) {
                              const intl = guildId(navigation[9]).intl;
                              stringResult = intl.string(guildId(navigation[9]).t.fphZb0);
                            }
                            const obj = { title: stringResult, hasIcons: true, children: arr.map(closure_1_8) };
                            tmp6Result = closure_2_9(TableRowGroup, obj, tmp2);
                          }
                          return tmp6Result;
                        });
                      }
                      return mapped;
                    }
                  }
                  const Stack = tmp(tmp2[18]).Stack;
                  const obj7 = { variant: "text-sm/normal", color: "text-default", children: format(prop, obj8) };
                  const Text2 = tmp(tmp2[17]).Text;
                  let intl = tmp(tmp2[9]).intl;
                  format = intl.format;
                  obj8 = { helpUrl: obj9.getArticleURL(constants2.GUILD_AUTOMOD_BLOCKED_MESSAGE) };
                  prop = tmp(tmp2[9]).t["B+sgGt"];
                  obj9 = require("HelpdeskUtils");
                  items[1] = closure_9(Text2, obj7);
                  const tmp21 = closure_10(Stack, obj6);
                  cResult[12] = tmp21;
                  tmp15 = tmp21;
                } else {
                  tmp15 = cResult[12];
                }
                if (cResult[13] !== tmp10) {
                  const tmp10Result = tmp10();
                  cResult[13] = tmp10;
                  class D {
                    constructor() {
                      let mapped;
                      if (first) {
                        let obj = { style: closure_1.loading };
                        mapped = React4(ActivityIndicator_ActivityIndicator.ActivityIndicator, obj);
                      } else {
                        const tmp2 = globalThis;
                        const _Object = Object;
                        const entries = Object.entries(availableTriggerTypes);
                        mapped = entries.map((item) => {
                          let arr;
                          let tmp2;
                          [tmp2, arr] = first(item, 2);
                          let tmp6Result = null;
                          first(item, 2);
                          if (0 !== arr.length) {
                            let stringResult;
                            const TableRowGroup = guildId(navigation[16]).TableRowGroup;
                            if (guildId(navigation[8]).AutomodTriggerCategory.MEMBERS === tmp2) {
                              const intl2 = guildId(navigation[9]).intl;
                              stringResult = intl2.string(guildId(navigation[9]).t.sx4E5v);
                            } else if (guildId(navigation[8]).AutomodTriggerCategory.CONTENT === tmp2) {
                              const intl = guildId(navigation[9]).intl;
                              stringResult = intl.string(guildId(navigation[9]).t.fphZb0);
                            }
                            const obj = { title: stringResult, hasIcons: true, children: arr.map(closure_1_8) };
                            tmp6Result = closure_2_9(TableRowGroup, obj, tmp2);
                          }
                          return tmp6Result;
                        });
                      }
                      return mapped;
                    }
                  }
                  cResult[14] = tmp10Result;
                  tmp22 = tmp10Result;
                } else {
                  tmp22 = cResult[14];
                }
                if (cResult[15] === tmp4.stack) {
                  let tmp24;
                  if (cResult[16] === tmp22) {
                    tmp24 = cResult[17];
                  }
                  if (cResult[18] === contentContainerStyle) {
                    let tmp28;
                    let tmp34;
                    if (cResult[19] === tmp24) {
                      tmp28 = cResult[20];
                    }
                    const _Symbol3 = Symbol;
                    class D {
                      constructor() {
                        let mapped;
                        if (first) {
                          let obj = { style: closure_1.loading };
                          mapped = React4(ActivityIndicator_ActivityIndicator.ActivityIndicator, obj);
                        } else {
                          const tmp2 = globalThis;
                          const _Object = Object;
                          const entries = Object.entries(availableTriggerTypes);
                          mapped = entries.map((item) => {
                            let arr;
                            let tmp2;
                            [tmp2, arr] = first(item, 2);
                            let tmp6Result = null;
                            first(item, 2);
                            if (0 !== arr.length) {
                              let stringResult;
                              const TableRowGroup = guildId(navigation[16]).TableRowGroup;
                              if (guildId(navigation[8]).AutomodTriggerCategory.MEMBERS === tmp2) {
                                const intl2 = guildId(navigation[9]).intl;
                                stringResult = intl2.string(guildId(navigation[9]).t.sx4E5v);
                              } else if (guildId(navigation[8]).AutomodTriggerCategory.CONTENT === tmp2) {
                                const intl = guildId(navigation[9]).intl;
                                stringResult = intl.string(guildId(navigation[9]).t.fphZb0);
                              }
                              const obj = { title: stringResult, hasIcons: true, children: arr.map(closure_1_8) };
                              tmp6Result = closure_2_9(TableRowGroup, obj, tmp2);
                            }
                            return tmp6Result;
                          });
                        }
                        return mapped;
                      }
                    }
                    if (cResult[22] !== tmp28) {
                      const obj10 = { children: tmp37 };
                      class D {
                        constructor() {
                          let mapped;
                          if (first) {
                            let obj = { style: closure_1.loading };
                            mapped = React4(ActivityIndicator_ActivityIndicator.ActivityIndicator, obj);
                          } else {
                            const tmp2 = globalThis;
                            const _Object = Object;
                            const entries = Object.entries(availableTriggerTypes);
                            mapped = entries.map((item) => {
                              let arr;
                              let tmp2;
                              [tmp2, arr] = first(item, 2);
                              let tmp6Result = null;
                              first(item, 2);
                              if (0 !== arr.length) {
                                let stringResult;
                                const TableRowGroup = guildId(navigation[16]).TableRowGroup;
                                if (guildId(navigation[8]).AutomodTriggerCategory.MEMBERS === tmp2) {
                                  const intl2 = guildId(navigation[9]).intl;
                                  stringResult = intl2.string(guildId(navigation[9]).t.sx4E5v);
                                } else if (guildId(navigation[8]).AutomodTriggerCategory.CONTENT === tmp2) {
                                  const intl = guildId(navigation[9]).intl;
                                  stringResult = intl.string(guildId(navigation[9]).t.fphZb0);
                                }
                                const obj = { title: stringResult, hasIcons: true, children: arr.map(closure_1_8) };
                                tmp6Result = closure_2_9(TableRowGroup, obj, tmp2);
                              }
                              return tmp6Result;
                            });
                          }
                          return mapped;
                        }
                      }
                      tmp37[0] = tmp28;
                      tmp37[1] = tmp33;
                      const tmp38 = closure_10(closure_11, obj10);
                      cResult[22] = tmp28;
                      cResult[23] = tmp38;
                      tmp34 = tmp38;
                    } else {
                      tmp34 = cResult[23];
                    }
                    return tmp34;
                  }
                  class D {
                    constructor() {
                      let mapped;
                      if (first) {
                        let obj = { style: closure_1.loading };
                        mapped = React4(ActivityIndicator_ActivityIndicator.ActivityIndicator, obj);
                      } else {
                        const tmp2 = globalThis;
                        const _Object = Object;
                        const entries = Object.entries(availableTriggerTypes);
                        mapped = entries.map((item) => {
                          let arr;
                          let tmp2;
                          [tmp2, arr] = first(item, 2);
                          let tmp6Result = null;
                          first(item, 2);
                          if (0 !== arr.length) {
                            let stringResult;
                            const TableRowGroup = guildId(navigation[16]).TableRowGroup;
                            if (guildId(navigation[8]).AutomodTriggerCategory.MEMBERS === tmp2) {
                              const intl2 = guildId(navigation[9]).intl;
                              stringResult = intl2.string(guildId(navigation[9]).t.sx4E5v);
                            } else if (guildId(navigation[8]).AutomodTriggerCategory.CONTENT === tmp2) {
                              const intl = guildId(navigation[9]).intl;
                              stringResult = intl.string(guildId(navigation[9]).t.fphZb0);
                            }
                            const obj = { title: stringResult, hasIcons: true, children: arr.map(closure_1_8) };
                            tmp6Result = closure_2_9(TableRowGroup, obj, tmp2);
                          }
                          return tmp6Result;
                        });
                      }
                      return mapped;
                    }
                  }
                  tmp30[0] = contentContainerStyle;
                  tmp30[1] = tmp24;
                  const tmp31 = closure_9(tmp(tmp2[20]).Form, tmp30);
                  cResult[18] = contentContainerStyle;
                  cResult[19] = tmp24;
                  cResult[20] = tmp31;
                  tmp28 = tmp31;
                }
                const obj11 = { style: stack, spacing: require("native").space.PX_24, children: items1 };
                const Stack2 = tmp(tmp2[18]).Stack;
                items1 = [tmp15, tmp22];
                const tmp27 = closure_10(Stack2, obj11);
                cResult[15] = tmp4.stack;
                cResult[16] = tmp22;
                cResult[17] = tmp27;
                tmp24 = tmp27;
              }
            }
          }
          class D {
            constructor() {
              let mapped;
              if (first) {
                let obj = { style: closure_1.loading };
                mapped = React4(ActivityIndicator_ActivityIndicator.ActivityIndicator, obj);
              } else {
                const tmp2 = globalThis;
                const _Object = Object;
                const entries = Object.entries(availableTriggerTypes);
                mapped = entries.map((item) => {
                  let arr;
                  let tmp2;
                  [tmp2, arr] = first(item, 2);
                  let tmp6Result = null;
                  first(item, 2);
                  if (0 !== arr.length) {
                    let stringResult;
                    const TableRowGroup = guildId(navigation[16]).TableRowGroup;
                    if (guildId(navigation[8]).AutomodTriggerCategory.MEMBERS === tmp2) {
                      const intl2 = guildId(navigation[9]).intl;
                      stringResult = intl2.string(guildId(navigation[9]).t.sx4E5v);
                    } else if (guildId(navigation[8]).AutomodTriggerCategory.CONTENT === tmp2) {
                      const intl = guildId(navigation[9]).intl;
                      stringResult = intl.string(guildId(navigation[9]).t.fphZb0);
                    }
                    const obj = { title: stringResult, hasIcons: true, children: arr.map(closure_1_8) };
                    tmp6Result = closure_2_9(TableRowGroup, obj, tmp2);
                  }
                  return tmp6Result;
                });
              }
              return mapped;
            }
          }
          cResult[6] = availableTriggerTypes;
          cResult[7] = first;
          cResult[8] = tmp9;
          cResult[9] = tmp4.loading;
          cResult[10] = D;
          tmp10 = D;
        }
      }
    }
  }
  const fn = function c(triggerType) {
    let items = rulesByTriggerType[triggerType];
    if (items == null) {
      items = [];
    }
    if (0 === items.length) {
      let c0;
      const obj2 = {
        triggerType,
        onPress: () => {
            if (navigation.isFocused()) {
              if (null != triggerType) {
                setEditingRule(tmp);
              } else {
                createNewEditingRule(guildId, triggerType);
              }
              const obj = { triggerType };
              navigation.push(metroImportDefault.GUILD_AUTOMOD_RULE, obj);
            }
          }
      };
      return closure_1_9(closure_1(navigation[13]), obj2, triggerType);
    } else {
      const mapped = items.map((rule) => {
        let obj = {
          triggerType,
          rule,
          onPress: () => {
            if (navigation.isFocused()) {
              if (null != triggerType) {
                setEditingRule(tmp);
              } else {
                createNewEditingRule(guildId, triggerType);
              }
              const obj = { triggerType };
              navigation.push(metroImportDefault.GUILD_AUTOMOD_RULE, obj);
            }
          }
        };
        triggerType = rule;
        return closure_2_9(closure_1(navigation[13]), obj, rule.id);
      });
      if (items.length < guildId(navigation[8]).triggerConfigs[triggerType].perGuildMaxCount) {
        const push = mapped.push;
        let obj = {
          triggerType,
          onPress: () => {
                if (navigation.isFocused()) {
                  if (null != triggerType) {
                    setEditingRule(tmp);
                  } else {
                    createNewEditingRule(guildId, triggerType);
                  }
                  const obj = { triggerType };
                  navigation.push(metroImportDefault.GUILD_AUTOMOD_RULE, obj);
                }
              }
        };
        c0 = undefined;
        const _HermesInternal = HermesInternal;
        const tmp4 = closure_1(navigation[14]);
        push(closure_1_9(tmp4, obj, "" + triggerType + "-add"));
      }
      return mapped;
    }
  };
  cResult[0] = createNewEditingRule;
  cResult[1] = guildId;
  cResult[2] = navigation;
  cResult[3] = rulesByTriggerType;
  cResult[4] = setEditingRule;
  cResult[5] = fn;
  tmp9 = fn;
}) : ((guildId) => {
  let Stack;
  let c3;
  let c4;
  let closure_1;
  let format;
  let intl;
  let items;
  let items1;
  let items2;
  let mapped;
  let obj4;
  let obj8;
  let obj9;
  let prop;
  guildId = guildId.guildId;
  let rulesByTriggerType;
  _slicedToArray = undefined;
  c4 = undefined;
  function renderTriggerType(guildId) {
    let triggerType = guildId;
    let items = rulesByTriggerType[guildId];
    if (items == null) {
      items = [];
    }
    if (0 === items.length) {
      let c0;
      const obj2 = {
        triggerType: guildId,
        onPress: () => {
            if (focused.isFocused()) {
              if (null != triggerType) {
                c3(tmp);
              } else {
                c4(guildId, triggerType);
              }
              const obj = { triggerType };
              focused.push(metroImportDefault.GUILD_AUTOMOD_RULE, obj);
            }
          }
      };
      return closure_1_9(closure_1(rulesByTriggerType[13]), obj2, guildId);
    } else {
      const mapped = items.map((rule) => {
        let obj = {
          triggerType,
          rule,
          onPress: () => {
            if (focused.isFocused()) {
              if (null != triggerType) {
                c3(tmp);
              } else {
                c4(guildId, triggerType);
              }
              const obj = { triggerType };
              focused.push(metroImportDefault.GUILD_AUTOMOD_RULE, obj);
            }
          }
        };
        triggerType = rule;
        return closure_2_9(focused(rulesByTriggerType[13]), obj, rule.id);
      });
      if (items.length < guildId(rulesByTriggerType[8]).triggerConfigs[guildId].perGuildMaxCount) {
        const push = mapped.push;
        let obj = {
          triggerType: guildId,
          onPress: () => {
                if (focused.isFocused()) {
                  if (null != triggerType) {
                    c3(tmp);
                  } else {
                    c4(guildId, triggerType);
                  }
                  const obj = { triggerType };
                  focused.push(metroImportDefault.GUILD_AUTOMOD_RULE, obj);
                }
              }
        };
        c0 = undefined;
        const _HermesInternal = HermesInternal;
        const tmp4 = closure_1(rulesByTriggerType[14]);
        push(closure_1_9(tmp4, obj, "" + guildId + "-add"));
      }
      return mapped;
    }
  }
  const contentContainerStyle = guildId.contentContainerStyle;
  const tmp = closure_12();
  let obj = guildId(rulesByTriggerType[12]);
  importDefault = obj.useNavigation();
  const first = _slicedToArray(renderTriggerType(guildId), 1)[0];
  rulesByTriggerType = c4(guildId).rulesByTriggerType;
  ({ setEditingRule: c3, createNewEditingRule: c4 } = closure_6());
  const tmp5 = closure_6();
  let obj2 = guildId(rulesByTriggerType[8]);
  const availableTriggerTypes = obj2.useAvailableTriggerTypes(guildId);
  const obj3 = { contentContainerStyle, children: closure_10(Stack, obj4) };
  const Form = guildId(rulesByTriggerType[20]).Form;
  obj4 = { style: tmp.stack, spacing: require("native").space.PX_24, children: items1 };
  Stack = guildId(rulesByTriggerType[18]).Stack;
  const obj5 = { children: items };
  const Stack2 = guildId(rulesByTriggerType[18]).Stack;
  const obj6 = { variant: "text-sm/normal", color: "text-default", children: intl.string(guildId(rulesByTriggerType[9]).t.EwuSCR) };
  const Text = guildId(rulesByTriggerType[17]).Text;
  intl = guildId(rulesByTriggerType[9]).intl;
  items = [closure_9(Text, obj6), ];
  const obj7 = { variant: "text-sm/normal", color: "text-default", children: format(prop, obj8) };
  const Text2 = guildId(rulesByTriggerType[17]).Text;
  let intl2 = guildId(rulesByTriggerType[9]).intl;
  format = intl2.format;
  obj8 = { helpUrl: obj9.getArticleURL(constants2.GUILD_AUTOMOD_BLOCKED_MESSAGE) };
  prop = guildId(rulesByTriggerType[9]).t["B+sgGt"];
  obj9 = require("HelpdeskUtils");
  items[1] = closure_9(Text2, obj7);
  items1 = [closure_10(Stack2, obj5), ];
  if (first) {
    const obj10 = { style: tmp.loading };
    mapped = closure_9(tmp2(tmp3[15]).ActivityIndicator, obj10);
  } else {
    const _Object = Object;
    const entries = Object.entries(availableTriggerTypes);
    mapped = entries.map((item) => {
      let arr;
      let tmp;
      [tmp, arr] = item;
      let tmp5Result = null;
      if (0 !== arr.length) {
        let stringResult;
        const TableRowGroup = TableRowGroup2.TableRowGroup;
        if (AutomodTriggerConfigs.AutomodTriggerCategory.MEMBERS === tmp) {
          const intl2 = intl3.intl;
          stringResult = intl2.string(intl3.t.sx4E5v);
        } else if (AutomodTriggerConfigs.AutomodTriggerCategory.CONTENT === tmp) {
          const intl = intl3.intl;
          stringResult = intl.string(intl3.t.fphZb0);
        }
        const obj = { title: stringResult, hasIcons: true, children: arr.map(renderTriggerType) };
        tmp5Result = React4(TableRowGroup, obj, tmp);
      }
      return tmp5Result;
    });
  }
  const obj11 = { children: items2 };
  items1[1] = mapped;
  items2 = [closure_9(Form, obj3), closure_9(tmp2(rulesByTriggerType[21]).NavScrim, {})];
  return closure_10(closure_11, obj11);
});
const result = size.fileFinishedImporting("modules/guild_automod/native/GuildSettingsAutoModeration.tsx");

export default tmp7;