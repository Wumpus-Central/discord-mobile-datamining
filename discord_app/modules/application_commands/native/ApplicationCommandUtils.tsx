// === Module 12805: application_commands/ApplicationCommandUtils ===

// Module 12805 (application_commands/ApplicationCommandUtils)
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import _modDef1990 from "module_1990" /* 1990 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5465 */;
import DraftStore from "DraftStore" /* 7462 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7465 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9499 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 10255 */;
import _modDef12806 from "module_12806" /* 12806 */;
import _modDef12807 from "module_12807" /* 12807 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8128 */;
import size from "module_2" /* 2 */;

const DraftType = DraftStore.DraftType;
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandUtils.tsx");

export const getApplicationCommandsIconSource = function getApplicationCommandsIconSource(section, stateFromStores) {
  if (null == section) {
    return null;
  } else {
    const id = section.id;
    if (BuiltInSectionId.BUILT_IN === id) {
      return AvatarUtilsDefault.makeSource(_modDef12806);
    } else if (tmp10.FRECENCY === id) {
      return AvatarUtilsDefault.makeSource(_modDef12807);
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
        applicationIconSource = _modDef1990;
      }
      return applicationIconSource;
    }
  }
};
export const openCommandAttachmentPreview = function openCommandAttachmentPreview(applicationCommandManager, channelId, name, fn) {
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
};