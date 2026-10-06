// === Module 16617: useConjureAppSettingsForm ===

// Module 16617 (useConjureAppSettingsForm)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import _modDef3753 from "module_3753" /* 3753 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4860 */;
import ConjureUtils from "ConjureUtils" /* 6756 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 12118 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4513 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import ConjureChatStore from "ConjureChatStore" /* 12924 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 12923 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8734 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c7, closure_3, closure_4, map;

let closure_12;
let closure_14;
let closure_17;
let closure_18;
let closure_19;
let map1;
let obj2;
let obj3;
let obj4;
let _asyncToGenerator = _asyncToGenerator_mod;
let View = react_native.View;
let ConjureConnectionStore = ConjureConnectionStore_mod;
({ requestProjectRebuild: closure_12, sendUserMessage: map1, submitProjectSettings: closure_14 } = ConjureConnectionStore);
ConjureConnectionStore = ConjureConnectionStore_mod;
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = Fragment);
const ConjureSettingsChannelSheet = "ConjureSettingsChannelSheet";
let createStyles = createStyles_mod;
let obj = { section: obj2, secretRow: obj3, secretRowInfo: obj4 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj4 = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_21 = createStyles(obj);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureChannelSettingRow(projectId) {
  let def;
  let disabled;
  let first;
  let found;
  let hint;
  let onChange;
  let value;
  const tmp = projectId;
  let tmp2 = def;
  let obj = projectId(def[26]);
  const cResult = obj.c(47);
  projectId = projectId.projectId;
  const isPreview = projectId.isPreview;
  def = projectId.def;
  ({ hint, value } = projectId);
  _asyncToGenerator = value;
  ({ disabled, onChange } = projectId);
  const fallback = projectId.fallback;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === isPreview) {
    let tmp6;
    let tmp7;
    let tmp9;
    let tmp12;
    if (cResult[2] === projectId) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(tmp2[14]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [found];
      cResult[5] = items1;
      tmp9 = items1;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] !== stateFromStores) {
      class P {
        constructor() {
          let channels = null;
          if (null != stateFromStores) {
            channels = GuildChannelStore.getChannels(tmp);
          }
          return channels;
        }
      }
      const items2 = [stateFromStores];
      cResult[6] = stateFromStores;
      cResult[7] = P;
      cResult[8] = items2;
      tmp12 = items2;
    } else {
      class P {
        constructor() {
          let channels = null;
          if (null != stateFromStores) {
            channels = GuildChannelStore.getChannels(tmp);
          }
          return channels;
        }
      }
      tmp12 = cResult[8];
    }
    const tmpResult3 = tmp(tmp2[14]);
    const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, P, tmp12);
    const tmp15 = fallback;
    if (null != stateFromStores) {
      class P {
        constructor() {
          let channels = null;
          if (null != stateFromStores) {
            channels = GuildChannelStore.getChannels(tmp);
          }
          return channels;
        }
      }
      if (null != stateFromStores1) {
        let channelName;
        class P {
          constructor() {
            let channels = null;
            if (null != stateFromStores) {
              channels = GuildChannelStore.getChannels(tmp);
            }
            return channels;
          }
        }
        const tmpResult4 = tmp(tmp2[27]);
        const result = tmpResult4.conjureSettingChannels(stateFromStores1, def.channel_filter);
        View = result;
        found = result.find((id) => id.id === _asyncToGenerator);
        if (found == null) {
          class P {
            constructor() {
              let channels = null;
              if (null != stateFromStores) {
                channels = GuildChannelStore.getChannels(tmp);
              }
              return channels;
            }
          }
        }
        const TableRowGroup = tmp(tmp2[20]).TableRowGroup;
        const TableRow = tmp(tmp2[28]).TableRow;
        const label = def.label;
        const TableRowTrailingText = tmp(tmp2[29]).TableRowTrailingText;
        if (null != found) {
          class P {
            constructor() {
              let channels = null;
              if (null != stateFromStores) {
                channels = GuildChannelStore.getChannels(tmp);
              }
              return channels;
            }
          }
          channelName = obj6.computeChannelName(found, UserStore, RelationshipStore, true);
        } else {
          class P {
            constructor() {
              let channels = null;
              if (null != stateFromStores) {
                channels = GuildChannelStore.getChannels(tmp);
              }
              return channels;
            }
          }
          channelName = obj5.string(isPreview(tmp2[16]).iZIF9m);
        }
        cResult[9] = stateFromStores1;
        cResult[10] = def.channel_filter;
        cResult[11] = def.label;
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
        cResult[24] = label;
        cResult[25] = hint;
      }
    }
    return tmp15;
  }
  const fn = function l() {
    const obj = ConjureUtils;
    return obj.conjureSettingsGuildId(ConjureProjectStore.getProject(projectId), isPreview);
  };
  const items3 = [isPreview, projectId];
  cResult[1] = isPreview;
  cResult[2] = projectId;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp7 = items3;
  tmp6 = fn;
}) : (function ConjureChannelSettingRow(projectId) {
  let TableRowTrailingText;
  let disabled;
  let fallback;
  let hint;
  let obj5;
  projectId = projectId.projectId;
  const isPreview = projectId.isPreview;
  const def = projectId.def;
  ({ value: _asyncToGenerator, onChange: _slicedToArray } = projectId);
  let c6;
  let found;
  const tmp = projectId;
  let tmp2 = def;
  ({ hint, disabled, fallback } = projectId);
  let obj = projectId(def[14]);
  const items = [ConjureProjectStore];
  const items1 = [isPreview, projectId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = ConjureUtils;
    return obj.conjureSettingsGuildId(ConjureProjectStore.getProject(projectId), isPreview);
  }, items1);
  let obj2 = projectId(def[14]);
  const items2 = [found];
  const items3 = [stateFromStores];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    channels = null;
    if (null != stateFromStores) {
      channels = GuildChannelStore.getChannels(tmp);
    }
    return channels;
  }, items3);
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      let channelName;
      const tmpResult = tmp(tmp2[27]);
      const result = tmpResult.conjureSettingChannels(stateFromStores1, def.channel_filter);
      c6 = result;
      found = result.find((id) => id.id === _asyncToGenerator);
      if (found == null) {
        found = null;
      }
      const TableRowGroup = tmp(tmp2[20]).TableRowGroup;
      let obj3 = {
        label: def.label,
        subLabel: hint,
        arrow: true,
        disabled,
        trailing: closure_17(TableRowTrailingText, obj5),
        onPress() {
              let intl;
              let obj2;
              let obj3;
              let tmp2;
              const obj = { content: closure_17(tmp2, obj2), key: ConjureSettingsChannelSheet, stackingBehavior: "stack" };
              const showActionSheet = ActionSheetActionCreators.showActionSheet;
              obj2 = {
                header: obj3,
                guild: GuildStore.getGuild(stateFromStores),
                channels,
                selectedChannel: found,
                noChannelOptionLabel: intl.string(_modDef3753["jtBVV+"]),
                onSelect(id) {
                  let str;
                  if (id != null) {
                    str = id.id;
                  }
                  if (str == null) {
                    str = "";
                  }
                  return closure_1_4(str);
                }
              };
              obj3 = { title: def.label };
              ActionSheetActionCreators;
              tmp2 = ChannelPickerActionSheetDefault;
              intl = intl5.intl;
              showActionSheet(obj);
            }
      };
      const TableRow = tmp(tmp2[28]).TableRow;
      TableRowTrailingText = tmp(tmp2[29]).TableRowTrailingText;
      if (null != found) {
        const tmpResult2 = tmp(tmp2[30]);
        channelName = tmpResult2.computeChannelName(found, UserStore, RelationshipStore, true);
      } else {
        let intl = tmp(tmp2[15]).intl;
        channelName = intl.string(isPreview(tmp2[16]).iZIF9m);
      }
      const obj4 = { hasIcons: false, children: closure_17(TableRow, obj3) };
      obj5 = { text: channelName };
      return closure_17(TableRowGroup, obj4);
    }
  }
  return fallback;
});
let result = size.fileFinishedImporting("modules/conjure/settings/native/useConjureAppSettingsForm.tsx");

export default function useConjureAppSettingsForm(projectId) {
  let _undefined;
  let c10;
  let c9;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items6;
  let items7;
  let items8;
  let mapped;
  let note;
  let notifyAgent;
  let obj10;
  let scopeKeys;
  const f146401 = (item) => null != item;
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
  let closure_19;
  function renderValueSetting(found) {
    let TextInput2;
    let joined;
    let obj11;
    let obj4;
    let options;
    let str3;
    let str4;
    let tmp22;
    function onChange(arg0) {
      const key = arg0;
      closure_1_13(false);
      closure_1_6((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[key.key] = key;
        return obj;
      });
    }
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
    const items = [hint1, ];
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
    found = items.filter(f146401);
    if (0 !== found.length) {
      joined = found.join(" ");
    }
    if ("select" === found.type) {
      let tmp41 = first[found.key];
      if (tmp41 == null) {
        tmp41 = memo1[found.key];
      }
      let tmp46;
      const TableRadioGroup = projectId(flag[18]).TableRadioGroup;
      if (typeof tmp41 === "string") {
        tmp46 = tmp41;
      }
      const obj2 = {
        hasIcons: false,
        defaultValue: tmp46,
        onChange(arg0) {
            const key = arg0;
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
        children: options.map((label) => {
            const obj = { label: label.label, value: label.value };
            return map(found(flag[19]).TableRadioRow, obj, label.value);
          })
      };
      ({ label: obj6.title, label: obj6.accessibilityLabel, options } = found);
      if (options == null) {
        options = [];
      }
      return map(TableRadioGroup, obj2, found.key);
    } else if ("checkbox" === found.type) {
      let tmp31 = first[found.key];
      if (tmp31 == null) {
        tmp31 = memo1[found.key];
      }
      const obj3 = { hasIcons: false, children: map(projectId(flag[21]).TableCheckboxRow, obj4) };
      const TableRowGroup = projectId(flag[20]).TableRowGroup;
      obj4 = {
        label: found.label,
        subLabel: joined,
        checked: true === tmp31,
        disabled: first2,
        onPress(arg0) {
            const key = arg0;
            closure_1_13(false);
            closure_1_6((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[key.key] = key;
              return obj;
            });
          }
      };
      return map(TableRowGroup, obj3, found.key);
    } else {
      let tmp12Result;
      if ("channel" === found.type) {
        const obj5 = {
          projectId,
          isPreview: flag,
          def: found,
          hint: joined,
          value: tmp22,
          disabled: first2,
          onChange(arg0) {
                const key = arg0;
                closure_1_13(false);
                closure_1_6((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[key.key] = key;
                  return obj;
                });
              },
          fallback: map(TextInput2, obj11, found.key)
        };
        tmp22 = first[found.key];
        if (tmp22 == null) {
          tmp22 = memo1[found.key];
        }
        projectId = found;
        let tmp25 = first[found.key];
        if (tmp25 == null) {
          tmp25 = memo1[found.key];
        }
        obj11 = { label: found.label, description: joined, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, value: str4, onChange, disabled: first2 };
        str4 = "";
        TextInput2 = projectId(flag[22]).TextInput;
        if (typeof tmp25 === "string") {
          str4 = tmp25;
        }
        tmp12Result = map(closure_1_22, obj5, found.key);
      } else {
        projectId = found;
        let tmp11 = first[found.key];
        if (tmp11 == null) {
          tmp11 = memo1[found.key];
        }
        let obj = { label: found.label, description: joined, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, value: str3, onChange, disabled: first2 };
        str3 = "";
        const TextInput = projectId(flag[22]).TextInput;
        if (typeof tmp11 === "string") {
          str3 = tmp11;
        }
        tmp12Result = map(TextInput, obj, found.key);
      }
      return tmp12Result;
    }
  }
  function renderSecret(value) {
    let intl2;
    let intl3;
    let items1;
    let items2;
    let obj7;
    let str3;
    let str4;
    let closure_0 = value;
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
      const intl = projectId(flag[15]).intl;
      stringResult = intl.string(notifyAgent(flag[16])["4kCM6H"]);
    }
    items[1] = stringResult;
    found = items.filter(f146401);
    let joined;
    if (0 !== found.length) {
      joined = found.join(" ");
    }
    if (value.set) {
      let tmp12Result;
      if (true !== _undefined[value.name]) {
        const obj2 = { style: closure_3.secretRow, children: items2 };
        const obj3 = { style: closure_3.secretRowInfo, children: items1 };
        const obj4 = { variant: "text-sm/medium", color: "text-default", children: label };
        items1 = [map(projectId(flag[23]).Text, obj4), map(projectId(flag[23]).Text, { variant: "text-sm/normal", color: "text-muted", children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), ];
        let tmp23 = null;
        if (null != joined) {
          const obj5 = { variant: "text-xs/normal", color: "text-muted", children: joined };
          tmp23 = map(projectId(flag[23]).Text, obj5);
        }
        items1[2] = tmp23;
        items2 = [memo3(closure_6, obj3), ];
        const obj6 = {
          variant: "secondary",
          size: "sm",
          text: intl2.string(notifyAgent(flag[16]).RsvBGf),
          accessibilityLabel: intl3.formatToPlainString(notifyAgent(flag[16]).WjoM7z, obj7),
          disabled: first2,
          onPress() {
                let name;
                return c10((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[name.name] = true;
                  return obj;
                });
              }
        };
        const Button = projectId(flag[24]).Button;
        intl2 = projectId(flag[15]).intl;
        intl3 = projectId(flag[15]).intl;
        obj7 = { label };
        items2[1] = map(Button, obj6);
        tmp12Result = memo3(closure_6, obj2, value.name);
      }
      return tmp12Result;
    }
    let obj = {
      label,
      description: joined,
      placeholder: str3,
      secureTextEntry: true,
      autoComplete: "off",
      autoCapitalize: "none",
      autoCorrect: false,
      value: str4,
      onChange(arg0) {
        const name = arg0;
        closure_1_13(false);
        closure_1_8((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[name.name] = name;
          return obj;
        });
      },
      disabled: first2
    };
    str3 = undefined;
    const TextInput = projectId(flag[22]).TextInput;
    if (value.set) {
      str3 = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
    }
    str4 = first1[value.name];
    if (str4 == null) {
      str4 = "";
    }
    tmp12Result = map(TextInput, obj, value.name);
  }
  const tmp = renderSecret();
  _asyncToGenerator = tmp;
  let tmp2 = projectId;
  let tmp3 = flag;
  let obj = projectId(flag[14]);
  let items = [memo1];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureConnectionStore.getSettings(projectId));
  let obj2 = first;
  let tmp5 = stateFromStores(first.useState({}), 2);
  first = tmp5[0];
  let closure_6 = tmp5[1];
  const tmp7 = stateFromStores(first.useState({}), 2);
  const first1 = tmp7[0];
  let closure_8 = tmp7[1];
  const tmp9 = stateFromStores(first.useState({}), 2);
  [c9, c10] = tmp9;
  const tmp10 = stateFromStores(first.useState(false), 2);
  const first2 = tmp10[0];
  closure_12 = tmp10[1];
  const tmp12 = stateFromStores(first.useState(false), 2);
  let closure_13 = tmp12[1];
  let items1 = [stateFromStores];
  const first3 = tmp12[0];
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
      let closure_0 = item;
      const obj = { def: memo.find((key) => key.key === name.name && "secret" === key.type) };
      const merged = Object.assign(item);
      return obj;
    });
  }, items3);
  let found = memo.filter((type) => "secret" !== type.type);
  map = new Map(memo2.map((name) => {
    const items = [name.name, name];
    return items;
  }));
  if (scopeKeys == null) {
    scopeKeys = [];
  }
  const found1 = scopeKeys.filter((item) => {
    let closure_0 = item;
    const someResult = found.some((key) => key.key === closure_0) || map.has(item);
    return someResult;
  });
  const items4 = [memo, first1, memo1, first];
  let someResult = found1.some((item) => map.has(item));
  memo3 = obj2.useMemo(() => {
    let obj4;
    let obj7;
    let str;
    let tmp12;
    let tmp3;
    const values = {};
    function _loop(arg0) {
      let closure_0 = arg0;
      found = memo.find((key) => key.key === closure_0);
      if (null != found) {
        let tmp3 = memo1[arg0];
        if (tmp3 == null) {
          tmp3 = "checkbox" !== found.type && "";
        }
        if (closure_1 !== tmp3) {
          let tmp6;
          if (typeof closure_1 !== "string") {
            tmp6 = closure_1;
          } else {
            tmp6 = null;
          }
          obj[arg0] = tmp6;
        }
      }
      return 1;
    }
    const entries = Object.entries(first);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = stateFromStores(tmp3, 2);
      let closure_1 = tmp5[1];
      let _loopResult = _loop(tmp5[0]);
      continue;
    }
    const obj2 = {};
    const entries1 = Object.entries(first1);
    const tmp8 = entries1[Symbol.iterator]();
    while (tmp8 !== undefined) {
      let tmp11 = stateFromStores(tmp9, 2);
      [tmp12, str] = tmp11;
      if ("" !== str.trim()) {
        obj2[tmp12] = str.trim();
      }
      continue;
    }
    if (Object.keys(values).length > 0) {
      obj4 = { values };
      const obj3 = { values };
    } else {
      obj4 = {};
    }
    const obj5 = {};
    const merged = Object.assign(obj4);
    if (Object.keys(obj2).length > 0) {
      obj7 = { secrets: obj2 };
      const obj6 = { secrets: obj2 };
    } else {
      obj7 = {};
    }
    const merged1 = Object.assign(obj7);
    return obj5;
  }, items4);
  closure_19 = tmp19;
  const items5 = [tmp19, notifyAgent, projectId, first2, memo3];
  let tmp21 = null;
  const callback = obj2.useCallback(_asyncToGenerator(async () => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let closure_2;
        let rebuildRequired;
        let _null2;
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
            closure_3 = tmp;
            closure_2 = tmp4;
            rebuildRequired = undefined;
            _null2 = undefined;
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
        } else if (1 === c6) {
          c5 = 0;
          closure_131_12(false);
          throw closure_4;
        } else if (2 === c6) {
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
          let _null;
          rebuildRequired = value.rebuildRequired;
          if (!closure_131_1) {
            if (!first2.hasPendingSettingsRequest(closure_131_0)) {
              if (rebuildRequired) {
                closure_1_12(closure_131_0);
              } else {
                _null2 = project.getProject(closure_131_0);
                let application_id;
                const tmp15 = _null2(closure_2[17]);
                if (_null2 != null) {
                  application_id = _null2.application_id;
                }
                _null = application_id;
                if (application_id == null) {
                  _null = null;
                }
                tmp15(_null);
                let prop;
                const tmp23 = _null2(closure_2[17]);
                if (_null2 != null) {
                  prop = _null2.preview_application_id;
                }
                _null2 = prop;
                if (prop == null) {
                  _null2 = null;
                }
                tmp23(_null2);
              }
            }
            c5 = 0;
            closure_131_12(false);
            c7 = 3;
            return { value: true, done: true };
          }
          const intl = _null(closure_2[15]).intl;
          closure_1_13(closure_131_0, intl.string(_null2(closure_2[16])["08bsJL"]));
        }
      } catch (tmp63) {
        closure_4 = tmp63;
        if (0 === c5) {
          c7 = 3;
          throw tmp63;
        } else if (1 === tmp65) {
          c6 = 1;
        } else {
          c6 = 2;
        }
      }
    }
  }), items5);
  if (first3) {
    let tmp22 = map;
    let obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl.string(notifyAgent(tmp3[16])["A5TC+K"]) };
    const Text = tmp2(tmp3[23]).Text;
    intl = tmp2(tmp3[15]).intl;
    let tmp23 = notifyAgent;
    tmp21 = map(Text, obj3);
  }
  let tmp25 = closure_6;
  let obj4 = { style: tmp.section, children: items6 };
  let tmp26 = null;
  if (null != note) {
    const str = "";
    tmp26 = null;
    if ("" !== note) {
      let obj5 = { variant: "text-sm/normal", color: "text-default", children: note };
      tmp26 = map(tmp2(tmp3[23]).Text, obj5);
    }
  }
  items6 = [tmp26, , , ];
  let tmp28 = null;
  if (null != stateFromStores) {
    tmp28 = null;
    if (0 === found.length) {
      tmp28 = null;
      if (0 === memo2.length) {
        let obj6 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(notifyAgent(tmp3[16]).lJJayk) };
        const Text2 = tmp2(tmp3[23]).Text;
        intl2 = tmp2(tmp3[15]).intl;
        tmp28 = map(Text2, obj6);
      }
    }
  }
  items6[1] = tmp28;
  if (found1.length > 0) {
    let tmp33 = null;
    const tmp32 = closure_19;
    if (someResult) {
      let obj7 = { variant: "text-xs/normal", color: "text-muted", children: intl3.string(notifyAgent(tmp3[16]).dsHRPK) };
      const Text3 = tmp2(tmp3[23]).Text;
      intl3 = tmp2(tmp3[15]).intl;
      tmp33 = map(Text3, obj7);
    }
    const obj8 = { children: items7 };
    items7 = [
      tmp33,
      found1.map(function renderScoped(item) {
          let closure_0 = item;
          const value = map.get(item);
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
    mapped = tmp24(tmp32, obj8);
  } else {
    mapped = found.map(renderValueSetting);
  }
  items6[2] = mapped;
  items6[3] = tmp21;
  const obj9 = { fields: memo3(tmp25, obj4), secretFields: memo3(tmp25, obj10), loaded: null != stateFromStores, valueCount: found.length, secretCount: memo2.length, isScoped: found1.length > 0, canSave: null != memo3.values || null != memo3.secrets, saving: first2, submit: callback };
  obj10 = { style: tmp.section, children: items8 };
  let obj11 = { variant: "text-xs/normal", color: "text-muted", children: intl4.string(notifyAgent(tmp3[16]).dsHRPK) };
  const Text4 = tmp2(tmp3[23]).Text;
  intl4 = tmp2(tmp3[15]).intl;
  items8 = [map(Text4, obj11), memo2.map(renderSecret), tmp21];
  return obj9;
};