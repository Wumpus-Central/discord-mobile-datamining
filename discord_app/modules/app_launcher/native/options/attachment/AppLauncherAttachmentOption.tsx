// === Module 11662: AttachmentPreviewAppLauncher ===

// Module 11662 (AttachmentPreviewAppLauncher)
import ThemesDefault from "Themes" /* 712 */;
import FileIcon from "FileIcon" /* 10138 */;
import AttachmentIconDefault from "AttachmentIcon" /* 10198 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { DraftType } from "handleChanged" /* 4807 */;
import closure_6 from "map" /* 4806 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
function AttachmentPreviewAppLauncher(arg0) {
  ({ uri, isImage, isVideo } = arg0);
  const tmp = callback();
  ({ width, height } = tmp.selectedImage);
  const obj = { uri, isImage, isVideo, width, height, style: tmp.selectedImage, defaultPreview: jsx(FileIcon.FileIcon, { size: "sm" }) };
  return jsx(AttachmentIconDefault, { uri, isImage, isVideo, width, height, style: tmp.selectedImage, defaultPreview: jsx(FileIcon.FileIcon, { size: "sm" }) });
}
createCacheKey = { imageIconWrapper: null, selectedImage: null };
createCacheKey = { justifyContent: "center", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, width: 32, height: 32, borderRadius: ThemesDefault.radii.lg };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 32, height: 32, borderRadius: ThemesDefault.radii.sm };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { width: 32, height: 32, borderRadius: ThemesDefault.radii.sm };
const result = require("set").fileFinishedImporting("modules/app_launcher/native/options/attachment/AppLauncherAttachmentOption.tsx");

export default function AppLauncherAttachmentOption(option) {
  option = option.option;
  const channel = option.channel;
  const onSelectAttachment = option.onSelectAttachment;
  let stateFromStores;
  closure_4 = undefined;
  ({ style, autoFocus, hasError, onPress } = option);
  let fileTypes;
  if (option.type === option(onSelectAttachment[9]).ApplicationCommandOptionType.ATTACHMENT) {
    fileTypes = option.fileTypes;
  }
  let tmp2Result = tmp2(tmp3[10]);
  const fileTypesFormattedString = tmp2Result.useFileTypesFormattedString(fileTypes);
  tmp2Result = tmp2(tmp3[11]);
  const items = [closure_6];
  stateFromStores = tmp2Result.useStateFromStores(items, () => closure_1_6.getUpload(channel.id, option.name, closure_1_5.ApplicationLauncherCommand));
  const items1 = [channel.id, option.name];
  const effect = stateFromStores.useEffect(() => () => closure_1_1(closure_1_2[12]).remove(id.id, name.name, closure_1_5.ApplicationLauncherCommand), items1);
  closure_4 = stateFromStores.useRef(onSelectAttachment);
  const effect1 = stateFromStores.useEffect(() => {
    closure_4.current = onSelectAttachment;
  });
  let filename;
  if (stateFromStores != null) {
    filename = stateFromStores.filename;
  }
  const items2 = [filename];
  const effect2 = stateFromStores.useEffect(() => {
    let filename;
    if (stateFromStores != null) {
      filename = tmp.filename;
    }
    if (null != filename) {
      const current = ref.current;
      if (current != null) {
        current(tmp.filename);
      }
    }
  }, items2);
  let obj = { style, hasError, option, selected: null != stateFromStores, selectedItemName: null, unselectedSubLabel: null, leading: null, onPress: null, autoFocus: null };
  let filename1;
  const tmp = callback();
  if (null != stateFromStores) {
    filename1 = stateFromStores.filename;
  }
  obj[4] = filename1;
  let formatResult;
  if (null != fileTypesFormattedString) {
    const intl = tmp2(tmp3[14]).intl;
    obj = { types: null };
    obj[0] = fileTypesFormattedString;
    formatResult = intl.format(tmp2(tmp3[14]).t.NRRxmz, obj);
  }
  obj[5] = formatResult;
  if (null != stateFromStores) {
    if (stateFromStores.item.platform === tmp2(tmp3[15]).UploadPlatform.REACT_NATIVE) {
      obj1 = { uri: null, isImage: null, isVideo: null };
      obj1[0] = stateFromStores.item.uri;
      ({ isImage: obj6[1], isVideo: obj6[2] } = stateFromStores);
      let tmp12Result = tmp12(AttachmentPreviewAppLauncher, obj1);
    }
    obj[6] = tmp12Result;
    obj[7] = onPress;
    obj[8] = autoFocus;
    return tmp12(tmp13, obj);
  }
  tmp13 = channel(onSelectAttachment[13]);
  tmp12Result = tmp12(closure_4, { style: tmp.imageIconWrapper, children: jsx(option(onSelectAttachment[16]).ImageFileIcon, { size: "sm", color: "interactive-text-default" }) });
};