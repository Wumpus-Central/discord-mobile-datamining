// === Module 12150: ConjureSettingsSheet ===

// Module 12150 (ConjureSettingsSheet)
import nativeDefault from "native" /* 587 */;
import _modDef3830 from "module_3830" /* 3830 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10698 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 10712 */;
import ConjureProjectStore_mod from "ConjureProjectStore" /* 6773 */;

const require = fn;
const View = fn(17).View;
let ConjureProjectStore = fn(6773);
({ canPublishProject: closure_9, isProjectOwner: c10 } = ConjureProjectStore);
let ConjureProjectStore = ConjureProjectStore_mod;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { project: _modDef3830.W0eQfN, app: _modDef3830.lFaJYF, secrets: _modDef3830.vDpCPU, model: _modDef3830.Rs3qc9, linked: _modDef3830.fBEHdq, experimental: _modDef3830["0Pe9uw"] };
const createStyles = fn(4971);
let closure_15 = createStyles.createStyles((paddingBottom) => {
  obj = { container: { gap: nativeDefault.space.PX_16, paddingBottom } };
  return obj;
});
fn(558);
const ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsTabStrip(tabs) {
  const cResult = tabs(576).c(22);
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
        class I {
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
        obj2.onSetActiveIndex = I;
        cResult[10] = tmp5;
        cResult[11] = tmp3;
        cResult[12] = bound;
        cResult[13] = I;
        cResult[14] = obj2;
      }
      class I {
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
      cResult[9] = I;
    }
    const index = tabs.indexOf(selected);
    cResult[5] = tabs;
    cResult[6] = index;
    tmp9 = index;
  }
  const tmp2 = _slicedToArray(noop.useState(0), 2);
}) : (function SettingsTabStrip(tabs) {
  tabs = tabs.tabs;
  ({ selected, onSelect: importDefault } = tabs);
  dependencyMap = undefined;
  let setActiveIndex;
  [tmp2, c2] = setActiveIndex(noop.useState(0), 2);
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
  const tmp = setActiveIndex(noop.useState(0), 2);
  obj = tabs(8901);
  const segmentedControlState = obj.useSegmentedControlState({
    items: memo,
    pageWidth: tmp2,
    defaultIndex: Math.max(0, tabs.indexOf(selected)),
    onSetActiveIndex(arg0) {
      if (null != tabs[arg0]) {
        importDefault(tmp);
      }
    }
  });
  const index = tabs.indexOf(selected);
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items1 = [index, setActiveIndex];
  const effect = noop.useEffect(() => {
    if (index >= 0) {
      setActiveIndex(tmp, false);
    }
  }, items1);
  const obj3 = { onLayout: callback, children: null };
  if (tabs.length > 3) {
    const obj4 = { state: segmentedControlState };
    let tmp10Result = closure_12(tmp5(12204).Tabs, obj4);
  } else {
    const obj5 = { state: segmentedControlState };
    tmp10Result = closure_12(tmp5(9146).SegmentedControl, obj5);
  }
  obj3.children = tmp10Result;
  return closure_12(View, obj3);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSettingsSheet(projectId) {
  const cResult = projectId(576).c(94);
  projectId = projectId.projectId;
  ({ initialTab, scopeKeys, note, notifyAgent, onSaved, isPreview } = projectId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  closure_15(ref(5593)(first).insets.bottom);
  ref = noop.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureProjectStore];
    cResult[1] = items;
    let tmp8 = items;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== projectId) {
    const fn = function w() {
      return ConjureProjectStore.getProject(projectId);
    };
    const items1 = [projectId];
    cResult[2] = projectId;
    cResult[3] = fn;
    cResult[4] = items1;
    let tmp11 = items1;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  obj = projectId(576);
  const tmp5 = ref;
  const stateFromStores = projectId(504).useStateFromStores(tmp8, tmp10, tmp11);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConjureModelSettingsStore];
    cResult[5] = items2;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== projectId) {
    class O {
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
    cResult[7] = O;
    cResult[8] = items3;
    let tmp16 = items3;
  } else {
    class O {
      constructor() {
        modelSettings = closure_8.getModelSettings(closure_0);
        tierSettings = undefined;
        if (modelSettings != null) {
          tierSettings = modelSettings.tierSettings;
        }
        return null != tierSettings;
      }
    }
    tmp16 = cResult[8];
  }
  const tmpResult = projectId(504);
  const stateFromStores1 = projectId(504).useStateFromStores(tmp13, O, tmp16);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
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
    const tmp18 = items4;
  } else {
    class O {
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
    class N {
      constructor() {
        return "open" === closure_7.getConnState(closure_0);
      }
    }
    const items5 = [projectId];
    cResult[10] = projectId;
    cResult[11] = items5;
    cResult[12] = N;
    let tmp20 = N;
    const tmp19 = items5;
  } else {
    class N {
      constructor() {
        return "open" === closure_7.getConnState(closure_0);
      }
    }
    tmp20 = cResult[12];
  }
  const tmpResult3 = projectId(504);
  const stateFromStores2 = projectId(504).useStateFromStores(tmp18, tmp20, tmp19);
  if (cResult[13] !== stateFromStores) {
    class N {
      constructor() {
        return "open" === closure_7.getConnState(closure_0);
      }
    }
    if (tmp23) {
      class N {
        constructor() {
          return "open" === closure_7.getConnState(closure_0);
        }
      }
      tmp23 = closure_10(stateFromStores);
    }
    cResult[13] = stateFromStores;
    cResult[14] = tmp23;
    const tmp22 = tmp23;
  } else {
    class N {
      constructor() {
        return "open" === closure_7.getConnState(closure_0);
      }
    }
  }
  dependencyMap = tmp22;
  if (cResult[15] !== stateFromStores) {
    class N {
      constructor() {
        return "open" === closure_7.getConnState(closure_0);
      }
    }
    if (tmp25) {
      class N {
        constructor() {
          return "open" === closure_7.getConnState(closure_0);
        }
      }
      tmp25 = closure_9(stateFromStores);
    }
    cResult[15] = stateFromStores;
    cResult[16] = tmp25;
  } else {
    class N {
      constructor() {
        return "open" === closure_7.getConnState(closure_0);
      }
    }
  }
  const tmpResult4 = projectId(504);
  if (stateFromStores != null) {
    class N {
      constructor() {
        return "open" === closure_7.getConnState(closure_0);
      }
    }
  }
  if (undefined == null) {
    class N {
      constructor() {
        return "open" === closure_7.getConnState(closure_0);
      }
    }
  }
  const tmp5Result = tmp5(12151);
  closure_3 = tmp5(12151)(projectId, undefined);
  if (cResult[17] === isPreview) {
    class N {
      constructor() {
        return "open" === closure_7.getConnState(closure_0);
      }
    }
  }
  cResult[17] = isPreview;
  cResult[18] = note;
  cResult[19] = notifyAgent;
  cResult[20] = onSaved;
  cResult[21] = projectId;
  cResult[22] = scopeKeys;
  cResult[23] = { projectId, scopeKeys, note, notifyAgent, onSaved, isPreview };
  let obj3 = { projectId, scopeKeys, note, notifyAgent, onSaved, isPreview };
  const tmp5ResultResult = tmp5(12151)(projectId, undefined);
}) : (function ConjureSettingsSheet(projectId) {
  projectId = projectId.projectId;
  let stateFromStores1;
  asyncGeneratorStep = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  let isScoped;
  let loaded;
  closure_10 = undefined;
  let memo;
  closure_12 = undefined;
  let found;
  let saving;
  let canSave;
  ({ guildId, initialTab, scopeKeys, note, notifyAgent, onSaved, isPreview } = projectId);
  const ref = noop.useRef(null);
  const tmp3 = canSave(ref(stateFromStores1[13])({ includeKeyboardHeight: true }).insets.bottom);
  let items = [memo];
  const items1 = [projectId];
  const stateFromStores = projectId(stateFromStores1[14]).useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  const obj2 = projectId(stateFromStores1[14]);
  const items2 = [isScoped];
  const items3 = [projectId];
  stateFromStores1 = projectId(stateFromStores1[14]).useStateFromStores(items2, () => {
    const modelSettings = ConjureModelSettingsStore.getModelSettings(projectId);
    let tierSettings;
    if (modelSettings != null) {
      tierSettings = modelSettings.tierSettings;
    }
    return null != tierSettings;
  }, items3);
  let obj3 = projectId(stateFromStores1[14]);
  const items4 = [closure_7];
  const items5 = [projectId];
  let tmp9 = null != stateFromStores;
  const stateFromStores2 = projectId(stateFromStores1[14]).useStateFromStores(items4, () => "open" === ConjureConnectionStore.getConnState(projectId), items5);
  if (tmp9) {
    tmp9 = closure_10(stateFromStores);
  }
  asyncGeneratorStep = tmp9;
  let tmp11 = null != stateFromStores;
  if (tmp11) {
    tmp11 = loaded(stateFromStores);
  }
  _slicedToArray = tmp11;
  let guild_id;
  let obj4 = projectId(stateFromStores1[14]);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  const tmpResultResult = ref(stateFromStores1[15])(projectId, guild_id);
  noop = tmpResultResult;
  const tmp16 = ref(stateFromStores1[16])({ projectId, scopeKeys, note, notifyAgent, onSaved, isPreview });
  closure_6 = tmp16;
  const tmp17 = ref(stateFromStores1[17])(projectId, tmp11);
  closure_7 = tmp18;
  isScoped = tmp16.isScoped;
  loaded = tmp16.loaded;
  if (loaded) {
    loaded = tmp16.valueCount > 0 || 0 === tmp16.secretCount;
    const tmp19 = tmp16.valueCount > 0 || 0 === tmp16.secretCount;
  }
  closure_10 = tmp20;
  const items6 = [tmp11, tmp17.callers.length > 0, stateFromStores1, tmp9, loaded, tmp16.secretCount > 0];
  memo = obj.useMemo(() => {
    let tmp2 = closure_3;
    if (!closure_3) {
      tmp2 = closure_4;
    }
    const items = [];
    if (tmp2) {
      items.push("project");
    }
    if (loaded) {
      items.push("app");
    }
    if (closure_10) {
      items.push("secrets");
    }
    if (stateFromStores1) {
      items.push("model");
    }
    if (closure_7) {
      items.push("linked");
    }
    if (closure_3) {
      items.push("experimental");
    }
    return items;
  }, items6);
  const tmp21 = _slicedToArray(noop.useState(null), 2);
  closure_12 = tmp22;
  const items7 = [tmp21[0], initialTab];
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
  saving = tmp9;
  if (tmp9) {
    saving = tmpResultResult.saving;
  }
  if (!saving) {
    saving = tmp16.saving;
  }
  canSave = tmp16.canSave;
  if (!canSave) {
    let canSave2 = !isScoped;
    if (!isScoped) {
      canSave2 = tmp9;
    }
    if (canSave2) {
      canSave2 = tmpResultResult.canSave;
    }
    canSave = canSave2;
  }
  const items8 = [tmp16, canSave, tmp9, tmpResultResult, saving, isScoped, found, memo];
  const callback = obj.useCallback(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            closure_128_3 = undefined;
            if (canSave) {
              if (!saving) {
                let validateResult = null;
                if (canSave.canSave) {
                  validateResult = canSave.validate();
                }
                if (null == validateResult) {
                  let submitResult = null;
                  if (!isScoped) {
                    submitResult = null;
                    if (closure_3) {
                      submitResult = closure_5.submit();
                    }
                  }
                  const items = [submitResult, canSave.submit()];
                  c2 = 1;
                  c3 = 1;
                  const obj5 = { value: Promise.all(items), done: false };
                  return obj5;
                } else if (!isScoped) {
                  let str2 = "app";
                  if ("secretFields" === validateResult) {
                    str2 = "secrets";
                  }
                  closure_12(str2);
                }
              }
            }
            c3 = 3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          closure_128_1 = closure_1_4(closure_128_0, 2);
          closure_128_2 = closure_128_1[0];
          closure_128_3 = closure_128_1[1];
          if (null == closure_128_2) {
            if (closure_128_3) {
              const current = closure_129_1.current;
              if (current != null) {
                current.closeActionSheet();
              }
            }
          }
          if (null == closure_128_2) {
            let str = "secrets";
            if ("secrets" !== closure_129_13) {
              if (closure_129_11.includes("app")) {
                str = "app";
              }
              closure_129_12(str);
            }
          }
        }
        closure_129_12(closure_128_2);
      } catch (tmp31) {
        c3 = tmp;
        throw tmp31;
      }
    }
  }), items8);
  let obj5 = { ref, startExpanded: true, keyboardShouldPersistTaps: "always", dismissAccessibilityLabel: null, header: null, children: null };
  const intl = tmp5(tmp2[18]).intl;
  obj5.dismissAccessibilityLabel = intl.string(ref(stateFromStores1[8]).bA4VU5);
  const intl2 = tmp5(tmp2[18]).intl;
  const tmpResult2 = ref(stateFromStores1[8]);
  const obj6 = {
    title: intl2.string(isScoped ? tmpResult2["jZjP+I"] : tmpResult2.I2XSKe),
    trailing: closure_12(projectId(stateFromStores1[19]).ActionSheetCloseButton, {
      onPress() {
        const current = ref.current;
        let closeActionSheetResult;
        if (current != null) {
          closeActionSheetResult = current.closeActionSheet();
        }
        return closeActionSheetResult;
      }
    })
  };
  obj5.header = closure_12(projectId(stateFromStores1[20]).BottomSheetTitleHeader, obj6);
  const obj8 = { style: tmp3.container, children: null };
  let tmp25Result = null;
  if (!isScoped) {
    tmp25Result = null;
    if (memo.length > 1) {
      tmp25Result = null;
      if (null != found) {
        const obj9 = { tabs: memo, selected: found, onSelect: tmp22 };
        tmp25Result = tmp25(closure_16, obj9, memo.join(","));
      }
    }
  }
  const items9 = [tmp25Result, , , , , , , , ];
  if (isScoped) {
    let fields = tmp16.fields;
  } else {
    fields = null;
  }
  items9[1] = fields;
  let tmp27Result = null;
  if (!isScoped) {
    tmp27Result = null;
    if ("project" === found) {
      const obj10 = { spacing: tmp(tmp2[10]).space.PX_24, children: null };
      let fields1 = null;
      if (tmp9) {
        fields1 = tmpResultResult.fields;
      }
      const items10 = [fields1, ];
      const obj11 = { projectId, canEdit: tmp11 };
      items10[1] = tmp25(tmp(tmp2[22]), obj11, projectId);
      obj10.children = items10;
      tmp27Result = tmp27(tmp5(tmp2[21]).Stack, obj10);
    }
  }
  items9[2] = tmp27Result;
  let tmp25Result4 = null;
  if (!isScoped) {
    tmp25Result4 = null;
    if ("linked" === found) {
      const obj12 = { linkedApps: tmp17 };
      tmp25Result4 = tmp25(tmp(tmp2[23]), obj12);
    }
  }
  items9[3] = tmp25Result4;
  let experimentalFields = null;
  if (!isScoped) {
    experimentalFields = null;
    if ("experimental" === found) {
      experimentalFields = tmpResultResult.experimentalFields;
    }
  }
  items9[4] = experimentalFields;
  let secretFields = null;
  if (!isScoped) {
    secretFields = null;
    if ("secrets" === found) {
      secretFields = tmp16.secretFields;
    }
  }
  items9[5] = secretFields;
  let tmp25Result5 = null;
  if (!isScoped) {
    tmp25Result5 = null;
    if ("model" === found) {
      const obj13 = { projectId };
      tmp25Result5 = tmp25(tmp5(tmp2[24]).ConjureModelSettingsContent, obj13);
    }
  }
  items9[6] = tmp25Result5;
  let tmp38 = null;
  if (!isScoped) {
    tmp38 = null;
    if (null == found) {
      if (stateFromStores2) {
        const obj14 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl3 = tmp5(tmp2[18]).intl;
        obj14.children = intl3.string(tmp(tmp2[8]).lJJayk);
        let tmp25Result6 = tmp25(tmp5(tmp2[25]).Text, obj14);
      } else {
        tmp25Result6 = tmp25(tmp5(tmp2[26]).ActivityIndicator, {});
      }
    }
  }
  items9[7] = tmp38;
  const intl4 = tmp5(tmp2[18]).intl;
  if (isScoped) {
    let A7dQd9 = tmp(tmp2[8]).A7dQd9;
  } else {
    A7dQd9 = tmp5(tmp2[18]).t["R3BPH+"];
  }
  const obj7 = {
    onPress() {
      const current = ref.current;
      let closeActionSheetResult;
      if (current != null) {
        closeActionSheetResult = current.closeActionSheet();
      }
      return closeActionSheetResult;
    }
  };
  const tmp28 = closure_6;
  const tmpResult = ref(stateFromStores1[15]);
  items9[8] = closure_12(projectId(stateFromStores1[27]).Button, { text: intl4.string(A7dQd9), variant: "primary", loading: saving, disabled: !canSave, onPress: callback });
  obj8.children = items9;
  obj5.children = found(tmp28, obj8);
  return closure_12(projectId(stateFromStores1[28]).ActionSheet, obj5);
});
export const CONJURE_SETTINGS_SHEET_KEY = "ConjureSettingsSheet";