// === Module 11765: getApplicationCommandsIconSource ===

// Module 11765 (getApplicationCommandsIconSource)
import set from "set" /* 2 */;
import getAvatarURLDefault from "getAvatarURL" /* 1431 */;
import registerAssetDefault from "registerAsset" /* 1901 */;
import handleChanged from "handleChanged" /* 4822 */;
import TRUE_OPTION_NAME from "TRUE_OPTION_NAME" /* 4920 */;
import ApplicationCommandSectionType from "ApplicationCommandSectionType" /* 7236 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 10387 */;
import registerAssetDefault2 from "registerAsset" /* 11766 */;
import registerAssetDefault3 from "registerAsset" /* 11767 */;
import closure_4 from "map" /* 4821 */;

const DraftType = handleChanged.DraftType;
const BuiltInSectionId = TRUE_OPTION_NAME.BuiltInSectionId;
let result = set.fileFinishedImporting("modules/application_commands/native/ApplicationCommandUtils.tsx");

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
        let obj = getAvatarURLDefault;
        obj = { id: null, icon: null, bot: null, botIconFirst: true, guildMember: null };
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
    const obj = { channelId: null, disableSpoiler: true, onClose: null, onRemove: null, upload: null };
    obj[0] = channelId;
    obj[2] = fn;
    obj[3] = function onRemove() {
      channelId(name[9]).remove(channelId, upload.id, upload.SlashCommand);
      let found;
      if (closure_0 != null) {
        const activeCommand = obj2.props.activeCommand;
        if (activeCommand != null) {
          const options = activeCommand.options;
          if (options != null) {
            found = options.find((name) => name.name === closure_2);
          }
        }
      }
      if (null != found) {
        if (obj2 != null) {
          const result = obj2.insertOrJumpCommandOption(found, undefined, false, { displayText: "" });
        }
      }
    };
    obj[4] = upload;
    showUploadPreviewActionSheetDefault(obj);
  }
};