// discord_app/modules/guilds_bar/native/GuildsBarFolderSettingsModal.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import { DEFAULT_FOLDER_COLOR } from "DEFAULT_FOLDER_COLOR";
import jsxProd from "jsxProd";
import { FormRoleColorPicker } from "../../../components_native/common/color_picker/FormRoleColorPicker.tsx";
import { Form } from "../../../design/void/Form/native/index.tsx";
import { Button } from "../../../design/void/native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let error;
let metroImportAll;
const require = arg1;
function GuildFolderSettingsScene(arg0) {
  let color;
  let name;
  let onColorChange;
  let onNameChange;
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
  const obj1 = { title: null, children: null };
  const intl3 = getSystemLocale.intl;
  obj1[0] = intl3.string(getSystemLocale.t.xpurRF);
  obj1[1] = callback(FormRoleColorPicker, { color, onChange: onColorChange });
  items[1] = callback(Form.FormSection, obj1);
  obj[0] = items;
  return callback2(Form.Form, obj);
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let c10 = "Folder Settings";
let result = require("insertUnsortedGuilds").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModal.tsx");

export default function GuildFolderSettingsModal(folderId) {
  let initialFolderColor;
  let initialFolderName;
  folderId = folderId.folderId;
  let first;
  let dependencyMap;
  let first1;
  let React;
  let c5;
  let callback;
  let callback1;
  let obj = folderId(589);
  const items = [c5];
  const items1 = [folderId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const guildFolderById = _undefined.getGuildFolderById(folderId);
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
  c5 = tmp8;
  const items2 = [folderId, first, first1];
  callback = obj2.useCallback(() => {
    const dependencyMap = first1;
    const guildFolders = _undefined.getGuildFolders();
    folderId(8621).saveGuildFolders(guildFolders.map((folderId) => {
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
    let obj = folderId(8621);
    const result = folderId(15303).hideGuildsBarFolderModal();
  }, items2);
  callback1 = obj2.useCallback(() => {
    const result = folderId(15303).hideGuildsBarFolderModal();
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
        const obj = {};
        const merged = Object.assign(obj);
        return outer1_7(outer1_9, obj);
      },
      title: null,
      headerLeft: null,
      headerRight: null
    };
    const intl = folderId(1236).intl;
    obj[1] = intl.string(folderId(1236).t.Dx7im5);
    obj[2] = folderId(5253).getHeaderCloseButton(callback1);
    if (c5) {
      const intl2 = tmp3(1236).intl;
      let fn = tmp3(5253).getHeaderTextButton(intl2.string(tmp3(1236).t["R3BPH+"]), callback);
      const tmp3Result = tmp3(5253);
    } else {
      fn = () => null;
    }
    obj[3] = fn;
    return { [outer1_10]: obj };
  }, items3);
  obj = { screens: memo, initialRouteName: c10 };
  return callback1(folderId(5704).Navigator, obj);
};