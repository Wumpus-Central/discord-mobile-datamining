// === Module 16611: VibegrationsSettingsSheet ===

// Module 16611 (VibegrationsSettingsSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef3547 from "module_3547" /* 3547 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 16586 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 16589 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 16587 */;

require = fn;
const View = fn(17).View;
let VibegrationsConnectionStore = fn(16589);
({ requestProjectRebuild: closure_8, sendUserMessage: closure_9, submitProjectSettings: c10 } = VibegrationsConnectionStore);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const VibegrationsSettingsSheet = "VibegrationsSettingsSheet";
const createStyles = fn(4560);
let closure_17 = createStyles.createStyles((paddingBottom) => {
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
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSettingsSheet.tsx");

export default function VibegrationsSettingsSheet(projectId) {
  projectId = projectId.projectId;
  ({ scopeKeys, note, notifyAgent } = projectId);
  if (notifyAgent === undefined) {
    notifyAgent = false;
  }
  let first;
  noop = undefined;
  c8 = undefined;
  c9 = undefined;
  closure_11 = undefined;
  let map;
  c18 = undefined;
  let memo4;
  closure_20 = undefined;
  function renderValueSetting(found) {
    closure_0 = found;
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
      const intl = projectId(closure_2[12]).intl;
      stringResult = intl.string(notifyAgent(closure_2[13]).xPxvYa);
    }
    items[1] = stringResult;
    found = items.filter((item) => null != item);
    if (0 !== found.length) {
      const joined = found.join(" ");
    }
    if ("select" === found.type) {
      let tmp24 = first[found.key];
      if (tmp24 == null) {
        tmp24 = memo1[found.key];
      }
      let tmp29;
      if (typeof tmp24 === "string") {
        tmp29 = tmp24;
      }
      let obj = {
        hasIcons: false,
        defaultValue: tmp29,
        onChange(arg0) {
            closure_1_12(false);
            closure_1_5((arg0) => {
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
      ({ label: obj3.title, label: obj3.accessibilityLabel, options } = found);
      if (options == null) {
        options = [];
      }
      obj.children = options.map((label) => memo(closure_0(closure_1_2[18]).TableRadioRow, { label: label.label, value: label.value }, label.value));
      return memo(projectId(closure_2[17]).TableRadioGroup, obj, found.key);
    } else if ("checkbox" === found.type) {
      let tmp17 = first[found.key];
      if (tmp17 == null) {
        tmp17 = memo1[found.key];
      }
      obj = {
        label: found.label,
        subLabel: joined,
        checked: true === tmp17,
        disabled: first2,
        onPress(arg0) {
            closure_1_12(false);
            closure_1_5((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[key.key] = key;
              return obj;
            });
          }
      };
      return memo(projectId(closure_2[19]).TableCheckboxRow, obj, found.key);
    } else {
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
        closure_1_12(false);
        closure_1_5((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[key.key] = key;
          return obj;
        });
      };
      obj.isDisabled = first2;
      return memo(projectId(closure_2[20]).TextInput, obj, found.key);
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
      const intl = projectId(closure_2[12]).intl;
      stringResult = intl.string(notifyAgent(closure_2[13]).xPxvYa);
    }
    items[1] = stringResult;
    found = items.filter((item) => null != item);
    let joined;
    if (0 !== found.length) {
      joined = found.join(" ");
    }
    if (value.set) {
      if (true !== _undefined[value.name]) {
        let obj = { style: closure_2.secretRow, children: null };
        obj = { style: closure_2.secretRowInfo, children: null };
        const obj1 = { variant: "text-sm/medium", color: "text-default", children: label };
        const items1 = [memo(projectId(closure_2[21]).Text, obj1), memo(projectId(closure_2[21]).Text, { variant: "text-sm/normal", color: "text-muted", children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), ];
        let tmp23 = null;
        if (null != joined) {
          const obj2 = { variant: "text-xs/normal", color: "text-muted", children: joined };
          tmp23 = memo(projectId(closure_2[21]).Text, obj2);
        }
        items1[2] = tmp23;
        obj.children = items1;
        const items2 = [memo1(first1, obj), ];
        const obj3 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
        const intl2 = projectId(closure_2[12]).intl;
        obj3.text = intl2.string(notifyAgent(closure_2[13]).j6itec);
        const intl3 = projectId(closure_2[12]).intl;
        const obj4 = { label };
        obj3.accessibilityLabel = intl3.formatToPlainString(notifyAgent(closure_2[13]).cTofe2, obj4);
        obj3.disabled = first2;
        obj3.onPress = function onPress() {
          return c9((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[name.name] = true;
            return obj;
          });
        };
        items2[1] = memo(projectId(closure_2[22]).Button, obj3);
        obj.children = items2;
        let tmp12Result = memo1(first1, obj, value.name);
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
      closure_1_12(false);
      closure_1_7((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[name.name] = name;
        return obj;
      });
    };
    obj.isDisabled = first2;
    tmp12Result = memo(projectId(closure_2[20]).TextInput, obj, value.name);
  }
  let tmp3 = map(notifyAgent(6981)({ includeKeyboardHeight: true }).insets.bottom);
  dependencyMap = tmp3;
  let obj = projectId(504);
  let items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => VibegrationsConnectionStore.getSettings(projectId));
  let obj1 = noop;
  const tmp7 = first(noop.useState({}), 2);
  first = tmp7[0];
  noop = tmp7[1];
  const tmp9 = first(noop.useState({}), 2);
  const first1 = tmp9[0];
  closure_7 = tmp9[1];
  [c8, c9] = first(noop.useState({}), 2);
  const tmp12 = first(noop.useState(false), 2);
  const first2 = tmp12[0];
  closure_11 = tmp12[1];
  const tmp14 = first(noop.useState(false), 2);
  closure_12 = tmp14[1];
  let items1 = [stateFromStores];
  const memo = noop.useMemo(() => {
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
  const memo1 = noop.useMemo(() => {
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
  const memo2 = noop.useMemo(() => {
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
  map = new Map(memo2.map((name) => {
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
  let tmp11 = first(noop.useState({}), 2);
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
  [tmp24, c18] = tmp6Result;
  const items4 = [memo2.length, found.length];
  const callback = obj1.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo3 = obj1.useMemo(() => {
    let obj = { id: "settings", label: null, count: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3547.jczqxT);
    obj.count = found.length;
    const items = [obj, ];
    obj = { id: "secrets", label: null, count: null, page: null };
    const intl2 = util.intl;
    obj.label = intl2.string(_modDef3547.iD7xfZ);
    obj.count = memo2.length;
    items[1] = obj;
    return items;
  }, items4);
  let someResult = found1.some((item) => map.has(item));
  const segmentedControlState = projectId(9792).useSegmentedControlState({ items: memo3, pageWidth: tmp24, defaultIndex: num, onSetActiveIndex: tmp22 });
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
      let tmp5 = first(tmp3, 2);
      closure_1 = tmp5[1];
      let _loopResult = _loop(tmp5[0]);
      continue;
    }
    secrets = {};
    const entries1 = Object.entries(first1);
    tmp2 = entries[Symbol.iterator]();
    while (tmp8 !== undefined) {
      let tmp11 = first(tmp9, 2);
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
  closure_20 = tmp30;
  const items6 = [null != memo4.values || null != memo4.secrets, notifyAgent, projectId, first2, memo4];
  const callback1 = obj1.useCallback(stateFromStores(function*() {
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
            if (closure_20) {
              if (!first2) {
                closure_11(true);
                project(false);
                c5 = 2;
                c6 = 3;
                c7 = 1;
                const obj1 = { value: closure_1_10(projectId, memo4), done: false };
                return obj1;
              }
            }
            c7 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c5 = 1;
            closure_131_12(true);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_131_11(false);
            c7 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            rebuildRequired = value.rebuildRequired;
            if (!closure_131_1) {
              if (!c7.hasPendingSettingsRequest(closure_131_0)) {
                if (rebuildRequired) {
                  _undefined(closure_131_0);
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
                  _null2(13254)(_null);
                  let prop;
                  const tmp19 = _null2(13254);
                  if (project2 != null) {
                    prop = project2.preview_application_id;
                  }
                  _null2 = prop;
                  if (prop == null) {
                    _null2 = null;
                  }
                  _null2(13254)(_null2);
                  const tmp27 = _null2(13254);
                }
              }
              obj = _null2(4527);
              obj.hideActionSheet(found);
              c5 = 1;
            }
            const intl = _null(1114).intl;
            _undefined(closure_131_0, intl.string(_null2(3547).gqJFu0));
          }
          c5 = 0;
          closure_131_11(false);
        }
        c5 = 0;
        closure_131_11(false);
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
  let intl = tmp4(1114).intl;
  obj.title = intl.string(notifyAgent(3547).gTMvzD);
  obj.header = memo(projectId(7149).BottomSheetTitleHeader, obj);
  obj1 = { style: tmp3.container, children: null };
  let tmp32Result = null;
  if (null != note) {
    tmp32Result = null;
    if ("" !== note) {
      let obj2 = { variant: "text-sm/normal", color: "text-default", children: note };
      tmp32Result = tmp32(tmp4(4556).Text, obj2);
    }
  }
  const items7 = [tmp32Result, , , , ];
  tmp32Result = null;
  if (0 === found.length) {
    tmp32Result = null;
    if (0 === memo2.length) {
      let obj3 = { variant: "text-sm/normal", color: "text-muted", children: null };
      let intl2 = tmp4(1114).intl;
      obj3.children = intl2.string(tmp(3547).URnN4B);
      tmp32Result = tmp32(tmp4(4556).Text, obj3);
    }
  }
  items7[1] = tmp32Result;
  if (found1.length > 0) {
    let obj4 = { style: tmp3.section, children: null };
    let tmp32Result1 = null;
    if (someResult) {
      const obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl4 = tmp4(1114).intl;
      obj5.children = intl4.string(tmp(3547)["Hl+eu7"]);
      tmp32Result1 = tmp32(tmp4(4556).Text, obj5);
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
      obj6.children = tmp32(tmp4(9793).SegmentedControl, obj7);
      tmp32Result2 = tmp32(tmp34, obj6);
    }
    const items9 = [tmp32Result2, ];
    const obj8 = { style: tmp3.section, children: null };
    if (tmp28) {
      const obj9 = { variant: "text-xs/normal", color: "text-muted", children: null };
      let intl3 = tmp4(1114).intl;
      obj9.children = intl3.string(tmp(3547)["Hl+eu7"]);
      const items10 = [tmp32(tmp4(4556).Text, obj9), memo2.map(renderSecret)];
      obj8.children = items10;
      tmp33Result = tmp33(tmp34, obj8);
    } else {
      obj8.children = found.map(renderValueSetting);
      tmp33Result = tmp32(tmp34, obj8);
    }
    const obj10 = { children: null };
    items9[1] = tmp33Result;
    obj10.children = items9;
    tmp33Result = tmp33(memo2, obj10);
  }
  items7[2] = tmp33Result;
  let tmp32Result3 = null;
  if (tmp14[0]) {
    const obj11 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl5 = tmp4(1114).intl;
    obj11.children = intl5.string(tmp(3547).n02OEo);
    tmp32Result3 = tmp32(tmp4(4556).Text, obj11);
  }
  items7[3] = tmp32Result3;
  const obj12 = { text: null, variant: "primary", loading: null, disabled: null, onPress: null };
  const intl6 = tmp4(1114).intl;
  obj12.text = intl6.string(notifyAgent(3547).Tuz9vw);
  obj12.loading = first2;
  obj12.disabled = !(null != memo4.values || null != memo4.secrets);
  obj12.onPress = callback1;
  items7[4] = memo(projectId(4975).Button, obj12);
  obj1.children = items7;
  obj.children = memo1(first1, obj1);
  return memo(projectId(7198).ActionSheet, obj);
};
export const VIBEGRATIONS_SETTINGS_SHEET_KEY = "VibegrationsSettingsSheet";