// === Module 17763: GuildSettingsModalAuditLogFilter ===

// Module 17763 (GuildSettingsModalAuditLogFilter)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4600 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import fuzzysearchDefault from "fuzzysearch" /* 5709 */;
import FormRadio from "FormRadio" /* 6082 */;
import DetailedGuildIdentityUserRowDefault from "DetailedGuildIdentityUserRow" /* 10693 */;
import AuditLogUtils from "AuditLogUtils" /* 17761 */;
import AuditLogActionCreators from "AuditLogActionCreators" /* 17764 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import GuildSettingsAuditLogStore from "GuildSettingsAuditLogStore" /* 17759 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AuditLogFilterTypes = fn(1085).AuditLogFilterTypes;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4896);
let obj = { searchBar: { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_16 }, allUsersIconContainer: { height: 30, width: 30, alignItems: "center" } };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_13 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(13);
  ({ start, end, selected, guildId, userId, onPress } = arg0);
  if (cResult[0] !== selected) {
    const obj2 = { selected };
    cResult[0] = selected;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp4);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (cResult[2] !== selected) {
    const obj3 = { selected };
    const tmp8 = options(FormRadio.FormRadio, obj3);
    cResult[2] = selected;
    cResult[3] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === accessibilityRole) {
    if (cResult[5] === accessibilityState) {
      if (cResult[6] === end) {
        if (cResult[7] === guildId) {
          if (cResult[8] === onPress) {
            if (cResult[9] === start) {
              if (cResult[10] === tmp6) {
                if (cResult[11] === userId) {
                  let tmp9 = cResult[12];
                }
                return tmp9;
              }
            }
          }
        }
      }
    }
  }
  const tmp10 = options(DetailedGuildIdentityUserRowDefault, { start, end, userId, guildId, onPress, accessibilityRole, accessibilityState, trailing: tmp6 });
  cResult[4] = accessibilityRole;
  cResult[5] = accessibilityState;
  cResult[6] = end;
  cResult[7] = guildId;
  cResult[8] = onPress;
  cResult[9] = start;
  cResult[10] = tmp6;
  cResult[11] = userId;
  cResult[12] = tmp10;
  tmp9 = tmp10;
  const tmpResult = useA11yRolesNative;
}) : ((selected) => {
  selected = selected.selected;
  ({ start, end, guildId, userId, onPress } = selected);
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj2 = { start, end, userId, guildId, onPress, accessibilityRole, accessibilityState, trailing: null };
  obj2.trailing = options(FormRadio.FormRadio, { selected });
  return options(DetailedGuildIdentityUserRowDefault, obj2);
}));
ReactCompilerGating = fn(558);
let obj3 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/audit_log/native/GuildSettingsModalAuditLogFilter.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = filterType(576).c(39);
  ({ data, filterType } = guildId);
  guildId = guildId.guildId;
  let tmp4 = closure_12();
  dependencyMap = tmp4;
  const bottom = guildId(1618)().bottom;
  let obj = filterType(576);
  const navigation = filterType(1490).useNavigation();
  let obj2 = filterType(1490);
  let obj3 = first;
  first = navigation(first.useState(""), 2)[0];
  if (cResult[0] === data) {
    if (cResult[1] === first) {
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function _(value) {
          if (null != value.value) {
            let str1 = value.value.toString();
          } else {
            str1 = value.index.toString();
          }
          return str1;
        };
        cResult[5] = fn2;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] !== cResult[2]) {
        let obj4 = { data: tmp8, keyExtractor: tmp12 };
        cResult[6] = tmp8;
        cResult[7] = obj4;
        let tmp13 = obj4;
      } else {
        tmp13 = cResult[7];
      }
      const data1 = tmp13.data;
      const keyExtractor = tmp13.keyExtractor;
      if (cResult[8] === filterType) {
        if (cResult[9] === navigation) {
          let tmp14 = cResult[10];
          let tmp15 = cResult[11];
        }
        const effect = obj3.useEffect(tmp14, tmp15);
        if (cResult[12] === filterType) {
          if (cResult[13] === guildId) {
            closure_7 = tmp17;
            if (cResult[16] === data1.length) {
              if (cResult[17] === filterType) {
                if (cResult[18] === guildId) {
                  if (cResult[19] === tmp17) {
                    if (cResult[20] === keyExtractor) {
                      if (cResult[21] === tmp4.allUsersIconContainer) {
                        let tmp19 = cResult[22];
                      }
                      if (cResult[23] !== filterType) {
                        if (filterType === AuditLogFilterTypes.USER) {
                          let intl3 = filterType(1126).intl;
                          let stringResult = intl3.string(filterType(1126).t.pYHobK);
                        } else if (filterType === tmp21.ACTION) {
                          let intl2 = filterType(1126).intl;
                          stringResult = intl2.string(filterType(1126).t.I288Zx);
                        } else {
                          let intl = filterType(1126).intl;
                          stringResult = intl.string(filterType(1126).t["5h0QOP"]);
                        }
                        cResult[23] = filterType;
                        class M {
                          constructor(arg0) {
                            ({ item, index } = guildId);
                            value = item.value;
                            filterType = value;
                            selected = item.selected;
                            tmp = filterType;
                            tmp2 = closure_1_8;
                            if (filterType === closure_1_8.USER) {
                              tmp3 = null;
                              if (null !== value) {
                                tmp14 = closure_1_9;
                                tmp15 = closure_1_13;
                                obj1 = { start: null, end: null, selected: null, guildId: null, userId: null, onPress: null };
                                num = 0;
                                obj1.start = 0 === index;
                                tmp16 = data;
                                num2 = 1;
                                obj1.end = index === data.length - 1;
                                obj1.selected = selected;
                                tmp17 = selected;
                                obj1.guildId = selected;
                                obj1.userId = value.id;
                                obj1.onPress = function onPress() {
                                  return closure_7(!selected, value);
                                };
                                return closure_1_9(closure_1_13, obj1);
                              }
                            }
                            if (tmp === tmp2.USER) {
                              tmp8 = closure_1_9;
                              tmp9 = data;
                              obj6 = { style: null, children: null };
                              tmp10 = closure_2;
                              obj6.style = closure_2.allUsersIconContainer;
                              tmp11 = filterType;
                              tmp12 = closure_2;
                              obj7 = { size: null, source: null };
                              obj7.size = filterType(closure_2[21]).Icon.Sizes.MEDIUM;
                              tmp13 = guildId;
                              obj7.source = guildId(closure_2[22]);
                              obj6.children = closure_1_9(filterType(closure_2[21]).Icon, obj7);
                              tmp7 = closure_1_9(data, obj6);
                              tmp6 = closure_2;
                              tmp4 = closure_1_9;
                            } else {
                              tmp4 = closure_1_9;
                              tmp5 = guildId;
                              tmp6 = closure_2;
                              obj = { action: null };
                              obj.action = value;
                              tmp7 = closure_1_9(guildId(closure_2[23]), obj);
                            }
                            obj8 = {
                              start: 0 === index,
                              end: index === data.length - 1,
                              icon: tmp7,
                              label: item.label,
                              value: keyExtractor(item),
                              legacyCompat_selected: selected,
                              legacyCompat_onPress() {
                                                          return closure_7(!selected, value);
                                                        }
                            };
                            return tmp4(filterType(tmp6[24]).TableRadioRow, obj8);
                          }
                        }
                        cResult[24] = stringResult;
                      } else {
                        if (cResult[25] !== cResult[24]) {
                          const obj5 = { size: "md", placeholder: tmp20, onChange: null };
                          class M {
                            constructor(arg0) {
                              ({ item, index } = guildId);
                              value = item.value;
                              filterType = value;
                              selected = item.selected;
                              tmp = filterType;
                              tmp2 = closure_1_8;
                              if (filterType === closure_1_8.USER) {
                                tmp3 = null;
                                if (null !== value) {
                                  tmp14 = closure_1_9;
                                  tmp15 = closure_1_13;
                                  obj1 = { start: null, end: null, selected: null, guildId: null, userId: null, onPress: null };
                                  num = 0;
                                  obj1.start = 0 === index;
                                  tmp16 = data;
                                  num2 = 1;
                                  obj1.end = index === data.length - 1;
                                  obj1.selected = selected;
                                  tmp17 = selected;
                                  obj1.guildId = selected;
                                  obj1.userId = value.id;
                                  obj1.onPress = function onPress() {
                                    return closure_7(!selected, value);
                                  };
                                  return closure_1_9(closure_1_13, obj1);
                                }
                              }
                              if (tmp === tmp2.USER) {
                                tmp8 = closure_1_9;
                                tmp9 = data;
                                obj6 = { style: null, children: null };
                                tmp10 = closure_2;
                                obj6.style = closure_2.allUsersIconContainer;
                                tmp11 = filterType;
                                tmp12 = closure_2;
                                obj7 = { size: null, source: null };
                                obj7.size = filterType(closure_2[21]).Icon.Sizes.MEDIUM;
                                tmp13 = guildId;
                                obj7.source = guildId(closure_2[22]);
                                obj6.children = closure_1_9(filterType(closure_2[21]).Icon, obj7);
                                tmp7 = closure_1_9(data, obj6);
                                tmp6 = closure_2;
                                tmp4 = closure_1_9;
                              } else {
                                tmp4 = closure_1_9;
                                tmp5 = guildId;
                                tmp6 = closure_2;
                                obj = { action: null };
                                obj.action = value;
                                tmp7 = closure_1_9(guildId(closure_2[23]), obj);
                              }
                              obj8 = {
                                start: 0 === index,
                                end: index === data.length - 1,
                                icon: tmp7,
                                label: item.label,
                                value: keyExtractor(item),
                                legacyCompat_selected: selected,
                                legacyCompat_onPress() {
                                                              return closure_7(!selected, value);
                                                            }
                              };
                              return tmp4(filterType(tmp6[24]).TableRadioRow, obj8);
                            }
                          }
                          const tmp26 = closure_9(filterType(6554).SearchField, obj5);
                          cResult[25] = tmp20;
                          cResult[26] = tmp26;
                          let tmp24 = tmp26;
                        } else {
                          tmp24 = cResult[26];
                        }
                        if (cResult[27] === tmp4.searchBar) {
                          if (cResult[28] === tmp24) {
                            let tmp27 = cResult[29];
                          }
                          if (cResult[30] === data1) {
                            if (cResult[31] === keyExtractor) {
                              if (cResult[32] === tmp19) {
                                if (cResult[33] === bottom) {
                                  const _Symbol2 = Symbol;
                                  class M {
                                    constructor(arg0) {
                                      ({ item, index } = guildId);
                                      value = item.value;
                                      filterType = value;
                                      selected = item.selected;
                                      tmp = filterType;
                                      tmp2 = closure_1_8;
                                      if (filterType === closure_1_8.USER) {
                                        tmp3 = null;
                                        if (null !== value) {
                                          tmp14 = closure_1_9;
                                          tmp15 = closure_1_13;
                                          obj1 = { start: null, end: null, selected: null, guildId: null, userId: null, onPress: null };
                                          num = 0;
                                          obj1.start = 0 === index;
                                          tmp16 = data;
                                          num2 = 1;
                                          obj1.end = index === data.length - 1;
                                          obj1.selected = selected;
                                          tmp17 = selected;
                                          obj1.guildId = selected;
                                          obj1.userId = value.id;
                                          obj1.onPress = function onPress() {
                                            return closure_7(!selected, value);
                                          };
                                          return closure_1_9(closure_1_13, obj1);
                                        }
                                      }
                                      if (tmp === tmp2.USER) {
                                        tmp8 = closure_1_9;
                                        tmp9 = data;
                                        obj6 = { style: null, children: null };
                                        tmp10 = closure_2;
                                        obj6.style = closure_2.allUsersIconContainer;
                                        tmp11 = filterType;
                                        tmp12 = closure_2;
                                        obj7 = { size: null, source: null };
                                        obj7.size = filterType(closure_2[21]).Icon.Sizes.MEDIUM;
                                        tmp13 = guildId;
                                        obj7.source = guildId(closure_2[22]);
                                        obj6.children = closure_1_9(filterType(closure_2[21]).Icon, obj7);
                                        tmp7 = closure_1_9(data, obj6);
                                        tmp6 = closure_2;
                                        tmp4 = closure_1_9;
                                      } else {
                                        tmp4 = closure_1_9;
                                        tmp5 = guildId;
                                        tmp6 = closure_2;
                                        obj = { action: null };
                                        obj.action = value;
                                        tmp7 = closure_1_9(guildId(closure_2[23]), obj);
                                      }
                                      obj8 = {
                                        start: 0 === index,
                                        end: index === data.length - 1,
                                        icon: tmp7,
                                        label: item.label,
                                        value: keyExtractor(item),
                                        legacyCompat_selected: selected,
                                        legacyCompat_onPress() {
                                                                              return closure_7(!selected, value);
                                                                            }
                                      };
                                      return tmp4(filterType(tmp6[24]).TableRadioRow, obj8);
                                    }
                                  }
                                  if (cResult[36] === tmp27) {
                                    if (cResult[37] === tmp30) {
                                      let tmp35 = cResult[38];
                                    }
                                    return tmp35;
                                  }
                                  const items = [tmp27, cResult[34], tmp34];
                                  class N {
                                    constructor() {
                                      tmp = closure_3;
                                      if (AuditLogFilterTypes.USER === filterType) {
                                        tmp9 = closure_0;
                                        tmp10 = closure_2;
                                        intl3 = closure_0(closure_2[9]).intl;
                                        stringResult = intl3.string(closure_0(closure_2[9]).t["hxnY/q"]);
                                      } else if (tmp3.ACTION === tmp2) {
                                        tmp7 = closure_0;
                                        tmp8 = closure_2;
                                        intl2 = closure_0(closure_2[9]).intl;
                                        stringResult = intl2.string(closure_0(closure_2[9]).t.rautds);
                                      } else {
                                        tmp4 = closure_0;
                                        tmp5 = closure_2;
                                        intl = closure_0(closure_2[9]).intl;
                                        stringResult = intl.string(closure_0(closure_2[9]).t.pEasFX);
                                      }
                                      setOptionsResult = closure_3.setOptions({ headerTitle: stringResult });
                                      return;
                                    }
                                  }
                                  const tmp38 = closure_11(closure_10, { children: null });
                                  cResult[36] = tmp27;
                                  cResult[37] = cResult[34];
                                  cResult[38] = tmp38;
                                  tmp35 = tmp38;
                                  const obj6 = { children: null };
                                }
                              }
                            }
                          }
                          class M {
                            constructor(arg0) {
                              ({ item, index } = guildId);
                              value = item.value;
                              filterType = value;
                              selected = item.selected;
                              tmp = filterType;
                              tmp2 = closure_1_8;
                              if (filterType === closure_1_8.USER) {
                                tmp3 = null;
                                if (null !== value) {
                                  tmp14 = closure_1_9;
                                  tmp15 = closure_1_13;
                                  obj1 = { start: null, end: null, selected: null, guildId: null, userId: null, onPress: null };
                                  num = 0;
                                  obj1.start = 0 === index;
                                  tmp16 = data;
                                  num2 = 1;
                                  obj1.end = index === data.length - 1;
                                  obj1.selected = selected;
                                  tmp17 = selected;
                                  obj1.guildId = selected;
                                  obj1.userId = value.id;
                                  obj1.onPress = function onPress() {
                                    return closure_7(!selected, value);
                                  };
                                  return closure_1_9(closure_1_13, obj1);
                                }
                              }
                              if (tmp === tmp2.USER) {
                                tmp8 = closure_1_9;
                                tmp9 = data;
                                obj6 = { style: null, children: null };
                                tmp10 = closure_2;
                                obj6.style = closure_2.allUsersIconContainer;
                                tmp11 = filterType;
                                tmp12 = closure_2;
                                obj7 = { size: null, source: null };
                                obj7.size = filterType(closure_2[21]).Icon.Sizes.MEDIUM;
                                tmp13 = guildId;
                                obj7.source = guildId(closure_2[22]);
                                obj6.children = closure_1_9(filterType(closure_2[21]).Icon, obj7);
                                tmp7 = closure_1_9(data, obj6);
                                tmp6 = closure_2;
                                tmp4 = closure_1_9;
                              } else {
                                tmp4 = closure_1_9;
                                tmp5 = guildId;
                                tmp6 = closure_2;
                                obj = { action: null };
                                obj.action = value;
                                tmp7 = closure_1_9(guildId(closure_2[23]), obj);
                              }
                              obj8 = {
                                start: 0 === index,
                                end: index === data.length - 1,
                                icon: tmp7,
                                label: item.label,
                                value: keyExtractor(item),
                                legacyCompat_selected: selected,
                                legacyCompat_onPress() {
                                                              return closure_7(!selected, value);
                                                            }
                              };
                              return tmp4(filterType(tmp6[24]).TableRadioRow, obj8);
                            }
                          }
                          cResult[30] = data1;
                          cResult[31] = keyExtractor;
                          cResult[32] = tmp19;
                          cResult[33] = bottom;
                          class N {
                            constructor() {
                              tmp = closure_3;
                              if (AuditLogFilterTypes.USER === filterType) {
                                tmp9 = closure_0;
                                tmp10 = closure_2;
                                intl3 = closure_0(closure_2[9]).intl;
                                stringResult = intl3.string(closure_0(closure_2[9]).t["hxnY/q"]);
                              } else if (tmp3.ACTION === tmp2) {
                                tmp7 = closure_0;
                                tmp8 = closure_2;
                                intl2 = closure_0(closure_2[9]).intl;
                                stringResult = intl2.string(closure_0(closure_2[9]).t.rautds);
                              } else {
                                tmp4 = closure_0;
                                tmp5 = closure_2;
                                intl = closure_0(closure_2[9]).intl;
                                stringResult = intl.string(closure_0(closure_2[9]).t.pEasFX);
                              }
                              setOptionsResult = closure_3.setOptions({ headerTitle: stringResult });
                              return;
                            }
                          }
                          cResult[34] = tmp31;
                        }
                        class M {
                          constructor(arg0) {
                            ({ item, index } = guildId);
                            value = item.value;
                            filterType = value;
                            selected = item.selected;
                            tmp = filterType;
                            tmp2 = closure_1_8;
                            if (filterType === closure_1_8.USER) {
                              tmp3 = null;
                              if (null !== value) {
                                tmp14 = closure_1_9;
                                tmp15 = closure_1_13;
                                obj1 = { start: null, end: null, selected: null, guildId: null, userId: null, onPress: null };
                                num = 0;
                                obj1.start = 0 === index;
                                tmp16 = data;
                                num2 = 1;
                                obj1.end = index === data.length - 1;
                                obj1.selected = selected;
                                tmp17 = selected;
                                obj1.guildId = selected;
                                obj1.userId = value.id;
                                obj1.onPress = function onPress() {
                                  return closure_7(!selected, value);
                                };
                                return closure_1_9(closure_1_13, obj1);
                              }
                            }
                            if (tmp === tmp2.USER) {
                              tmp8 = closure_1_9;
                              tmp9 = data;
                              obj6 = { style: null, children: null };
                              tmp10 = closure_2;
                              obj6.style = closure_2.allUsersIconContainer;
                              tmp11 = filterType;
                              tmp12 = closure_2;
                              obj7 = { size: null, source: null };
                              obj7.size = filterType(closure_2[21]).Icon.Sizes.MEDIUM;
                              tmp13 = guildId;
                              obj7.source = guildId(closure_2[22]);
                              obj6.children = closure_1_9(filterType(closure_2[21]).Icon, obj7);
                              tmp7 = closure_1_9(data, obj6);
                              tmp6 = closure_2;
                              tmp4 = closure_1_9;
                            } else {
                              tmp4 = closure_1_9;
                              tmp5 = guildId;
                              tmp6 = closure_2;
                              obj = { action: null };
                              obj.action = value;
                              tmp7 = closure_1_9(guildId(closure_2[23]), obj);
                            }
                            obj8 = {
                              start: 0 === index,
                              end: index === data.length - 1,
                              icon: tmp7,
                              label: item.label,
                              value: keyExtractor(item),
                              legacyCompat_selected: selected,
                              legacyCompat_onPress() {
                                                          return closure_7(!selected, value);
                                                        }
                            };
                            return tmp4(filterType(tmp6[24]).TableRadioRow, obj8);
                          }
                        }
                        const obj7 = { style: tmp4.searchBar, children: tmp24 };
                        const tmp29 = closure_9(data1, obj7);
                        cResult[27] = tmp4.searchBar;
                        class N {
                          constructor() {
                            tmp = closure_3;
                            if (AuditLogFilterTypes.USER === filterType) {
                              tmp9 = closure_0;
                              tmp10 = closure_2;
                              intl3 = closure_0(closure_2[9]).intl;
                              stringResult = intl3.string(closure_0(closure_2[9]).t["hxnY/q"]);
                            } else if (tmp3.ACTION === tmp2) {
                              tmp7 = closure_0;
                              tmp8 = closure_2;
                              intl2 = closure_0(closure_2[9]).intl;
                              stringResult = intl2.string(closure_0(closure_2[9]).t.rautds);
                            } else {
                              tmp4 = closure_0;
                              tmp5 = closure_2;
                              intl = closure_0(closure_2[9]).intl;
                              stringResult = intl.string(closure_0(closure_2[9]).t.pEasFX);
                            }
                            setOptionsResult = closure_3.setOptions({ headerTitle: stringResult });
                            return;
                          }
                        }
                        cResult[29] = tmp29;
                        tmp27 = tmp29;
                      }
                    }
                  }
                }
              }
            }
            class M {
              constructor(arg0) {
                ({ item, index } = guildId);
                value = item.value;
                filterType = value;
                selected = item.selected;
                tmp = filterType;
                tmp2 = closure_1_8;
                if (filterType === closure_1_8.USER) {
                  tmp3 = null;
                  if (null !== value) {
                    tmp14 = closure_1_9;
                    tmp15 = closure_1_13;
                    obj1 = { start: null, end: null, selected: null, guildId: null, userId: null, onPress: null };
                    num = 0;
                    obj1.start = 0 === index;
                    tmp16 = data;
                    num2 = 1;
                    obj1.end = index === data.length - 1;
                    obj1.selected = selected;
                    tmp17 = selected;
                    obj1.guildId = selected;
                    obj1.userId = value.id;
                    obj1.onPress = function onPress() {
                      return closure_7(!selected, value);
                    };
                    return closure_1_9(closure_1_13, obj1);
                  }
                }
                if (tmp === tmp2.USER) {
                  tmp8 = closure_1_9;
                  tmp9 = data;
                  obj6 = { style: null, children: null };
                  tmp10 = closure_2;
                  obj6.style = closure_2.allUsersIconContainer;
                  tmp11 = filterType;
                  tmp12 = closure_2;
                  obj7 = { size: null, source: null };
                  obj7.size = filterType(closure_2[21]).Icon.Sizes.MEDIUM;
                  tmp13 = guildId;
                  obj7.source = guildId(closure_2[22]);
                  obj6.children = closure_1_9(filterType(closure_2[21]).Icon, obj7);
                  tmp7 = closure_1_9(data, obj6);
                  tmp6 = closure_2;
                  tmp4 = closure_1_9;
                } else {
                  tmp4 = closure_1_9;
                  tmp5 = guildId;
                  tmp6 = closure_2;
                  obj = { action: null };
                  obj.action = value;
                  tmp7 = closure_1_9(guildId(closure_2[23]), obj);
                }
                obj8 = {
                  start: 0 === index,
                  end: index === data.length - 1,
                  icon: tmp7,
                  label: item.label,
                  value: keyExtractor(item),
                  legacyCompat_selected: selected,
                  legacyCompat_onPress() {
                                  return closure_7(!selected, value);
                                }
                };
                return tmp4(filterType(tmp6[24]).TableRadioRow, obj8);
              }
            }
            cResult[16] = data1.length;
            cResult[17] = filterType;
            cResult[18] = guildId;
            cResult[19] = tmp17;
            class N {
              constructor() {
                tmp = closure_3;
                if (AuditLogFilterTypes.USER === filterType) {
                  tmp9 = closure_0;
                  tmp10 = closure_2;
                  intl3 = closure_0(closure_2[9]).intl;
                  stringResult = intl3.string(closure_0(closure_2[9]).t["hxnY/q"]);
                } else if (tmp3.ACTION === tmp2) {
                  tmp7 = closure_0;
                  tmp8 = closure_2;
                  intl2 = closure_0(closure_2[9]).intl;
                  stringResult = intl2.string(closure_0(closure_2[9]).t.rautds);
                } else {
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  intl = closure_0(closure_2[9]).intl;
                  stringResult = intl.string(closure_0(closure_2[9]).t.pEasFX);
                }
                setOptionsResult = closure_3.setOptions({ headerTitle: stringResult });
                return;
              }
            }
            cResult[20] = keyExtractor;
            cResult[21] = tmp4.allUsersIconContainer;
            cResult[22] = M;
            tmp19 = M;
          }
        }
        cResult[12] = filterType;
        cResult[13] = guildId;
        cResult[14] = navigation;
        cResult[15] = tmp18;
        class N {
          constructor() {
            tmp = closure_3;
            if (AuditLogFilterTypes.USER === filterType) {
              tmp9 = closure_0;
              tmp10 = closure_2;
              intl3 = closure_0(closure_2[9]).intl;
              stringResult = intl3.string(closure_0(closure_2[9]).t["hxnY/q"]);
            } else if (tmp3.ACTION === tmp2) {
              tmp7 = closure_0;
              tmp8 = closure_2;
              intl2 = closure_0(closure_2[9]).intl;
              stringResult = intl2.string(closure_0(closure_2[9]).t.rautds);
            } else {
              tmp4 = closure_0;
              tmp5 = closure_2;
              intl = closure_0(closure_2[9]).intl;
              stringResult = intl.string(closure_0(closure_2[9]).t.pEasFX);
            }
            setOptionsResult = closure_3.setOptions({ headerTitle: stringResult });
            return;
          }
        }
      }
      class N {
        constructor() {
          tmp = closure_3;
          if (AuditLogFilterTypes.USER === filterType) {
            tmp9 = closure_0;
            tmp10 = closure_2;
            intl3 = closure_0(closure_2[9]).intl;
            stringResult = intl3.string(closure_0(closure_2[9]).t["hxnY/q"]);
          } else if (tmp3.ACTION === tmp2) {
            tmp7 = closure_0;
            tmp8 = closure_2;
            intl2 = closure_0(closure_2[9]).intl;
            stringResult = intl2.string(closure_0(closure_2[9]).t.rautds);
          } else {
            tmp4 = closure_0;
            tmp5 = closure_2;
            intl = closure_0(closure_2[9]).intl;
            stringResult = intl.string(closure_0(closure_2[9]).t.pEasFX);
          }
          setOptionsResult = closure_3.setOptions({ headerTitle: stringResult });
          return;
        }
      }
      const items1 = [filterType, navigation];
      cResult[8] = filterType;
      cResult[9] = navigation;
      cResult[10] = N;
      cResult[11] = items1;
      tmp15 = items1;
      tmp14 = N;
    }
  }
  if (cResult[3] !== first) {
    const fn = function c(label) {
      const formatted = first.toLowerCase();
      return fuzzysearchDefault(formatted, label.label.toLowerCase());
    };
    cResult[3] = first;
    class M {
      constructor(arg0) {
        ({ item, index } = guildId);
        value = item.value;
        filterType = value;
        selected = item.selected;
        tmp = filterType;
        tmp2 = closure_1_8;
        if (filterType === closure_1_8.USER) {
          tmp3 = null;
          if (null !== value) {
            tmp14 = closure_1_9;
            tmp15 = closure_1_13;
            obj1 = { start: null, end: null, selected: null, guildId: null, userId: null, onPress: null };
            num = 0;
            obj1.start = 0 === index;
            tmp16 = data;
            num2 = 1;
            obj1.end = index === data.length - 1;
            obj1.selected = selected;
            tmp17 = selected;
            obj1.guildId = selected;
            obj1.userId = value.id;
            obj1.onPress = function onPress() {
              return closure_7(!selected, value);
            };
            return closure_1_9(closure_1_13, obj1);
          }
        }
        if (tmp === tmp2.USER) {
          tmp8 = closure_1_9;
          tmp9 = data;
          obj6 = { style: null, children: null };
          tmp10 = closure_2;
          obj6.style = closure_2.allUsersIconContainer;
          tmp11 = filterType;
          tmp12 = closure_2;
          obj7 = { size: null, source: null };
          obj7.size = filterType(closure_2[21]).Icon.Sizes.MEDIUM;
          tmp13 = guildId;
          obj7.source = guildId(closure_2[22]);
          obj6.children = closure_1_9(filterType(closure_2[21]).Icon, obj7);
          tmp7 = closure_1_9(data, obj6);
          tmp6 = closure_2;
          tmp4 = closure_1_9;
        } else {
          tmp4 = closure_1_9;
          tmp5 = guildId;
          tmp6 = closure_2;
          obj = { action: null };
          obj.action = value;
          tmp7 = closure_1_9(guildId(closure_2[23]), obj);
        }
        obj8 = {
          start: 0 === index,
          end: index === data.length - 1,
          icon: tmp7,
          label: item.label,
          value: keyExtractor(item),
          legacyCompat_selected: selected,
          legacyCompat_onPress() {
                  return closure_7(!selected, value);
                }
        };
        return tmp4(filterType(tmp6[24]).TableRadioRow, obj8);
      }
    }
    cResult[4] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[4];
  }
  const found = data.filter(tmp9);
  cResult[0] = data;
  cResult[1] = first;
  cResult[2] = found;
  let tmp6 = navigation(first.useState(""), 2);
}) : ((data) => {
  data = data.data;
  const filterType = data.filterType;
  const guildId = data.guildId;
  let tmp = closure_12();
  closure_3 = tmp;
  const navigation = data(guildId[18]).useNavigation();
  let tmp6 = closure_3(navigation.useState(""), 2);
  const first = tmp6[0];
  const items = [first, data];
  const memo = navigation.useMemo(() => ({
    data: data.filter((label) => {
      const formatted = first.toLowerCase();
      return filterType(guildId[19])(formatted, label.label.toLowerCase());
    }),
    keyExtractor(value) {
      if (null != value.value) {
        let str1 = value.value.toString();
      } else {
        str1 = value.index.toString();
      }
      return str1;
    }
  }), items);
  const data1 = memo.data;
  const keyExtractor = memo.keyExtractor;
  const items1 = [filterType, navigation];
  const effect = navigation.useEffect(() => {
    if (AuditLogFilterTypes.USER === filterType) {
      const intl3 = util.intl;
      let stringResult = intl3.string(util.t["hxnY/q"]);
    } else if (tmp3.ACTION === tmp2) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.rautds);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.pEasFX);
    }
    navigation.setOptions({ headerTitle: stringResult });
  }, items1);
  const items2 = [filterType, guildId, navigation];
  const callback = navigation.useCallback((arg0, navigation) => {
    if (arg0) {
      let tmp = navigation;
      if (filterType === AuditLogFilterTypes.USER) {
        let id = null;
        if (null != tmp) {
          id = tmp.id;
        }
        AuditLogActionCreators.filterByUserId(id, guildId);
      } else if (tmp2 === tmp3.ACTION) {
        AuditLogActionCreators.filterByAction(tmp, guildId);
      }
      tmp = navigation;
      navigation.pop();
    }
  }, items2);
  const items3 = [filterType, guildId, callback, data1.length, tmp.allUsersIconContainer, keyExtractor];
  let obj2 = { style: tmp.searchBar, children: null };
  const callback1 = navigation.useCallback((arg0) => {
    ({ item, index } = arg0);
    value = item.value;
    c0 = value;
    const selected = item.selected;
    if (selected === callback.USER) {
      if (null !== value) {
        const obj2 = {
          start: 0 === index,
          end: index === data1.length - 1,
          selected,
          guildId,
          userId: value.id,
          onPress() {
                return callback(!selected, c0);
              }
        };
        return closure_1_9(closure_1_13, obj2);
      }
    }
    if (selected === callback.USER) {
      const obj3 = { style: closure_3.allUsersIconContainer, children: null };
      const obj4 = { size: data(guildId[21]).Icon.Sizes.MEDIUM, source: filterType(guildId[22]) };
      obj3.children = closure_1_9(data(guildId[21]).Icon, obj4);
      let tmp7 = closure_1_9(first, obj3);
      let tmp6 = guildId;
      let tmp4 = closure_1_9;
    } else {
      tmp4 = closure_1_9;
      tmp6 = guildId;
      const obj = { action: value };
      tmp7 = closure_1_9(filterType(guildId[23]), obj);
    }
    return tmp4(data(tmp6[24]).TableRadioRow, {
      start: 0 === index,
      end: index === data1.length - 1,
      icon: tmp7,
      label: item.label,
      value: keyExtractor(item),
      legacyCompat_selected: selected,
      legacyCompat_onPress() {
        return callback(!selected, c0);
      }
    });
  }, items3);
  if (filterType === callback.USER) {
    let intl3 = tmp4(tmp3[9]).intl;
    let stringResult = intl3.string(tmp4(tmp3[9]).t.pYHobK);
  } else if (filterType === tmp16.ACTION) {
    let intl2 = tmp4(tmp3[9]).intl;
    stringResult = intl2.string(tmp4(tmp3[9]).t.I288Zx);
  } else {
    let intl = tmp4(tmp3[9]).intl;
    stringResult = intl.string(tmp4(tmp3[9]).t["5h0QOP"]);
  }
  obj2.children = closure_9(data(guildId[25]).SearchField, { size: "md", placeholder: stringResult, onChange: tmp6[1] });
  const items4 = [closure_9(first, obj2), , ];
  if (0 === data1.length) {
    let obj3 = { body: null, title: null, Illustration: null };
    const intl4 = tmp4(tmp3[9]).intl;
    obj3.body = intl4.string(tmp4(tmp3[9]).t.V6nAfF);
    const intl5 = tmp4(tmp3[9]).intl;
    obj3.title = intl5.formatToPlainString(tmp4(tmp3[9]).t.ZGVL3g, { count: 0 });
    obj3.Illustration = tmp4(tmp3[26]).NoResults;
    let tmp14Result = closure_9(tmp4(tmp3[21]).EmptyState, obj3);
  } else {
    let obj4 = { keyExtractor, renderItem: callback1, data: data1, contentContainerStyle: null };
    const obj5 = { paddingHorizontal: filterType(tmp3[8]).space.PX_12, paddingBottom: filterType(guildId[17])().bottom };
    obj4.contentContainerStyle = obj5;
    tmp14Result = closure_9(tmp4(tmp3[27]).FlashList, obj4);
  }
  const obj6 = { children: null };
  items4[1] = tmp14Result;
  items4[2] = closure_9(data(guildId[28]).NavScrim, {});
  obj6.children = items4;
  return closure_11(closure_10, obj6);
});
export const createAuditLogFilterUserData = function createAuditLogFilterUserData(userIdFilter) {
  _require = userIdFilter;
  const items = [];
  let obj = { label: null, value: null, selected: null, index: 0 };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.ZRFdsL);
  obj.selected = null == userIdFilter;
  items.push(obj);
  set = new Set();
  const logs = GuildSettingsAuditLogStore.logs;
  const item = logs.forEach((userId) => {
    userId = userId.userId;
    if (null != userId) {
      const user = UserStore.getUser(userId);
      if (!tmp) {
        set.add(userId);
        const obj = { label: UserUtilsDefault.getUserTag(user), value: user, selected: user.id === closure_0, index: items.length };
        items.push(obj);
      }
      tmp = set.has(userId) || null == user;
    }
  });
  const userIds = GuildSettingsAuditLogStore.userIds;
  const item1 = userIds.forEach((item) => {
    if (null != item) {
      const user = UserStore.getUser(item);
      if (!tmp) {
        set.add(item);
        const obj = { label: UserUtilsDefault.getUserTag(user), value: user, selected: user.id === closure_0, index: items.length };
        items.push(obj);
      }
      tmp = set.has(item) || null == user;
    }
  });
  const sorted = items.sort((selected, selected2) => {
    let num = -1;
    if (!selected.selected) {
      let num2 = 1;
      if (!selected2.selected) {
        num2 = selected.index - selected2.index;
      }
      num = num2;
    }
    return num;
  });
  return items;
};
export const createAuditLogFilterActionData = function createAuditLogFilterActionData(actionFilter) {
  closure_0 = actionFilter;
  const mapped = AuditLogUtils.ACTION_FILTER_ITEMS().map((label, index) => ({ label: label.label, value: label.value, selected: closure_0 === label.value, index }));
  return mapped.sort((selected, selected2) => {
    let num = -1;
    if (!selected.selected) {
      let num2 = 1;
      if (!selected2.selected) {
        num2 = selected.index - selected2.index;
      }
      num = num2;
    }
    return num;
  });
};