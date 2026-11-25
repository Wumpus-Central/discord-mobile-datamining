// === Module 13132: application_commands/ApplicationCommandUtils ===

// Module 13132 (application_commands/ApplicationCommandUtils)
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import _modDef2107 from "module_2107" /* 2107 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5664 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 7042 */;
import DraftStore from "DraftStore" /* 8075 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 10020 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 11039 */;
import _modDef13133 from "module_13133" /* 13133 */;
import _modDef13134 from "module_13134" /* 13134 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8082 */;
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
      return AvatarUtilsDefault.makeSource(_modDef13133);
    } else if (tmp10.FRECENCY === id) {
      return AvatarUtilsDefault.makeSource(_modDef13134);
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
        applicationIconSource = _modDef2107;
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