// discord_app/modules/conjure/settings/native/useConjureAppSettingsForm.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3827 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ConjureUtils from "../../shared/ConjureUtils.tsx";
import ChannelPickerActionSheetDefault from "../../../channel/native/ChannelPickerActionSheet.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import ConjureChatStore from "../../chat/ConjureChatStore.tsx";
import ConjureConnectionStore_mod from "../../connection/ConjureConnectionStore.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

require = fn;
let View = fn(17).View;
let ConjureConnectionStore = fn(13072);
({
  requestProjectRebuild: closure_12,
  sendUserMessage: map1,
  submitProjectSettings: closure_14,
} = ConjureConnectionStore);
let ConjureConnectionStore = ConjureConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
const ConjureSettingsChannelSheet = "ConjureSettingsChannelSheet";
const createStyles = fn(5090);
let obj2 = { section: { gap: nativeDefault.space.PX_16 }, secretRow: null, secretRowInfo: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.secretRow = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
};
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
};
obj2.secretRowInfo = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_21 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureChannelSettingRow(projectId) {
      const cResult = projectId(def[26]).c(47);
      projectId = projectId.projectId;
      const isPreview = projectId.isPreview;
      def = projectId.def;
      ({ hint, value } = projectId);
      asyncGeneratorStep = value;
      ({ disabled, onChange } = projectId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureProjectStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === isPreview) {
        if (cResult[2] === projectId) {
          let tmp6 = cResult[3];
          let tmp7 = cResult[4];
        }
        const stateFromStores = tmp(tmp2[14]).useStateFromStores(first, tmp6, tmp7);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [found];
          cResult[5] = items1;
          let tmp9 = items1;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] !== stateFromStores) {
          class P {
            constructor() {
              channels = null;
              if (null != closure_5) {
                tmp3 = closure_7;
                channels = closure_7.getChannels(tmp);
              }
              return channels;
            }
          }
          const items2 = [stateFromStores];
          cResult[6] = stateFromStores;
          cResult[7] = P;
          cResult[8] = items2;
          let tmp12 = items2;
        } else {
          class P {
            constructor() {
              channels = null;
              if (null != closure_5) {
                tmp3 = closure_7;
                channels = closure_7.getChannels(tmp);
              }
              return channels;
            }
          }
          tmp12 = cResult[8];
        }
        const tmpResult = tmp(tmp2[14]);
        label = tmp(tmp2[14]).useStateFromStores(tmp9, P, tmp12);
        if (null != stateFromStores) {
          class P {
            constructor() {
              channels = null;
              if (null != closure_5) {
                tmp3 = closure_7;
                channels = closure_7.getChannels(tmp);
              }
              return channels;
            }
          }
          if (null != label) {
            class P {
              constructor() {
                channels = null;
                if (null != closure_5) {
                  tmp3 = closure_7;
                  channels = closure_7.getChannels(tmp);
                }
                return channels;
              }
            }
            const result = tmp(tmp2[27]).conjureSettingChannels(label, def.channel_filter);
            View = result;
            found = result.find((id) => id.id === value);
            if (found == null) {
              class P {
                constructor() {
                  channels = null;
                  if (null != closure_5) {
                    tmp3 = closure_7;
                    channels = closure_7.getChannels(tmp);
                  }
                  return channels;
                }
              }
            }
            const TableRowGroup = tmp(tmp2[20]).TableRowGroup;
            const TableRow = tmp(tmp2[28]).TableRow;
            const label2 = def.label;
            const TableRowTrailingText = tmp(tmp2[29]).TableRowTrailingText;
            if (null != found) {
              class P {
                constructor() {
                  channels = null;
                  if (null != closure_5) {
                    tmp3 = closure_7;
                    channels = closure_7.getChannels(tmp);
                  }
                  return channels;
                }
              }
              const tmpResult6 = tmp(tmp2);
              let channelName = tmpResult6.computeChannelName(found, UserStore, RelationshipStore, true);
            } else {
              class P {
                constructor() {
                  channels = null;
                  if (null != closure_5) {
                    tmp3 = closure_7;
                    channels = closure_7.getChannels(tmp);
                  }
                  return channels;
                }
              }
              channelName = obj5.string(isPreview(tmp2[16]).iZIF9m);
            }
            cResult[9] = label;
            ({ channel_filter: tmp3[10], label } = def);
            cResult[11] = label;
            cResult[12] = disabled;
            cResult[13] = hint;
            cResult[14] = value;
            cResult[15] = TableRowTrailingText;
            cResult[16] = TableRow;
            cResult[17] = TableRowGroup;
            cResult[18] = result;
            cResult[19] = found;
            cResult[20] = true;
            cResult[21] = disabled;
            cResult[22] = false;
            cResult[23] = channelName;
            cResult[24] = label2;
            cResult[25] = hint;
            const tmpResult5 = tmp(tmp2[27]);
          }
        }
        return projectId.fallback;
      }
      const fn = function l() {
        return ConjureUtils.conjureSettingsGuildId(ConjureProjectStore.getProject(projectId), isPreview);
      };
      const items3 = [isPreview, projectId];
      cResult[1] = isPreview;
      cResult[2] = projectId;
      cResult[3] = fn;
      cResult[4] = items3;
      tmp7 = items3;
      tmp6 = fn;
      let obj = projectId(def[26]);
    }
  : function ConjureChannelSettingRow(projectId) {
      projectId = projectId.projectId;
      const isPreview = projectId.isPreview;
      const def = projectId.def;
      ({ value: asyncGeneratorStep, onChange: _slicedToArray } = projectId);
      c6 = undefined;
      let found;
      ({ hint, disabled, fallback } = projectId);
      const items = [ConjureProjectStore];
      const items1 = [isPreview, projectId];
      const stateFromStores = projectId(def[14]).useStateFromStores(
        items,
        () => ConjureUtils.conjureSettingsGuildId(ConjureProjectStore.getProject(projectId), isPreview),
        items1,
      );
      let obj = projectId(def[14]);
      const items2 = [found];
      const items3 = [stateFromStores];
      const stateFromStores1 = projectId(def[14]).useStateFromStores(
        items2,
        () => {
          channels = null;
          if (null != stateFromStores) {
            channels = GuildChannelStore.getChannels(tmp);
          }
          return channels;
        },
        items3,
      );
      if (null != stateFromStores) {
        if (null != stateFromStores1) {
          const result = tmp(tmp2[27]).conjureSettingChannels(stateFromStores1, def.channel_filter);
          c6 = result;
          found = result.find((id) => id.id === asyncGeneratorStep);
          if (found == null) {
            found = null;
          }
          let obj3 = { label: def.label, subLabel: hint, arrow: true, disabled, trailing: null, onPress: null };
          if (null != found) {
            const tmpResult2 = tmp(tmp2[30]);
            let channelName = tmpResult2.computeChannelName(found, UserStore, RelationshipStore, true);
          } else {
            let intl = tmp(tmp2[15]).intl;
            channelName = intl.string(isPreview(tmp2[16]).iZIF9m);
          }
          let obj4 = { hasIcons: false, children: null };
          const obj5 = { text: channelName };
          obj3.trailing = closure_17(tmp(tmp2[29]).TableRowTrailingText, obj5);
          obj3.onPress = function onPress() {
            const obj2 = { content: null, key: null, stackingBehavior: "stack" };
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
            obj3.guild = GuildStore.getGuild(stateFromStores);
            obj3.channels = channels;
            obj3.selectedChannel = found;
            const intl = util.intl;
            obj3.noChannelOptionLabel = intl.string(_modDef3827["jtBVV+"]);
            obj3.onSelect = function onSelect(id) {
              let str;
              if (id != null) {
                str = id.id;
              }
              if (str == null) {
                str = "";
              }
              return closure_1_4(str);
            };
            obj2.content = constants(ChannelPickerActionSheetDefault, obj3);
            obj2.key = ConjureSettingsChannelSheet;
            obj.showActionSheet(obj2);
          };
          obj4.children = closure_17(tmp(tmp2[28]).TableRow, obj3);
          return closure_17(tmp(tmp2[20]).TableRowGroup, obj4);
        }
      }
      return fallback;
    };
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
    const items = [hint1];
    let requires_rebuild;
    if (found != null) {
      requires_rebuild = found.requires_rebuild;
    }
    let stringResult;
    if (true === requires_rebuild) {
      const intl = projectId(flag[15]).intl;
      stringResult = intl.string(notifyAgent(flag[16])["4kCM6H"]);
    }
    items[1] = stringResult;
    found = items.filter((item) => null != item);
    if (0 !== found.length) {
      const joined = found.join(" ");
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
      const obj2 = {
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
        children: null,
      };
      ({ label: obj6.title, label: obj6.accessibilityLabel, options } = found);
      if (options == null) {
        options = [];
      }
      obj2.children = options.map((label) =>
        map(closure_0(flag[19]).TableRadioRow, { label: label.label, value: label.value }, label.value),
      );
      return map(projectId(flag[18]).TableRadioGroup, obj2, found.key);
    } else if ("checkbox" === found.type) {
      let tmp31 = first[found.key];
      if (tmp31 == null) {
        tmp31 = memo1[found.key];
      }
      const obj3 = { hasIcons: false, children: null };
      const obj4 = {
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
        },
      };
      obj3.children = map(projectId(flag[21]).TableCheckboxRow, obj4);
      return map(projectId(flag[20]).TableRowGroup, obj3, found.key);
    } else {
      if ("channel" === found.type) {
        const obj5 = {
          projectId,
          isPreview: flag,
          def: found,
          hint: joined,
          value: null,
          disabled: null,
          onChange: null,
          fallback: null,
        };
        let tmp22 = first[found.key];
        if (tmp22 == null) {
          tmp22 = memo1[found.key];
        }
        obj5.value = tmp22;
        obj5.disabled = first2;
        obj5.onChange = function onChange(arg0) {
          closure_1_13(false);
          closure_1_6((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[key.key] = key;
            return obj;
          });
        };
        closure_130_0 = found;
        let tmp25 = first[found.key];
        if (tmp25 == null) {
          tmp25 = memo1[found.key];
        }
        const obj11 = {
          label: found.label,
          description: joined,
          autoComplete: "off",
          autoCapitalize: "none",
          autoCorrect: false,
          value: null,
          onChange: null,
          disabled: null,
        };
        let str4 = "";
        if (typeof tmp25 === "string") {
          str4 = tmp25;
        }
        obj11.value = str4;
        obj11.onChange = function onChange(arg0) {
          closure_1_13(false);
          closure_1_6((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[key.key] = key;
            return obj;
          });
        };
        obj11.disabled = first2;
        obj5.fallback = map(projectId(flag[22]).TextInput, obj11, found.key);
        let tmp12Result = map(closure_1_22, obj5, found.key);
      } else {
        closure_129_0 = found;
        let tmp11 = first[found.key];
        if (tmp11 == null) {
          tmp11 = memo1[found.key];
        }
        let obj = {
          label: found.label,
          description: joined,
          autoComplete: "off",
          autoCapitalize: "none",
          autoCorrect: false,
          value: null,
          onChange: null,
          disabled: null,
        };
        let str3 = "";
        if (typeof tmp11 === "string") {
          str3 = tmp11;
        }
        obj.value = str3;
        obj.onChange = function onChange(arg0) {
          closure_1_13(false);
          closure_1_6((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[key.key] = key;
            return obj;
          });
        };
        obj.disabled = first2;
        tmp12Result = map(projectId(flag[22]).TextInput, obj, found.key);
      }
      return tmp12Result;
    }
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
    const items = [hint1];
    let requires_rebuild;
    if (def2 != null) {
      requires_rebuild = def2.requires_rebuild;
    }
    let stringResult;
    if (true === requires_rebuild) {
      const intl = projectId(flag[15]).intl;
      stringResult = intl.string(notifyAgent(flag[16])["4kCM6H"]);
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
        const items1 = [
          map(projectId(flag[23]).Text, obj4),
          map(projectId(flag[23]).Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children:
              "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
          }),
        ];
        let tmp23 = null;
        if (null != joined) {
          const obj5 = { variant: "text-xs/normal", color: "text-muted", children: joined };
          tmp23 = map(projectId(flag[23]).Text, obj5);
        }
        items1[2] = tmp23;
        obj3.children = items1;
        const items2 = [memo3(closure_6, obj3)];
        const obj6 = {
          variant: "secondary",
          size: "sm",
          text: null,
          accessibilityLabel: null,
          disabled: null,
          onPress: null,
        };
        const intl2 = projectId(flag[15]).intl;
        obj6.text = intl2.string(notifyAgent(flag[16]).RsvBGf);
        const intl3 = projectId(flag[15]).intl;
        const obj7 = { label };
        obj6.accessibilityLabel = intl3.formatToPlainString(notifyAgent(flag[16]).WjoM7z, obj7);
        obj6.disabled = first2;
        obj6.onPress = function onPress() {
          return c10((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[name.name] = true;
            return obj;
          });
        };
        items2[1] = map(projectId(flag[24]).Button, obj6);
        obj2.children = items2;
        let tmp12Result = memo3(closure_6, obj2, value.name);
      }
      return tmp12Result;
    }
    let obj = {
      label,
      description: joined,
      placeholder: null,
      secureTextEntry: true,
      autoComplete: "off",
      autoCapitalize: "none",
      autoCorrect: false,
      value: null,
      onChange: null,
      disabled: null,
    };
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
    tmp12Result = map(projectId(flag[22]).TextInput, obj, value.name);
  }
  let tmp = renderSecret();
  asyncGeneratorStep = tmp;
  let items = [memo1];
  const stateFromStores = projectId(flag[14]).useStateFromStores(items, () =>
    ConjureConnectionStore.getSettings(projectId),
  );
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
  const map = new Map(
    memo2.map((name) => {
      const items = [name.name, name];
      return items;
    }),
  );
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
      if (null != found) {
        let tmp3 = memo1[arg0];
        if (tmp3 == null) {
          tmp3 = "checkbox" !== found.type && "";
          const tmp4 = "checkbox" !== found.type && "";
        }
        if (closure_1 !== tmp3) {
          if (typeof closure_1 !== "string") {
            let tmp6 = closure_1;
          } else {
            tmp6 = null;
          }
          obj[arg0] = tmp6;
        }
      }
      return 1;
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
  const callback = obj2.useCallback(
    asyncGeneratorStep(async () => {
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
          return { value: "IconComponent", done: null };
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
            const obj = { value, done: true };
            return obj;
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
                  _null2(12376)(_null);
                  let prop;
                  const tmp19 = _null2(12376);
                  if (project2 != null) {
                    prop = project2.preview_application_id;
                  }
                  _null2 = prop;
                  if (prop == null) {
                    _null2 = null;
                  }
                  _null2(12376)(_null2);
                  const tmp27 = _null2(12376);
                }
                c5 = 0;
                closure_131_12(false);
                c7 = 3;
              }
              closure_1_12(closure_131_0);
            }
            const intl = _null(1126).intl;
            closure_1_13(closure_131_0, intl.string(_null2(3827)["08bsJL"]));
          }
        } catch (tmp67) {
          closure_4 = tmp67;
          if (tmp5 === c5) {
            c7 = tmp3;
            throw tmp67;
          } else if (tmp2 === tmp69) {
            c6 = tmp2;
          } else {
            c6 = tmp;
          }
        }
      }
    }),
    items5,
  );
  if (tmp12[0]) {
    let obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    let intl = tmp2(tmp3[15]).intl;
    obj3.children = intl.string(notifyAgent(tmp3[16])["A5TC+K"]);
    tmp20 = map(tmp2(tmp3[23]).Text, obj3);
  }
  let obj4 = { style: tmp.section, children: null };
  let tmp25 = null;
  if (null != note) {
    tmp25 = null;
    if ("" !== note) {
      let obj5 = { variant: "text-sm/normal", color: "text-default", children: note };
      tmp25 = map(tmp2(tmp3[23]).Text, obj5);
    }
  }
  const items6 = [tmp25, , ,];
  let tmp27 = null;
  if (null != stateFromStores) {
    tmp27 = null;
    if (0 === found.length) {
      tmp27 = null;
      if (0 === memo2.length) {
        let obj6 = { variant: "text-sm/normal", color: "text-muted", children: null };
        let intl2 = tmp2(tmp3[15]).intl;
        obj6.children = intl2.string(notifyAgent(tmp3[16]).lJJayk);
        tmp27 = map(tmp2(tmp3[23]).Text, obj6);
      }
    }
  }
  items6[1] = tmp27;
  if (found1.length > 0) {
    let tmp32 = null;
    if (someResult) {
      let obj7 = { variant: "text-xs/normal", color: "text-muted", children: null };
      let intl3 = tmp2(tmp3[15]).intl;
      obj7.children = intl3.string(notifyAgent(tmp3[16]).dsHRPK);
      tmp32 = map(tmp2(tmp3[23]).Text, obj7);
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
      }),
    ];
    obj8.children = items7;
    let mapped = tmp23(closure_19, obj8);
  } else {
    mapped = found.map(renderValueSetting);
  }
  const obj9 = {
    fields: memo3(closure_6, obj4),
    secretFields: null,
    loaded: null,
    valueCount: null,
    secretCount: null,
    isScoped: null,
    canSave: null,
    saving: null,
    submit: null,
  };
  items6[2] = mapped;
  items6[3] = tmp20;
  obj4.children = items6;
  const obj10 = { style: tmp.section, children: null };
  let obj11 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl4 = tmp2(tmp3[15]).intl;
  obj11.children = intl4.string(notifyAgent(flag[16]).dsHRPK);
  const items8 = [map(projectId(flag[23]).Text, obj11), memo2.map(renderSecret), tmp20];
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
}
