// discord_app/modules/guilds_bar/native/GuildsBarFolderSettingsModal.tsx
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
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
  const tmp = closure_11();
  const items = [color, onColorChange];
  let obj = {
    style: tmp.scrollView,
    keyboardShouldPersistTaps: "always",
    contentInset: { top: 0 },
    automaticallyAdjustContentInsets: false,
    contentContainerStyle: null,
    children: null,
  };
  obj = { padding: null, paddingBottom: null };
  const callback = noop.useCallback(() => {
    hasOwnProperty.dismiss();
    const obj = { color, onSelect: onColorChange };
    obj.openLazy(asyncRequireImpl(16291, dependencyMap.paths), "RoleColorPicker", obj);
  }, items);
  obj.padding = onColorChange(576).space.PX_16;
  obj.paddingBottom = 38 + onColorChange(6981)().insets.bottom;
  obj.contentContainerStyle = obj;
  obj = { spacing: onColorChange(576).space.PX_16, children: null };
  const obj1 = {
    label: null,
    placeholder: null,
    value: null,
    onChange: null,
    maxLength: 32,
    autoFocus: true,
    isClearable: true,
  };
  const intl = color(1114).intl;
  obj1.label = intl.string(color(1114).t.tGRbjA);
  const intl2 = color(1114).intl;
  obj1.placeholder = intl2.string(color(1114).t.xV9hVh);
  obj1.value = name;
  obj1.onChange = onNameChange;
  const items1 = [closure_9(color(6606).TextInput, obj1)];
  const obj2 = { hasIcons: false, children: null };
  const obj3 = { label: null, subLabel: null, onPress: null, arrow: true, trailing: null };
  const intl3 = color(1114).intl;
  obj3.label = intl3.string(color(1114).t.xpurRF);
  obj3.subLabel = color(1091).int2hex(color);
  obj3.onPress = callback;
  obj3.trailing = closure_9(onColorChange(14597), { color, style: tmp.colorBlock });
  obj2.children = closure_9(color(5605).TableRow, obj3);
  items1[1] = closure_9(color(5687).TableRowGroup, obj2);
  obj.children = items1;
  obj.children = closure_10(color(4973).Stack, obj);
  return closure_9(closure_6, obj);
}
get_ActivityIndicator = fn(17);
({ Keyboard: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const DEFAULT_FOLDER_COLOR = fn(16290).DEFAULT_FOLDER_COLOR;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({
  scrollView: { flex: 1 },
  colorBlock: { marginHorizontal: 0, marginVertical: 0, minWidth: 24, height: 24, borderRadius: 3 },
});
let c13 = "Folder Settings";
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModal.tsx");

export default function GuildFolderSettingsModal(folderId) {
  folderId = folderId.folderId;
  let first1;
  noop = undefined;
  let callback1;
  let obj = folderId(504);
  const items = [callback1];
  const items1 = [folderId];
  const stateFromStoresObject = obj.useStateFromStoresObject(
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
      obj.initialFolderColor = null != folderColor ? guildFolderById.folderColor : DEFAULT_FOLDER_COLOR;
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
    let obj = {
      name,
      onNameChange(arg0) {
        return closure_1_2(arg0);
      },
      color: first1,
      onColorChange(dependencyMap) {
        return closure_1_4(dependencyMap);
      },
    };
    obj = {
      render() {
        obj = {};
        const merged = Object.assign(obj);
        return closure_2_9(GuildFolderSettingsScene, obj);
      },
      title: null,
      headerLeft: null,
      headerRight: null,
    };
    const intl = util.intl;
    obj.title = intl.string(util.t.Dx7im5);
    obj.headerLeft = NavigatorHeader.getHeaderCloseButton(callback1);
    if (closure_5) {
      const intl2 = tmp3(1114).intl;
      let fn = tmp3(5624).getHeaderTextButton(intl2.string(tmp3(1114).t["R3BPH+"]), callback);
      const tmp3Result = tmp3(5624);
    } else {
      fn = () => null;
    }
    obj.headerRight = fn;
    return { [c13]: obj };
  }, items3);
  obj = { screens: memo, initialRouteName };
  return closure_9(folderId(7000).Navigator, obj);
}
