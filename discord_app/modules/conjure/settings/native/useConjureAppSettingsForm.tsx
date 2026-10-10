// === Module 17068: useConjureAppSettingsForm ===

// Module 17068 (useConjureAppSettingsForm)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5056 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 12179 */;
import conjureSettingValues from "conjureSettingValues" /* 17069 */;
import ConjureGuildPickerSheetDefault from "ConjureGuildPickerSheet" /* 17072 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4748 */;
import GuildStore from "GuildStore" /* 2087 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;
import ConjureChatStore from "ConjureChatStore" /* 12996 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 13213 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10651 */;

require = fn;
const View = fn(17).View;
let ConjureConnectionStore = fn(13213);
({ requestProjectRebuild: closure_12, sendUserMessage: map1, submitProjectSettings: closure_14 } = ConjureConnectionStore);
let ConjureConnectionStore = ConjureConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
const ConjureSettingsChannelSheet = "ConjureSettingsChannelSheet";
const ConjureSettingsPickerSheet = "ConjureSettingsPickerSheet";
const createStyles = fn(5092);
let obj2 = { section: { gap: nativeDefault.space.PX_16 }, secretRow: null, secretRowInfo: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.secretRow = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj2.secretRowInfo = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_22 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureChannelSettingRow(def) {
  let tmp2 = onChange;
  const cResult = def(onChange[28]).c(42);
  def = def.def;
  ({ hint, value } = def);
  importDefault = value;
  ({ disabled, onChange } = def);
  ({ fallback, projectId, isPreview } = def);
  let obj = def(onChange[28]);
  const conjureSettingsGuildId = def(onChange[29]).useConjureSettingsGuildId(projectId, isPreview);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== conjureSettingsGuildId) {
    const fn = function l() {
      channels = null;
      if (null != conjureSettingsGuildId) {
        channels = GuildChannelStore.getChannels(tmp);
      }
      return channels;
    };
    const items1 = [conjureSettingsGuildId];
    cResult[1] = conjureSettingsGuildId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj2 = def(onChange[29]);
  label = def(tmp2[14]).useStateFromStores(first, tmp7, tmp8);
  let tmp9 = fallback;
  if (null != conjureSettingsGuildId) {
    tmp9 = fallback;
    if (null != label) {
      if (cResult[4] === label) {
        if (cResult[5] === def.channel_filter) {
          if (cResult[6] === def.label) {
            if (cResult[7] === disabled) {
              if (cResult[8] === hint) {
                if (cResult[9] === value) {
                  let found = tmp14;
                  if (cResult[21] === cResult[10]) {
                    if (cResult[22] === tmp15) {
                      let tmp38 = cResult[23];
                    }
                    if (cResult[24] === tmp13) {
                      if (cResult[25] === def.label) {
                        if (cResult[26] === conjureSettingsGuildId) {
                          if (cResult[27] === onChange) {
                            if (cResult[28] === tmp14) {
                              let tmp41 = cResult[29];
                            }
                            if (cResult[30] === tmp11) {
                              if (cResult[31] === tmp38) {
                                if (cResult[32] === tmp41) {
                                  if (cResult[33] === tmp16) {
                                    if (cResult[34] === tmp17) {
                                      if (cResult[35] === tmp18) {
                                        if (cResult[36] === tmp19) {
                                          let tmp42 = cResult[37];
                                        }
                                        if (cResult[38] === tmp12) {
                                          if (cResult[39] === tmp42) {
                                          }
                                        }
                                        class O {
                                          constructor() {
                                            obj = closure_0(closure_2[34]);
                                            obj1 = { content: null, key: null, stackingBehavior: "stack" };
                                            obj5 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
                                            obj6 = { title: def.label };
                                            obj5.header = obj6;
                                            tmp = closure_1(closure_2[35]);
                                            obj5.guild = closure_8.getGuild(closure_3);
                                            obj5.channels = closure_4;
                                            obj5.selectedChannel = c5;
                                            intl = closure_0(closure_2[16]).intl;
                                            obj5.noChannelOptionLabel = intl.string(closure_1(closure_2[17])["jtBVV+"]);
                                            obj5.onSelect = function onSelect(id) {
                                              let str;
                                              if (id != null) {
                                                str = id.id;
                                              }
                                              if (str == null) {
                                                str = "";
                                              }
                                              return onChange(str);
                                            };
                                            obj1.content = jsx(tmp, obj5);
                                            obj1.key = ConjureSettingsChannelSheet;
                                            showActionSheetResult = obj.showActionSheet(obj1);
                                            return;
                                          }
                                        }
                                        let obj3 = { hasIcons: tmp20, children: tmp42 };
                                        const tmp45 = closure_17(tmp12, obj3);
                                        cResult[38] = tmp12;
                                        cResult[39] = tmp42;
                                        cResult[40] = tmp20;
                                        cResult[41] = tmp45;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            class O {
                              constructor() {
                                obj = closure_0(closure_2[34]);
                                obj1 = { content: null, key: null, stackingBehavior: "stack" };
                                obj5 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
                                obj6 = { title: def.label };
                                obj5.header = obj6;
                                tmp = closure_1(closure_2[35]);
                                obj5.guild = closure_8.getGuild(closure_3);
                                obj5.channels = closure_4;
                                obj5.selectedChannel = c5;
                                intl = closure_0(closure_2[16]).intl;
                                obj5.noChannelOptionLabel = intl.string(closure_1(closure_2[17])["jtBVV+"]);
                                obj5.onSelect = function onSelect(id) {
                                  let str;
                                  if (id != null) {
                                    str = id.id;
                                  }
                                  if (str == null) {
                                    str = "";
                                  }
                                  return onChange(str);
                                };
                                obj1.content = jsx(tmp, obj5);
                                obj1.key = ConjureSettingsChannelSheet;
                                showActionSheetResult = obj.showActionSheet(obj1);
                                return;
                              }
                            }
                            let obj4 = { label: tmp16, subLabel: tmp17, arrow: tmp18, disabled: tmp19, trailing: tmp38, onPress: tmp41 };
                            const tmp43 = closure_17(tmp11, obj4);
                            cResult[30] = tmp11;
                            cResult[31] = tmp38;
                            cResult[32] = tmp41;
                            cResult[33] = tmp16;
                            cResult[34] = tmp17;
                            cResult[35] = tmp18;
                            cResult[36] = tmp19;
                            cResult[37] = tmp43;
                            tmp42 = tmp43;
                          }
                        }
                      }
                    }
                    class O {
                      constructor() {
                        obj = closure_0(closure_2[34]);
                        obj1 = { content: null, key: null, stackingBehavior: "stack" };
                        obj5 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
                        obj6 = { title: def.label };
                        obj5.header = obj6;
                        tmp = closure_1(closure_2[35]);
                        obj5.guild = closure_8.getGuild(closure_3);
                        obj5.channels = closure_4;
                        obj5.selectedChannel = c5;
                        intl = closure_0(closure_2[16]).intl;
                        obj5.noChannelOptionLabel = intl.string(closure_1(closure_2[17])["jtBVV+"]);
                        obj5.onSelect = function onSelect(id) {
                          let str;
                          if (id != null) {
                            str = id.id;
                          }
                          if (str == null) {
                            str = "";
                          }
                          return onChange(str);
                        };
                        obj1.content = jsx(tmp, obj5);
                        obj1.key = ConjureSettingsChannelSheet;
                        showActionSheetResult = obj.showActionSheet(obj1);
                        return;
                      }
                    }
                    cResult[24] = tmp13;
                    cResult[25] = def.label;
                    cResult[26] = conjureSettingsGuildId;
                    cResult[27] = onChange;
                    cResult[28] = tmp14;
                    cResult[29] = O;
                    tmp41 = O;
                  }
                  const obj5 = { text: cResult[15] };
                  const tmp40 = closure_17(cResult[10], obj5);
                  cResult[21] = cResult[10];
                  cResult[22] = cResult[15];
                  cResult[23] = tmp40;
                  tmp38 = tmp40;
                }
              }
            }
          }
        }
      }
      tmp(tmp2[30]);
      found = arr3.find((id) => id.id === value);
      if (found == null) {
        found = null;
      }
      const TableRowGroup = tmp(tmp2[20]).TableRowGroup;
      const TableRow = tmp(tmp2[31]).TableRow;
      const label2 = def.label;
      const TableRowTrailingText = tmp(tmp2[32]).TableRowTrailingText;
      if (null != found) {
        tmp2 = tmp2[33];
        const tmpResult4 = tmp(tmp2);
        class O {
          constructor() {
            obj = closure_0(closure_2[34]);
            obj1 = { content: null, key: null, stackingBehavior: "stack" };
            obj5 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
            obj6 = { title: def.label };
            obj5.header = obj6;
            tmp = closure_1(closure_2[35]);
            obj5.guild = closure_8.getGuild(closure_3);
            obj5.channels = closure_4;
            obj5.selectedChannel = c5;
            intl = closure_0(closure_2[16]).intl;
            obj5.noChannelOptionLabel = intl.string(closure_1(closure_2[17])["jtBVV+"]);
            obj5.onSelect = function onSelect(id) {
              let str;
              if (id != null) {
                str = id.id;
              }
              if (str == null) {
                str = "";
              }
              return onChange(str);
            };
            obj1.content = jsx(tmp, obj5);
            obj1.key = ConjureSettingsChannelSheet;
            showActionSheetResult = obj.showActionSheet(obj1);
            return;
          }
        }
        let channelName = tmpResult4.computeChannelName(found, UserStore, RelationshipStore, true);
      } else {
        class O {
          constructor() {
            obj = closure_0(closure_2[34]);
            obj1 = { content: null, key: null, stackingBehavior: "stack" };
            obj5 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
            obj6 = { title: def.label };
            obj5.header = obj6;
            tmp = closure_1(closure_2[35]);
            obj5.guild = closure_8.getGuild(closure_3);
            obj5.channels = closure_4;
            obj5.selectedChannel = c5;
            intl = closure_0(closure_2[16]).intl;
            obj5.noChannelOptionLabel = intl.string(closure_1(closure_2[17])["jtBVV+"]);
            obj5.onSelect = function onSelect(id) {
              let str;
              if (id != null) {
                str = id.id;
              }
              if (str == null) {
                str = "";
              }
              return onChange(str);
            };
            obj1.content = jsx(tmp, obj5);
            obj1.key = ConjureSettingsChannelSheet;
            showActionSheetResult = obj.showActionSheet(obj1);
            return;
          }
        }
        channelName = tmp23(require("module_3849").iZIF9m);
      }
      cResult[4] = label;
      ({ channel_filter: tmp3[5], label } = def);
      cResult[6] = label;
      cResult[7] = disabled;
      cResult[8] = hint;
      cResult[9] = value;
      cResult[10] = TableRowTrailingText;
      cResult[11] = TableRow;
      cResult[12] = TableRowGroup;
      cResult[13] = arr3;
      cResult[14] = found;
      cResult[15] = channelName;
      cResult[16] = label2;
      cResult[17] = hint;
      cResult[18] = true;
      cResult[19] = disabled;
      cResult[20] = false;
    }
  }
  return tmp9;
}) : (function ConjureChannelSettingRow(def) {
  def = def.def;
  ({ value: importDefault, onChange: dependencyMap } = def);
  c4 = undefined;
  let found;
  ({ projectId, isPreview, hint, disabled, fallback } = def);
  const conjureSettingsGuildId = def(17070).useConjureSettingsGuildId(projectId, isPreview);
  let obj = def(17070);
  const items = [GuildChannelStore];
  const items1 = [conjureSettingsGuildId];
  const stateFromStores = def(504).useStateFromStores(items, () => {
    channels = null;
    if (null != conjureSettingsGuildId) {
      channels = GuildChannelStore.getChannels(tmp);
    }
    return channels;
  }, items1);
  if (null != conjureSettingsGuildId) {
    if (null != stateFromStores) {
      const result = tmp(6945).conjureSettingChannels(stateFromStores, def.channel_filter);
      c4 = result;
      found = result.find((id) => id.id === importDefault);
      if (found == null) {
        found = null;
      }
      let obj3 = { label: def.label, subLabel: hint, arrow: true, disabled, trailing: null, onPress: null };
      if (null != found) {
        const tmpResult2 = tmp(5421);
        let channelName = tmpResult2.computeChannelName(found, UserStore, RelationshipStore, true);
      } else {
        let intl = tmp(1126).intl;
        channelName = intl.string(_modDef3849.iZIF9m);
      }
      let obj4 = { hasIcons: false, children: null };
      const obj5 = { text: channelName };
      obj3.trailing = closure_17(tmp(6190).TableRowTrailingText, obj5);
      obj3.onPress = function onPress() {
        const obj2 = { content: null, key: null, stackingBehavior: "stack" };
        const obj3 = { header: { title: def.label }, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
        const obj = ActionSheetActionCreators;
        const obj4 = { title: def.label };
        obj3.guild = GuildStore.getGuild(conjureSettingsGuildId);
        obj3.channels = channels;
        obj3.selectedChannel = found;
        const intl = util.intl;
        obj3.noChannelOptionLabel = intl.string(_modDef3849["jtBVV+"]);
        obj3.onSelect = function onSelect(id) {
          let str;
          if (id != null) {
            str = id.id;
          }
          if (str == null) {
            str = "";
          }
          return closure_1_2(str);
        };
        obj2.content = constants(ChannelPickerActionSheetDefault, obj3);
        obj2.key = ConjureSettingsChannelSheet;
        obj.showActionSheet(obj2);
      };
      obj4.children = closure_17(tmp(6179).TableRow, obj3);
      return closure_17(tmp(6264).TableRowGroup, obj4);
    }
  }
  return fallback;
});
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePickerSettingRow(def) {
  const cResult = def(conjureSettingsGuildId[28]).c(27);
  def = def.def;
  ({ hint, value, disabled, onChange } = def);
  ({ projectId, isPreview, fallback } = def);
  let obj = def(conjureSettingsGuildId[28]);
  conjureSettingsGuildId = def(conjureSettingsGuildId[29]).useConjureSettingsGuildId(projectId, isPreview);
  let prop = onChange;
  const tmp6 = onChange(conjureSettingsGuildId[29])(conjureSettingsGuildId, def);
  if (cResult[0] !== value) {
    const result = tmp(tmp2[29]).conjureSettingPickedIds(value);
    cResult[0] = value;
    cResult[1] = result;
    let arr = result;
    const tmpResult = tmp(tmp2[29]);
  } else {
    arr = cResult[1];
  }
  let obj2 = def(conjureSettingsGuildId[29]);
  let tmp8 = null;
  if ("user" === def.type) {
    tmp8 = conjureSettingsGuildId;
  }
  const conjureMemberRequests = def(conjureSettingsGuildId[36]).useConjureMemberRequests(tmp8, arr);
  if (null != conjureSettingsGuildId) {
    if (null != tmp6) {
      if (cResult[2] === def.multiple) {
        if (cResult[3] === tmp6) {
          if (cResult[4] === arr) {
            if (cResult[5] === value) {
              closure_3 = tmp10;
              if (cResult[10] !== cResult[8]) {
                let obj3 = { text: tmp12 };
                cResult[10] = tmp12;
                class R {
                  constructor() {
                    obj = closure_0(closure_2[34]);
                    tmp = jsx;
                    obj1 = { guildId: closure_2, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
                    num = 1;
                    tmp2 = closure_1(closure_2[37]);
                    if (closure_3) {
                      num = 25;
                    }
                    obj4 = { content: null, key: null, stackingBehavior: "stack" };
                    obj1.maxPicks = num;
                    obj1.selected = closure_4.filter((id) => arr.includes(id.id));
                    obj1.onSubmit = function onSubmit(arr) {
                      const mapped = arr.map(() => { ... });
                      let tmp3 = mapped;
                      if (!closure_1_3) {
                        let str = mapped[0];
                        if (str == null) {
                          str = "";
                        }
                        tmp3 = str;
                      }
                      onChange(tmp3);
                    };
                    obj4.content = tmp(tmp2, obj1);
                    obj4.key = ConjureSettingsPickerSheet;
                    showActionSheetResult = obj.showActionSheet(obj4);
                    return;
                  }
                }
                let tmp22 = closure_17(tmp(tmp2[32]).TableRowTrailingText, obj3);
                const tmp24 = closure_17(tmp(tmp2[32]).TableRowTrailingText, obj3);
              } else {
                tmp22 = cResult[11];
              }
              if (cResult[12] === def.channel_filter) {
                if (cResult[13] === def.label) {
                  if (cResult[14] === def.type) {
                    if (cResult[15] === conjureSettingsGuildId) {
                      if (cResult[16] === tmp10) {
                        if (cResult[17] === onChange) {
                          if (cResult[18] === tmp11) {
                            if (cResult[19] === arr) {
                              let tmp25 = cResult[20];
                            }
                            if (cResult[21] === def.label) {
                              if (cResult[22] === disabled) {
                                if (cResult[23] === hint) {
                                  if (cResult[24] === tmp22) {
                                    if (cResult[25] === tmp25) {
                                      let tmp26 = cResult[26];
                                    }
                                    return tmp26;
                                  }
                                }
                              }
                            }
                            const obj4 = { hasIcons: false, children: null };
                            const obj5 = { label: def.label, subLabel: null, arrow: true, disabled: null, trailing: null, onPress: null };
                            class R {
                              constructor() {
                                obj = closure_0(closure_2[34]);
                                tmp = jsx;
                                obj1 = { guildId: closure_2, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
                                num = 1;
                                tmp2 = closure_1(closure_2[37]);
                                if (closure_3) {
                                  num = 25;
                                }
                                obj4 = { content: null, key: null, stackingBehavior: "stack" };
                                obj1.maxPicks = num;
                                obj1.selected = closure_4.filter((id) => arr.includes(id.id));
                                obj1.onSubmit = function onSubmit(arr) {
                                  const mapped = arr.map(() => { ... });
                                  let tmp3 = mapped;
                                  if (!closure_1_3) {
                                    let str = mapped[0];
                                    if (str == null) {
                                      str = "";
                                    }
                                    tmp3 = str;
                                  }
                                  onChange(tmp3);
                                };
                                obj4.content = tmp(tmp2, obj1);
                                obj4.key = ConjureSettingsPickerSheet;
                                showActionSheetResult = obj.showActionSheet(obj4);
                                return;
                              }
                            }
                            obj5.disabled = disabled;
                            obj5.trailing = tmp22;
                            obj5.onPress = tmp25;
                            obj4.children = closure_17(tmp(tmp2[31]).TableRow, obj5);
                            const tmp28 = closure_17(tmp(tmp2[20]).TableRowGroup, obj4);
                            cResult[21] = def.label;
                            cResult[22] = disabled;
                            cResult[23] = hint;
                            cResult[24] = tmp22;
                            cResult[25] = tmp25;
                            cResult[26] = tmp28;
                            tmp26 = tmp28;
                          }
                        }
                      }
                    }
                  }
                }
              }
              class R {
                constructor() {
                  obj = closure_0(closure_2[34]);
                  tmp = jsx;
                  obj1 = { guildId: closure_2, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
                  num = 1;
                  tmp2 = closure_1(closure_2[37]);
                  if (closure_3) {
                    num = 25;
                  }
                  obj4 = { content: null, key: null, stackingBehavior: "stack" };
                  obj1.maxPicks = num;
                  obj1.selected = closure_4.filter((id) => arr.includes(id.id));
                  obj1.onSubmit = function onSubmit(arr) {
                    const mapped = arr.map(() => { ... });
                    let tmp3 = mapped;
                    if (!closure_1_3) {
                      let str = mapped[0];
                      if (str == null) {
                        str = "";
                      }
                      tmp3 = str;
                    }
                    onChange(tmp3);
                  };
                  obj4.content = tmp(tmp2, obj1);
                  obj4.key = ConjureSettingsPickerSheet;
                  showActionSheetResult = obj.showActionSheet(obj4);
                  return;
                }
              }
              cResult[12] = def.channel_filter;
              cResult[13] = def.label;
              cResult[14] = def.type;
              cResult[15] = conjureSettingsGuildId;
              cResult[16] = cResult[6];
              cResult[17] = onChange;
              cResult[18] = cResult[7];
              cResult[19] = arr;
              cResult[20] = R;
              tmp25 = R;
            }
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function w(id) {
          return { id, label: id };
        };
        cResult[9] = fn;
      }
      tmp(tmp2[29]);
      closure_3 = tmp16;
      if (true === def.multiple) {
        const intl2 = tmp(tmp2[16]).intl;
        prop = prop(tmp2[17])["LPs/Pv"];
        const obj6 = { count: arr.length };
        let formatToPlainStringResult = intl2.formatToPlainString(prop, obj6);
      } else {
        const found = arr2.find((id) => id.id === arr[0]);
        formatToPlainStringResult = undefined;
        if (found != null) {
          formatToPlainStringResult = found.label;
        }
        if (formatToPlainStringResult == null) {
          const intl = tmp(tmp2[16]).intl;
          formatToPlainStringResult = intl.string(prop(tmp2[17]).rn7w7I);
        }
      }
      cResult[2] = def.multiple;
      cResult[3] = tmp6;
      cResult[4] = arr;
      cResult[5] = value;
      cResult[6] = true === def.multiple;
      cResult[7] = arr2;
      cResult[8] = formatToPlainStringResult;
    }
  }
  return fallback;
}) : (function ConjurePickerSettingRow(def) {
  def = def.def;
  ({ value, onChange: importDefault } = def);
  let conjureSettingsGuildId;
  c4 = undefined;
  closure_5 = undefined;
  ({ projectId, isPreview, hint, disabled, fallback } = def);
  conjureSettingsGuildId = def(conjureSettingsGuildId[29]).useConjureSettingsGuildId(projectId, isPreview);
  const tmp5 = require("useConjureSettingPickerOptions")(conjureSettingsGuildId, def);
  let obj = def(conjureSettingsGuildId[29]);
  const result = def(conjureSettingsGuildId[29]).conjureSettingPickedIds(value);
  c3 = result;
  let obj2 = def(conjureSettingsGuildId[29]);
  let tmp6 = null;
  if ("user" === def.type) {
    tmp6 = conjureSettingsGuildId;
  }
  const conjureMemberRequests = def(conjureSettingsGuildId[36]).useConjureMemberRequests(tmp6, result);
  if (null != conjureSettingsGuildId) {
    if (null != tmp5) {
      const withSavedPicksResult = tmp(tmp2[29]).withSavedPicks(tmp5, value, (id) => ({ id, label: id }));
      c4 = withSavedPicksResult;
      closure_5 = tmp11;
      if (true === def.multiple) {
        const intl2 = tmp(tmp2[16]).intl;
        const obj4 = { count: result.length };
        let formatToPlainStringResult = intl2.formatToPlainString(require("module_3849")["LPs/Pv"], obj4);
      } else {
        const found = withSavedPicksResult.find((id) => id.id === _undefined[0]);
        formatToPlainStringResult = undefined;
        if (found != null) {
          formatToPlainStringResult = found.label;
        }
        if (formatToPlainStringResult == null) {
          const intl = tmp(tmp2[16]).intl;
          formatToPlainStringResult = intl.string(require("module_3849").rn7w7I);
        }
      }
      const obj5 = { hasIcons: false, children: null };
      const obj6 = { label: def.label, subLabel: hint, arrow: true, disabled, trailing: null, onPress: null };
      const obj7 = { text: formatToPlainStringResult };
      obj6.trailing = closure_17(tmp(tmp2[32]).TableRowTrailingText, obj7);
      obj6.onPress = function onPress() {
        const obj2 = { guildId: conjureSettingsGuildId, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
        let num = 1;
        const obj = ActionSheetActionCreators;
        if (closure_5) {
          num = 25;
        }
        const obj3 = { content: null, key: null, stackingBehavior: "stack" };
        obj2.maxPicks = num;
        obj2.selected = _undefined2.filter((id) => _undefined.includes(id.id));
        obj2.onSubmit = function onSubmit(arr) {
          const mapped = arr.map((id) => id.id);
          let tmp3 = mapped;
          if (!closure_1_5) {
            let str = mapped[0];
            if (str == null) {
              str = "";
            }
            tmp3 = str;
          }
          closure_1_1(tmp3);
        };
        obj3.content = constants(ConjureGuildPickerSheetDefault, obj2);
        obj3.key = ConjureSettingsPickerSheet;
        obj.showActionSheet(obj3);
      };
      obj5.children = closure_17(tmp(tmp2[31]).TableRow, obj6);
      return closure_17(tmp(tmp2[20]).TableRowGroup, obj5);
    }
  }
  return fallback;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/settings/native/useConjureAppSettingsForm.tsx");

export default function useConjureAppSettingsForm(projectId) {
  projectId = projectId.projectId;
  ({ scopeKeys, note, notifyAgent } = projectId);
  if (notifyAgent === undefined) {
    notifyAgent = false;
  }
  let flag = projectId.isPreview;
  if (flag === undefined) {
    flag = false;
  }
  let first;
  c9 = undefined;
  c10 = undefined;
  let memo1;
  let memo3;
  closure_19 = undefined;
  function renderValueSetting(found) {
    projectId = found;
    let hint;
    if (found != null) {
      hint = found.hint;
    }
    let hint1;
    if (null != hint) {
      if ("" !== found.hint) {
        hint1 = found.hint;
      }
    }
    let items = [hint1, ];
    let requires_rebuild;
    if (found != null) {
      requires_rebuild = found.requires_rebuild;
    }
    let stringResult;
    if (true === requires_rebuild) {
      const intl = projectId(flag[16]).intl;
      stringResult = intl.string(notifyAgent(flag[17])["4kCM6H"]);
    }
    items[1] = stringResult;
    found = items.filter((item) => null != item);
    if (0 !== found.length) {
      const joined = found.join(" ");
    }
    if ("select" === found.type) {
      if (true === found.multiple) {
        let items1 = first[found.key];
        if (items1 == null) {
          items1 = memo1[found.key];
        }
        const _Array = Array;
        if (!Array.isArray(items1)) {
          items1 = [];
        }
        const obj2 = { title: null, hasIcons: false, children: null };
        ({ label: obj6.title, options: options2 } = found);
        if (options2 == null) {
          options2 = [];
        }
        obj2.children = options2.map((label) => {
          closure_0 = label;
          return map(projectId(flag[21]).TableCheckboxRow, {
            label: label.label,
            checked: items1.includes(label.value),
            disabled,
            onPress(arg0) {
              closure_0 = arg0;
              closure_2_13(false);
              closure_2_6((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                if (value) {
                  const items = [];
                  items[HermesBuiltin.arraySpread(items1, 0)] = value.value;
                  found = items;
                } else {
                  found = items1.filter(() => { ... });
                }
                obj[value.key] = found;
                return obj;
              });
            }
          }, label.value);
        });
        return map(projectId(flag[20]).TableRowGroup, obj2, found.key);
      }
    }
    if ("select" === found.type) {
      let tmp41 = first[found.key];
      if (tmp41 == null) {
        tmp41 = memo1[found.key];
      }
      let tmp46;
      if (typeof tmp41 === "string") {
        tmp46 = tmp41;
      }
      const obj3 = {
        hasIcons: false,
        defaultValue: tmp46,
        onChange(arg0) {
            closure_1_13(false);
            closure_1_6((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[key.key] = key;
              return obj;
            });
          },
        title: null,
        accessibilityLabel: null,
        children: null
      };
      ({ label: obj5.title, label: obj5.accessibilityLabel, options } = found);
      if (options == null) {
        options = [];
      }
      obj3.children = options.map((label) => map(closure_0(flag[23]).TableRadioRow, { label: label.label, value: label.value }, label.value));
      return map(projectId(flag[22]).TableRadioGroup, obj3, found.key);
    } else if ("checkbox" === found.type) {
      let tmp31 = first[found.key];
      if (tmp31 == null) {
        tmp31 = memo1[found.key];
      }
      const obj4 = { hasIcons: false, children: null };
      const obj11 = {
        label: found.label,
        subLabel: joined,
        checked: true === tmp31,
        disabled: first2,
        onPress(arg0) {
            closure_1_13(false);
            closure_1_6((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[key.key] = key;
              return obj;
            });
          }
      };
      obj4.children = map(projectId(flag[21]).TableCheckboxRow, obj11);
      return map(projectId(flag[20]).TableRowGroup, obj4, found.key);
    } else {
      if ("role" !== found.type) {
        if ("user" !== found.type) {
          if ("channel" === found.type) {
            return tmp21Result;
          }
          if ("channel" === found.type) {
            let obj = { projectId, isPreview: flag, def: found, hint: joined, value: null, disabled: null, onChange: null, fallback: null };
            let tmp17 = first[found.key];
            if (tmp17 == null) {
              tmp17 = memo1[found.key];
            }
            obj.value = tmp17;
            obj.disabled = first2;
            obj.onChange = function onChange(arg0) {
              closure_1_13(false);
              closure_1_6((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj[key.key] = key;
                return obj;
              });
            };
            obj.fallback = renderTextSetting(found, joined);
            tmp21Result = map(closure_1_23, obj, found.key);
          } else {
            tmp21Result = renderTextSetting(found, joined);
          }
        }
      }
      const obj12 = { projectId, isPreview: flag, def: found, hint: joined, value: null, disabled: null, onChange: null, fallback: null };
      let tmp26 = first[found.key];
      if (tmp26 == null) {
        tmp26 = memo1[found.key];
      }
      obj12.value = tmp26;
      obj12.disabled = first2;
      obj12.onChange = function onChange(arg0) {
        closure_1_13(false);
        closure_1_6((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[key.key] = key;
          return obj;
        });
      };
      obj12.fallback = renderTextSetting(found, joined);
      tmp21Result = map(closure_1_24, obj12, found.key);
    }
  }
  function renderTextSetting(label, joined) {
    closure_0 = label;
    let obj = first[label.key];
    if (obj == null) {
      obj = memo1[label.key];
    }
    const obj2 = { label: label.label, description: joined, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, keyboardType: null, value: null, onChange: null, disabled: null };
    let tmp3;
    if ("number" === label.type) {
      let str2 = "numbers-and-punctuation";
      if (null != label.min) {
        str2 = "numbers-and-punctuation";
        if (label.min >= 0) {
          if (null == label.step) {
            let str3 = "number-pad";
          } else {
            const _Number = Number;
            str3 = "decimal-pad";
          }
          str2 = str3;
        }
      }
      tmp3 = str2;
    }
    obj2.keyboardType = tmp3;
    if (Array.isArray(obj)) {
      let str4 = obj.join(", ");
    } else {
      str4 = "";
      if (null != obj) {
        const _String = String;
        str4 = String(obj);
      }
    }
    obj2.value = str4;
    obj2.onChange = function onChange(arg0) {
      closure_1_13(false);
      closure_1_6((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[key.key] = key;
        return obj;
      });
    };
    obj2.disabled = first2;
    return map(projectId(flag[24]).TextInput, obj2, label.key);
  }
  function renderSecret(value) {
    closure_0 = value;
    const def = value.def;
    let label;
    if (def != null) {
      label = def.label;
    }
    if (label == null) {
      label = value.name;
    }
    const def2 = value.def;
    let hint;
    if (def2 != null) {
      hint = def2.hint;
    }
    let hint1;
    if (null != hint) {
      if ("" !== def2.hint) {
        hint1 = def2.hint;
      }
    }
    const items = [hint1, ];
    let requires_rebuild;
    if (def2 != null) {
      requires_rebuild = def2.requires_rebuild;
    }
    let stringResult;
    if (true === requires_rebuild) {
      const intl = projectId(flag[16]).intl;
      stringResult = intl.string(notifyAgent(flag[17])["4kCM6H"]);
    }
    items[1] = stringResult;
    found = items.filter((item) => null != item);
    let joined;
    if (0 !== found.length) {
      joined = found.join(" ");
    }
    if (value.set) {
      if (true !== _undefined[value.name]) {
        const obj2 = { style: closure_3.secretRow, children: null };
        const obj3 = { style: closure_3.secretRowInfo, children: null };
        const obj4 = { variant: "text-sm/medium", color: "text-default", children: label };
        const items1 = [map(projectId(flag[25]).Text, obj4), map(projectId(flag[25]).Text, { variant: "text-sm/normal", color: "text-muted", children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), ];
        let tmp23 = null;
        if (null != joined) {
          const obj5 = { variant: "text-xs/normal", color: "text-muted", children: joined };
          tmp23 = map(projectId(flag[25]).Text, obj5);
        }
        items1[2] = tmp23;
        obj3.children = items1;
        const items2 = [memo3(closure_6, obj3), ];
        const obj6 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
        const intl2 = projectId(flag[16]).intl;
        obj6.text = intl2.string(notifyAgent(flag[17]).RsvBGf);
        const intl3 = projectId(flag[16]).intl;
        const obj7 = { label };
        obj6.accessibilityLabel = intl3.formatToPlainString(notifyAgent(flag[17]).WjoM7z, obj7);
        obj6.disabled = first2;
        obj6.onPress = function onPress() {
          return c10((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[name.name] = true;
            return obj;
          });
        };
        items2[1] = map(projectId(flag[26]).Button, obj6);
        obj2.children = items2;
        let tmp12Result = memo3(closure_6, obj2, value.name);
      }
      return tmp12Result;
    }
    let obj = { label, description: joined, placeholder: null, secureTextEntry: true, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, value: null, onChange: null, disabled: null };
    let str3;
    if (value.set) {
      str3 = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
    }
    obj.placeholder = str3;
    let str4 = first1[value.name];
    if (str4 == null) {
      str4 = "";
    }
    obj.value = str4;
    obj.onChange = function onChange(arg0) {
      const name = arg0;
      closure_1_13(false);
      closure_1_8((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[name.name] = name;
        return obj;
      });
    };
    obj.disabled = first2;
    tmp12Result = map(projectId(flag[24]).TextInput, obj, value.name);
  }
  let tmp = renderSecret();
  asyncGeneratorStep = tmp;
  let items = [memo1];
  const stateFromStores = projectId(flag[14]).useStateFromStores(items, () => ConjureConnectionStore.getSettings(projectId));
  let tmp5 = stateFromStores(first.useState({}), 2);
  first = tmp5[0];
  closure_6 = tmp5[1];
  const tmp7 = stateFromStores(first.useState({}), 2);
  const first1 = tmp7[0];
  closure_8 = tmp7[1];
  let obj = projectId(flag[14]);
  [c9, c10] = stateFromStores(first.useState({}), 2);
  const tmp10 = stateFromStores(first.useState(false), 2);
  const first2 = tmp10[0];
  closure_12 = tmp10[1];
  const tmp12 = stateFromStores(first.useState(false), 2);
  closure_13 = tmp12[1];
  let items1 = [stateFromStores];
  const memo = first.useMemo(() => {
    let schema;
    if (stateFromStores != null) {
      schema = stateFromStores.schema;
    }
    if (schema == null) {
      schema = [];
    }
    return schema;
  }, items1);
  let items2 = [stateFromStores];
  memo1 = first.useMemo(() => {
    let obj;
    if (stateFromStores != null) {
      obj = stateFromStores.values;
    }
    if (obj == null) {
      obj = {};
    }
    return obj;
  }, items2);
  const items3 = [memo, stateFromStores];
  const memo2 = first.useMemo(() => {
    let secrets;
    if (stateFromStores != null) {
      secrets = stateFromStores.secrets;
    }
    if (secrets == null) {
      secrets = [];
    }
    return secrets.map((item) => {
      const obj = {};
      const merged = Object.assign(item);
      obj.def = memo.find((key) => {
        let tmp = key.key === item.name;
        if (tmp) {
          tmp = "secret" === key.type;
        }
        return tmp;
      });
      return obj;
    });
  }, items3);
  let found = memo.filter((type) => "secret" !== type.type);
  const map = new Map(memo2.map((name) => {
    const items = [name.name, name];
    return items;
  }));
  if (scopeKeys == null) {
    scopeKeys = [];
  }
  const found1 = scopeKeys.filter((item) => {
    closure_0 = item;
    let someResult = found.some((key) => key.key === closure_0);
    if (!someResult) {
      someResult = map.has(item);
    }
    return someResult;
  });
  const items4 = [memo, first1, memo1, first];
  const tmp9 = stateFromStores(first.useState({}), 2);
  memo3 = obj2.useMemo(() => {
    const values = {};
    function _loop(arg0) {
      closure_0 = arg0;
      found = memo.find((key) => key.key === closure_0);
      if (null == found) {
        return 0;
      } else {
        const obj = conjureSettingValues;
        const result = obj.conjureSettingSubmitValue(found, closure_1);
        if (undefined !== result) {
          const tmp2Result = conjureSettingValues;
          if (!tmp2Result.conjureSettingValuesEqual(result, tmp2Result2.conjureSettingBaseline(found, memo1[arg0]))) {
            obj[arg0] = result;
          }
          tmp2Result2 = conjureSettingValues;
        }
        return 0;
      }
    }
    const entries = Object.entries(first);
    while (tmp2 !== undefined) {
      let tmp5 = stateFromStores(tmp3, 2);
      closure_1 = tmp5[1];
      let _loopResult = _loop(tmp5[0]);
      continue;
    }
    const obj2 = {};
    const entries1 = Object.entries(first1);
    tmp2 = entries[Symbol.iterator]();
    while (tmp8 !== undefined) {
      let tmp11 = stateFromStores(tmp9, 2);
      [tmp12, str] = tmp11;
      if ("" !== str.trim()) {
        obj2[tmp12] = str.trim();
      }
      continue;
    }
    if (Object.keys(values).length > 0) {
      const obj3 = { values };
      let obj4 = obj3;
    } else {
      obj4 = {};
    }
    const merged = Object.assign(obj4);
    if (Object.keys(obj2).length > 0) {
      const obj6 = { secrets: obj2 };
      let obj7 = obj6;
    } else {
      obj7 = {};
    }
    const merged1 = Object.assign(obj7);
    return {};
  }, items4);
  closure_19 = tmp18;
  const items5 = [null != memo3.values || null != memo3.secrets, notifyAgent, projectId, first2, memo3];
  let tmp20 = null;
  const callback = obj2.useCallback(asyncGeneratorStep(async () => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp4;
            dependencyMap = tmp8;
            let rebuildRequired;
            let project2;
            if (closure_19) {
              if (!first2) {
                closure_12(true);
                closure_13(false);
                c5 = 2;
                c6 = 3;
                c7 = 1;
                const obj4 = { value: memo(projectId, memo3), done: false };
                return obj4;
              }
            }
            c7 = 3;
            return { value: true, done: true };
          }
        } else if (1 === tmp8) {
          c5 = 0;
          closure_131_12(false);
          throw closure_4;
        } else if (2 === tmp8) {
          c5 = 1;
          closure_131_13(true);
          c5 = 0;
          closure_131_12(false);
          c7 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_131_12(false);
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          rebuildRequired = value.rebuildRequired;
          if (!closure_131_1) {
            if (!closure_1_11.hasPendingSettingsRequest(closure_131_0)) {
              if (!rebuildRequired) {
                project2 = project.getProject(closure_131_0);
                let application_id;
                if (project2 != null) {
                  application_id = project2.application_id;
                }
                let _null = application_id;
                if (application_id == null) {
                  _null = null;
                }
                _null2(11423)(_null);
                let isPreviewlessProjectResult = null != project2;
                if (isPreviewlessProjectResult) {
                  isPreviewlessProjectResult = _null(6946).isPreviewlessProject(project2);
                  const obj = _null(6946);
                }
                if (!isPreviewlessProjectResult) {
                  let prop;
                  if (project2 != null) {
                    prop = project2.preview_application_id;
                  }
                  _null2 = prop;
                  if (prop == null) {
                    _null2 = null;
                  }
                  _null2(11423)(_null2);
                  const tmp35 = _null2(11423);
                }
                const tmp19 = _null2(11423);
              }
              c5 = 0;
              closure_131_12(false);
              c7 = 3;
            }
            closure_1_12(closure_131_0);
          }
          const intl = _null(1126).intl;
          closure_1_13(closure_131_0, intl.string(_null2(3849)["08bsJL"]));
        }
      } catch (tmp75) {
        closure_4 = tmp75;
        if (tmp5 === c5) {
          c7 = tmp3;
          throw tmp75;
        } else if (tmp2 === tmp77) {
          c6 = tmp2;
        } else {
          c6 = tmp;
        }
      }
    }
  }), items5);
  if (tmp12[0]) {
    let obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    let intl = tmp2(tmp3[16]).intl;
    obj3.children = intl.string(notifyAgent(tmp3[17])["A5TC+K"]);
    tmp20 = map(tmp2(tmp3[25]).Text, obj3);
  }
  let obj4 = { style: tmp.section, children: null };
  let tmp25 = null;
  if (null != note) {
    tmp25 = null;
    if ("" !== note) {
      let obj5 = { variant: "text-sm/normal", color: "text-default", children: note };
      tmp25 = map(tmp2(tmp3[25]).Text, obj5);
    }
  }
  const items6 = [tmp25, , , ];
  let tmp27 = null;
  if (null != stateFromStores) {
    tmp27 = null;
    if (0 === found.length) {
      tmp27 = null;
      if (0 === memo2.length) {
        let obj6 = { variant: "text-sm/normal", color: "text-muted", children: null };
        let intl2 = tmp2(tmp3[16]).intl;
        obj6.children = intl2.string(notifyAgent(tmp3[17]).lJJayk);
        tmp27 = map(tmp2(tmp3[25]).Text, obj6);
      }
    }
  }
  items6[1] = tmp27;
  if (found1.length > 0) {
    let tmp32 = null;
    if (someResult) {
      let obj7 = { variant: "text-xs/normal", color: "text-muted", children: null };
      let intl3 = tmp2(tmp3[16]).intl;
      obj7.children = intl3.string(notifyAgent(tmp3[17]).dsHRPK);
      tmp32 = map(tmp2(tmp3[25]).Text, obj7);
    }
    const obj8 = { children: null };
    const items7 = [
      tmp32,
      found1.map(function renderScoped(item) {
          closure_0 = item;
          value = map.get(item);
          if (null != value) {
            return renderSecret(value);
          } else {
            found = found.find((key) => key.key === closure_0);
            let tmp4 = null;
            if (null != found) {
              tmp4 = renderValueSetting(found);
            }
            return tmp4;
          }
        })
    ];
    obj8.children = items7;
    let mapped = tmp23(closure_19, obj8);
  } else {
    mapped = found.map(renderValueSetting);
  }
  const obj9 = { fields: memo3(closure_6, obj4), secretFields: null, loaded: null, valueCount: null, secretCount: null, isScoped: null, canSave: null, saving: null, submit: null };
  items6[2] = mapped;
  items6[3] = tmp20;
  obj4.children = items6;
  const obj10 = { style: tmp.section, children: null };
  let obj11 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl4 = tmp2(tmp3[16]).intl;
  obj11.children = intl4.string(notifyAgent(flag[17]).dsHRPK);
  const items8 = [map(projectId(flag[25]).Text, obj11), memo2.map(renderSecret), tmp20];
  obj10.children = items8;
  obj9.secretFields = memo3(closure_6, obj10);
  obj9.loaded = null != stateFromStores;
  obj9.valueCount = found.length;
  obj9.secretCount = memo2.length;
  obj9.isScoped = found1.length > 0;
  obj9.canSave = null != memo3.values || null != memo3.secrets;
  obj9.saving = first2;
  obj9.submit = callback;
  return obj9;
};