// === Module 18505: ConjureSettingsSheet ===

// Module 18505 (ConjureSettingsSheet)
import nativeDefault from "native" /* 575 */;
import _modDef4245 from "module_4245" /* 4245 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5257 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7693 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 7703 */;
import ConjureProjectStore_mod from "ConjureProjectStore" /* 6934 */;

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
    tmp = closure_1;
    stringResult = closure_2;
    ({ guildId, initialTab, scopeKeys, note, notifyAgent, onSaved, isPreview } = global);
    tmp3 = closure_1(closure_2[12])();
    height = tmp3.height;
    num = 0;
    ({ ref, onLayout } = tmp3);
    tmp4 = closure_16;
    if (undefined !== height) {
      num = height;
    }
    tmp4Result = tmp4(num);
    obj = closure_5;
    ref1 = closure_5.useRef(null);
    closure_1 = ref1;
    intl = projectId;
    obj2 = projectId(stringResult[13]);
    items = [];
    items[0] = closure_11;
    items1 = [];
    items1[0] = projectId;
    stateFromStores = obj2.useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
    obj3 = projectId(stringResult[13]);
    items2 = [];
    items2[0] = isScoped;
    items3 = [];
    items3[0] = projectId;
    stateFromStores1 = obj3.useStateFromStores(items2, () => {
      const modelSettings = ConjureModelSettingsStore.getModelSettings(projectId);
      let tierSettings;
      if (modelSettings != null) {
        tierSettings = modelSettings.tierSettings;
      }
      return null != tierSettings;
    }, items3);
    closure_2 = stateFromStores1;
    obj4 = projectId(stringResult[13]);
    items4 = [];
    items4[0] = closure_7;
    items5 = [];
    items5[0] = projectId;
    tmp10 = null != stateFromStores;
    stateFromStores2 = obj4.useStateFromStores(items4, () => "open" === ConjureConnectionStore.getConnState(projectId), items5);
    if (tmp10) {
      tmp11 = closure_10;
      tmp10 = closure_10(stateFromStores);
    }
    closure_3 = tmp10;
    tmp12 = null != stateFromStores;
    if (tmp12) {
      tmp13 = closure_9;
      tmp12 = closure_9(stateFromStores);
    }
    closure_4 = tmp12;
    guild_id = undefined;
    tmpResult = tmp(stringResult[14]);
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    if (guild_id == null) {
      guild_id = guildId;
    }
    obj1 = { readOnly: !tmp10 };
    tmp14Result = tmpResult(projectId, guild_id, obj1);
    closure_5 = tmp14Result;
    tmp17 = tmp(stringResult[15])({ projectId, scopeKeys, note, notifyAgent, onSaved, isPreview });
    closure_6 = tmp17;
    tmp18 = tmp(stringResult[16])(projectId, tmp12);
    tmp19 = tmp18.callers.length > 0 || tmp18.targets.length > 0;
    closure_7 = tmp19;
    isScoped = tmp17.isScoped;
    loaded = tmp17.loaded;
    if (loaded) {
      tmp20 = tmp17.valueCount > 0 || 0 === tmp17.secretCount;
      loaded = tmp20;
    }
    closure_9 = loaded;
    tmp21 = tmp17.secretCount > 0;
    closure_10 = tmp21;
    items6 = [, , , , , ];
    items6[0] = tmp12;
    items6[1] = tmp19;
    items6[2] = stateFromStores1;
    items6[3] = tmp10;
    items6[4] = loaded;
    items6[5] = tmp21;
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
    tmp22 = closure_4(obj.useState(null), 2);
    tmp23 = tmp22[1];
    closure_12 = tmp23;
    items7 = [, ];
    items7[0] = tmp22[0];
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
    saving = tmp10;
    if (tmp10) {
      saving = tmp14Result.saving;
    }
    if (!saving) {
      saving = tmp17.saving;
    }
    hasItem = tmp10;
    if (!tmp10) {
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
    canSave = tmp17.canSave;
    if (!canSave) {
      canSave2 = !isScoped;
      if (!isScoped) {
        canSave2 = tmp10;
      }
      if (canSave2) {
        canSave2 = tmp14Result.canSave;
      }
      canSave = canSave2;
    }
    items8 = [, , , , , , , ];
    items8[0] = tmp17;
    items8[1] = canSave;
    items8[2] = tmp10;
    items8[3] = tmp14Result;
    items8[4] = saving;
    items8[5] = isScoped;
    items8[6] = found;
    items8[7] = memo;
    tmp27 = closure_12;
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
                    validateResult = null;
                    if (!isScoped) {
                      validateResult = canSave.validate();
                    }
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
        } catch (tmp32) {
          c3 = tmp;
          throw tmp32;
        }
      }
    }), items8);
    intl2 = intl(stringResult[18]).intl;
    if (isScoped) {
      A7dQd9 = tmp(stringResult[8]).A7dQd9;
    } else {
      A7dQd9 = intl(stringResult[18]).t["R3BPH+"];
    }
    obj21 = { text: intl2.string(A7dQd9), variant: "primary", loading: saving, disabled: !canSave, onPress: callback };
    tmp27Result = tmp27(intl(stringResult[17]).Button, obj21);
    obj22 = { ref: ref1, startExpanded: true, keyboardShouldPersistTaps: "always", dismissAccessibilityLabel: null, header: null, footer: null, children: null };
    intl3 = intl(stringResult[18]).intl;
    obj22.dismissAccessibilityLabel = intl3.string(tmp(stringResult[8]).bA4VU5);
    if (isScoped) {
      intlResult = intl(stringResult[21]);
      name = undefined;
      if (stateFromStores != null) {
        name = stateFromStores.name;
      }
      conjureSetupTitleResult = intlResult.conjureSetupTitle(name);
    } else {
      intl4 = intl(stringResult[18]).intl;
      conjureSetupTitleResult = intl4.string(tmp(stringResult[8]).I2XSKe);
    }
    obj23 = { title: conjureSetupTitleResult, subtitle: null, trailing: null };
    formatToPlainStringResult = undefined;
    if (null != tmp17.progress) {
      intl5 = intl(stringResult[18]).intl;
      formatToPlainStringResult = intl5.formatToPlainString(tmp(stringResult[8]).hoevP8, tmp17.progress);
    }
    obj23.subtitle = formatToPlainStringResult;
    obj24 = {
      onPress() {
            const current = ref1.current;
            let closeActionSheetResult;
            if (current != null) {
              closeActionSheetResult = current.closeActionSheet();
            }
            return closeActionSheetResult;
          }
    };
    obj23.trailing = tmp27(intl(stringResult[22]).ActionSheetCloseButton, obj24);
    obj22.header = tmp27(intl(stringResult[20]).BottomSheetTitleHeader, obj23);
    tmp34Result = undefined;
    if (isScoped) {
      obj25 = { style: null, ref: null, onLayout: null, children: null };
      obj25.style = tmp4Result.footer;
      obj25.ref = ref;
      obj25.onLayout = onLayout;
      tmp27Result1 = null;
      tmp34 = closure_13;
      tmp35 = closure_6;
      if (null != tmp17.status) {
        str3 = "text-muted";
        if (tmp17.statusIsError) {
          str3 = "text-feedback-critical";
        }
        obj26 = { variant: "body-xs/normal", color: null, lineClamp: null, accessibilityLabel: null, accessibilityLiveRegion: "polite", children: null };
        obj26.color = str3;
        obj26.lineClamp = intl(stringResult[21]).SETUP_STATUS_MAX_LINES;
        ({ status: obj12.accessibilityLabel, status: obj12.children } = tmp17);
        tmp27Result1 = tmp27(intl(stringResult[23]).Text, obj26);
      }
      items9 = [, ];
      items9[0] = tmp27Result1;
      obj27 = { bottom: true, children: null };
      obj27.children = tmp27Result;
      items9[1] = tmp27(intl(stringResult[24]).SafeAreaPaddingView, obj27);
      obj25.children = items9;
      tmp34Result = tmp34(tmp35, obj25);
    }
    obj22.footer = tmp34Result;
    tmp37 = closure_13;
    obj28 = { style: tmp4Result.container, children: null };
    tmp27Result2 = null;
    tmp38 = closure_6;
    if (!isScoped) {
      num2 = 1;
      tmp27Result2 = null;
      if (memo.length > 1) {
        tmp27Result2 = null;
        if (null != found) {
          tmp40 = SettingsTabStrip;
          obj29 = { tabs: null, selected: null, onSelect: null };
          obj29.tabs = memo;
          obj29.selected = found;
          obj29.onSelect = tmp23;
          str4 = ",";
          tmp27Result2 = tmp27(SettingsTabStrip, obj29, memo.join(","));
        }
      }
    }
    items10 = [, , , , , , , , ];
    items10[0] = tmp27Result2;
    if (isScoped) {
      fields = tmp17.fields;
    } else {
      str5 = "app";
      fields = null;
    }
    items10[1] = fields;
    tmp37Result = null;
    if (!isScoped) {
      str6 = "project";
      tmp37Result = null;
      if ("project" === found) {
        obj30 = { spacing: null, children: null };
        obj30.spacing = tmp(stringResult[10]).space.PX_24;
        items11 = [, ];
        items11[0] = tmp14Result.fields;
        obj31 = { projectId: null, canEdit: null };
        obj31.projectId = projectId;
        obj31.canEdit = tmp12;
        items11[1] = tmp27(tmp(stringResult[26]), obj31, projectId);
        obj30.children = items11;
        tmp37Result = tmp37(intl(stringResult[25]).Stack, obj30);
      }
    }
    items10[2] = tmp37Result;
    tmp27Result3 = null;
    if (!isScoped) {
      str7 = "linked";
      tmp27Result3 = null;
      if ("linked" === found) {
        obj32 = { linkedApps: null, onOpenSettings: null };
        obj32.linkedApps = tmp18;
        tmp44 = openLinkedAppSettings;
        obj32.onOpenSettings = openLinkedAppSettings;
        tmp27Result3 = tmp27(tmp(stringResult[27]), obj32);
      }
    }
    items10[3] = tmp27Result3;
    experimentalFields = null;
    if (!isScoped) {
      str8 = "experimental";
      experimentalFields = null;
      if ("experimental" === found) {
        experimentalFields = tmp14Result.experimentalFields;
      }
    }
    items10[4] = experimentalFields;
    secretFields = null;
    if (!isScoped) {
      str9 = "secrets";
      secretFields = null;
      if ("secrets" === found) {
        secretFields = tmp17.secretFields;
      }
    }
    items10[5] = secretFields;
    tmp27Result4 = null;
    if (!isScoped) {
      str10 = "model";
      tmp27Result4 = null;
      if ("model" === found) {
        obj33 = { projectId: null };
        obj33.projectId = projectId;
        tmp27Result4 = tmp27(intl(stringResult[28]).ConjureModelSettingsContent, obj33);
      }
    }
    items10[6] = tmp27Result4;
    tmp48 = null;
    if (!isScoped) {
      tmp48 = null;
      if (null == found) {
        if (stateFromStores2) {
          obj34 = { variant: "body-sm/normal", color: "text-muted", children: null };
          intl = intl(stringResult[18]).intl;
          stringResult = intl.string(tmp(stringResult[8]).lJJayk);
          obj34.children = stringResult;
          tmp27Result5 = tmp27(intl(stringResult[23]).Text, obj34);
        } else {
          tmp27Result5 = tmp27(intl(stringResult[29]).ActivityIndicator, {});
        }
        tmp50 = tmp27Result5;
      }
    }
    items10[7] = tmp48;
    tmp51 = null;
    if (!isScoped) {
      tmp51 = null;
      if (hasItem) {
        str11 = "linked";
        if ("linked" !== found) {
          tmp51 = tmp27Result;
        } else {
          tmp51 = null;
        }
      }
    }
    items10[8] = tmp51;
    obj28.children = items10;
    obj22.children = tmp37(tmp38, obj28);
    return tmp27(intl(stringResult[19]).ActionSheet, obj22);
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
    const intl = tabs(index[18]).intl;
    obj.label = intl.string(closure_1_15[id]);
    return obj;
  }), items);
  obj = tabs(index[30]);
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
    let tmp8Result = closure_12(tmp4(tmp[31]).Tabs, obj4);
  } else {
    const obj5 = { state: segmentedControlState };
    tmp8Result = closure_12(tmp4(tmp[32]).SegmentedControl, obj5);
  }
  obj3.children = tmp8Result;
  return closure_12(View, obj3);
}
const View = fn(17).View;
let ConjureProjectStore = fn(6934);
({ canPublishProject: closure_9, isProjectOwner: closure_10 } = ConjureProjectStore);
let ConjureProjectStore = ConjureProjectStore_mod;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const ConjureSettingsSheet = "ConjureSettingsSheet";
let obj = { project: _modDef4245.W0eQfN, app: _modDef4245.lFaJYF, secrets: _modDef4245.vDpCPU, model: _modDef4245.Rs3qc9, linked: _modDef4245.fBEHdq, experimental: _modDef4245["0Pe9uw"] };
const createStyles = fn(5043);
let closure_16 = createStyles.createStyles((paddingBottom) => {
  obj = { container: { gap: nativeDefault.space.PX_16, paddingBottom }, footer: null };
  const obj2 = { gap: nativeDefault.space.PX_16, paddingBottom };
  obj.footer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsSheet.tsx");

export default ConjureSettingsSheet;
export const CONJURE_SETTINGS_SHEET_KEY = "ConjureSettingsSheet";