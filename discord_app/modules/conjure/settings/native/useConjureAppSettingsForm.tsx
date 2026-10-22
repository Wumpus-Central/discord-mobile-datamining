// discord_app/modules/conjure/settings/native/useConjureAppSettingsForm.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3830 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import conjureSettingValues from "../conjureSettingValues.tsx";
import useConjureSettingPickerOptions from "../useConjureSettingPickerOptions.tsx";
import ChannelPickerActionSheetDefault from "../../../channel/native/ChannelPickerActionSheet.tsx";
import ConjureGuildPickerSheetDefault from "../../guild_pickers/native/ConjureGuildPickerSheet.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import ConjureSettingsStore from "../ConjureSettingsStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const ConjureSettingsChannelSheet = "ConjureSettingsChannelSheet";
const ConjureSettingsPickerSheet = "ConjureSettingsPickerSheet";
const createStyles = fn(4969);
let obj2 = { linkedField: { gap: nativeDefault.space.PX_4 }, section: null, secretRow: null, secretRowInfo: null };
let obj3 = { gap: nativeDefault.space.PX_4 };
obj2.section = { gap: nativeDefault.space.PX_16 };
let obj4 = { gap: nativeDefault.space.PX_16 };
obj2.secretRow = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
let obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj2.secretRowInfo = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_17 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureChannelSettingRow(def) {
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
  label = def(tmp2[12]).useStateFromStores(first, tmp7, tmp8);
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
                                        class E {
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
                                        const tmp45 = closure_12(tmp12, obj3);
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
                            class E {
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
                            const tmp43 = closure_12(tmp11, obj4);
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
                    class E {
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
                    cResult[29] = E;
                    tmp41 = E;
                  }
                  const obj5 = { text: cResult[15] };
                  const tmp40 = closure_12(cResult[10], obj5);
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
      const TableRowGroup = tmp(tmp2[18]).TableRowGroup;
      const TableRow = tmp(tmp2[31]).TableRow;
      const label2 = def.label;
      const TableRowTrailingText = tmp(tmp2[32]).TableRowTrailingText;
      if (null != found) {
        tmp2 = tmp2[33];
        const tmpResult4 = tmp(tmp2);
        class E {
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
        class E {
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
        channelName = tmp23(require("../../intl/ConjureUntranslated.messages.js").iZIF9m);
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
  const conjureSettingsGuildId = def(11774).useConjureSettingsGuildId(projectId, isPreview);
  let obj = def(11774);
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
      const result = tmp(7329).conjureSettingChannels(stateFromStores, def.channel_filter);
      c4 = result;
      found = result.find((id) => id.id === importDefault);
      if (found == null) {
        found = null;
      }
      let obj3 = { label: def.label, subLabel: hint, arrow: true, disabled, trailing: null, onPress: null };
      if (null != found) {
        const tmpResult2 = tmp(5590);
        let channelName = tmpResult2.computeChannelName(found, UserStore, RelationshipStore, true);
      } else {
        let intl = tmp(1128).intl;
        channelName = intl.string(_modDef3830.iZIF9m);
      }
      let obj4 = { hasIcons: false, children: null };
      const obj5 = { text: channelName };
      obj3.trailing = closure_12(tmp(6900).TableRowTrailingText, obj5);
      obj3.onPress = function onPress() {
        const obj2 = { content: null, key: null, stackingBehavior: "stack" };
        const obj3 = { header: { title: def.label }, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
        const obj = ActionSheetActionCreators;
        const obj4 = { title: def.label };
        obj3.guild = GuildStore.getGuild(conjureSettingsGuildId);
        obj3.channels = channels;
        obj3.selectedChannel = found;
        const intl = util.intl;
        obj3.noChannelOptionLabel = intl.string(_modDef3830["jtBVV+"]);
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
        obj2.content = __initData(ChannelPickerActionSheetDefault, obj3);
        obj2.key = ConjureSettingsChannelSheet;
        obj.showActionSheet(obj2);
      };
      obj4.children = closure_12(tmp(6889).TableRow, obj3);
      return closure_12(tmp(6973).TableRowGroup, obj4);
    }
  }
  return fallback;
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePickerSettingRow(def) {
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
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[34]);
                    tmp3 = jsx;
                    obj1 = { guildId: closure_2, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
                    num = 1;
                    tmp4 = closure_1(closure_2[37]);
                    if (closure_3) {
                      num = tmp(tmp2[29]).MAX_CONJURE_SETTING_PICKS;
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
                    obj4.content = tmp3(tmp4, obj1);
                    obj4.key = ConjureSettingsPickerSheet;
                    showActionSheetResult = obj.showActionSheet(obj4);
                    return;
                  }
                }
                let tmp22 = closure_12(tmp(tmp2[32]).TableRowTrailingText, obj3);
                const tmp24 = closure_12(tmp(tmp2[32]).TableRowTrailingText, obj3);
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
                                tmp = closure_0;
                                tmp2 = closure_2;
                                obj = closure_0(closure_2[34]);
                                tmp3 = jsx;
                                obj1 = { guildId: closure_2, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
                                num = 1;
                                tmp4 = closure_1(closure_2[37]);
                                if (closure_3) {
                                  num = tmp(tmp2[29]).MAX_CONJURE_SETTING_PICKS;
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
                                obj4.content = tmp3(tmp4, obj1);
                                obj4.key = ConjureSettingsPickerSheet;
                                showActionSheetResult = obj.showActionSheet(obj4);
                                return;
                              }
                            }
                            obj5.disabled = disabled;
                            obj5.trailing = tmp22;
                            obj5.onPress = tmp25;
                            obj4.children = closure_12(tmp(tmp2[31]).TableRow, obj5);
                            const tmp28 = closure_12(tmp(tmp2[18]).TableRowGroup, obj4);
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
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[34]);
                  tmp3 = jsx;
                  obj1 = { guildId: closure_2, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
                  num = 1;
                  tmp4 = closure_1(closure_2[37]);
                  if (closure_3) {
                    num = tmp(tmp2[29]).MAX_CONJURE_SETTING_PICKS;
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
                  obj4.content = tmp3(tmp4, obj1);
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
        let formatToPlainStringResult = intl2.formatToPlainString(require("../../intl/ConjureUntranslated.messages.js")["LPs/Pv"], obj4);
      } else {
        const found = withSavedPicksResult.find((id) => id.id === _undefined[0]);
        formatToPlainStringResult = undefined;
        if (found != null) {
          formatToPlainStringResult = found.label;
        }
        if (formatToPlainStringResult == null) {
          const intl = tmp(tmp2[16]).intl;
          formatToPlainStringResult = intl.string(require("../../intl/ConjureUntranslated.messages.js").rn7w7I);
        }
      }
      const obj5 = { hasIcons: false, children: null };
      const obj6 = { label: def.label, subLabel: hint, arrow: true, disabled, trailing: null, onPress: null };
      const obj7 = { text: formatToPlainStringResult };
      obj6.trailing = closure_12(tmp(tmp2[32]).TableRowTrailingText, obj7);
      obj6.onPress = function onPress() {
        const obj2 = { guildId: conjureSettingsGuildId, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
        let num = 1;
        const obj = ActionSheetActionCreators;
        if (closure_5) {
          num = useConjureSettingPickerOptions.MAX_CONJURE_SETTING_PICKS;
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
        obj3.content = __initData(ConjureGuildPickerSheetDefault, obj2);
        obj3.key = ConjureSettingsPickerSheet;
        obj.showActionSheet(obj3);
      };
      obj5.children = closure_12(tmp(tmp2[31]).TableRow, obj6);
      return closure_12(tmp(tmp2[18]).TableRowGroup, obj5);
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
  const onSaved = projectId.onSaved;
  let flag = projectId.isPreview;
  if (flag === undefined) {
    flag = false;
  }
  c10 = undefined;
  c11 = undefined;
  let found;
  let memo3;
  closure_20 = undefined;
  function hintFor(def) {
    let hint;
    if (def != null) {
      hint = def.hint;
    }
    let hint1;
    if (null != hint) {
      if ("" !== def.hint) {
        hint1 = def.hint;
      }
    }
    const items = [hint1, , ];
    let requires_rebuild;
    if (def != null) {
      requires_rebuild = def.requires_rebuild;
    }
    let stringResult;
    if (true === requires_rebuild) {
      const intl = projectId(onSaved[16]).intl;
      stringResult = intl.string(notifyAgent(onSaved[17])["4kCM6H"]);
    }
    items[1] = stringResult;
    let type;
    if (def != null) {
      type = def.type;
    }
    let formatToPlainStringResult;
    if ("secret" === type) {
      if (null != def.hosts) {
        if (def.hosts.length > 0) {
          const intl2 = projectId(onSaved[16]).intl;
          const obj = { hosts: null };
          const hosts = def.hosts;
          obj.hosts = hosts.join(", ");
          formatToPlainStringResult = intl2.formatToPlainString(notifyAgent(onSaved[17]).Ww9HFO, obj);
        }
      }
    }
    items[2] = formatToPlainStringResult;
    found = items.filter((item) => null != item);
    let joined;
    if (0 !== found.length) {
      joined = found.join(" ");
    }
    return joined;
  }
  function renderValueSetting(found) {
    projectId = found;
    const tmp = hintFor(found);
    if ("select" === found.type) {
      if (true === found.multiple) {
        let items = first[found.key];
        if (items == null) {
          items = memo1[found.key];
        }
        const _Array = Array;
        if (!Array.isArray(items)) {
          items = [];
        }
        const obj2 = { title: null, hasIcons: false, children: null };
        ({ label: obj6.title, options: options2 } = found);
        if (options2 == null) {
          options2 = [];
        }
        obj2.children = options2.map((label) => {
          closure_0 = label;
          return first2(projectId(onSaved[19]).TableCheckboxRow, {
            label: label.label,
            checked: items.includes(label.value),
            disabled,
            onPress(arg0) {
              closure_0 = arg0;
              closure_2_14(false);
              closure_2_7((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                if (value) {
                  items = [];
                  items[HermesBuiltin.arraySpread(arr, 0)] = value.value;
                  found = items;
                } else {
                  found = arr.filter(() => { ... });
                }
                obj[value.key] = found;
                return obj;
              });
            }
          }, label.value);
        });
        return first2(projectId(onSaved[18]).TableRowGroup, obj2, found.key);
      }
    }
    if ("select" === found.type) {
      let tmp33 = first[found.key];
      if (tmp33 == null) {
        tmp33 = memo1[found.key];
      }
      let tmp39;
      if (typeof tmp33 === "string") {
        tmp39 = tmp33;
      }
      const obj3 = {
        hasIcons: false,
        defaultValue: tmp39,
        onChange(arg0) {
            closure_1_14(false);
            closure_1_7((arg0) => {
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
      obj3.children = options.map((label) => disabled(closure_0(onSaved[21]).TableRadioRow, { label: label.label, value: label.value }, label.value));
      return first2(projectId(onSaved[20]).TableRadioGroup, obj3, found.key);
    } else if ("checkbox" === found.type) {
      let tmp25 = first[found.key];
      if (tmp25 == null) {
        tmp25 = memo1[found.key];
      }
      const obj4 = { hasIcons: false, children: null };
      const obj11 = {
        label: found.label,
        subLabel: tmp,
        checked: true === tmp25,
        disabled: first2,
        onPress(arg0) {
            closure_1_14(false);
            closure_1_7((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[key.key] = key;
              return obj;
            });
          }
      };
      obj4.children = first2(projectId(onSaved[19]).TableCheckboxRow, obj11);
      return first2(projectId(onSaved[18]).TableRowGroup, obj4, found.key);
    } else {
      if ("role" !== found.type) {
        if ("user" !== found.type) {
          if ("channel" === found.type) {
            return tmp14Result;
          }
          if ("channel" === found.type) {
            let obj = { projectId, isPreview: flag, def: found, hint: tmp, value: null, disabled: null, onChange: null, fallback: null };
            let tmp9 = first[found.key];
            if (tmp9 == null) {
              tmp9 = memo1[found.key];
            }
            obj.value = tmp9;
            obj.disabled = first2;
            obj.onChange = function onChange(arg0) {
              closure_1_14(false);
              closure_1_7((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj[key.key] = key;
                return obj;
              });
            };
            obj.fallback = renderTextSetting(found, tmp);
            tmp14Result = first2(map, obj, found.key);
          } else {
            tmp14Result = renderTextSetting(found, tmp);
          }
        }
      }
      const obj12 = { projectId, isPreview: flag, def: found, hint: tmp, value: null, disabled: null, onChange: null, fallback: null };
      let tmp19 = first[found.key];
      if (tmp19 == null) {
        tmp19 = memo1[found.key];
      }
      obj12.value = tmp19;
      obj12.disabled = first2;
      obj12.onChange = function onChange(arg0) {
        closure_1_14(false);
        closure_1_7((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[key.key] = key;
          return obj;
        });
      };
      obj12.fallback = renderTextSetting(found, tmp);
      tmp14Result = first2(memo3, obj12, found.key);
    }
  }
  function renderTextSetting(multiline, description) {
    closure_0 = multiline;
    let obj = first[multiline.key];
    if (obj == null) {
      obj = memo1[multiline.key];
    }
    if (true === multiline.multiline) {
      const obj2 = { label: multiline.label, description, value: null, onChange: null, disabled: null };
      let str6 = "";
      if (typeof obj === "string") {
        str6 = obj;
      }
      obj2.value = str6;
      obj2.onChange = function onChange(arg0) {
        closure_1_14(false);
        closure_1_7((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[key.key] = key;
          return obj;
        });
      };
      obj2.disabled = first2;
      let tmp15Result = first2(projectId(onSaved[22]).TextArea, obj2, multiline.key);
    } else {
      const obj3 = { style: closure_4.linkedField, children: null };
      const obj4 = { label: multiline.label, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, keyboardType: null, value: null, onChange: null, disabled: null };
      let tmp3;
      if ("number" === multiline.type) {
        let str2 = "numbers-and-punctuation";
        if (null != multiline.min) {
          str2 = "numbers-and-punctuation";
          if (multiline.min >= 0) {
            if (null == multiline.step) {
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
      obj4.keyboardType = tmp3;
      const _Array = Array;
      if (Array.isArray(obj)) {
        let str4 = obj.join(", ");
      } else {
        str4 = "";
        if (null != obj) {
          const _String = String;
          str4 = String(obj);
        }
      }
      obj4.value = str4;
      obj4.onChange = function onChange(arg0) {
        closure_1_14(false);
        closure_1_7((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[key.key] = key;
          return obj;
        });
      };
      obj4.disabled = first2;
      const items = [first2(projectId(onSaved[23]).TextInput, obj4), ];
      let tmp6 = null;
      if (null != description) {
        const obj5 = { text: description, variant: "text-xs/normal", color: "text-muted" };
        tmp6 = first2(notifyAgent(onSaved[24]), obj5);
      }
      items[1] = tmp6;
      obj3.children = items;
      tmp15Result = closure_13(first, obj3, multiline.key);
    }
    return tmp15Result;
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
    const tmp2 = hintFor(value.def);
    if (value.set) {
      if (true !== _undefined[value.name]) {
        const obj2 = { style: closure_4.secretRow, children: null };
        const obj3 = { style: closure_4.secretRowInfo, children: null };
        const obj4 = { variant: "text-sm/medium", color: "text-default", children: label };
        const items = [first2(projectId(onSaved[25]).Text, obj4), first2(projectId(onSaved[25]).Text, { variant: "text-sm/normal", color: "text-muted", children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), ];
        let tmp14Result = null;
        if (null != tmp2) {
          const obj5 = { text: tmp2, variant: "text-xs/normal", color: "text-muted" };
          tmp14Result = first2(notifyAgent(onSaved[24]), obj5);
        }
        items[2] = tmp14Result;
        obj3.children = items;
        const items1 = [closure_13(first, obj3), ];
        const obj6 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
        const intl = projectId(onSaved[16]).intl;
        obj6.text = intl.string(notifyAgent(onSaved[17]).RsvBGf);
        const intl2 = projectId(onSaved[16]).intl;
        const obj7 = { label };
        obj6.accessibilityLabel = intl2.formatToPlainString(notifyAgent(onSaved[17]).WjoM7z, obj7);
        obj6.disabled = first2;
        obj6.onPress = function onPress() {
          return c11((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[name.name] = true;
            return obj;
          });
        };
        items1[1] = first2(projectId(onSaved[26]).Button, obj6);
        obj2.children = items1;
        let tmp4Result = closure_13(first, obj2, value.name);
      }
      return tmp4Result;
    }
    let obj = { style: closure_4.linkedField, children: null };
    const obj8 = { label, placeholder: null, secureTextEntry: true, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, value: null, onChange: null, disabled: null };
    let str;
    if (value.set) {
      str = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
    }
    obj8.placeholder = str;
    let str2 = first1[value.name];
    if (str2 == null) {
      str2 = "";
    }
    obj8.value = str2;
    obj8.onChange = function onChange(arg0) {
      const name = arg0;
      closure_1_14(false);
      closure_1_9((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[name.name] = name;
        return obj;
      });
    };
    obj8.disabled = first2;
    const items2 = [first2(projectId(onSaved[23]).TextInput, obj8), ];
    let tmp6Result = null;
    if (null != tmp2) {
      const obj9 = { text: tmp2, variant: "text-xs/normal", color: "text-muted" };
      tmp6Result = first2(notifyAgent(onSaved[24]), obj9);
    }
    items2[1] = tmp6Result;
    obj.children = items2;
    tmp4Result = closure_13(first, obj, value.name);
  }
  let tmp = found();
  channels = tmp;
  let items = [c11];
  const stateFromStores = projectId(onSaved[12]).useStateFromStores(items, () => ConjureSettingsStore.getSettings(projectId));
  let tmp5 = channels(stateFromStores.useState({}), 2);
  const first = tmp5[0];
  closure_7 = tmp5[1];
  const tmp7 = channels(stateFromStores.useState({}), 2);
  const first1 = tmp7[0];
  closure_9 = tmp7[1];
  let obj = projectId(onSaved[12]);
  [c10, c11] = channels(stateFromStores.useState({}), 2);
  const tmp10 = channels(stateFromStores.useState(false), 2);
  const first2 = tmp10[0];
  closure_13 = tmp10[1];
  const tmp12 = channels(stateFromStores.useState(false), 2);
  closure_14 = tmp12[1];
  let items1 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => {
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
  const memo1 = stateFromStores.useMemo(() => {
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
  const memo2 = stateFromStores.useMemo(() => {
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
  found = memo.filter((type) => "secret" !== type.type);
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
  let tmp9 = channels(stateFromStores.useState({}), 2);
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
      let tmp5 = closure_4(tmp3, 2);
      closure_1 = tmp5[1];
      let _loopResult = _loop(tmp5[0]);
      continue;
    }
    const obj2 = {};
    const entries1 = Object.entries(first1);
    tmp2 = entries[Symbol.iterator]();
    while (tmp8 !== undefined) {
      let tmp11 = closure_4(tmp9, 2);
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
    const obj5 = {};
    tmp8 = entries1[Symbol.iterator]();
    const merged1 = Object.assign(projectId(onSaved[13]).conjureSecretsSubmission(memo, obj2));
    return obj5;
  }, items4);
  closure_20 = tmp18;
  const items5 = [null != memo3.values || null != memo3.secrets, notifyAgent, onSaved, projectId, first2, memo3];
  let tmp20 = null;
  const callback = obj2.useCallback(flag(function*() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp4;
            projectId = tmp8;
            let rebuildRequired;
            if (closure_20) {
              if (!first2) {
                closure_13(true);
                closure_14(false);
                c3 = 2;
                c4 = 3;
                c5 = 1;
                const obj5 = { value: projectId(tmp36[14]).submitProjectSettings(projectId, memo3), done: false };
                return obj5;
              }
            }
            c5 = 3;
            return { value: true, done: true };
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_129_13(false);
          throw tmp36;
        } else if (2 === tmp8) {
          c3 = 1;
          closure_129_14(true);
          c3 = 0;
          closure_129_13(false);
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_129_13(false);
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          rebuildRequired = value.rebuildRequired;
          const obj7 = { rebuildRequired, notifyAgent: closure_129_1 };
          const result = projectId(tmp36[15]).settleProjectSettingsSave(closure_129_0, obj7);
          closure_129_7({});
          closure_129_9({});
          closure_129_11({});
          if (closure_129_2 != null) {
            closure_129_2();
          }
          c3 = 0;
          closure_129_13(false);
          c5 = 3;
          return { value: true, done: true };
        }
      } catch (tmp36) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp36;
        } else if (tmp2 === tmp38) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items5);
  if (tmp12[0]) {
    let obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    let intl = tmp2(tmp3[16]).intl;
    obj3.children = intl.string(notifyAgent(tmp3[17])["A5TC+K"]);
    tmp20 = first2(tmp2(tmp3[25]).Text, obj3);
  }
  let obj4 = { style: tmp.section, children: null };
  let tmp25 = null;
  if (null != note) {
    tmp25 = null;
    if ("" !== note) {
      let obj5 = { text: note, variant: "text-sm/normal", color: "text-default" };
      tmp25 = first2(notifyAgent(tmp3[24]), obj5);
    }
  }
  const items6 = [tmp25, , , ];
  let tmp28 = null;
  if (null != stateFromStores) {
    tmp28 = null;
    if (0 === found.length) {
      tmp28 = null;
      if (0 === memo2.length) {
        let obj6 = { variant: "text-sm/normal", color: "text-muted", children: null };
        let intl2 = tmp2(tmp3[16]).intl;
        obj6.children = intl2.string(notifyAgent(tmp3[17]).lJJayk);
        tmp28 = first2(tmp2(tmp3[25]).Text, obj6);
      }
    }
  }
  items6[1] = tmp28;
  if (found1.length > 0) {
    let tmp33 = null;
    if (someResult) {
      let obj7 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl3 = tmp2(tmp3[16]).intl;
      obj7.children = intl3.string(notifyAgent(tmp3[17]).dsHRPK);
      tmp33 = first2(tmp2(tmp3[25]).Text, obj7);
    }
    let obj8 = { children: null };
    const items7 = [
      tmp33,
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
    let mapped = tmp23(closure_14, obj8);
  } else {
    mapped = found.map(renderValueSetting);
  }
  let obj9 = { fields: closure_13(first, obj4), secretFields: null, loaded: null, valueCount: null, secretCount: null, isScoped: null, canSave: null, saving: null, submit: null };
  items6[2] = mapped;
  items6[3] = tmp20;
  obj4.children = items6;
  const obj10 = { style: tmp.section, children: null };
  let obj11 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl4 = tmp2(tmp3[16]).intl;
  obj11.children = intl4.string(notifyAgent(onSaved[17]).dsHRPK);
  const items8 = [first2(projectId(onSaved[25]).Text, obj11), memo2.map(renderSecret), tmp20];
  obj10.children = items8;
  obj9.secretFields = closure_13(first, obj10);
  obj9.loaded = null != stateFromStores;
  obj9.valueCount = found.length;
  obj9.secretCount = memo2.length;
  obj9.isScoped = found1.length > 0;
  obj9.canSave = null != memo3.values || null != memo3.secrets;
  obj9.saving = first2;
  obj9.submit = callback;
  return obj9;
};