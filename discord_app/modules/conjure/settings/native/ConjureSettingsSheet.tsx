// discord_app/modules/conjure/settings/native/ConjureSettingsSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3827 from "../../intl/ConjureUntranslated.messages.js";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureConnectionStore from "../../connection/ConjureConnectionStore.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

const useConjureProjectSettingsFormDefault = tmp5(16871);
const require = fn;
const View = fn(17).View;
let isProjectOwner = fn(11251).isProjectOwner;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const ConjureSettingsSheet = "ConjureSettingsSheet";
let obj = {
  project: _modDef3827.W0eQfN,
  app: _modDef3827.lFaJYF,
  secrets: _modDef3827.vDpCPU,
  model: _modDef3827.Rs3qc9,
};
const createStyles = fn(5090);
let closure_14 = createStyles.createStyles((paddingBottom) => {
  obj = { container: { gap: nativeDefault.space.PX_16, paddingBottom } };
  return obj;
});
fn(558);
const ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SettingsTabStrip(tabs) {
      let Tabs = tabs;
      obj = dependencyMap;
      const cResult = tabs(576).c(18);
      tabs = tabs.tabs;
      ({ selected, onSelect } = tabs);
      const obj2 = tabs(576);
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
          const fn2 = function _(id) {
            obj = { id, label: null, page: null };
            const intl = tabs(1126).intl;
            obj.label = intl.string(closure_1_13[id]);
            return obj;
          };
          cResult[3] = fn2;
          let tmp6 = fn2;
        } else {
          tmp6 = cResult[3];
        }
        const mapped = tabs.map(tmp6);
        cResult[1] = tabs;
        cResult[2] = mapped;
      } else {
        if (cResult[4] === selected) {
          if (cResult[5] === tabs) {
            let tmp9 = cResult[6];
          }
          const _Math = Math;
          const bound = Math.max(0, tmp9);
          if (cResult[7] === onSelect) {
            if (cResult[8] === tabs) {
              let tmp12 = cResult[9];
            }
            if (cResult[10] === tmp5) {
              if (cResult[11] === tmp3) {
                if (cResult[12] === bound) {
                  if (cResult[13] === tmp12) {
                    let tmp13 = cResult[14];
                  }
                  const segmentedControlState = Tabs(8505).useSegmentedControlState(tmp13);
                  if (cResult[15] === segmentedControlState) {
                    if (cResult[16] === tabs.length) {
                      return cResult[17];
                    }
                  }
                  class P {
                    constructor(arg0) {
                      tmp = tabs[tabs];
                      if (null != tmp) {
                        tmp2 = onSelect;
                        tmp3 = onSelect(tmp);
                      }
                      return;
                    }
                  }
                  let obj3 = { onLayout: first, children: null };
                  if (tabs.length > 3) {
                    Tabs = Tabs(12395).Tabs;
                    obj = { state: segmentedControlState };
                    let tmp15Result = tmp15(Tabs, obj);
                  } else {
                    const obj4 = { state: segmentedControlState };
                    tmp15Result = tmp15(Tabs(8752).SegmentedControl, obj4);
                  }
                  obj3.children = tmp15Result;
                  obj3 = tmp15(View, obj3);
                  cResult[15] = segmentedControlState;
                  tabs = tabs.length;
                  cResult[16] = tabs;
                  cResult[17] = obj3;
                  const TabsResult = Tabs(8505);
                }
              }
            }
            const obj5 = { items: tmp5, pageWidth: null, defaultIndex: null, onSetActiveIndex: null };
            class P {
              constructor(arg0) {
                tmp = tabs[tabs];
                if (null != tmp) {
                  tmp2 = onSelect;
                  tmp3 = onSelect(tmp);
                }
                return;
              }
            }
            obj5.defaultIndex = bound;
            obj5.onSetActiveIndex = tmp12;
            cResult[10] = tmp5;
            cResult[11] = tmp3;
            cResult[12] = bound;
            cResult[13] = tmp12;
            cResult[14] = obj5;
            tmp13 = obj5;
          }
          class P {
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
          cResult[9] = P;
          tmp12 = P;
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
            const intl = tabs(_undefined[17]).intl;
            obj.label = intl.string(closure_1_13[id]);
            return obj;
          }),
        items,
      );
      const tmp = _slicedToArray(noop.useState(0), 2);
      obj = tabs(8505);
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
        let tmp8Result = closure_10(tmp5(12395).Tabs, obj4);
      } else {
        const obj5 = { state: segmentedControlState };
        tmp8Result = closure_10(tmp5(8752).SegmentedControl, obj5);
      }
      obj3.children = tmp8Result;
      return closure_10(View, obj3);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureSettingsSheet(projectId) {
      const cResult = projectId(576).c(74);
      projectId = projectId.projectId;
      ({ initialTab, scopeKeys, note, notifyAgent, isPreview } = projectId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { includeKeyboardHeight: true };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      closure_14(useSafeAreaInsetsKeyboardAwareDefault(first).insets.bottom);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ConjureProjectStore];
        cResult[1] = items;
        let tmp7 = items;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== projectId) {
        class F {
          constructor() {
            return closure_8.getProject(closure_0);
          }
        }
        const items1 = [projectId];
        cResult[2] = projectId;
        cResult[3] = F;
        cResult[4] = items1;
        let tmp10 = items1;
      } else {
        class F {
          constructor() {
            return closure_8.getProject(closure_0);
          }
        }
        tmp10 = cResult[4];
      }
      obj = projectId(576);
      const stateFromStores = projectId(504).useStateFromStores(tmp7, F, tmp10);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            return closure_8.getProject(closure_0);
          }
        }
        const items2 = [ConjureConnectionStore];
        cResult[5] = items2;
        const tmp12 = items2;
      } else {
        class F {
          constructor() {
            return closure_8.getProject(closure_0);
          }
        }
      }
      if (cResult[6] !== projectId) {
        class H {
          constructor() {
            modelSettings = closure_7.getModelSettings(closure_0);
            tierSettings = undefined;
            if (modelSettings != null) {
              tierSettings = modelSettings.tierSettings;
            }
            return null != tierSettings;
          }
        }
        const items3 = [projectId];
        cResult[6] = projectId;
        cResult[7] = H;
        cResult[8] = items3;
        let tmp14 = items3;
      } else {
        class H {
          constructor() {
            modelSettings = closure_7.getModelSettings(closure_0);
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
      const stateFromStores1 = projectId(504).useStateFromStores(tmp12, H, tmp14);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class H {
          constructor() {
            modelSettings = closure_7.getModelSettings(closure_0);
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
        class H {
          constructor() {
            modelSettings = closure_7.getModelSettings(closure_0);
            tierSettings = undefined;
            if (modelSettings != null) {
              tierSettings = modelSettings.tierSettings;
            }
            return null != tierSettings;
          }
        }
      }
      if (cResult[10] !== projectId) {
        class L {
          constructor() {
            return "open" === closure_7.getConnState(closure_0);
          }
        }
        const items5 = [projectId];
        cResult[10] = projectId;
        cResult[11] = items5;
        cResult[12] = L;
        let tmp18 = L;
        const tmp17 = items5;
      } else {
        class L {
          constructor() {
            return "open" === closure_7.getConnState(closure_0);
          }
        }
        tmp18 = cResult[12];
      }
      const tmpResult3 = projectId(504);
      const stateFromStores2 = projectId(504).useStateFromStores(tmp16, tmp18, tmp17);
      if (cResult[13] !== stateFromStores) {
        class L {
          constructor() {
            return "open" === closure_7.getConnState(closure_0);
          }
        }
        let tmp21 = null != stateFromStores;
        if (tmp21) {
          class L {
            constructor() {
              return "open" === closure_7.getConnState(closure_0);
            }
          }
          tmp21 = isProjectOwner(stateFromStores);
        }
        cResult[13] = stateFromStores;
        cResult[14] = tmp21;
      } else {
        class L {
          constructor() {
            return "open" === closure_7.getConnState(closure_0);
          }
        }
      }
      const tmpResult4 = projectId(504);
      if (stateFromStores != null) {
        class L {
          constructor() {
            return "open" === closure_7.getConnState(closure_0);
          }
        }
      }
      if (undefined == null) {
        class L {
          constructor() {
            return "open" === closure_7.getConnState(closure_0);
          }
        }
      }
      const tmp5Result = useConjureProjectSettingsFormDefault;
      importDefault = useConjureProjectSettingsFormDefault(projectId, undefined);
      if (cResult[15] === isPreview) {
        class L {
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
    }
  : function ConjureSettingsSheet(projectId) {
      projectId = projectId.projectId;
      let stateFromStores1;
      dependencyMap = undefined;
      asyncGeneratorStep = undefined;
      _slicedToArray = undefined;
      let isScoped;
      let loaded;
      closure_7 = undefined;
      let memo;
      isProjectOwner = undefined;
      let found;
      closure_11 = undefined;
      let canSave;
      ({ guildId, initialTab, scopeKeys, note, notifyAgent, isPreview } = projectId);
      const tmp3 = closure_14(stateFromStores1(6656)({ includeKeyboardHeight: true }).insets.bottom);
      let items = [memo];
      const items1 = [projectId];
      const stateFromStores = projectId(504).useStateFromStores(
        items,
        () => ConjureProjectStore.getProject(projectId),
        items1,
      );
      obj = projectId(504);
      const items2 = [closure_7];
      const items3 = [projectId];
      stateFromStores1 = projectId(504).useStateFromStores(
        items2,
        () => {
          const modelSettings = ConjureConnectionStore.getModelSettings(projectId);
          let tierSettings;
          if (modelSettings != null) {
            tierSettings = modelSettings.tierSettings;
          }
          return null != tierSettings;
        },
        items3,
      );
      let obj2 = projectId(504);
      const items4 = [closure_7];
      const items5 = [projectId];
      let tmp8 = null != stateFromStores;
      const stateFromStores2 = projectId(504).useStateFromStores(
        items4,
        () => "open" === ConjureConnectionStore.getConnState(projectId),
        items5,
      );
      if (tmp8) {
        tmp8 = isProjectOwner(stateFromStores);
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
      const tmpResultResult = stateFromStores1(16871)(projectId, guild_id);
      asyncGeneratorStep = tmpResultResult;
      const tmp13 = stateFromStores1(16876)({ projectId, scopeKeys, note, notifyAgent, isPreview });
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
        return items;
      }, items6);
      const tmp16 = _slicedToArray(isScoped.useState(null), 2);
      isProjectOwner = tmp17;
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
      const callback = isScoped.useCallback(
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
                    if (!closure_11) {
                      let submitResult = isScoped;
                      if (!submitResult) {
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
                if (closure_128_2) {
                  if (closure_128_3) {
                    tmp3(dependencyMap[16]).hideActionSheet(closure_1_12);
                    obj = tmp3(dependencyMap[16]);
                  }
                }
                if (!closure_128_2) {
                  closure_129_9("project");
                }
              }
              let str2 = "secrets";
              if ("secrets" !== closure_129_10) {
                if (closure_129_8.includes("app")) {
                  str2 = "app";
                }
                closure_129_9(str2);
              }
            } catch (tmp27) {
              c3 = tmp;
              throw tmp27;
            }
          }
        }),
        items8,
      );
      let obj5 = { startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null };
      const intl = tmp4(1126).intl;
      obj5.dismissAccessibilityLabel = intl.string(stateFromStores1(3827).bA4VU5);
      const intl2 = tmp4(1126).intl;
      const tmpResult2 = stateFromStores1(3827);
      const tmpResult = stateFromStores1(16871);
      obj5.header = found(projectId(6828).BottomSheetTitleHeader, {
        title: intl2.string(isScoped ? tmpResult2["jZjP+I"] : tmpResult2.I2XSKe),
      });
      const obj7 = { style: tmp3.container, children: null };
      let tmp21Result = null;
      if (!isScoped) {
        tmp21Result = null;
        if (memo.length > 1) {
          tmp21Result = null;
          if (null != found) {
            const obj8 = { tabs: memo, selected: found, onSelect: tmp17 };
            tmp21Result = tmp21(closure_15, obj8, memo.join(","));
          }
        }
      }
      const items9 = [tmp21Result, , , , , ,];
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
      let secretFields = null;
      if (!isScoped) {
        secretFields = null;
        if ("secrets" === found) {
          secretFields = tmp13.secretFields;
        }
      }
      items9[3] = secretFields;
      let tmp21Result3 = null;
      if (!isScoped) {
        tmp21Result3 = null;
        if ("model" === found) {
          const obj9 = { projectId };
          tmp21Result3 = tmp21(tmp4(16877).ConjureModelSettingsContent, obj9);
        }
      }
      items9[4] = tmp21Result3;
      let tmp31 = null;
      if (!isScoped) {
        tmp31 = null;
        if (null == found) {
          if (stateFromStores2) {
            const obj10 = { variant: "text-sm/normal", color: "text-muted", children: null };
            const intl3 = tmp4(1126).intl;
            obj10.children = intl3.string(tmp(3827).lJJayk);
            let tmp21Result4 = tmp21(tmp4(5086).Text, obj10);
          } else {
            tmp21Result4 = tmp21(tmp4(6158).ActivityIndicator, {});
          }
        }
      }
      items9[5] = tmp31;
      const intl4 = tmp4(1126).intl;
      if (isScoped) {
        let A7dQd9 = tmp(3827).A7dQd9;
      } else {
        A7dQd9 = tmp4(1126).t["R3BPH+"];
      }
      const obj6 = { title: intl2.string(isScoped ? tmpResult2["jZjP+I"] : tmpResult2.I2XSKe) };
      const tmp23 = closure_11;
      const tmp24 = loaded;
      items9[6] = found(projectId(5375).Button, {
        text: intl4.string(A7dQd9),
        variant: "primary",
        loading: tmpResultResult.saving || tmp13.saving,
        disabled: !canSave,
        onPress: callback,
      });
      obj7.children = items9;
      obj5.children = tmp23(tmp24, obj7);
      return found(projectId(6885).ActionSheet, obj5);
    };
export const CONJURE_SETTINGS_SHEET_KEY = "ConjureSettingsSheet";
