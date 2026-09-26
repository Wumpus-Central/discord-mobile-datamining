// discord_app/modules/vibegrations/native/VibegrationsSettingsSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3715 from "../intl/VibegrationsUntranslated.messages.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import VibegrationsConnectionStore from "../stores/VibegrationsConnectionStore.tsx";
import VibegrationsProjectStore from "../stores/VibegrationsProjectStore.tsx";

const require = fn;
function SettingsTabStrip(tabs) {
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
        const intl = tabs(_undefined[16]).intl;
        obj.label = intl.string(closure_1_13[id]);
        return obj;
      }),
    items,
  );
  const tmp = _slicedToArray(noop.useState(0), 2);
  obj = tabs(9083);
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
    let tmp8Result = closure_10(tmp5(12111).Tabs, obj4);
  } else {
    const obj5 = { state: segmentedControlState };
    tmp8Result = closure_10(tmp5(9084).SegmentedControl, obj5);
  }
  obj3.children = tmp8Result;
  return closure_10(View, obj3);
}
const View = fn(17).View;
let isProjectOwner = fn(8495).isProjectOwner;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const VibegrationsSettingsSheet = "VibegrationsSettingsSheet";
let obj = {
  project: _modDef3715.wo1EUp,
  app: _modDef3715["8drwHu"],
  secrets: _modDef3715.iD7xfZ,
  model: _modDef3715.aMTBSX,
};
const createStyles = fn(4836);
let closure_14 = createStyles.createStyles((paddingBottom) => {
  obj = { container: { gap: nativeDefault.space.PX_16, paddingBottom } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSettingsSheet.tsx");

export default function VibegrationsSettingsSheet(projectId) {
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
  const tmp3 = closure_14(stateFromStores1(6402)({ includeKeyboardHeight: true }).insets.bottom);
  let items = [memo];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(
    items,
    () => VibegrationsProjectStore.getProject(projectId),
    items1,
  );
  obj = projectId(504);
  const items2 = [closure_7];
  const items3 = [projectId];
  stateFromStores1 = projectId(504).useStateFromStores(
    items2,
    () => {
      const modelSettings = VibegrationsConnectionStore.getModelSettings(projectId);
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
    () => "open" === VibegrationsConnectionStore.getConnState(projectId),
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
  const tmpResultResult = stateFromStores1(16265)(projectId, guild_id);
  asyncGeneratorStep = tmpResultResult;
  const tmp13 = stateFromStores1(16267)({ projectId, scopeKeys, note, notifyAgent, isPreview });
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
          return { value: "HermesInternal", done: null };
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
                tmp3(dependencyMap[14]).hideActionSheet(closure_1_12);
                obj = tmp3(dependencyMap[14]);
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
  const intl = tmp4(1115).intl;
  obj5.dismissAccessibilityLabel = intl.string(stateFromStores1(3715).Wzi4Jd);
  const intl2 = tmp4(1115).intl;
  const tmpResult2 = stateFromStores1(3715);
  const tmpResult = stateFromStores1(16265);
  obj5.header = found(projectId(6570).BottomSheetTitleHeader, {
    title: intl2.string(isScoped ? tmpResult2.wgDhiQ : tmpResult2.cWmjzs),
  });
  const obj7 = { style: tmp3.container, children: null };
  let tmp21Result = null;
  if (!isScoped) {
    tmp21Result = null;
    if (memo.length > 1) {
      tmp21Result = null;
      if (null != found) {
        const obj8 = { tabs: memo, selected: found, onSelect: tmp17 };
        tmp21Result = tmp21(SettingsTabStrip, obj8, memo.join(","));
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
      tmp21Result3 = tmp21(tmp4(16268).VibegrationsModelSettingsContent, obj9);
    }
  }
  items9[4] = tmp21Result3;
  let tmp31 = null;
  if (!isScoped) {
    tmp31 = null;
    if (null == found) {
      if (stateFromStores2) {
        const obj10 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl3 = tmp4(1115).intl;
        obj10.children = intl3.string(tmp(3715).URnN4B);
        let tmp21Result4 = tmp21(tmp4(4832).Text, obj10);
      } else {
        tmp21Result4 = tmp21(tmp4(5889).ActivityIndicator, {});
      }
    }
  }
  items9[5] = tmp31;
  const intl4 = tmp4(1115).intl;
  if (isScoped) {
    let Tuz9vw = tmp(3715).Tuz9vw;
  } else {
    Tuz9vw = tmp4(1115).t["R3BPH+"];
  }
  const obj6 = { title: intl2.string(isScoped ? tmpResult2.wgDhiQ : tmpResult2.cWmjzs) };
  const tmp23 = closure_11;
  const tmp24 = loaded;
  items9[6] = found(projectId(5281).Button, {
    text: intl4.string(Tuz9vw),
    variant: "primary",
    loading: tmpResultResult.saving || tmp13.saving,
    disabled: !canSave,
    onPress: callback,
  });
  obj7.children = items9;
  obj5.children = tmp23(tmp24, obj7);
  return found(projectId(6618).ActionSheet, obj5);
}
export const VIBEGRATIONS_SETTINGS_SHEET_KEY = "VibegrationsSettingsSheet";
