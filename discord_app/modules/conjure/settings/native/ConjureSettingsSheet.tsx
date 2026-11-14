// === Module 13194: ConjureSettingsSheet ===

// Module 13194 (ConjureSettingsSheet)
import nativeDefault from "native" /* 575 */;
import _modDef4131 from "module_4131" /* 4131 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5552 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7365 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 7375 */;
import ConjureProjectStore_mod from "ConjureProjectStore" /* 7017 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function openLinkedAppSettings(projectId) {
  ActionSheetActionCreatorsDefault.hideActionSheet(ConjureSettingsSheet);
  const obj3 = { content: application_id(ConjureSettingsSheet, { projectId, initialTab: "linked" }, projectId), key: ConjureSettingsSheet };
  ActionSheetActionCreators.showActionSheet(obj3);
}
class ConjureSettingsSheet {
  constructor(arg0) {
    projectId = global.projectId;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    isScoped = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    saving = undefined;
    canSave = undefined;
    ({ guildId, initialTab, scopeKeys, note, notifyAgent, onSaved, isPreview } = global);
    obj = closure_5;
    tmp = closure_16();
    ref = closure_5.useRef(null);
    closure_1 = ref;
    tmp3 = projectId;
    obj27 = closure_2;
    obj3 = projectId(closure_2[12]);
    items = [];
    items[0] = closure_11;
    items1 = [];
    items1[0] = projectId;
    stateFromStores = obj3.useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
    obj4 = projectId(closure_2[12]);
    items2 = [];
    items2[0] = isScoped;
    items3 = [];
    items3[0] = projectId;
    stateFromStores1 = obj4.useStateFromStores(items2, () => {
      const modelSettings = ConjureModelSettingsStore.getModelSettings(projectId);
      let tierSettings;
      if (modelSettings != null) {
        tierSettings = modelSettings.tierSettings;
      }
      return null != tierSettings;
    }, items3);
    closure_2 = stateFromStores1;
    obj5 = projectId(closure_2[12]);
    items4 = [];
    items4[0] = closure_7;
    items5 = [];
    items5[0] = projectId;
    tmp7 = null != stateFromStores;
    stateFromStores2 = obj5.useStateFromStores(items4, () => "open" === ConjureConnectionStore.getConnState(projectId), items5);
    if (tmp7) {
      tmp8 = closure_10;
      tmp7 = closure_10(stateFromStores);
    }
    closure_3 = tmp7;
    tmp9 = null != stateFromStores;
    if (tmp9) {
      tmp10 = closure_9;
      tmp9 = closure_9(stateFromStores);
    }
    closure_4 = tmp9;
    tmp11 = closure_1;
    guild_id = undefined;
    tmp12 = closure_1(obj27[13]);
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    if (guild_id == null) {
      guild_id = guildId;
    }
    obj1 = { readOnly: !tmp7 };
    tmp12Result = tmp12(projectId, guild_id, obj1);
    closure_5 = tmp12Result;
    tmp15 = tmp11(obj27[14])({ projectId, scopeKeys, note, notifyAgent, onSaved, isPreview });
    closure_6 = tmp15;
    tmp16 = tmp11(obj27[15])(projectId, tmp9);
    tmp17 = tmp16.callers.length > 0 || tmp16.targets.length > 0;
    closure_7 = tmp17;
    isScoped = tmp15.isScoped;
    loaded = tmp15.loaded;
    if (loaded) {
      tmp18 = tmp15.valueCount > 0 || 0 === tmp15.secretCount;
      loaded = tmp18;
    }
    closure_9 = loaded;
    tmp19 = tmp15.secretCount > 0;
    closure_10 = tmp19;
    items6 = [, , , , , ];
    items6[0] = tmp9;
    items6[1] = tmp17;
    items6[2] = stateFromStores1;
    items6[3] = tmp7;
    items6[4] = loaded;
    items6[5] = tmp19;
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
    closure_11 = memo;
    tmp20 = closure_4(obj.useState(null), 2);
    tmp21 = tmp20[1];
    closure_12 = tmp21;
    items7 = [, ];
    items7[0] = tmp20[0];
    items7[1] = initialTab;
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
    closure_13 = found;
    saving = tmp7;
    if (tmp7) {
      saving = tmp12Result.saving;
    }
    if (!saving) {
      saving = tmp15.saving;
    }
    hasItem = tmp7;
    if (!tmp7) {
      hasItem = isScoped;
    }
    if (!hasItem) {
      str = "app";
      hasItem = memo.includes("app");
    }
    if (!hasItem) {
      str2 = "secrets";
      hasItem = memo.includes("secrets");
    }
    canSave = tmp15.canSave;
    if (!canSave) {
      canSave2 = !isScoped;
      if (!isScoped) {
        canSave2 = tmp7;
      }
      if (canSave2) {
        canSave2 = tmp12Result.canSave;
      }
      canSave = canSave2;
    }
    items8 = [, , , , , , , ];
    items8[0] = tmp15;
    items8[1] = canSave;
    items8[2] = tmp7;
    items8[3] = tmp12Result;
    items8[4] = saving;
    items8[5] = isScoped;
    items8[6] = found;
    items8[7] = memo;
    tmp25 = closure_12;
    callback = obj.useCallback(closure_3(async () => {
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
    }), items8);
    obj17 = { ref, startExpanded: true, keyboardShouldPersistTaps: "always", dismissAccessibilityLabel: null, header: null, children: null };
    intl = tmp3(obj27[17]).intl;
    obj17.dismissAccessibilityLabel = intl.string(tmp11(obj27[8]).bA4VU5);
    intl2 = tmp3(obj27[17]).intl;
    tmp11Result = tmp11(obj27[8]);
    obj18 = { title: intl2.string(isScoped ? tmp11Result["jZjP+I"] : tmp11Result.I2XSKe), trailing: null };
    obj19 = {
      onPress() {
            const current = ref.current;
            let closeActionSheetResult;
            if (current != null) {
              closeActionSheetResult = current.closeActionSheet();
            }
            return closeActionSheetResult;
          }
    };
    obj18.trailing = tmp25(tmp3(obj27[19]).ActionSheetCloseButton, obj19);
    obj17.header = tmp25(tmp3(obj27[18]).BottomSheetTitleHeader, obj18);
    tmp27 = closure_13;
    obj20 = { style: tmp.container, children: null };
    tmp25Result = null;
    tmp28 = closure_6;
    if (!isScoped) {
      num = 1;
      tmp25Result = null;
      if (memo.length > 1) {
        tmp25Result = null;
        if (null != found) {
          tmp30 = SettingsTabStrip;
          obj21 = { tabs: null, selected: null, onSelect: null };
          obj21.tabs = memo;
          obj21.selected = found;
          obj21.onSelect = tmp21;
          str3 = ",";
          tmp25Result = tmp25(SettingsTabStrip, obj21, memo.join(","));
        }
      }
    }
    items9 = [, , , , , , , , ];
    items9[0] = tmp25Result;
    if (isScoped) {
      fields = tmp15.fields;
    } else {
      str4 = "app";
      fields = null;
    }
    items9[1] = fields;
    tmp27Result = null;
    if (!isScoped) {
      str5 = "project";
      tmp27Result = null;
      if ("project" === found) {
        obj22 = { spacing: null, children: null };
        obj22.spacing = tmp11(obj27[10]).space.PX_24;
        items10 = [, ];
        items10[0] = tmp12Result.fields;
        obj23 = { projectId: null, canEdit: null };
        obj23.projectId = projectId;
        obj23.canEdit = tmp9;
        items10[1] = tmp25(tmp11(obj27[21]), obj23, projectId);
        obj22.children = items10;
        tmp27Result = tmp27(tmp3(obj27[20]).Stack, obj22);
      }
    }
    items9[2] = tmp27Result;
    tmp25Result1 = null;
    if (!isScoped) {
      str6 = "linked";
      tmp25Result1 = null;
      if ("linked" === found) {
        obj24 = { linkedApps: null, onOpenSettings: null };
        obj24.linkedApps = tmp16;
        tmp34 = openLinkedAppSettings;
        obj24.onOpenSettings = openLinkedAppSettings;
        tmp25Result1 = tmp25(tmp11(obj27[22]), obj24);
      }
    }
    items9[3] = tmp25Result1;
    experimentalFields = null;
    if (!isScoped) {
      str7 = "experimental";
      experimentalFields = null;
      if ("experimental" === found) {
        experimentalFields = tmp12Result.experimentalFields;
      }
    }
    items9[4] = experimentalFields;
    secretFields = null;
    if (!isScoped) {
      str8 = "secrets";
      secretFields = null;
      if ("secrets" === found) {
        secretFields = tmp15.secretFields;
      }
    }
    items9[5] = secretFields;
    tmp25Result2 = null;
    if (!isScoped) {
      str9 = "model";
      tmp25Result2 = null;
      if ("model" === found) {
        obj25 = { projectId: null };
        obj25.projectId = projectId;
        tmp25Result2 = tmp25(tmp3(obj27[23]).ConjureModelSettingsContent, obj25);
      }
    }
    items9[6] = tmp25Result2;
    tmp38 = null;
    if (!isScoped) {
      tmp38 = null;
      if (null == found) {
        if (stateFromStores2) {
          obj26 = { variant: "body-sm/normal", color: "text-muted", children: null };
          intl3 = tmp3(obj27[17]).intl;
          obj26.children = intl3.string(tmp11(obj27[8]).lJJayk);
          tmp25Result3 = tmp25(tmp3(obj27[24]).Text, obj26);
        } else {
          tmp25Result3 = tmp25(tmp3(obj27[25]).ActivityIndicator, {});
        }
        tmp40 = tmp25Result3;
      }
    }
    items9[7] = tmp38;
    tmp41 = null;
    if (hasItem) {
      str10 = "linked";
      if ("linked" === found) {
        tmp41 = null;
      }
      intl4 = tmp3(obj27[17]).intl;
      if (isScoped) {
        A7dQd9 = tmp11(obj27[8]).A7dQd9;
      } else {
        A7dQd9 = tmp3(obj27[17]).t["R3BPH+"];
      }
      obj27 = { text: null, variant: "primary", loading: null, disabled: null, onPress: null };
      obj27.text = intl4.string(A7dQd9);
      obj27.loading = saving;
      obj27.disabled = !canSave;
      obj27.onPress = callback;
      tmp25Result4 = tmp25(tmp3(obj27[26]).Button, obj27);
    }
    items9[8] = tmp41;
    obj20.children = items9;
    obj17.children = tmp27(tmp28, obj20);
    return tmp25(tmp3(obj27[16]).ActionSheet, obj17);
  }
}
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
  const memo = noop.useMemo(() => tabs.map((id) => {
    obj = { id, label: null, page: null };
    const intl = tabs(index[17]).intl;
    obj.label = intl.string(closure_1_15[id]);
    return obj;
  }), items);
  obj = tabs(index[28]);
  const segmentedControlState = obj.useSegmentedControlState({
    items: memo,
    pageWidth: num,
    defaultIndex: Math.max(0, tabs.indexOf(selected)),
    onSetActiveIndex(arg0) {
      if (null != tabs[arg0]) {
        importDefault(tmp);
      }
    }
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
    let tmp8Result = closure_12(tmp4(tmp[29]).Tabs, obj4);
  } else {
    const obj5 = { state: segmentedControlState };
    tmp8Result = closure_12(tmp4(tmp[30]).SegmentedControl, obj5);
  }
  obj3.children = tmp8Result;
  return closure_12(View, obj3);
}
const View = fn(17).View;
let ConjureProjectStore = fn(7017);
({ canPublishProject: closure_9, isProjectOwner: closure_10 } = ConjureProjectStore);
let ConjureProjectStore = ConjureProjectStore_mod;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const ConjureSettingsSheet = "ConjureSettingsSheet";
let obj = { project: _modDef4131.W0eQfN, app: _modDef4131.lFaJYF, secrets: _modDef4131.vDpCPU, model: _modDef4131.Rs3qc9, linked: _modDef4131.fBEHdq, experimental: _modDef4131["0Pe9uw"] };
const createStyles = fn(5306);
let obj3 = { container: { gap: nativeDefault.space.PX_16 } };
const value = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsSheet.tsx");

export default ConjureSettingsSheet;
export const CONJURE_SETTINGS_SHEET_KEY = "ConjureSettingsSheet";