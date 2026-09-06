// === Module 12231: application_commands/ApplicationCommandUtils ===

// Module 12231 (application_commands/ApplicationCommandUtils)
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import _modDef1884 from "module_1884" /* 1884 */;
import DraftStore from "DraftStore" /* 4901 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 4999 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7523 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9307 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 10633 */;
import _modDef12232 from "module_12232" /* 12232 */;
import _modDef12233 from "module_12233" /* 12233 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4900 */;
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
      return AvatarUtilsDefault.makeSource(_modDef12232);
    } else if (tmp10.FRECENCY === id) {
      return AvatarUtilsDefault.makeSource(_modDef12233);
    } else {
      if (section.type === ApplicationCommandTypes.ApplicationCommandSectionType.APPLICATION) {
        const obj = { id: null, icon: null, bot: null, botIconFirst: true, guildMember: null };
        ({ id: obj2.id, icon: obj2.icon, application } = section);
        let bot;
        if (application != null) {
          bot = application.bot;
        }
        obj.bot = bot;
        obj.guildMember = stateFromStores;
        let applicationIconSource = obj.getApplicationIconSource(obj);
      } else {
        applicationIconSource = _modDef1884;
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