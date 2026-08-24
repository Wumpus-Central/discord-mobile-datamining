// discord_app/modules/guilds_bar/native/GuildsBarFolderSettingsModal.tsx
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import Form from "../../../design/void/Form/native/index.tsx";
import FormRoleColorPickerDefault from "../../../components_native/common/color_picker/FormRoleColorPicker.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import closure_5 from "../../../stores/SortedGuildStore.tsx";
import { DEFAULT_FOLDER_COLOR } from "../GuildsBarConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function GuildFolderSettingsScene(arg0) {
  ({ name, onNameChange, color, onColorChange } = arg0);
  let obj = { children: null };
  obj = { title: null, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.tGRbjA);
  obj = { placeholder: null, value: null, onChange: null, showTopContainer: false, maxLength: 32, autoFocus: true, clearButtonVisibility: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t.xV9hVh);
  obj[1] = name;
  obj[2] = onNameChange;
  obj[6] = Button.ClearButtonVisibility.WITH_CONTENT;
  obj[1] = callback(Form.FormInput, obj);
  const items = [callback(Form.FormSection, obj), ];
  obj1 = { title: null, children: null };
  const intl3 = getSystemLocale.intl;
  obj1[0] = intl3.string(getSystemLocale.t.xpurRF);
  obj1[1] = callback(FormRoleColorPickerDefault, { color, onChange: onColorChange });
  items[1] = callback(Form.FormSection, obj1);
  obj[0] = items;
  return callback2(Form.Form, obj);
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
let c10 = "Folder Settings";
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
  const items = [closure_5];
  const items1 = [folderId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const guildFolderById = store.getGuildFolderById(folderId);
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
    obj[1] = null != folderColor ? guildFolderById.folderColor : callback;
    return obj;
  }, items1);
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
    const guildFolders = store.getGuildFolders();
    folderId(9402).saveGuildFolders(guildFolders.map((folderId) => {
      let tmp = folderId;
      if (folderId.folderId === closure_0) {
        const obj = {};
        const merged = Object.assign(folderId);
        obj.folderName = closure_1;
        obj.folderColor = closure_2;
        tmp = obj;
      }
      return tmp;
    }));
    let obj = folderId(9402);
    const result = folderId(15616).hideGuildsBarFolderModal();
  }, items2);
  callback1 = obj2.useCallback(() => {
    const result = folderId(15616).hideGuildsBarFolderModal();
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
      }
    };
    obj = {
      render() {
        obj = {};
        const merged = Object.assign(obj);
        return closure_1_7(closure_1_9, obj);
      },
      title: null,
      headerLeft: null,
      headerRight: null
    };
    const intl = folderId(1236).intl;
    obj[1] = intl.string(folderId(1236).t.Dx7im5);
    obj[2] = folderId(6345).getHeaderCloseButton(callback1);
    if (closure_5) {
      const intl2 = tmp3(1236).intl;
      let fn = tmp3(6345).getHeaderTextButton(intl2.string(tmp3(1236).t["R3BPH+"]), callback);
      const tmp3Result = tmp3(6345);
    } else {
      fn = () => null;
    }
    obj[3] = fn;
    return { [closure_1_10]: obj };
  }, items3);
  obj = { screens: memo, initialRouteName: c10 };
  return callback1(folderId(6343).Navigator, obj);
};