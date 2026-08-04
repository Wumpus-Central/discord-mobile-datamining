// discord_app/modules/application_commands/native/ApplicationCommandUtils.tsx
import { DraftType } from "handleChanged";
import map from "map";
import { BuiltInSectionId } from "TRUE_OPTION_NAME";

let result = require("TRUE_OPTION_NAME").fileFinishedImporting("modules/application_commands/native/ApplicationCommandUtils.tsx");

export const getApplicationCommandsIconSource = function getApplicationCommandsIconSource(section, stateFromStores) {
  let application;
  if (null == section) {
    return null;
  } else {
    const id = section.id;
    if (BuiltInSectionId.BUILT_IN === id) {
      return importDefault(1416).makeSource(importDefault(11406));
    } else if (tmp10.FRECENCY === id) {
      return importDefault(1416).makeSource(importDefault(11407));
    } else {
      if (section.type === require(5709) /* ApplicationCommandSectionType */.ApplicationCommandSectionType.APPLICATION) {
        let obj = importDefault(1416);
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
        applicationIconSource = importDefault(1855);
      }
      return applicationIconSource;
    }
  }
};
export const openCommandAttachmentPreview = function openCommandAttachmentPreview(applicationCommandManager, channelId, name, fn) {
  let closure_0 = applicationCommandManager;
  const importDefault = channelId;
  const dependencyMap = name;
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
    importDefault(9684)(obj);
  }
};