// discord_app/modules/guilds_bar/native/GuildsBarFolderSettingsModal.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../stores/SortedGuildStore.tsx";
import { DEFAULT_FOLDER_COLOR } from "../GuildsBarConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function GuildFolderSettingsScene(color) {
  color = color.color;
  const onColorChange = color.onColorChange;
  ({ name, onNameChange } = color);
  const tmp = callback3();
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
  const callback = React.useCallback(() => {
    closure_1_5.dismiss();
    let obj = onColorChange(closure_1_2[9]);
    obj = { color, onSelect: onColorChange };
    obj.openLazy(color(closure_1_2[11])(closure_1_2[10], closure_1_2.paths), "RoleColorPicker", obj);
  }, items);
  obj[0] = onColorChange(712).space.PX_16;
  obj[1] = 38 + onColorChange(5594)().insets.bottom;
  obj[4] = obj;
  obj = { spacing: onColorChange(712).space.PX_16, children: null };
  obj1 = {
    label: null,
    placeholder: null,
    value: null,
    onChange: null,
    maxLength: 32,
    autoFocus: true,
    isClearable: true,
  };
  const intl = color(1236).intl;
  obj1[0] = intl.string(color(1236).t.tGRbjA);
  const intl2 = color(1236).intl;
  obj1[1] = intl2.string(color(1236).t.xV9hVh);
  obj1[2] = name;
  obj1[3] = onNameChange;
  const items1 = [callback(color(7705).TextInput, obj1)];
  const obj2 = { hasIcons: false, children: null };
  const obj3 = { label: null, subLabel: null, onPress: null, arrow: true, trailing: null };
  const intl3 = color(1236).intl;
  obj3[0] = intl3.string(color(1236).t.xpurRF);
  obj3[1] = color(688).int2hex(color);
  obj3[2] = callback;
  obj3[4] = callback(onColorChange(14251), { color, style: tmp.colorBlock });
  obj2[1] = callback(color(5599).TableRow, obj3);
  items1[1] = callback(color(5992).TableRowGroup, obj2);
  obj[1] = items1;
  obj[5] = callback2(color(4926).Stack, obj);
  return callback(closure_6, obj);
}
({ Keyboard: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({
  scrollView: { flex: 1 },
  colorBlock: { marginHorizontal: 0, marginVertical: 0, minWidth: 24, height: 24, borderRadius: 3 },
});
let c13 = "Folder Settings";
let result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModal.tsx");

export default function GuildFolderSettingsModal(folderId) {
  folderId = folderId.folderId;
  let first;
  dependencyMap = undefined;
  let first1;
  let React;
  closure_5 = undefined;
  let callback;
  let callback1;
  let obj = folderId(589);
  const items = [callback1];
  const items1 = [folderId];
  const stateFromStoresObject = obj.useStateFromStoresObject(
    items,
    () => {
      const guildFolderById = callback1.getGuildFolderById(folderId);
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
      obj[1] = null != folderColor ? guildFolderById.folderColor : closure_1_8;
      return obj;
    },
    items1,
  );
  ({ initialFolderName, initialFolderColor } = stateFromStoresObject);
  const tmp4 = first1(React.useState(initialFolderName), 2);
  first = tmp4[0];
  dependencyMap = tmp4[1];
  const tmp6 = first1(React.useState(initialFolderColor), 2);
  first1 = tmp6[0];
  React = tmp6[1];
  closure_5 = tmp8;
  const items2 = [folderId, first, first1];
  callback = obj2.useCallback(() => {
    dependencyMap = first1;
    const guildFolders = callback1.getGuildFolders();
    folderId(8213).saveGuildFolders(
      guildFolders.map((folderId) => {
        let tmp = folderId;
        if (folderId.folderId === closure_0) {
          const obj = {};
          const merged = Object.assign(folderId);
          obj.folderName = closure_1;
          obj.folderColor = closure_2;
          tmp = obj;
        }
        return tmp;
      }),
    );
    let obj = folderId(8213);
    const result = folderId(15879).hideGuildsBarFolderModal();
  }, items2);
  callback1 = obj2.useCallback(() => {
    const result = folderId(15879).hideGuildsBarFolderModal();
  }, []);
  const items3 = [first1, first, first !== initialFolderName || first1 !== initialFolderColor, callback, callback1];
  const memo = obj2.useMemo(() => {
    let obj = {
      name: first,
      onNameChange(arg0) {
        return callback(arg0);
      },
      color: first1,
      onColorChange(arg0) {
        return callback2(arg0);
      },
    };
    obj = {
      render() {
        obj = {};
        const merged = Object.assign(obj);
        return closure_1_9(closure_1_12, obj);
      },
      title: null,
      headerLeft: null,
      headerRight: null,
    };
    const intl = folderId(1236).intl;
    obj[1] = intl.string(folderId(1236).t.Dx7im5);
    obj[2] = folderId(5495).getHeaderCloseButton(callback1);
    if (closure_5) {
      const intl2 = tmp3(1236).intl;
      let fn = tmp3(5495).getHeaderTextButton(intl2.string(tmp3(1236).t["R3BPH+"]), callback);
      const tmp3Result = tmp3(5495);
    } else {
      fn = () => null;
    }
    obj[3] = fn;
    return { [closure_1_13]: obj };
  }, items3);
  obj = { screens: memo, initialRouteName: c13 };
  return callback(folderId(6008).Navigator, obj);
}
