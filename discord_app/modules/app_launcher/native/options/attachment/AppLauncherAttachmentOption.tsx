// discord_app/modules/app_launcher/native/options/attachment/AppLauncherAttachmentOption.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import FileIcon from "../../../../../design/components/Icon/native/redesign/generated/FileIcon.tsx";
import AttachmentPreviewDefault from "../../../../media/native/AttachmentPreview.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UploadAttachmentStore from "../../../../../stores/UploadAttachmentStore.tsx";

require = fn;
function AttachmentPreviewAppLauncher(arg0) {
  ({ uri, isImage, isVideo } = arg0);
  const tmp = closure_8();
  ({ width, height } = tmp.selectedImage);
  const size = {
    uri,
    isImage,
    isVideo,
    width,
    height,
    style: tmp.selectedImage,
    defaultPreview: jsx(FileIcon.FileIcon, { size: "sm" }),
  };
  return jsx(AttachmentPreviewDefault, {
    uri,
    isImage,
    isVideo,
    width,
    height,
    style: tmp.selectedImage,
    defaultPreview: jsx(FileIcon.FileIcon, { size: "sm" }),
  });
}
const View = fn(17).View;
const DraftType = fn(4901).DraftType;
const jsx = fn(21).jsx;
fn(4560);
const createStyles = { imageIconWrapper: null, selectedImage: null };
let size = {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.lg,
};
createStyles.imageIconWrapper = size;
const size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
createStyles.selectedImage = size1;
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/options/attachment/AppLauncherAttachmentOption.tsx",
);

export default function AppLauncherAttachmentOption(option) {
  option = option.option;
  const channel = option.channel;
  const onSelectAttachment = option.onSelectAttachment;
  let stateFromStores;
  let ref;
  ({ style, autoFocus, hasError, onPress } = option);
  let fileTypes;
  if (option.type === option(onSelectAttachment[9]).ApplicationCommandOptionType.ATTACHMENT) {
    fileTypes = option.fileTypes;
  }
  let tmp2Result = tmp2(tmp3[10]);
  const fileTypesFormattedString = tmp2Result.useFileTypesFormattedString(fileTypes);
  tmp2Result = tmp2(tmp3[11]);
  const items = [UploadAttachmentStore];
  stateFromStores = tmp2Result.useStateFromStores(items, () =>
    UploadAttachmentStore.getUpload(channel.id, option.name, DraftType.ApplicationLauncherCommand),
  );
  const items1 = [channel.id, option.name];
  const effect = stateFromStores.useEffect(
    () => () => channel(onSelectAttachment[12]).remove(id.id, name.name, DraftType.ApplicationLauncherCommand),
    items1,
  );
  ref = stateFromStores.useRef(onSelectAttachment);
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
      filename = stateFromStores.filename;
    }
    if (null != filename) {
      const current = ref.current;
      if (current != null) {
        current(stateFromStores.filename);
      }
    }
  }, items2);
  let obj = {
    style,
    hasError,
    option,
    selected: null != stateFromStores,
    selectedItemName: null,
    unselectedSubLabel: null,
    leading: null,
    onPress: null,
    autoFocus: null,
  };
  let filename1;
  const tmp = closure_8();
  if (null != stateFromStores) {
    filename1 = stateFromStores.filename;
  }
  obj.selectedItemName = filename1;
  let formatResult;
  if (null != fileTypesFormattedString) {
    const intl = tmp2(tmp3[14]).intl;
    obj = { types: fileTypesFormattedString };
    formatResult = intl.format(tmp2(tmp3[14]).t.NRRxmz, obj);
  }
  obj.unselectedSubLabel = formatResult;
  if (null != stateFromStores) {
    if (stateFromStores.item.platform === tmp2(tmp3[15]).UploadPlatform.REACT_NATIVE) {
      const obj1 = { uri: stateFromStores.item.uri, isImage: null, isVideo: null };
      ({ isImage: obj6.isImage, isVideo: obj6.isVideo } = stateFromStores);
      let tmp12Result = <AttachmentPreviewAppLauncher uri={stateFromStores.item.uri} isImage={null} isVideo={null} />;
    }
    obj.leading = tmp12Result;
    obj.onPress = onPress;
    obj.autoFocus = autoFocus;
    return <tmp13 {...obj} />;
  }
  const tmp13 = channel(onSelectAttachment[13]);
  tmp12Result = (
    <ref style={tmp.imageIconWrapper}>
      {jsx(option(onSelectAttachment[16]).ImageFileIcon, { size: "sm", color: "interactive-text-default" })}
    </ref>
  );
  const obj2 = {
    style: tmp.imageIconWrapper,
    children: jsx(option(onSelectAttachment[16]).ImageFileIcon, { size: "sm", color: "interactive-text-default" }),
  };
}
