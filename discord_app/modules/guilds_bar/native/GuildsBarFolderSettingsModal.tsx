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
  obj = { padding: null, paddingBottom: null };
  const callback = noop.useCallback(() => {
    hasOwnProperty.dismiss();
    let obj = ActionSheetActionCreatorsDefault;
    let tmp3 = color;
    if (color == null) {
      tmp3 = defaultColor;
    }
    obj = { color: tmp3, defaultColor, onSelect: onColorChange };
    obj.openLazy(asyncRequireImpl(16386, dependencyMap.paths), "RoleColorPicker", obj);
  }, items);
  obj.padding = onColorChange(576).space.PX_16;
  obj.paddingBottom = 38 + onColorChange(7084)().insets.bottom;
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
  const items1 = [closure_10(color(6707).TextInput, obj1)];
  const obj2 = { label: null, subLabel: null, onPress: null, arrow: true, trailing: null };
  const intl3 = color(1114).intl;
  obj2.label = intl3.string(color(1114).t.xpurRF);
  if (null != color) {
    let int2hexResult = tmp8(1091).int2hex(color);
    const tmp8Result = tmp8(1091);
  } else {
    const intl4 = tmp8(1114).intl;
    int2hexResult = intl4.string(tmp8(1114).t.bBvAEH);
  }
  obj2.subLabel = int2hexResult;
  obj2.onPress = callback;
  let tmp11 = color;
  if (color == null) {
    tmp11 = closure_8;
  }
  const obj3 = { hasIcons: false, children: null };
  obj2.trailing = closure_10(onColorChange(14684), { color: tmp11, style: tmp.colorBlock });
  obj3.children = closure_10(color(5686).TableRow, obj2);
  items1[1] = closure_10(color(5768).TableRowGroup, obj3);
  obj.children = items1;
  obj.children = closure_11(color(5054).Stack, obj);
  return closure_10(closure_6, obj);
}
get_ActivityIndicator = fn(17);
({ Keyboard: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const GuildsBarConstants = fn(16385);
({ DEFAULT_FOLDER_COLOR: closure_8, normalizeFolderColor: closure_9 } = GuildsBarConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4636);
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
    obj = {
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
    obj.title = intl.string(util.t.Dx7im5);
    obj.headerLeft = NavigatorHeader.getHeaderCloseButton(callback1);
    if (closure_5) {
      const intl2 = util.intl;
      let fn = NavigatorHeader.getHeaderTextButton(intl2.string(util.t["R3BPH+"]), callback);
      const tmp3Result = NavigatorHeader;
    } else {
      fn = () => null;
    }
    obj.headerRight = fn;
    return { [c14]: obj };
  }, items3);
  obj = { screens: memo, initialRouteName };
  return closure_10(folderId(7103).Navigator, obj);
}
