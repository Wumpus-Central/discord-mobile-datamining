// === Module 11779: ApplicationCommandValidationUtils ===

// Module 11779 (ApplicationCommandValidationUtils)
import intl3 from "intl" /* 1126 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5788 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7034 */;
import ApplicationCommandOptionUtils from "ApplicationCommandOptionUtils" /* 8935 */;
import ApplicationCommandValidatorsDefault from "ApplicationCommandValidators" /* 11780 */;
import size from "module_2" /* 2 */;

function validateOptionContent(allowEmptyValues) {
  let channelId;
  let commandOrigin;
  let content;
  let guildId;
  let intl2;
  let option;
  ({ option, content, guildId, channelId, commandOrigin } = allowEmptyValues);
  allowEmptyValues = allowEmptyValues.allowEmptyValues;
  if (commandOrigin === undefined) {
    commandOrigin = ApplicationCommandTypes.CommandOrigin.CHAT;
  }
  let str = "";
  if (null != content) {
    const obj2 = { content };
    const obj = ApplicationCommandOptionUtils;
    const str3 = obj.getString(obj2, "content");
    str = str3.trim();
  }
  const required = option.required;
  if (null == content) {
    let obj4;
    if (required) {
      const obj3 = { success: false, error: intl2.string(intl3.t.JZJQL2) };
      intl2 = intl3.intl;
      obj4 = obj3;
    } else {
      obj4 = { success: true };
    }
    return obj4;
  } else if ("" === str) {
    let obj5;
    if (allowEmptyValues) {
      obj5 = { success: true };
    } else {
      const obj6 = { success: false, error: null };
      if (required) {
        const intl = intl3.intl;
        obj6.error = intl.string(intl3.t.JZJQL2);
        obj5 = obj6;
      } else {
        obj6.error = getValidationErrorText(option);
        obj5 = obj6;
      }
    }
    return obj5;
  } else {
    let first;
    if (content.length > 1) {
      first = { type: "text", text: str };
      const obj7 = { type: "text", text: str };
    } else {
      first = content[0];
    }
    const tmp8 = ApplicationCommandValidatorsDefault;
    const tmp15 = tmp8[option.type](first, option, channelId, guildId, commandOrigin);
    const tmp16 = tmp15.success || null != tmp15.error;
    if (!tmp16) {
      tmp15.error = getValidationErrorText(option);
    }
    return tmp15;
  }
}
const getValidationErrorText = ApplicationCommandConstants.getValidationErrorText;
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandValidationUtils.tsx");

export const getValidationResults = function getValidationResults(activeCommand, optionValues, guild_id, id, allowEmptyValues) {
  const obj = {};
  const options = activeCommand.options;
  if (null == options) {
    return obj;
  } else {
    for (const item10012 of options) {
      let obj2 = { option: item10012, content: optionValues[item10012.name], guildId: guild_id, channelId: id, allowEmptyValues };
      obj[item10012.name] = validateOptionContent(obj2);
      continue;
    }
    return obj;
  }
};
export { validateOptionContent };