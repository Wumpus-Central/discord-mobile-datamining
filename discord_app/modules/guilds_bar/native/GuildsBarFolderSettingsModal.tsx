// discord_app/modules/guilds_bar/native/GuildsBarFolderSettingsModal.tsx
import intl5 from "../../../intl/index.native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import UserSettingsActionCreators from "../../../actions/UserSettingsActionCreators.tsx";
import GuildsBarFolderSettingsModalActionCreators from "GuildsBarFolderSettingsModalActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";
import GuildsBarConstants from "../GuildsBarConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2, folderId, saveGuildFoldersResult;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let unpackModuleId;
function render() {
  obj = {};
  const merged = Object.assign(obj);
  return closure_2_10(closure_2_13, obj);
}
function GuildFolderSettingsScene(color) {
  let Stack;
  let int2hexResult;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let name;
  let obj2;
  let obj3;
  let obj7;
  let onNameChange;
  let tmp2Result;
  color = color.color;
  const onColorChange = color.onColorChange;
  ({ name, onNameChange } = color);
  const tmp = closure_12();
  const tmp2 = onColorChange;
  const items = [color, onColorChange];
  const insets = onColorChange(6471)().insets;
  let obj = {
    style: tmp.scrollView,
    keyboardShouldPersistTaps: "always",
    contentInset: { top: 0 },
    automaticallyAdjustContentInsets: false,
    contentContainerStyle: obj2,
    children: closure_11(Stack, obj3),
  };
  obj2 = { padding: onColorChange(587).space.PX_16, paddingBottom: 38 + insets.bottom };
  const callback = react.useCallback(() => {
    hasOwnProperty.dismiss();
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let tmp4 = color;
    ActionSheetActionCreatorsDefault;
    const tmp3 = asyncRequire(16231, dependencyMap.paths);
    if (color == null) {
      tmp4 = metroImportAll;
    }
    const obj = { color: tmp4, defaultColor: metroImportAll, onSelect: onColorChange };
    openLazy(tmp3, "RoleColorPicker", obj);
  }, items);
  obj3 = { spacing: onColorChange(587).space.PX_16, children: items1 };
  Stack = color(5593).Stack;
  const obj4 = {
    label: intl.string(color(1126).t.tGRbjA),
    placeholder: intl2.string(color(1126).t.xV9hVh),
    value: name,
    onChange: onNameChange,
    maxLength: 32,
    autoFocus: true,
    clearable: true,
  };
  const TextInput = color(6098).TextInput;
  intl = color(1126).intl;
  intl2 = color(1126).intl;
  items1 = [closure_10(TextInput, obj4)];
  const TableRowGroup = color(6074).TableRowGroup;
  const obj5 = {
    label: intl3.string(color(1126).t.xpurRF),
    subLabel: int2hexResult,
    onPress: callback,
    arrow: true,
    trailing: closure_10(tmp2Result, obj7),
  };
  const TableRow = color(5993).TableRow;
  intl3 = color(1126).intl;
  if (null != color) {
    const tmp8Result = color(1103);
    int2hexResult = tmp8Result.int2hex(color);
  } else {
    const intl4 = tmp8(1126).intl;
    int2hexResult = intl4.string(tmp8(1126).t.bBvAEH);
  }
  let tmp11 = color;
  tmp2Result = tmp2(14423);
  if (color == null) {
    tmp11 = closure_8;
  }
  const obj6 = { hasIcons: false, children: closure_10(TableRow, obj5) };
  obj7 = { color: tmp11, style: tmp.colorBlock };
  items1[1] = closure_10(TableRowGroup, obj6);
  return closure_10(closure_6, obj);
}
let react = react_mod;
({ Keyboard: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ DEFAULT_FOLDER_COLOR: metroImportAll, normalizeFolderColor: c9 } = GuildsBarConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({
  scrollView: { flex: 1 },
  colorBlock: { marginHorizontal: 0, marginVertical: 0, minWidth: 24, height: 24, borderRadius: 3 },
});
let c14 = "Folder Settings";
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (folderId) => {
      let closure_4;
      let first;
      let first2;
      let headerTextButton;
      let initialFolderColor;
      let initialFolderName;
      let intl;
      let tmp6;
      let tmp7;
      let tmpResult2;
      const tmp = folderId;
      let obj = folderId(576);
      const cResult = obj.c(18);
      folderId = folderId.folderId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SortedGuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== folderId) {
        const fn = function s() {
          let folderColor;
          const guildFolderById = SortedGuildStore.getGuildFolderById(folderId);
          let folderName;
          if (guildFolderById != null) {
            folderName = guildFolderById.folderName;
          }
          let str = "";
          if (null != folderName) {
            str = guildFolderById.folderName;
          }
          const obj = { initialFolderName: str, initialFolderColor: React4(folderColor) };
          folderColor = undefined;
          if (guildFolderById != null) {
            folderColor = guildFolderById.folderColor;
          }
          return obj;
        };
        const items1 = [folderId];
        cResult[1] = folderId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6, tmp7);
      ({ initialFolderName, initialFolderColor } = stateFromStoresObject);
      const tmp9 = first2(react.useState(initialFolderName), 2);
      const first1 = tmp9[0];
      dependencyMap = tmp9[1];
      const tmp11 = first2(react.useState(initialFolderColor), 2);
      first2 = tmp11[0];
      react = tmp11[1];
      if (cResult[4] === first2) {
        if (cResult[5] === folderId) {
          let tmp14;
          let tmp15;
          if (cResult[6] === first1) {
            tmp14 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function w() {
              const obj = folderId(closure_2[24]);
              const result = obj.hideGuildsBarFolderModal();
            };
            cResult[8] = fn2;
            tmp15 = fn2;
          } else {
            tmp15 = cResult[8];
          }
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor(arg0) {
                return closure_2(arg0);
              }
            }
            cResult[9] = M;
          } else {
            class M {
              constructor(arg0) {
                return closure_2(arg0);
              }
            }
          }
          const _Symbol3 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class P {
              constructor(arg0) {
                return closure_4(React4(arg0));
              }
            }
            cResult[10] = P;
          } else {
            class P {
              constructor(arg0) {
                return closure_4(React4(arg0));
              }
            }
          }
          if (cResult[11] === first2) {
            class P {
              constructor(arg0) {
                return closure_4(React4(arg0));
              }
            }
          }
          const obj3 = {
            render,
            title: intl.string(tmp(1126).t.Dx7im5),
            headerLeft: tmpResult2.getHeaderCloseButton(tmp15),
            headerRight: headerTextButton,
          };
          intl = tmp(1126).intl;
          tmpResult2 = tmp(6010);
          if (first1 !== initialFolderName || first2 !== initialFolderColor) {
            class P {
              constructor(arg0) {
                return closure_4(React4(arg0));
              }
            }
            const getHeaderTextButton = tmp21.getHeaderTextButton;
            const intl2 = tmp(1126).intl;
            headerTextButton = getHeaderTextButton(intl2.string(tmp(1126).t["R3BPH+"]), tmp14);
          } else {
            class P {
              constructor(arg0) {
                return closure_4(React4(arg0));
              }
            }
          }
          const obj4 = {};
          obj4[c14] = obj3;
          cResult[11] = first2;
          class S {
            constructor() {
              closure_0 = folderId;
              closure_2 = closure_3;
              tmp = closure_0(closure_2[7]);
              saveGuildFolders = tmp.saveGuildFolders;
              guildFolders = closure_7.getGuildFolders();
              saveGuildFoldersResult = saveGuildFolders(
                guildFolders.map((folderId) => {
                  let tmp = folderId;
                  if (folderId.folderId === closure_0) {
                    const obj = { folderName, folderColor };
                    const merged = Object.assign(folderId);
                    tmp = obj;
                  }
                  return tmp;
                }),
              );
              obj = closure_0(closure_2[24]);
              result = obj.hideGuildsBarFolderModal();
              return;
            }
          }
          cResult[13] = first1;
          cResult[14] = first1 !== initialFolderName || first2 !== initialFolderColor;
          cResult[15] = obj4;
        }
      }
      class S {
        constructor() {
          closure_0 = folderId;
          closure_2 = closure_3;
          tmp = closure_0(closure_2[7]);
          saveGuildFolders = tmp.saveGuildFolders;
          guildFolders = closure_7.getGuildFolders();
          saveGuildFoldersResult = saveGuildFolders(
            guildFolders.map((folderId) => {
              let tmp = folderId;
              if (folderId.folderId === closure_0) {
                const obj = { folderName, folderColor };
                const merged = Object.assign(folderId);
                tmp = obj;
              }
              return tmp;
            }),
          );
          obj = closure_0(closure_2[24]);
          result = obj.hideGuildsBarFolderModal();
          return;
        }
      }
      cResult[4] = first2;
      cResult[5] = folderId;
      cResult[6] = first1;
      cResult[7] = S;
      tmp14 = S;
    }
  : (folderId) => {
      let closure_4;
      let initialFolderColor;
      let initialFolderName;
      folderId = folderId.folderId;
      let first1;
      react = undefined;
      let callback1;
      let tmp = folderId;
      let obj = folderId(504);
      const items = [callback1];
      const items1 = [folderId];
      const stateFromStoresObject = obj.useStateFromStoresObject(
        items,
        () => {
          let folderColor;
          const guildFolderById = SortedGuildStore.getGuildFolderById(folderId);
          let folderName;
          if (guildFolderById != null) {
            folderName = guildFolderById.folderName;
          }
          let str = "";
          if (null != folderName) {
            str = guildFolderById.folderName;
          }
          const obj = { initialFolderName: str, initialFolderColor: React4(folderColor) };
          folderColor = undefined;
          if (guildFolderById != null) {
            folderColor = guildFolderById.folderColor;
          }
          return obj;
        },
        items1,
      );
      ({ initialFolderName, initialFolderColor } = stateFromStoresObject);
      let obj2 = react;
      const tmp4 = first1(react.useState(initialFolderName), 2);
      const name = tmp4[0];
      dependencyMap = tmp4[1];
      const tmp6 = first1(react.useState(initialFolderColor), 2);
      first1 = tmp6[0];
      react = tmp6[1];
      let closure_5 = tmp8;
      const items2 = [folderId, name, first1];
      const callback = obj2.useCallback(() => {
        let closure_0 = folderId;
        let closure_1 = first;
        closure_2 = first1;
        let tmp = UserSettingsActionCreators;
        const saveGuildFolders = tmp.saveGuildFolders;
        const guildFolders = SortedGuildStore.getGuildFolders();
        saveGuildFolders(
          guildFolders.map((folderId) => {
            let tmp = folderId;
            if (folderId.folderId === closure_0) {
              const obj = { folderName, folderColor };
              const merged = Object.assign(folderId);
              tmp = obj;
            }
            return tmp;
          }),
        );
        let obj = GuildsBarFolderSettingsModalActionCreators;
        const result = obj.hideGuildsBarFolderModal();
      }, items2);
      callback1 = obj2.useCallback(() => {
        const obj = folderId(closure_2[24]);
        const result = obj.hideGuildsBarFolderModal();
      }, []);
      const items3 = [first1, name, name !== initialFolderName || first1 !== initialFolderColor, callback, callback1];
      const memo = obj2.useMemo(() => {
        let fn;
        let intl;
        let obj3;
        let obj = {
          name,
          onNameChange(arg0) {
            return closure_1_2(arg0);
          },
          color: first1,
          onColorChange(dependencyMap) {
            return closure_1_4(closure_2_9(dependencyMap));
          },
        };
        const obj2 = {
          render,
          title: intl.string(intl5.t.Dx7im5),
          headerLeft: obj3.getHeaderCloseButton(callback1),
          headerRight: fn,
        };
        intl = intl5.intl;
        obj3 = NavigatorHeader;
        if (closure_5) {
          const getHeaderTextButton = NavigatorHeader.getHeaderTextButton;
          NavigatorHeader;
          const intl2 = intl5.intl;
          fn = getHeaderTextButton(intl2.string(intl5.t["R3BPH+"]), callback);
        } else {
          fn = () => null;
        }
        return { [c14]: obj2 };
      }, items3);
      let obj3 = { screens: memo, initialRouteName };
      return closure_10(tmp(6496).Navigator, obj3);
    };
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModal.tsx");

export default tmp5;
