// discord_app/modules/conjure/settings/native/useConjureAppSettingsForm.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3865 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import conjureSettingValues from "../conjureSettingValues.tsx";
import ChannelPickerActionSheetDefault from "../../../channel/native/ChannelPickerActionSheet.tsx";
import useConjureSettingPickerOptions from "../useConjureSettingPickerOptions.tsx";
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
function ConjureChannelSettingRow(def) {
  def = def.def;
  ({ hint, value: importDefault, onChange: dependencyMap } = def);
  c4 = undefined;
  let found;
  ({ projectId, isPreview, disabled, fallback } = def);
  const conjureSettingsGuildId = def(12458).useConjureSettingsGuildId(projectId, isPreview);
  let obj = def(12458);
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
      const result = tmp(7413).conjureSettingChannels(stateFromStores, def.channel_filter);
      c4 = result;
      found = result.find((id) => id.id === importDefault);
      if (found == null) {
        found = null;
      }
      let obj3 = { label: def.label, subLabel: null, arrow: true, disabled: null, trailing: null, onPress: null };
      let tmp6Result;
      if (null != hint) {
        let obj4 = { variant: "text-xs/medium", color: "text-subtle", children: tmp(12447).conjureLinkedNodes(hint, "text-xs/medium") };
        tmp6Result = closure_12(tmp(5619).Text, obj4);
        const tmpResult3 = tmp(12447);
      }
      obj3.subLabel = tmp6Result;
      obj3.disabled = disabled;
      if (null != found) {
        const tmpResult4 = tmp(5647);
        let channelName = tmpResult4.computeChannelName(found, UserStore, RelationshipStore, true);
      } else {
        let intl = tmp(1114).intl;
        channelName = intl.string(_modDef3865.iZIF9m);
      }
      const obj5 = { hasIcons: false, children: null };
      const obj6 = { text: channelName };
      obj3.trailing = closure_12(tmp(6980).TableRowTrailingText, obj6);
      obj3.onPress = function onPress() {
        const obj2 = { content: null, key: "ConjureSettingsChannelSheet", stackingBehavior: "stack" };
        const obj3 = { header: { title: def.label }, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
        const obj = ActionSheetActionCreators;
        const obj4 = { title: def.label };
        obj3.guild = GuildStore.getGuild(conjureSettingsGuildId);
        obj3.channels = channels;
        obj3.selectedChannel = found;
        const intl = util.intl;
        obj3.noChannelOptionLabel = intl.string(_modDef3865["jtBVV+"]);
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
        obj2.content = closure_2_12(ChannelPickerActionSheetDefault, obj3);
        obj.showActionSheet(obj2);
      };
      obj5.children = closure_12(tmp(6969).TableRow, obj3);
      return closure_12(tmp(7054).TableRowGroup, obj5);
    }
  }
  return fallback;
}
function ConjurePickerSettingRow(def) {
  def = def.def;
  ({ hint, value, onChange: importDefault } = def);
  let conjureSettingsGuildId;
  c4 = undefined;
  closure_5 = undefined;
  ({ projectId, isPreview, disabled, fallback } = def);
  conjureSettingsGuildId = def(conjureSettingsGuildId[28]).useConjureSettingsGuildId(projectId, isPreview);
  const tmp5 = require("useConjureSettingPickerOptions")(conjureSettingsGuildId, def);
  let obj = def(conjureSettingsGuildId[28]);
  const result = def(conjureSettingsGuildId[28]).conjureSettingPickedIds(value);
  c3 = result;
  let obj2 = def(conjureSettingsGuildId[28]);
  let tmp6 = null;
  if ("user" === def.type) {
    tmp6 = conjureSettingsGuildId;
  }
  const conjureMemberRequests = def(conjureSettingsGuildId[35]).useConjureMemberRequests(tmp6, result);
  if (null != conjureSettingsGuildId) {
    if (null != tmp5) {
      const withSavedPicksResult = tmp(tmp2[28]).withSavedPicks(tmp5, value, (id) => ({ id, label: id }));
      c4 = withSavedPicksResult;
      closure_5 = tmp12;
      if (true === def.multiple) {
        const intl2 = tmp(tmp2[14]).intl;
        const obj4 = { count: result.length };
        let formatToPlainStringResult = intl2.formatToPlainString(require("../../intl/ConjureUntranslated.messages.js")["LPs/Pv"], obj4);
      } else {
        const found = withSavedPicksResult.find((id) => id.id === _undefined[0]);
        formatToPlainStringResult = undefined;
        if (found != null) {
          formatToPlainStringResult = found.label;
        }
        if (formatToPlainStringResult == null) {
          const intl = tmp(tmp2[14]).intl;
          formatToPlainStringResult = intl.string(require("../../intl/ConjureUntranslated.messages.js").rn7w7I);
        }
      }
      const obj5 = { label: def.label, subLabel: null, arrow: true, disabled: null, trailing: null, onPress: null };
      let tmp10Result;
      if (null != hint) {
        const obj6 = { variant: "text-xs/medium", color: "text-subtle", children: tmp(tmp2[20]).conjureLinkedNodes(hint, "text-xs/medium") };
        tmp10Result = closure_12(tmp(tmp2[26]).Text, obj6);
        const tmpResult2 = tmp(tmp2[20]);
      }
      const obj7 = { hasIcons: false, children: null };
      obj5.subLabel = tmp10Result;
      obj5.disabled = disabled;
      const obj8 = { text: formatToPlainStringResult };
      obj5.trailing = closure_12(tmp(tmp2[31]).TableRowTrailingText, obj8);
      obj5.onPress = function onPress() {
        const obj2 = { guildId: conjureSettingsGuildId, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
        let num = 1;
        const obj = ActionSheetActionCreators;
        if (closure_5) {
          num = useConjureSettingPickerOptions.MAX_CONJURE_SETTING_PICKS;
        }
        const obj3 = { content: null, key: "ConjureSettingsPickerSheet", stackingBehavior: "stack" };
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
        obj3.content = closure_2_12(ConjureGuildPickerSheetDefault, obj2);
        obj.showActionSheet(obj3);
      };
      obj7.children = closure_12(tmp(tmp2[30]).TableRow, obj5);
      return closure_12(tmp(tmp2[19]).TableRowGroup, obj7);
    }
  }
  return fallback;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { linkedField: { gap: nativeDefault.space.PX_4 }, section: null, secretRow: null, secretRowInfo: null };
let obj3 = { gap: nativeDefault.space.PX_4 };
obj2.section = { gap: nativeDefault.space.PX_16 };
let obj4 = { gap: nativeDefault.space.PX_16 };
obj2.secretRow = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
let obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj2.secretRowInfo = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_15 = createStyles.createStyles(obj2);
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
  first = undefined;
  closure_7 = undefined;
  first1 = undefined;
  closure_9 = undefined;
  c10 = undefined;
  c11 = undefined;
  first2 = undefined;
  closure_13 = undefined;
  c14 = undefined;
  c15 = undefined;
  c16 = undefined;
  let found1;
  closure_22 = undefined;
  closure_23 = undefined;
  closure_24 = undefined;
  let memo3;
  closure_26 = undefined;
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
      const intl = projectId(onSaved[14]).intl;
      stringResult = intl.string(notifyAgent(onSaved[15])["4kCM6H"]);
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
          const intl2 = projectId(onSaved[14]).intl;
          const obj = { hosts: null };
          const hosts = def.hosts;
          obj.hosts = hosts.join(", ");
          formatToPlainStringResult = intl2.formatToPlainString(notifyAgent(onSaved[15]).Ww9HFO, obj);
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
        const obj2 = { title: found.label, description: null, hasIcons: false, children: null };
        let conjureLinkedNodesResult;
        if (null != tmp) {
          conjureLinkedNodesResult = projectId(onSaved[20]).conjureLinkedNodes(tmp, "text-sm/normal");
          const tmp47Result = projectId(onSaved[20]);
        }
        obj2.description = conjureLinkedNodesResult;
        let options1 = found.options;
        if (options1 == null) {
          options1 = [];
        }
        obj2.children = options1.map((label) => {
          closure_0 = label;
          return first2(projectId(onSaved[21]).TableCheckboxRow, {
            label: label.label,
            checked: items.includes(label.value),
            disabled,
            onPress(arg0) {
              closure_0 = arg0;
              _undefined(false);
              closure_2_7((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                if (value) {
                  items = [];
                  items[HermesBuiltin.arraySpread(arr, 0)] = value.value;
                  found = items;
                } else {
                  found = arr.filter(/* F139683 */ function() { ... });
                }
                obj[value.key] = found;
                return obj;
              });
            }
          }, label.value);
        });
        return first2(projectId(onSaved[19]).TableRowGroup, obj2, found.key);
      }
    }
    if ("select" === found.type) {
      let tmp34 = first[found.key];
      if (tmp34 == null) {
        tmp34 = memo1[found.key];
      }
      let tmp40;
      if (typeof tmp34 === "string") {
        tmp40 = tmp34;
      }
      const obj3 = {
        hasIcons: false,
        defaultValue: tmp40,
        onChange(arg0) {
            _undefined(false);
            closure_1_7((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[key.key] = key;
              return obj;
            });
          },
        title: found.label,
        description: null,
        accessibilityLabel: null,
        children: null
      };
      let conjureLinkedNodesResult1;
      if (null != tmp) {
        conjureLinkedNodesResult1 = projectId(onSaved[20]).conjureLinkedNodes(tmp, "text-sm/normal");
        const tmp38Result = projectId(onSaved[20]);
      }
      obj3.description = conjureLinkedNodesResult1;
      ({ label: obj7.accessibilityLabel, options } = found);
      if (options == null) {
        options = [];
      }
      obj3.children = options.map((label) => disabled(closure_0(onSaved[23]).TableRadioRow, { label: label.label, value: label.value }, label.value));
      return first2(projectId(onSaved[22]).TableRadioGroup, obj3, found.key);
    } else if ("checkbox" === found.type) {
      let tmp25 = first[found.key];
      if (tmp25 == null) {
        tmp25 = memo1[found.key];
      }
      const obj4 = { label: found.label, subLabel: null, checked: null, disabled: null, onPress: null };
      let tmp28Result;
      if (null != tmp) {
        const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: tmp29(onSaved[20]).conjureLinkedNodes(tmp, "text-xs/medium") };
        tmp28Result = first2(tmp29(onSaved[26]).Text, obj5);
        const tmp29Result = tmp29(onSaved[20]);
      }
      const obj6 = { hasIcons: false, children: null };
      obj4.subLabel = tmp28Result;
      obj4.checked = true === tmp25;
      obj4.disabled = first2;
      obj4.onPress = function onPress(arg0) {
        _undefined(false);
        closure_1_7((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[key.key] = key;
          return obj;
        });
      };
      obj6.children = first2(projectId(onSaved[21]).TableCheckboxRow, obj4);
      return first2(projectId(onSaved[19]).TableRowGroup, obj6, found.key);
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
              _undefined(false);
              closure_1_7((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj[key.key] = key;
                return obj;
              });
            };
            obj.fallback = renderTextSetting(found, tmp);
            tmp14Result = first2(c16, obj, found.key);
          } else {
            tmp14Result = renderTextSetting(found, tmp);
          }
        }
      }
      const obj8 = { projectId, isPreview: flag, def: found, hint: tmp, value: null, disabled: null, onChange: null, fallback: null };
      let tmp19 = first[found.key];
      if (tmp19 == null) {
        tmp19 = memo1[found.key];
      }
      obj8.value = tmp19;
      obj8.disabled = first2;
      obj8.onChange = function onChange(arg0) {
        _undefined(false);
        closure_1_7((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[key.key] = key;
          return obj;
        });
      };
      obj8.fallback = renderTextSetting(found, tmp);
      tmp14Result = first2(memo, obj8, found.key);
    }
  }
  function renderTextSetting(multiline, description) {
    closure_0 = multiline;
    let obj = first[multiline.key];
    if (obj == null) {
      obj = memo1[multiline.key];
    }
    if (true === multiline.multiline) {
      const obj2 = { label: multiline.label, description, errorMessage: null, value: null, onChange: null, disabled: null };
      let stringResult;
      if (c15) {
        if (closure_23.includes(key2)) {
          const intl2 = projectId(onSaved[14]).intl;
          stringResult = intl2.string(notifyAgent(onSaved[15])["PW1+MY"]);
        }
      }
      obj2.errorMessage = stringResult;
      let str6 = "";
      if (typeof obj === "string") {
        str6 = obj;
      }
      obj2.value = str6;
      obj2.onChange = function onChange(arg0) {
        _undefined(false);
        closure_1_7((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[key.key] = key;
          return obj;
        });
      };
      obj2.disabled = first2;
      let tmp31Result = first2(projectId(onSaved[24]).TextArea, obj2, multiline.key);
      key2 = multiline.key;
    } else {
      const obj3 = { style: closure_4.linkedField, children: null };
      const obj4 = { label: multiline.label, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, keyboardType: null, errorMessage: null, value: null, onChange: null, disabled: null };
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
      let stringResult1;
      if (c15) {
        if (closure_23.includes(key)) {
          const intl = projectId(onSaved[14]).intl;
          stringResult1 = intl.string(notifyAgent(onSaved[15])["PW1+MY"]);
        }
      }
      obj4.errorMessage = stringResult1;
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
        _undefined(false);
        closure_1_7((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[key.key] = key;
          return obj;
        });
      };
      obj4.disabled = first2;
      const items = [first2(projectId(onSaved[25]).TextInput, obj4), ];
      let tmp14 = null;
      if (null != description) {
        const obj5 = { text: description, variant: "text-xs/normal", color: "text-muted" };
        tmp14 = first2(notifyAgent(onSaved[20]), obj5);
      }
      items[1] = tmp14;
      obj3.children = items;
      tmp31Result = closure_13(first, obj3, multiline.key);
      key = multiline.key;
    }
    return tmp31Result;
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
        const items = [first2(projectId(onSaved[26]).Text, obj4), first2(projectId(onSaved[26]).Text, { variant: "text-sm/normal", color: "text-muted", children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), ];
        let tmp19Result = null;
        if (null != tmp2) {
          const obj5 = { text: tmp2, variant: "text-xs/normal", color: "text-muted" };
          tmp19Result = first2(notifyAgent(onSaved[20]), obj5);
        }
        items[2] = tmp19Result;
        obj3.children = items;
        const items1 = [closure_13(first, obj3), ];
        const obj6 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
        const intl2 = projectId(onSaved[14]).intl;
        obj6.text = intl2.string(notifyAgent(onSaved[15]).RsvBGf);
        const intl3 = projectId(onSaved[14]).intl;
        const obj7 = { label };
        obj6.accessibilityLabel = intl3.formatToPlainString(notifyAgent(onSaved[15]).WjoM7z, obj7);
        obj6.disabled = first2;
        obj6.onPress = function onPress() {
          return c11((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[name.name] = true;
            return obj;
          });
        };
        items1[1] = first2(projectId(onSaved[27]).Button, obj6);
        obj2.children = items1;
        let tmp4Result = closure_13(first, obj2, value.name);
      }
      return tmp4Result;
    }
    let obj = { style: closure_4.linkedField, children: null };
    const obj8 = { label, placeholder: null, secureTextEntry: true, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, value: null, errorMessage: null, onChange: null, disabled: null };
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
    let name = value.name;
    let stringResult;
    if (c15) {
      if (closure_23.includes(name)) {
        const intl = projectId(onSaved[14]).intl;
        stringResult = intl.string(notifyAgent(onSaved[15])["PW1+MY"]);
      }
    }
    obj8.errorMessage = stringResult;
    obj8.onChange = function onChange(arg0) {
      const name = arg0;
      _undefined(false);
      closure_1_9((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[name.name] = name;
        return obj;
      });
    };
    obj8.disabled = first2;
    const items2 = [first2(projectId(onSaved[25]).TextInput, obj8), ];
    let tmp6Result = null;
    if (null != tmp2) {
      const obj9 = { text: tmp2, variant: "text-xs/normal", color: "text-muted" };
      tmp6Result = first2(notifyAgent(onSaved[20]), obj9);
    }
    items2[1] = tmp6Result;
    obj.children = items2;
    tmp4Result = closure_13(first, obj, value.name);
  }
  let tmp = c15();
  _slicedToArray = tmp;
  let items = [c11];
  const stateFromStores = projectId(onSaved[12]).useStateFromStores(items, () => ConjureSettingsStore.getSettings(projectId));
  [first, closure_7] = stateFromStores.useState({});
  [first1, closure_9] = stateFromStores.useState({});
  let obj = projectId(onSaved[12]);
  [c10, c11] = stateFromStores.useState({});
  [first2, closure_13] = stateFromStores.useState(false);
  let tmp9 = _slicedToArray(stateFromStores.useState({}), 2);
  [tmp13, c14] = stateFromStores.useState(false);
  const tmp12 = _slicedToArray(stateFromStores.useState(false), 2);
  [c15, c16] = stateFromStores.useState(false);
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
  let found = memo.filter((type) => "secret" !== type.type);
  const map = new Map(memo2.map((name) => {
    const items = [name.name, name];
    return items;
  }));
  if (scopeKeys == null) {
    scopeKeys = [];
  }
  found1 = scopeKeys.filter((item) => {
    closure_0 = item;
    let someResult = found.some((key) => key.key === closure_0);
    if (!someResult) {
      someResult = map.has(item);
    }
    return someResult;
  });
  closure_22 = tmp17;
  let tmp14 = _slicedToArray(stateFromStores.useState(false), 2);
  let someResult = found1.some((item) => map.has(item));
  let found2 = found;
  if (found1.length > 0) {
    found2 = found.filter((key) => found1.includes(key.key));
  }
  closure_23 = projectId(onSaved[13]).conjureMissingRequiredSettings(found2.map((def) => {
    const obj = { def, value: null };
    let tmp = first[def.key];
    if (tmp == null) {
      tmp = memo1[def.key];
    }
    obj.value = tmp;
    return obj;
  }));
  let tmp2Result = projectId(onSaved[13]);
  let found3 = memo2;
  if (found1.length > 0) {
    found3 = memo2.filter((name) => found1.includes(name.name));
  }
  closure_24 = projectId(onSaved[13]).conjureMissingRequiredSettings(found3.flatMap((def) => {
    if (null == def.def) {
      let items = [];
    } else {
      const obj = { def: def.def, value: first1[def.name], secretStored: def.set };
      items = [obj];
    }
    return items;
  }));
  const items4 = [memo, first1, memo1, first];
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
    const merged1 = Object.assign(projectId(onSaved[16]).conjureSecretsSubmission(memo, obj2));
    return obj5;
  }, items4);
  closure_26 = tmp20;
  const items5 = [null != memo3.values || null != memo3.secrets, notifyAgent, onSaved, projectId, first2, memo3];
  let tmp22 = null;
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
        return { value: "HermesInternal", done: null };
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
            if (closure_26) {
              if (!first2) {
                closure_13(true);
                _undefined(false);
                c3 = 2;
                c4 = 3;
                c5 = 1;
                const obj5 = { value: projectId(tmp36[17]).submitProjectSettings(projectId, memo3), done: false };
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
          const result = projectId(tmp36[18]).settleProjectSettingsSave(closure_129_0, obj7);
          closure_129_7({});
          closure_129_9({});
          closure_129_11({});
          closure_129_16(false);
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
  if (tmp13) {
    let obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    let intl = tmp2(tmp3[14]).intl;
    obj3.children = intl.string(notifyAgent(tmp3[15])["A5TC+K"]);
    tmp22 = first2(tmp2(tmp3[26]).Text, obj3);
  }
  let obj4 = { style: tmp.section, children: null };
  let tmp27 = null;
  if (null != note) {
    tmp27 = null;
    if ("" !== note) {
      let obj5 = { text: note, variant: "text-sm/normal", color: "text-default" };
      tmp27 = first2(notifyAgent(tmp3[20]), obj5);
    }
  }
  const items6 = [tmp27, , , ];
  let tmp30 = null;
  if (null != stateFromStores) {
    tmp30 = null;
    if (0 === found.length) {
      tmp30 = null;
      if (0 === memo2.length) {
        let obj6 = { variant: "text-sm/normal", color: "text-muted", children: null };
        let intl2 = tmp2(tmp3[14]).intl;
        obj6.children = intl2.string(notifyAgent(tmp3[15]).lJJayk);
        tmp30 = first2(tmp2(tmp3[26]).Text, obj6);
      }
    }
  }
  items6[1] = tmp30;
  if (found1.length > 0) {
    let tmp35 = null;
    if (someResult) {
      let obj7 = { variant: "text-xs/normal", color: "text-muted", children: null };
      let intl3 = tmp2(tmp3[14]).intl;
      obj7.children = intl3.string(notifyAgent(tmp3[15]).dsHRPK);
      tmp35 = first2(tmp2(tmp3[26]).Text, obj7);
    }
    let obj8 = { children: null };
    const items7 = [
      tmp35,
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
    let mapped = tmp25(c14, obj8);
  } else {
    mapped = found.map(renderValueSetting);
  }
  let obj9 = { fields: closure_13(first, obj4), secretFields: null, loaded: null, valueCount: null, secretCount: null, isScoped: null, canSave: null, saving: null, submit: null, validate: null };
  items6[2] = mapped;
  items6[3] = tmp22;
  obj4.children = items6;
  const obj10 = { style: tmp.section, children: null };
  const obj11 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl4 = tmp2(tmp3[14]).intl;
  obj11.children = intl4.string(notifyAgent(onSaved[15]).dsHRPK);
  const items8 = [first2(projectId(onSaved[26]).Text, obj11), memo2.map(renderSecret), tmp22];
  obj10.children = items8;
  obj9.secretFields = closure_13(first, obj10);
  obj9.loaded = null != stateFromStores;
  obj9.valueCount = found.length;
  obj9.secretCount = memo2.length;
  obj9.isScoped = found1.length > 0;
  obj9.canSave = null != memo3.values || null != memo3.secrets;
  obj9.saving = first2;
  obj9.submit = callback;
  obj9.validate = function validate() {
    if (0 !== closure_23.length) {
      _undefined2(true);
      if (closure_22) {
        let str = "fields";
      } else {
        str = "secretFields";
      }
      let tmp2 = str;
    } else {
      tmp2 = null;
    }
    return tmp2;
  };
  return obj9;
};