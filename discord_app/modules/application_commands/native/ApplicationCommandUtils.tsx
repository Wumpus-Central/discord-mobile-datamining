// === Module 11946: application_commands/ApplicationCommandUtils ===

// Module 11946 (application_commands/ApplicationCommandUtils)
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import _modDef1987 from "module_1987" /* 1987 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5399 */;
import DraftStore from "DraftStore" /* 7232 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7235 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9201 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 9972 */;
import _modDef11947 from "module_11947" /* 11947 */;
import _modDef11948 from "module_11948" /* 11948 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7880 */;
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
      return AvatarUtilsDefault.makeSource(_modDef11947);
    } else if (tmp10.FRECENCY === id) {
      return AvatarUtilsDefault.makeSource(_modDef11948);
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
        applicationIconSource = _modDef1987;
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
              options = activeCommand.options;
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