// === Module 5795: ApplicationCommandConstants ===

// Module 5795 (ApplicationCommandConstants)
import intl10 from "intl" /* 1126 */;
import Server from "Server" /* 1985 */;
import size from "module_2" /* 2 */;

const items = [{ name: "True", displayName: "True", value: "true" }, { name: "False", displayName: "False", value: "false" }];
const frozen = Object.freeze([]);
const frozen1 = Object.freeze([]);
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandConstants.tsx");

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
    const intl9 = intl10.intl;
    return intl9.string(intl10.t.xi5aah);
  } else {
    const type = option.type;
    if (Server.ApplicationCommandOptionType.BOOLEAN === type) {
      const intl8 = intl10.intl;
      return intl8.string(intl10.t.ATIx6O);
    } else if (Server.ApplicationCommandOptionType.CHANNEL === type) {
      const intl7 = intl10.intl;
      return intl7.string(intl10.t.Q0z2Gx);
    } else if (Server.ApplicationCommandOptionType.INTEGER === type) {
      const intl6 = intl10.intl;
      return intl6.string(intl10.t["d/9Rk4"]);
    } else if (Server.ApplicationCommandOptionType.NUMBER === type) {
      const intl5 = intl10.intl;
      return intl5.string(intl10.t["FDyk/V"]);
    } else if (Server.ApplicationCommandOptionType.ROLE === type) {
      const intl4 = intl10.intl;
      return intl4.string(intl10.t.vrRQn0);
    } else if (Server.ApplicationCommandOptionType.USER === type) {
      const intl3 = intl10.intl;
      return intl3.string(intl10.t.i2r7j5);
    } else if (Server.ApplicationCommandOptionType.MENTIONABLE === type) {
      const intl2 = intl10.intl;
      return intl2.string(intl10.t.I7imec);
    } else {
      const intl = intl10.intl;
      return intl.string(intl10.t.EkDo1i);
    }
  }
};