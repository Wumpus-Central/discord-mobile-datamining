// discord_app/modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import databaseNameDefault from "../../../../app_database/system/DatabaseManager.tsx";
import TableRowInner from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { PersistedStore } from "../../../../../../discord_common/js/packages/flux/PersistedStore.tsx";
import closure_7 from "../../../../../stores/AuthenticationStore.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import { createStandardNavigationFactories } from "../../../../../../_runtime/01501_createStandardNavigationFactories.js";

require = arg1;
function DevToolsPersistedStoresActionSheet(store) {
  store = store.store;
  const close = store.close;
  let obj = { header: null, children: null };
  obj = { title: store.getName() };
  obj[0] = jsx(store(6987).BottomSheetTitleHeader, { title: store.getName() });
  obj = { hasIcons: false, children: jsx(store(7215).ActionSheetRow, obj1) };
  obj[1] = jsx(store(7215).ActionSheetRow.Group, { hasIcons: false, children: jsx(store(7215).ActionSheetRow, obj1) });
  return jsx(store(7213).ActionSheet, { hasIcons: false, children: jsx(store(7215).ActionSheetRow, obj1) });
}
let c4 = importAllResult;
let obj = { container: null, sectionHeader: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: ThemesDefault.space.PX_12, flex: 1 };
obj[0] = obj;
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, verticalAlign: "middle", flexDirection: "row", alignItems: "center", flex: 1 };
obj[1] = createCacheKey;
let closure_9 = createCacheKey.createStyles(obj);
let closure_10 = importAllResult.memo(() => jsx(TableRowInner.TableRow, {
  label: "Disable Database",
  start: true,
  onPress() {
    const databaseResult = callback(table[9]).database();
    if (null != databaseResult) {
      databaseResult.disable("via UserSettingsDatabaseControls");
      callback(table[10]).open({ key: "disable_database", content: "Database has been disabled." });
      const tmpResult = callback(table[10]);
    }
  }
}));
let closure_11 = importAllResult.memo(() => {
  let obj = initialize;
  const items = [databaseNameDefault, closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => callback(table[12]).database(id.getId()));
  let str = "No active database.";
  if (null != stateFromStores) {
    str = stateFromStores.name;
  }
  obj = { label: str, start: true, end: true, subLabel: null };
  let combined;
  if (null != stateFromStores) {
    const _HermesInternal = HermesInternal;
    combined = "Handle: " + stateFromStores.handle;
  }
  obj[3] = combined;
  return jsx(TableRowInner.TableRow, { label: str, start: true, end: true, subLabel: null });
});
let closure_12 = importAllResult.memo(() => jsx(TableRowInner.TableRow, {
  label: "Disable + Remove Database",
  onPress() {
    const result = callback(1972).replaceDisableAllDatabases("via UserSettingsDatabaseControls");
    const obj = callback(1972);
    callback(4097).open({ key: "disable_database_and_remove", content: "Database has been removed." });
  }
}));
let closure_13 = importAllResult.memo(() => {
  let obj = createStandardNavigationFactories;
  _require = obj.useNavigation();
  obj = {
    label: "View Cache Stats",
    end: true,
    onPress() {
      navigation.navigate("cacheStats");
    }
  };
  return jsx(require("../../../../../design/components/TableRow/native/TableRow.native.tsx").TableRow, {
    label: "View Cache Stats",
    end: true,
    onPress() {
      navigation.navigate("cacheStats");
    }
  });
});
let closure_14 = { DATABASE_CONTROLS: 0, [0]: "DATABASE_CONTROLS", DATABASE_CURRENT: 1, [1]: "DATABASE_CURRENT", PERSISTED_STORES: 2, [2]: "PERSISTED_STORES" };
let result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx");

export default function DevToolsDataStorageScreen() {
  const tmp = callback2();
  closure_0 = tmp;
  const tmp2 = callback(persistedStores[15])();
  const tmp3 = callback(persistedStores[16])();
  callback = importAllResult.useCallback((arg0) => {
    closure_0 = arg0;
    PersistedStore = found(persistedStores[11]).PersistedStore;
    const all = PersistedStore.getAll();
    found = all.filter((getName) => {
      let hasItem = getName instanceof closure_1_6;
      if (hasItem) {
        const name = getName.getName();
        hasItem = name.toLocaleLowerCase().includes(closure_0.toLocaleLowerCase());
        const toLocaleLowerCaseResult = name.toLocaleLowerCase();
      }
      return hasItem;
    });
    const items = [, , ];
    ({ DATABASE_CONTROLS: arr2[0], DATABASE_CURRENT: arr2[1], PERSISTED_STORES: arr2[2] } = closure_14);
    return {
      sections: items.map((arg0) => {
        if (closure_1_14.DATABASE_CONTROLS === arg0) {
          return 3;
        } else if (tmp.DATABASE_CURRENT === arg0) {
          return 1;
        } else if (tmp.PERSISTED_STORES === arg0) {
          let num3 = 1;
          if (found.length > 0) {
            num3 = found.length;
          }
          return 1 + num3;
        }
      }),
      persistedStores: found
    };
  }, []);
  const tmp6 = callback(importAllResult.useState(() => callback("")), 2);
  const first = tmp6[0];
  persistedStores = first.persistedStores;
  callback = tmp6[1];
  let items = [persistedStores, callback];
  const items1 = [tmp];
  const callback1 = importAllResult.useCallback((arg0, arg1) => {
    const lib = arg1;
    if (closure_1_14.DATABASE_CONTROLS === arg0) {
      if (0 === arg1) {
        return closure_1_8(closure_1_10, {});
      } else if (1 === arg1) {
        return closure_1_8(closure_1_12, {});
      } else if (2 === arg1) {
        return closure_1_8(closure_1_13, {});
      } else {
        return null;
      }
    } else if (tmp.DATABASE_CURRENT === arg0) {
      let tmp14 = null;
      if (0 === arg1) {
        tmp14 = closure_1_8(closure_1_11, {});
      }
      return tmp14;
    } else if (tmp.PERSISTED_STORES === arg0) {
      if (0 === arg1) {
        let obj = { label: null, start: true };
        obj = { size: "md", onChange: null };
        obj[1] = function onChange(arg0) {
          return callback2(callback(arg0));
        };
        obj[0] = closure_1_8(lib(persistedStores[18]).SearchField, obj);
        return closure_1_8(lib(persistedStores[8]).TableRow, obj);
      } else {
        if (1 === arg1) {
          if (0 === persistedStores.length) {
            return closure_1_8(lib(persistedStores[8]).TableRow, { label: "No results found.", end: true });
          }
        }
        obj = { label: null, end: null, onPress: null };
        obj[0] = persistedStores[arg1 - 1].getName();
        obj[1] = arg1 === persistedStores.length;
        obj[2] = function onPress() {
          let obj = callback(persistedStores[19]);
          obj = { default: closure_2_15 };
          obj = {
            store: closure_1_2[closure_0 - 1],
            close() {
              return callback(table[19]).hideActionSheet("DevToolsPersistedStoresActionSheet");
            }
          };
          obj.openLazy(Promise.resolve(obj), "DevToolsPersistedStoresActionSheet", obj);
        };
        return closure_1_8(lib(persistedStores[8]).TableRow, obj);
      }
    } else {
      return null;
    }
  }, items);
  callback2 = importAllResult.useCallback((arg0) => {
    const obj = { style: lib.sectionHeader, variant: "text-sm/semibold", color: "text-default", children: null };
    let str = "Database Controls";
    if (closure_1_14.DATABASE_CONTROLS !== arg0) {
      str = "Database (Current)";
      if (tmp2.DATABASE_CURRENT !== arg0) {
        if (tmp2.PERSISTED_STORES === arg0) {
          str = "Persisted Stores";
        }
      }
    }
    obj[3] = str;
    return closure_1_8(lib(persistedStores[20]).Text, obj);
  }, items1);
  let obj = { sections: first.sections, renderItem: callback1, renderSectionHeader: callback2, insetEnd: null, itemSize: null, sectionHeaderSize: null, estimatedListSize: "windowSize", placeholderConfig: null, wrapChildren: true };
  const tmp4 = callback(persistedStores[17])();
  obj[3] = callback(persistedStores[14])({ includeKeyboardHeight: true }).insets.bottom + callback(persistedStores[7]).space.PX_16;
  obj[4] = tmp2;
  obj[5] = tmp3;
  obj[7] = tmp4;
  obj = { style: tmp.container, children: jsx(callback(persistedStores[21]), { sections: first.sections, renderItem: callback1, renderSectionHeader: callback2, insetEnd: null, itemSize: null, sectionHeaderSize: null, estimatedListSize: "windowSize", placeholderConfig: null, wrapChildren: true }) };
  return <View style={tmp.container}>{jsx(callback(persistedStores[21]), { sections: first.sections, renderItem: callback1, renderSectionHeader: callback2, insetEnd: null, itemSize: null, sectionHeaderSize: null, estimatedListSize: "windowSize", placeholderConfig: null, wrapChildren: true })}</View>;
};