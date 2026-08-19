// === Module 11392: getApplicationCommandsIconSource ===

// Module 11392 (getApplicationCommandsIconSource)
import obj132 from "obj132" /* 2 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import registerAssetDefault from "registerAsset" /* 1902 */;
import handleChanged from "handleChanged" /* 4825 */;
import TRUE_OPTION_NAME from "TRUE_OPTION_NAME" /* 5246 */;
import ApplicationCommandSectionType from "ApplicationCommandSectionType" /* 5248 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 10267 */;
import registerAssetDefault2 from "registerAsset" /* 11393 */;
import registerAssetDefault3 from "registerAsset" /* 11394 */;
import map from "map" /* 4824 */;

const DraftType = handleChanged.DraftType;
const BuiltInSectionId = TRUE_OPTION_NAME.BuiltInSectionId;
let result = obj132.fileFinishedImporting("modules/application_commands/native/ApplicationCommandUtils.tsx");

export const getApplicationCommandsIconSource = function getApplicationCommandsIconSource(section, stateFromStores) {
  if (null == section) {
    return null;
  } else {
    const id = section.id;
    if (BuiltInSectionId.BUILT_IN === id) {
      return getAvatarURLDefault.makeSource(registerAssetDefault2);
    } else if (tmp10.FRECENCY === id) {
      return getAvatarURLDefault.makeSource(registerAssetDefault3);
    } else {
      if (section.type === ApplicationCommandSectionType.ApplicationCommandSectionType.APPLICATION) {
        const obj = { id: null, icon: null, bot: null, botIconFirst: true, guildMember: null };
        ({ id: obj2[0], icon: obj2[1], application } = section);
        let bot;
        if (application != null) {
          bot = application.bot;
        }
        obj[2] = bot;
        obj[4] = stateFromStores;
        let applicationIconSource = obj.getApplicationIconSource(obj);
      } else {
        applicationIconSource = registerAssetDefault;
      }
      return applicationIconSource;
    }
  }
};
export const openCommandAttachmentPreview = function openCommandAttachmentPreview(applicationCommandManager, channelId, name, fn) {
  closure_0 = applicationCommandManager;
  importDefault = channelId;
  dependencyMap = name;
  upload = upload.getUpload(channelId, name, upload.SlashCommand);
  if (null != upload) {
    let obj = { channelId: null, disableSpoiler: true, onClose: null, onRemove: null, upload: null };
    obj[0] = channelId;
    obj[2] = fn;
    obj[3] = function onRemove() {
      channelId(name[9]).remove(channelId, upload.id, upload.SlashCommand);
      let found;
      if (applicationCommandManager != null) {
        const activeCommand = applicationCommandManager.props.activeCommand;
        if (activeCommand != null) {
          const options = activeCommand.options;
          if (options != null) {
            found = options.find((item, index) => item.name === closure_2);
          }
        }
      }
      if (null != found) {
        if (applicationCommandManager != null) {
          const result = applicationCommandManager.insertOrJumpCommandOption(found, undefined, false, { displayText: "" });
        }
      }
      const obj = channelId(name[9]);
    };
    obj[4] = upload;
    showUploadPreviewActionSheetDefault(obj);
  }
};