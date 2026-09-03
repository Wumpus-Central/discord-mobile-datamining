// === Module 17064: getMessage ===

// Module 17064 (getMessage)
import set from "set" /* 2 */;
import getMessages from "getMessages" /* 17065 */;
import format from "format" /* 17108 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/i18n/index.tsx");

export default getMessages.I18N;
export const getMessage = format.getMessage;
export const setUpdateRules = format.setUpdateRules;
export const FormattedMessage = format.FormattedMessage;
export const I18N = getMessages.I18N;
export const getSystemLocale = getMessages.getSystemLocale;