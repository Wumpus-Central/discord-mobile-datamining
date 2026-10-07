// discord_app/modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Link from "../../../../../../_runtime/01491_Link.js";
import DatabaseDaosDefault from "../../../../app_database/DatabaseDaos.tsx";
import DatabaseManagerDefault from "../../../../app_database/system/DatabaseManager.tsx";
import ToastActionCreatorsDefault from "../../../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import useScaledRowHeightDefault from "../../../../main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx";
import FastestListDefault from "../../../../fastest_list/FastestList.android.tsx";
import useFastestListTableRowPlaceholderConfigDefault from "../../../../fastest_list/placeholders/useFastestListTableRowPlaceholderConfig.native.tsx";
import useScaledSectionHeightDefault from "../../../../main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../../stores/AuthenticationStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let PersistedStore = fn(505).PersistedStore;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    paddingHorizontal: nativeDefault.space.PX_12,
    flex: 1,
  },
  sectionHeader: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingHorizontal: nativeDefault.space.PX_12,
  flex: 1,
};
obj.sectionHeader = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  verticalAlign: "middle",
  flexDirection: "row",
  alignItems: "center",
  flex: 1,
};
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_10 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = {
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
          };
          const tmp6 = jsx(TableRow.TableRow, {
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
          });
          cResult[0] = tmp6;
          let first = tmp6;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : () =>
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
ReactCompilerGating = fn(558);
let closure_11 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(5);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [DatabaseManagerDefault, AuthenticationStore];
          const fn = function s() {
            return DatabaseManagerDefault.database(id.getId());
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
        let str = "No active database.";
        if (null != stateFromStores) {
          str = stateFromStores.name;
        }
        let combined;
        if (null != stateFromStores) {
          const _HermesInternal = HermesInternal;
          combined = "Handle: " + stateFromStores.handle;
        }
        if (cResult[2] === str) {
          if (cResult[3] === combined) {
            let tmp10 = cResult[4];
          }
          return tmp10;
        }
        const tmp11 = jsx(TableRow.TableRow, { label: str, start: true, end: true, subLabel: combined });
        cResult[2] = str;
        cResult[3] = combined;
        cResult[4] = tmp11;
        tmp10 = tmp11;
        const tmpResult = initialize;
      }
    : () => {
        const items = [DatabaseManagerDefault, AuthenticationStore];
        const stateFromStores = initialize.useStateFromStores(items, () => DatabaseManagerDefault.database(id.getId()));
        let str = "No active database.";
        if (null != stateFromStores) {
          str = stateFromStores.name;
        }
        const obj2 = { label: str, start: true, end: true, subLabel: null };
        let combined;
        if (null != stateFromStores) {
          const _HermesInternal = HermesInternal;
          combined = "Handle: " + stateFromStores.handle;
        }
        obj2.subLabel = combined;
        return jsx(TableRow.TableRow, { label: str, start: true, end: true, subLabel: null });
      },
);
ReactCompilerGating = fn(558);
let closure_12 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = {
            label: "Disable + Remove Database",
            onPress() {
              const result = DatabaseManagerDefault.replaceDisableAllDatabases("via UserSettingsDatabaseControls");
              ToastActionCreatorsDefault.open({
                key: "disable_database_and_remove",
                content: "Database has been removed.",
              });
            },
          };
          const tmp6 = jsx(TableRow.TableRow, {
            label: "Disable + Remove Database",
            onPress() {
              const result = DatabaseManagerDefault.replaceDisableAllDatabases("via UserSettingsDatabaseControls");
              ToastActionCreatorsDefault.open({
                key: "disable_database_and_remove",
                content: "Database has been removed.",
              });
            },
          });
          cResult[0] = tmp6;
          let first = tmp6;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : () =>
        jsx(TableRow.TableRow, {
          label: "Disable + Remove Database",
          onPress() {
            const result = DatabaseManagerDefault.replaceDisableAllDatabases("via UserSettingsDatabaseControls");
            ToastActionCreatorsDefault.open({
              key: "disable_database_and_remove",
              content: "Database has been removed.",
            });
          },
        }),
);
ReactCompilerGating = fn(558);
let closure_13 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(2);
        const navigation = Link.useNavigation();
        if (cResult[0] !== navigation) {
          const obj3 = {
            label: "View Cache Stats",
            end: true,
            onPress() {
              navigation.navigate("cacheStats");
            },
          };
          const tmp7 = jsx(TableRow.TableRow, {
            label: "View Cache Stats",
            end: true,
            onPress() {
              navigation.navigate("cacheStats");
            },
          });
          cResult[0] = navigation;
          cResult[1] = tmp7;
          let tmp5 = tmp7;
        } else {
          tmp5 = cResult[1];
        }
        return tmp5;
      }
    : () => {
        const navigation = Link.useNavigation();
        return jsx(TableRow.TableRow, {
          label: "View Cache Stats",
          end: true,
          onPress() {
            navigation.navigate("cacheStats");
          },
        });
      },
);
const constants = {
  DATABASE_CONTROLS: 0,
  [0]: "DATABASE_CONTROLS",
  DATABASE_CURRENT: 1,
  [1]: "DATABASE_CURRENT",
  PERSISTED_STORES: 2,
  [2]: "PERSISTED_STORES",
};
fn(558);
let obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  verticalAlign: "middle",
  flexDirection: "row",
  alignItems: "center",
  flex: 1,
};
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (store) => {
      const cResult = store(576).c(10);
      store = store.store;
      const close = store.close;
      if (cResult[0] !== store) {
        const name = store.getName();
        cResult[0] = store;
        cResult[1] = name;
        let tmp4 = name;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== tmp4) {
        const obj2 = { title: tmp4 };
        const tmp8 = jsx(tmp(6651).BottomSheetTitleHeader, { title: tmp4 });
        cResult[2] = tmp4;
        cResult[3] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === close) {
        if (cResult[5] === store) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] === tmp6) {
          if (cResult[8] === tmp9) {
            let tmp11 = cResult[9];
          }
          return tmp11;
        }
        const obj3 = { header: tmp6, children: tmp9 };
        const tmp13 = jsx(tmp(6708).ActionSheet, { header: tmp6, children: tmp9 });
        cResult[7] = tmp6;
        cResult[8] = tmp9;
        cResult[9] = tmp13;
        tmp11 = tmp13;
      }
      const obj4 = {
        hasIcons: false,
        children: jsx(store(6704).ActionSheetRow, {
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
      const tmp10 = jsx(store(6704).ActionSheetRow.Group, {
        hasIcons: false,
        children: jsx(store(6704).ActionSheetRow, {
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
      cResult[4] = close;
      cResult[5] = store;
      cResult[6] = tmp10;
      tmp9 = tmp10;
      const obj = store(576);
      const obj5 = {
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
      };
    }
  : (store) => {
      store = store.store;
      const close = store.close;
      const obj = { header: jsx(store(6651).BottomSheetTitleHeader, { title: store.getName() }), children: null };
      const obj3 = {
        hasIcons: false,
        children: jsx(store(6704).ActionSheetRow, {
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
      obj.children = jsx(store(6704).ActionSheetRow.Group, {
        hasIcons: false,
        children: jsx(store(6704).ActionSheetRow, {
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
      return jsx(store(6708).ActionSheet, {
        header: jsx(store(6651).BottomSheetTitleHeader, { title: store.getName() }),
        children: null,
      });
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = require("c").c(18);
      const tmp3 = closure_9();
      _require = tmp3;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { includeKeyboardHeight: true };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp6 = useScaledRowHeightDefault();
      const tmp7 = useScaledSectionHeightDefault();
      const tmp8 = useFastestListTableRowPlaceholderConfigDefault();
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function _(arg0) {
          closure_0 = arg0;
          PersistedStore = found(504).PersistedStore;
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
            } else if (constants.DATABASE_CURRENT === item) {
              return 1;
            } else if (constants.PERSISTED_STORES === item) {
              let num3 = 1;
              if (found.length > 0) {
                num3 = found.length;
              }
              return 1 + num3;
            }
          });
          return obj;
        };
        cResult[1] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[1];
      }
      importDefault = tmp9;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function w() {
          return closure_1("");
        };
        cResult[2] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[2];
      }
      let obj = require("c");
      [tmp12, dependencyMap] = persistedStores(noop.useState(tmp10), 2);
      ({ sections, persistedStores } = tmp12);
      if (cResult[3] !== persistedStores) {
        class O {
          constructor(arg0, arg1) {
            closure_0 = arg1;
            tmp = closure_1_14;
            if (closure_1_14.DATABASE_CONTROLS === arg0) {
              num3 = 0;
              if (0 === arg1) {
                tmp22 = closure_1_8;
                tmp23 = closure_1_10;
                return closure_1_8(closure_1_10, {});
              } else {
                num4 = 1;
                if (1 === arg1) {
                  tmp20 = closure_1_8;
                  tmp21 = closure_1_12;
                  return closure_1_8(closure_1_12, {});
                } else {
                  num5 = 2;
                  if (2 === arg1) {
                    tmp18 = closure_1_8;
                    tmp19 = closure_1_13;
                    return closure_1_8(closure_1_13, {});
                  } else {
                    tmp17 = null;
                    return null;
                  }
                }
              }
            } else if (tmp.DATABASE_CURRENT === arg0) {
              num2 = 0;
              tmp14 = null;
              if (0 === arg1) {
                tmp15 = closure_1_8;
                tmp16 = closure_1_11;
                tmp14 = closure_1_8(closure_1_11, {});
              }
              return tmp14;
            } else if (tmp.PERSISTED_STORES === arg0) {
              num = 0;
              if (0 === arg1) {
                tmp11 = closure_1_8;
                tmp12 = closure_0;
                tmp13 = closure_2;
                obj1 = { label: null, start: true };
                obj5 = { size: "md", onChange: null };
                obj5.onChange = function onChange(arg0) {
                  return dependencyMap(closure_1_1(arg0));
                };
                obj1.label = closure_1_8(closure_0(closure_2[20]).SearchField, obj5);
                return closure_1_8(closure_0(closure_2[10]).TableRow, obj1);
              } else {
                num6 = 1;
                if (1 === arg1) {
                  tmp3 = persistedStores;
                  if (0 === persistedStores.length) {
                    tmp8 = closure_1_8;
                    tmp9 = closure_0;
                    tmp10 = closure_2;
                    return closure_1_8(closure_0(closure_2[10]).TableRow, { label: "No results found.", end: true });
                  }
                }
                tmp4 = closure_1_8;
                tmp5 = closure_0;
                tmp6 = closure_2;
                obj = { label: null, end: null, onPress: null };
                tmp7 = persistedStores;
                obj2 = persistedStores[arg1 - 1];
                obj.label = obj2.getName();
                obj.end = arg1 === persistedStores.length;
                obj.onPress = function onPress() {
                  ActionSheetActionCreatorsDefault.openLazy(
                    Promise.resolve({ default: closure_15 }),
                    "DevToolsPersistedStoresActionSheet",
                    {
                      store: persistedStores[closure_0 - 1],
                      close() {
                        return closure_1_1(closure_1_2[21]).hideActionSheet("DevToolsPersistedStoresActionSheet");
                      },
                    },
                  );
                };
                return closure_1_8(closure_0(closure_2[10]).TableRow, obj);
              }
            } else {
              tmp2 = null;
              return null;
            }
          }
        }
        cResult[3] = persistedStores;
        cResult[4] = O;
      } else {
        class O {
          constructor(arg0, arg1) {
            closure_0 = arg1;
            tmp = closure_1_14;
            if (closure_1_14.DATABASE_CONTROLS === arg0) {
              num3 = 0;
              if (0 === arg1) {
                tmp22 = closure_1_8;
                tmp23 = closure_1_10;
                return closure_1_8(closure_1_10, {});
              } else {
                num4 = 1;
                if (1 === arg1) {
                  tmp20 = closure_1_8;
                  tmp21 = closure_1_12;
                  return closure_1_8(closure_1_12, {});
                } else {
                  num5 = 2;
                  if (2 === arg1) {
                    tmp18 = closure_1_8;
                    tmp19 = closure_1_13;
                    return closure_1_8(closure_1_13, {});
                  } else {
                    tmp17 = null;
                    return null;
                  }
                }
              }
            } else if (tmp.DATABASE_CURRENT === arg0) {
              num2 = 0;
              tmp14 = null;
              if (0 === arg1) {
                tmp15 = closure_1_8;
                tmp16 = closure_1_11;
                tmp14 = closure_1_8(closure_1_11, {});
              }
              return tmp14;
            } else if (tmp.PERSISTED_STORES === arg0) {
              num = 0;
              if (0 === arg1) {
                tmp11 = closure_1_8;
                tmp12 = closure_0;
                tmp13 = closure_2;
                obj1 = { label: null, start: true };
                obj5 = { size: "md", onChange: null };
                obj5.onChange = function onChange(arg0) {
                  return dependencyMap(closure_1_1(arg0));
                };
                obj1.label = closure_1_8(closure_0(closure_2[20]).SearchField, obj5);
                return closure_1_8(closure_0(closure_2[10]).TableRow, obj1);
              } else {
                num6 = 1;
                if (1 === arg1) {
                  tmp3 = persistedStores;
                  if (0 === persistedStores.length) {
                    tmp8 = closure_1_8;
                    tmp9 = closure_0;
                    tmp10 = closure_2;
                    return closure_1_8(closure_0(closure_2[10]).TableRow, { label: "No results found.", end: true });
                  }
                }
                tmp4 = closure_1_8;
                tmp5 = closure_0;
                tmp6 = closure_2;
                obj = { label: null, end: null, onPress: null };
                tmp7 = persistedStores;
                obj2 = persistedStores[arg1 - 1];
                obj.label = obj2.getName();
                obj.end = arg1 === persistedStores.length;
                obj.onPress = function onPress() {
                  ActionSheetActionCreatorsDefault.openLazy(
                    Promise.resolve({ default: closure_15 }),
                    "DevToolsPersistedStoresActionSheet",
                    {
                      store: persistedStores[closure_0 - 1],
                      close() {
                        return closure_1_1(closure_1_2[21]).hideActionSheet("DevToolsPersistedStoresActionSheet");
                      },
                    },
                  );
                };
                return closure_1_8(closure_0(closure_2[10]).TableRow, obj);
              }
            } else {
              tmp2 = null;
              return null;
            }
          }
        }
      }
      if (cResult[5] !== tmp3.sectionHeader) {
        class U {
          constructor(arg0) {
            tmp = jsx;
            obj = {
              style: closure_0.sectionHeader,
              variant: "text-sm/semibold",
              color: "text-default",
              children: null,
            };
            tmp2 = closure_14;
            str = "Database Controls";
            if (closure_14.DATABASE_CONTROLS !== arg0) {
              str = "Database (Current)";
              if (tmp2.DATABASE_CURRENT !== arg0) {
                if (tmp2.PERSISTED_STORES === arg0) {
                  str = "Persisted Stores";
                }
              }
            }
            obj.children = str;
            return tmp(closure_0(closure_2[22]).Text, obj);
          }
        }
        cResult[5] = tmp3.sectionHeader;
        cResult[6] = U;
      } else {
        class U {
          constructor(arg0) {
            tmp = jsx;
            obj = {
              style: closure_0.sectionHeader,
              variant: "text-sm/semibold",
              color: "text-default",
              children: null,
            };
            tmp2 = closure_14;
            str = "Database Controls";
            if (closure_14.DATABASE_CONTROLS !== arg0) {
              str = "Database (Current)";
              if (tmp2.DATABASE_CURRENT !== arg0) {
                if (tmp2.PERSISTED_STORES === arg0) {
                  str = "Persisted Stores";
                }
              }
            }
            obj.children = str;
            return tmp(closure_0(closure_2[22]).Text, obj);
          }
        }
      }
      const sum = useSafeAreaInsetsKeyboardAwareDefault(first).insets.bottom + tmp5(587).space.PX_16;
      if (cResult[7] === tmp6) {
        class U {
          constructor(arg0) {
            tmp = jsx;
            obj = {
              style: closure_0.sectionHeader,
              variant: "text-sm/semibold",
              color: "text-default",
              children: null,
            };
            tmp2 = closure_14;
            str = "Database Controls";
            if (closure_14.DATABASE_CONTROLS !== arg0) {
              str = "Database (Current)";
              if (tmp2.DATABASE_CURRENT !== arg0) {
                if (tmp2.PERSISTED_STORES === arg0) {
                  str = "Persisted Stores";
                }
              }
            }
            obj.children = str;
            return tmp(closure_0(closure_2[22]).Text, obj);
          }
        }
      }
      const tmp11 = persistedStores(noop.useState(tmp10), 2);
      cResult[7] = tmp6;
      cResult[8] = tmp8;
      cResult[9] = O;
      cResult[10] = U;
      cResult[11] = tmp7;
      cResult[12] = sections;
      cResult[13] = sum;
      cResult[14] = jsx(FastestListDefault, {
        sections,
        renderItem: O,
        renderSectionHeader: U,
        insetEnd: sum,
        itemSize: tmp6,
        sectionHeaderSize: tmp7,
        estimatedListSize: "windowSize",
        placeholderConfig: tmp8,
        wrapChildren: true,
      });
      const tmp16 = jsx(FastestListDefault, {
        sections,
        renderItem: O,
        renderSectionHeader: U,
        insetEnd: sum,
        itemSize: tmp6,
        sectionHeaderSize: tmp7,
        estimatedListSize: "windowSize",
        placeholderConfig: tmp8,
        wrapChildren: true,
      });
    }
  : () => {
      const tmp = closure_9();
      closure_0 = tmp;
      const tmp2 = callback(persistedStores[17])();
      const tmp3 = callback(persistedStores[18])();
      callback = noop.useCallback((arg0) => {
        closure_0 = arg0;
        PersistedStore = found(persistedStores[14]).PersistedStore;
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
          } else if (constants.DATABASE_CURRENT === item) {
            return 1;
          } else if (constants.PERSISTED_STORES === item) {
            let num3 = 1;
            if (found.length > 0) {
              num3 = found.length;
            }
            return 1 + num3;
          }
        });
        return obj;
      }, []);
      [first, _slicedToArray] = noop.useState(() => callback(""));
      persistedStores = first.persistedStores;
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
        } else if (constants.DATABASE_CURRENT === arg0) {
          let tmp14 = null;
          if (0 === arg1) {
            tmp14 = <closure_1_11 />;
          }
          return tmp14;
        } else if (constants.PERSISTED_STORES === arg0) {
          if (0 === arg1) {
            const obj3 = { label: null, start: true };
            const obj4 = {
              size: "md",
              onChange(arg0) {
                return closure_1_3(callback(arg0));
              },
            };
            obj3.label = jsx(closure_0(persistedStores[20]).SearchField, {
              size: "md",
              onChange(arg0) {
                return closure_1_3(callback(arg0));
              },
            });
            return jsx(closure_0(persistedStores[10]).TableRow, { label: null, start: true });
          } else {
            if (1 === arg1) {
              if (0 === persistedStores.length) {
                return jsx(closure_0(persistedStores[10]).TableRow, { label: "No results found.", end: true });
              }
            }
            const obj = {
              label: persistedStores[arg1 - 1].getName(),
              end: arg1 === persistedStores.length,
              onPress() {
                ActionSheetActionCreatorsDefault.openLazy(
                  Promise.resolve({ default: closure_15 }),
                  "DevToolsPersistedStoresActionSheet",
                  {
                    store: persistedStores[closure_0 - 1],
                    close() {
                      return closure_1_1(closure_1_2[21]).hideActionSheet("DevToolsPersistedStoresActionSheet");
                    },
                  },
                );
              },
            };
            return jsx(closure_0(persistedStores[10]).TableRow, {
              label: persistedStores[arg1 - 1].getName(),
              end: arg1 === persistedStores.length,
              onPress() {
                ActionSheetActionCreatorsDefault.openLazy(
                  Promise.resolve({ default: closure_15 }),
                  "DevToolsPersistedStoresActionSheet",
                  {
                    store: persistedStores[closure_0 - 1],
                    close() {
                      return closure_1_1(closure_1_2[21]).hideActionSheet("DevToolsPersistedStoresActionSheet");
                    },
                  },
                );
              },
            });
          }
        } else {
          return null;
        }
      }, items);
      const callback2 = noop.useCallback((arg0) => {
        const obj = {
          style: closure_0.sectionHeader,
          variant: "text-sm/semibold",
          color: "text-default",
          children: null,
        };
        let str = "Database Controls";
        if (constants.DATABASE_CONTROLS !== arg0) {
          str = "Database (Current)";
          if (constants.DATABASE_CURRENT !== arg0) {
            if (constants.PERSISTED_STORES === arg0) {
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
      const tmp4 = callback(persistedStores[19])();
      obj.insetEnd =
        callback(persistedStores[16])({ includeKeyboardHeight: true }).insets.bottom +
        callback(persistedStores[7]).space.PX_16;
      obj.itemSize = tmp2;
      obj.sectionHeaderSize = tmp3;
      obj.placeholderConfig = tmp4;
      const tmp10 = callback(persistedStores[23]);
      return (
        <View style={tmp.container}>
          {jsx(callback(persistedStores[23]), {
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
    };
