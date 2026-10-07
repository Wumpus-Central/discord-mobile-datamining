// === Module 17720: GuildSettingsAutoModeration ===

// Module 17720 (GuildSettingsAutoModeration)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5975 */;
import TableRowGroup from "TableRowGroup" /* 6081 */;
import AutomodTriggerConfigs from "AutomodTriggerConfigs" /* 17725 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const AutomodStore = fn(17721);
({ useAutomodRulesList: closure_4, useSyncAutomodRulesEffect: hasOwnProperty } = AutomodStore);
let closure_6 = fn(17723).useAutomodEditingRuleState;
const Constants = fn(1085);
({ GuildSettingsSections: closure_7, HelpdeskArticles: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { stack: { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING }, loading: null };
let obj3 = { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj2.loading = { paddingVertical: nativeDefault.space.PX_24 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { paddingVertical: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/GuildSettingsAutoModeration.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(navigation[11]).c(24);
  guildId = guildId.guildId;
  const contentContainerStyle = guildId.contentContainerStyle;
  let tmp4 = closure_12();
  importDefault = tmp4;
  let obj = guildId(navigation[11]);
  navigation = guildId(navigation[12]).useNavigation();
  first = first(setEditingRule(guildId), 1)[0];
  rulesByTriggerType = rulesByTriggerType(guildId).rulesByTriggerType;
  const tmp7 = createNewEditingRule();
  setEditingRule = tmp7.setEditingRule;
  createNewEditingRule = tmp7.createNewEditingRule;
  let obj2 = guildId(navigation[12]);
  const availableTriggerTypes = guildId(navigation[8]).useAvailableTriggerTypes(guildId);
  if (cResult[0] === createNewEditingRule) {
    if (cResult[1] === guildId) {
      if (cResult[2] === navigation) {
        if (cResult[3] === rulesByTriggerType) {
          if (cResult[4] === setEditingRule) {
            let tmp9 = cResult[5];
          }
          constants2 = tmp9;
          if (cResult[6] === availableTriggerTypes) {
            if (cResult[7] === first) {
              if (cResult[8] === tmp9) {
                if (cResult[9] === tmp4.loading) {
                  let tmp10 = cResult[10];
                }
                const _Symbol = Symbol;
                class D {
                  constructor() {
                    if (closure_3) {
                      tmp4 = jsx;
                      tmp5 = closure_0;
                      tmp6 = closure_2;
                      obj = { style: null };
                      tmp7 = closure_1;
                      obj.style = closure_1.loading;
                      mapped = jsx(closure_0(closure_2[15]).ActivityIndicator, obj);
                    } else {
                      tmp = globalThis;
                      _Object = Object;
                      tmp2 = closure_7;
                      entries = Object.entries(closure_7);
                      mapped = entries.map((item) => {
                        [tmp2, arr] = first(item, 2);
                        if (0 === arr.length) {
                          return null;
                        } else {
                          let obj = navigation;
                          if (guildId(navigation[8]).AutomodTriggerCategory.MEMBERS === tmp2) {
                            const intl2 = guildId(obj[9]).intl;
                            let stringResult = intl2.string(guildId(obj[9]).t.sx4E5v);
                          } else if (guildId(obj[8]).AutomodTriggerCategory.CONTENT === tmp2) {
                            const intl = guildId(obj[9]).intl;
                            stringResult = intl.string(guildId(obj[9]).t.fphZb0);
                          }
                          obj = { title: stringResult, hasIcons: true, children: arr.map(closure_1_8) };
                          closure_2_9(guildId(navigation[16]).TableRowGroup, obj, tmp2);
                        }
                        const tmp = first(item, 2);
                      });
                    }
                    return mapped;
                  }
                }
                if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj4 = { variant: "text-sm/normal", color: "text-default", children: null };
                  class D {
                    constructor() {
                      if (closure_3) {
                        tmp4 = jsx;
                        tmp5 = closure_0;
                        tmp6 = closure_2;
                        obj = { style: null };
                        tmp7 = closure_1;
                        obj.style = closure_1.loading;
                        mapped = jsx(closure_0(closure_2[15]).ActivityIndicator, obj);
                      } else {
                        tmp = globalThis;
                        _Object = Object;
                        tmp2 = closure_7;
                        entries = Object.entries(closure_7);
                        mapped = entries.map((item) => {
                          [tmp2, arr] = first(item, 2);
                          if (0 === arr.length) {
                            return null;
                          } else {
                            let obj = navigation;
                            if (guildId(navigation[8]).AutomodTriggerCategory.MEMBERS === tmp2) {
                              const intl2 = guildId(obj[9]).intl;
                              let stringResult = intl2.string(guildId(obj[9]).t.sx4E5v);
                            } else if (guildId(obj[8]).AutomodTriggerCategory.CONTENT === tmp2) {
                              const intl = guildId(obj[9]).intl;
                              stringResult = intl.string(guildId(obj[9]).t.fphZb0);
                            }
                            obj = { title: stringResult, hasIcons: true, children: arr.map(closure_1_8) };
                            closure_2_9(guildId(navigation[16]).TableRowGroup, obj, tmp2);
                          }
                          const tmp = first(item, 2);
                        });
                      }
                      return mapped;
                    }
                  }
                  obj4.children = obj5.string(tmp(tmp2[9]).t.EwuSCR);
                  const tmp14 = closure_9(tmp(tmp2[17]).Text, obj4);
                  cResult[11] = tmp14;
                }
                const _Symbol2 = Symbol;
                if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj6 = { children: null };
                  let items = [, ];
                  class D {
                    constructor() {
                      if (closure_3) {
                        tmp4 = jsx;
                        tmp5 = closure_0;
                        tmp6 = closure_2;
                        obj = { style: null };
                        tmp7 = closure_1;
                        obj.style = closure_1.loading;
                        mapped = jsx(closure_0(closure_2[15]).ActivityIndicator, obj);
                      } else {
                        tmp = globalThis;
                        _Object = Object;
                        tmp2 = closure_7;
                        entries = Object.entries(closure_7);
                        mapped = entries.map((item) => {
                          [tmp2, arr] = first(item, 2);
                          if (0 === arr.length) {
                            return null;
                          } else {
                            let obj = navigation;
                            if (guildId(navigation[8]).AutomodTriggerCategory.MEMBERS === tmp2) {
                              const intl2 = guildId(obj[9]).intl;
                              let stringResult = intl2.string(guildId(obj[9]).t.sx4E5v);
                            } else if (guildId(obj[8]).AutomodTriggerCategory.CONTENT === tmp2) {
                              const intl = guildId(obj[9]).intl;
                              stringResult = intl.string(guildId(obj[9]).t.fphZb0);
                            }
                            obj = { title: stringResult, hasIcons: true, children: arr.map(closure_1_8) };
                            closure_2_9(guildId(navigation[16]).TableRowGroup, obj, tmp2);
                          }
                          const tmp = first(item, 2);
                        });
                      }
                      return mapped;
                    }
                  }
                  const obj7 = { variant: "text-sm/normal", color: "text-default", children: null };
                  let intl = tmp(tmp2[9]).intl;
                  const obj8 = { helpUrl: require("HelpdeskUtils").getArticleURL(constants2.GUILD_AUTOMOD_BLOCKED_MESSAGE) };
                  obj7.children = intl.format(tmp(tmp2[9]).t["B+sgGt"], obj8);
                  items[1] = closure_9(tmp(tmp2[17]).Text, obj7);
                  obj6.children = items;
                  const tmp20 = closure_10(tmp(tmp2[18]).Stack, obj6);
                  cResult[12] = tmp20;
                  let tmp15 = tmp20;
                  const obj9 = require("HelpdeskUtils");
                } else {
                  tmp15 = cResult[12];
                }
                if (cResult[13] !== tmp10) {
                  const tmp10Result = tmp10();
                  cResult[13] = tmp10;
                  class D {
                    constructor() {
                      if (closure_3) {
                        tmp4 = jsx;
                        tmp5 = closure_0;
                        tmp6 = closure_2;
                        obj = { style: null };
                        tmp7 = closure_1;
                        obj.style = closure_1.loading;
                        mapped = jsx(closure_0(closure_2[15]).ActivityIndicator, obj);
                      } else {
                        tmp = globalThis;
                        _Object = Object;
                        tmp2 = closure_7;
                        entries = Object.entries(closure_7);
                        mapped = entries.map((item) => {
                          [tmp2, arr] = first(item, 2);
                          if (0 === arr.length) {
                            return null;
                          } else {
                            let obj = navigation;
                            if (guildId(navigation[8]).AutomodTriggerCategory.MEMBERS === tmp2) {
                              const intl2 = guildId(obj[9]).intl;
                              let stringResult = intl2.string(guildId(obj[9]).t.sx4E5v);
                            } else if (guildId(obj[8]).AutomodTriggerCategory.CONTENT === tmp2) {
                              const intl = guildId(obj[9]).intl;
                              stringResult = intl.string(guildId(obj[9]).t.fphZb0);
                            }
                            obj = { title: stringResult, hasIcons: true, children: arr.map(closure_1_8) };
                            closure_2_9(guildId(navigation[16]).TableRowGroup, obj, tmp2);
                          }
                          const tmp = first(item, 2);
                        });
                      }
                      return mapped;
                    }
                  }
                  cResult[14] = tmp10Result;
                  let tmp21 = tmp10Result;
                } else {
                  tmp21 = cResult[14];
                }
                if (cResult[15] === tmp4.stack) {
                  if (cResult[16] === tmp21) {
                    let tmp23 = cResult[17];
                  }
                  if (cResult[18] === contentContainerStyle) {
                    if (cResult[19] === tmp23) {
                      let tmp27 = cResult[20];
                    }
                    const _Symbol3 = Symbol;
                    class D {
                      constructor() {
                        if (closure_3) {
                          tmp4 = jsx;
                          tmp5 = closure_0;
                          tmp6 = closure_2;
                          obj = { style: null };
                          tmp7 = closure_1;
                          obj.style = closure_1.loading;
                          mapped = jsx(closure_0(closure_2[15]).ActivityIndicator, obj);
                        } else {
                          tmp = globalThis;
                          _Object = Object;
                          tmp2 = closure_7;
                          entries = Object.entries(closure_7);
                          mapped = entries.map((item) => {
                            [tmp2, arr] = first(item, 2);
                            if (0 === arr.length) {
                              return null;
                            } else {
                              let obj = navigation;
                              if (guildId(navigation[8]).AutomodTriggerCategory.MEMBERS === tmp2) {
                                const intl2 = guildId(obj[9]).intl;
                                let stringResult = intl2.string(guildId(obj[9]).t.sx4E5v);
                              } else if (guildId(obj[8]).AutomodTriggerCategory.CONTENT === tmp2) {
                                const intl = guildId(obj[9]).intl;
                                stringResult = intl.string(guildId(obj[9]).t.fphZb0);
                              }
                              obj = { title: stringResult, hasIcons: true, children: arr.map(closure_1_8) };
                              closure_2_9(guildId(navigation[16]).TableRowGroup, obj, tmp2);
                            }
                            const tmp = first(item, 2);
                          });
                        }
                        return mapped;
                      }
                    }
                    if (cResult[22] !== tmp27) {
                      const obj10 = { children: null };
                      class D {
                        constructor() {
                          if (closure_3) {
                            tmp4 = jsx;
                            tmp5 = closure_0;
                            tmp6 = closure_2;
                            obj = { style: null };
                            tmp7 = closure_1;
                            obj.style = closure_1.loading;
                            mapped = jsx(closure_0(closure_2[15]).ActivityIndicator, obj);
                          } else {
                            tmp = globalThis;
                            _Object = Object;
                            tmp2 = closure_7;
                            entries = Object.entries(closure_7);
                            mapped = entries.map((item) => {
                              [tmp2, arr] = first(item, 2);
                              if (0 === arr.length) {
                                return null;
                              } else {
                                let obj = navigation;
                                if (guildId(navigation[8]).AutomodTriggerCategory.MEMBERS === tmp2) {
                                  const intl2 = guildId(obj[9]).intl;
                                  let stringResult = intl2.string(guildId(obj[9]).t.sx4E5v);
                                } else if (guildId(obj[8]).AutomodTriggerCategory.CONTENT === tmp2) {
                                  const intl = guildId(obj[9]).intl;
                                  stringResult = intl.string(guildId(obj[9]).t.fphZb0);
                                }
                                obj = { title: stringResult, hasIcons: true, children: arr.map(closure_1_8) };
                                closure_2_9(guildId(navigation[16]).TableRowGroup, obj, tmp2);
                              }
                              const tmp = first(item, 2);
                            });
                          }
                          return mapped;
                        }
                      }
                      tmp36[0] = tmp27;
                      tmp36[1] = tmp32;
                      obj10.children = tmp36;
                      const tmp37 = closure_10(closure_11, obj10);
                      cResult[22] = tmp27;
                      cResult[23] = tmp37;
                      let tmp33 = tmp37;
                    } else {
                      tmp33 = cResult[23];
                    }
                    return tmp33;
                  }
                  class D {
                    constructor() {
                      if (closure_3) {
                        tmp4 = jsx;
                        tmp5 = closure_0;
                        tmp6 = closure_2;
                        obj = { style: null };
                        tmp7 = closure_1;
                        obj.style = closure_1.loading;
                        mapped = jsx(closure_0(closure_2[15]).ActivityIndicator, obj);
                      } else {
                        tmp = globalThis;
                        _Object = Object;
                        tmp2 = closure_7;
                        entries = Object.entries(closure_7);
                        mapped = entries.map((item) => {
                          [tmp2, arr] = first(item, 2);
                          if (0 === arr.length) {
                            return null;
                          } else {
                            let obj = navigation;
                            if (guildId(navigation[8]).AutomodTriggerCategory.MEMBERS === tmp2) {
                              const intl2 = guildId(obj[9]).intl;
                              let stringResult = intl2.string(guildId(obj[9]).t.sx4E5v);
                            } else if (guildId(obj[8]).AutomodTriggerCategory.CONTENT === tmp2) {
                              const intl = guildId(obj[9]).intl;
                              stringResult = intl.string(guildId(obj[9]).t.fphZb0);
                            }
                            obj = { title: stringResult, hasIcons: true, children: arr.map(closure_1_8) };
                            closure_2_9(guildId(navigation[16]).TableRowGroup, obj, tmp2);
                          }
                          const tmp = first(item, 2);
                        });
                      }
                      return mapped;
                    }
                  }
                  tmp29[0] = contentContainerStyle;
                  tmp29[1] = tmp23;
                  const tmp30 = closure_9(tmp(tmp2[20]).Form, tmp29);
                  cResult[18] = contentContainerStyle;
                  cResult[19] = tmp23;
                  cResult[20] = tmp30;
                  tmp27 = tmp30;
                }
                const obj11 = { style: tmp4.stack, spacing: require("native").space.PX_24, children: null };
                const items1 = [tmp15, tmp21];
                obj11.children = items1;
                const tmp26 = closure_10(tmp(tmp2[18]).Stack, obj11);
                cResult[15] = tmp4.stack;
                cResult[16] = tmp21;
                cResult[17] = tmp26;
                tmp23 = tmp26;
              }
            }
          }
          class D {
            constructor() {
              if (closure_3) {
                tmp4 = jsx;
                tmp5 = closure_0;
                tmp6 = closure_2;
                obj = { style: null };
                tmp7 = closure_1;
                obj.style = closure_1.loading;
                mapped = jsx(closure_0(closure_2[15]).ActivityIndicator, obj);
              } else {
                tmp = globalThis;
                _Object = Object;
                tmp2 = closure_7;
                entries = Object.entries(closure_7);
                mapped = entries.map((item) => {
                  [tmp2, arr] = first(item, 2);
                  if (0 === arr.length) {
                    return null;
                  } else {
                    let obj = navigation;
                    if (guildId(navigation[8]).AutomodTriggerCategory.MEMBERS === tmp2) {
                      const intl2 = guildId(obj[9]).intl;
                      let stringResult = intl2.string(guildId(obj[9]).t.sx4E5v);
                    } else if (guildId(obj[8]).AutomodTriggerCategory.CONTENT === tmp2) {
                      const intl = guildId(obj[9]).intl;
                      stringResult = intl.string(guildId(obj[9]).t.fphZb0);
                    }
                    obj = { title: stringResult, hasIcons: true, children: arr.map(closure_1_8) };
                    closure_2_9(guildId(navigation[16]).TableRowGroup, obj, tmp2);
                  }
                  const tmp = first(item, 2);
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
    c0 = triggerType;
    let items = rulesByTriggerType[triggerType];
    if (items == null) {
      items = [];
    }
    if (0 === items.length) {
      const obj2 = { triggerType, onPress: null };
      c0 = undefined;
      obj2.onPress = () => {
        if (navigation.isFocused()) {
          let GUILD_AUTOMOD_RULE = closure_0;
          if (null != closure_0) {
            setEditingRule(GUILD_AUTOMOD_RULE);
          } else {
            createNewEditingRule(guildId, triggerType);
          }
          GUILD_AUTOMOD_RULE = constants.GUILD_AUTOMOD_RULE;
          const obj = { triggerType };
          navigation.push(GUILD_AUTOMOD_RULE, obj);
        }
      };
      return closure_1_9(closure_1(navigation[13]), obj2, triggerType);
    } else {
      const mapped = items.map((rule) => {
        triggerType = rule;
        return closure_2_9(closure_1(navigation[13]), {
          triggerType,
          rule,
          onPress: () => {
            if (navigation.isFocused()) {
              let GUILD_AUTOMOD_RULE = closure_0;
              if (null != closure_0) {
                setEditingRule(GUILD_AUTOMOD_RULE);
              } else {
                createNewEditingRule(guildId, triggerType);
              }
              GUILD_AUTOMOD_RULE = constants.GUILD_AUTOMOD_RULE;
              const obj = { triggerType };
              navigation.push(GUILD_AUTOMOD_RULE, obj);
            }
          }
        }, rule.id);
      });
      if (items.length < guildId(navigation[8]).triggerConfigs[triggerType].perGuildMaxCount) {
        let obj = { triggerType, onPress: null };
        c0 = undefined;
        obj.onPress = () => {
          if (navigation.isFocused()) {
            let GUILD_AUTOMOD_RULE = closure_0;
            if (null != closure_0) {
              setEditingRule(GUILD_AUTOMOD_RULE);
            } else {
              createNewEditingRule(guildId, triggerType);
            }
            GUILD_AUTOMOD_RULE = constants.GUILD_AUTOMOD_RULE;
            const obj = { triggerType };
            navigation.push(GUILD_AUTOMOD_RULE, obj);
          }
        };
        const _HermesInternal = HermesInternal;
        mapped.push(closure_1_9(closure_1(navigation[14]), obj, "" + triggerType + "-add"));
        const tmp4 = closure_1(navigation[14]);
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
  const obj3 = guildId(navigation[8]);
}) : ((contentContainerStyle) => {
  const guildId = contentContainerStyle.guildId;
  let rulesByTriggerType;
  _slicedToArray = undefined;
  c4 = undefined;
  function renderTriggerType(guildId) {
    c0 = guildId;
    let items = rulesByTriggerType[guildId];
    if (items == null) {
      items = [];
    }
    if (0 === items.length) {
      const obj2 = { triggerType: guildId, onPress: null };
      c0 = undefined;
      obj2.onPress = () => {
        if (focused.isFocused()) {
          let GUILD_AUTOMOD_RULE = closure_0;
          if (null != closure_0) {
            c3(GUILD_AUTOMOD_RULE);
          } else {
            c4(guildId, triggerType);
          }
          GUILD_AUTOMOD_RULE = constants.GUILD_AUTOMOD_RULE;
          const obj = { triggerType };
          focused.push(GUILD_AUTOMOD_RULE, obj);
        }
      };
      return closure_1_9(closure_1(rulesByTriggerType[13]), obj2, guildId);
    } else {
      const mapped = items.map((rule) => {
        triggerType = rule;
        return closure_2_9(focused(rulesByTriggerType[13]), {
          triggerType,
          rule,
          onPress: () => {
            if (focused.isFocused()) {
              let GUILD_AUTOMOD_RULE = closure_0;
              if (null != closure_0) {
                c3(GUILD_AUTOMOD_RULE);
              } else {
                c4(guildId, triggerType);
              }
              GUILD_AUTOMOD_RULE = constants.GUILD_AUTOMOD_RULE;
              const obj = { triggerType };
              focused.push(GUILD_AUTOMOD_RULE, obj);
            }
          }
        }, rule.id);
      });
      if (items.length < guildId(rulesByTriggerType[8]).triggerConfigs[guildId].perGuildMaxCount) {
        let obj = { triggerType: guildId, onPress: null };
        c0 = undefined;
        obj.onPress = () => {
          if (focused.isFocused()) {
            let GUILD_AUTOMOD_RULE = closure_0;
            if (null != closure_0) {
              c3(GUILD_AUTOMOD_RULE);
            } else {
              c4(guildId, triggerType);
            }
            GUILD_AUTOMOD_RULE = constants.GUILD_AUTOMOD_RULE;
            const obj = { triggerType };
            focused.push(GUILD_AUTOMOD_RULE, obj);
          }
        };
        const _HermesInternal = HermesInternal;
        mapped.push(closure_1_9(closure_1(rulesByTriggerType[14]), obj, "" + guildId + "-add"));
        const tmp4 = closure_1(rulesByTriggerType[14]);
      }
      return mapped;
    }
  }
  const tmp = closure_12();
  importDefault = guildId(rulesByTriggerType[12]).useNavigation();
  rulesByTriggerType = c4(guildId).rulesByTriggerType;
  let obj = guildId(rulesByTriggerType[12]);
  ({ setEditingRule: c3, createNewEditingRule: c4 } = closure_6());
  let tmp4 = closure_6();
  const availableTriggerTypes = guildId(rulesByTriggerType[8]).useAvailableTriggerTypes(guildId);
  const obj3 = { contentContainerStyle: contentContainerStyle.contentContainerStyle, children: null };
  const obj4 = { style: tmp.stack, spacing: require("native").space.PX_24, children: null };
  const obj5 = { children: null };
  const obj6 = { variant: "text-sm/normal", color: "text-default", children: null };
  let intl = guildId(rulesByTriggerType[9]).intl;
  obj6.children = intl.string(guildId(rulesByTriggerType[9]).t.EwuSCR);
  let items = [closure_9(guildId(rulesByTriggerType[17]).Text, obj6), ];
  const obj7 = { variant: "text-sm/normal", color: "text-default", children: null };
  let intl2 = guildId(rulesByTriggerType[9]).intl;
  const obj8 = { helpUrl: null };
  let obj2 = guildId(rulesByTriggerType[8]);
  obj8.helpUrl = require("HelpdeskUtils").getArticleURL(constants2.GUILD_AUTOMOD_BLOCKED_MESSAGE);
  obj7.children = intl2.format(guildId(rulesByTriggerType[9]).t["B+sgGt"], obj8);
  items[1] = closure_9(guildId(rulesByTriggerType[17]).Text, obj7);
  obj5.children = items;
  const items1 = [closure_10(guildId(rulesByTriggerType[18]).Stack, obj5), ];
  if (_slicedToArray(renderTriggerType(guildId), 1)[0]) {
    const obj10 = { style: tmp.loading };
    let mapped = closure_9(tmp2(tmp3[15]).ActivityIndicator, obj10);
  } else {
    const _Object = Object;
    const entries = Object.entries(availableTriggerTypes);
    mapped = entries.map((item) => {
      [tmp, arr] = item;
      if (0 === arr.length) {
        return null;
      } else {
        let obj = dependencyMap;
        if (AutomodTriggerConfigs.AutomodTriggerCategory.MEMBERS === tmp) {
          const intl2 = util.intl;
          let stringResult = intl2.string(util.t.sx4E5v);
        } else if (AutomodTriggerConfigs.AutomodTriggerCategory.CONTENT === tmp) {
          const intl = util.intl;
          stringResult = intl.string(util.t.fphZb0);
        }
        obj = { title: stringResult, hasIcons: true, children: arr.map(renderTriggerType) };
        options(TableRowGroup.TableRowGroup, obj, tmp);
      }
    });
  }
  const obj11 = { children: null };
  items1[1] = mapped;
  obj4.children = items1;
  obj3.children = closure_10(guildId(rulesByTriggerType[18]).Stack, obj4);
  const items2 = [closure_9(guildId(rulesByTriggerType[20]).Form, obj3), closure_9(guildId(rulesByTriggerType[21]).NavScrim, {})];
  obj11.children = items2;
  return closure_10(closure_11, obj11);
});