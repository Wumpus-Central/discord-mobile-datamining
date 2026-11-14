// === Module 13213: useConjureAppSettingsForm ===

// Module 13213 (useConjureAppSettingsForm)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5552 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 11964 */;
import useConjureSettingPickerOptions from "useConjureSettingPickerOptions" /* 13214 */;
import conjureSettingValues from "conjureSettingValues" /* 13216 */;
import ConjureGuildPickerSheetDefault from "ConjureGuildPickerSheet" /* 13238 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 5236 */;
import GuildStore from "GuildStore" /* 5177 */;
import RelationshipStore from "RelationshipStore" /* 5248 */;
import UserStore from "UserStore" /* 1388 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 7379 */;

require = fn;
function ConjureChannelSettingRow(guildId) {
  guildId = guildId.guildId;
  const def = guildId.def;
  ({ hint, value: dependencyMap, onChange: asyncGeneratorStep } = guildId);
  c4 = undefined;
  let found;
  ({ disabled, fallback } = guildId);
  items = [GuildChannelStore];
  const items1 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(items, () => {
    channels = null;
    if (null != guildId) {
      channels = GuildChannelStore.getChannels(tmp);
    }
    return channels;
  }, items1);
  if (null != guildId) {
    if (null != stateFromStores) {
      const result = tmp(7260).conjureSettingChannels(stateFromStores, def.channel_filter);
      c4 = result;
      found = result.find((id) => id.id === dependencyMap);
      if (found == null) {
        found = null;
      }
      let obj2 = { label: def.label, subLabel: null, arrow: true, disabled: null, trailing: null, onPress: null };
      let tmp5Result;
      if (null != hint) {
        let obj3 = { variant: "body-xs/medium", color: "text-subtle", children: tmp(13222).conjureLinkedNodes(hint, "body-xs/medium") };
        tmp5Result = closure_12(tmp(5929).Text, obj3);
        const tmpResult3 = tmp(13222);
      }
      obj2.subLabel = tmp5Result;
      obj2.disabled = disabled;
      if (null != found) {
        const tmpResult4 = tmp(5954);
        let channelName = tmpResult4.computeChannelName(found, UserStore, RelationshipStore, true);
      } else {
        let intl = tmp(1113).intl;
        channelName = intl.string(def(4131).iZIF9m);
      }
      let obj4 = { hasIcons: false, children: null };
      const obj5 = { text: channelName };
      obj2.trailing = closure_12(tmp(7458).TableRowTrailingText, obj5);
      obj2.onPress = function onPress() {
        const obj2 = { content: null, key: "ConjureSettingsChannelSheet", stackingBehavior: "stack" };
        const obj3 = { header: { title: def.label }, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
        const obj = ActionSheetActionCreators;
        const obj4 = { title: def.label };
        obj3.guild = GuildStore.getGuild(guildId);
        obj3.channels = channels;
        obj3.selectedChannel = found;
        const intl = util.intl;
        obj3.noChannelOptionLabel = intl.string(_modDef4131["jtBVV+"]);
        obj3.onSelect = function onSelect(id) {
          let str;
          if (id != null) {
            str = id.id;
          }
          if (str == null) {
            str = "";
          }
          return closure_1_3(str);
        };
        obj2.content = application_id(ChannelPickerActionSheetDefault, obj3);
        obj.showActionSheet(obj2);
      };
      obj4.children = closure_12(tmp(7443).TableRow, obj2);
      return closure_12(tmp(7746).TableRowGroup, obj4);
    }
  }
  return fallback;
}
function ConjurePickerSettingRow(guildId) {
  guildId = guildId.guildId;
  const def = guildId.def;
  ({ hint, value, onChange: dependencyMap } = guildId);
  c4 = undefined;
  closure_5 = undefined;
  ({ disabled, fallback } = guildId);
  let tmp3 = def(13214)(guildId, def);
  const result = guildId(13214).conjureSettingPickedIds(value);
  c3 = result;
  let obj = guildId(13214);
  let tmp5 = null;
  if ("user" === def.type) {
    tmp5 = guildId;
  }
  const conjureMemberRequests = guildId(13215).useConjureMemberRequests(tmp5, result);
  if (null != guildId) {
    if (null != tmp3) {
      const withSavedPicksResult = tmp4(13214).withSavedPicks(tmp3, value, (id) => ({ id, label: id }));
      c4 = withSavedPicksResult;
      closure_5 = tmp11;
      if (true === def.multiple) {
        const intl2 = tmp4(1113).intl;
        let obj3 = { count: result.length };
        let formatToPlainStringResult = intl2.formatToPlainString(tmp(4131)["LPs/Pv"], obj3);
      } else {
        const found = withSavedPicksResult.find((id) => id.id === _undefined[0]);
        formatToPlainStringResult = undefined;
        if (found != null) {
          formatToPlainStringResult = found.label;
        }
        if (formatToPlainStringResult == null) {
          const intl = tmp4(1113).intl;
          formatToPlainStringResult = intl.string(tmp(4131).rn7w7I);
        }
      }
      const obj4 = { label: def.label, subLabel: null, arrow: true, disabled: null, trailing: null, onPress: null };
      let tmp9Result;
      if (null != hint) {
        const obj5 = { variant: "body-xs/medium", color: "text-subtle", children: tmp4(13222).conjureLinkedNodes(hint, "body-xs/medium") };
        tmp9Result = closure_12(tmp4(5929).Text, obj5);
        const tmp4Result2 = tmp4(13222);
      }
      const obj6 = { hasIcons: false, children: null };
      obj4.subLabel = tmp9Result;
      obj4.disabled = disabled;
      const obj7 = { text: formatToPlainStringResult };
      obj4.trailing = closure_12(tmp4(7458).TableRowTrailingText, obj7);
      obj4.onPress = function onPress() {
        const obj2 = { guildId, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
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
          closure_1_2(tmp3);
        };
        obj3.content = application_id(ConjureGuildPickerSheetDefault, obj2);
        obj.showActionSheet(obj3);
      };
      obj6.children = closure_12(tmp4(7443).TableRow, obj4);
      return closure_12(tmp4(7746).TableRowGroup, obj6);
    }
  }
  return fallback;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5306);
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
  let first;
  c9 = undefined;
  c10 = undefined;
  let first2;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  c16 = undefined;
  c17 = undefined;
  serverId = undefined;
  let found1;
  closure_26 = undefined;
  closure_27 = undefined;
  closure_28 = undefined;
  let memo2;
  let someResult1;
  closure_31 = undefined;
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
    items = [hint1, , ];
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
    closure_0 = found;
    let tmp = hintFor(found);
    const result = projectId(onSaved[14]).conjureSettingDraftKey(found, serverId);
    if ("select" === found.type) {
      if (true === found.multiple) {
        const tmp2Result = projectId(onSaved[14]);
        let result1 = first[tmp2Result.conjureSettingDraftKey(tmp2Result, found, serverId)];
        if (result1 == null) {
          result1 = projectId(onSaved[14]).conjureSettingStoredValue(stateFromStores, found, serverId);
          const tmp2Result15 = projectId(onSaved[14]);
        }
        const _Array = Array;
        if (!Array.isArray(result1)) {
          result1 = [];
        }
        const obj2 = { title: found.label, description: null, hasIcons: false, children: null };
        let conjureLinkedNodesResult;
        if (null != tmp) {
          conjureLinkedNodesResult = projectId(onSaved[21]).conjureLinkedNodes(tmp, "body-sm/normal");
          const tmp2Result16 = projectId(onSaved[21]);
        }
        obj2.description = conjureLinkedNodesResult;
        let options1 = found.options;
        if (options1 == null) {
          options1 = [];
        }
        obj2.children = options1.map((label) => closure_12(projectId(onSaved[22]).TableCheckboxRow, {
          label: label.label,
          checked: result1.includes(label.value),
          disabled,
          onPress(arg0) {
            if (arg0) {
              items = [];
              items[HermesBuiltin.arraySpread(result1, 0)] = label.value;
              found = items;
            } else {
              found = result1.filter((item) => item !== closure_0.value);
            }
            c13(false);
            closure_6((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[closure_0(closure_1_2[14]).conjureSettingDraftKey(closure_0, closure_2_21)] = found;
              return obj;
            });
          }
        }, label.value));
        return closure_12(projectId(onSaved[20]).TableRowGroup, obj2, result);
      }
    }
    if ("select" === found.type) {
      const tmp2Result17 = projectId(onSaved[14]);
      let result2 = first[tmp2Result17.conjureSettingDraftKey(tmp2Result17, found, serverId)];
      if (result2 == null) {
        result2 = projectId(onSaved[14]).conjureSettingStoredValue(stateFromStores, found, serverId);
        const tmp2Result18 = projectId(onSaved[14]);
      }
      let tmp47;
      if (typeof result2 === "string") {
        tmp47 = result2;
      }
      const obj3 = {
        hasIcons: false,
        defaultValue: tmp47,
        onChange(arg0) {
            closure_1 = arg0;
            c13(false);
            closure_6((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[closure_0(closure_1_2[14]).conjureSettingDraftKey(closure_0, closure_2_21)] = found;
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
        conjureLinkedNodesResult1 = projectId(onSaved[21]).conjureLinkedNodes(tmp, "body-sm/normal");
        const tmp2Result19 = projectId(onSaved[21]);
      }
      obj3.description = conjureLinkedNodesResult1;
      ({ label: obj19.accessibilityLabel, options } = found);
      if (options == null) {
        options = [];
      }
      obj3.children = options.map((label) => closure_1_12(closure_0(onSaved[24]).TableRadioRow, { label: label.label, value: label.value }, label.value));
      return closure_12(projectId(onSaved[23]).TableRadioGroup, obj3, result);
    } else {
      if ("checkbox" === found.type) {
        const obj4 = { label: found.label, subLabel: null, checked: null, disabled: null, onPress: null };
        let tmp35Result;
        if (null != tmp) {
          const obj5 = { variant: "body-xs/medium", color: "text-subtle", children: projectId(onSaved[21]).conjureLinkedNodes(tmp, "body-xs/medium") };
          tmp35Result = closure_12(projectId(onSaved[28]).Text, obj5);
          const tmp2Result20 = projectId(onSaved[21]);
        }
        obj4.subLabel = tmp35Result;
        const tmp2Result21 = projectId(onSaved[14]);
        let result3 = first[tmp2Result21.conjureSettingDraftKey(tmp2Result21, found, serverId)];
        if (result3 == null) {
          result3 = projectId(onSaved[14]).conjureSettingStoredValue(stateFromStores, found, serverId);
          const tmp2Result22 = projectId(onSaved[14]);
        }
        const obj6 = { hasIcons: false, children: null };
        obj4.checked = true === result3;
        obj4.disabled = first2;
        obj4.onPress = function onPress(arg0) {
          closure_1 = arg0;
          c13(false);
          closure_6((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[closure_0(closure_1_2[14]).conjureSettingDraftKey(closure_0, closure_2_21)] = found;
            return obj;
          });
        };
        obj6.children = closure_12(projectId(onSaved[22]).TableCheckboxRow, obj4);
        let tmp35Result2 = closure_12(projectId(onSaved[20]).TableRowGroup, obj6, result);
      } else if ("game" === found.type) {
        const obj7 = { def: found, hint: tmp, value: null, pickingEmpty: null, disabled: null, onChange: null, onPickingEmptyChange: null };
        const tmp2Result23 = projectId(onSaved[14]);
        let result4 = first[tmp2Result23.conjureSettingDraftKey(tmp2Result23, found, serverId)];
        if (result4 == null) {
          result4 = projectId(onSaved[14]).conjureSettingStoredValue(stateFromStores, found, serverId);
          const tmp2Result24 = projectId(onSaved[14]);
        }
        obj7.value = result4;
        obj7.pickingEmpty = true === _undefined3[found.key];
        obj7.disabled = first2;
        obj7.onChange = function onChange(arg0) {
          closure_1 = arg0;
          c13(false);
          closure_6((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[closure_0(closure_1_2[14]).conjureSettingDraftKey(closure_0, closure_2_21)] = found;
            return obj;
          });
        };
        obj7.onPickingEmptyChange = function onPickingEmptyChange(arg0) {
          return closure_18(closure_0.key, arg0);
        };
        tmp35Result2 = closure_12(notifyAgent(onSaved[25]), obj7, found.key);
        const tmp28 = notifyAgent(onSaved[25]);
      } else {
        if ("role" !== found.type) {
          if ("user" !== found.type) {
            if ("channel" === found.type) {
              let tmp10 = serverId;
              if (true !== found.per_server) {
                tmp10 = closure_20;
              }
              const obj8 = { guildId: tmp10, def: found, hint: tmp, value: null, disabled: null, onChange: null, fallback: null };
              const tmp2Result25 = projectId(onSaved[14]);
              let result5 = first[tmp2Result25.conjureSettingDraftKey(tmp2Result25, found, serverId)];
              if (result5 == null) {
                result5 = projectId(onSaved[14]).conjureSettingStoredValue(stateFromStores, found, serverId);
                const tmp2Result26 = projectId(onSaved[14]);
              }
              obj8.value = result5;
              obj8.disabled = first2;
              obj8.onChange = function onChange(arg0) {
                closure_1 = arg0;
                c13(false);
                closure_6((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_0(closure_1_2[14]).conjureSettingDraftKey(closure_0, closure_2_21)] = found;
                  return obj;
                });
              };
              obj8.fallback = renderTextSetting(found, tmp);
              tmp35Result2 = closure_12(_undefined3, obj8, result);
            } else {
              tmp35Result2 = renderTextSetting(found, tmp);
            }
          }
        }
        let tmp19 = serverId;
        if (true !== found.per_server) {
          tmp19 = closure_20;
        }
        const obj9 = { guildId: tmp19, def: found, hint: tmp, value: null, disabled: null, onChange: null, fallback: null };
        const tmp2Result27 = projectId(onSaved[14]);
        let result6 = first[tmp2Result27.conjureSettingDraftKey(tmp2Result27, found, serverId)];
        if (result6 == null) {
          result6 = projectId(onSaved[14]).conjureSettingStoredValue(stateFromStores, found, serverId);
          const tmp2Result28 = projectId(onSaved[14]);
        }
        obj9.value = result6;
        obj9.disabled = first2;
        obj9.onChange = function onChange(arg0) {
          closure_1 = arg0;
          c13(false);
          closure_6((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[closure_0(closure_1_2[14]).conjureSettingDraftKey(closure_0, closure_2_21)] = found;
            return obj;
          });
        };
        obj9.fallback = renderTextSetting(found, tmp);
        tmp35Result2 = closure_12(c17, obj9, result);
      }
      return tmp35Result2;
    }
    let obj = projectId(onSaved[14]);
  }
  function renderTextSetting(multiline, description) {
    closure_0 = multiline;
    const result = projectId(onSaved[14]).conjureSettingDraftKey(multiline, serverId);
    const obj2 = projectId(onSaved[14]);
    let result1 = first[obj2.conjureSettingDraftKey(obj2, multiline, serverId)];
    if (result1 == null) {
      result1 = projectId(onSaved[14]).conjureSettingStoredValue(stateFromStores, multiline, serverId);
      const tmpResult = projectId(onSaved[14]);
    }
    if (true === multiline.multiline) {
      const obj3 = { label: multiline.label, description, errorMessage: null, value: null, onChange: null, disabled: null };
      let stringResult;
      if (c14) {
        if (closure_27.includes(key2)) {
          const intl2 = projectId(onSaved[16]).intl;
          stringResult = intl2.string(notifyAgent(onSaved[17])["PW1+MY"]);
        }
      }
      obj3.errorMessage = stringResult;
      let str6 = "";
      if (typeof result1 === "string") {
        str6 = result1;
      }
      obj3.value = str6;
      obj3.onChange = function onChange(arg0) {
        closure_1 = arg0;
        c13(false);
        closure_6((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[closure_0(closure_1_2[14]).conjureSettingDraftKey(closure_0, closure_2_21)] = found;
          return obj;
        });
      };
      obj3.disabled = first2;
      let tmp25Result = closure_12(projectId(onSaved[26]).TextArea, obj3, result);
      key2 = multiline.key;
    } else {
      const obj4 = { style: closure_3.linkedField, children: null };
      const obj5 = { label: multiline.label, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, keyboardType: null, errorMessage: null, value: null, onChange: null, disabled: null };
      let tmp7;
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
        tmp7 = str2;
      }
      obj5.keyboardType = tmp7;
      let stringResult1;
      if (c14) {
        if (closure_27.includes(key)) {
          const intl = projectId(onSaved[16]).intl;
          stringResult1 = intl.string(notifyAgent(onSaved[17])["PW1+MY"]);
        }
      }
      obj5.errorMessage = stringResult1;
      const _Array = Array;
      if (Array.isArray(result1)) {
        let str4 = result1.join(", ");
      } else {
        str4 = "";
        if (null != result1) {
          const _String = String;
          str4 = String(result1);
        }
      }
      obj5.value = str4;
      obj5.onChange = function onChange(arg0) {
        closure_1 = arg0;
        c13(false);
        closure_6((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[closure_0(closure_1_2[14]).conjureSettingDraftKey(closure_0, closure_2_21)] = found;
          return obj;
        });
      };
      obj5.disabled = first2;
      items = [closure_12(projectId(onSaved[27]).TextInput, obj5), ];
      let tmp28Result = null;
      if (null != description) {
        const obj6 = { text: description, variant: "body-xs/normal", color: "text-muted" };
        tmp28Result = closure_12(notifyAgent(onSaved[21]), obj6);
      }
      items[1] = tmp28Result;
      obj4.children = items;
      tmp25Result = _undefined(closure_6, obj4, result);
      key = multiline.key;
    }
    return tmp25Result;
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
        const obj2 = { style: closure_3.secretRow, children: null };
        const obj3 = { style: closure_3.secretRowInfo, children: null };
        const obj4 = { variant: "body-sm/medium", color: "text-default", children: label };
        items = [closure_12(projectId(onSaved[28]).Text, obj4), closure_12(projectId(onSaved[28]).Text, { variant: "body-sm/normal", color: "text-muted", children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), ];
        let tmp19Result = null;
        if (null != tmp2) {
          const obj5 = { text: tmp2, variant: "body-xs/normal", color: "text-muted" };
          tmp19Result = closure_12(notifyAgent(onSaved[21]), obj5);
        }
        items[2] = tmp19Result;
        obj3.children = items;
        const items1 = [_undefined(closure_6, obj3), ];
        const obj6 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
        const intl2 = projectId(onSaved[16]).intl;
        obj6.text = intl2.string(notifyAgent(onSaved[17]).RsvBGf);
        const intl3 = projectId(onSaved[16]).intl;
        const obj7 = { label };
        obj6.accessibilityLabel = intl3.formatToPlainString(notifyAgent(onSaved[17]).WjoM7z, obj7);
        obj6.disabled = first2;
        obj6.onPress = function onPress() {
          return c10((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[name.name] = true;
            return obj;
          });
        };
        items1[1] = closure_12(projectId(onSaved[29]).Button, obj6);
        obj2.children = items1;
        let tmp4Result = _undefined(closure_6, obj2, value.name);
      }
      return tmp4Result;
    }
    let obj = { style: closure_3.linkedField, children: null };
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
    if (c14) {
      if (closure_27.includes(name)) {
        const intl = projectId(onSaved[16]).intl;
        stringResult = intl.string(notifyAgent(onSaved[17])["PW1+MY"]);
      }
    }
    obj8.errorMessage = stringResult;
    obj8.onChange = function onChange(arg0) {
      const name = arg0;
      _undefined(false);
      closure_1_8((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[name.name] = name;
        return obj;
      });
    };
    obj8.disabled = first2;
    const items2 = [closure_12(projectId(onSaved[27]).TextInput, obj8), ];
    let tmp6Result = null;
    if (null != tmp2) {
      const obj9 = { text: tmp2, variant: "body-xs/normal", color: "text-muted" };
      tmp6Result = closure_12(notifyAgent(onSaved[21]), obj9);
    }
    items2[1] = tmp6Result;
    obj.children = items2;
    tmp4Result = _undefined(closure_6, obj, value.name);
  }
  let tmp = c15();
  asyncGeneratorStep = tmp;
  items = [first2];
  const stateFromStores = projectId(onSaved[12]).useStateFromStores(items, () => ConjureSettingsStore.getSettings(projectId));
  let tmp5 = stateFromStores(first.useState({}), 2);
  first = tmp5[0];
  closure_6 = tmp5[1];
  let tmp7 = stateFromStores(first.useState({}), 2);
  const first1 = tmp7[0];
  closure_8 = tmp7[1];
  let obj = projectId(onSaved[12]);
  [c9, c10] = stateFromStores(first.useState({}), 2);
  let tmp10 = stateFromStores(first.useState(false), 2);
  first2 = tmp10[0];
  closure_12 = tmp10[1];
  const tmp9 = stateFromStores(first.useState({}), 2);
  [tmp13, c13] = stateFromStores(first.useState(false), 2);
  const tmp12 = stateFromStores(first.useState(false), 2);
  [c14, c15] = stateFromStores(first.useState(false), 2);
  const tmp14 = stateFromStores(first.useState(false), 2);
  [c16, c17] = stateFromStores(first.useState({}), 2);
  closure_18 = first.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined4((arg0) => {
      let tmp3 = arg0;
      if (arg0[closure_0] !== closure_1) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[tmp] = tmp2;
        tmp3 = obj;
      }
      return tmp3;
    });
  }, []);
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
  const tmp15 = stateFromStores(first.useState({}), 2);
  closure_20 = projectId(onSaved[13]).useConjureSettingsGuildId(projectId, flag);
  let obj3 = projectId(onSaved[13]);
  const conjureSettingsServers = projectId(onSaved[13]).useConjureSettingsServers(projectId, flag);
  ({ servers, serverId } = conjureSettingsServers);
  const setServerId = conjureSettingsServers.setServerId;
  let items2 = [memo, stateFromStores];
  const memo1 = first.useMemo(() => {
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
  }, items2);
  let found = memo.filter((type) => "secret" !== type.type);
  const map = new Map(memo1.map((name) => {
    items = [name.name, name];
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
  closure_26 = tmp18;
  let found2 = found;
  let obj4 = projectId(onSaved[13]);
  if (found1.length > 0) {
    found2 = found.filter((key) => found1.includes(key.key));
  }
  let someResult = found1.some((item) => map.has(item));
  const found3 = found2.filter((per_server) => {
    let tmp = true !== per_server.per_server;
    if (!tmp) {
      tmp = null != serverId;
    }
    return tmp;
  });
  closure_27 = projectId(onSaved[15]).conjureMissingRequiredSettings(found3.map((def) => {
    const obj = { def, value: null };
    const obj2 = conjureSettingValues;
    let result = first[obj2.conjureSettingDraftKey(obj2, def, serverId)];
    if (result == null) {
      result = conjureSettingValues.conjureSettingStoredValue(stateFromStores, def, serverId);
      const tmpResult = conjureSettingValues;
    }
    obj.value = result;
    return obj;
  }));
  let tmp2Result = projectId(onSaved[15]);
  let found4 = memo1;
  if (found1.length > 0) {
    found4 = memo1.filter((name) => found1.includes(name.name));
  }
  closure_28 = projectId(onSaved[15]).conjureMissingRequiredSettings(found4.flatMap((def) => {
    if (null == def.def) {
      items = [];
    } else {
      const obj = { def: def.def, value: first1[def.name], secretStored: def.set };
      items = [obj];
    }
    return items;
  }));
  const items3 = [memo, first1, stateFromStores, first];
  memo2 = obj2.useMemo(() => {
    const obj = {};
    const entries = Object.entries(first1);
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, str] = tmp5;
      if ("" !== str.trim()) {
        obj[tmp6] = str.trim();
      }
      continue;
    }
    const obj2 = {};
    tmp2 = entries[Symbol.iterator]();
    const merged = Object.assign(conjureSettingValues.conjureSettingValuesSubmission(stateFromStores, first));
    const merged1 = Object.assign(conjureSettingValues.conjureSecretsSubmission(memo, obj));
    return obj2;
  }, items3);
  someResult1 = memo.some((type) => {
    let tmp = "game" === type.type;
    if (tmp) {
      tmp = true === _undefined3[type.key];
    }
    return tmp;
  });
  const tmp22 = (null != memo2.values || null != memo2.server_values || null != memo2.secrets) && !someResult1;
  closure_31 = tmp22;
  const items4 = [tmp22, someResult1, notifyAgent, onSaved, projectId, first2, memo2];
  const callback = obj2.useCallback(asyncGeneratorStep(async () => {
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
            if (someResult1) {
              c5 = 3;
              return { value: false, done: true };
            } else {
              if (closure_31) {
                if (!first2) {
                  closure_12(true);
                  _undefined(false);
                  c3 = 2;
                  c4 = 3;
                  c5 = 1;
                  const obj5 = { value: projectId(tmp37[18]).submitProjectSettings(projectId, memo2), done: false };
                  return obj5;
                }
              }
              c5 = 3;
              return { value: true, done: true };
            }
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_129_12(false);
          throw tmp37;
        } else if (2 === tmp8) {
          c3 = 1;
          closure_129_13(true);
          c3 = 0;
          closure_129_12(false);
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_129_12(false);
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          rebuildRequired = value.rebuildRequired;
          const obj7 = { rebuildRequired, notifyAgent: closure_129_1 };
          const result = projectId(tmp37[19]).settleProjectSettingsSave(closure_129_0, obj7);
          closure_129_6({});
          closure_129_8({});
          closure_129_10({});
          closure_129_15(false);
          if (closure_129_2 != null) {
            closure_129_2();
          }
          c3 = 0;
          closure_129_12(false);
          c5 = 3;
          return { value: true, done: true };
        }
      } catch (tmp37) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp37;
        } else if (tmp2 === tmp39) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items4);
  const found5 = found2.filter((per_server) => true === per_server.per_server);
  if (0 === found5.length) {
    let tmp31 = null;
    if (tmp13) {
      let obj5 = { variant: "body-xs/normal", color: "text-feedback-critical", children: null };
      const intl5 = tmp2(tmp3[16]).intl;
      obj5.children = intl5.string(notifyAgent(tmp3[17])["A5TC+K"]);
      tmp31 = closure_12(tmp2(tmp3[28]).Text, obj5);
    }
    let obj6 = { style: tmp.section, children: null };
    let tmp36 = null;
    if (null != note) {
      tmp36 = null;
      if ("" !== note) {
        let obj7 = { text: note, variant: "body-sm/normal", color: "text-default" };
        tmp36 = closure_12(notifyAgent(tmp3[21]), obj7);
      }
    }
    const items5 = [tmp36, , , , ];
    let tmp39 = null;
    if (null != stateFromStores) {
      tmp39 = null;
      if (0 === found.length) {
        tmp39 = null;
        if (0 === memo1.length) {
          let obj8 = { variant: "body-sm/normal", color: "text-muted", children: null };
          const intl6 = tmp2(tmp3[16]).intl;
          obj8.children = intl6.string(notifyAgent(tmp3[17]).lJJayk);
          tmp39 = closure_12(tmp2(tmp3[28]).Text, obj8);
        }
      }
    }
    items5[1] = tmp39;
    if (tmp18) {
      let tmp44 = null;
      if (someResult) {
        let obj9 = { variant: "body-xs/normal", color: "text-muted", children: null };
        const intl7 = tmp2(tmp3[16]).intl;
        obj9.children = intl7.string(notifyAgent(tmp3[17]).dsHRPK);
        tmp44 = closure_12(tmp2(tmp3[28]).Text, obj9);
      }
      const obj10 = { children: null };
      const items6 = [tmp44, ];
      const found6 = found1.filter((item) => {
        closure_0 = item;
        return !found.some((key) => {
          let tmp = key.key === closure_0;
          if (tmp) {
            tmp = true === key.per_server;
          }
          return tmp;
        });
      });
      items6[1] = found6.map(function renderScoped(item) {
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
      });
      obj10.children = items6;
      let mapped = tmp34(c14, obj10);
    } else {
      const found7 = found.filter((per_server) => true !== per_server.per_server);
      mapped = found7.map(renderValueSetting);
    }
    const obj11 = { fields: null, secretFields: null, loaded: null, valueCount: null, secretCount: null, isScoped: null, canSave: null, saving: null, submit: null, validate: null };
    items5[2] = mapped;
    items5[3] = null;
    items5[4] = tmp31;
    obj6.children = items5;
    obj11.fields = c13(closure_6, obj6);
    const obj12 = { style: tmp.section, children: null };
    const obj13 = { variant: "body-xs/normal", color: "text-muted", children: null };
    const intl8 = tmp2(tmp3[16]).intl;
    obj13.children = intl8.string(notifyAgent(tmp3[17]).dsHRPK);
    const items7 = [closure_12(tmp2(tmp3[28]).Text, obj13), memo1.map(renderSecret), tmp31];
    obj12.children = items7;
    obj11.secretFields = c13(closure_6, obj12);
    obj11.loaded = null != stateFromStores;
    obj11.valueCount = found.length;
    obj11.secretCount = memo1.length;
    obj11.isScoped = tmp18;
    obj11.canSave = tmp22;
    obj11.saving = first2;
    obj11.submit = callback;
    obj11.validate = function validate() {
      if (0 !== closure_27.length) {
        _undefined2(true);
        if (closure_26) {
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
    return obj11;
  } else if (null == serverId) {
    const obj14 = { variant: "body-sm/normal", color: "text-muted", children: null };
    const intl4 = tmp2(tmp3[16]).intl;
    obj14.children = intl4.string(notifyAgent(tmp3[17]).IT21e4);
    let tmp49Result = closure_12(tmp2(tmp3[28]).Text, obj14);
  } else {
    let tmp26 = null;
    if (servers.length > 1) {
      const obj15 = {
        hasIcons: false,
        value: serverId,
        onChange(arg0) {
              return setServerId(arg0);
            },
        title: null,
        description: null,
        accessibilityLabel: null,
        children: null
      };
      let intl = tmp2(tmp3[16]).intl;
      obj15.title = intl.string(notifyAgent(tmp3[17])["6FmRyw"]);
      let intl2 = tmp2(tmp3[16]).intl;
      obj15.description = intl2.string(notifyAgent(tmp3[17])["NVQu+I"]);
      let intl3 = tmp2(tmp3[16]).intl;
      obj15.accessibilityLabel = intl3.string(notifyAgent(tmp3[17])["6FmRyw"]);
      obj15.children = servers.map((label) => closure_12(projectId(onSaved[24]).TableRadioRow, { label: label.name, value: label.guildId }, label.guildId));
      tmp26 = closure_12(tmp2(tmp3[23]).TableRadioGroup, obj15);
    }
    const obj16 = { children: null };
    const items8 = [tmp26, found5.map(renderValueSetting)];
    obj16.children = items8;
    tmp49Result = c13(c14, obj16);
  }
};