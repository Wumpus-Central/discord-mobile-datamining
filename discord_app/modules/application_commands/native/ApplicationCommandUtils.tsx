// === Module 14025: application_commands/ApplicationCommandUtils ===

// Module 14025 (application_commands/ApplicationCommandUtils)
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import _modDef2106 from "module_2106" /* 2106 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5807 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 6167 */;
import DraftStore from "DraftStore" /* 7777 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9868 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 10647 */;
import _modDef14026 from "module_14026" /* 14026 */;
import _modDef14027 from "module_14027" /* 14027 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8277 */;
import size from "module_2" /* 2 */;

const DraftType = DraftStore.DraftType;
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandUtils.tsx");

export function getApplicationCommandsIconSource(section, stateFromStores) {
  if (null == section) {
    return null;
  } else {
    const id = section.id;
    if (BuiltInSectionId.BUILT_IN === id) {
      return AvatarUtilsDefault.makeSource(_modDef14026);
    } else if (tmp10.FRECENCY === id) {
      return AvatarUtilsDefault.makeSource(_modDef14027);
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
        applicationIconSource = _modDef2106;
      }
      return applicationIconSource;
    }
  }
}
export function openCommandAttachmentPreview(applicationCommandManager, channelId, name, fn) {
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
              const result = applicationCommandManager.insertOrJumpCommandOption(found, undefined, false, { displayText: "" });
            }
          }
        },
      upload
    };
    showUploadPreviewActionSheetDefault(obj);
  }
}