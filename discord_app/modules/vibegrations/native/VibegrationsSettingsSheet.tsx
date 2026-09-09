// === Module 16646: VibegrationsSettingsSheet ===

// Module 16646 (VibegrationsSettingsSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef3560 from "module_3560" /* 3560 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4541 */;
import VibegrationsUtils from "VibegrationsUtils" /* 7258 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 11362 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4222 */;
import UserStore from "UserStore" /* 1371 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 16620 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 16623 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 16621 */;

require = fn;
function VibegrationsChannelSettingRow(projectId) {
  projectId = projectId.projectId;
  const isPreview = projectId.isPreview;
  const def = projectId.def;
  ({ value: asyncGeneratorStep, onChange: _slicedToArray } = projectId);
  c6 = undefined;
  let found;
  ({ hint, disabled, fallback } = projectId);
  let obj = projectId(def[15]);
  const items = [VibegrationsProjectStore];
  const items1 = [isPreview, projectId];
  const stateFromStores = obj.useStateFromStores(items, () => VibegrationsUtils.vibegrationsSettingsGuildId(VibegrationsProjectStore.getProject(projectId), isPreview), items1);
  const items2 = [found];
  const items3 = [stateFromStores];
  const stateFromStores1 = projectId(def[15]).useStateFromStores(items2, () => {
    channels = null;
    if (null != stateFromStores) {
      channels = GuildChannelStore.getChannels(tmp);
    }
    return channels;
  }, items3);
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      let tmpResult = tmp(tmp2[30]);
      const result = tmpResult.vibegrationsSettingChannels(stateFromStores1, def.channel_filter);
      c6 = result;
      found = result.find((id) => id.id === asyncGeneratorStep);
      if (found == null) {
        found = null;
      }
      obj = { label: def.label, subLabel: hint, arrow: true, disabled, trailing: null, onPress: null };
      if (null != found) {
        tmpResult = tmp(tmp2[33]);
        let channelName = tmpResult.computeChannelName(found, UserStore, RelationshipStore, true);
      } else {
        let intl = tmp(tmp2[16]).intl;
        channelName = intl.string(isPreview(tmp2[17]).grukkJ);
      }
      obj = { text: channelName };
      obj.trailing = closure_17(tmp(tmp2[32]).TableRowTrailingText, obj);
      obj.onPress = function onPress() {
        let obj = { content: null, key: "VibegrationsSettingsChannelSheet", stackingBehavior: "stack" };
        obj = { header: { title: def.label }, guild: GuildStore.getGuild(stateFromStores), channels, selectedChannel: found, noChannelOptionLabel: null, onSelect: null };
        const intl = util.intl;
        obj.noChannelOptionLabel = intl.string(_modDef3560.aO4AM6);
        obj.onSelect = function onSelect(id) {
          let str;
          if (id != null) {
            str = id.id;
          }
          if (str == null) {
            str = "";
          }
          return closure_1_4(str);
        };
        obj.content = closure_2_17(ChannelPickerActionSheetDefault, obj);
        obj.showActionSheet(obj);
      };
      return closure_17(tmp(tmp2[31]).TableRow, obj);
    }
  }
  return fallback;
}
const View = fn(17).View;
let VibegrationsConnectionStore = fn(16623);
({ requestProjectRebuild: closure_12, sendUserMessage: map1, submitProjectSettings: closure_14 } = VibegrationsConnectionStore);
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
const VibegrationsSettingsSheet = "VibegrationsSettingsSheet";
const createStyles = fn(4574);
let closure_21 = createStyles.createStyles((paddingBottom) => {
  let obj = { container: null, section: null, secretRow: null, secretRowInfo: null };
  obj = { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom };
  obj.container = obj;
  obj = { gap: nativeDefault.space.PX_16 };
  obj.section = obj;
  obj.secretRow = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
  const obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
  obj.secretRowInfo = { flex: 1, gap: nativeDefault.space.PX_4 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSettingsSheet.tsx");

export default function VibegrationsSettingsSheet(projectId) {
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
  c19 = undefined;
  let memo4;
  closure_21 = undefined;
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
    const items = [hint1, ];
    let requires_rebuild;
    if (found != null) {
      requires_rebuild = found.requires_rebuild;
    }
    let stringResult;
    if (true === requires_rebuild) {
      const intl = projectId(flag[16]).intl;
      stringResult = intl.string(notifyAgent(flag[17]).xPxvYa);
    }
    items[1] = stringResult;
    found = items.filter((item) => null != item);
    if (0 !== found.length) {
      const joined = found.join(" ");
    }
    if ("select" === found.type) {
      let tmp38 = first[found.key];
      if (tmp38 == null) {
        tmp38 = memo1[found.key];
      }
      let tmp43;
      if (typeof tmp38 === "string") {
        tmp43 = tmp38;
      }
      let obj = {
        hasIcons: false,
        defaultValue: tmp43,
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
      obj.children = options.map((label) => found(closure_0(flag[22]).TableRadioRow, { label: label.label, value: label.value }, label.value));
      return found(projectId(flag[21]).TableRadioGroup, obj, found.key);
    } else if ("checkbox" === found.type) {
      let tmp31 = first[found.key];
      if (tmp31 == null) {
        tmp31 = memo1[found.key];
      }
      obj = {
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
      return found(projectId(flag[23]).TableCheckboxRow, obj, found.key);
    } else {
      if ("channel" === found.type) {
        const obj1 = { projectId, isPreview: flag, def: found, hint: joined, value: null, disabled: null, onChange: null, fallback: null };
        let tmp22 = first[found.key];
        if (tmp22 == null) {
          tmp22 = memo1[found.key];
        }
        obj1.value = tmp22;
        obj1.disabled = first2;
        obj1.onChange = function onChange(arg0) {
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
        const obj2 = { label: found.label, description: joined, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, value: null, onChange: null, isDisabled: null };
        let str4 = "";
        if (typeof tmp25 === "string") {
          str4 = tmp25;
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
        obj2.isDisabled = first2;
        obj1.fallback = found(projectId(flag[24]).TextInput, obj2, found.key);
        let tmp12Result = found(renderValueSetting, obj1, found.key);
      } else {
        closure_129_0 = found;
        let tmp11 = first[found.key];
        if (tmp11 == null) {
          tmp11 = memo1[found.key];
        }
        obj = { label: found.label, description: joined, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, value: null, onChange: null, isDisabled: null };
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
        obj.isDisabled = first2;
        tmp12Result = found(projectId(flag[24]).TextInput, obj, found.key);
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
    const items = [hint1, ];
    let requires_rebuild;
    if (def2 != null) {
      requires_rebuild = def2.requires_rebuild;
    }
    let stringResult;
    if (true === requires_rebuild) {
      const intl = projectId(flag[16]).intl;
      stringResult = intl.string(notifyAgent(flag[17]).xPxvYa);
    }
    items[1] = stringResult;
    found = items.filter((item) => null != item);
    let joined;
    if (0 !== found.length) {
      joined = found.join(" ");
    }
    if (value.set) {
      if (true !== _undefined[value.name]) {
        let obj = { style: closure_3.secretRow, children: null };
        obj = { style: closure_3.secretRowInfo, children: null };
        const obj1 = { variant: "text-sm/medium", color: "text-default", children: label };
        const items1 = [found(projectId(flag[25]).Text, obj1), found(projectId(flag[25]).Text, { variant: "text-sm/normal", color: "text-muted", children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), ];
        let tmp23 = null;
        if (null != joined) {
          const obj2 = { variant: "text-xs/normal", color: "text-muted", children: joined };
          tmp23 = found(projectId(flag[25]).Text, obj2);
        }
        items1[2] = tmp23;
        obj.children = items1;
        const items2 = [map(closure_6, obj), ];
        const obj3 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
        const intl2 = projectId(flag[16]).intl;
        obj3.text = intl2.string(notifyAgent(flag[17]).j6itec);
        const intl3 = projectId(flag[16]).intl;
        const obj4 = { label };
        obj3.accessibilityLabel = intl3.formatToPlainString(notifyAgent(flag[17]).cTofe2, obj4);
        obj3.disabled = first2;
        obj3.onPress = function onPress() {
          return c10((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[name.name] = true;
            return obj;
          });
        };
        items2[1] = found(projectId(flag[26]).Button, obj3);
        obj.children = items2;
        let tmp12Result = map(closure_6, obj, value.name);
      }
      return tmp12Result;
    }
    obj = { label, description: joined, placeholder: null, secureTextEntry: true, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, value: null, onChange: null, isDisabled: null };
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
    obj.isDisabled = first2;
    tmp12Result = found(projectId(flag[24]).TextInput, obj, value.name);
  }
  let tmp3 = closure_21(notifyAgent(flag[14])({ includeKeyboardHeight: true }).insets.bottom);
  asyncGeneratorStep = tmp3;
  let obj = projectId(flag[15]);
  let items = [memo1];
  const stateFromStores = obj.useStateFromStores(items, () => VibegrationsConnectionStore.getSettings(projectId));
  let obj1 = first;
  const tmp7 = stateFromStores(first.useState({}), 2);
  first = tmp7[0];
  closure_6 = tmp7[1];
  const tmp9 = stateFromStores(first.useState({}), 2);
  const first1 = tmp9[0];
  closure_8 = tmp9[1];
  [c9, c10] = stateFromStores(first.useState({}), 2);
  let tmp12 = stateFromStores(first.useState(false), 2);
  const first2 = tmp12[0];
  closure_12 = tmp12[1];
  const tmp14 = stateFromStores(first.useState(false), 2);
  closure_13 = tmp14[1];
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
  let tmp19 = !tmp17;
  let tmp11 = stateFromStores(first.useState({}), 2);
  if (found1.length <= 0) {
    tmp19 = found.length > 0;
  }
  if (tmp19) {
    tmp19 = memo2.length > 0;
  }
  let num = 0;
  if (0 === found.length) {
    num = 1;
  }
  let tmp6Result = tmp6(obj1.useState(num), 2);
  [tmp21, tmp22] = tmp6Result;
  tmp6Result = tmp6(obj1.useState(0), 2);
  [tmp24, c19] = tmp6Result;
  const items4 = [memo2.length, found.length];
  const callback = obj1.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo3 = obj1.useMemo(() => {
    let obj = { id: "settings", label: null, count: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3560.jczqxT);
    obj.count = found.length;
    const items = [obj, ];
    obj = { id: "secrets", label: null, count: null, page: null };
    const intl2 = util.intl;
    obj.label = intl2.string(_modDef3560.iD7xfZ);
    obj.count = memo2.length;
    items[1] = obj;
    return items;
  }, items4);
  let someResult = found1.some((item) => map.has(item));
  const segmentedControlState = projectId(flag[18]).useSegmentedControlState({ items: memo3, pageWidth: tmp24, defaultIndex: num, onSetActiveIndex: tmp22 });
  if (tmp19) {
    let tmp28 = 1 === tmp21;
  } else {
    tmp28 = 0 === found.length;
  }
  const items5 = [memo, first1, memo1, first];
  memo4 = obj1.useMemo(() => {
    let secrets = {};
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
    secrets = {};
    const entries1 = Object.entries(first1);
    tmp2 = entries[Symbol.iterator]();
    while (tmp8 !== undefined) {
      let tmp11 = stateFromStores(tmp9, 2);
      [tmp12, str] = tmp11;
      if ("" !== str.trim()) {
        secrets[tmp12] = str.trim();
      }
      continue;
    }
    if (Object.keys(secrets).length > 0) {
      secrets = { values: null };
      secrets.values = secrets;
      let obj1 = secrets;
    } else {
      obj1 = {};
    }
    const merged = Object.assign(obj1);
    if (Object.keys(secrets).length > 0) {
      const obj3 = { secrets };
      let obj4 = obj3;
    } else {
      obj4 = {};
    }
    const merged1 = Object.assign(obj4);
    return {};
  }, items5);
  closure_21 = tmp30;
  const items6 = [null != memo4.values || null != memo4.secrets, notifyAgent, projectId, first2, memo4];
  const callback1 = obj1.useCallback(asyncGeneratorStep(async () => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp4;
            dependencyMap = tmp8;
            let rebuildRequired;
            let project2;
            if (closure_21) {
              if (!first2) {
                closure_12(true);
                closure_13(false);
                c5 = 2;
                c6 = 3;
                c7 = 1;
                const obj1 = { value: memo(projectId, memo4), done: false };
                return obj1;
              }
            }
            c7 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c5 = 1;
            closure_131_13(true);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_131_12(false);
            c7 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            rebuildRequired = value.rebuildRequired;
            if (!closure_131_1) {
              if (!closure_1_11.hasPendingSettingsRequest(closure_131_0)) {
                if (rebuildRequired) {
                  closure_1_12(closure_131_0);
                } else {
                  project2 = project.getProject(closure_131_0);
                  let application_id;
                  if (project2 != null) {
                    application_id = project2.application_id;
                  }
                  let _null = application_id;
                  if (application_id == null) {
                    _null = null;
                  }
                  _null2(13281)(_null);
                  let prop;
                  const tmp19 = _null2(13281);
                  if (project2 != null) {
                    prop = project2.preview_application_id;
                  }
                  _null2 = prop;
                  if (prop == null) {
                    _null2 = null;
                  }
                  _null2(13281)(_null2);
                  const tmp27 = _null2(13281);
                }
              }
              obj = _null2(4541);
              obj.hideActionSheet(closure_1_20);
              c5 = 1;
            }
            const intl = _null(1114).intl;
            closure_1_13(closure_131_0, intl.string(_null2(3560).gqJFu0));
          }
          c5 = 0;
          closure_131_12(false);
        }
        c5 = 0;
        closure_131_12(false);
        throw closure_4;
      } catch (tmp69) {
        closure_4 = tmp69;
        if (tmp5 === c5) {
          c7 = tmp3;
          throw tmp69;
        } else if (tmp2 === tmp71) {
          c6 = tmp2;
        } else {
          c6 = tmp;
        }
      }
    }
  }), items6);
  obj = { startExpanded: true, header: null, children: null };
  obj = { title: null };
  let intl = tmp4(tmp2[16]).intl;
  obj.title = intl.string(notifyAgent(flag[17]).gTMvzD);
  obj.header = found(projectId(flag[28]).BottomSheetTitleHeader, obj);
  obj1 = { style: tmp3.container, children: null };
  let tmp32Result = null;
  if (null != note) {
    tmp32Result = null;
    if ("" !== note) {
      let obj2 = { variant: "text-sm/normal", color: "text-default", children: note };
      tmp32Result = tmp32(tmp4(tmp2[25]).Text, obj2);
    }
  }
  const items7 = [tmp32Result, , , , ];
  tmp32Result = null;
  if (0 === found.length) {
    tmp32Result = null;
    if (0 === memo2.length) {
      let obj3 = { variant: "text-sm/normal", color: "text-muted", children: null };
      let intl2 = tmp4(tmp2[16]).intl;
      obj3.children = intl2.string(tmp(tmp2[17]).URnN4B);
      tmp32Result = tmp32(tmp4(tmp2[25]).Text, obj3);
    }
  }
  items7[1] = tmp32Result;
  if (found1.length > 0) {
    let obj4 = { style: tmp3.section, children: null };
    let tmp32Result1 = null;
    if (someResult) {
      const obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl4 = tmp4(tmp2[16]).intl;
      obj5.children = intl4.string(tmp(tmp2[17])["Hl+eu7"]);
      tmp32Result1 = tmp32(tmp4(tmp2[25]).Text, obj5);
    }
    const items8 = [
      tmp32Result1,
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
    obj4.children = items8;
    let tmp33Result = tmp33(tmp34, obj4);
  } else {
    let tmp32Result2 = null;
    if (tmp19) {
      const obj6 = { onLayout: callback, children: null };
      const obj7 = { state: segmentedControlState };
      obj6.children = tmp32(tmp4(tmp2[29]).SegmentedControl, obj7);
      tmp32Result2 = tmp32(tmp34, obj6);
    }
    const items9 = [tmp32Result2, ];
    const obj8 = { style: tmp3.section, children: null };
    if (tmp28) {
      const obj9 = { variant: "text-xs/normal", color: "text-muted", children: null };
      let intl3 = tmp4(tmp2[16]).intl;
      obj9.children = intl3.string(tmp(tmp2[17])["Hl+eu7"]);
      const items10 = [tmp32(tmp4(tmp2[25]).Text, obj9), memo2.map(renderSecret)];
      obj8.children = items10;
      tmp33Result = tmp33(tmp34, obj8);
    } else {
      obj8.children = found.map(renderValueSetting);
      tmp33Result = tmp32(tmp34, obj8);
    }
    const obj10 = { children: null };
    items9[1] = tmp33Result;
    obj10.children = items9;
    tmp33Result = tmp33(c19, obj10);
  }
  items7[2] = tmp33Result;
  let tmp32Result3 = null;
  if (tmp14[0]) {
    const obj11 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl5 = tmp4(tmp2[16]).intl;
    obj11.children = intl5.string(tmp(tmp2[17]).n02OEo);
    tmp32Result3 = tmp32(tmp4(tmp2[25]).Text, obj11);
  }
  items7[3] = tmp32Result3;
  const obj12 = { text: null, variant: "primary", loading: null, disabled: null, onPress: null };
  const intl6 = tmp4(tmp2[16]).intl;
  obj12.text = intl6.string(notifyAgent(flag[17]).Tuz9vw);
  obj12.loading = first2;
  obj12.disabled = !(null != memo4.values || null != memo4.secrets);
  obj12.onPress = callback1;
  items7[4] = found(projectId(flag[26]).Button, obj12);
  obj1.children = items7;
  obj.children = map(closure_6, obj1);
  return found(projectId(flag[27]).ActionSheet, obj);
};
export const VIBEGRATIONS_SETTINGS_SHEET_KEY = "VibegrationsSettingsSheet";