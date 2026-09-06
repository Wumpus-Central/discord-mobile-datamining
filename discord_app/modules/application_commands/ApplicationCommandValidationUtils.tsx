// discord_app/modules/application_commands/ApplicationCommandValidationUtils.tsx
import util from "../../intl/index.native.tsx";
import ApplicationCommandConstants from "ApplicationCommandConstants.tsx";
import ApplicationCommandTypes from "ApplicationCommandTypes.tsx";
import ApplicationCommandOptionUtils from "ApplicationCommandOptionUtils.tsx";
import ApplicationCommandValidatorsDefault from "ApplicationCommandValidators.tsx";
import size from "../../../_runtime/metro/00002__.js";

function validateOptionContent(allowEmptyValues) {
  ({ option, content, guildId, channelId, commandOrigin } = allowEmptyValues);
  if (commandOrigin === undefined) {
    commandOrigin = ApplicationCommandTypes.CommandOrigin.CHAT;
  }
  let str = "";
  if (null != content) {
    let obj = { content };
    str = obj.getString(obj, "content").trim();
    const str3 = obj.getString(obj, "content");
  }
  const required = option.required;
  if (null == content) {
    if (required) {
      obj = { success: false, error: null };
      const intl2 = util.intl;
      obj.error = intl2.string(util.t.JZJQL2);
      let obj1 = obj;
    } else {
      obj1 = { success: true };
    }
    return obj1;
  } else if ("" === str) {
    if (allowEmptyValues.allowEmptyValues) {
      let obj2 = { success: true };
    } else {
      const obj3 = { success: false, error: null };
      if (required) {
        const intl = util.intl;
        obj3.error = intl.string(util.t.JZJQL2);
        obj2 = obj3;
      } else {
        obj3.error = getValidationErrorText(option);
        obj2 = obj3;
      }
    }
    return obj2;
  } else {
    if (content.length > 1) {
      const obj4 = { type: "text", text: str };
      let first = obj4;
    } else {
      first = content[0];
    }
    const tmp8 = ApplicationCommandValidatorsDefault;
    const tmp15 = tmp8[option.type](first, option, channelId, guildId, commandOrigin);
    if (!tmp16) {
      tmp15.error = getValidationErrorText(option);
    }
    return tmp15;
  }
}
const getValidationErrorText = ApplicationCommandConstants.getValidationErrorText;
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandValidationUtils.tsx");

export const getValidationResults = function getValidationResults(
  activeCommand,
  optionValues,
  guild_id,
  id,
  allowEmptyValues,
) {
  let obj = {};
  const options = activeCommand.options;
  if (null == options) {
    return obj;
  } else {
    for (const item10012 of options) {
      obj = {
        option: item10012,
        content: arg1[item10012.name],
        guildId: arg2,
        channelId: arg3,
        allowEmptyValues: arg4,
      };
      obj[item10012.name] = validateOptionContent(obj);
      continue;
    }
    return obj;
  }
};
export { validateOptionContent };
