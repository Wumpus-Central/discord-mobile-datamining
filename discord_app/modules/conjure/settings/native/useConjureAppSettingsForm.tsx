// discord_app/modules/conjure/settings/native/useConjureAppSettingsForm.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef4245 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelPickerActionSheetDefault from "../../../channel/native/ChannelPickerActionSheet.tsx";
import conjureSettingValues from "../conjureSettingValues.tsx";
import useConjureSettingPickerOptions from "../useConjureSettingPickerOptions.tsx";
import conjureSetupForm from "../conjureSetupForm.tsx";
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
function ConjureChannelSettingRow(guildId) {
  guildId = guildId.guildId;
  const def = guildId.def;
  ({ hint, value: dependencyMap, onChange: asyncGeneratorStep } = guildId);
  c4 = undefined;
  let found;
  ({ shortLinks, disabled, fallback } = guildId);
  items = [GuildChannelStore];
  const items1 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(
    items,
    () => {
      channels = null;
      if (null != guildId) {
        channels = GuildChannelStore.getChannels(tmp);
      }
      return channels;
    },
    items1,
  );
  if (null != guildId) {
    if (null != stateFromStores) {
      const result = tmp(7602).conjureSettingChannels(stateFromStores, def.channel_filter);
      c4 = result;
      found = result.find((id) => id.id === dependencyMap);
      if (found == null) {
        found = null;
      }
      let obj2 = { label: def.label, subLabel: null, arrow: true, disabled: null, trailing: null, onPress: null };
      let tmp5Result;
      if (null != hint) {
        let obj3 = {
          variant: "body-xs/medium",
          color: "text-subtle",
          children: tmp(18533).conjureLinkedNodes(hint, "body-xs/medium", shortLinks),
        };
        tmp5Result = closure_12(tmp(5634).Text, obj3);
        const tmpResult3 = tmp(18533);
      }
      obj2.subLabel = tmp5Result;
      obj2.disabled = disabled;
      if (null != found) {
        const tmpResult4 = tmp(5659);
        let channelName = tmpResult4.computeChannelName(found, UserStore, RelationshipStore, true);
      } else {
        let intl = tmp(1112).intl;
        channelName = intl.string(def(4245).iZIF9m);
      }
      let obj4 = { hasIcons: false, children: null };
      const obj5 = { text: channelName };
      obj2.trailing = closure_12(tmp(6158).TableRowTrailingText, obj5);
      obj2.onPress = function onPress() {
        const obj2 = { content: null, key: "ConjureSettingsChannelSheet", stackingBehavior: "stack" };
        const obj3 = {
          header: { title: def.label },
          guild: null,
          channels: null,
          selectedChannel: null,
          noChannelOptionLabel: null,
          onSelect: null,
        };
        const obj = ActionSheetActionCreators;
        const obj4 = { title: def.label };
        obj3.guild = GuildStore.getGuild(guildId);
        obj3.channels = channels;
        obj3.selectedChannel = found;
        const intl = util.intl;
        obj3.noChannelOptionLabel = intl.string(_modDef4245["jtBVV+"]);
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
      obj4.children = closure_12(tmp(6144).TableRow, obj2);
      return closure_12(tmp(6140).TableRowGroup, obj4);
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
  ({ shortLinks, disabled, fallback } = guildId);
  let tmp3 = def(18527)(guildId, def);
  const result = guildId(18527).conjureSettingPickedIds(value);
  c3 = result;
  let obj = guildId(18527);
  let tmp5 = null;
  if ("user" === def.type) {
    tmp5 = guildId;
  }
  const conjureMemberRequests = guildId(18528).useConjureMemberRequests(tmp5, result);
  if (null != guildId) {
    if (null != tmp3) {
      const withSavedPicksResult = tmp4(18527).withSavedPicks(tmp3, value, (id) => ({ id, label: id }));
      c4 = withSavedPicksResult;
      closure_5 = tmp11;
      if (true === def.multiple) {
        const intl2 = tmp4(1112).intl;
        let obj3 = { count: result.length };
        let formatToPlainStringResult = intl2.formatToPlainString(tmp(4245)["LPs/Pv"], obj3);
      } else {
        const found = withSavedPicksResult.find((id) => id.id === _undefined[0]);
        formatToPlainStringResult = undefined;
        if (found != null) {
          formatToPlainStringResult = found.label;
        }
        if (formatToPlainStringResult == null) {
          const intl = tmp4(1112).intl;
          formatToPlainStringResult = intl.string(tmp(4245).rn7w7I);
        }
      }
      const obj4 = { label: def.label, subLabel: null, arrow: true, disabled: null, trailing: null, onPress: null };
      let tmp9Result;
      if (null != hint) {
        const obj5 = {
          variant: "body-xs/medium",
          color: "text-subtle",
          children: tmp4(18533).conjureLinkedNodes(hint, "body-xs/medium", shortLinks),
        };
        tmp9Result = closure_12(tmp4(5634).Text, obj5);
        const tmp4Result2 = tmp4(18533);
      }
      const obj6 = { hasIcons: false, children: null };
      obj4.subLabel = tmp9Result;
      obj4.disabled = disabled;
      const obj7 = { text: formatToPlainStringResult };
      obj4.trailing = closure_12(tmp4(6158).TableRowTrailingText, obj7);
      obj4.onPress = function onPress() {
        const obj2 = {
          guildId,
          type: def.type,
          channelFilter: def.channel_filter,
          title: def.label,
          maxPicks: null,
          selected: null,
          onSubmit: null,
        };
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
      obj6.children = closure_12(tmp4(6144).TableRow, obj4);
      return closure_12(tmp4(6140).TableRowGroup, obj6);
    }
  }
  return fallback;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5043);
let obj2 = {
  linkedField: { gap: nativeDefault.space.PX_4 },
  setupField: null,
  section: null,
  setupForm: null,
  sectionHeader: null,
  secretRow: null,
  secretRowInfo: null,
};
let obj3 = { gap: nativeDefault.space.PX_4 };
obj2.setupField = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.section = { gap: nativeDefault.space.PX_16 };
let obj5 = { gap: nativeDefault.space.PX_16 };
obj2.setupForm = { gap: nativeDefault.space.PX_24 };
let obj6 = { gap: nativeDefault.space.PX_24 };
obj2.sectionHeader = { gap: nativeDefault.space.PX_4 };
let obj7 = { gap: nativeDefault.space.PX_4 };
obj2.secretRow = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
};
let obj8 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
};
obj2.secretRowInfo = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_15 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/settings/native/useConjureAppSettingsForm.tsx");

export default function useConjureAppSettingsForm(projectId) {
  projectId = projectId.projectId;
  ({ note, notifyAgent } = projectId);
  if (notifyAgent === undefined) {
    notifyAgent = false;
  }
  const onSaved = projectId.onSaved;
  let flag = projectId.isPreview;
  if (flag === undefined) {
    flag = false;
  }
  const onInputFocusChange = projectId.onInputFocusChange;
  noop = undefined;
  values = undefined;
  closure_9 = undefined;
  first1 = undefined;
  closure_11 = undefined;
  c12 = undefined;
  c13 = undefined;
  first2 = undefined;
  closure_15 = undefined;
  c16 = undefined;
  c17 = undefined;
  c18 = undefined;
  c19 = undefined;
  c20 = undefined;
  c21 = undefined;
  c22 = undefined;
  c23 = undefined;
  c24 = undefined;
  serverId = undefined;
  closure_34 = undefined;
  closure_35 = undefined;
  let memo2;
  let result2;
  let result3;
  c40 = undefined;
  closure_41 = undefined;
  function draftErrorOf(found7) {
    let result = null;
    if (closure_33) {
      const obj2 = conjureSettingValues;
      result = conjureSetupForm.conjureSettingDraftError(
        found7,
        first[obj2.conjureSettingDraftKey(obj2, found7, serverId)],
      );
    }
    if (null != result) {
      if ("min" === result.kind) {
        const intl3 = util.intl;
        const obj3 = { min: result.min };
        let formatToPlainStringResult = intl3.formatToPlainString(_modDef4245.kDApFd, obj3);
      } else if ("max" === result.kind) {
        const intl2 = util.intl;
        const obj4 = { max: result.max };
        formatToPlainStringResult = intl2.formatToPlainString(_modDef4245["5ft/Ii"], obj4);
      } else {
        const intl = util.intl;
        formatToPlainStringResult = intl.string(_modDef4245["0A2STI"]);
      }
      return formatToPlainStringResult;
    }
  }
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
    items = [hint1, ,];
    let requires_rebuild;
    if (def != null) {
      requires_rebuild = def.requires_rebuild;
    }
    let stringResult;
    if (true === requires_rebuild) {
      const intl = projectId(onSaved[17]).intl;
      stringResult = intl.string(notifyAgent(onSaved[18])["4kCM6H"]);
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
          const intl2 = projectId(onSaved[17]).intl;
          const obj = { hosts: null };
          const hosts = def.hosts;
          obj.hosts = hosts.join(", ");
          formatToPlainStringResult = intl2.formatToPlainString(notifyAgent(onSaved[18]).Ww9HFO, obj);
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
          conjureLinkedNodesResult = projectId(onSaved[24]).conjureLinkedNodes(tmp, "body-sm/normal", shortLinks);
          const tmp2Result16 = projectId(onSaved[24]);
        }
        obj2.description = conjureLinkedNodesResult;
        let options1 = found.options;
        if (options1 == null) {
          options1 = [];
        }
        obj2.children = options1.map((label) =>
          c12(
            projectId(onSaved[25]).TableCheckboxRow,
            {
              label: label.label,
              checked: result1.includes(label.value),
              disabled,
              onPress(arg0) {
                if (arg0) {
                  items = [];
                  items[HermesBuiltin.arraySpread(result1, 0)] = label.value;
                  found = items;
                } else {
                  found = result1.filter((item) => item !== found.value);
                }
                c16(false);
                closure_1 = label(dependencyMap[14]).conjureSettingDraftKey(label, serverId);
                c22((arg0) => {
                  let tmp = null;
                  if (arg0 !== closure_1) {
                    tmp = arg0;
                  }
                  return tmp;
                });
                closure_9((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_1] = found;
                  return obj;
                });
                let obj = label(dependencyMap[14]);
              },
            },
            label.value,
          ),
        );
        return _undefined(projectId(onSaved[23]).TableRowGroup, obj2, result);
      }
    }
    if ("select" === found.type) {
      const tmp2Result17 = projectId(onSaved[14]);
      result2 = first[tmp2Result17.conjureSettingDraftKey(tmp2Result17, found, serverId)];
      if (result2 == null) {
        result2 = projectId(onSaved[14]).conjureSettingStoredValue(stateFromStores, found, serverId);
        const tmp2Result18 = projectId(onSaved[14]);
      }
      let tmp50;
      if (typeof result2 === "string") {
        tmp50 = result2;
      }
      const obj3 = {
        hasIcons: false,
        defaultValue: tmp50,
        onChange(def2) {
          closure_0 = def2;
          c16(false);
          closure_1 = closure_0(14759).conjureSettingDraftKey(closure_0, serverId);
          c22((arg0) => {
            let tmp = null;
            if (arg0 !== closure_1) {
              tmp = arg0;
            }
            return tmp;
          });
          closure_9((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[closure_1] = found;
            return obj;
          });
        },
        title: found.label,
        description: null,
        accessibilityLabel: null,
        children: null,
      };
      let conjureLinkedNodesResult1;
      if (null != tmp) {
        conjureLinkedNodesResult1 = projectId(onSaved[24]).conjureLinkedNodes(tmp, "body-sm/normal", shortLinks);
        const tmp2Result19 = projectId(onSaved[24]);
      }
      obj3.description = conjureLinkedNodesResult1;
      ({ label: obj19.accessibilityLabel, options } = found);
      if (options == null) {
        options = [];
      }
      obj3.children = options.map((label) =>
        _undefined(closure_0(7253).TableRadioRow, { label: label.label, value: label.value }, label.value),
      );
      return _undefined(projectId(onSaved[26]).TableRadioGroup, obj3, result);
    } else {
      if ("checkbox" === found.type) {
        const obj4 = { label: found.label, subLabel: null, checked: null, disabled: null, onPress: null };
        let tmp37Result;
        if (null != tmp) {
          const obj5 = {
            variant: "body-xs/medium",
            color: "text-subtle",
            children: projectId(onSaved[24]).conjureLinkedNodes(tmp, "body-xs/medium", tmp38),
          };
          tmp37Result = _undefined(projectId(onSaved[33]).Text, obj5);
          const tmp2Result20 = projectId(onSaved[24]);
        }
        obj4.subLabel = tmp37Result;
        const tmp2Result21 = projectId(onSaved[14]);
        result3 = first[tmp2Result21.conjureSettingDraftKey(tmp2Result21, found, serverId)];
        if (result3 == null) {
          result3 = projectId(onSaved[14]).conjureSettingStoredValue(stateFromStores, found, serverId);
          const tmp2Result22 = projectId(onSaved[14]);
        }
        const obj6 = { hasIcons: false, children: null };
        obj4.checked = true === result3;
        obj4.disabled = first2;
        obj4.onPress = function onPress(def2) {
          closure_0 = def2;
          c16(false);
          closure_1 = closure_0(14759).conjureSettingDraftKey(closure_0, serverId);
          c22((arg0) => {
            let tmp = null;
            if (arg0 !== closure_1) {
              tmp = arg0;
            }
            return tmp;
          });
          closure_9((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[closure_1] = found;
            return obj;
          });
        };
        obj6.children = _undefined(projectId(onSaved[25]).TableCheckboxRow, obj4);
        let tmp37Result2 = _undefined(projectId(onSaved[23]).TableRowGroup, obj6, result);
      } else if ("game" === found.type) {
        const obj7 = {
          def: found,
          hint: tmp,
          value: null,
          pickingEmpty: null,
          disabled: null,
          onChange: null,
          onPickingEmptyChange: null,
        };
        const tmp2Result23 = projectId(onSaved[14]);
        let result4 = first[tmp2Result23.conjureSettingDraftKey(tmp2Result23, found, serverId)];
        if (result4 == null) {
          result4 = projectId(onSaved[14]).conjureSettingStoredValue(stateFromStores, found, serverId);
          const tmp2Result24 = projectId(onSaved[14]);
        }
        obj7.value = result4;
        obj7.pickingEmpty = true === _undefined3[found.key];
        obj7.disabled = first2;
        obj7.onChange = function onChange(def2) {
          closure_0 = def2;
          c16(false);
          closure_1 = closure_0(14759).conjureSettingDraftKey(closure_0, serverId);
          c22((arg0) => {
            let tmp = null;
            if (arg0 !== closure_1) {
              tmp = arg0;
            }
            return tmp;
          });
          closure_9((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[closure_1] = found;
            return obj;
          });
        };
        obj7.onPickingEmptyChange = function onPickingEmptyChange(arg0) {
          return closure_25(closure_0.key, arg0);
        };
        tmp37Result2 = _undefined(notifyAgent(onSaved[28]), obj7, found.key);
        const tmp30 = notifyAgent(onSaved[28]);
      } else {
        if ("role" !== found.type) {
          if ("user" !== found.type) {
            if ("channel" === found.type) {
              let tmp10 = serverId;
              if (true !== found.per_server) {
                tmp10 = closure_27;
              }
              const obj8 = {
                guildId: tmp10,
                def: found,
                hint: tmp,
                shortLinks,
                value: null,
                disabled: null,
                onChange: null,
                fallback: null,
              };
              const tmp2Result25 = projectId(onSaved[14]);
              let result5 = first[tmp2Result25.conjureSettingDraftKey(tmp2Result25, found, serverId)];
              if (result5 == null) {
                result5 = projectId(onSaved[14]).conjureSettingStoredValue(stateFromStores, found, serverId);
                const tmp2Result26 = projectId(onSaved[14]);
              }
              obj8.value = result5;
              obj8.disabled = first2;
              obj8.onChange = function onChange(def2) {
                closure_0 = def2;
                c16(false);
                closure_1 = closure_0(14759).conjureSettingDraftKey(closure_0, serverId);
                c22((arg0) => {
                  let tmp = null;
                  if (arg0 !== closure_1) {
                    tmp = arg0;
                  }
                  return tmp;
                });
                closure_9((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_1] = found;
                  return obj;
                });
              };
              obj8.fallback = renderTextSetting(found, tmp);
              tmp37Result2 = _undefined(c16, obj8, result);
            } else {
              tmp37Result2 = renderTextSetting(found, tmp);
            }
          }
        }
        let tmp20 = serverId;
        if (true !== found.per_server) {
          tmp20 = closure_27;
        }
        const obj9 = {
          guildId: tmp20,
          def: found,
          hint: tmp,
          shortLinks,
          value: null,
          disabled: null,
          onChange: null,
          fallback: null,
        };
        const tmp2Result27 = projectId(onSaved[14]);
        let result6 = first[tmp2Result27.conjureSettingDraftKey(tmp2Result27, found, serverId)];
        if (result6 == null) {
          result6 = projectId(onSaved[14]).conjureSettingStoredValue(stateFromStores, found, serverId);
          const tmp2Result28 = projectId(onSaved[14]);
        }
        obj9.value = result6;
        obj9.disabled = first2;
        obj9.onChange = function onChange(def2) {
          closure_0 = def2;
          c16(false);
          closure_1 = closure_0(14759).conjureSettingDraftKey(closure_0, serverId);
          c22((arg0) => {
            let tmp = null;
            if (arg0 !== closure_1) {
              tmp = arg0;
            }
            return tmp;
          });
          closure_9((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[closure_1] = found;
            return obj;
          });
        };
        obj9.fallback = renderTextSetting(found, tmp);
        tmp37Result2 = _undefined(c17, obj9, result);
      }
      return tmp37Result2;
    }
    let obj = projectId(onSaved[14]);
  }
  function renderTextSetting(required, description) {
    closure_0 = required;
    const result = projectId(onSaved[14]).conjureSettingDraftKey(required, serverId);
    const obj2 = projectId(onSaved[14]);
    let result1 = first[obj2.conjureSettingDraftKey(obj2, required, serverId)];
    if (result1 == null) {
      result1 = projectId(onSaved[14]).conjureSettingStoredValue(stateFromStores, required, serverId);
      const tmpResult = projectId(onSaved[14]);
    }
    if (closure_33) {
      const obj3 = {
        accessibilityLabel: projectId(onSaved[29]).conjureFieldAccessibilityLabel(
          required.label,
          true !== required.required,
        ),
        accessibilityHint: required.hint,
        required: true === required.required,
        description: null,
        onChange: null,
        onFocus: null,
        onBlur: null,
        disabled: null,
      };
      let stringResult;
      if (true === required.requires_rebuild) {
        const intl3 = projectId(onSaved[17]).intl;
        stringResult = intl3.string(notifyAgent(onSaved[18])["4kCM6H"]);
      }
      obj3.description = stringResult;
      obj3.onChange = function onChange(def2) {
        closure_0 = def2;
        c16(false);
        closure_1 = closure_0(14759).conjureSettingDraftKey(closure_0, serverId);
        c22((arg0) => {
          let tmp = null;
          if (arg0 !== closure_1) {
            tmp = arg0;
          }
          return tmp;
        });
        closure_9((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[closure_1] = found;
          return obj;
        });
      };
      obj3.onFocus = onFocus;
      obj3.onBlur = onBlur;
      obj3.disabled = first2;
      const obj4 = { style: closure_4.setupField, children: null };
      const obj5 = { label: null, help: null, optional: null };
      ({ label: obj10.label, hint: obj10.help } = required);
      obj5.optional = true !== required.required;
      items = [_undefined(notifyAgent(onSaved[29]), obj5)];
      if (true === required.multiline) {
        const obj6 = {};
        const merged = Object.assign(obj3);
        let str12 = "";
        if (typeof result1 === "string") {
          str12 = result1;
        }
        obj6.value = str12;
        let tmp40Result = _undefined(projectId(onSaved[30]).TextArea, obj6);
      } else {
        const obj7 = {};
        const merged1 = Object.assign(obj3);
        obj7.autoComplete = "off";
        obj7.autoCapitalize = "none";
        obj7.autoCorrect = false;
        let tmp43;
        if ("number" === required.type) {
          let str8 = "numbers-and-punctuation";
          if (null != required.min) {
            str8 = "numbers-and-punctuation";
            if (required.min >= 0) {
              if (null == required.step) {
                let str9 = "number-pad";
              } else {
                const _Number2 = Number;
                str9 = "decimal-pad";
              }
              str8 = str9;
            }
          }
          tmp43 = str8;
        }
        obj7.keyboardType = tmp43;
        let tmp45;
        if (c19) {
          tmp45 = draftErrorOf(required);
        }
        obj7.errorMessage = tmp45;
        const _Array2 = Array;
        if (Array.isArray(result1)) {
          let str10 = result1.join(", ");
        } else {
          str10 = "";
          if (null != result1) {
            const _String2 = String;
            str10 = String(result1);
          }
        }
        obj7.value = str10;
        tmp40Result = _undefined(projectId(onSaved[31]).TextInput, obj7);
      }
      items[1] = tmp40Result;
      obj4.children = items;
      return _undefined2(onBlur, obj4, result);
    } else {
      if (true === required.multiline) {
        const obj8 = {
          label: required.label,
          description,
          errorMessage: null,
          value: null,
          onChange: null,
          onFocus: null,
          onBlur: null,
          disabled: null,
        };
        let stringResult1;
        if (c17) {
          if (closure_34.includes(key2)) {
            const intl2 = projectId(onSaved[17]).intl;
            stringResult1 = intl2.string(notifyAgent(onSaved[18])["PW1+MY"]);
          }
        }
        obj8.errorMessage = stringResult1;
        let str6 = "";
        if (typeof result1 === "string") {
          str6 = result1;
        }
        obj8.value = str6;
        obj8.onChange = function onChange(def2) {
          closure_0 = def2;
          c16(false);
          closure_1 = closure_0(14759).conjureSettingDraftKey(closure_0, serverId);
          c22((arg0) => {
            let tmp = null;
            if (arg0 !== closure_1) {
              tmp = arg0;
            }
            return tmp;
          });
          closure_9((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[closure_1] = found;
            return obj;
          });
        };
        obj8.onFocus = onFocus;
        obj8.onBlur = onBlur;
        obj8.disabled = first2;
        let tmp52Result = _undefined(projectId(onSaved[30]).TextArea, obj8, result);
        key2 = required.key;
      } else {
        const obj9 = { style: closure_4.linkedField, children: null };
        const obj11 = {
          label: required.label,
          autoComplete: "off",
          autoCapitalize: "none",
          autoCorrect: false,
          keyboardType: null,
          errorMessage: null,
          value: null,
          onChange: null,
          onFocus: null,
          onBlur: null,
          disabled: null,
        };
        let tmp8;
        if ("number" === required.type) {
          let str2 = "numbers-and-punctuation";
          if (null != required.min) {
            str2 = "numbers-and-punctuation";
            if (required.min >= 0) {
              if (null == required.step) {
                let str3 = "number-pad";
              } else {
                const _Number = Number;
                str3 = "decimal-pad";
              }
              str2 = str3;
            }
          }
          tmp8 = str2;
        }
        obj11.keyboardType = tmp8;
        let stringResult2;
        if (c17) {
          if (closure_34.includes(key)) {
            const intl = projectId(onSaved[17]).intl;
            stringResult2 = intl.string(notifyAgent(onSaved[18])["PW1+MY"]);
          }
        }
        obj11.errorMessage = stringResult2;
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
        obj11.value = str4;
        obj11.onChange = function onChange(def2) {
          closure_0 = def2;
          c16(false);
          closure_1 = closure_0(14759).conjureSettingDraftKey(closure_0, serverId);
          c22((arg0) => {
            let tmp = null;
            if (arg0 !== closure_1) {
              tmp = arg0;
            }
            return tmp;
          });
          closure_9((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[closure_1] = found;
            return obj;
          });
        };
        obj11.onFocus = onFocus;
        obj11.onBlur = onBlur;
        obj11.disabled = first2;
        const items1 = [_undefined(projectId(onSaved[31]).TextInput, obj11)];
        let tmp55Result = null;
        if (null != description) {
          const obj12 = { text: description, variant: "body-xs/normal", color: "text-muted" };
          tmp55Result = _undefined(notifyAgent(onSaved[24]), obj12);
        }
        items1[1] = tmp55Result;
        obj9.children = items1;
        tmp52Result = _undefined2(onBlur, obj9, result);
        key = required.key;
      }
      return tmp52Result;
    }
    const obj = projectId(onSaved[14]);
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
    if (closure_33) {
      const obj2 = {
        label,
        help: null,
        hosts: null,
        stored: null,
        replacing: null,
        onReplace: null,
        required: null,
        value: null,
        onChange: null,
        onFocus: null,
        onBlur: null,
        disabled: null,
      };
      const def2 = value.def;
      let hint;
      if (def2 != null) {
        hint = def2.hint;
      }
      obj2.help = hint;
      const def3 = value.def;
      let hosts;
      if (def3 != null) {
        hosts = def3.hosts;
      }
      obj2.hosts = hosts;
      obj2.stored = value.set;
      obj2.replacing = true === _undefined[value.name];
      obj2.onReplace = function onReplace() {
        return c13((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[name.name] = true;
          return obj;
        });
      };
      const def4 = value.def;
      let required;
      if (def4 != null) {
        required = def4.required;
      }
      obj2.required = true === required;
      let str3 = first1[value.name];
      if (str3 == null) {
        str3 = "";
      }
      obj2.value = str3;
      obj2.onChange = function onChange(arg0) {
        const name = arg0;
        _undefined(false);
        closure_1_11((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[name.name] = name;
          return obj;
        });
      };
      obj2.onFocus = onFocus;
      obj2.onBlur = onBlur;
      obj2.disabled = first2;
      return _undefined(notifyAgent(onSaved[32]), obj2, value.name);
    } else {
      const tmp3 = hintFor(value.def);
      if (value.set) {
        if (true !== _undefined[value.name]) {
          const obj3 = { style: closure_4.secretRow, children: null };
          const obj4 = { style: closure_4.secretRowInfo, children: null };
          const obj5 = { variant: "body-sm/medium", color: "text-default", children: label };
          items = [
            _undefined(projectId(onSaved[33]).Text, obj5),
            _undefined(projectId(onSaved[33]).Text, {
              variant: "body-sm/normal",
              color: "text-muted",
              children:
                "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
            }),
          ];
          let tmp35 = null;
          if (null != tmp3) {
            const obj6 = { text: tmp3, variant: "body-xs/normal", color: "text-muted" };
            tmp35 = _undefined(notifyAgent(onSaved[24]), obj6);
          }
          items[2] = tmp35;
          obj4.children = items;
          const items1 = [_undefined2(onBlur, obj4)];
          const obj7 = {
            variant: "secondary",
            size: "sm",
            text: null,
            accessibilityLabel: null,
            disabled: null,
            onPress: null,
          };
          const intl2 = projectId(onSaved[17]).intl;
          obj7.text = intl2.string(notifyAgent(onSaved[18]).RsvBGf);
          const intl3 = projectId(onSaved[17]).intl;
          const obj8 = { label };
          obj7.accessibilityLabel = intl3.formatToPlainString(notifyAgent(onSaved[18]).WjoM7z, obj8);
          obj7.disabled = first2;
          obj7.onPress = function onPress() {
            return c13((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[name.name] = true;
              return obj;
            });
          };
          items1[1] = _undefined(projectId(onSaved[34]).Button, obj7);
          obj3.children = items1;
          let tmp5Result = _undefined2(onBlur, obj3, value.name);
        }
        return tmp5Result;
      }
      let obj = { style: closure_4.linkedField, children: null };
      const obj9 = {
        label,
        placeholder: null,
        secureTextEntry: true,
        autoComplete: "off",
        autoCapitalize: "none",
        autoCorrect: false,
        value: null,
        errorMessage: null,
        onChange: null,
        onFocus: null,
        onBlur: null,
        disabled: null,
      };
      let str;
      if (value.set) {
        str = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
      }
      obj9.placeholder = str;
      let str2 = first1[value.name];
      if (str2 == null) {
        str2 = "";
      }
      obj9.value = str2;
      let name = value.name;
      let stringResult;
      if (c17) {
        if (closure_34.includes(name)) {
          const intl = projectId(onSaved[17]).intl;
          stringResult = intl.string(notifyAgent(onSaved[18])["PW1+MY"]);
        }
      }
      obj9.errorMessage = stringResult;
      obj9.onChange = function onChange(arg0) {
        const name = arg0;
        _undefined(false);
        closure_1_11((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[name.name] = name;
          return obj;
        });
      };
      obj9.onFocus = onFocus;
      obj9.onBlur = onBlur;
      obj9.disabled = first2;
      const items2 = [_undefined(projectId(onSaved[31]).TextInput, obj9)];
      let tmp22 = null;
      if (null != tmp3) {
        const obj10 = { text: tmp3, variant: "body-xs/normal", color: "text-muted" };
        tmp22 = _undefined(notifyAgent(onSaved[24]), obj10);
      }
      items2[1] = tmp22;
      obj.children = items2;
      tmp5Result = _undefined2(onBlur, obj, value.name);
    }
  }
  let tmp = closure_15();
  _slicedToArray = tmp;
  items = [onInputFocusChange];
  noop = noop.useCallback(() => {
    let tmpResult;
    if (onInputFocusChange != null) {
      tmpResult = tmp(true);
    }
    return tmpResult;
  }, items);
  let items1 = [onInputFocusChange];
  const onBlur = noop.useCallback(() => {
    let tmpResult;
    if (onInputFocusChange != null) {
      tmpResult = tmp(false);
    }
    return tmpResult;
  }, items1);
  let items2 = [closure_11];
  const stateFromStores = projectId(onSaved[12]).useStateFromStores(items2, () =>
    ConjureSettingsStore.getSettings(projectId),
  );
  [values, closure_9] = noop.useState({});
  [first1, closure_11] = noop.useState({});
  let obj2 = projectId(onSaved[12]);
  [c12, c13] = noop.useState({});
  [first2, closure_15] = noop.useState(false);
  const tmp9 = _slicedToArray(noop.useState({}), 2);
  [tmp13, c16] = noop.useState(false);
  const tmp12 = _slicedToArray(noop.useState(false), 2);
  [c17, c18] = noop.useState(false);
  const tmp14 = _slicedToArray(noop.useState(false), 2);
  [c19, c20] = noop.useState(false);
  const tmp15 = _slicedToArray(noop.useState(false), 2);
  [c21, c22] = noop.useState(null);
  const tmp16 = _slicedToArray(noop.useState(null), 2);
  [c23, c24] = noop.useState({});
  closure_25 = noop.useCallback((arg0, arg1) => {
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
  const items3 = [stateFromStores];
  const memo = noop.useMemo(() => {
    let schema;
    if (stateFromStores != null) {
      schema = stateFromStores.schema;
    }
    if (schema == null) {
      schema = [];
    }
    return schema;
  }, items3);
  const tmp17 = _slicedToArray(noop.useState({}), 2);
  closure_27 = projectId(onSaved[13]).useConjureSettingsGuildId(projectId, flag);
  let obj3 = projectId(onSaved[13]);
  const conjureSettingsServers = projectId(onSaved[13]).useConjureSettingsServers(projectId, flag);
  ({ servers, serverId } = conjureSettingsServers);
  const setServerId = conjureSettingsServers.setServerId;
  const items4 = [memo, stateFromStores];
  const memo1 = noop.useMemo(() => {
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
  }, items4);
  let found = memo.filter((type) => "secret" !== type.type);
  const map = new Map(
    memo1.map((name) => {
      items = [name.name, name];
      return items;
    }),
  );
  let obj4 = projectId(onSaved[13]);
  let result = projectId(onSaved[15]).conjureSettingsRequestNamedKeys(projectId.scopeKeys);
  const found1 = result.filter((item) => {
    closure_0 = item;
    let someResult = found.some((key) => key.key === closure_0);
    if (!someResult) {
      someResult = map.has(item);
    }
    return someResult;
  });
  const shortLinks = tmp20;
  let result1 = null;
  if (null != stateFromStores) {
    result1 = tmp2(tmp3[15]).conjureSettingsRequestSections(found1, stateFromStores);
    let tmp2Result = tmp2(tmp3[15]);
  }
  let found2 = found;
  if (found1.length > 0) {
    found2 = found.filter((key) => found1.includes(key.key));
  }
  let obj5 = projectId(onSaved[15]);
  const found3 = found2.filter((per_server) => {
    let tmp = true !== per_server.per_server;
    if (!tmp) {
      tmp = null != serverId;
    }
    return tmp;
  });
  closure_34 = projectId(onSaved[16]).conjureMissingRequiredSettings(
    found3.map((def) => {
      const obj = { def, value: null };
      const obj2 = conjureSettingValues;
      let result = first[obj2.conjureSettingDraftKey(obj2, def, serverId)];
      if (result == null) {
        result = conjureSettingValues.conjureSettingStoredValue(stateFromStores, def, serverId);
        const tmpResult = conjureSettingValues;
      }
      obj.value = result;
      return obj;
    }),
  );
  const tmp2Result8 = projectId(onSaved[16]);
  let found4 = memo1;
  if (found1.length > 0) {
    found4 = memo1.filter((name) => found1.includes(name.name));
  }
  closure_35 = projectId(onSaved[16]).conjureMissingRequiredSettings(
    found4.flatMap((def) => {
      if (null == def.def) {
        items = [];
      } else {
        const obj = { def: def.def, value: first1[def.name], secretStored: def.set };
        items = [obj];
      }
      return items;
    }),
  );
  const items5 = [memo, first1, stateFromStores, values];
  memo2 = obj.useMemo(() => {
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
  }, items5);
  let conjureSetupItemsResult = null;
  if (found1.length > 0) {
    conjureSetupItemsResult = null;
    if (null != stateFromStores) {
      let obj6 = { values, secrets: first1, serverId };
      conjureSetupItemsResult = tmp2(tmp3[19]).conjureSetupItems(found1, stateFromStores, obj6);
      const tmp2Result10 = tmp2(tmp3[19]);
    }
  }
  const tmp2Result9 = projectId(onSaved[16]);
  let items6 = conjureSetupItemsResult;
  if (conjureSetupItemsResult == null) {
    items6 = [];
  }
  const found5 = items6.filter((needed) => needed.needed);
  result2 = projectId(onSaved[19]).conjureSetupNeededText(found5.map((label) => label.label));
  let items15;
  if (result1 != null) {
    items15 = result1.valueKeys;
  }
  if (items15 == null) {
    items15 = [];
  }
  const mapped = items15.map((item) => {
    closure_0 = item;
    return found.find((key) => key.key === closure_0);
  });
  const found6 = mapped.find((item) => {
    let tmp = null != item;
    if (tmp) {
      tmp = null != draftErrorOf(item);
    }
    return tmp;
  });
  result3 = null;
  if (null != found6) {
    result3 = tmp2(tmp3[14]).conjureSettingDraftKey(found6, serverId);
    const tmp2Result12 = tmp2(tmp3[14]);
  }
  const found7 = found.find((item) => conjureSettingValues.conjureSettingDraftKey(item, serverId) === c21);
  if (null != found7) {
    const draftErrorOfResult = draftErrorOf(found7);
  }
  let someResult = memo.some((type) => {
    let tmp = "game" === type.type;
    if (tmp) {
      tmp = true === _undefined3[type.key];
    }
    return tmp;
  });
  c40 = someResult;
  let tmp30 =
    (null != memo2.values || null != memo2.server_values || null != memo2.secrets || null != result3) && !someResult;
  closure_41 = tmp30;
  const items7 = [tmp30, result3, someResult, notifyAgent, onSaved, projectId, first2, result2, memo2];
  const callback = obj.useCallback(
    onInputFocusChange(function* () {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              projectId = tmp8;
              let rebuildRequired;
              closure_128_1 = undefined;
              if (c40) {
                c5 = 3;
                return { value: false, done: true };
              } else if (null != result3) {
                _undefined2(true);
                _undefined3(tmp34);
                c5 = 3;
                return { value: false, done: true };
              } else {
                if (closure_41) {
                  if (!first2) {
                    closure_15(true);
                    _undefined(false);
                    c3 = 2;
                    c4 = 3;
                    c5 = 1;
                    const obj4 = { value: projectId(tmp48[20]).submitProjectSettings(projectId, memo2), done: false };
                    return obj4;
                  }
                }
                c5 = 3;
                return { value: true, done: true };
              }
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_129_15(false);
            throw tmp48;
          } else if (2 === tmp8) {
            c3 = 1;
            closure_129_16(true);
            c3 = 0;
            closure_129_15(false);
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_15(false);
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            rebuildRequired = value.rebuildRequired;
            closure_128_1 = "" !== closure_129_37;
            const obj7 = { rebuildRequired, notifyAgent: closure_129_1, incomplete: closure_128_1 };
            const result = projectId(tmp48[21]).settleProjectSettingsSave(closure_129_0, obj7);
            closure_129_9({});
            closure_129_11({});
            closure_129_13({});
            closure_129_18(false);
            closure_129_20(false);
            if (closure_128_1) {
              const obj8 = { text: null, variant: "success" };
              const intl = projectId(tmp48[17]).intl;
              const obj10 = { items: closure_129_37 };
              obj8.text = intl.formatToPlainString(tmp4(tmp48[18])["xfz7+k"], obj10);
              projectId(tmp48[22]).showToast(obj8);
              const obj = projectId(tmp48[22]);
            } else if (closure_129_2 != null) {
              closure_129_2();
            }
            c3 = 0;
            closure_129_15(false);
            c5 = 3;
            const obj9 = projectId(tmp48[21]);
          }
        } catch (tmp48) {
          if (tmp5 === c3) {
            c5 = tmp3;
            throw tmp48;
          } else if (tmp2 === tmp50) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
    items7,
  );
  const found8 = found2.filter((per_server) => true === per_server.per_server);
  if (0 === found8.length) {
    let tmp39 = null;
    if (tmp13) {
      let obj7 = { variant: "body-xs/normal", color: "text-feedback-critical", children: null };
      const intl5 = tmp2(tmp3[17]).intl;
      obj7.children = intl5.string(notifyAgent(tmp3[18])["A5TC+K"]);
      tmp39 = c12(tmp2(tmp3[33]).Text, obj7);
    }
    let valueKeys2;
    if (result1 != null) {
      valueKeys2 = result1.valueKeys;
    }
    if (valueKeys2 == null) {
      valueKeys2 = [];
    }
    const found9 = valueKeys2.filter((item) => {
      closure_0 = item;
      return !found.some((key) => {
        let tmp = key.key === closure_0;
        if (tmp) {
          tmp = true === key.per_server;
        }
        return tmp;
      });
    });
    let obj8 = { style: tmp20 ? tmp.setupForm : tmp.section, children: null };
    let tmp44 = null;
    if (null != note) {
      tmp44 = null;
      if ("" !== note) {
        let obj9 = { text: note, variant: "body-sm/normal", color: "text-default", shortLinks: tmp20 };
        tmp44 = c12(notifyAgent(tmp3[24]), obj9);
      }
    }
    const items8 = [tmp44, , ,];
    let tmp47 = null;
    if (null != stateFromStores) {
      tmp47 = null;
      if (0 === found.length) {
        tmp47 = null;
        if (0 === memo1.length) {
          let obj10 = { variant: "body-sm/normal", color: "text-muted", children: null };
          const intl6 = tmp2(tmp3[17]).intl;
          obj10.children = intl6.string(notifyAgent(tmp3[18]).lJJayk);
          tmp47 = c12(tmp2(tmp3[33]).Text, obj10);
        }
      }
    }
    items8[1] = tmp47;
    if (tmp20) {
      if (null != result1) {
        function renderScoped(item) {
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
        }
        let tmp51 = null;
        if (result1.secretKeys.length > 0) {
          let obj11 = { title: null, children: null };
          const intl7 = tmp2(tmp3[17]).intl;
          obj11.title = intl7.string(notifyAgent(tmp3[18])["xEfQj/"]);
          const secretKeys = result1.secretKeys;
          obj11.children = secretKeys.map(renderScoped);
          tmp51 = c12(notifyAgent(tmp3[35]), obj11);
          const tmp54 = notifyAgent(tmp3[35]);
        }
        const items9 = [tmp51];
        let tmp42Result2 = null;
        if (result1.valueKeys.length > 0) {
          let obj12 = { style: tmp.section, children: null };
          let tmp42Result = null;
          if (result1.sectioned) {
            const obj13 = { style: tmp.sectionHeader, children: null };
            const obj14 = { variant: "heading-sm/semibold", children: null };
            const intl8 = tmp2(tmp3[17]).intl;
            obj14.children = intl8.string(notifyAgent(tmp3[18])["I+6HlE"]);
            const items10 = [c12(tmp2(tmp3[33]).Heading, obj14)];
            const obj15 = { variant: "body-xs/normal", color: "text-muted", children: null };
            const intl9 = tmp2(tmp3[17]).intl;
            obj15.children = intl9.string(notifyAgent(tmp3[18]).ZyFI3A);
            items10[1] = c12(tmp2(tmp3[33]).Text, obj15);
            obj13.children = items10;
            tmp42Result = tmp42(tmp43, obj13);
          }
          const items11 = [tmp42Result, found9.map(renderScoped), null];
          obj12.children = items11;
          tmp42Result2 = tmp42(tmp43, obj12);
        }
        const obj16 = { children: null };
        items9[1] = tmp42Result2;
        obj16.children = items9;
        let obj21 = obj16;
      }
      const obj17 = {
        fields: null,
        secretFields: null,
        loaded: null,
        valueCount: null,
        secretCount: null,
        isScoped: null,
        progress: null,
        status: null,
        statusIsError: null,
        canSave: null,
        saving: null,
        submit: null,
        validate: null,
      };
      items8[2] = tmp42(tmp50, obj21);
      items8[3] = tmp39;
      obj8.children = items8;
      obj17.fields = tmp42(tmp43, obj8);
      const obj18 = { style: tmp.section, children: null };
      const obj19 = { variant: "body-xs/normal", color: "text-muted", children: null };
      const intl10 = tmp2(tmp3[17]).intl;
      obj19.children = intl10.string(notifyAgent(tmp3[18]).jgDBJZ);
      const items12 = [c12(tmp2(tmp3[33]).Text, obj19), memo1.map(renderSecret), tmp39];
      obj18.children = items12;
      obj17.secretFields = tmp42(tmp43, obj18);
      obj17.loaded = null != stateFromStores;
      obj17.valueCount = found.length;
      obj17.secretCount = memo1.length;
      obj17.isScoped = tmp20;
      let tmp61 = null;
      if (null != conjureSetupItemsResult) {
        const obj20 = {
          filled: conjureSetupItemsResult.filter((filled) => filled.filled).length,
          total: conjureSetupItemsResult.length,
        };
        tmp61 = obj20;
      }
      obj17.progress = tmp61;
      if (null != found7) {
        if (null != draftErrorOfResult) {
          let result4 = tmp2(tmp3[19]).conjureSetupFieldErrorText(found7.label, draftErrorOfResult);
          const tmp2Result13 = tmp2(tmp3[19]);
        }
        obj17.status = result4;
        obj17.statusIsError = null != draftErrorOfResult;
        obj17.canSave = tmp30;
        obj17.saving = first2;
        obj17.submit = callback;
        obj17.validate = function validate() {
          if (0 !== closure_34.length) {
            _undefined2(true);
            if (closure_33) {
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
        return obj17;
      }
      result4 = null;
      if (null != conjureSetupItemsResult) {
        result4 = tmp2(tmp3[19]).conjureSetupStatusText(conjureSetupItemsResult);
        const tmp2Result14 = tmp2(tmp3[19]);
      }
    }
    obj21 = { children: null };
    const found10 = found.filter((per_server) => true !== per_server.per_server);
    const items13 = [found10.map(renderValueSetting), null];
    obj21.children = items13;
  } else if (null == serverId) {
    const obj22 = { variant: "body-sm/normal", color: "text-muted", children: null };
    const intl4 = tmp2(tmp3[17]).intl;
    obj22.children = intl4.string(notifyAgent(tmp3[18]).IT21e4);
    let tmp63Result = c12(tmp2(tmp3[33]).Text, obj22);
  } else {
    let tmp34 = null;
    if (servers.length > 1) {
      const obj23 = {
        hasIcons: false,
        value: serverId,
        onChange(arg0) {
          return setServerId(arg0);
        },
        title: null,
        description: null,
        accessibilityLabel: null,
        children: null,
      };
      let intl = tmp2(tmp3[17]).intl;
      obj23.title = intl.string(notifyAgent(tmp3[18])["6FmRyw"]);
      let intl2 = tmp2(tmp3[17]).intl;
      obj23.description = intl2.string(notifyAgent(tmp3[18])["NVQu+I"]);
      let intl3 = tmp2(tmp3[17]).intl;
      obj23.accessibilityLabel = intl3.string(notifyAgent(tmp3[18])["6FmRyw"]);
      obj23.children = servers.map((label) =>
        _undefined(projectId(onSaved[27]).TableRadioRow, { label: label.name, value: label.guildId }, label.guildId),
      );
      tmp34 = c12(tmp2(tmp3[26]).TableRadioGroup, obj23);
    }
    const obj24 = { children: null };
    const items14 = [tmp34, found8.map(renderValueSetting)];
    obj24.children = items14;
    tmp63Result = c13(first2, obj24);
  }
}
