// discord_app/modules/conjure/settings/native/ConjureSettingsSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3868 from "../../intl/ConjureUntranslated.messages.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureConnectionStore from "../../connection/ConjureConnectionStore.tsx";
import ConjureModelSettingsStore from "../../model_settings/ConjureModelSettingsStore.tsx";
import ConjureProjectStore_mod from "../../projects/ConjureProjectStore.tsx";

const require = fn;
function SettingsTabStrip(tabs) {
  tabs = tabs.tabs;
  ({ selected, onSelect: importDefault } = tabs);
  dependencyMap = undefined;
  let setActiveIndex;
  [tmp2, c2] = setActiveIndex(noop.useState(0), 2);
  const items = [tabs];
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = noop.useMemo(
    () =>
      tabs.map((id) => {
        obj = { id, label: null, page: null };
        const intl = tabs(_undefined[17]).intl;
        obj.label = intl.string(closure_1_14[id]);
        return obj;
      }),
    items,
  );
  const tmp = setActiveIndex(noop.useState(0), 2);
  obj = tabs(8980);
  const segmentedControlState = obj.useSegmentedControlState({
    items: memo,
    pageWidth: tmp2,
    defaultIndex: Math.max(0, tabs.indexOf(selected)),
    onSetActiveIndex(arg0) {
      if (null != tabs[arg0]) {
        importDefault(tmp);
      }
    },
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
    let tmp10Result = closure_12(tmp5(12511).Tabs, obj4);
  } else {
    const obj5 = { state: segmentedControlState };
    tmp10Result = closure_12(tmp5(9214).SegmentedControl, obj5);
  }
  obj3.children = tmp10Result;
  return closure_12(View, obj3);
}
const View = fn(17).View;
let ConjureProjectStore = fn(6844);
({ canPublishProject: closure_9, isProjectOwner: c10 } = ConjureProjectStore);
let ConjureProjectStore = ConjureProjectStore_mod;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = {
  project: _modDef3868.W0eQfN,
  app: _modDef3868.lFaJYF,
  secrets: _modDef3868.vDpCPU,
  model: _modDef3868.Rs3qc9,
  linked: _modDef3868.fBEHdq,
  experimental: _modDef3868["0Pe9uw"],
};
const createStyles = fn(5014);
let closure_15 = createStyles.createStyles((paddingBottom) => {
  obj = { container: { gap: nativeDefault.space.PX_16, paddingBottom } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsSheet.tsx");

export default function ConjureSettingsSheet(projectId) {
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
  obj = stateFromStores1;
  ({ guildId, initialTab, scopeKeys, note, notifyAgent, onSaved, isPreview } = projectId);
  const ref = noop.useRef(null);
  let tmp2 = canSave(ref(stateFromStores1[11])({ includeKeyboardHeight: true }).insets.bottom);
  let items = [memo];
  const items1 = [projectId];
  const stateFromStores = projectId(stateFromStores1[12]).useStateFromStores(
    items,
    () => ConjureProjectStore.getProject(projectId),
    items1,
  );
  let obj3 = projectId(stateFromStores1[12]);
  const items2 = [isScoped];
  const items3 = [projectId];
  stateFromStores1 = projectId(stateFromStores1[12]).useStateFromStores(
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
  let obj4 = projectId(stateFromStores1[12]);
  const items4 = [closure_7];
  const items5 = [projectId];
  let tmp8 = null != stateFromStores;
  const stateFromStores2 = projectId(stateFromStores1[12]).useStateFromStores(
    items4,
    () => "open" === ConjureConnectionStore.getConnState(projectId),
    items5,
  );
  if (tmp8) {
    tmp8 = closure_10(stateFromStores);
  }
  asyncGeneratorStep = tmp8;
  let tmp10 = null != stateFromStores;
  if (tmp10) {
    tmp10 = loaded(stateFromStores);
  }
  _slicedToArray = tmp10;
  let guild_id;
  let obj5 = projectId(stateFromStores1[12]);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  const tmpResultResult = ref(obj[13])(projectId, guild_id, { readOnly: !tmp8 });
  noop = tmpResultResult;
  const tmp15 = ref(obj[14])({ projectId, scopeKeys, note, notifyAgent, onSaved, isPreview });
  closure_6 = tmp15;
  const tmp16 = ref(obj[15])(projectId, tmp10);
  closure_7 = tmp17;
  isScoped = tmp15.isScoped;
  loaded = tmp15.loaded;
  if (loaded) {
    loaded = tmp15.valueCount > 0 || 0 === tmp15.secretCount;
    const tmp18 = tmp15.valueCount > 0 || 0 === tmp15.secretCount;
  }
  closure_10 = tmp19;
  const items6 = [tmp10, tmp16.callers.length > 0, stateFromStores1, tmp8, loaded, tmp15.secretCount > 0];
  memo = obj2.useMemo(() => {
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
  const tmp20 = _slicedToArray(noop.useState(null), 2);
  closure_12 = tmp21;
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
  let hasItem = tmp8;
  if (!tmp8) {
    hasItem = isScoped;
  }
  if (!hasItem) {
    hasItem = memo.includes("app");
  }
  if (!hasItem) {
    hasItem = memo.includes("secrets");
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
  const callback = obj2.useCallback(
    asyncGeneratorStep(async () => {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
    }),
    items8,
  );
  const obj7 = {
    ref,
    startExpanded: true,
    keyboardShouldPersistTaps: "always",
    dismissAccessibilityLabel: null,
    header: null,
    children: null,
  };
  const intl = tmp4(obj[17]).intl;
  obj7.dismissAccessibilityLabel = intl.string(ref(obj[8]).bA4VU5);
  const intl2 = tmp4(obj[17]).intl;
  const tmpResult2 = ref(obj[8]);
  const obj8 = {
    title: intl2.string(isScoped ? tmpResult2["jZjP+I"] : tmpResult2.I2XSKe),
    trailing: closure_12(projectId(obj[19]).ActionSheetCloseButton, {
      onPress() {
        const current = ref.current;
        let closeActionSheetResult;
        if (current != null) {
          closeActionSheetResult = current.closeActionSheet();
        }
        return closeActionSheetResult;
      },
    }),
  };
  obj7.header = closure_12(projectId(obj[18]).BottomSheetTitleHeader, obj8);
  const obj10 = { style: tmp2.container, children: null };
  let tmp25Result = null;
  if (!isScoped) {
    tmp25Result = null;
    if (memo.length > 1) {
      tmp25Result = null;
      if (null != found) {
        const obj11 = { tabs: memo, selected: found, onSelect: tmp21 };
        tmp25Result = tmp25(SettingsTabStrip, obj11, memo.join(","));
      }
    }
  }
  const items9 = [tmp25Result, , , , , , , ,];
  if (isScoped) {
    let fields = tmp15.fields;
  } else {
    fields = null;
  }
  items9[1] = fields;
  let tmp27Result = null;
  if (!isScoped) {
    tmp27Result = null;
    if ("project" === found) {
      const obj12 = { spacing: tmp(obj[10]).space.PX_24, children: null };
      const items10 = [tmpResultResult.fields];
      const obj13 = { projectId, canEdit: tmp10 };
      items10[1] = tmp25(tmp(obj[21]), obj13, projectId);
      obj12.children = items10;
      tmp27Result = tmp27(tmp4(obj[20]).Stack, obj12);
    }
  }
  items9[2] = tmp27Result;
  let tmp25Result5 = null;
  if (!isScoped) {
    tmp25Result5 = null;
    if ("linked" === found) {
      const obj14 = { linkedApps: tmp16 };
      tmp25Result5 = tmp25(tmp(obj[22]), obj14);
    }
  }
  items9[3] = tmp25Result5;
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
  let tmp25Result6 = null;
  if (!isScoped) {
    tmp25Result6 = null;
    if ("model" === found) {
      const obj15 = { projectId };
      tmp25Result6 = tmp25(tmp4(obj[23]).ConjureModelSettingsContent, obj15);
    }
  }
  items9[6] = tmp25Result6;
  let tmp37 = null;
  if (!isScoped) {
    tmp37 = null;
    if (null == found) {
      if (stateFromStores2) {
        const obj16 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl3 = tmp4(obj[17]).intl;
        obj16.children = intl3.string(tmp(obj[8]).lJJayk);
        let tmp25Result7 = tmp25(tmp4(obj[24]).Text, obj16);
      } else {
        tmp25Result7 = tmp25(tmp4(obj[25]).ActivityIndicator, {});
      }
    }
  }
  items9[7] = tmp37;
  if (!hasItem) {
    items9[8] = null;
    obj10.children = items9;
    obj7.children = tmp27(tmp28, obj10);
    return tmp25(tmp4(obj[16]).ActionSheet, obj7);
  } else {
    const intl4 = tmp4(obj[17]).intl;
    if (isScoped) {
      let A7dQd9 = tmp(obj[8]).A7dQd9;
    } else {
      A7dQd9 = tmp4(obj[17]).t["R3BPH+"];
    }
    obj = { text: intl4.string(A7dQd9), variant: "primary", loading: saving, disabled: !canSave, onPress: callback };
    tmp25(tmp4(obj[26]).Button, obj);
  }
  const obj6 = { readOnly: !tmp8 };
  const obj9 = {
    onPress() {
      const current = ref.current;
      let closeActionSheetResult;
      if (current != null) {
        closeActionSheetResult = current.closeActionSheet();
      }
      return closeActionSheetResult;
    },
  };
  tmp28 = closure_6;
  const tmpResult = ref(obj[13]);
}
export const CONJURE_SETTINGS_SHEET_KEY = "ConjureSettingsSheet";
