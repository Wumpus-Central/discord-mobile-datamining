// discord_app/modules/conjure/settings/native/ConjureSettingsSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4079 from "../../intl/ConjureUntranslated.messages.js";
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
  let index;
  let setActiveIndex;
  const tmp2 = require("useMeasuredLayout")();
  const width = tmp2.width;
  let num = 0;
  ({ ref, onLayout } = tmp2);
  if (undefined !== width) {
    num = width;
  }
  items = [tabs];
  const memo = noop.useMemo(
    () =>
      tabs.map((id) => {
        obj = { id, label: null, page: null };
        const intl = tabs(index[16]).intl;
        obj.label = intl.string(closure_1_14[id]);
        return obj;
      }),
    items,
  );
  obj = tabs(index[27]);
  const segmentedControlState = obj.useSegmentedControlState({
    items: memo,
    pageWidth: num,
    defaultIndex: Math.max(0, tabs.indexOf(selected)),
    onSetActiveIndex(arg0) {
      if (null != tabs[arg0]) {
        importDefault(tmp);
      }
    },
  });
  index = tabs.indexOf(selected);
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items1 = [index, setActiveIndex];
  const effect = noop.useEffect(() => {
    if (index >= 0) {
      setActiveIndex(tmp, false);
    }
  }, items1);
  const obj3 = { ref, onLayout, children: null };
  if (tabs.length > 3) {
    const obj4 = { state: segmentedControlState };
    let tmp8Result = closure_12(tmp4(tmp[28]).Tabs, obj4);
  } else {
    const obj5 = { state: segmentedControlState };
    tmp8Result = closure_12(tmp4(tmp[29]).SegmentedControl, obj5);
  }
  obj3.children = tmp8Result;
  return closure_12(View, obj3);
}
const View = fn(17).View;
let ConjureProjectStore = fn(6954);
({ canPublishProject: closure_9, isProjectOwner: closure_10 } = ConjureProjectStore);
let ConjureProjectStore = ConjureProjectStore_mod;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = {
  project: _modDef4079.W0eQfN,
  app: _modDef4079.lFaJYF,
  secrets: _modDef4079.vDpCPU,
  model: _modDef4079.Rs3qc9,
  linked: _modDef4079.fBEHdq,
  experimental: _modDef4079["0Pe9uw"],
};
const createStyles = fn(5243);
let obj3 = { container: { gap: nativeDefault.space.PX_16 } };
let closure_15 = createStyles.createStyles(obj3);
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
  ({ guildId, initialTab, scopeKeys, note, notifyAgent, onSaved, isPreview } = projectId);
  const ref = noop.useRef(null);
  let obj16 = stateFromStores1;
  const tmp = canSave();
  items = [memo];
  const items1 = [projectId];
  const stateFromStores = projectId(stateFromStores1[11]).useStateFromStores(
    items,
    () => ConjureProjectStore.getProject(projectId),
    items1,
  );
  let obj3 = projectId(stateFromStores1[11]);
  const items2 = [isScoped];
  const items3 = [projectId];
  stateFromStores1 = projectId(stateFromStores1[11]).useStateFromStores(
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
  let obj4 = projectId(stateFromStores1[11]);
  const items4 = [closure_7];
  const items5 = [projectId];
  let tmp7 = null != stateFromStores;
  const stateFromStores2 = projectId(stateFromStores1[11]).useStateFromStores(
    items4,
    () => "open" === ConjureConnectionStore.getConnState(projectId),
    items5,
  );
  if (tmp7) {
    tmp7 = closure_10(stateFromStores);
  }
  asyncGeneratorStep = tmp7;
  let tmp9 = null != stateFromStores;
  if (tmp9) {
    tmp9 = loaded(stateFromStores);
  }
  _slicedToArray = tmp9;
  let guild_id;
  let obj5 = projectId(stateFromStores1[11]);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  const tmp12Result = ref(obj16[12])(projectId, guild_id, { readOnly: !tmp7 });
  noop = tmp12Result;
  const tmp15 = ref(obj16[13])({ projectId, scopeKeys, note, notifyAgent, onSaved, isPreview });
  closure_6 = tmp15;
  const tmp16 = ref(obj16[14])(projectId, tmp9);
  closure_7 = tmp17;
  isScoped = tmp15.isScoped;
  loaded = tmp15.loaded;
  if (loaded) {
    loaded = tmp15.valueCount > 0 || 0 === tmp15.secretCount;
    const tmp18 = tmp15.valueCount > 0 || 0 === tmp15.secretCount;
  }
  closure_10 = tmp19;
  const items6 = [tmp9, tmp16.callers.length > 0, stateFromStores1, tmp7, loaded, tmp15.secretCount > 0];
  memo = obj.useMemo(() => {
    let tmp2 = closure_3;
    if (!closure_3) {
      tmp2 = closure_4;
    }
    items = [];
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
  saving = tmp7;
  if (tmp7) {
    saving = tmp12Result.saving;
  }
  if (!saving) {
    saving = tmp15.saving;
  }
  let hasItem = tmp7;
  if (!tmp7) {
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
      canSave2 = tmp7;
    }
    if (canSave2) {
      canSave2 = tmp12Result.canSave;
    }
    canSave = canSave2;
  }
  const items8 = [tmp15, canSave, tmp7, tmp12Result, saving, isScoped, found, memo];
  const callback = obj.useCallback(
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
          return { value: "HermesInternal", done: null };
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
                    items = [submitResult, canSave.submit()];
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
  const obj6 = {
    ref,
    startExpanded: true,
    keyboardShouldPersistTaps: "always",
    dismissAccessibilityLabel: null,
    header: null,
    children: null,
  };
  const intl = tmp3(obj16[16]).intl;
  obj6.dismissAccessibilityLabel = intl.string(ref(obj16[8]).bA4VU5);
  const intl2 = tmp3(obj16[16]).intl;
  const tmp11Result = ref(obj16[8]);
  const obj7 = {
    title: intl2.string(isScoped ? tmp11Result["jZjP+I"] : tmp11Result.I2XSKe),
    trailing: closure_12(projectId(obj16[18]).ActionSheetCloseButton, {
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
  obj6.header = closure_12(projectId(obj16[17]).BottomSheetTitleHeader, obj7);
  const obj9 = { style: tmp.container, children: null };
  let tmp25Result = null;
  if (!isScoped) {
    tmp25Result = null;
    if (memo.length > 1) {
      tmp25Result = null;
      if (null != found) {
        const obj10 = { tabs: memo, selected: found, onSelect: tmp21 };
        tmp25Result = tmp25(SettingsTabStrip, obj10, memo.join(","));
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
      const obj11 = { spacing: tmp11(obj16[10]).space.PX_24, children: null };
      const items10 = [tmp12Result.fields];
      const obj12 = { projectId, canEdit: tmp9 };
      items10[1] = tmp25(tmp11(obj16[20]), obj12, projectId);
      obj11.children = items10;
      tmp27Result = tmp27(tmp3(obj16[19]).Stack, obj11);
    }
  }
  items9[2] = tmp27Result;
  let tmp25Result5 = null;
  if (!isScoped) {
    tmp25Result5 = null;
    if ("linked" === found) {
      const obj13 = { linkedApps: tmp16 };
      tmp25Result5 = tmp25(tmp11(obj16[21]), obj13);
    }
  }
  items9[3] = tmp25Result5;
  let experimentalFields = null;
  if (!isScoped) {
    experimentalFields = null;
    if ("experimental" === found) {
      experimentalFields = tmp12Result.experimentalFields;
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
      const obj14 = { projectId };
      tmp25Result6 = tmp25(tmp3(obj16[22]).ConjureModelSettingsContent, obj14);
    }
  }
  items9[6] = tmp25Result6;
  let tmp37 = null;
  if (!isScoped) {
    tmp37 = null;
    if (null == found) {
      if (stateFromStores2) {
        const obj15 = { variant: "body-sm/normal", color: "text-muted", children: null };
        const intl3 = tmp3(obj16[16]).intl;
        obj15.children = intl3.string(tmp11(obj16[8]).lJJayk);
        let tmp25Result7 = tmp25(tmp3(obj16[23]).Text, obj15);
      } else {
        tmp25Result7 = tmp25(tmp3(obj16[24]).ActivityIndicator, {});
      }
    }
  }
  items9[7] = tmp37;
  if (!hasItem) {
    items9[8] = null;
    obj9.children = items9;
    obj6.children = tmp27(tmp28, obj9);
    return tmp25(tmp3(obj16[15]).ActionSheet, obj6);
  } else {
    const intl4 = tmp3(obj16[16]).intl;
    if (isScoped) {
      let A7dQd9 = tmp11(obj16[8]).A7dQd9;
    } else {
      A7dQd9 = tmp3(obj16[16]).t["R3BPH+"];
    }
    obj16 = { text: intl4.string(A7dQd9), variant: "primary", loading: saving, disabled: !canSave, onPress: callback };
    tmp25(tmp3(obj16[25]).Button, obj16);
  }
  const obj2 = { readOnly: !tmp7 };
  const obj8 = {
    onPress() {
      const current = ref.current;
      let closeActionSheetResult;
      if (current != null) {
        closeActionSheetResult = current.closeActionSheet();
      }
      return closeActionSheetResult;
    },
  };
  const tmp12 = ref(obj16[12]);
  tmp28 = closure_6;
}
export const CONJURE_SETTINGS_SHEET_KEY = "ConjureSettingsSheet";
