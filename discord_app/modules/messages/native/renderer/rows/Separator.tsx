// === Module 13148: generateSeparatorRowData ===

// Module 13148 (generateSeparatorRowData)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 709 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1470 */;
import Changeset from "Changeset" /* 7854 */;
import createCacheKey from "createCacheKey" /* 4478 */;

({ RowType: obj1, SeparatorType: c3 } = Changeset);
let closure_4 = createCacheKey.createNativeStyleProperties({ dayColor: ThemesDefault.colors.TEXT_MUTED, unreadTextColor: ThemesDefault.colors.MOBILE_CHAT_NEW_MESSAGE_TEXT, unreadBorderColor: ThemesDefault.colors.MOBILE_CHAT_NEW_MESSAGE_BORDER, summaryColor: ThemesDefault.colors.TEXT_BRAND });
let obj = { dayColor: ThemesDefault.colors.TEXT_MUTED, unreadTextColor: ThemesDefault.colors.MOBILE_CHAT_NEW_MESSAGE_TEXT, unreadBorderColor: ThemesDefault.colors.MOBILE_CHAT_NEW_MESSAGE_BORDER, summaryColor: ThemesDefault.colors.TEXT_BRAND };
const result = set.fileFinishedImporting("modules/messages/native/renderer/rows/Separator.tsx");

export const generateSeparatorRowData = function generateSeparatorRowData(text, theme) {
  ({ rowType, changeType } = text);
  const tmp = callback(theme);
  if (constants2.DAY === rowType) {
    let obj = { type: null, id: null, color: null, text: null, changeType: null };
    obj[0] = constants.SEPARATOR;
    obj[1] = rowType;
    obj[2] = tmp.dayColor;
    obj[3] = text.text;
    obj[4] = changeType;
    return obj;
  } else if (tmp2.UNREAD === rowType) {
    obj = { type: null, id: null, color: null, borderColor: null, changeType: null, text: null };
    obj[0] = constants.SEPARATOR;
    obj[1] = rowType;
    ({ unreadTextColor: obj3[2], unreadBorderColor: obj3[3] } = tmp);
    obj[4] = changeType;
    obj[5] = text.text;
    return obj;
  } else if (tmp2.SUMMARY === rowType) {
    const summary = text.summary;
    obj1 = { type: null, id: null, color: null, text: null, summary: null, isBeforeContent: null, changeType: null };
    obj1[0] = constants.SEPARATOR;
    obj1[1] = rowType;
    obj1[2] = tmp.summaryColor;
    obj1[3] = summary.topic;
    obj1[4] = summary;
    obj1[5] = text.isBeforeContent;
    obj1[6] = changeType;
    return obj1;
  } else {
    obj = isDiscordFrontendDevelopment;
    obj.assertNever(rowType);
  }
};