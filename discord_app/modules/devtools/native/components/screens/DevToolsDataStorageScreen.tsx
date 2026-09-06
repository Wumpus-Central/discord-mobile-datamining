// discord_app/modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Link from "../../../../../../_runtime/01484_Link.js";
import DatabaseDaosDefault from "../../../../app_database/DatabaseDaos.tsx";
import DatabaseManagerDefault from "../../../../app_database/system/DatabaseManager.tsx";
import ToastActionCreatorsDefault from "../../../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../../stores/AuthenticationStore.tsx";

require = fn;
function DevToolsPersistedStoresActionSheet(store) {
  store = store.store;
  const close = store.close;
  let obj = { header: null, children: null };
  obj = { title: store.getName() };
  obj.header = jsx(store(7149).BottomSheetTitleHeader, { title: store.getName() });
  obj = {
    hasIcons: false,
    children: jsx(store(7200).ActionSheetRow, {
      variant: "danger",
      label: "Clear persisted store",
      subLabel: "App restart required to re-init the cleared store",
      onPress() {
        store.clear();
        ToastActionCreatorsDefault.open({
          key: "DevToolsPersistedStoresActionSheet",
          content: "Store cleared from persisted storage",
        });
        close();
      },
    }),
  };
  obj.children = jsx(store(7200).ActionSheetRow.Group, {
    hasIcons: false,
    children: jsx(store(7200).ActionSheetRow, {
      variant: "danger",
      label: "Clear persisted store",
      subLabel: "App restart required to re-init the cleared store",
      onPress() {
        store.clear();
        ToastActionCreatorsDefault.open({
          key: "DevToolsPersistedStoresActionSheet",
          content: "Store cleared from persisted storage",
        });
        close();
      },
    }),
  });
  return jsx(store(7198).ActionSheet, {
    hasIcons: false,
    children: jsx(store(7200).ActionSheetRow, {
      variant: "danger",
      label: "Clear persisted store",
      subLabel: "App restart required to re-init the cleared store",
      onPress() {
        store.clear();
        ToastActionCreatorsDefault.open({
          key: "DevToolsPersistedStoresActionSheet",
          content: "Store cleared from persisted storage",
        });
        close();
      },
    }),
  });
}
const View = fn(17).View;
let PersistedStore = fn(505).PersistedStore;
const jsx = fn(21).jsx;
fn(4560);
let obj = { container: null, sectionHeader: null };
obj = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingHorizontal: nativeDefault.space.PX_12,
  flex: 1,
};
obj.container = obj;
const createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  verticalAlign: "middle",
  flexDirection: "row",
  alignItems: "center",
  flex: 1,
};
obj.sectionHeader = createStyles;
let closure_9 = createStyles.createStyles(obj);
let closure_10 = noop.memo(() =>
  jsx(TableRow.TableRow, {
    label: "Disable Database",
    start: true,
    onPress() {
      const databaseResult = DatabaseDaosDefault.database();
      if (null != databaseResult) {
        databaseResult.disable("via UserSettingsDatabaseControls");
        ToastActionCreatorsDefault.open({ key: "disable_database", content: "Database has been disabled." });
        const tmpResult = ToastActionCreatorsDefault;
      }
    },
  }),
);
let closure_11 = noop.memo(() => {
  let obj = initialize;
  const items = [DatabaseManagerDefault, AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => DatabaseManagerDefault.database(id.getId()));
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
  obj.subLabel = combined;
  return jsx(TableRow.TableRow, { label: str, start: true, end: true, subLabel: null });
});
let closure_12 = noop.memo(() =>
  jsx(TableRow.TableRow, {
    label: "Disable + Remove Database",
    onPress() {
      const result = DatabaseManagerDefault.replaceDisableAllDatabases("via UserSettingsDatabaseControls");
      ToastActionCreatorsDefault.open({ key: "disable_database_and_remove", content: "Database has been removed." });
    },
  }),
);
let closure_13 = noop.memo(() => {
  let obj = Link;
  const navigation = obj.useNavigation();
  obj = {
    label: "View Cache Stats",
    end: true,
    onPress() {
      navigation.navigate("cacheStats");
    },
  };
  return jsx(TableRow.TableRow, {
    label: "View Cache Stats",
    end: true,
    onPress() {
      navigation.navigate("cacheStats");
    },
  });
});
let closure_14 = {
  DATABASE_CONTROLS: 0,
  [0]: "DATABASE_CONTROLS",
  DATABASE_CURRENT: 1,
  [1]: "DATABASE_CURRENT",
  PERSISTED_STORES: 2,
  [2]: "PERSISTED_STORES",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx");

export default function DevToolsDataStorageScreen() {
  const tmp = closure_9();
  closure_0 = tmp;
  const tmp2 = callback(persistedStores[15])();
  const tmp3 = callback(persistedStores[16])();
  callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    PersistedStore = found(persistedStores[11]).PersistedStore;
    const all = PersistedStore.getAll();
    found = all.filter((getName) => {
      let hasItem = getName instanceof PersistedStore;
      if (hasItem) {
        const name = getName.getName();
        hasItem = name.toLocaleLowerCase().includes(closure_0.toLocaleLowerCase());
        const toLocaleLowerCaseResult = name.toLocaleLowerCase();
      }
      return hasItem;
    });
    const obj = { sections: null, persistedStores: found };
    const items = [, ,];
    ({ DATABASE_CONTROLS: arr2[0], DATABASE_CURRENT: arr2[1], PERSISTED_STORES: arr2[2] } = closure_14);
    obj.sections = items.map((item) => {
      if (constants.DATABASE_CONTROLS === item) {
        return 3;
      } else if (tmp.DATABASE_CURRENT === item) {
        return 1;
      } else if (tmp.PERSISTED_STORES === item) {
        let num3 = 1;
        if (found.length > 0) {
          num3 = found.length;
        }
        return 1 + num3;
      }
    });
    return obj;
  }, []);
  const tmp6 = _slicedToArray(
    noop.useState(() => callback("")),
    2,
  );
  const first = tmp6[0];
  persistedStores = first.persistedStores;
  _slicedToArray = tmp6[1];
  let items = [persistedStores, callback];
  const items1 = [tmp];
  const callback1 = noop.useCallback((arg0, arg1) => {
    closure_0 = arg1;
    if (constants.DATABASE_CONTROLS === arg0) {
      if (0 === arg1) {
        return <closure_1_10 />;
      } else if (1 === arg1) {
        return <closure_1_12 />;
      } else if (2 === arg1) {
        return <closure_1_13 />;
      } else {
        return null;
      }
    } else if (tmp.DATABASE_CURRENT === arg0) {
      let tmp14 = null;
      if (0 === arg1) {
        tmp14 = <closure_1_11 />;
      }
      return tmp14;
    } else if (tmp.PERSISTED_STORES === arg0) {
      if (0 === arg1) {
        let obj = { label: null, start: true };
        obj = {
          size: "md",
          onChange(arg0) {
            return closure_1_3(callback(arg0));
          },
        };
        obj.label = jsx(closure_0(persistedStores[18]).SearchField, {
          size: "md",
          onChange(arg0) {
            return closure_1_3(callback(arg0));
          },
        });
        return jsx(closure_0(persistedStores[8]).TableRow, {
          size: "md",
          onChange(arg0) {
            return closure_1_3(callback(arg0));
          },
        });
      } else {
        if (1 === arg1) {
          if (0 === persistedStores.length) {
            return jsx(closure_0(persistedStores[8]).TableRow, { label: "No results found.", end: true });
          }
        }
        obj = {
          label: persistedStores[arg1 - 1].getName(),
          end: arg1 === persistedStores.length,
          onPress() {
            let obj = { default: DevToolsPersistedStoresActionSheet };
            obj = {
              store: persistedStores[closure_0 - 1],
              close() {
                return closure_1_1(closure_1_2[19]).hideActionSheet("DevToolsPersistedStoresActionSheet");
              },
            };
            obj.openLazy(Promise.resolve(obj), "DevToolsPersistedStoresActionSheet", obj);
          },
        };
        return jsx(closure_0(persistedStores[8]).TableRow, {
          label: persistedStores[arg1 - 1].getName(),
          end: arg1 === persistedStores.length,
          onPress() {
            let obj = { default: DevToolsPersistedStoresActionSheet };
            obj = {
              store: persistedStores[closure_0 - 1],
              close() {
                return closure_1_1(closure_1_2[19]).hideActionSheet("DevToolsPersistedStoresActionSheet");
              },
            };
            obj.openLazy(Promise.resolve(obj), "DevToolsPersistedStoresActionSheet", obj);
          },
        });
      }
    } else {
      return null;
    }
  }, items);
  const callback2 = noop.useCallback((arg0) => {
    const obj = { style: closure_0.sectionHeader, variant: "text-sm/semibold", color: "text-default", children: null };
    let str = "Database Controls";
    if (constants.DATABASE_CONTROLS !== arg0) {
      str = "Database (Current)";
      if (tmp2.DATABASE_CURRENT !== arg0) {
        if (tmp2.PERSISTED_STORES === arg0) {
          str = "Persisted Stores";
        }
      }
    }
    obj.children = str;
    return jsx(Text_Text.Text, {
      style: closure_0.sectionHeader,
      variant: "text-sm/semibold",
      color: "text-default",
      children: null,
    });
  }, items1);
  let obj = {
    sections: first.sections,
    renderItem: callback1,
    renderSectionHeader: callback2,
    insetEnd: null,
    itemSize: null,
    sectionHeaderSize: null,
    estimatedListSize: "windowSize",
    placeholderConfig: null,
    wrapChildren: true,
  };
  const tmp4 = callback(persistedStores[17])();
  obj.insetEnd =
    callback(persistedStores[14])({ includeKeyboardHeight: true }).insets.bottom +
    callback(persistedStores[7]).space.PX_16;
  obj.itemSize = tmp2;
  obj.sectionHeaderSize = tmp3;
  obj.placeholderConfig = tmp4;
  obj = {
    style: tmp.container,
    children: jsx(callback(persistedStores[21]), {
      sections: first.sections,
      renderItem: callback1,
      renderSectionHeader: callback2,
      insetEnd: null,
      itemSize: null,
      sectionHeaderSize: null,
      estimatedListSize: "windowSize",
      placeholderConfig: null,
      wrapChildren: true,
    }),
  };
  return (
    <View style={tmp.container}>
      {jsx(callback(persistedStores[21]), {
        sections: first.sections,
        renderItem: callback1,
        renderSectionHeader: callback2,
        insetEnd: null,
        itemSize: null,
        sectionHeaderSize: null,
        estimatedListSize: "windowSize",
        placeholderConfig: null,
        wrapChildren: true,
      })}
    </View>
  );
}
