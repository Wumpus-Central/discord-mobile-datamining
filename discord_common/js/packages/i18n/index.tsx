// === Module 16443: getMessage ===

// Module 16443 (getMessage)
import obj132 from "obj132" /* 2 */;
import getMessages from "getMessages" /* 16444 */;
import format from "format" /* 16487 */;

const result = obj132.fileFinishedImporting("../discord_common/js/packages/i18n/index.tsx");

export default getMessages.I18N;
export const getMessage = format.getMessage;
export const setUpdateRules = format.setUpdateRules;
export const FormattedMessage = format.FormattedMessage;
export const I18N = getMessages.I18N;
export const getSystemLocale = getMessages.getSystemLocale;