// discord_app/modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../../../discord_common/js/packages/flux/index.tsx";
import PersistedStore2 from "../../../../../../discord_common/js/packages/flux/PersistedStore.tsx";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Link from "../../../../../../_runtime/01491_Link.js";
import DatabaseDaosDefault from "../../../../app_database/DatabaseDaos.tsx";
import DatabaseManagerDefault from "../../../../app_database/system/DatabaseManager.tsx";
import ToastActionCreatorsDefault from "../../../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import TableRow3 from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import useScaledRowHeightDefault from "../../../../main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx";
import FastestListDefault from "../../../../fastest_list/FastestList.android.tsx";
import useFastestListTableRowPlaceholderConfigDefault from "../../../../fastest_list/placeholders/useFastestListTableRowPlaceholderConfig.native.tsx";
import useScaledSectionHeightDefault from "../../../../main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import AuthenticationStore from "../../../../../stores/AuthenticationStore.tsx";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require,
  importDefault,
  navigation,
  num,
  num2,
  num4,
  num5,
  num6,
  obj1,
  obj5,
  store,
  tmp15,
  tmp16,
  tmp17,
  tmp18,
  tmp19,
  tmp20,
  tmp21,
  tmp22,
  tmp23;

let obj2;
let obj3;
const View = react_native.View;
let PersistedStore = PersistedStore2.PersistedStore;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, sectionHeader: obj3 };
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingHorizontal: nativeDefault.space.PX_12,
  flex: 1,
};
createStyles = createStyles.createStyles;
obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  verticalAlign: "middle",
  flexDirection: "row",
  alignItems: "center",
  flex: 1,
};
let closure_9 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let obj = react2;
        const cResult = obj.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp6 = jsx(TableRow3.TableRow, {
            label: "Disable Database",
            start: true,
            onPress() {
              const obj = DatabaseDaosDefault;
              const databaseResult = obj.database();
              if (null != databaseResult) {
                databaseResult.disable("via UserSettingsDatabaseControls");
                const tmpResult = ToastActionCreatorsDefault;
                tmpResult.open({ key: "disable_database", content: "Database has been disabled." });
              }
            },
          });
          cResult[0] = tmp6;
          first = tmp6;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : () =>
        jsx(TableRow3.TableRow, {
          label: "Disable Database",
          start: true,
          onPress() {
            const obj = DatabaseDaosDefault;
            const databaseResult = obj.database();
            if (null != databaseResult) {
              databaseResult.disable("via UserSettingsDatabaseControls");
              const tmpResult = ToastActionCreatorsDefault;
              tmpResult.open({ key: "disable_database", content: "Database has been disabled." });
            }
          },
        }),
);
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let id;
        let tmp4;
        let tmp5;
        let obj = react2;
        const cResult = obj.c(5);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [DatabaseManagerDefault, AuthenticationStore];
          const fn = function s() {
            const obj = DatabaseManagerDefault;
            return obj.database(id.getId());
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        const tmpResult = get_initialized;
        const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
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
          let tmp10;
          if (cResult[3] === combined) {
            tmp10 = cResult[4];
          }
          return tmp10;
        }
        const tmp11 = jsx(TableRow3.TableRow, { label: str, start: true, end: true, subLabel: combined });
        cResult[2] = str;
        cResult[3] = combined;
        cResult[4] = tmp11;
        tmp10 = tmp11;
      }
    : () => {
        let id;
        const useStateFromStores = get_initialized.useStateFromStores;
        const items = [,];
        get_initialized;
        items[0] = DatabaseManagerDefault;
        items[1] = AuthenticationStore;
        const stateFromStores = useStateFromStores(items, () => {
          const obj = DatabaseManagerDefault;
          return obj.database(id.getId());
        });
        let str = "No active database.";
        const TableRow = TableRow3.TableRow;
        if (null != stateFromStores) {
          str = stateFromStores.name;
        }
        let combined;
        if (null != stateFromStores) {
          const _HermesInternal = HermesInternal;
          combined = "Handle: " + stateFromStores.handle;
        }
        return <TableRow label={str} start end subLabel={combined} />;
      },
);
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = memo3(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let obj = react2;
        const cResult = obj.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp6 = jsx(TableRow3.TableRow, {
            label: "Disable + Remove Database",
            onPress() {
              const obj = DatabaseManagerDefault;
              const result = obj.replaceDisableAllDatabases("via UserSettingsDatabaseControls");
              const obj2 = ToastActionCreatorsDefault;
              obj2.open({ key: "disable_database_and_remove", content: "Database has been removed." });
            },
          });
          cResult[0] = tmp6;
          first = tmp6;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : () =>
        jsx(TableRow3.TableRow, {
          label: "Disable + Remove Database",
          onPress() {
            const obj = DatabaseManagerDefault;
            const result = obj.replaceDisableAllDatabases("via UserSettingsDatabaseControls");
            const obj2 = ToastActionCreatorsDefault;
            obj2.open({ key: "disable_database_and_remove", content: "Database has been removed." });
          },
        }),
);
const memo4 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = memo4(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let tmp5;
        const obj = react2;
        const cResult = obj.c(2);
        const obj2 = Link;
        navigation = obj2.useNavigation();
        if (cResult[0] !== navigation) {
          const tmp7 = jsx(TableRow3.TableRow, {
            label: "View Cache Stats",
            end: true,
            onPress() {
              navigation.navigate("cacheStats");
            },
          });
          cResult[0] = navigation;
          cResult[1] = tmp7;
          tmp5 = tmp7;
        } else {
          tmp5 = cResult[1];
        }
        return tmp5;
      }
    : () => {
        const obj = Link;
        let closure_0 = obj.useNavigation();
        return jsx(TableRow3.TableRow, {
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_1;
      let first;
      let persistedStores;
      let sections;
      let tmp10;
      let tmp12;
      let tmp9;
      let obj = require("react");
      const cResult = obj.c(18);
      const tmp3 = closure_9();
      _require = tmp3;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { includeKeyboardHeight: true };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
      const tmp6 = useScaledRowHeightDefault();
      const tmp7 = useScaledSectionHeightDefault();
      const tmp8 = useFastestListTableRowPlaceholderConfigDefault();
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function _(arg0) {
          let found;
          let items;
          closure_0 = arg0;
          PersistedStore = found(closure_2[14]).PersistedStore;
          const all = PersistedStore.getAll();
          found = all.filter((getName) => {
            let hasItem = getName instanceof PersistedStore;
            if (hasItem) {
              const name = getName.getName();
              const toLocaleLowerCaseResult = name.toLocaleLowerCase();
              hasItem = toLocaleLowerCaseResult.includes(closure_0.toLocaleLowerCase());
            }
            return hasItem;
          });
          const obj = {
            sections: items.map((item) => {
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
            }),
            persistedStores: found,
          };
          items = [, ,];
          ({ DATABASE_CONTROLS: arr2[0], DATABASE_CURRENT: arr2[1], PERSISTED_STORES: arr2[2] } = closure_14);
          return obj;
        };
        cResult[1] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[1];
      }
      importDefault = tmp9;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function w() {
          return closure_1("");
        };
        let num3 = 2;
        cResult[2] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[2];
      }
      [tmp12, dependencyMap] = persistedStores(react.useState(tmp10), 2);
      persistedStores(react.useState(tmp10), 2);
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
                TableRow2 = closure_0(closure_2[10]).TableRow;
                obj5 = { size: "md", onChange: null };
                obj5.onChange = function onChange(arg0) {
                  return closure_1_2(closure_1_1(arg0));
                };
                obj1.label = closure_1_8(closure_0(closure_2[20]).SearchField, obj5);
                return closure_1_8(TableRow2, obj1);
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
                TableRow = closure_0(closure_2[10]).TableRow;
                obj.label = obj2.getName();
                obj.end = arg1 === persistedStores.length;
                obj.onPress = function onPress() {
                  let obj = ActionSheetActionCreatorsDefault;
                  const obj2 = { default: closure_15 };
                  const obj3 = {
                    store: persistedStores[closure_0 - 1],
                    close() {
                      const obj = closure_1_1(closure_1_2[21]);
                      return obj.hideActionSheet("DevToolsPersistedStoresActionSheet");
                    },
                  };
                  obj.openLazy(Promise.resolve(obj2), "DevToolsPersistedStoresActionSheet", obj3);
                };
                return closure_1_8(TableRow, obj);
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
                TableRow2 = closure_0(closure_2[10]).TableRow;
                obj5 = { size: "md", onChange: null };
                obj5.onChange = function onChange(arg0) {
                  return closure_1_2(closure_1_1(arg0));
                };
                obj1.label = closure_1_8(closure_0(closure_2[20]).SearchField, obj5);
                return closure_1_8(TableRow2, obj1);
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
                TableRow = closure_0(closure_2[10]).TableRow;
                obj.label = obj2.getName();
                obj.end = arg1 === persistedStores.length;
                obj.onPress = function onPress() {
                  let obj = ActionSheetActionCreatorsDefault;
                  const obj2 = { default: closure_15 };
                  const obj3 = {
                    store: persistedStores[closure_0 - 1],
                    close() {
                      const obj = closure_1_1(closure_1_2[21]);
                      return obj.hideActionSheet("DevToolsPersistedStoresActionSheet");
                    },
                  };
                  obj.openLazy(Promise.resolve(obj2), "DevToolsPersistedStoresActionSheet", obj3);
                };
                return closure_1_8(TableRow, obj);
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
            let str = "Database Controls";
            const Text = Text_Text.Text;
            if (constants.DATABASE_CONTROLS !== arg0) {
              str = "Database (Current)";
              if (constants.DATABASE_CURRENT !== arg0) {
                if (constants.PERSISTED_STORES === arg0) {
                  str = "Persisted Stores";
                }
              }
            }
            return (
              <Text style={closure_0.sectionHeader} variant="text-sm/semibold" color="text-default">
                {str}
              </Text>
            );
          }
        }
        cResult[5] = tmp3.sectionHeader;
        cResult[6] = U;
      } else {
        class U {
          constructor(arg0) {
            let str = "Database Controls";
            const Text = Text_Text.Text;
            if (constants.DATABASE_CONTROLS !== arg0) {
              str = "Database (Current)";
              if (constants.DATABASE_CURRENT !== arg0) {
                if (constants.PERSISTED_STORES === arg0) {
                  str = "Persisted Stores";
                }
              }
            }
            return (
              <Text style={closure_0.sectionHeader} variant="text-sm/semibold" color="text-default">
                {str}
              </Text>
            );
          }
        }
      }
      const sum = insets.bottom + tmp5(587).space.PX_16;
      if (cResult[7] === tmp6) {
        class U {
          constructor(arg0) {
            let str = "Database Controls";
            const Text = Text_Text.Text;
            if (constants.DATABASE_CONTROLS !== arg0) {
              str = "Database (Current)";
              if (constants.DATABASE_CURRENT !== arg0) {
                if (constants.PERSISTED_STORES === arg0) {
                  str = "Persisted Stores";
                }
              }
            }
            return (
              <Text style={closure_0.sectionHeader} variant="text-sm/semibold" color="text-default">
                {str}
              </Text>
            );
          }
        }
      }
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
      jsx(FastestListDefault, {
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
      let callback;
      let closure_3;
      let first;
      let persistedStores;
      const tmp = closure_9();
      let closure_0 = tmp;
      const insets = callback(persistedStores[16])({ includeKeyboardHeight: true }).insets;
      const tmp2 = callback(persistedStores[17])();
      const tmp3 = callback(persistedStores[18])();
      const tmp4 = callback(persistedStores[19])();
      callback = react.useCallback((arg0) => {
        let found;
        let items;
        closure_0 = arg0;
        PersistedStore = found(persistedStores[14]).PersistedStore;
        const all = PersistedStore.getAll();
        found = all.filter((getName) => {
          let hasItem = getName instanceof PersistedStore;
          if (hasItem) {
            const name = getName.getName();
            const toLocaleLowerCaseResult = name.toLocaleLowerCase();
            hasItem = toLocaleLowerCaseResult.includes(closure_0.toLocaleLowerCase());
          }
          return hasItem;
        });
        const obj = {
          sections: items.map((item) => {
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
          }),
          persistedStores: found,
        };
        items = [, ,];
        ({ DATABASE_CONTROLS: arr2[0], DATABASE_CURRENT: arr2[1], PERSISTED_STORES: arr2[2] } = closure_14);
        return obj;
      }, []);
      [first, _slicedToArray] = react.useState(() => callback(""));
      persistedStores = first.persistedStores;
      let items = [persistedStores, callback];
      const sections = first.sections;
      const items1 = [tmp];
      const callback1 = react.useCallback((arg0, arg1) => {
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
            const TableRow2 = closure_0(persistedStores[10]).TableRow;
            return <TableRow2 label={null} start />;
          } else {
            if (1 === arg1) {
              if (0 === persistedStores.length) {
                return jsx(closure_0(persistedStores[10]).TableRow, { label: "No results found.", end: true });
              }
            }
            let obj2 = persistedStores[arg1 - 1];
            const TableRow = closure_0(persistedStores[10]).TableRow;
            return (
              <TableRow
                label={obj2.getName()}
                end={arg1 === persistedStores.length}
                onPress={function onPress() {
                  let obj = ActionSheetActionCreatorsDefault;
                  const obj2 = { default: closure_15 };
                  const obj3 = {
                    store: persistedStores[closure_0 - 1],
                    close() {
                      const obj = closure_1_1(closure_1_2[21]);
                      return obj.hideActionSheet("DevToolsPersistedStoresActionSheet");
                    },
                  };
                  obj.openLazy(Promise.resolve(obj2), "DevToolsPersistedStoresActionSheet", obj3);
                }}
              />
            );
          }
        } else {
          return null;
        }
      }, items);
      const callback2 = react.useCallback((arg0) => {
        let str = "Database Controls";
        const Text = Text_Text.Text;
        if (constants.DATABASE_CONTROLS !== arg0) {
          str = "Database (Current)";
          if (constants.DATABASE_CURRENT !== arg0) {
            if (constants.PERSISTED_STORES === arg0) {
              str = "Persisted Stores";
            }
          }
        }
        return (
          <Text style={closure_0.sectionHeader} variant="text-sm/semibold" color="text-default">
            {str}
          </Text>
        );
      }, items1);
      callback(persistedStores[23]);
      return (
        <View style={tmp.container}>
          <tmp10
            sections={sections}
            renderItem={callback1}
            renderSectionHeader={callback2}
            insetEnd={insets.bottom + callback(persistedStores[7]).space.PX_16}
            itemSize={tmp2}
            sectionHeaderSize={tmp3}
            estimatedListSize="windowSize"
            placeholderConfig={tmp4}
            wrapChildren
          />
        </View>
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (store) => {
      let tmp4;
      let tmp6;
      let obj = store(576);
      const cResult = obj.c(10);
      store = store.store;
      const close = store.close;
      if (cResult[0] !== store) {
        const name = store.getName();
        cResult[0] = store;
        cResult[1] = name;
        tmp4 = name;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== tmp4) {
        const tmp8 = jsx(store(6644).BottomSheetTitleHeader, { title: tmp4 });
        cResult[2] = tmp4;
        cResult[3] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === close) {
        let tmp9;
        if (cResult[5] === store) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === tmp6) {
          let tmp11;
          if (cResult[8] === tmp9) {
            tmp11 = cResult[9];
          }
          return tmp11;
        }
        const tmp13 = jsx(store(6701).ActionSheet, { header: tmp6, children: tmp9 });
        cResult[7] = tmp6;
        cResult[8] = tmp9;
        cResult[9] = tmp13;
        tmp11 = tmp13;
      }
      const Group = tmp(6697).ActionSheetRow.Group;
      const tmp10 = <Group hasIcons={false}>{null}</Group>;
      cResult[4] = close;
      cResult[5] = store;
      cResult[6] = tmp10;
      tmp9 = tmp10;
    }
  : (store) => {
      store = store.store;
      const close = store.close;
      const ActionSheet = store(6701).ActionSheet;
      ({ title: store.getName() });
      const BottomSheetTitleHeader = store(6644).BottomSheetTitleHeader;
      const Group = store(6697).ActionSheetRow.Group;
      return <ActionSheet header={null}>{null}</ActionSheet>;
    };
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx");

export default tmp4;
