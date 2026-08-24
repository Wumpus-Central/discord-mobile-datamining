// === Module 16538: getMessage ===

// Module 16538 (getMessage)
import set from "set" /* 2 */;
import getMessages from "getMessages" /* 16539 */;
import format from "format" /* 16582 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/i18n/index.tsx");

export default getMessages.I18N;
export const getMessage = format.getMessage;
export const setUpdateRules = format.setUpdateRules;
export const FormattedMessage = format.FormattedMessage;
export const I18N = getMessages.I18N;
export const getSystemLocale = getMessages.getSystemLocale;