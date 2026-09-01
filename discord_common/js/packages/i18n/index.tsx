// discord_common/js/packages/i18n/index.tsx
import set from "../../../../_runtime/00002_set.js";
import getMessages from "i18n.tsx";
import format from "parse.tsx";

const result = set.fileFinishedImporting("../discord_common/js/packages/i18n/index.tsx");

export default getMessages.I18N;
export const getMessage = format.getMessage;
export const setUpdateRules = format.setUpdateRules;
export const FormattedMessage = format.FormattedMessage;
export const I18N = getMessages.I18N;
export const getSystemLocale = getMessages.getSystemLocale;
