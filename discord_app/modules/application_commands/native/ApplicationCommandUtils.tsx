// discord_app/modules/application_commands/native/ApplicationCommandUtils.tsx
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import _modDef1968 from "../../../../_runtime/metro/01968__.js";
import DraftStore from "../../../stores/DraftStore.tsx";
import ApplicationCommandConstants from "../ApplicationCommandConstants.tsx";
import ApplicationCommandTypes from "../ApplicationCommandTypes.tsx";
import UploadAttachmentActionCreatorsDefault from "../../../actions/UploadAttachmentActionCreators.tsx";
import showUploadPreviewActionSheetDefault from "../../media_uploads/native/showUploadPreviewActionSheet.tsx";
import _modDef12565 from "../../../../_runtime/metro/12565__.js";
import _modDef12566 from "../../../../_runtime/metro/12566__.js";
import UploadAttachmentStore from "../../../stores/UploadAttachmentStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const DraftType = DraftStore.DraftType;
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandUtils.tsx");

export const getApplicationCommandsIconSource = function getApplicationCommandsIconSource(section, stateFromStores) {
  if (null == section) {
    return null;
  } else {
    const id = section.id;
    if (BuiltInSectionId.BUILT_IN === id) {
      return AvatarUtilsDefault.makeSource(_modDef12565);
    } else if (tmp10.FRECENCY === id) {
      return AvatarUtilsDefault.makeSource(_modDef12566);
    } else {
      if (section.type === ApplicationCommandTypes.ApplicationCommandSectionType.APPLICATION) {
        const obj5 = { id: null, icon: null, bot: null, botIconFirst: true, guildMember: null };
        ({ id: obj2.id, icon: obj2.icon, application } = section);
        let bot;
        if (application != null) {
          bot = application.bot;
        }
        obj5.bot = bot;
        obj5.guildMember = stateFromStores;
        let applicationIconSource = AvatarUtilsDefault.getApplicationIconSource(obj5);
      } else {
        applicationIconSource = _modDef1968;
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
  importDefault = channelId;
  dependencyMap = name;
  upload = UploadAttachmentStore.getUpload(channelId, name, upload.SlashCommand);
  if (null != upload) {
    let obj = {
      channelId,
      disableSpoiler: true,
      onClose: fn,
      onRemove() {
        UploadAttachmentActionCreatorsDefault.remove(closure_1, upload.id, DraftType.SlashCommand);
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
