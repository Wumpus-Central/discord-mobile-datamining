// discord_app/modules/guilds_bar/native/GuildsBarFolderSettingsModal.tsx
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import UserSettingsActionCreators from "../../../actions/UserSettingsActionCreators.tsx";
import GuildsBarFolderSettingsModalActionCreators from "GuildsBarFolderSettingsModalActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";

require = fn;
function GuildFolderSettingsScene(color) {
  color = color.color;
  const onColorChange = color.onColorChange;
  ({ name, onNameChange } = color);
  const tmp = closure_12();
  const items = [color, onColorChange];
  let obj = {
    style: tmp.scrollView,
    keyboardShouldPersistTaps: "always",
    contentInset: { top: 0 },
    automaticallyAdjustContentInsets: false,
    contentContainerStyle: null,
    children: null,
  };
  const obj2 = { padding: null, paddingBottom: null };
  const callback = noop.useCallback(() => {
    hasOwnProperty.dismiss();
    let tmp3 = color;
    const obj = ActionSheetActionCreatorsDefault;
    if (color == null) {
      tmp3 = defaultColor;
    }
    obj.openLazy(asyncRequireImpl(16641, dependencyMap.paths), "RoleColorPicker", {
      color: tmp3,
      defaultColor,
      onSelect: onColorChange,
    });
  }, items);
  obj2.padding = onColorChange(576).space.PX_16;
  obj2.paddingBottom = 38 + onColorChange(7228)().insets.bottom;
  obj.contentContainerStyle = obj2;
  const obj3 = { spacing: onColorChange(576).space.PX_16, children: null };
  const obj4 = {
    label: null,
    placeholder: null,
    value: null,
    onChange: null,
    maxLength: 32,
    autoFocus: true,
    clearable: true,
  };
  const intl = color(1115).intl;
  obj4.label = intl.string(color(1115).t.tGRbjA);
  const intl2 = color(1115).intl;
  obj4.placeholder = intl2.string(color(1115).t.xV9hVh);
  obj4.value = name;
  obj4.onChange = onNameChange;
  const items1 = [closure_10(color(6850).TextInput, obj4)];
  const obj5 = { label: null, subLabel: null, onPress: null, arrow: true, trailing: null };
  const intl3 = color(1115).intl;
  obj5.label = intl3.string(color(1115).t.xpurRF);
  if (null != color) {
    let int2hexResult = tmp8(1092).int2hex(color);
    const tmp8Result = tmp8(1092);
  } else {
    const intl4 = tmp8(1115).intl;
    int2hexResult = intl4.string(tmp8(1115).t.bBvAEH);
  }
  obj5.subLabel = int2hexResult;
  obj5.onPress = callback;
  let tmp11 = color;
  if (color == null) {
    tmp11 = closure_8;
  }
  const obj6 = { hasIcons: false, children: null };
  obj5.trailing = closure_10(onColorChange(14879), { color: tmp11, style: tmp.colorBlock });
  obj6.children = closure_10(color(5824).TableRow, obj5);
  items1[1] = closure_10(color(5906).TableRowGroup, obj6);
  obj3.children = items1;
  obj.children = closure_11(color(5185).Stack, obj3);
  return closure_10(closure_6, obj);
}
get_ActivityIndicator = fn(17);
({ Keyboard: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const GuildsBarConstants = fn(16640);
({ DEFAULT_FOLDER_COLOR: closure_8, normalizeFolderColor: closure_9 } = GuildsBarConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4757);
let closure_12 = createStyles.createStyles({
  scrollView: { flex: 1 },
  colorBlock: { marginHorizontal: 0, marginVertical: 0, minWidth: 24, height: 24, borderRadius: 3 },
});
let c14 = "Folder Settings";
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModal.tsx");

export default function GuildFolderSettingsModal(folderId) {
  folderId = folderId.folderId;
  let first1;
  noop = undefined;
  let callback1;
  const items = [callback1];
  const items1 = [folderId];
  const stateFromStoresObject = folderId(504).useStateFromStoresObject(
    items,
    () => {
      const guildFolderById = SortedGuildStore.getGuildFolderById(folderId);
      let folderName;
      if (guildFolderById != null) {
        folderName = guildFolderById.folderName;
      }
      let str = "";
      if (null != folderName) {
        str = guildFolderById.folderName;
      }
      const obj = { initialFolderName: str, initialFolderColor: null };
      let folderColor;
      if (guildFolderById != null) {
        folderColor = guildFolderById.folderColor;
      }
      obj.initialFolderColor = React7(folderColor);
      return obj;
    },
    items1,
  );
  ({ initialFolderName, initialFolderColor } = stateFromStoresObject);
  const tmp4 = first1(noop.useState(initialFolderName), 2);
  const name = tmp4[0];
  dependencyMap = tmp4[1];
  const tmp6 = first1(noop.useState(initialFolderColor), 2);
  first1 = tmp6[0];
  noop = tmp6[1];
  closure_5 = tmp8;
  const items2 = [folderId, name, first1];
  const callback = obj2.useCallback(() => {
    closure_0 = folderId;
    const folderName = first;
    const folderColor = first1;
    const guildFolders = SortedGuildStore.getGuildFolders();
    UserSettingsActionCreators.saveGuildFolders(
      guildFolders.map((folderId) => {
        let tmp = folderId;
        if (folderId.folderId === closure_0) {
          const obj = {};
          const merged = Object.assign(folderId);
          obj.folderName = folderName;
          obj.folderColor = folderColor;
          tmp = obj;
        }
        return tmp;
      }),
    );
    const result = GuildsBarFolderSettingsModalActionCreators.hideGuildsBarFolderModal();
  }, items2);
  callback1 = obj2.useCallback(() => {
    const result = folderId(closure_2[22]).hideGuildsBarFolderModal();
  }, []);
  const items3 = [first1, name, name !== initialFolderName || first1 !== initialFolderColor, callback, callback1];
  const memo = obj2.useMemo(() => {
    const obj2 = {
      render() {
        obj = {};
        const merged = Object.assign(obj);
        return closure_2_10(GuildFolderSettingsScene, obj);
      },
      title: null,
      headerLeft: null,
      headerRight: null,
    };
    const intl = util.intl;
    obj2.title = intl.string(util.t.Dx7im5);
    obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(callback1);
    if (closure_5) {
      const intl2 = util.intl;
      let fn = NavigatorHeader.getHeaderTextButton(intl2.string(util.t["R3BPH+"]), callback);
      const tmp3Result = NavigatorHeader;
    } else {
      fn = () => null;
    }
    obj2.headerRight = fn;
    return { [c14]: obj2 };
  }, items3);
  return closure_10(folderId(7247).Navigator, { screens: memo, initialRouteName });
}
