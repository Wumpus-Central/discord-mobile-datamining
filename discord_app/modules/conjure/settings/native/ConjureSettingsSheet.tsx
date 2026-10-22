// discord_app/modules/conjure/settings/native/ConjureSettingsSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3830 from "../../intl/ConjureUntranslated.messages.js";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureConnectionStore from "../../connection/ConjureConnectionStore.tsx";
import ConjureModelSettingsStore from "../../model_settings/ConjureModelSettingsStore.tsx";
import ConjureProjectStore_mod from "../../projects/ConjureProjectStore.tsx";

const useConjureProjectSettingsFormDefault = tmp5(11744);
const require = fn;
const View = fn(17).View;
let ConjureProjectStore = fn(6759);
({ canPublishProject: closure_9, isProjectOwner: c10 } = ConjureProjectStore);
let ConjureProjectStore = ConjureProjectStore_mod;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const ConjureSettingsSheet = "ConjureSettingsSheet";
let obj = {
  project: _modDef3830.W0eQfN,
  app: _modDef3830.lFaJYF,
  secrets: _modDef3830.vDpCPU,
  model: _modDef3830.Rs3qc9,
  linked: _modDef3830.fBEHdq,
  experimental: _modDef3830["0Pe9uw"],
};
const createStyles = fn(4969);
let closure_16 = createStyles.createStyles((paddingBottom) => {
  obj = { container: { gap: nativeDefault.space.PX_16, paddingBottom } };
  return obj;
});
fn(558);
const ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SettingsTabStrip(tabs) {
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
              intl = tabs(closure_2[19]).intl;
              obj.label = intl.string(closure_1_15[tabs]);
              return obj;
            }
          }
          cResult[3] = C;
        } else {
          class C {
            constructor(arg0) {
              obj = { id: tabs, label: null, page: null };
              intl = tabs(closure_2[19]).intl;
              obj.label = intl.string(closure_1_15[tabs]);
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
            intl = tabs(closure_2[19]).intl;
            obj.label = intl.string(closure_1_15[tabs]);
            return obj;
          }
        }
        if (cResult[4] === selected) {
          class C {
            constructor(arg0) {
              obj = { id: tabs, label: null, page: null };
              intl = tabs(closure_2[19]).intl;
              obj.label = intl.string(closure_1_15[tabs]);
              return obj;
            }
          }
          const _Math = Math;
          const bound = Math.max(0, tmp9);
          if (cResult[7] === onSelect) {
            class C {
              constructor(arg0) {
                obj = { id: tabs, label: null, page: null };
                intl = tabs(closure_2[19]).intl;
                obj.label = intl.string(closure_1_15[tabs]);
                return obj;
              }
            }
            if (cResult[10] === tmp5) {
              class C {
                constructor(arg0) {
                  obj = { id: tabs, label: null, page: null };
                  intl = tabs(closure_2[19]).intl;
                  obj.label = intl.string(closure_1_15[tabs]);
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
    }
  : function SettingsTabStrip(tabs) {
      tabs = tabs.tabs;
      const onSelect = tabs.onSelect;
      dependencyMap = undefined;
      [tmp2, c2] = noop.useState(0);
      const items = [tabs];
      const callback = noop.useCallback((nativeEvent) => {
        _undefined(nativeEvent.nativeEvent.layout.width);
      }, []);
      const memo = noop.useMemo(
        () =>
          tabs.map((id) => {
            obj = { id, label: null, page: null };
            const intl = tabs(_undefined[19]).intl;
            obj.label = intl.string(closure_1_15[id]);
            return obj;
          }),
        items,
      );
      const tmp = _slicedToArray(noop.useState(0), 2);
      obj = tabs(8869);
      const segmentedControlState = obj.useSegmentedControlState({
        items: memo,
        pageWidth: tmp2,
        defaultIndex: Math.max(0, tabs.indexOf(tabs.selected)),
        onSetActiveIndex(arg0) {
          if (null != tabs[arg0]) {
            onSelect(tmp);
          }
        },
      });
      const obj3 = { onLayout: callback, children: null };
      if (tabs.length > 3) {
        const obj4 = { state: segmentedControlState };
        let tmp8Result = closure_12(tmp5(11792).Tabs, obj4);
      } else {
        const obj5 = { state: segmentedControlState };
        tmp8Result = closure_12(tmp5(9115).SegmentedControl, obj5);
      }
      obj3.children = tmp8Result;
      return closure_12(View, obj3);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureSettingsSheet(projectId) {
      const cResult = projectId(576).c(93);
      projectId = projectId.projectId;
      ({ initialTab, scopeKeys, note, notifyAgent, onSaved, isPreview } = projectId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { includeKeyboardHeight: true };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      closure_16(useSafeAreaInsetsKeyboardAwareDefault(first).insets.bottom);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ConjureProjectStore];
        cResult[1] = items;
        let tmp7 = items;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== projectId) {
        class K {
          constructor() {
            return closure_11.getProject(closure_0);
          }
        }
        const items1 = [projectId];
        cResult[2] = projectId;
        cResult[3] = K;
        cResult[4] = items1;
        let tmp10 = items1;
      } else {
        class K {
          constructor() {
            return closure_11.getProject(closure_0);
          }
        }
        tmp10 = cResult[4];
      }
      obj = projectId(576);
      const stateFromStores = projectId(504).useStateFromStores(tmp7, K, tmp10);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class K {
          constructor() {
            return closure_11.getProject(closure_0);
          }
        }
        const items2 = [ConjureModelSettingsStore];
        cResult[5] = items2;
        const tmp12 = items2;
      } else {
        class K {
          constructor() {
            return closure_11.getProject(closure_0);
          }
        }
      }
      if (cResult[6] !== projectId) {
        class R {
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
        cResult[7] = R;
        cResult[8] = items3;
        let tmp14 = items3;
      } else {
        class R {
          constructor() {
            modelSettings = closure_8.getModelSettings(closure_0);
            tierSettings = undefined;
            if (modelSettings != null) {
              tierSettings = modelSettings.tierSettings;
            }
            return null != tierSettings;
          }
        }
        tmp14 = cResult[8];
      }
      const tmpResult = projectId(504);
      const stateFromStores1 = projectId(504).useStateFromStores(tmp12, R, tmp14);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
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
        const tmp16 = items4;
      } else {
        class R {
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
        let tmp18 = N;
        const tmp17 = items5;
      } else {
        class N {
          constructor() {
            return "open" === closure_7.getConnState(closure_0);
          }
        }
        tmp18 = cResult[12];
      }
      const tmpResult3 = projectId(504);
      const stateFromStores2 = projectId(504).useStateFromStores(tmp16, tmp18, tmp17);
      if (cResult[13] !== stateFromStores) {
        class N {
          constructor() {
            return "open" === closure_7.getConnState(closure_0);
          }
        }
        let tmp21 = null != stateFromStores;
        if (tmp21) {
          class N {
            constructor() {
              return "open" === closure_7.getConnState(closure_0);
            }
          }
          tmp21 = closure_10(stateFromStores);
        }
        cResult[13] = stateFromStores;
        cResult[14] = tmp21;
        const tmp20 = tmp21;
      } else {
        class N {
          constructor() {
            return "open" === closure_7.getConnState(closure_0);
          }
        }
      }
      importDefault = tmp20;
      if (cResult[15] !== stateFromStores) {
        class N {
          constructor() {
            return "open" === closure_7.getConnState(closure_0);
          }
        }
        let tmp23 = null != stateFromStores;
        if (tmp23) {
          class N {
            constructor() {
              return "open" === closure_7.getConnState(closure_0);
            }
          }
          tmp23 = closure_9(stateFromStores);
        }
        cResult[15] = stateFromStores;
        cResult[16] = tmp23;
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
      const tmp5Result = useConjureProjectSettingsFormDefault;
      dependencyMap = useConjureProjectSettingsFormDefault(projectId, undefined);
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
      const tmp5ResultResult = useConjureProjectSettingsFormDefault(projectId, undefined);
    }
  : function ConjureSettingsSheet(projectId) {
      projectId = projectId.projectId;
      let stateFromStores1;
      dependencyMap = undefined;
      asyncGeneratorStep = undefined;
      _slicedToArray = undefined;
      noop = undefined;
      closure_6 = undefined;
      let isScoped;
      let loaded;
      closure_9 = undefined;
      let memo;
      closure_11 = undefined;
      let found;
      let saving;
      let canSave;
      ({ guildId, initialTab, scopeKeys, note, notifyAgent, onSaved, isPreview } = projectId);
      const tmp3 = closure_16(stateFromStores1(5579)({ includeKeyboardHeight: true }).insets.bottom);
      let items = [closure_11];
      const items1 = [projectId];
      const stateFromStores = projectId(504).useStateFromStores(
        items,
        () => ConjureProjectStore.getProject(projectId),
        items1,
      );
      obj = projectId(504);
      const items2 = [loaded];
      const items3 = [projectId];
      stateFromStores1 = projectId(504).useStateFromStores(
        items2,
        () => {
          const modelSettings = ConjureModelSettingsStore.getModelSettings(projectId);
          let tierSettings;
          if (modelSettings != null) {
            tierSettings = modelSettings.tierSettings;
          }
          return null != tierSettings;
        },
        items3,
      );
      let obj2 = projectId(504);
      const items4 = [isScoped];
      const items5 = [projectId];
      let tmp8 = null != stateFromStores;
      const stateFromStores2 = projectId(504).useStateFromStores(
        items4,
        () => "open" === ConjureConnectionStore.getConnState(projectId),
        items5,
      );
      if (tmp8) {
        tmp8 = memo(stateFromStores);
      }
      dependencyMap = tmp8;
      let tmp10 = null != stateFromStores;
      if (tmp10) {
        tmp10 = closure_9(stateFromStores);
      }
      asyncGeneratorStep = tmp10;
      let guild_id;
      let obj3 = projectId(504);
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      if (guild_id == null) {
        guild_id = guildId;
      }
      const tmpResultResult = stateFromStores1(11744)(projectId, guild_id);
      _slicedToArray = tmpResultResult;
      const tmp15 = stateFromStores1(11760)({ projectId, scopeKeys, note, notifyAgent, onSaved, isPreview });
      noop = tmp15;
      const tmp16 = stateFromStores1(11783)(projectId, tmp10);
      closure_6 = tmp17;
      isScoped = tmp15.isScoped;
      loaded = tmp15.loaded;
      if (loaded) {
        loaded = tmp15.valueCount > 0 || 0 === tmp15.secretCount;
        const tmp18 = tmp15.valueCount > 0 || 0 === tmp15.secretCount;
      }
      closure_9 = tmp19;
      const items6 = [tmp10, tmp16.callers.length > 0, stateFromStores1, tmp8, loaded, tmp15.secretCount > 0];
      memo = noop.useMemo(() => {
        let tmp2 = closure_2;
        if (!closure_2) {
          tmp2 = closure_3;
        }
        const items = [];
        if (tmp2) {
          items.push("project");
        }
        if (loaded) {
          items.push("app");
        }
        if (closure_9) {
          items.push("secrets");
        }
        if (stateFromStores1) {
          items.push("model");
        }
        if (closure_6) {
          items.push("linked");
        }
        if (closure_2) {
          items.push("experimental");
        }
        return items;
      }, items6);
      const tmp20 = _slicedToArray(noop.useState(null), 2);
      closure_11 = tmp21;
      const items7 = [tmp20[0], initialTab];
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
      saving = tmp8;
      if (tmp8) {
        saving = tmpResultResult.saving;
      }
      if (!saving) {
        saving = tmp15.saving;
      }
      canSave = tmp15.canSave;
      if (!canSave) {
        let canSave2 = !isScoped;
        if (!isScoped) {
          canSave2 = tmp8;
        }
        if (canSave2) {
          canSave2 = tmpResultResult.canSave;
        }
        canSave = canSave2;
      }
      const items8 = [tmp15, canSave, tmp8, tmpResultResult, saving, isScoped, found, memo];
      const callback = noop.useCallback(
        asyncGeneratorStep(async () => {
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
                    if (!saving) {
                      let submitResult = null;
                      if (!isScoped) {
                        submitResult = null;
                        if (closure_2) {
                          submitResult = closure_4.submit();
                        }
                      }
                      const items = [submitResult, closure_5.submit()];
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
                    tmp3(dependencyMap[18]).hideActionSheet(closure_1_14);
                    obj = tmp3(dependencyMap[18]);
                  }
                }
                if (null == closure_128_2) {
                  let str = "secrets";
                  if ("secrets" !== closure_129_12) {
                    if (closure_129_10.includes("app")) {
                      str = "app";
                    }
                    closure_129_11(str);
                  }
                }
              }
              closure_129_11(closure_128_2);
            } catch (tmp31) {
              c3 = tmp;
              throw tmp31;
            }
          }
        }),
        items8,
      );
      let obj5 = { startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null };
      const intl = tmp4(1128).intl;
      obj5.dismissAccessibilityLabel = intl.string(stateFromStores1(3830).bA4VU5);
      const intl2 = tmp4(1128).intl;
      const tmpResult2 = stateFromStores1(3830);
      const tmpResult = stateFromStores1(11744);
      obj5.header = found(projectId(7232).BottomSheetTitleHeader, {
        title: intl2.string(isScoped ? tmpResult2["jZjP+I"] : tmpResult2.I2XSKe),
      });
      const obj7 = { style: tmp3.container, children: null };
      let tmp24Result = null;
      if (!isScoped) {
        tmp24Result = null;
        if (memo.length > 1) {
          tmp24Result = null;
          if (null != found) {
            const obj8 = { tabs: memo, selected: found, onSelect: tmp21 };
            tmp24Result = tmp24(closure_17, obj8, memo.join(","));
          }
        }
      }
      const items9 = [tmp24Result, , , , , , , ,];
      if (isScoped) {
        let fields = tmp15.fields;
      } else {
        fields = null;
      }
      items9[1] = fields;
      let tmp26Result = null;
      if (!isScoped) {
        tmp26Result = null;
        if ("project" === found) {
          const obj9 = { spacing: tmp(587).space.PX_24, children: null };
          let fields1 = null;
          if (tmp8) {
            fields1 = tmpResultResult.fields;
          }
          const items10 = [fields1];
          const obj10 = { projectId, canEdit: tmp10 };
          items10[1] = tmp24(tmp(11785), obj10, projectId);
          obj9.children = items10;
          tmp26Result = tmp26(tmp4(5964).Stack, obj9);
        }
      }
      items9[2] = tmp26Result;
      let tmp24Result4 = null;
      if (!isScoped) {
        tmp24Result4 = null;
        if ("linked" === found) {
          const obj11 = { linkedApps: tmp16 };
          tmp24Result4 = tmp24(tmp(11788), obj11);
        }
      }
      items9[3] = tmp24Result4;
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
          secretFields = tmp15.secretFields;
        }
      }
      items9[5] = secretFields;
      let tmp24Result5 = null;
      if (!isScoped) {
        tmp24Result5 = null;
        if ("model" === found) {
          const obj12 = { projectId };
          tmp24Result5 = tmp24(tmp4(11790).ConjureModelSettingsContent, obj12);
        }
      }
      items9[6] = tmp24Result5;
      let tmp37 = null;
      if (!isScoped) {
        tmp37 = null;
        if (null == found) {
          if (stateFromStores2) {
            const obj13 = { variant: "text-sm/normal", color: "text-muted", children: null };
            const intl3 = tmp4(1128).intl;
            obj13.children = intl3.string(tmp(3830).lJJayk);
            let tmp24Result6 = tmp24(tmp4(5220).Text, obj13);
          } else {
            tmp24Result6 = tmp24(tmp4(6866).ActivityIndicator, {});
          }
        }
      }
      items9[7] = tmp37;
      const intl4 = tmp4(1128).intl;
      if (isScoped) {
        let A7dQd9 = tmp(3830).A7dQd9;
      } else {
        A7dQd9 = tmp4(1128).t["R3BPH+"];
      }
      const obj6 = { title: intl2.string(isScoped ? tmpResult2["jZjP+I"] : tmpResult2.I2XSKe) };
      const tmp27 = closure_6;
      items9[8] = found(projectId(5230).Button, {
        text: intl4.string(A7dQd9),
        variant: "primary",
        loading: saving,
        disabled: !canSave,
        onPress: callback,
      });
      obj7.children = items9;
      obj5.children = saving(tmp27, obj7);
      return found(projectId(7282).ActionSheet, obj5);
    };
export const CONJURE_SETTINGS_SHEET_KEY = "ConjureSettingsSheet";
