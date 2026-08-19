// === Module 5246: TRUE_OPTION_NAME ===

// Module 5246 (TRUE_OPTION_NAME)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;

const items = [{ name: "True", displayName: "True", value: "true" }, { name: "False", displayName: "False", value: "false" }];
const frozen = Object.freeze([]);
const frozen1 = Object.freeze([]);
const result = obj132.fileFinishedImporting("modules/application_commands/ApplicationCommandConstants.tsx");

export const TRUE_OPTION_NAME = "True";
export const FALSE_OPTION_NAME = "False";
export const BOOLEAN_CHOICES = items;
export const BuiltInSectionId = { BUILT_IN: "-1", FRECENCY: "-2" };
export const DISCOVERY_COMMANDS_QUERY_LIMIT_WEB = 10;
export const DISCOVERY_COMMANDS_QUERY_LIMIT_MOBILE = 5;
export const DISCOVERY_COMMANDS_QUERY_LIMIT = 5;
export const DISCOVERY_COMMANDS_FRECENCY_LIMIT = 5;
export const DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT = 25;
export const SUB_COMMAND_KEY_SEPARATOR = "\0";
export const APPLICATION_COMMAND_PERMISSIONS_LIMIT = 100;
export const MAX_SUBCOMMAND_LEVEL = 3;
export const CONTEXT_MENU_COMMANDS_QUERY_LIMIT = 10;
export const AUTOCOMPLETE_OPTION_DEBOUNCE_TIME = 500;
export const EMPTY_COMMANDS = frozen;
export const EMPTY_COMMANDS_SECTION = frozen1;
export const APPLICATION_USER_INSTALL_BETA_USER_LIMIT = 200;
export const getValidationErrorText = function getValidationErrorText(option) {
  if (null != option.choices) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t.xi5aah);
  } else {
    const type = option.type;
    if (PermissionOverwriteType.ApplicationCommandOptionType.BOOLEAN === type) {
      const intl8 = getSystemLocale.intl;
      return intl8.string(getSystemLocale.t.ATIx6O);
    } else if (PermissionOverwriteType.ApplicationCommandOptionType.CHANNEL === type) {
      const intl7 = getSystemLocale.intl;
      return intl7.string(getSystemLocale.t.Q0z2Gx);
    } else if (PermissionOverwriteType.ApplicationCommandOptionType.INTEGER === type) {
      const intl6 = getSystemLocale.intl;
      return intl6.string(getSystemLocale.t["d/9Rk4"]);
    } else if (PermissionOverwriteType.ApplicationCommandOptionType.NUMBER === type) {
      const intl5 = getSystemLocale.intl;
      return intl5.string(getSystemLocale.t["FDyk/V"]);
    } else if (PermissionOverwriteType.ApplicationCommandOptionType.ROLE === type) {
      const intl4 = getSystemLocale.intl;
      return intl4.string(getSystemLocale.t.vrRQn0);
    } else if (PermissionOverwriteType.ApplicationCommandOptionType.USER === type) {
      const intl3 = getSystemLocale.intl;
      return intl3.string(getSystemLocale.t.i2r7j5);
    } else if (PermissionOverwriteType.ApplicationCommandOptionType.MENTIONABLE === type) {
      const intl2 = getSystemLocale.intl;
      return intl2.string(getSystemLocale.t.I7imec);
    } else {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.EkDo1i);
    }
  }
};