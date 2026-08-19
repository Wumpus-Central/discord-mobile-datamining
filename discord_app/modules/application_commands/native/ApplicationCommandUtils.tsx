// discord_app/modules/application_commands/native/ApplicationCommandUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import getAvatarURLDefault from "../../../utils/AvatarUtils.tsx";
import registerAssetDefault from "../../../../_runtime/01902_registerAsset.js";
import handleChanged from "../../../stores/DraftStore.tsx";
import TRUE_OPTION_NAME from "../ApplicationCommandConstants.tsx";
import ApplicationCommandSectionType from "../ApplicationCommandTypes.tsx";
import showUploadPreviewActionSheetDefault from "../../media_uploads/native/showUploadPreviewActionSheet.tsx";
import registerAssetDefault2 from "../../../../_runtime/11393_registerAsset.js";
import registerAssetDefault3 from "../../../../_runtime/11394_registerAsset.js";
import map from "../../../stores/UploadAttachmentStore.tsx";

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