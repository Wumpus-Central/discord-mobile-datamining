// === Module 17081: ConjureSettingsSheet ===

// Module 17081 (ConjureSettingsSheet)
import nativeDefault from "native" /* 587 */;
import _modDef3849 from "module_3849" /* 3849 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6665 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 13218 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 13227 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10652 */;

const useConjureProjectSettingsFormDefault = tmp5(17082);
const require = fn;
const View = fn(17).View;
const isProjectOwner = fn(10652).isProjectOwner;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const ConjureSettingsSheet = "ConjureSettingsSheet";
let obj = { project: _modDef3849.W0eQfN, app: _modDef3849.lFaJYF, secrets: _modDef3849.vDpCPU, model: _modDef3849.Rs3qc9, experimental: _modDef3849["0Pe9uw"] };
const createStyles = fn(5092);
let closure_15 = createStyles.createStyles((paddingBottom) => {
  obj = { container: { gap: nativeDefault.space.PX_16, paddingBottom } };
  return obj;
});
fn(558);
const ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsTabStrip(tabs) {
  const cResult = tabs(576).c(18);
  tabs = tabs.tabs;
  ({ selected, onSelect } = tabs);
  obj = tabs(576);
  [tmp3, dependencyMap] = noop.useState(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(nativeEvent) {
      dependencyMap(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tabs) {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          obj = { id: tabs, label: null, page: null };
          intl = tabs(closure_2[18]).intl;
          obj.label = intl.string(closure_1_14[tabs]);
          return obj;
        }
      }
      cResult[3] = C;
    } else {
      class C {
        constructor(arg0) {
          obj = { id: tabs, label: null, page: null };
          intl = tabs(closure_2[18]).intl;
          obj.label = intl.string(closure_1_14[tabs]);
          return obj;
        }
      }
    }
    const mapped = tabs.map(C);
    cResult[1] = tabs;
    cResult[2] = mapped;
  } else {
    class C {
      constructor(arg0) {
        obj = { id: tabs, label: null, page: null };
        intl = tabs(closure_2[18]).intl;
        obj.label = intl.string(closure_1_14[tabs]);
        return obj;
      }
    }
    if (cResult[4] === selected) {
      class C {
        constructor(arg0) {
          obj = { id: tabs, label: null, page: null };
          intl = tabs(closure_2[18]).intl;
          obj.label = intl.string(closure_1_14[tabs]);
          return obj;
        }
      }
      const _Math = Math;
      const bound = Math.max(0, tmp9);
      if (cResult[7] === onSelect) {
        class C {
          constructor(arg0) {
            obj = { id: tabs, label: null, page: null };
            intl = tabs(closure_2[18]).intl;
            obj.label = intl.string(closure_1_14[tabs]);
            return obj;
          }
        }
        if (cResult[10] === tmp5) {
          class C {
            constructor(arg0) {
              obj = { id: tabs, label: null, page: null };
              intl = tabs(closure_2[18]).intl;
              obj.label = intl.string(closure_1_14[tabs]);
              return obj;
            }
          }
        }
        const obj2 = { items: tmp5, pageWidth: null, defaultIndex: null, onSetActiveIndex: null };
        class A {
          constructor(arg0) {
            tmp = tabs[tabs];
            if (null != tmp) {
              tmp2 = onSelect;
              tmp3 = onSelect(tmp);
            }
            return;
          }
        }
        obj2.defaultIndex = bound;
        obj2.onSetActiveIndex = A;
        cResult[10] = tmp5;
        cResult[11] = tmp3;
        cResult[12] = bound;
        cResult[13] = A;
        cResult[14] = obj2;
      }
      class A {
        constructor(arg0) {
          tmp = tabs[tabs];
          if (null != tmp) {
            tmp2 = onSelect;
            tmp3 = onSelect(tmp);
          }
          return;
        }
      }
      cResult[7] = onSelect;
      cResult[8] = tabs;
      cResult[9] = A;
    }
    const index = tabs.indexOf(selected);
    cResult[5] = tabs;
    cResult[6] = index;
    tmp9 = index;
  }
  const tmp2 = _slicedToArray(noop.useState(0), 2);
}) : (function SettingsTabStrip(tabs) {
  tabs = tabs.tabs;
  const onSelect = tabs.onSelect;
  dependencyMap = undefined;
  [tmp2, c2] = noop.useState(0);
  const items = [tabs];
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = noop.useMemo(() => tabs.map((id) => {
    obj = { id, label: null, page: null };
    const intl = tabs(_undefined[18]).intl;
    obj.label = intl.string(closure_1_14[id]);
    return obj;
  }), items);
  const tmp = _slicedToArray(noop.useState(0), 2);
  obj = tabs(8530);
  const segmentedControlState = obj.useSegmentedControlState({
    items: memo,
    pageWidth: tmp2,
    defaultIndex: Math.max(0, tabs.indexOf(tabs.selected)),
    onSetActiveIndex(arg0) {
      if (null != tabs[arg0]) {
        onSelect(tmp);
      }
    }
  });
  const obj3 = { onLayout: callback, children: null };
  if (tabs.length > 3) {
    const obj4 = { state: segmentedControlState };
    let tmp8Result = closure_11(tmp5(12359).Tabs, obj4);
  } else {
    const obj5 = { state: segmentedControlState };
    tmp8Result = closure_11(tmp5(8779).SegmentedControl, obj5);
  }
  obj3.children = tmp8Result;
  return closure_11(View, obj3);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSettingsSheet(projectId) {
  const cResult = projectId(576).c(75);
  projectId = projectId.projectId;
  ({ initialTab, scopeKeys, note, notifyAgent, isPreview } = projectId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  closure_15(useSafeAreaInsetsKeyboardAwareDefault(first).insets.bottom);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureProjectStore];
    cResult[1] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== projectId) {
    const fn = function w() {
      return ConjureProjectStore.getProject(projectId);
    };
    const items1 = [projectId];
    cResult[2] = projectId;
    cResult[3] = fn;
    cResult[4] = items1;
    let tmp10 = items1;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  obj = projectId(576);
  const stateFromStores = projectId(504).useStateFromStores(tmp7, tmp9, tmp10);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConjureModelSettingsStore];
    cResult[5] = items2;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] !== projectId) {
    class J {
      constructor() {
        modelSettings = closure_8.getModelSettings(closure_0);
        tierSettings = undefined;
        if (modelSettings != null) {
          tierSettings = modelSettings.tierSettings;
        }
        return null != tierSettings;
      }
    }
    const items3 = [projectId];
    cResult[6] = projectId;
    cResult[7] = J;
    cResult[8] = items3;
    let tmp15 = items3;
  } else {
    class J {
      constructor() {
        modelSettings = closure_8.getModelSettings(closure_0);
        tierSettings = undefined;
        if (modelSettings != null) {
          tierSettings = modelSettings.tierSettings;
        }
        return null != tierSettings;
      }
    }
    tmp15 = cResult[8];
  }
  const tmpResult = projectId(504);
  const stateFromStores1 = projectId(504).useStateFromStores(tmp12, J, tmp15);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor() {
        modelSettings = closure_8.getModelSettings(closure_0);
        tierSettings = undefined;
        if (modelSettings != null) {
          tierSettings = modelSettings.tierSettings;
        }
        return null != tierSettings;
      }
    }
    const items4 = [ConjureConnectionStore];
    cResult[9] = items4;
    const tmp17 = items4;
  } else {
    class J {
      constructor() {
        modelSettings = closure_8.getModelSettings(closure_0);
        tierSettings = undefined;
        if (modelSettings != null) {
          tierSettings = modelSettings.tierSettings;
        }
        return null != tierSettings;
      }
    }
  }
  if (cResult[10] !== projectId) {
    class U {
      constructor() {
        return "open" === closure_7.getConnState(closure_0);
      }
    }
    const items5 = [projectId];
    cResult[10] = projectId;
    cResult[11] = items5;
    cResult[12] = U;
    let tmp19 = U;
    const tmp18 = items5;
  } else {
    class U {
      constructor() {
        return "open" === closure_7.getConnState(closure_0);
      }
    }
    tmp19 = cResult[12];
  }
  const tmpResult3 = projectId(504);
  const stateFromStores2 = projectId(504).useStateFromStores(tmp17, tmp19, tmp18);
  if (cResult[13] !== stateFromStores) {
    class U {
      constructor() {
        return "open" === closure_7.getConnState(closure_0);
      }
    }
    let tmp22 = null != stateFromStores;
    if (tmp22) {
      class U {
        constructor() {
          return "open" === closure_7.getConnState(closure_0);
        }
      }
      tmp22 = isProjectOwner(stateFromStores);
    }
    cResult[13] = stateFromStores;
    cResult[14] = tmp22;
  } else {
    class U {
      constructor() {
        return "open" === closure_7.getConnState(closure_0);
      }
    }
  }
  const tmpResult4 = projectId(504);
  if (stateFromStores != null) {
    class U {
      constructor() {
        return "open" === closure_7.getConnState(closure_0);
      }
    }
  }
  if (undefined == null) {
    class U {
      constructor() {
        return "open" === closure_7.getConnState(closure_0);
      }
    }
  }
  const tmp5Result = useConjureProjectSettingsFormDefault;
  importDefault = useConjureProjectSettingsFormDefault(projectId, undefined);
  if (cResult[15] === isPreview) {
    class U {
      constructor() {
        return "open" === closure_7.getConnState(closure_0);
      }
    }
  }
  cResult[15] = isPreview;
  cResult[16] = note;
  cResult[17] = notifyAgent;
  cResult[18] = projectId;
  cResult[19] = scopeKeys;
  cResult[20] = { projectId, scopeKeys, note, notifyAgent, isPreview };
  let obj3 = { projectId, scopeKeys, note, notifyAgent, isPreview };
  const tmp5ResultResult = useConjureProjectSettingsFormDefault(projectId, undefined);
}) : (function ConjureSettingsSheet(projectId) {
  projectId = projectId.projectId;
  let stateFromStores1;
  dependencyMap = undefined;
  asyncGeneratorStep = undefined;
  _slicedToArray = undefined;
  let isScoped;
  let loaded;
  closure_7 = undefined;
  let memo;
  closure_9 = undefined;
  let found;
  closure_11 = undefined;
  let canSave;
  ({ guildId, initialTab, scopeKeys, note, notifyAgent, isPreview } = projectId);
  const tmp3 = closure_15(stateFromStores1(6665)({ includeKeyboardHeight: true }).insets.bottom);
  let items = [closure_9];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  obj = projectId(504);
  const items2 = [memo];
  const items3 = [projectId];
  stateFromStores1 = projectId(504).useStateFromStores(items2, () => {
    const modelSettings = ConjureModelSettingsStore.getModelSettings(projectId);
    let tierSettings;
    if (modelSettings != null) {
      tierSettings = modelSettings.tierSettings;
    }
    return null != tierSettings;
  }, items3);
  let obj2 = projectId(504);
  const items4 = [closure_7];
  const items5 = [projectId];
  let tmp8 = null != stateFromStores;
  const stateFromStores2 = projectId(504).useStateFromStores(items4, () => "open" === ConjureConnectionStore.getConnState(projectId), items5);
  if (tmp8) {
    tmp8 = found(stateFromStores);
  }
  dependencyMap = tmp8;
  let guild_id;
  let obj3 = projectId(504);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  const tmpResultResult = stateFromStores1(17082)(projectId, guild_id);
  asyncGeneratorStep = tmpResultResult;
  const tmp13 = stateFromStores1(17094)({ projectId, scopeKeys, note, notifyAgent, isPreview });
  _slicedToArray = tmp13;
  isScoped = tmp13.isScoped;
  loaded = tmp13.loaded;
  if (loaded) {
    loaded = tmp13.valueCount > 0 || 0 === tmp13.secretCount;
    const tmp14 = tmp13.valueCount > 0 || 0 === tmp13.secretCount;
  }
  closure_7 = tmp15;
  const items6 = [stateFromStores1, tmp8, loaded, tmp13.secretCount > 0];
  memo = isScoped.useMemo(() => {
    const items = [];
    if (closure_2) {
      items.push("project");
    }
    if (loaded) {
      items.push("app");
    }
    if (closure_7) {
      items.push("secrets");
    }
    if (stateFromStores1) {
      items.push("model");
    }
    if (closure_2) {
      items.push("experimental");
    }
    return items;
  }, items6);
  const tmp16 = _slicedToArray(isScoped.useState(null), 2);
  closure_9 = tmp17;
  const items7 = [tmp16[0], initialTab];
  found = items7.find((item) => {
    let hasItem = null != item;
    if (hasItem) {
      hasItem = memo.includes(item);
    }
    return hasItem;
  });
  if (found == null) {
    found = memo[0];
  }
  closure_11 = tmp19;
  canSave = tmp13.canSave;
  if (!canSave) {
    let canSave2 = !isScoped;
    if (!isScoped) {
      canSave2 = tmpResultResult.canSave;
    }
    canSave = canSave2;
  }
  const items8 = [tmp13, canSave, tmpResultResult, tmpResultResult.saving || tmp13.saving, isScoped, found, memo];
  const callback = isScoped.useCallback(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp2;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            closure_128_3 = undefined;
            if (canSave) {
              if (!closure_11) {
                let submitResult = null;
                if (!isScoped) {
                  submitResult = closure_3.submit();
                }
                const items = [submitResult, closure_4.submit()];
                dependencyMap = 1;
                c3 = 1;
                const obj4 = { value: Promise.all(items), done: false };
                return obj4;
              }
            }
            c3 = 3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_128_0 = value;
          closure_128_1 = closure_1_4(closure_128_0, 2);
          closure_128_2 = closure_128_1[0];
          closure_128_3 = closure_128_1[1];
          if (null == closure_128_2) {
            if (closure_128_3) {
              tmp3(dependencyMap[17]).hideActionSheet(ConjureSettingsSheet);
              obj = tmp3(dependencyMap[17]);
            }
          }
          if (null == closure_128_2) {
            let str = "secrets";
            if ("secrets" !== closure_129_10) {
              if (closure_129_8.includes("app")) {
                str = "app";
              }
              closure_129_9(str);
            }
          }
        }
        closure_129_9(closure_128_2);
      } catch (tmp30) {
        c3 = tmp;
        throw tmp30;
      }
    }
  }), items8);
  let obj5 = { startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null };
  const intl = tmp4(1126).intl;
  obj5.dismissAccessibilityLabel = intl.string(stateFromStores1(3849).bA4VU5);
  const intl2 = tmp4(1126).intl;
  const tmpResult2 = stateFromStores1(3849);
  const tmpResult = stateFromStores1(17082);
  obj5.header = closure_11(projectId(6839).BottomSheetTitleHeader, { title: intl2.string(isScoped ? tmpResult2["jZjP+I"] : tmpResult2.I2XSKe) });
  const obj7 = { style: tmp3.container, children: null };
  let tmp21Result = null;
  if (!isScoped) {
    tmp21Result = null;
    if (memo.length > 1) {
      tmp21Result = null;
      if (null != found) {
        const obj8 = { tabs: memo, selected: found, onSelect: tmp17 };
        tmp21Result = tmp21(closure_16, obj8, memo.join(","));
      }
    }
  }
  const items9 = [tmp21Result, , , , , , , ];
  if (isScoped) {
    let fields = tmp13.fields;
  } else {
    fields = null;
  }
  items9[1] = fields;
  let fields1 = null;
  if (!isScoped) {
    fields1 = null;
    if ("project" === found) {
      fields1 = tmpResultResult.fields;
    }
  }
  items9[2] = fields1;
  let experimentalFields = null;
  if (!isScoped) {
    experimentalFields = null;
    if ("experimental" === found) {
      experimentalFields = tmpResultResult.experimentalFields;
    }
  }
  items9[3] = experimentalFields;
  let secretFields = null;
  if (!isScoped) {
    secretFields = null;
    if ("secrets" === found) {
      secretFields = tmp13.secretFields;
    }
  }
  items9[4] = secretFields;
  let tmp21Result3 = null;
  if (!isScoped) {
    tmp21Result3 = null;
    if ("model" === found) {
      const obj9 = { projectId };
      tmp21Result3 = tmp21(tmp4(17099).ConjureModelSettingsContent, obj9);
    }
  }
  items9[5] = tmp21Result3;
  let tmp32 = null;
  if (!isScoped) {
    tmp32 = null;
    if (null == found) {
      if (stateFromStores2) {
        const obj10 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl3 = tmp4(1126).intl;
        obj10.children = intl3.string(tmp(3849).lJJayk);
        let tmp21Result4 = tmp21(tmp4(5088).Text, obj10);
      } else {
        tmp21Result4 = tmp21(tmp4(6154).ActivityIndicator, {});
      }
    }
  }
  items9[6] = tmp32;
  const intl4 = tmp4(1126).intl;
  if (isScoped) {
    let A7dQd9 = tmp(3849).A7dQd9;
  } else {
    A7dQd9 = tmp4(1126).t["R3BPH+"];
  }
  const obj6 = { title: intl2.string(isScoped ? tmpResult2["jZjP+I"] : tmpResult2.I2XSKe) };
  const tmp23 = canSave;
  const tmp24 = loaded;
  items9[7] = closure_11(projectId(5379).Button, { text: intl4.string(A7dQd9), variant: "primary", loading: tmpResultResult.saving || tmp13.saving, disabled: !canSave, onPress: callback });
  obj7.children = items9;
  obj5.children = tmp23(tmp24, obj7);
  return closure_11(projectId(6899).ActionSheet, obj5);
});
export const CONJURE_SETTINGS_SHEET_KEY = "ConjureSettingsSheet";