// === Module 16611: VibegrationsSettingsSheet ===

// Module 16611 (VibegrationsSettingsSheet)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "newMessage" /* 16586 */;
import rejectPendingPublish from "rejectPendingPublish" /* 16589 */;
import closure_11 from "rejectPendingPublish" /* 16589 */;
import closure_12 from "isProjectOwner" /* 16587 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
({ requestProjectRebuild: closure_8, sendUserMessage: c9, submitProjectSettings: c10 } = rejectPendingPublish);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const VibegrationsSettingsSheet = "VibegrationsSettingsSheet";
let closure_17 = createCacheKey.createStyles((paddingBottom) => {
  let obj = { container: null, section: null, secretRow: null, secretRowInfo: null };
  obj = { gap: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom };
  obj[0] = obj;
  obj = { gap: ThemesDefault.space.PX_16 };
  obj[1] = obj;
  obj[2] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: ThemesDefault.space.PX_8 };
  obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: ThemesDefault.space.PX_8 };
  obj[3] = { flex: 1, gap: ThemesDefault.space.PX_4 };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/vibegrations/native/VibegrationsSettingsSheet.tsx");

export default function VibegrationsSettingsSheet(projectId) {
  projectId = projectId.projectId;
  ({ scopeKeys, note, notifyAgent } = projectId);
  if (notifyAgent === undefined) {
    notifyAgent = false;
  }
  dependencyMap = undefined;
  let stateFromStores;
  let first;
  let React;
  let first1;
  closure_7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let first2;
  closure_11 = undefined;
  closure_12 = undefined;
  let memo;
  let memo1;
  let memo2;
  let found;
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
    found = items.filter((arg0) => null != arg0);
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
      let obj = { hasIcons: false, defaultValue: null, onChange: null, title: null, accessibilityLabel: null, children: null };
      obj[1] = tmp29;
      obj[2] = function onChange(arg0) {
        closure_0 = arg0;
        closure_1_12(false);
        closure_1_5((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[key.key] = key;
          return obj;
        });
      };
      ({ label: obj3[3], label: obj3[4], options } = found);
      if (options == null) {
        options = [];
      }
      obj[5] = options.map((label) => callback2(callback(table[18]).TableRadioRow, { label: label.label, value: label.value }, label.value));
      return memo(projectId(closure_2[17]).TableRadioGroup, obj, found.key);
    } else if ("checkbox" === found.type) {
      let tmp17 = first[found.key];
      if (tmp17 == null) {
        tmp17 = memo1[found.key];
      }
      obj = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
      obj[0] = found.label;
      obj[1] = joined;
      obj[2] = true === tmp17;
      obj[3] = first2;
      obj[4] = function onPress(arg0) {
        closure_0 = arg0;
        closure_1_12(false);
        closure_1_5((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[key.key] = key;
          return obj;
        });
      };
      return memo(projectId(closure_2[19]).TableCheckboxRow, obj, found.key);
    } else {
      let tmp11 = first[found.key];
      if (tmp11 == null) {
        tmp11 = memo1[found.key];
      }
      obj = { label: null, description: null, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, value: null, onChange: null, isDisabled: null };
      obj[0] = found.label;
      obj[1] = joined;
      let str3 = "";
      if (typeof tmp11 === "string") {
        str3 = tmp11;
      }
      obj[5] = str3;
      obj[6] = function onChange(arg0) {
        closure_0 = arg0;
        closure_1_12(false);
        closure_1_5((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[key.key] = key;
          return obj;
        });
      };
      obj[7] = first2;
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
    found = items.filter((arg0) => null != arg0);
    let joined;
    if (0 !== found.length) {
      joined = found.join(" ");
    }
    if (value.set) {
      if (true !== _undefined[value.name]) {
        let obj = { style: null, children: null };
        obj[0] = closure_2.secretRow;
        obj = { style: null, children: null };
        obj[0] = closure_2.secretRowInfo;
        obj1 = { variant: "text-sm/medium", color: "text-default", children: null };
        obj1[2] = label;
        const items1 = [memo(projectId(closure_2[21]).Text, obj1), memo(projectId(closure_2[21]).Text, { variant: "text-sm/normal", color: "text-muted", children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), ];
        let tmp23 = null;
        if (null != joined) {
          const obj2 = { variant: "text-xs/normal", color: "text-muted", children: null };
          obj2[2] = joined;
          tmp23 = memo(projectId(closure_2[21]).Text, obj2);
        }
        items1[2] = tmp23;
        obj[1] = items1;
        const items2 = [memo1(first1, obj), ];
        const obj3 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
        const intl2 = projectId(closure_2[12]).intl;
        obj3[2] = intl2.string(notifyAgent(closure_2[13]).j6itec);
        const intl3 = projectId(closure_2[12]).intl;
        const obj4 = { label: null };
        obj4[0] = label;
        obj3[3] = intl3.formatToPlainString(notifyAgent(closure_2[13]).cTofe2, obj4);
        obj3[4] = first2;
        obj3[5] = function onPress() {
          return closure_1_9((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[name.name] = true;
            return obj;
          });
        };
        items2[1] = memo(projectId(closure_2[22]).Button, obj3);
        obj[1] = items2;
        let tmp12Result = tmp14(tmp15, obj, value.name);
      }
      return tmp12Result;
    }
    obj = { label, description: joined, placeholder: null, secureTextEntry: true, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, value: null, onChange: null, isDisabled: null };
    let str3;
    if (value.set) {
      str3 = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
    }
    obj[2] = str3;
    let str4 = first1[value.name];
    if (str4 == null) {
      str4 = "";
    }
    obj[7] = str4;
    obj[8] = function onChange(arg0) {
      closure_0 = arg0;
      closure_1_12(false);
      closure_1_7((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[name.name] = name;
        return obj;
      });
    };
    obj[9] = first2;
    tmp12Result = memo(projectId(closure_2[20]).TextInput, obj, value.name);
  }
  let tmp3 = map(notifyAgent(6981)({ includeKeyboardHeight: true }).insets.bottom);
  dependencyMap = tmp3;
  let obj = projectId(504);
  let items = [closure_11];
  stateFromStores = obj.useStateFromStores(items, () => settings.getSettings(projectId));
  obj1 = React;
  const tmp7 = first(React.useState({}), 2);
  first = tmp7[0];
  React = tmp7[1];
  const tmp9 = first(React.useState({}), 2);
  first1 = tmp9[0];
  closure_7 = tmp9[1];
  [c8, c9] = first(React.useState({}), 2);
  const tmp12 = first(React.useState(false), 2);
  first2 = tmp12[0];
  closure_11 = tmp12[1];
  let tmp14 = first(React.useState(false), 2);
  closure_12 = tmp14[1];
  let items1 = [stateFromStores];
  memo = React.useMemo(() => {
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
  memo1 = React.useMemo(() => {
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
  memo2 = React.useMemo(() => {
    let secrets;
    if (stateFromStores != null) {
      secrets = stateFromStores.secrets;
    }
    if (secrets == null) {
      secrets = [];
    }
    return secrets.map((arg0) => {
      closure_0 = arg0;
      const obj = {};
      const merged = Object.assign(arg0);
      obj.def = closure_13.find((key) => {
        let tmp = key.key === name.name;
        if (tmp) {
          tmp = "secret" === key.type;
        }
        return tmp;
      });
      return obj;
    });
  }, items3);
  found = memo.filter((type) => "secret" !== type.type);
  map = new Map(memo2.map((name) => {
    const items = [name.name, name];
    return items;
  }));
  if (scopeKeys == null) {
    scopeKeys = [];
  }
  const found1 = scopeKeys.filter((arg0) => {
    closure_0 = arg0;
    let someResult = found.some((key) => key.key === closure_0);
    if (!someResult) {
      someResult = map.has(arg0);
    }
    return someResult;
  });
  let tmp19 = !tmp17;
  let tmp11 = first(React.useState({}), 2);
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
    const intl = projectId(closure_2[12]).intl;
    obj[1] = intl.string(notifyAgent(closure_2[13]).jczqxT);
    obj[2] = found.length;
    const items = [obj, ];
    obj = { id: "secrets", label: null, count: null, page: null };
    const intl2 = projectId(closure_2[12]).intl;
    obj[1] = intl2.string(notifyAgent(closure_2[13]).iD7xfZ);
    obj[2] = memo2.length;
    items[1] = obj;
    return items;
  }, items4);
  let someResult = found1.some((arg0) => map.has(arg0));
  const segmentedControlState = projectId(9792).useSegmentedControlState({ items: memo3, pageWidth: tmp24, defaultIndex: num, onSetActiveIndex: tmp22 });
  if (tmp19) {
    let tmp28 = 1 === tmp21;
  } else {
    tmp28 = 0 === found.length;
  }
  const items5 = [memo, first1, memo1, first];
  memo4 = obj1.useMemo(() => {
    let obj = {};
    function _loop(arg0) {
      closure_0 = arg0;
      found = closure_1_13.find((key) => key.key === closure_0);
      if (null != found) {
        let tmp3 = closure_1_14[arg0];
        if (tmp3 == null) {
          tmp3 = "checkbox" !== found.type && "";
          const tmp4 = "checkbox" !== found.type && "";
        }
        if (closure_1 !== tmp3) {
          if (typeof str !== "string") {
            let tmp6 = str;
          } else {
            tmp6 = null;
          }
          closure_0[arg0] = tmp6;
        }
      }
      return 1;
    }
    const entries = Object.entries(first);
    while (tmp2 !== undefined) {
      let tmp4 = first;
      let tmp5 = first(tmp3, 2);
      closure_1 = tmp5[1];
      let _loopResult = _loop(tmp5[0]);
      continue;
    }
    obj = {};
    const entries1 = Object.entries(first1);
    tmp2 = entries[Symbol.iterator]();
    while (tmp8 !== undefined) {
      let tmp10 = first;
      let tmp11 = first(tmp9, 2);
      [tmp12, str] = tmp11;
      let str2 = str;
      if ("" !== str.trim()) {
        let tmp13 = tmp12;
        let tmp14 = str;
        obj[tmp12] = str2.trim();
      }
      continue;
    }
    if (Object.keys(obj).length > 0) {
      obj = { values: null };
      obj[0] = obj;
      obj1 = obj;
    } else {
      obj1 = {};
    }
    const merged = Object.assign(obj1);
    if (Object.keys(obj).length > 0) {
      const obj3 = { secrets: null };
      obj3[0] = obj;
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
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_3 = tmp4;
            closure_2 = tmp8;
            let rebuildRequired;
            let project;
            if (closure_1_20) {
              if (!closure_1_10) {
                closure_1_11(true);
                closure_1_12(false);
                c5 = 2;
                c6 = 3;
                c7 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_10(closure_1_0, closure_1_19);
                return obj1;
              }
            }
            c7 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c5 = 1;
            closure_1_12(true);
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_1_11(false);
            c7 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            rebuildRequired = arg1.rebuildRequired;
            if (!project) {
              if (!c7.hasPendingSettingsRequest(rebuildRequired)) {
                if (rebuildRequired) {
                  closure_1_8(rebuildRequired);
                } else {
                  project = closure_1_12.getProject(rebuildRequired);
                  let application_id;
                  if (project != null) {
                    application_id = project.application_id;
                  }
                  rebuildRequired = application_id;
                  if (application_id == null) {
                    rebuildRequired = null;
                  }
                  closure_1_1(closure_1_2[15])(rebuildRequired);
                  let prop;
                  const tmp19 = closure_1_1(closure_1_2[15]);
                  if (project != null) {
                    prop = project.preview_application_id;
                  }
                  project = prop;
                  if (prop == null) {
                    project = null;
                  }
                  closure_1_1(closure_1_2[15])(project);
                  const tmp27 = closure_1_1(closure_1_2[15]);
                }
              }
              obj = closure_1_1(closure_1_2[16]);
              obj.hideActionSheet(closure_1_16);
              c5 = 1;
            }
            const intl = closure_1_0(closure_1_2[12]).intl;
            closure_1_9(closure_1_0, intl.string(closure_1_1(closure_1_2[13]).gqJFu0));
          }
          c5 = 0;
          closure_1_11(false);
        }
        c5 = 0;
        closure_1_11(false);
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
  obj[0] = intl.string(notifyAgent(3547).gTMvzD);
  obj[1] = memo(projectId(7149).BottomSheetTitleHeader, obj);
  obj1 = { style: tmp3.container, children: null };
  let tmp32Result = null;
  if (null != note) {
    tmp32Result = null;
    if ("" !== note) {
      let obj2 = { variant: "text-sm/normal", color: "text-default", children: null };
      obj2[2] = note;
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
      obj3[2] = intl2.string(tmp(3547).URnN4B);
      tmp32Result = tmp32(tmp4(4556).Text, obj3);
    }
  }
  items7[1] = tmp32Result;
  if (found1.length > 0) {
    let obj4 = { style: null, children: null };
    obj4[0] = tmp3.section;
    let tmp32Result1 = null;
    if (someResult) {
      const obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl4 = tmp4(1114).intl;
      obj5[2] = intl4.string(tmp(3547)["Hl+eu7"]);
      tmp32Result1 = tmp32(tmp4(4556).Text, obj5);
    }
    const items8 = [
      tmp32Result1,
      found1.map(function renderScoped(arg0) {
          closure_0 = arg0;
          const value = map.get(arg0);
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
    obj4[1] = items8;
    let tmp33Result = tmp33(tmp34, obj4);
  } else {
    let tmp32Result2 = null;
    if (tmp19) {
      const obj6 = { onLayout: null, children: null };
      obj6[0] = callback;
      const obj7 = { state: null };
      obj7[0] = segmentedControlState;
      obj6[1] = tmp32(tmp4(9793).SegmentedControl, obj7);
      tmp32Result2 = tmp32(tmp34, obj6);
    }
    const items9 = [tmp32Result2, ];
    const obj8 = { style: null, children: null };
    obj8[0] = tmp3.section;
    if (tmp28) {
      const obj9 = { variant: "text-xs/normal", color: "text-muted", children: null };
      let intl3 = tmp4(1114).intl;
      obj9[2] = intl3.string(tmp(3547)["Hl+eu7"]);
      const items10 = [tmp32(tmp4(4556).Text, obj9), memo2.map(renderSecret)];
      obj8[1] = items10;
      tmp33Result = tmp33(tmp34, obj8);
    } else {
      obj8[1] = found.map(renderValueSetting);
      tmp33Result = tmp32(tmp34, obj8);
    }
    const obj10 = { children: null };
    items9[1] = tmp33Result;
    obj10[0] = items9;
    tmp33Result = tmp33(memo2, obj10);
    const tmp37 = memo2;
  }
  items7[2] = tmp33Result;
  let tmp32Result3 = null;
  if (tmp14[0]) {
    const obj11 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl5 = tmp4(1114).intl;
    obj11[2] = intl5.string(tmp(3547).n02OEo);
    tmp32Result3 = tmp32(tmp4(4556).Text, obj11);
  }
  items7[3] = tmp32Result3;
  const obj12 = { text: null, variant: "primary", loading: null, disabled: null, onPress: null };
  const intl6 = tmp4(1114).intl;
  obj12[0] = intl6.string(notifyAgent(3547).Tuz9vw);
  obj12[2] = first2;
  obj12[3] = !(null != memo4.values || null != memo4.secrets);
  obj12[4] = callback1;
  items7[4] = memo(projectId(4975).Button, obj12);
  obj1[1] = items7;
  obj[2] = memo1(first1, obj1);
  return memo(projectId(7198).ActionSheet, obj);
};
export const VIBEGRATIONS_SETTINGS_SHEET_KEY = "VibegrationsSettingsSheet";