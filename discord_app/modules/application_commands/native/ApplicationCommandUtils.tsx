// discord_app/modules/application_commands/native/ApplicationCommandUtils.tsx
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import AssetRegistryDefault from "../../../../_runtime/01975_AssetRegistry.js";
import ApplicationCommandConstants from "../ApplicationCommandConstants.tsx";
import DraftStore from "../../../stores/DraftStore.tsx";
import ApplicationCommandTypes from "../ApplicationCommandTypes.tsx";
import UploadAttachmentActionCreatorsDefault from "../../../actions/UploadAttachmentActionCreators.tsx";
import showUploadPreviewActionSheetDefault from "../../media_uploads/native/showUploadPreviewActionSheet.tsx";
import AssetRegistryDefault2 from "../../../../_runtime/11861_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../_runtime/11862_AssetRegistry.js";
import UploadAttachmentStore from "../../../stores/UploadAttachmentStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap, importDefault;

const DraftType = DraftStore.DraftType;
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandUtils.tsx");

export const getApplicationCommandsIconSource = function getApplicationCommandsIconSource(section, stateFromStores) {
  let application;
  let bot;
  if (null == section) {
    return null;
  } else {
    const id = section.id;
    if (BuiltInSectionId.BUILT_IN === id) {
      const obj3 = AvatarUtilsDefault;
      return obj3.makeSource(AssetRegistryDefault2);
    } else if (tmp11.FRECENCY === id) {
      const obj2 = AvatarUtilsDefault;
      return obj2.makeSource(AssetRegistryDefault3);
    } else {
      let applicationIconSource;
      if (section.type === ApplicationCommandTypes.ApplicationCommandSectionType.APPLICATION) {
        const obj = { id: null, icon: null, bot, botIconFirst: true, guildMember: stateFromStores };
        ({ id: obj.id, icon: obj.icon, application } = section);
        bot = undefined;
        const getApplicationIconSource = AvatarUtilsDefault.getApplicationIconSource;
        AvatarUtilsDefault;
        if (application != null) {
          bot = application.bot;
        }
        applicationIconSource = getApplicationIconSource(obj);
      } else {
        applicationIconSource = AssetRegistryDefault;
      }
      return applicationIconSource;
    }
  }
};
export const openCommandAttachmentPreview = function openCommandAttachmentPreview(
  applicationCommandManager,
  channelId,
  name,
  fn,
) {
  let upload;
  importDefault = channelId;
  dependencyMap = name;
  upload = UploadAttachmentStore.getUpload(channelId, name, upload.SlashCommand);
  if (null != upload) {
    let obj = {
      channelId,
      disableSpoiler: true,
      onClose: fn,
      onRemove() {
        const obj = UploadAttachmentActionCreatorsDefault;
        obj.remove(channelId, upload.id, DraftType.SlashCommand);
        let found;
        if (applicationCommandManager != null) {
          const activeCommand = applicationCommandManager.props.activeCommand;
          if (activeCommand != null) {
            const options = activeCommand.options;
            if (options != null) {
              found = options.find((name) => name.name === name);
            }
          }
        }
        if (null != found) {
          if (applicationCommandManager != null) {
            const result = applicationCommandManager.insertOrJumpCommandOption(found, undefined, false, {
              displayText: "",
            });
          }
        }
      },
      upload,
    };
    showUploadPreviewActionSheetDefault(obj);
  }
};
