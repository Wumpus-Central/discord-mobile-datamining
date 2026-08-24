// === Module 11384: validateOptionContent ===

// Module 11384 (validateOptionContent)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import TRUE_OPTION_NAME from "TRUE_OPTION_NAME" /* 5251 */;
import ApplicationCommandSectionType from "ApplicationCommandSectionType" /* 5253 */;
import getString from "getString" /* 10295 */;
import validateNumericOptionRangeDefault from "validateNumericOptionRange" /* 11385 */;

function validateOptionContent(allowEmptyValues) {
  ({ option, content, guildId, channelId, commandOrigin } = allowEmptyValues);
  if (commandOrigin === undefined) {
    commandOrigin = ApplicationCommandSectionType.CommandOrigin.CHAT;
  }
  let str = "";
  if (null != content) {
    let obj = getString;
    obj = { content: null };
    obj[0] = content;
    str = obj.getString(obj, "content").trim();
    const str3 = obj.getString(obj, "content");
  }
  const required = option.required;
  if (null == content) {
    if (required) {
      obj = { success: false, error: null };
      const intl2 = getSystemLocale.intl;
      obj[1] = intl2.string(getSystemLocale.t.JZJQL2);
      obj1 = obj;
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
        const intl = getSystemLocale.intl;
        obj3[1] = intl.string(getSystemLocale.t.JZJQL2);
        obj2 = obj3;
      } else {
        obj3[1] = getValidationErrorText(option);
        obj2 = obj3;
      }
    }
    return obj2;
  } else {
    if (content.length > 1) {
      const obj4 = { type: "text", text: null };
      obj4[1] = str;
      let first = obj4;
    } else {
      first = content[0];
    }
    const tmp8 = validateNumericOptionRangeDefault;
    const tmp15 = tmp8[option.type](first, option, channelId, guildId, commandOrigin);
    if (!tmp16) {
      tmp15.error = getValidationErrorText(option);
    }
    return tmp15;
  }
}
const getValidationErrorText = TRUE_OPTION_NAME.getValidationErrorText;
const result = set.fileFinishedImporting("modules/application_commands/ApplicationCommandValidationUtils.tsx");

export const getValidationResults = function getValidationResults(activeCommand, optionValues, guild_id, id, arg4) {
  let obj = {};
  const options = activeCommand.options;
  if (null == options) {
    return obj;
  } else {
    for (const item10012 of options) {
      let tmp3 = validateOptionContent;
      obj = { option: null, content: null, guildId: null, channelId: null, allowEmptyValues: null };
      obj[0] = item10012;
      obj[1] = arg1[item10012.name];
      obj[2] = arg2;
      obj[3] = arg3;
      obj[4] = arg4;
      obj[item10012.name] = validateOptionContent(obj);
      continue;
    }
    return obj;
  }
};
export { validateOptionContent };