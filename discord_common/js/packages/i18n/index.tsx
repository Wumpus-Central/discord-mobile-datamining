// === Module 16772: getMessage ===

// Module 16772 (getMessage)
import set from "set" /* 2 */;
import getMessages from "getMessages" /* 16773 */;
import format from "format" /* 16816 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/i18n/index.tsx");

export default getMessages.I18N;
export const getMessage = format.getMessage;
export const setUpdateRules = format.setUpdateRules;
export const FormattedMessage = format.FormattedMessage;
export const I18N = getMessages.I18N;
export const getSystemLocale = getMessages.getSystemLocale;